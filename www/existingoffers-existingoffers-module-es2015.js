(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["existingoffers-existingoffers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/existingoffers/existingoffers.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/existingoffers/existingoffers.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">Admin Offers</ion-title>\n\n  </ion-toolbar>\n  <ion-segment scrollable (ionChange)=\"segmentChanged($event)\" value=\"{{currentSegment}}\">\n    <ion-segment-button *ngFor=\"let s of sub_categories\" value=\"{{s.id}}\">\n      <ion-label style=\"text-transform: capitalize;\">{{s.title}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"products.length>0\">\n    <!-- <h2 style=\"text-align: center;color: #ff6b00bf;\">No Products Found</h2> -->\n\n    <ion-row padding>\n      <ion-col size=\"6\" *ngFor=\"let p of products\">\n        <ion-card>\n          <div style=\"width: 100%;height:100px;background-size: contain;background-repeat: no-repeat;\n              border-radius: 18px;background-image: url({{p.image}});background-position: center;\">\n          </div>\n          <div style=\"padding: 6px 3px 14px;\">\n            <h4 style=\"text-align: center; margin: 2px;font-weight: 500;\">{{p.name}}</h4>\n            <ion-button (click)=\"cloneProduct(p.id)\" style=\"color:#fff;\">\n              Clone Offer\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </div>\n  <div *ngIf=\"nval==false\" class=\"emptybox\">\n    <img src=\"assets/images/products.png\" class=\"img_user\" />\n    <h2 style=\"text-align: center;color: #05274d;font-size:20px;\">No Offers Found</h2>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/existingoffers/existingoffers-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/existingoffers/existingoffers-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExistingoffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingoffersPageRoutingModule", function() { return ExistingoffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _existingoffers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./existingoffers.page */ "./src/app/existingoffers/existingoffers.page.ts");




const routes = [
    {
        path: '',
        component: _existingoffers_page__WEBPACK_IMPORTED_MODULE_3__["ExistingoffersPage"]
    }
];
let ExistingoffersPageRoutingModule = class ExistingoffersPageRoutingModule {
};
ExistingoffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExistingoffersPageRoutingModule);



/***/ }),

/***/ "./src/app/existingoffers/existingoffers.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/existingoffers/existingoffers.module.ts ***!
  \*********************************************************/
/*! exports provided: ExistingoffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingoffersPageModule", function() { return ExistingoffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _existingoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./existingoffers-routing.module */ "./src/app/existingoffers/existingoffers-routing.module.ts");
/* harmony import */ var _existingoffers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./existingoffers.page */ "./src/app/existingoffers/existingoffers.page.ts");







let ExistingoffersPageModule = class ExistingoffersPageModule {
};
ExistingoffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _existingoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExistingoffersPageRoutingModule"]
        ],
        declarations: [_existingoffers_page__WEBPACK_IMPORTED_MODULE_6__["ExistingoffersPage"]]
    })
], ExistingoffersPageModule);



/***/ }),

/***/ "./src/app/existingoffers/existingoffers.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/existingoffers/existingoffers.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\nion-segment {\n  --color: #040404;\n  height: 53px;\n  --background:#eceaeb;\n  border-bottom: 1px solid #05274d;\n}\n\nion-segment-button {\n  --color: #0e0e0e;\n  --background:#eceaeb;\n  --indicator-color: #05274d;\n  --color-checked: #05274d;\n  --indicator-height: 3px;\n  /* min-height: 30px; */\n  text-transform: capitalize;\n  --padding-bottom: 10px;\n  --padding-top: 5px;\n  font-size: 14px;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 6px;\n  background: #05274d;\n  padding: 8px 14px;\n  font-size: 14px;\n  outline: none;\n  color: white;\n  margin: 8px 17px;\n  font-weight: 600;\n}\n\n.profilecard {\n  box-shadow: 0px 2px 5px 3px #e2e2e2;\n  border-radius: 15px;\n  outline: none;\n}\n\n.profilecard img {\n  width: 100%;\n}\n\n.profilecard h4 {\n  font-size: 18px;\n  color: black !important;\n  font-weight: 600;\n}\n\n.emptybox {\n  margin-top: 20%;\n}\n\n.emptybox img {\n  width: 70%;\n  margin: auto;\n  display: block;\n}\n\n.emptybox h2 {\n  text-align: center;\n  color: #ff6b00bf;\n  font-weight: 600;\n  margin-top: 10%;\n}\n\n.button-native {\n  padding: 8px !important;\n}\n\nion-button {\n  font-size: 12px;\n  height: 30px;\n  --background: #081f65;\n  --border-radius: 10px;\n  text-transform: none;\n  margin: auto;\n  display: block;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhpc3RpbmdvZmZlcnMvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcZXhpc3RpbmdvZmZlcnNcXGV4aXN0aW5nb2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXhpc3RpbmdvZmZlcnMvZXhpc3RpbmdvZmZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSDs7QURDQTtFQUVJLGdCQUFBO0VBQ0UsWUFBQTtFQUNGLG9CQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUVBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQztFQUNHLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRDJCQTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDeEJGOztBRHlCRTtFQUNHLFdBQUE7QUN2Qkw7O0FEeUJFO0VBQ0ksZUFBQTtFQUNKLHVCQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7O0FENEJBO0VBQ0csZUFBQTtBQ3pCSDs7QUQwQkc7RUFDRyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN4Qk47O0FEMEJHO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3hCSjs7QUQ0QkE7RUFDRyx1QkFBQTtBQ3pCSDs7QUQ0QkE7RUFDRyxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ3pCSCIsImZpbGUiOiJzcmMvYXBwL2V4aXN0aW5nb2ZmZXJzL2V4aXN0aW5nb2ZmZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW5kb3ItaGVhZHtcclxuICAgZm9udC1zaXplOjE2cHg7XHJcbiAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgcGFkZGluZy1pbmxpbmU6MHB4O1xyXG59XHJcbmlvbi1zZWdtZW50e1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoYnJvd24gLCBicm93bik7IFxyXG4gICAgLS1jb2xvcjogIzA0MDQwNDtcclxuICAgICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNlY2VhZWI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA1Mjc0ZDtcclxuICB9XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgLS1jb2xvcjogIzBlMGUwZTtcclxuICAgIC0tYmFja2dyb3VuZDojZWNlYWViO1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6ICMwNTI3NGQ7XHJcbiAgIC8vICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogIzA1Mjc0ZDtcclxuICAgIC0taW5kaWNhdG9yLWhlaWdodDogM3B4O1xyXG4gICAgLyogbWluLWhlaWdodDogMzBweDsgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAucHJvZHVjdGxpc3Qge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNTI3NGQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOiA4cHggMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9XHJcblxyXG4vLyAuc2VnbWVudHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y0N2EyMDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbi8vICAgICBsYWJlbHtcclxuLy8gICAgICAgICAtLWNvbG9yOiNmNDdhMjA7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC5hY3RpdmVfc2VnbWVudHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmNDdhMjA7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgbGFiZWx7XHJcbi8vICAgICAgICAgLS1jb2xvcjojZmZmO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4ucHJvZmlsZWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCAjZTJlMmUyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBpbWcge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVtcHR5Ym94IHtcclxuICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICBpbWcge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbiAgIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmY2YjAwYmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICB9XHJcbn1cclxuXHJcbi5idXR0b24tbmF0aXZlIHtcclxuICAgcGFkZGluZzo4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAtLWJhY2tncm91bmQ6ICMwODFmNjU7XHJcbiAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgIG1hcmdpbjogYXV0bztcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIHdpZHRoOiA4MCU7XHJcbn0iLCIudmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgLS1jb2xvcjogIzA0MDQwNDtcbiAgaGVpZ2h0OiA1M3B4O1xuICAtLWJhY2tncm91bmQ6I2VjZWFlYjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNTI3NGQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICMwZTBlMGU7XG4gIC0tYmFja2dyb3VuZDojZWNlYWViO1xuICAtLWluZGljYXRvci1jb2xvcjogIzA1Mjc0ZDtcbiAgLS1jb2xvci1jaGVja2VkOiAjMDUyNzRkO1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDNweDtcbiAgLyogbWluLWhlaWdodDogMzBweDsgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJvZHVjdGxpc3Qge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICMwNTI3NGQ7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA4cHggMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnByb2ZpbGVjYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4ICNlMmUyZTI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvZmlsZWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZWNhcmQgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZW1wdHlib3gge1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG4uZW1wdHlib3ggaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5lbXB0eWJveCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZjZiMDBiZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uYnV0dG9uLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzA4MWY2NTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/existingoffers/existingoffers.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/existingoffers/existingoffers.page.ts ***!
  \*******************************************************/
/*! exports provided: ExistingoffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingoffersPage", function() { return ExistingoffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let ExistingoffersPage = class ExistingoffersPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl, alertController) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.sub_categories = [];
        this.products = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.shopId = localStorage.getItem('fash_user_id');
        this.getpackageReport();
        this.getshopSubCategories();
    }
    getpackageReport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let catObj = { action: "vendor_package_for_count", vendor_id: this.shopId };
            this.api.getPackageReport((response) => {
                if (response.status == true) {
                    this.product = response.offers;
                }
                else {
                    this.product = 0;
                    //this.router.navigate(['plans']);
                }
            }, catObj);
        });
    }
    segmentChanged(event) {
        this.currentSegment = event.target.value;
        this.products = [];
        this.getCategoryProducts(this.currentSegment);
    }
    getshopSubCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let subcatObj = { action: "getShopOffercategories", shopId: this.shopId };
            this.products = [];
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchShopOffercategories((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.sub_categories = response.subcategory_list;
                    let defualtSubCatId = this.sub_categories[0].id;
                    this.currentSegment = defualtSubCatId;
                    this.getCategoryProducts(defualtSubCatId);
                }
                else {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, subcatObj);
        });
    }
    editProduct(pid, shop_id) {
        this.router.navigate(['editproduct', { pid: pid, shop_id: shop_id }]);
    }
    viewProduct(pid) {
        this.router.navigate(['productdetails', { pid: pid }]);
    }
    goProduct() {
        this.router.navigate(['request-new-product', { shopId: this.shopId }]);
    }
    viewlinkproduct(pid) {
        this.router.navigate(['linkproducts', { pid: pid }]);
    }
    addVariants(pid) {
        this.router.navigate(['addvariant', { pid: pid }]);
    }
    getCategoryProducts(SubCatId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let productObj = { action: "getexistingOffers", cat_id: SubCatId, shop_id: this.shopId };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.products = [];
            this.api.fetchexistingOffers((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.products = response.product_list;
                    this.nval = true;
                }
                else {
                    this.nval = false;
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, productObj);
        });
    }
    cloneProduct(pid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want to clone this Offer ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            let cloneObj = { action: "cloneNewOffer", pid: pid, shopId: this.shopId };
                            this.api.cloneNewOffer((response) => {
                                if (response.status == true) {
                                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                                    this.ionViewWillEnter();
                                }
                                else {
                                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                                }
                            }, cloneObj);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ExistingoffersPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ExistingoffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-existingoffers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./existingoffers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/existingoffers/existingoffers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./existingoffers.page.scss */ "./src/app/existingoffers/existingoffers.page.scss")).default]
    })
], ExistingoffersPage);



/***/ })

}]);
//# sourceMappingURL=existingoffers-existingoffers-module-es2015.js.map