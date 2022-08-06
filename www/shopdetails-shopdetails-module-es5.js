function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopdetails-shopdetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopdetails/shopdetails.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopdetails/shopdetails.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopdetailsShopdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar style=\"--background: #f47a20;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title>Shop Detail</ion-title>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"{{currentSegment}}\">\n    <ion-segment-button value=\"products\">Products</ion-segment-button>\n    <ion-segment-button value=\"recent_orders\">Recent Orders</ion-segment-button>\n    <ion-segment-button value=\"shopinfo\">Shop Info</ion-segment-button>\n  </ion-segment>\n\n</ion-header>\n\n<ion-content #content>\n\n\n\n  <div *ngIf=\"currentSegment=='products'\">\n    <ion-card no-padding *ngFor=\"let p of products\">\n      <ion-card-content no-padding style=\"padding: 0px;\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n              <div style=\"width: 100px;height:100px;background-size: contain;background-repeat: no-repeat;border: 1px solid #f1f1f1;\n                border-radius: 5px;background-image: url({{p.image}});\">\n\n              </div>\n            </ion-col>\n            <ion-col size=\"8\">\n              <p><b>Name:</b> {{p.name}}</p>\n              <p><b>Price:</b> &#8377;{{p.price}}</p>\n              <p><b>Category:</b> {{p.categories}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n    <ion-button class=\"viewall_products\" routerLink=\"/products\">View All Products</ion-button>\n  </div>\n  <div *ngIf=\"currentSegment=='recent_orders'\">\n\n    <ion-card *ngFor=\"let newOrder of orders\" (click)=\"viewOrderDetails(newOrder.order_id)\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">OrderId</ion-col>\n          <ion-col>{{newOrder.order_id}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Order Date</ion-col>\n          <ion-col>{{newOrder.order_date}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Payment Type</ion-col>\n          <ion-col>{{newOrder.payment_type}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Payment Status</ion-col>\n          <ion-col>{{newOrder.payment_status}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Order Status</ion-col>\n          <ion-col>{{newOrder.order_status}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"orderInfoKey\">Amount</ion-col>\n          <ion-col>&#8377;{{newOrder.amount}}</ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-button class=\"viewall_products\" routerLink=\"/orders\">View All Orders</ion-button>\n  </div>\n  <div *ngIf=\"currentSegment=='shopinfo'\" class=\"shopinfo\">\n    <img src=\"{{shopDetail.shop_logo}}\" alt=\"\" style=\"width: 35%;margin: auto;display: block;\">\n    <h3 style=\"text-align: center;\">{{shopDetail.shop_name}}</h3>\n\n    <div style=\"margin:0px 20px;\">\n      <p>\n        <ion-icon name=\"mail\"></ion-icon> sales@cmr.com\n      </p>\n      <p>\n        <ion-icon name=\"call\"></ion-icon> +91-9123456789\n      </p>\n      <p>\n        <ion-icon name=\"location\"></ion-icon> DwarakaNagar, Vizag\n      </p>\n      <p>\n        <ion-icon name=\"time\"></ion-icon> Mon-Sat (8:00 am to 10:00 pm)\n      </p>\n    </div>\n\n  </div>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" *ngIf=\"currentSegment=='products'\">\n    <ion-fab-button style=\"--background: #f47a20;\" (click)=\"addproduct()\">\n      <ion-icon name=\"add\" style=\"font-size: 35px;\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content> -->";
    /***/
  },

  /***/
  "./src/app/shopdetails/shopdetails-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shopdetails/shopdetails-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ShopdetailsPageRoutingModule */

  /***/
  function srcAppShopdetailsShopdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopdetailsPageRoutingModule", function () {
      return ShopdetailsPageRoutingModule;
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


    var _shopdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shopdetails.page */
    "./src/app/shopdetails/shopdetails.page.ts");

    var routes = [{
      path: '',
      component: _shopdetails_page__WEBPACK_IMPORTED_MODULE_3__["ShopdetailsPage"]
    }];

    var ShopdetailsPageRoutingModule = function ShopdetailsPageRoutingModule() {
      _classCallCheck(this, ShopdetailsPageRoutingModule);
    };

    ShopdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShopdetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/shopdetails/shopdetails.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/shopdetails/shopdetails.module.ts ***!
    \***************************************************/

  /*! exports provided: ShopdetailsPageModule */

  /***/
  function srcAppShopdetailsShopdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopdetailsPageModule", function () {
      return ShopdetailsPageModule;
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


    var _shopdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shopdetails-routing.module */
    "./src/app/shopdetails/shopdetails-routing.module.ts");
    /* harmony import */


    var _shopdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shopdetails.page */
    "./src/app/shopdetails/shopdetails.page.ts");

    var ShopdetailsPageModule = function ShopdetailsPageModule() {
      _classCallCheck(this, ShopdetailsPageModule);
    };

    ShopdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shopdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopdetailsPageRoutingModule"]],
      declarations: [_shopdetails_page__WEBPACK_IMPORTED_MODULE_6__["ShopdetailsPage"]]
    })], ShopdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/shopdetails/shopdetails.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/shopdetails/shopdetails.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopdetailsShopdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-segment {\n  --color: #040404;\n  /* height: 30px; */\n  border-bottom: 1px solid #f47a206e;\n}\n\nion-segment-button {\n  --color: #0e0e0e;\n  --indicator-color: #f47a20;\n  --background-checked: #ffffff;\n  --color-checked: #f47a20;\n  --indicator-height: 3px;\n  /* min-height: 30px; */\n  text-transform: capitalize;\n  --padding-bottom: 10px;\n  --padding-top: 5px;\n}\n\n.shopinfo ion-icon {\n  color: #f47a20;\n}\n\n.viewall_products {\n  --background: #f47a20;\n  width: 50%;\n  margin: 10px auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcGRldGFpbHMvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcc2hvcGRldGFpbHNcXHNob3BkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvcGRldGFpbHMvc2hvcGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDQUo7O0FERUU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNJLGNBQUE7QUNDTjs7QURDRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hvcGRldGFpbHMvc2hvcGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlZ21lbnR7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoYnJvd24gLCBicm93bik7IFxuICAgIC0tY29sb3I6ICMwNDA0MDQ7XG4gICAgLyogaGVpZ2h0OiAzMHB4OyAqL1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjQ3YTIwNmU7XG4gIH1cbiAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIC0tY29sb3I6ICMwZTBlMGU7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6ICNmNDdhMjA7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZjQ3YTIwO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogM3B4O1xuICAgIC8qIG1pbi1oZWlnaHQ6IDMwcHg7ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIH1cblxuICAuc2hvcGluZm8gaW9uLWljb257XG4gICAgICBjb2xvcjojZjQ3YTIwO1xuICB9XG4gIC52aWV3YWxsX3Byb2R1Y3Rze1xuICAgIC0tYmFja2dyb3VuZDogI2Y0N2EyMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9IiwiaW9uLXNlZ21lbnQge1xuICAtLWNvbG9yOiAjMDQwNDA0O1xuICAvKiBoZWlnaHQ6IDMwcHg7ICovXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjQ3YTIwNmU7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICMwZTBlMGU7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiAjZjQ3YTIwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgLS1jb2xvci1jaGVja2VkOiAjZjQ3YTIwO1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDNweDtcbiAgLyogbWluLWhlaWdodDogMzBweDsgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnNob3BpbmZvIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmNDdhMjA7XG59XG5cbi52aWV3YWxsX3Byb2R1Y3RzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shopdetails/shopdetails.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/shopdetails/shopdetails.page.ts ***!
    \*************************************************/

  /*! exports provided: ShopdetailsPage */

  /***/
  function srcAppShopdetailsShopdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopdetailsPage", function () {
      return ShopdetailsPage;
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

    var ShopdetailsPage = /*#__PURE__*/function () {
      function ShopdetailsPage(util, actRoute, router, api, popoverController) {
        _classCallCheck(this, ShopdetailsPage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.shopDetail = {};
        this.currentSegment = 'products';
        this.products = [];
        this.orders = [];
        this.products = [{
          'name': 'Women Maxi Blue Dress',
          'price': '1999',
          'categories': 'Clothing, Dresses',
          'image': 'https://rukminim1.flixcart.com/image/800/960/k3ahbww0/dress/c/g/4/l-gn2013-l-dev-fashion-original-imafgnnhm4zkqwcz.jpeg'
        }, {
          'name': 'Sweater with embroidery',
          'price': '1299',
          'categories': 'Kids Baby Boy',
          'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579251957NMH1zbu645.png'
        }, {
          'name': 'Zip-up sweatshirt with bands',
          'price': '2499',
          'categories': 'Kids, Baby Boy',
          'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579252292F2K8LVoBNc.png'
        }, {
          'name': 'Allover print dress',
          'price': '999',
          'categories': 'Kids, Baby Girl',
          'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579252720pYLwQPOGHC.png'
        }, {
          'name': 'UA Play Up',
          'price': '1499',
          'categories': 'Women, Bottom Wears',
          'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579261735BOECgXqPYA.png'
        }, {
          'name': "Women\u2019s Leggings",
          'price': '599',
          'categories': 'Women, Bottom Wears',
          'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1594124756i4aqMMq0lB.png'
        }, {
          'name': 'Long Sleeve Shirt',
          'price': '2999',
          'categories': 'Men, T-shirts',
          'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579257223uKvLXHm7m4.png'
        }, {
          'name': 'Nike-Air-Zoom-Pegasus',
          'price': '1999',
          'categories': 'Men, Shoes',
          'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579260619VMs4fuRLvn.png'
        }, {
          'name': 'Men Synthetic Casual Boot',
          'price': '899',
          'categories': 'Men, Shoes',
          'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579256337GxFbefCCZQ.png'
        }, {
          'name': 'Boys Shorts',
          'price': '1699',
          'categories': 'Men, Bottoms',
          'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_15792550523wo2u93cMg.png'
        }];
        this.orders = [{
          'order_id': '981234',
          'order_date': '19-08-2020',
          'payment_type': 'Cash on delivery',
          'payment_status': 'Paid',
          'order_status': 'Pending',
          'amount': 1299
        }, {
          'order_id': '981235',
          'order_date': '21-08-2020',
          'payment_type': 'Online',
          'payment_status': 'Paid',
          'order_status': 'Pending',
          'amount': 499
        }, {
          'order_id': '981236',
          'order_date': '21-08-2020',
          'payment_type': 'Cash on delivery',
          'payment_status': 'Unpaid',
          'order_status': 'Pending',
          'amount': 3999
        }, {
          'order_id': '981237',
          'order_date': '21-08-2020',
          'payment_type': 'Online',
          'payment_status': 'Paid',
          'order_status': 'Pending',
          'amount': 2500
        }, {
          'order_id': '981238',
          'order_date': '22-08-2020',
          'payment_type': 'Online',
          'payment_status': 'Paid',
          'order_status': 'Pending',
          'amount': 1800
        }, {
          'order_id': '981249',
          'order_date': '22-08-2020',
          'payment_type': 'Online',
          'payment_status': 'Paid',
          'order_status': 'Pending',
          'amount': 6500
        }];
        this.shopId = this.actRoute.snapshot.params.shop_id;
        this.getshopDetails();
      }

      _createClass(ShopdetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          var _this = this;

          this.currentSegment = event.target.value;
          setTimeout(function () {
            _this.content.scrollToTop(0);
          }, 200);
        }
      }, {
        key: "getshopDetails",
        value: function getshopDetails() {
          var _this2 = this;

          this.util.showLoader();
          this.api.fetchShopDetails(function (response) {
            setTimeout(function () {
              _this2.util.hideLoader();
            }, 1000);

            if (response.status == 'valid') {
              _this2.shopDetail = response.data;
            } else if (response.status == 'invalid_form') {
              _this2.util.presentToast(response.message, 'danger', 'bottom', 2500);
            } else {
              _this2.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
          }, this.shopId);
        }
      }, {
        key: "addproduct",
        value: function addproduct() {
          this.router.navigate(['/addproduct', this.shopId]);
        }
      }, {
        key: "viewOrderDetails",
        value: function viewOrderDetails(orderId) {
          this.router.navigate(['/orderdetails', orderId]);
        }
      }]);

      return ShopdetailsPage;
    }();

    ShopdetailsPage.ctorParameters = function () {
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
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], {
      "static": true
    })], ShopdetailsPage.prototype, "content", void 0);
    ShopdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopdetails',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shopdetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopdetails/shopdetails.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shopdetails.page.scss */
      "./src/app/shopdetails/shopdetails.page.scss"))["default"]]
    })], ShopdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=shopdetails-shopdetails-module-es5.js.map