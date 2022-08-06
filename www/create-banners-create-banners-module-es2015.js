(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-banners-create-banners-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-banners/create-banners.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-banners/create-banners.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--background: #fff;color: black;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title class='vendor-head'>Add Banner</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"addproductContainer\">\n      <ion-input type=\"text\" name=\"title\" [(ngModel)]=\"title\" placeholder=\"Enter Title\" ></ion-input>\n      \n      <p (click)=\"changeImage()\">Select Image <ion-icon name=\"image-outline\"></ion-icon></p>\n      <img *ngIf=\"image!=''\" style=\"width: 100px; height: 100px;\" src=\"{{image}}\">\n\n       <ion-button  *ngIf=\"id=='add'\" (click)=\"addBanner()\">Add Banner</ion-button>\n      <ion-button  *ngIf=\"id!='add'\" (click)=\"updateBanner()\">Update Banner</ion-button> \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/create-banners/create-banners-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/create-banners/create-banners-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CreateBannersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBannersPageRoutingModule", function() { return CreateBannersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_banners_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-banners.page */ "./src/app/create-banners/create-banners.page.ts");




const routes = [
    {
        path: '',
        component: _create_banners_page__WEBPACK_IMPORTED_MODULE_3__["CreateBannersPage"]
    }
];
let CreateBannersPageRoutingModule = class CreateBannersPageRoutingModule {
};
CreateBannersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateBannersPageRoutingModule);



/***/ }),

/***/ "./src/app/create-banners/create-banners.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-banners/create-banners.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateBannersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBannersPageModule", function() { return CreateBannersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_banners_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-banners-routing.module */ "./src/app/create-banners/create-banners-routing.module.ts");
/* harmony import */ var _create_banners_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-banners.page */ "./src/app/create-banners/create-banners.page.ts");







let CreateBannersPageModule = class CreateBannersPageModule {
};
CreateBannersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_banners_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateBannersPageRoutingModule"]
        ],
        declarations: [_create_banners_page__WEBPACK_IMPORTED_MODULE_6__["CreateBannersPage"]]
    })
], CreateBannersPageModule);



/***/ }),

/***/ "./src/app/create-banners/create-banners.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/create-banners/create-banners.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vendor-head {\n  font-size: 16px;\n  font-weight: 600;\n  padding-inline: 0px;\n}\n\n.addproductContainer {\n  padding: 15px 25px;\n}\n\n.addproductContainer ion-input, .addproductContainer ion-select, .addproductContainer ion-textarea, .addproductContainer ion-datetime {\n  margin-bottom: 15px;\n  border: 1px solid #bebdbcd4;\n  border-radius: 20px;\n  padding: 3px 15px !important;\n  background: #fbfafa45;\n  font-size: 13px;\n  outline: none;\n}\n\n.addproductContainer ion-button {\n  --background: #081f65;\n  width: 55%;\n  margin: 10px auto;\n  height: 45px;\n  text-transform: none;\n  display: block;\n  --border-radius:15px;\n  outline: none;\n}\n\n.addproductContainer .images {\n  background-color: #ccc;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWJhbm5lcnMvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcY3JlYXRlLWJhbm5lcnNcXGNyZWF0ZS1iYW5uZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3JlYXRlLWJhbm5lcnMvY3JlYXRlLWJhbm5lcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDUjs7QURDSTtFQUNRLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ0NaOztBRENJO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1iYW5uZXJzL2NyZWF0ZS1iYW5uZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZW5kb3ItaGVhZHtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgcGFkZGluZy1pbmxpbmU6MHB4O1xufVxuXG4uYWRkcHJvZHVjdENvbnRhaW5lcntcbiAgICBwYWRkaW5nOjE1cHggMjVweDtcblxuICAgIGlvbi1pbnB1dCwgIGlvbi1zZWxlY3QsIGlvbi10ZXh0YXJlYSxpb24tZGF0ZXRpbWV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZWJkYmNkNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogM3B4IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZiZmFmYTQ1O1xuICAgICAgICBmb250LXNpemU6MTNweDtcbiAgICAgICAgb3V0bGluZTpub25lO1xuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDgxZjY1O1xuICAgICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTpub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6MTVweDtcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICB9XG4gICAgLmltYWdlc3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxufSIsIi52ZW5kb3ItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1pbmxpbmU6IDBweDtcbn1cblxuLmFkZHByb2R1Y3RDb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG59XG4uYWRkcHJvZHVjdENvbnRhaW5lciBpb24taW5wdXQsIC5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi1zZWxlY3QsIC5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi10ZXh0YXJlYSwgLmFkZHByb2R1Y3RDb250YWluZXIgaW9uLWRhdGV0aW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JlYmRiY2Q0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzcHggMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmJmYWZhNDU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hZGRwcm9kdWN0Q29udGFpbmVyIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwODFmNjU7XG4gIHdpZHRoOiA1NSU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1ib3JkZXItcmFkaXVzOjE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYWRkcHJvZHVjdENvbnRhaW5lciAuaW1hZ2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/create-banners/create-banners.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-banners/create-banners.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateBannersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBannersPage", function() { return CreateBannersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");











let CreateBannersPage = class CreateBannersPage {
    constructor(util, actRoute, router, api, popoverController, loadingCtrl, camera, actionSheetController, file, transfer, crop) {
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
    }
    ngOnInit() {
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.image = this.actRoute.snapshot.paramMap.get('image');
        this.imagefile = this.actRoute.snapshot.paramMap.get('imagefile');
        this.title = this.actRoute.snapshot.paramMap.get('title');
    }
    changeImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'signupbtn',
                buttons: [{
                        text: 'Upload Photo',
                        role: 'destructive',
                        icon: 'ios-image',
                        handler: () => {
                            this.takePicture2(0);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    takePicture2(sourceType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                quality: 100,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true
            };
            if (sourceType == '1') {
                this.camera.getPicture(options).then((imageData) => {
                    this.cropImage(imageData);
                }, (err) => {
                });
            }
            else {
                var optionss = {
                    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                    destinationType: this.camera.DestinationType.FILE_URI,
                };
                this.camera.getPicture(optionss).then((imageData) => {
                    this.cropImage(imageData);
                }, (err) => {
                    //alert(JSON.stringify(err));
                });
            }
        });
    }
    cropImage(fileUrl) {
        this.crop.crop(fileUrl, { quality: 100 }).then(newPath => {
            this.filepath2(newPath.split('?')[0]);
        }, error => {
            //alert(JSON.stringify(error));
            //alert('Error cropping image' + error);
        });
    }
    filepath2(imgurl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options1 = {
                fileKey: 'image',
                fileName: 'name.jpg',
                headers: {},
                chunkedMode: false,
                mimeType: 'image/jpg'
            };
            //this.util.showLoader();
            var params = { action: "uploadBanner" };
            options1.params = params;
            const fileTransfer = this.transfer.create();
            fileTransfer.upload(imgurl, this.urlpath, options1, true).then((data) => {
                // this.util.hideLoader();
                this.imagepath = data.response;
                this.title = this.title;
                this.util.presentToast("Banner Changed Successfully", 'success');
            }, (err) => {
                //alert("1 st error");
                //alert(JSON.stringify(err));
            });
        });
    }
    addBanner() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            if (this.title == '' || this.title == undefined) {
                this.util.presentToast("Enter Title", 'danger', 'top', 2500);
            }
            else if (this.imagepath == '' || this.imagepath == undefined) {
                this.util.presentToast("Select Image", 'danger', 'top', 2500);
            }
            else {
                let catObj = { action: "addbanner", vendor_id: this.shopId, title: this.title, imagepath: this.imagepath };
                let loading = yield this.loadingCtrl.create({
                    spinner: 'circles',
                    message: 'Please wait',
                });
                loading.present();
                this.api.addBannerdata((response) => {
                    loading.dismiss();
                    if (response.status == true) {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                        this.router.navigate(['offer-banners']);
                    }
                    else {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, catObj);
            }
        });
    }
    updateBanner() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shopId = localStorage.getItem('fash_user_id');
            if (this.title == '' || this.title == undefined) {
                this.util.presentToast("Enter Coupon", 'danger', 'top', 2500);
            }
            else {
                if (this.imagepath == '' || this.imagepath == undefined) {
                    this.update_image = this.imagefile;
                }
                else {
                    this.update_image = this.imagepath;
                }
                //alert(JSON.stringify(this.imagepath));
                let catObj = { action: "updatebanner", vendor_id: this.shopId, title: this.title, imagepath: this.update_image, id: this.id };
                let loading = yield this.loadingCtrl.create({
                    spinner: 'circles',
                    message: 'Please wait',
                });
                loading.present();
                this.api.updateBannerdata((response) => {
                    loading.dismiss();
                    if (response.status == true) {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                        this.router.navigate(['offer-banners']);
                    }
                    else {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, catObj);
            }
        });
    }
};
CreateBannersPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"] }
];
CreateBannersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-banners',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-banners.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-banners/create-banners.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-banners.page.scss */ "./src/app/create-banners/create-banners.page.scss")).default]
    })
], CreateBannersPage);



/***/ })

}]);
//# sourceMappingURL=create-banners-create-banners-module-es2015.js.map