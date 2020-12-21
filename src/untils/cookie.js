export default{
	getCookie(key){
		let cookie = document.cookie;
		let arr = cookie.split('; ');
		for (var i = 0; i < arr.length; i++) {
			let arr2 = arr[i].split("=");
			if(arr2[0] == key){
				return arr2[1];
			}
		}
		return undefined
	},
	setCookie(key,value,exp){
		let date = new Date();
		date.setDate(date.getDate()+exp);
		document.cookie = key +"="+value+";expires="+date
	}
}
