<script setup>
	import {
		getStatusBarHeight,
		getHeaderHeight
	} from '@/utils/system.js'

	const navigateTo = (url) => {
		uni.navigateTo({
			url: url,

		})
	}

	const logout = () => {
		uni.showModal({
			title: '提示',
			content: '确定退出登录吗？',
			success: (e) => {
				if (e.confirm) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			}
		})
	}
</script>
<template>
	<view class="userLayout pageBg">
		<view class="statusHeight" :style="{height: `${getStatusBarHeight() + getHeaderHeight()}px`}"></view>
		<view class="profile" @tap="navigateTo('/pages/userCenter/profile')">
			<view class="pic">
				<image src="../../commons/imgs/github01.png" mode="aspectFill"></image>
			</view>
			<view class="info">
				<view class="nickname">Rocc·罗克</view>
				<view class="description">我就是我不一样的烟火</view>
			</view>
		</view>


		<view class="funLayout">
			<view class="item" @tap="navigateTo('/pages/historyOrder/historyOrder')">
				<view class="left">
					<uni-icons type="calendar" size="24"></uni-icons>
					<text class="text">历史订单</text>
				</view>
				<uni-icons type="right" size="20" color="#888888"></uni-icons>
			</view>
			<view class="item" @tap="navigateTo('/pages/address/address')">
				<view class="left">
					<uni-icons type="location" size="24"></uni-icons>
					<text class="text">我的地址</text>
				</view>
				<uni-icons type="right" size="20" color="#888888"></uni-icons>
			</view>
			<view class="item" @tap="navigateTo('/pages/userCenter/favorite')">
				<view class=" left">
					<uni-icons type="heart" size="24"></uni-icons>
					<text class="text">我的收藏</text>
				</view>
				<uni-icons type="right" size="20" color="#888888"></uni-icons>
			</view>
			<view class="item" @tap="navigateTo('/pages/userCenter/voucher')">
				<view class="left">
					<uni-icons type="gift" size="24"></uni-icons>
					<text class="text">代金券</text>
				</view>
				<uni-icons type="right" size="20" color="#888888"></uni-icons>
			</view>
			<view class="item" @tap="logout">
				<view class="left">
					<uni-icons type="locked" size="24"></uni-icons>
					<text class="text">退出登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.userLayout {
		overflow: hidden;
		padding: 0 28rpx;

		.profile {
			height: 200rpx;
			display: flex;
			align-items: center;
			margin-bottom: 80rpx;

			.pic {
				width: 150rpx;
				height: 150rpx;
				border-radius: 30rpx;
				overflow: hidden;
				box-shadow: 10rpx 20rpx 20rpx #dddddd;

				>image {
					width: 100%;
					height: 100%;
				}
			}

			.info {
				margin-left: 28rpx;

				.nickname {
					font-size: 32rpx;
					font-weight: 600;
				}

				.description {
					margin-top: 10rpx;
					color: $theme-color-3;
					font-size: 28rpx;
				}
			}
		}

		.funLayout {
			width: 100%;

			.item {
				padding: 18rpx 0;
				padding-right: 30rpx;
				margin-bottom: 10rpx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					display: flex;
					align-items: center;


					.text {
						margin-left: 20rpx;
					}
				}
			}
		}
	}
</style>