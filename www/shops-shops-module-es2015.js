(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shops-shops-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shops/shops.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shops/shops.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #f47a20;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title>Shops</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let shop of shops\" (click)=\"viewShop(shop.id)\" style=\"outline:none\">\n      <ion-card-content>\n              <img src=\"{{shop.shop_logo}}\" alt=\"\" class=\"shop_logo\">\n              <h2 style=\"text-align: center;\">{{shop.shop_name}}</h2>\n      </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/shops/shops-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shops/shops-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ShopsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsPageRoutingModule", function() { return ShopsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shops_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shops.page */ "./src/app/shops/shops.page.ts");




const routes = [
    {
        path: '',
        component: _shops_page__WEBPACK_IMPORTED_MODULE_3__["ShopsPage"]
    }
];
let ShopsPageRoutingModule = class ShopsPageRoutingModule {
};
ShopsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopsPageRoutingModule);



/***/ }),

/***/ "./src/app/shops/shops.module.ts":
/*!***************************************!*\
  !*** ./src/app/shops/shops.module.ts ***!
  \***************************************/
/*! exports provided: ShopsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsPageModule", function() { return ShopsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shops_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shops-routing.module */ "./src/app/shops/shops-routing.module.ts");
/* harmony import */ var _shops_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shops.page */ "./src/app/shops/shops.page.ts");







let ShopsPageModule = class ShopsPageModule {
};
ShopsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shops_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopsPageRoutingModule"]
        ],
        declarations: [_shops_page__WEBPACK_IMPORTED_MODULE_6__["ShopsPage"]]
    })
], ShopsPageModule);



/***/ }),

/***/ "./src/app/shops/shops.page.scss":
/*!***************************************!*\
  !*** ./src/app/shops/shops.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".shop_logo {\n  width: 60%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHMvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcc2hvcHNcXHNob3BzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvcHMvc2hvcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG9wcy9zaG9wcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvcF9sb2dve1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSIsIi5zaG9wX2xvZ28ge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shops/shops.page.ts":
/*!*************************************!*\
  !*** ./src/app/shops/shops.page.ts ***!
  \*************************************/
/*! exports provided: ShopsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsPage", function() { return ShopsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ShopsPage = class ShopsPage {
    constructor(util, api, router) {
        this.util = util;
        this.api = api;
        this.router = router;
        this.shops = [];
        this.getshopLists();
    }
    ngOnInit() {
        // this.shops = [
        //       {'id':1, 'shop_name':'South India Shopping Mall', 'shop_logo':'assets/images/shops/southindia.png', 'shop_desc':''},
        //       {'id':2, 'shop_name':'CMR Shopping Mall', 'shop_logo':'assets/images/shops/cmr.png', 'shop_desc':''},
        //       {'id':3, 'shop_name':'Lucky Store', 'shop_logo':'assets/images/shops/lucky.png', 'shop_desc':''},
        //       {'id':4, 'shop_name':'KLM Fashion Mall', 'shop_logo':'assets/images/shops/klmfashion.png', 'shop_desc':''},
        //     ]
    }
    viewShop(shopId) {
        this.router.navigate(['/shopdetails', shopId]);
    }
    getshopLists() {
        this.util.showLoader();
        this.api.fetchShopLists((response) => {
            setTimeout(() => {
                this.util.hideLoader();
            }, 1000);
            if (response.status == 'valid') {
                this.shops = response.data;
            }
            else if (response.status == 'invalid_form') {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
            else {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
        }, 1);
    }
};
ShopsPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ShopsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shops',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shops.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shops/shops.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shops.page.scss */ "./src/app/shops/shops.page.scss")).default]
    })
], ShopsPage);



/***/ })

}]);
//# sourceMappingURL=shops-shops-module-es2015.js.map