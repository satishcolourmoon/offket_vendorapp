function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n     \r\n    <ion-header >\r\n      <ion-toolbar class=\"sidemenuToolbar\" style=\"padding:10px 10px;--background:#041d3a;\">\r\n        <ion-row style=\"padding:10px 0px;\">\r\n           <ion-col size=\"12\" >\r\n             <img src=\"{{image}}\" style=\"border-radius: 50%; background: white; width: 80px; height: 80px;\">\r\n            <h6 style=\"color:#fff;margin: 10px 5px 5px;font-size:18px;\">Hi, {{name}}.</h6>\r\n            <p style=\"color:#fff;margin: 5px;\">+91 {{mobile}}</p>\r\n           </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\" class=\"sidemenu\" *ngFor=\"let v of vendorMenu\">\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item  routerDirection=\"forward\" [routerLink]=\"v.url\" lines=\"none\" detail=\"false\" style=\"padding-left:25px;color:#777777;\">\r\n              {{v.title}}\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n        <ion-list class=\"sidemenu\">\r\n            <ion-menu-toggle auto-hide=\"true\">\r\n              <ion-item (click)=\"logout()\" style=\"--background:#081f66;color:white;\">\r\n                <h4 style=\"padding-left:33%;\">Logout</h4>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n          </ion-list>\r\n\r\n       \r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/brandfilter/brandfilter.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brandfilter/brandfilter.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBrandfilterBrandfilterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\" (click)=\"dismiss()\"></ion-back-button>\n    <ion-title style=\"color: #fff;\">Brands</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-col size=\"4\" style=\"margin-top: 10px; color: #3880ff;\">\n      <ion-segment >\n        <ion-segment-button value=\"brands\" selected>\n          <ion-label style=\"color: #3880ff;\">Brands</ion-label>\n        </ion-segment-button>\n   \n      </ion-segment>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-list>\n        <ion-item *ngFor=\"let atval of brands\">\n          <ion-label>{{atval.brand_name}}</ion-label>\n          <ion-checkbox slot=\"start\" (ionChange)=\"selectAttrVal($event,atval.id)\"></ion-checkbox>\n        </ion-item>\n     \n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>\n  <ion-footer class=\"footer\">\n    <ion-row>\n      <ion-col size=\"6\" (click)=\"reset()\">\n        <ion-button style=\"color: #fff;\"  (click)=\"reset()\" expand=\"block\" fill=\"clear\" size=\"small\">\n          Reset <ion-icon name=\"close-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\" (click)=\"apply()\">\n        <ion-button style=\"color: #fff;\"  expand=\"block\" fill=\"clear\" size=\"small\">\n          Apply\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFilterFilterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"  (click)=\"dismiss()\"></ion-back-button>\n    <ion-title style=\"color: #fff;\" >Brands</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-col size=\"4\" style=\"margin-top: 10px;  color: #3880ff;\">\n      <ion-segment >\n        <ion-segment-button value=\"brands\" selected>\n          <ion-label style=\"color: #3880ff;\">Brands</ion-label>\n        </ion-segment-button>\n   \n      </ion-segment>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-list>\n        <ion-item *ngFor=\"let atval of brands\">\n          <ion-label>{{atval.brand_name}}</ion-label>\n          <ion-checkbox slot=\"start\" (ionChange)=\"selectAttrVal($event,atval.id)\"></ion-checkbox>\n        </ion-item>\n     \n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>\n  <ion-footer class=\"footer\">\n    <ion-row>\n      <ion-col size=\"6\" (click)=\"reset()\">\n        <ion-button style=\"color: #fff;\" expand=\"block\" fill=\"clear\" size=\"small\">\n          Reset <ion-icon name=\"close-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\" (click)=\"apply()\">\n        <ion-button  style=\"color: #fff;\" expand=\"block\" fill=\"clear\" size=\"small\">\n          Apply\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotpasswordForgotpasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content style=\"--background: transparent\">\n  <div class=\"modalbox1\">\n  \t\n    <ion-grid style=\"padding: 0;\" *ngIf=\"mobilescreen=='true'\">\n    \t\t\n      <ion-row >\n        <ion-col size=\"12\" class=\"acceptmodal\">\n          <h4>{{show_logintype}} Forgot Password\n          </h4>\n        </ion-col>\n        <ion-col size=\"12\" style=\"padding: 10px 15px;\">\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Phone Number or Email</ion-label>\n          <ion-input type=\"text\" id=\"phone\" name=\"phone\" clear-input placeholder=\"*Phone Number or Email\" class=\"inputbox\">\n          </ion-input>\n\n          <div style=\"text-align: center;margin-top: 4%;\"> <button small (click)=\"checkOTP()\">Submit</button>\n            <button small (click)=\"dismiss()\">Close</button>\n\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid style=\"padding: 0;\" *ngIf=\"otpscreen=='true'\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"acceptmodal\">\n          <h4>Enter OTP\n          </h4>\n        </ion-col>\n        <ion-col size=\"12\" style=\"padding: 10px 15px;\">\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">OTP</ion-label>\n          \t<ion-input type=\"text\" id=\"otp\" name=\"otp\" clear-input placeholder=\"*OTP\" class=\"inputbox\">\n          </ion-input>\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">New Password</ion-label>\n          \t<ion-input type=\"text\" id=\"new_password\" name=\"new_password\" clear-input placeholder=\"*New Password\" class=\"inputbox\">\n          </ion-input>\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Confirm Password</ion-label>\n          \t<ion-input type=\"text\" id=\"confirm_password\" name=\"confirm_password\" clear-input placeholder=\"*Confirm Password\" class=\"inputbox\">\n          </ion-input>\n\n          <div style=\"text-align: center;margin-top: 4%;\"> <button small (click)=\"sendOTP()\">Update</button>\n            <button small (click)=\"back()\">Change Phone</button>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </div>\n\n</ion-content>\n\n<style>\n  button {\n    color: #fff;\n    margin: 5px;\n    background: #05274d;\n    padding: 7px 10px;\n    border-radius: 4px;\n  }\n</style>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/shop-popover/shop-popover.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/shop-popover/shop-popover.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsShopPopoverShopPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  shop-popover works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet-page/nointernet-page.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet-page/nointernet-page.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNointernetPageNointernetPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"icon_pos\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-thumbnail class=\"connection_icon\">\n          <img src=\"/assets/img/internet.png\">\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col class=\"ion-text-center\">\n        <ion-label>\n         <h2>NO INTERNET CONNECTION</h2>\n         <p>Please switch on mobile data or connect to wifi</p>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/stock-management/stock-management.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock-management/stock-management.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStockManagementStockManagementPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar style=\"--background: #f47a20;color: #fff;\">\n    <ion-title>Stock Management</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h3>Stock Management</h3>\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-label position=\"floating\">Quantity</ion-label>\n        <ion-input type=\"text\" id=\"quantity\" [(ngModel)]=\"quantity\" name=\"quantity\" clear-input placeholder=\"*Quantity\">\n        </ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-button small (click)=\"updatePrice()\">Update Stock</ion-button>\n    <ion-button small (click)=\"dismiss()\">Close</ion-button>\n  </ion-grid>\n\n\n</ion-content> -->\n\n\n<ion-content style=\"--background: transparent\">\n  <div class=\"modalbox1\">\n    <ion-grid style=\"padding: 0;\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"acceptmodal\">\n          <h4>Stock Management\n          </h4>\n        </ion-col>\n        <ion-col size=\"12\" style=\"padding: 10px 15px;\">\n          <!-- <ion-label position=\"floating\" style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Stock Status \n          </ion-label> -->\n          <ion-select placeholder=\"Select Stock Status\" class=\"inputbox\" id=\"stockstatus\" name=\"stockstatus\" style=\"padding:12px 20px !important;\">\n            <ion-select-option value=\"add\">Add</ion-select-option>\n            <ion-select-option value=\"remove\">Remove</ion-select-option>\n          </ion-select>\n\n        \n\n\n          <!-- <ion-label position=\"floating\" style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Quantity\n          </ion-label> -->\n          <ion-input type=\"tel\" class=\"inputbox\" id=\"quantity\" name=\"quantity\" clear-input\n            placeholder=\"*Quantity\" style=\"margin-top:10px;\"></ion-input>\n\n          <div style=\"text-align: center;margin-top: 4%;\">\n            <button (click)=\"updatePrice()\">Update Stock</button>\n            <button (click)=\"dismiss()\" style=\"background:#f11313;width:30%;\">Close</button>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid style=\"height: 400px;overflow-y: auto;padding:0px;\">\n    <table>\n      <tr>\n        <th>Product</th>\n        <th>Status</th>\n        <th>QTY</th>\n        <th>Stock</th>\n        <th>Message</th>\n      </tr>\n<tbody>\n      <tr *ngFor=\"let linkv of stockmanagement\">\n        <td>{{linkv.product_id}}</td>\n        <td>{{linkv.paid_status}}</td>\n        <td> {{linkv.quantity}}</td>\n        <td>{{linkv.total_stock}}</td>\n        <td>{{linkv.message}}\n          <small>Date:{{linkv.created_at}}</small>\n        </td>\n\n      </tr>\n</tbody>\n\n    </table>\n\n  </ion-grid>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/updateprice/updateprice.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updateprice/updateprice.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdatepriceUpdatepricePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar style=\"--background: #f47a20;color: #fff;\">\n    <ion-title>Update Price</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"addvariantbox\">\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Price</ion-label>\n          <ion-input type=\"text\" id=\"price\" [(ngModel)]=\"price\" name=\"price\" clear-input placeholder=\"*price\">\n          </ion-input>\n\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Sale Price</ion-label>\n          <ion-input type=\"text\" id=\"saleprice\" [(ngModel)]=\"saleprice\" name=\"saleprice\" clear-input\n            placeholder=\"*Sale Price\"></ion-input>\n\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Stock</ion-label>\n          <ion-input type=\"text\" id=\"stock\" [(ngModel)]=\"stock\" name=\"stock\" clear-input placeholder=\"*Stock\">\n          </ion-input>\n          <div style=\"text-align: center;\"> <button small (click)=\"updatePrice()\">Update Price</button>\n            <button small (click)=\"dismiss()\">Close</button>\n\n          </div>\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-content> -->\n\n<ion-content style=\"--background: transparent\">\n  <div class=\"modalbox1\">\n    <ion-grid style=\"padding: 0;\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"acceptmodal\">\n          <h4>Update Price\n          </h4>\n        </ion-col>\n        <ion-col size=\"12\" style=\"padding: 10px 15px;\">\n\n          <!-- <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Price</ion-label> -->\n          <ion-input type=\"tel\" id=\"price\" name=\"price\" clear-input placeholder=\"*Original Product Price\"\n            class=\"inputbox\">\n          </ion-input>\n\n\n          <!-- <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Sale Price</ion-label> -->\n          <ion-input type=\"tel\" id=\"saleprice\" name=\"saleprice\" clear-input\n            placeholder=\"*Your Commission Price\" class=\"inputbox\"></ion-input>\n\n\n          <!-- <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Stock</ion-label> -->\n          <ion-input type=\"tel\" id=\"stock\" name=\"stock\" clear-input placeholder=\"*Stock\"\n            class=\"inputbox\">\n          </ion-input>\n          <div style=\"text-align: center;margin-top: 4%;\"> <button small (click)=\"updatePrice()\">Update Price</button>\n            <button small (click)=\"dismiss()\">Close</button>\n\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n\n<style>\n  button {\n    color: #fff;\n    margin: 5px;\n    background: #081f65;\n    padding:10px;\n    border-radius: 15px;\n    outline:none;\n  }\n</style>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_anonymousguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/anonymousguard.service */
    "./src/app/services/anonymousguard.service.ts");
    /* harmony import */


    var _authguard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authguard.guard */
    "./src/app/authguard.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      },
      canActivate: [_services_anonymousguard_service__WEBPACK_IMPORTED_MODULE_3__["AnonymousguardService"]]
    }, {
      path: 'categories/:shopId',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | categories-categories-module */
        "categories-categories-module").then(__webpack_require__.bind(null,
        /*! ./categories/categories.module */
        "./src/app/categories/categories.module.ts")).then(function (m) {
          return m.CategoriesPageModule;
        });
      },
      canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_4__["AuthguardGuard"]]
    }, {
      path: 'orders',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | orders-orders-module */
        [__webpack_require__.e("default~orders-orders-module~selectdelivery-boy-selectdelivery-boy-module"), __webpack_require__.e("orders-orders-module")]).then(__webpack_require__.bind(null,
        /*! ./orders/orders.module */
        "./src/app/orders/orders.module.ts")).then(function (m) {
          return m.OrdersPageModule;
        });
      },
      canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_4__["AuthguardGuard"]]
    }, {
      path: 'products',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | products-products-module */
        "products-products-module").then(__webpack_require__.bind(null,
        /*! ./products/products.module */
        "./src/app/products/products.module.ts")).then(function (m) {
          return m.ProductsPageModule;
        });
      },
      canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_4__["AuthguardGuard"]]
    }, {
      path: 'shops',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | shops-shops-module */
        "shops-shops-module").then(__webpack_require__.bind(null,
        /*! ./shops/shops.module */
        "./src/app/shops/shops.module.ts")).then(function (m) {
          return m.ShopsPageModule;
        });
      },
      canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_4__["AuthguardGuard"]]
    }, {
      path: 'shopdetails/:shop_id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | shopdetails-shopdetails-module */
        "shopdetails-shopdetails-module").then(__webpack_require__.bind(null,
        /*! ./shopdetails/shopdetails.module */
        "./src/app/shopdetails/shopdetails.module.ts")).then(function (m) {
          return m.ShopdetailsPageModule;
        });
      },
      canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_4__["AuthguardGuard"]]
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./profile/profile.module */
        "./src/app/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'settings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-settings-module */
        "settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./settings/settings.module */
        "./src/app/settings/settings.module.ts")).then(function (m) {
          return m.SettingsPageModule;
        });
      }
    }, {
      path: 'terms',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | terms-terms-module */
        [__webpack_require__.e("common"), __webpack_require__.e("terms-terms-module")]).then(__webpack_require__.bind(null,
        /*! ./terms/terms.module */
        "./src/app/terms/terms.module.ts")).then(function (m) {
          return m.TermsPageModule;
        });
      }
    }, {
      path: 'addproduct/:shop_id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | addproduct-addproduct-module */
        "addproduct-addproduct-module").then(__webpack_require__.bind(null,
        /*! ./addproduct/addproduct.module */
        "./src/app/addproduct/addproduct.module.ts")).then(function (m) {
          return m.AddproductPageModule;
        });
      }
    }, {
      path: 'orderdetails',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | orderdetails-orderdetails-module */
        "orderdetails-orderdetails-module").then(__webpack_require__.bind(null,
        /*! ./orderdetails/orderdetails.module */
        "./src/app/orderdetails/orderdetails.module.ts")).then(function (m) {
          return m.OrderdetailsPageModule;
        });
      }
    }, {
      path: 'vendor-dashboard/:shopId',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | vendor-dashboard-vendor-dashboard-module */
        "vendor-dashboard-vendor-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./vendor-dashboard/vendor-dashboard.module */
        "./src/app/vendor-dashboard/vendor-dashboard.module.ts")).then(function (m) {
          return m.VendorDashboardPageModule;
        });
      },
      canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_4__["AuthguardGuard"]]
    }, {
      path: 'vm-dashboard/:vmId',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | vm-dashboard-vm-dashboard-module */
        "vm-dashboard-vm-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./vm-dashboard/vm-dashboard.module */
        "./src/app/vm-dashboard/vm-dashboard.module.ts")).then(function (m) {
          return m.VmDashboardPageModule;
        });
      }
    }, {
      path: 'shop-profile/:shopId',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | shop-profile-shop-profile-module */
        "shop-profile-shop-profile-module").then(__webpack_require__.bind(null,
        /*! ./shop-profile/shop-profile.module */
        "./src/app/shop-profile/shop-profile.module.ts")).then(function (m) {
          return m.ShopProfilePageModule;
        });
      }
    }, {
      path: 'request-new-product/:shopId/:catId',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | request-new-product-request-new-product-module */
        "request-new-product-request-new-product-module").then(__webpack_require__.bind(null,
        /*! ./request-new-product/request-new-product.module */
        "./src/app/request-new-product/request-new-product.module.ts")).then(function (m) {
          return m.RequestNewProductPageModule;
        });
      }
    }, {
      path: 'payouts-commission',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | payouts-commission-payouts-commission-module */
        "payouts-commission-payouts-commission-module").then(__webpack_require__.bind(null,
        /*! ./payouts-commission/payouts-commission.module */
        "./src/app/payouts-commission/payouts-commission.module.ts")).then(function (m) {
          return m.PayoutsCommissionPageModule;
        });
      }
    }, {
      path: 'vendor-profile/:shopId',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | vendor-profile-vendor-profile-module */
        "vendor-profile-vendor-profile-module").then(__webpack_require__.bind(null,
        /*! ./vendor-profile/vendor-profile.module */
        "./src/app/vendor-profile/vendor-profile.module.ts")).then(function (m) {
          return m.VendorProfilePageModule;
        });
      }
    }, {
      path: 'location',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | location-location-module */
        "location-location-module").then(__webpack_require__.bind(null,
        /*! ./location/location.module */
        "./src/app/location/location.module.ts")).then(function (m) {
          return m.LocationPageModule;
        });
      }
    }, {
      path: 'editproduct',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | editproduct-editproduct-module */
        "editproduct-editproduct-module").then(__webpack_require__.bind(null,
        /*! ./editproduct/editproduct.module */
        "./src/app/editproduct/editproduct.module.ts")).then(function (m) {
          return m.EditproductPageModule;
        });
      }
    }, {
      path: 'productdetails',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | productdetails-productdetails-module */
        [__webpack_require__.e("common"), __webpack_require__.e("productdetails-productdetails-module")]).then(__webpack_require__.bind(null,
        /*! ./productdetails/productdetails.module */
        "./src/app/productdetails/productdetails.module.ts")).then(function (m) {
          return m.ProductdetailsPageModule;
        });
      }
    }, {
      path: 'addvariant',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | addvariant-addvariant-module */
        "addvariant-addvariant-module").then(__webpack_require__.bind(null,
        /*! ./addvariant/addvariant.module */
        "./src/app/addvariant/addvariant.module.ts")).then(function (m) {
          return m.AddvariantPageModule;
        });
      }
    }, {
      path: 'linkproducts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | linkproducts-linkproducts-module */
        "linkproducts-linkproducts-module").then(__webpack_require__.bind(null,
        /*! ./linkproducts/linkproducts.module */
        "./src/app/linkproducts/linkproducts.module.ts")).then(function (m) {
          return m.LinkproductsPageModule;
        });
      }
    }, {
      path: 'stock-management',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | stock-management-stock-management-module */
        "stock-management-stock-management-module").then(__webpack_require__.bind(null,
        /*! ./stock-management/stock-management.module */
        "./src/app/stock-management/stock-management.module.ts")).then(function (m) {
          return m.StockManagementPageModule;
        });
      }
    }, {
      path: 'productimages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | productimages-productimages-module */
        "productimages-productimages-module").then(__webpack_require__.bind(null,
        /*! ./productimages/productimages.module */
        "./src/app/productimages/productimages.module.ts")).then(function (m) {
          return m.ProductimagesPageModule;
        });
      }
    }, {
      path: 'updateprice',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | updateprice-updateprice-module */
        "updateprice-updateprice-module").then(__webpack_require__.bind(null,
        /*! ./updateprice/updateprice.module */
        "./src/app/updateprice/updateprice.module.ts")).then(function (m) {
          return m.UpdatepricePageModule;
        });
      }
    }, {
      path: 'forgotpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | forgotpassword-forgotpassword-module */
        "forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null,
        /*! ./forgotpassword/forgotpassword.module */
        "./src/app/forgotpassword/forgotpassword.module.ts")).then(function (m) {
          return m.ForgotpasswordPageModule;
        });
      }
    }, {
      path: 'resetpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | resetpassword-resetpassword-module */
        "resetpassword-resetpassword-module").then(__webpack_require__.bind(null,
        /*! ./resetpassword/resetpassword.module */
        "./src/app/resetpassword/resetpassword.module.ts")).then(function (m) {
          return m.ResetpasswordPageModule;
        });
      }
    }, {
      path: 'businesshours',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | businesshours-businesshours-module */
        "businesshours-businesshours-module").then(__webpack_require__.bind(null,
        /*! ./businesshours/businesshours.module */
        "./src/app/businesshours/businesshours.module.ts")).then(function (m) {
          return m.BusinesshoursPageModule;
        });
      }
    }, {
      path: 'userreviews',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | userreviews-userreviews-module */
        "userreviews-userreviews-module").then(__webpack_require__.bind(null,
        /*! ./userreviews/userreviews.module */
        "./src/app/userreviews/userreviews.module.ts")).then(function (m) {
          return m.UserreviewsPageModule;
        });
      }
    }, {
      path: 'editprofile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | editprofile-editprofile-module */
        "editprofile-editprofile-module").then(__webpack_require__.bind(null,
        /*! ./editprofile/editprofile.module */
        "./src/app/editprofile/editprofile.module.ts")).then(function (m) {
          return m.EditprofilePageModule;
        });
      }
    }, {
      path: 'sales',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sales-sales-module */
        "sales-sales-module").then(__webpack_require__.bind(null,
        /*! ./sales/sales.module */
        "./src/app/sales/sales.module.ts")).then(function (m) {
          return m.SalesPageModule;
        });
      }
    }, {
      path: 'shareapp',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | shareapp-shareapp-module */
        "shareapp-shareapp-module").then(__webpack_require__.bind(null,
        /*! ./shareapp/shareapp.module */
        "./src/app/shareapp/shareapp.module.ts")).then(function (m) {
          return m.ShareappPageModule;
        });
      }
    }, {
      path: 'vendorreviews',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | vendorreviews-vendorreviews-module */
        "vendorreviews-vendorreviews-module").then(__webpack_require__.bind(null,
        /*! ./vendorreviews/vendorreviews.module */
        "./src/app/vendorreviews/vendorreviews.module.ts")).then(function (m) {
          return m.VendorreviewsPageModule;
        });
      }
    }, {
      path: 'exchange',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | exchange-exchange-module */
        "exchange-exchange-module").then(__webpack_require__.bind(null,
        /*! ./exchange/exchange.module */
        "./src/app/exchange/exchange.module.ts")).then(function (m) {
          return m.ExchangePageModule;
        });
      }
    }, {
      path: 'vm-editprofile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | vm-editprofile-vm-editprofile-module */
        "vm-editprofile-vm-editprofile-module").then(__webpack_require__.bind(null,
        /*! ./vm-editprofile/vm-editprofile.module */
        "./src/app/vm-editprofile/vm-editprofile.module.ts")).then(function (m) {
          return m.VmEditprofilePageModule;
        });
      }
    }, {
      path: 'requestpayment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | requestpayment-requestpayment-module */
        "requestpayment-requestpayment-module").then(__webpack_require__.bind(null,
        /*! ./requestpayment/requestpayment.module */
        "./src/app/requestpayment/requestpayment.module.ts")).then(function (m) {
          return m.RequestpaymentPageModule;
        });
      }
    }, {
      path: 'addrequestpayment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | addrequestpayment-addrequestpayment-module */
        "addrequestpayment-addrequestpayment-module").then(__webpack_require__.bind(null,
        /*! ./addrequestpayment/addrequestpayment.module */
        "./src/app/addrequestpayment/addrequestpayment.module.ts")).then(function (m) {
          return m.AddrequestpaymentPageModule;
        });
      }
    }, {
      path: 'bid-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bid-list-bid-list-module */
        "bid-list-bid-list-module").then(__webpack_require__.bind(null,
        /*! ./bid-list/bid-list.module */
        "./src/app/bid-list/bid-list.module.ts")).then(function (m) {
          return m.BidListPageModule;
        });
      }
    }, {
      path: 'offer-banners',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | offer-banners-offer-banners-module */
        "offer-banners-offer-banners-module").then(__webpack_require__.bind(null,
        /*! ./offer-banners/offer-banners.module */
        "./src/app/offer-banners/offer-banners.module.ts")).then(function (m) {
          return m.OfferBannersPageModule;
        });
      }
    }, {
      path: 'coupons',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | coupons-coupons-module */
        "coupons-coupons-module").then(__webpack_require__.bind(null,
        /*! ./coupons/coupons.module */
        "./src/app/coupons/coupons.module.ts")).then(function (m) {
          return m.CouponsPageModule;
        });
      }
    }, {
      path: 'create-coupons',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | create-coupons-create-coupons-module */
        "create-coupons-create-coupons-module").then(__webpack_require__.bind(null,
        /*! ./create-coupons/create-coupons.module */
        "./src/app/create-coupons/create-coupons.module.ts")).then(function (m) {
          return m.CreateCouponsPageModule;
        });
      }
    }, {
      path: 'bid-product',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bid-product-bid-product-module */
        "bid-product-bid-product-module").then(__webpack_require__.bind(null,
        /*! ./bid-product/bid-product.module */
        "./src/app/bid-product/bid-product.module.ts")).then(function (m) {
          return m.BidProductPageModule;
        });
      }
    }, {
      path: 'create-banners',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | create-banners-create-banners-module */
        "create-banners-create-banners-module").then(__webpack_require__.bind(null,
        /*! ./create-banners/create-banners.module */
        "./src/app/create-banners/create-banners.module.ts")).then(function (m) {
          return m.CreateBannersPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | register-register-module */
        "register-register-module").then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'confirmregister',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | confirmregister-confirmregister-module */
        "confirmregister-confirmregister-module").then(__webpack_require__.bind(null,
        /*! ./confirmregister/confirmregister.module */
        "./src/app/confirmregister/confirmregister.module.ts")).then(function (m) {
          return m.ConfirmregisterPageModule;
        });
      }
    }, {
      path: 'otp',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | otp-otp-module */
        "otp-otp-module").then(__webpack_require__.bind(null,
        /*! ./otp/otp.module */
        "./src/app/otp/otp.module.ts")).then(function (m) {
          return m.OtpPageModule;
        });
      }
    }, {
      path: 'nointernet-page',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | nointernet-page-nointernet-page-module */
        "nointernet-page-nointernet-page-module").then(__webpack_require__.bind(null,
        /*! ./nointernet-page/nointernet-page.module */
        "./src/app/nointernet-page/nointernet-page.module.ts")).then(function (m) {
          return m.NointernetPagePageModule;
        });
      }
    }, {
      path: 'selectdelivery-boy',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selectdelivery-boy-selectdelivery-boy-module */
        [__webpack_require__.e("default~orders-orders-module~selectdelivery-boy-selectdelivery-boy-module"), __webpack_require__.e("selectdelivery-boy-selectdelivery-boy-module")]).then(__webpack_require__.bind(null,
        /*! ./selectdelivery-boy/selectdelivery-boy.module */
        "./src/app/selectdelivery-boy/selectdelivery-boy.module.ts")).then(function (m) {
          return m.SelectdeliveryBoyPageModule;
        });
      }
    }, {
      path: 'plans',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | plans-plans-module */
        "plans-plans-module").then(__webpack_require__.bind(null,
        /*! ./plans/plans.module */
        "./src/app/plans/plans.module.ts")).then(function (m) {
          return m.PlansPageModule;
        });
      }
    }, {
      path: 'subscriptions',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | subscriptions-subscriptions-module */
        "subscriptions-subscriptions-module").then(__webpack_require__.bind(null,
        /*! ./subscriptions/subscriptions.module */
        "./src/app/subscriptions/subscriptions.module.ts")).then(function (m) {
          return m.SubscriptionsPageModule;
        });
      }
    }, {
      path: 'mypackage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | mypackage-mypackage-module */
        "mypackage-mypackage-module").then(__webpack_require__.bind(null,
        /*! ./mypackage/mypackage.module */
        "./src/app/mypackage/mypackage.module.ts")).then(function (m) {
          return m.MypackagePageModule;
        });
      }
    }, {
      path: 'existingproduct',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | existingproduct-existingproduct-module */
        "existingproduct-existingproduct-module").then(__webpack_require__.bind(null,
        /*! ./existingproduct/existingproduct.module */
        "./src/app/existingproduct/existingproduct.module.ts")).then(function (m) {
          return m.ExistingproductPageModule;
        });
      }
    }, {
      path: 'offers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | offers-offers-module */
        "offers-offers-module").then(__webpack_require__.bind(null,
        /*! ./offers/offers.module */
        "./src/app/offers/offers.module.ts")).then(function (m) {
          return m.OffersPageModule;
        });
      }
    }, {
      path: 'addoffers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | addoffers-addoffers-module */
        "addoffers-addoffers-module").then(__webpack_require__.bind(null,
        /*! ./addoffers/addoffers.module */
        "./src/app/addoffers/addoffers.module.ts")).then(function (m) {
          return m.AddoffersPageModule;
        });
      }
    }, {
      path: 'existingoffers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | existingoffers-existingoffers-module */
        "existingoffers-existingoffers-module").then(__webpack_require__.bind(null,
        /*! ./existingoffers/existingoffers.module */
        "./src/app/existingoffers/existingoffers.module.ts")).then(function (m) {
          return m.ExistingoffersPageModule;
        });
      }
    }, {
      path: 'contactus',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contactus-contactus-module */
        "contactus-contactus-module").then(__webpack_require__.bind(null,
        /*! ./contactus/contactus.module */
        "./src/app/contactus/contactus.module.ts")).then(function (m) {
          return m.ContactusPageModule;
        });
      }
    }, {
      path: 'updateversion',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | updateversion-updateversion-module */
        "updateversion-updateversion-module").then(__webpack_require__.bind(null,
        /*! ./updateversion/updateversion.module */
        "./src/app/updateversion/updateversion.module.ts")).then(function (m) {
          return m.UpdateversionPageModule;
        });
      }
    }, {
      path: 'subcategories',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | subcategories-subcategories-module */
        "subcategories-subcategories-module").then(__webpack_require__.bind(null,
        /*! ./subcategories/subcategories.module */
        "./src/app/subcategories/subcategories.module.ts")).then(function (m) {
          return m.SubcategoriesPageModule;
        });
      }
    }, {
      path: 'clone-subcategories',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | clone-subcategories-clone-subcategories-module */
        "clone-subcategories-clone-subcategories-module").then(__webpack_require__.bind(null,
        /*! ./clone-subcategories/clone-subcategories.module */
        "./src/app/clone-subcategories/clone-subcategories.module.ts")).then(function (m) {
          return m.CloneSubcategoriesPageModule;
        });
      }
    }, {
      path: 'filter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | filter-filter-module */
        "filter-filter-module").then(__webpack_require__.bind(null,
        /*! ./filter/filter.module */
        "./src/app/filter/filter.module.ts")).then(function (m) {
          return m.FilterPageModule;
        });
      }
    }, {
      path: 'clone-categorieslist',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | clone-categorieslist-clone-categorieslist-module */
        "clone-categorieslist-clone-categorieslist-module").then(__webpack_require__.bind(null,
        /*! ./clone-categorieslist/clone-categorieslist.module */
        "./src/app/clone-categorieslist/clone-categorieslist.module.ts")).then(function (m) {
          return m.CloneCategorieslistPageModule;
        });
      }
    }, {
      path: 'brandfilter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | brandfilter-brandfilter-module */
        "brandfilter-brandfilter-module").then(__webpack_require__.bind(null,
        /*! ./brandfilter/brandfilter.module */
        "./src/app/brandfilter/brandfilter.module.ts")).then(function (m) {
          return m.BrandfilterPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md::after {\n  background-image: none;\n}\n\n.sidemenu {\n  padding: 0px;\n}\n\n.sidemenu ion-icon {\n  color: #f4791f;\n}\n\n.logo_white {\n  width: 70%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxzQkFBQTtBQ05KOztBRFFBO0VBQ0ksWUFBQTtBQ0xKOztBRE1JO0VBQ0ksY0FBQTtBQ0pSOztBRE9BO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW1lbnVUb29sYmFye1xuICAgIC8vIC0tYmFja2dyb3VuZDogI2Y0NzkxZjtcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYjY1YzE4ICwgI2Y0NzkxZik7XG4gICAgLy8tLWJhY2tncm91bmQ6IzA1Mjc0ZDtcbiAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgIC8vIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmU7XG59XG4uc2lkZW1lbnV7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjojZjQ3OTFmO1xuICAgIH1cbn1cbi5sb2dvX3doaXRle1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSIsIi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuLnNpZGVtZW51IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNpZGVtZW51IGlvbi1pY29uIHtcbiAgY29sb3I6ICNmNDc5MWY7XG59XG5cbi5sb2dvX3doaXRlIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_globalevents_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/globalevents.service */
    "./src/app/services/globalevents.service.ts");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _nointernet_page_nointernet_page_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nointernet-page/nointernet-page.page */
    "./src/app/nointernet-page/nointernet-page.page.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, GlobalEvents, router, util, network, alertCtrl, modalController, oneSignal, apiserv, navctrl, appVersion, Renderer2) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.GlobalEvents = GlobalEvents;
        this.router = router;
        this.util = util;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.oneSignal = oneSignal;
        this.apiserv = apiserv;
        this.navctrl = navctrl;
        this.appVersion = appVersion;
        this.Renderer2 = Renderer2;
        this.vendor_id = localStorage.getItem('fash_user_id');
        this.sidemenu();
        this.initializeApp();
        this.backb();
        this.isLoggedIn = localStorage.getItem('fash_user_id') ? true : false;
        var uType = localStorage.getItem('fash_user_type');

        if (uType) {
          this.userId = localStorage.getItem('fash_user_id');
          this.userType = uType;

          if (this.userType == 'visual_merchant') {
            this.userTypeText = 'Visual Merchant';
          }

          if (this.userType == 'vendor') {
            this.userTypeText = 'Vendor';
          }
        }

        this.name = localStorage.getItem('name') ? localStorage.getItem('name') : '';
        this.mobile = localStorage.getItem('mobile') ? localStorage.getItem('mobile') : '';
        this.image = localStorage.getItem('image');
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
          _this.presentContactModal();
        });
      }

      _createClass(AppComponent, [{
        key: "presentContactModal",
        value: function presentContactModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _nointernet_page_nointernet_page_page__WEBPACK_IMPORTED_MODULE_9__["NointernetPagePage"],
                      componentProps: {}
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {});
                    _context.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "backb",
        value: function backb() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.back_subscription = _this2.platform.backButton.subscribe(function () {
              //alert(JSON.stringify(this.router.url));
              if (_this2.router.url == '/vendor-dashboard/' + _this2.userId) {
                _this2.exitApp_confirm(); //return;
                //navigator['app'].exitApp();

              } else if (_this2.router.url == '/requestpayment' || _this2.router.url == 'requestpayment') {
                _this2.router.navigate(['/vendor-dashboard', _this2.userId], {
                  state: {}
                });
              } else {
                window.history.back();
              }
            });
          });
        }
      }, {
        key: "exitApp_confirm",
        value: function exitApp_confirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var exitApp_confirm_alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: 'Confirm!',
                      message: 'Do you really want to exit the app?',
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(data) {
                          navigator['app'].exitApp();
                        }
                      }, {
                        text: 'Cancel',
                        handler: function handler() {
                          _this3.alertCtrl.dismiss();
                        }
                      }]
                    });

                  case 2:
                    exitApp_confirm_alert = _context2.sent;
                    _context2.next = 5;
                    return exitApp_confirm_alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this4 = this;

          this.platform.ready().then(function () {
            _this4.Renderer2.setAttribute(document.body, 'color-scheme', 'light');

            _this4.prepareOnesignal(); //this.statusBar.hide();


            _this4.statusBar.backgroundColorByHexString('#05274d');

            _this4.splashScreen.hide();

            _this4.listenEvents();
          });
          this.updateAppVersion();
        }
      }, {
        key: "updateAppVersion",
        value: function updateAppVersion() {
          var _this5 = this;

          var appVersion = '0.0.3';
          var banObj = {
            action: "version_control"
          };
          this.apiserv.updateVersion(function (response) {
            console.log(response);

            if (response['status'] == true) {
              _this5.currentversion = response['veersion_no'];

              if (appVersion == _this5.currentversion) {// this.navctrl.navigateForward('/home');
              } else {
                _this5.navctrl.navigateForward('/updateversion');
              }
            }
          }, banObj);
        }
      }, {
        key: "sidemenu",
        value: function sidemenu() {
          this.vendorMenu = [{
            title: "Home",
            url: "/vendor-dashboard/" + this.userId,
            icon: "home"
          }, {
            title: "Subscription",
            url: "/plans",
            icon: "list-circle"
          }, {
            title: "My Orders",
            url: "/orders",
            icon: "cart"
          }, {
            title: "Coupon Codes",
            url: "/coupons",
            icon: "cart"
          }, {
            title: "Add offer",
            url: "/offers",
            icon: "list-circle"
          },
          /* {
             title: "Banners",
             url: "/offer-banners",
             icon: "cart"
           }, */
          {
            title: "User Reviews",
            url: "/userreviews",
            icon: "globe"
          }, {
            title: "Sales Report",
            url: "/sales",
            icon: "globe"
          }, {
            title: "My Packages",
            url: "/mypackage",
            icon: "list-circle"
          }, {
            title: "Share App",
            url: "/shareapp",
            icon: "globe"
          }, {
            title: "Payout Commission",
            url: "/payouts-commission",
            icon: "cash"
          }, {
            title: "Request Amount",
            url: "/requestpayment",
            icon: "cash"
          }, {
            title: "Exchange Orders",
            url: "/exchange",
            icon: "list-circle"
          }, {
            title: "Terms & Conditions",
            url: "/terms",
            icon: "list-circle"
          }, {
            title: "Change Password",
            url: "/settings",
            icon: "settings"
          }, {
            title: "Contact Us",
            url: "/contactus",
            icon: "list-circle"
          }];
        }
      }, {
        key: "listenEvents",
        value: function listenEvents() {
          var _this6 = this;

          this.GlobalEvents.getObservable().subscribe(function (data) {
            if (data['loggedIn']) {
              _this6.isLoggedIn = data['loggedIn'];
            }

            if (data['user_type']) {
              _this6.userType = data['user_type'];

              if (_this6.userType == 'vendor') {
                _this6.userTypeText = 'Vendor';
              }
            }

            if (data['name']) {
              _this6.name = data['name'];
            }

            if (data['mobile']) {
              _this6.mobile = data['mobile'];
            }

            if (data['userId']) {
              _this6.userId = data['userId'];
            }

            if (data['image']) {
              _this6.image = data['image'];
            }

            _this6.sidemenu();
          });
        }
      }, {
        key: "prepareOnesignal",
        value: function prepareOnesignal() {
          var _this7 = this;

          this.oneSignal.startInit('9099ede7-453b-4a72-b836-6cacea4a5bb1', '');
          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
          this.oneSignal.handleNotificationReceived().subscribe(function (notiData) {
            _this7.pushPayload = notiData;
            var postData = notiData.payload.additionalData; //alert(JSON.stringify(this.router.url));

            _this7.router.navigate(['/orders']);
          });
          this.oneSignal.getIds().then(function (id) {
            //alert(JSON.stringify(id.userId));
            // alert(JSON.stringify(id.pushToken));
            console.log('ONE SIGNAL user id: ' + id.userId);
            console.log('ONE SIGNAL PUSH TOKEN: ' + id.pushToken);
            localStorage.setItem('token', id.userId);
            _this7.tokenId = localStorage.getItem('token');
          });
          this.oneSignal.endInit();
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('fash_user_id');
          localStorage.removeItem('fash_user_type');
          localStorage.removeItem('name');
          localStorage.removeItem('mobile');
          localStorage.removeItem('image');
          this.isLoggedIn = false;
          this.userType = '';
          this.name = '';
          this.mobile = '';
          this.image = '';
          this.router.navigate(['/login'], {
            state: {}
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _services_globalevents_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _modals_shop_popover_shop_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./modals/shop-popover/shop-popover.component */
    "./src/app/modals/shop-popover/shop-popover.component.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _stock_management_stock_management_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./stock-management/stock-management.page */
    "./src/app/stock-management/stock-management.page.ts");
    /* harmony import */


    var _updateprice_updateprice_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./updateprice/updateprice.page */
    "./src/app/updateprice/updateprice.page.ts");
    /* harmony import */


    var _forgotpassword_forgotpassword_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./forgotpassword/forgotpassword.page */
    "./src/app/forgotpassword/forgotpassword.page.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _filter_filter_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./filter/filter.page */
    "./src/app/filter/filter.page.ts");
    /* harmony import */


    var _brandfilter_brandfilter_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./brandfilter/brandfilter.page */
    "./src/app/brandfilter/brandfilter.page.ts");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _modals_shop_popover_shop_popover_component__WEBPACK_IMPORTED_MODULE_10__["ShopPopoverComponent"], _stock_management_stock_management_page__WEBPACK_IMPORTED_MODULE_13__["StockManagementPage"], _updateprice_updateprice_page__WEBPACK_IMPORTED_MODULE_14__["UpdatepricePage"], _forgotpassword_forgotpassword_page__WEBPACK_IMPORTED_MODULE_15__["ForgotpasswordPage"], _filter_filter_page__WEBPACK_IMPORTED_MODULE_23__["FilterPage"], _brandfilter_brandfilter_page__WEBPACK_IMPORTED_MODULE_24__["BrandfilterPage"]],
      entryComponents: [_modals_shop_popover_shop_popover_component__WEBPACK_IMPORTED_MODULE_10__["ShopPopoverComponent"], _stock_management_stock_management_page__WEBPACK_IMPORTED_MODULE_13__["StockManagementPage"], _updateprice_updateprice_page__WEBPACK_IMPORTED_MODULE_14__["UpdatepricePage"], _forgotpassword_forgotpassword_page__WEBPACK_IMPORTED_MODULE_15__["ForgotpasswordPage"], _filter_filter_page__WEBPACK_IMPORTED_MODULE_23__["FilterPage"], _brandfilter_brandfilter_page__WEBPACK_IMPORTED_MODULE_24__["BrandfilterPage"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_25__["NgxIonicImageViewerModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__["FileTransfer"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_19__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__["Crop"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_20__["Network"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_21__["OneSignal"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__["AppVersion"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authguard.guard.ts":
  /*!************************************!*\
    !*** ./src/app/authguard.guard.ts ***!
    \************************************/

  /*! exports provided: AuthguardGuard */

  /***/
  function srcAppAuthguardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function () {
      return AuthguardGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AuthguardGuard = /*#__PURE__*/function () {
      function AuthguardGuard(navCtrl) {
        _classCallCheck(this, AuthguardGuard);

        this.navCtrl = navCtrl;
      }

      _createClass(AuthguardGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var is_logged_in = localStorage.getItem('fash_user_id');

          if (!is_logged_in) {
            this.navCtrl.navigateForward('/login');
            return false;
          } else {
            //this.navCtrl.navigateForward('/vendor-dashboard/'+is_logged_in);
            return true;
          }
        }
      }]);

      return AuthguardGuard;
    }();

    AuthguardGuard.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AuthguardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthguardGuard);
    /***/
  },

  /***/
  "./src/app/brandfilter/brandfilter.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/brandfilter/brandfilter.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBrandfilterBrandfilterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #fff !important;\n}\n\nion-segment {\n  display: block;\n}\n\n.group {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  background: white;\n}\n\n.group .size-filter {\n  margin-bottom: 0.6rem;\n}\n\n.group .size-filter .slid-container {\n  width: 52rem;\n  padding: 1rem 0;\n  display: flex;\n}\n\n.group .size-filter .slid-container .active {\n  background: #3b6098;\n  color: white;\n}\n\n.group .type-filter,\n.group .size-filter {\n  width: 100%;\n  overflow: auto;\n  background: #fff;\n}\n\n.group .type-filter span,\n.group .size-filter span {\n  height: 4.5rem;\n  background: #e3e3e3;\n  display: inline-block;\n  margin-left: 1rem;\n  line-height: 4.5rem;\n  width: 4.5rem;\n  border-radius: 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 500;\n  display: flex;\n  justify-content: center;\n}\n\n.group .type-filter .slid-container {\n  width: 42rem;\n  padding: 1rem 0;\n  display: flex;\n}\n\n.group .type-filter .slid-container span {\n  border-radius: 50px;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  display: flex;\n}\n\n.group .type-filter .slid-container .active {\n  background: #3b6098;\n  color: white;\n}\n\n.content {\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.content .scroll-content {\n  overflow: hidden;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col ion-button {\n  font-size: 16px;\n}\n\n.sub_cat {\n  margin-left: 15px;\n}\n\n.sub_subcat {\n  margin-left: 15px;\n}\n\n.checkbox .checkbox-checked {\n  border-color: #ffd300;\n  background-color: #ffd300;\n}\n\n.sub_cat .item.item .checkbox {\n  margin: 9px 20px 9px 4px;\n}\n\n.footer {\n  background-color: #05274d;\n  min-height: 2em;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmRmaWx0ZXIvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcYnJhbmRmaWx0ZXJcXGJyYW5kZmlsdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnJhbmRmaWx0ZXIvYnJhbmRmaWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNRLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0dSOztBRERRO0VBQ0kscUJBQUE7QUNHWjs7QURGWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0loQjs7QURGZ0I7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNJcEI7O0FEQ1E7O0VBRUksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NaOztBREFZOztFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNHaEI7O0FERVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQ3BCOztBREVnQjtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0FwQjs7QURLSTtFQUNJLDhCQUFBO0FDRlI7O0FER1E7RUFDSSxnQkFBQTtBQ0RaOztBREtJO0VBQ0ksa0JBQUE7QUNGUjs7QURJUTtFQUNJLGVBQUE7QUNGWjs7QURPSTtFQUFTLGlCQUFBO0FDSGI7O0FESUE7RUFBWSxpQkFBQTtBQ0FaOztBRENBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFBO0VBQWtDLHdCQUFBO0FDSWxDOztBRERJO0VBQ0YseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvYnJhbmRmaWx0ZXIvYnJhbmRmaWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXNlZ21lbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4uZ3JvdXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgICAgIC5zaXplLWZpbHRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC42cmVtO1xyXG4gICAgICAgICAgICAuc2xpZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUycmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzYjYwOTg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHlwZS1maWx0ZXIsXHJcbiAgICAgICAgLnNpemUtZmlsdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNC41cmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0LjVyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudHlwZS1maWx0ZXIge1xyXG4gICAgICAgICAgICAuc2xpZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQycmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzNiNjA5ODtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb2x7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc3ViX2NhdHttYXJnaW4tbGVmdDogMTVweDt9XHJcbi5zdWJfc3ViY2F0e21hcmdpbi1sZWZ0OiAxNXB4O31cclxuLmNoZWNrYm94IC5jaGVja2JveC1jaGVja2VkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZDMwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQzMDA7XHJcbn1cclxuLnN1Yl9jYXQgLml0ZW0uaXRlbSAuY2hlY2tib3h7ICAgIG1hcmdpbjogOXB4IDIwcHggOXB4IDRweDt9XHJcblxyXG5cclxuICAgIC5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1Mjc0ZDtcclxuICBtaW4taGVpZ2h0OiAyZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdyb3VwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5ncm91cCAuc2l6ZS1maWx0ZXIge1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG59XG4uZ3JvdXAgLnNpemUtZmlsdGVyIC5zbGlkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MnJlbTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdyb3VwIC5zaXplLWZpbHRlciAuc2xpZC1jb250YWluZXIgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMzYjYwOTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ncm91cCAudHlwZS1maWx0ZXIsXG4uZ3JvdXAgLnNpemUtZmlsdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmdyb3VwIC50eXBlLWZpbHRlciBzcGFuLFxuLmdyb3VwIC5zaXplLWZpbHRlciBzcGFuIHtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiA0LjVyZW07XG4gIHdpZHRoOiA0LjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdyb3VwIC50eXBlLWZpbHRlciAuc2xpZC1jb250YWluZXIge1xuICB3aWR0aDogNDJyZW07XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ncm91cCAudHlwZS1maWx0ZXIgLnNsaWQtY29udGFpbmVyIHNwYW4ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ncm91cCAudHlwZS1maWx0ZXIgLnNsaWQtY29udGFpbmVyIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjM2I2MDk4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLmNvbnRlbnQgLnNjcm9sbC1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnN1Yl9jYXQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnN1Yl9zdWJjYXQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNoZWNrYm94IC5jaGVja2JveC1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZkMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkMzAwO1xufVxuXG4uc3ViX2NhdCAuaXRlbS5pdGVtIC5jaGVja2JveCB7XG4gIG1hcmdpbjogOXB4IDIwcHggOXB4IDRweDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTI3NGQ7XG4gIG1pbi1oZWlnaHQ6IDJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/brandfilter/brandfilter.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/brandfilter/brandfilter.page.ts ***!
    \*************************************************/

  /*! exports provided: BrandfilterPage */

  /***/
  function srcAppBrandfilterBrandfilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandfilterPage", function () {
      return BrandfilterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");

    var BrandfilterPage = /*#__PURE__*/function () {
      function BrandfilterPage(router, actRoute, modalController, menu, loadingController, util, api, navParams) {
        _classCallCheck(this, BrandfilterPage);

        this.router = router;
        this.actRoute = actRoute;
        this.modalController = modalController;
        this.menu = menu;
        this.loadingController = loadingController;
        this.util = util;
        this.api = api;
        this.size = [];
        this.attribute = [];
        this.selectedArray = [];
        this.selectedFilters = [];
        this.attributeValues = [];
        this.newArray = [];
        this.shopId = navParams.get('shopId');
        this.catId = navParams.get('catId');
        this.subcatId = navParams.get('subcatId');
      }

      _createClass(BrandfilterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentSegment = 'brands';
          this.getproductBrands();
        }
      }, {
        key: "getproductBrands",
        value: function getproductBrands() {
          var _this8 = this;

          var brandObj = {
            action: "getBrands",
            subcatid: this.subcatId
          };
          this.api.getBrands(function (response) {
            if (response.status == true) {
              _this8.brands = response.brands;
            } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
          }, brandObj);
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "selectAttrVal",
        value: function selectAttrVal(ev, data) {
          if (ev.target.checked) {
            // Pushing the object into array
            this.newArray.push(data);
          } else {
            var removeIndex = this.newArray.findIndex(function (itm) {
              return itm === data;
            });
            if (removeIndex !== -1) this.newArray.splice(removeIndex, 1);
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.getproductBrands();
          this.newArray = [];
        }
      }, {
        key: "apply",
        value: function apply() {
          this.modalController.dismiss({
            action: 'filterApply',
            json_data: this.newArray
          });
        }
      }, {
        key: "variationChange",
        value: function variationChange(val) {
          this.variation = val;
        }
      }]);

      return BrandfilterPage;
    }();

    BrandfilterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    })], BrandfilterPage.prototype, "content", void 0);
    BrandfilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brandfilter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./brandfilter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/brandfilter/brandfilter.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./brandfilter.page.scss */
      "./src/app/brandfilter/brandfilter.page.scss"))["default"]]
    })], BrandfilterPage);
    /***/
  },

  /***/
  "./src/app/filter/filter.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/filter/filter.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFilterFilterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #fff !important;\n}\n\nion-segment {\n  display: block;\n}\n\n.group {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  background: white;\n}\n\n.group .size-filter {\n  margin-bottom: 0.6rem;\n}\n\n.group .size-filter .slid-container {\n  width: 52rem;\n  padding: 1rem 0;\n  display: flex;\n}\n\n.group .size-filter .slid-container .active {\n  background: #3b6098;\n  color: white;\n}\n\n.group .type-filter,\n.group .size-filter {\n  width: 100%;\n  overflow: auto;\n  background: #fff;\n}\n\n.group .type-filter span,\n.group .size-filter span {\n  height: 4.5rem;\n  background: #e3e3e3;\n  display: inline-block;\n  margin-left: 1rem;\n  line-height: 4.5rem;\n  width: 4.5rem;\n  border-radius: 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 500;\n  display: flex;\n  justify-content: center;\n}\n\n.group .type-filter .slid-container {\n  width: 42rem;\n  padding: 1rem 0;\n  display: flex;\n}\n\n.group .type-filter .slid-container span {\n  border-radius: 50px;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  display: flex;\n}\n\n.group .type-filter .slid-container .active {\n  background: #3b6098;\n  color: white;\n}\n\n.content {\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.content .scroll-content {\n  overflow: hidden;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col ion-button {\n  font-size: 16px;\n}\n\n.sub_cat {\n  margin-left: 15px;\n}\n\n.sub_subcat {\n  margin-left: 15px;\n}\n\n.checkbox .checkbox-checked {\n  border-color: #ffd300;\n  background-color: #ffd300;\n}\n\n.sub_cat .item.item .checkbox {\n  margin: 9px 20px 9px 4px;\n}\n\n.footer {\n  background-color: #05274d;\n  min-height: 2em;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXGZpbHRlclxcZmlsdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQ0NGOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ1Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDR1I7O0FERFE7RUFDSSxxQkFBQTtBQ0daOztBREZZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSWhCOztBREZnQjtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0lwQjs7QURDUTs7RUFFSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ1o7O0FEQVk7O0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0doQjs7QURFWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0FoQjs7QURDZ0I7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDcEI7O0FERWdCO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQXBCOztBREtJO0VBQ0ksOEJBQUE7QUNGUjs7QURHUTtFQUNJLGdCQUFBO0FDRFo7O0FES0k7RUFDSSxrQkFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtBQ0ZaOztBRE9JO0VBQVMsaUJBQUE7QUNIYjs7QURJQTtFQUFZLGlCQUFBO0FDQVo7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUE7RUFBa0Msd0JBQUE7QUNJbEM7O0FEREk7RUFDRix5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXIvZmlsdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuLmdyb3VwIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICAgICAgICAuc2l6ZS1maWx0ZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcclxuICAgICAgICAgICAgLnNsaWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MnJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2I2MDk4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnR5cGUtZmlsdGVyLFxyXG4gICAgICAgIC5zaXplLWZpbHRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQuNXJlbTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0LjVyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNC41cmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnR5cGUtZmlsdGVyIHtcclxuICAgICAgICAgICAgLnNsaWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MnJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzYjYwOTg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnN1Yl9jYXR7bWFyZ2luLWxlZnQ6IDE1cHg7fVxyXG4uc3ViX3N1YmNhdHttYXJnaW4tbGVmdDogMTVweDt9XHJcbi5jaGVja2JveCAuY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmQzMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkMzAwO1xyXG59XHJcbi5zdWJfY2F0IC5pdGVtLml0ZW0gLmNoZWNrYm94eyAgICBtYXJnaW46IDlweCAyMHB4IDlweCA0cHg7fVxyXG5cclxuXHJcbiAgICAuZm9vdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTI3NGQ7XHJcbiAgbWluLWhlaWdodDogMmVtO1xyXG4gIGhlaWdodDogYXV0bztcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ncm91cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uZ3JvdXAgLnNpemUtZmlsdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xufVxuLmdyb3VwIC5zaXplLWZpbHRlciAuc2xpZC1jb250YWluZXIge1xuICB3aWR0aDogNTJyZW07XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ncm91cCAuc2l6ZS1maWx0ZXIgLnNsaWQtY29udGFpbmVyIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjM2I2MDk4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uZ3JvdXAgLnR5cGUtZmlsdGVyLFxuLmdyb3VwIC5zaXplLWZpbHRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5ncm91cCAudHlwZS1maWx0ZXIgc3Bhbixcbi5ncm91cCAuc2l6ZS1maWx0ZXIgc3BhbiB7XG4gIGhlaWdodDogNC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBsaW5lLWhlaWdodDogNC41cmVtO1xuICB3aWR0aDogNC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5ncm91cCAudHlwZS1maWx0ZXIgLnNsaWQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQycmVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZ3JvdXAgLnR5cGUtZmlsdGVyIC5zbGlkLWNvbnRhaW5lciBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZ3JvdXAgLnR5cGUtZmlsdGVyIC5zbGlkLWNvbnRhaW5lciAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzNiNjA5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5jb250ZW50IC5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29sIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zdWJfY2F0IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5zdWJfc3ViY2F0IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5jaGVja2JveCAuY2hlY2tib3gtY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZDMwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDMwMDtcbn1cblxuLnN1Yl9jYXQgLml0ZW0uaXRlbSAuY2hlY2tib3gge1xuICBtYXJnaW46IDlweCAyMHB4IDlweCA0cHg7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyNzRkO1xuICBtaW4taGVpZ2h0OiAyZW07XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/filter/filter.page.ts":
  /*!***************************************!*\
    !*** ./src/app/filter/filter.page.ts ***!
    \***************************************/

  /*! exports provided: FilterPage */

  /***/
  function srcAppFilterFilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPage", function () {
      return FilterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");

    var FilterPage = /*#__PURE__*/function () {
      function FilterPage(router, actRoute, modalController, menu, loadingController, util, api, navParams) {
        _classCallCheck(this, FilterPage);

        this.router = router;
        this.actRoute = actRoute;
        this.modalController = modalController;
        this.menu = menu;
        this.loadingController = loadingController;
        this.util = util;
        this.api = api;
        this.size = [];
        this.attribute = [];
        this.selectedArray = [];
        this.selectedFilters = [];
        this.attributeValues = [];
        this.newArray = [];
        this.shopId = navParams.get('shopId');
        this.catId = navParams.get('catId');
        this.subcatId = navParams.get('subcatId');
      }

      _createClass(FilterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentSegment = 'brands';
          this.getproductBrands();
        }
      }, {
        key: "getproductBrands",
        value: function getproductBrands() {
          var _this9 = this;

          var brandObj = {
            action: "getBrands",
            subcatid: this.subcatId
          };
          this.api.getBrands(function (response) {
            if (response.status == true) {
              _this9.brands = response.brands;
            } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
          }, brandObj);
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.getproductBrands();
          this.newArray = [];
        }
      }, {
        key: "selectAttrVal",
        value: function selectAttrVal(ev, data) {
          if (ev.target.checked) {
            // Pushing the object into array
            this.newArray.push(data);
          } else {
            var removeIndex = this.newArray.findIndex(function (itm) {
              return itm === data;
            });
            if (removeIndex !== -1) this.newArray.splice(removeIndex, 1);
          }
        }
      }, {
        key: "apply",
        value: function apply() {
          this.modalController.dismiss({
            action: 'filterApply',
            json_data: this.newArray
          });
        }
      }, {
        key: "variationChange",
        value: function variationChange(val) {
          this.variation = val;
        }
      }]);

      return FilterPage;
    }();

    FilterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    })], FilterPage.prototype, "content", void 0);
    FilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filter.page.scss */
      "./src/app/filter/filter.page.scss"))["default"]]
    })], FilterPage);
    /***/
  },

  /***/
  "./src/app/forgotpassword/forgotpassword.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgotpasswordForgotpasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".addvariantbox ion-label {\n  margin-left: 20px;\n  font-size: 15px;\n  font-weight: 600;\n}\n.addvariantbox ion-input {\n  width: 90%;\n  border: 1px solid #cac6c6;\n  margin: 5px 15px;\n  border-radius: 5px;\n}\n.addvariantbox button {\n  margin: 5px;\n  color: #fff;\n  background: #05274d;\n  padding: 10px 10px;\n  border-radius: 4px;\n}\nh3 {\n  margin-left: 20px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.acceptmodal {\n  border-radius: 30px 30px 3px 2px;\n  padding: 3px;\n  background: #05274d;\n}\n.acceptmodal h4 {\n  color: #fff;\n  text-align: center;\n  font-size: 15px;\n  line-height: 24px;\n}\n.inputbox {\n  border: 1px solid #e8e7e7;\n  --background: #e8e7e7;\n  border-radius: 6px;\n  margin-top: 3px;\n}\n.inputselect {\n  border: 1px solid #e8e7e7;\n  background: #e8e7e7;\n  border-radius: 6px;\n  margin-top: 3px;\n}\n.ion-model {\n  --background:#05274d;\n}\n.quickmodelinput {\n  color: #fff;\n  --background: none;\n  border-bottom: 1px solid #fff;\n}\n.modalbox1 {\n  margin: 33% 7%;\n  background: #fff;\n  border-radius: 30px;\n  padding: 0px;\n}\n.modelboxinput {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcZm9yZ290cGFzc3dvcmRcXGZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDSixlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdRO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RaO0FES0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hSO0FETUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUE7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRElJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FESUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRE47QURJSTtFQUNJLG9CQUFBO0FDRFI7QURJUTtFQUNFLFdBQUE7RUFDRCxrQkFBQTtFQUNBLDZCQUFBO0FDRFQ7QURHUTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER1E7RUFDQSxXQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkdmFyaWFudGJveCB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhYzZjNjtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICB9XG4gICAgXG4gICBcbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNTI3NGQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbn1cbmgzIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFjY2VwdG1vZGFsIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggM3B4IDJweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYmFja2dyb3VuZDojMDUyNzRkO1xuICB9XG4gIC5hY2NlcHRtb2RhbCBoNCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuICAgIC5pbnB1dGJveCB7ICBcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU3ZTc7XG4gICAgICAtLWJhY2tncm91bmQ6ICNlOGU3ZTc7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICBcbiAgICAuaW5wdXRzZWxlY3Qge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZTdlNztcbiAgICAgIGJhY2tncm91bmQ6ICNlOGU3ZTc7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICBcbiAgICAuaW9uLW1vZGVsIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMwNTI3NGQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5xdWlja21vZGVsaW5wdXQge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGFsYm94MSB7ICBcbiAgICAgICAgbWFyZ2luOiAzMyUgNyU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1vZGVsYm94aW5wdXQge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAiLCIuYWRkdmFyaWFudGJveCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFkZHZhcmlhbnRib3ggaW9uLWlucHV0IHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhYzZjNjtcbiAgbWFyZ2luOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZHZhcmlhbnRib3ggYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaDMge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYWNjZXB0bW9kYWwge1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggM3B4IDJweDtcbiAgcGFkZGluZzogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xufVxuXG4uYWNjZXB0bW9kYWwgaDQge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uaW5wdXRib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlN2U3O1xuICAtLWJhY2tncm91bmQ6ICNlOGU3ZTc7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uaW5wdXRzZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlN2U3O1xuICBiYWNrZ3JvdW5kOiAjZThlN2U3O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmlvbi1tb2RlbCB7XG4gIC0tYmFja2dyb3VuZDojMDUyNzRkO1xufVxuXG4ucXVpY2ttb2RlbGlucHV0IHtcbiAgY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5tb2RhbGJveDEge1xuICBtYXJnaW46IDMzJSA3JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubW9kZWxib3hpbnB1dCB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/forgotpassword/forgotpassword.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
    \*******************************************************/

  /*! exports provided: ForgotpasswordPage */

  /***/
  function srcAppForgotpasswordForgotpasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function () {
      return ForgotpasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_globalevents_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/globalevents.service */
    "./src/app/services/globalevents.service.ts");

    var ForgotpasswordPage = /*#__PURE__*/function () {
      function ForgotpasswordPage(util, actRoute, router, api, popoverController, modalController, navParams, globalEvents) {
        _classCallCheck(this, ForgotpasswordPage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.globalEvents = globalEvents;
        this.user_type = navParams.get('user_type');

        if (this.user_type == 'visual_merchant') {
          this.show_logintype = "Visual Merchant";
        } else {
          this.show_logintype = "Vendor";
        }
      }

      _createClass(ForgotpasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.otpscreen = 'false';
          this.mobilescreen = 'true'; //alert(his.otpscreen); alert(his.mobilescreen);
        }
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          var _this10 = this;

          this.otp = $("#otp").val();
          this.new_password = $("#new_password").val();
          this.confirm_password = $("#confirm_password").val();

          if (this.otp == undefined || this.otp == '') {
            this.util.presentToast("Enter OTP", 'danger', 'bottom', 2500);
          } else if (this.new_password == undefined || this.new_password == '') {
            this.util.presentToast("Enter New Password", 'danger', 'bottom', 2500);
          } else if (this.confirm_password == undefined || this.confirm_password == '') {
            this.util.presentToast("Enter Confirm Password", 'danger', 'bottom', 2500);
          } else if (this.new_password != this.confirm_password) {
            this.util.presentToast("Password Mismatched", 'danger', 'bottom', 2500);
          } else {
            var resetObj = {
              action: "resetPassword",
              otp: this.otp,
              user_type: this.user_type,
              password: this.new_password,
              phone: this.phone
            };
            this.util.showLoader();
            this.api.checkresetPassword(function (response) {
              _this10.util.hideLoader();

              if (response.status == true) {
                var user_id = response.user_id;
                localStorage.setItem('fash_user_id', user_id);
                localStorage.setItem('fash_user_type', _this10.user_type);
                localStorage.setItem('mobile', response.phone);
                var publishData = {
                  'loggedIn': true,
                  'user_type': _this10.user_type,
                  'name': response.name,
                  'mobile': response.phone,
                  'userId': response.user_id,
                  'image': response.image
                };

                if (_this10.user_type == 'vendor') {
                  publishData.name = response.shop_name;
                  localStorage.setItem('name', response.shop_name);
                } else {
                  localStorage.setItem('name', response.name);
                }

                _this10.globalEvents.publishEventData(publishData);

                if (_this10.user_type == 'vendor') {
                  _this10.router.navigate(['/vendor-dashboard', response.user_id], {
                    state: {}
                  });
                } else if (_this10.user_type == 'visual_merchant') {
                  _this10.router.navigate(['/vm-dashboard', response.user_id], {
                    state: {}
                  });
                }

                _this10.modalController.dismiss();
              } else {
                _this10.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
            }, resetObj);
          }
        }
      }, {
        key: "checkOTP",
        value: function checkOTP() {
          var _this11 = this;

          this.phone = $("#phone").val();

          if (this.phone == undefined || this.phone == '') {
            this.util.presentToast("Enter Phone Number", 'danger', 'bottom', 2500);
          } else {
            var forgotObj = {
              action: "forgotpassword",
              phone: this.phone,
              user_type: this.user_type
            };
            this.util.showLoader();
            this.api.forgotPassword(function (response) {
              _this11.util.hideLoader();

              if (response.status == true) {
                _this11.otpscreen = 'true';
                _this11.mobilescreen = 'false';

                _this11.util.presentToast("Please enter OTP", 'danger', 'bottom', 2500);
              } else {
                _this11.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
            }, forgotObj);
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.otpscreen = 'false';
          this.mobilescreen = 'true';
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }]);

      return ForgotpasswordPage;
    }();

    ForgotpasswordPage.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _services_globalevents_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsService"]
      }];
    };

    ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgotpassword',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgotpassword.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forgotpassword.page.scss */
      "./src/app/forgotpassword/forgotpassword.page.scss"))["default"]]
    })], ForgotpasswordPage);
    /***/
  },

  /***/
  "./src/app/modals/shop-popover/shop-popover.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/modals/shop-popover/shop-popover.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsShopPopoverShopPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9zaG9wLXBvcG92ZXIvc2hvcC1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modals/shop-popover/shop-popover.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modals/shop-popover/shop-popover.component.ts ***!
    \***************************************************************/

  /*! exports provided: ShopPopoverComponent */

  /***/
  function srcAppModalsShopPopoverShopPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopPopoverComponent", function () {
      return ShopPopoverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShopPopoverComponent = /*#__PURE__*/function () {
      function ShopPopoverComponent() {
        _classCallCheck(this, ShopPopoverComponent);
      }

      _createClass(ShopPopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShopPopoverComponent;
    }();

    ShopPopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shop-popover',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shop-popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/shop-popover/shop-popover.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shop-popover.component.scss */
      "./src/app/modals/shop-popover/shop-popover.component.scss"))["default"]]
    })], ShopPopoverComponent);
    /***/
  },

  /***/
  "./src/app/nointernet-page/nointernet-page.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/nointernet-page/nointernet-page.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNointernetPageNointernetPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".connection_icon {\n  margin: auto;\n  width: 80px;\n  height: 80px;\n}\n\n.icon_pos {\n  margin-top: 25vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9pbnRlcm5ldC1wYWdlL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXG5vaW50ZXJuZXQtcGFnZVxcbm9pbnRlcm5ldC1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm9pbnRlcm5ldC1wYWdlL25vaW50ZXJuZXQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ub2ludGVybmV0LXBhZ2Uvbm9pbnRlcm5ldC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25uZWN0aW9uX2ljb257XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbn1cblxuLmljb25fcG9ze1xuICAgIG1hcmdpbi10b3A6IDI1dmg7XG59IiwiLmNvbm5lY3Rpb25faWNvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmljb25fcG9zIHtcbiAgbWFyZ2luLXRvcDogMjV2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/nointernet-page/nointernet-page.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/nointernet-page/nointernet-page.page.ts ***!
    \*********************************************************/

  /*! exports provided: NointernetPagePage */

  /***/
  function srcAppNointernetPageNointernetPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NointernetPagePage", function () {
      return NointernetPagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");

    var NointernetPagePage = /*#__PURE__*/function () {
      function NointernetPagePage(platform, router, actRoute, alertCtrl, network, modalController) {
        var _this12 = this;

        _classCallCheck(this, NointernetPagePage);

        this.platform = platform;
        this.router = router;
        this.actRoute = actRoute;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.modalController = modalController;
        this.backb();
        var connectSubscription = this.network.onConnect().subscribe(function () {
          //this.viewCtrl.dismiss();
          _this12.modalController.dismiss();
        });
      }

      _createClass(NointernetPagePage, [{
        key: "backb",
        value: function backb() {
          var _this13 = this;

          this.platform.ready().then(function () {
            _this13.back_subscription = _this13.platform.backButton.subscribe(function () {
              navigator['app'].exitApp();
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NointernetPagePage;
    }();

    NointernetPagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    NointernetPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nointernet-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./nointernet-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet-page/nointernet-page.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./nointernet-page.page.scss */
      "./src/app/nointernet-page/nointernet-page.page.scss"))["default"]]
    })], NointernetPagePage);
    /***/
  },

  /***/
  "./src/app/services/anonymousguard.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/anonymousguard.service.ts ***!
    \****************************************************/

  /*! exports provided: AnonymousguardService */

  /***/
  function srcAppServicesAnonymousguardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnonymousguardService", function () {
      return AnonymousguardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AnonymousguardService = /*#__PURE__*/function () {
      function AnonymousguardService(navCtrl) {
        _classCallCheck(this, AnonymousguardService);

        this.navCtrl = navCtrl;
      }

      _createClass(AnonymousguardService, [{
        key: "canActivate",
        value: function canActivate() {
          var is_logged_in = localStorage.getItem('fash_user_id');

          if (is_logged_in) {
            var uType = localStorage.getItem('fash_user_type');

            if (uType && uType == 'visual_merchant') {
              var id = is_logged_in;
              this.navCtrl.navigateForward(['vm-dashboard', id]);
            }

            if (uType && uType == 'vendor') {
              var _id = is_logged_in;
              this.navCtrl.navigateForward(['vendor-dashboard', _id]);
            }

            return false;
          } else {
            return true;
          }
        }
      }]);

      return AnonymousguardService;
    }();

    AnonymousguardService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AnonymousguardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AnonymousguardService);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.baseUrl = 'https://offket.com/api/Vendor_api/user';
        this.versionCode = '';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.headers.set('Content-Type', 'application/x-www-form-urlencoded');
      }

      _createClass(ApiService, [{
        key: "doLoginUser",
        value: function doLoginUser(callback, loginObject, token) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', loginObject.action).set('mobile', loginObject.user_name).set('password', loginObject.password).set('token', token); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchDashboardDetails",
        value: function fetchDashboardDetails(callback) {
          var vm_id = localStorage.getItem('vm_id');
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('vm_id', vm_id); // call post end point

          return this.httpClient.post(this.baseUrl + 'dashboardDetails', payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchPlans",
        value: function fetchPlans(callback, vmObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', vmObj.action).set('shopId', vmObj.shopId); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchSubscription",
        value: function fetchSubscription(callback, vmObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', vmObj.action).set('pid', vmObj.pid); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchShopLists",
        value: function fetchShopLists(callback, vmObj) {
          // let vm_id = localStorage.getItem('vm_id');
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', vmObj.action).set('user_id', vmObj.user_id); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchBanners",
        value: function fetchBanners(callback, vmObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', vmObj.action).set('vendor_id', vmObj.vendor_id); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchVendorRequests",
        value: function fetchVendorRequests(callback, vmObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', vmObj.action).set('vendor_id', vmObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchShopDetails",
        value: function fetchShopDetails(callback, dashboardObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', dashboardObj.action).set('login_status', dashboardObj.login_status).set('user_id', dashboardObj.shopId); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchShopDetails1",
        value: function fetchShopDetails1(callback, profObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', profObj.action).set('user_id', profObj.shopId); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getvmDetails",
        value: function getvmDetails(callback, dashboardObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', dashboardObj.action).set('login_status', dashboardObj.login_status).set('user_id', dashboardObj.shopId); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchShopCategories",
        value: function fetchShopCategories(callback, catObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', catObj.action).set('user_id', catObj.user_id); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories(callback, catObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', catObj.action).set('user_id', catObj.user_id); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchShopSubCategories",
        value: function fetchShopSubCategories(callback, subcatObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', subcatObj.action).set('cat_id', subcatObj.catId); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchbasicsubcategories",
        value: function fetchbasicsubcategories(callback, subcatObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', subcatObj.action); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchProducts",
        value: function fetchProducts(callback, productObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', productObj.action).set('cat_id', productObj.cat_id).set('subcat_id', productObj.subcat_id).set('shop_id', productObj.shop_id); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getTags",
        value: function getTags(callback, tagObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', tagObj.action); // call post end point

          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getBrands",
        value: function getBrands(callback, brandObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', brandObj.action).set('subcatid', brandObj.subcatid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getTypes",
        value: function getTypes(callback, brandObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', brandObj.action).set('subcatid', brandObj.subcatid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getTax",
        value: function getTax(callback, taxObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', taxObj.action);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getProductData",
        value: function getProductData(callback, editProdObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', editProdObj.action).set('pid', editProdObj.pid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "requestProduct",
        value: function requestProduct(callback, requestProd) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', requestProd.action).set('shop_id', requestProd.shop_id).set('name', requestProd.name).set('cat_id', requestProd.cat_id).set('sub_cat_id', requestProd.sub_cat_id).set('key_features', requestProd.key_features).set('description', requestProd.description).set('product_tags', requestProd.product_tags).set('brand', requestProd.brand).set('variant_product', requestProd.variant_product).set('manage_stock', requestProd.manage_stock).set('product_status', requestProd.product_status).set('price', requestProd.price).set('saleprice', requestProd.saleprice).set('stock', requestProd.stock).set('availabile_stock_status', requestProd.availabile_stock_status).set('imagepath', requestProd.imagepath).set('offers', requestProd.offers).set('price_range', requestProd.price_range).set('type', requestProd.type);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(callback, requestProd) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', requestProd.action).set('pid', requestProd.pid).set('offers', requestProd.offers).set('availabile_stock_status', requestProd.availabile_stock_status).set('product_status', requestProd.product_status).set('price_range', requestProd.price_range).set('return_available', requestProd.return_available).set('no_of_days', requestProd.no_of_days);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchAttributeTypes",
        value: function fetchAttributeTypes(callback, attributeTypeObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', attributeTypeObj.action).set('product_id', attributeTypeObj.pid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchgetAttributeValues",
        value: function fetchgetAttributeValues(callback, attributeValueObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', attributeValueObj.action).set('product_id', attributeValueObj.pid).set('attribute_type_id', attributeValueObj.att_types);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "addVariants",
        value: function addVariants(callback, variantObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', variantObj.action).set('product_id', variantObj.pid).set('attribute_type_id', variantObj.att_types).set('attribute_value_ids', variantObj.attrib_value);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updateVariants",
        value: function updateVariants(callback, updvariantObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', updvariantObj.action).set('product_id', updvariantObj.pid).set('attribute_type_id', updvariantObj.att_types).set('attribute_value_ids', updvariantObj.attrib_value).set('vid', updvariantObj.vid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchVariantsList",
        value: function fetchVariantsList(callback, variantObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', variantObj.action).set('product_id', variantObj.pid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "deleteselVariants",
        value: function deleteselVariants(callback, delvarObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', delvarObj.action).set('product_id', delvarObj.pid).set('vid', delvarObj.vid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchLinkVariants",
        value: function fetchLinkVariants(callback, linkvariantsObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', linkvariantsObj.action).set('product_id', linkvariantsObj.pid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchLinkVariants1",
        value: function fetchLinkVariants1(callback, linkvariantsObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', linkvariantsObj.action).set('product_id', linkvariantsObj.pid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updateStock",
        value: function updateStock(callback, stockObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', stockObj.action).set('product_id', stockObj.product_id).set('variant_id', stockObj.variant_id).set('quantity', stockObj.quantity).set('stockstatus', stockObj.stockstatus);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updatPrices",
        value: function updatPrices(callback, updatpricesObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', updatpricesObj.action).set('product_id', updatpricesObj.product_id).set('variant_id', updatpricesObj.variant_id).set('price', updatpricesObj.price).set('saleprice', updatpricesObj.saleprice).set('stock', updatpricesObj.stock);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(callback, changeStatusObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', changeStatusObj.action).set('vid', changeStatusObj.vid).set('status', changeStatusObj.status);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getImages",
        value: function getImages(callback, imagesObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', imagesObj.action).set('product_id', imagesObj.product_id).set('variant_id', imagesObj.variant_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword(callback, passwordObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', passwordObj.action).set('login_type', passwordObj.login_type).set('user_id', passwordObj.user_id).set('current_password', passwordObj.current_password).set('new_password', passwordObj.new_password);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchTerms",
        value: function fetchTerms(callback, passwordObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', passwordObj.action);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchOrderslist",
        value: function fetchOrderslist(callback, orderObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', orderObj.action).set('vendor_id', orderObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchPendingsettlelist",
        value: function fetchPendingsettlelist(callback, settlementObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', settlementObj.action).set('vendor_id', settlementObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchCompletedsettlelist",
        value: function fetchCompletedsettlelist(callback, com_settlementObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', com_settlementObj.action).set('vendor_id', com_settlementObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchOrderdetails",
        value: function fetchOrderdetails(callback, orderdetObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', orderdetObj.action).set('oid', orderdetObj.oid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getMarchantData",
        value: function getMarchantData(callback, profileObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', profileObj.action).set('vm_id', profileObj.vm_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(callback, forgotObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', forgotObj.action).set('phone', forgotObj.phone).set('user_type', forgotObj.user_type);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updatevmProfile",
        value: function updatevmProfile(callback, vmObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', vmObj.action).set('vm_id', vmObj.vm_id).set('name', vmObj.name).set('address', vmObj.address);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "checkresetPassword",
        value: function checkresetPassword(callback, resetObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', resetObj.action).set('otp', resetObj.otp).set('user_type', resetObj.user_type).set('password', resetObj.password).set('phone', resetObj.phone);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchStockManagement",
        value: function fetchStockManagement(callback, stockObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', stockObj.action).set('variant_id', stockObj.variant_id).set('pid', stockObj.pid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchDashboard",
        value: function fetchDashboard(callback, dashObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', dashObj.action).set('vm_id', dashObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchVendorStatus",
        value: function fetchVendorStatus(callback, vendorObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', vendorObj.action).set('vendor_id', vendorObj.shopId).set('tokenId', vendorObj.tokenId);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "changeVendorStatus",
        value: function changeVendorStatus(callback, statObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', statObj.action).set('vendor_id', statObj.shopId).set('status', statObj.status);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchBusinessHours",
        value: function fetchBusinessHours(callback, busiObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', busiObj.action).set('vendor_id', busiObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "createBusinessHours",
        value: function createBusinessHours(callback, workObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', workObj.action).set('vendor_id', workObj.vendor_id).set('open_time', workObj.open_time).set('closed_time', workObj.closed_time).set('weekname', workObj.weekname).set('working', workObj.working);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updateBusinessHours",
        value: function updateBusinessHours(callback, workObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', workObj.action).set('vendor_id', workObj.vendor_id).set('open_time', workObj.open_time).set('closed_time', workObj.closed_time).set('weekname', workObj.weekname).set('working', workObj.working).set('wid', workObj.wid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "doacceptOrder",
        value: function doacceptOrder(callback, aObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', aObj.action).set('vendor_id', aObj.vendor_id).set('order_id', aObj.orderid).set('delivery_type', aObj.delivery_type);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "docancelOrder",
        value: function docancelOrder(callback, caObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', caObj.action).set('vendor_id', caObj.vendor_id).set('order_id', caObj.orderid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getVendorData",
        value: function getVendorData(callback, profileObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', profileObj.action).set('vendor_id', profileObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "doupdateProfiledetails",
        value: function doupdateProfiledetails(callback, editObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', editObj.action).set('vendor_id', editObj.vendor_id).set('shop_name', editObj.shop_name).set('owner_name', editObj.owner_name).set('description', editObj.description).set('address', editObj.address).set('alternative_mobile', editObj.alternative_mobile).set('pan', editObj.pan).set('aadhar', editObj.aadhar).set('gst_number', editObj.gst_number).set('bankname', editObj.bankname).set('accountholder_name', editObj.accountholder_name).set('bank_ifsccode', editObj.bank_ifsccode).set('account_no', editObj.account_no).set('min_order_amount', editObj.min_order_amount);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "deleteProducts",
        value: function deleteProducts(callback, delProdObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', delProdObj.action).set('pid', delProdObj.pid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchReviews",
        value: function fetchReviews(callback, reviewObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reviewObj.action).set('vendor_id', reviewObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchSalesReport",
        value: function fetchSalesReport(callback, salesObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', salesObj.action).set('vendor_id', salesObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getDatewisesalesReport",
        value: function getDatewisesalesReport(callback, reportObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reportObj.action).set('vendor_id', reportObj.vendor_id).set('sdate', reportObj.sdate);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "deleteBussHours",
        value: function deleteBussHours(callback, delObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', delObj.action).set('vendor_id', delObj.vendor_id).set('bid', delObj.bid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchexchange_orders",
        value: function fetchexchange_orders(callback, exorderObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', exorderObj.action).set('vendor_id', exorderObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "acceptExchangeorders",
        value: function acceptExchangeorders(callback, exorderObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', exorderObj.action).set('oid', exorderObj.oid).set('sid', exorderObj.session_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchRequestAmount",
        value: function fetchRequestAmount(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "doVendorPayments",
        value: function doVendorPayments(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id).set('requested_amount', reqObj.requested_amount).set('description', reqObj.description).set('total_payment', reqObj.total_payment);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchBidslist",
        value: function fetchBidslist(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id).set('bid_status', reqObj.bid_status);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchBidDetails",
        value: function fetchBidDetails(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('bid', reqObj.bid).set('vendor_id', reqObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "addQuote",
        value: function addQuote(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('bid_id', reqObj.bid_id).set('vendor_id', reqObj.vendor_id).set('total_price', reqObj.total_price).set('user_id', reqObj.user_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchCouponCodes",
        value: function fetchCouponCodes(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "clearRequest",
        value: function clearRequest(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('id', reqObj.id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "addCouponCodes",
        value: function addCouponCodes(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id).set('coupon_code', reqObj.coupon_code).set('percentage', reqObj.percentage).set('maximum_amount', reqObj.maximum_amount).set('start_date', reqObj.start_date).set('end_date', reqObj.end_date).set('description', reqObj.description).set('minimum_order_amount', reqObj.minimum_order_amount).set('utilization', reqObj.utilization);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "addBannerdata",
        value: function addBannerdata(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id).set('title', reqObj.title).set('imagepath', reqObj.imagepath);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "addOffer",
        value: function addOffer(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id).set('title', reqObj.title).set('cat_id', reqObj.cat_id).set('start_date', reqObj.start_date).set('end_date', reqObj.end_date).set('imagepath', reqObj.imagepath);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updateCouponCodes",
        value: function updateCouponCodes(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id).set('coupon_code', reqObj.coupon_code).set('percentage', reqObj.percentage).set('maximum_amount', reqObj.maximum_amount).set('start_date', reqObj.start_date).set('end_date', reqObj.end_date).set('description', reqObj.description).set('id', reqObj.id).set('minimum_order_amount', reqObj.minimum_order_amount).set('utilization', reqObj.utilization);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "deleteCoupon",
        value: function deleteCoupon(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('cid', reqObj.cid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "deleteBanner",
        value: function deleteBanner(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('cid', reqObj.cid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updateBannerdata",
        value: function updateBannerdata(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id).set('title', reqObj.title).set('imagepath', reqObj.imagepath).set('id', reqObj.id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updateOfferdata",
        value: function updateOfferdata(callback, reqObj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', reqObj.action).set('vendor_id', reqObj.vendor_id).set('title', reqObj.title).set('imagepath', reqObj.imagepath).set('id', reqObj.id).set('cat_id', reqObj.cat_id).set('start_date', reqObj.start_date).set('end_date', reqObj.end_date);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "dosignup",
        value: function dosignup(callback, loginObject, tokenId) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', loginObject.action).set('name', loginObject.name).set('email', loginObject.email).set('password', loginObject.password).set('phone', loginObject.mobile).set('gst', loginObject.gst).set('token', tokenId).set('rcode', loginObject.rcode);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "otpVerification",
        value: function otpVerification(callback, otpOb) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', otpOb.action).set('user_id', otpOb.user_id).set('otp', otpOb.otp);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "resendOTP",
        value: function resendOTP(callback, otpOb) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', otpOb.action).set('user_id', otpOb.user_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "searchProducts",
        value: function searchProducts(callback, otpOb) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', otpOb.action).set('keyword', otpOb.keyword).set('shopId', otpOb.shopId);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "completetheuserOrder",
        value: function completetheuserOrder(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('vendor_id', obj.vendor_id).set('orderid', obj.orderid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "generateRazerpay",
        value: function generateRazerpay(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('grand_total', obj.grand_total).set('vendor_id', obj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "doRazerpayPayment",
        value: function doRazerpayPayment(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('payment_id', obj.payment_id).set('razorpayOrderId', obj.razorpayOrderId).set('pid', obj.pid).set('total_mount', obj.total_mount).set('vendor_id', obj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getPackageReport",
        value: function getPackageReport(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('vendor_id', obj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "confirmPickup",
        value: function confirmPickup(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('vendor_id', obj.vendor_id).set('orderid', obj.orderid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "generateUserOTP",
        value: function generateUserOTP(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('vendor_id', obj.vendor_id).set('orderid', obj.orderid);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "confirmDelivery",
        value: function confirmDelivery(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('vendor_id', obj.vendor_id).set('orderid', obj.orderid).set('otp', obj.otp);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "myPackages",
        value: function myPackages(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('vendor_id', obj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getShopSubCategories",
        value: function getShopSubCategories(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('shopId', obj.shopId);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "getShopSubCategorieswithCat",
        value: function getShopSubCategorieswithCat(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('shopId', obj.shopId).set('catId', obj.catId);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchexistingProducts",
        value: function fetchexistingProducts(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('subcat_id', obj.subcat_id).set('shop_id', obj.shop_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchexistingOffers",
        value: function fetchexistingOffers(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('cat_id', obj.cat_id).set('shop_id', obj.shop_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "cloneNewProduct",
        value: function cloneNewProduct(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('pid', obj.pid).set('shopId', obj.shopId);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "cloneNewOffer",
        value: function cloneNewOffer(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('pid', obj.pid).set('shopId', obj.shopId);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchOffers",
        value: function fetchOffers(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('vendor_id', obj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchShopOffercategories",
        value: function fetchShopOffercategories(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('shopId', obj.shopId);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "fetchSupport",
        value: function fetchSupport(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "updateVersion",
        value: function updateVersion(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "searchCloneProducts",
        value: function searchCloneProducts(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('keyword', obj.keyword).set('subcat_id', obj.subcat_id).set('shop_id', obj.shop_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "searchProductsList",
        value: function searchProductsList(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('keyword', obj.keyword).set('cat_id', obj.cat_id).set('subcat_id', obj.subcat_id).set('shop_id', obj.shop_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "vendorCurrentPackage",
        value: function vendorCurrentPackage(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('vendor_id', obj.vendor_id);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "productsBrandFilters",
        value: function productsBrandFilters(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('shopId', obj.shopId).set('catId', obj.catId).set('subcat_id', obj.subcat_id).set('json_data', obj.json_data);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }, {
        key: "productscloneBrandFilters",
        value: function productscloneBrandFilters(callback, obj) {
          var payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('action', obj.action).set('shopId', obj.shopId).set('catId', obj.catId).set('subcat_id', obj.subcat_id).set('json_data', obj.json_data);
          return this.httpClient.post(this.baseUrl, payload, {
            headers: this.headers
          }).subscribe(function (response) {
            callback(response);
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/services/globalevents.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/globalevents.service.ts ***!
    \**************************************************/

  /*! exports provided: GlobalEventsService */

  /***/
  function srcAppServicesGlobaleventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalEventsService", function () {
      return GlobalEventsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var GlobalEventsService = /*#__PURE__*/function () {
      function GlobalEventsService() {
        _classCallCheck(this, GlobalEventsService);

        this.eventObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(GlobalEventsService, [{
        key: "publishEventData",
        value: function publishEventData(data) {
          this.eventObject.next(data);
        }
      }, {
        key: "getObservable",
        value: function getObservable() {
          return this.eventObject;
        }
      }]);

      return GlobalEventsService;
    }();

    GlobalEventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GlobalEventsService);
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var UtilService = /*#__PURE__*/function () {
      function UtilService(loadingController, toastctrl) {
        _classCallCheck(this, UtilService);

        this.loadingController = loadingController;
        this.toastctrl = toastctrl;
      }

      _createClass(UtilService, [{
        key: "showLoader",
        value: function showLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Please wait...'
                    });

                  case 2:
                    this.loadingSpinner = _context3.sent;
                    _context3.next = 5;
                    return this.loadingSpinner.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          if (this.loadingSpinner) {
            this.loadingSpinner.dismiss();
          }

          return;
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dark';
          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bottom';
          var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2500;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastctrl.create({
                      message: message,
                      duration: duration,
                      position: position,
                      color: color
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getVendorId",
        value: function getVendorId() {
          var id = localStorage.getItem('fash_user_id');
          var uType = localStorage.getItem('fash_user_type');

          if (uType == 'vendor' && id != null && id != undefined) {
            return id;
          } else {
            return null;
          }
        }
      }, {
        key: "managetoken",
        value: function managetoken() {
          var token = localStorage.getItem('token');

          if (token != null && token != undefined) {
            return token;
          } else {
            return null;
          }
        }
      }, {
        key: "getVisualMerchantId",
        value: function getVisualMerchantId() {
          var id = localStorage.getItem('fash_user_id');
          var uType = localStorage.getItem('fash_user_type');

          if (uType == 'visual_merchant' && id != null && id != undefined) {
            return id;
          } else {
            return null;
          }
        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilService);
    /***/
  },

  /***/
  "./src/app/stock-management/stock-management.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/stock-management/stock-management.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStockManagementStockManagementPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ion-model {\n  --background:#f47a20;\n}\n\n.quickmodelinput {\n  color: #fff;\n  --background: none;\n  border-bottom: 1px solid #fff;\n}\n\n.modalbox1 {\n  margin: 33% 7%;\n  background: #fff;\n  border-radius: 30px;\n  padding: 0px;\n}\n\n.modelboxinput {\n  color: #fff;\n}\n\n.modelclose {\n  padding-right: 20px;\n  color: #fff;\n  font-size: 22px;\n  float: right;\n}\n\n.acceptmodal {\n  border-radius: 30px 30px 3px 2px;\n  padding: 3px;\n  background: #081f65;\n}\n\n.acceptmodal h4 {\n  color: #fff;\n  text-align: center;\n  font-size: 15px;\n  line-height: 24px;\n}\n\n.inputbox {\n  border: 1px solid #e8e7e7;\n  border-radius: 20px;\n  margin-top: 3px;\n  padding: 5px 10px !important;\n  font-size: 13px;\n  outline: none;\n}\n\n.inputselect {\n  border: 1px solid #e8e7e7;\n  border-radius: 20px;\n  margin-top: 3px;\n  outline: none;\n}\n\nbutton {\n  color: #fff;\n  margin: 5px;\n  background: #081f65;\n  padding: 10px;\n  outline: none;\n  border-radius: 15px;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  border-right: 1px solid #dddddd;\n  text-align: left;\n  padding: 12px 3px;\n  background-color: #efefef;\n  color: #05274d;\n  text-align: center;\n  font-size: 13px;\n}\n\ntd {\n  border-right: 1px solid #dddddd;\n  border-bottom: 3px solid #fff;\n  text-align: left;\n  padding: 6px 2px;\n  background-color: #fafafa;\n  font-size: 14px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2stbWFuYWdlbWVudC9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFxzdG9jay1tYW5hZ2VtZW50XFxzdG9jay1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RvY2stbWFuYWdlbWVudC9zdG9jay1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0o7O0FERUk7RUFDRSxXQUFBO0VBQ0Qsa0JBQUE7RUFDQSw2QkFBQTtBQ0NMOztBRENJO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0k7RUFDQSxXQUFBO0FDRUo7O0FEQ0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VOOztBREFJO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNHTjs7QURESTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0lOOztBREZNO0VBQ0UseUJBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSVI7O0FERE07RUFDRSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNHUjs7QURETTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSVI7O0FEREs7RUFDRCx5QkFBQTtFQUNELFdBQUE7QUNJSDs7QUREQTtFQUNHLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0lIOztBREZDO0VBQ0csK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvc3RvY2stbWFuYWdlbWVudC9zdG9jay1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tbW9kZWwge1xuICAgIC0tYmFja2dyb3VuZDojZjQ3YTIwO1xuICAgIH1cbiAgICBcbiAgICAucXVpY2ttb2RlbGlucHV0IHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgIH1cbiAgICAubW9kYWxib3gxIHsgIFxuICAgIG1hcmdpbjogMzMlIDclO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5tb2RlbGJveGlucHV0IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgLm1vZGVsY2xvc2Uge1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgICAuYWNjZXB0bW9kYWwge1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDNweCAycHg7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiMwODFmNjU7XG4gICAgfVxuICAgIC5hY2NlcHRtb2RhbCBoNCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgICAgIC5pbnB1dGJveCB7ICBcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZTdlNztcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiAjZThlN2U3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6NXB4IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5pbnB1dHNlbGVjdCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU3ZTc7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNlOGU3ZTc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgb3V0bGluZTpub25lO1xuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDgxZjY1O1xuICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgfVxuXG4gICAgIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgd2lkdGg6IDEwMCU7XG4gfVxuIFxudGgge1xuICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBwYWRkaW5nOiAxMnB4IDNweDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICBjb2xvcjogIzA1Mjc0ZDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGZvbnQtc2l6ZToxM3B4O1xuIH1cbiB0ZHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICNmZmY7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA2cHggMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vLyB0ciB7XG4vLyAgICAgZGl2IHtcbi8vICAgICAgICAgdGR7XG4vLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAycHg7XG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbi8vICAgICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSIsIi5pb24tbW9kZWwge1xuICAtLWJhY2tncm91bmQ6I2Y0N2EyMDtcbn1cblxuLnF1aWNrbW9kZWxpbnB1dCB7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuXG4ubW9kYWxib3gxIHtcbiAgbWFyZ2luOiAzMyUgNyU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1vZGVsYm94aW5wdXQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1vZGVsY2xvc2Uge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hY2NlcHRtb2RhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzcHggMnB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGJhY2tncm91bmQ6ICMwODFmNjU7XG59XG5cbi5hY2NlcHRtb2RhbCBoNCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5pbnB1dGJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU3ZTc7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXRzZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlN2U3O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogIzA4MWY2NTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkZGRkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMnB4IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgY29sb3I6ICMwNTI3NGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG50ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/stock-management/stock-management.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/stock-management/stock-management.page.ts ***!
    \***********************************************************/

  /*! exports provided: StockManagementPage */

  /***/
  function srcAppStockManagementStockManagementPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockManagementPage", function () {
      return StockManagementPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StockManagementPage = /*#__PURE__*/function () {
      function StockManagementPage(util, actRoute, router, api, popoverController, modalController, navParams, loadingCtrl) {
        _classCallCheck(this, StockManagementPage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.link_variant_id = navParams.get('link_variant_id');
        this.pid = navParams.get('pid');
      }

      _createClass(StockManagementPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStock();
        }
      }, {
        key: "getStock",
        value: function getStock() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this14 = this;

            var stockObj, loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    stockObj = {
                      action: "stockManagement",
                      variant_id: this.link_variant_id,
                      pid: this.pid
                    };
                    this.stockmanagement = [];
                    _context5.next = 4;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 4:
                    loading = _context5.sent;
                    loading.present();
                    this.api.fetchStockManagement(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this14.stockmanagement = response.stock;
                      } else {
                        _this14.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, stockObj);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "updatePrice",
        value: function updatePrice() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this15 = this;

            var stockObj, loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.quantity = $("#quantity").val();
                    this.stockstatus = $("#stockstatus").val();

                    if (!(this.stockstatus == undefined || this.stockstatus == "")) {
                      _context6.next = 6;
                      break;
                    }

                    this.util.presentToast("Select Stock Status", 'danger', 'top', 2500);
                    _context6.next = 20;
                    break;

                  case 6:
                    if (!(parseInt(this.quantity) == 0)) {
                      _context6.next = 10;
                      break;
                    }

                    this.util.presentToast("Please enter minimum quantity", 'danger', 'top', 2500);
                    _context6.next = 20;
                    break;

                  case 10:
                    if (!(this.quantity == undefined || this.quantity == "")) {
                      _context6.next = 14;
                      break;
                    }

                    this.util.presentToast("Enter Quantity", 'danger', 'top', 2500);
                    _context6.next = 20;
                    break;

                  case 14:
                    stockObj = {
                      action: "addStock",
                      product_id: this.pid,
                      variant_id: this.link_variant_id,
                      quantity: this.quantity,
                      stockstatus: this.stockstatus
                    };
                    _context6.next = 17;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 17:
                    loading = _context6.sent;
                    loading.present();
                    this.api.updateStock(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this15.util.presentToast(response.message, 'danger', 'bottom', 2500);

                        var linkvariantsObj = {
                          action: "getlink_variants",
                          pid: _this15.pid
                        };
                        _this15.link_variants = [];

                        _this15.api.fetchLinkVariants(function (response) {
                          _this15.link_variants = response.link_variants;

                          _this15.modalController.dismiss(_this15.link_variants);
                        }, linkvariantsObj);
                      } else {
                        _this15.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, stockObj);

                  case 20:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          var _this16 = this;

          var linkvariantsObj = {
            action: "getlink_variants",
            pid: this.pid
          };
          this.link_variants = [];
          this.api.fetchLinkVariants(function (response) {
            _this16.link_variants = response.link_variants;

            _this16.modalController.dismiss(_this16.link_variants);
          }, linkvariantsObj);
        }
      }]);

      return StockManagementPage;
    }();

    StockManagementPage.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    StockManagementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stock-management',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stock-management.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/stock-management/stock-management.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stock-management.page.scss */
      "./src/app/stock-management/stock-management.page.scss"))["default"]]
    })], StockManagementPage);
    /***/
  },

  /***/
  "./src/app/updateprice/updateprice.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/updateprice/updateprice.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdatepriceUpdatepricePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".addvariantbox ion-label {\n  margin-left: 20px;\n  font-size: 15px;\n  font-weight: 600;\n}\n.addvariantbox ion-input {\n  width: 90%;\n  border: 1px solid #cac6c6;\n  margin: 5px 15px;\n  border-radius: 20px;\n  outline: none;\n}\n.addvariantbox button {\n  margin: 5px;\n  color: #fff;\n  background: #f47a20;\n  padding: 10px 10px;\n  border-radius: 4px;\n}\nh3 {\n  margin-left: 20px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.acceptmodal {\n  border-radius: 30px 30px 3px 2px;\n  padding: 3px;\n  background: #081f65;\n}\n.acceptmodal h4 {\n  color: #fff;\n  text-align: center;\n  font-size: 15px;\n  line-height: 24px;\n}\n.inputbox {\n  border: 1px solid #e8e7e7;\n  /* --background: #e8e7e7; */\n  border-radius: 20px;\n  margin-top: 10px;\n  font-size: 14px;\n  padding: 3px 10px !important;\n  outline: none;\n}\n.inputselect {\n  border: 1px solid #e8e7e7;\n  background: #e8e7e7;\n  border-radius: 20px;\n  margin-top: 3px;\n  outline: none;\n}\n.ion-model {\n  --background:#f47a20;\n}\n.quickmodelinput {\n  color: #fff;\n  --background: none;\n  border-bottom: 1px solid #fff;\n}\n.modalbox1 {\n  margin: 33% 7%;\n  background: #fff;\n  border-radius: 30px;\n  padding: 0px;\n}\n.modelboxinput {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlcHJpY2UvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcdXBkYXRlcHJpY2VcXHVwZGF0ZXByaWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXBkYXRlcHJpY2UvdXBkYXRlcHJpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDSixlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdRO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNEWjtBREtJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRE1BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1BO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRko7QURJSTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQ0ROO0FESUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0ROO0FESUk7RUFDSSxvQkFBQTtBQ0RSO0FESVE7RUFDRSxXQUFBO0VBQ0Qsa0JBQUE7RUFDQSw2QkFBQTtBQ0RUO0FER1E7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBUjtBREdRO0VBQ0EsV0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlcHJpY2UvdXBkYXRlcHJpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHZhcmlhbnRib3gge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgIFxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgICAgIH1cbiAgICBcbiAgIFxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0N2EyMDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxufVxuaDMge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYWNjZXB0bW9kYWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzcHggMnB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiMwODFmNjU7XG4gIH1cbiAgLmFjY2VwdG1vZGFsIGg0IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG4gICAgLmlucHV0Ym94IHsgIFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZTdlNztcbiAgICAgIC8qIC0tYmFja2dyb3VuZDogI2U4ZTdlNzsgKi9cbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICBwYWRkaW5nOiAzcHggMTBweCAhaW1wb3J0YW50O1xuICAgICAgb3V0bGluZTpub25lO1xuICAgIH1cbiAgXG4gICAgLmlucHV0c2VsZWN0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU3ZTc7XG4gICAgICBiYWNrZ3JvdW5kOiAjZThlN2U3O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIG91dGxpbmU6bm9uZTtcbiAgICB9XG4gIFxuICAgIC5pb24tbW9kZWwge1xuICAgICAgICAtLWJhY2tncm91bmQ6I2Y0N2EyMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnF1aWNrbW9kZWxpbnB1dCB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAubW9kYWxib3gxIHsgIFxuICAgICAgICBtYXJnaW46IDMzJSA3JTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubW9kZWxib3hpbnB1dCB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgICIsIi5hZGR2YXJpYW50Ym94IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYWRkdmFyaWFudGJveCBpb24taW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjNmM2O1xuICBtYXJnaW46IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmFkZHZhcmlhbnRib3ggYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaDMge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYWNjZXB0bW9kYWwge1xuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggM3B4IDJweDtcbiAgcGFkZGluZzogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMDgxZjY1O1xufVxuXG4uYWNjZXB0bW9kYWwgaDQge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uaW5wdXRib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlN2U3O1xuICAvKiAtLWJhY2tncm91bmQ6ICNlOGU3ZTc7ICovXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0c2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZTdlNztcbiAgYmFja2dyb3VuZDogI2U4ZTdlNztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW9uLW1vZGVsIHtcbiAgLS1iYWNrZ3JvdW5kOiNmNDdhMjA7XG59XG5cbi5xdWlja21vZGVsaW5wdXQge1xuICBjb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLm1vZGFsYm94MSB7XG4gIG1hcmdpbjogMzMlIDclO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tb2RlbGJveGlucHV0IHtcbiAgY29sb3I6ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/updateprice/updateprice.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/updateprice/updateprice.page.ts ***!
    \*************************************************/

  /*! exports provided: UpdatepricePage */

  /***/
  function srcAppUpdatepriceUpdatepricePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatepricePage", function () {
      return UpdatepricePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UpdatepricePage = /*#__PURE__*/function () {
      function UpdatepricePage(util, actRoute, router, api, popoverController, modalController, navParams) {
        _classCallCheck(this, UpdatepricePage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.link_variant_id = navParams.get('link_variant_id');
        this.pid = navParams.get('pid');
        this.price = navParams.get('price');
        this.saleprice = navParams.get('saleprice');
        this.stock = navParams.get('stock');
      }

      _createClass(UpdatepricePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $("#price").val(this.price);
          $("#saleprice").val(this.saleprice);
          $("#stock").val(this.stock);
        }
      }, {
        key: "updatePrice",
        value: function updatePrice() {
          var _this17 = this;

          this.price = $("#price").val();
          this.saleprice = $("#saleprice").val();
          this.stock = $("#stock").val();

          if (this.price == undefined || this.price == '') {
            this.util.presentToast("Enter Price", 'danger', 'bottom', 2500);
          } else if (this.saleprice == undefined || this.saleprice == '') {
            this.util.presentToast("Enter Sale Price", 'danger', 'bottom', 2500);
          } else if (parseInt(this.price) < parseInt(this.saleprice)) {
            this.util.presentToast("Please enter the Original Product Price grater than the Your Commission Price", 'danger', 'bottom', 2500);
          } else if (this.stock == undefined || this.stock == '') {
            this.util.presentToast("Enter Stock", 'danger', 'bottom', 2500);
          } else {
            var updatpricesObj = {
              action: "updatePrice",
              product_id: this.pid,
              variant_id: this.link_variant_id,
              price: this.price,
              saleprice: this.saleprice,
              stock: this.stock
            };
            this.util.showLoader();
            this.api.updatPrices(function (response) {
              _this17.util.hideLoader();

              if (response.status == true) {
                _this17.util.presentToast(response.message, 'danger', 'bottom', 2500);

                var linkvariantsObj = {
                  action: "getlink_variants",
                  pid: _this17.pid
                };
                _this17.link_variants = [];

                _this17.api.fetchLinkVariants(function (response) {
                  _this17.link_variants = response.link_variants;

                  _this17.modalController.dismiss(_this17.link_variants);
                }, linkvariantsObj);
              } else {
                _this17.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
            }, updatpricesObj);
          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          var _this18 = this;

          var linkvariantsObj = {
            action: "getlink_variants",
            pid: this.pid
          };
          this.link_variants = [];
          this.api.fetchLinkVariants(function (response) {
            _this18.link_variants = response.link_variants;

            _this18.modalController.dismiss(_this18.link_variants);
          }, linkvariantsObj);
        }
      }]);

      return UpdatepricePage;
    }();

    UpdatepricePage.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }];
    };

    UpdatepricePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-updateprice',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./updateprice.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/updateprice/updateprice.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./updateprice.page.scss */
      "./src/app/updateprice/updateprice.page.scss"))["default"]]
    })], UpdatepricePage);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\ionicprojects\offket_vendorapp_ionicv5\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map