import { createRouter, createWebHistory } from 'vue-router'

import { getCurrentUser } from '@/mock/session'

import routes from './routes'

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
