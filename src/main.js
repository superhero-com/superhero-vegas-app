import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/reset.css'
import SvgIcon from './components/SvgIcon.vue'
Vue.config.productionTip = false;


//全局注册icon-svg
Vue.component('SvgIcon', SvgIcon);

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
