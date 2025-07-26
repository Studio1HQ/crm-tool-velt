"use client"

import { useState } from "react"
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

const users = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah@company.com",
    avatar: "/placeholder.svg?height=32&width=32",
    online: true,
    current: true,
  },
  {
    id: 2,
    name: "Mike Johnson",
    email: "mike@company.com",
    avatar: "/placeholder.svg?height=32&width=32",
    online: true,
    current: false,
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@company.com",
    avatar: "/placeholder.svg?height=32&width=32",
    online: false,
    current: false,
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    email: "alex@company.com",
    avatar: "/placeholder.svg?height=32&width=32",
    online: true,
    current: false,
  },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [currentUser, setCurrentUser] = useState(users.find((u) => u.current) || users[0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleUserSwitch = (user: (typeof users)[0]) => {
    setCurrentUser(user)
    // Update current user logic here
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

        {/* Settings */}
        <Button variant="ghost" size="icon" className="h-9 w-9 hidden sm:flex">
          <Settings className="h-4 w-4" />
        </Button>

        {/* User Avatars Stack (hidden on mobile) */}
        <div className="hidden lg:flex items-center -space-x-2 mr-2">
          {users.slice(0, 3).map((user, index) => (
            <Avatar
              key={user.id}
              className={`h-8 w-8 border-2 border-background relative ${index === 0 ? "z-30" : index === 1 ? "z-20" : "z-10"}`}
            >
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-xs">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
              {user.online && (
                <Circle className="absolute -bottom-0.5 -right-0.5 h-3 w-3 fill-green-500 text-green-500 border border-background" />
              )}
            </Avatar>
          ))}
          {users.length > 3 && (
            <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium z-0">
              +{users.length - 3}
            </div>
          )}
        </div>

        {/* Current User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 px-2 flex items-center space-x-2">
              <Avatar className="h-7 w-7 relative">
                <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                <AvatarFallback className="text-xs">
                  {currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
                {currentUser.online && (
                  <Circle className="absolute -bottom-0.5 -right-0.5 h-3 w-3 fill-green-500 text-green-500 border border-background" />
                )}
              </Avatar>
              <ChevronDown className="h-4 w-4 hidden sm:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium">Switch User</p>
              <p className="text-xs text-muted-foreground">Currently signed in as {currentUser.name}</p>
            </div>
            <DropdownMenuSeparator />
            {users.map((user) => (
              <DropdownMenuItem
                key={user.id}
                onClick={() => handleUserSwitch(user)}
                className={`flex items-center space-x-3 p-3 ${user.id === currentUser.id ? "bg-accent" : ""}`}
              >
                <Avatar className="h-8 w-8 relative">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="text-xs">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                  {user.online && (
                    <Circle className="absolute -bottom-0.5 -right-0.5 h-3 w-3 fill-green-500 text-green-500 border border-background" />
                  )}
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Circle
                    className={`h-2 w-2 ${user.online ? "fill-green-500 text-green-500" : "fill-gray-400 text-gray-400"}`}
                  />
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    {user.online ? "Online" : "Offline"}
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
