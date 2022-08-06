(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-coupons-create-coupons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-coupons/create-coupons.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-coupons/create-coupons.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class='vendor-head'>Add New Coupons</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"addproductContainer\">\n      <ion-input name=\"coupon_code\" [(ngModel)]=\"coupon_code\" placeholder=\"Enter Coupon Code\" ></ion-input>\n      <ion-input name=\"percentage\" [(ngModel)]=\"percentage\" placeholder=\"Percentage\" ></ion-input>\n      <ion-input name=\"maximum_amount\" [(ngModel)]=\"maximum_amount\" placeholder=\"Maximum Amount\" ></ion-input>\n      <section>\n        <ion-datetime placeholder=\"Start Date\" [(ngModel)]=\"start_date\" [min]=\"date\" max=\"2030-12-30\" style=\"padding: 12px 15px !important;\"></ion-datetime>\n        <ion-icon style=\"float:right;margin-top:-47px;margin-right:20px;\" name=\"calendar-outline\"></ion-icon>\n      </section>\n      \n      <section>\n        <ion-datetime placeholder=\"End Date\" [(ngModel)]=\"end_date\" [min]=\"date\" max=\"2030-12-30\" style=\"padding: 12px 15px !important;\"></ion-datetime>\n        <ion-icon style=\"float:right;margin-top:-47px;margin-right:20px;\" name=\"calendar-outline\"></ion-icon>\n      </section>\n\n      <ion-input name=\"utilization\" [(ngModel)]=\"utilization\" placeholder=\"Utilization Coupon Count\" ></ion-input>\n\n      <ion-input name=\"minimum_order_amount\" [(ngModel)]=\"minimum_order_amount\" placeholder=\"Minimum Order Amount\" ></ion-input>\n      <ion-textarea rows=\"6\" cols=\"20\" name=\"description\" [(ngModel)]=\"description\" placeholder=\" Description\" ></ion-textarea>\n      <ion-button (click)=\"addCoupon()\" *ngIf=\"id=='add'\">Add Coupons</ion-button>\n      <ion-button (click)=\"updateCoupon()\" *ngIf=\"id!='add'\">Update Coupons</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/create-coupons/create-coupons-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/create-coupons/create-coupons-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CreateCouponsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCouponsPageRoutingModule", function() { return CreateCouponsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_coupons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-coupons.page */ "./src/app/create-coupons/create-coupons.page.ts");




const routes = [
    {
        path: '',
        component: _create_coupons_page__WEBPACK_IMPORTED_MODULE_3__["CreateCouponsPage"]
    }
];
let CreateCouponsPageRoutingModule = class CreateCouponsPageRoutingModule {
};
CreateCouponsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateCouponsPageRoutingModule);



/***/ }),

/***/ "./src/app/create-coupons/create-coupons.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-coupons/create-coupons.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateCouponsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCouponsPageModule", function() { return CreateCouponsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-coupons-routing.module */ "./src/app/create-coupons/create-coupons-routing.module.ts");
/* harmony import */ var _create_coupons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-coupons.page */ "./src/app/create-coupons/create-coupons.page.ts");







let CreateCouponsPageModule = class CreateCouponsPageModule {
};
CreateCouponsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateCouponsPageRoutingModule"]
        ],
        declarations: [_create_coupons_page__WEBPACK_IMPORTED_MODULE_6__["CreateCouponsPage"]]
    })
], CreateCouponsPageModule);



/***/ }),

/***/ "./src/app/create-coupons/create-coupons.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/create-coupons/create-coupons.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.addproductContainer {\n  padding: 15px 25px;\n}\n\n.addproductContainer ion-input, .addproductContainer ion-select, .addproductContainer ion-textarea, .addproductContainer ion-datetime {\n  margin-bottom: 15px;\n  border: 1px solid #bebdbcd4;\n  border-radius: 20px;\n  padding: 3px 15px !important;\n  background: #fbfafa45;\n  font-size: 13px;\n  outline: none;\n}\n\n.addproductContainer ion-button {\n  --background: #081f65;\n  width: 55%;\n  margin: 10px auto;\n  height: 45px;\n  text-transform: none;\n  display: block;\n  --border-radius:20px;\n  outline: none;\n}\n\n.addproductContainer .images {\n  background-color: #ccc;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWNvdXBvbnMvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcY3JlYXRlLWNvdXBvbnNcXGNyZWF0ZS1jb3Vwb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3JlYXRlLWNvdXBvbnMvY3JlYXRlLWNvdXBvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDUjs7QURDSTtFQUNRLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ0NaOztBRENJO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1jb3Vwb25zL2NyZWF0ZS1jb3Vwb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW5kb3ItaGVhZHtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgcGFkZGluZy1pbmxpbmU6MHB4O1xufVxuXG4uYWRkcHJvZHVjdENvbnRhaW5lcntcbiAgICBwYWRkaW5nOjE1cHggMjVweDtcblxuICAgIGlvbi1pbnB1dCwgIGlvbi1zZWxlY3QsIGlvbi10ZXh0YXJlYSxpb24tZGF0ZXRpbWV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWJkYmNkNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogM3B4IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZiZmFmYTQ1O1xuICAgICAgICBmb250LXNpemU6MTNweDtcbiAgICAgICAgb3V0bGluZTpub25lO1xuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDgxZjY1O1xuICAgICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTpub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6MjBweDtcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICB9XG4gICAgLmltYWdlc3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxufSIsIi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cblxuLmFkZHByb2R1Y3RDb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG59XG4uYWRkcHJvZHVjdENvbnRhaW5lciBpb24taW5wdXQsIC5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi1zZWxlY3QsIC5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi10ZXh0YXJlYSwgLmFkZHByb2R1Y3RDb250YWluZXIgaW9uLWRhdGV0aW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JlYmRiY2Q0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHggMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmJmYWZhNDU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwODFmNjU7XG4gIHdpZHRoOiA1NSU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1ib3JkZXItcmFkaXVzOjIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYWRkcHJvZHVjdENvbnRhaW5lciAuaW1hZ2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/create-coupons/create-coupons.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-coupons/create-coupons.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateCouponsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCouponsPage", function() { return CreateCouponsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let CreateCouponsPage = class CreateCouponsPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.date = new Date().toISOString();
    }
    ngOnInit() {
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.coupon_code = this.actRoute.snapshot.paramMap.get('coupon_code');
        this.percentage = this.actRoute.snapshot.paramMap.get('percentage');
        this.maximum_amount = this.actRoute.snapshot.paramMap.get('maximum_amount');
        this.start_date = this.actRoute.snapshot.paramMap.get('start_date');
        this.end_date = this.actRoute.snapshot.paramMap.get('expiry_date');
        this.description = this.actRoute.snapshot.paramMap.get('description');
        this.utilization = this.actRoute.snapshot.paramMap.get('utilization');
        this.minimum_order_amount = this.actRoute.snapshot.paramMap.get('minimum_order_amount');
    }
    addCoupon() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            if (this.coupon_code == '' || this.coupon_code == undefined) {
                this.util.presentToast("Enter Coupon", 'danger', 'top', 2500);
            }
            else if (this.percentage == '' || this.percentage == undefined) {
                this.util.presentToast("Enter Percentage", 'danger', 'top', 2500);
            }
            else if (this.maximum_amount == '' || this.maximum_amount == undefined) {
                this.util.presentToast("Enter Maximum amount", 'danger', 'top', 2500);
            }
            else if (this.start_date == '' || this.start_date == undefined) {
                this.util.presentToast("Select Start Date", 'danger', 'top', 2500);
            }
            else if (this.end_date == '' || this.end_date == undefined) {
                this.util.presentToast("Select End Date", 'danger', 'top', 2500);
            }
            else if (this.description == '' || this.description == undefined) {
                this.util.presentToast("Enter Description", 'danger', 'top', 2500);
            }
            else if (this.utilization == '' || this.utilization == undefined) {
                this.util.presentToast("Enter Utilization Count", 'danger', 'top', 2500);
            }
            else if (this.minimum_order_amount == '' || this.minimum_order_amount == undefined) {
                this.util.presentToast("Enter Minimum Order Amount", 'danger', 'top', 2500);
            }
            else {
                let catObj = { action: "addcouponcodes", vendor_id: this.shopId, coupon_code: this.coupon_code, percentage: this.percentage, maximum_amount: this.maximum_amount, start_date: this.start_date, end_date: this.end_date, description: this.description, minimum_order_amount: this.minimum_order_amount, utilization: this.utilization };
                let loading = yield this.loadingCtrl.create({
                    spinner: 'circles',
                    message: 'Please wait',
                });
                loading.present();
                this.api.addCouponCodes((response) => {
                    loading.dismiss();
                    if (response.status == true) {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                        this.router.navigate(['coupons']);
                    }
                    else {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, catObj);
            }
        });
    }
    updateCoupon() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            if (this.coupon_code == '' || this.coupon_code == undefined) {
                this.util.presentToast("Enter Coupon", 'danger', 'top', 2500);
            }
            else if (this.percentage == '' || this.percentage == undefined) {
                this.util.presentToast("Enter Percentage", 'danger', 'top', 2500);
            }
            else if (this.maximum_amount == '' || this.maximum_amount == undefined) {
                this.util.presentToast("Enter Maximum amount", 'danger', 'top', 2500);
            }
            else if (this.start_date == '' || this.start_date == undefined) {
                this.util.presentToast("Select Start Date", 'danger', 'top', 2500);
            }
            else if (this.end_date == '' || this.end_date == undefined) {
                this.util.presentToast("Select End Date", 'danger', 'top', 2500);
            }
            else if (this.description == '' || this.description == undefined) {
                this.util.presentToast("Enter Description", 'danger', 'top', 2500);
            }
            else if (this.utilization == '' || this.utilization == undefined) {
                this.util.presentToast("Enter Utilization Count", 'danger', 'top', 2500);
            }
            else if (this.minimum_order_amount == '' || this.minimum_order_amount == undefined) {
                this.util.presentToast("Enter Minimum Order Amount", 'danger', 'top', 2500);
            }
            else {
                let catObj = { action: "updatecouponcodes", vendor_id: this.shopId, coupon_code: this.coupon_code, percentage: this.percentage, maximum_amount: this.maximum_amount, start_date: this.start_date, end_date: this.end_date, description: this.description, id: this.id, minimum_order_amount: this.minimum_order_amount, utilization: this.utilization };
                let loading = yield this.loadingCtrl.create({
                    spinner: 'circles',
                    message: 'Please wait',
                });
                loading.present();
                this.api.updateCouponCodes((response) => {
                    loading.dismiss();
                    if (response.status == true) {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                        this.router.navigate(['coupons']);
                    }
                    else {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, catObj);
            }
        });
    }
};
CreateCouponsPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
CreateCouponsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-coupons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-coupons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-coupons/create-coupons.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-coupons.page.scss */ "./src/app/create-coupons/create-coupons.page.scss")).default]
    })
], CreateCouponsPage);



/***/ })

}]);
//# sourceMappingURL=create-coupons-create-coupons-module-es2015.js.map