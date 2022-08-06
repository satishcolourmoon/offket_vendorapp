function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editproduct-editproduct-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/editproduct/editproduct.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editproduct/editproduct.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditproductEditproductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">Update Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-input type=\"hidden\" name=\"pid\" [(ngModel)]=\"pid\"></ion-input>\n  <div class=\"addproductContainer\">\n    <ion-label position=\"floating\">Product Name *</ion-label>\n    <ion-input name=\"product_name\" [(ngModel)]=\"product_name\" placeholder=\"Enter Product Name\"  readonly style=\"background: #ccc;\"></ion-input>\n\n\n    <!-- <ion-label position=\"floating\">Category *</ion-label>\n    <ion-select placeholder=\"Select Category\" name=\"category\" [(ngModel)]=\"category\" (ionChange)=\"getSubcategories()\" style=\"padding:12px 20px !important; background: #ccc;\"  readonly>\n      <ion-select-option value=\"{{c.id}}\" *ngFor=\"let c of categories\">{{c.title}}</ion-select-option>\n    </ion-select>\n\n    <ion-label position=\"floating\">Sub Category *</ion-label>\n    <ion-select placeholder=\"Select Sub Category\" name=\"subcategory\" [(ngModel)]=\"subcategory\" style=\"padding:12px 20px !important; background: #ccc;\" readonly>\n      <ion-select-option value=\"{{sc.id}}\" *ngFor=\"let sc of sub_categories\">{{sc.title}}</ion-select-option>\n    </ion-select>\n    <ion-label position=\"floating\">Brand</ion-label>\n    <ion-select placeholder=\"Select Brand\" name=\"brand\" [(ngModel)]=\"brand\" style=\"padding:12px 20px !important; background: #ccc;\" readonly>\n      <ion-select-option value=\"{{brd.id}}\" *ngFor=\"let brd of brands\">{{brd.brand_name}}</ion-select-option>\n    </ion-select> \n\n    <ion-label position=\"floating\">Product Description *</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" name=\"product_description\" [(ngModel)]=\"product_description\"\n      placeholder=\"Product Description\" #pro_descName style=\"background: #ccc;\" readonly></ion-textarea>\n\n      <ion-label position=\"floating\">Key Features *</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" name=\"key_fetures\" [(ngModel)]=\"key_fetures\" placeholder=\"Key Features\"\n      #keyfeatName style=\"background: #ccc;\" readonly></ion-textarea>\n\n    <ion-label position=\"floating\">Product Tags *</ion-label>\n    <ion-select name=\"product_tags\" [(ngModel)]=\"product_tags\" placeholder=\"Select Product Tags\" multiple=\"true\" style=\"padding:12px 20px !important; background: #ccc;\" readonly>\n      <ion-select-option value=\"{{tag.title}}\" *ngFor=\"let tag of tags\">{{tag.title}}</ion-select-option>\n    </ion-select>\n -->\n\n    \n\n    \n\n\n\n    <ion-label position=\"floating\">Return Available </ion-label>\n    <ion-select placeholder=\"Return Available\" name=\"return_available\" [(ngModel)]=\"return_available\" (ionChange)=\"getDays()\" style=\"padding:12px 20px !important;\">\n      <ion-select-option value=\"yes\">Yes</ion-select-option>\n      <ion-select-option value=\"no\">No</ion-select-option>\n    </ion-select>\n\n    <div *ngIf=\"showdays=='true'\">\n      <ion-label position=\"floating\">Number of Days </ion-label>\n            <ion-input name=\"no_of_days\" [(ngModel)]=\"no_of_days\" placeholder=\"Return Number of Days\"></ion-input>\n       </div> \n\n       <!-- <ion-label position=\"floating\">Manage Stock </ion-label>\n    <ion-select placeholder=\"Manage Stock\" name=\"manage_stock\" [(ngModel)]=\"manage_stock\" style=\"padding:12px 20px !important; background: #ccc;\" readonly>\n      <ion-select-option value=\"yes\">Yes</ion-select-option>\n      <ion-select-option value=\"no\">No</ion-select-option>\n    </ion-select> -->\n\n     <ion-label position=\"floating\">Stock Status </ion-label>\n    <ion-select name=\"availabile_stock_status\" [(ngModel)]=\"availabile_stock_status\" placeholder=\"Stock Status\" interface=\"action-sheet\" style=\"padding:12px 20px !important;\">\n        <ion-select-option value=\"available\">AVAILABLE</ion-select-option>\n        <ion-select-option value=\"sold\">SOLD OUT</ion-select-option>\n      </ion-select>\n\n    \n     <!-- <ion-label position=\"floating\">Pick at the Store </ion-label>\n      <ion-select placeholder=\"Pick at the Store\" name=\"pick_store\" [(ngModel)]=\"pick_store\" style=\"padding:11px 25px !important;\">\n        <ion-select-option value=\"1\">Yes</ion-select-option>\n        <ion-select-option value=\"0\">No</ion-select-option>\n      </ion-select> -->\n\n      <!-- <ion-label position=\"floating\">Best on Offket </ion-label>\n      <ion-select placeholder=\"Best on Offket\" name=\"best_on_offket\" [(ngModel)]=\"best_on_offket\" style=\"padding:11px 25px !important;\">\n        <ion-select-option value=\"1\">Yes</ion-select-option>\n        <ion-select-option value=\"0\">No</ion-select-option>\n      </ion-select> -->\n\n       <ion-label position=\"floating\">Offers Product</ion-label>\n      <ion-select placeholder=\"Offers\" name=\"offers\" [(ngModel)]=\"offers\" >\n        <ion-select-option value=\"1\">Yes</ion-select-option>\n        <ion-select-option value=\"0\">No</ion-select-option>\n      </ion-select>\n\n\n\n        <ion-label position=\"floating\">Product Status</ion-label>\n    <ion-select placeholder=\"Product Status\" name=\"product_status\" [(ngModel)]=\"product_status\"\n      style=\"padding:11px 25px !important;\" (ionChange)=\"getProductStatus()\">\n      <ion-select-option value=\"0\">Buy now</ion-select-option>\n      <ion-select-option value=\"2\">Call the Retailer</ion-select-option>\n    </ion-select>\n<div *ngIf=\"showstat\">\n  <ion-label position=\"floating\">Price Range *</ion-label>\n\n   <ion-row>\n    <ion-col>\n           <ion-input type=\"tel\" size=\"6\" name=\"start_price_range\" [(ngModel)]=\"start_price_range\" placeholder=\"Start\"></ion-input>\n    </ion-col>\n    <ion-col>\n            <ion-input type=\"tel\" size=\"6\" name=\"end_price_range\" [(ngModel)]=\"end_price_range\" placeholder=\"End\"></ion-input>\n    </ion-col>\n   </ion-row>\n\n   \n    <!-- <ion-label position=\"floating\">Price Range *</ion-label>\n    <ion-input name=\"price_range\" [(ngModel)]=\"price_range\" placeholder=\"Ex: 100-500\"></ion-input> -->\n</div>\n\n    <!-- <div *ngIf=\"variant==true\">\n      <ion-input name=\"price\" [(ngModel)]=\"price\" placeholder=\"Enter Price (Rs.)\"></ion-input>\n      <ion-input name=\"sale_price\" [(ngModel)]=\"sale_price\" placeholder=\"Enter Sale Price (Rs.)\"></ion-input>\n      <ion-input name=\"stock\" [(ngModel)]=\"stock\" placeholder=\"Enter Stock\"></ion-input>\n    </div> -->\n\n   \n\n    <!-- <ion-select name=\"status\" [(ngModel)]=\"status\" placeholder=\"Status\" interface=\"action-sheet\" style=\"padding:12px 20px !important;\">\n      <ion-select-option value=\"1\">Active</ion-select-option>\n      <ion-select-option value=\"0\">InActive</ion-select-option>\n    </ion-select> -->\n\n\n    <ion-button (click)=\"updateProduct()\">Update Product</ion-button>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/editproduct/editproduct-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/editproduct/editproduct-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: EditproductPageRoutingModule */

  /***/
  function srcAppEditproductEditproductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditproductPageRoutingModule", function () {
      return EditproductPageRoutingModule;
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


    var _editproduct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editproduct.page */
    "./src/app/editproduct/editproduct.page.ts");

    var routes = [{
      path: '',
      component: _editproduct_page__WEBPACK_IMPORTED_MODULE_3__["EditproductPage"]
    }];

    var EditproductPageRoutingModule = function EditproductPageRoutingModule() {
      _classCallCheck(this, EditproductPageRoutingModule);
    };

    EditproductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditproductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/editproduct/editproduct.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/editproduct/editproduct.module.ts ***!
    \***************************************************/

  /*! exports provided: EditproductPageModule */

  /***/
  function srcAppEditproductEditproductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditproductPageModule", function () {
      return EditproductPageModule;
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


    var _editproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editproduct-routing.module */
    "./src/app/editproduct/editproduct-routing.module.ts");
    /* harmony import */


    var _editproduct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./editproduct.page */
    "./src/app/editproduct/editproduct.page.ts");

    var EditproductPageModule = function EditproductPageModule() {
      _classCallCheck(this, EditproductPageModule);
    };

    EditproductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditproductPageRoutingModule"]],
      declarations: [_editproduct_page__WEBPACK_IMPORTED_MODULE_6__["EditproductPage"]]
    })], EditproductPageModule);
    /***/
  },

  /***/
  "./src/app/editproduct/editproduct.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/editproduct/editproduct.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditproductEditproductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.addproductContainer {\n  padding: 15px;\n}\n\n.addproductContainer ion-input, .addproductContainer ion-select, .addproductContainer ion-textarea, .addproductContainer ion-datetime {\n  margin-bottom: 15px;\n  border: 1px solid #bebdbcd4;\n  padding: 5px 10px !important;\n  background: #fbfafa45;\n  border-radius: 20px;\n  font-size: 13px;\n  outline: none;\n}\n\n.addproductContainer ion-button {\n  --background: #081f65;\n  width: 50%;\n  margin: 10px auto;\n  display: block;\n  --border-radius:15px;\n  outline: none;\n  height: 40px;\n}\n\n.addproductContainer .images {\n  background-color: #ccc;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHByb2R1Y3QvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcZWRpdHByb2R1Y3RcXGVkaXRwcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdHByb2R1Y3QvZWRpdHByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBSTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NSOztBRENJO0VBQ1EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NaOztBRENJO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9kdWN0L2VkaXRwcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW5kb3ItaGVhZHtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgcGFkZGluZy1pbmxpbmU6MHB4O1xuIH1cbi5hZGRwcm9kdWN0Q29udGFpbmVye1xuICAgIHBhZGRpbmc6MTVweDtcblxuICAgIGlvbi1pbnB1dCwgIGlvbi1zZWxlY3QsIGlvbi10ZXh0YXJlYSxpb24tZGF0ZXRpbWV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWJkYmNkNDtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYWZhNDU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzA4MWY2NTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6NDBweDtcbiAgICB9XG4gICAgLmltYWdlc3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgIFxufSIsIi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cblxuLmFkZHByb2R1Y3RDb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmFkZHByb2R1Y3RDb250YWluZXIgaW9uLWlucHV0LCAuYWRkcHJvZHVjdENvbnRhaW5lciBpb24tc2VsZWN0LCAuYWRkcHJvZHVjdENvbnRhaW5lciBpb24tdGV4dGFyZWEsIC5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi1kYXRldGltZSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZWJkYmNkNDtcbiAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZiZmFmYTQ1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYWRkcHJvZHVjdENvbnRhaW5lciBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDgxZjY1O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYm9yZGVyLXJhZGl1czoxNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uYWRkcHJvZHVjdENvbnRhaW5lciAuaW1hZ2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/editproduct/editproduct.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/editproduct/editproduct.page.ts ***!
    \*************************************************/

  /*! exports provided: EditproductPage */

  /***/
  function srcAppEditproductEditproductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditproductPage", function () {
      return EditproductPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var EditproductPage = /*#__PURE__*/function () {
      function EditproductPage(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api) {
        _classCallCheck(this, EditproductPage);

        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.product_startdate = (new Date().getDay() - 1).toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
        this.taxname = false;
        this.variant = false;
      }

      _createClass(EditproductPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pid = this.actRoute.snapshot.paramMap.get('pid');
          this.shopId = this.actRoute.snapshot.paramMap.get('shop_id');
          this.getbasicSubCategoriesList();
          this.getshopCategories();
          this.getproductTags();
          this.getTaxList();
          this.getsingleProduct(this.pid);
        }
      }, {
        key: "getDays",
        value: function getDays() {
          if (this.return_available == 'yes') {
            this.showdays = 'true';
          } else {
            this.showdays = 'false';
          }
        }
      }, {
        key: "getsingleProduct",
        value: function getsingleProduct(pid) {
          var _this = this;

          var editProdObj = {
            action: "getSingleProduct",
            pid: pid
          }; //this.util.showLoader();

          this.api.getProductData(function (response) {
            //this.util.hideLoader();
            setTimeout(function () {
              if (response.status == true) {
                _this.product_details = response.product_details;
                _this.pid = response.product_details.id;
                _this.product_name = response.product_details.name;
                _this.category = response.product_details.cat_id;
                _this.subcategory = response.product_details.sub_cat_id;

                _this.getproductBrands(_this.subcategory);

                _this.product_description = response.product_details.description;
                _this.key_fetures = response.product_details.key_features;
                _this.product_startdate = response.product_details.selling_date; //this.product_tags = response.product_details.product_tags;

                var str = response.product_details.product_tags;
                _this.product_tags = str.split(",");
                _this.meta_tag_title = response.product_details.meta_tag_title;
                _this.meta_tag_description = response.product_details.meta_tag_description;
                _this.meta_tag_keywords = response.product_details.meta_tag_keywords;
                _this.brand = response.product_details.brand_id;
                _this.no_of_days = response.product_details.no_of_days; //this.tax = response.product_details.tax_class;
                //this.selectedtax = response.product_details.taxname;

                _this.cancel_available = response.product_details.cancel_status;
                _this.return_available = response.product_details.return_status;
                _this.exchangestatus = response.product_details.exchangestatus;
                _this.manage_stock = response.product_details.manage_stock;
                _this.price_range = response.product_details.price_range;
                _this.start_price_range = response.product_details.start;
                _this.end_price_range = response.product_details.end;
                _this.variant_product = response.product_details.variant_product;

                if (_this.variant_product == 'yes') {
                  _this.variant = false;
                } else {
                  _this.variant = true;
                }

                _this.status = response.product_details.status;
                _this.price = response.product_details.price;
                _this.sale_price = response.product_details.saleprice;
                _this.stock = response.product_details.stock;
                _this.availabile_stock_status = response.product_details.availabile_stock_status;
                _this.product_status = response.product_details.product_status;

                if (_this.product_status == 0) {
                  _this.showstat = false;
                } else {
                  _this.showstat = true;
                }

                _this.offers = response.product_details.offers;
              } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
            }, 500);
          }, editProdObj);
        }
      }, {
        key: "getbasicSubCategoriesList",
        value: function getbasicSubCategoriesList() {
          var _this2 = this;

          var subcatObj = {
            action: "getbasicsubcategories"
          }; //alert(JSON.stringify(subcatObj));
          //this.util.showLoader();

          this.api.fetchbasicsubcategories(function (response) {
            //this.util.hideLoader();
            if (response.status == true) {
              _this2.sub_categories = response; //alert(JSON.stringify(this.sub_categories));
            } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
          }, subcatObj);
        }
      }, {
        key: "getproductTags",
        value: function getproductTags() {
          var _this3 = this;

          var tagObj = {
            action: "getproductTags"
          }; //this.util.showLoader();

          this.api.getTags(function (response) {
            //this.util.hideLoader();
            if (response.status == true) {
              _this3.tags = response.tags;
            } else {}
          }, tagObj);
        }
      }, {
        key: "getproductBrands",
        value: function getproductBrands(subcategory) {
          var _this4 = this;

          var brandObj = {
            action: "getBrands",
            subcatid: subcategory
          };
          this.api.getBrands(function (response) {
            setTimeout(function () {
              if (response.status == true) {
                _this4.brands = response.brands;
              } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
            }, 500);
          }, brandObj);
        }
      }, {
        key: "getTaxList",
        value: function getTaxList() {
          var _this5 = this;

          var taxObj = {
            action: "gettaxList"
          };
          this.api.getTax(function (response) {
            if (response.status == true) {
              _this5.taxlist = response.tax;
            } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
          }, taxObj);
        }
      }, {
        key: "getshopCategories",
        value: function getshopCategories() {
          var _this6 = this;

          this.shopId = localStorage.getItem('fash_user_id');
          var catObj = {
            action: "getcategories",
            user_id: this.shopId
          }; //this.util.showLoader();

          this.api.getCategories(function (response) {
            //this.util.hideLoader();
            if (response.status == true) {
              _this6.categories = response.category_list;
            } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
          }, catObj);
        }
      }, {
        key: "ScrollToBottom",
        value: function ScrollToBottom() {
          this.content.scrollToBottom(1500);
        }
      }, {
        key: "ScrollToTop",
        value: function ScrollToTop() {
          this.content.scrollToTop(1500);
        }
      }, {
        key: "updateProduct",
        value: function updateProduct() {
          var _this7 = this;

          /* if(this.product_name=='' || this.product_name==undefined)
           {
               this.content.scrollToTop(1500);
               this.pName.setFocus();
                    this.util.presentToast("Enter Product Name", 'danger', 'top', 2500);
           }
           else if(this.category=='' || this.category==undefined)
           {
              this.content.scrollToPoint(1500,67,1500);
              //this.cName.setFocus();
               this.util.presentToast("Select Category", 'danger', 'top', 2500);
           }
           else if(this.subcategory=='' || this.subcategory==undefined)
           {
              this.content.scrollToPoint(1500,112,1500);
              //this.subc_Name.setFocus();
               this.util.presentToast("Select Sub Category", 'danger', 'top', 2500);
           }
           else if(this.product_description=='' || this.product_description==undefined)
           {
              this.content.scrollToPoint(1500,170,1500);
              this.pro_desc.setFocus();
               this.util.presentToast("Enter Product Description", 'danger', 'top', 2500);
           }
           else if(this.key_fetures=='' || this.key_fetures==undefined)
           {
              this.content.scrollToPoint(1500,320,1500);
              this.key_feat.setFocus();
               this.util.presentToast("Enter Key Features", 'danger', 'top', 2500);
           }
           else if(this.manage_stock=='' || this.manage_stock==undefined)
           {
               //this.content.scrollToPoint(1500,1070,1500);
               this.util.presentToast("Select Manage Stock", 'danger', 'middle', 2500);
           }
           else if(this.availabile_stock_status=='' || this.availabile_stock_status==undefined)
           {
               this.content.scrollToBottom(0);
               this.util.presentToast("Select Stock Status", 'danger', 'bottom', 2500);
           }
           else
           { */
          this.price_range = this.start_price_range + "-" + this.end_price_range;
          var requestProd = {
            action: "updateProduct",
            pid: this.pid,
            offers: this.offers,
            availabile_stock_status: this.availabile_stock_status,
            product_status: this.product_status,
            price_range: this.price_range,
            return_available: this.return_available,
            no_of_days: this.no_of_days
          };
          this.util.showLoader();
          this.api.updateProduct(function (response) {
            _this7.util.hideLoader();

            if (response.status == true) {
              _this7.util.presentToast(response.message, 'primary', 'bottom', 2500);
            } else {
              _this7.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
          }, requestProd); //}

          /* this.util.showLoader();
           setTimeout(() => {
             this.util.hideLoader();
             this.util.presentToast('Product Requested successfully', 'success', 'bottom', 2500);
             this.router.navigate(['/shopdetails', this.shopId]);
           }, 1000); */
        }
      }, {
        key: "getSubcategories",
        value: function getSubcategories() {
          this.getSubCategoriesList(this.category); //this.subcategory='';
        }
      }, {
        key: "getSubCategoriesList",
        value: function getSubCategoriesList(category) {
          var _this8 = this;

          var subcatObj = {
            action: "getsubcategories",
            catId: category
          }; //alert(JSON.stringify(subcatObj));
          //this.util.showLoader();

          this.api.fetchShopSubCategories(function (response) {
            //this.util.hideLoader();
            if (response.status == true) {
              _this8.sub_categories = response.subcategory_list; //alert(JSON.stringify(this.sub_categories));
            } else {//this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
          }, subcatObj);
        }
      }, {
        key: "getTax",
        value: function getTax() {
          if (this.tax == 'yes') {
            this.taxname = true;
          } else {
            this.taxname = false;
          }
        }
      }, {
        key: "getProductStatus",
        value: function getProductStatus() {
          if (this.product_status == 0) {
            this.showstat = false;
          } else {
            this.showstat = true;
          }
        }
      }]);

      return EditproductPage;
    }();

    EditproductPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prodName')], EditproductPage.prototype, "pName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('catName')], EditproductPage.prototype, "cName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subcatName')], EditproductPage.prototype, "subc_Name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pro_descName')], EditproductPage.prototype, "pro_desc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('keyfeatName')], EditproductPage.prototype, "key_feat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proStartName')], EditproductPage.prototype, "pro_sdate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pro_tagName')], EditproductPage.prototype, "pro_tag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('meta_titleName')], EditproductPage.prototype, "meta_title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('meta_descName')], EditproductPage.prototype, "meta_desc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('meta_keywordsName')], EditproductPage.prototype, "meta_keywords", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      "static": false
    })], EditproductPage.prototype, "content", void 0);
    EditproductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editproduct',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editproduct.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/editproduct/editproduct.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editproduct.page.scss */
      "./src/app/editproduct/editproduct.page.scss"))["default"]]
    })], EditproductPage);
    /***/
  }
}]);
//# sourceMappingURL=editproduct-editproduct-module-es5.js.map