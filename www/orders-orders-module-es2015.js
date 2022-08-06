(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\r\n    <ion-menu-button defaultHref slot=\"start\"></ion-menu-button>\r\n    <ion-title>Orders</ion-title>\r\n  </ion-toolbar>\r\n  <ion-segment scrollable [(ngModel)]=\"selectOrder\" name=\"selectOrder\">\r\n    <ion-segment-button value=\"pending\" (click)=\"showOrder('neworder')\">\r\n      <ion-icon name=\"reader-outline\" style=\"margin: 4px;\"></ion-icon>\r\n      New Orders\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"processing\" (click)=\"showOrder('processing')\">\r\n      <ion-icon name=\"ellipsis-horizontal-circle-outline\" style=\"margin: 4px;\"></ion-icon>\r\n      Processing\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"intransit\" (click)=\"showOrder('intransit')\">\r\n      <ion-icon name=\"ellipsis-horizontal-circle-outline\" style=\"margin: 4px;\"></ion-icon>\r\n      In-Transit\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"completed\" (click)=\"showOrder('completed')\">\r\n      <ion-icon name=\"checkmark-circle\" style=\"margin: 4px;\"></ion-icon>\r\n      History\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <!-- <div  >\r\n    <div>\r\n    <ion-card >\r\n      <ion-card-content >\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">OrderId</ion-col>\r\n          <ion-col style=\"text-align:right;\">#4445555</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Order Date</ion-col>\r\n          <ion-col style=\"text-align:right;\">23-09-2034</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Payment Type</ion-col>\r\n          <ion-col style=\"text-align:right;\">online</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Payment Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">frttg</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Order Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">active</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Amount</ion-col>\r\n          <ion-col style=\"text-align:right;\">&#8377;55555</ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-button color=\"secondary\" (click)=\"aceptOrder(ord.id)\">Accept</ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"4\">\r\n            <ion-button  color=\"danger\" (click)=\"cancelOrder(ord.id)\">Cancel</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"2\"></ion-col>\r\n     </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div  *ngIf=\"new_order==true\">\r\n    <div *ngIf=\"no_neworders1==true\">\r\n    <ion-card *ngFor=\"let ord of orders\" >\r\n      <ion-card-content >\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">OrderId</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{ord.id}}</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Order Date</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{ord.created_date}}</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Payment Type</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{ord.payment_type}}</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Payment Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{ord.payment_status}}</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Order Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{ord.service_status}}</ion-col>\r\n        </ion-row>\r\n        <ion-row (click)=\"goOrderDetails(ord.id)\">\r\n          <ion-col class=\"orderInfoKey\">Amount</ion-col>\r\n          <ion-col style=\"text-align:right;\">&#8377;{{ord.amount}}</ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"ord.is_store=='yes'\">\r\n          <ion-col class=\"orderInfoKey\">Pick Up the Store</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{ord.is_store}}</ion-col>\r\n        </ion-row>\r\n\r\n        \r\n\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-button color=\"secondary\" (click)=\"aceptOrder(ord.id)\">Accept</ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"4\">\r\n            <ion-button  color=\"danger\" (click)=\"cancelOrder(ord.id)\">Cancel</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"2\"></ion-col>\r\n     </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </div>\r\n     <ion-card *ngIf=\"no_neworders1==false\">\r\n         <h3 style=\"text-align: center;color: #e44424;font-size:16px;\">No Orders</h3>\r\n    </ion-card>\r\n  </div>\r\n\r\n   <div *ngIf=\"processing_order==true\">\r\n    <div *ngIf=\"no_processingorders1==true\">\r\n    <ion-card *ngFor=\"let pord of process_orders\">\r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">OrderId</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{pord.id}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Order Date</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{pord.created_date}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Payment Type</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{pord.payment_type}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Payment Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{pord.payment_status}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Order Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{pord.service_status}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Amount</ion-col>\r\n          <ion-col style=\"text-align:right;\">&#8377;{{pord.amount}}</ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row *ngIf=\"pord.is_store=='yes'\">\r\n          <ion-col class=\"orderInfoKey\">Pick Up the Store</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{pord.is_store}}</ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button color=\"secondary\" (click)=\"pickupOrder(pord.id)\">Pick up Order</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button  color=\"danger\"  (click)=\"goOrderDetails(pord.id)\">View</ion-button>\r\n          </ion-col>\r\n          \r\n     </ion-row>\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n    <ion-card *ngIf=\"no_processingorders1==false\">\r\n         <h3 style=\"text-align: center;color: #e44424;font-size:16px;\">No Processing Orders</h3>\r\n    </ion-card>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"transmit_order==true\">\r\n    <div *ngIf=\"no_transitorders1==true\">\r\n      \r\n    <ion-card *ngFor=\"let tord of transmit_orders\">\r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">OrderId</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{tord.id}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Order Date</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{tord.created_date}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Payment Type</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{tord.payment_type}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Payment Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{tord.payment_status}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Order Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{tord.service_status}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Amount</ion-col>\r\n          <ion-col style=\"text-align:right;\">&#8377;{{tord.amount}}</ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"tord.is_store=='yes'\">\r\n          <ion-col class=\"orderInfoKey\">Pick Up the Store</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{tord.is_store}}</ion-col>\r\n        </ion-row>\r\n\r\n         <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button color=\"secondary\" (click)=\"confirmdelivery(tord.id)\">Complete Order</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-button  color=\"danger\"  (click)=\"goOrderDetails(tord.id)\">View</ion-button>\r\n          </ion-col>\r\n         </ion-row>\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    </div>\r\n    <ion-card *ngIf=\"no_transitorders1==false\">\r\n         <h3 style=\"text-align: center;color: #e44424;font-size:16px;\">No In-Transit Orders</h3>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"completedorder==true\">\r\n    <div *ngIf=\"no_completeorders1==true\">\r\n\r\n    <ion-card *ngFor=\"let cord of completed_orders\">\r\n      <ion-card-content  (click)=\"goOrderDetails(cord.id)\">\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">OrderId</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{cord.id}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Order Date</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{cord.created_date}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Payment Type</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{cord.payment_type}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Payment Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{cord.payment_status}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Order Status</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{cord.service_status}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"orderInfoKey\">Amount</ion-col>\r\n          <ion-col style=\"text-align:right;\">&#8377;{{cord.amount}}</ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"cord.is_store=='yes'\">\r\n          <ion-col class=\"orderInfoKey\">Pick Up the Store</ion-col>\r\n          <ion-col style=\"text-align:right;\">{{cord.is_store}}</ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n    <ion-card *ngIf=\"no_completeorders1==false\">\r\n         <h3 style=\"text-align: center;color: #e44424;font-size:16px;\">No Completed Orders</h3>\r\n    </ion-card>\r\n  </div>\r\n\r\n \r\n</ion-content>");

/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/orders/orders.page.scss":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment {\n  --color: #040404;\n  /* height: 30px; */\n  border-bottom: 1px solid #05274d6e;\n  font-size: 12px;\n}\n\nion-segment-button {\n  --color: #0e0e0e;\n  --indicator-color: #e44424;\n  --background-checked: #ffffff;\n  --color-checked: #e44424;\n  --indicator-height: 3px;\n  /* min-height: 30px; */\n  text-transform: capitalize;\n  --padding-bottom: 10px;\n  --padding-top: 5px;\n  font-size: 12px;\n}\n\n.orderInfoKey {\n  font-weight: bold;\n  color: black;\n  font-size: 13px;\n}\n\n.orderData {\n  text-align: right;\n  color: black;\n  font-size: 13px;\n}\n\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXG9yZGVyc1xcb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDTSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRU47O0FEQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudHtcclxuICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChicm93biAsIGJyb3duKTsgXHJcbiAgLS1jb2xvcjogIzA0MDQwNDtcclxuICAvKiBoZWlnaHQ6IDMwcHg7ICovXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNTI3NGQ2ZTtcclxuICBmb250LXNpemU6MTJweDtcclxufVxyXG5pb24tc2VnbWVudC1idXR0b257XHJcbiAgLS1jb2xvcjogIzBlMGUwZTtcclxuICAtLWluZGljYXRvci1jb2xvcjogI2U0NDQyNDtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcclxuICAtLWNvbG9yLWNoZWNrZWQ6ICNlNDQ0MjQ7XHJcbiAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XHJcbiAgLyogbWluLWhlaWdodDogMzBweDsgKi9cclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDVweDtcclxuICBmb250LXNpemU6MTJweDtcclxufVxyXG4ub3JkZXJJbmZvS2V5e1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDsgICAgIFxyXG4gICAgICBjb2xvcjpibGFjazsgICBcclxuICAgICAgZm9udC1zaXplOjEzcHg7ICBcclxufVxyXG4ub3JkZXJEYXRhe1xyXG4gIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC1zaXplOjEzcHg7XHJcbn1cclxuLnZlbmRvci1oZWFke1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OjYwMDtcclxuICBwYWRkaW5nLWlubGluZTowcHg7XHJcbn0iLCJpb24tc2VnbWVudCB7XG4gIC0tY29sb3I6ICMwNDA0MDQ7XG4gIC8qIGhlaWdodDogMzBweDsgKi9cbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNTI3NGQ2ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAtLWNvbG9yOiAjMGUwZTBlO1xuICAtLWluZGljYXRvci1jb2xvcjogI2U0NDQyNDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gIC0tY29sb3ItY2hlY2tlZDogI2U0NDQyNDtcbiAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XG4gIC8qIG1pbi1oZWlnaHQ6IDMwcHg7ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm9yZGVySW5mb0tleSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm9yZGVyRGF0YSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/orders/orders.page.ts":
/*!***************************************!*\
  !*** ./src/app/orders/orders.page.ts ***!
  \***************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _selectdelivery_boy_selectdelivery_boy_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../selectdelivery-boy/selectdelivery-boy.page */ "./src/app/selectdelivery-boy/selectdelivery-boy.page.ts");









let OrdersPage = class OrdersPage {
    constructor(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api, modalController) {
        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.modalController = modalController;
        this.currentSegment = 'pending';
        this.no_neworders = false;
        this.no_processingorders = false;
        this.no_transitorders = false;
        this.no_completeorders = false;
    }
    ngOnInit() {
        this.selectOrder = 'pending';
        this.new_order = true;
        this.processing_order = false;
        this.transmit_order = false;
        this.completedorder = false;
        let uType = localStorage.getItem('fash_user_type');
        if (uType == 'vendor') {
            this.vendor_id = localStorage.getItem('fash_user_id');
        }
        else {
            this.vendor_id = this.actRoute.snapshot.paramMap.get('shopId');
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
    ionViewDidEnter() {
        // the root left menu should be disabled on this page
        this.getpackageReport();
        this.getOrderslist();
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
    getOrderslist() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let orderObj = { action: "getOrdersList", vendor_id: this.vendor_id };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchOrderslist((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.no_neworders1 = true;
                    this.orders = response.orders;
                    if (this.orders.length == 0) {
                        this.no_neworders1 = false;
                    }
                }
                else {
                    this.no_neworders1 = false;
                }
            }, orderObj);
        });
    }
    getProceOrdersList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let orderObj = { action: "getProcessingOrdersList", vendor_id: this.vendor_id };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchOrderslist((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.process_orders = response.orders;
                    this.no_processingorders1 = true;
                }
                else {
                    this.no_processingorders = true;
                    this.no_processingorders1 = false;
                }
            }, orderObj);
        });
    }
    getTransmitOrdersList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let orderObj = { action: "getTransmitOrdersList", vendor_id: this.vendor_id };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchOrderslist((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.transmit_orders = response.orders;
                    this.no_transitorders1 = true;
                }
                else {
                    this.no_transitorders = true;
                    this.no_transitorders1 = false;
                }
            }, orderObj);
        });
    }
    getCompletedOrdersList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let orderObj = { action: "getCompletedOrdersList", vendor_id: this.vendor_id };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchOrderslist((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.completed_orders = response.orders;
                    this.no_completeorders1 = true;
                }
                else {
                    this.no_completeorders = true;
                    this.no_completeorders1 = false;
                }
            }, orderObj);
        });
    }
    segmentChanged(event) {
        this.currentSegment = event.target.value;
    }
    showOrder(chk) {
        if (chk == 'neworder') {
            this.new_order = true;
            this.processing_order = false;
            this.transmit_order = false;
            this.completedorder = false;
            this.getOrderslist();
        }
        else if (chk == 'processing') {
            this.new_order = false;
            this.processing_order = true;
            this.transmit_order = false;
            this.completedorder = false;
            this.getProceOrdersList();
        }
        else if (chk == 'intransit') {
            this.new_order = false;
            this.processing_order = false;
            this.transmit_order = true;
            this.completedorder = false;
            this.getTransmitOrdersList();
        }
        else if (chk == 'completed') {
            this.new_order = false;
            this.processing_order = false;
            this.transmit_order = false;
            this.completedorder = true;
            this.getCompletedOrdersList();
        }
    }
    goOrderDetails(oid) {
        this.router.navigate(['orderdetails', { oid: oid }]);
    }
    aceptOrder(orderid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let aObj = { action: "acceptOrder", vendor_id: this.vendor_id, orderid: orderid };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.doacceptOrder((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    this.getOrderslist();
                    this.getProceOrdersList();
                    this.new_order = false;
                    this.processing_order = true;
                    this.transmit_order = false;
                    this.completedorder = false;
                    this.selectOrder = 'processing';
                }
                else {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, aObj);
        });
    }
    pickupOrder(orderid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let aObj = { action: "confirm_pickup", vendor_id: this.vendor_id, orderid: orderid };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.confirmPickup((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.new_order = false;
                    this.processing_order = false;
                    this.transmit_order = true;
                    this.completedorder = false;
                    this.getTransmitOrdersList();
                    this.selectOrder = 'intransit';
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
                else {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, aObj);
        });
    }
    confirmdelivery(orderid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _selectdelivery_boy_selectdelivery_boy_page__WEBPACK_IMPORTED_MODULE_8__["SelectdeliveryBoyPage"],
                componentProps: { vendor_id: this.vendor_id, orderid: orderid }
            });
            modal.onDidDismiss()
                .then((data) => {
                this.ngOnInit();
            });
            yield modal.present();
        });
    }
    cancelOrder(orderid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let caObj = { action: "cancelOrder", vendor_id: this.vendor_id, orderid: orderid };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.docancelOrder((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    this.getOrderslist();
                }
                else {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, caObj);
        });
    }
};
OrdersPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.page.scss */ "./src/app/orders/orders.page.scss")).default]
    })
], OrdersPage);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map