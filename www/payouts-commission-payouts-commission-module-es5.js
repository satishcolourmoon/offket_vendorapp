function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payouts-commission-payouts-commission-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payouts-commission/payouts-commission.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payouts-commission/payouts-commission.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPayoutsCommissionPayoutsCommissionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">Payout Commission</ion-title>\n  </ion-toolbar>\n  <ion-segment scrollable [(ngModel)]=\"payouts\" name=\"payouts\">\n    <ion-segment-button value=\"pending_commission\" (click)=\"showOrder('pending_commission')\">\n      <ion-icon name=\"reader-outline\" style=\"margin: 4px;\"></ion-icon>\n      Pending Commission\n    </ion-segment-button>\n    <ion-segment-button value=\"settled_commission\" (click)=\"showOrder('settled_commission')\">\n      <ion-icon name=\"ellipsis-horizontal-circle-outline\" style=\"margin: 4px;\"></ion-icon>\n      Settled Commission\n    </ion-segment-button>\n   \n  </ion-segment>\n</ion-header>\n\n\n\n<ion-content>\n\n\n  <div *ngIf=\"pending_settle==true\"><!---->\n    <ion-card *ngFor=\"let settl of settlements\"><!---->\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Vendor Amount</ion-col>\n          <ion-col class=\"orderData\">{{settl.vendor_amount}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Requested Amount</ion-col>\n          <ion-col class=\"orderData\">{{settl.request_amount}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Description</ion-col>\n          <ion-col class=\"orderData\">{{settl.description}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Status</ion-col>\n          <ion-col class=\"orderData\">{{settl.status}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Created Date</ion-col>\n          <ion-col class=\"orderData\">{{settl.created_date}}</ion-col>\n        </ion-row>\n        \n        \n      </ion-card-content>\n    </ion-card>\n     <!-- <ion-card *ngIf=\"no_pending_settle=='true'\"> \n         <h3 style=\"text-align: center;color: #05274d;font-size:16px;\">{{no_pending_settle}}No Pending Settlements</h3>\n    </ion-card> -->\n  </div>\n\n <div *ngIf=\"completed_settle==true\">\n    <ion-card *ngFor=\"let settl of comsettlements\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Vendor Amount</ion-col>\n          <ion-col class=\"orderData\">{{settl.vendor_amount}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Requested Amount</ion-col>\n          <ion-col class=\"orderData\">{{settl.request_amount}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Requested Date</ion-col>\n          <ion-col class=\"orderData\">{{settl.created_date}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Payment Date</ion-col>\n          <ion-col class=\"orderData\">{{settl.payment_date}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Payment Mode</ion-col>\n          <ion-col class=\"orderData\">{{settl.mode_payment}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Transaction ID</ion-col>\n          <ion-col class=\"orderData\">{{settl.transaction_id}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Admin Comment</ion-col>\n          <ion-col class=\"orderData\">{{settl.admin_description}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Status</ion-col>\n          <ion-col class=\"orderData\">{{settl.status}}</ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n    \n     <ion-card *ngIf=\"no_completed_settle==true\">\n         <h3 style=\"text-align: center;color: #05274d;font-size:16px;\"> No Completed Settlements</h3>\n    </ion-card>\n  </div>\n \n \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/payouts-commission/payouts-commission-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/payouts-commission/payouts-commission-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: PayoutsCommissionPageRoutingModule */

  /***/
  function srcAppPayoutsCommissionPayoutsCommissionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayoutsCommissionPageRoutingModule", function () {
      return PayoutsCommissionPageRoutingModule;
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


    var _payouts_commission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payouts-commission.page */
    "./src/app/payouts-commission/payouts-commission.page.ts");

    var routes = [{
      path: '',
      component: _payouts_commission_page__WEBPACK_IMPORTED_MODULE_3__["PayoutsCommissionPage"]
    }];

    var PayoutsCommissionPageRoutingModule = function PayoutsCommissionPageRoutingModule() {
      _classCallCheck(this, PayoutsCommissionPageRoutingModule);
    };

    PayoutsCommissionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PayoutsCommissionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/payouts-commission/payouts-commission.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/payouts-commission/payouts-commission.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PayoutsCommissionPageModule */

  /***/
  function srcAppPayoutsCommissionPayoutsCommissionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayoutsCommissionPageModule", function () {
      return PayoutsCommissionPageModule;
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


    var _payouts_commission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payouts-commission-routing.module */
    "./src/app/payouts-commission/payouts-commission-routing.module.ts");
    /* harmony import */


    var _payouts_commission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payouts-commission.page */
    "./src/app/payouts-commission/payouts-commission.page.ts");

    var PayoutsCommissionPageModule = function PayoutsCommissionPageModule() {
      _classCallCheck(this, PayoutsCommissionPageModule);
    };

    PayoutsCommissionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payouts_commission_routing_module__WEBPACK_IMPORTED_MODULE_5__["PayoutsCommissionPageRoutingModule"]],
      declarations: [_payouts_commission_page__WEBPACK_IMPORTED_MODULE_6__["PayoutsCommissionPage"]]
    })], PayoutsCommissionPageModule);
    /***/
  },

  /***/
  "./src/app/payouts-commission/payouts-commission.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/payouts-commission/payouts-commission.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPayoutsCommissionPayoutsCommissionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-segment {\n  --color: #040404;\n  /* height: 30px; */\n  border-bottom: 1px solid #f47a206e;\n}\n\nion-segment-button {\n  --color: #0e0e0e;\n  --indicator-color: #05274d;\n  --background-checked: #ffffff;\n  --color-checked: #05274d;\n  --indicator-height: 3px;\n  /* min-height: 30px; */\n  text-transform: capitalize;\n  --padding-bottom: 10px;\n  --padding-top: 5px;\n  font-size: 12px;\n}\n\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.orderData {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5b3V0cy1jb21taXNzaW9uL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXHBheW91dHMtY29tbWlzc2lvblxccGF5b3V0cy1jb21taXNzaW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5b3V0cy1jb21taXNzaW9uL3BheW91dHMtY29tbWlzc2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUNBSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGF5b3V0cy1jb21taXNzaW9uL3BheW91dHMtY29tbWlzc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChicm93biAsIGJyb3duKTsgXG4gICAgLS1jb2xvcjogIzA0MDQwNDtcbiAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNDdhMjA2ZTtcbiAgfVxuICBpb24tc2VnbWVudC1idXR0b257XG4gICAgLS1jb2xvcjogIzBlMGUwZTtcbiAgICAtLWluZGljYXRvci1jb2xvcjogIzA1Mjc0ZDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMwNTI3NGQ7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG4gICAgLyogbWluLWhlaWdodDogMzBweDsgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLnZlbmRvci1oZWFke1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBwYWRkaW5nLWlubGluZTowcHg7XG59XG4ub3JkZXJEYXRhe1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xufSIsImlvbi1zZWdtZW50IHtcbiAgLS1jb2xvcjogIzA0MDQwNDtcbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0N2EyMDZlO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAtLWNvbG9yOiAjMGUwZTBlO1xuICAtLWluZGljYXRvci1jb2xvcjogIzA1Mjc0ZDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gIC0tY29sb3ItY2hlY2tlZDogIzA1Mjc0ZDtcbiAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG4gIC8qIG1pbi1oZWlnaHQ6IDMwcHg7ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG4ub3JkZXJEYXRhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/payouts-commission/payouts-commission.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/payouts-commission/payouts-commission.page.ts ***!
    \***************************************************************/

  /*! exports provided: PayoutsCommissionPage */

  /***/
  function srcAppPayoutsCommissionPayoutsCommissionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayoutsCommissionPage", function () {
      return PayoutsCommissionPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var PayoutsCommissionPage = /*#__PURE__*/function () {
      function PayoutsCommissionPage(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api) {
        _classCallCheck(this, PayoutsCommissionPage);

        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.payouts = "pending_commission";
        this.pending_settle = true;
        this.completed_settle = false;
        this.no_pending_settle = false;
        this.no_completed_settle = false;
      }

      _createClass(PayoutsCommissionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vendor_id = localStorage.getItem('fash_user_id');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getpackageReport();
          this.getPendingsettlemts();
          this.getPendingsettlemts();
        }
      }, {
        key: "getpackageReport",
        value: function getpackageReport() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

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
                        _this.pack_type = response.status;
                      } else {
                        _this.router.navigate(['plans']);
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
        key: "getPendingsettlemts",
        value: function getPendingsettlemts() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var settlementObj, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    settlementObj = {
                      action: "pending_settlements",
                      vendor_id: this.vendor_id
                    };
                    _context2.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context2.sent;
                    loading.present();
                    this.api.fetchPendingsettlelist(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this2.no_pending_settle = 'false';
                        _this2.settlements = response.settlements;

                        if (_this2.settlements.length > 0) {
                          _this2.no_pending_settle = 'true';
                        } //alert(JSON.stringify(this.settlements));

                      } else {
                        _this2.no_pending_settle = 'true';
                      }
                    }, settlementObj);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getCompletedsettlemts",
        value: function getCompletedsettlemts() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var com_settlementObj, loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    com_settlementObj = {
                      action: "completed_Settlements",
                      vendor_id: this.vendor_id
                    };
                    _context3.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context3.sent;
                    loading.present();
                    this.api.fetchCompletedsettlelist(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this3.no_completed_settle = false;
                        _this3.comsettlements = response.settlements; //alert(JSON.stringify(this.settlements));
                      } else {
                        _this3.no_completed_settle = true;
                      }
                    }, com_settlementObj);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "showOrder",
        value: function showOrder(type) {
          if (type == "pending_commission") {
            this.pending_settle = true;
            this.completed_settle = false;
          } else if (type == "settled_commission") {
            this.completed_settle = true;
            this.pending_settle = false;
            this.getCompletedsettlemts();
          }
        }
      }]);

      return PayoutsCommissionPage;
    }();

    PayoutsCommissionPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }];
    };

    PayoutsCommissionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payouts-commission',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./payouts-commission.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payouts-commission/payouts-commission.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./payouts-commission.page.scss */
      "./src/app/payouts-commission/payouts-commission.page.scss"))["default"]]
    })], PayoutsCommissionPage);
    /***/
  }
}]);
//# sourceMappingURL=payouts-commission-payouts-commission-module-es5.js.map