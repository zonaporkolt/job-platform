<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <AppHeader />

    <main class="flex-1 p-4 md:p-6 lg:p-8">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
