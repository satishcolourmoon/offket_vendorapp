(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addproduct-addproduct-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addproduct/addproduct.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addproduct/addproduct.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #f47a20;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title>Add Your Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"addproductContainer\">\n    <form>\n\n      <ion-input name=\"product_name\" placeholder=\"Enter Product Name\"></ion-input>\n\n\n      <ion-select placeholder=\"Select Brand\" name=\"brand\">\n        <ion-select-option value=\"brown\">Nike</ion-select-option>\n        <ion-select-option value=\"blonde\">Under Armour</ion-select-option>\n        <ion-select-option value=\"black\">Fossil</ion-select-option>\n        <ion-select-option value=\"red\">Others</ion-select-option>\n      </ion-select>\n\n      <ion-select placeholder=\"Select Category\" name=\"category\">\n        <ion-select-option value=\"brown\">Men</ion-select-option>\n        <ion-select-option value=\"blonde\">Women</ion-select-option>\n        <ion-select-option value=\"black\">Kids</ion-select-option>\n      </ion-select>\n\n      <ion-select placeholder=\"Select Sub Category\" name=\"subcategory\">\n        <ion-select-option value=\"brown\">Shoes</ion-select-option>\n        <ion-select-option value=\"blonde\">Dress</ion-select-option>\n        <ion-select-option value=\"black\">T-shirts</ion-select-option>\n        <ion-select-option value=\"red\">Bottom Wears</ion-select-option>\n      </ion-select>\n\n      <ion-input name=\"price\" placeholder=\"Enter Price (Rs.)\"></ion-input>\n\n      <ion-input name=\"sale_price\" placeholder=\"Enter Sale Price (Rs.)\"></ion-input>\n\n      <ion-textarea rows=\"6\" cols=\"20\" name=\"description\" placeholder=\"Description\"></ion-textarea>\n\n\n      <div style=\"background-color: #f1f1f1;margin-bottom: 15px;\">\n        <h4 style=\"color: #838181;\">Images</h4>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">\n              <div (click)=\"selectImage('image1')\" class=\"images\" style=\"background-image:url({{image1}});\">\n                <div style=\"padding: 40px;text-align: center;\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div (click)=\"selectImage('image2')\" class=\"images\" style=\"background-image:url({{image2}});\">\n                <div style=\"padding: 40px;text-align: center;\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div (click)=\"selectImage('image3')\" class=\"images\" style=\"background-image:url({{image3}});\">\n                <div style=\"padding: 40px;text-align: center;\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div (click)=\"selectImage('image4')\" class=\"images\" style=\"background-image:url({{image4}});\">\n                <div style=\"padding: 40px;text-align: center;\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </div>\n      <ion-select placeholder=\"Status\" interface=\"action-sheet\">\n        <ion-select-option value=\"brown\">Active</ion-select-option>\n        <ion-select-option value=\"blonde\">InActive</ion-select-option>\n      </ion-select>\n      <ion-button (click)=\"doProduct()\">Add Product</ion-button>\n\n\n\n    </form>\n  </div>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/addproduct/addproduct-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/addproduct/addproduct-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddproductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductPageRoutingModule", function() { return AddproductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addproduct_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addproduct.page */ "./src/app/addproduct/addproduct.page.ts");




const routes = [
    {
        path: '',
        component: _addproduct_page__WEBPACK_IMPORTED_MODULE_3__["AddproductPage"]
    }
];
let AddproductPageRoutingModule = class AddproductPageRoutingModule {
};
AddproductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddproductPageRoutingModule);



/***/ }),

/***/ "./src/app/addproduct/addproduct.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addproduct/addproduct.module.ts ***!
  \*************************************************/
/*! exports provided: AddproductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductPageModule", function() { return AddproductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addproduct-routing.module */ "./src/app/addproduct/addproduct-routing.module.ts");
/* harmony import */ var _addproduct_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addproduct.page */ "./src/app/addproduct/addproduct.page.ts");







let AddproductPageModule = class AddproductPageModule {
};
AddproductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addproduct_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddproductPageRoutingModule"]
        ],
        declarations: [_addproduct_page__WEBPACK_IMPORTED_MODULE_6__["AddproductPage"]]
    })
], AddproductPageModule);



/***/ }),

/***/ "./src/app/addproduct/addproduct.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addproduct/addproduct.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addproductContainer {\n  padding: 15px;\n}\n.addproductContainer ion-input, .addproductContainer ion-select, .addproductContainer ion-textarea {\n  margin-bottom: 15px;\n  border-bottom: 1px solid #f47a20;\n  background: #f4f2f2ab;\n}\n.addproductContainer ion-button {\n  --background: #f47a20;\n  width: 50%;\n  margin: 10px auto;\n  display: block;\n}\n.addproductContainer .images {\n  background-color: #ccc;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcHJvZHVjdC9EOlxcaW9uaWNwcm9qZWN0c1xcb2Zma2V0X3ZlbmRvcmFwcF9pb25pY3Y1L3NyY1xcYXBwXFxhZGRwcm9kdWN0XFxhZGRwcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkcHJvZHVjdC9hZGRwcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBRENJO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FDQ1I7QURDSTtFQUNRLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FEQ0k7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvYWRkcHJvZHVjdC9hZGRwcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRwcm9kdWN0Q29udGFpbmVye1xuICAgIHBhZGRpbmc6MTVweDtcblxuICAgIGlvbi1pbnB1dCwgIGlvbi1zZWxlY3QsIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0N2EyMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjJmMmFiO1xuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5pbWFnZXN7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn0iLCIuYWRkcHJvZHVjdENvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uYWRkcHJvZHVjdENvbnRhaW5lciBpb24taW5wdXQsIC5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi1zZWxlY3QsIC5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi10ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjQ3YTIwO1xuICBiYWNrZ3JvdW5kOiAjZjRmMmYyYWI7XG59XG4uYWRkcHJvZHVjdENvbnRhaW5lciBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjQ3YTIwO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYWRkcHJvZHVjdENvbnRhaW5lciAuaW1hZ2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/addproduct/addproduct.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addproduct/addproduct.page.ts ***!
  \***********************************************/
/*! exports provided: AddproductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductPage", function() { return AddproductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");







let AddproductPage = class AddproductPage {
    constructor(camera, util, router, actRoute, loadingCtrl, actionSheetController, file) {
        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.shopId = this.actRoute.snapshot.params.shop_id;
    }
    ngOnInit() {
    }
    selectImage(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, type);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA, type);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    takePicture(sourceType, type) {
        var options = {
            quality: 80,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            if (type == 'image1') {
                this.image1 = base64Image;
            }
            else if (type == 'image2') {
                this.image2 = base64Image;
            }
            else if (type == 'image3') {
                this.image3 = base64Image;
            }
            else if (type == 'image4') {
                this.image4 = base64Image;
            }
        }, (err) => {
            // Handle error
        });
    }
    doProduct() {
        this.util.showLoader();
        setTimeout(() => {
            this.util.hideLoader();
            this.util.presentToast('Product added successfully', 'success', 'bottom', 2500);
            this.router.navigate(['/shopdetails', this.shopId]);
        }, 1000);
    }
};
AddproductPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] }
];
AddproductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addproduct',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addproduct.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addproduct/addproduct.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addproduct.page.scss */ "./src/app/addproduct/addproduct.page.scss")).default]
    })
], AddproductPage);



/***/ })

}]);
//# sourceMappingURL=addproduct-addproduct-module-es2015.js.map