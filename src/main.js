import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-ls';

let options = {
  namespace: 'weather__'
};

Vue.use(VueLocalStorage, options);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
