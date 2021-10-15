import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import './assets/icons/index.js';
import SvgIcon from './components/SvgIcon.vue'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/reset.css'
import './style/theme/index.css'
import './assets/icons'

Vue.config.productionTip = true;

//use SvgIcon
Vue.component('svg-icon', SvgIcon);


//use Ele UI
Vue.use(ElementUI);
//use Vuex Store
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        walletPage: "WalletSelect",
        participatePage: "ParticipateOngoing"
    },
    mutations: {
        walletPage(state, page) {
            state.walletPage = page;
        },
        participatePage(state, page) {
            state.participatePage = page;
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');














