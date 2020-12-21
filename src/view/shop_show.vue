<template>
	<div>
		<div class="shopHead">
			<span @click="fn">返回</span>
			<img src="../assets/logo.png" />
			<router-link to="/search">
				<p><span class="el-icon-search"></span>搜索景点/商圈/关键字 | <span class="el-icon-tickets"></span></p>
			</router-link>
		</div>
		<div class="es_bs" :v-if="good.length > 0?false:true">
			<img :src="good.shopLogo" />
			<p>
				<span class="miaoshu">
						<i>商铺名称：</i><u>{{good.shopAddress}}</u>
						</span><br />
				<span class="miaoshu"><b>￥ {{good.shopQsj}}</b> /晚</span><br />
				<span class="miaoshu">联系电话：{{good.shopTel}}</span>
			</p>
			<div>
			</div>
		</div>
		<div class="block">
			<p class="demonstration">日期范围</p>
			<el-date-picker v-model="time" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" default-value="2010-10-01">
			</el-date-picker>
		</div>
		<div class="people">
			请输入姓名：
			<input type="tel" v-model="userName" placeholder="请输入姓名" /><br/> 请输入人数：
			<input type="number" v-model="people" placeholder="请输入入住人数" />
		</div>
		<div class="car">
			<span>￥ {{good.shopQsj}}</span><br /> 每晚
				<button @click="makeLogin">确认订单</button>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex';
	export default {
		name: "shop_show",
		data() {
			return {
				good: [],
				time: "",
				startTime: '',
				endTime: '',
				userName: "",
				people: "",
				day:""
			}
		},
		watch: {
			time() {
				for(var k in this.time) {
					if(k == 0) {
						this.startTime = this.time[k]
					} else if(k == 1) {
						this.endTime = this.time[k]
					}
				}
				this.run(this.startTime,this.endTime);
			}
		},
		computed: {
			...mapState(['shopOpt'])
		},
		methods: {
			...mapActions(["getGoods", "addCar"]),
			fn() {
				this.$router.back(-1)
			},
			makeLogin(){
				let obj = {
					token_id: this.$cookie.getCookie("token_id"),
					userId: this.$cookie.getCookie("user_id"),
					userName: this.userName,
					num: this.people,
					price: this.good.shopQsj,
					day:this.day,
					startTime:this.startTime.getTime(),
					endTime:this.endTime.getTime(),
					shopAddress:this.good.shopAddress,
					shopQsj:this.good.shopQsj,
					shopTel:this.good.shopTel
				}
				if(obj.userName == '' || obj.people == '' || obj.day == ""||obj.startTime == ""||obj.endTime == ""){
					alert('您的信息未填完整')
				}else{
					this.$cookie.setCookie("obj",JSON.stringify(obj),1);
				}
				//路由跳转
				this.$router.push({
					path:"/makeSureOrder",
				})
			},
			formatTen(num) {
				return num > 9 ? (num + '') : ("0" + num)
			},
			//起始日期转化
			start(date1) {
				let year = date1.getFullYear();
				let mouth = date1.getMonth() + 1;
				let day = date1.getDate();
				let hour = date1.getHours();
				let minute = date1.getMinutes();
				let a = year + '-' + this.formatTen(mouth) + '-' + this.formatTen(day);
				return a
			},
			//结束日期转化
			end(date2) {
				let year = date2.getFullYear();
				let mouth = date2.getMonth() + 1;
				let day = date2.getDate();
				let hour = date2.getHours();
				let minute = date2.getMinutes();
				let a = year + '-' + this.formatTen(mouth) + '-' + this.formatTen(day);
				return a
			},
			run(date1, date2) {
				this.start(date1);
				this.end(date2);
				let startSecond = date1.getTime();
				let endSecond = date2.getTime();
				this.day = (endSecond-startSecond)/(24*3600*1000)
			},
		},
		mounted() {
			let objId = this.$route.query.id;
			this.getGoods(objId).then(res => {
				this.good = res.data.data;
			})
		}
	}
</script>

<style>
	.el-picker-panel {
		width: 100%;
		overflow: hidden;
	}
	
	.el-date-range-picker .el-picker-panel__body {
		min-width: 7.5rem;
	}
	
	.el-date-range-picker__content {
		float: none;
		width: 100%;
	}
	
	.shopHead {
		width: 96%;
		box-sizing: border-box;
		padding: 10px 4px;
		border-bottom: solid 1px #CCCCCC;
		align-content: center;
		display: flex;
		justify-content: space-around;
	}
	
	.shopHead img {
		margin: 0;
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
	
	.es_bs {
		width: 100%;
		/*height: 0;*/
		overflow: hidden;
		box-sizing: border-box;
	}
	
	.miaoshu {
		font-size: 0.3rem;
		text-shadow: 2px 2px 2px #ccc;
	}
	
	.miaoshu i {
		color: lightcoral;
		font-weight: 800;
		font-size: 0.35rem;
	}
	
	.miaoshu u:hover {
		font-size: 0.32rem;
		letter-spacing: 4px;
	}
	
	.miaoshu b {
		color: red;
	}
	
	.miaoshu:nth-of-type(3) {
		color: darkblue;
	}
	
	.car {
		box-sizing: border-box;
		width: 100%;
		padding: 10px;
		position: fixed;
		bottom: 100px;
		left: 0;
		background: lightgray;
	}
	
	.car span {
		font-size: 0.4rem;
		font-weight: 800;
	}
	
	.car button {
		position: relative;
		left: 4rem;
		bottom: 20px;
		border: none;
		outline: none;
		background: lightsalmon;
		width: 100px;
		height: 28px;
		border-radius: 20px;
	}
</style>