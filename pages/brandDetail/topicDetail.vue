<template>
	<scroll-view class="container">
	  <scroll-view class="content">
		  <u-parse :content="topiccontent" />
		  <!-- <rich-text :nodes="topiccontent"></rich-text> -->
		<!-- <import src="../../lib/wxParse/wxParse.wxml" /> -->
		<!-- <template is="wxParse" data="{{wxParseData:topicDetail.nodes}}" /> -->
	  </scroll-view>
	  <scroll-view class="sv-goods" v-if="topicGoods.length > 0">
		<view class="topic-goods">
		  <view class="h">
			<text class="t">专题商品</text>
		  </view>
		  <view class="b">
			<view class="item"  v-for="(item, index) in topicGoods" :key="index">
			  <navigator :url="'/pages/product/product?goodsId='+item.id">
				<image class="img" :src="item.picUrl" background-size="cover"></image>
				<view class="right">
				  <view class="text">
					<text class="name">{{item.name}}</text>
					<text class="desc">{{item.brief}}</text>
					<text class="price">￥{{item.retailPrice}}</text>
				  </view>
				</view>
			  </navigator>
			</view>
		  </view>
		</view>
	  </scroll-view>
	  <scroll-view class="comments">
		<view class="h">
		  <text class="t">精选留言</text>
		  <image @tap="postComment" class="i" src="/static/edit.png"></image>
		</view>
		<view class="has-comments" v-if="commentList.length > 0 ">
		  <view class="b">
			<view class="item" v-for="(item, index) in commentList" :key="index" >
			  <view class="info">
				<view class="user">
				  <image class="avatar" :src="item.userInfo.avatarUrl"></image>
				  <text class="nickname">{{item.userInfo.nickName}}</text>
				</view>
				<view class="time">{{item.addTime}}</view>
			  </view>
			  <view class="comment">
				{{item.content}}
			  </view>
			</view>
		  </view>
		  <view class="load" v-if="commentCount > 5">
			<navigator :url="'/pages/topicComment/topicComment?valueId='+topic.id+'&type=1'">查看更多</navigator>
		  </view>
		</view>
		<view class="no-comments" v-if="commentList.length <= 0">
		  <view class="b">
			<image class="icon" src="/static/no-comment.png"></image>
			<text class="txt">等你来留言</text>
		  </view>
		</view>
	  </scroll-view>
	  <scroll-view class="rec-box">
		<view class="h">
		  <text class="txt">专题推荐</text>
		</view>
		<view class="b">
		  <navigator class="item" v-for="(item, index) in topicList" :key="index"  :url="'../brandDetail/topicDetail?id='+item.id">
			<image class="img" :src="item.picUrl"></image>
			<text class="title">{{item.title}}</text>
		  </navigator>
		</view>
	  </scroll-view>
	</scroll-view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		components: {
			uParse
		},
		data() {
			return {
				id: 0,
				topiccontent:'',
				topic: {content:''},
				topicList: [],
				commentCount: 0,
				commentList: [],
				topicGoods: []
			}
		},
		onLoad: function(options) {
			// 页面初始化 options为页面跳转所带来的参数
			var that = this;
			  this.id = options.id
			  let url = '/topic/detail?id='+this.id
			  uni.showLoading({
			  	title:'正在加载'
			  })
			api.httpget(url).then(function(res) {
			  if (res.data.errno === 0) {
			      that.topic = res.data.data.topic;
			      that.topiccontent = that.topic.content;
			      that.topicGoods = res.data.data.goods;
			    // WxParse.wxParse('topicDetail', 'html', res.data.topic.content, that);
			  }
			  uni.hideLoading()
			});
			api.httpget('/topic/related?id='+this.id).then(function(res) {
			  if (res.data.errno === 0) {
			     that.topicList = res.data.data.list
			  }
			})
			this.getCommentList();
		  },
		 //  onPullDownRefresh() {
			// this.gettopiclist(true);
		 //  },
		methods: {
		    getCommentList() {
		      let that = this;
			  let url = '/comment/list?valueId='+this.id+'&type=1&showType=0&page=1&limit=5'
		      api.httpget(url).then(function(res) {
		        if (res.data.errno === 0) {
		            that.commentList = res.data.data.list,
		            that.commentCount = res.data.data.total
		        }
		      })
		    },
		    postComment() {
		      if (!uni.getStorageSync('haslogin')) {
		        uni.navigateTo({
		          url: "/pages/public/login"
		        });
		      } else {
		        uni.navigateTo({
		          url: '/pages/brandDetail/comment?valueId=' + this.id + '&type=1',
		        })
		      }
		    }
		}
	}
</script>

<style lang='scss'>
	.content {
	  width: 100%;
	  height: auto;
	  font-size: 0;
	}
	
	.content image {
	  display: inline-block;
	  width: 100%;
	}
	
	.comments {
	  width: 100%;
	  height: auto;
	  padding-left: 30upx;
	  background: #fff;
	  margin-top: 20upx;
	}
	
	.comments .h {
	  height: 93upx;
	  line-height: 93upx;
	  width: 720upx;
	  padding-right: 30upx;
	  border-bottom: 1px solid #d9d9d9;
	}
	
	.comments .h .t {
	  display: block;
	  float: left;
	  width: 50%;
	  font-size: 29upx;
	  color: #333;
	}
	
	.comments .h .i {
	  display: block;
	  float: right;
	  margin-top: 30upx;
	  width: 33upx;
	  height: 33upx;
	}
	
	.comments .b {
	  height: auto;
	  width: 720upx;
	}
	
	.comments .item {
	  height: auto;
	  width: 720upx;
	  overflow: hidden;
	  border-bottom: 1px solid #d9d9d9;
	}
	
	.comments .info {
	  height: 127upx;
	  width: 100%;
	  padding: 33upx 0 27upx 0;
	}
	
	.comments .user {
	  float: left;
	  width: auto;
	  height: 67upx;
	  line-height: 67upx;
	  font-size: 0;
	}
	
	.comments .user .avatar {
	  display: block;
	  float: left;
	  width: 67upx;
	  height: 67upx;
	  margin-right: 17upx;
	  border-radius: 50%;
	}
	
	.comments .user .nickname {
	  display: block;
	  width: auto;
	  float: left;
	  height: 66upx;
	  overflow: hidden;
	  font-size: 29upx;
	  line-height: 66upx;
	}
	
	.comments .time {
	  display: block;
	  float: right;
	  width: auto;
	  height: 67upx;
	  line-height: 67upx;
	  color: #7f7f7f;
	  font-size: 25upx;
	  margin-right: 30upx;
	}
	
	.comments .comment {
	  width: 720upx;
	  padding-right: 30upx;
	  line-height: 45.8upx;
	  margin-bottom: 30upx;
	  font-size: 29upx;
	  color: #333;
	}
	
	.comments .load {
	  width: 720upx;
	  height: 108upx;
	  line-height: 108upx;
	  text-align: center;
	  font-size: 38.5upx;
	}
	
	.no-comments {
	  height: 297upx;
	}
	
	.no-comments .txt {
	  height: 43upx;
	  line-height: 43upx;
	  display: block;
	  width: 100%;
	  text-align: center;
	  font-size: 29upx;
	  color: #7f7f7f;
	}
	
	.no-comments .icon {
	  margin: 48upx auto 18upx auto;
	  height: 130upx;
	  display: block;
	  width: 115upx;
	}
	
	.sv-goods {
	  width: 100%;
	  height: auto;
	  padding-left: 30upx;
	  background: #fff;
	  margin-top: 20upx;
	}
	
	.topic-goods .h {
	  height: 93upx;
	  line-height: 93upx;
	  width: 720upx;
	  padding-right: 30upx;
	  border-bottom: 1px solid #d9d9d9;
	}
	
	.topic-goods .h .t {
	  display: block;
	  float: left;
	  width: 50%;
	  font-size: 29upx;
	  color: #333;
	}
	
	.topic-goods .b .item {
	  border-bottom: 1px solid #d9d9d9;
	  margin: 0 20upx;
	  height: 244upx;
	  width: 710upx;
	}
	
	.topic-goods .b .img {
	  margin-top: 12upx;
	  margin-right: 12upx;
	  float: left;
	  width: 220upx;
	  height: 220upx;
	}
	
	.topic-goods .b .right {
	  float: left;
	  height: 244upx;
	  width: 476upx;
	  display: flex;
	  flex-flow: row nowrap;
	}
	
	.topic-goods .b .text {
	  display: flex;
	  flex-wrap: nowrap;
	  flex-direction: column;
	  justify-content: center;
	  overflow: hidden;
	  height: 244upx;
	  width: 476upx;
	}
	
	.topic-goods .b .name {
	  float: left;
	  width: 330upx;
	  display: block;
	  color: #333;
	  line-height: 50upx;
	  font-size: 30upx;
	}
	
	.topic-goods .b .desc {
	  width: 476upx;
	  display: block;
	  color: #999;
	  line-height: 50upx;
	  font-size: 25upx;
	}
	
	.topic-goods .b .price {
	  width: 476upx;
	  display: flex;
	  color: #b4282d;
	  line-height: 50upx;
	  font-size: 33upx;
	}
	
	.rec-box {
	  width: 690upx;
	  height: auto;
	  margin: 0 30upx;
	}
	
	.rec-box .h {
	  position: relative;
	  width: 690upx;
	  height: 96upx;
	  /*border-bottom: 1px solid #d0d0d0;*/
	  margin-bottom: 32upx;
	}
	
	.rec-box .h .txt {
	  display: inline-block;
	  position: absolute;
	  background: #fff;
	  top: 59upx;
	  left: 200upx;
	  width: 290upx;
	  height: 45upx;
	  line-height: 45upx;
	  font-size: 30upx;
	  color: #999;
	  text-align: center;
	}
	
	.rec-box .b .item {
	  width: 690upx;
	  height: 397upx;
	  padding: 24upx 24upx 30upx 24upx;
	  background: #fff;
	  margin-bottom: 30upx;
	}
	
	.rec-box .b .item .img {
	  height: 278upx;
	  width: 642upx;
	}
	
	.rec-box .b .item .title {
	  display: block;
	  margin-top: 30upx;
	  height: 30upx;
	  width: 642upx;
	  font-size: 28upx;
	}
	/* @import "../../lib/wxParse/wxParse.wxss"; */

</style>
