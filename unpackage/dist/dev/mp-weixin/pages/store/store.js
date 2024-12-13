"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_food_commend22 = common_vendor.resolveComponent("food-commend2");
  (_easycom_uni_icons2 + _easycom_food_commend22)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_food_commend2 = () => "../../components/food-commend2/food-commend2.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_food_commend2)();
}
const _sfc_main = {
  __name: "store",
  setup(__props) {
    const scroll = (e) => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "location",
          size: "24",
          color: "#1EC28A"
        }),
        b: common_vendor.f(3, (i, k0, i0) => {
          return {
            a: i,
            b: "c1a2745a-1-" + i0
          };
        }),
        c: common_vendor.p({
          showCart: false
        }),
        d: common_vendor.f(4, (i, k0, i0) => {
          return {
            a: i,
            b: "c1a2745a-2-" + i0
          };
        }),
        e: common_vendor.p({
          showCart: false
        }),
        f: common_vendor.o(scroll)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c1a2745a"]]);
wx.createPage(MiniProgramPage);
