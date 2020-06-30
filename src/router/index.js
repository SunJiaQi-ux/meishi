import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      footer:true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      footer:true
    }
  },
  {
    path: '/study',
    name: 'Study',
    component: () => import('../views/Study.vue'),
    meta:{
      footer:false
    }
  },
  {
    path: '/tutorship',
    name: "Tutorship",
    component: () => import('../views/Ttorship.vue'),
    meta:{
      footer:false
    }
  },
  {
    path: '/seacher',
    name: 'Seacher',
    component: () => import('../views/Seacher.vue'),
    meta:{
      footer:false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
