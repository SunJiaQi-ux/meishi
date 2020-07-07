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
