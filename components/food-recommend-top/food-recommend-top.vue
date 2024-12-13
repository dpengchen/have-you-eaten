<script setup>
	const toDetailsPage = () => {
		uni.navigateTo({
			url: "/pages/store/foodDetails"
		})
	}
</script>
<template>
	<view class="foodRecommendLayout">
		<view class="pic">
			<image src="../../commons/imgs/food-commend.png" mode="aspectFill"></image>
		</view>
		<view class="info">
			<view class="title">罗克麻辣烫</view>
			<view class="sale">月售： 1099</view>
			<view class="priceContainer">
				<text class="price">￥19.80</text>
				<uni-icons type="cart" size="20" color="#1EC28A" @tap="toDetailsPage"></uni-icons>
			</view>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.foodRecommendLayout {
		display: inline-block;
		margin: 20rpx;
		margin-left: 0;
		width: 300rpx;
		border-radius: 30rpx;
		overflow: hidden;
		box-shadow: 10rpx 10rpx 20rpx #cccccc;

		.pic {
			width: 100%;
			aspect-ratio: 1/1;

			image {
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 30rpx;
				object-fit: cover;
			}
		}

		.info {
			padding: 15rpx 20rpx;

			.title {
				font-weight: 600;
			}

			.sale {
				font-size: 24rpx;
				color: $theme-color-3;
				margin: 10rpx 0;
			}

			.priceContainer {
				display: flex;
				margin-top: 6rpx;
				justify-content: space-between;

				.price {
					color: $theme-color-2;
					font-size: 32rpx;
					font-weight: 550;
				}
			}
		}
	}
</style>