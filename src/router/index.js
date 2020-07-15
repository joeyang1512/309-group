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
    },
    {
        path: '/inform',
        name: 'informContent',
        meta: {
            til: '通知公告'
        },
        component: () =>
            import ('@/views/inform/informContent.vue'),
    },
    {
        path: '/details/:id',
        meta: {
            til: '通告详情'
        },
        component: () =>
            import ('@/views/inform/informDetail.vue')
    },
    /* 旭：论著专利页面 */
    {
        path: '/writings',
        name: 'wrintingIndex',
        component: () =>
            import ('@/views/writings/writing.vue'),
        children: [{
            path: '/writings/:type',
            name: 'writingDetail',
            meta: {
                til: '论著专利'
            },
            component: () =>
                import ('@/views/writings/writingDetail.vue')
        }, ]
    },
    /* 旭：论著专利细节 */
    {
        path: '/indexDetail/:id',
        name: 'indexDetail',
        component: () =>
            import ('@/views/writings/indexDetail.vue')
    },
    {
        path: '/chinaEngDetail/:id',
        name: 'chinaEngDetail',
        meta: {
            til: '论文'
        },
        component: () =>
            import ('@/views/writings/chinaEngDetail.vue')
    },
    {
        path: '/patentDetail/:id',
        name: 'patentDetail',
        meta: {
            til: '授权专利'
        },
        component: () =>
            import ('@/views/writings/patentDetail.vue')
    },
    /* 旭：科研成果 */
    {
        path: '/sciFruit',
        name: 'sciFruits',
        meta: {
            til: '科研成果',
        },
        component: () =>
            import ('@/views/sciFruits.vue'),
        children: [{
                path: '/sciFruit/right1',
                name: 'fruitRight1',
                meta: {
                    til: '科研项目',
                },
                component: () =>
                    import ('@/components/sciFruit/sciFruitRight1.vue')
            },
            {
                path: '/sciFruit/right2',
                name: 'fruitRight2',
                meta: {
                    til: '科研奖励'
                },
                component: () =>
                    import ('@/components/sciFruit/sciFruitRight2.vue')
            }
        ]
    },
    {
        path: '/lab',
        name: 'lab',
        meta: {
            til: '实验室概况',
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/components/Lab/lab.vue')
    },
    {
        path: '/news',
        name: 'news',
        meta: {
            til: '新闻动态',
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/components/News/news.vue')
    },
    {
        path: '/newsDetails/:id',
        name: 'newsIndex',
        meta: {
            til: '新闻详情',
        },
        component: () =>
            import ('@/components/News/newsIndex.vue')
    },
    {
        path: '/faculty',
        name: 'faculty',
        meta: {
            til: '师资力量',
        },
        component: () =>
            import ('@/components/Faculty/faculty.vue'),
        children: [{
                path: '/faculty/',
                name: 'professor',
                meta: {
                    til: '教授',
                },
                component: () =>
                    import ('@/components/Faculty/professor/professor.vue')
            },
            {
                path: '/faculty/viceprofessor',
                name: 'viceprofessor',
                meta: {
                    til: '副教授',
                },
                component: () =>
                    import ('@/components/Faculty/viceprofessor/viceprofessor.vue')
            },
            {
                path: '/faculty/lecturer',
                name: 'lecturer',
                meta: {
                    til: '讲师',
                },
                component: () =>
                    import ('@/components/Faculty/lecturer/lecturer.vue')
            }
        ]
    },
    {
        path: '/professorDetails/:id',
        name: 'professorDetails',
        component: () =>
            import ('@/components/Faculty/details.vue')
    },
    {
        path: '/academic',
        name: 'academic',
        meta: {
            til: '学术交流',
        },
        component: () =>
            import ('@/views/AcaIndex.vue')
    },
    {
        path: '/academicDetails/:id',
        name: 'academicDetails',
        component: () =>
            import ('@/components/Academic/details.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'active',
    routes
})

export default router