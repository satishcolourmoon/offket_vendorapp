(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">{{catName}}</ion-title>\n\n     <button slot=\"end\" class=\"productlist\" (click)=\"filters(shopId,catId,subcatId)\">Filters</button>\n    \n  </ion-toolbar>\n  <ion-searchbar placeholder=\"Search Products\" (keyup.enter)=\"getItems($event)\" mode=\"ios\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"products.length>0\">\n    <!-- <h2 style=\"text-align: center;color: #ff6b00bf;\">No Products Found</h2> -->\n    <ion-card no-padding *ngFor=\"let p of products\" class=\"profilecard\">\n      <ion-card-content no-padding style=\"padding: 0px;\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n              <div style=\"width: 100px;height:100px;background-size: contain;background-repeat: no-repeat;border: 1px solid #f1f1f1;\n              border-radius: 18px;background-image: url({{p.image}});box-shadow:0px 2px 6px 0px #e2e2e2;background-position: center;\">\n\n              </div>\n\n            </ion-col>\n            <ion-col size=\"8\">\n              <h4>{{p.name}}</h4>\n              \n              <p *ngIf=\"p.types!=''\"><b>Type: </b> {{p.types}}</p>\n            <!--  <div *ngFor=\"let variant of p.link_variants;let i = index\">\n                <p *ngIf=\"i==0\"><b>Price:</b> {{variant.price}}&#8377;</p>\n              </div> -->\n              <p style=\"color:#05274d;font-size:13px;\">Category: {{p.category_name}},{{p.subcategory_name}}</p>\n              <p *ngIf=\"p.online_status=='0'\"><b style=\"color: #000;\">Status: </b> <span style=\"color: red;\">OFFLINE</span></p>\n              <p *ngIf=\"p.online_status=='1'\"><b style=\"color: #000;\">Status: </b> <span style=\"color: green;\">ONLINE</span></p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n      <div style=\"text-align: center;border-top:1px solid #f1f1f1;\">\n        <ion-row style=\"padding:10px 10px 0px 10px;\">\n          <ion-col style=\"padding:0px;margin-left:10px;\">\n\n            <ion-button (click)=\"editProduct(p.id,p.shop_id)\">\n              <span style=\"font-size:12px;margin-left:-8px;\">Edit</span><ion-icon name=\"create-outline\" style=\"margin-right:-8px;font-size:18px;padding-left:5px;margin-top:-3px;\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col style=\"padding:0px;\">\n            <ion-button (click)=\"viewProduct(p.id)\">\n              <span style=\"font-size:12px;margin-left:-8px;\">View</span><ion-icon name=\"eye-outline\" style=\"margin-right:-8px;font-size:18px;padding-left:5px;margin-top:-3px;\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col *ngIf=\"p.variant_product=='yes'\" style=\"padding:0px\">\n            <ion-button (click)=\"addVariants(p.id)\">\n              <span style=\"font-size:12px;margin-left:-8px;\">Variant</span><span style=\"margin-right:-8px;font-size:18px;padding-left:5px;margin-top:-3px;\">+</span>\n            </ion-button>\n          </ion-col>\n          <ion-col style=\"padding:0px;margin-left:-3px;\">\n            <ion-button (click)=\"viewlinkproduct(p.id)\"> \n              <ion-icon name=\"list-outline\" style=\"font-size:18px;margin-left:-8px;margin-right:-8px;\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col style=\"padding:0px;margin-left:-6px;\">\n            <ion-button (click)=\"deleteProduct(p.id)\" style=\"color:#fff;\">\n              <ion-icon name=\"trash\" style=\"font-size:18px;margin-left:-8px;margin-right:-8px;\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </ion-card>\n  </div>\n  <div *ngIf=\"nval==false\" class=\"emptybox\">\n\n    <img src=\"assets/images/products.png\" class=\"img_user\" />\n    <h2 style=\"text-align: center;color: #05274d;font-size:20px;\">No Products Found</h2>\n\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageRoutingModule", function() { return ProductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");







let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsPageRoutingModule"]
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\nion-segment {\n  --color: #040404;\n  height: 53px;\n  --background:#eceaeb;\n  border-bottom: 1px solid #05274d;\n}\n\nion-segment-button {\n  --color: #0e0e0e;\n  --background:#eceaeb;\n  --indicator-color: #05274d;\n  --color-checked: #05274d;\n  --indicator-height: 3px;\n  /* min-height: 30px; */\n  text-transform: capitalize;\n  --padding-bottom: 10px;\n  --padding-top: 5px;\n  font-size: 14px;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 6px;\n  background: #05274d;\n  padding: 8px 14px;\n  font-size: 14px;\n  outline: none;\n  color: white;\n  margin: 8px 17px;\n  font-weight: 600;\n}\n\n.profilecard {\n  box-shadow: 0px 2px 5px 3px #e2e2e2;\n  border-radius: 15px;\n  padding: 5px 2px;\n  margin-top: 10px;\n  outline: none;\n}\n\n.profilecard img {\n  width: 100%;\n}\n\n.profilecard h4 {\n  font-size: 18px;\n  color: black !important;\n  font-weight: 600;\n}\n\n.emptybox {\n  margin-top: 20%;\n}\n\n.emptybox img {\n  width: 70%;\n  margin: auto;\n  display: block;\n}\n\n.emptybox h2 {\n  text-align: center;\n  color: #ff6b00bf;\n  font-weight: 600;\n  margin-top: 10%;\n}\n\n.button-native {\n  padding: 8px !important;\n}\n\nion-button {\n  height: 30px;\n  --background: #e44424;\n  --border-radius: 10px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSDs7QURDQTtFQUVJLGdCQUFBO0VBQ0UsWUFBQTtFQUNGLG9CQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUVBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQztFQUNHLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRDJCQTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ3hCRjs7QUR5QkU7RUFDRyxXQUFBO0FDdkJMOztBRHlCRTtFQUNJLGVBQUE7RUFDSix1QkFBQTtFQUNBLGdCQUFBO0FDdkJGOztBRDRCQTtFQUNHLGVBQUE7QUN6Qkg7O0FEMEJHO0VBQ0csVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDeEJOOztBRDBCRztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUN4Qko7O0FENEJBO0VBQ0csdUJBQUE7QUN6Qkg7O0FENEJBO0VBRUcsWUFBQTtFQUNELHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQzFCRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW5kb3ItaGVhZHtcbiAgIGZvbnQtc2l6ZToxNnB4O1xuICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgcGFkZGluZy1pbmxpbmU6MHB4O1xufVxuaW9uLXNlZ21lbnR7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoYnJvd24gLCBicm93bik7IFxuICAgIC0tY29sb3I6ICMwNDA0MDQ7XG4gICAgICBoZWlnaHQ6IDUzcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiNlY2VhZWI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNTI3NGQ7XG4gIH1cbiAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIC0tY29sb3I6ICMwZTBlMGU7XG4gICAgLS1iYWNrZ3JvdW5kOiNlY2VhZWI7XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6ICMwNTI3NGQ7XG4gICAvLyAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMDUyNzRkO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogM3B4O1xuICAgIC8qIG1pbi1oZWlnaHQ6IDMwcHg7ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gLnByb2R1Y3RsaXN0IHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luOiA4cHggMTdweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuIH1cblxuLy8gLnNlZ21lbnR7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgIG1hcmdpbi1yaWdodDogMTBweDtcbi8vICAgICBtYXJnaW4tbGVmdDo1cHg7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y0N2EyMDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4vLyAgICAgbGFiZWx7XG4vLyAgICAgICAgIC0tY29sb3I6I2Y0N2EyMDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC5hY3RpdmVfc2VnbWVudHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuLy8gICAgIG1hcmdpbi1sZWZ0OjVweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGxhYmVse1xuLy8gICAgICAgICAtLWNvbG9yOiNmZmY7XG4vLyAgICAgfVxuLy8gfVxuXG4ucHJvZmlsZWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAzcHggI2UyZTJlMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogNXB4IDJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgaW1nIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaDQge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIH1cbn1cblxuLmVtcHR5Ym94IHtcbiAgIG1hcmdpbi10b3A6IDIwJTtcbiAgIGltZyB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICB9XG4gICBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmY2YjAwYmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICB9XG59XG5cbi5idXR0b24tbmF0aXZlIHtcbiAgIHBhZGRpbmc6OHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuLy8gICBwYWRkaW5nOiA4cHg7XG4gICBoZWlnaHQ6MzBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZTQ0NDI0O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOm5vbmU7XG59IiwiLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIC0tY29sb3I6ICMwNDA0MDQ7XG4gIGhlaWdodDogNTNweDtcbiAgLS1iYWNrZ3JvdW5kOiNlY2VhZWI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDUyNzRkO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAtLWNvbG9yOiAjMGUwZTBlO1xuICAtLWJhY2tncm91bmQ6I2VjZWFlYjtcbiAgLS1pbmRpY2F0b3ItY29sb3I6ICMwNTI3NGQ7XG4gIC0tY29sb3ItY2hlY2tlZDogIzA1Mjc0ZDtcbiAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG4gIC8qIG1pbi1oZWlnaHQ6IDMwcHg7ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2R1Y3RsaXN0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjMDUyNzRkO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogOHB4IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9maWxlY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCAjZTJlMmUyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb2ZpbGVjYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2ZpbGVjYXJkIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmVtcHR5Ym94IHtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuLmVtcHR5Ym94IGltZyB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZW1wdHlib3ggaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmY2YjAwYmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZTQ0NDI0O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter/filter.page */ "./src/app/filter/filter.page.ts");









let ProductsPage = class ProductsPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl, alertController, modalController) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.modalController = modalController;
        this.products = [];
        this.catId = this.actRoute.snapshot.paramMap.get('catId');
        this.catName = this.actRoute.snapshot.paramMap.get('catName');
        this.shopId = this.actRoute.snapshot.paramMap.get('shop_id');
        this.subcatId = this.actRoute.snapshot.paramMap.get('subcatId');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getpackageReport();
        this.getSubCategoryProducts(this.subcatId, this.catId);
    }
    getpackageReport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let catObj = { action: "vendor_package_for_count", vendor_id: this.shopId };
            this.api.getPackageReport((response) => {
                if (response.status == true) {
                    this.product = response.products;
                }
                else {
                    this.product = 0;
                    //this.router.navigate(['plans']);
                }
            }, catObj);
        });
    }
    editProduct(pid, shop_id) {
        this.router.navigate(['editproduct', { pid: pid, shop_id: shop_id }]);
    }
    viewProduct(pid) {
        this.router.navigate(['productdetails', { pid: pid }]);
    }
    goProduct() {
        this.router.navigate(['request-new-product', { shopId: this.shopId }]);
    }
    viewlinkproduct(pid) {
        this.router.navigate(['linkproducts', { pid: pid }]);
    }
    addVariants(pid) {
        this.router.navigate(['addvariant', { pid: pid }]);
    }
    getSubCategoryProducts(SubCatId, cat_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let productObj = { action: "getProducts", cat_id: this.catId, subcat_id: SubCatId, shop_id: this.shopId };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.products = [];
            this.api.fetchProducts((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.products = response.product_list;
                    this.nval = true;
                }
                else {
                    this.nval = false;
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, productObj);
        });
    }
    deleteProduct(pid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want to delete Product , Product Image, Variant products, stock ?',
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
                            let delProdObj = { action: "deleteProduct", pid: pid };
                            this.api.deleteProducts((response) => {
                                if (response.status == true) {
                                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                                    this.ionViewWillEnter();
                                }
                                else {
                                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                                }
                            }, delProdObj);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    requestProject(shopId, product, catId) {
        if (product == true) {
            this.router.navigate(['/request-new-product/' + shopId + '/' + catId]);
        }
        else {
            this.util.presentToast("Your Package Limit Exceeded ", 'danger', 'bottom', 2500);
            //this.router.navigate(['plans']);
        }
    }
    getItems(ev) {
        let keyword = ev.target.value;
        if (keyword.length == 0) {
            this.getSubCategoryProducts(this.subcatId, this.catId);
        }
        else if (keyword.length > 0) {
            let catObj = { action: "search_products", keyword: keyword, cat_id: this.catId, subcat_id: this.subcatId, shop_id: this.shopId };
            this.api.searchProductsList((response) => {
                if (response.status == true) {
                    this.products = response.product_list;
                    this.nval = true;
                }
                else {
                    this.nval = false;
                    this.products = [];
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, catObj);
        }
    }
    doRefresh(event) {
        console.log('Refreshing Start');
        this.ngOnInit();
        setTimeout(() => {
            console.log('Refreshing Ended');
            event.target.complete();
        }, 2000);
    }
    filters(shopId, catId, subcatId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"],
                componentProps: { shopId: shopId, catId: catId, subcatId: subcatId }
            });
            modal.onDidDismiss().then((data) => {
                let json_data = data.data.json_data;
                if (json_data.length == 0 || json_data.length == undefined) {
                }
                else {
                    let filterObj = { action: "products_brand_filters", shopId: this.shopId, catId: this.catId, subcat_id: this.subcatId, json_data: json_data };
                    //this.util.showLoader();
                    this.api.productsBrandFilters((response) => {
                        this.catId = this.actRoute.snapshot.paramMap.get('catId');
                        this.catName = this.actRoute.snapshot.paramMap.get('catName');
                        this.shopId = this.actRoute.snapshot.paramMap.get('shop_id');
                        this.subcatId = this.actRoute.snapshot.paramMap.get('subcatId');
                        //this.util.hideLoader();
                        alert(JSON.stringify(response.product_list));
                        if (response.status == true) {
                            this.products = response.product_list;
                            this.nval = true;
                        }
                        else if (response.status == false) {
                            this.products = [];
                            this.nval = false;
                        }
                    }, filterObj);
                }
            });
            yield modal.present();
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")).default]
    })
], ProductsPage);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map