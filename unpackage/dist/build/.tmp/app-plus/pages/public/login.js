(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/login"],{1444:function(t,n,e){"use strict";var r=e("29a5"),o=e.n(r);o.a},"29a5":function(t,n,e){},"82b3":function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");r(e("66fd"));var n=r(e("b049"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"852d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a")),o=e("2f62"),a=u(e("454f"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(s){return void e(s)}i.done?n(c):Promise.resolve(c).then(r,o)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var a=t.apply(n,e);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)})}}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){f(t,n,e[n])})}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l={data:function(){return{username:"",password:"",logining:!1}},onLoad:function(){},methods:s({},(0,o.mapMutations)(["login"]),{inputChange:function(t){var n=t.currentTarget.dataset.key;this[n]=t.detail.value},navBack:function(){t.reLaunch({url:"/pages/index/index"})},toRegist:function(){t.navigateTo({url:"/pages/public/reg"})},toLogin:function(){var n=c(r.default.mark(function n(){var e,o,u,i,c=this;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(this.logining=!0,e=this.username,o=this.password,u={username:e,password:o},""!=u.username&&/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(u.username)){n.next=8;break}return t.showToast({title:"请输入正确手机号码",icon:"none"}),n.abrupt("return",!1);case 8:if(""!=u.password){n.next=11;break}return t.showToast({title:"请输入正确的密码",icon:"none"}),n.abrupt("return",!1);case 11:t.showLoading({title:"登陆中，请稍后！"}),i="/auth/login",a.default.httppost(i,u).then(function(n){var e=n.data;0==e.errno&&(t.showToast({title:"登陆成功",icon:"none"}),c.login(e.data.userInfo),t.setStorageSync("token",e.data.token),t.setStorageSync("haslogin",!0),t.switchTab({url:"/pages/user/user"})),t.hideLoading(),t.showToast({title:e.errmsg,icon:"none"})}).catch(function(n){t.hideLoading(),t.showToast({title:n.data.errmsg,icon:"none"})});case 14:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()})};n.default=l}).call(this,e("6e42")["default"])},b049:function(t,n,e){"use strict";e.r(n);var r=e("f55c"),o=e("ff01");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("1444");var u=e("2877"),i=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);n["default"]=i.exports},f55c:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o})},ff01:function(t,n,e){"use strict";e.r(n);var r=e("852d"),o=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n["default"]=o.a}},[["82b3","common/runtime","common/vendor"]]]);