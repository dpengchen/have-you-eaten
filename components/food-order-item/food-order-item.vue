<script setup>
	import {
		defineProps
	} from 'vue';

	defineProps({
		editDisabled: {
			type: Boolean,
			default: false
		}
	})
</script>
<template>
	<view class="layout">
		<view class="pic">
			<image src="../../commons/imgs/food-commend2.png" mode="aspectFill"></image>
		</view>
		<view class="info">

			<view class="title">罗克小饼干</view>
			<view class="sale">月销： 1099</view>
			<view class="price">￥18.99</view>
		</view>
		<view class="number">
			<uni-number-box :disabled="editDisabled" size="mini" />
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
		box-shadow: 0 10rpx 10rpx #dddddd;

		.pic {
			width: 200rpx;
			height: 200rpx;

			>image {
				width: 100%;
				height: 100%;
				border-radius: 28rpx;
			}
		}

		.info {
			margin-left: 28rpx;
			padding: 0 20rpx;
			flex: 1;

			.title {
				font-weight: 600;
				font-size: 30rpx;
			}

			.sale {
				font-size: 26rpx;
				color: $theme-color-3;
				margin: 10rpx 0;
			}

			.price {
				margin-top: 15rpx;
				font-weight: 600;
				color: $theme-color-2;
			}
		}

		.status {
			height: 200rpx;
			font-size: 26rpx;
			box-sizing: border-box;
			padding: 40rpx 30rpx 0 0;

			&.warning {
				color: $theme-color-4
			}

			&.success {
				color: $theme-color-1
			}

			&.error {
				color: $theme-color-2
			}
		}

		.number {
			padding: 10rpx;
			scale: .7;
		}
	}
</style>