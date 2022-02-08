import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import router from './router'

import SvgIcon from './components/SvgIcon.vue'
import vuetify from './plugins/vuetify'
import './assets/styles/reset.css'


Vue.config.productionTip = true;

//use SvgIcon
Vue.component('svg-icon', SvgIcon);

//use Vuex Store
Vue.use(Vuex);


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');














