(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bid-product-bid-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bid-product/bid-product.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bid-product/bid-product.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class='vendor-head'>Bid ID</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3 class=\"bid-product\">Bid Products</h3>\n\n  <ion-row style=\"font-size:15px;\" *ngFor=\"let bid of cart_products\">\n    <ion-col size=\"4\">\n      <ion-card  class=\"bid-image\">\n        <ion-card-content>\n          <img style=\"height:70px;\" src=\"{{bid.image}}\">\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"8\">\n      <h4 style=\"margin-bottom:0px;font-size:17px;\">{{bid.product_name}}</h4>\n      <p style=\"margin:0px;\" *ngFor=\"let atr of bid.attributes\"><b>{{atr.attribute_type}} :</b> {{atr.attribute_values}}</p>\n      <p style=\"color:#081f65;margin:0px;\">&#8377;{{bid.price}}</p>\n      <p style=\"color:#05274d;margin:0px;\">Quantity:{{bid.quantity}}</p>\n    </ion-col>\n  </ion-row>\n\n  <!-- <ion-row style=\"font-size:15px;\">\n    <ion-col size=\"4\">\n      <ion-card  class=\"bid-image\">\n        <ion-card-content>\n          <img style=\"height:70px;\" src=\"../../assets/images/shops/add_new.png\">\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"8\">\n      <h4 style=\"margin-bottom:0px;font-size:17px;\">Smart Phone Title</h4>\n      <p style=\"margin:0px;\">6 GB Ram</p>\n      <p style=\"color:#081f65;margin:0px;\">&#8377;8999</p>\n      <p style=\"color:#05274d;margin:0px;\">Quantity:1</p>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"font-size:15px;\">\n    <ion-col size=\"4\">\n      <ion-card  class=\"bid-image\">\n        <ion-card-content>\n          <img style=\"height:70px;\" src=\"../../assets/images/shops/add_new.png\">\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"8\">\n      <h4 style=\"margin-bottom:0px;font-size:17px;\">Smart Phone Title</h4>\n      <p style=\"margin:0px;\">6 GB Ram</p>\n      <p style=\"color:#081f65;margin:0px;\">&#8377;8999</p>\n      <p style=\"color:#05274d;margin:0px;\">Quantity:1</p>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"font-size:15px;\"> \n    <ion-col size=\"4\">\n      <ion-card  class=\"bid-image\">\n        <ion-card-content>\n          <img style=\"height:70px;\" src=\"../../assets/images/shops/add_new.png\">\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"8\">\n      <h4 style=\"margin-bottom:0px;font-size:17px;\">Smart Phone Title</h4>\n      <p style=\"margin:0px;\">6 GB Ram</p>\n      <p style=\"color:#081f65;margin:0px;\">&#8377;8999</p>\n      <p style=\"color:#05274d;margin:0px;\">Quantity:1</p>\n    </ion-col>\n  </ion-row> -->\n  <div style=\"border-top: 1px solid #d3d3d3;margin:0px 10px;\">\n  </div>\n      <ion-row style=\"text-transform: uppercase;padding:2px 10px;\"> \n        <ion-col size=\"6\" align=\"left\">\n        Sub Total\n        </ion-col>\n        <ion-col size=\"6\" align=\"right\">\n          <p style=\"margin:0px;font-weight:bold;\">&#8377;{{bidslist?.sub_total}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"text-transform: uppercase;padding:2px 10px;\"> \n        <ion-col size=\"6\" align=\"left\">\n        Delivery Amount\n        </ion-col>\n        <ion-col size=\"6\" align=\"right\">\n          <p style=\"margin:0px;font-weight:bold;\">&#8377;{{bidslist?.delivery_amount}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"text-transform: uppercase;padding:2px 10px;\"> \n        <ion-col size=\"6\" align=\"left\">\n        GST\n        </ion-col>\n        <ion-col size=\"6\" align=\"right\">\n          <p style=\"margin:0px;font-weight:bold;\">&#8377;{{bidslist?.gst}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"text-transform: uppercase;padding:2px 10px;\"> \n        <ion-col size=\"6\" align=\"left\">\n        Total Price\n        </ion-col>\n        <ion-col size=\"6\" align=\"right\">\n          <p style=\"margin:0px;font-weight:bold;\">&#8377;{{bidslist?.grand_total}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"text-transform: uppercase;background:#f2f1ed;color:#05274d;padding:2px 10px;\" *ngIf=\"bidslist?.quote_status==true\"> \n        <ion-col size=\"6\" align=\"left\">\n         Your Quote\n        </ion-col>\n        <ion-col size=\"6\" align=\"right\">\n          <p style=\"margin:0px;font-weight:bold;\">&#8377;{{bidslist?.quote_amount}}</p>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row style=\"text-transform: uppercase;color:#05274d;padding:2px 10px;\" *ngIf=\"bidslist?.quote_status==false\"> \n        <ion-col size=\"12\" align=\"left\">\n          Enter Your Total Quotation\n        </ion-col>\n        <ion-col size=\"12\">\n          <p style=\"margin:0px;font-weight:bold;\">&#8377;  <input type=\"number\" small name=\"total_amount\" [(ngModel)]=\"total_amount\" value=\"\"> </p>\n        </ion-col>\n      </ion-row>\n      <ion-button *ngIf=\"bidslist?.quote_status==false\" (click)=\"sendQuotation(bidslist?.grand_total,bidslist?.user_id)\">Send Quotation </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/bid-product/bid-product-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/bid-product/bid-product-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BidProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidProductPageRoutingModule", function() { return BidProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bid_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bid-product.page */ "./src/app/bid-product/bid-product.page.ts");




const routes = [
    {
        path: '',
        component: _bid_product_page__WEBPACK_IMPORTED_MODULE_3__["BidProductPage"]
    }
];
let BidProductPageRoutingModule = class BidProductPageRoutingModule {
};
BidProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BidProductPageRoutingModule);



/***/ }),

/***/ "./src/app/bid-product/bid-product.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bid-product/bid-product.module.ts ***!
  \***************************************************/
/*! exports provided: BidProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidProductPageModule", function() { return BidProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bid_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bid-product-routing.module */ "./src/app/bid-product/bid-product-routing.module.ts");
/* harmony import */ var _bid_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bid-product.page */ "./src/app/bid-product/bid-product.page.ts");







let BidProductPageModule = class BidProductPageModule {
};
BidProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bid_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["BidProductPageRoutingModule"]
        ],
        declarations: [_bid_product_page__WEBPACK_IMPORTED_MODULE_6__["BidProductPage"]]
    })
], BidProductPageModule);



/***/ }),

/***/ "./src/app/bid-product/bid-product.page.scss":
/*!***************************************************!*\
  !*** ./src/app/bid-product/bid-product.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bid-product {\n  background: #efefef;\n  margin: 0px;\n  padding: 10px;\n  text-align: center;\n  color: #081f65;\n}\n\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.bid-image {\n  border-radius: 15px;\n  background: #f2f1ed;\n  box-shadow: none;\n}\n\nion-button {\n  --background: #081f65;\n  width: 40%;\n  margin: 10px auto;\n  height: 45px;\n  text-transform: none;\n  display: block;\n  --border-radius:15px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlkLXByb2R1Y3QvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcYmlkLXByb2R1Y3RcXGJpZC1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYmlkLXByb2R1Y3QvYmlkLXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9iaWQtcHJvZHVjdC9iaWQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlkLXByb2R1Y3R7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzA4MWY2NTtcbn1cbi52ZW5kb3ItaGVhZHtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgcGFkZGluZy1pbmxpbmU6MHB4O1xufVxuLmJpZC1pbWFnZXtcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgYmFja2dyb3VuZDojZjJmMWVkO1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbn1cbmlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDgxZjY1O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgaGVpZ2h0OjQ1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06bm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtLWJvcmRlci1yYWRpdXM6MTVweDtcbiAgICBvdXRsaW5lOm5vbmU7XG59IiwiLmJpZC1wcm9kdWN0IHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwODFmNjU7XG59XG5cbi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cblxuLmJpZC1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYxZWQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwODFmNjU7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/bid-product/bid-product.page.ts":
/*!*************************************************!*\
  !*** ./src/app/bid-product/bid-product.page.ts ***!
  \*************************************************/
/*! exports provided: BidProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidProductPage", function() { return BidProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let BidProductPage = class BidProductPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        this.shopId = localStorage.getItem('fash_user_id');
        this.bid = this.actRoute.snapshot.paramMap.get('bid');
        this.getBids(this.bid);
    }
    getBids(bid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let catObj = { action: "getBidDetails", bid: bid, vendor_id: this.shopId };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchBidDetails((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.bidslist = response.bidslist;
                    this.cart_products = response.bidslist.cart_products;
                }
                else {
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, catObj);
        });
    }
    sendQuotation(grand_total, user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.total_amount == '' || this.total_amount == undefined) {
                this.util.presentToast("Enter Quotation", 'danger', 'middle', 2500);
            }
            else if (parseInt(this.total_amount) >= parseInt(grand_total)) {
                this.util.presentToast("Enter Minimum of Total amount", 'danger', 'middle', 2500);
            }
            else {
                let catObj = { action: "submitBidQuote", bid_id: this.bid, vendor_id: this.shopId, total_price: this.total_amount, user_id: user_id };
                let loading = yield this.loadingCtrl.create({
                    spinner: 'circles',
                    message: 'Please wait',
                });
                loading.present();
                this.api.addQuote((response) => {
                    loading.dismiss();
                    if (response.status == true) {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                        this.getBids(this.bid);
                    }
                    else {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, catObj);
            }
        });
    }
};
BidProductPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
BidProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bid-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bid-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bid-product/bid-product.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bid-product.page.scss */ "./src/app/bid-product/bid-product.page.scss")).default]
    })
], BidProductPage);



/***/ })

}]);
//# sourceMappingURL=bid-product-bid-product-module-es2015.js.map