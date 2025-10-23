import EditPizzaView from '@/views/EditPizzaView.vue'
import HomeView from '@/views/HomeView.vue'
import InfoPizza from '@/views/InfoPizza.vue'
import NewPizzaView from '@/views/NewPizzaView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView, meta: { requiresAuth: true } },
    { path: '/new', name: 'NewPizza', component: NewPizzaView },
    { path: '/pizza/:id', name: 'InfoPizza', component: InfoPizza, props: true },
    { path: '/pizza/:id/edit', name: 'EditPizza', component: EditPizzaView, props: true }
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
