<script setup>
	import {
		reactive
	} from 'vue';



	//品类列表
	const classify = reactive({
		classifyList: [],
		classifyFoodTopTen: [],
	})

	//跳转到搜索页面
	const toSearch = () => {
		uni.navigateTo({
			url: '/pages/search/search'
		})
	}
</script>
<template>
	<view class="pageBg">

		<common-title title="您吃了么">
		</common-title>
		<view class="homeLayout">


			<!-- 			<view class="searchContainer">
				<view class="search" @tap="toSearch">
					<uni-icons type="search" size="20" color="#dddddd"></uni-icons>
				</view>
			</view> -->

			<!-- 分类 -->
			<home-common-title title="品类推荐">
				<template #content>
					<view class="classifyList">
						<view class="classifyItem active">麻辣烫</view>
						<view class="classifyItem">煲仔饭</view>
						<view class="classifyItem">蛋糕/西点</view>
						<view class="classifyItem">快餐</view>
						<view class="classifyItem">披萨</view>
					</view>
					<!-- 菜品推荐前TOP10 -->
					<scroll-view scroll-x class="classifyFoodTop">
						<food-recommend-top v-for="item in 10" :key="item"></food-recommend-top>
					</scroll-view>
				</template>
			</home-common-title>

			<!-- 发现好菜，菜品推荐 -->
			<home-common-title title="发现好菜">
				<template #content>
					<food-recommend></food-recommend>
					<food-recommend></food-recommend>
				</template>
			</home-common-title>

			<!-- 推荐 -->
			<home-common-title title="推荐">
				<template #content>
					<food-commend2></food-commend2>
					<food-commend2></food-commend2>
					<food-commend2></food-commend2>
					<food-commend2></food-commend2>
					<food-commend2></food-commend2>
				</template>
			</home-common-title>

		</view>
	</view>
</template>
<style lang="scss" scope>
	.address {
		display: flex;
		justify-content: center;
		align-items: center;
		color: $theme-color-1;
		font-size: 24rpx;
	}

	.homeLayout {
		padding: 0 20rpx;

		.searchContainer {
			padding-top: 10rpx;
			margin-bottom: 20rpx;

			.search {
				padding: 10rpx 18rpx !important;
				background-color: #fff;
				border-radius: 32rpx;
			}
		}

		.classifyList {
			display: flex;

			.classifyItem {
				font-size: 24rpx;
				background-color: #F5F5F7;
				padding: 8rpx 16rpx;
				border-radius: 32rpx;
				margin-right: 10rpx;
				color: black;

				&.active {
					background-color: $theme-color-1;
					color: white;
				}
			}
		}

		.classifyFoodTop {
			white-space: nowrap;
			margin-bottom: 10rpx;


		}
	}
</style>