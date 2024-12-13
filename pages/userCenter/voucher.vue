<script setup>
	import {
		onMounted,
		ref
	} from 'vue';

	const voucherPopup = ref()
	const addVoucher = () => {
		voucherPopup.value.open()
	}
</script>
<template>
	<view class="favoriteLayout">
		<view class="voucherItem">
			<image src="../../static/icons/voucher.png" mode="aspectFill" class="icons"></image>
			<view class="line"></view>
			<view class="info">
				<view class="price">￥100</view>
				<view class="expireTime">2024-12-31</view>
			</view>
			<!-- <view class="expire">
				已过期
			</view> -->
		</view>
		<view class="voucherItem expire">
			<image src="../../static/icons/voucher.png" mode="aspectFill" class="icons"></image>
			<view class="line"></view>
			<view class="info">
				<view class="price">￥100</view>
				<view class="expireTime">2024-12-01</view>
			</view>
			<view class="expire">
				已过期
			</view>
		</view>
		<view class="addVoucher">
			<button type="default" class="btn" @tap="addVoucher">添加代金券</button>
		</view>

		<uni-popup ref="voucherPopup" type="center">
			<view class="voucherPopup">
				<view class="header">添加代金券</view>
				<uni-easyinput placeholder="请输入代金券密钥" />
				<view class="submit">
					<button type="default" class="btn">确认添加</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<style scoped lang="scss">
	.favoriteLayout {
		padding: 20rpx;

		.voucherItem {
			display: flex;
			align-items: center;
			margin-bottom: 18rpx;
			border-radius: 28rpx;
			overflow: hidden;
			box-shadow: 10rpx 10rpx 20rpx #dddddd;
			height: 180rpx;
			background-color: $theme-color-4;

			&.expire {
				filter: grayscale(100%);
			}


			.icons {
				width: 120rpx;
				height: 100rpx;
				padding: 30rpx;
			}

			.line {
				width: 1rpx;
				height: 80%;
				background-color: white;

			}

			.info {
				flex: 1;
				margin-left: 30rpx;
				color: white;

				.price {
					font-size: 60rpx;
					font-weight: 800;
				}

				.expireTime {
					font-size: 30rpx;
				}
			}

			>.expire {
				width: 100rpx;
				height: 100rpx;
				border: solid 6rpx $theme-color-3;
				text-align: center;
				line-height: 100rpx;
				border-radius: 50%;
				font-size: 30rpx;
				transform: rotate(-45deg);
				font-weight: 800;
				color: $theme-color-3;
			}
		}

		.addVoucher {
			.btn {
				background-color: $theme-color-4;
				color: white;

				&::after {
					border: 0;
				}
			}
		}

		.voucherPopup {
			background-color: #fff;
			padding: 20rpx;
			border-radius: 20rpx;
			width: 80vw;

			.header {
				padding: 10rpx;
				margin-bottom: 20rpx;
				font-size: 32rpx;
				font-weight: 800;
				text-align: center;
			}

			.submit {
				margin-top: 20rpx;

				.btn {
					font-size: 28rpx;
					background-color: $theme-color-4;
					color: white;

					&::after {
						border: 0;
					}
				}
			}
		}
	}
</style>