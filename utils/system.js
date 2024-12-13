let systemInfo = uni.getSystemInfoSync()

// 获取状态栏高度
export const getStatusBarHeight = () => systemInfo.statusBarHeight

// 小程序获取按钮距离状态栏的高度
export const getRectAreaInfo = () => {
	// #ifdef MP
	const menuBottomInfo = uni.getMenuButtonBoundingClientRect()
	return menuBottomInfo.top - systemInfo.statusBarHeight
	// #endif

	// #ifndef MP
	return 0
	// #endif
}

// 获取状态栏高度以及按钮高度，计算除开状态栏之后按钮的内容高度
export const getHeaderHeight = () => {
	// #ifdef MP
	const menuBottomInfo = uni.getMenuButtonBoundingClientRect()
	return menuBottomInfo.height + (getRectAreaInfo() * 2)
	// #endif

	// #ifndef MP
	return 45
	// #endif
}