<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/composables/useCurrentUser'
import { useJobs } from '@/composables/useJobs'

const { jobs, deleteJob } = useJobs()
const { isEmployer } = useCurrentUser()

function handleDelete(id: string) {
  deleteJob(id)
}
</script>

<template>
  <div class="flex flex-col items-start gap-y-4">
    <h1 class="text-xl font-semibold">
      Search Jobs
    </h1>
    <div v-if="jobs.length" class="space-y-4 w-full">
      <div
        v-for="job in jobs"
        :key="job.id"
        class="border rounded-lg p-4 flex justify-between items-center bg-white"
      >
        <div class="flex flex-col gap-y-2">
          <div class="font-bold text-lg">
            {{ job.title }}
          </div>
          <div class="text-sm text-gray-600">
            {{ job.description }}
          </div>
          <div class="text-xs text-gray-500 mt-1">
            <span v-for="tag in job.tags" :key="tag" class="mr-1">
              <Badge>#{{ tag }}</Badge>
            </span>
          </div>
          <div class="text-xs text-gray-500 mt-1">
            Salary: {{ job.salary.amount }} {{ job.salary.currency }}
          </div>
        </div>
        <Button v-if="isEmployer" variant="destructive" @click="handleDelete(job.id)">
          Delete
        </Button>
      </div>
    </div>
    <div v-else class="text-gray-500 text-center">
      No jobs posted yet.
    </div>
  </div>
</template>
