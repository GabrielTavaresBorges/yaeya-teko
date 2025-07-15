import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Dashboardview from '@/views/Dashboardview.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children:[
        {
          path: '',
          name: 'homeview',
          component: Dashboardview,
        }
      ]
    }   
  ],
})

export default router
