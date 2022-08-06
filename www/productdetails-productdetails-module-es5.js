function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productdetails-productdetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/productdetails/productdetails.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productdetails/productdetails.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductdetailsProductdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">{{productdetails?.shop}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t\n\t<!-- \t<ion-slides >\n        <ion-slide *ngFor=\"let img of productdetails?.imageslist\">\n          <img src=\"{{img.image}}\">\n        </ion-slide>\n       \n       \n      </ion-slides> -->\n      <!-- <ion-slides #slides pager=\"false\">\n\t\t\t<ion-slide *ngFor=\"let img of productdetails?.imageslist\">\n\t\t\t\t\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\" class=\"productimageslider\">\n\t\t\t\t\t\t\t<img [src]=\"img.image\">\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t</ion-slide>\t\n\t\t</ion-slides> -->\n\t<ion-card style=\"border-radius:15px;\">\n\t\t<ion-card-content style=\"color:black;\">\n\t\t\t<ion-grid>\n\t\t\n\t\t\t\t<ion-row> <!--class=\"productborder\"-->\n\t\t\t\t  <ion-col align='left'>\n\t\t\t\t\t<div style=\"font-size:13px;\">\n\t\t\t\t\t  <b>Product Name</b>\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col align='right'>\n\t\t\t\t\t<div>\n\t\t\t\t\t {{productdetails?.name}}\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  \n\t\t\t\t</ion-row>\n\t  \n\t\t\t\t <ion-row> <!--class=\"productborder\"-->\n\t\t\t\t  <ion-col align='left'>\n\t\t\t\t\t<div style=\"font-size:13px;\">\n\t\t\t\t\t  <b>Description</b>\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col align='right'>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p style=\"text-align: justify; padding: 10px;font-size:13px;\" [innerHTML]=\"productdetails?.description | safeHtml\"></p>\n\t\t\t\t\t <!-- {{productdetails?.description}} -->\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  \n\t\t\t\t</ion-row>\n\t  \n\t\t\t\t<ion-row> <!--class=\"productborder\"-->\n\t\t\t\t  <ion-col align='left'>\n\t\t\t\t\t<div style=\"font-size:13px;\">\n\t\t\t\t\t  <b>Category</b>\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col align='right'>\n\t\t\t\t\t<div>\n\t\t\t\t\t {{productdetails?.category_name}}\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  \n\t\t\t\t</ion-row>\n\t  \n\t\t\t\t<ion-row> <!--class=\"productborder\"-->\n\t\t\t\t  <ion-col align='left'>\n\t\t\t\t\t<div style=\"font-size:13px;\">\n\t\t\t\t\t  <b>Sub Category</b>\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col align='right'>\n\t\t\t\t\t<div>\n\t\t\t\t\t {{productdetails?.subcategory_name}}\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  \n\t\t\t\t</ion-row>\n\t\t\t\t <ion-row> <!--class=\"productborder\"-->\n\t\t\t\t  <ion-col align='left'>\n\t\t\t\t\t<div style=\"font-size:13px;\">\n\t\t\t\t\t  <b>Brand</b>\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col align='right'>\n\t\t\t\t\t<div>\n\t\t\t\t\t {{productdetails?.brand}}\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  \n\t\t\t\t</ion-row>\n\t  \n\t\t\t\t<ion-row> <!--class=\"productborder\"-->\n\t\t\t\t  <ion-col align='left'>\n\t\t\t\t\t<div style=\"font-size:13px;\">\n\t\t\t\t\t  <b>Product Tags</b>\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col align='right'>\n\t\t\t\t\t<div>\n\t\t\t\t\t {{productdetails?.product_tags}}\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  \n\t\t\t\t</ion-row>\n\t  \n\t\t\t\t <ion-row> <!--class=\"productborder\"-->\n\t\t\t\t  <ion-col align='left'>\n\t\t\t\t\t<div style=\"font-size:13px;\">\n\t\t\t\t\t  <b>Key Features</b>\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col align='right'>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p style=\"text-align: justify; padding: 10px;font-size:13px;\" [innerHTML]=\"productdetails?.key_features | safeHtml\"></p>\n\t\t\t\t\t<!--  {{productdetails?.key_features}} -->\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  \n\t\t\t\t</ion-row>\n\t\t\t\t\n\t\t\t\t<ion-row> <!--class=\"productborder\"-->\n\t\t\t\t  <ion-col align='left'>\n\t\t\t\t\t<div style=\"font-size:13px;\">\n\t\t\t\t\t  <b>Return Availability</b>\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col align='right'>\n\t\t\t\t\t<div>\n\t\t\t\t\t {{productdetails?.return_status}}\n\t\t\t\t\t</div>\n\t\t\t\t  </ion-col>\n\t\t\t\t  \n\t\t\t\t</ion-row>\n\t  \n\t  \t\t  </ion-grid>\n\t\t</ion-card-content>\n\t</ion-card>\n\t\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/productdetails/productdetails-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/productdetails/productdetails-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductdetailsPageRoutingModule */

  /***/
  function srcAppProductdetailsProductdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductdetailsPageRoutingModule", function () {
      return ProductdetailsPageRoutingModule;
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


    var _productdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./productdetails.page */
    "./src/app/productdetails/productdetails.page.ts");

    var routes = [{
      path: '',
      component: _productdetails_page__WEBPACK_IMPORTED_MODULE_3__["ProductdetailsPage"]
    }];

    var ProductdetailsPageRoutingModule = function ProductdetailsPageRoutingModule() {
      _classCallCheck(this, ProductdetailsPageRoutingModule);
    };

    ProductdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductdetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/productdetails/productdetails.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/productdetails/productdetails.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProductdetailsPageModule */

  /***/
  function srcAppProductdetailsProductdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductdetailsPageModule", function () {
      return ProductdetailsPageModule;
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


    var _productdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./productdetails-routing.module */
    "./src/app/productdetails/productdetails-routing.module.ts");
    /* harmony import */


    var _productdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./productdetails.page */
    "./src/app/productdetails/productdetails.page.ts");
    /* harmony import */


    var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../safe-html.pipe */
    "./src/app/safe-html.pipe.ts");

    var ProductdetailsPageModule = function ProductdetailsPageModule() {
      _classCallCheck(this, ProductdetailsPageModule);
    };

    ProductdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _productdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductdetailsPageRoutingModule"]],
      declarations: [_productdetails_page__WEBPACK_IMPORTED_MODULE_6__["ProductdetailsPage"], _safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeHtmlPipe"]]
    })], ProductdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/productdetails/productdetails.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/productdetails/productdetails.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductdetailsProductdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".productimageslider {\n  width: 100%;\n  padding: 5px 2px;\n  box-shadow: 0px 3px 11px 4px #dbd8d8;\n  background: #fff;\n  border-radius: 10px;\n}\n.productimageslider img {\n  width: 90%;\n  border-radius: 10px;\n  height: 200px;\n}\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n.productborder {\n  border-bottom: 1px solid #c7c2c2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdGRldGFpbHMvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxccHJvZHVjdGRldGFpbHNcXHByb2R1Y3RkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdGRldGFpbHMvcHJvZHVjdGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSztFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDVDtBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENFO0VBQ0EsZ0NBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RkZXRhaWxzL3Byb2R1Y3RkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0aW1hZ2VzbGlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAycHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMXB4IDRweCAjZGJkOGQ4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvL21hcmdpbjogNnB4IDEycHg7XG4gICAgIGltZyB7XG4gICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgIGhlaWdodDoyMDBweDtcbiAgICAgfVxuICB9XG4gIC52ZW5kb3ItaGVhZHtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgcGFkZGluZy1pbmxpbmU6MHB4O1xuIH1cbiAgLnByb2R1Y3Rib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M3YzJjMjtcbiAgfSIsIi5wcm9kdWN0aW1hZ2VzbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDJweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMXB4IDRweCAjZGJkOGQ4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3RpbWFnZXNsaWRlciBpbWcge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4udmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbi5wcm9kdWN0Ym9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjN2MyYzI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/productdetails/productdetails.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/productdetails/productdetails.page.ts ***!
    \*******************************************************/

  /*! exports provided: ProductdetailsPage */

  /***/
  function srcAppProductdetailsProductdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductdetailsPage", function () {
      return ProductdetailsPage;
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
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var ProductdetailsPage = /*#__PURE__*/function () {
      function ProductdetailsPage(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api, sanitizer) {
        _classCallCheck(this, ProductdetailsPage);

        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.sanitizer = sanitizer;
      }

      _createClass(ProductdetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pid = this.actRoute.snapshot.paramMap.get('pid');
          this.getproductDetails();
        }
      }, {
        key: "getproductDetails",
        value: function getproductDetails() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var prodObj, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    prodObj = {
                      action: "getSingleProduct",
                      pid: this.pid
                    };
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context.sent;
                    loading.present();
                    this.api.getProductData(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this.productdetails = response.product_details; //alert(JSON.stringify(this.productdetails));
                      } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                        }
                    }, prodObj);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ProductdetailsPage;
    }();

    ProductdetailsPage.ctorParameters = function () {
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
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
      }];
    };

    ProductdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-productdetails',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./productdetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/productdetails/productdetails.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./productdetails.page.scss */
      "./src/app/productdetails/productdetails.page.scss"))["default"]]
    })], ProductdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=productdetails-productdetails-module-es5.js.map