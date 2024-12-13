<script setup>
	import {
		defineProps
	} from 'vue'
	const props = defineProps({
		//是否为历史订单
		isHistory: {
			type: Boolean,
			default: true
		}
	})
</script>
<template>
	<view class="orderLayout">
		<view class="orderInfo">
			<view class="info">
				<text class="name">罗克甜品店</text>
				<view class="status">
					<view class="success" v-if="isHistory">已完成</view>
					<uni-icons type="right" size="12" color="#999999"></uni-icons>
				</view>
			</view>
			<view class="orderList">
				<food-order-item :editDisabled="isHistory"></food-order-item>
				<food-order-item :editDisabled="isHistory"></food-order-item>
				<food-order-item :editDisabled="isHistory"></food-order-item>
			</view>
			<view class="details">
				<view class="item" v-if="isHistory">
					<text class="label">下单时间：</text>
					<text class="value">2024-12-12 12:12:12</text>
				</view>

				<view class="item">
					<text class="label">统计：</text>
					<text class="value">共12件</text>
				</view>
				<view class="item">
					<text class="label">金额：</text>
					<text class="value">￥230.00</text>
				</view>
				<view class="item" v-if="isHistory">
					<text class="label">支付方式：</text>
					<text class="value">支付宝</text>
				</view>
			</view>
		</view>
		<view class="submit" v-if="!isHistory">
			<button type="primary" size="mini">提交订单</button>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.orderLayout {
		padding: 0 20rpx;

		.orderInfo {
			margin: 20rpx 0;

			.info {
				margin: 15rpx 0;
				display: flex;
				justify-content: space-between;

				.name {
					color: $theme-color-3;
					font-size: 28rpx;
					margin-right: 10rpx;
				}

				.status {
					font-size: 24rpx;
					display: flex;
					align-items: center;

					>view {
						margin-right: 10rpx;


					}

					.success {
						color: $theme-color-1;
					}

					.danger {
						color: $theme-color-2;
					}

					.warning {
						color: $theme-color-3;
					}
				}

			}

			.details {
				margin-top: 40rpx;

				.item {
					display: flex;
					justify-content: space-between;
					margin-bottom: 10rpx;
					font-size: 26rpx;

					.label {
						font-weight: 600;
					}

					.value {
						color: $theme-color-3;
					}
				}
			}
		}

		.submit {
			margin-top: 40rpx;
			text-align: right;

			>button {
				width: 200rpx;
				background-color: $theme-color-1;
			}
		}
	}
</style>