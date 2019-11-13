<template>  
    <view class="container">  
		<view class="user-section">
			<image class="bg" src="/static/user-bg.jpg"></image>
			<view class="user-info-box" @tap="auth">
				<view class="portrait-box">
					<image class="portrait" :src="userInfo.avatarUrl || '/static/missing-face.png'"></image>
				</view>
				<view class="info-box" @tap="getUserInfo">
					<text class="username">{{userInfo.nickName || '游客'}}</text>
				</view>
			</view>
		</view>
		<view 
			class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<image class="arc" src="/static/arc.png"></image>
			<!-- 订单 -->
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouye"></text>
					<text>全部订单</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text class="textnum" v-if="user.unpaid>0">{{user.unpaid}}</text>
					<text>待付款</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=3')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text class="textnum" v-if="user.unrecv>0">{{user.unrecv}}</text>
					<text>待收货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-xiaoxi"></text>
					<text class="textnum" v-if="user.uncomment>0">{{user.uncomment}}</text>
					<text>待评价</text>
				</view>
			</view>
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/mycoupon/mycoupon')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-tuijian"></text>
					<text>我的优惠券</text>
				</view>
				<view class="order-item" @click="navTofx()" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-fenxiang2"></text>
					<text>分销中心</text>
				</view>
				<!-- <view class="order-item" @click="navTo('')"  hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text class="textnum" v-if="user.unpaid>0">{{user.unpaid}}</text>
					<text>关注的店铺</text>
				</view> -->
				<view class="order-item" @click="navTo('/pages/mycoloect/mycoloect')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-xiatubiao--copy"></text>
					<text>收藏商品</text>
				</view>
				<view class="order-item" @click="navTo('/pages/user/feedback')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-pingjia"></text>
					<text>意见反馈</text>
				</view>
			</view>
			<!-- 浏览历史 -->
			<view class="history-section icon">
				<view v-if="footerlistdata.length>0">
					<view class="sec-header">
						<text class="yticon icon-lishijilu"></text>
						<text>浏览历史</text>
					</view>
					<scroll-view scroll-x class="h-list">
						<image @click="navTopro(item.goodsId)"  v-for="(item, index) in footerlistdata" :key="item.id" :src="item.picUrl" mode="aspectFill"></image>
					</scroll-view>
				</view>
				<!-- <list-cell icon="icon-iconfontweixin" iconColor="#e07472" title="我的钱包" tips="您的会员还有3天过期"></list-cell> -->
				<list-cell icon="icon-dizhi" iconColor="#5fcda2" title="收货地址" @eventClick="navTo('/pages/address/address')"></list-cell>
				<!-- 小程序里面才打开分享按钮 -->
				<!-- #ifdef MP -->
				<button class="share-btn" open-type="share" >
					<list-cell icon="icon-fenxiang2" iconColor="#5fcda2" title="分享" open-type="share" tips="邀请好友赢大礼">
					</list-cell>
				</button>
				<!-- #ifdef MP-WEIXIN -->
				<button class="share-btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" >
					<list-cell icon="icon-dianhua-copy" iconColor="#5fcda2" title="绑定手机" :tips="hasphone?'已绑定':'绑定手机'"></list-cell>
				</button>
				<!-- #endif -->
				<button class="share-btn"  open-type="contact" >
					<list-cell icon="icon-tuijian" iconColor="#5fcda2" title="联系客服" open-type="contact" tips="联系客服"></list-cell>
				</button>
				<!-- #endif -->
				<list-cell icon="icon-bangzhu" iconColor="#5fcda2" title="帮助中心" @eventClick="navTo('/pages/user/help')"></list-cell>
				<!-- <list-cell icon="icon-pinglun-copy" iconColor="#ee883b" title="晒单" tips="晒单抢红包"></list-cell> -->
				<!-- <list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef"  @eventClick="navTo('/pages/mycoloect/mycoloect')" title="我收藏的商品"></list-cell> -->
				<!-- <list-cell icon="icon-shezhi1" iconColor="#e07472" title="设置" border="" @eventClick="navTo('/pages/set/set')"></list-cell> -->
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN  -->
		<auth ref="open"></auth>
		<!-- #endif -->
    </view>  
</template>  
<script>  
	import listCell from '@/components/mix-list-cell';
	import auth from '@/components/auth.vue';
	import api from '@/common/vmeitime-http/'
	import json from '@/Json'
    import {  
        mapState , mapMutations
    } from 'vuex';  
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		components: {
			listCell,
			auth
		},
		data(){
			return {
				user: {},
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				hasphone: true,
				moving: false,
				footerlistdata: []
			}
		},
		onLoad(){
			// #ifdef MP
			// console.log(uni.getStorageSync('haslogin'))
			if (uni.getStorageSync('haslogin') !== '') {
				this.login(uni.getStorageSync('userInfo'))
			}
			if (uni.getStorageSync('hasphone') == '') {
				this.hasphone = false
			}
			// #endif
			
			// #ifndef MP
			if (uni.getStorageSync('haslogin') == '') {
				uni.navigateTo({
					url: '/pages/public/login'
				})
			} else {
				this.login(uni.getStorageSync('userInfo'))
			}
			// #endif
			this.userlist();
			this.footerlist()
		},
		onPullDownRefresh(){
			// console.log(this.haslogin)
			// #ifdef MP-WEIXIN
				if(uni.getStorageSync('haslogin') == '')  {
					this.$refs.open.openauth()
					uni.stopPullDownRefresh()
				}
			// #endif
			// else {
				this.userlist(true);
				this.footerlist();
			// }
		},
		onShareAppMessage(res) {
			json.sharebtn(res)
		},
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
        methods: {
			...mapMutations(['login']),
			getPhoneNumber: function(e) {
				let that = this;
				if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
					console.log('已拒绝获取手机号！')
				} else {
					uni.showLoading({title: '正在加载'})
					var options = {
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv
					}
					that.bindphone(options)
				}
			},
			bindphone(options) {
				let that = this;
				let loginurl = '/auth/bindPhone';
				api.httppost(loginurl, options).then((res) => {
					if (res.data.errno == 0) {
						uni.setStorageSync('hasphone', true);
					}
					this.hasphone = true;
					uni.showToast({title: res.data.errmsg, icon: 'none'})
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
				})
			},
			auth() {
				if(uni.getStorageSync('haslogin') == '') this.$refs.open.openauth()
			},
			getdata() {
				this.userlist(true);
				this.footerlist();
			},
			userlist(flag) {
				let historyurl = '/user/index'
				uni.showLoading({title: '正在加载'})
				api.httpget(historyurl).then((res) => {
					let respons = res.data
					if (respons.errno == 0) {
						this.user = respons.data.order
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
						// #ifndef MP-WEIXIN
							uni.navigateTo({
								url: '/pages/public/login'
							})
						// #endif
					}
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh();
				})
			},
			footerlist(flag) {
				let historyurl = '/footprint/list?page=1&limit=10'
				api.httpget(historyurl).then((res) => {
					let respons = res.data
					if (respons.errno == 0) {
						this.footerlistdata = respons.data.list
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh();
				})
			},
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({url})  
			}, 
			navTofx() {
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.showLoading({title:'正在加载中'})
				let userId = uni.getStorageSync('userId')
				api.httppostfx('/retailUser/detail',{'retailUserId': userId}).then((res) => {
					let respons = res.data
					if (respons.code == 200) {
						let url = `/pages/fx/index?id=${userId}`
						if (respons.data == '') url = `/pages/fx/apply?id=${userId}`
						uni.navigateTo({
							url: url
						})
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					uni.hideLoading()
				})
			},
			navTopro(id){
				uni.navigateTo({
					url: `/pages/product/product?goodsId=${id}`
				})
			},
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
        }  
    }  
</script>  
<style lang='scss'>
	%flex-center {
	 display:flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	}
	%section {
	  display:flex;
	  justify-content: space-around;
	  align-content: center;
	  background: #fff;
	  border-radius: 10upx;
	}

	.user-section{
		height: 520upx;
		padding: 60upx 30upx 0;
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			/* filter: blur(1px); */
			opacity: .7;
		}
	}
	.user-info-box{
		height: 180upx;
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		.portrait{
			width: 130upx;
			height: 130upx;
			border:5upx solid #fff;
			border-radius: 50%;
		}
		.username{
			font-size: $font-lg + 6upx;
			color: $font-color-dark;
			margin-left: 20upx;
		}
	}

	.vip-card-box{
		display:flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		background: linear-gradient(left, rgba(0,0,0,.7), rgba(0,0,0,.8));
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: relative;
		padding: 20upx 24upx;
		.card-bg{
			position:absolute;
			top: 20upx;
			right: 0;
			width: 380upx;
			height: 260upx;
		}
		.b-btn{
			position: absolute;
			right: 20upx;
			top: 16upx;
			width: 132upx;
			height: 40upx;
			text-align: center;
			line-height: 40upx;
			font-size: 22upx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}
		.tit{
			font-size: $font-base+2upx;
			color: #f7d680;
			margin-bottom: 28upx;
			.yticon{
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}
		.e-b{
			font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}
	.cover-container{
		background: $page-color-base;
		margin-top: -240upx;
		padding: 0 30upx;
		position:relative;
		background: #f5f5f5;
		padding-bottom: 20upx;
		.arc{
			position:absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}
	.tj-sction{
		@extend %section;
		.tj-item{
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: #75787d;
		}
		.num{
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 8upx;
		}
	}
	.order-section{
		@extend %section;
		padding: 28upx 0;
		margin-top: 20upx;
		.order-item{
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			position: relative;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}
		.textnum{
			position: absolute;
			top: 2upx;
			right: 10upx;
			color: red;
			border: 2upx solid red;
			width: 32upx;
			height: 32upx;
			line-height: 26upx;
			text-align: center;
			border-radius: 100%;
			background: #fa436a;
			color:#fff;
			font-size: 24upx;
		}
		.yticon{
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #fa436a;
		}
		.icon-shouhoutuikuan{
			font-size:44upx;
		}
	}
	.history-section{
		/* padding: 30upx 0 0; */
		margin-top: 20upx;
		background: #fff;
		border-radius:10upx;
		.sec-header{
			display:flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			padding-top: 20px;
			margin-left: 30upx;
			.yticon{
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}
		.h-list{
			white-space: nowrap;
			height:180upx;
			padding: 20upx 30upx 0;
			image{
				display:inline-block;
				width: 160upx;
				height: 160upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}
	.share-btn{
		padding: 0;
		height: auto;
		background: none;
		line-height: initial;
		&:after{display: none;}
	}
	.clamp{
		text-align: left !important;
	}
	.icon-share{margin-left: -5px;margin-right: 5px;}
</style>