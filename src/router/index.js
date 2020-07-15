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
    /* 旭：通知公告页面 */
    {
        path:'/inform',
        name:'informContent',
        meta:{
            til:'中南大学309课题组'
        },
        component: () =>
            import (  '@/views/inform/informContent.vue'),
    },
    {
        path:'/details/:id',
        meta:{
            til:'通告详情'
        },
        component:()=>
            import('@/views/inform/informDetail.vue')
    },
    /* 旭：论著专利页面 */
    {
        path:'/writings',
        name:'wrintingIndex',
        meta:{
            til:'论著专利'
        },
        component:()=>
            import('@/views/writings/writing.vue'),
        children:[
            {
                path:'/writings/:type',
                name:'writingDetail',
                meta:{
                    til:'论著专利'
                },
                component:()=>
                    import('@/views/writings/writingDetail.vue')
            },
        ]
    },
    /* 旭：论著专利细节 */
    {
        path:'/indexDetail/:id',
        name:'indexDetail',
        meta:{
            til:'矿物资源加工技术与设备'
        },
        component:()=>
            import('@/views/writings/indexDetail.vue')
    },
    {
        path:'/chinaEngDetail/:id',
        name:'chinaEngDetail',
        meta:{
            til:'论文'
        },
        component:()=>
            import('@/views/writings/chinaEngDetail.vue')
    },
    {
        path:'/patentDetail/:id',
        name:'patentDetail',
        meta:{
            til:'授权专利'
        },
        component:()=>
            import('@/views/writings/patentDetail.vue')
    },
    /* 旭：科研成果 */
    {
        path:'/sciFruit',
        name:'sciFruits',
        meta:{
            til:'科研成果',
        },
        component:()=>
            import('@/views/sciFruits.vue'),
        children:[
            {
                path:'/sciFruit/right1',
                name:'fruitRight1',
                meta:{
                    til:'科研项目',
                },
                component:()=>
                    import('@/components/sciFruit/sciFruitRight1.vue')
            },
            {
                path:'/sciFruit/right2',
                name:'fruitRight2',
                meta:{
                    til:'科研奖励'
                },
                component:()=>
                    import('@/components/sciFruit/sciFruitRight2.vue')
            }
        ]
    }


]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router