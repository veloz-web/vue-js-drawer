import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: ':division',
          name: 'division',
          children: [
            {
              path: ':team',
              name: 'team',
              component: () => import('../views/TeamView.vue')
            }
          ]
        }
      ]
    }
  ]
})

router.afterEach(() => {
  // Focus main content area after navigation
  document.querySelector('main')?.focus()
})

export default router