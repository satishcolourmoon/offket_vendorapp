function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor-dashboard-vendor-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor-dashboard/vendor-dashboard.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor-dashboard/vendor-dashboard.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorDashboardVendorDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" style=\"background-color:#f4f5f9;\">\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"vendor-head\">\n      Vendor Dashboard\n    </ion-title>\n    <ion-buttons style=\"margin-right:-5px;\" slot=\"end\" (click)=\"orderspag()\" *ngIf=\"offer_zone=='no'\"><ion-icon style=\"font-size:24px;\" name=\"notifications-outline\"></ion-icon><small>{{orders}}</small></ion-buttons>\n    \n    <ion-toggle class=\"toggle\" [(ngModel)]=\"status\" slot=\"end\" (click)=\"getData()\"></ion-toggle>\n\n  </ion-toolbar>\n  <div class=\"vendor-title\">\n    <h6 style=\"color:#fff;margin: 0px;font-size:15px;\">Hi, {{name}}.</h6>\n    <h4 style=\"color:#fff;margin:0px;padding-top:5px;font-weight: 600;font-size:16px;\">Welcome to OFFKET !</h4>\n  </div>\n</ion-header>\n<ion-content style=\"--background:#f4f5f9;\" *ngIf=\"offer_zone=='yes'\"> \n\n  <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" routerLink=\"/offers\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Add offer</h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/my_offers.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n\n\n        <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" routerLink=\"/shop-profile/{{shopDetail?.user_id}}\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Shop Profile</h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/shop_profile.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n\n        <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" routerLink=\"/plans\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Subscriptions</h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/subscription.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" routerLink=\"/mypackage\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\">My Plans</h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/planning.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n       <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Viewers <b style=\"color: #05274d;\">( {{dashboard?.offer_views}} )</b></h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/viewers.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" routerLink=\"/shareapp\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Share App</h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/share_img.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n          <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" routerLink=\"/terms\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Terms and Conditions</h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/terms.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n\n        <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" routerLink=\"/settings\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Change Password</h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/password.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n      \n\n        <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" routerLink=\"/contactus\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Contact Us</h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/contact_us.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" (click)=\"logout()\">\n          <ion-card-content style=\"padding: 10px;\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Logout</h4>\n              </ion-col>\n              <ion-col size=\"2\" style=\"padding:0px;\">\n                <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n                <img class=\"vendor-img\" src=\"../../assets/images/log_out.png\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n\n       \n\n\n        \n\n\n\n\n\n\n</ion-content>\n<ion-content style=\"--background:#f4f5f9;\" *ngIf=\"offer_zone=='no'\"> \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div>\n    <ion-row *ngIf=\"showstatus\">\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-content style=\"color: #FFF;background: #05274d;\">\n            <span *ngIf=\"showstatus\">Your Package Expired on {{expiry_date}} </span>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"!showstatus\">\n      <ion-col size=\"4\" ></ion-col>\n      <ion-col size=\"4\" *ngIf=\"!showstatus\">\n\n       \n        <button [ngClass]=\"showstatus==false?'productlist':''\" (click)=\"viewPlan()\">{{showbutton}}</button>\n\n      </ion-col>\n      <ion-col size=\"4\" ></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\" (click)=\"gotoorderPage(pack_type)\">\n        <ion-card style=\"background-color:#e44424;border-radius: 15px;margin:10px 0px 0px 10px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">{{dashboard?.today_orders}}</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">Today Orders</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\" (click)=\"gotoorderPage(pack_type)\">\n        <ion-card style=\"background-color:#099b68;border-radius: 15px;margin:10px 10px 0px 0px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">{{dashboard?.total_orders}}</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">Total Orders</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" (click)=\"gotoPageproducts(shopDetail?.user_id,products,pack_type)\">\n        <ion-card style=\"background-color:#05274d;border-radius: 15px;margin:0px 0px 0px 10px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">{{dashboard?.products_total}}</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">Total Products</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\" (click)=\"gotoPageproducts(shopDetail?.user_id,products,pack_type)\">\n        <ion-card style=\"background-color:#2547a4;border-radius: 15px;margin:0px 10px 0px 0px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">{{dashboard?.categories}}</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">Total Categories</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" (click)=\"gotosalesPage(pack_type)\">\n        <ion-card style=\"background-color:#424d09;border-radius: 15px;margin:0px 0px 0px 10px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">{{dashboard?.vendor_total}}</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">ONLINE Amount</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\" (click)=\"gotosalesPage(pack_type)\">\n        <ion-card style=\"background-color:#250846;border-radius: 15px;margin:0px 10px 0px 0px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">{{dashboard?.pending_amount}}</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">ONLINE Pending Amount</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      </ion-row>\n   <ion-row>\n      <ion-col size=\"6\">\n        <ion-card style=\"background-color:#424d09;border-radius: 15px;margin:0px 0px 0px 10px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">{{dashboard?.cod_total_amount}}</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">COD Amount</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n       <ion-col size=\"6\" (click)=\"gotosalesPage(pack_type)\">\n        <ion-card style=\"background-color:#250846;border-radius: 15px;margin:0px 10px 0px 0px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">0</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">COD Pending Amount</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n</ion-row>\n   <ion-row>\n      <ion-col size=\"6\">\n        <ion-card style=\"background-color:#63063e;border-radius: 15px;margin:0px 0px 0px 10px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">{{dashboard?.shop_visits}}</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">Total Viewers</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n       <ion-col size=\"6\" (click)=\"returnorders()\">\n        <ion-card style=\"background-color:#63063e;border-radius: 15px;margin:0px 10px 0px 0px;\">\n          <ion-card-content style=\"height:85px;padding-top:17px !important;\">\n            <h4 style=\"color:#fff;font-weight:bold;font-size:20px;\">{{dashboard?.refund_orders}}</h4>\n            <h6 style=\"color:#fff;margin-top:5px;\">Refund Orders</h6>\n          </ion-card-content>\n        </ion-card>\n      </ion-col> \n</ion-row>\n   \n\n  </div>\n\n<!-- <ion-card style=\"border: 1px solid #c2bbbb;outline:none\">\n<ion-card-content style=\"padding: 15px;\">\n  <ion-row>\n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Today Orders<br> </b><span style=\"color: #000;\">{{dashboard?.today_orders}}</span>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Total Orders<br> </b><span style=\"color: #000;\">{{dashboard?.total_orders}}</span>\n        </ion-col>\n        \n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Total Items<br> </b><span style=\"color: #000;\">{{dashboard?.total_items}}</span>\n        </ion-col>\n        \n   </ion-row>\n   <ion-row>\n          <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Total Categories<br> </b> <span style=\"color: #000;\">{{dashboard?.total_category}}</span>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n         <b>Payout Amount<br> </b><span style=\"color: #000;\">{{dashboard?.total_payment}}</span>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Pending Amount<br> </b><span style=\"color: #000;\">{{dashboard?.pending}}</span>\n        </ion-col>\n   </ion-row>\n\n\n</ion-card-content>\n</ion-card> -->\n\n  <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" routerLink=\"/shop-profile/{{shopDetail?.user_id}}\">\n    <ion-card-content style=\"padding: 10px;\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <h4 style=\"color:black;font-weight:bold;margin-top:5px;\"> Shop Profile</h4>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding:0px;\">\n          <!-- <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n          <img class=\"vendor-img\" src=\"../../assets/images/shops/profileven.png\">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" (click)=\"gotoPageproducts(shopDetail?.user_id,products,pack_type)\">\n    <ion-card-content style=\"padding: 10px;\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <h4 style=\"color:black;font-weight:bold;margin-top:5px;\">Products</h4>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding:0px;\">\n          <!-- <ion-icon name=\"list-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n          <img class=\"vendor-img\" src=\"../../assets/images/shops/product.png\">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" (click)=\"addProduct(products,shopDetail?.user_id)\">\n    <ion-card-content style=\"padding: 10px;\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <h4 style=\"color:black;font-weight:bold;margin-top:5px;\">Add New Product</h4>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding:0px;\">\n          <!-- <ion-icon name=\"add-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n          <img class=\"vendor-img\" src=\"../../assets/images/shops/add_new.png\">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" (click)=\"goReview(shopDetail?.user_id,pack_type)\">\n    <ion-card-content style=\"padding: 10px;\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <h4 style=\"color:black;font-weight:bold;margin-top:5px;\">User Reviews</h4>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding:0px;\">\n          <!-- <ion-icon name=\"list-circle-outline\" style=\"font-size: 30px;\"></ion-icon> -->\n          <img class=\"vendor-img\" src=\"../../assets/images/shops/user_ven.png\">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n <!--  <ion-card style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;outline:none;\" (click)=\"goBids()\">\n    <ion-card-content style=\"padding: 10px;\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <h4 style=\"color:black;font-weight:bold;margin-top:5px;\">My Bid Request</h4>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding:0px;\">\n          <img class=\"vendor-img\" src=\"../../assets/images/newcuttings/my_bid.png\">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card> -->\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/vendor-dashboard/vendor-dashboard-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/vendor-dashboard/vendor-dashboard-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: VendorDashboardPageRoutingModule */

  /***/
  function srcAppVendorDashboardVendorDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorDashboardPageRoutingModule", function () {
      return VendorDashboardPageRoutingModule;
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


    var _vendor_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vendor-dashboard.page */
    "./src/app/vendor-dashboard/vendor-dashboard.page.ts");

    var routes = [{
      path: '',
      component: _vendor_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["VendorDashboardPage"]
    }];

    var VendorDashboardPageRoutingModule = function VendorDashboardPageRoutingModule() {
      _classCallCheck(this, VendorDashboardPageRoutingModule);
    };

    VendorDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VendorDashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/vendor-dashboard/vendor-dashboard.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/vendor-dashboard/vendor-dashboard.module.ts ***!
    \*************************************************************/

  /*! exports provided: VendorDashboardPageModule */

  /***/
  function srcAppVendorDashboardVendorDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorDashboardPageModule", function () {
      return VendorDashboardPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _vendor_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vendor-dashboard-routing.module */
    "./src/app/vendor-dashboard/vendor-dashboard-routing.module.ts");
    /* harmony import */


    var _vendor_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vendor-dashboard.page */
    "./src/app/vendor-dashboard/vendor-dashboard.page.ts");

    var VendorDashboardPageModule = function VendorDashboardPageModule() {
      _classCallCheck(this, VendorDashboardPageModule);
    };

    VendorDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vendor_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["VendorDashboardPageRoutingModule"]],
      declarations: [_vendor_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["VendorDashboardPage"]]
    })], VendorDashboardPageModule);
    /***/
  },

  /***/
  "./src/app/vendor-dashboard/vendor-dashboard.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/vendor-dashboard/vendor-dashboard.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorDashboardVendorDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.header-md::after {\n  background-image: none;\n}\n\n.vendor-title {\n  background-color: #05274d;\n  border-bottom-left-radius: 35px;\n  border-bottom-right-radius: 35px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n}\n\n.toggle {\n  --background:#fff;\n  --background-checked:#fff;\n  height: 15px;\n  --handle-background:#e44424;\n  --handle-background-checked:#06af74;\n  --handle-spacing:0px;\n}\n\n.signout {\n  right: 10px;\n  position: relative;\n  font-size: 25px;\n}\n\nsmall {\n  font-size: 60%;\n  background-color: #f5f6f9;\n  border-radius: 10px;\n  color: #000;\n  width: 15px;\n  height: 15px;\n  text-align: center;\n  padding: 2px;\n  position: relative;\n  top: -8px;\n  right: 12px;\n}\n\n.vendor-img {\n  border: 1px solid #f1f1f1;\n  border-radius: 50%;\n  height: 42px;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 6px;\n  background: #05274d;\n  padding: 8px 14px;\n  font-size: 14px;\n  outline: none;\n  color: white;\n  margin: 8px 17px;\n  font-weight: 600;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLWRhc2hib2FyZC9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFx2ZW5kb3ItZGFzaGJvYXJkXFx2ZW5kb3ItZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVuZG9yLWRhc2hib2FyZC92ZW5kb3ItZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUNLTDs7QUREQztFQUNHLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNLSjs7QURGQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci1kYXNoYm9hcmQvdmVuZG9yLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVuZG9yLWhlYWR7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIHBhZGRpbmctaW5saW5lOjBweDtcbn1cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmU7XG59XG4udmVuZG9yLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6IzA1Mjc0ZDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjM1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xufVxuLnRvZ2dsZXtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZjtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDojZmZmO1xuICAgIGhlaWdodDoxNXB4O1xuICAgIC0taGFuZGxlLWJhY2tncm91bmQ6I2U0NDQyNDtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IzA2YWY3NDtcbiAgICAtLWhhbmRsZS1zcGFjaW5nOjBweDtcbn1cbi5zaWdub3V0e1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgLy8gY29sb3I6ICNmNjdmNzc7XG4gfVxuXG4gc21hbGx7ICAgIFxuICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtOHB4O1xuICAgIHJpZ2h0OiAxMnB4O1xufVxuLnZlbmRvci1pbWd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OjQycHg7XG59XG5cbi5wcm9kdWN0bGlzdCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogIzA1Mjc0ZDtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgb3V0bGluZTpub25lO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbjogOHB4IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDoxMDAlO1xuIH0iLCIudmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuLnZlbmRvci10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTI3NGQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4udG9nZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmY7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiNmZmY7XG4gIGhlaWdodDogMTVweDtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDojZTQ0NDI0O1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IzA2YWY3NDtcbiAgLS1oYW5kbGUtc3BhY2luZzowcHg7XG59XG5cbi5zaWdub3V0IHtcbiAgcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogMTJweDtcbn1cblxuLnZlbmRvci1pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDJweDtcbn1cblxuLnByb2R1Y3RsaXN0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogOHB4IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/vendor-dashboard/vendor-dashboard.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/vendor-dashboard/vendor-dashboard.page.ts ***!
    \***********************************************************/

  /*! exports provided: VendorDashboardPage */

  /***/
  function srcAppVendorDashboardVendorDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorDashboardPage", function () {
      return VendorDashboardPage;
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

    var VendorDashboardPage = /*#__PURE__*/function () {
      function VendorDashboardPage(util, actRoute, router, api, popoverController, loadingCtrl, menu) {
        _classCallCheck(this, VendorDashboardPage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.name = localStorage.getItem('name') ? localStorage.getItem('name') : '';
        this.shopId = localStorage.getItem('fash_user_id');
        this.tokenId = localStorage.getItem('token');
      }

      _createClass(VendorDashboardPage, [{
        key: "viewPlan",
        value: function viewPlan() {
          this.router.navigate(['plans']);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          // the root left menu should be disabled on this page
          //this.menu.enable(true);
          this.getvendorStatus();
          this.getpackageReport();
          this.vendorPack();
          this.getshopDetails();
        }
      }, {
        key: "vendorPack",
        value: function vendorPack() {
          var _this = this;

          this.shopId = localStorage.getItem('fash_user_id');
          var pObj = {
            action: "vendor_currentpackage",
            vendor_id: this.shopId
          };
          this.api.vendorCurrentPackage(function (response) {
            if (response.status == true) {
              _this.expiry_date = response.expiry_date;
              _this.showstatus = true;
            } else if (response.status == false) {
              _this.showstatus = false;
              _this.showbutton = response.message;
            }
          }, pObj);
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          console.log('Refreshing Start');
          this.ngOnInit();
          setTimeout(function () {
            console.log('Refreshing Ended');
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "getpackageReport",
        value: function getpackageReport() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var catObj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.shopId = localStorage.getItem('fash_user_id');
                    catObj = {
                      action: "vendor_package",
                      vendor_id: this.shopId
                    };
                    this.api.getPackageReport(function (response) {
                      if (response.status == true) {
                        _this2.pack_type = response.status;
                        _this2.banners = response.banners;
                        _this2.products = response.products;
                        _this2.coupons = response.coupons;
                      } else {
                        _this2.pack_type = response.status;
                      }
                    }, catObj);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getdashboardDetails();
        }
      }, {
        key: "getvendorStatus",
        value: function getvendorStatus() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var vendorObj;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    vendorObj = {
                      action: "getVendorStatus",
                      shopId: this.shopId,
                      tokenId: this.tokenId
                    };
                    this.api.fetchVendorStatus(function (response) {
                      _this3.status = response.status;
                      _this3.orders = response.orders;
                    }, vendorObj);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getshopDetails",
        value: function getshopDetails() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var dashboardObj;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    dashboardObj = {
                      action: "getProfileDetails",
                      login_status: "vendor",
                      shopId: this.shopId
                    };
                    this.api.fetchShopDetails(function (response) {
                      //alert(JSON.stringify(response));
                      if (response.status == true) {
                        _this4.shopDetail = response;
                        _this4.offer_zone = response.offer_zone;

                        if (_this4.offer_zone == 'yes') {
                          _this4.menu.enable(false);
                        } else {
                          _this4.menu.enable(true);
                        }
                      } else {
                        _this4.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, dashboardObj);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var statObj, loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    statObj = {
                      action: "ChangeVendorStatus",
                      login_status: "vendor",
                      shopId: this.shopId,
                      status: this.status
                    };
                    _context4.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context4.sent;
                    loading.present();
                    this.api.changeVendorStatus(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        if (_this5.status == true) {
                          _this5.util.presentToast(response.message, 'success', 'bottom', 2500);
                        } else if (_this5.status == false) {
                          _this5.util.presentToast(response.message, 'danger', 'bottom', 2500);
                        }

                        _this5.getvendorStatus();
                      } else {
                        _this5.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, statObj);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getdashboardDetails",
        value: function getdashboardDetails() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var dashObj;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    dashObj = {
                      action: "dashboardDetails",
                      vendor_id: localStorage.getItem('fash_user_id')
                    };
                    /*let loading = await this.loadingCtrl.create({
                                    spinner:'circles',
                                    message: 'Please wait',
                                  });
                                  loading.present();*/

                    this.api.fetchDashboard(function (response) {
                      //loading.dismiss();
                      if (response.status == true) {
                        _this6.dashboard = response;
                      } else {
                        _this6.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, dashObj);

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "orderspag",
        value: function orderspag() {
          this.router.navigate(['orders']);
        }
      }, {
        key: "renewal",
        value: function renewal() {
          this.router.navigate(['plans']);
        }
      }, {
        key: "returnorders",
        value: function returnorders() {
          this.router.navigate(['exchange']);
        }
      }, {
        key: "addProduct",
        value: function addProduct(products, user_id) {
          if (products > 0) {
            this.router.navigate(['/request-new-product/' + this.shopId + "/" + user_id]);
          } else {
            this.router.navigate(['plans']);
          }
        }
      }, {
        key: "goReview",
        value: function goReview(vendor_id, pack_type) {
          if (pack_type == false) {
            this.router.navigate(['plans']);
          } else {
            this.router.navigate(['userreviews', {
              vendor_id: vendor_id
            }]);
          }
        }
      }, {
        key: "gotoPageproducts",
        value: function gotoPageproducts(vendor_id, products, pack_type) {
          this.router.navigate(['categories/' + vendor_id]);
          /*if(pack_type==false)
          {
            this.router.navigate(['plans']);
          }
          else
          {
                if(products>0)
                {
                    this.router.navigate(['categories/'+vendor_id]);
                }
                else
                {
                    this.router.navigate(['plans']);
                }
          } */
        }
      }, {
        key: "gotoorderPage",
        value: function gotoorderPage(pack_type) {
          if (pack_type == false) {
            this.router.navigate(['plans']);
          } else {
            this.router.navigate(['orders']);
          }
        }
      }, {
        key: "gotosalesPage",
        value: function gotosalesPage(pack_type) {
          if (pack_type == false) {
            this.router.navigate(['plans']);
          } else {
            this.router.navigate(['payouts-commission']);
          }
        }
      }, {
        key: "goBids",
        value: function goBids() {
          this.router.navigate(['bid-list']);
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

      return VendorDashboardPage;
    }();

    VendorDashboardPage.ctorParameters = function () {
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }];
    };

    VendorDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendor-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./vendor-dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor-dashboard/vendor-dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./vendor-dashboard.page.scss */
      "./src/app/vendor-dashboard/vendor-dashboard.page.scss"))["default"]]
    })], VendorDashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=vendor-dashboard-vendor-dashboard-module-es5.js.map