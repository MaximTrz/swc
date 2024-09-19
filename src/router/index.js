import { createRouter, createWebHashHistory } from 'vue-router'
import AppCarsList from '@/components/AppCarsList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppCarsList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
