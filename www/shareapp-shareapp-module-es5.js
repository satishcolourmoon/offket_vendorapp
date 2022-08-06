function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shareapp-shareapp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shareapp/shareapp.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shareapp/shareapp.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShareappShareappPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">Share App</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <ion-card  class=\"profilecard\">\n    <ion-card-content style=\"padding: 5px;\">\n      <ion-row>\n      \t<div class=\"div_logo\">\n      <img src=\"assets/images/share.png\" class=\"img_logo\" />\n    </div>\n\n        <ion-col size=\"10\" style=\"text-align: center;\">\n        \t<p style=\"padding: 10px; text-align: justify;\">A Community shopping and sharing thousands of amazing products</p>\n        </ion-col>\n        <ion-col size=\"12\" align='center'>\n          <ion-button class=\"sharebtn\" (click)=\"shareInfo(share_title,playstore_vendorlink)\">Share App</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/shareapp/shareapp-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shareapp/shareapp-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ShareappPageRoutingModule */

  /***/
  function srcAppShareappShareappRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareappPageRoutingModule", function () {
      return ShareappPageRoutingModule;
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


    var _shareapp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shareapp.page */
    "./src/app/shareapp/shareapp.page.ts");

    var routes = [{
      path: '',
      component: _shareapp_page__WEBPACK_IMPORTED_MODULE_3__["ShareappPage"]
    }];

    var ShareappPageRoutingModule = function ShareappPageRoutingModule() {
      _classCallCheck(this, ShareappPageRoutingModule);
    };

    ShareappPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShareappPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/shareapp/shareapp.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/shareapp/shareapp.module.ts ***!
    \*********************************************/

  /*! exports provided: ShareappPageModule */

  /***/
  function srcAppShareappShareappModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareappPageModule", function () {
      return ShareappPageModule;
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


    var _shareapp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shareapp-routing.module */
    "./src/app/shareapp/shareapp-routing.module.ts");
    /* harmony import */


    var _shareapp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shareapp.page */
    "./src/app/shareapp/shareapp.page.ts");

    var ShareappPageModule = function ShareappPageModule() {
      _classCallCheck(this, ShareappPageModule);
    };

    ShareappPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shareapp_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShareappPageRoutingModule"]],
      declarations: [_shareapp_page__WEBPACK_IMPORTED_MODULE_6__["ShareappPage"]]
    })], ShareappPageModule);
    /***/
  },

  /***/
  "./src/app/shareapp/shareapp.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/shareapp/shareapp.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppShareappShareappPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n.profilecard {\n  box-shadow: 0px 2px 5px 3px #e2e2e2;\n  border-radius: 15px;\n  padding: 5px 2px;\n  margin-top: 10px;\n  outline: none;\n}\n.profilecard img {\n  width: 100%;\n}\n.profilecard h4 {\n  font-size: 18px;\n  color: #655d5d !important;\n  font-weight: 600;\n  margin-left: 12px;\n}\n.emptybox {\n  margin-top: 20%;\n}\n.emptybox img {\n  width: 70%;\n  margin: auto;\n  display: block;\n}\n.emptybox h2 {\n  text-align: center;\n  color: #ff6b00bf;\n  font-weight: 600;\n  margin-top: 10%;\n}\n.div_logo {\n  width: 100%;\n  position: relative;\n  height: 190px;\n  margin-top: 25%;\n}\n.div_logo .img_logo {\n  width: 220px;\n  position: absolute;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n}\n.vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n.sharebtn {\n  color: #fff;\n  --background:#081f65;\n  --border-radius:15px;\n  width: 43%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVhcHAvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcc2hhcmVhcHBcXHNoYXJlYXBwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVhcHAvc2hhcmVhcHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUFBO0FBQ0E7RUFDSSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtBQ0NKO0FERUU7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0csV0FBQTtBQ0VQO0FEQUk7RUFDSSxlQUFBO0VBQ0oseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRUo7QURFQztFQUNDLGVBQUE7QUNDRjtBREFFO0VBQ0csVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRUw7QURBRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSDtBREVBO0VBQ1EsV0FBQTtFQUVBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7QUNEUjtBREdRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQ0RaO0FES0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FESUU7RUFDRSxXQUFBO0VBQVcsb0JBQUE7RUFBcUIsb0JBQUE7RUFBcUIsVUFBQTtBQ0V6RCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlYXBwL3NoYXJlYXBwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEN1c3RvbSBTa2VsZXRvbiBMaW5lIEhlaWdodCBhbmQgTWFyZ2luICovXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgfVxuICBcbiAgLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAucHJvZmlsZWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCAjZTJlMmUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4IDJweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaW1nIHtcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM2NTVkNWQgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cbiB9XG5cbiAuZW1wdHlib3gge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIGltZyB7XG4gICAgIHdpZHRoOiA3MCU7XG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgaDIge1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgY29sb3I6ICNmZjZiMDBiZjtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cbn1cblxuLmRpdl9sb2dve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiAzMHZoO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xuXG4gICAgICAgIC5pbWdfbG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC52ZW5kb3ItaGVhZHtcbiAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgcGFkZGluZy1pbmxpbmU6MHB4O1xuICB9XG4gIC5zaGFyZWJ0bntcbiAgICBjb2xvcjojZmZmOy0tYmFja2dyb3VuZDojMDgxZjY1Oy0tYm9yZGVyLXJhZGl1czoxNXB4O3dpZHRoOjQzJTtcbiAgfSIsIi8qIEN1c3RvbSBTa2VsZXRvbiBMaW5lIEhlaWdodCBhbmQgTWFyZ2luICovXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG59XG5cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnByb2ZpbGVjYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4ICNlMmUyZTI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucHJvZmlsZWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZWNhcmQgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNjU1ZDVkICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uZW1wdHlib3gge1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG4uZW1wdHlib3ggaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5lbXB0eWJveCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZjZiMDBiZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uZGl2X2xvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE5MHB4O1xuICBtYXJnaW4tdG9wOiAyNSU7XG59XG4uZGl2X2xvZ28gLmltZ19sb2dvIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA0MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udmVuZG9yLWhlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctaW5saW5lOiAwcHg7XG59XG5cbi5zaGFyZWJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6IzA4MWY2NTtcbiAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XG4gIHdpZHRoOiA0MyU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shareapp/shareapp.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/shareapp/shareapp.page.ts ***!
    \*******************************************/

  /*! exports provided: ShareappPage */

  /***/
  function srcAppShareappShareappPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareappPage", function () {
      return ShareappPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");

    var ShareappPage = /*#__PURE__*/function () {
      function ShareappPage(util, router, actRoute, loadingCtrl, actionSheetController, api, socialSharing) {
        _classCallCheck(this, ShareappPage);

        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.api = api;
        this.socialSharing = socialSharing;
      }

      _createClass(ShareappPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.share();
        }
      }, {
        key: "share",
        value: function share() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var reviewObj, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    reviewObj = {
                      action: "socialshare"
                    };
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 3:
                    loading = _context.sent;
                    loading.present();
                    this.api.fetchReviews(function (response) {
                      loading.dismiss();
                      _this.share_title = response.share_title;
                      _this.playstore_vendorlink = response.playstore_vendorlink;
                    }, reviewObj);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "shareInfo",
        value: function shareInfo(share_title, playstore_vendorlink) {
          var text = share_title;
          this.socialSharing.share(text, "", "", playstore_vendorlink).then(function () {})["catch"](function () {// Error!
          });
        }
      }]);

      return ShareappPage;
    }();

    ShareappPage.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]
      }];
    };

    ShareappPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shareapp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shareapp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shareapp/shareapp.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shareapp.page.scss */
      "./src/app/shareapp/shareapp.page.scss"))["default"]]
    })], ShareappPage);
    /***/
  }
}]);
//# sourceMappingURL=shareapp-shareapp-module-es5.js.map