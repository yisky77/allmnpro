<template>
	<view>
		<view class="tui-actionsheet-class tui-actionsheet" :class="[show?'tui-actionsheet-show':'']">
			<view class="padding-xl" style="text-align:left;width: 100%;">
					<image src="/static/LOGO.png" style="width:80upx;height:80upx;border-radius: 100%;border:1px solid #ccc;"></image>
					<text style="position: relative;top: -30upx;left: 15upx;">欢迎来到 企业信息化管理中心</text>
					<view style="margin: 0 0 20upx;">
					<text >为您提供优质服务，需要您登录使用</text></view>
					<button open-type="getUserInfo" @getuserinfo="getUserInfo" lang="zh_CN" class="cu-btn bg-green">微信用户快速登录</button>
			</view>
		</view>
		<view class="tui-actionsheet-mask" :class="[show?'tui-mask-show':'']" @tap="handleClickMask"></view>
	</view>
</template>

<script>
	export default {
		name: "tuiActionsheet",
		props: {
			//点击遮罩 是否可关闭
			maskClosable: {
				type: Boolean,
				default: true
			},
			//显示操作菜单
			show: {
				type: Boolean,
				default: false
			},
			//菜单按钮数组，自定义文本颜色，红色参考色：#e53a37
			itemList: {
				type: Array,
				default: function() {
					return [{
						text: "确定",
						color: "#1a1a1a"
					}]
				}
			},
			//提示文字
			tips: {
				type: String,
				default: ""
			},
			//提示文字颜色
			color: {
				type: String,
				default: "#9a9a9a"
			},
			////提示文字大小
			size: {
				type: Number,
				default: 26
			},
			//是否需要取消按钮
			isCancel: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			px(num) {
				return uni.upx2px(num) + "px"
			},
			handleClickMask() {
				if (!this.maskClosable) return;
				this.handleClickCancel();
			},
			handleClickItem(e) {
				if (!this.show) return;
				const dataset = e.currentTarget.dataset;
				this.$emit('click', {
					index: dataset.index
				});
			},
			handleClickCancel() {
				this.$emit('cancel');
			}
		}
	}
</script>

<style>
	.tui-actionsheet {
		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		visibility: hidden;
		transform: translate3d(0, 100%, 0);
		transform-origin: center;
		transition: all 0.3s ease-in-out;
		background: #eaeaec;
		min-height: 100upx;
	}

	.tui-actionsheet-show {
		transform: translate3d(0, 0, 0);
		visibility: visible;
	}

	.tui-tips {
		width: 100%;
		/* font-size: 26upx; */
		padding: 30upx 60upx;
		box-sizing: border-box;
		text-align: center;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-operate-box {
		padding-bottom: 12upx;
	}

	.tui-actionsheet-btn {
		width: 100%;
		height: 100upx;
		background: #fff;
		/* box-sizing: border-box;
		padding: 0 30upx; */
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 36upx;
		position: relative;
	}

	.tui-btn-last {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-actionsheet-divider::before {
		content: '';
		width: 100%;
		border-top: 1upx solid #d9d9d9;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-actionsheet-cancel {
		color: #1a1a1a;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-actionsheet-hover {
		background: #f7f7f9;
	}

	.tui-actionsheet-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 9996;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.tui-mask-show {
		opacity: 1;
		visibility: visible;
	}
</style>
