// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  { 
    path: '/events',
    name: 'events',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'All Events',
        component: () => import('@/views/Event.vue')
      },  
      {
        path: 'add',
        name: 'add-event',
        component: () => import('@/components/CreateEvent.vue')
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: () => import('@/components/EditEvent.vue')
      }
    ]
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Profile',
        component: () => import('@/views/Person.vue')
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/components/CreatePerson.vue')
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: () => import('@/components/EditPerson.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router


