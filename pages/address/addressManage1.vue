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
		<view class="row b-b">
			<text class="tit">地址</text>
			<text @click="chooseLocation" class="input">
				{{addressData.addressDetail}}
			</text>
			<text class="yticon icon-shouhuodizhi"></text>
		</view>
		<view class="row b-b"> 
			<text class="tit">门牌号</text>
			<input class="input" type="text" v-model="addressData.addressDetail" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.isDefault" color="#fa436a" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">{{manageType === 'edit'?'修改':'提交'}}</button>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	import area from '@/common/area.js'
	export default {
		data() {
			return {
				address: {
				      id: 0,
				      areaCode: 0,
				      address: '',
				      name: '',
				      tel: '',
				      isDefault: 0,
				      province: '',
				      city: '',
				      county: ''
				    },
				    addressId: 0,
				    openSelectRegion: false,
				    selectRegionList: [{
				        code: 0,
				        name: '省份'
				      },
				      {
				        code: 0,
				        name: '城市'
				      },
				      {
				        code: 0,
				        name: '区县'
				      }
				    ],
				    regionType: 1,
				    regionList: [],
				    selectRegionDone: false
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
			bindinputMobile(event) {
				let address = this.data.address;
				address.tel = event.detail.value;
				this.setData({
				  address: address
				});
			  },
			  bindinputName(event) {
				let address = this.data.address;
				address.name = event.detail.value;
				this.setData({
				  address: address
				});
			  },
			  bindinputAddress(event) {
				let address = this.data.address;
				address.addressDetail = event.detail.value;
				this.setData({
				  address: address
				});
			  },
			  bindIsDefault() {
				let address = this.data.address;
				address.isDefault = !address.isDefault;
				this.setData({
				  address: address
				});
			  },
			  getAddressDetail() {
				let that = this;
				util.request(api.AddressDetail, {
				  id: that.data.addressId
				}).then(function(res) {
				  if (res.errno === 0) {
					if (res.data) {
					  that.setData({
						address: res.data
					  });
					}
				  }
				});
			  },
			  setRegionDoneStatus() {
				let that = this;
				let doneStatus = that.data.selectRegionList.every(item => {
				  return item.code != 0;
				});
			
				that.setData({
				  selectRegionDone: doneStatus
				})
			
			  },
			  chooseRegion() {
				let that = this;
				this.setData({
				  openSelectRegion: !this.data.openSelectRegion
				});
			
				//设置区域选择数据
				let address = this.data.address;
				if (address.areaCode > 0) {
				  let selectRegionList = this.data.selectRegionList;
				  selectRegionList[0].code = address.areaCode.slice(0, 2) + '0000';
				  selectRegionList[0].name = address.province;
			
				  selectRegionList[1].code = address.areaCode.slice(0, 4) + '00';
				  selectRegionList[1].name = address.city;
			
				  selectRegionList[2].code = address.areaCode;
				  selectRegionList[2].name = address.county;
			
				  let regionList = area.getList('county', address.areaCode.slice(0, 4));
				  regionList = regionList.map(item => {
					//标记已选择的
					if (address.areaCode === item.code) {
					  item.selected = true;
					} else {
					  item.selected = false;
					}
					return item;
				  })
			
				  this.setData({
					selectRegionList: selectRegionList,
					regionType: 3,
					regionList: regionList
				  });
			
				} else {
				  let selectRegionList = [{
						code: 0,
						name: '省份',
					  },
					  {
						code: 0,
						name: '城市',
					  },
					  {
						code: 0,
						name: '区县',
					  }
					];
			
				  this.setData({
					selectRegionList: selectRegionList,
					regionType: 1,
					regionList: area.getList('province')
				  });
				}
			
				this.setRegionDoneStatus();
			
			  },
			},
			selectRegionType(event) {
			    let that = this;
			    let regionTypeIndex = event.target.dataset.regionTypeIndex;
			    let selectRegionList = that.data.selectRegionList;
			
			    //判断是否可点击
			    if (regionTypeIndex + 1 == this.data.regionType || (regionTypeIndex - 1 >= 0 && selectRegionList[regionTypeIndex - 1].code <= 0)) {
			      return false;
			    }
			
			    let selectRegionItem = selectRegionList[regionTypeIndex];
			    let code = selectRegionItem.code;
			    let regionList;
			    if (regionTypeIndex === 0) {
			      // 点击省级，取省级
			      regionList = area.getList('province');
			    }
			    else if (regionTypeIndex === 1) {
			      // 点击市级，取市级
			      regionList = area.getList('city', code.slice(0, 2)); 
			    }
			    else{
			      // 点击县级，取县级
			      regionList = area.getList('county', code.slice(0, 4)); 
			    }
			
			    regionList = regionList.map(item => {
			      //标记已选择的
			      if (that.data.selectRegionList[regionTypeIndex].code == item.code) {
			        item.selected = true;
			      } else {
			        item.selected = false;
			      }
			      return item;
			    })
			
			    this.setData({
			      regionList: regionList,
			      regionType: regionTypeIndex + 1
			    })
			
			    this.setRegionDoneStatus();
			  },
			  selectRegion(event) {
			    let that = this;
			    let regionIndex = event.target.dataset.regionIndex;
			    let regionItem = this.data.regionList[regionIndex];
			    let regionType = this.data.regionType;
			    let selectRegionList = this.data.selectRegionList;
			    selectRegionList[regionType - 1] = regionItem;
			
			    if (regionType == 3) {
			      this.setData({
			        selectRegionList: selectRegionList
			      })
			
			      let regionList = that.data.regionList.map(item => {
			        //标记已选择的
			        if (that.data.selectRegionList[that.data.regionType - 1].code == item.code) {
			          item.selected = true;
			        } else {
			          item.selected = false;
			        }
			        return item;
			      })
			
			      this.setData({
			        regionList: regionList
			      })
			
			      this.setRegionDoneStatus();
			      return
			    }
			
			    //重置下级区域为空
			    selectRegionList.map((item, index) => {
			      if (index > regionType - 1) {
			        item.code = 0;
			        item.name = index == 1 ? '城市' : '区县';
			      }
			      return item;
			    });
			
			    this.setData({
			      selectRegionList: selectRegionList,
			      regionType: regionType + 1
			    })
			    
			    let code = regionItem.code;
			    let regionList = [];
			    if (regionType === 1) {
			      // 点击省级，取市级
			      regionList= area.getList('city', code.slice(0, 2))
			    }
			    else {
			      // 点击市级，取县级
			      regionList= area.getList('county', code.slice(0, 4))
			    }
			
			    this.setData({
			      regionList: regionList
			    })
			
			    this.setRegionDoneStatus();
			  },
			  doneSelectRegion() {
			    if (this.data.selectRegionDone === false) {
			      return false;
			    }
			
			    let address = this.data.address;
			    let selectRegionList = this.data.selectRegionList;
			    address.province = selectRegionList[0].name;
			    address.city = selectRegionList[1].name;
			    address.county = selectRegionList[2].name;
			    address.areaCode = selectRegionList[2].code;
			
			    this.setData({
			      address: address,
			      openSelectRegion: false
			    });
			
			  },
			  cancelSelectRegion() {
			    this.setData({
			      openSelectRegion: false,
			      regionType: this.data.regionDoneStatus ? 3 : 1
			    });
			
			  },
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
