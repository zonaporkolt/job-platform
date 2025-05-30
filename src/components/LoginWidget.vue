<script setup lang="ts">
import type { User } from '@/types/user'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCurrentUser } from '@/composables/useCurrentUser'
import { signIn } from '@/mock/session'
import { getAllUsers } from '@/mock/users'

import UserCard from './UserCard.vue'

const { setUser } = useCurrentUser()

const router = useRouter()
const users = ref<User[]>([])

function handleLogin(username: string) {
  const user = signIn(username)
  if (user) {
    setUser(user)
    router.push('/dashboard')
  }
  else {
    throw new Error('Login failed: User not found')
  }
}

onMounted(() => {
  users.value = getAllUsers().map(u => ({
    id: u.id,
    username: u.username,
    type: u.type,
  }))
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl p-6">
    <UserCard
      v-for="user in users"
      :key="user.username"
      :user="user"
      @login="handleLogin"
    />
  </div>
</template>
