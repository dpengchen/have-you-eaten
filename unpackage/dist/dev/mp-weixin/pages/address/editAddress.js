"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "editAddress",
  setup(__props) {
    const sex = [{
      text: "男",
      value: 0
    }, {
      text: "女",
      value: 1
    }];
    const form = common_vendor.ref();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: ""
        }),
        b: common_vendor.p({
          label: "姓名"
        }),
        c: common_vendor.p({
          localdata: sex
        }),
        d: common_vendor.p({
          label: "性别"
        }),
        e: common_vendor.p({
          placeholder: ""
        }),
        f: common_vendor.p({
          label: "电话号码"
        }),
        g: common_vendor.p({
          type: "textarea",
          placeholder: ""
        }),
        h: common_vendor.p({
          label: "地址"
        }),
        i: common_assets._imports_0$1,
        j: common_vendor.sr(form, "037197cd-0", {
          "k": "form"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-037197cd"]]);
wx.createPage(MiniProgramPage);
