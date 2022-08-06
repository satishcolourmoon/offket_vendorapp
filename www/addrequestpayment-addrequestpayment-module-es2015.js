(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addrequestpayment-addrequestpayment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addrequestpayment/addrequestpayment.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addrequestpayment/addrequestpayment.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar style=\"--background: #8f8f8f;color: #fff;\">\n\t\t<ion-back-button defaultHref slot=\"start\"></ion-back-button>\n\t</ion-toolbar>\n</ion-header>\n<ion-content style=\"--background: #00000070\">\n  <div class=\"modalbox1\">\n\n      <p class=\"reviewrate\">Exchange</p>\n      <!-- <div style=\"text-align: center;\">\n      \t<ion-label class=\"reviewtitle\">Select Refund or Exchange</ion-label>\n      \t <ion-select [(ngModel)]=\"refund_exchange\" name=\"refund_exchange\" (ionChange)=\"getStatus()\">\n      \t \t <ion-select-option value=\"1\">Exchange</ion-select-option>\n      \t \t   <ion-select-option value=\"2\">Refund</ion-select-option>\n      \t \t\n      \t </ion-select>\n      </div> -->\n\n      <div style=\"text-align: center;\">\n        <ion-label class=\"reviewtitle\">Your Total Amount</ion-label>\n         <ion-input type=\"text\" [(ngModel)]=\"total_payment\" name=\"total_payment\" readonly style=\"border: 1px solid #ccc; margin: 2px; border-radius: 10px;\"></ion-input>\n      </div>\n      <div style=\"text-align: center;\">\n        <ion-label class=\"reviewtitle\">Requested Amount</ion-label>\n         <ion-input type=\"number\" [(ngModel)]=\"requested_amount\" name=\"requested_amount\" style=\"border: 1px solid #ccc; margin: 2px; border-radius: 10px;\"></ion-input>\n      </div>\n\n\n      <div >\n        <ion-label class=\"reviewtitle\">Description</ion-label>\n        <ion-textarea placeholder=\"Please Type Here ...\" [(ngModel)]=\"reason\" name=\"reason\" class=\"descriptionbox\" style=\"margin-bottom: 20px;\">\n        </ion-textarea>\n        <ion-button color=\"success\" type=\"submit\" (click)=\"requestPayment()\"> Request Payment </ion-button>\n      </div>\n\n\n  </div>\n\n</ion-content>\n\n<style>\n  .inactive_star {\n    text-align: center;\n    font-size: 27px;\n    margin: 2px;\n  }\n\n  .active_star {\n    font-size: 27px;\n    text-align: center;\n    color: #dcdc08;\n    margin: 2px;\n  }\n</style>");

/***/ }),

/***/ "./src/app/addrequestpayment/addrequestpayment-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/addrequestpayment/addrequestpayment-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddrequestpaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrequestpaymentPageRoutingModule", function() { return AddrequestpaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addrequestpayment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addrequestpayment.page */ "./src/app/addrequestpayment/addrequestpayment.page.ts");




const routes = [
    {
        path: '',
        component: _addrequestpayment_page__WEBPACK_IMPORTED_MODULE_3__["AddrequestpaymentPage"]
    }
];
let AddrequestpaymentPageRoutingModule = class AddrequestpaymentPageRoutingModule {
};
AddrequestpaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddrequestpaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/addrequestpayment/addrequestpayment.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/addrequestpayment/addrequestpayment.module.ts ***!
  \***************************************************************/
/*! exports provided: AddrequestpaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrequestpaymentPageModule", function() { return AddrequestpaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addrequestpayment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addrequestpayment-routing.module */ "./src/app/addrequestpayment/addrequestpayment-routing.module.ts");
/* harmony import */ var _addrequestpayment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addrequestpayment.page */ "./src/app/addrequestpayment/addrequestpayment.page.ts");







let AddrequestpaymentPageModule = class AddrequestpaymentPageModule {
};
AddrequestpaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addrequestpayment_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddrequestpaymentPageRoutingModule"]
        ],
        declarations: [_addrequestpayment_page__WEBPACK_IMPORTED_MODULE_6__["AddrequestpaymentPage"]]
    })
], AddrequestpaymentPageModule);



/***/ }),

/***/ "./src/app/addrequestpayment/addrequestpayment.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/addrequestpayment/addrequestpayment.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reviewimg {\n  background-repeat: no-repeat;\n  border-radius: 50%;\n  width: 90px;\n  margin: auto;\n  display: block;\n  background: grey;\n  background-size: cover;\n  height: 90px;\n}\n\n.reviewname {\n  text-align: center;\n  margin: 6px;\n}\n\n.reviewrate {\n  font-size: 12px;\n  text-align: center;\n  color: green;\n}\n\n.reviewstar {\n  font-size: 27px;\n  text-align: center;\n  color: #dcdc08;\n  margin: -5px;\n}\n\n.descriptionbox {\n  height: 90px;\n  border-radius: 8px;\n  margin: auto;\n  width: 95%;\n  border: 1px solid #000;\n}\n\n.reviewtitle {\n  font-size: 14px;\n  margin-left: 11px;\n  margin-bottom: 5px;\n  font-weight: 600;\n}\n\n.ion-model {\n  --background: #000000a8;\n}\n\n.quickmodelinput {\n  color: #fff;\n  --background: none;\n  border-bottom: 1px solid #fff;\n}\n\n.modalbox1 {\n  margin: 33% 7%;\n  background: #fff;\n  border-radius: 30px;\n  padding: 30px 12px;\n}\n\n.modelboxinput {\n  color: #fff;\n}\n\n.sc-ion-modal-md-h {\n  --background: transparent;\n}\n\n.modelclose {\n  font-size: 22px;\n  float: right;\n  margin-top: -23px;\n}\n\n.inactive_star {\n  text-align: center;\n  font-size: 27px;\n  margin: -5px;\n}\n\n.active_star {\n  font-size: 27px;\n  text-align: center;\n  color: #dcdc08;\n  margin: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVxdWVzdHBheW1lbnQvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcYWRkcmVxdWVzdHBheW1lbnRcXGFkZHJlcXVlc3RwYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkcmVxdWVzdHBheW1lbnQvYWRkcmVxdWVzdHBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FERkE7RUFDSSx1QkFBQTtBQ0tKOztBREZDO0VBQ0ssV0FBQTtFQUNELGtCQUFBO0VBQ0EsNkJBQUE7QUNLTDs7QURIQztFQUNHLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURIQztFQUNHLFdBQUE7QUNNSjs7QURIQztFQUNFLHlCQUFBO0FDTUg7O0FESEM7RUFDRyxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDTUo7O0FESEU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvYWRkcmVxdWVzdHBheW1lbnQvYWRkcmVxdWVzdHBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlld2ltZyB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDkwcHg7XG59XG4ucmV2aWV3bmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNnB4O1xufVxuLnJldmlld3JhdGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLnJldmlld3N0YXIge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNkY2RjMDg7XG4gICAgbWFyZ2luOiAtNXB4O1xufVxuLmRlc2NyaXB0aW9uYm94IHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG4ucmV2aWV3dGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG4uaW9uLW1vZGVsIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDBhODtcbiAgfVxuIFxuIC5xdWlja21vZGVsaW5wdXQge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gfVxuIC5tb2RhbGJveDEgeyAgXG4gICAgbWFyZ2luOiAzMyUgNyU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMTJweDtcbn1cbiBcbiAubW9kZWxib3hpbnB1dCB7XG4gICAgY29sb3I6ICNmZmY7XG4gfVxuIFxuIC5zYy1pb24tbW9kYWwtbWQtaCB7XG4gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuIH1cbiBcbiAubW9kZWxjbG9zZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcbn1cblxuLmluYWN0aXZlX3N0YXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgbWFyZ2luOiAtNXB4O1xuICB9XG5cbiAgLmFjdGl2ZV9zdGFyIHtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZGNkYzA4O1xuICAgIG1hcmdpbjogLTVweDtcbiAgfVxuIiwiLnJldmlld2ltZyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDkwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogOTBweDtcbn1cblxuLnJldmlld25hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNnB4O1xufVxuXG4ucmV2aWV3cmF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5yZXZpZXdzdGFyIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGNkYzA4O1xuICBtYXJnaW46IC01cHg7XG59XG5cbi5kZXNjcmlwdGlvbmJveCB7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5NSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5yZXZpZXd0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmlvbi1tb2RlbCB7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMGE4O1xufVxuXG4ucXVpY2ttb2RlbGlucHV0IHtcbiAgY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5tb2RhbGJveDEge1xuICBtYXJnaW46IDMzJSA3JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMzBweCAxMnB4O1xufVxuXG4ubW9kZWxib3hpbnB1dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2MtaW9uLW1vZGFsLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubW9kZWxjbG9zZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMjNweDtcbn1cblxuLmluYWN0aXZlX3N0YXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgbWFyZ2luOiAtNXB4O1xufVxuXG4uYWN0aXZlX3N0YXIge1xuICBmb250LXNpemU6IDI3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNkY2RjMDg7XG4gIG1hcmdpbjogLTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/addrequestpayment/addrequestpayment.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/addrequestpayment/addrequestpayment.page.ts ***!
  \*************************************************************/
/*! exports provided: AddrequestpaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrequestpaymentPage", function() { return AddrequestpaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_globalevents_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/globalevents.service */ "./src/app/services/globalevents.service.ts");








//import { GlobaleventsService } from 'src/app/services/globalevents.service';

let AddrequestpaymentPage = class AddrequestpaymentPage {
    constructor(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api, globalEvents) {
        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.globalEvents = globalEvents;
        this.vendor_id = this.actRoute.snapshot.paramMap.get('vendor_id');
        this.total_payment = this.actRoute.snapshot.paramMap.get('total_payment');
    }
    requestPayment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.requested_amount == '' || this.requested_amount == undefined) {
                this.util.presentToast("Enter Rquested Amount", 'danger', 'bottom', 2500);
            }
            else if (this.reason == '' || this.reason == undefined) {
                this.util.presentToast("Enter Description", 'danger', 'bottom', 2500);
            }
            else {
                let reqObj = { action: "requestvendorPayments", vendor_id: this.vendor_id, requested_amount: this.requested_amount, description: this.reason, total_payment: this.total_payment };
                let loading = yield this.loadingCtrl.create({
                    spinner: 'circles',
                    message: 'Please wait',
                });
                loading.present();
                this.api.doVendorPayments((response) => {
                    loading.dismiss();
                    if (response.status == true) {
                        this.util.presentToast("Request sent Successfully", 'danger', 'bottom', 2500);
                        let salesObj = { action: "getVendorRequests", vendor_id: this.vendor_id };
                        this.api.fetchVendorRequests((response) => {
                            //this.request_list = response.request_list;
                            this.globalEvents.publishEventData({
                                request_list: response.request_list
                            });
                        }, salesObj);
                        this.router.navigate(['requestpayment']);
                    }
                    else {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, reqObj);
            }
        });
    }
    ngOnInit() {
    }
};
AddrequestpaymentPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _services_globalevents_service__WEBPACK_IMPORTED_MODULE_8__["GlobalEventsService"] }
];
AddrequestpaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addrequestpayment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addrequestpayment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addrequestpayment/addrequestpayment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addrequestpayment.page.scss */ "./src/app/addrequestpayment/addrequestpayment.page.scss")).default]
    })
], AddrequestpaymentPage);



/***/ })

}]);
//# sourceMappingURL=addrequestpayment-addrequestpayment-module-es2015.js.map