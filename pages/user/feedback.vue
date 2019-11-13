<template>  
	<view class="container">
	  <picker @change="bindPickerChange"  v-model="index" :range="array">
	    <view class="picker">
	      <view class="fb-type">
	        <view class="type-label">{{array[index]}}</view>
	        <image class="type-icon" src="/static/arrow.png"></image>
	      </view>
	    </view>
	  </picker>
	  <view class="fb-body">
	    <textarea class="content" placeholder="对我们网站、商品、服务，你还有什么建议吗？你还希望在商城上买到什么？请告诉我们..." @input="contentInput" maxlength="500" auto-focus="true" v-model="content" />
	    <view class="weui-uploader__files" id="uploaderFiles">
	      <block v-for="(item,index) in files" :key="index">
	        <view class="weui-uploader__file" @tap="previewImage" >
	          <image class="weui-uploader__img" :src="item" mode="aspectFill" />
	        </view>
	      </block>
	      <view class="weui-uploader__input-box" v-if=" files.length < 5">
	        <view class="weui-uploader__input" @tap="chooseImage"></view>
	      </view>
	    </view>
	    <view class="text-count">{{contentLength}}/500</view>
	  </view>
	  <view class="fb-mobile">
	    <view class="label">手机号码</view>
	    <view class="mobile-box">
	      <input class="mobile" maxlength="11" type="number" placeholder="方便我们与你联系" @input="mobileInput" v-model="mobile" />
	      <image class="clear-icon" src="/static/clear_input.png" v-if="mobile.length > 0" @tap="clearMobile"></image>
	    </view>
	  </view>
	
	  <view class="fb-btn" @tap="submitFeedback">提交</view>
	</view>
</template>  
<script>  
	import api from '@/common/vmeitime-http/'
    export default {
		data(){
			return {
				array: ['请选择反馈类型', '商品相关', '功能异常', '优化建议', '其他'],
				index: 0,
				content: '',
				contentLength: 0,
				mobile: '',
				hasPicture: false,
				picUrls: [],
				files: []
			}
		},
		onShareAppMessage(res) {
		  return {
			title: '贝贝商城',
			imageUrl: '/static/temp/banner3.jpg',
			path: '/pages/index/index'
		  }
		},
		methods: {
			chooseImage: function(e) {
			    var that = this;
			    uni.chooseImage({
			      count: 1,
			      sizeType: ['original', 'compressed'],
			      sourceType: ['album', 'camera'],
			      success: function(res) {
				    that.files = that.files.concat(res.tempFilePaths)
			        that.upload(res);
			      }
			    })
			  },
			  upload: function(res) {
			    var that = this;
			    const uploadTask = uni.uploadFile({
			      url: 'http://mall.zhihuiyunqi.com/wx/storage/upload',
			      filePath: res.tempFilePaths[0],
			      name: 'file',
			      success: function(res) {
			        var _res = JSON.parse(res.data);
			        if (_res.errno === 0) {
			          var url = _res.data.url
			          that.picUrls.push(url)
					  that.hasPicture = true
			        }
			      },
			      fail: function(e) {
			        uni.showModal({
			          title: '错误',
			          content: '上传失败',
			          showCancel: false
			        })
			      },
			    })
			
			    uploadTask.onProgressUpdate((res) => {
			      console.log('上传进度', res.progress)
			      console.log('已经上传的数据长度', res.totalBytesSent)
			      console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
			    })
			
			  },
			  previewImage: function(e) {
			    uni.previewImage({
			      current: e.currentTarget.id, // 当前显示图片的http链接
			      urls: this.files // 需要预览的图片http链接列表
			    })
			  },
			  bindPickerChange: function(e) {
			      this.index = e.detail.value
			  },
			  mobileInput: function(e) {
			      this.mobile = e.detail.value
			  },
			  contentInput: function(e) {
			      this.contentLength = e.detail.cursor
			      this.content= e.detail.value
			  },
			  clearMobile: function(e) {
			      this.mobile = ''
			  },
			  submitFeedback: function(e) {
			    if (!uni.getStorageSync('haslogin')) {
			      uni.navigateTo({
			        url: "/pages/public/login"
			      });
			    }
			
			    let that = this;
			    if (that.index == 0) {
				  uni.showToast({title: '请选择反馈类型', icon: 'none'});
			      return false;
			    }
			
			    if (that.content == '') {
				  uni.showToast({title: '请输入反馈内容', icon: 'none'});
			      return false;
			    }
			
			    if (that.mobile == '' || !/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(that.mobile)) {
				  uni.showToast({title: '请输入正确的手机号', icon: 'none'});
			      return false;
			    }
			
			    uni.showLoading({
			      title: '提交中...',
			      mask: true,
			      success: function() {}
			    });
				let url = '/feedback/submit'
			    api.httppost(url, {
			      mobile: that.mobile,
			      feedType: that.array[that.index],
			      content: that.content,
			      hasPicture: that.hasPicture,
			      picUrls: that.picUrls
			    }).then(function(res) {
			      uni.hideLoading();
			      if (res.data.errno === 0) {
			        uni.showToast({
			          title: '感谢您的反馈！',
			          icon: 'none',
			          complete: function() {
						  uni.navigateBack()
			          }
			        });
			      } else {
			        uni.showToast({title: res.data.errmsg, icon: 'none'});
			      }
			    });
			  }
        }  
    }  
</script>  
<style lang='scss'>
	.container {
	  background: #f4f4f4;
	  min-height: 100%;
	  padding-top: 30upx;
	}
	
	.fb-type {
	  height: 104upx;
	  width: 100%;
	  background: #fff;
	  margin-bottom: 20upx;
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  padding-left: 30upx;
	  padding-right: 30upx;
	}
	
	.fb-type .type-label {
	  height: 36upx;
	  flex: 1;
	  color: #333;
	  font-size: 28upx;
	}
	
	.fb-type .type-icon {
	  height: 36upx;
	  width: 36upx;
	}
	
	.fb-body {
	  width: 100%;
	  background: #fff;
	  height: 600upx;
	  padding: 18upx 30upx 64upx 30upx;
	}
	
	.fb-body .content {
	  width: 100%;
	  height: 400upx;
	  color: #333;
	  line-height: 40upx;
	  font-size: 28upx;
	}
	
	.weui-uploader__files {
	  width: 100%;
	}
	
	.weui-uploader__file {
	  float: left;
	  margin-right: 9px;
	  margin-bottom: 9px;
	}
	
	.weui-uploader__img {
	  display: block;
	  width: 50px;
	  height: 50px;
	}
	
	.weui-uploader__input-box {
	  float: left;
	  position: relative;
	  margin-right: 9px;
	  margin-bottom: 9px;
	  width: 50px;
	  height: 50px;
	  border: 1px solid #d9d9d9;
	}
	
	.weui-uploader__input-box:after, .weui-uploader__input-box:before {
	  content: " ";
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  -webkit-transform: translate(-50%, -50%);
	  transform: translate(-50%, -50%);
	  background-color: #d9d9d9;
	}
	
	.weui-uploader__input-box:before {
	  width: 2px;
	  height: 39.5px;
	}
	
	.weui-uploader__input-box:after {
	  width: 39.5px;
	  height: 2px;
	}
	
	.weui-uploader__input-box:active {
	  border-color: #999;
	}
	
	.weui-uploader__input-box:active:after, .weui-uploader__input-box:active:before {
	  background-color: #999;
	}
	
	.weui-uploader__input {
	  position: absolute;
	  z-index: 1;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  opacity: 0;
	}
	
	.fb-body .text-count {
	  line-height: 30upx;
	  float: right;
	  color: #666;
	  font-size: 24upx;
	}
	
	.fb-mobile {
	  height: 162upx;
	  width: 100%;
	}
	
	.fb-mobile .label {
	  height: 58upx;
	  width: 100%;
	  padding-top: 14upx;
	  padding-bottom: 11upx;
	  color: #7f7f7f;
	  font-size: 24upx;
	  padding-left: 30upx;
	  padding-right: 30upx;
	  line-height: 33upx;
	}
	
	.fb-mobile .mobile-box {
	  height: 104upx;
	  width: 100%;
	  color: #333;
	  padding-left: 30upx;
	  padding-right: 30upx;
	  font-size: 24upx;
	  background: #fff;
	  position: relative;
	}
	
	.fb-mobile .mobile {
	  position: absolute;
	  top: 27upx;
	  left: 30upx;
	  height: 50upx;
	  width: 100%;
	  color: #333;
	  line-height: 50upx;
	  font-size: 24upx;
	}
	
	.fb-mobile .clear-icon {
	  position: absolute;
	  top: 27upx;
	  right: 30upx;
	  width: 48upx;
	  height: 48upx;
	  z-index: 2;
	}
	
	.fb-btn {
	  right: 0;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  width: 80%;
	  height: 90upx;
	  line-height: 98upx;
	  position: absolute;
	  bottom: 80upx;
	  left: 0;
	  border-radius: 0;
	  padding: 0;
	  margin: 0;
	  margin-left: 10%;
	  text-align: center;
	  /* padding-left: -5upx; */
	  font-size: 25upx;
	  color: #fff;
	  border-top-left-radius: 50upx;
	  border-bottom-left-radius: 50upx;
	  border-top-right-radius: 50upx;
	  border-bottom-right-radius: 50upx;
	  letter-spacing: 3upx;
	  background: #fa436ab3;
	}

</style>