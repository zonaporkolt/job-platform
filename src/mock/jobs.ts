import type { Job } from '@/types/job'
import { JOB_PORTAL_JOBS_KEY } from './initDB'

export function getAllJobs(): Job[] {
  return JSON.parse(localStorage.getItem(JOB_PORTAL_JOBS_KEY) || '[]')
}

export function saveJobs(jobs: Job[]) {
  localStorage.setItem(JOB_PORTAL_JOBS_KEY, JSON.stringify(jobs))
}

export function addJob(job: Job) {
  const jobs = getAllJobs()
  jobs.push(job)
  saveJobs(jobs)
}

export function deleteJob(id: string) {
  const jobs = getAllJobs().filter(job => job.id !== id)
  saveJobs(jobs)
}
