import Axios from "axios";
import qs from "qs";
const baseURL = "http://localhost:8080";
const headers = {"content-type":"application/x-www-form-urlencoded"}
export default {
	getType(){
		return Axios.get(baseURL+"/admin/shopType")
	},
	getShop(){
		return Axios.get(baseURL+"/admin/shop")
	},
	getCode(data){
		data = qs.stringify(data)
		return Axios.post(baseURL+"/ele/code",data,{headers})
	},
	login(data){
		return Axios.post(baseURL+"/ele/login",qs.stringify(data),{headers})
	},
	
}