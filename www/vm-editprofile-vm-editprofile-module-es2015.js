(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vm-editprofile-vm-editprofile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vm-editprofile/vm-editprofile.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vm-editprofile/vm-editprofile.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  \t<ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\t\t <ion-item>\n\t\t  <ion-label position=\"fixed\">Name</ion-label>\n\t\t  <ion-input type=\"text\" [(ngModel)]=\"name\" name=\"name\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t  <ion-label position=\"fixed\">Email</ion-label>\n\t\t  <ion-input type=\"email\" [(ngModel)]=\"email\" name=\"email\" readonly></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t  <ion-label position=\"fixed\">Mobile</ion-label>\n\t\t  <ion-input type=\"tel\" [(ngModel)]=\"mobile\" name=\"mobile\" readonly></ion-input>\n\t\t</ion-item>\n\n\t\t\n\t\t<ion-item>\n\t\t  <ion-label position=\"fixed\">Address</ion-label>\n\t\t  <ion-textarea [(ngModel)]=\"address\" name=\"address\" clearOnEdit=\"true\"></ion-textarea>\n\t\t</ion-item> \n\n\t\t<ion-row>\n      <ion-col class=\"ion-text-center\">\n\n        <ion-button color=\"info\"  (click)=\"doupdateprofile()\">Update</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n</ion-content>\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/vm-editprofile/vm-editprofile-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/vm-editprofile/vm-editprofile-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: VmEditprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmEditprofilePageRoutingModule", function() { return VmEditprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vm_editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm-editprofile.page */ "./src/app/vm-editprofile/vm-editprofile.page.ts");




const routes = [
    {
        path: '',
        component: _vm_editprofile_page__WEBPACK_IMPORTED_MODULE_3__["VmEditprofilePage"]
    }
];
let VmEditprofilePageRoutingModule = class VmEditprofilePageRoutingModule {
};
VmEditprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VmEditprofilePageRoutingModule);



/***/ }),

/***/ "./src/app/vm-editprofile/vm-editprofile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/vm-editprofile/vm-editprofile.module.ts ***!
  \*********************************************************/
/*! exports provided: VmEditprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmEditprofilePageModule", function() { return VmEditprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vm_editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vm-editprofile-routing.module */ "./src/app/vm-editprofile/vm-editprofile-routing.module.ts");
/* harmony import */ var _vm_editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vm-editprofile.page */ "./src/app/vm-editprofile/vm-editprofile.page.ts");







let VmEditprofilePageModule = class VmEditprofilePageModule {
};
VmEditprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vm_editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["VmEditprofilePageRoutingModule"]
        ],
        declarations: [_vm_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["VmEditprofilePage"]]
    })
], VmEditprofilePageModule);



/***/ }),

/***/ "./src/app/vm-editprofile/vm-editprofile.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/vm-editprofile/vm-editprofile.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-img {\n  width: 100%;\n  height: 220px;\n}\n\n.shopProfilPic {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #fefefe;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: auto;\n  position: relative;\n  top: -65px;\n  border: 2px solid #e45f1f;\n}\n\n.shopProfilPic ion-icon {\n  position: absolute;\n  bottom: 14px;\n  right: 0px;\n  /* font-size: 20px; */\n  color: #423f39;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #ded4d4;\n}\n\nion-input {\n  border: 1px solid #cac6c6;\n  margin: 11px 15px;\n  border-radius: 5px;\n}\n\nion-textarea {\n  border: 1px solid #cac6c6;\n  margin: 11px 15px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm0tZWRpdHByb2ZpbGUvRDpcXGlvbmljcHJvamVjdHNcXG9mZmtldF92ZW5kb3JhcHBfaW9uaWN2NS9zcmNcXGFwcFxcdm0tZWRpdHByb2ZpbGVcXHZtLWVkaXRwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdm0tZWRpdHByb2ZpbGUvdm0tZWRpdHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNHLGFBQUE7QUNDTDs7QURDQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0cseUJBQUE7QUNFSjs7QUREQztFQUVDLGtCQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURFQTtFQUNRLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENLO0VBQ0cseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC92bS1lZGl0cHJvZmlsZS92bS1lZGl0cHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctaW1ne1xuXHRcdHdpZHRoOiAxMDAlO1xuICAgIFx0aGVpZ2h0OiAyMjBweDtcblx0fVxuLnNob3BQcm9maWxQaWN7XG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OjEyMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdG1hcmdpbjphdXRvO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogLTY1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U0NWYxZjtcblx0aW9uLWljb257XG5cblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgLyogZm9udC1zaXplOiAyMHB4OyAqL1xuICAgIGNvbG9yOiAjNDIzZjM5O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2RlZDRkNDtcblx0fVxufVxuXG5pb24taW5wdXQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjNmM2O1xuICAgICAgICBtYXJnaW46IDExcHggMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICB9XG4gICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gICAgICAgIG1hcmdpbjogMTFweCAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIH1cbiIsIi5iZy1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLnNob3BQcm9maWxQaWMge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTY1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNDVmMWY7XG59XG4uc2hvcFByb2ZpbFBpYyBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNHB4O1xuICByaWdodDogMHB4O1xuICAvKiBmb250LXNpemU6IDIwcHg7ICovXG4gIGNvbG9yOiAjNDIzZjM5O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNkZWQ0ZDQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gIG1hcmdpbjogMTFweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWM2YzY7XG4gIG1hcmdpbjogMTFweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/vm-editprofile/vm-editprofile.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/vm-editprofile/vm-editprofile.page.ts ***!
  \*******************************************************/
/*! exports provided: VmEditprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmEditprofilePage", function() { return VmEditprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");









let VmEditprofilePage = class VmEditprofilePage {
    constructor(camera, util, router, actRoute, loadingCtrl, actionSheetController, file, api, transfer) {
        this.camera = camera;
        this.util = util;
        this.router = router;
        this.actRoute = actRoute;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.api = api;
        this.transfer = transfer;
    }
    ngOnInit() {
        this.vm_id = localStorage.getItem('fash_user_id');
        this.getvmDetails();
    }
    getvmDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let profileObj = { action: "getmarchantProfile", vm_id: this.vm_id };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.getMarchantData((response) => {
                loading.dismiss();
                this.vendordetails = response;
                this.name = response.name;
                this.email = response.email;
                this.mobile = response.mobile;
                this.address = response.address;
            }, profileObj);
        });
    }
    doupdateprofile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let vmObj = { action: "updatevmProfile", vm_id: this.vm_id, name: this.name, address: this.address };
            let loading = yield this.loadingCtrl.create({
                spinner: 'circles',
                message: 'Please wait',
            });
            loading.present();
            this.api.updatevmProfile((response) => {
                loading.dismiss();
                this.util.presentToast("Profile Updated Successfully", 'danger', 'bottom', 2500);
                this.getvmDetails();
            }, vmObj);
        });
    }
};
VmEditprofilePage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] }
];
VmEditprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vm-editprofile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vm-editprofile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vm-editprofile/vm-editprofile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vm-editprofile.page.scss */ "./src/app/vm-editprofile/vm-editprofile.page.scss")).default]
    })
], VmEditprofilePage);



/***/ })

}]);
//# sourceMappingURL=vm-editprofile-vm-editprofile-module-es2015.js.map