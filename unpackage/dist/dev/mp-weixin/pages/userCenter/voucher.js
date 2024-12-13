"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_easyinput2 + _easycom_uni_popup2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "voucher",
  setup(__props) {
    const voucherPopup = common_vendor.ref();
    const addVoucher = () => {
      voucherPopup.value.open();
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_assets._imports_0$2,
        c: common_vendor.o(addVoucher),
        d: common_vendor.p({
          placeholder: "请输入代金券密钥"
        }),
        e: common_vendor.sr(voucherPopup, "80bd81e1-0", {
          "k": "voucherPopup"
        }),
        f: common_vendor.p({
          type: "center"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80bd81e1"]]);
wx.createPage(MiniProgramPage);
