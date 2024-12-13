<script setup>
	import {
		defineProps
	} from 'vue';

	const props = defineProps({
		isFavorite: {
			type: Boolean,
			default: false
		},
		showCart: {
			type: Boolean,
			default: true
		}
	})

	const toDetailsPage = () => {
		uni.navigateTo({
			url: "/pages/store/foodDetails"
		})
	}
</script>
<template>
	<view class="layout" @tap="toDetailsPage">
		<view class="pic">
			<image src="../../commons/imgs/food-commend2.png" mode="aspectFill"></image>
		</view>
		<view class="info">

			<view class="title">罗克小饼干</view>
			<view class="sale">
				<text class="scope">4.7分</text>
				<text>月销:1099</text>
			</view>
			<view class="price">
				￥18.99
				<text class="originalPrice">￥29.8</text>
			</view>
		</view>
		<view class="cart">
			<uni-icons type="heart-filled" size="30" color="#F12626" v-if="isFavorite"></uni-icons>
			<uni-icons type="cart" size="30" color="#1EC28A" v-if="showCart"></uni-icons>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.layout {
		display: flex;
		align-items: center;
		margin-bottom: 18rpx;
		border-radius: 28rpx;
		overflow: hidden;
		box-shadow: 10rpx 10rpx 20rpx #dddddd;

		.pic {
			width: 180rpx;
			height: 180rpx;

			>image {
				width: 100%;
				height: 100%;
				border-radius: 28rpx;
			}
		}

		.info {
			margin-left: 28rpx;
			// padding: 0 20rpx;
			// padding-left: 20rpx;
			flex: 1;

			.title {
				font-weight: 600;
				font-size: 28rpx;
			}

			.sale {
				font-size: 20rpx;
				color: $theme-color-3;
				margin: 10rpx 0;

				.scope {
					display: inline-block;
					color: #ff7f4c;
					font-size: 26rpx;
					font-weight: 800;
					padding-right: 10rpx;
				}
			}

			.price {
				margin-top: 15rpx;
				font-weight: 600;
				color: $theme-color-2;
				font-size: 26rpx;

				.originalPrice {
					font-weight: 400;
					font-size: 20rpx;
					text-decoration: line-through;
					color: $theme-color-3;
				}
			}
		}

		.cart {
			padding-right: 28rpx;
		}
	}
</style>