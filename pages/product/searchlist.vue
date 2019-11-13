<template>
	<view class="content">
		<view class="mp-search-box">
			<input class="ser-input" type="text" placeholder="输入商品关键字搜索"  v-model="searchtxt" @input="searchinput" />
		</view>
		<view class="navbar">
			<view class="nav-item" :class="{current: filterIndex === 0}" @click="tabClick(0)">
				综合排序
			</view>
			<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">
				<text>价格</text>
				<view class="p-box">
					<text :class="{active: priceOrder === 'asc' && filterIndex === 2}" class="yticon icon-shang"></text>
					<text :class="{active: priceOrder === 'desc' && filterIndex === 2}" class="yticon icon-shang xia"></text>
				</view>
			</view>
			<!-- <text class="cate-item yticon icon-fenlei1" @click="toggleCateMask('show')"></text> -->
		</view>
		<view class="goods-list" v-if="goodsList.length>0">
			<view 
				v-for="(item, index) in goodsList" :key="index"
				class="goods-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.picUrl" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.name}}</text>
				<view class="price-box">
					<text class="price">{{item.retailPrice}}</text>
					<text>原价 {{item.counterPrice}}</text>
				</view>
			</view>
		</view>
		<view class="ectouch-notcont" style="margin-top:130upx" v-else>
		    <view class="img">
		        <image mode="aspectFit" src="/static/category/no_content.png"></image>
		    </view>
		    <text class="cont">亲,没有相关产品内容</text>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import api from '@/common/vmeitime-http/'
	export default {
		components: {
			uniLoadMore	
		},
		data() {
			return {
				cateMaskState: 0, //分类面板展开状态
				currentpage: 1,
				loadModal: true,
				searchtxt: '',
				loadingType: 'more', //加载更多状态
				filterIndex: 0, 
				cateId: 0, //已选三级分类id
				priceOrder: 'asc', //1 价格从低到高 2价格从高到低
				cateList: [],
				goodsList: [],
				sort:0
			};
		},
		created() {
			this.searchinput()
		},
		//下拉刷新
		onPullDownRefresh(){
			this.currentpage = 1;
			this.searchinput(true)
		},
		onReachBottom() {
			if(this.currentpage >= this.totalPages) return false
			this.currentpage++;
			this.searchinput()
		},
		methods: {
			searchinput(flag) {
				setTimeout(()=> {
					uni.showLoading({title: '正在加载'})
					let url = '/goods/list?keyword='+this.searchtxt+'&page='+this.currentpage+'&limit=10&sort=name&order='+this.priceOrder+'&categoryId=0'
					api.httpget(url).then((res) => {
						let respons = res.data;
						if(respons.errno == 0) {
							if(flag || this.filterIndex == 2) this.goodsList = []
							this.goodsList = this.goodsList.concat(respons.data.list);
							this.totalPages = respons.data.pages
						}
						this.loadModal = false
						uni.hideLoading()
						if (flag) uni.stopPullDownRefresh()
					}).catch((err) => {
						if (flag) uni.stopPullDownRefresh()
						uni.hideLoading()
					})
				},100)
			},
			//筛选点击
			tabClick(index){
				if(this.filterIndex === index && index !== 2){
					return;
				}
				this.filterIndex = index;
				this.sort = index
				if(index === 2){
					this.priceOrder = this.priceOrder === 'asc' ? 'desc': 'asc';
				}else{
					this.priceOrder = 'asc';
				}
				uni.pageScrollTo({
					duration: 300, scrollTop: 0
				})
				this.searchinput();
			},
			//详情
			navToDetailPage(item){
				let id = item.id;
				uni.navigateTo({
					url: `/pages/product/product?goodsId=${id}`
				})
			},
			stopPrevent(){}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
	}
	.content{
		// padding-top: 96upx;
	}
.mp-search-box{
		// position:absolute;
		// left: 0;
		// top: 30upx;
		z-index: 9999;background: #ddd;
		width: 100%;
		padding: 20upx 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,1);
		}
	}
	.navbar{
		// position: fixed;
		// left: 0;
		top: var(--window-top);
		display: flex;
		border-bottom: 1px solid #ccc;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0,0,0,.06);
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
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
					width: 120upx;
					height: 0;
					border-bottom: 4upx solid $base-color;
				}
			}
		}
		.p-box{
			display: flex;
			flex-direction: column;
			.yticon{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: #888;
				&.active{
					color: $base-color;
				}
			}
			.xia{
				transform: scaleY(-1);
			}
		}
		.cate-item{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36upx;
			}
		}
	}

	/* 分类 */
	.cate-mask{
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 95;
		transition: .3s;
		
		.cate-content{
			width: 630upx;
			height: 100%;
			background: #fff;
			float:right;
			transform: translateX(100%);
			transition: .3s;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.cate-content{
				transform: translateX(0);
			}
		}
	}
	.cate-list{
		display: flex;
		flex-direction: column;
		height: 100%;
		.cate-item{
			display: flex;
			align-items: center;
			height: 90upx;
			padding-left: 30upx;
 			font-size: 28upx;
			color: #555;
			position: relative;
		}
		.two{
			height: 64upx;
			color: #303133;
			font-size: 30upx;
			background: #f8f8f8;
		}
		.active{
			color: $base-color;
		}
	}

	/* 商品列表 */
	.goods-list{
		display:flex;
		flex-wrap:wrap;
		padding: 30upx 30upx 0;
		background: #fff;
		.goods-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
		}
		.price-box{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-right: 10upx;
			font-size: 24upx;
			color: $font-color-light;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
			&:before{
				content: '￥';
				font-size: 26upx;
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
