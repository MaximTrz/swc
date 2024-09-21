import { createRouter, createWebHashHistory } from 'vue-router'
import AppCarsList from '@/views/AppCarsList.vue'
import AppProfile from '@/views/AppProfile.vue'
import AppSettings from '@/views/AppSettings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppCarsList
  },
  {
    path: '/profile',
    name: 'profile',
    component: AppProfile
  },
  {
    path: '/settings',
    name: 'settings',
    component: AppSettings
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
