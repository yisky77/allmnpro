<template>
	<view class="container">
	  <view class="brand-info">
	    <view class="name">
	      <image class="img" :src="bannerInfo.imgUrl" background-size="cover"></image>
	      <view class="info-box">
	        <view class="info">
	          <text class="txt">{{bannerInfo.name}}</text>
	          <text class="line"></text>
	        </view>
	      </view>
	    </view>
	  </view>
	  <view class="sort">
	    <view class="sort-box">
	      <view class="item active">
	        <text class="txt">综合</text>
	      </view>
	      <!-- <view :class="{'active': currentSortType == 'price'}" class="item by-price {{currentSortOrder == 'asc'  ? 'asc' : 'desc'}}" @tap="openSortFilter" id="priceSort">
	        <text class="txt">价格</text>
	      </view> -->
	      <!-- <view class="item"  :class="{'active': currentSortType == 'category'}" @tap="openSortFilter" id="categoryFilter">
	        <text class="txt">分类</text>
	      </view> -->
	    </view>
	    <!-- <view class="sort-box-category" v-if="categoryFilter">
	      <view class="item" :class="{'active': item.checked}"  v-for="(item, index) in filterCategory" :key="index" @tap="selectCategory">{{item.name}}</view>
	    </view> -->
	  </view>
	  <view class="cate-item">
	    <view class="b">
	      <block v-for="(item, index) in goodsList" :key="index">
	        <navigator class="item " :class="{'item-b': index % 2 == 0}" :url="'../product/product?goodsId='+item.id">
	          <image class="img" :src="item.picUrl" background-size="cover"></image>
	          <text class="name">{{item.name}}</text>
	          <text class="price">￥{{item.retailPrice}}</text>
	        </navigator>
	      </block>
	    </view>
	  </view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				bannerInfo: {
				  'imgUrl': '/static/category/c1.png',
				  'name': '大家都在买的'
				},
				categoryFilter: false,
				filterCategory: [],
				goodsList: [],
				type: 'hot',
				categoryId: 0,
				currentSortType: 'default',
				currentSort: 'add_time',
				currentSortOrder: 'desc',
				currentpage: 1,
				totalPages: 1,
				limit: 10
			}
		},
		async onLoad(options){
			this.type = options.type
			this.loadData();
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
				let url = '/goods/list?isHot=true&page='+this.currentpage+'&limit=10&order=desc&sort=add_time&categoryId=0'
				if(this.type !== 'hot') {
					url = '/goods/list?isNew=true&page='+this.currentpage+'&limit=10&order=desc&sort=add_time&categoryId=0'
					uni.setNavigationBarTitle({ title:'新品首发' })
				} else {
					uni.setNavigationBarTitle({ title:'人气推荐' })
				}
				api.httpget(url).then((res) => {
					let respons = res.data;
					uni.hideLoading()
					if(respons.errno == 0) {
						if(flag) this.goodsList = []
						this.goodsList = this.goodsList.concat(respons.data.list)
						this.totalPages = respons.data.pages
					}
					if(flag) uni.stopPullDownRefresh()
				})
			}
		}
	}
</script>

<style>
page {
  background: #f4f4f4;
}

.brand-info .name {
  width: 100%;
  height: 278upx;
  position: relative;
}

.brand-info .img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 278upx;
}

.brand-info .info-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 278upx;
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
  height: 40upx;
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

.sort {
  position: relative;
  background: #fff;
  width: 100%;
  height: 78upx;
}

.sort-box {
  background: #fff;
  width: 100%;
  height: 78upx;
  overflow: hidden;
  padding: 0 30upx;
  display: flex;
  border-bottom: 1px solid #d9d9d9;
}

.sort-box .item {
  height: 78upx;
  line-height: 78upx;
  text-align: center;
  flex: 1;
  color: #333;
  font-size: 30upx;
}

.sort-box .item .txt {
  display: block;
  width: 100%;
  height: 100%;
  color: #333;
}

.sort-box .item.active .txt {
  color: #b4282d;
}


.sort-box-category {
  background: #fff;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 40upx 40upx 0 0;
  border-bottom: 1px solid #d9d9d9;
}

.sort-box-category .item {
  height: 54upx;
  line-height: 54upx;
  text-align: center;
  float: left;
  padding: 0 16upx;
  margin: 0 0 40upx 40upx;
  border: 1px solid #666;
  color: #333;
  font-size: 24upx;
}

.sort-box-category .item.active {
  color: #b4282d;
  border: 1px solid #b4282d;
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
  padding-bottom: 33.333upx;
  border-bottom: 1upx solid #f4f4f4;
  box-sizing: border-box;
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
