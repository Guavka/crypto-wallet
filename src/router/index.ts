import { createRouter, createWebHistory } from 'vue-router'
import { trailingSlash } from '@src/modules/utils/helpers'
import MainView from '@src/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: MainView
    },
  ]
})

router.beforeEach((to, from, next) => {
  return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

export default router