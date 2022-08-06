(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["linkproducts-linkproducts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/linkproducts/linkproducts.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/linkproducts/linkproducts.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar style=\"--background: #fff;color: #000;\">\n\t\t<ion-back-button defaultHref slot=\"start\" *ngIf=\"page!='product'\"></ion-back-button>\n\t\t<button slot=\"end\" class=\"productlist\" *ngIf=\"page=='product'\" routerLink=\"/vendor-dashboard/{{userId}}\">Back</button>\n\n\t\t<ion-title class=\"vendor-head\">Link Variant</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid style=\"padding:0px;\">\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<th>Attributes</th>\n\t\t\t\t<th> Price</th>\n\t\t\t\t<th>Stock</th>\n\t\t\t\t<th>Images</th>\n\t\t\t\t<th>Status</th>\n\t\t\t</tr>\n          <tbody style=\"height: 100px;overflow-y: scroll;\">\n\t\t\t<tr *ngFor=\"let linkv of link_variants\">\n\t\t\t\t<td>\n\t\t\t\t\t<div *ngFor=\"let attr of linkv.attributes\">\n\t\t\t\t\t\t<b>{{attr.type}} :</b> {{attr.value}}\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td style=\"font-size:12px;\">\n\t\t\t\t\t<div *ngIf=\"product_status=='no'\">\n\t\t\t\t\t\tPrice : {{linkv.price}}<br>\n\t\t\t\t\t\tSale : {{linkv.saleprice}}<br>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"product_status=='no'\" (click)=\"updatePrice(linkv.id,linkv.price,linkv.saleprice,linkv.stock)\" class=\"updatebtn\">Update Price</div>\n\t\t\t\t</td>\n\t\t\t\t<td> {{linkv.stock}}\n\t\t\t\t\t<div *ngIf=\"linkv.price!=''\" (click)=\"updateStock(linkv.id)\" class=\"updatebtn\">Update Stock</div>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{linkv.images_count}}\n\t\t\t\t\t<div (click)=\"productImages(linkv.id,linkv.product_id,linkv.clone_status)\" class=\"updatebtn\">Add Images</div>\n\t\t\t\t</td>\n\t\t\t\t<td (click)=\"changeStatus(linkv.status,linkv.id)\">\n\t\t\t\t\t<div> <!--class=\"updatebtn\"-->\n \t\t\t\t\t\t{{linkv.statusname}}\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\n\t\t\t</tr>\n</tbody>\n\n\t\t</table>\n\n\t</ion-grid>\n\n\n\n\n\n\n</ion-content>\n\n\n<!-- <ion-row style=\"background-color: #f47a20\">\n\t<ion-col>\n\t\tAttributes\n\t</ion-col>\n\t<ion-col>\n\t\tPrice\n\t</ion-col>\n\t<ion-col>\n\t\tStock\n\t</ion-col>\n\t<ion-col>\n\t\tImages\n\t</ion-col>\n\t<ion-col>\n\t\tStatus\n\t</ion-col>\n</ion-row>\n<ion-row *ngFor=\"let linkv of link_variants\">\n\n\t<ion-col *ngFor=\"let attr of linkv.attributes\">\n\t\t<b>{{attr.type}} :</b> {{attr.value}}\n\t</ion-col>\n\t<ion-col>\n\t\t<div>\n\t\t\t<b>Price : </b>{{linkv.price}}<br>\n\t\t\t<b>Sale Price : </b>{{linkv.saleprice}}<br>\n\t\t</div>\n\t\t<div *ngIf=\"linkv.price==''\" (click)=\"updatePrice(linkv.id)\">Update Price</div>\n\t</ion-col>\n\t<ion-col>\n\t\t{{linkv.stock}}\n\t\t<div (click)=\"updateStock(linkv.id)\">Update Stock</div>\n\t</ion-col>\n\n\t<ion-col>\n\t\t{{linkv.images_count}}\n\t\t<div (click)=\"productImages(linkv.id,linkv.product_id)\">Add Images</div>\n\t</ion-col>\n\n\t<ion-col (click)=\"changeStatus(linkv.status,linkv.id)\">\n\n\t\t{{linkv.statusname}}\n\t</ion-col>\n</ion-row> -->\n\n<style>\n\t.updatebtn {\n\t\tcolor: #fff;\n\t\tbackground: #05274d;\n\t\tfont-size: 7px;\n\t\t/* border: 1px solid #b9b3b3; */\n\t\tpadding: 3px;\n\t\tborder-radius:10px;\n\t}\n</style>");

/***/ }),

/***/ "./src/app/linkproducts/linkproducts-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/linkproducts/linkproducts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LinkproductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkproductsPageRoutingModule", function() { return LinkproductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _linkproducts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkproducts.page */ "./src/app/linkproducts/linkproducts.page.ts");




const routes = [
    {
        path: '',
        component: _linkproducts_page__WEBPACK_IMPORTED_MODULE_3__["LinkproductsPage"]
    }
];
let LinkproductsPageRoutingModule = class LinkproductsPageRoutingModule {
};
LinkproductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LinkproductsPageRoutingModule);



/***/ }),

/***/ "./src/app/linkproducts/linkproducts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/linkproducts/linkproducts.module.ts ***!
  \*****************************************************/
/*! exports provided: LinkproductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkproductsPageModule", function() { return LinkproductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _linkproducts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linkproducts-routing.module */ "./src/app/linkproducts/linkproducts-routing.module.ts");
/* harmony import */ var _linkproducts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./linkproducts.page */ "./src/app/linkproducts/linkproducts.page.ts");







let LinkproductsPageModule = class LinkproductsPageModule {
};
LinkproductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _linkproducts_routing_module__WEBPACK_IMPORTED_MODULE_5__["LinkproductsPageRoutingModule"]
        ],
        declarations: [_linkproducts_page__WEBPACK_IMPORTED_MODULE_6__["LinkproductsPage"]]
    })
], LinkproductsPageModule);



/***/ }),

/***/ "./src/app/linkproducts/linkproducts.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/linkproducts/linkproducts.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth {\n  border-right: 1px solid #d8d8d8;\n  text-align: left;\n  padding: 12px 3px;\n  font-size: 13px;\n  background-color: #efefef;\n  color: #05274d;\n  text-align: center;\n}\n\ntd {\n  border-right: 1px solid #d8d8d8;\n  text-align: left;\n  padding: 6px 2px;\n  text-align: center;\n  font-size: 15px;\n  border-bottom: 3px solid #fff;\n  background-color: #fafafa;\n}\n\n.productlist {\n  letter-spacing: 1px;\n  border-radius: 6px;\n  background: #fff;\n  padding: 8px 14px;\n  font-size: 14px;\n  margin: 8px 17px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlua3Byb2R1Y3RzL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXGxpbmtwcm9kdWN0c1xcbGlua3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGlua3Byb2R1Y3RzL2xpbmtwcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0kseUJBQUE7RUFDRCxXQUFBO0FDRUg7O0FEQ0E7RUFDRywrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNFSDs7QURBQztFQUNHLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURVQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2xpbmtwcm9kdWN0cy9saW5rcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlbmRvci1oZWFke1xuICBmb250LXNpemU6MTZweDtcbiAgZm9udC13ZWlnaHQ6NjAwO1xuICBwYWRkaW5nLWlubGluZTowcHg7XG59XG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgIHdpZHRoOiAxMDAlO1xuIH1cbiBcbnRoIHtcbiAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgcGFkZGluZzogMTJweCAzcHg7XG4gICBmb250LXNpemU6MTNweDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICBjb2xvcjogIzA1Mjc0ZDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gdGR7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDZweCAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO1xufVxuLy8gdHIge1xuLy8gICAgIGRpdiB7XG4vLyAgICAgICAgIHRke1xuLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMnB4O1xuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4vLyAgICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLnByb2R1Y3RsaXN0IHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDhweCAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gfSIsIi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMnB4IDNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjb2xvcjogIzA1Mjc0ZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDZweCAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLnByb2R1Y3RsaXN0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDhweCAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/linkproducts/linkproducts.page.ts":
/*!***************************************************!*\
  !*** ./src/app/linkproducts/linkproducts.page.ts ***!
  \***************************************************/
/*! exports provided: LinkproductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkproductsPage", function() { return LinkproductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stock_management_stock_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stock-management/stock-management.page */ "./src/app/stock-management/stock-management.page.ts");
/* harmony import */ var _updateprice_updateprice_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../updateprice/updateprice.page */ "./src/app/updateprice/updateprice.page.ts");









let LinkproductsPage = class LinkproductsPage {
    constructor(util, actRoute, router, api, popoverController, modalController, loadingCtrl) {
        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        this.pid = this.actRoute.snapshot.paramMap.get('pid');
        this.page = this.actRoute.snapshot.paramMap.get('page');
        this.userId = localStorage.getItem('fash_user_id');
        //this.getlink_variants(this.pid);
    }
    ionViewWillEnter() {
        this.getlink_variants(this.pid);
    }
    getlink_variants(pid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let linkvariantsObj = { action: "getlink_variants", pid: pid };
            this.link_variants = [];
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.fetchLinkVariants((response) => {
                loading.dismiss();
                if (response.status == true) {
                    this.link_variants = response.link_variants;
                    this.product_status = response.product_status;
                }
                else {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, linkvariantsObj);
        });
    }
    getlink_variants1(pid) {
        let linkvariantsObj = { action: "getlink_variants", pid: pid };
        this.link_variants = [];
        //this.util.showLoader();
        this.api.fetchLinkVariants1((response) => {
            //this.util.hideLoader();
            if (response.status == true) {
                this.link_variants = response.link_variants;
            }
            else {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
        }, linkvariantsObj);
    }
    updateStock(link_variant_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _stock_management_stock_management_page__WEBPACK_IMPORTED_MODULE_6__["StockManagementPage"],
                componentProps: { link_variant_id: link_variant_id, pid: this.pid }
            });
            modal.onDidDismiss()
                .then((data) => {
                this.link_variants = data.data;
            });
            yield modal.present();
        });
    }
    updatePrice(link_variant_id, price, saleprice, stock) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (price == "0" || price == 0) {
                this.price1 = "";
            }
            else {
                this.price1 = price;
            }
            if (saleprice == "0" || saleprice == 0) {
                this.saleprice1 = "";
            }
            else {
                this.saleprice1 = saleprice;
            }
            if (stock == "0" || stock == 0) {
                this.stock1 = "";
            }
            else {
                this.stock1 = stock;
            }
            const modal = yield this.modalController.create({
                component: _updateprice_updateprice_page__WEBPACK_IMPORTED_MODULE_7__["UpdatepricePage"],
                componentProps: { link_variant_id: link_variant_id, pid: this.pid, price: this.price1, saleprice: this.saleprice1, stock: this.stock1 }
            });
            modal.onDidDismiss()
                .then((data) => {
                //this.getlink_variants1(this.pid);
                this.link_variants = data.data;
            });
            yield modal.present();
        });
    }
    changeStatus(status, vid) {
        let changeStatusObj = { action: "changeStatus", status: status, vid: vid };
        //this.util.showLoader();
        this.api.changeStatus((response) => {
            //this.util.hideLoader();
            if (response.status == true) {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                this.getlink_variants(this.pid);
            }
            else {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
        }, changeStatusObj);
    }
    productImages(vid, product_id, clone_status) {
        if (clone_status == 'true') {
            this.util.presentToast("You didn't change the clone product images", 'danger', 'bottom', 2500);
        }
        else {
            this.router.navigate(['productimages', { vid: vid, product_id: product_id }]);
        }
    }
};
LinkproductsPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
LinkproductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-linkproducts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./linkproducts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/linkproducts/linkproducts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./linkproducts.page.scss */ "./src/app/linkproducts/linkproducts.page.scss")).default]
    })
], LinkproductsPage);



/***/ })

}]);
//# sourceMappingURL=linkproducts-linkproducts-module-es2015.js.map