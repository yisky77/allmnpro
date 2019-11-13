<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.name" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.tel" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b"  @tap="openPicker">
			<text class="tit">地址</text>
			<text class="input">
				{{addressData.province+addressData.city+addressData.county}}
			</text>
			<text class="yticon icon-shouhuodizhi"></text>
		</view>
		<view class="row b-b"> 
			<text class="tit">地址</text>
			<input class="input" type="text" v-model="addressData.addressDetail" placeholder="广东省广州市天河区xxx号" placeholder-class="placeholder" />
		</view>
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.isDefault" color="#fa436a" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">{{manageType === 'edit'?'修改':'提交'}}</button>
		
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	import lotusAddress from "@/components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
	// import area from '@/common/area.js'
	export default {
		components:{
			"lotus-address":lotusAddress
		},
		data() {
			return {
				manageType: 'add',
				option: {},
				addressData: {
					addressDetail:'',
					tel:'',
					name:'',
					id: 0,
					isDefault: false,
					areaCode:'0',
					city:' ',
					county:' ',
					province:' '
				},
				lotusAddressData:{
					visible:false,
					provinceName:'',
					cityName:'',
					townName:'',
				},
				region:''
			}
		},
		onLoad(option){
			this.option = option
			this.getdata()
		},
		onPullDownRefresh() {
			this.getdata(true)
		},
		methods: {
			//打开picker
			openPicker() {
				this.lotusAddressData.visible = true;
				this.lotusAddressData.provinceName = '广东省';
				this.lotusAddressData.cityName = '广州市';
				this.lotusAddressData.townName = '白云区';
			},
			//回传已选的省市区的值
			choseValue(res){
				//res数据源包括已选省市区与省市区code
				console.log(res);
				this.lotusAddressData.visible = res.visible;//visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if(res.isChose){
					this.addressData.province = res.province;//省
					this.addressData.city = res.city;//市
					this.addressData.county = res.town;//区
					this.addressData.areaCode = res.townCode
					this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
			},
			getdata(flag) {
				let title = '新增收货地址';
				if(this.option.type==='edit'){
					title = '编辑收货地址'
					uni.showLoading({title: '加载中, 请稍后！'})
					let addaddressurl = '/address/detail?id='+this.option.id
					api.httpget(addaddressurl).then((res) => {
						let respons = res.data;
						if(respons.errno == 0) {
							this.addressData.addressDetail = respons.data.addressDetail;
							this.addressData.tel = respons.data.tel;
							this.addressData.name = respons.data.name;
							this.addressData.id = respons.data.id;
							this.addressData.isDefault = respons.data.isDefault;
							this.addressData.areaCode = respons.data.areaCode;
							this.addressData.city = respons.data.city;
							this.addressData.county = respons.data.county;
							this.addressData.province = respons.data.province;
						} else if (respons.errno == 501) {
							uni.navigateTo({url:'../public/login'})
						} else {
							uni.showToast({title: respons.errmsg, icon: 'none'})
						}
						if(flag) uni.stopPullDownRefresh();
						uni.hideLoading()
					}).catch((err) => {
						uni.showToast({title: respons.errmsg, icon: 'none'})
						uni.hideLoading()
						if(flag) uni.stopPullDownRefresh();
					})
				}
				this.manageType = this.option.type;
				uni.setNavigationBarTitle({
					title
				})
			},
			switchChange(e){
				// console.log(e)
				this.addressData.isDefault = e.detail.value;
			},
			//地图选择地址
			// chooseLocation(){
			// 	uni.chooseLocation({
			// 		success: (data)=> {
			// 			this.addressData.addressDetail = data.name;
			// 		}
			// 	})
			// },
			//提交
			confirm(){
				let data = this.addressData;
				// console.log(data)
				if(!data.name){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(data.tel)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.addressDetail){
					this.$api.msg('请填写详细地址！');
					return;
				}
				
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				// this.$api.prePage().refreshList(data, this.manageType);
				uni.showLoading({title: '提交中, 请稍后！'})
				let addaddressurl = '/address/save'
				api.httppost(addaddressurl, this.addressData).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						uni.showToast({title: respons.errmsg, icon: 'none'})
						// var pages = getCurrentPages();
						// var prevPage = pages[pages.length - 2]; //上一个页面
						// prevPage.refreshList({})
						uni.navigateBack()
						// uni.reLaunch({
						// 	url:'/pages/address/address'
						// })
					} else if (respons.errno == 501) {
						uni.navigateTo({url:'../public/login'})
					} else {
						uni.showToast({title: respons.errmsg, icon: 'none'})
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff !important;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>