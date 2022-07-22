import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../Layout'


const routes = [
  {
    path: '/',
    name: 'chapter1',
    component: Layout,
    redirect:'chapter1_1',
    children: [
      {
        path: 'chapter1_1',
        component: () => import(/* webpackChunkName: "Chapter1_1" */ '../views/Chapter1/Chapter1_1.vue')
      },
     
    ]
  }, 
  {
    path: '/chapter2',
    name: 'Chapter2', 
    component: Layout,
    redirect:'cover2',
    children: [
      {
        path: 'cover2',
        component: () => import('../views/Chapter2/Cover2.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
