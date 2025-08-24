"use client"

import { useState } from "react"
import { Plus, Settings, Download, ChevronDown, Sparkles, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { DynamicVeltCommentTool } from './velt-comments-dynamic'

interface MainTableProps {
  onSelectDeal: (deal: any) => void
}

const companies = [
  {
    id: 1,
    name: "Vercel",
  logo: "/vercel.svg",
    domain: "vercel.com",
    deals: [
  { name: "Vercel", avatar: "/vercel.svg" },
  { name: "Vercel - Expansion", avatar: "/vercel.svg" },
    ],
    icpFit: "Excellent",
    icpColor: "text-purple-600 bg-purple-50 dark:bg-purple-950 dark:text-purple-400",
    estimatedArr: "$100M-$250M",
    connectionStrength: "Very strong",
    connectionColor: "text-green-600",
  },
  {
    id: 2,
    name: "DigitalOcean",
  logo: "/digitalocean.svg",
    domain: "digitalocean.com",
  deals: [{ name: "DigitalOcean", avatar: "/digitalocean.svg" }],
    icpFit: "Medium",
    icpColor: "text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400",
    estimatedArr: "$500M-$1B",
    connectionStrength: "Strong",
    connectionColor: "text-green-500",
  },
  {
    id: 3,
    name: "GitHub",
  logo: "/github.svg",
    domain: "github.com",
  deals: [{ name: "GitHub - x20 Enterprise", avatar: "/github.svg" }],
    icpFit: "Good",
    icpColor: "text-green-600 bg-green-50 dark:bg-green-950 dark:text-green-400",
    estimatedArr: "$1B-$10B",
    connectionStrength: "Very strong",
    connectionColor: "text-green-600",
  },
  {
    id: 4,
    name: "Stripe",
  logo: "/stripe.svg",
    domain: "stripe.com",
  deals: [{ name: "Stripe", avatar: "/stripe.svg" }],
    icpFit: "Good",
    icpColor: "text-green-600 bg-green-50 dark:bg-green-950 dark:text-green-400",
    estimatedArr: "$1B-$10B",
    connectionStrength: "Very strong",
    connectionColor: "text-green-600",
  },
  {
    id: 5,
    name: "Figma",
  logo: "/figma.svg",
    domain: "figma.com",
  deals: [{ name: "Figma", avatar: "/figma.svg" }],
    icpFit: "Good",
    icpColor: "text-green-600 bg-green-50 dark:bg-green-950 dark:text-green-400",
    estimatedArr: "$500M-$1B",
    connectionStrength: "Very strong",
    connectionColor: "text-green-600",
  },
]

export function MainTable({ onSelectDeal }: MainTableProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const handleRowSelect = (id: number) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]))
  }

  const handleSelectAll = () => {
    setSelectedRows(selectedRows.length === companies.length ? [] : companies.map((c) => c.id))
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b bg-background p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold">Companies</h1>
            <Button variant="ghost" size="sm" className="text-green-600">
              <Sparkles className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Top companies</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="flex-1 sm:flex-none bg-transparent">
              <Settings className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">View settings</span>
            </Button>
            <Button variant="outline" size="sm" className="flex-1 sm:flex-none bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Import / Export</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span className="hidden sm:inline">Sorted by</span>
            <Badge variant="secondary">Last email interaction</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">
              <Filter className="h-3 w-3 mr-1 sm:hidden" />
              <span className="hidden sm:inline">Advanced filter</span>
              <span className="sm:hidden">Filter</span>
              <span className="ml-1 bg-muted-foreground/20 rounded px-1">3</span>
            </Badge>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <ScrollArea className="h-full">
          <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox checked={selectedRows.length === companies.length} onCheckedChange={handleSelectAll} />
                </TableHead>
                <TableHead className="min-w-[200px]">
                  <div className="flex items-center space-x-1">
                    <span>Company</span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </TableHead>
                <TableHead className="min-w-[150px]">
                  <div className="flex items-center space-x-1">
                    <span>Domains</span>
                  </div>
                </TableHead>
                <TableHead className="min-w-[200px] hidden lg:table-cell">
                  <div className="flex items-center space-x-1">
                    <span>Associated deals</span>
                  </div>
                </TableHead>
                <TableHead className="min-w-[120px]">
                  <div className="flex items-center space-x-1">
                    <span className="hidden sm:inline">ICP Fit</span>
                    <span className="sm:hidden">ICP</span>
                    <Sparkles className="h-3 w-3 text-purple-500" />
                  </div>
                </TableHead>
                <TableHead className="min-w-[150px] hidden md:table-cell">
                  <div className="flex items-center space-x-1">
                    <span>Estimated ARR</span>
                    <Sparkles className="h-3 w-3 text-purple-500" />
                  </div>
                </TableHead>
                <TableHead className="min-w-[150px] hidden xl:table-cell">
                  <div className="flex items-center space-x-1">
                    <span>Connection strength</span>
                    <Sparkles className="h-3 w-3 text-purple-500" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow
                  key={company.id}
                  className="hover:bg-muted/50 cursor-pointer group"
                  onClick={() => onSelectDeal(company)}
                  data-velt-target-comment-element-id={`company-${company.id}`}
                  id={`company-${company.id}`}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(company.id)}
                      onCheckedChange={() => handleRowSelect(company.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={company.logo || "/placeholder.svg"} alt={company.name} />
                          <AvatarFallback className="text-xs">{company.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{company.name}</span>
                      </div>
                      <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <DynamicVeltCommentTool targetElementId={`company-${company.id}`} />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800"
                    >
                      {company.domain}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="flex items-center space-x-2">
                      {company.deals.map((deal, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          <Avatar className="h-4 w-4">
                            <AvatarImage src={deal.avatar || "/placeholder.svg"} alt={deal.name} />
                            <AvatarFallback className="text-xs">{deal.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground truncate max-w-[120px]">{deal.name}</span>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Badge className={cn("font-medium", company.icpColor)}>{company.icpFit}</Badge>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <span className="font-medium text-sm">{company.estimatedArr}</span>
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full",
                            company.connectionStrength === "Very strong"
                              ? "bg-green-500"
                              : company.connectionStrength === "Strong"
                                ? "bg-green-400"
                                : "bg-yellow-400",
                          )}
                        />
                        <span className={cn("text-sm font-medium", company.connectionColor)}>
                          {company.connectionStrength}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Footer */}
      <div className="border-t bg-background p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">1,439 count</span>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <Button key={index} variant="ghost" size="sm" className="text-muted-foreground">
                <Plus className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Add calculation</span>
                <span className="sm:hidden">Add</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
