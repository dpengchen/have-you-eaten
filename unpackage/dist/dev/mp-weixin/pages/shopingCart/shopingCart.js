"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_order2 = common_vendor.resolveComponent("order");
  (_easycom_common_title2 + _easycom_order2)();
}
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_order = () => "../../components/order/order.js";
if (!Math) {
  (_easycom_common_title + _easycom_order)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "订单",
      pageBg: false
    }),
    b: common_vendor.p({
      isHistory: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-69277e63"]]);
wx.createPage(MiniProgramPage);
