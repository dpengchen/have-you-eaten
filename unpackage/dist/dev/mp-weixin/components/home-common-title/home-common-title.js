"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "home-common-title",
  props: {
    title: {
      type: String,
      required: true,
      default: "标题"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0ef91c53"]]);
wx.createComponent(Component);
