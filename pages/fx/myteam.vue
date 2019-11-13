<template>
	<view class="content">
		<view class="navbar">
			<view 
				v-for="(item, index) in navList" :key="index" 
				class="nav-item" 
				:class="{current: tabCurrentIndex == index}"
				@click="tabClick(index)"
			>
				{{item.text}}({{item.num}})
			</view>
		</view>
			<view class="tab-content">
				<scroll-view 
					class="list-scroll-content" 
					scroll-y
				>
				<view v-if="goodsList.length>0">
					<!-- 订单列表 -->
					<view 
						v-for="(item,index) in goodsList" :key="index"
						class="order-item"
					>
						<view class="goods-box-single">
							<image class="goods-img" :src="item.headImage" mode="aspectFill"></image>
							<view class="right">
								<text class="title clamp">{{item.name}}</text>
								<text class="attr-box">注册22时间:{{item.createTime}}</text>
								<!-- <text class="price">{{item.price}}</text> -->
							</view>
						</view>
						<!-- <view class="price-box">推广
							<text class="price">{{item.actualPrice}}人</text>
						</view> -->
					</view>
				</view>
				<view class="ectouch-notcont" style="margin-top:130upx" v-else>
				    <view class="img">
				        <image mode="aspectFit" src="/static/category/no_content.png"></image>
				    </view>
				    <text class="cont">亲,暂无的数据哦</text>
				</view>
				</scroll-view>
			</view>
	</view>
</template> 

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				totalPages: 1,
				currentpage: 1,
				refresh: true,
				reflash: false,
				orderList: [],
				goodsList:[],
				navList: [{
						state: 0,
						text: '一级分销',
						orderList: [],
						num: '0'
					},
					{
						state: 1,
						text: '二级分销',
						orderList: [],
						num: '0'
					},
					{
						state: 2,
						text: '三级分销',
						orderList: [],
						num: '0'
					}
				]
			}
		},
		onLoad(){
			// this.tabCurrentIndex = options.state;
			this.loadData()
		},
		onPullDownRefresh() {
			this.currentpage = 1
			this.refresh = true;
			this.tabCurrentIndex = 0;
			this.loadData(true);
		},
		onReachBottom() {
			if(this.currentpage >= this.totalPages) return false
			this.currentpage++;
			this.loadData()
		},
		methods: { 
			navTo(id) {
				uni.navigateTo({
					url: `/pages/order/orderDetail?id=${id}`
				})
			},
			//获取订单列表
			loadData(flag){
				uni.showLoading({title: '正在加载'})
				let userId = uni.getStorageSync('userId')
				let orderurl = '/retailUser/getSubRetailUserlist'
				api.httppostfx(orderurl,{retailUserId: userId}).then((res) => {
					let respons = res.data
					if (respons.code == 200) {
						if(this.refresh) this.orderList = []
						this.orderList = respons.data;
						this.goodsList = respons.data.firstRetailUserList;
						this.navList[0].num = this.orderList.firstRetailUserList.length;
						this.navList[1].num = this.orderList.secondRetailUserList.length;
						this.navList[2].num = this.orderList.thirdRetailUserList.length;
						this.totalPages = respons.data.pages;
						//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
						// this.$set(navItem, 'loaded', true);
						//判断是否还有数据， 有改为 more， 没有改为noMore 
						// navItem.loadingType = 'more';
						this.refresh = false
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					if(flag) uni.stopPullDownRefresh()
					uni.hideLoading()
				})
			}, 
			//顶部tab点击
			tabClick(index){
				this.refresh = true
				this.tabCurrentIndex = index;
				this.currentpage = 1;
				switch (index) {
					case 0: this.goodsList = this.orderList.firstRetailUserList;break;
					case 1: this.goodsList = this.orderList.secondRetailUserList;break;
					case 2: this.goodsList = this.orderList.thirdRetailUserList;break;
				}
				// this.loadData()
			},
			//删除订单
			deleteOrder(index){
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(()=>{
					this.orderList.splice(index, 1);
					uni.hideLoading();
				}, 600)
			},
			//取消订单
			cancelOrder(item){
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(()=>{
					let {stateTip, stateTipColor} = this.orderStateExp(9);
					item = Object.assign(item, {
						state: 9,
						stateTip, 
						stateTipColor
					})
					
					//取消订单后删除待付款中该项
					let list = this.navList[1].orderList;
					let index = list.findIndex(val=>val.id === item.id);
					index !== -1 && list.splice(index, 1);
					
					uni.hideLoading();
				}, 600)
			},

			//订单状态文字和颜色
			orderStateExp(state){
				let stateTip = '',
					stateTipColor = '#fa436a';
				switch(+state){
					case 1:
						stateTip = '待付款'; break;
					case 2:
						stateTip = '待发货'; break;
					case 9:
						stateTip = '订单已关闭'; 
						stateTipColor = '#909399';
						break;
						
					//更多自定义
				}
				return {stateTip, stateTipColor};
			}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
		height: 100%;
	}
	
	.swiper-box{
		height: calc(100% - 40px);
	}
	.list-scroll-content{
		height: 100%;
	}
	
	.navbar{
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
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
					width: 44px;
					height: 0;
					border-bottom: 2px solid $base-color;
				}
			}
		}
	}

	.uni-swiper-item{
		height: auto;
	}
	.order-item{
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		background: #fff;
		margin-top: 16upx;
		.i-top{
			display: flex;
			align-items: center;
			height: 80upx;
			padding-right:30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;
			.time{
				flex: 1;
			}
			.state{
				color: $base-color;
			}
			.del-btn{
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;
				&:after{
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		/* 多条商品 */
		.goods-box{
			height: 160upx;
			padding: 20upx 0;
			white-space: nowrap;
			.goods-item{
				width: 120upx;
				height: 120upx;
				display: inline-block;
				margin-right: 24upx;
			}
			.goods-img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		/* 单条商品 */
		.goods-box-single{
			display: flex;
			padding: 0upx 0;
			.goods-img{
				display: block;
				width: 120upx;
				height: 120upx;
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 22upx 30upx 0 24upx;
				overflow: hidden;
				.title{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					line-height: 1;
				}
				.attr-box{
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					padding: 10upx 0upx 0;
				}
				.price{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					&:before{
						content: '￥';
						font-size: $font-sm;
						margin: 0 2upx 0 8upx;
					}
				}
			}
		}
		
		.price-box{
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 30upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			position:absolute;bottom:20upx;right:0;
			.num{
				margin: 0 8upx;
				color: $font-color-dark;
			}
			.price{
				font-size: $font-lg;
				color: $font-color-dark;
				&:before{
					content: '￥';
					font-size: $font-sm;
					margin: 0 2upx 0 8upx;
				}
			}
		}
		.action-box{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100upx;
			position: relative;
			padding-right: 30upx;
		}
		.action-btn{
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			background: #fff;
			border-radius: 100px;
			&:after{
				border-radius: 100px;
			}
			&.recom{
				background: #fff9f9;
				color: $base-color;
				&:after{
					border-color: #f7bcc8;
				}
			}
		}
	}
	
	
	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
	
	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}
	
	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}
	
	.uni-load-more__img>view {
		position: absolute
	}
	
	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}
	
	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}
	
	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}
	
	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}
	
	.load2 {
		transform: rotate(30deg)
	}
	
	.load3 {
		transform: rotate(60deg)
	}
	
	.load1 view:nth-child(1) {
		animation-delay: 0s
	}
	
	.load2 view:nth-child(1) {
		animation-delay: .13s
	}
	
	.load3 view:nth-child(1) {
		animation-delay: .26s
	}
	
	.load1 view:nth-child(2) {
		animation-delay: .39s
	}
	
	.load2 view:nth-child(2) {
		animation-delay: .52s
	}
	
	.load3 view:nth-child(2) {
		animation-delay: .65s
	}
	
	.load1 view:nth-child(3) {
		animation-delay: .78s
	}
	
	.load2 view:nth-child(3) {
		animation-delay: .91s
	}
	
	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}
	
	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}
	
	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}
	
	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}
	
	@-webkit-keyframes load {
		0% {
			opacity: 1
		}
	
		100% {
			opacity: .2
		}
	}
</style>
