<template>
	<view class="container">
	  <view class="post-comment">
	    <view class="goods">
	      <view class="img">
	        <image :src="orderGoods.picUrl"></image>
	      </view>
	      <view class="info">
	        <view class="t">
	          <text class="name">{{orderGoods.title}}</text>
	        </view>
	        <view class="attr">{{orderGoods.subtitle}}</view>
	      </view>
	    </view>
	    <view class="input-box">
	      <textarea class="content" focus="true" @input="bindInputValue" maxlength="140" placeholder="留言经过筛选后，对所有人可见" />
	      <text class="count">{{140 - content.length}}</text>
	    </view>
	
	    <view class="weui-uploader">
	      <view class="weui-uploader__hd">
	        <view class="weui-uploader__title">图片上传</view>
	        <view class="weui-uploader__info">{{picUrls.length}}/{{files.length}}</view>
	      </view>
	      <view class="weui-uploader__bd">
	        <view class="weui-uploader__files" id="uploaderFiles">
	          <block v-for="(item, index) in files" :key="index">
	            <view class="weui-uploader__file" @tap="previewImage"">
	              <image class="weui-uploader__img" :src="item" mode="aspectFill" />
	            </view>
	          </block>
	          <view class="weui-uploader__input-box">
	            <view class="weui-uploader__input" @tap="chooseImage"></view>
	          </view>
	        </view>
	      </view>
	    </view>
	
	    <view class="btns">
	      <view class="close" @tap="onClose">取消</view>
	      <view class="post" @tap="onPost">发表</view>
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
				type: 0,
				valueId: 0,
				orderGoods: {},
				content: '',
				stars: [0, 1, 2, 3, 4],
				star: 5,
				starText: '十分满意',
				hasPicture: false,
				picUrls: [],
				files: []
			}
		},
		onLoad(options){
	        this.valueId = options.valueId
			console.log(this.valueId)
			this.getOrderGoods();
		},
		methods: {
			chooseImage: function(e) {
			    if (this.files.length >= 5) {
			      util.showErrorToast('只能上传五张图片')
			      return false;
			    }
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
			      url: 'https://mall1.zhihuiyunqi.com/wx/storage/upload',
			      filePath: res.tempFilePaths[0],
			      name: 'file',
			      success: function(res) {
			        var _res = JSON.parse(res.data);
			        if (_res.errno === 0) {
			          var url = _res.data.url
			          that.picUrls.push(url)
			          that.hasPicture = true,
			          that.picUrls = that.picUrls
			        }
			      },
			      fail: function(e) {
					uni.showToast({title: '上传失败', icon: 'none'})
			      }
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
			  selectRater: function(e) {
			    var star = e.currentTarget.dataset.star + 1;
			    var starText;
			    if (star == 1) {
			      starText = '很差';
			    } else if (star == 2) {
			      starText = '不太满意';
			    } else if (star == 3) {
			      starText = '满意';
			    } else if (star == 4) {
			      starText = '比较满意';
			    } else {
			      starText = '十分满意'
			    }
			  this.star = star,
			  this.starText = starText
			  },
			  getOrderGoods: function() {
			    let that = this;
			    api.httpget('/topic/detail?id='+this.valueId).then(function(res) {
			      if (res.data.errno === 0) {
			          that.orderGoods = res.data.data.topic
			      }
			    });
			  },
			  onClose: function() {
			    uni.navigateBack();
			  },
			  onPost: function() {
			    let that = this; 
			    if (!this.content) {
				  uni.showToast({title: '请填写评论', icon: 'none'})
			      return false;
			    }
			    api.httppost('/comment/post', {
			      valueId: that.valueId,
			      content: that.content,
				  type:1,
			      star: 5,
			      hasPicture: that.hasPicture,
			      picUrls: that.picUrls
			    }).then(function(res) {
			      if (res.data.errno === 0) {
			        uni.showToast({
			          title: '评论成功',
			          complete: function() {
			            uni.navigateBack()
			          }
			        })
			      } else {
					  uni.navigateTo({
					    url: "/pages/public/login"
					  });
				  }
			    });
			  },
			  bindInputValue(event) {
			    let value = event.detail.value;
			    //判断是否超过140个字符
			    if (value && value.length > 140) {
			      return false;
			    }
			    this.content = event.detail.value
			  }
		}
	}
</script>

<style>
	page, .container {
	  height: 100%;
	  background: #f4f4f4;
	}
	
	.post-comment {
	  width: 750upx;
	  height: auto;
	  overflow: hidden;
	  padding: 30upx;
	  background: #fff;
	}
	
	.post-comment .goods {
	  display: flex;
	  align-items: center;
	  height: 199upx;
	  margin-left: 31.25upx;
	}
	
	.post-comment .goods .img {
	  height: 145.83upx;
	  width: 145.83upx;
	  background: #f4f4f4;
	}
	
	.post-comment .goods .img image {
	  height: 145.83upx;
	  width: 145.83upx;
	}
	
	.post-comment .goods .info {
	  height: 145.83upx;
	  flex: 1;
	  padding-left: 20upx;
	}
	
	.post-comment .goods .name {
	  margin-top: 30upx;
	  display: block;
	  height: 44upx;
	  line-height: 44upx;
	  color: #333;
	  font-size: 30upx;
	}
	
	.post-comment .goods .number {
	  display: block;
	  height: 37upx;
	  line-height: 37upx;
	  color: #666;
	  font-size: 25upx;
	}
	
	.post-comment .goods .status {
	  width: 105upx;
	  color: #b4282d;
	  font-size: 25upx;
	}
	
	.post-comment .rater {
	  display: flex;
	  flex-direction: row;
	  height: 55upx;margin-bottom: 20upx;

	}
	
	.post-comment .rater .rater-title {
	  font-size: 29upx;
	  padding-right: 10upx;line-height: 54upx;
	}
	
	.post-comment .rater image {
	  padding-left: 5upx;
	  height: 50upx;
	  width: 50upx;
	}
	
	.post-comment .rater .rater-desc {
	  font-size: 29upx;
	  padding-left: 10upx;line-height: 54upx;
	}
	
	.post-comment .input-box {
	  height: 337.5upx;
	  width: 690upx;
	  position: relative;
	  background: #fff;
	}
	
	.post-comment .input-box .content {
	  position: absolute;
	  top: 0;
	  left: 0;
	  display: block;
	  background: #fff;
	  font-size: 29upx;
	  border: 5px solid #f4f4f4;
	  height: 100%;
	  width: 100%;
	  padding: 20upx;
	}
	
	.post-comment .input-box .count {
	  position: absolute;
	  bottom: 20upx;
	  right: 20upx;
	  display: block;
	  height: 30upx;
	  width: 50upx;
	  font-size: 29upx;
	  color: #999;
	}
	
	.post-comment .btns {
	  height: 108upx;
	}
	
	.post-comment .close {
	  float: left;
	  height: 108upx;
	  line-height: 108upx;
	  text-align: left;
	  color: #666;
	  padding: 0 30upx;
	}
	
	.post-comment .post {
	  float: right;
	  height: 108upx;
	  line-height: 108upx;
	  text-align: right;
	  padding: 0 30upx;font-size: 30upx;
	}
	
	.weui-uploader {
	  margin-top: 50upx;
	}
	
	.weui-uploader__hd {
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: flex;
	  padding-bottom: 10px;
	  -webkit-box-align: center;
	  -webkit-align-items: center;
	  align-items: center;
	}
	
	.weui-uploader__title {
	  -webkit-box-flex: 1;
	  -webkit-flex: 1;
	  flex: 1;
	}
	
	.weui-uploader__info {
	  color: #b2b2b2;
	}
	
	.weui-uploader__bd {
	  margin-bottom: -4px;
	  margin-right: -9px;
	  overflow: hidden;
	}
	
	.weui-uploader__file {
	  float: left;
	  margin-right: 9px;
	  margin-bottom: 9px;
	}
	
	.weui-uploader__img {
	  display: block;
	  width: 79px;
	  height: 79px;
	}
	
	.weui-uploader__file_status {
	  position: relative;
	}
	
	.weui-uploader__file_status:before {
	  content: " ";
	  position: absolute;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	  background-color: rgba(0, 0, 0, 0.5);
	}
	
	.weui-uploader__file-content {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  -webkit-transform: translate(-50%, -50%);
	  transform: translate(-50%, -50%);
	  color: #fff;
	}
	
	.weui-uploader__input-box {
	  float: left;
	  position: relative;
	  margin-right: 9px;
	  margin-bottom: 9px;
	  width: 77px;
	  height: 77px;
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

</style>