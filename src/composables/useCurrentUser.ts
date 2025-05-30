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

  return { user, setUser, logout }
}
