"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_food_commend22 = common_vendor.resolveComponent("food-commend2");
  _easycom_food_commend22();
}
const _easycom_food_commend2 = () => "../../components/food-commend2/food-commend2.js";
if (!Math) {
  _easycom_food_commend2();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      isFavorite: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-35472f16"]]);
wx.createPage(MiniProgramPage);
