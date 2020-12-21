<template>
	<div class="homeSearch">
		<!--<router-link to="/">-->
			<p>
				<span class="el-icon-search">
				</span>
				<input type="text" placeholder="搜索房源" />
			</p>
		<!--</router-link>-->
		<h2>热门城市</h2>
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
	</div>
</template>

<script>
	export default {
		name: "search",
		data() {
			return {
				typeList: []
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
				console.log(res)
			}
		},
		mounted() {
			this.$api.getType().then(this._getType);
		}

	}
</script>

<style>
	.homeSearch{
		box-sizing: border-box;
		margin-top: 20px;
		background-image: linear-gradient(90deg,#0af,#0085f);
		padding: 7.5px 14px;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 8;
	}
	
	.homeSearch p {
		height: 0.72rem;
		background: white;
		text-align: center;
		color: #CCCCCC;
		font-size: 16px;
		line-height: 0.72rem;
		border-bottom: solid 1px #CCCCCC;
	}
	.homeSearch h2{
		font-size: 0.5rem;
	}
	.homeSearch h2:after{
		content: "HOT";
		font-weight: 200;
		color: red;
	}
	.homeSearch input{
		border: none;
		outline: none;
	}
		.typeName {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}
	
	.typeName li {
		width: 30%;
	}
	.typeName li span{
		font-size: 0.4rem;
		font-weight: 500;
		color: black;
	}
</style>