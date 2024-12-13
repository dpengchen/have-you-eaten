"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const _sfc_main = {
  __name: "common-title",
  props: {
    title: {
      type: String,
      required: true,
      default: "吃了么"
    },
    pageBg: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    console.log(utils_system.getStatusBarHeight());
    console.log(utils_system.getHeaderHeight());
    return (_ctx, _cache) => {
      return {
        a: `${common_vendor.unref(utils_system.getStatusBarHeight)()}px`,
        b: common_vendor.t(__props.title),
        c: `${common_vendor.unref(utils_system.getHeaderHeight)()}px`,
        d: __props.pageBg ? 1 : "",
        e: `${common_vendor.unref(utils_system.getStatusBarHeight)() + common_vendor.unref(utils_system.getHeaderHeight)()}px`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-43a5d97b"]]);
wx.createComponent(Component);
