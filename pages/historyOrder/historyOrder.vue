<script setup>
	const toDetails = () => {
		uni.navigateTo({
			url: '/pages/historyOrder/orderDetails'
		})
	}
</script>
<template>
	<view class="historyOrderLayout">
		<view class="order" v-for="i in 10" :key="i" @tap="toDetails">
			<view class="top">
				<view class="foodDetail">
					<view class="list">
						<view class="item">
							<image class="pic" src="../../commons/imgs/food-commend.png" mode="aspectFill"></image>
							<view class="name">大米饭大米饭大米饭大米饭</view>
						</view>
						<view class="item">
							<image class="pic" src="../../commons/imgs/food-commend.png" mode="aspectFill"></image>
							<view class="name">大米饭</view>
						</view>
					</view>
					<view class="price">
						<view class="number">￥99.00</view>
						<view class="count">共2件</view>
					</view>
				</view>
				<view class="info">
					<view class="time">下单时间： 2024-12-12 12:12:12</view>
					<view class="status success">已完成</view>
				</view>
			</view>
			<view class="bottom">
				<view class="btn">评论</view>
				<view class="btn buy">再来一单</view>
			</view>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.historyOrderLayout {
		padding: 20rpx;
		background-color: $theme-color-5;

		// 每一项订单
		.order {
			padding: 25rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			border-radius: 15rpx;

			// 上半部分
			.top {
				.foodDetail {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.list {
						display: flex;

						.item {
							width: 130rpx;
							padding-right: 20rpx;

							.pic {
								width: 130rpx;
								height: 130rpx;
							}

							.name {
								font-size: 20rpx;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								color: $theme-color-3;
							}

						}
					}

					.price {
						text-align: right;

						.number {
							font-size: 30rpx;
							font-weight: 600;
						}

						.count {
							margin-top: 10rpx;
							font-size: 24rpx;
							color: $theme-color-3;
						}
					}

				}

				.info {
					display: flex;
					justify-content: space-between;
					font-size: 26rpx;
					margin: 20rpx 0;

					.time {
						color: $theme-color-3;
					}

					.status {

						&.success {
							color: $theme-color-1;
						}

						&.danger {
							color: $theme-color-2;
						}

						&.normal {
							color: $theme-color-3;
						}
					}
				}
			}

			// 下半部分
			.bottom {
				display: flex;
				justify-content: flex-end;

				.btn {
					padding: 8rpx 20rpx;
					border-radius: 40rpx;
					border: solid 1px $theme-color-3;
					margin-left: 15rpx;
					font-size: 26rpx;
					color: #444;

					&.buy {
						border-color: $theme-color-2;
						color: $theme-color-2;
					}
				}
			}
		}
	}
</style>