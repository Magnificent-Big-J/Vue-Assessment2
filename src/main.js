// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from 'axios'

// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'


import User from './helpers/User'
import Exception from './helpers/Exception'

Vue.config.productionTip = false
Axios.defaults.baseURL = process.env.API_ENDPOINT
Vue.use(BootstrapVue)

window.User = User
window.Exception = Exception
window.Axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
