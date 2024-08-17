import HomePage from '@/pages/HomePage.vue'
import ChatPage from '@/pages/ChatPage.vue'
import AccountPage from '@/pages/AccountPage.vue'
import NewGamePage from '@/pages/NewGamePage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: HomePage
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatPage
    },
    {
      path: '/account',
      name: 'account',
      component: AccountPage
    },
    {
      path: '/game',
      name: 'game',
      component: NewGamePage
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
