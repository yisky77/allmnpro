<template>
	<view>
		<!-- 评价 -->
		<view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>({{commentList.total}})</text>
			</view> 
			<view v-for="(item,index) in commentList.list" :key="index" v-show="commentList.total>0">
				<view class="eva-box" >
					<image class="portrait" :src="item.userInfo.avatarUrl==''?'/static/missing-face.png':item.userInfo.avatarUrl" mode="aspectFill"></image>
					<view class="right">
						<text class="name">{{item.userInfo.nickName}}</text>
						<text class="con">{{item.content}}</text>
						<view class="bot">
							<!-- <text class="attr">购买类型：XL 红色</text> -->
							<text class="time">{{item.addTime}}</text>
						</view>
					</view>
				</view>
				<view v-for="(item1,index1) in picList" :key="index1" v-show="picList.length>0">
				<!-- <view @tap="previewimage"> -->
				<image class="portrait img" @tap="previewimage(index1)" :src="item1==''?'/static/missing-face.png':item1" mode="aspectFill"></image>
					<!-- <image  class="portrait img" src="" mode="aspectFill"></image>
					<image   class="portrait img" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erfZhHdsIhcYmFoVGmuUoKe8zW0WppRiaZAm4cv6PUbPibtRCPL9lyxumlpHSSl4fOTjJg0cYmaoibEg/132" mode="aspectFill"></image>
					<image   class="portrait img" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erfZhHdsIhcYmFoVGmuUoKe8zW0WppRiaZAm4cv6PUbPibtRCPL9lyxumlpHSSl4fOTjJg0cYmaoibEg/132" mode="aspectFill"></image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				commentList: [],
				optionsid: '',
				picList: [
					// 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erfZhHdsIhcYmFoVGmuUoKe8zW0WppRiaZAm4cv6PUbPibtRCPL9lyxumlpHSSl4fOTjJg0cYmaoibEg/132',
					// 'http://img.zhichiwangluo.com/zcimgdir/album/file_5afb9188d16d4.jpg'
				]
			}
		},
		async onLoad(options){
			this.optionsid = options.id
			this.getload()
		},
		onPullDownRefresh() {
			this.getload(true);
		},
		methods:{
			getload(flag) {
				uni.showLoading({title: '正在加载'})
				let producturl = '/comment/list?valueId='+this.optionsid+'&type=0&limit=100&page=1&showType=0'
				api.httpget(producturl).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.commentList =  respons.data
					}
					if(flag) uni.stopPullDownRefresh();
					uni.hideLoading()
				}).catch((err) => {
					if(flag) uni.stopPullDownRefresh();
					uni.hideLoading()
				})
			},
			previewimage(index) {
				// 预览图片
				uni.previewImage({
					current: index,
					urls: this.picList,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
	}
/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;
		.e-header{
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.tit{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10upx;
			}
		}
		.img{
			width:32.30%;float:left;margin:0 0.5%;height:200upx;
		}
	}
	.eva-box{
		display: flex;
		padding: 20upx 0 0;position: relative;
		.portrait{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;
			.con{
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color:$font-color-light;
				position: absolute;
				top: 20upx;
				right: 0;

			}
		}
	}
	
	
</style>
