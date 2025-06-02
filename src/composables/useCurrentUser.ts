import type { User } from '@/types/user'
import { ref } from 'vue'
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

  function isEmployer() {
    return user.value?.type === 'employer'
  }

  return { user, setUser, logout, isEmployer }
}
