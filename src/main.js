import Vue from 'vue';
// import the library
import AsyncComputed from 'vue-async-computed';

import App from './App.vue'
import router from './router';

Vue.use(AsyncComputed, {
  default: 0
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

