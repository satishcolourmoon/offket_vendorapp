(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupons-coupons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/coupons.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/coupons.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar style=\"--background: #fff;color: #000;\">\n\n\t\t<ion-back-button defaultHref slot=\"start\"></ion-back-button>\n\t\t<ion-title class=\"vendor-head\">Coupons</ion-title>\n\t\t<!-- <button (click)=\"goProducts()\" slot=\"end\" class=\"productlist\">Products</button> -->\n\t\t<button (click)=\"addCoupon(coupon)\" slot=\"end\" class=\"productlist\">Add New Coupons</button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"padding:0px 0px 0px 0px;\">\n\t<ion-row>\n\t\t<!-- <ion-col size=\"12\" style=\"padding:0px;\"> -->\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Coupon</th>\n\t\t\t\t\t<th> Percentage</th>\n\t\t\t\t\t<th>Maximum Amount</th>\n\t\t\t\t\t<th>Start Date</th>\n\t\t\t\t\t<th>End Date</th>\n\t\t\t\t\t<th>Action</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr *ngFor=\"let c of coupons\">\n\t\t\t\t\t<td>{{c.coupon_code}}</td>\n\t\t\t\t\t<td>{{c.percentage}}%</td>\n\t\t\t\t\t<td>{{c.maximum_amount}}</td>\n\t\t\t\t\t<td>{{c.start_date}}</td>\n\t\t\t\t\t<td>{{c.expiry_date}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<button class=\"editbtn\" (click)=\"editCoupon(c)\">\n\t\t\t\t\t\t\t<ion-icon name=\"create-outline\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button class=\"deletebtn\" (click)=\"deleteCoupon(c.id)\">\n\t\t\t\t\t\t\t<ion-icon name=\"trash-outline\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t</table>\n\t\t<!-- </ion-col> -->\n\t</ion-row>\n\n\t</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/coupons/coupons-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/coupons/coupons-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CouponsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPageRoutingModule", function() { return CouponsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupons.page */ "./src/app/coupons/coupons.page.ts");




const routes = [
    {
        path: '',
        component: _coupons_page__WEBPACK_IMPORTED_MODULE_3__["CouponsPage"]
    }
];
let CouponsPageRoutingModule = class CouponsPageRoutingModule {
};
CouponsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CouponsPageRoutingModule);



/***/ }),

/***/ "./src/app/coupons/coupons.module.ts":
/*!*******************************************!*\
  !*** ./src/app/coupons/coupons.module.ts ***!
  \*******************************************/
/*! exports provided: CouponsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPageModule", function() { return CouponsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coupons-routing.module */ "./src/app/coupons/coupons-routing.module.ts");
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupons.page */ "./src/app/coupons/coupons.page.ts");







let CouponsPageModule = class CouponsPageModule {
};
CouponsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__["CouponsPageRoutingModule"]
        ],
        declarations: [_coupons_page__WEBPACK_IMPORTED_MODULE_6__["CouponsPage"]]
    })
], CouponsPageModule);



/***/ }),

/***/ "./src/app/coupons/coupons.page.scss":
/*!*******************************************!*\
  !*** ./src/app/coupons/coupons.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  border-right: 1px solid #d8d8d8;\n  text-align: left;\n  padding: 12px 3px;\n  font-size: 13px;\n  background-color: #efefef;\n  color: #f28736;\n  font-weight: normal;\n  text-align: center;\n}\n\ntd {\n  border-right: 1px solid #cbcbcb;\n  text-align: left;\n  padding: 6px 2px;\n  border-bottom: 3px solid #fff;\n  font-size: 15px;\n  text-align: center;\n  background-color: #fafafa;\n}\n\n.editbtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: green;\n  background: #fafafa;\n  border-radius: 4px;\n  margin: 2px;\n  outline: none;\n}\n\n.deletebtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: red;\n  background: #fafafa;\n  border-radius: 4px;\n  margin: 2px;\n  outline: none;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 10px;\n  background: #05274d;\n  color: #fff;\n  padding: 10px 10px;\n  font-size: 12px;\n  margin: 8px 10px;\n  /* font-weight: 600; */\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cG9ucy9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFxjb3Vwb25zXFxjb3Vwb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291cG9ucy9jb3Vwb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0M7RUFDSyx5QkFBQTtFQUNELFdBQUE7QUNFTDs7QURDRTtFQUNHLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUw7O0FEQUc7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDR0w7O0FEQUc7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDR0w7O0FEREc7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSUw7O0FERkc7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NvdXBvbnMvY291cG9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVuZG9yLWhlYWR7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIHBhZGRpbmctaW5saW5lOjBweDtcbiB9XG4gdGFibGUge1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG4gICBcbiAgdGgge1xuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICBwYWRkaW5nOiAxMnB4IDNweDtcbiAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgIGNvbG9yOiAjZjI4NzM2O1xuICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH1cbiAgIHRke1xuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2JjYmNiO1xuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICBwYWRkaW5nOiA2cHggMnB4O1xuICAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCAjZmZmO1xuICAgICBmb250LXNpemU6MTVweDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gICAgIGJhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtcbiAgIH1cbiBcbiAgIC5lZGl0YnRuIHtcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICBjb2xvcjogZ3JlZW47XG4gICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgbWFyZ2luOiAycHg7XG4gICAgIG91dGxpbmU6bm9uZTtcbiAgIH1cbiAgIC5kZWxldGVidG4ge1xuICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgIGNvbG9yOiByZWQ7XG4gICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgbWFyZ2luOiAycHg7XG4gICAgIG91dGxpbmU6bm9uZTtcbiAgIH1cbiAgIC5wcm9kdWN0bGlzdCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwNTI3NGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDhweCAxMHB4O1xuICAgIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXG4gICAgb3V0bGluZTogbm9uZTtcbiB9IiwiLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGNvbG9yOiAjZjI4NzM2O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NiY2JjYjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNnB4IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4uZWRpdGJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGdyZWVuO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGVsZXRlYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucHJvZHVjdGxpc3Qge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogOHB4IDEwcHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/coupons/coupons.page.ts":
/*!*****************************************!*\
  !*** ./src/app/coupons/coupons.page.ts ***!
  \*****************************************/
/*! exports provided: CouponsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPage", function() { return CouponsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let CouponsPage = class CouponsPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl, alertController) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getpackageReport();
        this.getcoupons();
    }
    getpackageReport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let catObj = { action: "vendor_package_for_count", vendor_id: this.shopId };
            this.api.getPackageReport((response) => {
                this.coupon = response.coupons;
            }, catObj);
        });
    }
    getcoupons() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let catObj = { action: "couponcodes", vendor_id: this.shopId };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchCouponCodes((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.coupons = response.coupons;
                    this.nval = true;
                }
                else {
                    this.nval = false;
                    this.coupons = [];
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, catObj);
        });
    }
    addCoupon(coupon) {
        if (coupon == true) {
            this.router.navigate(['create-coupons', { id: 'add' }]);
        }
        else {
            this.util.presentToast("Your Package Limit Exceeded ", 'danger', 'bottom', 2500);
            //this.router.navigate(['plans']);
        }
    }
    editCoupon(c) {
        this.router.navigate(['create-coupons', { id: c.id, coupon_code: c.coupon_code, percentage: c.percentage, maximum_amount: c.maximum_amount, start_date: c.start_date, expiry_date: c.expiry_date, description: c.description, utilization: c.utilization, minimum_order_amount: c.minimum_order_amount }]);
    }
    deleteCoupon(cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want to delete this coupon',
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
                            let delvarObj = { action: "delete_coupon", cid: cid };
                            this.api.deleteCoupon((response) => {
                                //loading.dismiss();
                                if (response.status == true) {
                                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                                    this.ionViewWillEnter();
                                }
                                else {
                                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                                }
                            }, delvarObj);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CouponsPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CouponsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coupons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/coupons.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coupons.page.scss */ "./src/app/coupons/coupons.page.scss")).default]
    })
], CouponsPage);



/***/ })

}]);
//# sourceMappingURL=coupons-coupons-module-es2015.js.map