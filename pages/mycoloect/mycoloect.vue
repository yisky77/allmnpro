<template>
	<view class="container">
		<view class="cart-list" v-if="cartList.length>0">
			<block v-for="(item, index) in cartList" :key="index">
				<view class="cart-item" >
					<view class="image-wrapper"  @tap="navToDetailPage(item)">
						<image :src="item.picUrl"></image>
						<!-- <view 
							class="yticon icon-xuanzhong2 checkbox"
							:class="{checked: item.checked}"
							@click="check('item', index)"
						></view> -->
					</view>
					<view class="item-right">
						<text class=" title"  @tap="navToDetailPage(item)">{{item.name}}</text>
						<text class="attr"  @tap="navToDetailPage(item)">{{item.brief}}</text>
						<text class="price" @tap="navToDetailPage(item)">¥{{item.retailPrice}}</text>
						<span @click="deletes(item.id)" class="deletebtn">取消收藏</span>
					</view>
					<!-- <text class="del-btn yticon icon-fork" @click="deleteCartItem(index)"></text> -->
				</view>
			</block>
		</view>
		<view class="ectouch-notcont" style="margin-top:130upx" v-else>
		    <view class="img">
		        <image mode="aspectFit" src="/static/category/no_content.png"></image>
		    </view>
		    <text class="cont">亲,没有相关内容</text>
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
				cartList: [],
				totalPages: 1,
				currentpage: 1
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
				let mycoloecturl = '/collect/list?type=0&page='+this.currentpage+'&limit=10'
				api.httpget(mycoloecturl).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						if(flag) this.cartList = []
						this.cartList = this.cartList.concat(respons.data.list)
						that.totalPages = respons.data.pages
					}
					if(flag) uni.stopPullDownRefresh();
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh();
				})
			},
			deletes(id) {
				uni.showLoading({title: '正在取消'})
				let collecturl = '/collect/addordelete'
				api.httppost(collecturl,{type:0, valueId: id}).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.mycoloect()
					} else if (respons.errno == 501) {
						uni.navigateTo({
							url: '../public/login'
						})
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
				})
			},
			//详情
			navToDetailPage(item){
				//测试数据没有写id，用title代替
				let id = item.valueId;
				uni.navigateTo({
					url: `/pages/product/product?goodsId=${id}`
				})
			},
		}
	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
	}
	.list-cell{
		display:flex;
		align-items:baseline;
		padding: 20upx $page-row-spacing;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40upx;
			.cell-tit{
				color: $uni-color-primary;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30upx;
		}
		&.m-t{
			margin-top: 16upx; 
		}
		.cell-more{
			align-self: baseline;
			font-size:$font-lg;
			color:$font-color-light;
			margin-left:10upx;
		}
		.cell-tit{
			flex: 1;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			margin-right:10upx;
		}
		.cell-tip{
			font-size: $font-base;
			color: $font-color-light;
		}
		switch{
			transform: translateX(16upx) scale(.84);
		}
	}
	.cart-item{
		display:flex;
		position:relative;
		background: #fff;
		padding:12upx 20upx 20upx 40upx;
		.image-wrapper{
			width: 180upx;
			height: 180upx;
			flex-shrink: 0;
			position:relative;
			image{
				border-radius:8upx;opacity: 1;
			}
		}
		.checkbox{
			position:absolute;
			left:-16upx;
			top: -16upx;
			z-index: 8;
			font-size: 44upx;
			line-height: 1;
			padding: 4upx;
			color: $font-color-disabled;
			background:#fff;
			border-radius: 50px;
		}
		.item-right{
			display:flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position:relative;
			padding-left: 30upx;
			.title,.price{
				font-size:$font-base;
				color: $font-color-dark;
				height: 40upx;
				line-height: 40upx;
			}
			.attr{
				font-size: $font-sm + 2upx;
				color: $font-color-light;
				height: 50upx;
				line-height: 50upx;
			}
			.price{
				height: 50upx;
				line-height:50upx;
			}
		}
		.del-btn{
			padding:4upx 10upx;
			font-size:34upx; 
			height: 50upx;
			color: $font-color-light;
		}
	}
	.deletebtn{
		width: 110upx;
		height: 40upx;
		font-size: 24upx;
		display: block;
		position: absolute;
		bottom: 0upx;
		right: 0;
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
