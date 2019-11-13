<template>
	<view class="content">
		<scroll-view scroll-y="true" class="left-aside" scroll-with-animation :style="{height:height+'px'}">
			<view v-for="(item,index) in flist" :key="index" class="f-item b-b" :class="{active: index == currentId}" @click="tabtap(item,index)">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right-aside" :style="{height:height+'px'}">
			<image :src="currentImage" v-if="currentImage !== ''" mode="widthFix" style="width:100%;"></image>
			<view  class="s-list">
				<view class="t-list">
					<view @click="navToList(item.id)" class="t-item" v-for="(item,index) in slist" :key="index">
						<image :src="item.picUrl?item.picUrl:'/static/category/errorImg.png'"></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import loading from '@/components/loading.vue';
	import api from '@/common/vmeitime-http/'
	import json from '@/Json'
	export default {
		data() {
			return {
				sizeCalcState: false,
				currentImage: '',
				tabScrollTop: 0,
				currentId: 0,
				flist: [],
				height: 0, //scroll-view高度
				slist: [],
				tlist: [],
			}
		},
		onLoad(){
			uni.getSystemInfo({
				success: (res) => {
					let header = 0;
					// #ifdef H5
					header = 0;
					// #endif
					this.height = res.windowHeight - uni.upx2px(header)
				}
			});
			let categorylist = uni.getStorageSync('categorylist')
			if (!categorylist) {
				this.loadData();
			} else {
				this.flist = categorylist.categoryList
				this.currentImage = categorylist.currentCategory.picUrl
				this.slist = categorylist.currentSubCategory
			}
		},
		onPullDownRefresh() {
			this.currentId = 0
			this.loadData(true)
		},
		methods: {
			onShareAppMessage(res) {
				json.sharebtn(res)
			},
			async loadData(flag){
				uni.showLoading({title: '正在加载'})
				let categoryurl = '/catalog/index';
				api.httpget(categoryurl).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.flist = respons.data.categoryList
						this.currentImage = respons.data.currentCategory.picUrl
						this.slist = respons.data.currentSubCategory
						uni.hideLoading()
						uni.setStorageSync('categorylist', respons.data)
					}
					if(flag) uni.stopPullDownRefresh();
				}).catch((err) => {
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh();
				})
			},
			async addloadData(id){
				uni.showLoading({title: '正在加载'})
				let categoryurl = '/catalog/current?id=' + id;
				api.httpget(categoryurl).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.slist = respons.data.currentSubCategory
						this.currentImage = respons.data.currentCategory.picUrl
						uni.hideLoading()
					}
				}).catch((err) => {
					uni.hideLoading()
				})
			},
			//一级分类点击
			tabtap(item,index){
				this.currentId = index
				this.addloadData(item.id)
			},
			//右侧栏滚动
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();
				if(tabs.length > 0){
					this.currentId = tabs[0].pid;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				this.slist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true;
			},
			navToList(tid){
				uni.navigateTo({
					// url: `/pages/product/list?fid=${this.currentId}&sid=${sid}&tid=${tid}`
					url: `/pages/product/list?tid=${tid}`
				})
			}
		}
	}
</script>

<style lang='scss'>
	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
	}

	.content {
		display: flex;
	}
	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #fff;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		color: $font-color-base;
		position: relative;
		&.active{
			color: $base-color;
			background: #f8f8f8;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 36upx;
				width: 8upx;
				background-color: $base-color;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}

	.right-aside{
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
	}
	.s-item{
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
		color: $font-color-dark;
	}
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;
		&:after{
			content: '';
			flex: 99;
			height: 0;
		}
	}
	.t-item{
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 176upx;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;
		
		image{
			width: 140upx;
			height: 140upx;
		}
	}
</style>
