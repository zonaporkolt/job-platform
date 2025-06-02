import type { User } from '@/types/user'
import { computed, ref } from 'vue'
import { getCurrentUser, logout as sessionLogout } from '@/mock/session'

const user = ref(getCurrentUser())

export function useCurrentUser() {
  function setUser(newUser: User) {
    user.value = newUser
  }

  function logout() {
    sessionLogout()
    user.value = null
  }

  const isEmployer = computed(() => user.value?.type === 'employer')

  return { user, setUser, logout, isEmployer }
}
