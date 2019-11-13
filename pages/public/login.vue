<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎回来！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input 
						type="text" 
						:value="username" 
						placeholder="请输入手机号码"
						data-key="username"
						@input="inputChange"
					/>
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input 
						type="password" 
						:value="password" 
						placeholder="请输入正确的密码"
						placeholder-class="input-empty"
						maxlength="20"
						password 
						data-key="password"
						@input="inputChange"
						@confirm="toLogin"
					/>
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin">立即登录</button>
			<!-- <view class="forget-section">
				忘记密码?
			</view> -->
		</view>
		<view class="register-section">
			还没有账号?
			<text @click="toRegist">马上注册</text>
		</view>
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
				username: '',
				password: '',
				logining: false
			}
		},
		onLoad(){
			
		},
		methods: {
			...mapMutations(['login']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			toRegist(){
				uni.navigateTo({
					url: '/pages/public/reg'
				})
			},
			async toLogin(){
				this.logining = true;
				const {username, password} = this;
				/* 数据验证模块
				if(!this.$api.match({
					mobile,
					password
				})){
					this.logining = false;
					return;
				}
				*/
				const sendData = {
					username,
					password
				};
				if(sendData.username == '' || !/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(sendData.username)) {
					uni.showToast({title: '请输入正确手机号码', icon: 'none'})
					return false;
				} else if (sendData.password == '') {
					uni.showToast({title: '请输入正确的密码', icon: 'none'})
					return false;
				}
				uni.showLoading({title: '登陆中，请稍后！'})
				let homeurl = '/auth/login';
				api.httppost(homeurl, sendData).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						uni.showToast({title: '登陆成功', icon: 'none'})
						this.login(respons.data.userInfo)
						uni.setStorageSync('token', respons.data.token);
						uni.setStorageSync('haslogin', true);
						uni.switchTab({
							url: '/pages/user/user'
						})
					}
					uni.hideLoading()
					uni.showToast({title: respons.errmsg, icon: 'none'})
				}).catch((err) => {
					uni.hideLoading()
					uni.showToast({title: err.data.errmsg, icon: 'none'})
				})
				
				// const result = await this.$api.json('userInfo');
				// if(result.status === 1){
				// 	this.login(result.data);
				// 	uni.setStorageSync('userInfo', result.data);
				// 	uni.setStorageSync('haslogin', true);
    //                 uni.navigateBack();  
				// }else{
				// 	this.$api.msg(result.msg);
				// 	this.logining = false;
				// }
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
		padding-bottom: 40upx;
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
			/* margin-bottom:20upx; */
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
		margin:50upx auto;
		font-size: $font-lg;
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
