import type { User } from '@/types/user'
import { JOB_PORTAL_USERS_KEY } from './initDB'

const JOB_PORTAL_SESSION_KEY = 'job_portal_session_user'

export function getCurrentUser(): User | null {
  return JSON.parse(localStorage.getItem(JOB_PORTAL_SESSION_KEY) || 'null')
}

export function signIn(username: string): User | null {
  const users: User[] = JSON.parse(localStorage.getItem(JOB_PORTAL_USERS_KEY) || '[]')
  const user = users.find(u => u.username === username)
  if (user) {
    localStorage.setItem(JOB_PORTAL_SESSION_KEY, JSON.stringify(user))
    return user
  }
  return null
}

export function logout(): void {
  localStorage.removeItem(JOB_PORTAL_SESSION_KEY)
}
