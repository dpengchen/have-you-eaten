<script setup>
	const scroll = (e) => {
		let {
			detail
		} = e

	}
</script>

<template>
	<view class="storeLayout">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item>
				<view class="swiper-item">123</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">456</view>
			</swiper-item>
		</swiper>
		<view class="info">
			<view class="storeName">罗克的烧烤店</view>
			<view class="description">这是一张非常非常好吃的烧烤店，非常推荐你来尝尝哦。</view>
			<view class="address">
				<uni-icons type="location" size="24" color="#1EC28A"></uni-icons>
				<view class="text">贵州省贵阳市观山湖区204号</view>
			</view>
		</view>
		<view class="classifyContainer">
			<scroll-view class="scroll classify" scroll-y="true">
				<view class="item">烧烤</view>
				<view class="item">炒菜</view>
				<view class="item active">超值套餐老板推荐</view>
				<view class="item">冷饮</view>
				<view class="item">饮料</view>
			</scroll-view>
			<scroll-view class="scroll" scroll-y="true" @scroll="scroll">
				<view class="classifySection">
					<view class="title">生鲜</view>
					<food-commend2 v-for="i in 3" :key="i" :showCart="false"></food-commend2>
				</view>
				<view class="classifySection">
					<view class="title">冷饮</view>
					<food-commend2 v-for="i in 4" :key="i" :showCart="false"></food-commend2>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.storeLayout {

		.info {
			padding: 0 20rpx;
			margin-bottom: 20rpx;

			.storeName {
				font-size: 38rpx;
				font-weight: 600;
			}

			.description {
				font-size: 28rpx;
				color: $theme-color-3;
				margin: 15rpx 0;
			}

			.address {
				display: flex;
				align-items: center;

				.text {
					margin-left: 10rpx;
					font-size: 26rpx;
					color: $theme-color-1;
				}
			}
		}

		.classifyContainer {
			display: flex;
			height: 75vh;

			.classify {
				width: 230rpx;
				height: 100%;
				background-color: #eee;

				.item {
					padding: 0 30rpx;
					height: 100rpx;
					display: flex;
					align-items: center;
					margin-bottom: 5rpx;
					font-size: 26rpx;
					color: #999;

					&.active {
						position: relative;
						background-color: #fff;

						&::before {
							content: '';
							display: inline-block;
							position: absolute;
							left: 0;
							top: 20%;
							width: 4rpx;
							height: 60%;
							background-color: $theme-color-2;
						}
					}
				}
			}

			.scroll {
				height: 100%;

				.classifySection {
					padding: 0 15rpx;

					.title {
						height: 70rpx;
						line-height: 70rpx;
						font-size: 30rpx;
						font-weight: 600;
					}
				}
			}
		}

	}
</style>