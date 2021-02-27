import Vue from 'vue'
import VueRouter from 'vue-router'
// ============组件引入=============
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Register from '@/views/Register'
import Inquire from '@/views/Inquire'
import Donate from '@/views/Donate'
import SeekHelp from '@/views/SeekHelp'

// ============ admin ==============
import DashBoard from '@/views/admin/DashBoard'
import Admin from '@/views/admin/index'
import Edit from '@/views/admin/Edit'
import Drafts from '@/views/admin/Drafts'
import Manuscript from '@/views/admin/Manuscript'
import Slideshow from '@/views/admin/Slideshow'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home, meta: { title: '首页' } },
  // =========用户登录、注册、找回密码==========
  { path: '/login', name: 'Login', component: Login, meta: { title: '登录' } },
  { path: '/register', name: 'Register', component: Register, meta: { title: '注册' } },

  // =================查询、捐赠、求助==================
  { path: '/inquire', name: 'Inquire', component: Inquire, meta: { title: '查询' } },
  { path: '/donate', name: 'Donate', component: Donate, meta: { title: '我要捐赠' } },
  { path: '/seekhelp', name: 'SeekHelp', component: SeekHelp, meta: { title: '我要求助' } },

  // ================= 管理员 =========================
  {
    path: '/admin',
    component: Admin,
    redirect: '/admin/slideshow',
    children: [
      { path: '/admin/slideshow', name: 'Slideshow', component: Slideshow, meta: { title: '轮播图切换' } },
      { path: '/admin/edit', name: 'edit', component: Edit, meta: { title: '编辑' } },
      { path: '/admin/drafts', name: 'drafts', component: Drafts, meta: { title: '草稿箱' } },
      { path: '/admin/manuscript', name: 'manuscript', component: Manuscript, meta: { title: '原稿替换' } },
    ],
  },
  { path: '/admin/home', name: 'DashBoard', component: DashBoard, meta: { title: '仪表盘' } },
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
