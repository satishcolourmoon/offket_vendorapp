function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor-profile-vendor-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor-profile/vendor-profile.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendor-profile/vendor-profile.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVendorProfileVendorProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar style=\"--background: #f47a20;color: #fff;\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Vendor Dashboard\n    </ion-title>\n    <!-- <ion-icon name=\"power\" slot=\"end\" class=\"signout\" (click)=\"logout()\"></ion-icon> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf=\"!shopDetail?.shop_name\" class=\"profilecard\">\n    <h2>\n      <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n    </h2>\n    <p>\n      <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n    </p>\n    <p>\n      <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n    </p>\n    <p>\n      <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n    </p>\n  </ion-card>\n  <ion-card *ngIf=\"shopDetail?.shop_name\" class=\"profilecard\">\n    <h2>{{shopDetail?.shop_name}}</h2>\n\n\n\n    <p><b>Name :</b> {{shopDetail?.name}}</p>\n    <p><b>Mobile :</b> {{shopDetail?.phone}}</p>\n    <p><b>Delivery amuont :</b> {{shopDetail?.min_order_amount}}</p>\n    <p><b>Delivery Time :</b> {{shopDetail?.delivery_time}}</p>\n  </ion-card>\n\n\n<!--   <ion-card style=\"border: 1px solid #c2bbbb;outline:none\">\n<ion-card-content style=\"padding: 15px;\">\n  <ion-row>\n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Today Orders<br> </b><span style=\"color: #000;\">{{dashboard?.today_orders}}</span>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Total Orders<br> </b><span style=\"color: #000;\">{{dashboard?.total_orders}}</span>\n        </ion-col>\n        \n        <ion-col size=\"4\" style=\"text-align: center; border: 1px solid #ccc; padding:10px; color: #f47a20\">\n          <b>Total Items<br> </b><span style=\"color: #000;\">{{dashboard?.total_items}}</span>\n        </ion-col>\n        \n   </ion-row>\n\n\n</ion-card-content>\n</ion-card> -->\n\n\n\n  <ion-card class=\"profilecard\" routerLink=\"/shop-profile/{{shopDetail?.user_id}}\">\n    <ion-card-content style=\"padding: 5px;\">\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: center;\">\n          <ion-icon name=\"person-circle-outline\" style=\"font-size: 30px;\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" style=\"text-align: left;\">\n          <h4 style=\"color: #000;\"> Shop Profile</h4>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"profilecard\" routerLink=\"/categories/{{shopDetail?.user_id}}\">\n    <ion-card-content style=\"padding: 5px;\">\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: center;\">\n          <ion-icon name=\"list-circle-outline\" style=\"font-size: 30px;\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" style=\"text-align: left;\">\n          <h4 style=\"color: #000;\">Products</h4>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"profilecard\" routerLink=\"/request-new-product/{{shopDetail?.user_id}}\">\n    <ion-card-content style=\"padding: 5px;\">\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: center;\">\n          <ion-icon name=\"add-circle-outline\" style=\"font-size: 30px;\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" style=\"text-align: left;\">\n          <h4 style=\"color: #000;\">Request New Product</h4>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style=\"border: 1px solid #c2bbbb;outline:none\" (click)=\"orders()\">\n    <ion-card-content style=\"padding: 15px;\">\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: center;\">\n          <ion-icon name=\"list-circle-outline\" style=\"font-size: 30px;\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" style=\"text-align: left;\">\n          <ion-title style=\"color: #000;\">Orders</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/vendor-profile/vendor-profile-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/vendor-profile/vendor-profile-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: VendorProfilePageRoutingModule */

  /***/
  function srcAppVendorProfileVendorProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorProfilePageRoutingModule", function () {
      return VendorProfilePageRoutingModule;
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


    var _vendor_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vendor-profile.page */
    "./src/app/vendor-profile/vendor-profile.page.ts");

    var routes = [{
      path: '',
      component: _vendor_profile_page__WEBPACK_IMPORTED_MODULE_3__["VendorProfilePage"]
    }];

    var VendorProfilePageRoutingModule = function VendorProfilePageRoutingModule() {
      _classCallCheck(this, VendorProfilePageRoutingModule);
    };

    VendorProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VendorProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/vendor-profile/vendor-profile.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/vendor-profile/vendor-profile.module.ts ***!
    \*********************************************************/

  /*! exports provided: VendorProfilePageModule */

  /***/
  function srcAppVendorProfileVendorProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorProfilePageModule", function () {
      return VendorProfilePageModule;
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


    var _vendor_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vendor-profile-routing.module */
    "./src/app/vendor-profile/vendor-profile-routing.module.ts");
    /* harmony import */


    var _vendor_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vendor-profile.page */
    "./src/app/vendor-profile/vendor-profile.page.ts");

    var VendorProfilePageModule = function VendorProfilePageModule() {
      _classCallCheck(this, VendorProfilePageModule);
    };

    VendorProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vendor_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["VendorProfilePageRoutingModule"]],
      declarations: [_vendor_profile_page__WEBPACK_IMPORTED_MODULE_6__["VendorProfilePage"]]
    })], VendorProfilePageModule);
    /***/
  },

  /***/
  "./src/app/vendor-profile/vendor-profile.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/vendor-profile/vendor-profile.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVendorProfileVendorProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signout {\n  right: 10px;\n  position: relative;\n  font-size: 25px;\n}\n\n.profilecard {\n  box-shadow: 0px 2px 5px 3px #e2e2e2;\n  border-radius: 15px;\n  padding: 5px 12px;\n  margin-top: 10px;\n}\n\n.profilecard h2 {\n  color: #f47a20;\n}\n\n.profilecard p b {\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n\n.profilecard h4 {\n  font-size: 18px;\n  color: #655d5d !important;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLXByb2ZpbGUvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcdmVuZG9yLXByb2ZpbGVcXHZlbmRvci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVuZG9yLXByb2ZpbGUvdmVuZG9yLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ0NMOztBREdDO0VBQ0csbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURDSTtFQUNJLGNBQUE7QUNDUjs7QURFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBWjs7QURHSTtFQUNJLGVBQUE7RUFDSix5QkFBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3ItcHJvZmlsZS92ZW5kb3ItcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbm91dHtcbiAgICByaWdodDogMTBweDtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgIC8vIGNvbG9yOiAjZjY3Zjc3O1xuIH1cblxuIC5wcm9maWxlY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4ICNlMmUyZTI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICNmNDdhMjA7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBiIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzY1NWQ1ZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuIH0iLCIuc2lnbm91dCB7XG4gIHJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnByb2ZpbGVjYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4ICNlMmUyZTI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnByb2ZpbGVjYXJkIGgyIHtcbiAgY29sb3I6ICNmNDdhMjA7XG59XG4ucHJvZmlsZWNhcmQgcCBiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5wcm9maWxlY2FyZCBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM2NTVkNWQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/vendor-profile/vendor-profile.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/vendor-profile/vendor-profile.page.ts ***!
    \*******************************************************/

  /*! exports provided: VendorProfilePage */

  /***/
  function srcAppVendorProfileVendorProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorProfilePage", function () {
      return VendorProfilePage;
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

    var VendorProfilePage = /*#__PURE__*/function () {
      function VendorProfilePage(util, actRoute, router, api, popoverController, loadingCtrl) {
        _classCallCheck(this, VendorProfilePage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
      }

      _createClass(VendorProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.shopId = this.actRoute.snapshot.paramMap.get('shopId'); //this.getdashboardDetails();

          this.getvmDetails();
        }
        /* async getdashboardDetails() {
        let dashObj = {action:"dashboardDetails",vendor_id:this.shopId};
          let loading = await this.loadingCtrl.create({
                          spinner:'circles',
                          message: 'Please wait',
                        });
                        loading.present();
          this.api.fetchDashboard((response: any) => {
          loading.dismiss();
              if (response.status == true)
              {
                  this.dashboard = response;
              }
              else
              {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
          }, dashObj);
        } */

      }, {
        key: "getvmDetails",
        value: function getvmDetails() {
          var _this = this;

          var dashboardObj = {
            action: "getProfileDetails",
            login_status: "vendor",
            shopId: this.shopId
          }; //alert(JSON.stringify(dashboardObj));

          this.util.showLoader();
          this.api.fetchShopDetails(function (response) {
            setTimeout(function () {
              _this.util.hideLoader();

              if (response.status == true) {
                _this.shopDetail = response;
              } else {
                _this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
            }, 1000);
          }, dashboardObj);
        }
      }, {
        key: "orders",
        value: function orders() {
          this.router.navigate(['orders', {
            shopId: this.shopId
          }]);
        }
      }]);

      return VendorProfilePage;
    }();

    VendorProfilePage.ctorParameters = function () {
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
      }];
    };

    VendorProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendor-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./vendor-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vendor-profile/vendor-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./vendor-profile.page.scss */
      "./src/app/vendor-profile/vendor-profile.page.scss"))["default"]]
    })], VendorProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=vendor-profile-vendor-profile-module-es5.js.map