(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirmregister-confirmregister-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmregister/confirmregister.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmregister/confirmregister.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>registersuccess</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"class_name\">\n  <div class=\"registersuccess\">\n    <ion-row class=\"success_text\">\n      <p style=\"text-align:center;\">Your registration under approval<br/>\n        once approved you<br/>\n        can start using</p>\n      </ion-row>\n\n      <button class=\"btn_login\" (click)=\"goLogin()\">\n\t\t\t<p>CONTINUE TO LOGIN <ion-icon name=\"chevron-forward-outline\" class=\"arrow_cls\"></ion-icon>\n\t\t\t</p>\n\t\t</button>\n  </div>\n\n\n  \n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/confirmregister/confirmregister-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/confirmregister/confirmregister-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmregisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmregisterPageRoutingModule", function() { return ConfirmregisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confirmregister_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmregister.page */ "./src/app/confirmregister/confirmregister.page.ts");




const routes = [
    {
        path: '',
        component: _confirmregister_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmregisterPage"]
    }
];
let ConfirmregisterPageRoutingModule = class ConfirmregisterPageRoutingModule {
};
ConfirmregisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmregisterPageRoutingModule);



/***/ }),

/***/ "./src/app/confirmregister/confirmregister.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/confirmregister/confirmregister.module.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmregisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmregisterPageModule", function() { return ConfirmregisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _confirmregister_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmregister-routing.module */ "./src/app/confirmregister/confirmregister-routing.module.ts");
/* harmony import */ var _confirmregister_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmregister.page */ "./src/app/confirmregister/confirmregister.page.ts");







let ConfirmregisterPageModule = class ConfirmregisterPageModule {
};
ConfirmregisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirmregister_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmregisterPageRoutingModule"]
        ],
        declarations: [_confirmregister_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmregisterPage"]]
    })
], ConfirmregisterPageModule);



/***/ }),

/***/ "./src/app/confirmregister/confirmregister.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/confirmregister/confirmregister.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".registersuccess {\n  position: absolute;\n  bottom: 0;\n  background-color: #05274d;\n  width: 100%;\n  border-top-left-radius: 30PX;\n  border-top-right-radius: 30PX;\n  padding: 20px 40px;\n}\n\n.success_text {\n  margin: auto;\n  display: block;\n  color: #fff;\n  letter-spacing: 1px;\n  font-size: 17px;\n}\n\n.class_name {\n  background-image: url('registersuccess.png');\n  background-color: #edefc7;\n  --background: none;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-position-y: 90px;\n  background-size: 100%;\n}\n\n.btn_login {\n  text-align: center;\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybXJlZ2lzdGVyL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXGNvbmZpcm1yZWdpc3RlclxcY29uZmlybXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29uZmlybXJlZ2lzdGVyL2NvbmZpcm1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBRUksNENBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBQTtFQUFXLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxTQUFBO0FDTTVDIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybXJlZ2lzdGVyL2NvbmZpcm1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJzdWNjZXNze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1Mjc0ZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMFBYO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMFBYO1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbn1cbi5zdWNjZXNzX3RleHR7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmNsYXNzX25hbWV7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3JlZ2lzdGVyc3VjY2Vzcy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWZjNztcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIH1cbi5idG5fbG9naW57dGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTsgbWFyZ2luOiAwO30iLCIucmVnaXN0ZXJzdWNjZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTI3NGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMFBYO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBQWDtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xufVxuXG4uc3VjY2Vzc190ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmNsYXNzX25hbWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3JlZ2lzdGVyc3VjY2Vzcy5wbmdcIik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVmYzc7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA5MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5idG5fbG9naW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/confirmregister/confirmregister.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/confirmregister/confirmregister.page.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmregisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmregisterPage", function() { return ConfirmregisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");






let ConfirmregisterPage = class ConfirmregisterPage {
    constructor(router, loadingController, util, api, modalController, menu, loadingCtrl) {
        this.router = router;
        this.loadingController = loadingController;
        this.util = util;
        this.api = api;
        this.modalController = modalController;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
    }
    goLogin() {
        this.router.navigate(['/login']);
    }
};
ConfirmregisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ConfirmregisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmregister',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirmregister.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmregister/confirmregister.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirmregister.page.scss */ "./src/app/confirmregister/confirmregister.page.scss")).default]
    })
], ConfirmregisterPage);



/***/ })

}]);
//# sourceMappingURL=confirmregister-confirmregister-module-es2015.js.map