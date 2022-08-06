(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-profile-shop-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-profile/shop-profile.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-profile/shop-profile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class='vendor-head'>Shop Profile</ion-title>\n\n    <ion-buttons style=\"margin-right:5px;\" slot=\"end\" (click)=\"orderspag()\"><ion-icon name=\"create-outline\"></ion-icon></ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"profilecard\" style=\"font-size:12px;\">\n\n\n    <h2 style=\"color:#05274d;font-size:18px;\" *ngIf=\"shopDetail?.shop_name!=''\">Hi, {{shopDetail?.shop_name}}</h2>\n\n    <ion-row style=\"color:black\" *ngIf=\"shopDetail?.name!=''\">\n      <ion-col size=\"6\" align='left'>\n        Name\n      </ion-col>\n      <ion-col size=\"6\" align='right'>\n        {{shopDetail?.name}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"color:black\" *ngIf=\"shopDetail?.phone!=''\">\n      <ion-col size=\"6\" align='left'>\n        Mobile\n      </ion-col>\n      <ion-col size=\"6\" align='right'>\n        {{shopDetail?.phone}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"color:black\"  *ngIf=\"shopDetail?.email!=''\">\n      <ion-col size=\"6\" align='left'>\n        Email\n      </ion-col>\n      <ion-col size=\"6\" align='right'>\n        {{shopDetail?.email}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"color:black\"  *ngIf=\"shopDetail?.state!=''\">\n      <ion-col size=\"6\" align='left'>\n        State\n      </ion-col>\n      <ion-col size=\"6\" align='right'>\n        {{shopDetail?.state}}\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"color:black\"  *ngIf=\"shopDetail?.cityname!=''\">\n      <ion-col size=\"6\" align='left'>\n        City\n      </ion-col>\n      <ion-col size=\"6\" align='right'>\n        {{shopDetail?.cityname}}\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"color:black\"  *ngIf=\"shopDetail?.location!=''\">\n      <ion-col size=\"6\" align='left'>\n        Location\n      </ion-col>\n      <ion-col size=\"6\" align='right'>\n        {{shopDetail?.location}}\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"color:black\"  *ngIf=\"shopDetail?.min_order_amount!=''\">\n      <ion-col size=\"6\" align='left'>\n        Delivery Amount\n      </ion-col>\n      <ion-col size=\"6\" align='right'>\n        {{shopDetail?.min_order_amount}}/-\n      </ion-col>\n    </ion-row>\n\n    \n\n    <!-- <p><b>Name :</b> {{shopDetail?.name}}</p>\n    <p><b>Mobile :</b> {{shopDetail?.phone}}</p>\n    <p><b>Email :</b> {{shopDetail?.email}}</p>-->\n    <h6 style=\"border-top:1px solid lightgrey;padding-top:10px;color:black;font-size:13px;\">Description </h6> \n    <p style=\"margin-top:0px;\" *ngIf=\"shopDetail?.description!=''\">{{shopDetail?.description}}</p>\n    <h6 style=\"color:black;font-size:13px;\">Address</h6>\n    <p style=\"margin-top:0px;\"> {{shopDetail?.address}}\n    <!-- {{shopDetail.city}} - --> {{shopDetail?.pincode}}</p>\n    <!-- <h6 style=\"color:black;font-size:13px;\">Delivery Time :\n    <span style=\"margin-top:0px;color:#05274d\"> {{shopDetail?.delivery_time}}</span></h6>\n    <h6 style=\"color:black;font-size:13px;\">Delivery Amount :\n    <span style=\"margin-top:0px;color:#05274d\">{{shopDetail?.min_order_amount}}</span></h6>  -->\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/shop-profile/shop-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shop-profile/shop-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShopProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopProfilePageRoutingModule", function() { return ShopProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shop_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop-profile.page */ "./src/app/shop-profile/shop-profile.page.ts");




const routes = [
    {
        path: '',
        component: _shop_profile_page__WEBPACK_IMPORTED_MODULE_3__["ShopProfilePage"]
    }
];
let ShopProfilePageRoutingModule = class ShopProfilePageRoutingModule {
};
ShopProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/shop-profile/shop-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shop-profile/shop-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: ShopProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopProfilePageModule", function() { return ShopProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shop_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-profile-routing.module */ "./src/app/shop-profile/shop-profile-routing.module.ts");
/* harmony import */ var _shop_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-profile.page */ "./src/app/shop-profile/shop-profile.page.ts");







let ShopProfilePageModule = class ShopProfilePageModule {
};
ShopProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shop_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopProfilePageRoutingModule"]
        ],
        declarations: [_shop_profile_page__WEBPACK_IMPORTED_MODULE_6__["ShopProfilePage"]]
    })
], ShopProfilePageModule);



/***/ }),

/***/ "./src/app/shop-profile/shop-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/shop-profile/shop-profile.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\nion-input, ion-select, ion-textarea {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #f47a20;\n  background: #f4f2f2ab;\n}\n\nion-button {\n  --background: #f47a20;\n  width: 50%;\n  margin: 10px auto;\n  display: block;\n}\n\n.profilecard {\n  box-shadow: 0px 2px 5px 3px #e2e2e2;\n  border-radius: 15px;\n  padding: 5px 12px;\n  margin-top: 10px;\n  outline: none;\n}\n\n.profilecard p b {\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n\n.profilecard h4 {\n  font-size: 18px;\n  color: #655d5d !important;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1wcm9maWxlL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXHNob3AtcHJvZmlsZVxcc2hvcC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvcC1wcm9maWxlL3Nob3AtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQUE7RUFDUSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNHUjs7QURBQTtFQUNJLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0daOztBREFJO0VBQ0ksZUFBQTtFQUNKLHlCQUFBO0VBQ0EsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3Nob3AtcHJvZmlsZS9zaG9wLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlbmRvci1oZWFke1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBwYWRkaW5nLWlubGluZTowcHg7XG59XG5pb24taW5wdXQsICBpb24tc2VsZWN0LCBpb24tdGV4dGFyZWF7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjQ3YTIwO1xuICAgIGJhY2tncm91bmQ6ICNmNGYyZjJhYjtcbn1cbmlvbi1idXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0N2EyMDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZmlsZWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCAjZTJlMmUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHAge1xuICAgICAgICBiIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzY1NWQ1ZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuIH0iLCIudmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbmlvbi1pbnB1dCwgaW9uLXNlbGVjdCwgaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNDdhMjA7XG4gIGJhY2tncm91bmQ6ICNmNGYyZjJhYjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2Y0N2EyMDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZmlsZWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAzcHggI2UyZTJlMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvZmlsZWNhcmQgcCBiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5wcm9maWxlY2FyZCBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM2NTVkNWQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shop-profile/shop-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/shop-profile/shop-profile.page.ts ***!
  \***************************************************/
/*! exports provided: ShopProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopProfilePage", function() { return ShopProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let ShopProfilePage = class ShopProfilePage {
    constructor(util, actRoute, router, api, popoverController) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
    }
    ngOnInit() {
        this.shopId = localStorage.getItem('fash_user_id');
    }
    ionViewWillEnter() {
        this.getvmDetails();
    }
    getvmDetails() {
        let profObj = { action: "getProfileDetails", shopId: this.shopId };
        this.util.showLoader();
        this.api.fetchShopDetails1((response) => {
            setTimeout(() => {
                this.util.hideLoader();
                if (response.status == true) {
                    this.shopDetail = response;
                    //alert(JSON.stringify(this.shopDetail));
                }
                else {
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, 1000);
        }, profObj);
    }
    orderspag() {
        this.router.navigate(['editprofile']);
    }
    updateMinmumOrder() {
        //alert(this.min_amount);
    }
};
ShopProfilePage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
ShopProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shop-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-profile/shop-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shop-profile.page.scss */ "./src/app/shop-profile/shop-profile.page.scss")).default]
    })
], ShopProfilePage);



/***/ })

}]);
//# sourceMappingURL=shop-profile-shop-profile-module-es2015.js.map