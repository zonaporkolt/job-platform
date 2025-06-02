<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
  const name = route.meta.layout || 'DashboardLayout'
  return defineAsyncComponent(() => import(`@/layouts/${name}.vue`))
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
