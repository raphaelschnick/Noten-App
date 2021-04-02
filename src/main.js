import Vue from "vue"
import App from "./App.vue"
import './plugins/bootstrap-vue'
import router from "./router"

Vue.config.productionTip = false;

export const app = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
