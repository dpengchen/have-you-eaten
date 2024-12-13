<script setup>
	import {
		defineProps
	} from 'vue'

	const props = defineProps({
		title: {
			type: String,
			required: true,
			default: '标题'
		}
	})
</script>
<template>
	<view class="layout">
		<view class="title">{{title}}</view>
		<view class="content">
			<slot name="content"></slot>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.layout {

		.title {
			font-size: 32rpx;
			font-weight: 600;
			margin-bottom: 20rpx;
		}

		.content {}
	}
</style>