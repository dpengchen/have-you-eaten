"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "food-commend2",
  props: {
    isFavorite: {
      type: Boolean,
      default: false
    },
    showCart: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const toDetailsPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/store/foodDetails"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$4,
        b: __props.isFavorite
      }, __props.isFavorite ? {
        c: common_vendor.p({
          type: "heart-filled",
          size: "30",
          color: "#F12626"
        })
      } : {}, {
        d: __props.showCart
      }, __props.showCart ? {
        e: common_vendor.p({
          type: "cart",
          size: "30",
          color: "#1EC28A"
        })
      } : {}, {
        f: common_vendor.o(toDetailsPage)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-26cb8615"]]);
wx.createComponent(Component);
