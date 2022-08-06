function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscriptions-subscriptions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/subscriptions/subscriptions.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscriptions/subscriptions.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubscriptionsSubscriptionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\" style=\"background-color:#000;\">\n\t<ion-toolbar style=\"--background: #000;color: #fff;\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{title}}</ion-title>\n\t</ion-toolbar>\n\n</ion-header> -->\n\n<ion-content style=\"--background: #000;\">\n\t<ion-grid style=\"padding:20px\">\n\t\t<ion-row class=\"plan\">\n\t\t\t <h5>Get Offket {{title}}</h5>\n\t\t\t <div style=\"width: 100%;margin-bottom: 20px;\" *ngIf=\"pid==1\">\n\t\t\t\t<img src=\"assets/images/icon_3.png\" style=\"margin: auto;display: block;\">\n\t\t\t </div>\t\n\t\t\t <div style=\"width: 100%;margin-bottom: 20px;\" *ngIf=\"pid==2\">\n\t\t\t\t<img src=\"assets/images/icon.png\" style=\"margin: auto;display: block;\">\n\t\t\t </div>\t\n\t\t\t <div style=\"width: 100%;margin-bottom: 20px;\" *ngIf=\"pid==3\">\n\t\t\t\t<img src=\"assets/images/icon_2.png\" style=\"margin: auto;display: block;\">\n\t\t\t </div>\t\t\n\t\t\t <ion-col size=\"4\" *ngFor=\"let p of plans; let i=index\">\n\t\t\t\t  <div  [ngClass]=\"{'planlist1':p.id==check,'planlist':p.id!=check}\" (click)=\"planlist(p)\">\n                     <!-- <h6>12</h6> -->\n\t\t\t\t\t <p>{{p.title}}</p>\n\t\t\t\t\t <h4>&#8377; {{p.amount}}</h4>\n\t\t\t\t\t <h5  style=\"color: #000; text-decoration: line-through;\">&#8377; {{p.offerprice}}</h5>\n\t\t\t\t  </div>\n\t\t\t </ion-col>\n\t\t</ion-row>\n\t\t<h4 style=\"color: #fff;font-size: 17px;font-weight: 600;\">\n\t\t\tFeatures\n\t\t</h4>\n\t\n\t\t<div class=\"feauters\">\n          <p style=\"font-size: 14px;\" [innerHTML]=\"description\">\n\t\t\t</p>\n\t\t\t<ion-button (click)=\"buyNow(check,amount)\">Pay Now</ion-button>\n\t\t</div>\n\t</ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/subscriptions/subscriptions-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/subscriptions/subscriptions-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: SubscriptionsPageRoutingModule */

  /***/
  function srcAppSubscriptionsSubscriptionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionsPageRoutingModule", function () {
      return SubscriptionsPageRoutingModule;
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


    var _subscriptions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./subscriptions.page */
    "./src/app/subscriptions/subscriptions.page.ts");

    var routes = [{
      path: '',
      component: _subscriptions_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsPage"]
    }];

    var SubscriptionsPageRoutingModule = function SubscriptionsPageRoutingModule() {
      _classCallCheck(this, SubscriptionsPageRoutingModule);
    };

    SubscriptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SubscriptionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/subscriptions/subscriptions.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/subscriptions/subscriptions.module.ts ***!
    \*******************************************************/

  /*! exports provided: SubscriptionsPageModule */

  /***/
  function srcAppSubscriptionsSubscriptionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionsPageModule", function () {
      return SubscriptionsPageModule;
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


    var _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./subscriptions-routing.module */
    "./src/app/subscriptions/subscriptions-routing.module.ts");
    /* harmony import */


    var _subscriptions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./subscriptions.page */
    "./src/app/subscriptions/subscriptions.page.ts");

    var SubscriptionsPageModule = function SubscriptionsPageModule() {
      _classCallCheck(this, SubscriptionsPageModule);
    };

    SubscriptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionsPageRoutingModule"]],
      declarations: [_subscriptions_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionsPage"]]
    })], SubscriptionsPageModule);
    /***/
  },

  /***/
  "./src/app/subscriptions/subscriptions.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/subscriptions/subscriptions.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubscriptionsSubscriptionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hom_image {\n  width: 40%;\n  margin: 19px 0px 0px 5px;\n}\n\n.icon_cls {\n  width: 40px;\n  height: 28px;\n  color: #081F66;\n}\n\n.basket_cls {\n  width: 40px;\n  height: 28px;\n  color: #081F66;\n  margin-right: 5px;\n}\n\n.para {\n  position: absolute;\n  padding: 4px;\n  background: #CF1673;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  text-align: center;\n  color: #fff;\n  font-size: 11px;\n  right: 1%;\n  top: 0%;\n  z-index: 999;\n}\n\n.category {\n  background: #D5EAFF;\n  border-radius: 15px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n\n.category img {\n  width: 100%;\n  margin-top: 30px;\n}\n\n.category h3 {\n  color: #081F66;\n  font-size: 24px;\n}\n\n.category p {\n  color: #2C2C2C;\n  font-size: 14px;\n}\n\n.category button {\n  float: right;\n  background: #e44424;\n  padding: 9px 14px;\n  border-radius: 7px;\n  color: #fff;\n  font-size: 12px;\n  outline: none;\n}\n\n.category:nth-child(4n+1) {\n  background-color: #D5EAFF;\n}\n\n.category:nth-child(4n+2) {\n  background: #fbdcdb;\n}\n\n.category:nth-child(4n+3) {\n  background: #FEF0DC;\n}\n\n.category:nth-child(4n+4) {\n  background: #F2F1ED;\n}\n\n.plantext {\n  background: #e44424;\n  color: #fff;\n  padding: 5px;\n}\n\n.plantext p {\n  font-size: 16px;\n  text-align: center;\n  padding-bottom: 17px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.subscriptionlist {\n  background: #fff;\n  border-radius: 20px;\n  padding: 7px;\n}\n\n.plan {\n  color: #fff;\n}\n\n.plan h5 {\n  color: #fff;\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n  margin-top: 21%;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.planlist {\n  text-align: center;\n  background: #ef5309;\n  padding: 5px;\n  border-radius: 15px;\n}\n\n.planlist h6 {\n  margin: 4px;\n  font-size: 25px;\n}\n\n.planlist p {\n  margin: 3px;\n  font-size: 13px;\n}\n\n.planlist h4 {\n  margin: 3px;\n  font-weight: 600;\n}\n\n.planlist:hover {\n  text-align: center;\n  background: #fff;\n  padding: 5px;\n  border-radius: 15px;\n  color: #000 !important;\n}\n\n.planlist:hover h6 {\n  margin: 4px;\n  font-size: 25px;\n}\n\n.planlist:hover p {\n  margin: 3px;\n  font-size: 13px;\n}\n\n.planlist:hover h4 {\n  margin: 3px;\n  font-weight: 600;\n}\n\n.planlist1 {\n  text-align: center;\n  background: #fff;\n  padding: 5px;\n  border-radius: 15px;\n  color: #000 !important;\n}\n\n.planlist1 h6 {\n  margin: 4px;\n  font-size: 25px;\n}\n\n.planlist1 p {\n  margin: 3px;\n  font-size: 13px;\n}\n\n.planlist1 h4 {\n  margin: 3px;\n  font-weight: 600;\n}\n\n.feauters {\n  color: #fff;\n  background: #2b2a2ae3;\n  padding: 10px 15px;\n  text-align: justify;\n  border-radius: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaXB0aW9ucy9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFxzdWJzY3JpcHRpb25zXFxzdWJzY3JpcHRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3Vic2NyaXB0aW9ucy9zdWJzY3JpcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREdBO0VBQU0sa0JBQUE7RUFDRixZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNJLFlBQUE7RUFDSixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0MsbUJBQUE7RUFDRyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FKOztBRENJO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FDQ0w7O0FEQ0k7RUFBRyxjQUFBO0VBQ0YsZUFBQTtBQ0VMOztBRERJO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUNHTDs7QURESTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNFUjs7QURHQTtFQUNHLHlCQUFBO0FDQUg7O0FERUE7RUFDRyxtQkFBQTtBQ0NIOztBRENBO0VBQ0csbUJBQUE7QUNFSDs7QURBQTtFQUNHLG1CQUFBO0FDR0g7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FERkk7RUFDSSxlQUFBO0VBQ0osa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQUE7RUFDQyxXQUFBO0FDR0Q7O0FERkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSVI7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FERkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0lSOztBREZJO0VBQ0ksV0FBQTtFQUNKLGVBQUE7QUNJSjs7QURGSTtFQUNJLFdBQUE7RUFDSixnQkFBQTtBQ0lKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDSUo7O0FESEk7RUFFSSxXQUFBO0VBQ0EsZUFBQTtBQ0lSOztBREZJO0VBQ0ksV0FBQTtFQUNKLGVBQUE7QUNJSjs7QURGSTtFQUNJLFdBQUE7RUFDSixnQkFBQTtBQ0lKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDSUo7O0FESEk7RUFFSSxXQUFBO0VBQ0EsZUFBQTtBQ0lSOztBREZJO0VBQ0ksV0FBQTtFQUNKLGVBQUE7QUNJSjs7QURGSTtFQUNJLFdBQUE7RUFDSixnQkFBQTtBQ0lKOztBRERBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9zdWJzY3JpcHRpb25zL3N1YnNjcmlwdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbV9pbWFnZXtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDE5cHggMHB4IDBweCA1cHg7XHJcbn1cclxuLmljb25fY2xze1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBjb2xvcjogIzA4MUY2NjtcclxufVxyXG5cclxuLmJhc2tldF9jbHN7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGNvbG9yOiAjMDgxRjY2O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiAgICBcclxuXHJcbi5wYXJhe3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNDRjE2NzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHJpZ2h0OiAxJTtcclxuICAgIHRvcDogMCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcblxyXG4uY2F0ZWdvcnl7XHJcblx0YmFja2dyb3VuZDogI0Q1RUFGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGltZ3tcclxuXHQgICAgd2lkdGg6IDEwMCU7XHJcblx0ICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblx0fVxyXG4gICAgaDN7Y29sb3I6ICMwODFGNjY7XHJcbiAgICBcdGZvbnQtc2l6ZTogMjRweDt9XHJcbiAgICBwe1xyXG4gICAgXHRjb2xvcjogIzJDMkMyQztcclxuICAgIFx0Zm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uXHJcbiAgICB7IFxyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTQ0NDI0O1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTsgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKzEpe1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiNENUVBRkY7XHJcbn1cclxuLmNhdGVnb3J5Om50aC1jaGlsZCg0bisyKXtcclxuICAgYmFja2dyb3VuZDojZmJkY2RiO1xyXG59XHJcbi5jYXRlZ29yeTpudGgtY2hpbGQoNG4rMyl7XHJcbiAgIGJhY2tncm91bmQ6I0ZFRjBEQztcclxufVxyXG4uY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKzQpe1xyXG4gICBiYWNrZ3JvdW5kOiNGMkYxRUQ7XHJcbn1cclxuXHJcbi5wbGFudGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTQ0NDI0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3Vic2NyaXB0aW9ubGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxufVxyXG5cclxuLnBsYW4ge1xyXG4gY29sb3I6ICNmZmY7XHJcbiAgICBoNSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMSU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuLnBsYW5saXN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNlZjUzMDk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaDYge1xyXG4gICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG59XHJcbi5wbGFubGlzdDpob3ZlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBoNiB7XHJcbiAgICAgICBcclxuICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9XHJcbn1cclxuLnBsYW5saXN0MSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBoNiB7XHJcbiAgICAgICBcclxuICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9XHJcbn1cclxuLmZlYXV0ZXJzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzJiMmEyYWUzO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbn1cclxuXHJcbiIsIi5ob21faW1hZ2Uge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDE5cHggMHB4IDBweCA1cHg7XG59XG5cbi5pY29uX2NscyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjMDgxRjY2O1xufVxuXG4uYmFza2V0X2NscyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjMDgxRjY2O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnBhcmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogI0NGMTY3MztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIHJpZ2h0OiAxJTtcbiAgdG9wOiAwJTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kOiAjRDVFQUZGO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNhdGVnb3J5IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmNhdGVnb3J5IGgzIHtcbiAgY29sb3I6ICMwODFGNjY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jYXRlZ29yeSBwIHtcbiAgY29sb3I6ICMyQzJDMkM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXRlZ29yeSBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICNlNDQ0MjQ7XG4gIHBhZGRpbmc6IDlweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jYXRlZ29yeTpudGgtY2hpbGQoNG4rMSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVFQUZGO1xufVxuXG4uY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKzIpIHtcbiAgYmFja2dyb3VuZDogI2ZiZGNkYjtcbn1cblxuLmNhdGVnb3J5Om50aC1jaGlsZCg0biszKSB7XG4gIGJhY2tncm91bmQ6ICNGRUYwREM7XG59XG5cbi5jYXRlZ29yeTpudGgtY2hpbGQoNG4rNCkge1xuICBiYWNrZ3JvdW5kOiAjRjJGMUVEO1xufVxuXG4ucGxhbnRleHQge1xuICBiYWNrZ3JvdW5kOiAjZTQ0NDI0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xufVxuLnBsYW50ZXh0IHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5zdWJzY3JpcHRpb25saXN0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogN3B4O1xufVxuXG4ucGxhbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBsYW4gaDUge1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAyMSU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5wbGFubGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2VmNTMwOTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnBsYW5saXN0IGg2IHtcbiAgbWFyZ2luOiA0cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5wbGFubGlzdCBwIHtcbiAgbWFyZ2luOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wbGFubGlzdCBoNCB7XG4gIG1hcmdpbjogM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGxhbmxpc3Q6aG92ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi5wbGFubGlzdDpob3ZlciBoNiB7XG4gIG1hcmdpbjogNHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucGxhbmxpc3Q6aG92ZXIgcCB7XG4gIG1hcmdpbjogM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucGxhbmxpc3Q6aG92ZXIgaDQge1xuICBtYXJnaW46IDNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnBsYW5saXN0MSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLnBsYW5saXN0MSBoNiB7XG4gIG1hcmdpbjogNHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucGxhbmxpc3QxIHAge1xuICBtYXJnaW46IDNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnBsYW5saXN0MSBoNCB7XG4gIG1hcmdpbjogM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmVhdXRlcnMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzJiMmEyYWUzO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/subscriptions/subscriptions.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/subscriptions/subscriptions.page.ts ***!
    \*****************************************************/

  /*! exports provided: SubscriptionsPage */

  /***/
  function srcAppSubscriptionsSubscriptionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionsPage", function () {
      return SubscriptionsPage;
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

    var SubscriptionsPage = /*#__PURE__*/function () {
      function SubscriptionsPage(util, actRoute, router, api, popoverController, loadingCtrl, menu) {
        _classCallCheck(this, SubscriptionsPage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.pid = this.actRoute.snapshot.paramMap.get('pid');
        this.title = this.actRoute.snapshot.paramMap.get('title');
        this.vendor_id = localStorage.getItem('fash_user_id');
      }

      _createClass(SubscriptionsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menu.enable(true);
          this.getPlans();
        }
      }, {
        key: "getPlans",
        value: function getPlans() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var vendorObj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    vendorObj = {
                      action: "getSubscription",
                      pid: this.pid
                    };
                    this.api.fetchSubscription(function (response) {
                      console.log(response);

                      if (response.status == true) {
                        _this.plans = response.plans;
                        _this.check = _this.plans[0]['id'];
                        _this.amount = _this.plans[0]['amount'];

                        _this.planlist(_this.plans[0]);
                      }
                    }, vendorObj);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "buyNow",
        value: function buyNow(pid, amount) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var vendorObj;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    vendorObj = {
                      action: "razerpayOrder_id",
                      grand_total: amount,
                      vendor_id: this.vendor_id
                    };
                    this.api.generateRazerpay(function (response) {
                      if (response.status == true) {
                        _this2.order_id = response.order_id;
                        _this2.name = response.name;
                        _this2.email = response.email;
                        _this2.mobile = response.mobile;

                        _this2.payWithRazor(pid, amount, _this2.order_id, _this2.name, _this2.email, _this2.mobile, _this2.vendor_id);
                      } else {
                        _this2.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, vendorObj);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // key: rzp_live_7yWX2Du2GUqZvR'', 

      }, {
        key: "payWithRazor",
        value: function payWithRazor(pid, paymentAmount, razorpayOrderId, name, email, mobile, vendor_id) {
          var that = this;
          var options = {
            description: 'OFFKET Subscription',
            image: 'https://offket.com/uploads/noproduct.png',
            currency: 'INR',
            order_id: razorpayOrderId,
            key: 'rzp_live_7yWX2Du2GUqZvR',
            //key:'rzp_test_ywjRok0nPJdn2M',
            amount: parseFloat(paymentAmount) * 100,
            name: 'OFFKET',
            prefill: {
              email: email,
              contact: mobile,
              name: name
            },
            theme: {
              color: '#F37254'
            },
            modal: {
              ondismiss: function ondismiss() {
                alert('cancelled/closed');
              }
            }
          };
          var me = this;

          var successCallback = function successCallback(payment_id) {
            me.paymentSuccess(payment_id, razorpayOrderId, pid, paymentAmount, vendor_id);
          };

          var cancelCallback = function cancelCallback(error) {
            alert('Failed: ' + error.description);
          };

          RazorpayCheckout.open(options, successCallback, cancelCallback);
        }
      }, {
        key: "paymentSuccess",
        value: function paymentSuccess(payment_id, razorpayOrderId, pid, paymentAmount, vendor_id) {
          var _this3 = this;

          var vendorObj = {
            action: "successPayment",
            payment_id: payment_id,
            razorpayOrderId: razorpayOrderId,
            pid: pid,
            total_mount: paymentAmount,
            vendor_id: vendor_id
          };
          this.api.doRazerpayPayment(function (response) {
            _this3.util.presentToast("Your package Subscribed Successfully", 'success', 'bottom', 2500);

            _this3.router.navigate(['mypackage']);
          }, vendorObj);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "planlist",
        value: function planlist(_planlist) {
          this.check = _planlist.id;
          this.amount = _planlist.amount;
          this.description = _planlist.description;
        }
      }]);

      return SubscriptionsPage;
    }();

    SubscriptionsPage.ctorParameters = function () {
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

    SubscriptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subscriptions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./subscriptions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/subscriptions/subscriptions.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./subscriptions.page.scss */
      "./src/app/subscriptions/subscriptions.page.scss"))["default"]]
    })], SubscriptionsPage);
    /***/
  }
}]);
//# sourceMappingURL=subscriptions-subscriptions-module-es5.js.map