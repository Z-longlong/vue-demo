import Vue from 'vue'
import Router from 'vue-router'
import home from "@/view/home"
import login from "@/view/login"
import search from "@/view/search"
import order from "@/view/order"
import shop from "@/view/shop"
import shop_show from "@/view/shop_show"

Vue.use(Router)

export default new Router({
  routes: [
  {
  	path:'/',
  	name:"home",
  	component:home
  },
  {
  	path:'/login',
  	name:"login",
  	component:login
  },
  {
  	path:"/search",
  	name:"search",
  	component:search
  },
  {
  	path:'/order',
  	name:'order',
  	component:order
  },
  {
  	path:"/shop",
  	name:"shop",
  	component:shop
  },
  {
  	path:"/shop_show",
  	name:"shop_show",
  	component:shop_show
  },
  {
  	path:"/makeSureOrder",
  	name:"makeSureOrder",
  	meta:{
  		isLogin:true
  	},
  }
  ]
})
