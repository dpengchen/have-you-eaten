"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "food-recommend",
  setup(__props) {
    const toDetailsPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/store/foodDetails"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toDetailsPage),
        b: common_assets._imports_0$3
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a056faa7"]]);
wx.createComponent(Component);
