import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
import globalRegexp from './api/global_regexp'
import globalVariable from './api/global_variable'
import globalFun from './api/global_fun'

// import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = '/?s=/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.prototype.REGEXP = globalRegexp // 挂载全局表达式
Vue.prototype.GLOBAL = globalVariable // 挂载全局变量
Vue.use(globalFun) // 挂载全局函数
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
