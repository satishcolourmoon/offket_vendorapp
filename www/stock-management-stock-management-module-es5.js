function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-management-stock-management-module"], {
  /***/
  "./src/app/stock-management/stock-management-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/stock-management/stock-management-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: StockManagementPageRoutingModule */

  /***/
  function srcAppStockManagementStockManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockManagementPageRoutingModule", function () {
      return StockManagementPageRoutingModule;
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


    var _stock_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stock-management.page */
    "./src/app/stock-management/stock-management.page.ts");

    var routes = [{
      path: '',
      component: _stock_management_page__WEBPACK_IMPORTED_MODULE_3__["StockManagementPage"]
    }];

    var StockManagementPageRoutingModule = function StockManagementPageRoutingModule() {
      _classCallCheck(this, StockManagementPageRoutingModule);
    };

    StockManagementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StockManagementPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/stock-management/stock-management.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/stock-management/stock-management.module.ts ***!
    \*************************************************************/

  /*! exports provided: StockManagementPageModule */

  /***/
  function srcAppStockManagementStockManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockManagementPageModule", function () {
      return StockManagementPageModule;
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


    var _stock_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stock-management-routing.module */
    "./src/app/stock-management/stock-management-routing.module.ts"); //import { StockManagementPage } from './stock-management.page';


    var StockManagementPageModule = function StockManagementPageModule() {
      _classCallCheck(this, StockManagementPageModule);
    };

    StockManagementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stock_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockManagementPageRoutingModule"]],
      declarations: []
    })], StockManagementPageModule);
    /***/
  }
}]);
//# sourceMappingURL=stock-management-stock-management-module-es5.js.map