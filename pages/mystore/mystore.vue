<template>
	<view class="container">
		<view class="cart-list">
			<block v-for="(item, index) in cartList" :key="index">
				<view
					class="cart-item"
				>
					<view class="image-wrapper"  @tap="navToDetailPage(item)">
						<image :src="item.logo_thumb"></image>
						<view 
							class="yticon icon-xuanzhong2 checkbox"
							:class="{checked: item.checked}"
							@click="check('item', index)"
						></view>
					</view>
					<view class="item-right">
						<text class="clamp title"  @tap="navToDetailPage(item)">{{item.store_name}}</text>
						<text class="attr">已有{{item.collectnum}}人关注</text>
						<!-- <text class="price" @tap="navToDetailPage(item)">¥{{item.shop_price}}</text> -->
						<span @click="deletes(item.store_id)" class="deletebtn">取消关注</span>
					</view>
					<!-- <text class="del-btn yticon icon-fork" @click="deleteCartItem(index)"></text> -->
				</view>
			</block>
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
				cartList: []
			};
		},
		onLoad(option){
			this.mycoloect()
		},
		onPullDownRefresh() {
			this.mycoloect(true)
		},
		methods:{
			mycoloect(flag) {
				uni.showLoading({title: '正在加载'})
				let mycoloecturl = '/mobile/public/api/wx/user/collectstore'
				api.httpUrlpost(mycoloecturl,{id:1}).then((respons) => {
					if(respons) {
						this.cartList = respons.data
					}
					if(flag) uni.stopPullDownRefresh();
					uni.hideLoading()
				}).catch((err) => {
					if(flag) uni.stopPullDownRefresh();
					uni.hideLoading()
				})
			},
			deletes(id) {
				uni.showLoading({title: '正在取消关注'})
				let collectstoreurl = '/mobile/public/api/wx/store/attention'
				api.httpUrlpost(collectstoreurl,{id: id}).then((res) => {
					this.mycoloect()
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
				})
			},
			//详情
			navToDetailPage(item){
				//测试数据没有写id，用title代替
				let id = item.goods_id;
				uni.navigateTo({
					url: `/pages/product/product?goodsId=${id}`
				})
			}
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
		padding:30upx 40upx 0;
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
				font-size:$font-base + 2upx;
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
		width: 150upx;border:1px solid #ccc;border-radius: 20upx;text-align: center;line-height: 40upx;
		height: 40upx;
		font-size: 24upx;
		display: block;
		position: absolute;
		bottom: 20upx;
		right: 0;
	}
</style>
