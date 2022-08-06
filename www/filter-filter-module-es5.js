function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filter-filter-module"], {
  /***/
  "./src/app/filter/filter-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/filter/filter-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FilterPageRoutingModule */

  /***/
  function srcAppFilterFilterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPageRoutingModule", function () {
      return FilterPageRoutingModule;
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


    var _filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./filter.page */
    "./src/app/filter/filter.page.ts");

    var routes = [{
      path: '',
      component: _filter_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]
    }];

    var FilterPageRoutingModule = function FilterPageRoutingModule() {
      _classCallCheck(this, FilterPageRoutingModule);
    };

    FilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FilterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/filter/filter.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/filter/filter.module.ts ***!
    \*****************************************/

  /*! exports provided: FilterPageModule */

  /***/
  function srcAppFilterFilterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPageModule", function () {
      return FilterPageModule;
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


    var _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./filter-routing.module */
    "./src/app/filter/filter-routing.module.ts"); //import { FilterPage } from './filter.page';


    var FilterPageModule = function FilterPageModule() {
      _classCallCheck(this, FilterPageModule);
    };

    FilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterPageRoutingModule"]],
      declarations: []
    })], FilterPageModule);
    /***/
  }
}]);
//# sourceMappingURL=filter-filter-module-es5.js.map