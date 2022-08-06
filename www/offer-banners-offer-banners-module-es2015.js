(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offer-banners-offer-banners-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/offer-banners/offer-banners.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer-banners/offer-banners.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class='vendor-head'>Banners</ion-title>\n    <button slot=\"end\" class=\"productlist\" (click)=\"addBanner(banners_count)\">Add New Banners</button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-row class=\"image-banner\">\n    <div>\n      <ion-icon name=\"trash\" style=\"font-size:18px;color:#f11313;border-radius:50%;background:#fff;padding:5px;margin-top:12px;margin-left:90%;\"></ion-icon>\n      <span><img style=\"margin-top:-38px;\" src=\"../../assets/images/shops/banner.jpg\"></span>\n    </div>\n    \n  </ion-row> -->\n\n  <ion-grid style=\"padding:0px 0px 0px 0px;\">\n  <ion-row *ngIf=\"nval==true\">\n    <ion-col siz=\"12\" style=\"padding:0px;\">\n      <table>\n        <tr>\n          <th>Title</th>\n          <th>Image</th>\n          <th>Action</th>\n        </tr>\n        <tr *ngFor=\"let c of bannerslist\">\n          <td>{{c.title}}</td>\n          <td><img style=\"width: 100px; height: 100px;\" src=\"{{c.image}}\"></td>\n          <td>\n            <button class=\"editbtn\" *ngIf=\"banners_count>0\" (click)=\"editBanner(c.id,c.image,c.title,c.image_file)\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </button>\n            <button class=\"deletebtn\" (click)=\"deleteBanner(c.id)\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </button>\n          </td>\n        </tr>\n        \n      </table>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"nval==false\">\n    <ion-col>\n      <h3 style=\"text-align: center;color: red;\">No Banners</h3>\n    </ion-col>\n  </ion-row>\n\n  </ion-grid>\n\n    \n</ion-content>\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/offer-banners/offer-banners-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/offer-banners/offer-banners-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OfferBannersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBannersPageRoutingModule", function() { return OfferBannersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offer_banners_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offer-banners.page */ "./src/app/offer-banners/offer-banners.page.ts");




const routes = [
    {
        path: '',
        component: _offer_banners_page__WEBPACK_IMPORTED_MODULE_3__["OfferBannersPage"]
    }
];
let OfferBannersPageRoutingModule = class OfferBannersPageRoutingModule {
};
OfferBannersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfferBannersPageRoutingModule);



/***/ }),

/***/ "./src/app/offer-banners/offer-banners.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/offer-banners/offer-banners.module.ts ***!
  \*******************************************************/
/*! exports provided: OfferBannersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBannersPageModule", function() { return OfferBannersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _offer_banners_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer-banners-routing.module */ "./src/app/offer-banners/offer-banners-routing.module.ts");
/* harmony import */ var _offer_banners_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer-banners.page */ "./src/app/offer-banners/offer-banners.page.ts");







let OfferBannersPageModule = class OfferBannersPageModule {
};
OfferBannersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offer_banners_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfferBannersPageRoutingModule"]
        ],
        declarations: [_offer_banners_page__WEBPACK_IMPORTED_MODULE_6__["OfferBannersPage"]]
    })
], OfferBannersPageModule);



/***/ }),

/***/ "./src/app/offer-banners/offer-banners.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/offer-banners/offer-banners.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".productlist {\n  letter-spacing: 1px;\n  border-radius: 10px;\n  background: #05274d;\n  color: #fff;\n  padding: 10px 10px;\n  font-size: 12px;\n  margin: 8px 10px;\n  /* font-weight: 600; */\n  outline: none;\n}\n\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  border-right: 1px solid #d8d8d8;\n  text-align: left;\n  padding: 12px 3px;\n  font-size: 13px;\n  background-color: #efefef;\n  color: #f28736;\n  font-weight: normal;\n  text-align: center;\n}\n\ntd {\n  border-right: 1px solid #cbcbcb;\n  text-align: left;\n  padding: 6px 2px;\n  border-bottom: 3px solid #fff;\n  font-size: 15px;\n  text-align: center;\n  background-color: #fafafa;\n}\n\n.editbtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: green;\n  background: #fff;\n  border-radius: 4px;\n  margin: 2px;\n  outline: none;\n}\n\n.deletebtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: red;\n  background: #fff;\n  border-radius: 4px;\n  margin: 2px;\n  outline: none;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 10px;\n  background: #05274d;\n  color: #fff;\n  padding: 10px 10px;\n  font-size: 12px;\n  margin: 8px 10px;\n  /* font-weight: 600; */\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXItYmFubmVycy9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFxvZmZlci1iYW5uZXJzXFxvZmZlci1iYW5uZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb2ZmZXItYmFubmVycy9vZmZlci1iYW5uZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENDO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0M7RUFDSyx5QkFBQTtFQUNELFdBQUE7QUNFTDs7QURDRTtFQUNHLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUw7O0FEQUc7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDR0w7O0FEQUc7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDR0w7O0FEREc7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSUw7O0FERkc7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL29mZmVyLWJhbm5lcnMvb2ZmZXItYmFubmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdGxpc3Qge1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiA4cHggMTBweDtcbiAgICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xuICAgIG91dGxpbmU6IG5vbmU7XG4gfVxuIC52ZW5kb3ItaGVhZHtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgcGFkZGluZy1pbmxpbmU6MHB4O1xufVxuXG5cbi52ZW5kb3ItaGVhZHtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgcGFkZGluZy1pbmxpbmU6MHB4O1xuIH1cbiB0YWJsZSB7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIFxuICB0aCB7XG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgIHBhZGRpbmc6IDEycHggM3B4O1xuICAgICBmb250LXNpemU6MTNweDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgY29sb3I6ICNmMjg3MzY7XG4gICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgfVxuICAgdGR7XG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYmNiY2I7XG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgIHBhZGRpbmc6IDZweCAycHg7XG4gICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICNmZmY7XG4gICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiAgICAgYmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO1xuICAgfVxuIFxuICAgLmVkaXRidG4ge1xuICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgIGNvbG9yOiBncmVlbjtcbiAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICBtYXJnaW46IDJweDtcbiAgICAgb3V0bGluZTpub25lO1xuICAgfVxuICAgLmRlbGV0ZWJ0biB7XG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgY29sb3I6IHJlZDtcbiAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICBtYXJnaW46IDJweDtcbiAgICAgb3V0bGluZTpub25lO1xuICAgfVxuICAgLnByb2R1Y3RsaXN0IHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzA1Mjc0ZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogOHB4IDEwcHg7XG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cbiAgICBvdXRsaW5lOiBub25lO1xuIH1cblxuIiwiLnByb2R1Y3RsaXN0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzA1Mjc0ZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDhweCAxMHB4O1xuICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMnB4IDNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjb2xvcjogI2YyODczNjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYmNiY2I7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDZweCAycHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmVkaXRidG4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBncmVlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmRlbGV0ZWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnByb2R1Y3RsaXN0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzA1Mjc0ZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDhweCAxMHB4O1xuICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/offer-banners/offer-banners.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/offer-banners/offer-banners.page.ts ***!
  \*****************************************************/
/*! exports provided: OfferBannersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferBannersPage", function() { return OfferBannersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let OfferBannersPage = class OfferBannersPage {
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
        this.getBanners();
        this.getpackageReport();
    }
    getBanners() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let catObj = { action: "shopbanners", vendor_id: this.shopId };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchBanners((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.bannerslist = response.bannerslist;
                    this.nval = true;
                }
                else {
                    this.nval = false;
                    this.bannerslist = [];
                    this.image = response.image;
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, catObj);
        });
    }
    getpackageReport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let catObj = { action: "vendor_package_for_count", vendor_id: this.shopId };
            this.api.getPackageReport((response) => {
                if (response.status == true) {
                    this.banners_count = response.banners;
                }
                else {
                    this.banners_count = response.banners;
                    //this.router.navigate(['plans']);
                }
            }, catObj);
        });
    }
    addBanner(banners_count) {
        if (banners_count == true) {
            this.router.navigate(['create-banners', { id: 'add', image: '' }]);
        }
        else {
            this.router.navigate(['plans']);
        }
    }
    editBanner(bid, image, title, imagefile) {
        this.router.navigate(['create-banners', { id: bid, image: image, title: title, imagefile: imagefile }]);
    }
    deleteBanner(cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want to delete this banner',
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
                            let delvarObj = { action: "delete_banner", cid: cid };
                            this.api.deleteBanner((response) => {
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
OfferBannersPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
OfferBannersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer-banners',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offer-banners.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/offer-banners/offer-banners.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offer-banners.page.scss */ "./src/app/offer-banners/offer-banners.page.scss")).default]
    })
], OfferBannersPage);



/***/ })

}]);
//# sourceMappingURL=offer-banners-offer-banners-module-es2015.js.map