import type { Job } from '@/types/job'
import { ref } from 'vue'
import { addJob as addJobToStorage, deleteJob as deleteJobFromStorage, getAllJobs } from '@/mock/jobs'

export function useJobs() {
  const jobs = ref<Job[]>(getAllJobs())

  function refreshJobs() {
    jobs.value = getAllJobs()
  }

  function addJob(job: Job) {
    addJobToStorage(job)
    refreshJobs()
  }

  function deleteJob(id: string) {
    deleteJobFromStorage(id)
    refreshJobs()
  }

  return { jobs, addJob, deleteJob, refreshJobs }
}
