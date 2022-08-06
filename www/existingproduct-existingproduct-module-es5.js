function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["existingproduct-existingproduct-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/existingproduct/existingproduct.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/existingproduct/existingproduct.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExistingproductExistingproductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">Admin Products</ion-title>\n    <button slot=\"end\" class=\"productlist\" (click)=\"filters(shopId,catId,subcatid)\">Filters</button>\n  </ion-toolbar>\n  <ion-searchbar placeholder=\"Search Products\" (keyup.enter)=\"getItems($event)\" mode=\"ios\"></ion-searchbar>\n\n <!--  <ion-segment scrollable (ionChange)=\"segmentChanged($event)\" value=\"{{currentSegment}}\">\n    <ion-segment-button *ngFor=\"let s of sub_categories\" value=\"{{s.id}}\">\n      <ion-label style=\"text-transform: capitalize;\">{{s.title}}</ion-label>\n    </ion-segment-button>\n  </ion-segment> -->\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"products.length>0\">\n    <!-- <h2 style=\"text-align: center;color: #ff6b00bf;\">No Products Found</h2> -->\n\n    <ion-row padding>\n      <ion-col size=\"6\" *ngFor=\"let p of products\">\n        <ion-card>\n          <div style=\"width: 100%;height:100px;background-size: contain;background-repeat: no-repeat;\n              border-radius: 18px;background-image: url({{p.image}});background-position: center;\">\n          </div>\n          <div style=\"padding: 6px 3px 14px;\">\n            <h4 style=\"text-align: center; margin: 2px;font-weight: 500;\">{{p.name}}</h4>\n            <ion-button (click)=\"cloneProduct(p.id)\" style=\"color:#fff;\">\n              Clone Product\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </div>\n  <div *ngIf=\"nval==false\" class=\"emptybox\">\n    <img src=\"assets/images/products.png\" class=\"img_user\" />\n    <h2 style=\"text-align: center;color: #05274d;font-size:20px;\">No Products Found</h2>\n  </div>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/existingproduct/existingproduct-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/existingproduct/existingproduct-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ExistingproductPageRoutingModule */

  /***/
  function srcAppExistingproductExistingproductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExistingproductPageRoutingModule", function () {
      return ExistingproductPageRoutingModule;
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


    var _existingproduct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./existingproduct.page */
    "./src/app/existingproduct/existingproduct.page.ts");

    var routes = [{
      path: '',
      component: _existingproduct_page__WEBPACK_IMPORTED_MODULE_3__["ExistingproductPage"]
    }];

    var ExistingproductPageRoutingModule = function ExistingproductPageRoutingModule() {
      _classCallCheck(this, ExistingproductPageRoutingModule);
    };

    ExistingproductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExistingproductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/existingproduct/existingproduct.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/existingproduct/existingproduct.module.ts ***!
    \***********************************************************/

  /*! exports provided: ExistingproductPageModule */

  /***/
  function srcAppExistingproductExistingproductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExistingproductPageModule", function () {
      return ExistingproductPageModule;
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


    var _existingproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./existingproduct-routing.module */
    "./src/app/existingproduct/existingproduct-routing.module.ts");
    /* harmony import */


    var _existingproduct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./existingproduct.page */
    "./src/app/existingproduct/existingproduct.page.ts");

    var ExistingproductPageModule = function ExistingproductPageModule() {
      _classCallCheck(this, ExistingproductPageModule);
    };

    ExistingproductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _existingproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExistingproductPageRoutingModule"]],
      declarations: [_existingproduct_page__WEBPACK_IMPORTED_MODULE_6__["ExistingproductPage"]]
    })], ExistingproductPageModule);
    /***/
  },

  /***/
  "./src/app/existingproduct/existingproduct.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/existingproduct/existingproduct.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExistingproductExistingproductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\nion-segment {\n  --color: #040404;\n  height: 53px;\n  --background:#eceaeb;\n  border-bottom: 1px solid #05274d;\n}\n\nion-segment-button {\n  --color: #0e0e0e;\n  --background:#eceaeb;\n  --indicator-color: #05274d;\n  --color-checked: #05274d;\n  --indicator-height: 3px;\n  /* min-height: 30px; */\n  text-transform: capitalize;\n  --padding-bottom: 10px;\n  --padding-top: 5px;\n  font-size: 14px;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 6px;\n  background: #fff;\n  padding: 8px 14px;\n  font-size: 14px;\n  outline: none;\n  color: #05274d;\n  margin: 8px 17px;\n  font-weight: 600;\n}\n\n.profilecard {\n  box-shadow: 0px 2px 5px 3px #e2e2e2;\n  border-radius: 15px;\n  outline: none;\n}\n\n.profilecard img {\n  width: 100%;\n}\n\n.profilecard h4 {\n  font-size: 18px;\n  color: black !important;\n  font-weight: 600;\n}\n\n.emptybox {\n  margin-top: 20%;\n}\n\n.emptybox img {\n  width: 70%;\n  margin: auto;\n  display: block;\n}\n\n.emptybox h2 {\n  text-align: center;\n  color: #ff6b00bf;\n  font-weight: 600;\n  margin-top: 10%;\n}\n\n.button-native {\n  padding: 8px !important;\n}\n\nion-button {\n  font-size: 12px;\n  height: 30px;\n  --background: #081f65;\n  --border-radius: 10px;\n  text-transform: none;\n  margin: auto;\n  display: block;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhpc3Rpbmdwcm9kdWN0L0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXGV4aXN0aW5ncHJvZHVjdFxcZXhpc3Rpbmdwcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXhpc3Rpbmdwcm9kdWN0L2V4aXN0aW5ncHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NIOztBRENBO0VBRUksZ0JBQUE7RUFDRSxZQUFBO0VBQ0Ysb0JBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBRUEsd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEMkJBO0VBQ0UsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUN4QkY7O0FEeUJFO0VBQ0csV0FBQTtBQ3ZCTDs7QUR5QkU7RUFDSSxlQUFBO0VBQ0osdUJBQUE7RUFDQSxnQkFBQTtBQ3ZCRjs7QUQ0QkE7RUFDRyxlQUFBO0FDekJIOztBRDBCRztFQUNHLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ3hCTjs7QUQwQkc7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDeEJKOztBRDRCQTtFQUNHLHVCQUFBO0FDekJIOztBRDRCQTtFQUNHLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDekJIIiwiZmlsZSI6InNyYy9hcHAvZXhpc3Rpbmdwcm9kdWN0L2V4aXN0aW5ncHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVuZG9yLWhlYWR7XHJcbiAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICBmb250LXdlaWdodDo2MDA7XHJcbiAgIHBhZGRpbmctaW5saW5lOjBweDtcclxufVxyXG5pb24tc2VnbWVudHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGJyb3duICwgYnJvd24pOyBcclxuICAgIC0tY29sb3I6ICMwNDA0MDQ7XHJcbiAgICAgIGhlaWdodDogNTNweDtcclxuICAgIC0tYmFja2dyb3VuZDojZWNlYWViO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNTI3NGQ7XHJcbiAgfVxyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgIC0tY29sb3I6ICMwZTBlMGU7XHJcbiAgICAtLWJhY2tncm91bmQ6I2VjZWFlYjtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiAjMDUyNzRkO1xyXG4gICAvLyAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMwNTI3NGQ7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDNweDtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDMwcHg7ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5wcm9kdWN0bGlzdCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgY29sb3I6IzA1Mjc0ZDtcclxuICAgIG1hcmdpbjogOHB4IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gfVxyXG5cclxuLy8gLnNlZ21lbnR7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNDdhMjA7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4vLyAgICAgbGFiZWx7XHJcbi8vICAgICAgICAgLS1jb2xvcjojZjQ3YTIwO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuYWN0aXZlX3NlZ21lbnR7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZjQ3YTIwO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGxhYmVse1xyXG4vLyAgICAgICAgIC0tY29sb3I6I2ZmZjtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLnByb2ZpbGVjYXJkIHtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAzcHggI2UyZTJlMjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaW1nIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICBtYXJnaW4tbGVmdDogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5lbXB0eWJveCB7XHJcbiAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG4gICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmNmIwMGJmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgfVxyXG59XHJcblxyXG4uYnV0dG9uLW5hdGl2ZSB7XHJcbiAgIHBhZGRpbmc6OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiAgIGhlaWdodDogMzBweDtcclxuICAgLS1iYWNrZ3JvdW5kOiAjMDgxZjY1O1xyXG4gICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB3aWR0aDogODAlO1xyXG59IiwiLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIC0tY29sb3I6ICMwNDA0MDQ7XG4gIGhlaWdodDogNTNweDtcbiAgLS1iYWNrZ3JvdW5kOiNlY2VhZWI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDUyNzRkO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAtLWNvbG9yOiAjMGUwZTBlO1xuICAtLWJhY2tncm91bmQ6I2VjZWFlYjtcbiAgLS1pbmRpY2F0b3ItY29sb3I6ICMwNTI3NGQ7XG4gIC0tY29sb3ItY2hlY2tlZDogIzA1Mjc0ZDtcbiAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG4gIC8qIG1pbi1oZWlnaHQ6IDMwcHg7ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2R1Y3RsaXN0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzA1Mjc0ZDtcbiAgbWFyZ2luOiA4cHggMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnByb2ZpbGVjYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4ICNlMmUyZTI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvZmlsZWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZWNhcmQgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZW1wdHlib3gge1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG4uZW1wdHlib3ggaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5lbXB0eWJveCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZjZiMDBiZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uYnV0dG9uLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzA4MWY2NTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/existingproduct/existingproduct.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/existingproduct/existingproduct.page.ts ***!
    \*********************************************************/

  /*! exports provided: ExistingproductPage */

  /***/
  function srcAppExistingproductExistingproductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExistingproductPage", function () {
      return ExistingproductPage;
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
    /* harmony import */


    var _brandfilter_brandfilter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../brandfilter/brandfilter.page */
    "./src/app/brandfilter/brandfilter.page.ts");

    var ExistingproductPage = /*#__PURE__*/function () {
      function ExistingproductPage(util, actRoute, router, api, popoverController, loadingCtrl, alertController, modalController) {
        _classCallCheck(this, ExistingproductPage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.modalController = modalController;
        this.sub_categories = [];
        this.products = [];
      }

      _createClass(ExistingproductPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.catId = this.actRoute.snapshot.paramMap.get('catId');
          this.subcatid = this.actRoute.snapshot.paramMap.get('subcatId');
          this.catName = this.actRoute.snapshot.paramMap.get('catName');
          this.shopId = localStorage.getItem('fash_user_id');
          this.getpackageReport(); //this.getshopSubCategories();

          this.getSubCategoryProducts(this.subcatid, this.catId);
        }
      }, {
        key: "getItems",
        value: function getItems(ev) {
          var _this = this;

          var keyword = ev.target.value;

          if (keyword.length == 0) {
            this.getSubCategoryProducts(this.subcatid, this.catId);
          } else if (keyword.length > 0) {
            var catObj = {
              action: "search_clone_products",
              keyword: keyword,
              subcat_id: this.subcatid,
              shop_id: this.shopId
            };
            this.api.searchCloneProducts(function (response) {
              if (response.status == true) {
                _this.products = response.product_list;
                _this.nval = true;
              } else {
                _this.nval = false;
                _this.products = []; //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
            }, catObj);
          }
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
                    catObj = {
                      action: "vendor_package_for_count",
                      vendor_id: this.shopId
                    };
                    this.api.getPackageReport(function (response) {
                      if (response.status == true) {
                        _this2.product = response.products;
                      } else {
                        _this2.product = 0; //this.router.navigate(['plans']);
                      }
                    }, catObj);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /* segmentChanged(event) {
           this.currentSegment = event.target.value;
           this.products = [];
           this.getSubCategoryProducts(this.currentSegment, this.catId);
         }*/

        /* async getshopSubCategories() {
        
           let subcatObj = { action: "getShopsubcategories", shopId: this.shopId };
           this.products = [];
           
           let loading = await this.loadingCtrl.create({
                           spinner:'circles',
                           message: 'Please wait',
                         });
                         loading.present();
        
           this.api.getShopSubCategories((response: any) => {
           loading.dismiss();
               if (response.status == true) {
                 this.sub_categories = response.subcategory_list;
                 let defualtSubCatId = this.sub_categories[0].id;
                 this.subcatid = this.sub_categories[0].id;
                 let cat_id = this.sub_categories[0].cat_id;
                 this.currentSegment = defualtSubCatId;
                 this.getSubCategoryProducts(defualtSubCatId, cat_id);
               }
               else {
                 this.util.presentToast(response.message, 'danger', 'bottom', 2500);
               }
        
        
           }, subcatObj);
         } */

      }, {
        key: "editProduct",
        value: function editProduct(pid, shop_id) {
          this.router.navigate(['editproduct', {
            pid: pid,
            shop_id: shop_id
          }]);
        }
      }, {
        key: "viewProduct",
        value: function viewProduct(pid) {
          this.router.navigate(['productdetails', {
            pid: pid
          }]);
        }
      }, {
        key: "goProduct",
        value: function goProduct() {
          this.router.navigate(['request-new-product', {
            shopId: this.shopId
          }]);
        }
      }, {
        key: "viewlinkproduct",
        value: function viewlinkproduct(pid) {
          this.router.navigate(['linkproducts', {
            pid: pid
          }]);
        }
      }, {
        key: "addVariants",
        value: function addVariants(pid) {
          this.router.navigate(['addvariant', {
            pid: pid
          }]);
        }
      }, {
        key: "getSubCategoryProducts",
        value: function getSubCategoryProducts(SubCatId, cat_id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var productObj, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    productObj = {
                      action: "getexistingProducts",
                      subcat_id: SubCatId,
                      shop_id: this.shopId
                    };
                    _context2.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context2.sent;
                    loading.present();
                    this.products = [];
                    this.api.fetchexistingProducts(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this3.products = response.product_list;
                        _this3.nval = true;
                      } else {
                        _this3.nval = false; //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, productObj);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "cloneProduct",
        value: function cloneProduct(pid) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirm!',
                      message: 'Are you sure you want to clone this Product ?',
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
                          var cloneObj = {
                            action: "cloneNewProduct",
                            pid: pid,
                            shopId: _this4.shopId
                          };

                          _this4.api.cloneNewProduct(function (response) {
                            if (response.status == true) {
                              _this4.util.presentToast(response.message, 'danger', 'bottom', 2500);

                              _this4.ionViewWillEnter();
                            } else {
                              _this4.util.presentToast(response.message, 'danger', 'bottom', 2500);
                            }
                          }, cloneObj);
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
      }, {
        key: "filters",
        value: function filters(shopId, catId, subcatId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: _brandfilter_brandfilter_page__WEBPACK_IMPORTED_MODULE_6__["BrandfilterPage"],
                      componentProps: {
                        shopId: shopId,
                        catId: catId,
                        subcatId: subcatId
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (data) {
                      var json_data = data.data.json_data;

                      if (json_data.length == 0) {} else {
                        var filterObj = {
                          action: "clone_products_brand_filters",
                          shopId: _this5.shopId,
                          catId: _this5.catId,
                          subcat_id: _this5.subcatid,
                          json_data: json_data
                        }; //this.util.showLoader();

                        _this5.api.productscloneBrandFilters(function (response) {
                          //this.util.hideLoader();
                          if (response.status == true) {
                            _this5.products = response.product_list;
                            _this5.nval = true;
                          } else if (response.status == false) {
                            _this5.products = [];
                            _this5.nval = false;
                          }
                        }, filterObj);
                      }
                    });
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ExistingproductPage;
    }();

    ExistingproductPage.ctorParameters = function () {
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    ExistingproductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-existingproduct',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./existingproduct.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/existingproduct/existingproduct.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./existingproduct.page.scss */
      "./src/app/existingproduct/existingproduct.page.scss"))["default"]]
    })], ExistingproductPage);
    /***/
  }
}]);
//# sourceMappingURL=existingproduct-existingproduct-module-es5.js.map