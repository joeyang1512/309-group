import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        meta: {
            til: '中南大学309课题组'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/Index/index.vue'),
    },
    {
        path: '/lab',
        name: 'lab',
        meta: {
            til: '实验室概况',
            component: () =>
                import ('@/views/lab.vue')
        }
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router