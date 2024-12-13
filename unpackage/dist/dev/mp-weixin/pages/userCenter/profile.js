"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.p({
      type: "camera",
      size: "15",
      color: "white"
    }),
    c: common_vendor.p({
      inputBorder: false,
      placeholder: ""
    }),
    d: common_vendor.p({
      label: "昵称",
      name: ""
    }),
    e: common_vendor.p({
      inputBorder: false,
      placeholder: ""
    }),
    f: common_vendor.p({
      label: "手机号",
      name: ""
    }),
    g: common_vendor.p({
      inputBorder: false,
      placeholder: ""
    }),
    h: common_vendor.p({
      label: "性别",
      name: ""
    }),
    i: common_vendor.p({
      inputBorder: false,
      placeholder: ""
    }),
    j: common_vendor.p({
      label: "生日",
      name: ""
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d7140c46"]]);
wx.createPage(MiniProgramPage);
