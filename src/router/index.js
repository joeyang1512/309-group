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
            import ( /* webpackChunkName: "about" */ '@/views/Index/index.vue')
    },
    {
        path: '/Students',
        name: 'Students',
        meta: {
            til: '研究生培养',
        },
        component: () =>
            import ('@/views/Students/Students.vue'),
        children: [{
                path: '/Students/',
                name: 'gradDoctor',
                meta: {
                    til: '毕业博士',
                },
                component: () =>
                    import ('@/components/Students/gradDoctor.vue')
            },
            {
                path: '/Students/readDoctor',
                name: 'readDoctor',
                meta: {
                    til: '在读博士',
                },
                component: () =>
                    import ('@/components/Students/readDoctor.vue')
            },
            {
                path: '/Students/gradMaster',
                name: 'gradMaster',
                meta: {
                    til: '毕业硕士',
                },
                component: () =>
                    import ('@/components/Students/gradMaster.vue')
            },
            {
                path: '/Students/readMaster',
                name: 'readMaster',
                meta: {
                    til: '毕业硕士',
                },
                component: () =>
                    import ('@/components/Students/readMaster.vue')
            }
        ]
    },
    {
        path: '/Students/detail',
        name: 'detail',
        component: () =>
            import ('@/views/Students/detail.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'active',
    routes
})

export default router