"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_food_order_item2 = common_vendor.resolveComponent("food-order-item");
  (_easycom_uni_icons2 + _easycom_food_order_item2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_food_order_item = () => "../food-order-item/food-order-item.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_food_order_item)();
}
const _sfc_main = {
  __name: "order",
  props: {
    //是否为历史订单
    isHistory: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.isHistory
      }, __props.isHistory ? {} : {}, {
        b: common_vendor.p({
          type: "right",
          size: "12",
          color: "#999999"
        }),
        c: common_vendor.p({
          editDisabled: __props.isHistory
        }),
        d: common_vendor.p({
          editDisabled: __props.isHistory
        }),
        e: common_vendor.p({
          editDisabled: __props.isHistory
        }),
        f: __props.isHistory
      }, __props.isHistory ? {} : {}, {
        g: __props.isHistory
      }, __props.isHistory ? {} : {}, {
        h: !__props.isHistory
      }, !__props.isHistory ? {} : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dddfbfee"]]);
wx.createComponent(Component);
