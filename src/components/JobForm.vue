<script setup lang="ts">
import type { Job } from '@/types/job'
import { toTypedSchema } from '@vee-validate/zod'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'
import { Textarea } from '@/components/ui/textarea'

import { useJobs } from '@/composables/useJobs'

const { addJob, refreshJobs } = useJobs()

const router = useRouter()

const formSchema = toTypedSchema(z.object({
  title: z.string().min(2).max(100),
  description: z.string().min(10).max(1000),
  tags: z.array(z.string().optional()),
  salaryAmount: z.number().min(1000).max(1000000).default(0),
  salaryCurrency: z.enum(['USD', 'EUR']).default('USD'),
}))

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: '',
    description: '',
    tags: [],
    salaryAmount: 0,
    salaryCurrency: 'USD',
  },
})

const onSubmit = form.handleSubmit((values, ctx) => {
  const job: Job = {
    id: uuidv4(),
    title: values.title,
    description: values.description,
    tags: (values.tags ?? []).filter((tag): tag is string => typeof tag === 'string'),
    created: Date.now(),
    salary: {
      amount: values.salaryAmount,
      currency: values.salaryCurrency,
    },
  }
  addJob(job)
  refreshJobs()
  ctx.resetForm()
  router.push('/jobs')
})
</script>

<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="title">
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Frontend Developer" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="description">
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Describe the job in detail..."
            class="resize-none"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription>
          Provide a detailed description of the job, including responsibilities and requirements.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="tags">
      <FormItem>
        <FormLabel>Tags</FormLabel>
        <FormControl>
          <TagsInput
            :model-value="componentField.modelValue"
            @update:model-value="componentField['onUpdate:modelValue']"
          >
            <TagsInputItem v-for="item in componentField.modelValue" :key="item" :value="item">
              <TagsInputItemText />
              <TagsInputItemDelete />
            </TagsInputItem>

            <TagsInputInput placeholder="Add a tag (e.g. vue, remote, full-time)..." />
          </TagsInput>
        </FormControl>
        <FormDescription>
          Add relevant tags for the job (e.g. vue, remote, full-time).
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="salaryAmount">
      <FormItem>
        <FormLabel>Salary Amount</FormLabel>
        <FormControl>
          <Input type="number" min="0" placeholder="5000" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" type="radio" name="salaryCurrency">
      <FormItem class="space-y-3">
        <FormLabel>Salary Currency</FormLabel>

        <FormControl>
          <RadioGroup
            class="flex flex-col space-y-1"
            v-bind="componentField"
          >
            <FormItem class="flex items-center space-y-0 gap-x-3">
              <FormControl>
                <RadioGroupItem value="USD" />
              </FormControl>
              <FormLabel class="font-normal">
                USD
              </FormLabel>
            </FormItem>
            <FormItem class="flex items-center space-y-0 gap-x-3">
              <FormControl>
                <RadioGroupItem value="EUR" />
              </FormControl>
              <FormLabel class="font-normal">
                EUR
              </FormLabel>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">
      Post Job
    </Button>
  </form>
</template>
