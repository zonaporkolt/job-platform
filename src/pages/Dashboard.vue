<script setup lang="ts">
import { useCurrentUser } from '@/composables/useCurrentUser'

const { user } = useCurrentUser()
</script>

<template>
  <div class="text-xl font-semibold">
    Welcome to the Job Portal, {{ user?.username }}!
  </div>
</template>
