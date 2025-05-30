import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import { getCurrentUser } from '@/mock/session'
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

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = getCurrentUser()
  if (to.meta.requiresAuth) {
    if (!user) {
      return next({ path: '/' })
    }
    if (to.meta.role && user.type !== to.meta.role) {
      return next({ path: '/dashboard' })
    }
  }
  next()
})

export default router
