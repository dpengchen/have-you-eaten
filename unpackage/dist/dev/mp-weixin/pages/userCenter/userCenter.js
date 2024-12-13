"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "userCenter",
  setup(__props) {
    const navigateTo = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    const logout = () => {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定退出登录吗？",
        success: (e) => {
          if (e.confirm) {
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: `${common_vendor.unref(utils_system.getStatusBarHeight)() + common_vendor.unref(utils_system.getHeaderHeight)()}px`,
        b: common_assets._imports_0,
        c: common_vendor.o(($event) => navigateTo("/pages/userCenter/profile")),
        d: common_vendor.p({
          type: "calendar",
          size: "24"
        }),
        e: common_vendor.p({
          type: "right",
          size: "20",
          color: "#888888"
        }),
        f: common_vendor.o(($event) => navigateTo("/pages/historyOrder/historyOrder")),
        g: common_vendor.p({
          type: "location",
          size: "24"
        }),
        h: common_vendor.p({
          type: "right",
          size: "20",
          color: "#888888"
        }),
        i: common_vendor.o(($event) => navigateTo("/pages/address/address")),
        j: common_vendor.p({
          type: "heart",
          size: "24"
        }),
        k: common_vendor.p({
          type: "right",
          size: "20",
          color: "#888888"
        }),
        l: common_vendor.o(($event) => navigateTo("/pages/userCenter/favorite")),
        m: common_vendor.p({
          type: "gift",
          size: "24"
        }),
        n: common_vendor.p({
          type: "right",
          size: "20",
          color: "#888888"
        }),
        o: common_vendor.o(($event) => navigateTo("/pages/userCenter/voucher")),
        p: common_vendor.p({
          type: "locked",
          size: "24"
        }),
        q: common_vendor.o(logout)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5963578a"]]);
wx.createPage(MiniProgramPage);
