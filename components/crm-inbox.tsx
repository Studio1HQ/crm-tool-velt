"use client"

import { useState } from "react"
import { Navbar } from "./navbar"
import { Sidebar } from "./crm-sidebar"
import { MainTable } from "./main-table"
import { DealDetailPane } from "./deal-detail-pane"

export function CRMInbox() {
  const [selectedDeal, setSelectedDeal] = useState<any>(null)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="flex-1 flex overflow-hidden">
          <MainTable onSelectDeal={setSelectedDeal} />
          {selectedDeal && <DealDetailPane deal={selectedDeal} onClose={() => setSelectedDeal(null)} />}
        </div>
      </div>
    </div>
  )
}
