import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../Layout'


const routes = [
  {
    path: '/',
    redirect:'/chapter1/cover1',
  }, 
  {
    path: '/chapter1',
    name: 'Chapter1',
    component: Layout,
    redirect:'/chapter1/cover1',
    children: [
      {
        path: 'cover1',
        component: () => import(/* webpackChunkName: "Chapter1_1" */ '../views/Chapter1/Cover1.vue')
      },
     
    ]
  }, 
  {
    path: '/chapter2',
    name: 'Chapter2', 
    component: Layout,
    redirect:'/chapter2/cover2',
    children: [
      {
        path: 'cover2',
        component: () => import('../views/Chapter2')
      },
      {
        path: 'lession1',
        component: () => import('../views/Chapter2/Lession1')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
