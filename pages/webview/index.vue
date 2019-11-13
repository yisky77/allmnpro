<template>
	<view class="container">
		<web-view  :webview-styles="webviewStyles" :src="url"></web-view>
			<!-- <view 
				v-for="(item, index) in topicList" :key="index"
				class="guess-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.picUrl" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.title}}</text>
				<text class="price">￥{{item.price}}</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		onLoad(options){
			this.url = options.url;
		},
		methods: {
		}
	}
</script>

<style>
	
</style>
