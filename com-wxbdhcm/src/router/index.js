import Vue from 'vue'
import VueRouter from 'vue-router'
import backStage from '../views/backStage.vue'
import Login from '../views/Login.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [{
	path: '/',
	component: () => import('../views/Home.vue'),
	children: [{
		path: '/backStage',
		name: 'Home',
		component: backStage,
		meta: {
			requireLogin: true,
			include: true
		}
	},
	{
		/* 购物车模块 */
		path: '/cmDetails',
		component: () => import( /* webpackChunkName: "commodityDetails" */		'../views/commodityDetails.vue'),
		name: 'commodityDetails',
	},
	{
		/* 购物车模块 */
		path: '/Order',
		component: () => import( /* webpackChunkName: "Order" */ '../views/Order.vue'),
		name: 'Order',
		meta: {
			requireLogin: true,
		}
	},
	{
		path: '/Shopping_Car',
		component: () => import( /* webpackChunkName: "Shopping_Car" */ '../views/Shopping_Car.vue'),
		meta: {
			requireLogin: true,
		}
	},
	{
		path: '/Shopping',
		component: () => import( /* webpackChunkName: "Shopping" */ '../views/Shopping.vue'),
		//路由守卫
		// beforeEnter: (to, from, next) => {
		//   // 判断登录
		//   if(sessionStorage.getItem('logined')){
		//     next()
		//   }
		//   else{
		//     window.alert("请先登录")
		//     next('/Login')
		//   }
		// },
		meta: {
			include: true
		}
	},
	{
		path:'/orderDetails',
		component :()=>import('../views/orderDetails.vue'),
		meta: {
			requireLogin: true,
		},
		beforeEnter: (to, from, next) => {
			if(store.state.user.userAddressList == ""){
				window.alert('请先添加购物地址')
				router.push('/backStage/personal')
				next(false)
			}
			else{
				window.alert('确认订单')
				next()
			}
		}

	},
	{
		path: '/backStage',
		meta: {
			requireLogin: true,
			include: true
		},
		component: () => import( /* webpackChunkName: "backStage" */ '../views/backStage.vue'),
		//子路由路径前加/表示绝对路径 不加/会自动添加上父路由路径
		children: [{
			path: '/backStage/user',
			component: () => import('../views/backStageRouter/userRoute.vue'),
			name: 'user',
			meta: {
				requireLogin: true,
				include: true
			}
		},

		{
			path: '/backStage/order',
			component: () => import('../views/backStageRouter/orderRoute.vue'),
			name: 'order',
		},
		{
			path: '/backStage/shop',
			name: 'shop',
			component: () => import('../views/backStageRouter/shopRoute.vue'),
			meta: {
				requireLogin: true,
				include: true
			}
		},
		{
			path: 'shopCar',
			name: 'shopCar',
			component: () => import('../views/backStageRouter/shoppingCarRoute.vue'),
			meta: {
				requireLogin: true,
				include: true
			}
		},
		{
			path: 'personal',
			name: 'personal',
			component: () => import('../views/backStageRouter/personalRoute.vue'),
			meta: {
				requireLogin: true,
				include: true
			}
		}
		]
	}
	]
},
{
	path: '/register',
	component: () => import('../views/register.vue')
},
{
	path: '/Login',
	component: Login,
	name: 'Login',
},


]

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition && to.meta.include) {
			return savedPosition;
		}
		const position = {}
		if (to.path === '/backStage/user' ||to.path === '/backStage/personal' || to.path === '/Shopping' || to.path === '/Shopping_Car' || to.path ===
			'/Order') {
			position.selector = "#router-link" //保存此id标签的位置属性
			return position
		}
		if (to.hash) {
			position.selector = to.hash //保存此id标签的位置属性
			return position
		}
		// if (to.path === "/cmDetails") {
		//   console.log(to.hash)
		//   return to.hash
		//   // return {
		//   //   x: 0,
		//   //   y:1500
		//   // }
		// }
		//  else{
		//     return {
		//       x:0,
		//       y:500
		//     }
		//  }

		// if(savedPosition){
		//   console.log(savedPosition)
		//   return savedPosition
		// }
		// else{

		// }
	}
})
// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err)
}
export default router
