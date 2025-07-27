"use client"

import { useVeltClient } from '@veltdev/react'
import { useEffect } from 'react'
import { getOrCreateUser } from '@/lib/user-manager'

export function VeltAuth() {
  const { client } = useVeltClient()

  useEffect(() => {
    if (!client) return

    const user = getOrCreateUser()
    if (!user) return

    // Identify the user with Velt
    client.identify(user)

    // Set document for this CRM session
    client.setDocument('crm-dashboard', {
      documentName: 'CRM Dashboard'
    })
  }, [client])

  return null
}