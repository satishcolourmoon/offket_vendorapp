function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResetpasswordResetpasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>resetpassword</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpassword-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ResetpasswordPageRoutingModule */

  /***/
  function srcAppResetpasswordResetpasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordPageRoutingModule", function () {
      return ResetpasswordPageRoutingModule;
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


    var _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resetpassword.page */
    "./src/app/resetpassword/resetpassword.page.ts");

    var routes = [{
      path: '',
      component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordPage"]
    }];

    var ResetpasswordPageRoutingModule = function ResetpasswordPageRoutingModule() {
      _classCallCheck(this, ResetpasswordPageRoutingModule);
    };

    ResetpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetpasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpassword.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/resetpassword/resetpassword.module.ts ***!
    \*******************************************************/

  /*! exports provided: ResetpasswordPageModule */

  /***/
  function srcAppResetpasswordResetpasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function () {
      return ResetpasswordPageModule;
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


    var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resetpassword-routing.module */
    "./src/app/resetpassword/resetpassword-routing.module.ts");
    /* harmony import */


    var _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resetpassword.page */
    "./src/app/resetpassword/resetpassword.page.ts");

    var ResetpasswordPageModule = function ResetpasswordPageModule() {
      _classCallCheck(this, ResetpasswordPageModule);
    };

    ResetpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordPageRoutingModule"]],
      declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]]
    })], ResetpasswordPageModule);
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpassword.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/resetpassword/resetpassword.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResetpasswordResetpasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpassword.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/resetpassword/resetpassword.page.ts ***!
    \*****************************************************/

  /*! exports provided: ResetpasswordPage */

  /***/
  function srcAppResetpasswordResetpasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function () {
      return ResetpasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResetpasswordPage = /*#__PURE__*/function () {
      function ResetpasswordPage() {
        _classCallCheck(this, ResetpasswordPage);
      }

      _createClass(ResetpasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResetpasswordPage;
    }();

    ResetpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resetpassword',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resetpassword.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpassword.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resetpassword.page.scss */
      "./src/app/resetpassword/resetpassword.page.scss"))["default"]]
    })], ResetpasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=resetpassword-resetpassword-module-es5.js.map