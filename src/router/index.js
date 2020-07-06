import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      footer: true
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
    meta: {
      footer: true
    }
  },
  {
    path: '/oto',
    name: 'oto',
    component: () => import('../views/nkl/oto.vue'),
    meta: {
      footer: false
    }
  },
  {
    path: '/study',
    name: 'Study',
    component: () => import('../views/Study.vue'),
    meta: {
      footer: false
    }
  },
  {
    path: '/tutorship',
    name: "Tutorship",
    component: () => import('../views/Ttorship.vue'),
    meta: {
      footer: false
    }
  },
  {
    path: '/seacher',
    name: 'Seacher',
    component: () => import('../views/Seacher.vue'),
    meta: {
      footer: false
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
    name: 'person',
    component: () => import('../views/Person.vue'),
    meta: {
      footer: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/mym/Login.vue'),
    meta: {
      footer: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/mym/Register.vue'),
    meta: {
      footer: false
    }
  },
  {
    path: '/Yueke',
    name: 'Yueke',
    component: () => import('../views/hang/Yueke.vue'),
    meta: {
      footer: true
    }
  },
  {
    path: '/exe',
    name: 'exe',
    component: () => import('../views/hang/Exe.vue'),
    meta: {
      footer: true
    }
  },
  {
    path: '/kao1',
    name: 'kao1',
    component: () => import('../views/hang/Kao1.vue'),
  },
  {
    path: '/mp',
    name: 'Mp',
    component: () => import('../views/mym/Mp.vue'),
    meta: {
      footer: false
    }
  },
  {
    // <<<<<<< HEAD
    path: '/kao2',
    name: 'kao2',
    component: () => import('../views/hang/Kao2.vue'),
  },
  {
    path: '/mstudy',
    name: 'Mstudy',
    component: () => import('../views/mym/Mstudy.vue'),
    meta: {
      footer: false
    }
  },
  {
    path: '/kao3',
    name: 'kao3',
    component: () => import('../views/hang/Kao3.vue'),
  },
  {
    path: "/balance",
    name: "Balance",
    component: () => import("../views/mym/Balance.vue"),
    meta: {
      footer: false
    }
  },
  {
    path: '/kao4',
    name: 'kao4',
    component: () => import('../views/hang/Kao4.vue'),
  },
  {
    path: "/yve",
    name: "Yve",
    component: () => import("../views/mym/Yve.vue"),
    meta: {
      footer: false
    }
  },
  {
    path: '/kao5',
    name: 'kao5',
    component: () => import('../views/hang/Kao5.vue'),
    meta: {
      footer: false
    }
  },
  {
    path: '/kao6',
    name: 'kao6',
    component: () => import('../views/hang/Kao6.vue'),
    meta: {
      footer: false
    },
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import('../views/jijie/Techer.vue')
  },
  {
    // <<<<<<< HEAD
    path: '/yueke',
    name: 'Yueke',
    component: () => import('../views/hang/Yueke.vue'),
    meta: {
      footer: true
    }
  },
  {
    path: '/exe',
    name: 'exe',
    component: () => import('../views/hang/Exe.vue'),
    meta: {
      footer: true
    },
  },
  {
    path: '/yuyue',
    name: 'yuyue',
    component: () => import('../views/jijie/Yuyue.vue')
    // >>>>>>> 238704d4528f0fc7b39ec7fb50e8b4342fda5b20
    // >>>>>>> a9e438a3842fe06e9c8a3a8e3735b5920bc6ab49
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {

  if (to.name == "person") {
    if (localStorage.getItem("Token")) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
});
export default router
