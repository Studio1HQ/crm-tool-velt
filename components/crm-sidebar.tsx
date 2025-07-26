"use client"

import { useState } from "react"
import {
  Zap,
  Bell,
  CheckSquare,
  FileText,
  Mail,
  BarChart3,
  Settings,
  ChevronRight,
  ChevronDown,
  Building2,
  Users,
  Handshake,
  Briefcase,
  Star,
  Rocket,
  TrendingUp,
  GitBranch,
  HelpCircle,
  Play,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

const mainNavItems = [
  { icon: Zap, label: "Quick actions", shortcut: "⌘K", active: false },
  { icon: Bell, label: "Notifications", active: false },
  { icon: CheckSquare, label: "Tasks", active: false },
  { icon: FileText, label: "Notes", active: false },
  { icon: Mail, label: "Emails", active: false },
  { icon: BarChart3, label: "Reports", active: false },
]

const automationItems = [
  { icon: GitBranch, label: "Workflows", active: false },
  { icon: Play, label: "Sequences", active: false },
]

const favoriteItems = [
  { icon: Rocket, label: "Onboarding pipeline", active: true },
  { icon: TrendingUp, label: "Top of funnel", active: false },
  { icon: Settings, label: "RevOps workflows", active: false },
]

const recordItems = [
  { icon: Building2, label: "Companies", active: true, count: 1439 },
  { icon: Users, label: "People", active: false },
  { icon: Briefcase, label: "Deals", active: false },
  { icon: Building2, label: "Workspaces", active: false },
  { icon: Handshake, label: "Partnerships", active: false },
]

const listItems = [{ icon: Star, label: "Strategic accounts", active: false }]

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [automationsOpen, setAutomationsOpen] = useState(true)
  const [favoritesOpen, setFavoritesOpen] = useState(true)
  const [recordsOpen, setRecordsOpen] = useState(true)
  const [listsOpen, setListsOpen] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  const NavItem = ({ icon: Icon, label, active, shortcut, count }: any) => (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start h-8 px-2 text-sm font-normal",
        active && "bg-accent text-accent-foreground font-medium",
        collapsed && "px-2 justify-center",
      )}
    >
      <Icon className={cn("h-4 w-4", !collapsed && "mr-2")} />
      {!collapsed && (
        <>
          <span className="flex-1 text-left">{label}</span>
          {shortcut && <span className="text-xs text-muted-foreground">{shortcut}</span>}
          {count && (
            <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
              {count}
            </Badge>
          )}
        </>
      )}
    </Button>
  )

  const SectionHeader = ({ label, isOpen, onToggle, children }: any) => (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start h-7 px-2 text-xs font-medium text-muted-foreground hover:text-foreground",
            collapsed && "px-2 justify-center",
          )}
        >
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{label}</span>
              {isOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
            </>
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1">{children}</CollapsibleContent>
    </Collapsible>
  )

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {/* Main Navigation */}
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>

          {/* Automations Section */}
          <div className="mt-4">
            <SectionHeader label="Automations" isOpen={automationsOpen} onToggle={setAutomationsOpen}>
              {automationItems.map((item) => (
                <div key={item.label} className="ml-4">
                  <NavItem {...item} />
                </div>
              ))}
            </SectionHeader>
          </div>

          {/* Favorites Section */}
          <div className="mt-4">
            <SectionHeader label="Favorites" isOpen={favoritesOpen} onToggle={setFavoritesOpen}>
              {favoriteItems.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </SectionHeader>
          </div>

          {/* Records Section */}
          <div className="mt-4">
            <SectionHeader label="Records" isOpen={recordsOpen} onToggle={setRecordsOpen}>
              {recordItems.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </SectionHeader>
          </div>

          {/* Lists Section */}
          <div className="mt-4">
            <SectionHeader label="Lists" isOpen={listsOpen} onToggle={setListsOpen}>
              {listItems.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </SectionHeader>
          </div>
        </nav>
      </div>

      {/* Bottom Help Section */}
      <div className="border-t p-2">
        <NavItem icon={HelpCircle} label="Help and first steps" active={false} />
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={cn("hidden md:flex border-r bg-muted/40 transition-all duration-300", collapsed ? "w-12" : "w-64")}
      >
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-16 left-4 z-40 bg-background border">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}
