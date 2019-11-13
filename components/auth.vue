<template>
	<view>
		<!-- #ifdef MP-QQ || MP-WEIXIN -->
		<view class="cu-modal bottom-modal" :class="!haslogin && !hidemask?'show':''">
			<view class="cu-dialog">
				<view class="padding-xl" style="text-align:left;width: 100%;">
					<image src="/static/logo.jpg" style="width:80upx;height:80upx;border-radius: 100%;border:1px solid #ccc;"></image>
					<text style="position: relative;top: -30upx;left: 15upx;">欢迎您的到来！</text>
					<view style="margin: 0 0 20upx;">
					<text style="font-size: 24upx;">为您提供优质服务，需要您登录使用</text></view>
					<button open-type="getUserInfo" @getuserinfo="getUserInfo" lang="zh_CN" class="cu-btn bg-green">用户快速登录</button>
				</view>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	import {
	    mapState, mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				haslogin: true,
				agentId: 7813,
				showActionSheet: false,
				maskClosable: true,
				itemList: [],
				color: "#9a9a9a",
				size: 26,
				hidemask: false,
				isCancel: true
			};
		},
		created() {
			// #ifdef MP-WEIXIN || MP-QQ
			if (uni.getStorageSync('haslogin') == '') {
				this.haslogin = false
			} 
			// #endif
			// #ifndef MP-WEIXIN
			 this.getUserInfo();
			// #endif
		},
		methods: {
			...mapMutations(['login']),
			itemClick: function(e) {
				let index = e.index;
				this.closeActionSheet();
			},
			openauth(){
				// #ifndef MP-ALIPAY
				this.haslogin = this.hidemask = false;
				// #endif
				// #ifdef MP-ALIPAY
				 this.getUserInfo();
				// #endif
			},
			closeActionSheet: function() {
				this.showActionSheet = false
			},
			getUserInfo: function() {
				uni.showLoading({title: '正在加载'})
				let that = this;
// #ifdef MP-ALIPAY
				my.getAuthCode({
					scopes: 'auth_user', // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
					success: (res) => {
						if (res.authCode) {
							let code = res.authCode;
							// 获取用户信息
							uni.getUserInfo({
								provider: 'alipay',
								lang:'zh_CN',
								success: function(infoRes) {
									console.log(infoRes)
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
									that.hidemask = true
									uni.navigateTo({
										url: '/pages/public/login'
									})
									console.log('拒绝登录获取信息失败')
								}
							})
						}
					},
					fail: function(loginRes) {
						if (uni.getStorageSync('haslogin') == '') {
							that.haslogin = false
							that.hidemask = true
						}
						uni.navigateTo({
							url: '/pages/public/login'
						})
						uni.hideLoading()
					}
				})
// #endif
// #ifdef MP-WEIXIN
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
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
								uni.setStorageSync('code', options.code);
								// console.log(options)
								that.login(userInfo)
								// 调用登录接口
								that.gologin(options)
							},
							fail: function() {
								uni.hideLoading()
								that.hidemask = true
								uni.navigateTo({
									url: '/pages/public/login'
								})
								console.log('获取信息失败')
							}
						})
					},
					fail: function(loginRes) {
						if (uni.getStorageSync('haslogin') == '') {
							that.haslogin = false
						}
					}
				})
// #endif
			},
			gologin(options, data) {
				let that = this;
				let loginurl = '/auth/login_by_weixin';
				api.httppost(loginurl, options).then((res) => {
					if (res.data.errno == 0) {
						uni.setStorageSync('token', res.data.data.token);
						uni.setStorageSync('userId', res.data.data.userId);
						that.haslogin = true;
						that.hidemask = true;
						uni.setStorageSync('haslogin', true);
						let retailUserId = uni.getStorageSync('retailUserId');
						if(parseInt(retailUserId)>0) this.bindRetail(res.data.data, retailUserId)
						that.$parent.getdata(res.data.data.userId);
					} else {
						uni.navigateTo({
							url: '/pages/public/login'
						})
					}
					uni.hideLoading()
				}).catch((err) => {
					console.log(err)
					// uni.showToast({title: err.data.errmsg, icon: 'none'})
					uni.hideLoading()
				})
			},
			// 绑定分销
			bindRetail(data, retailUserId) {
				console.log('ssss')
				let datas = {
					 headImage: data.userInfo.avatarUrl,
					 nickName: data.userInfo.nickName,
					 name: data.userInfo.nickName,
					 mobile: '',
					 level:1,
					 retailUserId: data.userId,
					 parentId: retailUserId
				}
				api.httppostfx('/retailUser/add',datas).then((res) => {
					let respons = res.data
					if (respons.code == 200) {
						uni.removeStorageSync('retailUserId')
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
				})
			}
		}
	}
</script>
 
<style lang="scss">
	.padding-xl {
		padding: 50upx;
	}
.cu-modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1110;
	opacity: 0;
	outline: 0;
	text-align: center;
	-ms-transform: scale(1.185);
	transform: scale(1.185);
	backface-visibility: hidden;
	perspective: 2000upx;
	background: rgba(0, 0, 0, 0.6);
	transition: all 0.3s ease-in-out 0s;
	pointer-events: none;
}

.cu-modal::before {
	content: "\200B";
	display: inline-block;
	height: 100%;
	vertical-align: middle;
}

.cu-modal.show {
	opacity: 1;
	transition-duration: 0.3s;
	-ms-transform: scale(1);
	transform: scale(1);
	overflow-x: hidden;
	overflow-y: auto;
	pointer-events: auto;
}

.cu-dialog {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	margin-left: auto;
	margin-right: auto;
	width: 680upx;
	max-width: 100%;
	background-color: #f8f8f8;
	border-radius: 10upx;
	overflow: hidden;
}

.cu-modal.bottom-modal::before {
	vertical-align: bottom;
}

.cu-modal.bottom-modal .cu-dialog {
	width: 100%;
	border-radius: 0;
}

.cu-modal.bottom-modal {
	margin-bottom: -1000upx;
}

.cu-modal.bottom-modal.show {
	margin-bottom: 0;
}

.cu-modal.drawer-modal {
	transform: scale(1);
	display: flex;
}

.cu-modal.drawer-modal .cu-dialog {
	height: 100%;
	min-width: 200upx;
	border-radius: 0;
	margin: initial;
	transition-duration: 0.3s;
}

.cu-modal.drawer-modal.justify-start .cu-dialog {
	transform: translateX(-100%);
}

.cu-modal.drawer-modal.justify-end .cu-dialog {
	transform: translateX(100%);
}

.cu-modal.drawer-modal.show .cu-dialog {
	transform: translateX(0%);
}
.cu-modal .cu-dialog>.cu-bar:first-child .action{
  min-width: 100upx;
  margin-right: 0;
  min-height: 100upx;
}
	.cu-btn{
		width:95%;margin:0 auto;line-height: 60upx
	}
	.cu-btn {
	position: relative;
	border: 0upx;
	display: -webkit-inline-box;
	display: -webkit-inline-flex;
	display: -ms-inline-flexbox;
	display: inline-flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-sizing: border-box;
	        box-sizing: border-box;
	padding: 0 30upx;
	font-size: 28upx;
	height: 64upx;
	line-height: 1;
	text-align: center;
	text-decoration: none;
	overflow: visible;
	margin-left: initial;
	-webkit-transform: translate(0upx, 0upx);
	    -ms-transform: translate(0upx, 0upx);
	        transform: translate(0upx, 0upx);
	margin-right: initial;
}
.bg-green {
	background-color: #39b54a;
	color: #ffffff;
}

</style>
