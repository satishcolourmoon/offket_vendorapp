function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userreviews-userreviews-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/userreviews/userreviews.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userreviews/userreviews.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserreviewsUserreviewsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">User Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-grid>\n\t<ion-card *ngFor=\"let review of reviews\" style=\"border-radius:15px;color:#000;\">\n\t\t<ion-card-content>\n\t\t\t<ion-row size=\"12\"><!--style=\"border-bottom: 1px solid #ccc;\"-->\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<!-- <ion-avatar style=\"margin-bottom: 10px;\">\n\t\t\t\t\t\t   <img src=\"{{review.user_image}}\">\n\t   \n\t\t\t\t\t\t </ion-avatar> -->\n\t\t\t\t\t\t <b>{{review.name}}</b>\n\t\t\t\t\t\t <div class=\"rating\" *ngIf=\"review.rating==5\">\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\" *ngIf=\"review.rating==4\">\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\" *ngIf=\"review.rating==3\">\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\" *ngIf=\"review.rating==2\">\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\" *ngIf=\"review.rating==1\">\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p style=\"margin:2px;\">{{review.review}}</p>\n\t\t\t\t\t\t<!-- <p style=\"margin:2px;\">{{review.createdat}}</p> -->\n\t\t\t\t</ion-col>\n\t\t\t\t<!-- <ion-col size=\"1\">\n\t\t\t\t\t<div align='right'>\n\t\t\t\t\t\t<ion-icon name=\"trash\" style=\"font-size:18px;color:#f11313\"></ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col> -->\n\t\t   </ion-row>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<!-- <ion-card style=\"border-radius:15px;color:#000;\">\n\t\t<ion-card-content>\n\t\t\t<ion-row size=\"12\">\n\t\t\t\t<ion-col size=\"11\">\n\t\t\t\t\t\t <b>Test</b>\n\t\t\t\t\t\t <div class=\"rating\">\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t\t<ion-icon name=\"star\"></ion-icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p style=\"margin:2px;\">This is review This is review This is review This is review</p>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"1\">\n\t\t\t\t\t<div align='right'>\n\t\t\t\t\t\t<ion-icon name=\"trash\" style=\"font-size:18px;color:#f11313\"></ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t   </ion-row>\n\t\t</ion-card-content>\n\t</ion-card> -->\n\t\n\t<ion-row size=\"12\" style=\"border-bottom: 1px solid #ccc; text-align: center;color: #05274d\" *ngIf=\"nval==false\">\n\t\t <ion-col >\n\t\t \t<h3 style=\"font-size:16px;\">No User Reviews</h3>\n\t\t </ion-col>\n\t</ion-row>\n\n  \n\n</ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/userreviews/userreviews-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/userreviews/userreviews-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: UserreviewsPageRoutingModule */

  /***/
  function srcAppUserreviewsUserreviewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserreviewsPageRoutingModule", function () {
      return UserreviewsPageRoutingModule;
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


    var _userreviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userreviews.page */
    "./src/app/userreviews/userreviews.page.ts");

    var routes = [{
      path: '',
      component: _userreviews_page__WEBPACK_IMPORTED_MODULE_3__["UserreviewsPage"]
    }];

    var UserreviewsPageRoutingModule = function UserreviewsPageRoutingModule() {
      _classCallCheck(this, UserreviewsPageRoutingModule);
    };

    UserreviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserreviewsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/userreviews/userreviews.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/userreviews/userreviews.module.ts ***!
    \***************************************************/

  /*! exports provided: UserreviewsPageModule */

  /***/
  function srcAppUserreviewsUserreviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserreviewsPageModule", function () {
      return UserreviewsPageModule;
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


    var _userreviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./userreviews-routing.module */
    "./src/app/userreviews/userreviews-routing.module.ts");
    /* harmony import */


    var _userreviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./userreviews.page */
    "./src/app/userreviews/userreviews.page.ts");

    var UserreviewsPageModule = function UserreviewsPageModule() {
      _classCallCheck(this, UserreviewsPageModule);
    };

    UserreviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _userreviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserreviewsPageRoutingModule"]],
      declarations: [_userreviews_page__WEBPACK_IMPORTED_MODULE_6__["UserreviewsPage"]]
    })], UserreviewsPageModule);
    /***/
  },

  /***/
  "./src/app/userreviews/userreviews.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/userreviews/userreviews.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserreviewsUserreviewsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rating {\n  --background: #f47a20;\n  color: #f47a20;\n}\n\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnJldmlld3MvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcdXNlcnJldmlld3NcXHVzZXJyZXZpZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXNlcnJldmlld3MvdXNlcnJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdXNlcnJldmlld3MvdXNlcnJldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGluZ3tcblx0LS1iYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuXHRjb2xvcjojZjQ3YTIwO1xufVxuLnZlbmRvci1oZWFke1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBwYWRkaW5nLWlubGluZTowcHg7XG59IiwiLnJhdGluZyB7XG4gIC0tYmFja2dyb3VuZDogI2Y0N2EyMDtcbiAgY29sb3I6ICNmNDdhMjA7XG59XG5cbi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/userreviews/userreviews.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/userreviews/userreviews.page.ts ***!
    \*************************************************/

  /*! exports provided: UserreviewsPage */

  /***/
  function srcAppUserreviewsUserreviewsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserreviewsPage", function () {
      return UserreviewsPage;
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

    var UserreviewsPage = /*#__PURE__*/function () {
      function UserreviewsPage(util, actRoute, router, api, popoverController, loadingCtrl, alertController) {
        _classCallCheck(this, UserreviewsPage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
      }

      _createClass(UserreviewsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vendor_id = localStorage.getItem('fash_user_id');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getpackageReport();
          this.vendorReviews();
        }
      }, {
        key: "getpackageReport",
        value: function getpackageReport() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var catObj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.shopId = localStorage.getItem('fash_user_id');
                    catObj = {
                      action: "vendor_package",
                      vendor_id: this.shopId
                    };
                    this.api.getPackageReport(function (response) {
                      if (response.status == true) {
                        _this.pack_type = response.status;
                      } else {
                        _this.router.navigate(['plans']);
                      }
                    }, catObj);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "vendorReviews",
        value: function vendorReviews() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var reviewObj, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    reviewObj = {
                      action: "vendorReview",
                      vendor_id: this.vendor_id
                    };
                    _context2.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context2.sent;
                    loading.present();
                    this.api.fetchReviews(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this2.reviews = response.reviews;
                        _this2.nval = true;
                      } else {
                        _this2.nval = false;

                        _this2.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, reviewObj);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return UserreviewsPage;
    }();

    UserreviewsPage.ctorParameters = function () {
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
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    UserreviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userreviews',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userreviews.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/userreviews/userreviews.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./userreviews.page.scss */
      "./src/app/userreviews/userreviews.page.scss"))["default"]]
    })], UserreviewsPage);
    /***/
  }
}]);
//# sourceMappingURL=userreviews-userreviews-module-es5.js.map