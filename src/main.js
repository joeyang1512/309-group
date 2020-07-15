import Vue from 'vue'
import { Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Pagination);

Vue.config.productionTip = false

// 前置守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.til;
    next();
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')