<template>
	<div class="homeContent" v-if="typeList.length">
		<div class="show-top">
			<h2>396座城市50万套民宿</h2>
			<router-link to="search">
				<span class="el-icon-arrow-right"></span>
			</router-link>
		</div>
		<div class="swiper-container ">
			<div class="swiper-wrapper typeLogo">
				<div class="swiper-slide" v-for="item in typeList">
					<img :src="item.typeLogo" :typeId="item._id" />
				</div>
			</div>
		</div>
		<ul class="typeName">
			<li v-for="(item,index) in typeList">
				<router-link :to="{path:'/shop',query:{id:item._id}}">
					<span>
						{{item.typeName}}
					</span>
				</router-link>
			</li>
			<li class="all">
				<router-link to="/search">
					<span>
						全部
					</span>
				</router-link>
			</li>
		</ul>
		<div class="history">
			<h2>木鸟短租6年来已服务7897851位房客</h2>
			<p>找到满意舒适的房间</p>
		</div>
		
		<div class="show-safe">
			<img src="../../assets/muniao_safe.png"/>
			<p>芝麻信用，京东小白信用，身份证验证，联网核查每一位房东，安全有保证</p>
			<img src="../../assets/muniao_health.png"/>
			<p>酒店级保洁，床单、被罩、个人用品每客一换卫生舒适</p>
			<img src="../../assets/muniao_service.png"/>
			<div class="show-safe-inner">
			<h2>三十二种房型</h2>
			<router-link to="/search">
				<span class="el-icon-arrow-right"></span>
			</router-link>
			</div>
			<img src="../../assets/theme_room_1.jpg"/>
			<div class="makeOrder">
				<span class="el-icon-document"></span>
				<h2>如何预定房源</h2>
			</div>
			<div class="search-all">
			<img src="../../assets/order_room.jpg"/>
			<router-link to="/search">
				<p>查看全部</p>				
			</router-link>
			</div>
			<div class="tel">
				<img src="../../assets/phone.png"/>
				<p>400-056-0055</p>
				<p>客服电话8:30-22:30为您提供服务</p>
			</div>
			<div class="last">
				<img src="../../assets/logo.png"/>
				<span>下载APP</span><span>电脑版</span>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	import BScroll from "better-scroll";
	export default {
		name: "homeContent",
		data() {
			return {
				typeList: [],
				shopList:[]
			}
		},
		watch: {
			typeList() {
				this.$nextTick(() => {
					var mySwiper = new Swiper('.swiper-container', {
						effect: 'coverflow',
						slidesPerView: 1,
						centeredSlides: true,
					})
				})
			}
		},
		methods: {
			_getType(res) {
				var list = res.data.data;
				for(var i = 0; i < list.length; i++) {
					this.typeList.push(list[i])
				}
			},
			_getShop(res){
				for (var i = 0; i < 5; i++) {
					this.shopList.push(res.data.data[0])
				}
//				console.log(this.shopList)
			}
		},
		mounted() {
			this.$api.getType().then(this._getType);
			this.$api.getShop().then(this._getShop)
		},
		components:{
		}

	}
</script>

<style>
	.homeContent {
		margin-top: 224px;
		padding-top: 20px;
		box-sizing: border-box;
		border-top: solid 1px rgba(0, 0, 0, 0.6);
		overflow: hidden;
	}
	
	.show-top {
		clear: both;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.show-top h2 ,
	.show-safe-inner h2{
		float: left;
		font-size: 0.4rem;
	}
	
	.show-top .el-icon-arrow-right,
	.show-safe-inner .el-icon-arrow-right {
		float: right;
		background: lightcoral;
		font-size: 0.5rem;
		color: white;
	}
	
	.swiper-container {
		width: 100%;
		overflow: hidden;
		margin-top: 20px;
		box-sizing: border-box;
	}
	
	.typeLogo {
		display: flex;
		width: 900%;
		overflow: hidden;
		text-align: center;
	}
	
	.typeLogo img {
		width: 80%;
	}
	
	.typeName {
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		text-align: center;
	}
	
	.homeContent .typeName li {
		width: 20%;
	}
	.typeName li span{
		font-size: 0.4rem;
		font-weight: 500;
		color: black;
	}
	
	.history{
		width: 100%;
		box-sizing: border-box;
		margin: 10px 0;
		padding: 20px 10px;
		border-top:solid 1px rgba(0,0,0,0.6) ;
		border-bottom:solid 1px rgba(0,0,0,0.6) ;
		overflow: hidden;
	}
	.history h2,
	.makeOrder h2{
		font-size: 0.6rem;
	}
	.history p{
		font-size: 0.3rem;
		color: #CCCCCC;
		font-weight: 400;
	} 
	.show-safe img{
		width: 100%;
		vertical-align: top;
	}
	.show-safe p{
		padding: 10px 6px;
		font-size: 0.4rem;
		color: #CCCCCC;
	}
	.show-safe-inner{
		height: 0.8rem;
		line-height: 0.8rem;
	}
	.show-safe-inner .el-icon-arrow-right{
		margin-top: 8px;
	}
	.makeOrder{
		box-sizing: border-box;
		width: 100%;
		margin-top: 20px;
		padding: 10px 6px;
		border-top: solid 1px rgba(0,0,0,0.6);
		border-bottom: solid 1px rgba(0,0,0,0.6);
		overflow: hidden;
	}
	.makeOrder span{
		font-size: 0.6rem;
		text-shadow:2px 2px 2px lightcoral;
	}
	.search-all,
	.last{
		margin: 10px auto;
		padding: 10px 0;
		border-bottom: solid 1px rgba(0,0,0,0.6);
		position: relative;
		overflow: hidden;
	}
	.search-all p{
		position: absolute;
		bottom: 0;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	.tel{
		width: 100%;
		text-align: center;
		overflow: hidden;
		border-bottom:solid 1px rgba(0,0,0,0.6) ;
	}
	.tel img{
		width: 1rem;
		height: 1rem;
		vertical-align: top;
	}
	.last{
		display: flex;
		justify-content: space-around;
	}
	.last img{
		height: 40px;
		width: 84px;
	}
	.last span{
		font-size: 0.4rem;
	}
</style>