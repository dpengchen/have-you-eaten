<script setup>
	import {
		defineProps
	} from 'vue'

	import {
		getStatusBarHeight,
		getHeaderHeight
	} from '@/utils/system.js'

	//打印
	console.log(getStatusBarHeight());
	console.log(getHeaderHeight())

	const props = defineProps({
		title: {
			type: String,
			required: true,
			default: '吃了么'
		},
		pageBg: {
			type: Boolean,
			default: true
		}
	})
</script>
<template>
	<view>
		<view class="layout" :class="{pageBg: pageBg}">
			<view class="status" :style="{height: `${getStatusBarHeight()}px`}"></view>
			<view class="titleContainer" :style="{height: `${getHeaderHeight()}px`}">
				<view class="titleContent">
					<view class="title">{{title}}</view>
					<view class="content">
						<slot name="content"></slot>
					</view>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height: `${getStatusBarHeight() + getHeaderHeight()}px`}"></view>
	</view>
</template>

<style lang="scss" scoped>
	.layout {
		padding: 0 20rpx;
		width: 100%;
		position: fixed;
		z-index: 9;
		background-color: white;

		.titleContainer {
			display: flex;
			justify-content: start;
			align-items: center;

			.titleContent {
				display: flex;
				align-items: flex-end;

				.title {
					font-size: 40rpx;
					font-weight: 600;

				}

				.content {
					height: fit-content;
					margin-left: 35rpx;
				}
			}

		}
	}
</style>