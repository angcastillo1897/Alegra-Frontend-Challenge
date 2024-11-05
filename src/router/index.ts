import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const ErrorView = () => import('../views/ErrorView.vue')
import imagesRaceRoutes from '../modules/ImagesRace/ImagesRace.router'
import invoiceRoutes from '../modules/Invoice/Invoice.router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [...imagesRaceRoutes, ...invoiceRoutes],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-page',
      component: ErrorView,
    },
  ],
})

export default router
