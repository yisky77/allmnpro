<template>
	<view class="container">
	  <view class="brand-list" v-if="brandList.length>0">
	    <navigator :url="'../brandDetail/brandDetail?id='+item.id" class="item" v-for="(item,index) in brandList" :key="index">
	      <view class="img-bg">
	        <image :src="item.picUrl" background-size="cover"></image>
	      </view>
	      <view class="txt-box">
	        <view class="line">
	          <text class="name">{{item.name}}</text>
	          <text class="s">|</text>
	          <text class="price">{{item.floorPrice}}元起</text>
	        </view>
	      </view>
	    </navigator>
	  </view>
	  <view class="ectouch-notcont" style="padding-top:100upx" v-else>
	      <view class="img">
	          <image mode="aspectFit" src="/static/category/no_content.png"></image>
	      </view>
	      <text class="cont">亲,没有相关内容</text>
	  </view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				brandList: [],
				currentpage: 1,
				limit: 10,
				totalPages: 1
			}
		},
		onLoad: function(options) {
			this.getBrandList();
		  },
		  onPullDownRefresh() {
		    this.currentpage = 1
			this.getBrandList(true);
		  },
		  onReachBottom() {
		  	if(this.currentpage >= this.totalPages) return false
		  	this.currentpage++;
		  	this.getBrandList()
		  },
		methods: {
		  getBrandList: function(flag) {
			  uni.showLoading({
				title: '加载中...',
			  });
			  let that = this;
			  api.httpget('/brand/list?page='+this.currentpage+'&limit='+this.limit).then(function(res) {
				if (res.data.errno === 0) {
					if(flag) that.brandList = []
					that.brandList = that.brandList.concat(res.data.data.list);
					that.totalPages = res.data.data.pages
				}
				if(flag) uni.stopPullDownRefresh()
				uni.hideLoading();
			  });
			}
		}
	}
</script>

<style lang='scss'>
	.brand-list .item {
	  display: block;
	  width: 750rpx;
	  height: 416rpx;
	  position: relative;
	  margin-bottom: 4rpx;
	}
	
	.brand-list .item .img-bg {
	  position: absolute;
	  left: 0;
	  top: 0;
	  z-index: 0;
	  width: 750rpx;
	  height: 417rpx;
	  overflow: hidden;
	}
	
	.brand-list .item .img-bg image {
	  width: 750rpx;
	  height: 416rpx;
	}
	
	.brand-list .item .txt-box {
	  position: absolute;
	  left: 0;
	  top: 0;
	  display: table;
	  z-index: 0;
	  width: 750rpx;
	  height: 417rpx;
	}
	
	.brand-list .item .line {
	  display: table-cell;
	  vertical-align: middle;
	  text-align: center;
	  height: 63rpx;
	  line-height: 63rpx;
	}
	
	.brand-list .item .line text {
	  font-size: 35rpx;
	  font-weight: 700;
	  text-shadow: 1rpx 1rpx rgba(0, 0, 0, 0.32);
	  color: #fff;
	}
	
	.brand-list .item .line .s {
	  padding: 0 10rpx;
	  font-size: 40rpx;
	}


</style>
