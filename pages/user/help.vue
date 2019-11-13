<template>  
	<view class="container common-problem">
		<view v-if="questionlist.length>0">
		  <view class="item" v-for="(item,index) in questionlist" :key="index">
			<view class="question-box">
			  <text class="spot"></text>
			  <text class="question">{{item.question}}</text>
			</view>
			<view class="answer">
			  {{item.answer}}
			</view>
		  </view>
	  </view>
	  <view class="ectouch-notcont" style="margin-top:130upx" v-else>
	      <view class="img">
	          <image mode="aspectFit" src="/static/category/no_content.png"></image>
	      </view>
	      <text class="cont">亲,暂时没有相关内容哦</text>
	  </view>
	</view>
</template>  
<script>  
	import api from '@/common/vmeitime-http/'
    export default {
		data(){
			return {
				questionlist: [],
				totalPages: 1,
				currentpage: 1,
			}
		},
		onLoad(options){
			this.loadData()
		},
		onPullDownRefresh() {
			this.currentpage = 1
			this.loadData(true);
		},
		onReachBottom() {
			if(this.currentpage >= this.totalPages) return false
			this.currentpage++;
			this.loadData()
		},
		methods: {
			loadData(flag) {
				uni.showLoading({title: '正在加载'})
				let url= '/issue/list?page='+this.currentpage+'&limit=10'	
				api.httpget(url).then((res) => {
					let respons = res.data
					if (respons.errno == 0) {
						if(flag) this.questionlist = []
						this.questionlist = this.questionlist.concat(respons.data.list)
						this.totalPages = respons.data.pages
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					if (flag) uni.stopPullDownRefresh()
					uni.hideLoading()
				})
			}
		}
	}  
</script>  
<style lang='scss'>
	.common-problem{
		padding:40upx;
	}
	.common-problem .item {
	  height: auto;
	  overflow: hidden;
	  padding-bottom: 25upx;
	}
	.common-problem .question-box{overflow:hidden;}
	.common-problem .question-box .spot {
	  float: left;
	  display: block;
	  height: 8upx;
	  width: 8upx;
	  background: #b4282d;
	  border-radius: 50%;
	  margin-top: 11upx;
	}
	
	.common-problem .question-box .question {
	  float: left;
	  line-height: 30upx;
	  padding-left: 8upx;
	  display: block;
	  font-size: 26upx;
	  padding-bottom: 15upx;
	  color: #303030;
	}
	
	.common-problem .answer {
	  line-height: 36upx;
	  padding-left: 16upx;
	  font-size: 26upx;
	  color: #787878;
	}
</style>