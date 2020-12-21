import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import cookie from "@/untils/cookie";
import qs from "qs";
let headers = {
	"content-type": "application/x-www-form-urlencoded"
}
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		shopOpt: [], //店铺
		goodsList: [], //商品集合
	},
	mutations: {
		_shopOpt(state, value) {
			state.shopOpt.push(value);
			console.log(state.shopOpt)
		},
	},
	actions: {
		getShopMsg({
			commit,
			dispatch
		}, value) {
			let getShop = Axios.get("http://localhost:8080/ele/shop", {
				params: {
					shopId: value
				}
			});
			Promise.all([getShop])
				.then(res => {
					if(res[0].data.status == 1) {
						commit("_shopOpt", res[0].data.data)
					}
				})
		},
		getGoods({
			commit,
			dispatch
		}, value) {
			console.log(value)
			return Axios.get("http://localhost:8080/ele/goods", {
				params: {
					goodId: value
				}
			});
		},
		addCar({
			commit,
			dispatch
		}, data) {
			console.log(qs.stringify(data));
			return Axios.post("http://localhost:8080/ele/car", qs.stringify(data), {
				headers
			})
		},
		getCar() {
			return Axios.get("http://localhost:8080/ele/car", {
				params: {
					token_id: cookie.getCookie("token_id"),
					userId: cookie.getCookie("user_id"),
				}
			})
		}

	}
})