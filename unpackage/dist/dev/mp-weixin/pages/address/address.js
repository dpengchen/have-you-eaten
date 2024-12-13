"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "address",
  setup(__props) {
    const navigateTo = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "compose",
          size: "30",
          color: "#1EC28A"
        }),
        b: common_vendor.o(($event) => navigateTo("/pages/address/editAddress")),
        c: common_vendor.o(($event) => navigateTo("/pages/address/editAddress"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-40ca010a"]]);
wx.createPage(MiniProgramPage);
