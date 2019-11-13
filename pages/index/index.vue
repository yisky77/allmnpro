<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<view class="mp-search-box" @tap="navToSearch">
			<input class="ser-input" type="text" placeholder="输入关键字搜索" />
		</view>
		<!-- 头部轮播 -->
		<view class="carousel-section" v-if="carouselList.length>0">
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
			<swiper class="carousel" circular @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToWebView(item.link)">
					<image :src="item.url" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{carouselList.length}}</text>
			</view>
		</view>
		<!-- 分类 -->
		<view class="cate-section">
			<view class="cate-item" @tap="gopage(item)"  v-for="(item, index) in sortList" :key="index"  hover-class="none">
				<image :src="item.img" class="sortimage"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="cate-section">
			<view class="cate-item"  @tap="gopage(item)" v-for="(item, index) in sortList1" :key="index" hover-class="none">
				<image :src="item.img" class="sortimage"></image>
				<text>{{item.name}}</text>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<view class="cate-item">
				<button open-type="contact" class="buttonstyle">
					<image src="/static/temp/kefu.png" class="sortimage"></image>
					<text>客服</text>
				</button>
			</view>
			<!-- #endif -->
		</view>
		<view v-if="brandList.length>0">
			<navigator class="f-header m-t" url="../brandDetail/brand">
				<image src="/static/temp/h1.png"></image>
				<view class="tit-box">
					<text class="tit">品牌制造商直供</text>
					<text class="tit2">Boutique Group Buying</text>
				</view>
				<text class="yticon icon-you"></text>
			</navigator>
			<view class="a-section a-brand">
		    <view class="b">
		      <view class="item item-1" v-for="(item, index) in brandList" :key="index">
		        <navigator :url="'/pages/brandDetail/brandDetail?goodsId='+item.id" hover-class="none">
		          <view class="wrap">
		            <image class="img" :src="item.picUrl" mode="aspectFill"></image>
		            <view class="mt">
		              <text class="brand">{{item.name}}</text>
		              <text class="price">{{item.floorPrice}}</text>
		              <text class="unit">元起</text>
		            </view>
		          </view>
		        </navigator>
		      </view>
		    </view>
		  </view>
	    </view>
		<view class="a-section a-groupon m-t hot-floor" v-if="groupons.length > 0">
			<navigator class="f-header" url="../brandDetail/groupbuy">
				<image src="/static/temp/02.gif"></image>
				<view class="tit-box">
					<text class="tit">团购精品</text>
					<text class="tit2">Boutique Group Buying</text>
				</view>
				<text class="yticon icon-you"></text>
			</navigator>
			  <view class="b">
				<view class="item" v-for="(item, index) in groupons" :key="index">
				  <navigator :url="'/pages/product/product?goodsId='+item.id">
					<image class="img" :src="item.picUrl" background-size="cover"></image>
					<view class="right">
					  <view class="text">
						<view class="header">
						  <text class="name">{{item.name}}</text>
						  <view class="capsule-tag">
							  <text>{{item.grouponMember}}人成团</text>
							  <text>立减{{item.grouponDiscount}}</text>
						  </view>
						</view>
						<text class="desc">{{item.brief}}</text>
						<view class="price">
						  <view class="counterPrice">现价：￥{{item.retailPrice}}</view>
						  <view class="retailPrice">团购价：￥{{item.grouponPrice}}</view>
						</view>
					  </view>
					</view>
				  </navigator>
				</view>
			  </view>
		  </view>
		<!-- 专题精选 -->
		<view v-if="topicList.length>0" class="a-topic m-t">
			<navigator class="f-header" url="../brandDetail/topiclist">
				<image src="/static/temp/h1.png"></image>
				<view class="tit-box">
					<text class="tit">专题精选</text>
					<text class="tit2">Guess You Like It</text>
				</view>
				<text class="yticon icon-you"></text>
			</navigator>
			<view class="b hot-floor">
			  <scroll-view scroll-x class="list">
				<view class="item"  v-for="(item, index) in topicList" :key="index">
				  <navigator :url="'/pages/brandDetail/topicDetail?goodsId='+item.id" hover-class="none">
					<image class="img" :src="item.picUrl" background-size="cover"></image>
					<view class="np">
					  <text class="name">{{item.title}}</text>
					  <text class="price">￥{{item.price}}元起</text>
					</view>
					<text class="desc">{{item.subtitle}} （阅读量:{{item.readCount}}）</text>
				  </navigator>
				</view>
			  </scroll-view>
			</view>
		</view>
		
		<!-- 新品首发 -->
		<view v-if="newGoodsList.length>0" class=" m-t">
			<navigator class="f-header bcolor" url="../category/hot?type=isNew">
				<image src="/static/temp/h1.png"></image>
				<view class="tit-box">
					<text class="tit">新品首发</text>
					<text class="tit2">Competitive Products For You</text>
				</view>
				<text class="yticon icon-you"></text>
			</navigator>
			<view class="hot-floor">
				<scroll-view class="floor-list" scroll-x>
					<view class="scoll-wrapper">
						<view 
							v-for="(item, index) in newGoodsList" :key="index"
							class="floor-item"
							@click="navToDetailPage(item)"
						>
							<image :src="item.picUrl" mode="aspectFill"></image>
							<text class="title clamp">{{item.name}}</text>
							<text class="price">￥{{item.retailPrice}}</text>
						</view>
						<navigator url="../category/hot">
							<view class="more">
								<text>查看全部</text>
								<text>More+</text>
							</view>
						</navigator>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- 人气推荐 -->
		<view v-if="goodsList.length>0" class="m-t">
			<navigator class="f-header" url="../category/hot?type=hot">
				<image src="/static/temp/h1.png"></image>
				<view class="tit-box">
					<text class="tit">人气推荐</text>
					<text class="tit2">Guess You Like It</text>
				</view>
				<text class="yticon icon-you"></text>
			</navigator>
			<view class="guess-section">
				<view 
					v-for="(item, index) in goodsList" :key="index"
					class="guess-item"
					@click="navToDetailPage(item)"
				>
					<view class="image-wrapper">
						<image :src="item.picUrl" mode="aspectFill"></image>
					</view>
					<text class="title clamp">{{item.name}}</text>
					<text class="price">￥{{item.retailPrice}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	import json from '@/Json'

	export default {
		data() {
			return {
				haslogin: true,
				loadModal: false,
				agentId: 7813,
				titleNViewBackground: '',
				swiperCurrent: 0,
				brandList: [],
				groupons: [],
				carouselList: [],
				goodsList: [],
				newGoodsList: [],
				topicList: [],
				grouponList: [],
				sortList: [
					{name:'优惠券',img: '/static/temp/coupon.png',url: '/pages/mycoupon/couponlist', opentype: 'navigateTo'},
					{name:'拼团',img: '/static/temp/02.gif',url: '/pages/brandDetail/groupbuy', opentype: 'navigateTo'},
					// {name:'砍价',img: '/static/temp/01.gif',url: '/pages/mycoupon/couponlist', opentype: 'navigateTo'},
					{name:'人气推荐',img: '/static/temp/new_nav_3.png',url: '/pages/category/hot?type=isHot', opentype: 'navigateTo'},
					{name:'品牌商',img: '/static/temp/04.gif',url: '/pages/brandDetail/brand', opentype: 'navigateTo'}
				],
				sortList1: [
					{name:'专题精选',img: '/static/temp/3.png',url: '/pages/brandDetail/topiclist', opentype: 'navigateTo'},
					// {name:'京东热销',img: '/static/temp/jd.png',url: '/pages/category/hot?type=isNew',appid: 'wx13e41a437b8a1d2e' },
					// {name:'拼多多热销',img: '/static/temp/pdd.png',url: '/pages/category/hot?type=hot',appid: 'wx32540bd863b27570'},
					{name:'新品',img: '/static/temp/03.gif',url: '/pages/category/hot?type=isNew', opentype: 'navigateTo'},
					{name:'全部分类',img: '/static/temp/05.gif',url: '/pages/category/category', opentype: 'switchTab'},
				]
			}
		},
		onLoad() {
			this.loadData();
		},
		onPullDownRefresh() {
		  this.loadData(true);
		},
		methods: {
			onShareAppMessage(res) {
				json.sharebtn(res)
			},
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData(flag) {
				// 加载首页内容渲染
				uni.showLoading({title: '正在加载'})
				let homeurl = '/home/index';
				api.httpget(homeurl).then((res) => {
					let respons = res.data;
					let resp = respons.data;
					if(respons.errno == 0) {
						this.carouselList = resp.banner;
						this.goodsList = resp.hotGoodsList;
						this.newGoodsList = resp.newGoodsList;
						this.grouponList = resp.grouponList;
						this.topicList = resp.topicList;
						this.groupons = resp.grouponList;
						this.brandList = resp.brandList;
						uni.setStorageSync('couponList', resp.couponList)
						uni.setStorageSync('goodsList', this.goodsList)
					}
					if(flag) uni.stopPullDownRefresh()
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh()
				})
				// let carouselList = await this.$api.json('carouselList');
				// this.titleNViewBackground = carouselList[0].background;
				// this.carouselList = carouselList;
				// let goodsList = await this.$api.json('goodsList');
				// this.goodsList = goodsList || [];
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			//详情页
			navToDetailPage(item) {
				let id = item.id;
				uni.navigateTo({
					url: `/pages/product/product?goodsId=${id}`
				})
			},
			gopage(item) {
				if(item.appid) {
					uni.navigateToMiniProgram({ appId: item.appid })
				} else {
					if(item.opentype !== 'switchTab') uni.navigateTo({ url: item.url })
					else uni.switchTab({ url: item.url })
				}
			},
			// 搜索
			navToSearch() {
				uni.navigateTo({
					url: `/pages/product/searchlist`
				})
			},
			//广告页面跳转
			navToWebView(url) {
				// #ifdef MP
					uni.navigateTo({
						url: `/pages/webview/index?url=${url}`
					})
				// #endif
				// #ifdef H5
					location.href = url
				// #endif
			}
		}
	}
</script>

<style lang="scss">
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.9);
		}
	}
	page{
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16upx 16upx 0 0;
			margin-top:-20upx;
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	
	page {
		background: #f5f5f5;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			// padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30upx 22upx; 
		background: #fff;
		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
		}
		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88upx;
			height: 88upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}
	}
	.ad-1{
		width: 100%;
		height: 210upx;
		padding: 10upx 0;
		background: #fff;
		image{
			width:100%;
			height: 100%; 
		}
	}
	/* 秒杀专区 */
	.seckill-section{
		padding: 4upx 30upx 24upx;
		background: #fff;
		.s-header{
			display:flex;
			align-items:center;
			height: 92upx;
			line-height: 1;
			.s-img{
				width: 140upx;
				height: 30upx;
			}
			.tip{
				font-size: $font-base;
				color: $font-color-light;
				margin: 0 20upx 0 40upx;
			}
			.timer{
				display:inline-block;
				width: 40upx;
				height: 36upx;
				text-align:center;
				line-height: 36upx;
				margin-right: 14upx;
				font-size: $font-sm+2upx;
				color: #fff;
				border-radius: 2px;
				background: rgba(0,0,0,.8);
			}
			.icon-you{
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
			}
		}
		.floor-list{
			white-space: nowrap;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 150upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 150upx;
				height: 150upx;
				border-radius: 6upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
	}
	
	.f-header{
		display:flex;
		align-items:center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.icon-you{
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
	/* 团购楼层 */
	.group-section{
		background: #fff;
		.g-swiper{
			height: 650upx;
			padding-bottom: 30upx;
		}
		.g-swiper-item{
			width: 100%;
			padding: 0 30upx;
			display:flex;
		}
		image{
			width: 100%;
			height: 460upx;
			border-radius: 4px;
		}
		.g-item{
			display:flex;
			flex-direction: column;
			overflow:hidden;
		}
		.left{
			flex: 1.2;
			margin-right: 24upx;
			.t-box{
				padding-top: 20upx;
			}
		}
		.right{
			flex: 0.8;
			flex-direction: column-reverse;
			.t-box{
				padding-bottom: 20upx;
			}
		}
		.t-box{
			height: 160upx;
			font-size: $font-base+2upx;
			color: $font-color-dark;
			line-height: 1.6;
		}
		.price{
			color:$uni-color-primary;
		}
		.m-price{
			font-size: $font-sm+2upx;
			text-decoration: line-through;
			color: $font-color-light;
			margin-left: 8upx;
		}
		.pro-box{
			display:flex;
			align-items:center;
			margin-top: 10upx;
			font-size: $font-sm;
			color: $font-base;
			padding-right: 10upx;
		}
		.progress-box{
			flex: 1;
			border-radius: 10px;
			overflow: hidden;
			margin-right: 8upx;
		}
	}
	/* 分类推荐楼层 */
	.hot-floor{
		width: 100%;
		overflow: hidden;
		margin-bottom: 10upx;
		.floor-img-box{
			width: 100%;
			height:320upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(rgba(255,255,255,.06) 30%, #f8f8f8);
			}
		}
		.floor-img{
			width: 100%;
			height: 100%;
		}
		.floor-list{
			white-space: nowrap;
			padding: 20upx;height:330upx;
			border-radius: 6upx;
			// margin-top:-140upx;
			// margin-left: 30upx;
			background: #fff;
			box-shadow: 1px 1px 5px rgba(0,0,0,.2);
			position: relative;
			z-index: 1;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 180upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 180upx;
				height: 180upx;
				border-radius: 6upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
		.more{
			display:flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			background: #f3f3f3;
			font-size: $font-base;
			color: $font-color-light;
			text:first-child{
				margin-bottom: 4upx;
			}
		}
	}
	/* 猜你喜欢 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 0upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 50%;
			padding-bottom: 40upx;
			border-top: 0.5px solid #f4f4f4;
			&:nth-child(2n+1){
				// margin-right: 4%;
				border-right: 0.5px solid #f4f4f4;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 0px;
			background: none;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: 24upx;
			color: $font-color-dark;
			line-height: 80upx;
			text-indent: 20upx;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
			text-indent: 20upx;
		}
	}
	
	.a-section {
	  width: 100%;
	  height: auto;
	  overflow: hidden;
	  background: #fff;
	  color: #333;
	}
	
	.a-section .h {
	  display: flex;
	  flex-flow: row nowrap;
	  align-items: center;
	  justify-content: center;
	  height: 130upx;
	}
	
	.a-section .h .txt {
	  background-size: 16.656upx 27upx;
	  display: inline-block;
	  height: 36upx;
	  font-size: 33upx;
	  line-height: 36upx;
	}
	
	.a-brand .b {
	  width: 100%;
	  height: auto;
	  overflow: hidden;
	  position: relative;
	}
	
	.a-brand .wrap {
	  position: relative;
	}
	
	.a-brand .img {
	  position: absolute;
	  left: 0;
	  top: 0;
	}
	
	.a-brand .mt {
	  position: absolute;
	  z-index: 2;
	  padding: 27upx 31upx;
	  left: 0;
	  top: 0;
	}
	
	.a-brand .mt .brand {
	  display: block;
	  font-size: 33upx;
	  height: 43upx;
	  color: #fff;
	}
	
	.a-brand .mt .price, .a-brand .mt .unit {
	  font-size: 25upx;
	  color: #fff;
	}
	
	.a-brand .item-1 {
	  float: left;
	  width: 50%;
	  height: 252upx;
	  overflow: hidden;
	  border-top: 1upx solid #fff;
	  margin-left: 0upx;
	}
	
	.a-brand .item-1:nth-child(2n+1) {
	  margin-left: 0;
	  width: 50%;
	}
	
	.a-brand .item-1 .img {
	  width: 100%;
	  height: 253upx;
	}
	
	.a-groupon {
	  width: 100%;
	  height: auto;
	  overflow: hidden;
	}
	
	.a-groupon .b .item {
	  border-top: 1px solid #d9d9d9;
	  margin: 0 20upx;
	  height: 244upx;
	  width: 710upx;
	}
	
	.a-groupon .b .img {
	  margin-top: 12upx;
	  margin-right: 12upx;
	  float: left;
	  width: 220upx;
	  height: 220upx;
	}
	
	.a-groupon .b .right {
	  float: left;
	  height: 244upx;
	  width: 476upx;
	  display: flex;
	  flex-flow: row nowrap;
	}
	
	.a-groupon .b .text {
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: column;
	  justify-content: center;
	  overflow: hidden;
	  height: 244upx;
	  width: 476upx;
	}
	
	.a-groupon .b .name {
	  float: left;
	  display: block;
	  color: #333;
	  line-height: 50upx;
	  font-size: 30upx;
	}
	
	.a-groupon .capsule-tag {
	  float: right;
	  padding-right: 0upx;
	  padding-top: 8upx;
	  text{
		  font-size: 26upx;
		  background: #fa436a;margin-left:2upx;
		  padding: 5upx 15upx;
		  color: #fff;
	  }
	}
	
	.a-groupon .b .desc {
	  width: 476upx;
	  display: block;
	  color: #999;
	  line-height: 50upx;
	  font-size: 25upx;
	}
	
	.a-groupon .b .price {
	  width: 476upx;
	  display: flex;
	  color: #ab956d;
	  line-height: 50upx;
	  font-size: 33upx;
	}
	
	.a-groupon .b .counterPrice {
	  text-decoration: line-through;
	  font-size: 28upx;
	  color: #999;
	}
	
	.a-groupon .b .retailPrice {
	  margin-left: 30upx;
	  font-size: 28upx;
	  color: #a78845;
	}
	
	.a-topic .b {
	  height: 533upx;
	  width: 100%;
	  background: #fff;
	  padding: 0 0 48upx 0;
	}
	
	.a-topic .b .list {
	  height: 533upx;
	  width: 100%;
	  white-space: nowrap;
	}
	
	.a-topic .b .item {
	  display: inline-block;
	  height: 533upx;
	  width: 680.5upx;
	  margin-left: 30upx;
	  overflow: hidden;
	}
	
	.a-topic .b .item:last-child {
	  margin-right: 30upx;
	}
	
	.a-topic .b .img {
	  height: 387.5upx;
	  width: 680.5upx;
	  margin-bottom: 30upx;
	}
	
	.a-topic .b .np {
	  height: 35upx;
	  margin-bottom: 13.5upx;
	  color: #333;
	  font-size: 30upx;
	}
	
	.a-topic .b .np .price {
	  margin-left: 20.8upx;
	  color: #ab956d;
	}
	.a-topic .b .desc {
	  display: block;
	  height: 30upx;
	  color: #999;
	  font-size: 24upx;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.buttonstyle{
		height: auto;
		background: none;
		padding: 0;
		font-size: 28upx;
		line-height: 35upx;
		color: #303133;
		image{display: block;}
	}
	.bcolor{
		border-bottom: 1px solid #d9d9d9;
	}
</style>
