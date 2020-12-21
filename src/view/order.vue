<template>
	<div>

		<div class="order" v-if="order.length == 0">
			<router-link to="/">返回首页</router-link>
			<img src="../assets/lazyload.png" />
			<p>空空如也~~快去逛逛把</p>
		</div>
		<div v-else>
			<p @click="back">返回</p>
			<div class="es_bs">
				<ul>
					<li v-for="item in order">
						<input type="checkbox" checked="checked" />
						<p>
							<span class="miaoshu">
						<i>商铺名称：</i><u>{{item.shopAddress}}</u>
						</span><br />
							<span class="miaoshu"><b>￥ {{item.shopQsj}}</b> /晚</span><br />
							<span class="miaoshu">联系电话：{{item.shopTel}}</span><br />
							<span class="miaoshu">入住人：{{item.userName}}先生/女士</span><br />
							<span class="miaoshu">入住人数：{{item.num}}人</span><br />
							<p>
								<span class="miaoshu">入住时间：</span><span class="miaoshu">{{begin}}</span><span class="miaoshu">至</span><span class="miaoshu">{{last}}</span><br />
							</p>
							<span class="miaoshu">入住天数：{{item.day}}天</span><br />
						</p>
					</li>
				</ul>
				<div>
				</div>
			</div>
			总价：<span class="miaoshu">{{allPrice}}</span>元
			<button @click="addToCar">去结算</button>
			<h2>以往订单</h2>
			<button @click="looking">查看入住时间</button>
			<ul>
				<li v-for="(item,index) in old">
					<p>
							<span class="miaoshu">
						<i>商铺名称：</i><u>{{item.shopAddress}}</u>
						</span><br />
							<span class="miaoshu"><b>￥ {{item.price}}</b> /晚</span><br />
							<span class="miaoshu">入住人：{{item.userName}}先生/女士</span><br />
							<span class="miaoshu">入住人数：{{item.num}}人</span><br />
							<span class="miaoshu">入住天数：{{item.count}}天</span><br />
							<p v-show="bol == true">
								<span class="miaoshu">入住时间：</span><span class="miaoshu" >{{action[index]}}</span><span class="miaoshu">至</span><span class="miaoshu">{{future[index]}}</span><br />
							</p>
						</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "order",
		data() {
			return {
				order: [],
				begin: '',
				last: '',
				allPrice: null,
				old:[],
				bol:false,
				action:[],
				future:[]
			}
		},
		created() {
			this.order.push(JSON.parse(this.$cookie.getCookie("obj")));
			this.getCar().then(res=>{
				this.old = res.data.data;
			})
		},
		watch: {
			order() {
				this.addAllPrice();
				this.run(this.order[this.order.length - 1].startTime, this.order[this.order.length - 1].endTime)
			},
		},
		methods: {
			addToCar() {
				let obj = JSON.parse(this.$cookie.getCookie("obj"));
				obj.zj = this.allPrice;
				this.addCar(obj);
				this.old = [];
			},
			...mapActions(["getCar", "addCar"]),
			looking(){
				console.log(this.old)
				for (var i = 0; i < this.old.length; i++) {
//					console.log(this.old[i]);
					this.action.push(this.start(this.old[i].startTime*1))
					this.future.push(this.end(this.old[i].endTime*1))
//					console.log(this.start(this.old[i].startTime))
				}
				this.bol = true;
			},
			setCookie(cname, cvalue, exdays) {
				var d = new Date();
				d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
				var expires = "expires=" + d.toUTCString();
				document.cookie = cname + "=" + cvalue + "; " + expires;
			},
			formatTen(num) {
				return num > 9 ? (num + '') : ("0" + num)
			},
			addAllPrice() {
				for(var i = 0; i < this.order.length; i++) {
					this.allPrice += this.order[i].day * this.order[i].price * 1;
				}
			},
			back(){
				this.$router.back(-1)
			},
			//起始日期转化
			start(date1) {
				let sj = new Date(date1);
				let year = sj.getFullYear();
				let mouth = sj.getMonth() + 1;
				let day = sj.getDate();
				let a = year + '-' + this.formatTen(mouth) + '-' + this.formatTen(day);
				return a
			},
			//结束日期转化
			end(date2) {
				let sj = new Date(date2);
				let year = sj.getFullYear();
				let mouth = sj.getMonth() + 1;
				let day = sj.getDate();
				let a = year + '-' + this.formatTen(mouth) + '-' + this.formatTen(day);
				return a
			},
			run(date1, date2) {
				this.begin = this.start(date1);
				this.last = this.end(date2);
			},
		},
	}
</script>

<style>
	.order {
		width: 100%;
		box-sizing: border-box;
	}
	
	.order img {
		width: 100%;
		vertical-align: top;
	}
</style>