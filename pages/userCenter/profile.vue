<script setup></script>
<template>
	<view class="profileLayout">
		<view class="pic">
			<image class="userPic" src="../../commons/imgs/github01.png" mode="aspectFill"></image>
			<uni-icons type="camera" size="15" class="camera" color="white"></uni-icons>
		</view>
		<view class="info">
			<uni-forms>
				<uni-forms-item label="昵称" name="">
					<uni-easyinput class="input" :inputBorder="false" placeholder="" />
				</uni-forms-item>
				<uni-forms-item label="手机号" name="">
					<uni-easyinput class="input" :inputBorder="false" placeholder="" />
				</uni-forms-item>
				<uni-forms-item label="性别" name="">
					<uni-easyinput class="input" :inputBorder="false" placeholder="" />
				</uni-forms-item>
				<uni-forms-item label="生日" name="">
					<uni-easyinput class="input" :inputBorder="false" placeholder="" />
				</uni-forms-item>

			</uni-forms>


		</view>
		<view class="submit">

			<view class="hint">
				根据未成年人保护相关法律法规的要求，我们不主动处理14周岁以下未成年人的个人信息，如果您为14周岁以下的用户，请勿填写您的个人资料。
			</view>
			<button type="default" class="btn">保存</button>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.profileLayout {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: $theme-color-5;

		.pic {
			width: 100vw;
			height: 400rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			background-color: #fff;

			.userPic {
				width: 200rpx;
				height: 200rpx;
				background-color: rgba(241, 38, 38, 0.5);
				border-radius: 50%;
			}

			.camera {
				position: absolute;
				margin-left: 150rpx;
				margin-top: 160rpx;
				background-color: #555;
				padding: 10rpx;
				border-radius: 50%;
			}
		}

		.info {
			margin-top: 20rpx;
			background-color: #fff;
			padding: 20rpx;

			.input {
				border-bottom: solid 1rpx $theme-color-5;

				&::after {
					border: 0;
				}
			}
		}

		.submit {
			flex: 1;
			padding: 20rpx;

			.hint {
				color: $theme-color-3;
				font-size: 20rpx;
			}

			.btn {
				margin-top: 50rpx;
				border-radius: 20rpx;
				background-color: $theme-color-2;
				font-size: 30rpx;
				color: white;

				&::after {
					border: 0;
				}
			}
		}
	}
</style>