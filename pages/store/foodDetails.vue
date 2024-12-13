<script setup>
	const previewImg = (imgs) => {
		uni.previewImage({
			urls: imgs
		})
	}
</script>
<template>
	<view class="foodDetails">
		<swiper circular>
			<swiper-item>
				<view class="swiper-item">
					<image class="pic" src="../../commons/imgs/food-commend.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="pic" src="../../commons/imgs/food-commend.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="foodInfo">
			<view class="title">
				<view class="foodName">爆辣火锅</view>
				<view class="favorite">
					<uni-icons type="heart" size="20" color="#999"></uni-icons>
					<view class="text">收藏口味</view>
				</view>
			</view>
			<view class="optionContainer">
				<view class="optionsBox">
					<view class="label">底料</view>
					<view class="options">
						<view class="option-item active">清汤</view>
						<view class="option-item">酸汤</view>
						<view class="option-item">红汤</view>
						<view class="option-item">鸳鸯</view>
					</view>
				</view>
				<view class="optionsBox">
					<view class="label">底料</view>
					<view class="options">
						<view class="option-item">清汤</view>
						<view class="option-item">酸汤</view>
						<view class="option-item">红汤</view>
						<view class="option-item">鸳鸯</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 用户评论 -->
		<view class="comment">
			<view class="header">
				用户评论
			</view>

			<view class="list">
				<view class="item">
					<view class="userPic">
						<image class="pic" src="../../commons/imgs/github01.png" mode="aspectFill"></image>
					</view>
					<view class="content">
						<view class="val">
							<view class="info">
								<view class="text">这是一次非常好的购物体验，非常好吃非常快</view>
								<view class="imgs" @tap="previewImg(['../../commons/imgs/food-commend.png'])">
									<image class="pic" src="../../commons/imgs/food-commend.png" mode=""></image>
									<image class="pic" src="../../commons/imgs/food-commend.png" mode=""></image>
									<image class="pic" src="../../commons/imgs/food-commend.png" mode=""></image>
									<image class="pic" src="../../commons/imgs/food-commend.png" mode=""></image>
								</view>
							</view>
							<view class="scope">4.5</view>
						</view>
						<view class="time">2024-12-12 13:13:13</view>
					</view>
				</view>
				<view class="item">
					<view class="userPic">
						<image class="pic" src="../../commons/imgs/github01.png" mode="aspectFill"></image>
					</view>
					<view class="content">
						<view class="val">
							<view class="info">
								这是一次非常好的购物体验，非常好吃非常快这是一次非常好的购物体验，非常好吃非常快这是一次非常好的购物体验，非常好吃非常快这是一次非常好的购物体验，非常好吃非常快这是一次非常好的购物体验，非常好吃非常快
							</view>
							<view class="scope">4.5</view>
						</view>
						<view class="time">2024-12-12 13:13:13</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 购物车 -->
		<view class="cart">
			<view class="top">

				<view class="cart-options">
					<view class="price">￥19.90</view>
					<view class="option">清汤/双人/啤酒/正常</view>
				</view>
				<view class="number">
					<uni-number-box :disabled="editDisabled" />
				</view>
			</view>
			<view class="bottom">
				<button type="default" class="btn">立即购买</button>
				<view class="block"></view>
				<button type="default" class="btn">加入购物车</button>
			</view>
		</view>
	</view>

</template>
<style lang="scss" scoped>
	.foodDetails {
		padding-bottom: 240rpx;

		.swiper-item {
			.pic {
				width: 100%;
			}
		}

		.foodInfo {
			.title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 120rpx;
				padding: 0 40rpx;
				border-bottom: solid 1rpx #eee;
				margin-bottom: 20rpx;

				.foodName {
					font-weight: 800;
					font-size: 36rpx;
				}

				.favorite {
					text-align: center;

					.text {
						font-size: 20rpx;
						color: $theme-color-3;

						&.active {
							color: $theme-color-2;

						}
					}
				}
			}

			.optionContainer {

				.optionsBox {
					display: flex;
					margin-bottom: 10rpx;

					.label {
						width: 160rpx;
						height: 70rpx;
						line-height: 70rpx;
						text-align: center;
						font-weight: 600;
						font-size: 30rpx;
					}

					.options {
						flex: 1;
						display: grid;
						gap: 5rpx;
						grid-template-columns: repeat(3, 1fr);

						.option-item {
							width: 140rpx;
							height: 50rpx;
							margin: 10rpx;
							line-height: 50rpx;
							text-align: center;
							border: solid 0.5rpx #ddd;
							border-radius: 16rpx;
							font-size: 28rpx;
							color: #666;

							&.active {
								color: $theme-color-2;
								border-color: $theme-color-2;
								background: rgba(241, 38, 38, 0.1);
							}
						}
					}
				}
			}
		}

		//评论信息
		.comment {

			.header {
				padding: 20rpx;
				margin-top: 20rpx;
				border-top: solid 1rpx $theme-color-5;
				border-bottom: solid 1rpx $theme-color-5;
			}

			.list {
				padding: 10rpx 0;

				.item {
					display: flex;
					padding: 20rpx;

					.userPic {
						.pic {
							width: 100rpx;
							height: 100rpx;
							border-radius: 20rpx;
						}
					}

					.content {
						.val {
							display: flex;
							align-items: center;

							.info {
								font-size: 28rpx;
								flex: 1;

								.imgs {
									display: flex;
									margin-top: 10rpx;

									.pic {
										width: 100rpx;
										height: 100rpx;
										margin-right: 10rpx;
										position: relative;

										&:nth-child(4) {
											&::after {
												content: '...';
												position: absolute;
												left: 0;
												top: 0;
												width: 100%;
												height: 100%;
												line-height: 100rpx;
												text-align: center;
												z-index: 99;
												color: white;
												background-color: rgba(0, 0, 0, .5);
											}
										}
									}
								}
							}

							.scope {
								width: 100rpx;
								color: $theme-color-6;
								text-align: center;
								font-weight: 800;
							}
						}

						.time {
							text-align: right;
							color: $theme-color-3;
							font-size: 20rpx;
						}
					}
				}
			}
		}

		.cart {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 20rpx;
			height: 240rpx;
			box-sizing: border-box;
			margin-bottom: env(safe-area-inset-bottom);
			background-color: white;


			.top {
				padding-bottom: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.cart-options {
					.price {
						font-size: 32rpx;
						color: $theme-color-2;
						font-weight: 800;
					}

					.option {
						font-size: 24rpx;
						margin-top: 15rpx;
						color: $theme-color-3;
					}
				}
			}

			.bottom {
				display: flex;

				.btn {
					flex: 1;
					font-size: 32rpx;
					border-radius: 20rpx;
					box-sizing: border-box;

					&::after {
						border: 0;
					}

					&:first-child {
						border: solid 1rpx #ddd;
						background-color: #fff;
					}

					&:last-child {
						background-color: $theme-color-2;
						color: white;
					}
				}

				.block {
					width: 20rpx;
				}
			}
		}
	}
</style>