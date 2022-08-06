function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addoffers-addoffers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/addoffers/addoffers.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addoffers/addoffers.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddoffersAddoffersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class='vendor-head'>Add Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"addproductContainer\">\n    <div>\n      <p style=\"text-align: center;\"> If you want clone existing Offer Click</p>\n      <ion-button color=\"danger\" (click)=\"existingOffer()\">New</ion-button>\n    </div>\n\n      <ion-input type=\"text\" name=\"title\" [(ngModel)]=\"title\" placeholder=\"Enter Title\" ></ion-input>\n\n        <ion-select placeholder=\"Select Category\" name=\"cat_id\" [(ngModel)]=\"cat_id\" style=\"height:45px\">\n\t\t\t<ion-select-option value=\"{{at.id}}\" *ngFor=\"let at of category_list\">{{at.title}}</ion-select-option>\n\t\t</ion-select>\n\n      <p (click)=\"changeImage()\" class=\"selectimagecls\">Select Image <ion-icon name=\"image-outline\" class=\"selecticon\"></ion-icon></p>\n      <section>\n        <ion-datetime placeholder=\"Start Date\" [(ngModel)]=\"start_date\" [min]=\"date\" max=\"2030-12-30\" style=\"padding: 12px 15px !important;\"></ion-datetime>\n        <ion-icon style=\"float:right;margin-top:-47px;margin-right:20px;\" name=\"calendar-outline\"></ion-icon>\n      </section>\n      \n      <section>\n        <ion-datetime placeholder=\"End Date\" [(ngModel)]=\"end_date\" [min]=\"date\" max=\"2030-12-30\" style=\"padding: 12px 15px !important;\"></ion-datetime>\n        <ion-icon style=\"float:right;margin-top:-47px;margin-right:20px;\" name=\"calendar-outline\"></ion-icon>\n      </section>\n\n      <img *ngIf=\"image!=''\" style=\"width: 100px; height: 100px;\" src=\"{{image}}\">\n\n       <ion-button  *ngIf=\"id=='add'\" (click)=\"addBanner()\">Add Offer</ion-button>\n      <ion-button  *ngIf=\"id!='add'\" (click)=\"updateBanner()\">Update Offer</ion-button> \n  </div>\n</ion-content>\n\n<style>\n  \n</style>";
    /***/
  },

  /***/
  "./src/app/addoffers/addoffers-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/addoffers/addoffers-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AddoffersPageRoutingModule */

  /***/
  function srcAppAddoffersAddoffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddoffersPageRoutingModule", function () {
      return AddoffersPageRoutingModule;
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


    var _addoffers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addoffers.page */
    "./src/app/addoffers/addoffers.page.ts");

    var routes = [{
      path: '',
      component: _addoffers_page__WEBPACK_IMPORTED_MODULE_3__["AddoffersPage"]
    }];

    var AddoffersPageRoutingModule = function AddoffersPageRoutingModule() {
      _classCallCheck(this, AddoffersPageRoutingModule);
    };

    AddoffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddoffersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/addoffers/addoffers.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/addoffers/addoffers.module.ts ***!
    \***********************************************/

  /*! exports provided: AddoffersPageModule */

  /***/
  function srcAppAddoffersAddoffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddoffersPageModule", function () {
      return AddoffersPageModule;
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


    var _addoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addoffers-routing.module */
    "./src/app/addoffers/addoffers-routing.module.ts");
    /* harmony import */


    var _addoffers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addoffers.page */
    "./src/app/addoffers/addoffers.page.ts");

    var AddoffersPageModule = function AddoffersPageModule() {
      _classCallCheck(this, AddoffersPageModule);
    };

    AddoffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddoffersPageRoutingModule"]],
      declarations: [_addoffers_page__WEBPACK_IMPORTED_MODULE_6__["AddoffersPage"]]
    })], AddoffersPageModule);
    /***/
  },

  /***/
  "./src/app/addoffers/addoffers.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/addoffers/addoffers.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddoffersAddoffersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.addproductContainer {\n  padding: 15px 25px;\n}\n\n.addproductContainer ion-input, .addproductContainer ion-select, .addproductContainer ion-textarea, .addproductContainer ion-datetime {\n  margin-bottom: 15px;\n  border: 1px solid #bebdbcd4;\n  border-radius: 20px;\n  padding: 3px 15px !important;\n  background: #fbfafa45;\n  font-size: 13px;\n  outline: none;\n}\n\n.addproductContainer ion-button {\n  --background: #081f65;\n  width: 55%;\n  margin: 10px auto;\n  height: 45px;\n  text-transform: none;\n  display: block;\n  --border-radius:15px;\n  outline: none;\n}\n\n.addproductContainer .images {\n  background-color: #ccc;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n}\n\n.selectimagecls {\n  background: #081f65;\n  color: #ffc;\n  padding: 14px 10px;\n  text-align: center;\n  border-radius: 10px;\n  font-size: 18px;\n}\n\n.selecticon {\n  font-size: 21px;\n  position: absolute;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkb2ZmZXJzL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXGFkZG9mZmVyc1xcYWRkb2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkb2ZmZXJzL2FkZG9mZmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDSTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NSOztBRENJO0VBQ1EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDQ1o7O0FEQ0k7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ0NSOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkZG9mZmVycy9hZGRvZmZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlbmRvci1oZWFke1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBwYWRkaW5nLWlubGluZTowcHg7XHJcbn1cclxuXHJcbi5hZGRwcm9kdWN0Q29udGFpbmVye1xyXG4gICAgcGFkZGluZzoxNXB4IDI1cHg7XHJcblxyXG4gICAgaW9uLWlucHV0LCAgaW9uLXNlbGVjdCwgaW9uLXRleHRhcmVhLGlvbi1kYXRldGltZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWJkYmNkNDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZiZmFmYTQ1O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzA4MWY2NTtcclxuICAgICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDo0NXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTpub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuICAgIC5pbWFnZXN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWxlY3RpbWFnZWNscyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDgxZjY1O1xyXG4gICAgY29sb3I6ICNmZmM7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuc2VsZWN0aWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9IiwiLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG4uYWRkcHJvZHVjdENvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbn1cbi5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi1pbnB1dCwgLmFkZHByb2R1Y3RDb250YWluZXIgaW9uLXNlbGVjdCwgLmFkZHByb2R1Y3RDb250YWluZXIgaW9uLXRleHRhcmVhLCAuYWRkcHJvZHVjdENvbnRhaW5lciBpb24tZGF0ZXRpbWUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmViZGJjZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDNweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmYmZhZmE0NTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmFkZHByb2R1Y3RDb250YWluZXIgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzA4MWY2NTtcbiAgd2lkdGg6IDU1JTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJvcmRlci1yYWRpdXM6MTVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hZGRwcm9kdWN0Q29udGFpbmVyIC5pbWFnZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2VsZWN0aW1hZ2VjbHMge1xuICBiYWNrZ3JvdW5kOiAjMDgxZjY1O1xuICBjb2xvcjogI2ZmYztcbiAgcGFkZGluZzogMTRweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNlbGVjdGljb24ge1xuICBmb250LXNpemU6IDIxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/addoffers/addoffers.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/addoffers/addoffers.page.ts ***!
    \*********************************************/

  /*! exports provided: AddoffersPage */

  /***/
  function srcAppAddoffersAddoffersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddoffersPage", function () {
      return AddoffersPage;
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
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");

    var AddoffersPage = /*#__PURE__*/function () {
      function AddoffersPage(util, actRoute, router, api, popoverController, loadingCtrl, camera, actionSheetController, file, transfer, crop) {
        _classCallCheck(this, AddoffersPage);

        this.util = util;
        this.actRoute = actRoute;
        this.router = router;
        this.api = api;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.transfer = transfer;
        this.crop = crop;
        this.croppedImagepath = "";
        this.imagePickerOptions = {
          maximumImagesCount: 1,
          quality: 50
        };
        this.urlpath = 'https://offket.com/api/Vendor_api/user';
        this.date = new Date().toISOString();
      }

      _createClass(AddoffersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.actRoute.snapshot.paramMap.get('id');
          this.image = this.actRoute.snapshot.paramMap.get('image');
          this.imagefile = this.actRoute.snapshot.paramMap.get('imagefile');
          this.title = this.actRoute.snapshot.paramMap.get('title');
          this.cat_id = this.actRoute.snapshot.paramMap.get('cat_id');
          this.start_date = this.actRoute.snapshot.paramMap.get('start_date');
          this.end_date = this.actRoute.snapshot.paramMap.get('end_date');
          this.getcategories();
        }
      }, {
        key: "getcategories",
        value: function getcategories() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var catObj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.shopId = localStorage.getItem('fash_user_id');
                    catObj = {
                      action: "getcategories",
                      user_id: this.shopId
                    };
                    this.api.getCategories(function (response) {
                      if (response.status == true) {
                        _this.category_list = response.category_list;
                      } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
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
        key: "changeImage",
        value: function changeImage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      cssClass: 'signupbtn',
                      buttons: [{
                        text: 'Upload Photo',
                        role: 'destructive',
                        icon: 'ios-image',
                        handler: function handler() {
                          _this2.takePicture2(0);
                        }
                      }, {
                        text: 'Camera',
                        role: 'destructive',
                        icon: 'ios-camera',
                        handler: function handler() {
                          _this2.takePicture2(1);
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "takePicture2",
        value: function takePicture2(sourceType) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var options, optionss;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    options = {
                      quality: 100,
                      targetHeight: 650,
                      targetWidth: 650,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true
                    };

                    if (sourceType == '1') {
                      this.camera.getPicture(options).then(function (imageData) {
                        _this3.filepath2(imageData);
                      }, function (err) {});
                    } else {
                      optionss = {
                        quality: 100,
                        targetHeight: 650,
                        targetWidth: 650,
                        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                        destinationType: this.camera.DestinationType.FILE_URI
                      };
                      this.camera.getPicture(optionss).then(function (imageData) {
                        //alert(JSON.stringify(imageData));
                        _this3.filepath2(imageData);
                      }, function (err) {
                        alert(JSON.stringify("Something went wrong,please try again"));
                      });
                    }

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "filepath2",
        value: function filepath2(imgurl) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var options1, params, fileTransfer;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    options1 = {
                      fileKey: 'image',
                      fileName: 'name.jpg',
                      headers: {},
                      chunkedMode: false,
                      mimeType: 'image/jpg'
                    };
                    this.util.showLoader();
                    params = {
                      action: "uploadOffer"
                    };
                    options1.params = params;
                    fileTransfer = this.transfer.create();
                    fileTransfer.upload(imgurl, this.urlpath, options1, true).then(function (data) {
                      _this4.util.hideLoader();

                      _this4.imagepath = data.response;
                      _this4.title = _this4.title;

                      _this4.util.presentToast("Image selected", 'success');
                    }, function (err) {
                      //alert("1 st error");
                      alert(JSON.stringify(err));
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "addBanner",
        value: function addBanner() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var catObj, loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.shopId = localStorage.getItem('fash_user_id');

                    if (!(this.title == '' || this.title == undefined)) {
                      _context5.next = 5;
                      break;
                    }

                    this.util.presentToast("Enter Title", 'danger', 'top', 2500);
                    _context5.next = 27;
                    break;

                  case 5:
                    if (!(this.cat_id == '' || this.cat_id == undefined)) {
                      _context5.next = 9;
                      break;
                    }

                    this.util.presentToast("Select Category", 'danger', 'top', 2500);
                    _context5.next = 27;
                    break;

                  case 9:
                    if (!(this.imagepath == '' || this.imagepath == undefined)) {
                      _context5.next = 13;
                      break;
                    }

                    this.util.presentToast("Select Image", 'danger', 'top', 2500);
                    _context5.next = 27;
                    break;

                  case 13:
                    if (!(this.start_date == '' || this.start_date == undefined)) {
                      _context5.next = 17;
                      break;
                    }

                    this.util.presentToast("Select Start Date", 'danger', 'top', 2500);
                    _context5.next = 27;
                    break;

                  case 17:
                    if (!(this.end_date == '' || this.end_date == undefined)) {
                      _context5.next = 21;
                      break;
                    }

                    this.util.presentToast("Select End Date", 'danger', 'top', 2500);
                    _context5.next = 27;
                    break;

                  case 21:
                    catObj = {
                      action: "addoffer",
                      vendor_id: this.shopId,
                      title: this.title,
                      imagepath: this.imagepath,
                      cat_id: this.cat_id,
                      start_date: this.start_date,
                      end_date: this.end_date
                    };
                    _context5.next = 24;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 24:
                    loading = _context5.sent;
                    loading.present();
                    this.api.addOffer(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this5.util.presentToast(response.message, 'danger', 'bottom', 2500);

                        _this5.router.navigate(['offers']);
                      } else {
                        _this5.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, catObj);

                  case 27:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "updateBanner",
        value: function updateBanner() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var catObj, loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.shopId = localStorage.getItem('fash_user_id');

                    if (!(this.title == '' || this.title == undefined)) {
                      _context6.next = 5;
                      break;
                    }

                    this.util.presentToast("Enter Coupon", 'danger', 'top', 2500);
                    _context6.next = 12;
                    break;

                  case 5:
                    if (this.imagepath == '' || this.imagepath == undefined) {
                      this.update_image = this.imagefile;
                    } else {
                      this.update_image = this.imagepath;
                    } //alert(JSON.stringify(this.imagepath));


                    catObj = {
                      action: "updateoffer",
                      vendor_id: this.shopId,
                      title: this.title,
                      imagepath: this.update_image,
                      id: this.id,
                      cat_id: this.cat_id,
                      start_date: this.start_date,
                      end_date: this.end_date
                    };
                    _context6.next = 9;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 9:
                    loading = _context6.sent;
                    loading.present();
                    this.api.updateOfferdata(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this6.util.presentToast(response.message, 'danger', 'bottom', 2500);

                        _this6.router.navigate(['offers']);
                      } else {
                        _this6.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, catObj);

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "existingOffer",
        value: function existingOffer() {
          this.router.navigate(['/existingoffers']);
        }
      }]);

      return AddoffersPage;
    }();

    AddoffersPage.ctorParameters = function () {
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
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]
      }];
    };

    AddoffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addoffers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addoffers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/addoffers/addoffers.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addoffers.page.scss */
      "./src/app/addoffers/addoffers.page.scss"))["default"]]
    })], AddoffersPage);
    /***/
  }
}]);
//# sourceMappingURL=addoffers-addoffers-module-es5.js.map