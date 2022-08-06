(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clone-categorieslist-clone-categorieslist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clone-categorieslist/clone-categorieslist.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clone-categorieslist/clone-categorieslist.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class='vendor-head'>Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div align='center' style=\"background-color:#eceaeb;\">\n    <p style=\"margin:0px 0px 0px 10px;padding:13px;color:#05274d;\">Product by categories</p>\n  </div>\n  <!-- Data to display after skeleton screen -->\n  <!-- Skeleton screen -->\n  <div *ngIf=\"nval==false\" class=\"emptybox\">\n    <img src=\"assets/images/categories.png\" style=\"margin-left:100px; padding: 8px;\" />\n    <h2 style=\"text-align: center;color: #ff6b00bf;\">No Categories Found</h2>\n  </div>\n  <!-- <ion-card *ngFor=\"let dummy of [1,2,3,4,5,6]\" style=\"border: 1px solid #c2bbbb;outline:none\">\n      <ion-card-content style=\"padding: 8px;\">\n        <ion-row>\n          <ion-col size=\"2\" style=\"text-align: center;border: 1px solid #dadada;\">\n            <ion-thumbnail>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n          </ion-col>\n          <ion-col size=\"10\" style=\"text-align: left;\">\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card> -->\n\n\n  <ion-card style=\"padding:0px;\" *ngFor=\"let c of categories\" class=\"profilecard\" (click)=\"gotoPage(c.id,c.title,shopId)\">\n    <ion-card-content style=\"padding: 5px;\">\n      <ion-row>\n        <ion-col size=\"10\" style=\"text-align: left;align-items: center;display: flex;\">\n          <h4 style=\"text-transform:none;\">{{c.title}}</h4>\n        </ion-col>\n        <ion-col size=\"2\" style=\"align-items: center;display: flex;\">\n          <img class=\"vendor-img\" src=\"{{c.image}}\" width=\"100%\" />\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/clone-categorieslist/clone-categorieslist-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/clone-categorieslist/clone-categorieslist-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CloneCategorieslistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneCategorieslistPageRoutingModule", function() { return CloneCategorieslistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clone_categorieslist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone-categorieslist.page */ "./src/app/clone-categorieslist/clone-categorieslist.page.ts");




const routes = [
    {
        path: '',
        component: _clone_categorieslist_page__WEBPACK_IMPORTED_MODULE_3__["CloneCategorieslistPage"]
    }
];
let CloneCategorieslistPageRoutingModule = class CloneCategorieslistPageRoutingModule {
};
CloneCategorieslistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CloneCategorieslistPageRoutingModule);



/***/ }),

/***/ "./src/app/clone-categorieslist/clone-categorieslist.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/clone-categorieslist/clone-categorieslist.module.ts ***!
  \*********************************************************************/
/*! exports provided: CloneCategorieslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneCategorieslistPageModule", function() { return CloneCategorieslistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _clone_categorieslist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone-categorieslist-routing.module */ "./src/app/clone-categorieslist/clone-categorieslist-routing.module.ts");
/* harmony import */ var _clone_categorieslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clone-categorieslist.page */ "./src/app/clone-categorieslist/clone-categorieslist.page.ts");







let CloneCategorieslistPageModule = class CloneCategorieslistPageModule {
};
CloneCategorieslistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clone_categorieslist_routing_module__WEBPACK_IMPORTED_MODULE_5__["CloneCategorieslistPageRoutingModule"]
        ],
        declarations: [_clone_categorieslist_page__WEBPACK_IMPORTED_MODULE_6__["CloneCategorieslistPage"]]
    })
], CloneCategorieslistPageModule);



/***/ }),

/***/ "./src/app/clone-categorieslist/clone-categorieslist.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/clone-categorieslist/clone-categorieslist.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Custom Skeleton Line Height and Margin */\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n.vendor-img {\n  border: 1px solid #f1f1f1;\n  background-color: #f1f1f1;\n  border-radius: 50%;\n  padding: 0px;\n  height: 45px;\n}\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n.profilecard {\n  box-shadow: 0px 2px 5px 3px #e2e2e2;\n  border-radius: 15px;\n  padding: 5px 2px;\n  margin-top: 10px;\n  outline: none;\n}\n.profilecard img {\n  width: 100%;\n}\n.profilecard h4 {\n  font-size: 15px;\n  color: black !important;\n  font-weight: 600;\n  margin-left: 12px;\n}\n.profilecard:first-of-type {\n  margin-top: 25px;\n}\n.emptybox {\n  margin-top: 20%;\n}\n.emptybox img {\n  width: 70%;\n  margin: auto;\n  display: block;\n}\n.emptybox h2 {\n  text-align: center;\n  color: #ff6b00bf;\n  font-weight: 600;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvbmUtY2F0ZWdvcmllc2xpc3QvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcY2xvbmUtY2F0ZWdvcmllc2xpc3RcXGNsb25lLWNhdGVnb3JpZXNsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2xvbmUtY2F0ZWdvcmllc2xpc3QvY2xvbmUtY2F0ZWdvcmllc2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQUE7RUFDSSxpQkFBQTtBQ0dKO0FEQUU7RUFDRSxrQkFBQTtBQ0dKO0FEQUU7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNHSjtBREZJO0VBQ0csV0FBQTtBQ0lQO0FERkk7RUFDSSxlQUFBO0VBQ0osdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSUo7QUREQTtFQUNFLGdCQUFBO0FDSUY7QURGQztFQUNDLGVBQUE7QUNLRjtBREpFO0VBQ0csVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTUw7QURKRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNNSCIsImZpbGUiOiJzcmMvYXBwL2Nsb25lLWNhdGVnb3JpZXNsaXN0L2Nsb25lLWNhdGVnb3JpZXNsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEN1c3RvbSBTa2VsZXRvbiBMaW5lIEhlaWdodCBhbmQgTWFyZ2luICovXHJcbi52ZW5kb3ItaGVhZHtcclxuICBmb250LXNpemU6MTZweDtcclxuICBmb250LXdlaWdodDo2MDA7XHJcbiAgcGFkZGluZy1pbmxpbmU6MHB4O1xyXG59XHJcbi52ZW5kb3ItaW1ne1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGhlaWdodDo0NXB4O1xyXG59XHJcbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4ICNlMmUyZTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaW1nIHtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG4gfVxyXG4ucHJvZmlsZWNhcmQ6Zmlyc3Qtb2YtdHlwZXtcclxuICBtYXJnaW4tdG9wOjI1cHg7XHJcbn1cclxuIC5lbXB0eWJveCB7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIGltZyB7XHJcbiAgICAgd2lkdGg6IDcwJTtcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBjb2xvcjogI2ZmNmIwMGJmO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG59IiwiLyogQ3VzdG9tIFNrZWxldG9uIExpbmUgSGVpZ2h0IGFuZCBNYXJnaW4gKi9cbi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cblxuLnZlbmRvci1pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG59XG5cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnByb2ZpbGVjYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4ICNlMmUyZTI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvZmlsZWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZWNhcmQgaDQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLnByb2ZpbGVjYXJkOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uZW1wdHlib3gge1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG4uZW1wdHlib3ggaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5lbXB0eWJveCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZjZiMDBiZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clone-categorieslist/clone-categorieslist.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/clone-categorieslist/clone-categorieslist.page.ts ***!
  \*******************************************************************/
/*! exports provided: CloneCategorieslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneCategorieslistPage", function() { return CloneCategorieslistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let CloneCategorieslistPage = class CloneCategorieslistPage {
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
        this.router.navigate(['clone-subcategories', { catId: cid, catName: title, shopId: shopId }]);
    }
};
CloneCategorieslistPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
CloneCategorieslistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clone-categorieslist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./clone-categorieslist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clone-categorieslist/clone-categorieslist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./clone-categorieslist.page.scss */ "./src/app/clone-categorieslist/clone-categorieslist.page.scss")).default]
    })
], CloneCategorieslistPage);



/***/ })

}]);
//# sourceMappingURL=clone-categorieslist-clone-categorieslist-module-es2015.js.map