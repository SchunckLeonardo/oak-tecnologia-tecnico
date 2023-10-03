import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'list',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: () => import('../views/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
