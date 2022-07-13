import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/search/:id',
    name: 'search',
    params: true,
    component: () => import('../views/SearchPageView.vue')
  },
  {
    path: '/about/:name/:id',
    name: 'movie-page-info',
    params: true,
    component: () => import('../views/MoviePageInfoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
