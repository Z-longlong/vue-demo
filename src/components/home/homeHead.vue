<template>
	<div class="homeHead">
		<p>
			<img src="../../assets/logo.png" />
		</p>
		<router-link to="/order">
			<span>订单</span>
		</router-link>
	</div>
</template>

<script>
</script>

<style>
	.homeHead {
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.homeHead p {
		flex: 1;
	}
	
	.homeHead span {
		font-size: 0.3rem;
		align-self: center;
	}
	
	.homeHead img {
		height: 20px;
		width: 40px;
	}
</style>