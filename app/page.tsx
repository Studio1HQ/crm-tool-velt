"use client"

import { CRMInbox } from "@/components/crm-inbox"
import { VeltAuth } from "@/components/velt-auth"

export default function Home() {
  return (
    <>
      <VeltAuth />
      <CRMInbox />
    </>
  )
}
