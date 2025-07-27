"use client"

import dynamic from 'next/dynamic'

const VeltPresence = dynamic(
  () => import('@veltdev/react').then(mod => ({ default: mod.VeltPresence })),
  {
    ssr: false,
    loading: () => <div className="h-8 w-20 bg-muted animate-pulse rounded-full" />
  }
)

function VeltPresenceWrapper() {
  return (
    <div className="flex items-center">
      <VeltPresence />
      {/* Presence indicator */}
      <div className="text-xs text-muted-foreground ml-2 border border-dashed border-gray-300 px-2 py-1 rounded">
        Presence
      </div>
    </div>
  )
}

export { VeltPresenceWrapper as DynamicVeltPresence }