<template>
	<div>
		<div class="shopHead">
			<img src="../assets/logo.png" />
			<span class="typeName">{{shopOpt[0].typeName}}</span>
			<router-link to="/search">
				<p><span class="el-icon-search"></span>搜索景点/商圈/关键字 | <span class="el-icon-tickets"></span></p>
			</router-link>
		</div>
		<div class="shopBtnGroup">
			<button>商品</button>
			<button>评论</button>
			<button>商家</button>
			<button>筛选</button>
		</div>
		<div class="es_bs" ref="es_bs">
			<ul>
				<li v-for="(item,index) in shopOpt">
					<router-link :to="'/shop/'+item._id">
						<shop-item :shopopt="item"></shop-item>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions } from "vuex";
	import shopItem from "@components/public/shopItem";
	export default {
		name: "shop",
		data() {
			return {
			}
		},
		computed: {
			...mapState(['shopOpt'])
		},
		methods: {
			...mapActions(["getShopMsg"])
		},
		mounted() {
			let shopId = this.$route.query.id;
			this.getShopMsg(shopId)
		},
		components: {
			shopItem
		}
	}
</script>

<style>
	.shopHead {
		width: 96%;
		box-sizing: border-box;
		padding: 10px 4px;
		border-bottom: solid 1px #CCCCCC;
		display: flex;
		align-content: center;
		justify-content: space-between;
	}
	
	.shopHead img {
		width: 40px;
		height: 20px;
	}
	
	.shopHead .typeName {
		font-size: 0.4rem;
		font-weight: 700;
		text-shadow: 2px 2px 1px lightcoral;
	}
	
	.shopHead p {
		font-size: 0.3rem;
		color: #CCCCCC;
	}
	
	.shopHead span {
		font-size: 0.3rem;
	}
	
	.shopBtnGroup {
		box-sizing: border-box;
		width: 100%;
		height: 1rem;
		position: sticky;
		top: 0;
		display: flex;
	}
	
	.shopBtnGroup button {
		flex: 1;
	}
	.es_bs{
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}
	.es_bs li{
		width:100%;
		padding: 6px;
		margin-top: 4px;
		box-sizing: border-box;
		box-shadow: 2px 2px 8px black;
		border-bottom: solid 1px lightcoral;
	}
	.es_bs img{
		width: 100%;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	.es_bs .miaoshu{
		font-size: 0.3rem;
		text-shadow: 2px 2px 2px #ccc;
		color: ;
	}
	.miaoshu i{
		color: lightcoral;
		font-weight: 800;
		font-size: 0.35rem;
	}
	.miaoshu u:hover{
		font-size: 0.32rem;
		letter-spacing: 4px;
	}
	.miaoshu b{
		color: red;
	}
	.miaoshu:nth-of-type(3){
		color: darkblue;
	} 
</style>