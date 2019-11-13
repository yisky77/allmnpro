<template>
	
	
</template>

<script>
	import api from '@/common/vmeitime-http/'
	import area from '@/common/area.js'
	export default {
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
					areaCode:'',
					city:'',
					county:'',
					province:''
				}
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
			getdata(flag) {
				let title = '新增收货地址';
				if(this.option.type==='edit'){
					title = '编辑收货地址'
					uni.showLoading({title: '加载中, 请稍后！'})
					let addaddressurl = '/address/detail?id='+this.option.id
					api.httpget(addaddressurl).then((res) => {
						let respons = res.data;
						if(respons.errno == 0) {
							this.addressData = respons.data
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
				this.addressData.isDefault = e.detail.value;
			},
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						this.addressData.addressDetail = data.name;
					}
				})
			},
			//提交
			confirm(){
				let data = this.addressData;
				if(!data.name){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.tel)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.addressDetail){
					this.$api.msg('请在地图选择所在位置');
					return;
				}
				if(!data.addressDetail){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				// this.$api.prePage().refreshList(data, this.manageType);
				uni.showLoading({title: '提交中, 请稍后！'})
				let addaddressurl = '/address/save'
				api.httppost(addaddressurl, this.addressData).then((res) => {
					let respons = res.data;
					if(respons.errno == 0) {
						this.$api.prePage().refreshList();
						uni.navigateBack()
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
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
