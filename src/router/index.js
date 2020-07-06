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
    path: '/mp',
    name: 'Mp',
    component: () => import('../views/mym/Mp.vue'),
    meta:{
      footer:false
    }
  },
  {
    path: '/mstudy',
    name: 'Mstudy',
    component: () => import('../views/mym/Mstudy.vue'),
    meta:{
      footer:false
    }
  },
  {
    path:"/balance",
    name:"Balance",
    component: () => import("../views/mym/Balance.vue"),
    meta:{
      footer:false
    }
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import('../views/jijie/Techer.vue')
  },
  {
    path: '/yuyue',
    name: 'yuyue',
    component: () => import('../views/jijie/Yuyue.vue')
  },
  {
    path: '/gzls',
    name: 'gzls',
    component: () => import('../views/lfy/gzls.vue')
  },
  {
    path: '/wdsc',
    name: 'wdsc',
    component: () => import('../views/lfy/wdsc.vue')
  },
  {
    path: '/kcdd',
    name: 'kcdd',
    component: () => import('../views/lfy/kcdd.vue')
  },
  {
    path: '/hydd',
    name: 'hydd',
    component: () => import('../views/lfy/hydd.vue')
  },
  {
    path: '/ykdd',
    name: 'ykdd',
    component: () => import('../views/lfy/ykdd.vue')
  },
  {
    path: '/yhq',
    name: 'yhq',
    component: () => import('../views/lfy/yhq.vue')
  },
  {
    path: '/xxk',
    name: 'xxk',
    component: () => import('../views/lfy/xxk.vue')
  },
  {
    path: '/xxkdh',
    name: 'xxkdh',
    component: () => import('../views/lfy/xxkdh.vue')
  },
  {
    path: '/hy',
    name: 'hy',
    component: () => import('../views/lfy/hy.vue')
  },
  {
    path: '/wdxx',
    name: 'wdxx',
    component: () => import('../views/lfy/wdxx.vue')
  },
  {
    path: '/kctz',
    name: 'kctz',
    component: () => import('../views/lfy/kctz.vue')
  },
  {
    path: '/xttz',
    name: 'xttz',
    component: () => import('../views/lfy/xttz.vue')
  },
  {
    path: '/ddtz',
    name: 'ddtz',
    component: () => import('../views/lfy/ddtz.vue')
  },
  {
    path: '/yktz',
    name: 'yktz',
    component: () => import('../views/lfy/yktz.vue')
  },
  {
    path: '/kstz',
    name: 'kstz',
    component: () => import('../views/lfy/kstz.vue')
  },
  {
    path: '/yjfk',
    name: 'yjfk',
    component: () => import('../views/lfy/yjfk.vue')
  },
  {
    path: '/zxkf',
    name: 'zxkf',
    component: () => import('../views/lfy/zxkf.vue')
  },
  {
    path: '/sz',
    name: 'sz',
    component: () => import('../views/lfy/sz.vue')
  },
  {
    path: '/mima',
    name: 'mima',
    component: () => import('../views/lfy/mima.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
