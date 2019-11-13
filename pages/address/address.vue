<template>
	<view class="content b-t">
		<view v-if="addressList.length>0">
			<view class="list b-b" v-for="(item, index) in addressList" :key="index" @tap="checkAddress(item)" >
				<view class="wrapper">
					<view class="address-box">
						<text v-if="item.isDefault" class="tag">默认</text>
						<text class="address">{{item.province+item.city+item.county}}{{item.addressDetail}}</text>
						<!-- <text class="address">{{item.addressDetail}}</text> -->
					</view>
					<view class="u-box">
						<text class="name">{{item.name}}</text>
						<text class="mobile">{{item.tel}}</text>
					</view>
				</view>
				<text class="yticon icon-bianji" @click.stop="addAddress('edit', item)">编辑</text>
				<text class="yticon icon-bianji" @click.stop="deletes(item)">删除</text>
			</view>
		</view>
		<view class="ectouch-notcont" style="padding-top:200upx" v-else>
		    <view class="img">
		        <image mode="aspectFit" src="/static/category/no_content.png"></image>
		    </view>
		    <text class="cont">亲,没有相关内容</text>
		</view>
		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	export default {
		data() {
			return {
				addressList: []
			}
		},
		// onLoad(){
		// 	this.refreshList()
		// },
		onPullDownRefresh() {
			this.refreshList(true)
		},
		onShow() {
			this.refreshList()
		},
		methods: {
			//选择地址
			checkAddress(item){
				//this.$api.prePage()获取上一页实例，在App.vue定义
				this.$api.prePage().checkedAddress.id = item.id;
				uni.setStorageSync('addressId', item.id)
				this.$api.prePage().cartdata();
				uni.navigateBack()
			},
			addAddress(type, item){
				let id = 0;
				if(item) id = item.id
				uni.navigateTo({
					url: `/pages/address/addressManage?type=${type}&id=${id}`
					// url: `/pages/address/addressManage?type=${type}&data=${JSON.stringify(item)}`
				})
			},
			deletes(item){
				let that = this
				uni.showModal({
				  title: '',
				  content: '确定要删除此地址吗？',
				  success: function(res) {
					if (res.confirm) {
						uni.showLoading({title: '正在删除'})
						let deleteurl = '/address/delete'
						api.httppost(deleteurl,{id: item.id}).then((res) => {
							let respons = res.data;
							if (respons.errno == 0) {
								that.refreshList()
							}
							uni.hideLoading()
						}).catch((err) => {
							uni.hideLoading()
						})
					}
				  }
				})
			},
			//添加或修改成功之后回调
			refreshList(flag){
				uni.showLoading({title: '正在加载'})
				let addressurl = '/address/list'
				api.httpget(addressurl).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.addressList = respons.data.list;
					} else if (respons.errno == 501) {
						uni.navigateTo({url:'../public/login'})
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					if(flag) uni.stopPullDownRefresh();
					uni.hideLoading()
				}).catch((err) => {
					if(flag) uni.stopPullDownRefresh();
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx;
	}
	.content{
		position: relative;
	}
	.list{
		display: flex;
		align-items: center;
		padding: 20upx 30upx;;
		background: #fff;
		position: relative;
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.address-box{
		display: flex;
		align-items: center;
		.tag{
			font-size: 24upx;
			color: $base-color;
			width: 65upx;
			text-align: center;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4upx;
			padding: 4upx 0upx;
			line-height: 1;
		}
		.address{
			font-size: 30upx;
			color: $font-color-dark;
		}
	}
	.u-box{
		font-size: 28upx;
		color: $font-color-light;
		margin-top: 16upx;
		.name{
			margin-right: 30upx;
		}
	}
	.icon-bianji{
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 24upx;
		color: $font-color-light;
		padding-left: 30upx;
	}
	
	.add-btn{
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff !important;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);		
	}
	.ectouch-notcont {
	  margin: 0upx auto;
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
