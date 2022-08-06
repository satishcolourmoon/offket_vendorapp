function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderdetails-orderdetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetails/orderdetails.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetails/orderdetails.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrderdetailsOrderdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title>Order Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"font-family: Arial, Helvetica, sans-serif !important;\">\n\n  \n  <ion-card>\n    <h2 class=\"title\">Delivery Details</h2>\n    <ion-card-content style=\"padding: 0px 15px;\">\n      <h2><b>{{ordersdetails?.customer_name}}</b>  </h2>\n      <p>{{ordersdetails?.address}} <br>{{ordersdetails?.mobile}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  \n  <ion-card>\n    <h2 class=\"title\">User Details</h2>\n    <ion-card-content style=\"padding: 0px 15px;\">\n      <b>Name : </b> {{ordersdetails?.customer_name}} <br>\n      <p><b>Mobile :</b> {{ordersdetails?.mobile}}</p>\n    </ion-card-content>\n  </ion-card>\n\n \n  <ion-card>\n     <h2 class=\"title\">Item Details</h2>\n    <ion-card-content style=\"padding: 0px 15px;\">\n      <b>Order Id:</b> {{ordersdetails?.id}}<br>\n      <b>Order Placed on:</b> {{ordersdetails?.placed_on}}<br>\n      <b>Order Status:</b> {{ordersdetails?.order_status}}\n      <b>Delivered Date:</b> {{ordersdetails?.delivered_date}}\n\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card >\n    <h2 class=\"title\">Products</h2>\n    <ion-card-content style=\"padding: 0px 15px;\">\n          <table>\n            <tr>\n              <th>Name</th>\n              <th>Price</th>\n              <th>Quantity</th>\n              <th>Attributes</th>\n              <th>Total Price</th>\n            </tr>\n\n            <tr *ngFor=\"let cart of ordersdetails?.cartdetails\">\n              <td>\n                <img src=\"{{cart.image}}\" style=\"width: 50px; height: 50px;\">\n              <p>{{cart.productname}}</p></td>\n              <td> ₹{{cart.price}}</td>\n              <td>{{cart.quantity}}</td>\n              <td><div *ngFor=\"let atr of cart.attributes\"><b>{{atr.attribute_type}} :</b>{{atr.attribute_values}}</div></td>\n              <td>₹{{cart.unit_price}}</td>\n            </tr>\n             <tr class=\"ion-text-right\">\n              <td colspan=\"2\">Total:</td>\n              <td colspan=\"3\"> ₹{{ordersdetails?.sub_total}}</td>\n            </tr>\n            <tr *ngIf=\"ordersdetails?.coupon_disount!='0'\" class=\"ion-text-right\">\n              <td colspan=\"2\">Coupon Code:</td>\n              <td colspan=\"3\">- ₹{{ordersdetails?.coupon_disount}}</td>\n            </tr>\n            <tr class=\"ion-text-right\">\n              <td colspan=\"2\">Delivery:</td>\n              <td colspan=\"3\">+ ₹{{ordersdetails?.deliveryboy_commission}}</td>\n            </tr>\n            <tr class=\"ion-text-right\">\n              <td colspan=\"2\">Grand Total:</td>\n              <td colspan=\"3\">₹{{ordersdetails?.amount}}</td>\n            </tr>\n          </table>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <h2 class=\"title\">Payment Details</h2>\n    <ion-card-content style=\"padding: 0px 15px;\">\n      <b>Payment Option:</b> {{ordersdetails?.payment_type}} <br>\n      <b>Payment Status:</b> {{ordersdetails?.payment_status}}\n      \n    </ion-card-content>\n  </ion-card>\n\n    <!-- <ion-card *ngIf=\"ordersdetails?.order_status=='show'\">\n    <h2 class=\"title\">Delivery Boy Details</h2>\n    <ion-card-content style=\"padding: 0px 15px;\">\n      <b>Name:</b> {{ordersdetails?.delivery_name}} <br>\n      <b>Phone:</b> {{ordersdetails?.delivery_phone}} <br>\n      <b>Alternative Phone:</b> {{ordersdetails?.alternative_mobiles}} <br>\n      <b>Delivery Amount:</b> {{ordersdetails?.deliveryboy_commission}}\n      \n    </ion-card-content>\n  </ion-card> -->\n\n  \n\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/orderdetails/orderdetails-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/orderdetails/orderdetails-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: OrderdetailsPageRoutingModule */

  /***/
  function srcAppOrderdetailsOrderdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderdetailsPageRoutingModule", function () {
      return OrderdetailsPageRoutingModule;
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


    var _orderdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orderdetails.page */
    "./src/app/orderdetails/orderdetails.page.ts");

    var routes = [{
      path: '',
      component: _orderdetails_page__WEBPACK_IMPORTED_MODULE_3__["OrderdetailsPage"]
    }];

    var OrderdetailsPageRoutingModule = function OrderdetailsPageRoutingModule() {
      _classCallCheck(this, OrderdetailsPageRoutingModule);
    };

    OrderdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderdetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/orderdetails/orderdetails.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/orderdetails/orderdetails.module.ts ***!
    \*****************************************************/

  /*! exports provided: OrderdetailsPageModule */

  /***/
  function srcAppOrderdetailsOrderdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderdetailsPageModule", function () {
      return OrderdetailsPageModule;
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


    var _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orderdetails-routing.module */
    "./src/app/orderdetails/orderdetails-routing.module.ts");
    /* harmony import */


    var _orderdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orderdetails.page */
    "./src/app/orderdetails/orderdetails.page.ts");

    var OrderdetailsPageModule = function OrderdetailsPageModule() {
      _classCallCheck(this, OrderdetailsPageModule);
    };

    OrderdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderdetailsPageRoutingModule"]],
      declarations: [_orderdetails_page__WEBPACK_IMPORTED_MODULE_6__["OrderdetailsPage"]]
    })], OrderdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/orderdetails/orderdetails.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/orderdetails/orderdetails.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrderdetailsOrderdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  margin: 15px auto;\n  font-size: 18px;\n  color: #6e6d6c;\n}\n\n.title {\n  margin: 15px;\n  color: #6e6d6c;\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 12px 3px;\n  background-color: #05274d;\n  color: #fff;\n  text-align: center;\n}\n\ntd {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 6px 2px;\n  text-align: center;\n}\n\nion-card {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJkZXRhaWxzL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXG9yZGVyZGV0YWlsc1xcb3JkZXJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3JkZXJkZXRhaWxzL29yZGVyZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtFQUNELFdBQUE7QUNFSDs7QURFQTtFQUNHLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0g7O0FEQ0M7RUFDRyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRFdBO0VBQVMsWUFBQTtBQ1BUIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJkZXRhaWxzL29yZGVyZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IzZlNmQ2Yztcbn1cbi50aXRsZXtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgY29sb3I6ICM2ZTZkNmM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgd2lkdGg6IDEwMCU7XG5cbiB9XG4gXG50aCB7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIHBhZGRpbmc6IDEycHggM3B4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzA1Mjc0ZDtcbiAgIGNvbG9yOiAjZmZmO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiB0ZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogNnB4IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vLyB0ciB7XG4vLyAgICAgZGl2IHtcbi8vICAgICAgICAgdGR7XG4vLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAycHg7XG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbi8vICAgICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5pb24tY2FyZHtwYWRkaW5nOjVweDt9IiwiaDIge1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzZlNmQ2Yztcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBjb2xvcjogIzZlNmQ2YztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTJweCAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTI3NGQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNnB4IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/orderdetails/orderdetails.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/orderdetails/orderdetails.page.ts ***!
    \***************************************************/

  /*! exports provided: OrderdetailsPage */

  /***/
  function srcAppOrderdetailsOrderdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderdetailsPage", function () {
      return OrderdetailsPage;
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


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var OrderdetailsPage = /*#__PURE__*/function () {
      function OrderdetailsPage(util, router, actRoute, loadingCtrl, actionSheetController, api) {
        _classCallCheck(this, OrderdetailsPage);

        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.api = api;
      }

      _createClass(OrderdetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.oid = this.actRoute.snapshot.paramMap.get('oid'); //alert(this.oid);

          this.getOrderdetail();
        }
      }, {
        key: "getOrderdetail",
        value: function getOrderdetail() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var orderdetObj, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    orderdetObj = {
                      action: "getOrdersdetails",
                      oid: this.oid
                    };
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context.sent;
                    loading.present();
                    this.api.fetchOrderdetails(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this.ordersdetails = response.ordersdetails; //alert(JSON.stringify(this.orders));
                      } else {
                        _this.no_neworders = true;
                      }
                    }, orderdetObj);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return OrderdetailsPage;
    }();

    OrderdetailsPage.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    OrderdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orderdetails',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./orderdetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetails/orderdetails.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./orderdetails.page.scss */
      "./src/app/orderdetails/orderdetails.page.scss"))["default"]]
    })], OrderdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=orderdetails-orderdetails-module-es5.js.map