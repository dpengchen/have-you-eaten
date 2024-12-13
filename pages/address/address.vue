<script setup>
	const navigateTo = (url) => {
		uni.navigateTo({
			url: url
		})
	}
</script>
<template>
	<view class="addressLayout">
		<view class="addressItem">
			<view class="info">

				<view class="name">罗克先生</view>
				<view class="phone">17586829120</view>
				<div class="address">贵州省贵阳市观山湖区八匹马武警总队贵州省贵阳市观山湖区八匹马武警总队</div>
			</view>
			<view class="edit" @tap="navigateTo('/pages/address/editAddress')">
				<uni-icons type="compose" size="30" color="#1EC28A"></uni-icons>
			</view>
		</view>
		<view class="addAddress">
			<button type="default" class="btn" @tap="navigateTo('/pages/address/editAddress')">添加地址</button>
		</view>
	</view>
</template>
<style scoped lang="scss">
	.addressLayout {
		padding: 20rpx;
		margin-bottom: env(safe-area-insert-bottom);

		.addressItem {
			display: flex;
			align-items: center;
			padding: 25rpx 20rpx;
			margin-bottom: 20rpx;
			background-color: $theme-color-4;
			border-radius: 12rpx;

			.info {
				flex: 1;

				.name {
					font-size: 32rpx;
					font-weight: 800;
				}

				.phone {
					font-size: 28rpx;
					margin: 10rpx 0;
					color: #333;
				}

				.address {
					width: 500rpx;
					font-size: 26rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					color: #333;
				}
			}

			.edit {
				height: 100%;
				padding: 10rpx;
				background-color: #fff;
				border-radius: 20rpx;
			}
		}

		.addAddress {
			.btn {
				background-color: $theme-color-4;
				color: white;

				&::after {
					border: 0;
				}
			}
		}
	}
</style>