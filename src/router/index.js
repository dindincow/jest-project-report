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
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
