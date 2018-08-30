import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'
import store from './store/Store'

window.moment = moment
Vue.use(moment)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue ({
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
 })
