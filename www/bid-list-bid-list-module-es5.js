function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bid-list-bid-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bid-list/bid-list.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bid-list/bid-list.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBidListBidListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">My Bid Requests</ion-title>\n  </ion-toolbar>\n  <ion-segment scrollable class=\"bid\" name=\"bidRequest\" [(ngModel)]=\"bidRequest\">\n    <ion-segment-button value=\"openBid\" (click)=\"goBid('openBid')\">\n      <ion-label>Open Bid</ion-label>\n    </ion-segment-button>\n    <!-- <ion-segment-button value=\"accepted\" (click)=\"goBid('accepted')\">\n      <ion-label>Accepted</ion-label>\n    </ion-segment-button> -->\n    <ion-segment-button value=\"closed\" (click)=\"goBid('closed')\">\n      <ion-label>Closed</ion-label> \n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"bidRequest\">\n    <div *ngSwitchCase=\"'openBid'\">\n\n      <ion-card class=\"bid-card\" (click)=\"bidProductList(bid.id)\" *ngFor=\"let bid of bidslist\">\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"6\" align=\"left\">\n              Bid ID\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\">\n              #{{bid.id}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\" align=\"left\">\n              No of Products\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\">\n              {{bid.total_products}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\" align=\"left\">\n              Date & Time\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\">\n              {{bid.created_at}}\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"border-top:1px solid #707070\">\n            <ion-col size=\"6\" align=\"left\">\n              Bid Status\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\" style=\"color:#081f65;\">\n              {{bid.bidstatus}}\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n\n       <ion-card class=\"bid-card\" *ngIf=\"nval==false\">\n          <ion-card-content>\n            <ion-row>\n                <ion-col>\n                  <h3 style=\"text-align: center;color: red;\">No Bids</h3>\n                </ion-col>\n            </ion-row>\n          </ion-card-content>\n       </ion-card>\n\n    </div>\n\n    <div *ngSwitchCase=\"'accepted'\">\n      <ion-card class=\"bid-card\" (click)=\"bidProductList(bid.id)\" *ngFor=\"let bid of bidslist\">\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"6\" align=\"left\">\n              Bid ID\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\">\n              #{{bid.id}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\" align=\"left\">\n              No of Products\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\">\n              {{bid.total_products}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\" align=\"left\">\n              Date & Time\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\">\n              {{bid.created_at}}\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"border-top:1px solid #707070\">\n            <ion-col size=\"6\" align=\"left\">\n              Bid Status\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\" style=\"color:#1f9412;\">\n              {{bid.bidstatus}}\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n       <ion-card class=\"bid-card\" *ngIf=\"nval==false\">\n          <ion-card-content>\n            <ion-row>\n                <ion-col>\n                  <h3 style=\"text-align: center;color: red;\">No Accepted Bids</h3>\n                </ion-col>\n            </ion-row>\n          </ion-card-content>\n       </ion-card>\n      \n      \n    </div>\n\n    <div *ngSwitchCase=\"'closed'\">\n      <ion-card class=\"bid-card\" (click)=\"bidProductList(bid.id)\" *ngFor=\"let bid of bidslist\">\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"6\" align=\"left\">\n              Bid ID\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\">\n              #{{bid.id}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\" align=\"left\">\n              No of Products\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\">\n              {{bid.total_products}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\" align=\"left\">\n              Date & Time\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\">\n              {{bid.created_at}}\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"border-top:1px solid #707070\">\n            <ion-col size=\"6\" align=\"left\">\n              Bid Status\n            </ion-col>\n            <ion-col size=\"6\" align=\"right\" style=\"color:#f02d3a;\">\n              {{bid.bidstatus}}\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n       <ion-card class=\"bid-card\" *ngIf=\"nval==false\">\n          <ion-card-content>\n            <ion-row>\n                <ion-col>\n                  <h3 style=\"text-align: center;color: red;\">No Closed Bids</h3>\n                </ion-col>\n            </ion-row>\n          </ion-card-content>\n       </ion-card>\n    </div>\n    \n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/bid-list/bid-list-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/bid-list/bid-list-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: BidListPageRoutingModule */

  /***/
  function srcAppBidListBidListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidListPageRoutingModule", function () {
      return BidListPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _bid_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bid-list.page */
    "./src/app/bid-list/bid-list.page.ts");

    var routes = [{
      path: '',
      component: _bid_list_page__WEBPACK_IMPORTED_MODULE_3__["BidListPage"]
    }];

    var BidListPageRoutingModule = function BidListPageRoutingModule() {
      _classCallCheck(this, BidListPageRoutingModule);
    };

    BidListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BidListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/bid-list/bid-list.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/bid-list/bid-list.module.ts ***!
    \*********************************************/

  /*! exports provided: BidListPageModule */

  /***/
  function srcAppBidListBidListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidListPageModule", function () {
      return BidListPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _bid_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bid-list-routing.module */
    "./src/app/bid-list/bid-list-routing.module.ts");
    /* harmony import */


    var _bid_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bid-list.page */
    "./src/app/bid-list/bid-list.page.ts");

    var BidListPageModule = function BidListPageModule() {
      _classCallCheck(this, BidListPageModule);
    };

    BidListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bid_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BidListPageRoutingModule"]],
      declarations: [_bid_list_page__WEBPACK_IMPORTED_MODULE_6__["BidListPage"]]
    })], BidListPageModule);
    /***/
  },

  /***/
  "./src/app/bid-list/bid-list.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/bid-list/bid-list.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBidListBidListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.bid {\n  background: #081f65;\n}\n\n.bid ion-segment-button {\n  --color:#fff;\n  margin: 10px;\n  height: 32px;\n  min-height: 32px;\n  border-radius: 20px;\n  text-transform: none;\n  --indicator-color:none;\n  --background-checked:#fff;\n  --color-checked:#05274d !important;\n}\n\n.bid-card {\n  color: #000;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlkLWxpc3QvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcYmlkLWxpc3RcXGJpZC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYmlkLWxpc3QvYmlkLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvYmlkLWxpc3QvYmlkLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlbmRvci1oZWFke1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBwYWRkaW5nLWlubGluZTowcHg7XG4gIH1cblxuLmJpZHtcbiAgICBiYWNrZ3JvdW5kOiAjMDgxZjY1O1xufVxuLmJpZCBpb24tc2VnbWVudC1idXR0b257XG4gICAgLS1jb2xvcjojZmZmO1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIGhlaWdodDozMnB4O1xuICAgIG1pbi1oZWlnaHQ6MzJweDtcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06bm9uZTtcbiAgICAtLWluZGljYXRvci1jb2xvcjpub25lO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiNmZmY7XG4gICAgLS1jb2xvci1jaGVja2VkOiMwNTI3NGQgIWltcG9ydGFudDtcbn1cbi5iaWQtY2FyZHtcbiAgICBjb2xvcjojMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcbn0iLCIudmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbi5iaWQge1xuICBiYWNrZ3JvdW5kOiAjMDgxZjY1O1xufVxuXG4uYmlkIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3I6I2ZmZjtcbiAgbWFyZ2luOiAxMHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWluZGljYXRvci1jb2xvcjpub25lO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDojZmZmO1xuICAtLWNvbG9yLWNoZWNrZWQ6IzA1Mjc0ZCAhaW1wb3J0YW50O1xufVxuXG4uYmlkLWNhcmQge1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/bid-list/bid-list.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/bid-list/bid-list.page.ts ***!
    \*******************************************/

  /*! exports provided: BidListPage */

  /***/
  function srcAppBidListBidListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidListPage", function () {
      return BidListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BidListPage = /*#__PURE__*/function () {
      function BidListPage(util, actRoute, router, api, popoverController, loadingCtrl) {
        _classCallCheck(this, BidListPage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
      }

      _createClass(BidListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bidRequest = "openBid";
          this.getBids(this.bidRequest);
        }
      }, {
        key: "goBid",
        value: function goBid(status) {
          this.bidRequest = status;
          this.getBids(this.bidRequest);
        }
      }, {
        key: "getBids",
        value: function getBids(bidRequest) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var catObj, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.shopId = localStorage.getItem('fash_user_id');
                    catObj = {
                      action: "requestbidslist",
                      vendor_id: this.shopId,
                      bid_status: bidRequest
                    };
                    _context.next = 4;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 4:
                    loading = _context.sent;
                    loading.present();
                    this.api.fetchBidslist(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this.bidslist = response.bidslist;
                        _this.nval = true;
                      } else {
                        _this.nval = false;
                        _this.bidslist = []; //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, catObj);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "bidProductList",
        value: function bidProductList(id) {
          this.router.navigate(['bid-product', {
            bid: id
          }]);
        }
      }]);

      return BidListPage;
    }();

    BidListPage.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    BidListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bid-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bid-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bid-list/bid-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bid-list.page.scss */
      "./src/app/bid-list/bid-list.page.scss"))["default"]]
    })], BidListPage);
    /***/
  }
}]);
//# sourceMappingURL=bid-list-bid-list-module-es5.js.map