<template>
	<view class="content">
		<wm-poster :imgSrc="content.imgSrc" :QrSrc="content.QrSrc" :Title="content.Title" :PriceTxt="content.PriceTxt" :OriginalTxt="content.OriginalTxt" :Referrer="content.Referrer" @save="save"></wm-poster>
		<view class="qrimg">
		    <tki-qrcode
		    ref="qrcode"
		    :cid="cid"
		    :val="val"
		    :size="size"
		    :unit="unit"
		    :background="background"
		    :foreground="foreground"
		    :pdground="pdground"
		    :icon="icon"
		    :iconSize="iconsize"
		    :lv="lv" 
		    :onval="onval"
		    :loadMake="loadMake"
		    :usingComponents="usingComponents"
		    :showLoading="showLoading"
		    :loadingText="loadingText"
		    @result="qrR" />
		</view>
		<!-- <image :src="content.QrSrc"></image> -->
	</view>
</template>

<script>
	import wmPoster from "@/components/wm-poster/wm-poster.vue"
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	
	export default {
		components: {
			wmPoster, tkiQrcode
		},
		data() {
			return {
				content: {
					imgSrc: '',
					QrSrc: '',
					Title:'',
					PriceTxt:'',
					OriginalTxt:'',
					Referrer:''	
				},
				sharepageurl: '',
				obj: {}
			}
		},
		onLoad(options){
			this.content = JSON.parse(options.content)
			this.content.QrSrc = uni.getStorageSync('qrcode');
			console.log(this.content.QrSrc)
			this.sharepageurl = uni.getStorageSync('sharepageurl')
		},
		methods: {
			onShareAppMessage(content) {
				return {
				  title: this.content.Title,
				  path: this.sharepageurl
				}
			},
			save(imgSrcurl) {
				let that = this;
				// #ifdef MP-WEIXIN
					uni.authorize({
						scope: 'scope.writePhotosAlbum',
						success() {
							that.getImageInfo(imgSrcurl)
						}
					})
				// #endif
				// #ifdef APP-PLUS
					this.getImageInfo(imgSrcurl)
				// #endif
			},
			getImageInfo(imgSrcurl) {
				let that = this;
				uni.showLoading({
					title: '请稍后',
					mask: false
				})
				uni.getImageInfo({
					src: imgSrcurl,
					success: function(image) {
						uni.hideLoading();
						uni.saveImageToPhotosAlbum({
							filePath: image.path,
							success: function() {
								uni.showToast({
									title: '图片保存成功',
									icon: 'none',
									duration: 2200
								})
								setTimeout(() => {
									uni.navigateBack()
								},2200)
							}
						})
					}
				})	
			}			
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: #fff;
	}
</style>
