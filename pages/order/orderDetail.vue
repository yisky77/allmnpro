<template>
	<view class="container">
	  <view class="order-info">
		<view class="item-a">下单时间：{{orderInfo.addTime}}</view>
		<view class="item-b">订单编号：{{orderInfo.orderSn}}</view>
		<view class="item-c">
		  <view class="l">实付：
			<text class="cost">￥{{orderInfo.actualPrice}}</text>
		  </view>
		  <view class="r">
			<view class="btn active" @tap="cancelOrder" v-if="handleOption.cancel">取消订单</view>
			<view class="btn active" @tap="payOrder" v-if="handleOption.pay">去付款</view>
			<view class="btn active" @tap="confirmOrder" v-if="handleOption.confirm">确认收货</view>
			<view class="btn active" @tap="deleteOrder" v-if="handleOption.delete">删除订单</view>
			<view class="btn active" @tap="refundOrder" v-if="handleOption.refund">申请退款</view>
		  </view>
		</view>
	  </view>

	  <view class="order-goods">
		<view class="h">
		  <view class="label">商品信息</view>
		  <view class="status">{{orderInfo.orderStatusText}}</view>
		</view>
		<view class="goods">
		  <view class="item" v-for="(item,index) in orderGoods" :key="index">
			<view class="img">
			  <image :src="item.picUrl"></image>
			</view>
			<view class="info">
			  <view class="t">
				<text class="name">{{item.goodsName}}</text>
				<text class="number">x{{item.number}}</text>
			  </view>
			  <view class="attr">{{item.specifications}}</view>
			  <view class="price">￥{{item.price}}</view>
			  <!-- <view class="btn active" v-if="handleOption.comment && item.comment == 0">
				<navigator url="../../commentPost/commentPost?orderId={{item.orderId}}&&valueId={{item.goodsId}}&type=0">去评价</navigator>
			  </view> -->
			  <view class="btn active buy" @tap="gocomment(item)" v-if="handleOption.comment && item.comment == 0">去评价</view>
			  <view class="btn active buy" @tap="gobuy(item)" v-if="handleOption.rebuy">再次购买</view>
			</view>
		  </view>
		</view>

		<view class="order-bottom">
		  <view class="address">
			<view class="t">
			  <text class="name">{{orderInfo.consignee}}</text>
			  <text class="mobile">{{orderInfo.mobile}}</text>
			</view>
			<view class="b">{{orderInfo.address}}</view>
		  </view>
		  <view class="total">
			<view class="t">
			  <text class="label">商品合计：</text>
			  <text class="txt">￥{{orderInfo.goodsPrice}}</text>
			</view>
			<view class="t">
			  <text class="label">运费：</text>
			  <text class="txt">￥{{orderInfo.freightPrice}}</text>
			</view>
			<view class="t">
			  <text class="label">优惠：</text>
			  <text class="txt">￥-{{orderInfo.couponPrice}}</text>
			</view>
		  </view>
		  <view class="pay-fee">
			<text class="label">实付：</text>
			<text class="txt">￥{{orderInfo.actualPrice}}</text>
		  </view>
		</view>
	  </view>

	  <!-- 物流信息,仅收货状态下可见 -->
	  <view class="order-express" @tap="expandDetail" v-if="handleOption.confirm">
		<view class="order-express">
		  <view class="title">
			<view class="t">快递公司：{{orderInfo.expCode}}</view>
			<view class="b">物流单号：{{orderInfo.expNo}}</view>
		  </view>
		  <image class="ti" src="/static/images/address_right.png" background-size="cover"></image>
		</view>
		<view class="traces"  v-for="(iitem,index) in expressInfo.Traces" :key="index" v-if="flag">
		  <view class="trace">
			<view class="acceptStation">{{iitem.AcceptStation}}</view>
			<view class="acceptTime">{{iitem.AcceptTime}}</view>
		  </view>
		</view>
	  </view>
	</view>
</template>
<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				orderId: 0,
				orderInfo: {},
				orderGoods: [],
				expressInfo: {},
				flag: false,
				handleOption: {},
			}
		},
		onLoad(options){
			this.orderId = options.id;
			this.getOrderDetail();
		},
		onPullDownRefresh() {
			this.getOrderDetail(true);
	    },
		methods: {
			gobuy (item) {
				uni.redirectTo({
				  url: '/pages/product/product?goodsId='+item.goodsId
				});
			},
			gocomment (item) {
				console.log(item)
				uni.redirectTo({
				  url: '/pages/order/comment?orderId='+item.orderId+'&type='+item.type+'&valueId='+item.goodsId
				});
			},
			  expandDetail: function() {
				this.flag = !this.flag
			  },
			  getOrderDetail(flag) {
			    uni.showLoading({title: '加载中'});
			    let that = this;
				let orderurl = '/order/detail?orderId='+ this.orderId
				api.httpget(orderurl).then((res) => {
					let respons = res.data
					if (respons.errno == 0) {
						  this.orderInfo = respons.data.orderInfo
						  this.orderGoods = respons.data.orderGoods
						  this.handleOption = respons.data.orderInfo.handleOption
						  // this.expressInfo = respons.data.expressInfo
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					if(flag) uni.stopPullDownRefresh() //停止下拉刷新
					uni.hideLoading();
				})
			  },
			  // “去付款”按钮点击效果
			  payOrder: function() {
			    let that = this;
				let payurl = '/order/prepay'
				// #ifndef MP-WEIXIN
					payurl = '/order/prepayDouyin'
				// #endif
				api.httppost(payurl, {
				  orderId:  that.orderId,
				  code: uni.getStorageSync('code')
			    }).then(function(res) {
			      if (res.data.errno === 0) {
			        const payParam = res.data.data;
			        console.log("支付过程开始");
			        uni.requestPayment({
			          'timeStamp': payParam.timeStamp,
			          'nonceStr': payParam.nonceStr,
			          'package': payParam.packageValue,
			          'signType': payParam.signType,
			          'paySign': payParam.paySign,
			          'success': function(res) {
						uni.showToast({title: '支付成功', icon: 'none'})
						that.$api.prePage().loadData(0);
						uni.navigateBack()
			          },
			          'fail': function(res) {
						  uni.showToast({title: '支付失败', icon: 'none'})
			          }
			        });
			      } else {
					  uni.showToast({title: res.data.errmsg, icon: 'none'})
				  }
			    })
			  },
			  // “取消订单”点击效果
			  cancelOrder: function() {
			    let that = this;
			    uni.showModal({
			      title: '',
			      content: '确定要取消此订单？',
			      success: function(res) {
			        if (res.confirm) {
						let orderurl = '/order/cancel'
						uni.showLoading({title: '正在加载'})
						api.httppost(orderurl, {orderId: that.orderId}).then((res) => {
							let respons = res.data
							if (respons.errno == 0) {
								  uni.showToast({
									title: '取消订单成功'
								  });
								  that.$api.prePage().loadData(0);
								  uni.navigateBack()
							} else {
								uni.showToast({title: respons.errmsg, icon: 'none'})
							}
							uni.hideLoading();
						})
			        }
			      }
			    });
			  },
			  // “取消订单并退款”点击效果
			  refundOrder: function() {
			    let that = this;
			    uni.showModal({
			      title: '',
			      content: '确定要退款此订单吗？',
			      success: function(res) {
					  if (res.confirm) {
						let orderurl = '/order/refund'
						uni.showLoading({title: '正在加载'})
						api.httppost(orderurl, {orderId: that.orderId}).then((res) => {
							let respons = res.data
							if (respons.errno == 0) {
								  uni.showToast({
									title: '已申请退款中！'
								  })
								  that.$api.prePage().loadData(0);
								  uni.navigateBack()
							} else {
								uni.showToast({title: respons.errmsg, icon: 'none'})
							}
							uni.hideLoading();
						})
					  }
			      }
			    });
			  },
			  // “删除”点击效果
			  deleteOrder: function() {
				let that = this;
				uni.showModal({
				  title: '',
				  content: '确定要删除此订单？',
				  success: function(res) {
					if (res.confirm) {
						let orderurl = '/order/delete'
						uni.showLoading({title: '正在加载'})
						api.httppost(orderurl, {orderId: that.orderId}).then((res) => {
							let respons = res.data
							if (respons.errno == 0) {
								  uni.showToast({
									title: '删除订单成功'
								  });
								  that.$api.prePage().loadData(0);
								  uni.navigateBack()
							} else {
								uni.showToast({title: respons.errmsg, icon: 'none'})
							}
							uni.hideLoading();
						})
					}
				  }
				});
			  },
			  // “确认收货”点击效果
			  confirmOrder: function() {
				let that = this;
				uni.showModal({
				  title: '',
				  content: '确认收货？',
				  success: function(res) {
					  if (res.confirm) {
						let orderurl = '/order/confirm'
						uni.showLoading({title: '正在加载'})
						api.httppost(orderurl, {orderId: that.orderId}).then((res) => {
							let respons = res.data
							if (respons.errno == 0) {
								  uni.showToast({
									title: '确认收货成功'
								  });
								  that.$api.prePage().loadData(0);
								  uni.navigateBack()
							} else {
								uni.showToast({title: respons.errmsg, icon: 'none'})
							}
							uni.hideLoading();
						})
					  }
				  }
				});
			}
		}
	}
</script>

<style>
	
	.order-info {
	  padding-top: 25rpx;
	  background: #fff;
	  height: auto;
	  overflow: hidden;
	}
	
	.item-a {
	  padding-left: 31.25rpx;
	  height: 42.5rpx;
	  padding-bottom: 12.5rpx;
	  line-height: 30rpx;
	  font-size: 30rpx;
	  color: #666;
	}
	
	.item-b {
	  padding-left: 31.25rpx;
	  height: 29rpx;
	  line-height: 29rpx;
	  margin-top: 12.5rpx;
	  margin-bottom: 41.5rpx;
	  font-size: 30rpx;
	  color: #666;
	}
	
	.item-c {
	  margin-left: 31.25rpx;
	  border-top: 1px solid #f4f4f4;
	  height: 103rpx;
	  line-height: 103rpx;
	}
	
	.item-c .l {
	  float: left;
	}
	
	.item-c .r {
	  height: 103rpx;
	  float: right;
	  display: flex;
	  align-items: center;
	  padding-right: 16rpx;
	}
	
	.item-c .r .btn {
	  float: right;
	}
	
	.item-c .cost {
	  color: #b4282d;
	}
	
	.item-c .btn {
	  line-height: 66rpx;
	  border-radius: 5rpx;
	  text-align: center;
	  margin: 0 15rpx;
	  padding: 0 20rpx;
	  height: 66rpx;
	}
	
	.item-c .btn.active {
	  background: #b4282d;
	  color: #fff;font-size: 24upx;
	  
	}
	.btn.active.buy{
	  font-size: 24upx;
	}
	.order-goods {
	  margin-top: 20rpx;
	  background: #fff;
	}
	
	.order-goods .h {
	  height: 93.75rpx;
	  line-height: 93.75rpx;
	  margin-left: 31.25rpx;
	  border-bottom: 1px solid #f4f4f4;
	  padding-right: 31.25rpx;
	}
	
	.order-goods .h .label {
	  float: left;
	  font-size: 30rpx;
	  color: #333;
	}
	
	.order-goods .h .status {
	  float: right;
	  font-size: 30rpx;
	  color: #b4282d;
	}
	
	.order-goods .item {
	  display: flex;
	  align-items: center;
	  height: 192rpx;
	  margin-left: 31.25rpx;
	  padding-right: 31.25rpx;
	  border-bottom: 1px solid #f4f4f4;
	}
	
	.order-goods .item:last-child {
	  border-bottom: none;
	}
	
	.order-goods .item .img {
	  height: 145.83rpx;
	  width: 145.83rpx;
	  background: #f4f4f4;
	}
	
	.order-goods .item .img image {
	  height: 145.83rpx;
	  width: 145.83rpx;
	}
	
	.order-goods .item .info {
	  flex: 1;
	  height: 145.83rpx;
	  margin-left: 20rpx;
	}
	
	.order-goods .item .t {
	  margin-top: 8rpx;
	  height: 33rpx;
	  line-height: 33rpx;
	  margin-bottom: 10.5rpx;
	}
	
	.order-goods .item .t .name {
	  display: block;
	  float: left;
	  height: 33rpx;
	  line-height: 33rpx;
	  color: #333;
	  font-size: 30rpx;
	}
	
	.order-goods .item .t .number {
	  display: block;
	  float: right;
	  height: 33rpx;
	  text-align: right;
	  line-height: 33rpx;
	  color: #333;
	  font-size: 30rpx;
	}
	
	.order-goods .item .attr {
	  height: 29rpx;
	  line-height: 29rpx;
	  color: #666;
	  margin-bottom: 25rpx;
	  font-size: 25rpx;
	}
	
	.order-goods .item .price {
	  display: block;
	  float: left;
	  height: 30rpx;
	  line-height: 30rpx;
	  color: #333;
	  font-size: 30rpx;
	}
	
	.order-goods .item .btn {
	  height: 50rpx;
	  line-height: 50rpx;
	  border-radius: 5rpx;
	  text-align: center;
	  display: block;
	  float: right;
	  margin: 0 15rpx;
	  padding: 0 20rpx;
	}
	
	.order-goods .item .btn.active {
	  background: #b4282d;
	  color: #fff;
	}
	
	.order-bottom {
	  margin-top: 20rpx;
	  padding-left: 31.25rpx;
	  height: auto;
	  overflow: hidden;
	  background: #fff;
	}
	
	.order-bottom .address {
	  height: 128rpx;
	  padding-top: 25rpx;
	  border-bottom: 1px solid #f4f4f4;
	}
	
	.order-bottom .address .t {
	  height: 35rpx;
	  line-height: 35rpx;
	  margin-bottom: 7.5rpx;
	}
	
	.order-bottom .address .name {
	  display: inline-block;
	  height: 35rpx;
	  width: 140rpx;
	  line-height: 35rpx;
	  font-size: 30rpx;
	}
	
	.order-bottom .address .mobile {
	  display: inline-block;
	  height: 35rpx;
	  line-height: 35rpx;
	  font-size: 30rpx;
	}
	
	.order-bottom .address .b {
	  height: 35rpx;
	  line-height: 35rpx;
	  font-size: 30rpx;
	}
	
	.order-bottom .total {
	  height: 130rpx;
	  padding-top: 20rpx;
	  border-bottom: 1px solid #f4f4f4;
	}
	
	.order-bottom .total .t {
	  height: 30rpx;
	  line-height: 30rpx;
	  margin-bottom: 7.5rpx;
	  display: flex;
	}
	
	.order-bottom .total .label {
	  width: 150rpx;
	  display: inline-block;
	  height: 35rpx;
	  line-height: 35rpx;
	  font-size: 30rpx;
	}
	
	.order-bottom .total .txt {
	  flex: 1;
	  display: inline-block;
	  height: 35rpx;
	  line-height: 35rpx;
	  font-size: 30rpx;
	}
	
	.order-bottom .pay-fee {
	  height: 81rpx;
	  line-height: 81rpx;
	}
	
	.order-bottom .pay-fee .label {
	  display: inline-block;
	  width: 140rpx;
	  color: #b4282d;
	}
	
	.order-bottom .pay-fee .txt {
	  display: inline-block;
	  width: 140rpx;
	  color: #b4282d;
	}
	
	.order-express {
	  margin-top: 20rpx;
	  width: 100%;
	  height: 100rpx;
	  background: #fff;
	}
	
	.order-express .title {
	  float: left;
	  margin-bottom: 20rpx;
	  padding: 10rpx;
	}
	
	.order-express .ti {
	  float: right;
	  width: 52rpx;
	  height: 52rpx;
	  margin-right: 16rpx;
	  margin-top: 28rpx;
	}
	
	.order-express .t {
	  font-size: 29rpx;
	  margin-left: 10.25rpx;
	  color: #a78845;
	}
	
	.order-express .b {
	  font-size: 29rpx;
	  margin-left: 10.25rpx;
	  color: #a78845;
	}
	
	.order-express .traces {
	  padding: 17.5rpx;
	  background: #fff;
	  border-bottom: 1rpx solid #f1e6cdcc;
	}
	
	.order-express .trace {
	  padding-bottom: 17.5rpx;
	  padding-top: 17.5rpx;
	  background: #fff;
	}
	
	.order-express .acceptTime {
	  margin-top: 20rpx;
	  margin-right: 40rpx;
	  text-align: right;
	  font-size: 26rpx;
	}
	
	.order-express .acceptStation {
	  font-size: 26rpx;
	}

</style>