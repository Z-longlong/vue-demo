<template>
	<div class="shopItem">
	<img :src="shopopt.shopLogo" />
					<p>
						<span class="miaoshu">
						<i>商铺名称：</i><u>{{shopopt.shopAddress}}</u>
						</span><br />
						<span class="miaoshu"><b>￥ {{shopopt.shopQsj}}</b> /晚</span><br />
						<span class="miaoshu">联系电话：{{shopopt.shopTel}}</span>
						<el-rate v-model="shopopt.shopRack*1" disabled show-score text-color="#ff9900" score-template="{5}">
						</el-rate>
					</p>
					<div>
				<el-tag size="mini" closable>实惠</el-tag>
				<el-tag size="mini" closable>玩的开心</el-tag>
				<el-tag size="mini" closable>{{shopopt.shopOpt}}</el-tag>
			</div>
	</div>
</template>

<script>
	export default {
		name:"shopItem",
		data(){
			return {
//				rate:4
			}
		},
		methods:{
			fn(){
				alert(1)
			}
		},
		props:["shopopt"],
	}
</script>

<style>
	.shopItem img{
		width: 100%;
		height:6.6rem;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	.miaoshu{
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