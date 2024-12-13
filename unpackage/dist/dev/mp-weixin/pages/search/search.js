"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_food_commend22 = common_vendor.resolveComponent("food-commend2");
  (_easycom_uni_search_bar2 + _easycom_uni_section2 + _easycom_food_commend22)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_food_commend2 = () => "../../components/food-commend2/food-commend2.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_section + _easycom_food_commend2)();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const search = common_vendor.reactive({
      //搜索绑定
      foodName: "",
      //搜索功能
      search: () => {
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(search),
        b: common_vendor.o(($event) => search.foodName = $event),
        c: common_vendor.p({
          radius: "50",
          placeholder: "搜索美食",
          modelValue: search.foodName
        }),
        d: common_vendor.p({
          title: "历史记录"
        }),
        e: common_vendor.p({
          title: "热门搜索",
          type: "line"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
