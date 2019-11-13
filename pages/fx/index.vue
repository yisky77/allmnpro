<template>
	<view class="fxcontent">
		<view class="pd20">
			<view class="bannertop clear">
				<image :src="user.headImage" class="headerbg"></image>
				<view class="fl bannertxt">
					<view><text>{{user.nickName}}</text></view>
					<!-- <view><text>推荐人：总店</text></view> -->
				</view>
			</view>
			<view class="tixian clear">
				<view class="fl">
					<view><text>可提现佣金</text></view>
					<view><text class="fs">{{user.withdrawMoney}} </text><text style="margin-left:6upx;"> 元</text></view>
				</view>
				<view class="btn" @tap="viewWithdraw">提现</view>
			</view>
		</view>
		<view class="fffcolor clear">
			<view class="li">
				<text class="yticon icon-daifukuan fs120"></text>
				<view><text>分销佣金</text></view>
				<view><text class="red">{{user.withdrawMoney}}</text>元</view>
			</view>
			<view class="li">
				<text class="yticon icon-erjiye-yucunkuan fs120"></text>
				<view><text>已提现佣金</text></view>
				<view class="mt5"><text class="red">{{user.withdrawMoney}}</text>元</view>
			</view>
			<view class="li">
				<text class="yticon icon-shouye fs120"></text>
				<view><text>未结算佣金</text></view>
				<view class="mt5"><text class="red">{{user.withdrawMoney}}</text>元</view>
			</view>
			<view class="li" @tap="goto('/pages/fx/order')">
				<text class="yticon icon-xiatubiao--copy fs120"></text>
				<view><text>分销订单</text></view>
				<view class="mt5"><text class="red">{{user.withdrawMoney}}</text> 元</view>
			</view>
			<view class="li" @tap="goto('/pages/fx/withdrawlist')">
				<text class="yticon icon-tuijian fs120"></text>
				<view><text>提现明细</text></view>
				<view class="mt5"><text class="red">{{user.withdrawMoney}}</text>元</view>
			</view>
			<view class="li" @tap="goto('/pages/fx/myteam')">
				<text class="yticon icon-tuandui fs120"></text>
				<view><text>我的团队</text></view>
				<view class="mt5"><text class="red">0</text>人</view>
			</view>
			<!-- <view class="li" @tap="goto('/pages/fx/qr')">
				<text class="yticon icon-share fs120"></text>
				<view class="mt5"><text>推广二维码</text></view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				user:{withdrawMoney:'',headImage: ''}
			}
		},
		onLoad(options) {
			this.init();
		},
		onPullDownRefresh(){
			this.init(true)
		},
		methods: {
			init(flag) {
				uni.showLoading({title: '正在加载'})
				let userId = uni.getStorageSync('userId')
				api.httppostfx('/retailUser/detail',{'retailUserId': userId}).then((res) => {
					let respons = res.data
					if (respons.code == 200) {
						this.user = respons.data;
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					if(flag) uni.stopPullDownRefresh()
					uni.hideLoading()
				})
			},
			viewWithdraw() {
				uni.navigateTo({
					url:'/pages/fx/withdraw'
				})
			},
			goto(url) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang='scss'>
	.fs120{font-size: 50upx !important;color: rgba(252, 79, 75,1)}
	.mt5{margin-top:10upx;}
	.fl{float:left;}
	.clear::after{content: '';clear: both;display: block;}
	.pd20{background: #fc4f4b;padding:0 0 10upx;}
	.bannertop{width:95%;margin:0 auto 20upx;border-bottom: 1upx solid #f28474;padding:20upx 0 30upx;
		.headerbg{border-radius: 100%;width:150upx;height: 150upx;float:left;}
		.bannertxt{
			color:#fff;font-size: 35upx;line-height: 60upx;margin-left:30upx;position: relative;top:20upx;
		}
	}
	.tixian{width:95%;margin:20upx auto;
		color:#fff;font-size: 30upx;line-height: 40upx;
		.btn{float:right;padding:0 25upx;color:#fff;border-radius: 40upx;border:1px solid #fff;margin-top:25upx;font-size: 24upx;}
	}
	.fffcolor{
		background: #fff;width:95%;margin:20upx auto;
	}
	.fxcontent{
		background: #f7f7f7;
		.li{width:33%;float:left;text-align: center;padding:0upx 0 20upx;font-size: 24upx;margin:20upx auto 0;
			.arc{border-radius: 100%;width:100upx;height: 100upx;margin:0 auto;}
			text{font-size: 24upx;}
			.red{color:#fc4f4b;  }
		}
	}
	.fs{
		font-size: 40upx;line-height: 60upx;font-weight: bold;
	}
</style>
