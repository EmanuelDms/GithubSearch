import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Result from '../views/Result.vue'
import API from '@/components/gitApi.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path: '/api',
    name: 'GitApi',
    component: API
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
