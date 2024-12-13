"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/shopingCart/shopingCart.js";
  "./pages/userCenter/userCenter.js";
  "./pages/search/search.js";
  "./pages/store/store.js";
  "./pages/address/address.js";
  "./pages/address/editAddress.js";
  "./pages/userCenter/favorite.js";
  "./pages/userCenter/voucher.js";
  "./pages/store/foodDetails.js";
  "./pages/userCenter/profile.js";
  "./pages/login/login.js";
  "./pages/historyOrder/historyOrder.js";
  "./pages/historyOrder/orderDetails.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
