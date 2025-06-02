<script setup lang="ts">
import { CirclePlus, Home, Search } from 'lucide-vue-next'
import { computed } from 'vue'
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

const menuItems = [
  {
    to: '/dashboard',
    icon: Home,
    label: 'Dashboard',
    show: true,
  },
  {
    to: '/jobs',
    icon: Search,
    label: 'Jobs',
    show: true,
  },
  {
    to: '/post-job',
    icon: CirclePlus,
    label: 'Add Job',
    show: () => isEmployer.value,
  },
]

const visibleMenuItems = computed(() => {
  return menuItems.filter(item =>
    typeof item.show === 'function' ? item.show() : item.show,
  )
})
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
            <SidebarMenuItem
              v-for="item in visibleMenuItems"
              :key="item.to"
            >
              <SidebarMenuButton as-child>
                <RouterLink :to="item.to">
                  <component :is="item.icon" />
                  <span>{{ item.label }}</span>
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
