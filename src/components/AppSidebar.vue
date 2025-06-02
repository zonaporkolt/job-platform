<script setup lang="ts">
import { CirclePlus, Home, Search } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'

import { useCurrentUser } from '@/composables/useCurrentUser'

const router = useRouter()
const { logout, isEmployer } = useCurrentUser()

function handleSignOut() {
  logout()
  router.push('/')
}
</script>

<template>
  <SidebarProvider default-open>
    <Sidebar class="w-64 bg-white border-r">
      <SidebarHeader class="p-4 border-b">
        <h1 class="text-lg md:text-2xl font-bold flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" class="h-10 w-10 md:h-16 md:w-16">
          Job Portal
        </h1>
      </SidebarHeader>

      <SidebarContent class="p-3">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <RouterLink to="/dashboard">
                  <Home />
                  <span>Dashboard</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <RouterLink to="/jobs">
                  <Search />
                  <span>Jobs</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem v-if="isEmployer">
              <SidebarMenuButton as-child>
                <RouterLink to="/post-job">
                  <CirclePlus />
                  <span>Add Job</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter class="p-4 border-t">
        <Button @click="handleSignOut">
          Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  </SidebarProvider>
</template>
