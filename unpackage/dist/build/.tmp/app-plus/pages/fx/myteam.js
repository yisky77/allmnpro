(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fx/myteam"],{"02a5":function(t,e,a){},1910:function(t,e,a){"use strict";a.r(e);var r=a("3438"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);e["default"]=n.a},3438:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("454f"));function n(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{tabCurrentIndex:0,totalPages:1,currentpage:1,refresh:!0,reflash:!1,orderList:[],navList:[{state:0,text:"一级分销",orderList:[],num:"0"},{state:1,text:"二级分销",orderList:[],num:"0"},{state:2,text:"三级分销",orderList:[],num:"0"}]}},onLoad:function(){this.loadData()},onPullDownRefresh:function(){this.currentpage=1,this.refresh=!0,this.loadData(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.loadData()},methods:{navTo:function(e){t.navigateTo({url:"/pages/order/orderDetail?id=".concat(e)})},loadData:function(e){var a=this;t.showLoading({title:"正在加载"});var n=t.getStorageSync("userId"),i="/retailUser/getSubRetailUserlist";r.default.httppostfx(i,{retailUserId:n}).then(function(r){var n=r.data;200==n.code?(a.refresh&&(a.orderList=[]),a.orderList=n.data,a.navList[0].num=a.orderList.firstRetailUserList.length,a.navList[1].num=a.orderList.secondRetailUserList.length,a.navList[2].num=a.orderList.thirdRetailUserList.length,a.totalPages=n.data.pages,a.refresh=!1):t.showToast({title:n.errmsg,icon:"none"}),e&&t.stopPullDownRefresh(),t.hideLoading()})},tabClick:function(t){this.refresh=!0,this.tabCurrentIndex=t,this.currentpage=1,this.loadData()},deleteOrder:function(e){var a=this;t.showLoading({title:"请稍后"}),setTimeout(function(){a.orderList.splice(e,1),t.hideLoading()},600)},cancelOrder:function(e){var a=this;t.showLoading({title:"请稍后"}),setTimeout(function(){var r=a.orderStateExp(9),n=r.stateTip,i=r.stateTipColor;e=Object.assign(e,{state:9,stateTip:n,stateTipColor:i});var o=a.navList[1].orderList,s=o.findIndex(function(t){return t.id===e.id});-1!==s&&o.splice(s,1),t.hideLoading()},600)},orderStateExp:function(t){var e="",a="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",a="#909399";break}return{stateTip:e,stateTipColor:a}}}};e.default=i}).call(this,a("6e42")["default"])},"44e3":function(t,e,a){"use strict";var r=a("02a5"),n=a.n(r);n.a},"4cc8":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},b417:function(t,e,a){"use strict";a.r(e);var r=a("4cc8"),n=a("1910");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("44e3");var o=a("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},b845:function(t,e,a){"use strict";(function(t){a("d82e"),a("921b");r(a("66fd"));var e=r(a("b417"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["b845","common/runtime","common/vendor"]]]);