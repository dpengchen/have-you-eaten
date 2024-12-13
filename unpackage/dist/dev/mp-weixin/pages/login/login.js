"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_easyinput2 + _easycom_uni_icons2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const login = () => {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: `${common_vendor.unref(utils_system.getStatusBarHeight)() + common_vendor.unref(utils_system.getHeaderHeight)()}px`,
        b: common_vendor.p({
          placeholder: "手机号码",
          prefixIcon: "phone",
          inputBorder: false
        }),
        c: common_vendor.p({
          type: "password",
          placeholder: "密码",
          prefixIcon: "locked",
          inputBorder: false
        }),
        d: common_vendor.p({
          type: "arrow-right",
          size: "30",
          color: "white"
        }),
        e: common_vendor.o(login),
        f: common_vendor.p({
          type: "weixin",
          size: "26",
          color: "#ddd"
        }),
        g: common_vendor.p({
          type: "qq",
          size: "26",
          color: "#ddd"
        }),
        h: common_vendor.p({
          type: "more",
          size: "20",
          color: "#ddd"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
