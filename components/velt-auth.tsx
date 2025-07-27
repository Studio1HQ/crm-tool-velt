"use client"

import { useVeltClient } from '@veltdev/react'
import { useEffect } from 'react'

const generateRandomUser = () => {
  const names = [
    'Alex Chen', 'Sarah Johnson', 'Mike Rodriguez', 'Emily Davis', 'Jordan Smith',
    'Taylor Brown', 'Casey Wilson', 'Morgan Lee', 'Riley Thompson', 'Avery Miller',
    'Parker Jones', 'Quinn Davis', 'Cameron White', 'Blake Anderson', 'Sage Martinez'
  ]
  
  const companies = [
    'TechCorp', 'InnovateLab', 'DataFlow Inc', 'CloudSync', 'NexGen Solutions',
    'DigitalEdge', 'FutureWorks', 'SmartSystems', 'CodeCraft', 'VisionTech'
  ]

  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomCompany = companies[Math.floor(Math.random() * companies.length)]
  const userId = `user_${Math.random().toString(36).substr(2, 9)}`
  
  return {
    userId,
    name: randomName,
    email: `${randomName.toLowerCase().replace(' ', '.')}@${randomCompany.toLowerCase()}.com`,
    organizationId: 'crm-tool-org',
    photoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`
  }
}

export function VeltAuth() {
  const { client } = useVeltClient()

  useEffect(() => {
    if (!client) return

    // Check if user is already stored in localStorage
    let userData = localStorage.getItem('velt_user')
    let user

    if (userData) {
      user = JSON.parse(userData)
    } else {
      // Generate new random user and store in localStorage
      user = generateRandomUser()
      localStorage.setItem('velt_user', JSON.stringify(user))
    }

    // Identify the user with Velt
    client.identify(user)

    // Set document for this CRM session
    client.setDocument('crm-dashboard', {
      documentName: 'CRM Dashboard'
    })
  }, [client])

  return null
}