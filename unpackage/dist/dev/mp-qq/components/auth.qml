<view><view class="{{['cu-modal bottom-modal',!haslogin&&!hidemask?'show':'']}}"><view class="cu-dialog"><view class="padding-xl" style="text-align:left;width:100%;"><image style="width:80rpx;height:80rpx;border-radius:100%;border:1px solid #ccc;" src="/static/missing-face.png"></image><text style="position:relative;top:-30rpx;left:15rpx;">欢迎您的到来！</text><view style="margin:0 0 20rpx;"><text style="font-size:24rpx;">为您提供优质服务，需要您登录使用</text></view><button class="cu-btn bg-green" open-type="getUserInfo" lang="zh_CN" data-event-opts="{{[['getuserinfo',[['getUserInfo',['$event']]]]]}}" bindgetuserinfo="__e">用户快速登录</button></view></view></view></view>