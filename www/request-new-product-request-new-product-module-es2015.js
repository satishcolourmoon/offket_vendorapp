(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-new-product-request-new-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/request-new-product/request-new-product.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/request-new-product/request-new-product.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class='vendor-head'>Add New Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"addproductContainer\">\n\n    <div>\n      <p style=\"text-align: center;\"> If you want clone existing Product Click</p>\n      <ion-button color=\"danger\" (click)=\"existingProduct(catId)\">New</ion-button>\n    </div>\n\n\n\n    <!-- <form> -->\n    <!--  <ion-searchbar placeholder=\"Search Products\" (ionChange)=\"getItems($event)\" mode=\"ios\"></ion-searchbar>\n        <ion-row *ngIf=\"nval==1\">\n\n          <ion-list>\n            <ion-item *ngFor=\"let item of products\" (click)=\"getProductData(item.id)\">\n              <ion-label>{{item.name}}</ion-label>\n            </ion-item>\n           \n          </ion-list>\n\n           \n        </ion-row> -->\n\n\n    <ion-label position=\"floating\">Product Name *</ion-label>\n    <ion-input name=\"product_name\" [(ngModel)]=\"product_name\" placeholder=\"Enter Product Name\" #prodName></ion-input>\n\n\n    <ion-label position=\"floating\">Category *</ion-label>\n    <ion-select placeholder=\"Select Category\" name=\"category\" [(ngModel)]=\"category\" (ionChange)=\"getSubcategories()\"\n      style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"{{c.id}}\" *ngFor=\"let c of categories\">{{c.title}}</ion-select-option>\n    </ion-select>\n\n    <ion-label position=\"floating\">Sub Category *</ion-label>\n    <ion-select placeholder=\"Select Sub Category\" name=\"subcategory\" [(ngModel)]=\"subcategory\"\n      style=\"padding:11px 25px !important;\"  (ionChange)=\"getproductBrands()\">\n      <ion-select-option value=\"{{sc.id}}\" *ngFor=\"let sc of sub_categories\">{{sc.title}}</ion-select-option>\n    </ion-select>\n\n     <ion-label position=\"floating\">Brands </ion-label>\n    <ion-select placeholder=\"Select Brand\" name=\"brand\" [(ngModel)]=\"brand\" style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"{{brd.id}}\" *ngFor=\"let brd of brands\">{{brd.brand_name}}</ion-select-option>\n    </ion-select>\n\n    <ion-label position=\"floating\">Types </ion-label>\n    <ion-select placeholder=\"Select Type\" name=\"type\" [(ngModel)]=\"type\" style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"{{typ.id}}\" *ngFor=\"let typ of types\">{{typ.title}}</ion-select-option>\n    </ion-select>\n\n    <ion-label position=\"floating\">Product Description *</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" name=\"product_description\" [(ngModel)]=\"product_description\"\n      placeholder=\"Product Description\" #pro_descName></ion-textarea>\n\n    <ion-label position=\"floating\">Key Features *</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" name=\"key_fetures\" [(ngModel)]=\"key_fetures\" placeholder=\"Enter Key Features\"\n      #keyfeatName></ion-textarea>\n\n\n    <ion-label position=\"floating\">Product Tags </ion-label>\n    <ion-select name=\"product_tags\" [(ngModel)]=\"product_tags\" placeholder=\"Select Product Tags\" multiple=\"true\"\n      style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"{{tag.title}}\" *ngFor=\"let tag of tags\">{{tag.title}}</ion-select-option>\n    </ion-select>\n\n   \n\n\n    <!-- <ion-select placeholder=\"Manage Tax\" name=\"tax\" [(ngModel)]=\"tax\" (ionChange)=\"getTax()\" >\n        <ion-select-option value=\"yes\">Yes</ion-select-option>\n        <ion-select-option value=\"no\">No</ion-select-option>\n      </ion-select>\n\n      <ion-select placeholder=\"Select Tax\" name=\"selectedtax\" [(ngModel)]=\"selectedtax\" *ngIf=\"taxname==true\">\n        <ion-select-option value=\"{{ta.id}}\" *ngFor=\"let ta of taxlist\">{{ta.title}}</ion-select-option>\n      </ion-select> -->\n\n    <!-- <ion-label position=\"floating\">Cancel Available </ion-label>\n      <ion-select placeholder=\"Cancel Available\" name=\"cancel_available\" [(ngModel)]=\"cancel_available\" (ionChange)=\"getDays()\" style=\"padding:11px 25px !important;\">\n        <ion-select-option value=\"yes\">Yes</ion-select-option>\n        <ion-select-option value=\"no\">No</ion-select-option>\n      </ion-select> -->\n\n\n    <!-- <ion-label position=\"floating\">Return Available </ion-label>\n    <ion-select placeholder=\"Return Available\" name=\"return_available\" [(ngModel)]=\"return_available\"\n      (ionChange)=\"getDays()\" style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"yes\">Yes</ion-select-option>\n      <ion-select-option value=\"no\">No</ion-select-option>\n    </ion-select> -->\n\n    <!-- <div *ngIf=\"showdays==true\">\n      <ion-input name=\"no_of_days\" [(ngModel)]=\"no_of_days\" placeholder=\"Return Number of Days\"></ion-input>\n    </div> -->\n\n\n    <ion-label position=\"floating\">Manage Stock </ion-label>\n    <ion-select placeholder=\"Manage Stock\" name=\"manage_stock\" [(ngModel)]=\"manage_stock\"\n      style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"yes\">Yes</ion-select-option>\n      <ion-select-option value=\"no\">No</ion-select-option>\n    </ion-select>\n\n\n\n    <ion-label position=\"floating\">Stock Status </ion-label>\n    <ion-select name=\"availabile_stock_status\" [(ngModel)]=\"availabile_stock_status\" placeholder=\"Stock Status\"\n      interface=\"action-sheet\" style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"available\">AVAILABLE</ion-select-option>\n      <ion-select-option value=\"sold\">SOLD OUT</ion-select-option>\n    </ion-select>\n\n\n    <!-- <ion-label position=\"floating\">Pick at the Store </ion-label>\n    <ion-select placeholder=\"Pick at the Store\" name=\"pick_store\" [(ngModel)]=\"pick_store\"\n      style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"1\">Yes</ion-select-option>\n      <ion-select-option value=\"0\">No</ion-select-option>\n    </ion-select> -->\n\n    <!-- <ion-label position=\"floating\">Best on Offket </ion-label>\n    <ion-select placeholder=\"Best on Offket\" name=\"best_on_offket\" [(ngModel)]=\"best_on_offket\"\n      style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"1\">Yes</ion-select-option>\n      <ion-select-option value=\"0\">No</ion-select-option>\n    </ion-select> -->\n\n    <ion-label position=\"floating\">Offers Product</ion-label>\n    <ion-select placeholder=\"Offers\" name=\"offers\" [(ngModel)]=\"offers\" style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"1\">Yes</ion-select-option>\n      <ion-select-option value=\"0\">No</ion-select-option>\n    </ion-select>\n\n    <ion-label position=\"floating\">Product Status</ion-label>\n    <ion-select placeholder=\"Product Status\" name=\"product_status\" [(ngModel)]=\"product_status\"\n      style=\"padding:11px 25px !important;\" (ionChange)=\"getProductStatus()\">\n      <ion-select-option value=\"0\">Buy now</ion-select-option>\n      <ion-select-option value=\"2\">Call the Retailer</ion-select-option>\n      \n    </ion-select>\n\n\n    <!--  <ion-list>\n          <ion-radio-group [(ngModel)]=\"product_status\" value=\"0\">\n\n            <p class=\"spec_title\">Product Status </p>\n        <ion-row>\n          <ion-col size=\"3\">\n                <ion-item>\n                  <ion-label>Buy now</ion-label>\n                  <ion-radio value=\"0\"></ion-radio>\n                </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>Call the Retailer</ion-label>\n                  <ion-radio value=\"2\"></ion-radio>\n                </ion-item>\n          </ion-col>\n          <ion-col size=\"3\">\n                <ion-item>\n                  <ion-label>Both</ion-label>\n                  <ion-radio value=\"3\"></ion-radio>\n                </ion-item>\n          </ion-col>\n        </ion-row>\n            \n\n            \n\n          </ion-radio-group>\n        </ion-list> -->\n  <div *ngIf=\"showstat\">\n    <ion-label position=\"floating\">Price Range *</ion-label>\n\n    <ion-row>\n    <ion-col>\n           <ion-input type=\"tel\" size=\"6\" name=\"start_price_range\" [(ngModel)]=\"start_price_range\" placeholder=\"Start\"></ion-input>\n    </ion-col>\n    <ion-col>\n            <ion-input type=\"tel\" size=\"6\" name=\"end_price_range\" [(ngModel)]=\"end_price_range\" placeholder=\"End\"></ion-input>\n    </ion-col>\n   </ion-row>\n   \n    \n  </div>\n \n\n\n    <ion-label position=\"floating\">Variant Product </ion-label>\n    <ion-select placeholder=\"Select Variant Product\" name=\"variant_product\" [(ngModel)]=\"variant_product\"\n      (ionChange)=\"getVariantProduct()\" style=\"padding:11px 25px !important;\">\n      <ion-select-option value=\"yes\">Yes</ion-select-option>\n      <ion-select-option value=\"no\">No</ion-select-option>\n    </ion-select>\n\n\n\n    <!-- <div *ngIf=\"variant==true\">\n\n\n\n      <ion-label position=\"floating\">Price </ion-label>\n      <ion-input name=\"price\" [(ngModel)]=\"price\" placeholder=\"Enter Price (Rs.)\"></ion-input>\n\n      <ion-label position=\"floating\">Sale Price </ion-label>\n      <ion-input name=\"sale_price\" [(ngModel)]=\"sale_price\" placeholder=\"Enter Sale Price (Rs.)\"></ion-input>\n\n      <ion-label position=\"floating\">Stock </ion-label>\n      <ion-input name=\"stock\" [(ngModel)]=\"stock\" placeholder=\"Enter Stock\"></ion-input>\n\n      <p (click)=\"selectPictures()\" class=\"selectimagecls\">Upload Images <ion-icon name=\"image-outline\" class=\"selecticon\"></ion-icon>\n      </p>\n\n      <ion-grid *ngIf=\"images.length != 0\">\n        <ion-col *ngFor=\"let image of images\">\n          <img src=\"{{image}}\" style=\"height: 50px;width:50px\" />\n        </ion-col>\n      </ion-grid>\n\n    </div> -->\n\n\n    <ion-button (click)=\"doProduct()\" style=\"--background: #eb445a;width: 47%;\">Add Product</ion-button>\n\n\n\n    <!--   </form> -->\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/request-new-product/request-new-product-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/request-new-product/request-new-product-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RequestNewProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestNewProductPageRoutingModule", function() { return RequestNewProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _request_new_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-new-product.page */ "./src/app/request-new-product/request-new-product.page.ts");




const routes = [
    {
        path: '',
        component: _request_new_product_page__WEBPACK_IMPORTED_MODULE_3__["RequestNewProductPage"]
    }
];
let RequestNewProductPageRoutingModule = class RequestNewProductPageRoutingModule {
};
RequestNewProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestNewProductPageRoutingModule);



/***/ }),

/***/ "./src/app/request-new-product/request-new-product.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/request-new-product/request-new-product.module.ts ***!
  \*******************************************************************/
/*! exports provided: RequestNewProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestNewProductPageModule", function() { return RequestNewProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _request_new_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-new-product-routing.module */ "./src/app/request-new-product/request-new-product-routing.module.ts");
/* harmony import */ var _request_new_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-new-product.page */ "./src/app/request-new-product/request-new-product.page.ts");







let RequestNewProductPageModule = class RequestNewProductPageModule {
};
RequestNewProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _request_new_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestNewProductPageRoutingModule"]
        ],
        declarations: [_request_new_product_page__WEBPACK_IMPORTED_MODULE_6__["RequestNewProductPage"]]
    })
], RequestNewProductPageModule);



/***/ }),

/***/ "./src/app/request-new-product/request-new-product.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/request-new-product/request-new-product.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.addproductContainer {\n  padding: 15px;\n}\n\n.addproductContainer ion-input, .addproductContainer ion-select, .addproductContainer ion-textarea, .addproductContainer ion-datetime {\n  margin-bottom: 15px;\n  border: 1px solid #bebdbcd4;\n  border-radius: 20px;\n  padding: 3px 15px !important;\n  background: #fbfafa45;\n  font-size: 13px;\n  outline: none;\n}\n\n.addproductContainer ion-button {\n  --background: #081f65;\n  width: 40%;\n  margin: 10px auto;\n  height: 40px;\n  display: block;\n  --border-radius: 20px;\n  outline: none;\n}\n\n.addproductContainer .images {\n  background-color: #ccc;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n}\n\n.selectimagecls {\n  letter-spacing: 1px;\n  width: 75%;\n  background: #081f65;\n  color: #ffc;\n  padding: 14px 10px;\n  text-align: center;\n  border-radius: 10px;\n  font-size: 18px;\n  margin: auto;\n}\n\n.selecticon {\n  font-size: 21px;\n  position: absolute;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdC1uZXctcHJvZHVjdC9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFxyZXF1ZXN0LW5ldy1wcm9kdWN0XFxyZXF1ZXN0LW5ldy1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVxdWVzdC1uZXctcHJvZHVjdC9yZXF1ZXN0LW5ldy1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUk7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNFUjs7QURBSTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNFUjs7QURBSTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDRVI7O0FERUE7RUFDRSxtQkFBQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtbmV3LXByb2R1Y3QvcmVxdWVzdC1uZXctcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVuZG9yLWhlYWR7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIHBhZGRpbmctaW5saW5lOjBweDtcbn1cbi5hZGRwcm9kdWN0Q29udGFpbmVye1xuICAgIHBhZGRpbmc6MTVweDtcblxuICAgIGlvbi1pbnB1dCwgIGlvbi1zZWxlY3QsIGlvbi10ZXh0YXJlYSxpb24tZGF0ZXRpbWV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWJkYmNkNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogM3B4IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZiZmFmYTQ1O1xuICAgICAgICBmb250LXNpemU6MTNweDtcbiAgICAgICAgb3V0bGluZTpub25lO1xuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMwODFmNjU7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIC5pbWFnZXN7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn1cblxuLnNlbGVjdGltYWdlY2xzIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB3aWR0aDogNzUlO1xuICAgIGJhY2tncm91bmQ6ICMwODFmNjU7XG4gICAgY29sb3I6ICNmZmM7XG4gICAgcGFkZGluZzogMTRweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLnNlbGVjdGljb24ge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH0iLCIudmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbi5hZGRwcm9kdWN0Q29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi1pbnB1dCwgLmFkZHByb2R1Y3RDb250YWluZXIgaW9uLXNlbGVjdCwgLmFkZHByb2R1Y3RDb250YWluZXIgaW9uLXRleHRhcmVhLCAuYWRkcHJvZHVjdENvbnRhaW5lciBpb24tZGF0ZXRpbWUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmViZGJjZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDNweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmYmZhZmE0NTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmFkZHByb2R1Y3RDb250YWluZXIgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzA4MWY2NTtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hZGRwcm9kdWN0Q29udGFpbmVyIC5pbWFnZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2VsZWN0aW1hZ2VjbHMge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3aWR0aDogNzUlO1xuICBiYWNrZ3JvdW5kOiAjMDgxZjY1O1xuICBjb2xvcjogI2ZmYztcbiAgcGFkZGluZzogMTRweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2VsZWN0aWNvbiB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/request-new-product/request-new-product.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/request-new-product/request-new-product.page.ts ***!
  \*****************************************************************/
/*! exports provided: RequestNewProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestNewProductPage", function() { return RequestNewProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");












let RequestNewProductPage = class RequestNewProductPage {
    constructor(util, router, actRoute, loadingCtrl, api, camera, actionSheetController, file, transfer, crop, imagePicker) {
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.transfer = transfer;
        this.crop = crop;
        this.imagePicker = imagePicker;
        this.imagepath = [];
        this.images = [];
        this.urlpath = 'https://offket.com/api/Vendor_api/user';
        this.product_startdate = (new Date().getDay() - 1).toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
        this.taxname = false;
        this.variant = false;
        this.showdays = false;
        this.product_status = "0";
    }
    ngOnInit() {
        this.catId = this.actRoute.snapshot.paramMap.get('catId');
        this.shopId = this.actRoute.snapshot.paramMap.get('shopId');
        this.getshopCategories();
        this.getproductTags();
        this.getproductBrands();
        //this.getproductTypes();
        this.getTaxList();
    }
    getproductTags() {
        let tagObj = { action: "getproductTags" };
        //alert(JSON.stringify(catObj));
        //this.util.showLoader();
        this.api.getTags((response) => {
            setTimeout(() => {
                //this.util.hideLoader();
                if (response.status == true) {
                    this.tags = response.tags;
                }
                else {
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, 500);
        }, tagObj);
    }
    getproductBrands() {
        let brandObj = { action: "getBrands", subcatid: this.subcategory };
        this.api.getBrands((response) => {
            setTimeout(() => {
                if (response.status == true) {
                    this.brands = response.brands;
                }
                else {
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, 500);
        }, brandObj);
        this.getproductTypes();
    }
    getproductTypes() {
        let brandObj = { action: "getTypes", subcatid: this.subcategory };
        this.api.getTypes((response) => {
            if (response.status == true) {
                this.types = response.types;
            }
            else {
                //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
        }, brandObj);
    }
    getTaxList() {
        let taxObj = { action: "gettaxList" };
        this.api.getTax((response) => {
            setTimeout(() => {
                if (response.status == true) {
                    this.taxlist = response.tax;
                }
                else {
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, 500);
        }, taxObj);
    }
    getshopCategories() {
        let catObj = { action: "getcategories", user_id: this.shopId };
        //alert(JSON.stringify(catObj));
        this.util.showLoader();
        this.api.getCategories((response) => {
            setTimeout(() => {
                this.util.hideLoader();
                if (response.status == true) {
                    this.categories = response.category_list;
                }
                else {
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, 500);
        }, catObj);
    }
    ScrollToBottom() {
        this.content.scrollToBottom(1500);
    }
    ScrollToTop() {
        this.content.scrollToTop(1500);
    }
    doProduct() {
        if (this.product_name == '' || this.product_name == undefined) {
            this.content.scrollToTop(1500);
            this.pName.setFocus();
            this.util.presentToast("Enter Product Name", 'danger', 'top', 2500);
        }
        else if (this.category == '' || this.category == undefined) {
            this.content.scrollToPoint(1500, 67, 1500);
            //this.cName.setFocus();
            this.util.presentToast("Select Category", 'danger', 'top', 2500);
        }
        else if (this.subcategory == '' || this.subcategory == undefined) {
            this.content.scrollToPoint(1500, 112, 1500);
            //this.subc_Name.setFocus();
            this.util.presentToast("Select Sub Category", 'danger', 'top', 2500);
        }
        else if (this.product_description == '' || this.product_description == undefined) {
            this.content.scrollToPoint(1500, 170, 1500);
            this.pro_desc.setFocus();
            this.util.presentToast("Enter Product Description", 'danger', 'top', 2500);
        }
        else if (this.key_fetures == '' || this.key_fetures == undefined) {
            this.content.scrollToPoint(1500, 320, 1500);
            this.key_feat.setFocus();
            this.util.presentToast("Enter Key Features", 'danger', 'top', 2500);
        }
        else if (this.manage_stock == '' || this.manage_stock == undefined) {
            //this.content.scrollToPoint(1500,1070,1500);
            this.util.presentToast("Select Manage Stock", 'danger', 'middle', 2500);
        }
        else if (this.availabile_stock_status == '' || this.availabile_stock_status == undefined) {
            this.content.scrollToBottom(0);
            this.util.presentToast("Select Stock Status", 'danger', 'bottom', 2500);
        }
        else if (this.variant_product == '' || this.variant_product == undefined) {
            this.util.presentToast("Select Product Variant", 'danger', 'bottom', 2500);
        }
        else {
            this.price_range = this.start_price_range + "-" + this.end_price_range;
            let requestProd = { action: "requestProduct", shop_id: this.shopId, name: this.product_name, cat_id: this.category, sub_cat_id: this.subcategory, key_features: this.key_fetures, description: this.product_description, product_tags: this.product_tags, type: this.type, brand: this.brand, variant_product: this.variant_product, manage_stock: this.manage_stock, price: this.price, saleprice: this.sale_price, stock: this.stock, availabile_stock_status: this.availabile_stock_status, product_status: this.product_status, imagepath: this.imagepath, offers: this.offers, price_range: this.price_range };
            this.util.showLoader();
            this.api.requestProduct((response) => {
                this.util.hideLoader();
                if (response.status == true) {
                    this.util.presentToast(response.message, 'primary', 'bottom', 2500);
                    if (this.variant_product == 'yes') {
                        this.router.navigate(['addvariant', { pid: response.product_id, page: "product" }]);
                    }
                    else {
                        this.router.navigate(['linkproducts', { pid: response.product_id, page: "product" }]);
                    }
                }
                else {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, requestProd);
        }
        /* this.util.showLoader();
         setTimeout(() => {
           this.util.hideLoader();
           this.util.presentToast('Product Requested successfully', 'success', 'bottom', 2500);
           this.router.navigate(['/shopdetails', this.shopId]);
         }, 1000); */
    }
    getItems(ev) {
        this.shopId = localStorage.getItem('fash_user_id');
        let keyword = ev.target.value;
        if (keyword == '' || keyword == undefined) {
            this.nval = 0;
        }
        else {
            let otpObj = { action: "searchProducts", keyword: keyword, shopId: this.shopId };
            this.api.searchProducts((response) => {
                this.nval = 1;
                this.products = response;
                if (this.products.length == 0) {
                    this.nval = 'false';
                }
            }, otpObj);
        }
    }
    getProductData(pid) {
        this.nval = 'false';
        let editProdObj = { action: "getSingleProduct", pid: pid };
        this.api.getProductData((response) => {
            if (response.status == true) {
                this.product_details = response.product_details;
                //alert(JSON.stringify(this.product_details));
                this.pid = response.product_details.id;
                this.product_name = response.product_details.name;
                this.category = response.product_details.cat_id;
                this.subcategory = response.product_details.sub_cat_id;
                this.product_description = response.product_details.description;
                this.key_fetures = response.product_details.key_features;
                this.product_startdate = response.product_details.selling_date;
                var str = response.product_details.product_tags;
                this.product_tags = str.split(",");
                this.meta_tag_title = response.product_details.meta_tag_title;
                this.meta_tag_description = response.product_details.meta_tag_description;
                this.meta_tag_keywords = response.product_details.meta_tag_keywords;
                this.brand = response.product_details.brand_id;
                this.no_of_days = response.product_details.no_of_days;
                this.cancel_available = response.product_details.cancel_status;
                this.return_available = response.product_details.return_status;
                this.exchangestatus = response.product_details.exchangestatus;
                this.manage_stock = response.product_details.manage_stock;
                this.variant_product = response.product_details.variant_product;
                if (this.variant_product == 'yes') {
                    this.variant = false;
                }
                else {
                    this.variant = true;
                }
                this.status = response.product_details.status;
                this.price = response.product_details.price;
                this.sale_price = response.product_details.saleprice;
                this.stock = response.product_details.stock;
                this.availabile_stock_status = response.product_details.availabile_stock_status;
            }
            else {
                //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
        }, editProdObj);
    }
    getSubcategories() {
        this.getSubCategoriesList(this.category);
        this.subcategory = '';
    }
    getSubCategoriesList(category) {
        let subcatObj = { action: "getsubcategories", catId: category };
        //alert(JSON.stringify(subcatObj));
        this.util.showLoader();
        this.api.fetchShopSubCategories((response) => {
            setTimeout(() => {
                this.util.hideLoader();
                if (response.status == true) {
                    this.sub_categories = response.subcategory_list;
                    //alert(JSON.stringify(this.sub_categories));
                }
                else {
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, 500);
        }, subcatObj);
    }
    getTax() {
        if (this.tax == 'yes') {
            this.taxname = true;
        }
        else {
            this.taxname = false;
        }
    }
    getDays() {
        if (this.cancel_available == 'yes' || this.return_available == 'yes') {
            this.showdays = true;
        }
        else if (this.cancel_available == 'no' && this.return_available == 'no') {
            this.showdays = false;
        }
    }
    getVariantProduct() {
        if (this.variant_product == 'yes') {
            this.variant = false;
        }
        else {
            this.variant = true;
        }
    }
    selectPictures() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    takePicture(sourceType) {
        this.imagePicker.getPictures({
            maximumImagesCount: 5,
            outputType: 1
        }).then(selectedImg => {
            selectedImg.forEach(i => {
                let options1 = {
                    fileKey: 'image',
                    fileName: 'name.jpg',
                    headers: {},
                    chunkedMode: false,
                    mimeType: 'image/jpg'
                };
                var params = { action: "uploadProductImages" };
                options1.params = params;
                const fileTransfer = this.transfer.create();
                fileTransfer.upload("data:image/jpeg;base64," + i, this.urlpath, options1, true).then((data) => {
                    this.imagepath.push(data.response);
                    //this.title=this.title;
                    //this.util.presentToast("Banner Changed Successfully", 'success');
                }, (err) => {
                    //alert("1 st error");
                    //alert(JSON.stringify(err));
                });
                this.images.push("data:image/jpeg;base64," + i);
            });
        });
    }
    existingProduct(catId) {
        //this.router.navigate(['/existingproduct']);
        this.router.navigate(['clone-categorieslist', { catId: catId }]);
    }
    getProductStatus() {
        if (this.product_status == 0) {
            this.showstat = false;
        }
        else {
            this.showstat = true;
        }
    }
};
RequestNewProductPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["ImagePicker"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prodName')
], RequestNewProductPage.prototype, "pName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('catName')
], RequestNewProductPage.prototype, "cName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subcatName')
], RequestNewProductPage.prototype, "subc_Name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pro_descName')
], RequestNewProductPage.prototype, "pro_desc", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('keyfeatName')
], RequestNewProductPage.prototype, "key_feat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proStartName')
], RequestNewProductPage.prototype, "pro_sdate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pro_tagName')
], RequestNewProductPage.prototype, "pro_tag", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('meta_titleName')
], RequestNewProductPage.prototype, "meta_title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('meta_descName')
], RequestNewProductPage.prototype, "meta_desc", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('meta_keywordsName')
], RequestNewProductPage.prototype, "meta_keywords", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false })
], RequestNewProductPage.prototype, "content", void 0);
RequestNewProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-new-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./request-new-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/request-new-product/request-new-product.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./request-new-product.page.scss */ "./src/app/request-new-product/request-new-product.page.scss")).default]
    })
], RequestNewProductPage);



/***/ })

}]);
//# sourceMappingURL=request-new-product-request-new-product-module-es2015.js.map