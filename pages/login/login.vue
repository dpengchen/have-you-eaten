<script setup>
	import {
		getStatusBarHeight,
		getHeaderHeight
	} from '@/utils/system.js'

	const login = () => {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
</script>
<template>
	<view class="loginLayout pageBg">
		<view class="status" :style="{height: `${getStatusBarHeight() + getHeaderHeight()}px`}"></view>
		<view class="header">
			<view class="appName">您吃了么？</view>
			<view class="description">一句多么简单的问候，却承载着中华几千年来对于人们最大的考验；生存问题！</view>
		</view>
		<view class="form">
			<view class="form-item">
				<uni-easyinput placeholder="手机号码" prefixIcon="phone" class="phone" :inputBorder="false" />
			</view>
			<view class="form-item">
				<uni-easyinput type="password" placeholder="密码" prefixIcon="locked" class="locked"
					:inputBorder="false" />
			</view>
			<view class="btn">
				<view class="login" @tap="login">
					<uni-icons type="arrow-right" size="30" color="white"></uni-icons>
				</view>
			</view>
		</view>
		<view class="other">
			<view class="item">
				<uni-icons type="weixin" size="26" color="#ddd"></uni-icons>
			</view>
			<view class="item">
				<uni-icons type="qq" size="26" color="#ddd"></uni-icons>
			</view>
			<view class="item more">
				<uni-icons type="more" size="20" color="#ddd"></uni-icons>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.loginLayout {
		height: 100vh;
		padding: 40rpx;
		box-sizing: border-box;

		.header {
			color: white;
			margin-top: 40rpx;

			.appName {
				font-size: 80rpx;
				font-weight: 800;
			}

			.description {
				margin-top: 15rpx;
				font-size: 28rpx;
			}
		}

		.form {
			margin-top: 180rpx;

			.form-item {
				background-color: #fff;
				padding: 10rpx;
				border-radius: 50rpx;
				overflow: hidden;
				border: solid 1px $theme-color-5;
				margin-bottom: 20rpx;
			}

			.btn {
				margin-top: 40rpx;
				text-align: center;

				.login {
					width: 100rpx;
					height: 100rpx;
					line-height: 100rpx;
					display: inline-block;
					background-color: $theme-color-1;
					border-radius: 50%;
				}
			}
		}

		.other {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100vw;
			display: flex;
			justify-content: center;
			padding-bottom: 20rpx;
			margin-bottom: env(safe-area-inset-bottom);

			.item {
				width: 80rpx;
				height: 80rpx;
				line-height: 80rpx;
				border-radius: 50%;
				border: solid 1px $theme-color-5;
				text-align: center;
				margin-left: 20rpx;

			}
		}
	}
</style>