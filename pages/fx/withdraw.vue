<template>
	<view class="fxcontent">
		<view class="pd20">
			<view class="tixian clear">
				<view class="fl">
					<view><text class="money">剩余可提现佣金金额</text></view>
					<view><text class="fs">{{allmoney}}</text><text style="margin-left:6upx;color:#434343;"> 元</text></view>
				</view>
				<!-- <view class="btn" @tap="viewWithdraw">提现</view> -->
			</view>
		</view>
		<view class="withdrawcon clear">
			<text class="bi">￥</text>
			<input class="inputcon" type="number" v-model="money" placeholder="请输入提现金额"/>
			<view class="bi" style="color:#6e6e6e;font-size:30upx;" @tap="allbtn()">全部</view>
		</view>
		<view class="fffcolor clear">
			<view class="fangfa">提现方式</view>
			<!-- <view class="li inputli" @tap="withdrawbtn(1)" :class="{'active':inputid == 1}" v-if="showtab1">
				<image src="../../static/arc.png" class="arc"></image>
				<view class="fl"><text>自动</text></view>
			</view> -->
			<view class="li inputli" @tap="withdrawbtn(2)" :class="{'active':inputid == 2}" v-if="showtab3">
				<text class="yticon icon-weixin fs80" style="color:#f36b7e"></text>
				<view class="fl"><text>微信</text></view>
			</view>
			<view class="li inputli" @tap="withdrawbtn(3)" :class="{'active':inputid == 3}" v-if="showtab2">
				<text class="yticon icon-zhengxinchaxun-zhifubaoceping- fs80" style="color:#f36b7e"></text>
				<view class="fl"><text>支付宝</text></view>
			</view>
			<view class="li inputli" @tap="withdrawbtn(4)" :class="{'active':inputid == 4}" v-if="showtab4">
				<text class="yticon icon-tuandui fs80" style="color:#f36b7e"></text>
				<view class="fl"><text>银行卡</text></view>
			</view>
		</view>
		<view class="fffcolor clear" v-if="inputid == 2">
			<view class="withdrawcon clear">
				<text class="bi fs12">姓名</text>
				<input class="inputcon" type="text" v-model="username" placeholder="请输入姓名"/>
			</view>
			<view class="withdrawcon clear">
				<text class="bi fs12">账号</text>
				<input class="inputcon" type="text" v-model="account" placeholder="请输入微信账号"/>
			</view>
		</view>
		<view class="fffcolor clear" v-if="inputid == 3">
			<view class="withdrawcon clear">
				<text class="bi fs12">姓名</text>
				<input class="inputcon" type="text" v-model="username" placeholder="请输入姓名"/>
			</view>
			<view class="withdrawcon clear">
				<text class="bi fs12">账号</text>
				<input class="inputcon" type="text" v-model="account" placeholder="请输入支付宝账号"/>
			</view>
		</view>
		<view class="fffcolor clear" v-if="inputid == 4">
			<view class="withdrawcon clear">
				<text class="bi fs12">开户人</text>
				<input class="inputcon" type="text" v-model="username" placeholder="请输入开户人姓名"/>
			</view>
			<view class="withdrawcon clear">
				<text class="bi fs12">开户行</text>
				<input class="inputcon" type="text" v-model="account" placeholder="请输入开户行"/>
			</view>
			<view class="withdrawcon clear" v-if="showtab4">
				<text class="bi fs12">银行卡号</text>
				<input class="inputcon" type="text" v-model="banknumber" placeholder="请输入银行卡号"/>
			</view>
		</view>
		<view class="sub"  @tap="subdrawbtn(4)">提交申请</view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				inputid: 2,
				money: '',
				moneyinput: '',
				username: '',
				account: '',
				allmoney: 0,
				payFrom: 3,
				minmoney: 10,
				banknumber: '',
				showtab1: false,
				showtab2: false,
				showtab3: false,
				showtab4: false,
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
				this.showtab1 = this.showtab2 = this.showtab3 = this.showtab4 = false;
				api.httppostfx('/retailUser/detail',{'retailUserId':userId}).then((res) => {
					let respons = res.data
					if (respons.code == 200) {
						this.allmoney = respons.data.withdrawMoney
						this.minmoney = respons.data.minMoney
						console.log(this.allmoney)
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					uni.hideLoading()
				})
				api.httppostfx('/retailSet/detail',{'retailSetId':1}).then((res) => {
					let respons = res.data
					if (respons.code == 200) {
						let type = respons.data.type
						if (type.indexOf('1') !== -1) {
							this.showtab1 = true
						}
						if (type.indexOf('2') !== -1) {
							this.showtab2 = true
						}
						if (type.indexOf('3') !== -1) {
							this.showtab3 = true
						}
					    if (type.indexOf('4') !== -1) {
							this.showtab4 = true
						}
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh();
				})
			},
			withdrawbtn(id) {
				this.inputid = id;
				this.payFrom = id
			},
			allbtn() {
				this.money = this.allmoney;
				console.log(this.money)
			},
			subdrawbtn() {
				if (this.money < this.minmoney) {
					uni.showToast({
						title: `每次提现金额不能少于${this.minmoney}元`,icon: 'none'
					});
					return false;
				} else if (this.money>this.allmoney) {
					uni.showToast({
						title: '提现金额不能超过可提现余额',icon: 'none'
					});
					return false;
				}
				if(this.inputid !== 1 && (this.username == '' || this.account == '')) {
					uni.showToast({
						title: '姓名和账号不能为空哦！',icon: 'none'
					});
					return false;
				}
				let data = {
					 money:this.money,
					 payFrom:this.payFrom,
					 username:this.money,
					 account:this.account,
				 }
				 if(inputid == 4) {
					 data = {
					 	 money:this.money,
					 	 payFrom:this.payFrom,
					 	 username:this.money,
					 	 username:this.account,
					 	 banknumber: this.banknumber,
					  }
				 }
				// uni.showLoading({title:'请稍后'})
				api.httpPost('/withdraw/add',data).then((res) => {
					let respons = res.data
					if (respons.errno == 0) {
						uni.showToast({title: '提交申请成功！', icon: 'none'})
						this.init();
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
	.fs80{font-size: 30upx !important;color: rgba(252, 79, 75,1);}
	.clear::after{content: '';clear: both;display: block;}
	.pd20{background: #fff;padding:20upx 0 10upx;}
	.money{font-size: 30upx;color:#434343;}
	.bannertop{width:95%;margin:0 auto 20upx;border-bottom: 1upx solid #f28474;padding:20upx 0 30upx;
		.headerbg{border-radius: 100%;width:150upx;height: 150upx;float:left;}
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
	.tixian{width:95%;margin:20upx auto;
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
			margin-left: 10%;
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
