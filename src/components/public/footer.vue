<template>
	<div class="footer">
		<router-link to="/">
			<dl>
				<dt v-if="$router.name == 'home'"><img src="../../../../day09/vuedemo/src/assets/home-1.png"/></dt>
				<dt v-else><img src="../../../../day09/vuedemo/src/assets/home-0.png"/></dt>
				<dd :class="$route.name=='home'?'active':''">首页</dd>
			</dl>
		</router-link>
		<router-link to="/search">
			<dl>
				<dt v-if="$router.name == 'search'"><img src="../../../../day09/vuedemo/src/assets/discover-1.png"/></dt>
				<dt v-else><img src="../../../../day09/vuedemo/src/assets/discover-0.png"/></dt>
				<dd :class="$route.name=='search'?'active':''">搜索</dd>
			</dl>
			</router-link>
			<router-link to="/order">
			<dl>
				<dt v-if="$router.name == 'order'"><img src="../../../../day09/vuedemo/src/assets/order-1.png"/></dt>
				<dt v-else><img src="../../../../day09/vuedemo/src/assets/order-0.png"/></dt>
				<dd :class="$route.name=='order'?'active':''">订单</dd>
			</dl>
			</router-link>
			<router-link to="/login">
			<dl>
				<dt v-if="$router.name == 'login'"><img src="../../../../day09/vuedemo/src/assets/mine-1.png"/></dt>
				<dt v-else><img src="../../../../day09/vuedemo/src/assets/mine-0.png"/></dt>
				<dd :class="$route.name=='login'?'active':''">我的</dd>
			</dl>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: "footer",
		mounted() {
		}
	}
</script>

<style>
	.footer {
		box-sizing: border-box;
		height: 1rem;
		display: flex;
		font-size: 12px;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		position: fixed;
		bottom: 0;
		width: 100%;
		box-shadow: 0px -1px 1px #ccc;
		z-index: 100;
		background: white;
		overflow: hidden;
	}
	
	.footer img {
		width: 0.6rem;
		height: 0.6rem;
	}
	.footer .active{
		color: #0085FF;
	}
</style>