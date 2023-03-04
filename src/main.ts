// @ts-nocheck
import Vue from 'vue'
import VueTelInput from 'vue-tel-input'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
require('dotenv').config()
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';

Vue.use(VueTelInput)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.component('vue-tel-input', VueTelInput.VueTelInput)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
