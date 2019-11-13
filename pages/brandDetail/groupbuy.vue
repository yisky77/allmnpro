<template>
	<view class="a-section a-groupon" >
	  <view class="b" v-if="groupons.length > 0">
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
				groupons: [],
				limit: 10,
				currentpage: 1,
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
			  api.httpget('/groupon/list?page='+this.currentpage+'&limit='+this.limit).then(function(res) {
				if (res.data.errno === 0) {
					if(flag) that.groupons = []
					that.groupons = that.groupons.concat(res.data.data.list);
					that.totalPages = res.data.data.pages
				}
				if(flag) uni.stopPullDownRefresh()
				uni.hideLoading();
			  })
			}
		}
	}
</script>

<style lang='scss'>
	.a-groupon {
	  width: 750upx;
	  height: auto;
	  overflow: hidden;
	}
	
	.a-groupon .b .item {
	  border-bottom: 1px solid #d9d9d9;
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

</style>
