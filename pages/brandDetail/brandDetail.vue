<template>
	<view class="container">
	  <view class="brand-info">
	    <view class="name">
	      <image class="img" :src="brand.picUrl" background-size="cover"></image>
	      <view class="info-box">
	        <view class="info">
	          <text class="txt">{{brand.name}}</text>
	          <text class="line"></text>
	        </view>
	      </view>
	    </view>
	    <view class="desc">
	      {{brand.desc}}
	    </view>
	  </view>
	
	  <view class="cate-item">
	    <view class="b" v-if="goodsList.length>0">
	      <view v-for="(iitem,index) in goodsList" :key="index" >
	        <navigator class="item item-b" :url="'/pages/product/product?goodsId='+iitem.id">
	          <image class="img" :src="iitem.picUrl" background-size="cover"></image>
	          <text class="name">{{iitem.name}}</text>
	          <text class="price">￥{{iitem.retailPrice}}</text>
	        </navigator>
	      </view>
	    </view>
		<view class="ectouch-notcont" style="padding-top:100upx" v-else>
		    <view class="img">
		        <image mode="aspectFit" src="/static/category/no_content.png"></image>
		    </view>
		    <text class="cont">亲,暂无相关品牌商内容</text>
		</view>
	  </view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				id: 0,
				brand: {name:'',desc:''},
				goodsList: [],
				page: 1,
				limit: 10
			}
		},
		onLoad: function(options) {
		    // 页面初始化 options为页面跳转所带来的参数
		    var that = this;
		    this.id = parseInt(options.id)
		    this.getBrand();
		  },
		methods: {
			  getBrand: function() {
			    let that = this;
				uni.showLoading({title: '正在加载'})
			    api.httpget('/brand/detail?id='+this.id).then((res)=> {
			      if (res.data.errno === 0) {
			        this.brand = res.data.data
			        this.getGoodsList();
			      }
				  uni.hideLoading()
			    })
			  },
			  getGoodsList() {
			    api.httpget('/goods/list?brandId='+this.id+'&page='+this.page+'&limit='+this.limit)
			      .then((res) => {
			        if (res.data.errno === 0) {
			            this.goodsList = res.data.data.list
			        }
			      })
			  }
		}
	}
</script>

<style lang='scss'>
	page {
	  background: #f4f4f4;
	}
	
	.brand-info .name {
	  width: 100%;
	  height: 290upx;
	  position: relative;
	}
	
	.brand-info .img {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 290upx;
	}
	
	.brand-info .info-box {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 290upx;
	  text-align: center;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
	.brand-info .info {
	  display: block;
	}
	
	.brand-info .txt {
	  display: block;
	  height: 37.5upx;
	  font-size: 37.5upx;
	  color: #fff;
	}
	
	.brand-info .line {
	  margin: 0 auto;
	  margin-top: 16upx;
	  display: block;
	  height: 2upx;
	  width: 145upx;
	  background: #fff;
	}
	
	.brand-info .desc {
	  background: #fff;
	  width: 100%;
	  height: auto;
	  overflow: hidden;
	  padding: 41.5upx 31.25upx;
	  font-size: 30upx;
	  color: #666;
	  line-height: 41.5upx;
	  text-align: center;
	}
	
	.cate-item .b {
	  width: 100%;
	  height: auto;
	  overflow: hidden;
	  border-top: 1upx solid #f4f4f4;
	  margin-top: 20upx;
	}
	
	.cate-item .b .item {
	  float: left;
	  background: #fff;
	  width: 50%;
	  box-sizing: border-box;
	  padding-bottom: 33.333upx;
	  border-bottom: 1upx solid #f4f4f4;
	  height: auto;
	  overflow: hidden;
	  text-align: center;
	}
	
	.cate-item .b .item-b {
	  border-right: 1upx solid #f4f4f4;
	}
	
	.cate-item .item .img {
	  margin-top: 10upx;
	  width: 100%;
	  height: 302upx;
	}
	
	.cate-item .item .name {
	  display: block;
	  width: 365.625upx;
	  height: 35upx;
	  padding: 0 20upx;
	  overflow: hidden;
	  margin: 11.5upx 0 22upx 0;
	  text-align: center;
	  font-size: 30upx;
	  color: #333;
	}
	
	.cate-item .item .price {
	  display: block;
	  width: 365.625upx;
	  height: 30upx;
	  text-align: center;
	  font-size: 30upx;
	  color: #b4282d;
	}

</style>
