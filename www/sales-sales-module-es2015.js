(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-sales-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar style=\"--background: #fff;color: #000;\">\n\t\t<ion-back-button defaultHref slot=\"start\"></ion-back-button>\n\t\t<ion-title class='vendor-head'>Sale Report</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-grid style=\"padding:0px;\">\n\t\t<ion-row style=\"background-color:#05274d;\">\n\t\t\t<ion-col size=\"8\" style=\"padding-top:8px;\">\n\t\t\t\t<ion-datetime class=\"salesdate\" displayFormat=\"MM-YYYY\" [(ngModel)]=\"sdate\" name=\"sdate\" value=\"\"\n\t\t\t\t\tplaceholder=\"Select MM-YYYY\"></ion-datetime>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<ion-button class=\"salesbutton\" (click)=\"getReport()\">Get Report</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"nval == true\">\n\t\t\t<ion-col siz=\"12\" style=\"padding:0px;\">\n\t\t\t\t<div style=\"overflow-x:auto;overflow: scroll;\">\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<!-- <th>ID</th> -->\n\t\t\t\t\t\t\t<th>OrderID</th>\n\t\t\t\t\t\t\t<!-- <th>Total Type</th> -->\n\t\t\t\t\t\t\t<th>Total Price</th>\n\t\t\t\t\t\t\t<!-- <th>Admin Commission</th> -->\n\t\t\t\t\t\t\t<th> Vendor Amount</th> <!-- Vendor Amount-->\n\t\t\t\t\t\t\t<!-- <th> GST</th> -->\n\t\t\t\t\t\t\t<th> Payment Status</th>\n\t\t\t\t\t\t\t<th>Service Status</th>\n\t\t\t\t\t\t\t<th>Date</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let sale of sales\">\n\t\t\t\t\t\t\t<td (click)=\"gopage(sale.id)\">{{sale.id}}</td>\n\t\t\t\t\t\t\t<td><b>&#8377;{{sale.total_price}}</b></td>\n\t\t\t\t\t\t\t<!-- <td><b>&#8377;{{sale.admin_commission}}</b></td> -->\n\t\t\t\t\t\t\t<td><b>&#8377;{{sale.vendor_commission}}</b></td>\n\t\t\t\t\t\t\t<!-- <td><b>&#8377;{{sale.gst}}</b></td> -->\n\t\t\t\t\t\t\t<td><b>{{sale.payment_status}}</b></td>\n\t\t\t\t\t\t\t<td><b>{{sale.service_status}}</b></td>\n\t\t\t\t\t\t\t<td>{{sale.created_date}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"nval==false\">\n\t\t\t\t\t<p>No Sales</p>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n\n\n\n<!-- <ion-row *ngFor=\"let variant of variant_list\">\n\t<ion-col>\n\t\t{{variant.product}}\n\t</ion-col>\n\t<ion-col>\n\t\t{{variant.attribute_type}}\n\t</ion-col>\n\t<ion-col>\n\t\t{{variant.attribute_values}}\n\t</ion-col>\n\t<ion-col>\n\t\t<ion-button (click)=\"editVariant(variant.id,variant.attribute_type_id,variant.attribute_values_ids)\">\n\t\t\t<ion-icon name=\"create-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button (click)=\"deleteVariant(variant.id)\">\n\t\t\t<ion-icon name=\"trash-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-col>\n</ion-row> -->");

/***/ }),

/***/ "./src/app/sales/sales-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/sales/sales-routing.module.ts ***!
  \***********************************************/
/*! exports provided: SalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPageRoutingModule", function() { return SalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales.page */ "./src/app/sales/sales.page.ts");




const routes = [
    {
        path: '',
        component: _sales_page__WEBPACK_IMPORTED_MODULE_3__["SalesPage"]
    }
];
let SalesPageRoutingModule = class SalesPageRoutingModule {
};
SalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SalesPageRoutingModule);



/***/ }),

/***/ "./src/app/sales/sales.module.ts":
/*!***************************************!*\
  !*** ./src/app/sales/sales.module.ts ***!
  \***************************************/
/*! exports provided: SalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPageModule", function() { return SalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-routing.module */ "./src/app/sales/sales-routing.module.ts");
/* harmony import */ var _sales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sales.page */ "./src/app/sales/sales.page.ts");







let SalesPageModule = class SalesPageModule {
};
SalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sales_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalesPageRoutingModule"]
        ],
        declarations: [_sales_page__WEBPACK_IMPORTED_MODULE_6__["SalesPage"]]
    })
], SalesPageModule);



/***/ }),

/***/ "./src/app/sales/sales.page.scss":
/*!***************************************!*\
  !*** ./src/app/sales/sales.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.salesdate {\n  background-color: white;\n  padding: 13px 15px;\n  border-radius: 25px;\n  font-size: 12px;\n}\n\n.salesbutton {\n  --background:#fff;\n  --color:#000;\n  --border-radius:15px;\n  text-transform: none;\n  padding-left: 5px;\n  outline: none;\n}\n\nth {\n  white-space: nowrap;\n  border-right: 1px solid #cccccc;\n  text-align: left;\n  padding: 12px 12px;\n  background-color: #efefef;\n  color: #05274d;\n  font-size: 13px;\n  text-align: center;\n}\n\ntd {\n  white-space: nowrap;\n  border-right: 1px solid #d4d4d4;\n  background-color: #fafafa;\n  text-align: left;\n  padding: 11px 16px;\n  border-bottom: 3px solid #fff;\n  text-align: center;\n  font-size: 14px;\n  width: 20%;\n}\n\n.editbtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: #fff;\n  background: green;\n  border-radius: 4px;\n  margin: 2px;\n}\n\n.deletebtn {\n  font-weight: 600;\n  font-size: 20px;\n  color: #fff;\n  background: red;\n  border-radius: 4px;\n  margin: 2px;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 6px;\n  background: #fff;\n  padding: 8px 14px;\n  font-size: 14px;\n  margin: 8px 17px;\n  font-weight: 600;\n}\n\n.addvariant {\n  float: right;\n  color: #fff;\n  padding: 7px;\n  background: #f47a20;\n  border-radius: 3px;\n  font-size: 13px;\n  margin-right: 10px;\n}\n\n.addvariantbox h3 {\n  margin-left: 20px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.addvariantbox ion-select {\n  border: 1px solid #cac6c6;\n  margin: 11px 15px;\n  border-radius: 5px;\n}\n\n.addvariantbox ion-datetime {\n  border: 1px solid #cac6c6;\n  margin: 11px 15px;\n  border-radius: 5px;\n}\n\n.addvariantbox button {\n  color: #fff;\n  margin: auto;\n  display: block;\n  background: #f47a20;\n  padding: 7px 10px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcc2FsZXNcXHNhbGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2FsZXMvc2FsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSDs7QURDQTtFQUNLLHlCQUFBO0VBQ0QsV0FBQTtBQ0VKOztBREFDO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0dIOztBRERDO0VBQ0csaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0lKOztBREZDO0VBQ0UsbUJBQUE7RUFDQywrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIRTtFQUNDLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNNSDs7QURIRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNPSjs7QURMQztFQUNHLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QUROQztFQUNHLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNTSjs7QURMSztFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUVQ7O0FETks7RUFDRyx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNRUjs7QUROSztFQUNHLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1FSOztBRE5LO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUVIiLCJmaWxlIjoic3JjL2FwcC9zYWxlcy9zYWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVuZG9yLWhlYWR7XG4gICBmb250LXNpemU6MTZweDtcbiAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgIHBhZGRpbmctaW5saW5lOjBweDtcbn1cbnRhYmxlIHtcbiAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuIC5zYWxlc2RhdGV7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgcGFkZGluZzoxM3B4IDE1cHg7XG4gICBib3JkZXItcmFkaXVzOjI1cHg7XG4gICBmb250LXNpemU6MTJweDtcbiB9XG4gLnNhbGVzYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDojZmZmO1xuICAgIC0tY29sb3I6IzAwMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6MTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTpub25lO1xuICAgIHBhZGRpbmctbGVmdDo1cHg7XG4gICAgb3V0bGluZTpub25lO1xuIH1cbiB0aCB7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICBjb2xvcjogIzA1Mjc0ZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRke1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIHBhZGRpbmc6IDExcHggMTZweDtcbiAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgZm9udC1zaXplOiAxNHB4O1xuICAgd2lkdGg6IDIwJTtcbiAgfVxuXG4gIC5lZGl0YnRuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cbiAgLmRlbGV0ZWJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDJweDtcbiAgfVxuIC5wcm9kdWN0bGlzdCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiA4cHggMTdweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuIH1cbiAuYWRkdmFyaWFudCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuIH1cblxuIC5hZGR2YXJpYW50Ym94IHtcbiAgICAgaDMge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICB9XG4gICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjNmM2O1xuICAgICAgICBtYXJnaW46IDExcHggMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICB9XG4gICAgIGlvbi1kYXRldGltZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gICAgICAgIG1hcmdpbjogMTFweCAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIH1cbiAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNDdhMjA7XG4gICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgIH1cbiB9IiwiLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2FsZXNkYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEzcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2FsZXNidXR0b24ge1xuICAtLWJhY2tncm91bmQ6I2ZmZjtcbiAgLS1jb2xvcjojMDAwO1xuICAtLWJvcmRlci1yYWRpdXM6MTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG50aCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2NjY2M7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgY29sb3I6ICMwNTI3NGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDExcHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMjAlO1xufVxuXG4uZWRpdGJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uZGVsZXRlYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ucHJvZHVjdGxpc3Qge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogOHB4IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hZGR2YXJpYW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWRkdmFyaWFudGJveCBoMyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYWRkdmFyaWFudGJveCBpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhYzZjNjtcbiAgbWFyZ2luOiAxMXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGR2YXJpYW50Ym94IGlvbi1kYXRldGltZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gIG1hcmdpbjogMTFweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWRkdmFyaWFudGJveCBidXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2Y0N2EyMDtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sales/sales.page.ts":
/*!*************************************!*\
  !*** ./src/app/sales/sales.page.ts ***!
  \*************************************/
/*! exports provided: SalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPage", function() { return SalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");








let SalesPage = class SalesPage {
    constructor(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api) {
        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.vendor_id = localStorage.getItem('fash_user_id');
    }
    ionViewWillEnter() {
        this.getpackageReport();
        this.salesReport();
    }
    getpackageReport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            let catObj = { action: "vendor_package", vendor_id: this.shopId };
            this.api.getPackageReport((response) => {
                if (response.status == true) {
                    this.pack_type = response.status;
                }
                else {
                    this.router.navigate(['plans']);
                }
            }, catObj);
        });
    }
    salesReport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let salesObj = { action: "getsalesReport", vendor_id: this.vendor_id };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchSalesReport((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.sales = response.orders;
                    this.nval = true;
                }
                else {
                    this.nval = false;
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, salesObj);
        });
    }
    getReport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.sdate == '' || this.sdate == undefined) {
                this.util.presentToast("Select Date", 'danger', 'middle', 2500);
            }
            else {
                let reportObj = { action: "getDatewisesalesReport", vendor_id: this.vendor_id, sdate: this.sdate };
                let loading = yield this.loadingCtrl.create({
                    spinner: 'circles',
                    message: 'Please wait',
                });
                loading.present();
                this.api.getDatewisesalesReport((response) => {
                    loading.dismiss();
                    if (response.status == true) {
                        this.sales = response.orders;
                        this.nval = true;
                    }
                    else {
                        this.nval = false;
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, reportObj);
            }
        });
    }
    gopage(oid) {
        this.router.navigate(['orderdetails', { oid: oid }]);
    }
    ngOnInit() {
    }
};
SalesPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
SalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sales',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sales.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sales.page.scss */ "./src/app/sales/sales.page.scss")).default]
    })
], SalesPage);



/***/ })

}]);
//# sourceMappingURL=sales-sales-module-es2015.js.map