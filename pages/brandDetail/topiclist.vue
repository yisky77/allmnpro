<template>
	<view class="container">
	  <view class="topic-list" v-if="topiclist.length>0">
	  <navigator class="item" :url="'../brandDetail/topicDetail?id='+item.id" v-for="(item,index) in topiclist" :key="index">
	        <image class="img" :src="item.picUrl"></image>
	        <view class="info">
	          <text class="title">{{item.title}}</text>
	          <text class="desc">{{item.subtitle}}</text>
	          <text class="price">{{item.price}}元起</text>
	        </view>
	      </navigator>
	  </view>
	  <view class="ectouch-notcont" style="padding-top:100upx" v-else>
	      <view class="img">
	          <image mode="aspectFit" src="/static/category/no_content.png"></image>
	      </view>
	      <text class="cont">亲,暂无相关专题内容</text>
	  </view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				topiclist: [],
				currentpage: 1,
				limit: 10,
				totalPages: 1
			}
		},
		onLoad: function() {
			this.gettopiclist();
	    },
	    onPullDownRefresh() {
			this.currentpage = 1
			this.gettopiclist(true);
	    },
	    onReachBottom() {
			if(this.currentpage >= this.totalPages) return false
			this.currentpage++;
			this.gettopiclist()
	    },
		methods: {
		  gettopiclist: function(flag) {
			  uni.showLoading({
				title: '加载中...',
			  });
			  let that = this;
			  api.httpget('/topic/list?page='+this.currentpage+'&limit='+this.limit).then(function(res) {
				if (res.data.errno === 0) {
					if(flag) that.topiclist = []
					that.topiclist = that.topiclist.concat(res.data.data.list);
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
	.container{
	   width: 750upx;
	    height: 100%;
	    background: #f4f4f4;
	}
	.topic-list{
	    width: 750upx;
	    height: 100%;
	    overflow: hidden;
	    background: #f4f4f4;
	}
	
	.topic-list .item{
	    width: 100%;
	    height: 625upx;
	    overflow: hidden;
	    background: #fff;
	    margin-bottom: 20upx;
	}
	
	.topic-list .img{
	    width: 100%;
	    height: 415upx;
	}
	
	.topic-list .info{
	    width: 100%;
	    height: 210upx;
	    overflow: hidden;
	}
	
	.topic-list .title{
	    display: block;
	    text-align: center;
	    width: 100%;
	    height: 33upx;
	    line-height: 35upx;
	    color: #333;
	    overflow: hidden;
	    font-size: 35upx;
	    margin-top: 30upx;
	}
	
	.topic-list .desc{
	    display: block;
	    text-align: center;
	    position: relative;
	    width: auto;
	    height: 24upx;
	    line-height: 24upx;
	    overflow: hidden;
	    color: #999;
	    font-size: 24upx;
	    margin-top: 16upx;
	    margin-bottom: 30upx;
	}
	
	.topic-list .price{
	    display: block;
	    text-align: center;
	    width: 100%;
	    height: 27upx;
	    line-height: 27upx;
	    overflow: hidden;
	    color: #b4282d;
	    font-size: 27upx;
	}
</style>
