(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"266a":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("454f")),i=s(n("8e4a")),r=n("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/mix-list-cell").then(n.bind(null,"4ad5"))},f=function(){return n.e("components/auth").then(n.bind(null,"9cb0"))},d=0,h=0,g=!0,p={components:{listCell:l,auth:f},data:function(){return{user:{},coverTransform:"translateY(0px)",coverTransition:"0s",hasphone:!0,moving:!1,footerlistdata:[]}},onLoad:function(){""==t.getStorageSync("haslogin")?t.navigateTo({url:"/pages/public/login"}):this.login(t.getStorageSync("userInfo")),this.userlist(),this.footerlist()},onPullDownRefresh:function(){this.userlist(!0),this.footerlist()},onShareAppMessage:function(t){i.default.sharebtn(t)},computed:u({},(0,r.mapState)(["hasLogin","userInfo"])),methods:u({},(0,r.mapMutations)(["login"]),{getPhoneNumber:function(e){var n=this;if("getPhoneNumber:fail user deny"==e.detail.errMsg)console.log(o("已拒绝获取手机号！"," at pages/user/user.vue:180"));else{t.showLoading({title:"正在加载"});var a={encryptedData:e.detail.encryptedData,iv:e.detail.iv};n.bindphone(a)}},bindphone:function(e){var n=this,o="/auth/bindPhone";a.default.httppost(o,e).then(function(e){0==e.data.errno&&t.setStorageSync("hasphone",!0),n.hasphone=!0,t.showToast({title:e.data.errmsg,icon:"none"}),t.hideLoading()}).catch(function(e){t.hideLoading()})},auth:function(){""==t.getStorageSync("haslogin")&&this.$refs.open.openauth()},getdata:function(){this.userlist(!0),this.footerlist()},userlist:function(e){var n=this,o="/user/index";t.showLoading({title:"正在加载"}),a.default.httpget(o).then(function(o){var a=o.data;0==a.errno?n.user=a.data.order:(t.showToast({title:a.errmsg,icon:"none"}),t.navigateTo({url:"/pages/public/login"})),t.hideLoading(),e&&t.stopPullDownRefresh()})},footerlist:function(e){var n=this,o="/footprint/list?page=1&limit=10";a.default.httpget(o).then(function(o){var a=o.data;0==a.errno?n.footerlistdata=a.data.list:t.showToast({title:a.errmsg,icon:"none"}),t.hideLoading(),e&&t.stopPullDownRefresh()})},navTo:function(e){this.hasLogin||(e="/pages/public/login"),t.navigateTo({url:e})},navTofx:function(){this.hasLogin||(url="/pages/public/login"),t.showLoading({title:"正在加载中"});var e=t.getStorageSync("userId");a.default.httppostfx("/retailUser/detail",{retailUserId:e}).then(function(n){var o=n.data;if(200==o.code){var a="/pages/fx/index?id=".concat(e);""==o.data&&(a="/pages/fx/apply?id=".concat(e)),t.navigateTo({url:a})}else t.showToast({title:o.errmsg,icon:"none"});t.hideLoading()})},navTopro:function(e){t.navigateTo({url:"/pages/product/product?id=".concat(e)})},coverTouchstart:function(t){!1!==g&&(this.coverTransition="transform .1s linear",d=t.touches[0].clientY)},coverTouchmove:function(t){h=t.touches[0].clientY;var e=h-d;e<0?this.moving=!1:(this.moving=!0,e>=80&&e<100&&(e=80),e>0&&e<=80&&(this.coverTransform="translateY(".concat(e,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}})};e.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},"6ee7":function(t,e,n){"use strict";var o=n("b820"),a=n.n(o);a.a},"948a":function(t,e,n){"use strict";n.r(e);var o=n("266a"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},b820:function(t,e,n){},be9b:function(t,e,n){"use strict";n.r(e);var o=n("d2b0"),a=n("948a");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("6ee7");var r=n("2877"),s=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},d2b0:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},f9a0:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");o(n("66fd"));var e=o(n("be9b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f9a0","common/runtime","common/vendor"]]]);