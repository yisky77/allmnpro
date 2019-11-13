<template>
	<view class="content">
		<wm-poster :imgSrc="content.imgSrc" :QrSrc="content.QrSrc" :Title="content.Title" :PriceTxt="content.PriceTxt" :OriginalTxt="content.OriginalTxt" :Referrer="content.Referrer" @save="save"></wm-poster>
	</view>
</template>

<script>
	import wmPoster from "@/components/wm-poster/wm-poster.vue"
	export default {
		components: {
			wmPoster	
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
				obj: {}
			}
		},
		onLoad(options){
			this.content = JSON.parse(options.content)
			this.content.QrSrc = 'https://img0.zuipin.cn/mp_zuipin/poster/hch-code.png';
			console.log(this.content)
		},
		methods: {
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
