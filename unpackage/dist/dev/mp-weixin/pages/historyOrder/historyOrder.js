"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "historyOrder",
  setup(__props) {
    const toDetails = () => {
      common_vendor.index.navigateTo({
        url: "/pages/historyOrder/orderDetails"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (i, k0, i0) => {
          return {
            a: i,
            b: common_vendor.o(toDetails, i)
          };
        }),
        b: common_assets._imports_0$3,
        c: common_assets._imports_0$3
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-78240f89"]]);
wx.createPage(MiniProgramPage);
