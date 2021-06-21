import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        }
    ]
});
