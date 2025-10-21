import EditPizzaView from '@/views/EditPizzaView.vue'
import HomeView from '@/views/HomeView.vue'
import InfoPizza from '@/views/InfoPizza.vue'
import NewPizzaView from '@/views/NewPizzaView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/new', name: 'NewPizza', component: NewPizzaView },
    { path: '/pizza/:id', name: 'InfoPizza', component: InfoPizza, props: true },
    { path: '/pizza/:id/edit', name: 'EditPizza', component: EditPizzaView, props: true }
  ],
})

export default router
