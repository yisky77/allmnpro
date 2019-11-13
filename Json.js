/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickName: 'Leo yo',
		avatarUrl: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
// 点击右上角分享按钮
export const sharebtn = (res, path) => {
	if (res.from === 'button') {
		// console.log(res.target)
	}
	let share =  {
		title: '',
		imageUrl: '/static/eimcc.jpg'
	}
    return {
	  title: share.title,
	  path: ''
	  // imageUrl: share.imageUrl
    }
}
const shareList = [{
		type: 1,
		icon: '/static/temp/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	},
	{
		type: 4,
		icon: '/static/temp/share_qqzone.png',
		text: 'QQ空间'
	}
]

export default {
	// carouselList,
	// cartList,
	// detailData,
	// lazyLoadList,
	// userInfo,
	// shareList,
	// goodsList,
	// orderList,
	// cateList,
	sharebtn
}
