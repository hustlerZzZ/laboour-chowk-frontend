"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, Home, Search, MessageSquare, Bell, Settings, LogOut, User, CreditCard, Star } from "lucide-react"

export function LaborerDashboardSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b">
          <div className="flex items-center gap-2 px-2 py-4">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">WorkConnect</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/laborer")}>
                <Link href="/dashboard/laborer">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/laborer/find-jobs")}>
                <Link href="/dashboard/laborer/find-jobs">
                  <Search className="h-4 w-4" />
                  <span>Find Jobs</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/laborer/my-jobs")}>
                <Link href="/dashboard/laborer/my-jobs">
                  <Briefcase className="h-4 w-4" />
                  <span>My Jobs</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/laborer/messages")}>
                <Link href="/dashboard/laborer/messages">
                  <MessageSquare className="h-4 w-4" />
                  <span>Messages</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/laborer/notifications")}>
                <Link href="/dashboard/laborer/notifications">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/laborer/reviews")}>
                <Link href="/dashboard/laborer/reviews">
                  <Star className="h-4 w-4" />
                  <span>Reviews</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/laborer/earnings")}>
                <Link href="/dashboard/laborer/earnings">
                  <CreditCard className="h-4 w-4" />
                  <span>Earnings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/laborer/profile")}>
                <Link href="/dashboard/laborer/profile">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/laborer/settings")}>
                <Link href="/dashboard/laborer/settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Sarah Thompson</span>
                <span className="text-xs text-muted-foreground">sarah@example.com</span>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Log Out</span>
            </Link>
          </div>
        </SidebarFooter>
        <SidebarTrigger className="absolute right-4 top-4 md:hidden" />
      </Sidebar>
    </SidebarProvider>
  )
}

