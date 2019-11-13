<template>
	<view class="container">
		<view v-if="cartList.length <= 0" class="empty">
			<image src="/static/emptyCart.jpg" mode="aspectFit"></image>
			<view v-if="hasLogin" class="empty-tips">
				空空如也
				<navigator class="navigator" v-if="hasLogin" url="../index/index" open-type="switchTab">随便逛逛></navigator>
			</view>
			<view v-else class="empty-tips">
				空空如也
				<!-- #ifdef MP-WEIXIN || MP-QQ -->
				<button open-type="getUserInfo" @getuserinfo="getUserInfo" lang="zh_CN"  class="navigator">去登陆</button>
				<!-- #endif -->
				<!-- #ifdef MP-ALIPAY -->
				<button  @tap="getUserInfo" lang="zh_CN" class="navigator navbtn">去登陆</button>
				<!-- #endif -->
				<!-- #ifdef H5 || MP-BAIDU || MP-TOUTIAO -->
				<view class="navigator" @click="navToLogin">去登陆></view>
				<!-- #endif -->
			</view>
		</view>
		<view v-else>
			<!-- 列表 -->
			<view class="cart-list">
				<block v-for="(item, index) in cartList" :key="item.id">
					<view
						class="cart-item" 
						:class="{'b-b': index!==cartList.length-1}"
					>
						<view class="image-wrapper">
							<image :src="item.picUrl"  @tap="navToDetailPage(item.goodsId)"
								:class="[item.loaded]"
								mode="aspectFill" 
								lazy-load 
								@load="onImageLoad('cartList', index)" 
								@error="onImageError('cartList', index)"
							></image>
							<view 
								class="yticon icon-xuanzhong2 checkbox"
								:class="{checked: item.checked}"
								@click="check('item', index, item)"
							></view>
						</view>
						<view class="item-right">
							<text class="clamp title">{{item.goodsName}}</text>
							<view>
								<text class="attr" v-for="(items, index) in item.specifications" :key="index">{{items}}</text>
							</view>
							<text class="price">¥{{item.number*item.price}}</text>
							<view class="number-item">
								<view class="selnum">
								  <view class="cut" @tap="cutNumber(item)">-</view>
								  <input v-model="item.number" class="number" disabled="true" type="number" />
								  <view class="add" @tap="addNumber(item)">+</view>
								</view>
							</view>
						</view>
						<text class="del-btn yticon icon-fork" @click="deleteCartItem(item.productId)"></text>
					</view>
				</block>
			</view>
			<!-- 底部菜单栏 -->
			<view class="action-section" v-if="cartList.length > 0">
				<view class="checkbox">
					<image 
						:src="allChecked?'/static/selected.png':'/static/select.png'" 
						mode="aspectFit"
						@click="check('all')"
					></image>
					<view class="clear-btn" :class="{show: allChecked}" @click="clearCart">
						清空
					</view>
				</view>
				<view class="total-box">
					<text class="price">¥{{cartTotal.checkedGoodsAmount}}</text>
					<!-- <text class="coupon">
						已优惠
						<text>74.35</text>
						元
					</text> -->
				</view>
				<button type="primary" class="no-border confirm-btn" @click="createOrder">去结算</button>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<view class=" m-t">
			<navigator class="f-header" url="../category/hot?type=hot">
				<image src="/static/temp/h1.png"></image>
				<view class="tit-box">
					<text class="tit">人气推荐</text>
					<text class="tit2">Guess You Like It</text>
				</view>
				<text class="yticon icon-you"></text>
			</navigator>
		</view>
		<view class="guess-section">
			<view 
				v-for="(item, index) in goodsList" :key="index"
				class="guess-item"
				@click="navToDetailPage(item.id)"
			>
				<view class="image-wrapper">
					<image :src="item.picUrl" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.name}}</text>
				<text class="price">￥{{item.retailPrice}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState, mapMutations
	} from 'vuex';
	import api from '@/common/vmeitime-http/'
	import json from '@/Json'
	import uniNumberBox from '@/components/uni-number-box.vue'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				total: 0, //总价格
				allChecked: true, //全选状态  true|false
				empty: false, //空白页现实  true|false
				cartList: [],
				haslogin: false,
				cartTotal: {},
				goodsList: [],
				agentId: 7813
			}
		},
		onLoad(){
			this.loadData();
			this.loadtopData()
		},
		onPullDownRefresh() {
			this.loadData(true);
			this.loadtopData()
		},
		computed:{
			...mapState(['hasLogin'])
		},
		methods: {
			...mapMutations(['login']),
			onShareAppMessage(res) {
				json.sharebtn(res)
			},
			//详情页
			navToDetailPage(id) {
				uni.navigateTo({
					url: `/pages/product/product?goodsId=${id}`
				})
			},
			getUserInfo: function() {
				let that = this;
				// #ifdef MP-ALIPAY
				my.getAuthCode({
					scopes: 'auth_user', // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
					success: (res) => {
						uni.showLoading({title: '正在登录'})
						if (res.authCode) {
							let code = res.authCode;
							// 获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								lang:'zh_CN',
								success: function(infoRes) {
									let userInfo = infoRes.userInfo;
									var options = {
										code: code,
										userInfo: userInfo
									}
									that.login(userInfo)
									that.gologin(options)
								},
								fail: function() {
									uni.hideLoading()
									uni.navigateTo({
										url: '/pages/public/login'
									})
									console.log('获取信息失败')
								}
							})
						}
					},
					fail: function(loginRes) {
						if (uni.getStorageSync('haslogin') == '') {
							that.haslogin = false
						}
						uni.navigateTo({
							url: '/pages/public/login'
						})
						uni.hideLoading()
					}
				})
				// #endif
				// #ifdef MP-WEIXIN || MP-QQ
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						uni.showLoading({title: '正在登录'})
						let code = loginRes.code;
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							lang:'zh_CN',
							success: function(infoRes) {
								let userInfo = infoRes.userInfo;
								var options = {
									code: code,
									userInfo: userInfo
								} 
								that.login(userInfo)
								setTimeout(function() {
									uni.hideLoading()
								}, 1000);
								that.gologin(options)
							},
							fail: function() {
								uni.navigateTo({
									url: '/pages/public/login'
								})
								uni.hideLoading()
							}
						})
					},
					fail: function(loginRes) {
						if (uni.getStorageSync('haslogin') == '') {
							that.haslogin = false
						}
						uni.navigateTo({
							url: '/pages/public/login'
						})
						uni.hideLoading()
					}
				})
				// #endif
			},
			gologin(options, data) {
				let that = this;
				let loginurl = '/auth/login_by_weixin';
				api.httppost(loginurl, options).then((res) => {
					if (res.data.errno == 0) {
						that.haslogin = true
						uni.setStorageSync('token', res.data.data.token);
						uni.setStorageSync('haslogin', true);
						that.loadData()
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.showToast({title: res.data.errmsg, icon: 'none'})
					uni.hideLoading()
				})
			},
			//请求数据
			async loadData(flag){
				uni.showLoading({title: '正在加载'})
				let carturl = '/cart/index'
				api.httpget(carturl).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.cartList = respons.data.cartList
						this.cartTotal = respons.data.cartTotal
						this.cartList.forEach(item=>{
							if(!item.checked)  this.allChecked = false
						})
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					if(flag) uni.stopPullDownRefresh();
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh();
				})
			},
			async loadtopData(flag) {
				uni.showLoading({title: '正在加载'})
				let homeurl = '/home/index';
				api.httpget(homeurl).then((res) => {
					let respons = res.data;
					let resp = respons.data;
					if(respons.errno == 0) {
						this.goodsList = resp.hotGoodsList;
						uni.setStorageSync('goodsList', this.goodsList)
					}
					if(flag) uni.stopPullDownRefresh()
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh()
				})
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].image = '/static/errorImage.jpg';
			},
			navToLogin(){
				uni.navigateTo({
					url: '/pages/public/login'
				})
			},
			 //选中状态处理
			check(type, index,item){
				let arr = []
				let data = {}
				if(type === 'item'){
					this.cartList[index].checked = !this.cartList[index].checked;
					data = {isChecked: item.checked?1:0, productIds: [item.productId] }
				} else {
					const checked = !this.allChecked
					const list = this.cartList;
					list.forEach(item=>{
						item.checked = checked;
						arr.push(item.productId)
					})
					this.allChecked = checked;
					data.productIds = arr
					data = {isChecked: this.allChecked?1:0, productIds: arr}
				}
				this.calcTotal()
				let checkedurl = '/cart/checked';
				api.httppost(checkedurl, data).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.loadData()
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
				})
			},
			//数量
			numberChange(item,data){
				uni.showLoading({title: '正在加载'})
				let updateurl = '/cart/update';
				api.httppost(updateurl,{goodsId: item.goodsId, id:item.id, number: item.number, productId: item.productId}).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.loadData()
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
				})
			},
			//删除
			deleteCartItem(id){
				this.deletepro([id])
			},
			deletepro (arr) {
				uni.showLoading({title: '正在加载'})
				let deleteurl = '/cart/delete';
				api.httppost(deleteurl,{productIds: arr}).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.cartList = respons.data.cartList;
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
				})
			},
			//清空
			clearCart(){
				let arr = []
				uni.showModal({
					content: '清空购物车？',
					success: (e)=>{
						if(e.confirm){
							this.cartList.forEach(item => {
								arr.push(item.id)
							})
							this.deletepro(arr);
						}
					}
				})
			},
			//计算总价
			calcTotal(){
				let list = this.cartList;
				if(list.length === 0){
					this.empty = true;
					return;
				}
				let total = 0;
				let checked = true;
				list.forEach(item=>{
					if(item.checked === true){
						total += item.price * item.number;
					}else if(checked === true){
						checked = false;
					}
				})
				this.allChecked = checked;
				this.total = Number(total.toFixed(2));
			},
			cutNumber: function(item) {
			  item.number = (item.number - 1 > 1) ? item.number - 1 : 1
			  this.numberChange(item)
		    },
			  addNumber: function(item) {
				  item.number = item.number + 1
				  this.numberChange(item)
			  },
			//创建订单
			createOrder(){
				if (this.cartTotal.checkedGoodsAmount <= 0) return false;
				uni.setStorageSync('cartId', 0)
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			}
		}
	}
</script>

<style lang='scss'>
	.container{
		/* 空白页 */
		.empty{
			/* position:absolute;
			left: 0;
			top:0; */
			width: 100%;
			height: 100%;
			padding:200upx 0;
			display:flex;
			justify-content: center;
			flex-direction: column;
			align-items:center;
			background: #fff;
			image{
				width: 240upx;
				height: 160upx;
				margin-bottom:30upx;
			}
			.empty-tips{
				display:flex;
				font-size: $font-sm+2upx;
				color: $font-color-disabled;
				line-height: 50upx;
				.navigator{
					color: $uni-color-primary;
					margin-left: 16upx;padding: 0;
					width:130upx;
					line-height: 50upx;
					height:50upx;
					font-size: 24upx;
					&.navbtn{
						background: #ccc;
					}
				}
			}
		}
	}
	/* 购物车列表项 */
	.cart-item{
		display:flex;
		position:relative;
		padding:30upx 40upx;
		.image-wrapper{
			width: 150upx;
			height: 150upx;
			flex-shrink: 0;
			position:relative;
			image{
				border-radius:8upx;opacity: 1;
			}
		}
		.checkbox{
			position:absolute;
			left:-16upx;
			top: -16upx;
			z-index: 8;
			font-size: 44upx;
			line-height: 1;
			padding: 4upx;
			color: $font-color-disabled;
			background:#fff;
			border-radius: 50px;
		}
		.item-right{
			display:flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position:relative;
			padding-left: 30upx;
			.title,.price{
				font-size:$font-base + 2upx;
				color: $font-color-dark;
				height: 40upx;
				line-height: 40upx;
			}
			.attr{
				font-size: $font-sm + 2upx;
				color: $font-color-light;
				padding-right:10upx;
				/* height: 50upx;
				line-height: 50upx; */
			}
			.price{
				height: 50upx;
				line-height:50upx;
				position: absolute;
				right: 20upx;
				bottom: 7upx;
			}
		}
		.del-btn{
			padding:4upx 10upx;
			font-size:34upx; 
			height: 50upx;
			color: $font-color-light;
		}
	}
	/* 底部栏 */
	.action-section{
		/* #ifdef H5 */
		margin-bottom:100upx;
		/* #endif */
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 690upx;
		height: 100upx;
		padding: 0 30upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		.checkbox{
			height:52upx;
			position:relative;
			image{
				width: 52upx;
				height: 100%;
				position:relative;
				z-index: 5;
			}
		}
		.clear-btn{
			position:absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52upx;
			line-height: 52upx;
			padding-left: 38upx;
			font-size: $font-base;
			color: #fff;
			background: $font-color-disabled;
			border-radius:0 50px 50px 0;
			opacity: 0;
			transition: .2s;
			&.show{
				opacity: 1;
				width: 120upx;
			}
		}
		.total-box{
			flex: 1;
			display:flex;
			flex-direction: column;
			text-align:right;
			padding-right: 40upx;
			.price{
				font-size: $font-lg;
				color: $font-color-dark;
			}
			.coupon{
				font-size: $font-sm;
				color: $font-color-light;
				text{
					color: $font-color-dark;
				}
			}
		}
		.confirm-btn{
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: $font-base + 2upx;
			background: $uni-color-primary;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
		}
	}
	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked{
		color: $uni-color-primary;
	}
	.f-header{
		display:flex;
		align-items:center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.icon-you{
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
	/* 猜你喜欢 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 0upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 50%;
			padding-bottom: 40upx;
			border-top: 0.5px solid #f4f4f4;
			&:nth-child(2n+1){
				border-right: 0.5px solid #f4f4f4;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			background: none;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: 24upx;
			color: $font-color-dark;
			line-height: 80upx;
			text-indent: 20upx;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
			text-indent: 20upx;
		}
	}
	
	.number-item .selnum {
	  margin-top:10upx;
	  width: 250upx;
	  height: 55upx;
	  border: 1px solid #ccc;
	  display: flex;
	}
	.number-item .cut {
	  width: 80upx;
	  height: 100%;
	  line-height:50upx ;
	  text-align: center;
	}
	.number-item .number {
	  flex: 1;
	  height: 100%;
	  text-align: center;
	  border-left: 1px solid #ccc;
	  border-right: 1px solid #ccc;
	  float: left;
	}
	.number-item .add {
	  width: 80upx;
	  height: 100%;
	  line-height:50upx ;
	  text-align: center;
	}
</style>
