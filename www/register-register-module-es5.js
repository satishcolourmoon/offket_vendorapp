function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"--background:#05274d;\">\n\n  <div class=\"div_content\">\n    <div class=\"div_logo\">\n      <img src=\"assets/images/loginlogo.png\" class=\"img_logo\" />\n    </div>\n    <div class=\"div_primary_text\">\n\n      <form [formGroup]=\"regForm\" (ngSubmit)=\"goOTP()\">\n        <div class=\"div_inner\">\n          <!-- <img src=\"assets/images/user_icon.png\" class=\"img_user\" /> -->\n          <ion-input type=\"text\" placeholder=\"Name\" id=\"textName\" formControlName=\"name\" class=\"in\" (cut)=\"$event.preventDefault()\" (copy)=\"$event.preventDefault()\" (paste)=\"$event.preventDefault()\" clearInput ></ion-input>\n        </div>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\n            Enter Name\n        </span>\n        <div class=\"div_inner\">\n          <!-- <img src=\"assets/images/user_icon.png\" class=\"img_user\" /> -->\n          <ion-input type=\"tel\" maxlength=\"10\" placeholder=\"Mobile No\" formControlName=\"mobile\" class=\"in\" clearInput ></ion-input>\n        </div>\n\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.mobile.errors?.required\">\n           Enter Mobile Number.\n         </span>\n         <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.mobile.errors?.pattern\">\n          Please provide valid Mobile number.\n         </span>\n         <span class=\"error ion-padding\" *ngIf=\"isSubmitted && (errorControl.mobile.errors?.maxlength || errorControl.mobile.errors?.minlength)\">\n          Please provide valid Mobile number.\n         </span>\n\n\n\n        <div class=\"div_inner\">\n          <!-- <img src=\"assets/images/user_icon.png\" class=\"img_user\" /> -->\n          <ion-input type=\"email\" placeholder=\"Email Address\" formControlName=\"email\" class=\"in\" clearInput ></ion-input>\n        </div>\n        <span  class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n          Enter Email Address.\n        </span>\n        <span  class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n          Please provide valid Email Address.\n        </span>\n\n        <div class=\"div_inner\">\n          <!-- <img src=\"assets/images/user_icon.png\" class=\"img_user\" /> -->\n          <ion-input type=\"text\" placeholder=\"GST Number\" formControlName=\"gst\" class=\"in\" clearInput ></ion-input>\n        </div>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.gst.errors?.required\">\n          Enter GST.\n        </span>\n\n        <div class=\"div_inner\">\n          <!-- <img src=\"assets/images/user_icon.png\" class=\"img_user\" /> -->\n          <ion-input type=\"password\" placeholder=\"Password\"  formControlName=\"password\" class=\"in\" clearInput ></ion-input>\n        </div>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n          Enter Password.\n        </span>\n\n        <div class=\"div_inner\">\n          <!-- <img src=\"assets/images/user_icon.png\" class=\"img_user\" /> -->\n          <ion-input type=\"password\" placeholder=\"Confirm Password\" formControlName=\"cpassword\" class=\"in\" clearInput ></ion-input>\n        </div>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.cpassword.errors?.required\">\n          Enter Confirm Password.\n        </span>\n\n        <div class=\"div_inner\">\n          <!-- <img src=\"assets/images/user_icon.png\" class=\"img_user\" /> -->\n          <ion-input type=\"text\" placeholder=\"Agent Code\" formControlName=\"rcode\" class=\"in\" clearInput ></ion-input>\n        </div>\n\n        <div class=\"div_btn\" align='center'>\n          <ion-button type=\"submit\" class=\"btn_login\" expand=\"block\" mode=\"ios\">Create Now</ion-button>\n        </div>\n      </form>\n      <div align='center' style=\"padding-bottom:10px;\">\n        <p class=\"account\">Already have an account?</p>\n        <div (click)=\"goLogin()\">\n          <p class=\"create\" >Login</p>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_content {\n  width: 100%;\n  height: 65vh;\n}\n.div_content .div_logo {\n  width: 100%;\n  position: relative;\n  height: 100px;\n  margin-top: 20%;\n}\n.div_content .div_logo .img_logo {\n  width: 220px;\n  position: absolute;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n}\n.div_content .div_primary_text {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.div_content .div_primary_text .div_inner {\n  margin-top: 20px;\n  height: 50px;\n  width: 100%;\n  border-radius: 20px;\n  position: relative;\n  border: 1px solid #fff;\n  color: #05274d;\n  background: #e8f0fe;\n}\n.div_content .div_primary_text .div_inner .img_user {\n  width: 15px;\n  position: absolute;\n  left: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.div_content .div_primary_text .div_inner .in {\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 19px;\n  letter-spacing: 1px;\n}\n.div_content .div_primary_text .div_btn {\n  width: 100%;\n  margin-top: 20px;\n  position: relative;\n}\n.div_content .div_primary_text .div_btn .btn_login {\n  color: white;\n  --background: #e44424;\n  height: 55px;\n  font-size: 21px;\n  width: 65%;\n  text-transform: none;\n  --border-radius: 25px;\n  letter-spacing: 1px;\n}\n.account {\n  margin-top: 30px;\n  color: white;\n  margin-bottom: 0px;\n  letter-spacing: 1px;\n}\n.create {\n  margin-top: 7px;\n  color: #e44424;\n  letter-spacing: 1px;\n}\nspan {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBaUJJLFdBQUE7RUFDQSxZQUFBO0FDZko7QURGSTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0FDRVI7QURBUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUNFWjtBREdJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtFQUNELGNBQUE7RUFDUCxtQkFBQTtBQ0ZKO0FESVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDRmhCO0FESVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRmhCO0FES1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0haO0FES1k7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNIaEI7QURRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRE9BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0pKO0FET0E7RUFBTSxVQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X2NvbnRlbnR7XG4gICAgLmRpdl9sb2dve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiAzMHZoO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuXG4gICAgICAgIC5pbWdfbG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY1dmg7XG4gICAgLmRpdl9wcmltYXJ5X3RleHR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgXG4gICAgICAgIC5kaXZfaW5uZXJ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgIGNvbG9yOiAjMDUyNzRkO1xuICAgIGJhY2tncm91bmQ6ICNlOGYwZmU7XG4gICAgXG4gICAgICAgICAgICAuaW1nX3VzZXJ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1JTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGl2X2J0bntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmJ0bl9sb2dpbntcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZTQ0NDI0O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmFjY291bnR7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOjFweDtcbn1cbi5jcmVhdGV7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIGNvbG9yOiAjZTQ0NDI0O1xuICAgIGxldHRlci1zcGFjaW5nOjFweDtcbn1cblxuc3BhbnsgY29sb3I6IHJlZDsgfSIsIi5kaXZfY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY1dmg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuLmRpdl9jb250ZW50IC5kaXZfbG9nbyAuaW1nX2xvZ28ge1xuICB3aWR0aDogMjIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDQwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9wcmltYXJ5X3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmRpdl9jb250ZW50IC5kaXZfcHJpbWFyeV90ZXh0IC5kaXZfaW5uZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjMDUyNzRkO1xuICBiYWNrZ3JvdW5kOiAjZThmMGZlO1xufVxuLmRpdl9jb250ZW50IC5kaXZfcHJpbWFyeV90ZXh0IC5kaXZfaW5uZXIgLmltZ191c2VyIHtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9wcmltYXJ5X3RleHQgLmRpdl9pbm5lciAuaW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDUlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9wcmltYXJ5X3RleHQgLmRpdl9idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdl9jb250ZW50IC5kaXZfcHJpbWFyeV90ZXh0IC5kaXZfYnRuIC5idG5fbG9naW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogI2U0NDQyNDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBmb250LXNpemU6IDIxcHg7XG4gIHdpZHRoOiA2NSU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5hY2NvdW50IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jcmVhdGUge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGNvbG9yOiAjZTQ0NDI0O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(router, loadingController, fb, util, api, modalController, menu, loadingCtrl) {
        _classCallCheck(this, RegisterPage);

        this.router = router;
        this.loadingController = loadingController;
        this.fb = fb;
        this.util = util;
        this.api = api;
        this.modalController = modalController;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.tokenId = localStorage.getItem('token');
        this.regForm = this.fb.group({
          action: "vendor_registration",
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
          mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$')]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          gst: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
          cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
          rcode: ['']
        });
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('#textName').keypress(function (e) {
            var regex = new RegExp("^[a-zA-Z]+$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);

            if (regex.test(str)) {
              return true;
            } else {
              e.preventDefault();
              this["this"].regForm.value.firstname = "";
              alert('Please Enter Alphabate');
              return false;
            }
          });
        }
      }, {
        key: "goLogin",
        value: function goLogin() {
          this.router.navigate(['login']);
        }
      }, {
        key: "goOTP",
        value: function goOTP() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loginObj, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    loginObj = this.regForm.value;
                    this.isSubmitted = true;

                    if (this.regForm.valid) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return", false);

                  case 6:
                    if (!(this.regForm.value.mobile.toString().length !== 10)) {
                      _context.next = 11;
                      break;
                    }

                    this.util.presentToast('Enter a valid mobile number', 'danger', 'bottom', 2500);
                    return _context.abrupt("return", false);

                  case 11:
                    if (!(this.regForm.value.password.length < 6)) {
                      _context.next = 16;
                      break;
                    }

                    this.util.presentToast('Password should be minimum of 6 digits', 'danger', 'bottom', 2500);
                    return _context.abrupt("return", false);

                  case 16:
                    if (!(this.regForm.value.password !== this.regForm.value.cpassword)) {
                      _context.next = 21;
                      break;
                    }

                    this.util.presentToast('Your passwords do not match', 'danger', 'bottom', 2500);
                    return _context.abrupt("return", false);

                  case 21:
                    _context.next = 23;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 23:
                    loading = _context.sent;
                    loading.present();
                    this.api.dosignup(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this.router.navigate(['otp', {
                          user_id: response.user_id,
                          phone: _this.regForm.value.mobile
                        }]);

                        _this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      } else {
                        _this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, loginObj, this.tokenId);

                  case 26:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.regForm.controls;
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
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
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map