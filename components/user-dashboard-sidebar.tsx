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
import { Briefcase, Home, PlusCircle, MessageSquare, Bell, Settings, LogOut, User, CreditCard } from "lucide-react"

export function UserDashboardSidebar() {
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
              <SidebarMenuButton asChild isActive={isActive("/dashboard/user")}>
                <Link href="/dashboard/user">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/user/post-job")}>
                <Link href="/dashboard/user/post-job">
                  <PlusCircle className="h-4 w-4" />
                  <span>Post a Job</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/user/jobs")}>
                <Link href="/dashboard/user/jobs">
                  <Briefcase className="h-4 w-4" />
                  <span>My Jobs</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/user/messages")}>
                <Link href="/dashboard/user/messages">
                  <MessageSquare className="h-4 w-4" />
                  <span>Messages</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/user/notifications")}>
                <Link href="/dashboard/user/notifications">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/user/payments")}>
                <Link href="/dashboard/user/payments">
                  <CreditCard className="h-4 w-4" />
                  <span>Payments</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/user/profile")}>
                <Link href="/dashboard/user/profile">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/user/settings")}>
                <Link href="/dashboard/user/settings">
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
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">john@example.com</span>
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

