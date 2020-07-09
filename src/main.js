import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//使用axios
import axios from 'axios'
Vue.prototype.$axios=axios

//使用vant
import Vant from 'vant'
import 'vant/lib/index.css'
//使用element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
//使用rem
import './assets/rem'

import { Tab, Tabs,Icon,Field } from 'vant';
Vue.use(Field);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
