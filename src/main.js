import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import SvgIcon from './components/SvgIcon.vue'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/reset.css'
import './style/theme/index.css'

Vue.config.productionTip = false;

Vue.component('SvgIcon', SvgIcon);
Vue.use(ElementUI);
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        walletPage: "WalletSelect"
    },
    mutations: {
        increment(state,page) {
            state.walletPage = page;
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
