<script setup>

</script>
<template>


	<view class="orderLayout">
		<common-title title="订单" :pageBg="false">
		</common-title>


		<order class="currentOrder" :isHistory="false"></order>


	</view>
</template>

<style lang="scss" scoped>
	.orderLayout {

		.currentOrder {
			min-height: 75vh;
		}

	}
</style>