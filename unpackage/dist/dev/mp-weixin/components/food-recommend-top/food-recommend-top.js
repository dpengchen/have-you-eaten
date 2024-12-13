"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "food-recommend-top",
  setup(__props) {
    const toDetailsPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/store/foodDetails"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.o(toDetailsPage),
        c: common_vendor.p({
          type: "cart",
          size: "20",
          color: "#1EC28A"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e87c59ee"]]);
wx.createComponent(Component);
