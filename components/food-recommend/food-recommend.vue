<script setup>
	const toDetailsPage = () => {
		uni.navigateTo({
			url: "/pages/store/foodDetails"
		})
	}
</script>
<template>
	<view class="layout">
		<view class="info">
			<view class="title">罗克麻辣烫</view>
			<view class="sale">月售： 1099</view>
			<view class="price">￥19.80</view>
			<button class="buy" type="default" size="mini" @tap="toDetailsPage">立即下单</button>
		</view>
		<view class="pic">
			<image src="../../commons/imgs/food-commend.png" mode="aspectFill"></image>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.layout {
		width: 100%;
		display: flex;
		border-radius: 20rpx;
		overflow: hidden;
		box-shadow: -10rpx 10rpx 20rpx #dddddd;
		margin: 28rpx 0;

		.info {
			flex: 1;
			padding: 20rpx;

			.title {
				margin-top: 10rpx;
				font-size: 32rpx;
				font-weight: 600;
			}

			.sale {
				font-size: 26rpx;
				color: $theme-color-3;
				margin: 10rpx 0;
			}

			.price {
				color: $theme-color-2;
				font-weight: 600;
			}

			.buy {
				margin-top: 16rpx;
				font-size: 32rpx;
				color: white;
				border-radius: 55rpx;
				background-color: $theme-color-1;
			}
		}

		.pic {
			width: 280rpx;
			height: 280rpx;

			>image {
				width: 100%;
				height: 100%;
			}
		}

	}
</style>