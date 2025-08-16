import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Navigation data for Tutor Monkey
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "#",
          isActive: true,
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Students",
      url: "#",
      items: [
        {
          title: "All Students",
          url: "#",
        },
        {
          title: "Active Sessions",
          url: "#",
        },
        {
          title: "Progress Tracking",
          url: "#",
        },
      ],
    },
    {
      title: "Tutors",
      url: "#",
      items: [
        {
          title: "Team Members",
          url: "#",
        },
        {
          title: "Schedules",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
      ],
    },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "1-on-1 Sessions",
          url: "#",
        },
        {
          title: "Group Classes",
          url: "#",
        },
        {
          title: "Special Programs",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Preferences",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-gray-200">
        <div className="flex items-center px-4 py-3">
          <div className="text-xl font-semibold text-gray-900">Tutor Monkey</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-2">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={item.isActive}
                      className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
