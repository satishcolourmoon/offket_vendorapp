(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offers.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offers.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\" *ngIf=\"offer_zone=='yes'\"></ion-back-button>\n    <ion-menu-button defaultHref slot=\"start\" *ngIf=\"offer_zone=='no'\"></ion-menu-button>\n    <ion-title class='vendor-head'>Offers</ion-title>\n    <button slot=\"end\" class=\"productlist\" (click)=\"addBanner(banners_count)\">Add Offer</button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-row class=\"image-banner\">\n    <div>\n      <ion-icon name=\"trash\" style=\"font-size:18px;color:#f11313;border-radius:50%;background:#fff;padding:5px;margin-top:12px;margin-left:90%;\"></ion-icon>\n      <span><img style=\"margin-top:-38px;\" src=\"../../assets/images/shops/banner.jpg\"></span>\n    </div>\n    \n  </ion-row> -->\n\n  <ion-grid style=\"padding:0px 0px 0px 0px;\">\n  <ion-row *ngIf=\"nval==true\">\n    <ion-col siz=\"12\" style=\"padding:0px;\">\n      <table>\n        <tr>\n          <th>Details</th>\n          <th>Image</th>\n          <th>Action</th>\n        </tr>\n        <tr *ngFor=\"let c of offers\">\n          <td>\n          \t<p><b>Category :</b> {{c.category}}</p>\n          \t<p><b>Title :</b> {{c.title}}</p>\n          \t<p><b>Start Date :</b> {{c.start_date}}</p>\n          \t<p><b>End Date :</b> {{c.end_date}}</p>\n          </td>\n          <td>\n\n            <ion-img-viewer \n  title=\"{{c.category}}\"\n  text=\"{{c.title}}\"\n  scheme=\"dark\"\n  src=\"{{c.app_image}}\"\n>\n<div class=\"imgcls\"></div>\n</ion-img-viewer>\n\n           <!--  <img style=\" object-fit: cover\" src=\"{{c.app_image}}\"> -->\n          </td>\n          <td>\n            <button class=\"editbtn\" (click)=\"editBanner(c.id,c.app_image,c.title,c.image_file,c.cat_id,c.start_date,c.end_date)\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </button>\n            <button class=\"deletebtn\" (click)=\"deleteBanner(c.id)\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </button>\n          </td>\n        </tr>\n        \n      </table>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"nval==false\">\n    <ion-col>\n      <h3 style=\"text-align: center;color: red;\">No Offers</h3>\n    </ion-col>\n  </ion-row>\n\n  </ion-grid>\n\n    \n</ion-content>\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/offers/offers-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/offers/offers-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function() { return OffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.page */ "./src/app/offers/offers.page.ts");




const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ "./src/app/offers/offers.module.ts":
/*!*****************************************!*\
  !*** ./src/app/offers/offers.module.ts ***!
  \*****************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/offers/offers-routing.module.ts");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "./src/app/offers/offers.page.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");








let OffersPageModule = class OffersPageModule {
};
OffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxIonicImageViewerModule"]
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
    })
], OffersPageModule);



/***/ }),

/***/ "./src/app/offers/offers.page.scss":
/*!*****************************************!*\
  !*** ./src/app/offers/offers.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".productlist {\n  letter-spacing: 1px;\n  border-radius: 10px;\n  background: #05274d;\n  color: #fff;\n  padding: 10px 10px;\n  font-size: 12px;\n  margin: 8px 10px;\n  /* font-weight: 600; */\n  outline: none;\n}\n\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  border-right: 1px solid #d8d8d8;\n  text-align: left;\n  padding: 12px 3px;\n  font-size: 13px;\n  background-color: #efefef;\n  color: #f28736;\n  font-weight: normal;\n  text-align: center;\n}\n\ntd {\n  border-right: 1px solid #cbcbcb;\n  text-align: left;\n  padding: 6px 2px;\n  border-bottom: 3px solid #fff;\n  font-size: 15px;\n  text-align: center;\n  background-color: #fafafa;\n}\n\n.editbtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: green;\n  background: #fff;\n  border-radius: 4px;\n  margin: 2px;\n  outline: none;\n}\n\n.deletebtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: red;\n  background: #fff;\n  border-radius: 4px;\n  margin: 2px;\n  outline: none;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 10px;\n  background: #05274d;\n  color: #fff;\n  padding: 10px 10px;\n  font-size: 12px;\n  margin: 8px 10px;\n  /* font-weight: 600; */\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXG9mZmVyc1xcb2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQztFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENDO0VBQ0sseUJBQUE7RUFDRCxXQUFBO0FDRUw7O0FEQ0U7RUFDRywrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VMOztBREFHO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0dMOztBREFHO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0dMOztBRERHO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0lMOztBREZHO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0bGlzdCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNTI3NGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogOHB4IDEwcHg7XHJcbiAgICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuIH1cclxuIC52ZW5kb3ItaGVhZHtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6MHB4O1xyXG59XHJcblxyXG5cclxuLnZlbmRvci1oZWFke1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBwYWRkaW5nLWlubGluZTowcHg7XHJcbiB9XHJcbiB0YWJsZSB7XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuICAgXHJcbiAgdGgge1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICBwYWRkaW5nOiAxMnB4IDNweDtcclxuICAgICBmb250LXNpemU6MTNweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgIGNvbG9yOiAjZjI4NzM2O1xyXG4gICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgdGR7XHJcbiAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NiY2JjYjtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgIHBhZGRpbmc6IDZweCAycHg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgI2ZmZjtcclxuICAgICBmb250LXNpemU6MTVweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7XHJcbiAgIH1cclxuIFxyXG4gICAuZWRpdGJ0biB7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgIG1hcmdpbjogMnB4O1xyXG4gICAgIG91dGxpbmU6bm9uZTtcclxuICAgfVxyXG4gICAuZGVsZXRlYnRuIHtcclxuICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICBjb2xvcjogcmVkO1xyXG4gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgIG1hcmdpbjogMnB4O1xyXG4gICAgIG91dGxpbmU6bm9uZTtcclxuICAgfVxyXG4gICAucHJvZHVjdGxpc3Qge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDhweCAxMHB4O1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiB9XHJcblxyXG4iLCIucHJvZHVjdGxpc3Qge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogOHB4IDEwcHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cblxuLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGNvbG9yOiAjZjI4NzM2O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NiY2JjYjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNnB4IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4uZWRpdGJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGdyZWVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGVsZXRlYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucHJvZHVjdGxpc3Qge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogOHB4IDEwcHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/offers/offers.page.ts":
/*!***************************************!*\
  !*** ./src/app/offers/offers.page.ts ***!
  \***************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let OffersPage = class OffersPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl, alertController, menu) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.menu = menu;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getBanners();
        this.getpackageReport();
        this.getshopDetails();
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
    getBanners() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let catObj = { action: "getoffers", vendor_id: this.shopId };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchOffers((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.offers = response.offers;
                    this.nval = true;
                }
                else {
                    this.nval = false;
                    this.offers = [];
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
                    this.banners_count = response.offers;
                }
                else {
                    this.banners_count = response.offers;
                    //this.router.navigate(['plans']);
                }
            }, catObj);
        });
    }
    addBanner(banners_count) {
        if (banners_count == true) {
            this.router.navigate(['addoffers', { id: 'add', image: '' }]);
        }
        else {
            this.util.presentToast("Your Package Limit Exceeded ", 'danger', 'bottom', 2500);
            //this.router.navigate(['plans']);
        }
    }
    editBanner(bid, image, title, imagefile, cat_id, start_date, end_date) {
        this.router.navigate(['addoffers', { id: bid, image: image, title: title, imagefile: imagefile, cat_id: cat_id, start_date: start_date, end_date: end_date }]);
    }
    deleteBanner(cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want to delete this Offer',
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
                            let delvarObj = { action: "delete_offer", cid: cid };
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
OffersPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
OffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offers.page.scss */ "./src/app/offers/offers.page.scss")).default]
    })
], OffersPage);



/***/ })

}]);
//# sourceMappingURL=offers-offers-module-es2015.js.map