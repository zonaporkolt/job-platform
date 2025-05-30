import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/pages/Dashboard.vue'
import JobSearch from '@/pages/JobSearch.vue'
import LandingPage from '@/pages/LandingPage.vue'
import PostJob from '@/pages/PostJob.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
  },
  {
    path: '/post-job',
    name: 'PostJob',
    component: PostJob,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/jobs',
    name: 'JobSearch',
    component: JobSearch,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
