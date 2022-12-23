import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import UserView from "@/views/UserView";
import ProductView from "@/views/ProductView";
import LogView from "@/views/LogView";
import RegisterView from "@/views/RegisterView";
import ForgetView from "@/views/ForgetView";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'logView',
    component: LogView
  },
  {
    path: '/forget',
    name: 'forget',
    component: ForgetView
  },
  {
    path: '/login',
    name: 'login',
    component: LogView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
