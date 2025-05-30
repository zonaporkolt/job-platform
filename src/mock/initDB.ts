import type { User } from '@/types/user'

const JOB_PORTAL_JOBS_KEY = 'jobs'
const JOB_PORTAL_USERS_KEY = 'users'

const dummyUsers: User[] = [
  {
    id: '1',
    username: 'Darth Vader',
    type: 'employer',
  },
  {
    id: '2',
    username: 'Luke Skywalker',
    type: 'applicant',
  },
]

export function initDB() {
  if (!localStorage.getItem(JOB_PORTAL_JOBS_KEY)) {
    localStorage.setItem(JOB_PORTAL_JOBS_KEY, JSON.stringify([]))
  }

  if (!localStorage.getItem(JOB_PORTAL_USERS_KEY)) {
    localStorage.setItem(JOB_PORTAL_USERS_KEY, JSON.stringify(dummyUsers))
  }
}
