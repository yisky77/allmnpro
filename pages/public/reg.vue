<template>
	<view class="container">
		<!-- #ifndef MP -->
		<!-- <view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view> -->
		<!-- #endif -->
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎注册！
			</view>
			<view class="input-content">
				<!-- <view class="input-item">
					<text class="tit">用户名</text>
					<input 
						type="text" 
						v-model="user.username" 
						placeholder="请输入用户名"
					/>
				</view> -->
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input 
						type="text" 
						v-model="user.mobile" 
						placeholder="请输入手机号码"
					/>
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input 
						type="password" 
						v-model="user.password" 
						placeholder="1-18位不含特殊字符的数字、字母组合"
						placeholder-class="input-empty"
						maxlength="20"
						password 
					/>
				</view>
				<view class="input-item">
					<text class="tit">确认密码</text>
					<input 
						type="password" 
						v-model="pwd2" 
						placeholder="1-18位不含特殊字符的数字、字母组合"
						placeholder-class="input-empty"
						maxlength="20"
						password 
					/>
				</view>
			</view>
			<button class="confirm-btn" @click="toreg" >立即注册</button>
		</view>
		<!-- #ifdef APP-PLUS -->
			<view class="register-section" @click="navBack">
				已有账号?
				<text>马上登录</text>
			</view>
		<!-- #endif -->
		<!-- #ifdef H5 -->
			<view class="register-section" @click="tologin">
				已有账号?
				<text>马上登录</text>
			</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import {  
        mapMutations  
    } from 'vuex';
	import api from '@/common/vmeitime-http/'

	export default{
		data(){
			return {
				user: {},
				pwd2: ''
			}
		},
		onLoad(){
			
		},
		methods: {
			...mapMutations(['login']),
			navBack(){
				uni.navigateBack();
			},
			tologin(){
				uni.redirectTo({
					url: '/pages/public/login'
				})
			},
			async toreg(){
				if(this.user.mobile == '' && !/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.user.mobile)) {
					uni.showToast({title: '请输入正确的手机号吗', icon: 'none'})
					return false;
				} else if (this.user.password == ''  ) {
					uni.showToast({title: '请输入密码', icon: 'none'})
					return false;
				} else if (this.user.password !== this.pwd2 ) {
					uni.showToast({title: '两次输入的密码不一致！', icon: 'none'})
					return false;
				}
				this.user.username = this.user.mobile
				uni.showLoading({title: '注册中，请稍后！'})
				let homeurl = '/auth/register';
				api.httppost(homeurl, this.user).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						uni.showToast({title: '注册成功', icon: 'none'})
						uni.setStorageSync('token', respons.data.token);
						uni.setStorageSync('haslogin', true);
						this.login(respons.data.userInfo)
						// this.$api.prePage().userlist();
						uni.switchTab({
							url: '/pages/index/index'
						});
					}
					uni.showToast({title: respons.errmsg, icon: 'none'})
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
					uni.showToast({title: err.data.errmsg, icon: 'none'})
				})
				
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.container{
		padding-top: 115upx;
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		/* padding-bottom: 40upx; */
	}
	.back-btn{
		position:absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}
	.left-top-sign{
		font-size: 120upx;
		color: $page-color-base;
		position:relative;
		left: -16upx;
	}
	.right-top-sign{
		position:absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;
		&:before, &:after{
			display:block;
			content:"";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}
		&:before{
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}
		&:after{
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}
	.left-bottom-sign{
		position:absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}
	.welcome{
		position:relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 60upx;
	}
	.input-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		/* justify-content: center; */
		padding: 30upx;
		background:$page-color-light;
		height: 170upx;
		border-radius: 4px;
		margin-bottom: 30upx;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 60upx;
			line-height: 60upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}
		input{
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
			background: none;
		}	
	}

	.confirm-btn{
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		background: $uni-color-primary;
		color: #fff !important;
		font-size: $font-lg;
		margin:50upx auto;
		&:after{
			border-radius: 100px;
		}
	}
	.forget-section{
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40upx;
	}
	.register-section{
		/* position:absolute; */
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;
		text{
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}
</style>
