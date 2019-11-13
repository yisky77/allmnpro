<view class="container"><view class="user-section"><image class="bg" src="/static/user-bg11.jpg"></image><view data-event-opts="{{[['tap',[['auth',['$event']]]]]}}" class="user-info-box" bindtap="__e"><view class="portrait-box"><image class="portrait" src="{{userInfo.avatarUrl||'/static/missing-face.png'}}"></image></view><view data-event-opts="{{[['tap',[['getUserInfo',['$event']]]]]}}" class="info-box" bindtap="__e"><text class="username">{{userInfo.nickName||'游客'}}</text></view></view></view><view data-event-opts="{{[['touchstart',[['coverTouchstart',['$event']]]],['touchmove',[['coverTouchmove',['$event']]]],['touchend',[['coverTouchend',['$event']]]]]}}" class="cover-container" style="{{'transform:'+(coverTransform)+';'+('transition:'+(coverTransition)+';')}}" bindtouchstart="__e" bindtouchmove="__e" bindtouchend="__e"><image class="arc" src="/static/arc.png"></image><view class="order-section"><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/order/order?state=0']]]]]}}" bindtap="__e"><text class="yticon icon-shouye"></text><text>全部订单</text></view><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/order/order?state=1']]]]]}}" bindtap="__e"><text class="yticon icon-daifukuan"></text><block wx:if="{{user.unpaid>0}}"><text class="textnum">{{user.unpaid}}</text></block><text>待付款</text></view><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/order/order?state=2']]]]]}}" bindtap="__e"><text class="yticon icon-yishouhuo"></text><block wx:if="{{user.unrecv>0}}"><text class="textnum">{{user.unrecv}}</text></block><text>待收货</text></view><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/order/order?state=3']]]]]}}" bindtap="__e"><text class="yticon icon-shouhoutuikuan"></text><block wx:if="{{user.uncomment>0}}"><text class="textnum">{{user.uncomment}}</text></block><text>待评价</text></view></view><view class="order-section"><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/mycoupon/mycoupon']]]]]}}" bindtap="__e"><text class="yticon icon-shouye"></text><text>优惠券</text></view><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/mycoloect/mycoloect']]]]]}}" bindtap="__e"><text class="yticon icon-yishouhuo"></text><text>收藏商品</text></view><view class="order-item" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['/pages/user/feedback']]]]]}}" bindtap="__e"><text class="yticon icon-shouhoutuikuan"></text><text>意见反馈</text></view></view><view class="history-section icon"><view class="sec-header"><text class="yticon icon-lishijilu"></text><text>浏览历史</text></view><scroll-view class="h-list" scroll-x><block wx:for="{{footerlistdata}}" wx:for-item="item" wx:for-index="index" wx:key="id"><image src="{{item.picUrl}}" mode="aspectFill" data-event-opts="{{[['tap',[['navTopro',['$0'],[[['footerlistdata','id',item.id,'goodsId']]]]]]]}}" bindtap="__e"></image></block></scroll-view><list-cell vue-id="1" icon="icon-dizhi" iconColor="#5fcda2" title="收货地址" data-event-opts="{{[['^eventClick',[['navTo',['/pages/address/address']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell><button class="share-btn" open-type="share"><list-cell vue-id="2" icon="icon-share" iconColor="#9789f7" title="分享" open-type="share" tips="邀请好友赢大礼" bind:__l="__l" vue-slots="{{['default']}}"><button class="share-btn" open-type="share">分享</button></list-cell></button><block wx:if="{{!hasphone}}"><button class="share-btn" open-type="getPhoneNumber" data-event-opts="{{[['getphonenumber',[['getPhoneNumber',['$event']]]]]}}" bindgetphonenumber="__e"><list-cell vue-id="3" icon="icon-share" iconColor="#9789f7" title="绑定手机" open-type="getPhoneNumber" tips="绑定手机" bind:__l="__l" vue-slots="{{['default']}}"><button class="share-btn" open-type="getPhoneNumber">绑定手机</button></list-cell></button></block><block wx:if="{{!hasphone}}"><button class="share-btn" open-type="contact"><list-cell vue-id="4" icon="icon-share" iconColor="#9789f7" title="联系客服" open-type="contact" tips="联系客服" bind:__l="__l" vue-slots="{{['default']}}"><button class="share-btn" open-type="getPhoneNumber">联系客服</button></list-cell></button></block><list-cell vue-id="5" icon="icon-shezhi1" iconColor="#e07472" title="设置" border data-event-opts="{{[['^eventClick',[['navTo',['/pages/set/set']]]]]}}" bind:eventClick="__e" bind:__l="__l"></list-cell></view></view><auth class="vue-ref" vue-id="6" data-ref="open" bind:__l="__l"></auth></view>