"use client"

import dynamic from 'next/dynamic'

const VeltCursor = dynamic(
  () => import('@veltdev/react').then(mod => ({ default: mod.VeltCursor })),
  {
    ssr: false,
    loading: () => null
  }
)

function VeltCursorWrapper() {
  return (
    <VeltCursor 
      avatarMode={false}
      inactivityTime={300000}
    />
  )
}

export { VeltCursorWrapper as DynamicVeltCursor }