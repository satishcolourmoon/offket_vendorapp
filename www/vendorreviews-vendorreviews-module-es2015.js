(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendorreviews-vendorreviews-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendorreviews/vendorreviews.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendorreviews/vendorreviews.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>vendorreviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<ion-item>\n  <ion-thumbnail slot=\"start\">\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n    <b>Satish</b>\n  </ion-thumbnail>\n  <div>\n  \t<ion-icon name=\"star\"></ion-icon>\n  \t<ion-icon name=\"star\"></ion-icon>\n  \t<ion-icon name=\"star\"></ion-icon>\n  \t<ion-icon name=\"star\"></ion-icon>\n  \t<ion-icon name=\"star\"></ion-icon>\n  </div>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>\n</ion-item>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/vendorreviews/vendorreviews-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vendorreviews/vendorreviews-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VendorreviewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorreviewsPageRoutingModule", function() { return VendorreviewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vendorreviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendorreviews.page */ "./src/app/vendorreviews/vendorreviews.page.ts");




const routes = [
    {
        path: '',
        component: _vendorreviews_page__WEBPACK_IMPORTED_MODULE_3__["VendorreviewsPage"]
    }
];
let VendorreviewsPageRoutingModule = class VendorreviewsPageRoutingModule {
};
VendorreviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VendorreviewsPageRoutingModule);



/***/ }),

/***/ "./src/app/vendorreviews/vendorreviews.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/vendorreviews/vendorreviews.module.ts ***!
  \*******************************************************/
/*! exports provided: VendorreviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorreviewsPageModule", function() { return VendorreviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vendorreviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendorreviews-routing.module */ "./src/app/vendorreviews/vendorreviews-routing.module.ts");
/* harmony import */ var _vendorreviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendorreviews.page */ "./src/app/vendorreviews/vendorreviews.page.ts");







let VendorreviewsPageModule = class VendorreviewsPageModule {
};
VendorreviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vendorreviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["VendorreviewsPageRoutingModule"]
        ],
        declarations: [_vendorreviews_page__WEBPACK_IMPORTED_MODULE_6__["VendorreviewsPage"]]
    })
], VendorreviewsPageModule);



/***/ }),

/***/ "./src/app/vendorreviews/vendorreviews.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/vendorreviews/vendorreviews.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnJldmlld3MvdmVuZG9ycmV2aWV3cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/vendorreviews/vendorreviews.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/vendorreviews/vendorreviews.page.ts ***!
  \*****************************************************/
/*! exports provided: VendorreviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorreviewsPage", function() { return VendorreviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let VendorreviewsPage = class VendorreviewsPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl, menu) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
    }
    ngOnInit() {
        this.vendor_id = this.actRoute.snapshot.paramMap.get('vendor_id');
    }
};
VendorreviewsPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
VendorreviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendorreviews',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vendorreviews.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendorreviews/vendorreviews.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vendorreviews.page.scss */ "./src/app/vendorreviews/vendorreviews.page.scss")).default]
    })
], VendorreviewsPage);



/***/ })

}]);
//# sourceMappingURL=vendorreviews-vendorreviews-module-es2015.js.map