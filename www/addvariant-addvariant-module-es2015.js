(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addvariant-addvariant-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addvariant/addvariant.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addvariant/addvariant.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar style=\"--background: #fff;color: #000;\">\n\n\t\t<ion-back-button defaultHref slot=\"start\" *ngIf=\"page!='product'\"></ion-back-button>\n\t\t<button slot=\"start\" class=\"productlist\" *ngIf=\"page=='product'\" routerLink=\"/vendor-dashboard/{{userId}}\">Back</button>\n\t\t<ion-title class=\"vendor-head\">Variant</ion-title>\n\t\t<!-- <button (click)=\"goProducts()\" slot=\"end\" class=\"productlist\">Products</button> -->\n\t\t<button *ngIf=\"add_variant\" (click)=\"addVariant()\" slot=\"end\" class=\"productlist\">Add Variant</button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div *ngIf=\"createvariant_status==true\" class=\"addvariantbox\">\n\t\t<h3>Add Variant</h3>\n\t\t<ion-select placeholder=\"Select Types\" name=\"att_types\" [(ngModel)]=\"att_types\" interface=\"popover\" (ionChange)=\"getAttrValues()\">\n\t\t\t<ion-select-option value=\"{{at.id}}\" *ngFor=\"let at of attr_types\">{{at.title}}</ion-select-option>\n\t\t</ion-select>\n\n\t\t<ion-select placeholder=\"Select Values\" name=\"attrib_value\" [(ngModel)]=\"attrib_value\" interface=\"popover\" multiple=\"true\">\n\t\t\t<ion-select-option value=\"{{av.id}}\" *ngFor=\"let av of attr_values\">{{av.value}}</ion-select-option>\n\t\t</ion-select>\n\t\t<button (click)=\"createVariants()\">Save</button>\n\t</div>\n\t<div *ngIf=\"updateariant_status==true\" class=\"addvariantbox\">\n\t\t<h3>Update Variant</h3>\n\t\t<ion-input type=\"hidden\" name=\"vid\" [(ngModel)]=\"vid\"></ion-input>\n\t\t\n\t\t<ion-select placeholder=\"Select Types\" name=\"edit_att_types\" [(ngModel)]=\"edit_att_types\" interface=\"popover\" (ionChange)=\"getAttrValues()\">\n\t\t\t<ion-select-option  *ngFor=\"let at of attr_types\" value=\"{{at.id}}\">{{at.title}}</ion-select-option>\n\t\t</ion-select>\n\n\n\t\t\n\n\t\t<ion-select placeholder=\"Select Values\" name=\"edit_attrib_value\" [(ngModel)]=\"edit_attrib_value\" interface=\"popover\" multiple=\"true\">\n\t\t\t<ion-select-option value=\"{{av.id}}\" *ngFor=\"let av of attr_values\">{{av.value}}</ion-select-option>\n\t\t</ion-select>\n\t\t<button (click)=\"updateVariants()\">Update</button>\n\t</div>\n\n\n\n\t<ion-grid style=\"padding:0px 0px 0px 0px;\">\n\t\t<ion-col *ngIf=\"!add_variant\" (click)=\"addVariant()\" size=\"12\" style=\"padding-top:10px;width: 100%;color:#081f65;text-align:center;display:block;margin-bottom:4%;\">\n\t\t\t<!-- <button (click)=\"addVariant()\" class=\"addvariant\"> -->\n\t\t\t\t<span style=\"font-size:18px;\">+</span>Add Variant\n\t\t\t\t<!-- <ion-icon name=\"add-circle-outline\"></ion-icon> -->\n\t\t\t<!-- </button> -->\n\t\t</ion-col>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\" style=\"padding:0px;\">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Product</th>\n\t\t\t\t\t\t<th> Types</th>\n\t\t\t\t\t\t<th>Values</th>\n\t\t\t\t\t\t<!-- <th>Action</th> -->\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngFor=\"let variant of variant_list\">\n\t\t\t\t\t\t<td>{{variant.product}}</td>\n\t\t\t\t\t\t<td>{{variant.attribute_type}}</td>\n\t\t\t\t\t\t<td>{{variant.attribute_values}}</td>\n\t\t\t\t\t\t<!-- <td>\n\t\t\t\t\t\t\t<button class=\"editbtn\"\n\t\t\t\t\t\t\t\t(click)=\"editVariant(variant.id,variant.attribute_type_id,variant.attribute_values_ids)\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"create-outline\"></ion-icon>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"deletebtn\" (click)=\"deleteVariant(variant.id)\">\n\t\t\t\t\t\t\t\t<ion-icon name=\"trash-outline\"></ion-icon>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</td> -->\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</ion-grid>\n</ion-content>\n\n\n\n<!-- <ion-row *ngFor=\"let variant of variant_list\">\n\t<ion-col>\n\t\t{{variant.product}}\n\t</ion-col>\n\t<ion-col>\n\t\t{{variant.attribute_type}}\n\t</ion-col>\n\t<ion-col>\n\t\t{{variant.attribute_values}}\n\t</ion-col>\n\t<ion-col>\n\t\t<ion-button (click)=\"editVariant(variant.id,variant.attribute_type_id,variant.attribute_values_ids)\">\n\t\t\t<ion-icon name=\"create-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button (click)=\"deleteVariant(variant.id)\">\n\t\t\t<ion-icon name=\"trash-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-col>\n</ion-row> -->");

/***/ }),

/***/ "./src/app/addvariant/addvariant-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/addvariant/addvariant-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddvariantPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddvariantPageRoutingModule", function() { return AddvariantPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addvariant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addvariant.page */ "./src/app/addvariant/addvariant.page.ts");




const routes = [
    {
        path: '',
        component: _addvariant_page__WEBPACK_IMPORTED_MODULE_3__["AddvariantPage"]
    }
];
let AddvariantPageRoutingModule = class AddvariantPageRoutingModule {
};
AddvariantPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddvariantPageRoutingModule);



/***/ }),

/***/ "./src/app/addvariant/addvariant.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addvariant/addvariant.module.ts ***!
  \*************************************************/
/*! exports provided: AddvariantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddvariantPageModule", function() { return AddvariantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addvariant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addvariant-routing.module */ "./src/app/addvariant/addvariant-routing.module.ts");
/* harmony import */ var _addvariant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addvariant.page */ "./src/app/addvariant/addvariant.page.ts");







let AddvariantPageModule = class AddvariantPageModule {
};
AddvariantPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addvariant_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddvariantPageRoutingModule"]
        ],
        declarations: [_addvariant_page__WEBPACK_IMPORTED_MODULE_6__["AddvariantPage"]]
    })
], AddvariantPageModule);



/***/ }),

/***/ "./src/app/addvariant/addvariant.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addvariant/addvariant.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  border-right: 1px solid #d8d8d8;\n  text-align: left;\n  padding: 12px 3px;\n  font-size: 13px;\n  background-color: #efefef;\n  color: #05274d;\n  text-align: center;\n}\n\ntd {\n  border-right: 1px solid #cbcbcb;\n  text-align: left;\n  padding: 6px 2px;\n  border-bottom: 3px solid #fff;\n  font-size: 11px;\n  text-align: center;\n  background-color: #fafafa;\n}\n\n.editbtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: green;\n  background: #fff;\n  border-radius: 4px;\n  margin: 2px;\n  outline: none;\n}\n\n.deletebtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: red;\n  background: #fff;\n  border-radius: 4px;\n  margin: 2px;\n  outline: none;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 10px;\n  background: #081f65;\n  color: #fff;\n  padding: 10px 14px;\n  font-size: 14px;\n  margin: 8px 17px;\n  font-weight: 600;\n  outline: none;\n}\n\n.addvariant {\n  float: right;\n  color: #fff;\n  padding: 7px;\n  background: #f47a20;\n  border-radius: 3px;\n  font-size: 13px;\n  margin-right: 10px;\n}\n\n.addvariantbox h3 {\n  margin-left: 20px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.addvariantbox ion-select {\n  border: 1px solid #cac6c6;\n  margin: 11px 15px;\n  border-radius: 20px;\n  padding: 10px 20px !important;\n  font-size: 13px;\n  outline: none;\n}\n\n.addvariantbox button {\n  color: #fff;\n  margin: auto;\n  display: block;\n  background: #081f65;\n  padding: 15px;\n  border-radius: 20px;\n  width: 100px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkdmFyaWFudC9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFxhZGR2YXJpYW50XFxhZGR2YXJpYW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkdmFyaWFudC9hZGR2YXJpYW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0g7O0FEQ0E7RUFDSyx5QkFBQTtFQUNELFdBQUE7QUNFSjs7QURDQztFQUNHLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0dKOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0lKOztBREZDO0VBQ0csbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDS0o7O0FESEM7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTUo7O0FERks7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0tUOztBREhLO0VBQ0cseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0tSOztBREhLO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0tUIiwiZmlsZSI6InNyYy9hcHAvYWRkdmFyaWFudC9hZGR2YXJpYW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW5kb3ItaGVhZHtcbiAgIGZvbnQtc2l6ZToxNnB4O1xuICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgcGFkZGluZy1pbmxpbmU6MHB4O1xufVxudGFibGUge1xuICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuIHRoIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTJweCAzcHg7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICBjb2xvcjogIzA1Mjc0ZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgdGR7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NiY2JjYjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDZweCAycHg7XG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgI2ZmZjtcbiAgICBmb250LXNpemU6MTFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7XG4gIH1cblxuICAuZWRpdGJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMnB4O1xuICAgIG91dGxpbmU6bm9uZTtcbiAgfVxuICAuZGVsZXRlYnRuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMnB4O1xuICAgIG91dGxpbmU6bm9uZTtcbiAgfVxuIC5wcm9kdWN0bGlzdCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwODFmNjU7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogOHB4IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBvdXRsaW5lOm5vbmU7XG4gfVxuIC5hZGR2YXJpYW50IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJhY2tncm91bmQ6ICNmNDdhMjA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gfVxuXG4gLmFkZHZhcmlhbnRib3gge1xuICAgICBoMyB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIH1cbiAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gICAgICAgIG1hcmdpbjogMTFweCAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgfVxuICAgICBidXR0b24ge1xuICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgIGJhY2tncm91bmQ6ICMwODFmNjU7XG4gICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgfVxuIH0iLCIudmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q4ZDhkODtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTJweCAzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgY29sb3I6ICMwNTI3NGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2JjYmNiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi5lZGl0YnRuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogZ3JlZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAycHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kZWxldGVidG4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAycHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcm9kdWN0bGlzdCB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwODFmNjU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA4cHggMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmFkZHZhcmlhbnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJhY2tncm91bmQ6ICNmNDdhMjA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5hZGR2YXJpYW50Ym94IGgzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5hZGR2YXJpYW50Ym94IGlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjNmM2O1xuICBtYXJnaW46IDExcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hZGR2YXJpYW50Ym94IGJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMDgxZjY1O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/addvariant/addvariant.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addvariant/addvariant.page.ts ***!
  \***********************************************/
/*! exports provided: AddvariantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddvariantPage", function() { return AddvariantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let AddvariantPage = class AddvariantPage {
    constructor(util, actRoute, router, api, popoverController, alertController, loadingCtrl) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.add_variant = true;
        this.createvariant_status = false;
        this.updateariant_status = false;
    }
    ngOnInit() {
        this.pid = this.actRoute.snapshot.paramMap.get('pid');
        this.page = this.actRoute.snapshot.paramMap.get('page');
        this.userId = localStorage.getItem('fash_user_id');
        this.getAttributTypes(this.pid);
        this.getVariantsList();
    }
    getAttributTypes(pid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let attributeTypeObj = { action: "getAttributeTypes", pid: this.pid };
            this.attr_types = [];
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchAttributeTypes((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.attr_types = response.attribute_types;
                    //this.nval=true;
                }
                else {
                    //this.nval=false;
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, attributeTypeObj);
        });
    }
    getAttrValues() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.attrib_value = '';
            let attributeValueObj = { action: "getAttributeValues", pid: this.pid, att_types: this.att_types };
            this.attr_values = [];
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchgetAttributeValues((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.attr_values = response.attribute_values;
                    //this.nval=true;
                }
                else {
                    //this.nval=false;
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, attributeValueObj);
        });
    }
    createVariants() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.att_types == undefined || this.att_types == "") {
                this.util.presentToast("Select Attribute Type", 'danger', 'top', 2500);
            }
            else if (this.attrib_value == undefined || this.attrib_value == "") {
                this.util.presentToast("Select Attribute Values", 'danger', 'top', 2500);
            }
            else {
                let variantObj = { action: "addvariant", pid: this.pid, att_types: this.att_types, attrib_value: this.attrib_value };
                let loading = yield this.loadingCtrl.create({
                    spinner: 'circles',
                    message: 'Please wait',
                });
                loading.present();
                this.api.addVariants((response) => {
                    loading.dismiss();
                    this.util.hideLoader();
                    if (response.status == true) {
                        this.util.presentToast(response.message, 'danger', 'top', 2500);
                        this.getVariantsList();
                        this.createvariant_status = false;
                        this.updateariant_status = false;
                        this.add_variant = true;
                    }
                    else {
                        this.util.presentToast(response.message, 'danger', 'top', 2500);
                    }
                }, variantObj);
            }
        });
    }
    getVariantsList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let variantsObj = { action: "getaddvariantList", pid: this.pid };
            this.variant_list = [];
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchVariantsList((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.variant_list = response.variant_list;
                    //this.nval=true;
                }
                else {
                    //this.nval=false;
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, variantsObj);
        });
    }
    editVariant(vid, vattr_type_id, vattr_value_ids) {
        this.vid = vid;
        this.add_variant = false;
        setTimeout(() => {
            //this.edit_attrib_value=vattr_value_ids;
            var str = vattr_value_ids;
            this.edit_attrib_value = str.split(",");
            this.edit_att_types = vattr_type_id;
            this.createvariant_status = false;
            this.updateariant_status = true;
            this.getAttributTypes(this.pid);
            this.att_types = vattr_type_id;
            this.getAttrValues();
        }, 500);
    }
    updateVariants() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*if(this.edit_att_types==undefined || this.edit_att_types=="")
            {
                this.util.presentToast("Select Attribute Type", 'danger', 'top', 2500);
            }
            else if(this.edit_attrib_value==undefined || this.attrib_value=="")
            {
               this.util.presentToast("Select Attribute Values", 'danger', 'top', 2500);
            }
            else
            { */
            let updvariantObj = { action: "updatevariant", pid: this.pid, att_types: this.edit_att_types, attrib_value: this.edit_attrib_value, vid: this.vid };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.updateVariants((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.util.presentToast(response.message, 'danger', 'top', 2500);
                    this.createvariant_status = false;
                    this.updateariant_status = false;
                    this.add_variant = true;
                    this.getVariantsList();
                }
                else {
                    //this.nval=false;
                    this.util.presentToast(response.message, 'danger', 'top', 2500);
                }
            }, updvariantObj);
            //}
        });
    }
    deleteVariant(vid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want to delete this variant',
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
                            let delvarObj = { action: "delete_variant", pid: this.pid, vid: vid };
                            this.api.deleteselVariants((response) => {
                                //loading.dismiss();
                                if (response.status == true) {
                                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                                    this.getVariantsList();
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
    addVariant() {
        this.createvariant_status = true;
        this.updateariant_status = false;
        this.add_variant = false;
    }
    goProducts() {
        this.router.navigate(['linkproducts', { pid: this.pid }]);
    }
};
AddvariantPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
AddvariantPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addvariant',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addvariant.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addvariant/addvariant.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addvariant.page.scss */ "./src/app/addvariant/addvariant.page.scss")).default]
    })
], AddvariantPage);



/***/ })

}]);
//# sourceMappingURL=addvariant-addvariant-module-es2015.js.map