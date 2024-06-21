import { createRouter, createWebHistory } from 'vue-router'
import CoacheDetails from '../pages/coaches/CoachDetails.vue'
import CoachesList from '../pages/coaches/CoachesList.vue'
import CoachRegistration from '../pages/coaches/CoachRegistration.vue'
import ContactCoach from '../pages/requests/ContactCoach.vue'
import RequestsReceived from '../pages/requests/RequestsReceived.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: '!border-indigo-500 text-indigo-500',
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    { path: '/register', component: CoachRegistration },
    {
      path: '/coaches/:id',
      component: CoacheDetails,
      children: [{ path: 'contact', component: ContactCoach }]
    },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
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
