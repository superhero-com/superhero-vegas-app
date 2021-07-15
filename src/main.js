import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
Vue.config.productionTip = false;


//引入svg组件
import SvgIcon from './components/SvgIcon.vue'

import vuetify from './plugins/vuetify'

//全局注册icon-svg
Vue.component('SvgIcon', SvgIcon);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
