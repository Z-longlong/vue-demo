<template>
	<div v-if="shopOpt.length>0">
		<router-link to="/">返回首页</router-link>
		<div class="shopHead">
			<img src="../assets/logo.png" />
			<span class="typeName">{{shopOpt[0].typeName}}</span>
			<router-link to="/search">
				<p><span class="el-icon-search"></span>搜索景点/商圈/关键字 | <span class="el-icon-tickets"></span></p>
			</router-link>
		</div>
		<div class="shopBtnGroup" v-scroll="bs">
			<button>商品</button>
			<button>评论</button>
			<button>商家</button>
			<button>筛选</button>
		</div>
		<div class="es_bs better_scroll" ref="better_scroll">
			<ul ref="dddd">
				<li v-for="(item,index) in shopOpt">
					<ul>
						<li v-for="(item1,index1) in item">
							<router-link :to="{path:'/shop_show',query:{id:item1._id}}">
								<!--{path:'/shop',query:{id:item._id}}-->
								<shop-item :shopopt="item1"></shop-item>
							</router-link>
						</li>
					</ul>

				</li>
				<li v-show="bol">
					<div class="tjsj_loading">
						<p><span class="el-icon-loading"></span>
							<span>正在加载</span>
						</p>
					</div>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>import { mapState, mapMutations, mapActions } from "vuex";
import shopItem from "@/components/public/shopItem";
import Bscroll from "better-scroll";
export default {
	name: "shop",
	data() {
		return {
			bol: false,
			bs: null,
		}
	},
	computed: {
		...mapState(['shopOpt'])
	},
	watch: {
		shopOpt(nval, oval) {
			if(oval.length == 0) {
				return
			} else if(nval.length == 1) {
				var shopId = this.$route.query.id;
				this.$nextTick(() => {
					let bsEle = this.$refs.better_scroll;
					this.bs = new Bscroll(bsEle, {
						click: true,
						tap: true,
						enabled: false,
						bounce: {
							top: false,
							bottom: false
						},
						pullUpLoad: {
							threshoId: 0
						}
					})
					this.bs.disable();
					var that = this;
					this.bs.on("pullingUp", function() {
						that.bol = true;
						if(that.shopOpt.length < 50) {
							that.getShopMsg(shopId);
						} else {
							alert("我也是有底线的")
						}
					})
					this.bs.on("scroll", function(ev) {
						if(ev.y >= 0) {
							that.bs.disable();
						}
					})
				})
			} else {
				this.$nextTick(() => {
					this.bs.finishPullUp(); //告知betterscroll本次上拉加载完成
					this.bs.refresh(); //当dom发生改变后  需要重新计算better scroll的滚动长度
				})
			}
		}
	},
	directives: {
		scroll: {
			update(el, option) {
				if(option.value) {
					let rem = document.documentElement.style.fontSize.split("px")[0] * 1;
					window.onscroll = function() {
						let st = document.documentElement.scrollTop || document.body.scrollTop;
						//							console.log(st);
						if(st / rem >= 1.2) {
							option.value.enable();
						}
					}
				}
			}
		}
	},
	methods: {
		...mapActions(["getShopMsg"]),
	},
	mounted() {
		let shopId = this.$route.query.id;
		this.getShopMsg(shopId);

	},
	components: {
		shopItem,
	}
}</script>

<style>.shopHead {
	width: 96%;
	box-sizing: border-box;
	padding: 10px 4px;
	border-bottom: solid 1px #CCCCCC;
	align-content: center;
	display: flex;
	justify-content: space-between;
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

.shopBtnGroup {
	box-sizing: border-box;
	width: 100%;
	height: 1rem;
	position: sticky;
	top: 0;
	z-index: 100;
	display: flex;
}

.shopBtnGroup button {
	flex: 1;
}

.better_scroll {
	height: 12rem;
}

.es_bs {
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;
}

.es_bs li {
	width: 100%;
	padding: 6px;
	/*margin-top: 4px;*/
	padding-top: 10px;
	box-sizing: border-box;
	box-shadow: 2px 2px 8px black;
	border-bottom: solid 1px lightcoral;
}</style>