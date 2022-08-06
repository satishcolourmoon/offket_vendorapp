(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brandfilter-brandfilter-module"],{

/***/ "./src/app/brandfilter/brandfilter-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/brandfilter/brandfilter-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BrandfilterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandfilterPageRoutingModule", function() { return BrandfilterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _brandfilter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brandfilter.page */ "./src/app/brandfilter/brandfilter.page.ts");




const routes = [
    {
        path: '',
        component: _brandfilter_page__WEBPACK_IMPORTED_MODULE_3__["BrandfilterPage"]
    }
];
let BrandfilterPageRoutingModule = class BrandfilterPageRoutingModule {
};
BrandfilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BrandfilterPageRoutingModule);



/***/ }),

/***/ "./src/app/brandfilter/brandfilter.module.ts":
/*!***************************************************!*\
  !*** ./src/app/brandfilter/brandfilter.module.ts ***!
  \***************************************************/
/*! exports provided: BrandfilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandfilterPageModule", function() { return BrandfilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _brandfilter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brandfilter-routing.module */ "./src/app/brandfilter/brandfilter-routing.module.ts");






//import { BrandfilterPage } from './brandfilter.page';
let BrandfilterPageModule = class BrandfilterPageModule {
};
BrandfilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _brandfilter_routing_module__WEBPACK_IMPORTED_MODULE_5__["BrandfilterPageRoutingModule"]
        ],
        declarations: []
    })
], BrandfilterPageModule);



/***/ })

}]);
//# sourceMappingURL=brandfilter-brandfilter-module-es2015.js.map