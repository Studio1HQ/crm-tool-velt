"use client"

import { VeltProvider } from '@veltdev/react'
import React from 'react'

interface VeltWrapperProps {
  children: React.ReactNode
}

export function VeltWrapper({ children }: VeltWrapperProps) {
  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY!}>
      {children}
    </VeltProvider>
  )
}