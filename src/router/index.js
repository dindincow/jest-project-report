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
        component: () => import(/* webpackChunkName: "Chapter1_1" */ '../views/Chapter1')
      },
      {
        path: 'lession1',
        component: () => import(/* webpackChunkName: "Chapter1_1" */ '../views/Chapter1/Lession1')
      },
      {
        path: 'lession2',
        component: () => import(/* webpackChunkName: "Chapter1_1" */ '../views/Chapter1/Lession2')
      },
      {
        path: 'lession3',
        component: () => import(/* webpackChunkName: "Chapter1_1" */ '../views/Chapter1/Lession3')
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
      {
        path: 'lession2',
        component: () => import('../views/Chapter2/Lession2')
      },
      {
        path: 'lession3',
        component: () => import('../views/Chapter2/Lession3')
      },
      {
        path: 'lession4',
        component: () => import('../views/Chapter2/Lession4')
      },
    ]
  },
  {
    path: '/chapter3',
    name: 'Chapter3', 
    component: Layout,
    redirect:'/chapter3/cover3',
    children: [
      {
        path: 'cover3',
        component: () => import('../views/Chapter3')
      },
      {
        path: 'lession1',
        component: () => import('../views/Chapter3/Lession1')
      },
      {
        path: 'lession2',
        component: () => import('../views/Chapter3/Lession2')
      },
      {
        path: 'lession3',
        component: () => import('../views/Chapter3/Lession3')
      },
      {
        path: 'lession4',
        component: () => import('../views/Chapter3/Lession4')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
