<view class="app"><view class="price-box"><text>支付金额</text><text class="price">38.88</text></view><view class="pay-type-list"><view data-event-opts="{{[['tap',[['changePayType',[1]]]]]}}" class="type-item b-b" bindtap="__e"><text class="icon yticon icon-weixinzhifu"></text><view class="con"><text class="tit">微信支付</text><text>推荐使用微信支付</text></view><label class="radio"><radio value="" color="#fa436a" checked="{{payType==1}}"></radio></label></view><view data-event-opts="{{[['tap',[['changePayType',[2]]]]]}}" class="type-item b-b" bindtap="__e"><text class="icon yticon icon-alipay"></text><view class="con"><text class="tit">支付宝支付</text></view><label class="radio"><radio value="" color="#fa436a" checked="{{payType==2}}"></radio></label></view><view data-event-opts="{{[['tap',[['changePayType',[3]]]]]}}" class="type-item" bindtap="__e"><text class="icon yticon icon-erjiye-yucunkuan"></text><view class="con"><text class="tit">预存款支付</text><text>可用余额 ¥198.5</text></view><label class="radio"><radio value="" color="#fa436a" checked="{{payType==3}}"></radio></label></view></view><text data-event-opts="{{[['tap',[['confirm',['$event']]]]]}}" class="mix-btn" bindtap="__e">确认支付</text></view>