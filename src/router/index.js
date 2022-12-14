import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Register from '../views/Register.vue'
import Test from '../views/Test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details',
      name: 'details',
      component: Details
      
     
    },
    {
      path: '/register',
      name: 'register',
      component: Register
      
     
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

export default router
