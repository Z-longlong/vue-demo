<template>
	<div class="enter">
		<h2>木鸟短租</h2>
		<p>新人有礼 注册送88元</p>
			<h3 @click="fn">回首页</h3>
	<div v-show="bol ==true" class="login">
		<input type="tel" v-model="tel" placeholder="请输入手机号码" /><button @click="getcode">获取验证码</button><hr /> <br/> 
		<input type="text" v-model="code"  placeholder="请输入短信验证码"/><hr />
		<button @click="login" id="makesuerEnter">登陆</button><br />
		<span>提示：验证通过即登陆，未注册手机将注册木鸟账号</span>
	</div>
	<div class="user" v-show="bol == false">
		<h3>{{this.tel}}用户</h3>
		<ul>
			<li>订单<span class="el-icon-arrow-right"></span></li>
			<li>优惠券<span class="el-icon-arrow-right"></span></li>
			<li>芝麻信用<span class="el-icon-arrow-right"></span></li>
			<li>意见反馈<span class="el-icon-arrow-right"></span></li>
			<li>关于我们<span class="el-icon-arrow-right"></span></li>
			<li>联系客服 400-056-0055</li>
		</ul>
		<p @click="setCookie('token_id','',0)">注销</p>
		<img src="../assets/long_open.png"/>
	</div>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				tel: "",
				code: "",
				bol:null
			}
		},
	created(){
				if(typeof this.$cookie.getCookie("token_id") == 'string'){
					this.bol = false
					this.tel = this.$cookie.getCookie("name")
				}else if(typeof this.$cookie.getCookie("token_id") === 'undefined'){
					this.bol = true
				}
				
		},
		methods: {
				fn() {
				this.$router.back(-1)
			},
			getcode() {
				this.$api.getCode({
					tel: this.tel
				}).then(res => {
					this.code = res.data.data.code;
				})
			},
			login() {
				if(!this.tel && !this.code) return
				this.$api.login({
					tel: this.tel,
					code: this.code
				}).then((res => {
					if(res.data.status == 1) {
						console.log(res)
						this.$cookie.setCookie("token_id", res.data.data.token_id, 7);
						this.$cookie.setCookie("user_id",res.data.data.id,7);
						this.$cookie.setCookie("name", this.tel, 7);
						this.$router.back(-1); //路由回退上一级
					}
				}))
			},
				setCookie(cname, cvalue, exdays) {
    			var d = new Date();
    			d.setTime(d.getTime() + (exdays*24*60*60*1000));
   				 var expires = "expires="+d.toUTCString();
    			document.cookie = cname + "=" + cvalue + "; " + expires;
    			this.bol=true; 
    			return setCookie("name","",0)
				}
			}
	}
</script>

<style>
	.enter{
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		background: lightcyan;
	}
	.enter h2{
		font-size: 0.6rem;
		text-shadow: 6px 2px 1px lightblue;
	}
	.enter p{
		color: red;
	}
	.login{
		width: 100%;
		box-sizing: border-box;
		padding-top: 1rem;
	}
	.login input{
		border: none;
		outline: none;
		background: lightcyan;
	}
	.login button{
		border: none;
		outline: none;
		background: white;
		border: solid 1px ;
		border-radius: 10px;
	}
	.login button:nth-of-type(1){
		margin-left: 1rem;
		padding: 4px;
		border-radius: 16px;
	}
	#makesuerEnter{
		width: 80%;
		height: 0.8rem;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		background-color: lightpink;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	.user{
		width: 100%;
		margin-top: 10px;
		box-sizing: border-box;
	}
	.user h3{
		font-size: 0.4rem;
		padding: 6px 0;
		background: lightpink;
		text-align: center;
		height: 1.2rem;
		line-height: 1.2rem;
		border-bottom: solid 2px lightcoral;
		box-shadow: 2px 2px 2px black;
	}
	.user li{
		width: 100%;
		background: lightskyblue;
		box-sizing: border-box;
		padding: 6px 12px;
		color: lightseagreen;
		font-size: 0.3rem;
		font-weight: 800;
		text-shadow: 2px 1px 1px #222222;
		height: 0.8rem;
		border-bottom: solid 2px lightcoral;
		box-shadow: 2px 2px 2px black;
		margin-top: 10px;
	}
	.user li:last-of-type{
		text-align: center;
	}
	.user li span{
		float: right;
		background: lightsalmon;
		width: 14px;
		height: 14px;
		color: white;
		margin-top: 4px;
	}
	.user p{
		font-size: 0.4rem;
		font-size: 0.5rem;
		text-align: center;
		background: lightyellow;
		margin-top: 10px;
		font-weight: 800;
		text-shadow: 2px 2px 2px darkred;
		border-bottom: solid 2px lightcoral;
		box-shadow: 2px 2px 2px black;
	}
	.user img{
		width: 100%;
		vertical-align: top;
	}
	#app{
		padding-bottom: 4px;
	}
</style>