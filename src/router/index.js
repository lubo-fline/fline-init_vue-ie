import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 此Router是自己自定义引入暴露出来的，即是自定义的，以下的Router同样是这样
// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
	return originalPush.call(this, location).catch(err => err)
}
export default new Router({
	mode: 'history',
	routes: [
		{
			/* 首先进行重新定向操作 */
			path: '/',
			redirect: {
				name: 'index'
			}
		},
		{
			path: '/index',
			name: 'index',
			component: () => import('@/views/Index.vue'),
			children: [
			]
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/Login.vue')
		},
		{
			path: '*',
			name: '404',
			component: () => import ('@/views/404.vue')
		}, 
		{
			path: "*", // 此处需特别注意置于最底部
			redirect: "/404"
		}
	]
})
