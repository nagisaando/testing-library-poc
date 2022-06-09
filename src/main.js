import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import i18n from '@/initializers/i18n'
import router from '@/router'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/initializers/vee-validate.js'

// Make BootstrapVue available throughout your project
Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app')
