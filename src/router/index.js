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
			import( /* webpackChunkName: "about" */ '@/views/Index/index.vue'),
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
