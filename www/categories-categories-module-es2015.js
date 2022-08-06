(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class='vendor-head'>Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div align='center' style=\"background-color:#eceaeb;\">\n    <p style=\"margin:0px 0px 0px 10px;padding:13px;color:#05274d;\">Product by categories</p>\n  </div>\n  <!-- Data to display after skeleton screen -->\n  <!-- Skeleton screen -->\n  <div *ngIf=\"nval==false\" class=\"emptybox\">\n    <img src=\"assets/images/categories.png\" style=\"margin-left:100px; padding: 8px;\" />\n    <h2 style=\"text-align: center;color: #ff6b00bf;\">No Categories Found</h2>\n  </div>\n  <!-- <ion-card *ngFor=\"let dummy of [1,2,3,4,5,6]\" style=\"border: 1px solid #c2bbbb;outline:none\">\n      <ion-card-content style=\"padding: 8px;\">\n        <ion-row>\n          <ion-col size=\"2\" style=\"text-align: center;border: 1px solid #dadada;\">\n            <ion-thumbnail>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n          </ion-col>\n          <ion-col size=\"10\" style=\"text-align: left;\">\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card> -->\n\n\n  <ion-card style=\"padding:0px;\" *ngFor=\"let c of categories\" class=\"profilecard\" (click)=\"gotoPage(c.id,c.title,shopId)\">\n    <ion-card-content style=\"padding: 5px;\">\n      <ion-row>\n        <ion-col size=\"10\" style=\"text-align: left;align-items: center;display: flex;\">\n          <h4 style=\"text-transform:none;\">{{c.title}}</h4>\n        </ion-col>\n        <ion-col size=\"2\" style=\"align-items: center;display: flex;\">\n          <img class=\"vendor-img\" src=\"{{c.image}}\" width=\"100%\" />\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Custom Skeleton Line Height and Margin */\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n.vendor-img {\n  border: 1px solid #f1f1f1;\n  background-color: #f1f1f1;\n  border-radius: 50%;\n  padding: 0px;\n  height: 45px;\n}\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n.profilecard {\n  box-shadow: 0px 2px 5px 3px #e2e2e2;\n  border-radius: 15px;\n  padding: 5px 2px;\n  margin-top: 10px;\n  outline: none;\n}\n.profilecard img {\n  width: 100%;\n}\n.profilecard h4 {\n  font-size: 15px;\n  color: black !important;\n  font-weight: 600;\n  margin-left: 12px;\n}\n.profilecard:first-of-type {\n  margin-top: 25px;\n}\n.emptybox {\n  margin-top: 20%;\n}\n.emptybox img {\n  width: 70%;\n  margin: auto;\n  display: block;\n}\n.emptybox h2 {\n  text-align: center;\n  color: #ff6b00bf;\n  font-weight: 600;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFxjYXRlZ29yaWVzXFxjYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFRjtBREFBO0VBQ0ksaUJBQUE7QUNHSjtBREFFO0VBQ0Usa0JBQUE7QUNHSjtBREFFO0VBQ0UsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDR0o7QURGSTtFQUNHLFdBQUE7QUNJUDtBREZJO0VBQ0ksZUFBQTtFQUNKLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0lKO0FEREE7RUFDRSxnQkFBQTtBQ0lGO0FERkM7RUFDQyxlQUFBO0FDS0Y7QURKRTtFQUNHLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ01MO0FESkU7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTUgiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ3VzdG9tIFNrZWxldG9uIExpbmUgSGVpZ2h0IGFuZCBNYXJnaW4gKi9cbi52ZW5kb3ItaGVhZHtcbiAgZm9udC1zaXplOjE2cHg7XG4gIGZvbnQtd2VpZ2h0OjYwMDtcbiAgcGFkZGluZy1pbmxpbmU6MHB4O1xufVxuLnZlbmRvci1pbWd7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6NDVweDtcbn1cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICB9XG4gIFxuICAuY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIC5wcm9maWxlY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4ICNlMmUyZTI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiA1cHggMnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBpbWcge1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cbiB9XG4ucHJvZmlsZWNhcmQ6Zmlyc3Qtb2YtdHlwZXtcbiAgbWFyZ2luLXRvcDoyNXB4O1xufVxuIC5lbXB0eWJveCB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgaW1nIHtcbiAgICAgd2lkdGg6IDcwJTtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBoMiB7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBjb2xvcjogI2ZmNmIwMGJmO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxufSIsIi8qIEN1c3RvbSBTa2VsZXRvbiBMaW5lIEhlaWdodCBhbmQgTWFyZ2luICovXG4udmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbi52ZW5kb3ItaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5wcm9maWxlY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCAjZTJlMmUyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb2ZpbGVjYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2ZpbGVjYXJkIGg0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5wcm9maWxlY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmVtcHR5Ym94IHtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuLmVtcHR5Ym94IGltZyB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZW1wdHlib3ggaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmY2YjAwYmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let CategoriesPage = class CategoriesPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.categories = [];
    }
    ngOnInit() {
        let uType = localStorage.getItem('fash_user_type');
        if (uType == 'vendor') {
            this.shopId = localStorage.getItem('fash_user_id');
        }
        else {
            this.shopId = this.actRoute.snapshot.paramMap.get('shopId');
        }
        this.getshopCategories();
    }
    getshopCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let catObj = { action: "getcategories", user_id: this.shopId };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchShopCategories((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.categories = response.category_list;
                    this.nval = true;
                }
                else {
                    this.nval = false;
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, catObj);
        });
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.data = {
                'heading': 'Normal text',
                'para1': 'Lorem ipsum dolor sit amet, consectetur',
                'para2': 'adipiscing elit.'
            };
        }, 5000);
    }
    gotoPage(cid, title, shopId) {
        this.router.navigate(['subcategories', { catId: cid, catName: title, shopId: shopId }]);
    }
};
CategoriesPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")).default]
    })
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es2015.js.map