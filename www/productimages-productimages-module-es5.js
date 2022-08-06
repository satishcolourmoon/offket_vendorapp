function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productimages-productimages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/productimages/productimages.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productimages/productimages.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductimagesProductimagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: #000;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class=\"vendor-head\">Product Image</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-grid style=\"padding:10px 0px;\">\n    <ion-row style=\"padding:0px 8px;\">\n      <ion-col size=\"6\" *ngFor=\"let pro_img of product_images\">\n        <div style=\"border:1px solid #crcc;border-radius:20px;\"><!--class=\"imageSelect\" -->\n          <span style=\"background-color: red;color: #fff;border-radius: 50%; padding: 2px;height: 25px;margin-left: 82%;\n          position: absolute;\n          top: 0px;\" (click)=\"deleteImage(pro_img.id)\">\n            <ion-icon style=\"font-size:20px;\" name=\"close-outline\"></ion-icon>\n          </span>\n          <img style=\"width:100%;padding:10px;height:260px;margin-top:20px;\" src=\"{{pro_img.image}}\" >\n      </div>\n      </ion-col>\n    </ion-row>\n    <div align='center' style=\"background-color:#f1f1f1;color:#cc180a;margin-top:10px;font-size:15px;padding:10px;\"> \n      Note:Accepting this non-copyright pictures\n    </div>\n    <ion-row>\n      <ion-col>\n        <button (click)=\"selectImage()\" style=\"margin-top: 20px;\">Upload Image</button><!--*ngIf=\"image_update\"-->\n        <!-- <button *ngIf=\"!image_update\" style=\"margin-top: 20px;\">Update Image</button> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n<style>\n  button {\n    margin: auto;\n    display: block;\n    color: #fff;\n    background: #081f65;\n    padding: 10px 10px;\n    outline:none;\n    border-radius: 15px;\n  }\n</style>";
    /***/
  },

  /***/
  "./src/app/productimages/productimages-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/productimages/productimages-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ProductimagesPageRoutingModule */

  /***/
  function srcAppProductimagesProductimagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductimagesPageRoutingModule", function () {
      return ProductimagesPageRoutingModule;
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


    var _productimages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./productimages.page */
    "./src/app/productimages/productimages.page.ts");

    var routes = [{
      path: '',
      component: _productimages_page__WEBPACK_IMPORTED_MODULE_3__["ProductimagesPage"]
    }];

    var ProductimagesPageRoutingModule = function ProductimagesPageRoutingModule() {
      _classCallCheck(this, ProductimagesPageRoutingModule);
    };

    ProductimagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductimagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/productimages/productimages.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/productimages/productimages.module.ts ***!
    \*******************************************************/

  /*! exports provided: ProductimagesPageModule */

  /***/
  function srcAppProductimagesProductimagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductimagesPageModule", function () {
      return ProductimagesPageModule;
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


    var _productimages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./productimages-routing.module */
    "./src/app/productimages/productimages-routing.module.ts");
    /* harmony import */


    var _productimages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./productimages.page */
    "./src/app/productimages/productimages.page.ts");

    var ProductimagesPageModule = function ProductimagesPageModule() {
      _classCallCheck(this, ProductimagesPageModule);
    };

    ProductimagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _productimages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductimagesPageRoutingModule"]],
      declarations: [_productimages_page__WEBPACK_IMPORTED_MODULE_6__["ProductimagesPage"]]
    })], ProductimagesPageModule);
    /***/
  },

  /***/
  "./src/app/productimages/productimages.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/productimages/productimages.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductimagesProductimagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.imageSelect:hover {\n  background-color: #e8980f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdGltYWdlcy9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFxwcm9kdWN0aW1hZ2VzXFxwcm9kdWN0aW1hZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdGltYWdlcy9wcm9kdWN0aW1hZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0M7RUFDSSx5QkFBQTtBQ0VMIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdGltYWdlcy9wcm9kdWN0aW1hZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW5kb3ItaGVhZHtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgcGFkZGluZy1pbmxpbmU6MHB4O1xuIH1cbiAuaW1hZ2VTZWxlY3Q6aG92ZXJ7XG4gICAgIGJhY2tncm91bmQtY29sb3I6I2U4OTgwZjtcbiB9IiwiLnZlbmRvci1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWlubGluZTogMHB4O1xufVxuXG4uaW1hZ2VTZWxlY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg5ODBmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/productimages/productimages.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/productimages/productimages.page.ts ***!
    \*****************************************************/

  /*! exports provided: ProductimagesPage */

  /***/
  function srcAppProductimagesProductimagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductimagesPage", function () {
      return ProductimagesPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var ProductimagesPage = /*#__PURE__*/function () {
      function ProductimagesPage(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api, transfer, crop) {
        _classCallCheck(this, ProductimagesPage);

        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.transfer = transfer;
        this.crop = crop;
        this.urlpath = 'https://offket.com/api/Vendor_api/user';
      }

      _createClass(ProductimagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.vid = this.actRoute.snapshot.paramMap.get('vid');
          this.product_id = this.actRoute.snapshot.paramMap.get('product_id');
          this.getProductImages();
        }
      }, {
        key: "getProductImages",
        value: function getProductImages() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var imagesObj, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    imagesObj = {
                      action: "getProductImages",
                      product_id: this.product_id,
                      variant_id: this.vid
                    };
                    this.product_images = [];
                    _context.next = 4;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 4:
                    loading = _context.sent;
                    loading.present();
                    this.api.getImages(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this.product_images = response.images;
                      } else {
                        _this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, imagesObj);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(variant_id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var imagesObj, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    imagesObj = {
                      action: "deleteProductImages",
                      variant_id: variant_id
                    };
                    this.product_images = [];
                    _context2.next = 4;
                    return this.loadingCtrl.create({
                      spinner: 'circles',
                      message: 'Please wait'
                    });

                  case 4:
                    loading = _context2.sent;
                    loading.present();
                    this.api.getImages(function (response) {
                      loading.dismiss();

                      if (response.status == true) {
                        _this2.product_images = response.images;

                        _this2.util.presentToast("Image deleted Successfully", 'success', 'bottom', 2500);

                        _this2.getProductImages();
                      } else {
                        _this2.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
                    }, imagesObj);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "selectImage",
        value: function selectImage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.actionSheetController.create({
                      cssClass: 'signupbtn',
                      buttons: [{
                        text: 'Upload Photo',
                        role: 'destructive',
                        icon: 'ios-image',
                        handler: function handler() {
                          _this3.takePicture2(0);
                        }
                      }, {
                        text: 'Camera',
                        role: 'destructive',
                        icon: 'ios-camera',
                        handler: function handler() {
                          _this3.takePicture2(1);
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context3.sent;
                    _context3.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "takePicture2",
        value: function takePicture2(sourceType) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var options, optionss;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    options = {
                      quality: 100,
                      targetHeight: 650,
                      targetWidth: 650,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true
                    };

                    if (sourceType == '1') {
                      this.camera.getPicture(options).then(function (imageData) {
                        var base64Image = 'data:image/jpeg;base64,' + imageData;

                        _this4.filepath2(base64Image);
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
                        _this4.filepath2(imageData);
                      }, function (err) {
                        alert(JSON.stringify("Something went wrong,please try again"));
                      });
                    }

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "cropImage",
        value: function cropImage(fileUrl) {
          var _this5 = this;

          this.crop.crop(fileUrl, {
            quality: 100
          }).then(function (newPath) {
            _this5.filepath2(newPath.split('?')[0]);
          }, function (error) {//alert(JSON.stringify(error));
            //alert('Error cropping image' + error);
          });
        }
      }, {
        key: "filepath2",
        value: function filepath2(imgurl) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var options1, params, fileTransfer;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
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
                      action: "upload_productImage",
                      product_id: this.product_id,
                      variant_id: this.vid
                    };
                    options1.params = params;
                    fileTransfer = this.transfer.create();
                    fileTransfer.upload(imgurl, this.urlpath, options1, true).then(function (data) {
                      //alert(JSON.stringify(data));
                      _this6.util.hideLoader();

                      _this6.util.presentToast("Product Image Uploaded Successfully", 'success');

                      _this6.ngOnInit();
                    }, function (err) {
                      _this6.util.hideLoader();

                      alert("1 st error");
                      alert(JSON.stringify(err));
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ProductimagesPage;
    }();

    ProductimagesPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"]
      }];
    };

    ProductimagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-productimages',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./productimages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/productimages/productimages.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./productimages.page.scss */
      "./src/app/productimages/productimages.page.scss"))["default"]]
    })], ProductimagesPage);
    /***/
  }
}]);
//# sourceMappingURL=productimages-productimages-module-es5.js.map