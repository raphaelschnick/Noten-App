import Vue from "vue"
import App from "./App.vue"
import './plugins/bootstrap-vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import router from "./router"

Vue.config.productionTip = false;
Vue.use(Vuesax, {
  colors: {
    primary:'#5b3cc4',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)'
  }
})

export const app = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
