(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["requestpayment-requestpayment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/requestpayment/requestpayment.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requestpayment/requestpayment.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar style=\"--background: #05274d;color: #fff;\">\n\t\t<ion-back-button defaultHref slot=\"start\"></ion-back-button>\n\t\t<ion-title class=\"vendor-head\">Request Payments</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n\n\t<ion-grid style=\"padding:0px;\">\n\t\t\n\t\t<ion-row class=\"ion-text-center\">\n\t\t\t<ion-col siz=\"12\">\n\t\t\t\t<p>Total Payment {{total_payment}}</p>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row class=\"ion-text-center\">\n\t\t\t<ion-col siz=\"12\">\n\t\t\t\t<ion-button color=\"success\" (click)=\"requestPay(total_payment)\" >Request Payment</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t\n\t\t <ion-row style=\"margin-top: 4%;\">\n\t\t\t<ion-col siz=\"12\" style=\"padding:0px;\">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th><small>Requested <br>Amount</small></th>\n\t\t\t\t\t\t<th><small>Payment <br>Details</small></th>\n\t\t\t\t\t\t<th><small>Status</small></th>\n\t\t\t\t\t\t<th><small>Date</small></th>\n\t\t\t\t\t\t<th><small>Action</small></th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngFor=\"let rl of request_list\" style=\"font-size: 13px;\">\n\t\t\t\t\t\t<td>{{rl.request_amount}}</td>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div *ngIf=\"rl.mode_payment=='online'\">\n\t\t\t\t\t\t\t\t\t <p><b>Payment:</b>{{rl.mode_payment}}</p>\n                                     <p><b>TnxID :</b>{{rl.transaction_id}}</p>\n                                     <p><b>Image :</b> <img src=\"{{rl.image}}\" style=\"width: 100%; height: 60px;\"></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"rl.mode_payment=='offline'\">\n\t\t\t\t\t\t\t\t\t <p><b>Payment :</b>{{rl.mode_payment}}</p>\n                                     <p><b>Sender :</b>{{rl.sender_name}}</p>\n                                     <p><b>Receiver :</b>{{rl.receiver_name}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p><b>Description :</b>{{rl.admin_description}}</p>\n                            <p><b>Payment Date :</b>{{rl.updated_at}}</p>\n\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>{{rl.status}}</td>\n\t\t\t\t\t\t<td>{{rl.created_at}}</td>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div *ngIf=\"rl.del_stats==0\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"trash-outline\" style=\"color: red;\" (click)=\"deleteRequest(rl.id)\"></ion-icon>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row> \n\t\t\n\t</ion-grid>\n</ion-content>\n\n\n\n<!-- <ion-row *ngFor=\"let variant of variant_list\">\n\t<ion-col>\n\t\t{{variant.product}}\n\t</ion-col>\n\t<ion-col>\n\t\t{{variant.attribute_type}}\n\t</ion-col>\n\t<ion-col>\n\t\t{{variant.attribute_values}}\n\t</ion-col>\n\t<ion-col>\n\t\t<ion-button (click)=\"editVariant(variant.id,variant.attribute_type_id,variant.attribute_values_ids)\">\n\t\t\t<ion-icon name=\"create-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button (click)=\"deleteVariant(variant.id)\">\n\t\t\t<ion-icon name=\"trash-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-col>\n</ion-row> -->");

/***/ }),

/***/ "./src/app/requestpayment/requestpayment-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/requestpayment/requestpayment-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RequestpaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestpaymentPageRoutingModule", function() { return RequestpaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _requestpayment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requestpayment.page */ "./src/app/requestpayment/requestpayment.page.ts");




const routes = [
    {
        path: '',
        component: _requestpayment_page__WEBPACK_IMPORTED_MODULE_3__["RequestpaymentPage"]
    }
];
let RequestpaymentPageRoutingModule = class RequestpaymentPageRoutingModule {
};
RequestpaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestpaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/requestpayment/requestpayment.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/requestpayment/requestpayment.module.ts ***!
  \*********************************************************/
/*! exports provided: RequestpaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestpaymentPageModule", function() { return RequestpaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _requestpayment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requestpayment-routing.module */ "./src/app/requestpayment/requestpayment-routing.module.ts");
/* harmony import */ var _requestpayment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requestpayment.page */ "./src/app/requestpayment/requestpayment.page.ts");







let RequestpaymentPageModule = class RequestpaymentPageModule {
};
RequestpaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _requestpayment_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestpaymentPageRoutingModule"]
        ],
        declarations: [_requestpayment_page__WEBPACK_IMPORTED_MODULE_6__["RequestpaymentPage"]]
    })
], RequestpaymentPageModule);



/***/ }),

/***/ "./src/app/requestpayment/requestpayment.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/requestpayment/requestpayment.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  border-right: 1px solid #cccccc;\n  text-align: left;\n  padding: 12px 3px;\n  background-color: #efefef;\n  color: #05274d;\n  text-align: center;\n  font-size: 15px;\n}\n\ntd {\n  border-right: 1px solid #d4d4d4;\n  text-align: left;\n  padding: 6px 2px;\n  background-color: #f9f9f9;\n  border-bottom: 3px solid #fff;\n  text-align: center;\n  font-size: 13px;\n}\n\n.editbtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: #fff;\n  background: green;\n  border-radius: 4px;\n  margin: 2px;\n}\n\n.deletebtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: #fff;\n  background: red;\n  border-radius: 4px;\n  margin: 2px;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 6px;\n  background: #fff;\n  padding: 8px 14px;\n  font-size: 14px;\n  margin: 8px 17px;\n  font-weight: 600;\n}\n\n.addvariant {\n  float: right;\n  color: #fff;\n  padding: 7px;\n  background: #f47a20;\n  border-radius: 3px;\n  font-size: 13px;\n  margin-right: 10px;\n}\n\n.addvariantbox h3 {\n  margin-left: 20px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.addvariantbox ion-select {\n  border: 1px solid #cac6c6;\n  margin: 11px 15px;\n  border-radius: 5px;\n}\n\n.addvariantbox ion-datetime {\n  border: 1px solid #cac6c6;\n  margin: 11px 15px;\n  border-radius: 5px;\n}\n\n.addvariantbox button {\n  color: #fff;\n  margin: auto;\n  display: block;\n  background: #f47a20;\n  padding: 7px 10px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdHBheW1lbnQvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxccmVxdWVzdHBheW1lbnRcXHJlcXVlc3RwYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVxdWVzdHBheW1lbnQvcmVxdWVzdHBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSDs7QURDQTtFQUNLLHlCQUFBO0VBQ0QsV0FBQTtBQ0VKOztBRENDO0VBQ0csK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkM7RUFDRyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEM7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTUo7O0FERks7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0tUOztBREhLO0VBQ0cseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDS1I7O0FESEs7RUFDRyx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNLUjs7QURISztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvcmVxdWVzdHBheW1lbnQvcmVxdWVzdHBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlbmRvci1oZWFke1xuICAgZm9udC1zaXplOjE2cHg7XG4gICBmb250LXdlaWdodDo2MDA7XG4gICBwYWRkaW5nLWlubGluZTowcHg7XG59XG50YWJsZSB7XG4gICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gdGgge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMnB4IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgIGNvbG9yOiAjMDUyNzRkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6MTVweDtcbiAgfVxuICB0ZHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogNnB4IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjk7XG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiAgICBmb250LXNpemU6MTNweDtcbiAgfVxuXG4gIC5lZGl0YnRuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cbiAgLmRlbGV0ZWJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDJweDtcbiAgfVxuIC5wcm9kdWN0bGlzdCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiA4cHggMTdweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuIH1cbiAuYWRkdmFyaWFudCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuIH1cblxuIC5hZGR2YXJpYW50Ym94IHtcbiAgICAgaDMge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICB9XG4gICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjNmM2O1xuICAgICAgICBtYXJnaW46IDExcHggMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICB9XG4gICAgIGlvbi1kYXRldGltZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gICAgICAgIG1hcmdpbjogMTFweCAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIH1cbiAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNDdhMjA7XG4gICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgIH1cbiB9IiwiLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2NjY2M7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjb2xvcjogIzA1Mjc0ZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbnRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNnB4IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZWRpdGJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uZGVsZXRlYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ucHJvZHVjdGxpc3Qge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogOHB4IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hZGR2YXJpYW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWRkdmFyaWFudGJveCBoMyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYWRkdmFyaWFudGJveCBpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhYzZjNjtcbiAgbWFyZ2luOiAxMXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGR2YXJpYW50Ym94IGlvbi1kYXRldGltZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gIG1hcmdpbjogMTFweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWRkdmFyaWFudGJveCBidXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2Y0N2EyMDtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/requestpayment/requestpayment.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/requestpayment/requestpayment.page.ts ***!
  \*******************************************************/
/*! exports provided: RequestpaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestpaymentPage", function() { return RequestpaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_globalevents_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/globalevents.service */ "./src/app/services/globalevents.service.ts");









let RequestpaymentPage = class RequestpaymentPage {
    constructor(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api, Settings) {
        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.Settings = Settings;
        this.vendor_id = localStorage.getItem('fash_user_id');
    }
    ionViewWillEnter() {
        this.getpackageReport();
        this.getRequestAmount();
        this.vendorRequests();
    }
    doRefresh(event) {
        console.log('Refreshing Start');
        this.ngOnInit();
        this.ionViewWillEnter();
        setTimeout(() => {
            console.log('Refreshing Ended');
            event.target.complete();
        }, 2000);
    }
    getpackageReport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let catObj = { action: "vendor_package", vendor_id: this.shopId };
            this.api.getPackageReport((response) => {
                if (response.status == true) {
                    this.pack_type = response.status;
                }
                else {
                    this.router.navigate(['plans']);
                }
            }, catObj);
        });
    }
    getRequestAmount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let salesObj = { action: "getVendorDiscount", vendor_id: this.vendor_id };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchRequestAmount((response) => {
                loading.dismiss();
                this.total_payment = response.total_payment;
                this.requested_amount = response.requested_amount;
            }, salesObj);
        });
    }
    vendorRequests() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let salesObj = { action: "getVendorRequests", vendor_id: this.vendor_id };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchVendorRequests((response) => {
                loading.dismiss();
                this.request_list = response.request_list;
            }, salesObj);
        });
    }
    requestPay(total_payment) {
        if (total_payment > 0) {
            this.router.navigate(['addrequestpayment', { vendor_id: this.vendor_id, total_payment: total_payment }]);
        }
        else {
            this.util.presentToast("Please check Your Total Payments", 'danger', 'bottom', 2500);
        }
    }
    deleteRequest(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let salesObj = { action: "deleteRequest", id: id };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.clearRequest((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.util.presentToast(response.message, 'success', 'bottom', 2500);
                    this.vendorRequests();
                }
                else {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, salesObj);
        });
    }
    ngOnInit() {
        this.listenToEvents();
    }
    listenToEvents() {
        this.Settings.getObservable().subscribe((data) => {
            if (data['request_list']) {
                this.request_list = data['request_list'];
            }
            else {
                // nothing           
            }
        });
    }
};
RequestpaymentPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _services_globalevents_service__WEBPACK_IMPORTED_MODULE_8__["GlobalEventsService"] }
];
RequestpaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-requestpayment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./requestpayment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/requestpayment/requestpayment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./requestpayment.page.scss */ "./src/app/requestpayment/requestpayment.page.scss")).default]
    })
], RequestpaymentPage);



/***/ })

}]);
//# sourceMappingURL=requestpayment-requestpayment-module-es2015.js.map