"use client"

import { X, Mail, Phone, Calendar, MessageSquare, Paperclip, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useState, useEffect } from "react"

interface DealDetailPaneProps {
  deal: any
  onClose: () => void
}

export function DealDetailPane({ deal, onClose }: DealDetailPaneProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const DetailContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{deal.name}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={deal.logo || "/placeholder.svg"} alt={deal.name} />
            <AvatarFallback>{deal.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{deal.name}</p>
            <p className="text-sm text-muted-foreground">{deal.domain}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" className="flex-1 sm:flex-none bg-transparent">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
          <Button size="sm" variant="outline" className="flex-1 sm:flex-none bg-transparent">
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button size="sm" variant="outline" className="flex-1 sm:flex-none bg-transparent">
            <Calendar className="h-4 w-4 mr-2" />
            Meet
          </Button>
        </div>
      </div>

      {/* Content */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {/* Key Details */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Key Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">ICP Fit</span>
                <Badge className={deal.icpColor}>{deal.icpFit}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Estimated ARR</span>
                <span className="text-sm font-medium">{deal.estimatedArr}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Connection Strength</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-green-600">{deal.connectionStrength}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Associated Deals */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Associated Deals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {deal.deals.map((dealItem: any, index: number) => (
                <div key={index} className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={dealItem.avatar || "/placeholder.svg"} alt={dealItem.name} />
                    <AvatarFallback className="text-xs">{dealItem.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{dealItem.name}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Activity Timeline */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Email sent to contact</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Deal stage updated</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Meeting scheduled</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments */}
          {deal.hasComments && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Comments ({deal.commentCount})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex space-x-3">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">SC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">Great potential for expansion deal. Follow up next week.</p>
                    <p className="text-xs text-muted-foreground">Sarah Chen • 2 hours ago</p>
                  </div>
                </div>
                <Separator />
                <div className="flex space-x-3">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">MJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">Confirmed budget approval. Moving to proposal stage.</p>
                    <p className="text-xs text-muted-foreground">Mike Johnson • 1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </ScrollArea>

      {/* Footer Actions */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <Button size="sm" className="flex-1">
            <MessageSquare className="h-4 w-4 mr-2" />
            Add Comment
          </Button>
          <Button size="sm" variant="outline">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet open={!!deal} onOpenChange={() => onClose()}>
        <SheetContent side="right" className="w-full sm:w-96 p-0">
          <DetailContent />
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div className="w-96 border-l bg-background">
      <DetailContent />
    </div>
  )
}
