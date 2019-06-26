import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引用normalize.css进行格式化
import 'normalize.css/normalize.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
