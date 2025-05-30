import type { User } from '@/types'
import { JOB_PORTAL_USERS_KEY } from './initDB'

export function getAllUsers(): User[] {
  return JSON.parse(localStorage.getItem(JOB_PORTAL_USERS_KEY) || '[]')
}
