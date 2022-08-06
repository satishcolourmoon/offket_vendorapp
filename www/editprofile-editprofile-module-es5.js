function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editprofile-editprofile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditprofileEditprofilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  \t<ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t\t<ion-row style=\"border: 1px solid #ccc;\">\n\t\t\t <ion-col>\n\t\t\t \t<div class=\"bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + shop_image + ')', 'background-size': 'cover'}\">\n\t\t\t \t\t<!-- <img src=\"{{shop_image}}\" > -->\n\t\t\t \t\t<ion-icon style=\"background-color: #FFF\" name=\"camera-outline\" (click)=\"notchange()\" *ngIf=\"update_status==1\"></ion-icon>\n\t\t\t \t\t<ion-icon style=\"background-color: #FFF\" name=\"camera-outline\" (click)=\"changeCoverPhoto()\" *ngIf=\"update_status==0\"></ion-icon>\n\t\t\t \t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t\n\t\t<div>\n\t\t\t<div class=\"shopProfilPic\" [ngStyle]=\"{ 'background-image': 'url(' + shop_logo + ')', 'background-size': 'cover'}\">\n\t\t\t\t<!-- <img src=\"{{shop_image}}\" > -->\n\t\t\t\t<ion-icon name=\"camera-outline\" (click)=\"notchange()\" *ngIf=\"update_status==1\"></ion-icon>\n\t\t\t\t<ion-icon name=\"camera-outline\" (click)=\"changelogoPhoto()\" *ngIf=\"update_status==0\"></ion-icon>\n\t\t\t</div>\n\t\t</div> \n\t\t<div style=\"margin-right:30px; \">\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold; \">Shop Name*</label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"shop_name\" name=\"shop_name\"></ion-input>\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Owner Name*</label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"owner_name\" name=\"owner_name\" owner_name></ion-input>\n\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Email</label>\n\t\t\t<ion-input type=\"email\" [(ngModel)]=\"email\" name=\"email\" readonly style=\"background-color: #ccc\"></ion-input>\n\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Mobile</label>\n\t\t\t<ion-input type=\"tel\" [(ngModel)]=\"mobile\" name=\"mobile\" readonly style=\"background-color: #ccc\"></ion-input>\n\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Alternative Mobile</label>\n\t\t\t<ion-input type=\"tel\" [(ngModel)]=\"alternative_mobile\" name=\"alternative_mobile\" placeholder=\"Alternative Mobile\"></ion-input>\n\n\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Delivery Amount</label>\n\t\t\t<ion-input type=\"tel\" [(ngModel)]=\"min_order_amount\" name=\"min_order_amount\" placeholder=\"Delivery Amount\"></ion-input>\n\n\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Description</label>\n\t\t\t<ion-textarea [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\" clearOnEdit=\"true\"></ion-textarea>\n\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Address</label>\n\t\t\t<ion-textarea [(ngModel)]=\"address\" name=\"address\" placeholder=\"Address\" clearOnEdit=\"true\"></ion-textarea>\n\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">PAN</label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"pan\" name=\"pan\" placeholder=\"PAN\"></ion-input>\n\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Aadhar Number</label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"aadhar\" name=\"aadhar\" placeholder=\"Aadhar Number\"></ion-input>\n\n\t\t\t <label style=\"margin-left: 20px; font-weight: bold;\">GST Number</label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"gst_number\" name=\"gst_number\" placeholder=\"GST Number\"></ion-input>\n\t\t</div>\n\t\t<div class=\"bank\">\n\t\t\t<h3 style=\"margin:0px;font-size:18px; font-weight: bold;\">Bank Details</h3>\n\t\t</div>\n\t\t<div style=\"margin-right:30px;\">\n\t\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Bank Name</label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"bankname\" name=\"bankname\" placeholder=\"Bank Name\"></ion-input>\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Account Number</label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"account_no\" name=\"account_no\" placeholder=\"Account Number\"></ion-input>\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Account Holder Name</label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"accountholder_name\" name=\"accountholder_name\" placeholder=\"Account Holder Name\"></ion-input>\n\t\t\t\t<label style=\"margin-left: 20px; font-weight: bold;\">Bank IFSC Code</label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"bank_ifsccode\" name=\"bank_ifsccode\" placeholder=\"Bank IFSC Code\"></ion-input>\n\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"ion-text-center\">\n\n\t\t\t\t\t<ion-button class=\"edit_button\"  (click)=\"doupdateprofile()\" *ngIf=\"update_status==0\">Update</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\n</ion-content>\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/editprofile/editprofile-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/editprofile/editprofile-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: EditprofilePageRoutingModule */

  /***/
  function srcAppEditprofileEditprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function () {
      return EditprofilePageRoutingModule;
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


    var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editprofile.page */
    "./src/app/editprofile/editprofile.page.ts");

    var routes = [{
      path: '',
      component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
    }];

    var EditprofilePageRoutingModule = function EditprofilePageRoutingModule() {
      _classCallCheck(this, EditprofilePageRoutingModule);
    };

    EditprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditprofilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/editprofile/editprofile.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/editprofile/editprofile.module.ts ***!
    \***************************************************/

  /*! exports provided: EditprofilePageModule */

  /***/
  function srcAppEditprofileEditprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function () {
      return EditprofilePageModule;
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


    var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editprofile-routing.module */
    "./src/app/editprofile/editprofile-routing.module.ts");
    /* harmony import */


    var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./editprofile.page */
    "./src/app/editprofile/editprofile.page.ts");

    var EditprofilePageModule = function EditprofilePageModule() {
      _classCallCheck(this, EditprofilePageModule);
    };

    EditprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"]],
      declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
    })], EditprofilePageModule);
    /***/
  },

  /***/
  "./src/app/editprofile/editprofile.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/editprofile/editprofile.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditprofileEditprofilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-img {\n  width: 100%;\n  height: 220px;\n}\n\n.shopProfilPic {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #fefefe;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: auto;\n  position: relative;\n  top: -65px;\n  border: 2px solid #05274d;\n}\n\n.shopProfilPic ion-icon {\n  position: absolute;\n  bottom: 14px;\n  right: 0px;\n  /* font-size: 20px; */\n  color: #423f39;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #ded4d4;\n}\n\nion-input {\n  border: 1px solid #cac6c6;\n  margin: 11px 15px;\n  border-radius: 20px;\n  padding: 3px 20px !important;\n  outline: none;\n}\n\nion-textarea {\n  border: 1px solid #cac6c6;\n  margin: 11px 15px;\n  border-radius: 20px;\n  padding: 3px 20px !important;\n  outline: none;\n}\n\n.edit_button {\n  --color:white;\n  --background:#081f65 !important;\n  --border-radius:30px;\n  width: 130px;\n  outline: none;\n  height: 40px;\n}\n\n.bank {\n  background-color: #f8f9f9;\n  color: #1b3480;\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHByb2ZpbGUvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcZWRpdHByb2ZpbGVcXGVkaXRwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNHLGFBQUE7QUNDTDs7QURDQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0cseUJBQUE7QUNFSjs7QUREQztFQUVDLGtCQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURFQTtFQUNRLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQ0NSOztBRENLO0VBQ0cseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDRVI7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWd7XG5cdFx0d2lkdGg6IDEwMCU7XG4gICAgXHRoZWlnaHQ6IDIyMHB4O1xuXHR9XG4uc2hvcFByb2ZpbFBpY3tcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6MTIwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0bWFyZ2luOmF1dG87XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAtNjVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDUyNzRkO1xuXHRpb24taWNvbntcblxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE0cHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICAvKiBmb250LXNpemU6IDIwcHg7ICovXG4gICAgY29sb3I6ICM0MjNmMzk7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZGVkNGQ0O1xuXHR9XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gICAgICAgIG1hcmdpbjogMTFweCAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAzcHggMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBvdXRsaW5lOm5vbmU7XG4gICAgIH1cbiAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhYzZjNjtcbiAgICAgICAgbWFyZ2luOiAxMXB4IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDNweCAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgfVxuLmVkaXRfYnV0dG9ue1xuICAgIC0tY29sb3I6d2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiMwODFmNjUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6MzBweDtcbiAgICB3aWR0aDoxMzBweDtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgaGVpZ2h0OjQwcHg7XG59XG5cbi5iYW5re1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y4ZjlmOTtcbiAgICBjb2xvcjogIzFiMzQ4MDtcbiAgICBwYWRkaW5nOjVweCAxNXB4O1xufSIsIi5iZy1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLnNob3BQcm9maWxQaWMge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTY1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNTI3NGQ7XG59XG4uc2hvcFByb2ZpbFBpYyBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNHB4O1xuICByaWdodDogMHB4O1xuICAvKiBmb250LXNpemU6IDIwcHg7ICovXG4gIGNvbG9yOiAjNDIzZjM5O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNkZWQ0ZDQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gIG1hcmdpbjogMTFweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHggMjBweCAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjNmM2O1xuICBtYXJnaW46IDExcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogM3B4IDIwcHggIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmVkaXRfYnV0dG9uIHtcbiAgLS1jb2xvcjp3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiMwODFmNjUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOjMwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYmFuayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5Zjk7XG4gIGNvbG9yOiAjMWIzNDgwO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/editprofile/editprofile.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/editprofile/editprofile.page.ts ***!
    \*************************************************/

  /*! exports provided: EditprofilePage */

  /***/
  function srcAppEditprofileEditprofilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofilePage", function () {
      return EditprofilePage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var EditprofilePage = /*#__PURE__*/function () {
      function EditprofilePage(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api, transfer) {
        _classCallCheck(this, EditprofilePage);

        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.transfer = transfer;
        this.urlpath = 'https://offket.com/api/Vendor_api/user';
      }

      _createClass(EditprofilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vendor_id = localStorage.getItem('fash_user_id');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getVendorDetails();
        }
      }, {
        key: "getVendorDetails",
        value: function getVendorDetails() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var profileObj, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    profileObj = {
                      action: "getvendorProfile",
                      vendor_id: this.vendor_id
                    };
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context.sent;
                    loading.present();
                    this.api.getVendorData(function (response) {
                      loading.dismiss();
                      _this.vendordetails = response;
                      _this.shop_name = response.shop_name;
                      _this.owner_name = response.owner_name;
                      _this.email = response.email;
                      _this.description = response.description;
                      _this.mobile = response.mobile;
                      _this.address = response.address;
                      _this.shop_image = response.shop_image;
                      _this.shop_logo = response.shop_logo;
                      _this.city = response.city;
                      _this.pincode = response.pincode;
                      _this.delivery_time = response.delivery_time;
                      _this.min_order_amount = response.min_order_amount;
                      _this.pan = response.pan;
                      _this.aadhar = response.aadhar;
                      _this.gst_number = response.gst_number;
                      _this.bankname = response.bankname;
                      _this.accountholder_name = response.accountholder_name;
                      _this.bank_ifsccode = response.bank_ifsccode;
                      _this.alternative_mobile = response.alternative_mobile;
                      _this.account_no = response.account_no;
                      _this.update_status = response.update_status;
                    }, profileObj);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "changeCoverPhoto",
        value: function changeCoverPhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      cssClass: 'signupbtn',
                      buttons: [{
                        text: 'Upload Photo',
                        role: 'destructive',
                        icon: 'ios-image',
                        handler: function handler() {
                          _this2.takePicture1(0);
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "takePicture1",
        value: function takePicture1(sourceType) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var options, optionss;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    options = {
                      quality: 75,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true
                    };

                    if (sourceType == '1') {
                      this.camera.getPicture(options).then(function (imageData) {
                        _this3.filepath1(imageData);
                      }, function (err) {});
                    } else {
                      optionss = {
                        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                        destinationType: this.camera.DestinationType.FILE_URI
                      };
                      this.camera.getPicture(optionss).then(function (imageData) {
                        _this3.filepath1(imageData);
                      }, function (err) {//alert(JSON.stringify(err));
                      });
                    }

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "filepath1",
        value: function filepath1(imgurl) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var options1, loading, params, fileTransfer;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    options1 = {
                      fileKey: 'image',
                      fileName: 'name.jpg',
                      headers: {},
                      chunkedMode: false,
                      mimeType: 'image/jpg'
                    };
                    _context4.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context4.sent;
                    loading.present();
                    params = {
                      action: "upload_shopimage",
                      vendor_id: this.vendor_id
                    };
                    options1.params = params;
                    fileTransfer = this.transfer.create();
                    fileTransfer.upload(imgurl, this.urlpath, options1, true).then(function (data) {
                      loading.dismiss();

                      _this4.util.presentToast("Shop Cover Photo Changed Successfully", 'danger', 'bottom', 2500);

                      _this4.getVendorDetails();
                    }, function (err) {//alert("1 st error");
                      //alert(JSON.stringify(err));
                    });

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "changelogoPhoto",
        value: function changelogoPhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.actionSheetController.create({
                      cssClass: 'signupbtn',
                      buttons: [{
                        text: 'Upload Photo',
                        role: 'destructive',
                        icon: 'ios-image',
                        handler: function handler() {
                          _this5.takePicture2(0);
                        }
                      }
                      /*  ,{
                          text: 'Camera',
                        role: 'destructive',
                        icon: 'ios-camera',
                        handler: () => {
                          this.takePicture2(1);
                          }
                        } */
                      ]
                    });

                  case 2:
                    actionSheet = _context5.sent;
                    _context5.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "takePicture2",
        value: function takePicture2(sourceType) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var options, optionss;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    options = {
                      quality: 75,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true
                    };

                    if (sourceType == 1) {
                      this.camera.getPicture(options).then(function (imageData) {
                        //alert(JSON.stringify(imageData));
                        _this6.filepath2(imageData);
                      }, function (err) {});
                    } else {
                      optionss = {
                        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                        destinationType: this.camera.DestinationType.FILE_URI
                      };
                      this.camera.getPicture(optionss).then(function (imageData) {
                        _this6.filepath2(imageData);
                      }, function (err) {//alert(JSON.stringify(err));
                      });
                    }

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "filepath2",
        value: function filepath2(imgurl) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var options1, loading, params, fileTransfer;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    options1 = {
                      fileKey: 'image',
                      fileName: 'name.jpg',
                      headers: {},
                      chunkedMode: false,
                      mimeType: 'image/jpg'
                    };
                    _context7.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context7.sent;
                    loading.present();
                    params = {
                      action: "upload_logoimage",
                      vendor_id: this.vendor_id
                    };
                    options1.params = params;
                    fileTransfer = this.transfer.create();
                    fileTransfer.upload(imgurl, this.urlpath, options1, true).then(function (data) {
                      loading.dismiss();

                      _this7.util.presentToast("Shop Cover Photo Changed Successfully", 'danger', 'bottom', 2500);

                      _this7.getVendorDetails();
                    }, function (err) {//alert("1 st error");
                      // alert(JSON.stringify(err));
                    });

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "notchange",
        value: function notchange() {
          this.util.presentToast("Please Contact Admin ", 'danger', 'bottom', 2500);
        }
      }, {
        key: "doupdateprofile",
        value: function doupdateprofile() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            var editObj, loading;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(this.shop_name == '' || this.shop_name == undefined)) {
                      _context8.next = 4;
                      break;
                    }

                    this.util.presentToast("Enter Shop Name", 'danger', 'bottom', 2500);
                    _context8.next = 22;
                    break;

                  case 4:
                    if (!(this.owner_name == '' || this.owner_name == undefined)) {
                      _context8.next = 8;
                      break;
                    }

                    this.util.presentToast("Enter Owner Name", 'danger', 'bottom', 2500);
                    _context8.next = 22;
                    break;

                  case 8:
                    if (!(this.min_order_amount == '' || this.min_order_amount == undefined)) {
                      _context8.next = 12;
                      break;
                    }

                    this.util.presentToast("Enter Delivery Amount", 'danger', 'bottom', 2500);
                    _context8.next = 22;
                    break;

                  case 12:
                    if (!(this.address == '' || this.address == undefined)) {
                      _context8.next = 16;
                      break;
                    }

                    this.util.presentToast("Enter Address", 'danger', 'bottom', 2500);
                    _context8.next = 22;
                    break;

                  case 16:
                    editObj = {
                      action: "updateProfiledetails",
                      shop_name: this.shop_name,
                      owner_name: this.owner_name,
                      description: this.description,
                      address: this.address,
                      vendor_id: this.vendor_id,
                      alternative_mobile: this.alternative_mobile,
                      pan: this.pan,
                      aadhar: this.aadhar,
                      gst_number: this.gst_number,
                      bankname: this.bankname,
                      accountholder_name: this.accountholder_name,
                      bank_ifsccode: this.bank_ifsccode,
                      account_no: this.account_no,
                      min_order_amount: this.min_order_amount
                    };
                    _context8.next = 19;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 19:
                    loading = _context8.sent;
                    loading.present();
                    this.api.doupdateProfiledetails(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this8.util.presentToast(response.message, 'success', 'bottom', 2500);
                      } else {
                        _this8.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, editObj);

                  case 22:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return EditprofilePage;
    }();

    EditprofilePage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"]
      }];
    };

    EditprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editprofile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editprofile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editprofile.page.scss */
      "./src/app/editprofile/editprofile.page.scss"))["default"]]
    })], EditprofilePage);
    /***/
  }
}]);
//# sourceMappingURL=editprofile-editprofile-module-es5.js.map