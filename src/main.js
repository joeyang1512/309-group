import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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