<script setup>
	import {
		reactive
	} from 'vue';

	//获取状态栏高度 + 小程序功能按钮高度

	//搜索功能
	const search = reactive({
		//搜索绑定
		foodName: '',
		//搜索功能
		search: () => {

		}
	})
</script>
<template>
	<view class="searchLayout">
		<uni-search-bar radius="50" @confirm="search" v-model="search.foodName" class="search"
			placeholder="搜索美食"></uni-search-bar>

		<uni-section title="历史记录">
			<view class="list">
				<view class="item">煲仔饭</view>
				<view class="item">煲仔饭</view>
				<view class="item">煲仔饭</view>
				<view class="item">煲仔饭</view>
				<view class="item">煲仔饭</view>
			</view>
		</uni-section>
		<uni-section title="热门搜索" type="line">
			<view class="list">
				<view class="item">煲仔饭</view>
				<view class="item">煲仔饭</view>
				<view class="item">煲仔饭</view>
				<view class="item">煲仔饭</view>
				<view class="item">煲仔饭</view>
			</view>
		</uni-section>

		<view class="searchResult">

			<food-commend2></food-commend2>
			<food-commend2></food-commend2>
			<food-commend2></food-commend2>
			<food-commend2></food-commend2>
			<food-commend2></food-commend2>
			<food-commend2></food-commend2>
			<food-commend2></food-commend2>
		</view>
	</view>
</template>


<style lang="scss" scoped>
	.searchLayout {
		padding-bottom: env(safe-area-inset-bottom);

		.list {
			padding: 0 20rpx;
			display: flex;

			.item {
				padding: 8rpx 16rpx;
				border-radius: 32rpx;
				color: #333;
				font-size: 24rpx;
				background-color: #dfdfdf;
				margin-right: 15rpx;
			}
		}

		.searchResult {
			margin-top: 20rpx;
			padding: 20rpx 20rpx;
		}
	}
</style>