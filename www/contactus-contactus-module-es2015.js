(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <ion-card  class=\"profilecard\">\n    <ion-card-content style=\"padding: 5px;\">\n      <ion-row>\n          <img src=\"{{image}}\" class=\"img_logo\" style=\"width: 100%;\" />\n        \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n        \t<p><b style=\"font-size: 20px; color: #000;\">E-Mail : </b> <a href=\"mailto:{{email}}\" style=\"text-decoration: none; font-size: 18px; color: #05274d;\">{{email}}</a></p>\n\n        \t<p><b style=\"font-size: 20px; color: #000;\">Mobile : </b><a href=\"tel:{{mobile}}\" style=\"text-decoration: none; font-size: 18px; color: #05274d;\">{{mobile}}</a> </p>\n        </ion-col>\n        \n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/contactus/contactus-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageRoutingModule", function() { return ContactusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");




const routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_3__["ContactusPage"]
    }
];
let ContactusPageRoutingModule = class ContactusPageRoutingModule {
};
ContactusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactusPageRoutingModule);



/***/ }),

/***/ "./src/app/contactus/contactus.module.ts":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactus-routing.module */ "./src/app/contactus/contactus-routing.module.ts");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");







let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactusPageRoutingModule"]
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
    })
], ContactusPageModule);



/***/ }),

/***/ "./src/app/contactus/contactus.page.scss":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n.profilecard {\n  box-shadow: 0px 2px 5px 3px #e2e2e2;\n  border-radius: 15px;\n  padding: 5px 2px;\n  margin-top: 10px;\n  outline: none;\n}\n.profilecard img {\n  width: 100%;\n}\n.profilecard h4 {\n  font-size: 18px;\n  color: #655d5d !important;\n  font-weight: 600;\n  margin-left: 12px;\n}\n.emptybox {\n  margin-top: 20%;\n}\n.emptybox img {\n  width: 70%;\n  margin: auto;\n  display: block;\n}\n.emptybox h2 {\n  text-align: center;\n  color: #ff6b00bf;\n  font-weight: 600;\n  margin-top: 10%;\n}\n.div_logo {\n  width: 100%;\n  position: relative;\n  height: 100px;\n  margin-top: 25%;\n}\n.div_logo .img_logo {\n  width: 220px;\n  position: absolute;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n}\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n.sharebtn {\n  color: #fff;\n  --background:#081f65;\n  --border-radius:15px;\n  width: 43%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXGNvbnRhY3R1c1xcY29udGFjdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQUE7QUFDQTtFQUNJLGlCQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0FDQ0o7QURFRTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQUk7RUFDRyxXQUFBO0FDRVA7QURBSTtFQUNJLGVBQUE7RUFDSix5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREVDO0VBQ0MsZUFBQTtBQ0NGO0FEQUU7RUFDRyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNFTDtBREFFO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VIO0FERUE7RUFDUSxXQUFBO0VBRUEsa0JBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBQ0RSO0FER1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FDRFo7QURLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRk47QURJRTtFQUNFLFdBQUE7RUFBVyxvQkFBQTtFQUFxQixvQkFBQTtFQUFxQixVQUFBO0FDRXpEIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDdXN0b20gU2tlbGV0b24gTGluZSBIZWlnaHQgYW5kIE1hcmdpbiAqL1xyXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGVjYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCAjZTJlMmUyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGltZyB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzY1NWQ1ZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG4gfVxyXG5cclxuIC5lbXB0eWJveCB7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIGltZyB7XHJcbiAgICAgd2lkdGg6IDcwJTtcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBjb2xvcjogI2ZmNmIwMGJmO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2X2xvZ297XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAzMHZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XHJcblxyXG4gICAgICAgIC5pbWdfbG9nb3tcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC52ZW5kb3ItaGVhZHtcclxuICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgcGFkZGluZy1pbmxpbmU6MHB4O1xyXG4gIH1cclxuICAuc2hhcmVidG57XHJcbiAgICBjb2xvcjojZmZmOy0tYmFja2dyb3VuZDojMDgxZjY1Oy0tYm9yZGVyLXJhZGl1czoxNXB4O3dpZHRoOjQzJTtcclxuICB9IiwiLyogQ3VzdG9tIFNrZWxldG9uIExpbmUgSGVpZ2h0IGFuZCBNYXJnaW4gKi9cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQge1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cblxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucHJvZmlsZWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAzcHggI2UyZTJlMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogNXB4IDJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wcm9maWxlY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9maWxlY2FyZCBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM2NTVkNWQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5lbXB0eWJveCB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cbi5lbXB0eWJveCBpbWcge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmVtcHR5Ym94IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmNmIwMGJmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5kaXZfbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDI1JTtcbn1cbi5kaXZfbG9nbyAuaW1nX2xvZ28ge1xuICB3aWR0aDogMjIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDQwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cblxuLnNoYXJlYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDojMDgxZjY1O1xuICAtLWJvcmRlci1yYWRpdXM6MTVweDtcbiAgd2lkdGg6IDQzJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contactus/contactus.page.ts":
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let ContactusPage = class ContactusPage {
    constructor(util, actRoute, router, api, popoverController, modalController) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.contactus();
    }
    contactus() {
        let Obj = { action: "support" };
        // this.util.showLoader();
        this.api.fetchSupport((response) => {
            this.util.hideLoader();
            this.email = response.email;
            this.mobile = response.mobile;
            this.image = response.image;
        }, Obj);
    }
};
ContactusPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ContactusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contactus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contactus.page.scss */ "./src/app/contactus/contactus.page.scss")).default]
    })
], ContactusPage);



/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module-es2015.js.map