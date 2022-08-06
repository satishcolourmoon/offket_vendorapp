(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateversion-updateversion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/updateversion/updateversion.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updateversion/updateversion.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-title style=\"text-align: center;\">Update App</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div style=\"margin-top: 20%;\">\n    <button class=\"updatebtn\" (click)=\"updateapp()\"> Update </button>\n  </div>\n  <p class=\"version\"> Current version is out dated. Please update to latest version</p>\n</ion-content>\n\n<style>\n  .updatebtn {\n    outline: none;\n    font-size: 20px;\n    padding: 10px 20px;\n    background: #ff6ab5;\n    margin: auto;\n    display: block;\n    color: #fff;\n    border-radius: 7px;\n  }\n\n  .version {\n    font-size: 16px;\n    text-align: center;\n    color: #034f6b;\n    font-weight: 600;\n    margin: 15px 30px;\n  }\n</style>");

/***/ }),

/***/ "./src/app/updateversion/updateversion-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/updateversion/updateversion-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UpdateversionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateversionPageRoutingModule", function() { return UpdateversionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _updateversion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateversion.page */ "./src/app/updateversion/updateversion.page.ts");




const routes = [
    {
        path: '',
        component: _updateversion_page__WEBPACK_IMPORTED_MODULE_3__["UpdateversionPage"]
    }
];
let UpdateversionPageRoutingModule = class UpdateversionPageRoutingModule {
};
UpdateversionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateversionPageRoutingModule);



/***/ }),

/***/ "./src/app/updateversion/updateversion.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/updateversion/updateversion.module.ts ***!
  \*******************************************************/
/*! exports provided: UpdateversionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateversionPageModule", function() { return UpdateversionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _updateversion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateversion-routing.module */ "./src/app/updateversion/updateversion-routing.module.ts");
/* harmony import */ var _updateversion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateversion.page */ "./src/app/updateversion/updateversion.page.ts");







let UpdateversionPageModule = class UpdateversionPageModule {
};
UpdateversionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _updateversion_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateversionPageRoutingModule"]
        ],
        declarations: [_updateversion_page__WEBPACK_IMPORTED_MODULE_6__["UpdateversionPage"]]
    })
], UpdateversionPageModule);



/***/ }),

/***/ "./src/app/updateversion/updateversion.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/updateversion/updateversion.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXZlcnNpb24vdXBkYXRldmVyc2lvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/updateversion/updateversion.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/updateversion/updateversion.page.ts ***!
  \*****************************************************/
/*! exports provided: UpdateversionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateversionPage", function() { return UpdateversionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let UpdateversionPage = class UpdateversionPage {
    constructor(navctrl) {
        this.navctrl = navctrl;
    }
    ngOnInit() {
    }
    updateapp() {
        window.open("https://play.google.com/store/apps/details?id=com.offket.offketretailer", "_system");
    }
};
UpdateversionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
UpdateversionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-updateversion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./updateversion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/updateversion/updateversion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./updateversion.page.scss */ "./src/app/updateversion/updateversion.page.scss")).default]
    })
], UpdateversionPage);



/***/ })

}]);
//# sourceMappingURL=updateversion-updateversion-module-es2015.js.map