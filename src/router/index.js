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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/course',
    name: 'course',
    component: () => import('../views/nkl/course.vue'),
    meta:{
      footer:true
    }
  },
  {
    path: '/oto',
    name: 'oto',
    component: () => import('../views/nkl/oto.vue'),
    meta:{
      footer:false
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
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import('../views/jijie/Techer.vue'),
  },
  {
    path: '/yuyue',
    name: 'yuyue',
    component: () => import('../views/jijie/Yuyue.vue'),
  },
  {
    path: '/lixue',
    name: 'lixue',
    component: () => import('../views/jijie/Lixue.vue'),
  },
  {
    path: '/kexiang',
    name: 'kexiang',
    component: () => import('../views/jijie/Kexiang.vue')
  },
  { 
    path: '/person',
    name: 'Person',
    component: () => import('../views/Person.vue'),
    meta:{
      footer:false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/mym/Login.vue'),
    meta:{
      footer:false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/mym/Register.vue'),
    meta:{
      footer:false
    }
  },
  {
    path: '/Yueke',
    name: 'Yueke',
    component: () => import('../views/hang/Yueke.vue'),
    meta:{
      footer:true
    }
  },
  {
    path: '/exe',
    name: 'exe',
    component: () => import('../views/hang/Exe.vue'),
    meta:{
      footer:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
