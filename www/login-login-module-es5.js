function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"--background:#05274d;\">\n\n  <div class=\"div_content\">\n    <div class=\"div_logo\">\n      <img src=\"assets/images/loginlogo.png\" class=\"img_logo\" />\n    </div>\n    <!-- <h3 style=\"text-align: center;color:#ffa500a1;\">VisualMerchant/Vendor Login</h3> -->\n    <p align='center' class=\"wel\">Welcome back to Offket<br/>\n      Just entry your credentials and<br/>\n      you are ready to go</p>\n    <div class=\"div_primary_text\">\n\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" autocomplete=\"something\">\n        <div class=\"div_inner\">\n          <!-- <img src=\"assets/images/user_icon.png\" class=\"img_user\" /> -->\n          <ion-input type=\"tel\" maxlength=\"10\" Placeholder=\"Mobile Number\" [(ngModel)]=\"user_name\" class=\"in\" formControlName=\"user_name\" clearInput ></ion-input>\n        </div>\n\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user_name.errors?.required\">\n      Mobile number is required.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.user_name.errors?.pattern\">\n    Please enter 10 digits Mobile Number.\n    </span>\n\n\n        <div class=\"div_inner\">\n          <!-- <img src=\"assets/images/lock.png\" class=\"img_user\" /> -->\n          <ion-input [type]=\"passwordType\" Placeholder=\"Password\" class=\"in\" [(ngModel)]=\"password\" formControlName=\"password\" ></ion-input>\n\n        </div>\n        <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n      Password is required.\n    </span>\n      <div>\n        <ion-label class=\"lbl_forgot\" (click)=\"goForgotPassword()\">Forgot Password?</ion-label>\n      </div>\n       <!--  <ion-radio-group formControlName=\"user_type\" [(ngModel)]=\"user_type\">\n          \n          <ion-row>\n\n            <ion-col>\n              <ion-item>\n                <ion-radio mode=\"md\" item-left value=\"visual_merchant\"></ion-radio>\n                <ion-label>&nbsp;&nbsp;Visual Merchant</ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col>\n              <ion-item>\n                <ion-radio mode=\"md\" item-left value=\"vendor\"></ion-radio>\n                <ion-label>&nbsp;&nbsp;Vendor</ion-label>\n              </ion-item>\n            </ion-col>\n\n          </ion-row>\n\n        </ion-radio-group> -->\n\n\n        <div class=\"div_btn\" align='center'>\n          <ion-button type=\"submit\" class=\"btn_login\" expand=\"block\" mode=\"ios\">Login</ion-button>\n        </div>\n        <!-- <ion-label class=\"lbl_forgot\" (click)=\"goForgotPassword()\">Forgot Password?</ion-label> -->\n      </form>\n\n      <div align='center' style=\"padding-bottom:10px;\">\n        <p class=\"account\">Don't have an account?</p>\n        <div (click)=\"goRegister()\">\n          <p class=\"create\" >Create Now</p>\n        </div>\n        \n      </div>\n\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_content {\n  width: 100%;\n  height: 65vh;\n}\n.div_content .div_logo {\n  width: 100%;\n  position: relative;\n  height: 100px;\n  margin-top: 20%;\n}\n.div_content .div_logo .img_logo {\n  width: 220px;\n  position: absolute;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n}\n.div_content .div_segment {\n  width: 100%;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.div_content .div_segment .lbl_segment {\n  margin-bottom: 5px;\n  font-family: Exo2-Bold;\n}\n.div_content .div_segment ion-segment-button {\n  border-style: unset;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n.div_content .div_segment ion-segment {\n  --background-hover: none !important;\n  --color: var(--ion-color-text);\n  --color-checked: var(--ion-color-primary);\n  --color-checked-disabled: var(--color-checked);\n  border-bottom: 1px solid lightgray;\n  --background-activated: transparent !important;\n  --background-checked: transparent !important;\n  margin-top: 0px;\n}\n.div_content .div_segment .segment-button-indicator {\n  background-color: var(--ion-color-primary);\n}\n.div_content .div_primary_text {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.div_content .div_primary_text .div_inner {\n  margin-top: 20px;\n  height: 50px;\n  width: 100%;\n  border-radius: 20px;\n  position: relative;\n  border: 1px solid #fff;\n  color: #05274d;\n  background: #e8f0fe;\n}\n.div_content .div_primary_text .div_inner .img_user {\n  width: 15px;\n  position: absolute;\n  left: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.div_content .div_primary_text .div_inner .in {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 19px;\n  letter-spacing: 1px;\n}\n.div_content .div_primary_text .lbl_forgot {\n  font-size: 14px;\n  display: block;\n  text-align: right;\n  margin-top: 15px;\n  color: #fff;\n  letter-spacing: 1px;\n}\n.div_content .div_primary_text .div_btn {\n  width: 100%;\n  margin-top: 20px;\n  position: relative;\n}\n.div_content .div_primary_text .div_btn .btn_login {\n  color: white;\n  --background: #e44424;\n  height: 55px;\n  font-size: 21px;\n  width: 65%;\n  text-transform: none;\n  --border-radius: 25px;\n  letter-spacing: 1px;\n}\n.div_content .div_primary_text h2 {\n  overflow: hidden;\n  text-align: center;\n}\n.div_content .div_primary_text .div_or {\n  width: 100%;\n  margin-top: 20px;\n}\n.div_content .div_primary_text .div_or .lbl_or {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 15px;\n}\n.div_content .div_primary_text .div_or .img_line {\n  width: 100%;\n  height: 1px;\n  margin-top: 7px;\n  background-color: var(--ion-color-dark) !important;\n}\n.div_content .div_primary_text .div_social {\n  margin-top: 15px;\n}\n.div_content .div_primary_text .div_social .img_fb {\n  width: 50px;\n}\n.div_content .div_primary_text .div_social .img_twit {\n  width: 50px;\n}\n.div_content .div_primary_text .div_social .img_gplus {\n  width: 50px;\n}\n.div_content .div_primary_text .lbl_create {\n  text-align: center;\n  display: block;\n  font-weight: bold;\n  color: var(--ion-color-darl);\n  font-size: 16px;\n  margin-top: 10px;\n}\n.account {\n  margin-top: 30px;\n  color: white;\n  margin-bottom: 0px;\n  letter-spacing: 1px;\n}\n.create {\n  margin-top: 7px;\n  color: #e44424;\n  letter-spacing: 1px;\n}\n.wel {\n  color: #fff;\n  letter-spacing: 3px;\n  font-size: 17px;\n  line-height: 28px;\n}\nion-radio {\n  --color-checked: #e44424;\n}\n.error {\n  color: red;\n}\n.passwordIcon {\n  font-size: 1.5rem !important;\n  position: relative !important;\n  top: -41px !important;\n  margin: 0 auto !important;\n  left: 88%;\n  z-index: 9999;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBaUJJLFdBQUE7RUFDQSxZQUFBO0FDaEJKO0FEREk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FDQ1o7QURLSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURLUTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUNIWjtBREtRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNIWjtBREtRO0VBQ0ksbUNBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0VBQ0EsOENBQUE7RUFDQSxrQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FDSFo7QURLUTtFQUNJLDBDQUFBO0FDSFo7QURPSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTFI7QURPUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDRCxjQUFBO0VBQ1AsbUJBQUE7QUNOSjtBRE9ZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0xoQjtBRE9ZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0xoQjtBRFFRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDTlo7QURRUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTlo7QURRWTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ05oQjtBRFNRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ1BaO0FEV1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNUWjtBRFdZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ1RoQjtBRFdZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7QUNUaEI7QURZUTtFQUNJLGdCQUFBO0FDVlo7QURXWTtFQUNJLFdBQUE7QUNUaEI7QURZWTtFQUNJLFdBQUE7QUNWaEI7QURZWTtFQUNJLFdBQUE7QUNWaEI7QURjUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNaWjtBRGdCQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNiSjtBRGVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1pKO0FEY0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNYSjtBRGNBO0VBQ0ksd0JBQUE7QUNYSjtBRGFBO0VBQ0ksVUFBQTtBQ1ZKO0FEYUE7RUFDRyw0QkFBQTtFQUNDLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGl2X2NvbnRlbnR7XG4gICAgLmRpdl9sb2dve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiAzMHZoO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuXG4gICAgICAgIC5pbWdfbG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY1dmg7XG5cbiAgICAuZGl2X3NlZ21lbnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG5cbiAgICAgICAgLmxibF9zZWdtZW50e1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEV4bzItQm9sZDtcbiAgICAgICAgfVxuICAgICAgICBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgICAgICBib3JkZXItc3R5bGUgOiB1bnNldDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1zZWdtZW50e1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyIDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1jb2xvciA6IHZhcigtLWlvbi1jb2xvci10ZXh0KTtcbiAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZCA6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZC1kaXNhYmxlZCA6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlZ21lbnQtYnV0dG9uLWluZGljYXRvcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgIDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdl9wcmltYXJ5X3RleHR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgLmRpdl9pbm5lcntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVmO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgY29sb3I6ICMwNTI3NGQ7XG4gICAgYmFja2dyb3VuZDogI2U4ZjBmZTtcbiAgICAgICAgICAgIC5pbWdfdXNlcntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNSU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5sYmxfZm9yZ290e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdl9idG57XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5idG5fbG9naW57XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2U0NDQyNDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICBcbiAgICAgICAgLmRpdl9vcntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgICAgICAgLmxibF9vcntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZ19saW5le1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kaXZfc29jaWFse1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIC5pbWdfZmJ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nX3R3aXR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nX2dwbHVze1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxibF9jcmVhdGV7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJsKTs7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmFjY291bnR7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOjFweDtcbn1cbi5jcmVhdGV7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIGNvbG9yOiAjZTQ0NDI0O1xuICAgIGxldHRlci1zcGFjaW5nOjFweDtcbn1cbi53ZWx7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbmlvbi1yYWRpb3tcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNlNDQ0MjQ7XG59XG4uZXJyb3J7XG4gICAgY29sb3I6cmVkO1xufVxuXG4ucGFzc3dvcmRJY29ue1xuICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IC00MXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgICBsZWZ0OiA4OCU7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBjb2xvcjogIzAwMDtcbn0iLCIuZGl2X2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NXZoO1xufVxuLmRpdl9jb250ZW50IC5kaXZfbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cbi5kaXZfY29udGVudCAuZGl2X2xvZ28gLmltZ19sb2dvIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA0MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmRpdl9jb250ZW50IC5kaXZfc2VnbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9zZWdtZW50IC5sYmxfc2VnbWVudCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1mYW1pbHk6IEV4bzItQm9sZDtcbn1cbi5kaXZfY29udGVudCAuZGl2X3NlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXN0eWxlOiB1bnNldDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5kaXZfY29udGVudCAuZGl2X3NlZ21lbnQgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRleHQpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvci1jaGVja2VkLWRpc2FibGVkOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X3NlZ21lbnQgLnNlZ21lbnQtYnV0dG9uLWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5kaXZfY29udGVudCAuZGl2X3ByaW1hcnlfdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9wcmltYXJ5X3RleHQgLmRpdl9pbm5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICMwNTI3NGQ7XG4gIGJhY2tncm91bmQ6ICNlOGYwZmU7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9wcmltYXJ5X3RleHQgLmRpdl9pbm5lciAuaW1nX3VzZXIge1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5kaXZfY29udGVudCAuZGl2X3ByaW1hcnlfdGV4dCAuZGl2X2lubmVyIC5pbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNSU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X3ByaW1hcnlfdGV4dCAubGJsX2ZvcmdvdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X3ByaW1hcnlfdGV4dCAuZGl2X2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9wcmltYXJ5X3RleHQgLmRpdl9idG4gLmJ0bl9sb2dpbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZTQ0NDI0O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgd2lkdGg6IDY1JTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X3ByaW1hcnlfdGV4dCBoMiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXZfY29udGVudCAuZGl2X3ByaW1hcnlfdGV4dCAuZGl2X29yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9wcmltYXJ5X3RleHQgLmRpdl9vciAubGJsX29yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmRpdl9jb250ZW50IC5kaXZfcHJpbWFyeV90ZXh0IC5kaXZfb3IgLmltZ19saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xufVxuLmRpdl9jb250ZW50IC5kaXZfcHJpbWFyeV90ZXh0IC5kaXZfc29jaWFsIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X3ByaW1hcnlfdGV4dCAuZGl2X3NvY2lhbCAuaW1nX2ZiIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9wcmltYXJ5X3RleHQgLmRpdl9zb2NpYWwgLmltZ190d2l0IHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9wcmltYXJ5X3RleHQgLmRpdl9zb2NpYWwgLmltZ19ncGx1cyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmRpdl9jb250ZW50IC5kaXZfcHJpbWFyeV90ZXh0IC5sYmxfY3JlYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFybCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmFjY291bnQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmNyZWF0ZSB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgY29sb3I6ICNlNDQ0MjQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi53ZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZTQ0NDI0O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFzc3dvcmRJY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTQxcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgbGVmdDogODglO1xuICB6LWluZGV4OiA5OTk5O1xuICBjb2xvcjogIzAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_globalevents_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/globalevents.service */
    "./src/app/services/globalevents.service.ts");
    /* harmony import */


    var _forgotpassword_forgotpassword_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../forgotpassword/forgotpassword.page */
    "./src/app/forgotpassword/forgotpassword.page.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, loadingController, globalEvents, fb, util, api, modalController, menu) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.loadingController = loadingController;
        this.globalEvents = globalEvents;
        this.fb = fb;
        this.util = util;
        this.api = api;
        this.modalController = modalController;
        this.menu = menu;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.tokenId = localStorage.getItem('token'); //alert(JSON.stringify(this.tokenId));

        this.user_type = "vendor";
      }

      _createClass(LoginPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          // the root left menu should be disabled on this page
          this.menu.enable(false);
          this.user_name = "";
          this.password = "";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.fb.group({
            action: "login",
            user_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            user_type: ['vendor', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
          });
        }
      }, {
        key: "hideShowPassword",
        value: function hideShowPassword() {
          this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
          this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }, {
        key: "signin",
        value: function signin() {
          var _this = this;

          this.showLoader();
          setTimeout(function () {
            _this.hideLoader();

            _this.router.navigate(['home']);
          }, 1000);
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Please wait...'
                    });

                  case 2:
                    this.loadingSpinner = _context.sent;
                    _context.next = 5;
                    return this.loadingSpinner.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          if (this.loadingSpinner) {
            this.loadingSpinner.dismiss();
          }

          return;
        }
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          var loginObj = this.loginForm.value;
          this.isSubmitted = true;

          if (!this.loginForm.valid) {
            //alert('Please provide all the required values!')
            return false;
          } else {
            this.util.showLoader();
            this.api.doLoginUser(function (response) {
              _this2.util.hideLoader();

              if (response.status == true) {
                var user_id = response.user_id;
                localStorage.setItem('fash_user_id', user_id);
                localStorage.setItem('fash_user_type', loginObj.user_type);
                localStorage.setItem('mobile', response.phone);
                localStorage.setItem('image', response.image);
                var publishData = {
                  'loggedIn': true,
                  'user_type': loginObj.user_type,
                  'name': response.name,
                  'mobile': response.phone,
                  'userId': response.user_id,
                  'image': response.image
                };

                if (loginObj.user_type == 'vendor') {
                  publishData.name = response.shop_name;
                  localStorage.setItem('name', response.shop_name);
                } else {
                  localStorage.setItem('name', response.name);
                }

                _this2.globalEvents.publishEventData(publishData);

                if (loginObj.user_type == 'vendor') {
                  _this2.router.navigate(['/vendor-dashboard', response.user_id], {
                    state: {}
                  });
                }
              } else {
                _this2.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
            }, loginObj, this.tokenId);
          }
        }
      }, {
        key: "goForgotPassword",
        value: function goForgotPassword() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _forgotpassword_forgotpassword_page__WEBPACK_IMPORTED_MODULE_8__["ForgotpasswordPage"],
                      componentProps: {
                        user_type: this.user_type
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (data) {});
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goRegister",
        value: function goRegister() {
          this.router.navigate(['register']);
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _services_globalevents_service__WEBPACK_IMPORTED_MODULE_7__["GlobalEventsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map