"use client"

import dynamic from 'next/dynamic'

const VeltPresence = dynamic(
  () => import('@veltdev/react').then(mod => ({ default: mod.VeltPresence })),
  {
    ssr: false,
    loading: () => <div className="h-8 w-20 bg-muted animate-pulse rounded-full" />
  }
)

export { VeltPresence as DynamicVeltPresence }