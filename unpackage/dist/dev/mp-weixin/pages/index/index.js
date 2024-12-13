"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_food_recommend_top2 = common_vendor.resolveComponent("food-recommend-top");
  const _easycom_home_common_title2 = common_vendor.resolveComponent("home-common-title");
  const _easycom_food_recommend2 = common_vendor.resolveComponent("food-recommend");
  const _easycom_food_commend22 = common_vendor.resolveComponent("food-commend2");
  (_easycom_common_title2 + _easycom_food_recommend_top2 + _easycom_home_common_title2 + _easycom_food_recommend2 + _easycom_food_commend22)();
}
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_food_recommend_top = () => "../../components/food-recommend-top/food-recommend-top.js";
const _easycom_home_common_title = () => "../../components/home-common-title/home-common-title.js";
const _easycom_food_recommend = () => "../../components/food-recommend/food-recommend.js";
const _easycom_food_commend2 = () => "../../components/food-commend2/food-commend2.js";
if (!Math) {
  (_easycom_common_title + _easycom_food_recommend_top + _easycom_home_common_title + _easycom_food_recommend + _easycom_food_commend2)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.reactive({
      classifyList: [],
      classifyFoodTopTen: []
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "您吃了么"
        }),
        b: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: item,
            b: "e1491b98-2-" + i0 + ",e1491b98-1"
          };
        }),
        c: common_vendor.p({
          title: "品类推荐"
        }),
        d: common_vendor.p({
          title: "发现好菜"
        }),
        e: common_vendor.p({
          title: "推荐"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
