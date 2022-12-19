import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";
import VueAxios from "vue-axios";
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.config.productionTip = false
Vue.use(axios,VueAxios);


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
