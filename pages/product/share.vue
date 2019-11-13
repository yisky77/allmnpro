<template>
	<view v-if="show" class="mask"@tap="toggleMask" @touchmove.stop.prevent="stopPrevent"
		:style="{backgroundColor: backgroundColor}"
	>
		<view 
			class="mask-content"
			@click.stop.prevent="stopPrevent"
			:style="[{
				height: config.height, 
				transform: transform
			}]"
		>
			<scroll-view class="view-content" scroll-y>
				<view class="share-header">
					分享到
				</view>
				<view class="share-list">
					<!-- #ifdef MP-WEIXIN -->
					<view class="share-item"  >
						<button open-type="share" class="buttonstyle">
							<image src="/static/temp/share_wechat.png" mode="" open-type="share"></image>
							<text>分享给好友</text>
						</button>
					</view>
					<!-- #endif -->
					<view class="share-item" @tap="makehaibao">
						<image src="/static/temp/share_moment.png" mode=""></image>
						<text>生成推广海报</text>
					</view>
				</view>
			</scroll-view>
			<view class="bottom b-t" @click="toggleMask">取消</view>
		</view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				transform: 'translateY(50vh)',
				timer: 0,
				showposter: false,
				backgroundColor: 'rgba(0,0,0,0)',
				show: false,
				config: {}
			};
		},
		props:{
			contentHeight:{
				type: Number,
				default: 0
			},
			//是否是tabbar页面
			hasTabbar:{
				type: Boolean,
				default: false
			},
			shareList:{
				type: Array,
				default: function(){
					return [];
				}
			},
			sharedata:{
				type: Object,
				default: function(){
					return {};
				}
			}
		},
		computed:{
		  self_sharedata(){
		   return this.sharedata;
		  }
		},
		created() {
			const height = uni.upx2px(this.contentHeight) + 'px';
			this.config = {
				height: height,
				transform: `translateY(${height})`,
				backgroundColor: 'rgba(0,0,0,.4)',
			}
			this.transform = this.config.transform;
			console.log(this.sharedata)
		},
		methods:{
			// onShareAppMessage(res) {
			// 	return {
			// 	  title: this.sharedata.name,
			// 	  path: '/pages/procuct/product?goodsId='+this.sharedata.id
			// 	}
			// },
			onShareAppMessage(res) {
				return {
				  // title: uni.getStorageSync('sharepage'),
				  path: uni.getStorageSync('sharepageurl')
				}
			},
			toggleMask(){
				this.showposter = false;
				//防止高频点击
				if(this.timer == 1){ return; }
				this.timer = 1;
				setTimeout(()=>{ this.timer = 0; }, 500)
				if(this.show){
					this.transform = this.config.transform;
					this.backgroundColor = 'rgba(0,0,0,0)';
					setTimeout(()=>{
						this.show = false;
						this.hasTabbar && uni.showTabBar();
					}, 200)
					return;
				}
				this.show = true;
				//等待mask重绘完成执行
				if(this.hasTabbar){
					uni.hideTabBar({
						success: () => {
							setTimeout(()=>{
								this.backgroundColor = this.config.backgroundColor;
								this.transform = 'translateY(0px)';
							}, 10)
						}
					});
				}else{
					setTimeout(()=>{
						this.backgroundColor = this.config.backgroundColor;
						this.transform = 'translateY(0px)';
					}, 10)
				}
			},
			makehaibao() {
				this.toggleMask();
				let obj = {
					imgSrc: this.sharedata.gallery[0],
					Title: this.sharedata.name+' / '+this.sharedata.brief,
					PriceTxt: '￥'+this.sharedata.retailPrice,
					OriginalTxt: '原价￥'+this.sharedata.counterPrice,
					Referrer: '您的好友 '+uni.getStorageSync('userInfo').nickName+' 推荐好物给您'
				}
				uni.navigateTo({
					url:'/pages/product/shareqrcode?content='+JSON.stringify(obj)
				})
				// let access_token = uni.getStorageSync('access_token');
				// if(access_token) this.getqrcode(access_token)
				// else this.acesstokenurls()
			},
			getqrcode (access_token) {
				let tokenurl = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='+access_token;
				api.httpAcesstoken(tokenurl).then((res) => {
					console.log(res.data)
				})
			},
			acesstokenurls () {
				let acesstokenurl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx51775e4f2a1f1c78&secret=9b430e6a08f798c03cde84758448d35f';
				api.httpAcesstoken(acesstokenurl).then((res) => {
					if(res.data.access_token) {
						uni.setStorageSync('access_token', res.data.access_token)
						this.getqrcode()
					}
				})
			},
			//防止冒泡和滚动穿透
			stopPrevent(){}
		}
	}
</script>

<style lang='scss'>
	.mask{
		position:fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display:flex;
		justify-content: center;
		align-items: flex-end;
		z-index: 998;
		transition: .3s;
		.bottom{
			position:absolute;
			left: 0;
			bottom: 0;
			display:flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 90upx;
			background: #fff;
			z-index: 9;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
		}
	}
	
	.mask-content{
		width: 100%;
		height: 580upx;
		transition: .3s;
		background: #fff;
		&.has-bottom{
			padding-bottom: 90upx;
		}
		.view-content{
			height: 100%;
		}
	}
	.share-header{
		height: 110upx;
		font-size: $font-base+2upx;
		color: font-color-dark;
		display:flex;
		align-items:center;
		justify-content: center;
		padding-top: 10upx;
		&:before, &:after{
			content: '';
			width: 240upx;
			heighg: 0;
			border-top: 1px solid $border-color-base;
			transform: scaleY(.5);
			margin-right: 30upx;
		}
		 &:after{
			 margin-left: 30upx;
			 margin-right: 0;
		 }
	}
	.share-list{
		display:flex;
		flex-wrap: wrap;
	}
	.share-item{
		min-width: 33.33%;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 180upx;
		image{
			width: 80upx;
			height: 80upx;
			margin-bottom: 16upx;
		}
		text{
			font-size: $font-base;
			color: $font-color-base;
		}
	}
	.buttonstyle {
		width: auto;
		height: auto !important;
		background: none;
		line-height: 40upx;
		image{display: block;margin:0 auto;}
	}
</style>
