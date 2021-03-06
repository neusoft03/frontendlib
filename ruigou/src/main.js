import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

const axiosJSON = axios.create({
  baseURL: 'http://localhost:8200/',
  timeout: 2000
});
const axiosUpload = axios.create({
  baseURL: 'http://localhost:8200/',
  timeout: 3000,
  headers: {'ContentType': 'multipart/form-data'}
});

//把Axios的对象注册到Vue对象上，挂载到Vue的原型上。
Vue.prototype.axiosJSON=axiosJSON;
Vue.prototype.axiosUpload=axiosUpload;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
