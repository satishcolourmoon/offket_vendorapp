function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vm-dashboard-vm-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vm-dashboard/vm-dashboard.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vm-dashboard/vm-dashboard.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVmDashboardVmDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar style=\"--background: #f47a20;color: #fff;\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Visual Merchant Dashboard\n    </ion-title>\n    <!-- <ion-icon name=\"power\" slot=\"end\" class=\"signout\" (click)=\"logout()\"></ion-icon> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card style=\"border: 1px solid #c2bbbb;outline:none\">\n<ion-card-content style=\"padding: 15px;\">\n  <ion-row>\n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Today Orders<br> </b><span style=\"color: #000;\">{{dashboard?.today_orders}}</span>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Total Orders<br> </b><span style=\"color: #000;\">{{dashboard?.total_orders}}</span>\n        </ion-col>\n        \n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Total Stores<br> </b><span style=\"color: #000;\">{{dashboard?.total_stores}}</span>\n        </ion-col>\n        \n   </ion-row>\n\n\n</ion-card-content>\n</ion-card>\n\n\n  <h5 *ngIf=\"shops.length>0\"\n    style=\"padding:0px;margin: 5px 0px 5px 12px;color: #091a21;font-size: 16px;font-weight: 600;\">{{shops_count}} Shops </h5>\n  <ion-card *ngFor=\"let shop of shops\" (click)=\"viewShop(shop.id)\"\n    style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;\">\n    <ion-card-content style=\"padding: 2px;\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"{{shop.shop_logo}}\" alt=\"\" class=\"shop_logo\">\n        </ion-col>\n        <ion-col size=\"8\" class=\"vendorlist\">\n          <h2 style=\"color:#000;font-size: 20px;\">{{shop.shop_name}}</h2>\n          <h5>{{shop.city}}</h5>\n          <p>{{shop.mobile}}</p>\n          <ion-icon class=\"arrowright\" name=\"arrow-forward-circle-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div *ngIf=\"shops.length==0\">\n    <h5 style=\"padding:0px;margin: 5px 0px 5px 12px;color: #091a21;font-size: 16px;font-weight: 600; text-align: center; margin: 20px;\">No Shops Found </h5>\n    <!-- <ion-card *ngFor=\"let s of [1,2,3,4,5]\" style=\"box-shadow: 0px 2px 8px 3px #e2e2e2;border-radius: 15px;\">\n      <ion-card-content style=\"padding: 2px;\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-thumbnail>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n          </ion-col>\n          <ion-col size=\"8\">\n            <h2 style=\"color:#000\">\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h2>\n            <p>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card> -->\n  </div>\n\n  <!-- <ion-card *ngFor=\"let shop of shops\" (click)=\"viewShop(shop.id)\" style=\"outline:none\">\n    <ion-card-content>\n      <img src=\"{{shop.shop_logo}}\" alt=\"\" class=\"shop_logo\">\n      <h2 style=\"text-align: center;\">{{shop.shop_name}}</h2>\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/vm-dashboard/vm-dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/vm-dashboard/vm-dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: VmDashboardPageRoutingModule */

  /***/
  function srcAppVmDashboardVmDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VmDashboardPageRoutingModule", function () {
      return VmDashboardPageRoutingModule;
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


    var _vm_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vm-dashboard.page */
    "./src/app/vm-dashboard/vm-dashboard.page.ts");

    var routes = [{
      path: '',
      component: _vm_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["VmDashboardPage"]
    }];

    var VmDashboardPageRoutingModule = function VmDashboardPageRoutingModule() {
      _classCallCheck(this, VmDashboardPageRoutingModule);
    };

    VmDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VmDashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/vm-dashboard/vm-dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/vm-dashboard/vm-dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: VmDashboardPageModule */

  /***/
  function srcAppVmDashboardVmDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VmDashboardPageModule", function () {
      return VmDashboardPageModule;
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


    var _vm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vm-dashboard-routing.module */
    "./src/app/vm-dashboard/vm-dashboard-routing.module.ts");
    /* harmony import */


    var _vm_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vm-dashboard.page */
    "./src/app/vm-dashboard/vm-dashboard.page.ts");

    var VmDashboardPageModule = function VmDashboardPageModule() {
      _classCallCheck(this, VmDashboardPageModule);
    };

    VmDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["VmDashboardPageRoutingModule"]],
      declarations: [_vm_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["VmDashboardPage"]]
    })], VmDashboardPageModule);
    /***/
  },

  /***/
  "./src/app/vm-dashboard/vm-dashboard.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/vm-dashboard/vm-dashboard.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVmDashboardVmDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".arrowright {\n  font-weight: 900;\n  font-size: 30px;\n  position: relative;\n  float: right;\n  right: 15px;\n  top: -10px;\n  color: #ee9e63;\n}\n\n.vendorlist h2 {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.vendorlist p {\n  color: #080866;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.vendorlist h5 {\n  font-size: 15px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm0tZGFzaGJvYXJkL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXHZtLWRhc2hib2FyZFxcdm0tZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdm0tZGFzaGJvYXJkL3ZtLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NSOztBRENJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NSOztBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC92bS1kYXNoYm9hcmQvdm0tZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnJvd3JpZ2h0e1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdG9wOiAtMTBweDtcbiAgICBjb2xvcjogI2VlOWU2Mztcbn1cbi52ZW5kb3JsaXN0IHtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjMDgwODY2O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn0iLCIuYXJyb3dyaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IC0xMHB4O1xuICBjb2xvcjogI2VlOWU2Mztcbn1cblxuLnZlbmRvcmxpc3QgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udmVuZG9ybGlzdCBwIHtcbiAgY29sb3I6ICMwODA4NjY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi52ZW5kb3JsaXN0IGg1IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/vm-dashboard/vm-dashboard.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/vm-dashboard/vm-dashboard.page.ts ***!
    \***************************************************/

  /*! exports provided: VmDashboardPage */

  /***/
  function srcAppVmDashboardVmDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VmDashboardPage", function () {
      return VmDashboardPage;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var VmDashboardPage = /*#__PURE__*/function () {
      function VmDashboardPage(router, util, api, actRoute, menu, loadingCtrl) {
        _classCallCheck(this, VmDashboardPage);

        this.router = router;
        this.util = util;
        this.api = api;
        this.actRoute = actRoute;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.shops = [];
        this.vmId = this.actRoute.snapshot.paramMap.get('vmId');
      }

      _createClass(VmDashboardPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          // the root left menu should be disabled on this page
          this.menu.enable(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vm_id = localStorage.getItem('fash_user_id');
          this.getdashboardDetails();
          this.getshopLists();
        }
      }, {
        key: "viewShop",
        value: function viewShop(shopId) {
          this.router.navigate(['/vendor-profile', shopId]);
        }
      }, {
        key: "getshopLists",
        value: function getshopLists() {
          var _this = this;

          var vmObj = {
            action: "shops_list",
            user_id: this.vmId
          }; //this.util.showLoader();

          this.api.fetchShopLists(function (response) {
            setTimeout(function () {
              _this.util.hideLoader();

              if (response.status == true) {
                _this.shops = response.shops;
                _this.shops_count = response.shops_count;
              } else {//this.util.presentToast(response.message, 'danger', 'bottom', 500);
              }
            }, 1000);
          }, vmObj);
        }
      }, {
        key: "getdashboardDetails",
        value: function getdashboardDetails() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var dashObj, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    dashObj = {
                      action: "dashboardDetails",
                      vm_id: this.vm_id
                    };
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context.sent;
                    loading.present();
                    this.api.fetchDashboard(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this2.dashboard = response;
                      } else {
                        _this2.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, dashObj);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return VmDashboardPage;
    }();

    VmDashboardPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    VmDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vm-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./vm-dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vm-dashboard/vm-dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./vm-dashboard.page.scss */
      "./src/app/vm-dashboard/vm-dashboard.page.scss"))["default"]]
    })], VmDashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=vm-dashboard-vm-dashboard-module-es5.js.map