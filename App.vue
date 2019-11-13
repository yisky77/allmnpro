<script>
	/**
	 * vuex管理登陆状态，具体可以参考官方登陆模板示例
	 */
	import api from '@/common/vmeitime-http/'
	import {
		mapMutations
	} from 'vuex';
	export default {
		methods: {
			...mapMutations(['login'])
		},
		onLaunch: function() {
			// #ifdef MP-WEIXIN
				const updateManager = uni.getUpdateManager();
				uni.getUpdateManager().onUpdateReady(function() {
				   uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success: function(res) {
					 if (res.confirm) {
					  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
					  updateManager.applyUpdate()
					 }
					}
				   })
				})
				let userInfo = uni.getStorageSync('userInfo') || '';
				if(userInfo.id){
					//更新登陆状态
					uni.getStorage({
						key: 'userInfo',
						success: (res) => {
							this.login(res.data);
						}
					})
				}
			// #endif
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
	}
</script>

<style lang='scss'>
	@import url("/components/gaoyia-parse/parse.css");
	/*全局公共样式和字体图标*/ 
   /*app.wxss*/
   page {
   	background: #fafafa;
   	font-size: 32rpx;
   }
   rich-text{width:100%;p{width:100%;}}
   uni-rich-text img,uni-rich-text p{width:100%;}
   rich-text img{width:100%;}
   img,p{width:100%;}
   .container {
   	display: flex;
   	flex-direction: column;
   	box-sizing: border-box;
   }
   
   .phcolor {
   	color: #ccc;
   	font-size: 32rpx;
   }
   
   button::after {
   	border: none;
   }
   
   .opcity {
   	opacity: 0.5;
   }
   
   .hover {
   	background: #f7f7f9 !important;
   }
   
   .ellipsis {
   	overflow: hidden;
   	white-space: nowrap;
   	text-overflow: ellipsis;
   }
   
   /*列表统一样式 */
   
   .list-item {
   	position: relative;
   }
   
   .list-item::after {
   	content: '';
   	position: absolute;
   	border-bottom: 1upx solid #eaeef1;
   	-webkit-transform: scaleY(0.5);
   	transform: scaleY(0.5);
   	bottom: 0;
   	right: 0;
   	left: 30rpx;
   }
   
   .last::after {
   	border-bottom: 0 !important;
   }
   
   /*按钮样式*/
   
   .btn-primary {
   	width: 100%;
   	height: 90rpx;
   	line-height: 90rpx;
   	background: linear-gradient(-90deg, #5677fc, #5c8dff);
   	border-radius: 45rpx;
   	color: #fff;
   	font-size: 36rpx;
   }
   
   .btn-hover {
   	color: #d5d4d9;
   	background: linear-gradient(-90deg, #4a67d6, #4e77d9);
   }
   
   .btn-gray {
   	background: #ededed;
   	color: #999 !important;
   }
   
   .btn-gray-hover {
   	background: #d5d5d5 !important;
   	color: #898989;
   }
   
   .btn-white {
   	background: #fff;
   	color: #333 !important;
   }
   
   .tui-white-hover {
   	background: #e5e5e5 !important;
   	color: #2e2e2e !important;
   }
   
   .btn-disabled {
   	color: #fafbfc !important;
   	background: linear-gradient(-90deg, #cad8fb, #c9d3fb);
   }
   
	@font-face {
		font-family: yticon;
		font-weight: normal;
		font-style: normal;
		src: url('./static/font.ttf') format('truetype');
	} 

	.yticon {
		font-family: "yticon" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-yiguoqi1:before {
		content: "\e700";
	}

	.icon-iconfontshanchu1:before {
		content: "\e619";
	}

	.icon-iconfontweixin:before {
		content: "\e611";
	}

	.icon-alipay:before {
		content: "\e636";
	}

	.icon-shang:before {
		content: "\e624";
	}

	.icon-shouye:before {
		content: "\e626";
	}

	.icon-shanchu4:before {
		content: "\e622";
	}

	.icon-xiaoxi:before {
		content: "\e618";
	}

	.icon-jiantour-copy:before {
		content: "\e600";
	}

	.icon-fenxiang2:before {
		content: "\e61e";
	}

	.icon-pingjia:before {
		content: "\e67b";
	}

	.icon-daifukuan:before {
		content: "\e68f";
	}

	.icon-pinglun-copy:before {
		content: "\e612";
	}

	.icon-dianhua-copy:before {
		content: "\e621";
	}

	.icon-shoucang:before {
		content: "\e645";
	}

	.icon-xuanzhong2:before {
		content: "\e62f";
	}

	.icon-gouwuche_:before {
		content: "\e630";
	}

	.icon-icon-test:before {
		content: "\e60c";
	}

	.icon-icon-test1:before {
		content: "\e632";
	}

	.icon-bianji:before {
		content: "\e646";
	}

	.icon-jiazailoading-A:before {
		content: "\e8fc";
	}

	.icon-zuoshang:before {
		content: "\e613";
	}

	.icon-jia2:before {
		content: "\e60a";
	}

	.icon-huifu:before {
		content: "\e68b";
	}

	.icon-sousuo:before {
		content: "\e7ce";
	}

	.icon-arrow-fine-up:before {
		content: "\e601";
	}

	.icon-hot:before {
		content: "\e60e";
	}

	.icon-lishijilu:before {
		content: "\e6b9";
	}

	.icon-zhengxinchaxun-zhifubaoceping-:before {
		content: "\e616";
	}

	.icon-naozhong:before {
		content: "\e64a";
	}

	.icon-xiatubiao--copy:before {
		content: "\e608";
	}

	.icon-shoucang_xuanzhongzhuangtai:before {
		content: "\e6a9";
	}

	.icon-jia1:before {
		content: "\e61c";
	}

	.icon-bangzhu1:before {
		content: "\e63d";
	}

	.icon-arrow-left-bottom:before {
		content: "\e602";
	}

	.icon-arrow-right-bottom:before {
		content: "\e603";
	}

	.icon-arrow-left-top:before {
		content: "\e604";
	}

	.icon-icon--:before {
		content: "\e744";
	}

	.icon-zuojiantou-up:before {
		content: "\e605";
	}

	.icon-xia:before {
		content: "\e62d";
	}

	.icon--jianhao:before {
		content: "\e60b";
	}

	.icon-weixinzhifu:before {
		content: "\e61a";
	}

	.icon-comment:before {
		content: "\e64f";
	}

	.icon-weixin:before {
		content: "\e61f";
	}

	.icon-fenlei1:before {
		content: "\e620";
	}

	.icon-erjiye-yucunkuan:before {
		content: "\e623";
	}

	.icon-Group-:before {
		content: "\e688";
	}

	.icon-you:before {
		content: "\e606";
	}

	.icon-forward:before {
		content: "\e607";
	}

	.icon-tuijian:before {
		content: "\e610";
	}

	.icon-bangzhu:before {
		content: "\e679";
	}

	.icon-share:before {
		content: "\e656";
	}

	.icon-yiguoqi:before {
		content: "\e997";
	}

	.icon-shezhi1:before {
		content: "\e61d";
	}

	.icon-fork:before {
		content: "\e61b";
	}

	.icon-kafei:before {
		content: "\e66a";
	}

	.icon-iLinkapp-:before {
		content: "\e654";
	}

	.icon-saomiao:before {
		content: "\e60d";
	}

	.icon-shezhi:before {
		content: "\e60f";
	}

	.icon-shouhoutuikuan:before {
		content: "\e631";
	}

	.icon-gouwuche:before {
		content: "\e609";
	}

	.icon-dizhi:before {
		content: "\e614";
	}

	.icon-fenlei:before {
		content: "\e706";
	}

	.icon-xingxing:before {
		content: "\e70b";
	}

	.icon-tuandui:before {
		content: "\e633";
	}

	.icon-zuanshi:before {
		content: "\e615";
	}

	.icon-zuo:before {
		content: "\e63c";
	}

	.icon-shoucang2:before {
		content: "\e62e";
	}

	.icon-shouhuodizhi:before {
		content: "\e712";
	}

	.icon-yishouhuo:before {
		content: "\e71a";
	}

	.icon-dianzan-ash:before {
		content: "\e617";
	}





	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}
	/* 骨架屏替代方案 */
	.Skeleton {
		background: #f3f3f3;
		padding: 20upx 0;
		border-radius: 8upx;
	}

	/* 图片载入替代方案 */
	.image-wrapper {
		font-size: 0;
		background: #f3f3f3;
		border-radius: 4px;

		image {
			width: 100%;
			height: 100%;
			transition: .6s;
			opacity: 0;

			&.loaded {
				opacity: 1;
			}
		}
	}

	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}

	.common-hover {
		background: #f5f5f5;
	}

	/*边框*/
	.b-b:after,
	.b-t:after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		height: 0;
		content: '';
		transform: scaleY(.5);
		border-bottom: 1px solid $border-color-base;
	}

	.b-b:after {
		bottom: 0;
	}

	.b-t:after {
		top: 0;
	}

	/* button样式改写 */
	uni-button,
	button {
		height: 80upx;
		line-height: 80upx;
		font-size: $font-lg + 2upx;
		font-weight: normal;

		&.no-border:before,
		&.no-border:after {
			border: 0;
		}
	}

	uni-button[type=default],
	button[type=default] {
		color: $font-color-dark;
	}

	/* input 样式 */
	.input-placeholder {
		color: #999999;
	}

	.placeholder {
		color: #999999;
	}
	
	.ectouch-notcont {
	  margin: 0upx auto;
	}
	.ectouch-notcont .img {
		width: 400upx;
		height: 240upx;
		margin: 0 auto;
	}
	.ectouch-notcont .img image {
		width: 100%;
		height: 100%;
	}
	.ectouch-notcont .cont {
		display: block;
		text-align: center;
		font-size: 30upx;
		color: #999;
		margin-top: 20upx;
	}
	uni-tabbar {
	    -webkit-box-shadow: 0 0 11px -3px rgba(0,0,0,.3);
	    box-shadow: 0 0 11px -3px rgba(0,0,0,.3);
	}
</style>
