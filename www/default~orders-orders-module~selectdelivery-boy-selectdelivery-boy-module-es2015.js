(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~orders-orders-module~selectdelivery-boy-selectdelivery-boy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/selectdelivery-boy/selectdelivery-boy.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectdelivery-boy/selectdelivery-boy.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar style=\"--background: #f47a20;color: #fff;\">\n    <ion-title>Update Price</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"addvariantbox\">\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Price</ion-label>\n          <ion-input type=\"text\" id=\"price\" [(ngModel)]=\"price\" name=\"price\" clear-input placeholder=\"*price\">\n          </ion-input>\n\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Sale Price</ion-label>\n          <ion-input type=\"text\" id=\"saleprice\" [(ngModel)]=\"saleprice\" name=\"saleprice\" clear-input\n            placeholder=\"*Sale Price\"></ion-input>\n\n\n          <ion-label style=\"font-size: 14px;font-weight: 600;margin-bottom: 10px;\">Stock</ion-label>\n          <ion-input type=\"text\" id=\"stock\" [(ngModel)]=\"stock\" name=\"stock\" clear-input placeholder=\"*Stock\">\n          </ion-input>\n          <div style=\"text-align: center;\"> <button small (click)=\"updatePrice()\">Update Price</button>\n            <button small (click)=\"dismiss()\">Close</button>\n\n          </div>\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-content> -->\n\n<ion-content style=\"--background: transparent\">\n  <div class=\"modalbox1\">\n    <ion-grid style=\"padding: 0;\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"acceptmodal\">\n          <h4>OTP Verifcation From \n          </h4>\n        </ion-col>\n        <ion-col size=\"12\" style=\"padding: 10px 15px;\">\n\n            <ion-list>\n              <ion-input type=\"text\" placeholder=\"Enter OTP\" [(ngModel)]=\"otp\" id=\"otp\" name=\"otp\"  clearInput ></ion-input>\n            </ion-list>\n\n      \n          <div style=\"text-align: center;margin-top: 4%;\"> <button small (click)=\"verifyOTP()\">Verify</button>\n            <button small (click)=\"dismiss()\">Close</button>\n\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n\n<style>\n  button {\n    color: #fff;\n    margin: 5px;\n    background: #081f65;\n    padding:10px;\n    border-radius: 15px;\n    outline:none;\n  }\n</style>");

/***/ }),

/***/ "./src/app/selectdelivery-boy/selectdelivery-boy.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/selectdelivery-boy/selectdelivery-boy.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addvariantbox ion-label {\n  margin-left: 20px;\n  font-size: 15px;\n  font-weight: 600;\n}\n.addvariantbox ion-input {\n  width: 90%;\n  border: 1px solid #cac6c6;\n  margin: 5px 15px;\n  border-radius: 20px;\n  outline: none;\n}\n.addvariantbox button {\n  margin: 5px;\n  color: #fff;\n  background: #f47a20;\n  padding: 10px 10px;\n  border-radius: 4px;\n}\nh3 {\n  margin-left: 20px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.acceptmodal {\n  border-radius: 30px 30px 3px 2px;\n  padding: 3px;\n  background: #081f65;\n}\n.acceptmodal h4 {\n  color: #fff;\n  text-align: center;\n  font-size: 15px;\n  line-height: 24px;\n}\n.inputbox {\n  border: 1px solid #e8e7e7;\n  /* --background: #e8e7e7; */\n  border-radius: 20px;\n  margin-top: 10px;\n  font-size: 14px;\n  padding: 3px 10px !important;\n  outline: none;\n}\n.inputselect {\n  border: 1px solid #e8e7e7;\n  background: #e8e7e7;\n  border-radius: 20px;\n  margin-top: 3px;\n  outline: none;\n}\n.ion-model {\n  --background:#f47a20;\n}\n.quickmodelinput {\n  color: #fff;\n  --background: none;\n  border-bottom: 1px solid #fff;\n}\n.modalbox1 {\n  margin: 33% 7%;\n  background: #fff;\n  border-radius: 30px;\n  padding: 0px;\n}\n.modelboxinput {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0ZGVsaXZlcnktYm95L0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXHNlbGVjdGRlbGl2ZXJ5LWJveVxcc2VsZWN0ZGVsaXZlcnktYm95LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VsZWN0ZGVsaXZlcnktYm95L3NlbGVjdGRlbGl2ZXJ5LWJveS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNKLGVBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER1E7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0RaO0FES0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hSO0FETUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUE7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRElJO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDRE47QURJSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRE47QURJSTtFQUNJLG9CQUFBO0FDRFI7QURJUTtFQUNFLFdBQUE7RUFDRCxrQkFBQTtFQUNBLDZCQUFBO0FDRFQ7QURHUTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER1E7RUFDQSxXQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3RkZWxpdmVyeS1ib3kvc2VsZWN0ZGVsaXZlcnktYm95LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGR2YXJpYW50Ym94IHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICBcbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjNmM2O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICAgICB9XG4gICAgXG4gICBcbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNDdhMjA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbn1cbmgzIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFjY2VwdG1vZGFsIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggM3B4IDJweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYmFja2dyb3VuZDojMDgxZjY1O1xuICB9XG4gIC5hY2NlcHRtb2RhbCBoNCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuICAgIC5pbnB1dGJveCB7ICBcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU3ZTc7XG4gICAgICAvKiAtLWJhY2tncm91bmQ6ICNlOGU3ZTc7ICovXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgcGFkZGluZzogM3B4IDEwcHggIWltcG9ydGFudDtcbiAgICAgIG91dGxpbmU6bm9uZTtcbiAgICB9XG4gIFxuICAgIC5pbnB1dHNlbGVjdCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlN2U3O1xuICAgICAgYmFja2dyb3VuZDogI2U4ZTdlNztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICBvdXRsaW5lOm5vbmU7XG4gICAgfVxuICBcbiAgICAuaW9uLW1vZGVsIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNmNDdhMjA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5xdWlja21vZGVsaW5wdXQge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGFsYm94MSB7ICBcbiAgICAgICAgbWFyZ2luOiAzMyUgNyU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1vZGVsYm94aW5wdXQge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAiLCIuYWRkdmFyaWFudGJveCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFkZHZhcmlhbnRib3ggaW9uLWlucHV0IHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhYzZjNjtcbiAgbWFyZ2luOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hZGR2YXJpYW50Ym94IGJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2Y0N2EyMDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmgzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFjY2VwdG1vZGFsIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDNweCAycHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgYmFja2dyb3VuZDogIzA4MWY2NTtcbn1cblxuLmFjY2VwdG1vZGFsIGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmlucHV0Ym94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZTdlNztcbiAgLyogLS1iYWNrZ3JvdW5kOiAjZThlN2U3OyAqL1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dHNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU3ZTc7XG4gIGJhY2tncm91bmQ6ICNlOGU3ZTc7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlvbi1tb2RlbCB7XG4gIC0tYmFja2dyb3VuZDojZjQ3YTIwO1xufVxuXG4ucXVpY2ttb2RlbGlucHV0IHtcbiAgY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5tb2RhbGJveDEge1xuICBtYXJnaW46IDMzJSA3JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubW9kZWxib3hpbnB1dCB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/selectdelivery-boy/selectdelivery-boy.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/selectdelivery-boy/selectdelivery-boy.page.ts ***!
  \***************************************************************/
/*! exports provided: SelectdeliveryBoyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectdeliveryBoyPage", function() { return SelectdeliveryBoyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let SelectdeliveryBoyPage = class SelectdeliveryBoyPage {
    constructor(util, actRoute, router, api, popoverController, modalController, navParams, loadingCtrl) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.vendor_id = navParams.get('vendor_id');
        this.orderid = navParams.get('orderid');
    }
    ngOnInit() {
        let otpObj = { action: "generateOTP", vendor_id: this.vendor_id, orderid: this.orderid };
        this.api.generateUserOTP((response) => {
        }, otpObj);
    }
    verifyOTP() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.otp = $("#otp").val();
            if (this.otp == undefined || this.otp == '') {
                this.util.presentToast("Enter OTP", 'danger', 'top', 2500);
            }
            else {
                let assignDelivery = { action: "confirm_delivery", otp: this.otp, vendor_id: this.vendor_id, orderid: this.orderid };
                let loading = yield this.loadingCtrl.create({
                    spinner: 'circles',
                    message: 'Please wait',
                });
                loading.present();
                this.api.confirmDelivery((response) => {
                    loading.dismiss();
                    if (response.status == true) {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                        this.modalController.dismiss();
                    }
                    else {
                        this.util.presentToast(response.message, 'danger', 'top', 2500);
                    }
                }, assignDelivery);
            }
        });
    }
    dismiss() {
        this.modalController.dismiss();
    }
};
SelectdeliveryBoyPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
SelectdeliveryBoyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectdelivery-boy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./selectdelivery-boy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/selectdelivery-boy/selectdelivery-boy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./selectdelivery-boy.page.scss */ "./src/app/selectdelivery-boy/selectdelivery-boy.page.scss")).default]
    })
], SelectdeliveryBoyPage);



/***/ })

}]);
//# sourceMappingURL=default~orders-orders-module~selectdelivery-boy-selectdelivery-boy-module-es2015.js.map