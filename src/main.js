// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/index.css";
import api from "@/api";
import cookie from "@/untils/cookie";
import store from "./store";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$api = api;
Vue.prototype.$cookie = cookie;

//路由拦截
router.beforeEach((to,from,next)=>{
	if(to.meta.isLogin){
		if(cookie.getCookie("user_id")){
			next("/order")
		}else{
			next("/login")
		}
	}else{
		next()
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
