<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div class="min-h-screen flex bg-gray-100">
    <AppSidebar class="w-64 bg-white shadow-md" />

    <div class="flex-1 flex flex-col">
      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
