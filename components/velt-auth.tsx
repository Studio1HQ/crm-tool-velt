"use client"

import { useVeltClient } from '@veltdev/react'
import { useEffect, useState, useRef } from 'react'
import { useTheme } from 'next-themes'
import { getOrCreateUser } from '@/lib/user-manager'
import { DynamicVeltComments, DynamicVeltCommentsSidebar } from './velt-comments-dynamic'

export function VeltAuth() {
  const { client } = useVeltClient()
  const { theme } = useTheme()
  const [userSwitchTrigger, setUserSwitchTrigger] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)
  const initializationRef = useRef(false)

  useEffect(() => {
    if (!client) return

    const initializeUser = async () => {
      // Prevent multiple simultaneous initializations
      if (initializationRef.current) return
      initializationRef.current = true

      try {
        const user = getOrCreateUser()
        if (!user) return

        // Add a small delay to ensure clean state
        if (userSwitchTrigger > 0) {
          await new Promise(resolve => setTimeout(resolve, 100))
        }

        // Identify the user with Velt with forceReset for user switching
        await client.identify(user, { forceReset: userSwitchTrigger > 0 })

        // Set document for this CRM session
        await client.setDocument('crm-dashboard', {
          documentName: 'CRM Dashboard'
        })

        // Ensure Velt uses the same dark mode as the app
        try {
          // client.setDarkMode accepts a boolean
          await client.setDarkMode?.(theme === 'dark')
        } catch (e) {
          // non-fatal
          console.warn('Failed to set Velt dark mode', e)
        }

        setIsInitialized(true)
      } catch (error) {
        console.error('Velt initialization error:', error)
      } finally {
        initializationRef.current = false
      }
    }

    setIsInitialized(false)
    initializeUser()
  }, [client, userSwitchTrigger])

  // Listen for user switch events
  useEffect(() => {
    const handleUserSwitch = () => {
      setUserSwitchTrigger(prev => prev + 1)
    }

    window.addEventListener('velt-user-switch', handleUserSwitch)
    return () => window.removeEventListener('velt-user-switch', handleUserSwitch)
  }, [])

  // Keep Velt dark mode in sync when theme changes
  useEffect(() => {
    if (!client) return
    try {
      client.setDarkMode?.(theme === 'dark')
    } catch (e) {
      console.warn('Failed to update Velt dark mode', e)
    }
  }, [client, theme])

  // Only render Velt components after successful initialization
  if (!isInitialized) {
    return null
  }

  return (
    <>
      <DynamicVeltComments popoverMode={true} textMode={false} />
      <DynamicVeltCommentsSidebar />
    </>
  )
}