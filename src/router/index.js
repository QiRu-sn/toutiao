import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import login from '../views/login'
import homelist from '../views/home/home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: home,
    children: [
      {
        path: '',
        component: homelist
      },
      {
        path: '/home/comment',
        component: () => import('../views/comment')
      }, {
        path: '/home/material',
        component: () => import('../views/material')
      },
      {
        path: '/home/articles',
        component: () => import('../views/contentList')
      },
      {
        path: '/home/publish',
        component: () => import('../views/publish')
      },
      {
        path: '/home/publish/:articleID',
        component: () => import('../views/publish')
      },
      {
        path: '/home/Graphic_data',
        component: () => import('../views/graphic')
      },
      {
        path: '/home/userInfo',
        component: () => import('../views/userInfo')
      }
    ]
  },
  {
    path: '/login',
    component: login
  },
  // 404页面
  {
    path: '*',
    component: () => import('../views/404')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
