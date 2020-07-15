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
    },


	{
		path: '/lab',
		name: 'lab',
		meta: {
			til: '实验室概况',
		},
		component: () =>
			import( /* webpackChunkName: "about" */ '@/components/Lab/lab.vue')
	},
	{
		path: '/news',
		name: 'news',
		meta: {
			til: '新闻动态',
		},
		component: () =>
			import( /* webpackChunkName: "about" */ '@/components/News/news.vue')
	},
	{
		path: '/newsDetails/:id',
		name: 'newsIndex',
		meta: {
			til: '新闻详情',
		},
		component: () =>
			import('@/components/News/newsIndex.vue')
	},
	{
		path: '/faculty',
		name: 'faculty',
		meta: {
			til: '师资力量',
		},
		component: () =>
			import('@/components/Faculty/faculty.vue'),
		children: [{
				path: '/faculty/',
				name: 'professor',
				meta: {
					til: '教授',
				},
				component: () =>
					import('@/components/Faculty/professor/professor.vue')
			},
			{
				path: '/faculty/viceprofessor',
				name: 'viceprofessor',
				meta: {
					til: '副教授',
				},
				component: () =>
					import('@/components/Faculty/viceprofessor/viceprofessor.vue')
			},
			{
				path: '/faculty/lecturer',
				name: 'lecturer',
				meta: {
					til: '讲师',
				},
				component: () =>
					import('@/components/Faculty/lecturer/lecturer.vue')
			}
		]
	},
	{
		path: '/professorDetails/:id',
		name: 'professorDetails',
		component: () =>
			import('@/components/Faculty/details.vue')
	},
		{
		path: '/students',
		name: 'students',
		meta: {
			til: '研究生培养',
		},
		component: () =>
			import('@/components/Students/students.vue'),
		children: [{
				path: '/students/',
				name: 'graddoctor',
				meta: {
					til: '毕业博士',
				},
				component: () =>
					import('@/components/Students/graddoctor/graddoctor.vue')
			},
			{
				path: '/students/readdoctor',
				name: 'readdoctor',
				meta: {
					til: '在读博士',
				},
				component: () =>
					import('@/components/Students/readdoctor/readdoctor.vue')
			},
			{
				path: '/students/master',
				name: 'master',
				meta: {
					til: '毕业硕士',
				},
				component: () =>
					import('@/components/Students/master/master.vue')
			},
			{
				path: '/students/readmaster',
				name: 'readmaster',
				meta: {
					til: '在读硕士',
				},
				component: () =>
					import('@/components/Students/readmaster/readmaster.vue')
			}
		]
	},
	{
		path: '/studentsDetails/:id',
		name: 'studentsDetails',
		component: () =>
			import('@/components/Students/details.vue')
	},
	{
		path: '/academic',
		name: 'academic',
		meta: {
			til: '学术交流',
		},
		component: () =>
			import('@/views/AcaIndex.vue')
	},
	{
		path: '/academicDetails/:id',
		name: 'academicDetails',
		component: () =>
			import('@/components/Academic/details.vue')
	},
	{
		path:'*',
		redirect:'/'
	}

]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	linkExactActiveClass: 'active',
	routes
})

export default router
