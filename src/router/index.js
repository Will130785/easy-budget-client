import { createRouter, createWebHashHistory } from 'vue-router'
import Test from '../pages/Test.vue'
import Login from '../pages/Login.vue'

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
