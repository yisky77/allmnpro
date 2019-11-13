<template>
	<view class="container">
		<view class="navbar">
			<view 
				v-for="(item, index) in navList" :key="index" 
				class="nav-item" 
				:class="{current: tabCurrentIndex === index}"
				@click="tabClick(index,item.state)"
			>
				{{item.text}}
			</view>
		</view>
		<!-- 优惠券面板 -->
		<view v-if="couponList.length>0">
			<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
				<view class="con">
					<view class="left">
						<text class="time">有效期:{{item.startTime}} 至 {{item.endTime}}</text>
					</view>
					<view class="right">
						<text class="price">{{item.discount}}</text>
						<text>满{{item.min}}可用</text>
					</view>
					<view class="circle l"></view>
					<view class="circle r"></view>
				</view>
				<text class="tips">{{item.name}}-{{item.desc}}</text>
			</view>
		</view>
		<view class="ectouch-notcont" style="margin-top:130upx" v-else>
		    <view class="img">
		        <image mode="aspectFit" src="/static/category/no_content.png"></image>
		    </view>
		    <text class="cont">亲,暂时没有相关优惠券哦</text>
		</view>
	</view>
</template>

<script>
	import {  
	    mapMutations  
	} from 'vuex';
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				couponList: [],
				tabCurrentIndex: 0,
				currentpage: 1,
				totalPages: 1,
				istabclick: true,
				navList: [{
						state: 0,
						text: '未使用'
					},
					{
						state: 1,
						text: '已使用'
					},
					{
						state: 2,
						text: '已过期'
					}
				],
				state: 0
			};
		},
		onLoad(option){
			this.mycoloect()
		},
		onPullDownRefresh() {
			this.currentpage = 1
			this.mycoloect(true)
		},
		onReachBottom() {
			if(this.currentpage >= this.totalPages) return false
			this.currentpage++;
			this.mycoloect()
		},
		methods:{
			mycoloect(flag) {
				uni.showLoading({title: '正在加载'})
				let url = '/coupon/mylist?status='+this.state+'&page='+this.currentpage+'&limit=10'
				api.httpget(url).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						if(flag || this.istabclick) this.couponList = []
						this.couponList = this.couponList.concat(respons.data.list)
						this.totalPages = respons.data.pages
						this.istabclick = false
					}
					if(flag) uni.stopPullDownRefresh();
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh();
				})
			},
			//顶部tab点击
			tabClick(index,state){
				this.tabCurrentIndex = index;
				this.state = state
				this.istabclick = true
				this.currentpage = 1;
				this.mycoloect()
			},
			//详情
			navToDetailPage(item){
				uni.navigateTo({
					url: `/pages/product/product?goodsId=${id}`
				})
			}
		}
	}
</script>

<style lang='scss'>
	.navbar{
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: $base-color;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid $base-color;
				}
			}
		}
	}
	/* 优惠券列表 */
	.coupon-item{
		display: flex;
		flex-direction: column;
		margin: 20upx 24upx;
		padding: 10upx 0;
		background: #fff;
		.con{
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;
			&:after{
				position: absolute;
				left: 0;
				bottom: 0;
				content: '';
				width: 100%;
				height: 0;
				border-bottom: 1px dashed #f3f3f3;
				transform: scaleY(50%);
			}
		}
		.left{
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			height: 100upx;
		}
		.title{
			font-size: 32upx;
			color: $font-color-dark;
			margin-bottom: 10upx;
		}
		.time{
			font-size: 26upx;
			color: $font-color-light;
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: $font-color-base;
			height: 100upx;
		}
		.price{
			font-size: 44upx;
			color: $base-color;
			&:before{
				content: '￥';
				font-size: 34upx;
			}
		}
		.tips{
			font-size: 24upx;
			color: $font-color-light;
			line-height: 60upx;
			padding-left: 30upx;
		}
		.circle{
			position: absolute;
			left: -6upx;
			bottom: -10upx;
			z-index: 10;
			width: 20upx;
			height: 20upx;
			background: #f3f3f3;
			border-radius: 100px;
			&.r{
				left: auto;
				right: -6upx;
			}
		}
	}
	.ectouch-notcont {
	  margin: 130upx auto;
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
</style>
