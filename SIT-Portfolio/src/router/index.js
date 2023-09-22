import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import MySkills from '@/views/MySkills.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/myskills',
      name: 'myskills',
      component: MySkills
    },
  ]


const router = createRouter({ 
  history: createWebHistory(),
  routes
 })

export default router
