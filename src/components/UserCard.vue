<script setup lang="ts">
import type { User } from '@/types/user'
import { computed, defineProps } from 'vue'
import { Button } from '@/components/ui/button'

const props = defineProps<{
  user: User
}>()

const emit = defineEmits<{
  (e: 'login', username: string): void
}>()

const userTypeLabel = computed(() =>
  props.user.type.charAt(0).toUpperCase() + props.user.type.slice(1),
)
</script>

<template>
  <div class="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full">
    <div>
      <h2 class="text-xl font-semibold mb-2">
        Login as {{ userTypeLabel }}
      </h2>
      <p class="text-gray-600 text-sm mb-4">
        Username: <strong>{{ props.user.username }}</strong>
      </p>
    </div>
    <Button class="mt-auto w-full" @click="emit('login', props.user.username)">
      Login
    </Button>
  </div>
</template>
