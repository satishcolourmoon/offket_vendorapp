(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plans-plans-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plans/plans.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plans/plans.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" style=\"background-color:#f4f5f9;\">\n\t<ion-toolbar style=\"--background: #05274d;color: #fff;\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref slot=\"start\" *ngIf=\"offer_zone=='yes'\"></ion-back-button>\n    <ion-menu-button defaultHref slot=\"start\" *ngIf=\"offer_zone=='no'\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Membership Plans</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: #f1f1f1;\">\n\t<!-- <div class=\"plantext\">\n\t\t<p style=\"text-align: center;\">Choose the plan that suits you best</p>\n\t</div> -->\n\n\t<ion-grid class=\"subscriptionlist\">\n\t\t<ion-row class=\"category\" *ngFor=\"let p of plans\" (click)=\"viewPlan(p.id,p.plan)\">\n\t\t\t<div>\n\t\t\t\t<img [src]=\"p.image\">\n\t\t\t\t<h6>{{p.plan}}</h6>\n\t\t\t</div>\t\t\t\t\n\t\t\t\t<p [innerHtml]=\"p.description\"></p>\n\t\t\t\t<!-- <button (click)=\"viewPlan(p.id,p.plan)\">VIEW</button> -->\n\t\t\t\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/plans/plans-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/plans/plans-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PlansPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansPageRoutingModule", function() { return PlansPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _plans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plans.page */ "./src/app/plans/plans.page.ts");




const routes = [
    {
        path: '',
        component: _plans_page__WEBPACK_IMPORTED_MODULE_3__["PlansPage"]
    }
];
let PlansPageRoutingModule = class PlansPageRoutingModule {
};
PlansPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlansPageRoutingModule);



/***/ }),

/***/ "./src/app/plans/plans.module.ts":
/*!***************************************!*\
  !*** ./src/app/plans/plans.module.ts ***!
  \***************************************/
/*! exports provided: PlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansPageModule", function() { return PlansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _plans_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plans-routing.module */ "./src/app/plans/plans-routing.module.ts");
/* harmony import */ var _plans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plans.page */ "./src/app/plans/plans.page.ts");







let PlansPageModule = class PlansPageModule {
};
PlansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _plans_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlansPageRoutingModule"]
        ],
        declarations: [_plans_page__WEBPACK_IMPORTED_MODULE_6__["PlansPage"]]
    })
], PlansPageModule);



/***/ }),

/***/ "./src/app/plans/plans.page.scss":
/*!***************************************!*\
  !*** ./src/app/plans/plans.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hom_image {\n  width: 40%;\n  margin: 19px 0px 0px 5px;\n}\n\n.icon_cls {\n  width: 40px;\n  height: 28px;\n  color: #081F66;\n}\n\n.basket_cls {\n  width: 40px;\n  height: 28px;\n  color: #081F66;\n  margin-right: 5px;\n}\n\n.para {\n  position: absolute;\n  padding: 4px;\n  background: #CF1673;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  text-align: center;\n  color: #fff;\n  font-size: 11px;\n  right: 1%;\n  top: 0%;\n  z-index: 999;\n}\n\n.category {\n  background: #fff;\n  border: 1px solid #f2f1f1;\n  border-radius: 20px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n\n.category span {\n  color: #fff;\n  position: absolute;\n  top: 15px;\n  background: red;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 5px 14px;\n}\n\n.category h3 {\n  margin-top: 2px;\n  color: #081F66;\n  font-size: 24px;\n}\n\n.category p {\n  color: #2C2C2C;\n  font-size: 14px;\n  margin-top: -10px;\n  margin-bottom: -10px;\n}\n\n.category button {\n  float: right;\n  background: #e44424;\n  padding: 9px 14px;\n  border-radius: 7px;\n  color: #fff;\n  font-size: 12px;\n  outline: none;\n}\n\n.category:nth-child(4n+1) div {\n  width: 100%;\n}\n\n.category:nth-child(4n+1) div h6 {\n  margin-left: 125px;\n  color: #fff;\n  position: absolute;\n  /* top: 15px; */\n  background: #0c1563;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 5px 14px;\n  margin-top: -33px;\n}\n\n.category:nth-child(4n+2) div {\n  width: 100%;\n}\n\n.category:nth-child(4n+2) div h6 {\n  margin-left: 125px;\n  color: #fff;\n  position: absolute;\n  /* top: 15px; */\n  background: #e44424;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 5px 14px;\n  margin-top: -33px;\n}\n\n.category:nth-child(4n+3) div {\n  width: 100%;\n}\n\n.category:nth-child(4n+3) div h6 {\n  margin-left: 125px;\n  color: #fff;\n  position: absolute;\n  /* top: 15px; */\n  background: #0c7709;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 5px 14px;\n  margin-top: -33px;\n}\n\n.category:nth-child(4n+4) div {\n  width: 100%;\n}\n\n.category:nth-child(4n+4) div h6 {\n  margin-left: 125px;\n  color: #fff;\n  position: absolute;\n  /* top: 15px; */\n  background: red;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 5px 14px;\n  margin-top: -33px;\n}\n\n.plantext {\n  background: #e44424;\n  color: #fff;\n  padding: 5px;\n}\n\n.plantext p {\n  font-size: 16px;\n  text-align: center;\n  padding-bottom: 17px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.subscriptionlist {\n  margin-top: 11px;\n  border-radius: 20px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbnMvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxccGxhbnNcXHBsYW5zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxhbnMvcGxhbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFBTSxrQkFBQTtFQUNGLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0ksWUFBQTtFQUNKLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDR0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNILHlCQUFBO0VBQ0csbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURJSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGUjs7QURJSTtFQUFHLGVBQUE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtBQ0RSOztBREdJO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDRyxpQkFBQTtFQUNBLG9CQUFBO0FDRFI7O0FER0k7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRlI7O0FEUUk7RUFDSSxXQUFBO0FDTFI7O0FETUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKUjs7QURTSTtFQUNJLFdBQUE7QUNOUjs7QURPSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0xSOztBRFVJO0VBQ0ksV0FBQTtBQ1BSOztBRFFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTlI7O0FEV0k7RUFDSSxXQUFBO0FDUlI7O0FEU0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BSOztBRGFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1ZKOztBRFdJO0VBQ0ksZUFBQTtFQUNKLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVEo7O0FEYUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGxhbnMvcGxhbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbV9pbWFnZXtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDE5cHggMHB4IDBweCA1cHg7XHJcbn1cclxuLmljb25fY2xze1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBjb2xvcjogIzA4MUY2NjtcclxufVxyXG5cclxuLmJhc2tldF9jbHN7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGNvbG9yOiAjMDgxRjY2O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5wYXJhe3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNDRjE2NzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHJpZ2h0OiAxJTtcclxuICAgIHRvcDogMCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcblxyXG4uY2F0ZWdvcnl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMmYxZjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgICAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHhcclxuICAgIH1cclxuICAgIGgze21hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBjb2xvcjogIzA4MUY2NjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgXHRjb2xvcjogIzJDMkMyQztcclxuICAgIFx0Zm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgICB9XHJcbiAgICBidXR0b25cclxuICAgIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U0NDQyNDtcclxuICAgICAgICBwYWRkaW5nOiA5cHggMTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKzEpe1xyXG4gICAgZGl2e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaDYge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMjVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLyogdG9wOiAxNXB4OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwYzE1NjM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMzcHg7XHJcbiAgICB9XHJcbn1cclxufVxyXG4uY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKzIpe1xyXG4gICAgZGl2e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaDYge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMjVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLyogdG9wOiAxNXB4OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNDQ0MjQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMzcHg7XHJcbiAgICB9XHJcbn1cclxufVxyXG4uY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKzMpe1xyXG4gICAgZGl2e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaDYge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMjVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLyogdG9wOiAxNXB4OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwYzc3MDk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMzcHg7XHJcbiAgICB9XHJcbn1cclxufVxyXG4uY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKzQpe1xyXG4gICAgZGl2e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaDYge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMjVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLyogdG9wOiAxNXB4OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMzNweDtcclxuICAgIH1cclxufVxyXG59XHJcblxyXG5cclxuLnBsYW50ZXh0IHtcclxuICAgIGJhY2tncm91bmQ6ICNlNDQ0MjQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWJzY3JpcHRpb25saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSIsIi5ob21faW1hZ2Uge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDE5cHggMHB4IDBweCA1cHg7XG59XG5cbi5pY29uX2NscyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjMDgxRjY2O1xufVxuXG4uYmFza2V0X2NscyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjMDgxRjY2O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnBhcmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogI0NGMTY3MztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIHJpZ2h0OiAxJTtcbiAgdG9wOiAwJTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMWYxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNhdGVnb3J5IHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA1cHggMTRweDtcbn1cbi5jYXRlZ29yeSBoMyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgY29sb3I6ICMwODFGNjY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jYXRlZ29yeSBwIHtcbiAgY29sb3I6ICMyQzJDMkM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuLmNhdGVnb3J5IGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogI2U0NDQyNDtcbiAgcGFkZGluZzogOXB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhdGVnb3J5Om50aC1jaGlsZCg0bisxKSBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXRlZ29yeTpudGgtY2hpbGQoNG4rMSkgZGl2IGg2IHtcbiAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiB0b3A6IDE1cHg7ICovXG4gIGJhY2tncm91bmQ6ICMwYzE1NjM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNXB4IDE0cHg7XG4gIG1hcmdpbi10b3A6IC0zM3B4O1xufVxuXG4uY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKzIpIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhdGVnb3J5Om50aC1jaGlsZCg0bisyKSBkaXYgaDYge1xuICBtYXJnaW4tbGVmdDogMTI1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIHRvcDogMTVweDsgKi9cbiAgYmFja2dyb3VuZDogI2U0NDQyNDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA1cHggMTRweDtcbiAgbWFyZ2luLXRvcDogLTMzcHg7XG59XG5cbi5jYXRlZ29yeTpudGgtY2hpbGQoNG4rMykgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKzMpIGRpdiBoNiB7XG4gIG1hcmdpbi1sZWZ0OiAxMjVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogdG9wOiAxNXB4OyAqL1xuICBiYWNrZ3JvdW5kOiAjMGM3NzA5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweCAxNHB4O1xuICBtYXJnaW4tdG9wOiAtMzNweDtcbn1cblxuLmNhdGVnb3J5Om50aC1jaGlsZCg0bis0KSBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXRlZ29yeTpudGgtY2hpbGQoNG4rNCkgZGl2IGg2IHtcbiAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiB0b3A6IDE1cHg7ICovXG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA1cHggMTRweDtcbiAgbWFyZ2luLXRvcDogLTMzcHg7XG59XG5cbi5wbGFudGV4dCB7XG4gIGJhY2tncm91bmQ6ICNlNDQ0MjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucGxhbnRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnN1YnNjcmlwdGlvbmxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/plans/plans.page.ts":
/*!*************************************!*\
  !*** ./src/app/plans/plans.page.ts ***!
  \*************************************/
/*! exports provided: PlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansPage", function() { return PlansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let PlansPage = class PlansPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl, menu) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.plans = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menu.enable(true);
        this.getPlans();
        this.getshopDetails();
    }
    getPlans() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let vendorObj = { action: "getPlans", shopId: this.shopId };
            this.api.fetchPlans((response) => {
                console.log(response);
                if (response.status == true) {
                    this.plans = response.plans;
                }
            }, vendorObj);
        });
    }
    viewPlan(pid, title) {
        this.router.navigate(['subscriptions', { pid: pid, title: title }]);
    }
    getshopDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let dashboardObj = { action: "getProfileDetails", login_status: "vendor", shopId: this.shopId };
            this.api.fetchShopDetails((response) => {
                //alert(JSON.stringify(response));
                if (response.status == true) {
                    this.offer_zone = response.offer_zone;
                    if (this.offer_zone == 'yes') {
                        this.menu.enable(false);
                    }
                    else {
                        this.menu.enable(true);
                    }
                }
                else {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, dashboardObj);
        });
    }
};
PlansPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
PlansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plans',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./plans.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plans/plans.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./plans.page.scss */ "./src/app/plans/plans.page.scss")).default]
    })
], PlansPage);



/***/ })

}]);
//# sourceMappingURL=plans-plans-module-es2015.js.map