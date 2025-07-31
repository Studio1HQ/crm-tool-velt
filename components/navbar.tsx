"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Search, Settings, Bell, ChevronDown, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { DynamicVeltPresence } from './velt-presence-dynamic'
import { DynamicVeltSidebarButton } from './velt-comments-dynamic'
import { getOrCreateUser, switchUser, getAvailableUsers } from '@/lib/user-manager'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [availableUsers, setAvailableUsers] = useState<any[]>([])

  useEffect(() => {
    // Initialize user on client side only
    const user = getOrCreateUser()
    setCurrentUser(user)
    
    // Get available users for switching
    const users = getAvailableUsers()
    setAvailableUsers(users)
  }, [])

  const handleUserSwitch = async () => {
    const newUser = switchUser()
    if (newUser) {
      setCurrentUser(newUser)
      // Update available users list
      const users = getAvailableUsers()
      setAvailableUsers(users)
      
      // Small delay to ensure state is updated
      await new Promise(resolve => setTimeout(resolve, 50))
      
      // Trigger Velt user switch event
      window.dispatchEvent(new CustomEvent('velt-user-switch'))
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <nav className="h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-4">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">B</span>
          </div>
          <span className="font-semibold text-lg hidden sm:block">Basepoint</span>
        </div>
      </div>

      {/* Center - Search (hidden on mobile) */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search companies, deals, contacts..."
            className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
          />
        </div>
      </div>

      {/* Right side - Controls */}
      <div className="flex items-center space-x-2">
        {/* Mobile Search Button */}
        <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden">
          <Search className="h-4 w-4" />
        </Button>

        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="h-9 w-9 relative hidden sm:flex">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">3</Badge>
        </Button>

        {/* Comments Sidebar */}
        <div className="hidden sm:flex">
          <DynamicVeltSidebarButton />
        </div>

        {/* Settings */}
        <Button variant="ghost" size="icon" className="h-9 w-9 hidden sm:flex">
          <Settings className="h-4 w-4" />
        </Button>

        {/* Velt Presence Component - Shows online users */}
        <div className="flex items-center mr-2 min-w-[80px]">
          <DynamicVeltPresence />
        </div>

        {/* Current User Dropdown */}
        {currentUser && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 px-2 flex items-center space-x-2">
                <Avatar className="h-7 w-7 relative">
                  <AvatarImage src={currentUser.photoUrl || "/placeholder.svg"} alt={currentUser.name} />
                  <AvatarFallback className="text-xs">
                    {currentUser.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                  <Circle className="absolute -bottom-0.5 -right-0.5 h-3 w-3 fill-green-500 text-green-500 border border-background" />
                </Avatar>
                <ChevronDown className="h-4 w-4 hidden sm:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium">User Switching</p>
                <p className="text-xs text-muted-foreground">Switch between users</p>
              </div>
              <DropdownMenuSeparator />
              
              {/* Current User */}
              <div className="px-2 py-1">
                <p className="text-xs font-medium text-muted-foreground mb-1">Current User</p>
              </div>
              <DropdownMenuItem className="flex items-center space-x-3 p-3">
                <Avatar className="h-8 w-8 relative">
                  <AvatarImage src={currentUser.photoUrl || "/placeholder.svg"} alt={currentUser.name} />
                  <AvatarFallback className="text-xs">
                    {currentUser.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                  <Circle className="absolute -bottom-0.5 -right-0.5 h-3 w-3 fill-green-500 text-green-500 border border-background" />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{currentUser.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{currentUser.email}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                  <span className="text-xs text-muted-foreground hidden sm:inline">Active</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              
              {/* Switch to Another User */}
              <div className="px-2 py-1">
                <p className="text-xs font-medium text-muted-foreground mb-1">Switch User</p>
              </div>
              {availableUsers.length > 1 && (
                <DropdownMenuItem 
                  className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-accent"
                  onClick={handleUserSwitch}
                >
                  <Avatar className="h-8 w-8 relative">
                    <AvatarImage src={availableUsers[1].photoUrl || "/placeholder.svg"} alt={availableUsers[1].name} />
                    <AvatarFallback className="text-xs">
                      {availableUsers[1].name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                    <Circle className="absolute -bottom-0.5 -right-0.5 h-3 w-3 fill-gray-400 text-gray-400 border border-background" />
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{availableUsers[1].name}</p>
                    <p className="text-xs text-muted-foreground truncate">{availableUsers[1].email}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Circle className="h-2 w-2 fill-gray-400 text-gray-400" />
                    <span className="text-xs text-muted-foreground hidden sm:inline">Switch</span>
                  </div>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  )
}
