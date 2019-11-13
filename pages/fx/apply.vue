<template>
	<view class="fxcontent">
		<view class="tixian clear">
			<!-- <view class="bannertop clear">
				<image src="../../static/temp/fxbanner.jpg" class="headerbg"></image>
			</view> -->
			<swiper class="carousel" circular @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToWebView(item.link)">
					<image :src="item.url" style="width:100%;height:100%;"/>
				</swiper-item>
			</swiper>
		</view>
		<!-- <view class="withdrawcon clear">
			<text class="bi">￥</text>
			<input class="inputcon" type="number" v-model="moneyinput" placeholder="请输入提现金额"/>
			<view class="bi" style="color:#6e6e6e;font-size:30upx;" @tap="allbtn()">全部</view>
		</view> -->
		<view class="fffcolor clear">
			<!-- <view class="withdrawcon clear">
				<text class="bi fs12">邀请人</text>
				<input class="inputcon" type="text" value="xxx" disabled/>
			</view> -->
			<view class="withdrawcon clear">
				<text class="bi fs12">姓名</text>
				<input class="inputcon" type="text" v-model="username" placeholder="请输入您的姓名" />
			</view>
			<view class="withdrawcon clear">
				<text class="bi fs12">手机号码</text>
				<input class="inputcon" type="numer" v-model="mobile" placeholder="请输入您的手机号"/>
			</view>
		</view>
		<view class="sub"  @tap="subdrawbtn(4)">申请成为分销商</view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				inputid: 1,
				allmoney: 0,
				carouselList: [
					{url: '../../static/temp/fxbanner.jpg'},
					{url: '../../static/temp/fxbanner.jpg'},
					{url: '../../static/temp/fxbanner.jpg'},
				],
				moneyinput: '',
				username: '',
				userId: '',
				mobile: ''
			}
		},
		onLoad(options) {
			this.userId = options.id;
			uni.showModal({
			  title: '',
			  content: '您还不是分销商，请先提交申请',
			  success: function(res) {
				if (!res.confirm) {
					uni.navigateBack()
				}
			  }
			})
		},
		onPullDownRefresh(){
			this.init(true)
		},
		onShareAppMessage(res) {
		  return {
			title: '',
			imageUrl: '/static/temp/banner3.jpg',
			path: '/pages/index/index'
		  }
		},
		methods: {
			subdrawbtn() {
				if(this.username == '') {
					uni.showToast({
						title: '请输入姓名',icon: 'none'
					});
					return false;
				} else if(this.mobile == '' || !/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.mobile)) {
					uni.showToast({title: '请输入正确的手机号吗', icon: 'none'})
					return false;
				}
				let userInfo = uni.getStorageSync('userInfo')
				let userId = uni.getStorageSync('userId')
				let data = {
					 headImage:userInfo.avatarUrl,
					 nickName:userInfo.nickName,
					 name:this.username,
					 mobile:this.mobile,
					 level:0,
					 retailUserId: userId
				}
				api.httppostfx('/retailUser/add',data).then((res) => {
					let respons = res.data
					if (respons.code == 200) {
						uni.showToast({title: '提交申请成功！', icon: 'none'})
						setTimeout(function() {
							uni.navigateBack()
						}, 1000);
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang='scss'>
	.fl{float:left;}
	.clear::after{content: '';clear: both;display: block;}
	.pd20{background: #fff;padding:20upx 0 10upx;}
	.money{font-size: 30upx;color:#434343;}
	.bannertop{width:100%;
		.headerbg{width:100%;height:300upx;}
		.bannertxt{
			color:#fff;font-size: 35upx;line-height: 60upx;margin-left:30upx;position: relative;top:20upx;
		}
	}
	.fangfa{
		font-size: 30upx;color:#434343;padding: 20upx;
	}
	.bi{
		width: 10%;
		float: left;
		text-align: center;
		color: #f25a70;
		font-weight: bold;
		line-height: 80upx;
		font-size: 40upx;
	}
	.withdrawcon{
		border-top: 2upx solid #f6f6f6;
		padding: 20upx 0;
		background: #fff;
	}
	.inputcon{
		width: 75%;
		height: 80upx;
		float: left;
	}
	.tixian{width:100%;margin:0upx auto;
		color:#fff;font-size: 30upx;line-height: 40upx;
		.btn{float:right;padding:0 25upx;color:#fff;border-radius: 40upx;border:1px solid #fff;margin-top:25upx;}
	}
	.sub{    
		width: 80%;
		height: 35px;
		background: #fc4f4b;
		text-align: center;
		color: #fff;
		font-size: 24upx;
		margin: 20upx auto;
		border-radius: 30px;
		line-height: 70upx;
	}
	.fffcolor{
		background: #fff;width:100%;margin:20upx auto;
	}
	.fxcontent{
		background: #f7f7f7;
		.li{
			float: left;padding: 0 20upx;
			text-align: center;
			font-size: 24upx;    margin-bottom: 20upx;
			border: 2upx solid #e6e6e6;
			border-radius: 40upx;line-height: 60upx;
			margin-left: 20upx;
			.arc{width:50upx;height: 50upx;float:left;}
			text{font-size: 24upx;color:#51514f;}
			.red{color:#fc4f4b;}
		}
	}
	.fs12{
		width:20%;font-size: 26upx;color:#434343;
	}
	.fs{
		font-size: 40upx;line-height: 60upx;font-weight: bold;color:#f25a70;
	}
	.inputli.active{
		border:1px solid #f25a70;
	}
</style>
