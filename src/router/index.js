import Vue from 'vue'
import VueRouter from 'vue-router'
// ============组件引入=============
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Register from '@/views/Register'
import Inquire from '@/views/Inquire'
import Donate from '@/views/Donate'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home, meta: { title: '首页' }},
  // =========用户登录、注册、找回密码==========
  { path: '/login', name: 'Login', component: Login, meta: { title: '登录' } },
  { path: '/register', name: 'Register', component: Register, meta: { title: '注册' } },

  // =================查询、捐赠==================
  { path: '/inquire', name: 'Inquire', component: Inquire, meta: { title: '查询' } },
  { path: '/donate', name: 'Donate', component: Donate, meta: { title: '我要捐赠' } },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 修改标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title
  next()
})

export default router
