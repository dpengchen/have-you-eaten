"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_icons2 + _easycom_uni_number_box2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_number_box)();
}
const _sfc_main = {
  __name: "foodDetails",
  setup(__props) {
    const previewImg = (imgs) => {
      common_vendor.index.previewImage({
        urls: imgs
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_assets._imports_0$3,
        c: common_vendor.p({
          type: "heart",
          size: "20",
          color: "#999"
        }),
        d: common_assets._imports_0,
        e: common_assets._imports_0$3,
        f: common_assets._imports_0$3,
        g: common_assets._imports_0$3,
        h: common_assets._imports_0$3,
        i: common_vendor.o(($event) => previewImg(["../../commons/imgs/food-commend.png"])),
        j: common_assets._imports_0,
        k: common_vendor.p({
          disabled: _ctx.editDisabled
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dde89dfc"]]);
wx.createPage(MiniProgramPage);
