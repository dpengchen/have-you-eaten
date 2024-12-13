"use strict";
const common_vendor = require("../common/vendor.js");
let systemInfo = common_vendor.index.getSystemInfoSync();
const getStatusBarHeight = () => systemInfo.statusBarHeight;
const getRectAreaInfo = () => {
  const menuBottomInfo = common_vendor.index.getMenuButtonBoundingClientRect();
  return menuBottomInfo.top - systemInfo.statusBarHeight;
};
const getHeaderHeight = () => {
  const menuBottomInfo = common_vendor.index.getMenuButtonBoundingClientRect();
  return menuBottomInfo.height + getRectAreaInfo() * 2;
};
exports.getHeaderHeight = getHeaderHeight;
exports.getStatusBarHeight = getStatusBarHeight;
