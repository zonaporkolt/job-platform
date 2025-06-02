import type { RouteRecordRaw } from 'vue-router'

import Dashboard from '@/pages/Dashboard.vue'
import JobSearch from '@/pages/JobSearch.vue'
import LandingPage from '@/pages/LandingPage.vue'
import PostJob from '@/pages/PostJob.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/post-job',
    name: 'PostJob',
    component: PostJob,
    meta: {
      requiresAuth: true,
      role: 'employer',
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/jobs',
    name: 'JobSearch',
    component: JobSearch,
    meta: {
      requiresAuth: true,
    },
  },
]

export default routes
