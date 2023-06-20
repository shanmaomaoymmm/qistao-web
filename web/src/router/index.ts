import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import articles from '@/views/articles.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/',
      name: 'Qisato',
      component: home
    }, {
      path: '/articles/:id',
      name: '文章',
      component: articles
    }
  ]
})

export default router
