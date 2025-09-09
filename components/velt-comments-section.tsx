"use client"

import { useEffect, useState } from "react"
import { DynamicVeltInlineCommentsSection } from './velt-comments-dynamic'

interface VeltCommentsSectionProps {
  companyId: number
}

export function VeltCommentsSection({ companyId }: VeltCommentsSectionProps) {
  const targetElementId = `company-${companyId}`

  return (
    <div className="min-h-full overflow-scroll">
      <DynamicVeltInlineCommentsSection 
        targetElementId={targetElementId}
        multiThread={true}
      />
    </div>
  )
}
