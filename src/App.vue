<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/composables/useCurrentUser'

const router = useRouter()
const { user, logout } = useCurrentUser()

function handleSignOut() {
  logout()
  router.push('/')
}
</script>

<template>
  <div
    id="app"
    class="min-h-screen flex flex-col bg-gray-50 text-gray-900"
  >
    <header class="p-2 md:p-4 bg-white shadow-md flex justify-between items-center">
      <h1 class="text-lg md:text-2xl font-bold flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" class="h-10 w-10 md:h-16 md:w-16">
        Job Portal
      </h1>
      <nav v-if="user">
        <RouterLink
          to="/dashboard"
          class="text-sm md:text-base font-medium mr-4"
        >
          Home
        </RouterLink>
        <Button @click="handleSignOut">
          Sign Out
        </Button>
      </nav>
    </header>

    <main class="flex-1 p-4 md:p-6 lg:p-8">
      <router-view />
    </main>

    <footer class="p-4 bg-gray-100 text-center text-sm text-gray-500">
      © 2025 Job Portal. All rights reserved.
    </footer>
  </div>
</template>
