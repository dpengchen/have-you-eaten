<script setup>
	import {
		reactive,
		ref
	} from 'vue';

	const sex = [{
		text: '男',
		value: 0,
	}, {
		text: '女',
		value: 1,
	}]

	const form = ref()
</script>
<template>
	<view class="editLayout">
		<uni-forms ref="form">
			<uni-forms-item label="姓名">
				<uni-easyinput placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="性别">
				<uni-data-checkbox :localdata="sex" />
			</uni-forms-item>
			<uni-forms-item label="电话号码">
				<uni-easyinput placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="地址">
				<uni-easyinput type="textarea" placeholder="" />
			</uni-forms-item>
			<uni-forms-item>
				<button type="default" class="btn">
					<image class="icons" src="../../static/icons/save.png" mode="aspectFill"></image>
					保存
				</button>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>


<style lang="scss" scoped>
	.editLayout {
		padding: 20rpx;
		margin-top: 20rpx;

		.btn {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: $theme-color-4;
			font-size: 30rpx;
			color: white;

			.icons {
				width: 35rpx;
				height: 35rpx;
				margin-right: 15rpx;
			}

			&::after {
				border: 0;
			}
		}
	}
</style>