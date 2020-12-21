<template>
	<div class="home">
		<home-head></home-head>
			<router-link to="/search">
				<img src="../assets/searchbg.jpg" class="backgroud" />
				<div id="search-ipt">
					<span class="el-icon-search"></span> 搜索房源、输入城市或者目的地
					<br />
				</div>
			</router-link>
			<img src="../assets/long_open.png" class="newUser" />
		<home-search></home-search>
		<home-content></home-content>
		<home-footer></home-footer>
	</div>
</template>

<script>
	import homeHead from "@/components/home/homeHead";
	import homeSearch from "@/components/home/homeSearch";
	import homeContent from "@/components/home/homeContent";
	import homeFooter from "@/components/public/footer";
	export default{
		name:"home",
		components:{
			homeHead,
			homeSearch,
			homeContent,
			homeFooter
		}
	}
</script>

<style>
	.home{
		position: relative;
		box-sizing: border-box;
	}
	
	 #search-ipt {
	 	box-sizing: border-box;
		width: 98%;
		font-size: 0.3rem;
		color: #CCCCCC;
		height: 0.6rem;
		line-height: 0.6rem;
		background: white;
		border-radius: 10px;
		position: -webkit-sticky;
		position: sticky;
		top: 14px;
		z-index: 101;
		float: left;
		margin-left: 2px;
		margin-top: 120px;
	}
	#search-ipt:after{
		display: block;
		content: "";
		height: 0;
		clear: both;
		visibility: hidden;
	}
	
	#search-ipt span {
		font-size: 0.4rem;
		width: 0.4rem;
		height: 0.4rem;
	}
	
	.newUser {
		box-sizing: border-box;
		position: absolute;
		top: 3.4rem;
		left: 40px;
		z-index: 100;
		width: 4rem;
		height: 1.2rem;
	}
	.newUser:after{
		display: block;
		content: "";
		height: 0;
		clear: both;
		visibility: hidden;
	}
	.backgroud {
		position: absolute;
		z-index: 99;
		width: 100%;
		vertical-align: top;
	}
</style>