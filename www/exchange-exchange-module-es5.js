function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exchange-exchange-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/exchange/exchange.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exchange/exchange.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExchangeExchangePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n  \t<ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">Exchange & Refund</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content>\n\t<ion-card *ngFor=\"let ord of orders\" >\n      <ion-card-content >\n\n      \t\n      \t<ion-row>\n          <ion-col class=\"orderInfoKey\">Product Name</ion-col>\n          <ion-col>{{ord.product_name}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">OrderId</ion-col>\n          <ion-col class=\"orderData\">{{ord.order_id}}</ion-col>\n        </ion-row>\n        \n        <ion-row >\n          <ion-col class=\"orderInfoKey\">Payment Type</ion-col>\n          <ion-col class=\"orderData\">{{ord.payment_type}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Payment Status</ion-col>\n          <ion-col class=\"orderData\">{{ord.payment_status}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col class=\"orderInfoKey\">Order Status</ion-col>\n          <ion-col class=\"orderData\">{{ord.service_status}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col class=\"orderInfoKey\">Amount</ion-col>\n          <ion-col class=\"orderData\">&#8377;{{ord.unit_price}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col class=\"orderInfoKey\">Order Date</ion-col>\n          <ion-col class=\"orderData\">{{ord.created_date}}</ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <ion-button color=\"success\" (click)=\"aceptOrder(ord.id,ord.session_id,ord.delivery_type)\">{{ord.button}}</ion-button>\n          </ion-col>\n\n          <!-- <ion-col size=\"6\">\n            <ion-button  color=\"danger\" (click)=\"cancelOrder(ord.id)\">Cancel</ion-button>\n          </ion-col> -->\n     </ion-row>\n\n      </ion-card-content>\n\n\n    </ion-card>\n\n    <ion-card *ngIf=\"no_neworders==false\">\n    \t\t<ion-card-content >\n    \t\t\t<ion-row>\n    \t\t\t\t<ion-col size=\"12\" class=\"ion-text-center\">\n    \t\t\t\t\t<h3 style=\"color:#05274d;\">No Refund Products</h3>\n    \t\t\t\t</ion-col>\n    \t\t\t</ion-row>\n    \t\t</ion-card-content>\n    </ion-card>\n\n\n    \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/exchange/exchange-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/exchange/exchange-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ExchangePageRoutingModule */

  /***/
  function srcAppExchangeExchangeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExchangePageRoutingModule", function () {
      return ExchangePageRoutingModule;
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


    var _exchange_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./exchange.page */
    "./src/app/exchange/exchange.page.ts");

    var routes = [{
      path: '',
      component: _exchange_page__WEBPACK_IMPORTED_MODULE_3__["ExchangePage"]
    }];

    var ExchangePageRoutingModule = function ExchangePageRoutingModule() {
      _classCallCheck(this, ExchangePageRoutingModule);
    };

    ExchangePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExchangePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/exchange/exchange.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/exchange/exchange.module.ts ***!
    \*********************************************/

  /*! exports provided: ExchangePageModule */

  /***/
  function srcAppExchangeExchangeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExchangePageModule", function () {
      return ExchangePageModule;
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


    var _exchange_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./exchange-routing.module */
    "./src/app/exchange/exchange-routing.module.ts");
    /* harmony import */


    var _exchange_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./exchange.page */
    "./src/app/exchange/exchange.page.ts");

    var ExchangePageModule = function ExchangePageModule() {
      _classCallCheck(this, ExchangePageModule);
    };

    ExchangePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _exchange_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExchangePageRoutingModule"]],
      declarations: [_exchange_page__WEBPACK_IMPORTED_MODULE_6__["ExchangePage"]]
    })], ExchangePageModule);
    /***/
  },

  /***/
  "./src/app/exchange/exchange.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/exchange/exchange.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppExchangeExchangePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\nion-segment {\n  --color: #040404;\n  /* height: 30px; */\n  border-bottom: 1px solid #f47a206e;\n}\n\nion-segment-button {\n  --color: #0e0e0e;\n  --indicator-color: #f47a20;\n  --background-checked: #ffffff;\n  --color-checked: #f47a20;\n  --indicator-height: 3px;\n  /* min-height: 30px; */\n  text-transform: capitalize;\n  --padding-bottom: 10px;\n  --padding-top: 5px;\n}\n\n.orderInfoKey {\n  font-weight: bold;\n  font-size: 13px;\n}\n\n.order-data {\n  text-align: right;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjaGFuZ2UvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcZXhjaGFuZ2VcXGV4Y2hhbmdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXhjaGFuZ2UvZXhjaGFuZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUU7RUFDTSxpQkFBQTtFQUNBLGVBQUE7QUNHUjs7QURERTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvZXhjaGFuZ2UvZXhjaGFuZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlbmRvci1oZWFke1xuICBmb250LXNpemU6MTZweDtcbiAgZm9udC13ZWlnaHQ6NjAwO1xuICBwYWRkaW5nLWlubGluZTowcHg7XG59XG5pb24tc2VnbWVudHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChicm93biAsIGJyb3duKTsgXG4gICAgLS1jb2xvcjogIzA0MDQwNDtcbiAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNDdhMjA2ZTtcbiAgfVxuICBpb24tc2VnbWVudC1idXR0b257XG4gICAgLS1jb2xvcjogIzBlMGUwZTtcbiAgICAtLWluZGljYXRvci1jb2xvcjogI2Y0N2EyMDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmNDdhMjA7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG4gICAgLyogbWluLWhlaWdodDogMzBweDsgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAub3JkZXJJbmZvS2V5e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgIFxuICAgICAgICBmb250LXNpemU6MTNweDsgICAgICAgIFxuICB9XG4gIC5vcmRlci1kYXRhe1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgZm9udC1zaXplOjEzcHg7XG59IiwiLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIC0tY29sb3I6ICMwNDA0MDQ7XG4gIC8qIGhlaWdodDogMzBweDsgKi9cbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNDdhMjA2ZTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1jb2xvcjogIzBlMGUwZTtcbiAgLS1pbmRpY2F0b3ItY29sb3I6ICNmNDdhMjA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmZmZmO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICNmNDdhMjA7XG4gIC0taW5kaWNhdG9yLWhlaWdodDogM3B4O1xuICAvKiBtaW4taGVpZ2h0OiAzMHB4OyAqL1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ub3JkZXJJbmZvS2V5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm9yZGVyLWRhdGEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/exchange/exchange.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/exchange/exchange.page.ts ***!
    \*******************************************/

  /*! exports provided: ExchangePage */

  /***/
  function srcAppExchangeExchangePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExchangePage", function () {
      return ExchangePage;
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

    var ExchangePage = /*#__PURE__*/function () {
      function ExchangePage(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api, alertController) {
        _classCallCheck(this, ExchangePage);

        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.alertController = alertController;
      }

      _createClass(ExchangePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vendor_id = localStorage.getItem('fash_user_id');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getpackageReport();
          this.getOrdersExchangelist();
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
        key: "getOrdersExchangelist",
        value: function getOrdersExchangelist() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var exorderObj, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    exorderObj = {
                      action: "getexchange_orders",
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
                    this.api.fetchexchange_orders(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this2.orders = response.orders;

                        if (_this2.orders.length > 0) {
                          _this2.no_neworders = false;
                        }

                        _this2.no_neworders = true;
                      } else {
                        _this2.no_neworders = false;
                      }
                    }, exorderObj);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "aceptOrder",
        value: function aceptOrder(oid, session_id, delivery_type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirm!',
                      message: 'Are you sure you want to refund this product ?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'OK',
                        handler: function handler() {
                          var acceptObj = {
                            action: "acceptExchange_orders",
                            oid: oid,
                            vendor_id: _this3.vendor_id,
                            session_id: session_id
                          };

                          _this3.api.acceptExchangeorders(function (response) {
                            if (response.status == true) {
                              _this3.util.presentToast(response.message, 'success', 'bottom', 2000);

                              _this3.router.navigate(['/vendor-dashboard/' + _this3.vendor_id]);
                            } else {
                              _this3.util.presentToast(response.message, 'danger', 'bottom', 2000);
                            }
                          }, acceptObj);
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ExchangePage;
    }();

    ExchangePage.ctorParameters = function () {
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
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ExchangePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-exchange',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./exchange.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/exchange/exchange.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./exchange.page.scss */
      "./src/app/exchange/exchange.page.scss"))["default"]]
    })], ExchangePage);
    /***/
  }
}]);
//# sourceMappingURL=exchange-exchange-module-es5.js.map