<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in goods.gallery" :key="index" >
					<view class="image-wrapper">
						<image
							:src="item" 
							class="loaded" 
							mode="aspectFill"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="introduce-section">
			<!-- <button class="share-btn" open-type="share"  @click="share"> -->
			<button class="share-btn"  @click="share">
				分享赚{{goods.retailPrice*0.01}}元<text class="yticon icon-you"></text>
			</button>
			<view><text class="title">{{goods.name}}</text></view>
			<text class="title">{{goods.brief}}</text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">{{goods.retailPrice}}</text>
				<text class="m-price">¥{{goods.counterPrice}}</text>
				<text class="gobrand" @tap="gobrand" v-if="brand.name">{{brand.name}}</text>
			</view>
			<view class="bot-row">
				<text>销量: {{goods.sortOrder}}</text>
				<text>库存: {{productList[0].number}}</text>
				<!-- <text>浏览量: {{goods.sortOrder}}</text> -->
			</view>
		</view>
		
		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec">
				<text class="tit">选择规格</text>
				<view class="con">{{tmpSpecText}}
				</view>
				<text class="yticon icon-you"></text>
			</view>
		</view>
		
		<!-- 评价 -->
		<view class="eva-section"  v-if="comment.data.length>0">
			<view class="e-header" @tap="navto">
				<text class="tit">评价</text>
				<text>({{comment.count}})</text>
				<text class="tip">查看全部</text>
				<text class="yticon icon-you"></text>
			</view> 
			<view class="eva-box">
				<image class="portrait" :src="comment.data[0].avatar==''?'/static/missing-face.png':comment.data[0].avatar" mode="aspectFill"></image>
				<view class="right">
					<text class="name">{{comment.data[0].nickname}}</text>
					<text class="con">{{comment.data[0].content}}</text>
					<view class="bot">
						<!-- <text class="attr">购买类型：XL 红色</text> -->
						<text class="time">{{comment.data[0].addTime}}</text>
					</view>
				</view>
			</view>
		</view>
	  <view class="goods-attr" v-if="responsdata.attribute.length>0">
		<view class="t">商品参数</view>
		<view class="l">
		  <view class="item" v-for="(item,index) in responsdata.attribute" :key="index">
			<text class="left">{{item.attribute}}</text>
			<text class="right">{{item.value}}</text>
		  </view>
		</view>
	  </view>
		<view class="detail-desc">
			<u-parse :content="descontent" />
			<!-- <rich-text :nodes="descontent"></rich-text> -->
		</view>
		<view class="common-problem">
		    <view class="h">
		      <view class="line"></view>
		      <text class="title">常见问题</text>
		    </view>
		    <view class="b">
		      <view class="item" v-for="(item,index) in responsdata.issue" :key="index">
		        <view class="question-box">
		          <text class="spot"></text>
		          <text class="question">{{item.question}}</text>
		        </view>
		        <view class="answer">
		          {{item.answer}}
		        </view>
		      </view>
		    </view>
		  </view>
		<!-- 大家都在看 -->
		<view class="f-header m-t">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">大家都在看</text>
				<text class="tit2">Guess You Like It</text>
			</view>
		</view>
		<view class="guess-section">
			<view 
				v-for="(item, index) in topicList" :key="index"
				class="guess-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.picUrl" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.name}}</text>
				<text class="price">￥{{item.retailPrice}}</text>
			</view>
		</view>
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<!-- #ifdef H5 -->
			<navigator class="loginbtn" url="/pages/public/login" v-if="!haslogin"></navigator>
			<!-- #endif -->
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</navigator>
			<view @tap="navtocart()" class="p-b-btn rel">
				<text class="yticon icon-gouwuche"></text>
				<text class="textnum" v-if="goodsnum > 0">{{goodsnum}}</text>
				<text>购物车</text>
			</view>
			<view class="p-b-btn" :class="{active: responsdata.userHasCollect == 1?true:false}" @click="toFavorite">
				<text class="yticon icon-shoucang"></text>
				<text>收藏</text>
			</view>
			
			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border add-cart-btn"  @click="toggleSpec">加入购物车</button>
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="toggleSpec">立即购买</button>
			</view> 
		</view>
		
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="specClass"
		>
			<!-- 遮罩层 -->
			<view class="mask" @click="toggleSpec"></view>
			<view class="layer attr-content">
				<view class="a-t">
					<image :src="goods.picUrl"></image>
					<view class="right">
						<text class="price">¥{{checkedSpecPrice}}</text>
						<view class="selected">
							已选：{{tmpSpecText}}
						</view>
					</view>
				</view>
				<view v-for="(item,index) in specificationList" :key="index" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text class="tit value" :class="{selected: vitem.checked}" @tap="clickSkuValue(vitem)" v-for="(vitem, childIndex) in item.valueList" :key="childIndex">{{vitem.value}}</text>
					</view>
				</view>
				<view class="spec-con" v-if="groupon.length > 0">
					<view class="spec-item">
					  <view class="name">参加团购立减</view>
					  <view class="item-list">
					  	<text class="tit value" :class="{'selected': vitem.checked}" @tap="clickGroupon(vitem)" v-for="(vitem, index) in groupon" :key="index">减￥{{vitem.discount}} (满{{vitem.discountMember}}人)</text>
					  </view>
					</view>
				  </view>
				<view class="number-item">
					<view class="name">数量</view>
					<view class="selnum">
					  <view class="cut" @tap="cutNumber">-</view>
					  <input v-model="number" class="number" disabled="true" type="number" />
					  <view class="add" @tap="addNumber">+</view>
					</view>
				</view>
				<button class="btn" @click="addToCart(false)">加入购物车</button>
				<button class="btn" @click="addToCart(true)">立即购买</button>
			</view>
		</view>
		<!-- 分享 -->
		<sharepage 
			ref="share" 
			:contentHeight="580" :sharedata="goods"
		></sharepage>
		<!-- #ifdef MP-WEIXIN -->
		<auth></auth>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
	    mapState, mapMutations
	} from 'vuex'
	import auth from '@/components/auth.vue';
	import api from '@/common/vmeitime-http/'
	import uParse from '@/components/gaoyia-parse/parse.vue'
	import sharepage from '@/pages/product/share.vue';
	export default{
		components: {
			sharepage, auth, uParse
		},
		data() {
			return {
				hasphone: true,
				specClass: 'none',
				specSelected:[],
				tmpSpecText: '请选择',
				checkedSpecPrice: 0,
				haslogin: false,
				id: '',
				goods: {sortOrder:0, counterPrice:0, retailPrice:0},
				number: 1,
				topicList: [],
				productList: [{number:0}],
				goodsnum: 0,
				responsdata: {attribute:[]},
				brand: {},
				comment: {data:[]},
				sharedata: {},
				imgList: [],
				descontent: '',
				checkedGroupon_id: '', //团购id
				groupon: [{'checked': false}],
				specificationList: [],
				appid:'',
				sharepageurl: '',
				PretailUserId:''
			};
		},
		async onLoad(options){
			console.log(options)
			// if(uni.getStorageSync('haslogin')) this.hasLogin = true
			this.id = decodeURIComponent(options.goodsId)
			// 上级分销id
			this.PretailUserId = decodeURIComponent(options.retailUserId)
			console.log(this.PretailUserId)
			if (parseInt(this.PretailUserId)>0) uni.setStorageSync('retailUserId',this.PretailUserId)
			// 自己分销id
			let userId = uni.getStorageSync('userId');
			if (userId) this.sharepageurl = `/pages/product/product?goodsId=${this.id}&retailUserId=${this.retailUserId}`;
			else this.sharepageurl = `/pages/product/product?goodsId=${this.id}`;
			if(parseInt(this.PretailUserId)>0 && userId) this.bindRetail(userId);
			uni.setStorageSync('sharepage',this.sharepageurl)
			this.loadData();
		},
		onPullDownRefresh() {
			this.productdata(true);
		},
		computed:{
			...mapState(['hasLogin'])
		},
		methods:{
			...mapMutations(['login']),
			bindRetail(userId) {
				let userInfo = uni.getStorageSync('userInfo')
				let data = {
					 headImage:userInfo.avatarUrl,
					 nickName:userInfo.nickName,
					 name:userInfo.nickName,
					 mobile:'',
					 level:1,
					 retailUserId: userId,
					 parentId: this.PretailUserId
				}
				api.httppostfx('/retailUser/add',data).then((res) => {
					let respons = res.data
					if (respons.code == 200) {
						uni.removeStorageSync('retailUserId')
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					uni.hideLoading()
				})
			},
			onShareAppMessage(res) {
				return {
				  title: this.goods.name,
				  path: this.sharepageurl
				}
			},
			gobrand() {
				uni.navigateTo({
					url: '/pages/brandDetail/brandDetail?id='+this.brand.id
				})
			},
			loadData() {
				uni.showLoading({title: '正在加载'})
				if (uni.getStorageSync('hasphone') == '') {
					this.hasphone = false
				}
				if (uni.getStorageSync('haslogin') !== '') {
					this.haslogin = true;
				}
				this.productdata()
			},
			productdata(flag) {
				let producturl = '/goods/detail?id='+ this.id;
				api.httpget(producturl).then((res) => {
					let respons = res.data;
					uni.hideLoading()
					if(respons.errno == 0) {
					    this.responsdata = respons.data
						this.brand = this.responsdata.brand;
						this.goods = this.responsdata.info;
						this.productList =  this.responsdata.productList
						this.comment =  this.responsdata.comment
						this.specificationList = this.responsdata.specificationList
						this.groupon = this.responsdata.groupon
						this.descontent = this.goods.detail;
						this.sharedata = this.goods;
					}
					this.getwxqrcode()
					if(flag) uni.stopPullDownRefresh();
				}).catch((err) => {
					uni.hideLoading()
					if(flag) uni.stopPullDownRefresh();
				})
				let topurl = '/goods/related?id='+ this.id;
				api.httpget(topurl).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.topicList = respons.data.list;
					}
				}).catch((err) => {})
				let carnumurl = '/cart/goodscount';
				api.httpget(carnumurl).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.goodsnum = respons.data;
					}
				}).catch((err) => {})
			},
			getwxqrcode() {
				let retailUserId = uni.getStorageSync('userId');
				let carnumurl;
				if(retailUserId) carnumurl = `/wxqrcode/getWxQrCode?retailUserId=${retailUserId}&goodsId=${this.id}&path=/pages/product/product`
				else carnumurl=`/wxqrcode/getWxQrCode?goodsId=${this.id}&path=/pages/product/product`
				let qrcode = 'https://honey.zhihuiyunqi.com/retail'+carnumurl;
				uni.setStorageSync('qrcode',qrcode) 
				// api.httpgetfx(carnumurl).then((res) => {
				// 	let respons = res.data;
				// 	if(respons.errno == 0) {
				// 		// let qrcode = respons.data;
				// 		let qrcode = 'https://honey.zhihuiyunqi.com/retail/wxqrcode/getWxQrCode?retailUserId=18&goodsId=1110017&path=/pages/product/product'
				// 		uni.setStorageSync('qrcode',qrcode) 
				// 	}
				// }).catch((err) => {})
			},
			// 团购选择
			  clickGroupon: function(item) {
			    let specName = item.goodsName;
			    let specValueId = item.id;
			    let _grouponList = this.groupon;
			    for (let i = 0; i < _grouponList.length; i++) {
			      if (_grouponList[i].id == specValueId) {
			        if (_grouponList[i].checked) {
			          _grouponList[i].checked = false;
			        } else {
			          _grouponList[i].checked = true;
					  this.checkedGroupon_id = _grouponList[i].id
			        }
			      } else {
			        _grouponList[i].checked = false;
			      }
			    }
			   this.groupon = _grouponList;
			  },
			//规格弹窗开关
			toggleSpec() {
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
			},
			cutNumber: function() {
			      this.number = (this.number - 1 > 1) ? this.number - 1 : 1
			  },
			  addNumber: function() {
			      this.number = this.number + 1
			  },
			//添加到购物车
			  addToCart: function(flag) {
			    var that = this;
			    if (this.specClass === 'hide') {
			      //打开规格选择窗口
				  this.specClass = 'show';
			    } else {
			      //提示选择完整规格
			      if (!this.isCheckedAllSpec()) {
					uni.showToast({title: '请选择完整规格', icon: 'none'})
			        return false;
			      }
			      //根据选中的规格，判断是否有对应的sku信息
			      let checkedProductArray = this.getCheckedProductItem(this.getCheckedSpecKey());
			      if (!checkedProductArray || checkedProductArray.length <= 0) {
			        //找不到对应的product信息，提示没有库存
					uni.showToast({title: '没有库存', icon: 'none'})
			        return false;
			      }
			      let checkedProduct = checkedProductArray[0];
			      //验证库存
			      if (checkedProduct.number <= 0) {
				    uni.showToast({title: '没有库存', icon: 'none'})
			        return false;
			      }
				  // uni.showModal({
				  //     title: '温馨提醒',
				  //     content: '1、请慎重选课报读，开班后不接受退班退费及转让。2、学员如因个人原因请假缺课，不予补课或退款；如因身体特殊情况不能参加相关课程，需提前写好请假条，并出示相关证明，可根据实际情况进行协商处理。',
				  //     success: function (res) {
				  //         if (res.confirm) {
							  uni.showLoading({title: '正在加载'})
							  //添加到购物车
							   let carturl = '/cart/add'
							   if(flag)  carturl = '/cart/fastadd'
							  api.httppost(carturl, {
									 goodsId: that.goods.id,
									 number: that.number,
									 productId: checkedProduct.id
							    }).then((res) => {
									 let _res = res.data;
									 if (_res.errno == 0) {
									   uni.setStorageSync('grouponRulesId', that.checkedGroupon_id);
										if(!flag) uni.showToast({title: '添加成功'})
										else that.buy(_res.data)
										that.specClass === ''
										that.goodsnum = _res.data
										that.toggleSpec()
									 } else if (_res.errno == 501){
										 uni.navigateTo({
										 	url:'../public/login'
										 })
									 } else {
										uni.showToast({title: _res.errmsg, icon: 'none'})
									 }
									 uni.hideLoading()
							    }); 
				  //         } else if (res.cancel) {
						// 	  uni.hideLoading()
				  //         }
				  //     }
				  // });
			    }
			  },
			// 规格选择
			  clickSkuValue: function(childItem) {
				let specName = childItem.specification;
				let specValueId = childItem.id;
				//判断是否可以点击
				//TODO 性能优化，可在wx:for中添加index，可以直接获取点击的属性名和属性值，不用循环
				let _specificationList = this.specificationList;
				for (let i = 0; i < _specificationList.length; i++) {
				  if (_specificationList[i].name === specName) {
					for (let j = 0; j < _specificationList[i].valueList.length; j++) {
					  if (_specificationList[i].valueList[j].id == specValueId) {
						//如果已经选中，则反选
						if (_specificationList[i].valueList[j].checked) {
						  _specificationList[i].valueList[j].checked = false;
						} else {
						  _specificationList[i].valueList[j].checked = true;
						}
					  } else {
						_specificationList[i].valueList[j].checked = false;
					  }
					}
				  }
				}
				this.specificationList = _specificationList;
				//重新计算spec改变后的信息
				this.changeSpecInfo();
				//重新计算哪些值不可以点击
			  },
			  // 规格改变时，重新计算价格及显示信息
			    changeSpecInfo: function() {
			      let checkedNameValue = this.getCheckedSpecValue();
			      //设置选择的信息
			      let checkedValue = checkedNameValue.filter(function(v) {
			        if (v.valueId != 0) {
			          return true;
			        } else {
			          return false;
			        }
			      }).map(function(v) {
			        return v.valueText;
			      });
			      if (checkedValue.length > 0) {
					  this.tmpSpecText = checkedValue.join('　')
			      } else {
			          this.tmpSpecText = '请选择规格数量';
			      }
			      if (this.isCheckedAllSpec()) {
			          this.checkedSpecText = this.tmpSpecText
			        // 规格所对应的货品选择以后
			        let checkedProductArray = this.getCheckedProductItem(this.getCheckedSpecKey());
			        if (!checkedProductArray || checkedProductArray.length <= 0) {
					  this.soldout = true
			          console.error('规格所对应货品不存在');
			          return;
			        }
			        let checkedProduct = checkedProductArray[0];
			        if (checkedProduct.number > 0) {
			            this.checkedSpecPrice = checkedProduct.price,
			            this.soldout = false
			        } else {
			            this.checkedSpecPrice =  this.goods.retailPrice,
			            this.soldout =true
			        }
			      } else {
			          this.checkedSpecText = '规格数量选择',
			          this.checkedSpecPrice = this.goods.retailPrice,
			          this.soldout = false
			      }
			    },
				 // 获取选中的产品（根据规格）
				  getCheckedProductItem: function(key) {
				    return this.productList.filter(function(v) {
				      if (v.specifications.toString() == key.toString()) {
				        return true;
				      } else {
				        return false;
				      }
				    });
				  },
				//判断规格是否选择完整
			  isCheckedAllSpec: function() {
				return !this.getCheckedSpecValue().some(function(v) {
				  if (v.valueId == 0) {
					return true;
				  }
				})
			},
			 getCheckedSpecKey: function() {
			    let checkedValue = this.getCheckedSpecValue().map(function(v) {
			      return v.valueText;
			    });
			    return checkedValue;
			  },
				//获取选中的规格信息
			  getCheckedSpecValue: function() {
				let checkedValues = [];
				let _specificationList = this.specificationList;
				for (let i = 0; i < _specificationList.length; i++) {
				  let _checkedObj = {
					name: _specificationList[i].name,
					valueId: 0,
					valueText: ''
				  };
				  for (let j = 0; j < _specificationList[i].valueList.length; j++) {
					if (_specificationList[i].valueList[j].checked) {
					  _checkedObj.valueId = _specificationList[i].valueList[j].id;
					  _checkedObj.valueText = _specificationList[i].valueList[j].value;
					}
				  }
				  checkedValues.push(_checkedObj);
				}
				return checkedValues;
			  },
			//分享
			share(){
				this.$refs.share.toggleMask();	
			},
			//收藏
			toFavorite(){
				uni.showLoading({title: '请稍后'})
				let collecturl = '/collect/addordelete'
				api.httppost(collecturl,{type:0, valueId: this.id}).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.responsdata.userHasCollect = !this.responsdata.userHasCollect
						if(this.responsdata.userHasCollect) uni.showToast({title: '收藏成功', icon: 'none'})
						else uni.showToast({title: '取消收藏', icon: 'none'})
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
			buy(id){
				uni.setStorageSync('cartId', id)
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			},
			navto(){
				uni.navigateTo({
					url: `/pages/commentlist/index?id=${this.id}`
				})
			},
			navtocart(){
				uni.reLaunch({
					url:'/pages/cart/cart'
				})
			},
			navToDetailPage(item) {
				let id = item.id;
				uni.navigateTo({
					url: `/pages/product/product?goodsId=${id}`
				})
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: #fff
		/* padding-bottom: 160upx; */
	}
	.icon-you{
		font-size: $font-base + 2upx;
		color: #888;
	}
	.carousel {
		height: 722upx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		position: relative;
		padding: 20upx 30upx;
		
		.title{
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}
		.icon-you{
			font-size: $font-base + 2upx;
			color: #fff;
			position: relative;top:2upx;
		}
		.price-box{
			display:flex;
			align-items:baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color:$uni-color-primary;
		}
		.price{
			font-size: $font-lg + 2upx;
		}
		.m-price{
			margin:0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;
			text{
				flex: 1;
			}
		}
	}
	.textnum{
		position: absolute;
		top: 2upx;
		right: 10upx;
		color: red;
		border: 2upx solid red;
		width: 32upx;
		height: 32upx;
		line-height: 26upx;
		text-align: center;
		border-radius: 100%;
		background: #fa436a;
		color:#fff;
		font-size: 24upx;
	}
	.rel{position: relative;}
	/* 分享 */
	.share-section{
		display:flex;
		align-items:center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;
		.share-icon{
			display:flex;
			align-items:center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position:relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;
			&:after{
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position:absolute;
				background: $uni-color-primary;
			}
		}
		.icon-xingxing{
			position:relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}
		.tit{
			font-size: $font-base;
			margin-left:10upx;
		}
		.icon-bangzhu1{
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}
		.share-btn{
			flex: 1;
			text-align:right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}
		.icon-you{
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}
	
	.c-list{
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		border-top: 1px solid #f1f3f6;
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20upx 30upx;
			position:relative;
		}
		.tit{
			width: 140upx;
		}
		.con{
			flex: 1;
			color: $font-color-dark;
			.selected-text{
				margin-right: 10upx;
			}
		}
		.bz-list{
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			text{
				display: inline-block;
				margin-right: 30upx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}
		.red{
			color: $uni-color-primary;
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx 0;
		background: #fff;
		/* margin-top: 16upx; */
		.e-header{
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.tit{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10upx;
			}
		}
	}
	.eva-box{
		display: flex;
		padding: 20upx 0 0;position: relative;
		.portrait{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;
			.con{
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color:$font-color-light;
				position: absolute;
				top: 20upx;
				right: 0;
			}
		}
	}
	/*  详情 */
	.detail-desc{
		background: #fff;
		/* margin-top: 16upx; */
		img{width:100% !important;}
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;
				
			text{
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 30upx 30upx;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;
				.price{
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-left: 10upx;
		}
		.item-list{
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}
			.selected{
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.btn{
				height: 66upx;
				line-height: 66upx;
				border-radius: 50upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx 20upx 0;
				width: 280upx;
				float: left;
				margin-left:5%;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;
			.yticon{
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}
			&.active, &.active .yticon{
				color: $uni-color-primary;
			}
			.icon-fenxiang2{
				font-size: 42upx;
				transform: translateY(-2upx);
			}
			.icon-shoucang{
				font-size: 46upx;
			}
		}
		.action-btn-group{
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
			margin-left: 20upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;border:none;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base ;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
	.f-header{
		display:flex;
		align-items:center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.icon-you{
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
	/* 猜你喜欢 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;margin-bottom:130upx;
		padding: 0 0upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 50%;
			padding-bottom: 40upx;
			border-top: 0.5px solid #f4f4f4;
			&:nth-child(2n+1){
				border-right: 0.5px solid #f4f4f4;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			background: none;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: 24upx;
			color: $font-color-dark;
			line-height: 80upx;
			text-indent: 20upx;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
			text-indent: 20upx;
		}
	}
	
	.common-problem {
	  width: 750upx;
	  height: auto;
	  overflow: hidden;
	}
	
	.common-problem .h {
	  position: relative;
	  height: 145.5upx;
	  width: 750upx;
	  padding: 56.25upx 0;
	  background: #fff;
	  text-align: center;
	}
	
	.common-problem .h .line {
	  display: inline-block;
	  position: absolute;
	  top: 72upx;
	  left: 0;
	  z-index: 2;
	  height: 1px;
	  margin-left: 225upx;
	  width: 300upx;
	  background: #ccc;
	}
	
	.common-problem .h .title {
	  display: inline-block;
	  position: absolute;
	  top: 56.125upx;
	  left: 0;
	  z-index: 3;
	  height: 33upx;
	  margin-left: 285upx;
	  width: 180upx;
	  background: #fff;
	}
	
	.common-problem .b {
	  width: 750upx;
	  height: auto;
	  overflow: hidden;
	  padding: 0upx 30upx;
	  background: #fff;
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
	
	.goods-attr {
	  width: 750upx;
	  height: auto;
	  overflow: hidden;
	  padding: 0 31.25upx 25upx 31.25upx;
	  background: #fff;
	}
	
	.goods-attr .t {
	  /*width: 687 .5upx;
	  height: 104upx;*/
	  line-height: 80upx; 
	  font-size: 30upx;
	}
	
	.goods-attr .item {
	  width: 687.5upx;
	  padding: 11upx 20upx;
	  margin-bottom: 11upx;
	  background: #f7f7f7;
	  font-size: 38.5upx;
	}
	
	.goods-attr .left {
	  font-size: 25upx;
	  width: 134upx;
	  overflow: hidden;
	  color: #999;
	}
	
	.goods-attr .right {
	  font-size: 25upx;
	  margin-left: 20upx;
	  width: 480upx;
	  overflow: hidden;
	  color: #333;
	}
	.loginbtn{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 100;
	}
	
	.number-item .selnum {
	  margin-top:20upx;
	  width: 322upx;
	  height: 71upx;
	  border: 1px solid #ccc;
	  display: flex;
	}
	
	.number-item .cut {
	  width: 93.75upx;
	  height: 100%;
	  text-align: center;
	  line-height: 65upx;
	}
	
	.number-item .number {
	  flex: 1;
	  height: 100%;
	  text-align: center;
	  line-height: 68.75upx;
	  border-left: 1px solid #ccc;
	  border-right: 1px solid #ccc;
	  float: left;
	}
	
	.number-item .add {
	  width: 93.75upx;
	  height: 100%;
	  text-align: center;
	  line-height: 65upx;
	}
	.share-btn{
		background: rgba(250, 67, 106, 0.7);
		color: #fff;
		font-size: 24upx;
		padding: 0 20upx;
		position: absolute;
		top: 50upx;
		right: -15upx;
		height: 60upx;
		line-height: 60upx;

	}
	.gobrand{
		margin-left: 20upx;padding:0 15upx;
		border:2upx solid #fa436a;
	}
</style>