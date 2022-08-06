function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"], {
  /***/
  "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
    \*************************************************************************/

  /*! exports provided: NgOtpInputModule, ɵa, ɵb, ɵc */

  /***/
  function node_modulesNgOtpInput__ivy_ngcc__Fesm2015NgOtpInputJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function () {
      return NgOtpInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NgOtpInputComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return KeysPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return NumberOnlyDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.onKeyDown($event);
        })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.onKeyUp($event, i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
      }
    }

    function NgOtpInputComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
      }
    }

    var KeysPipe = /*#__PURE__*/function () {
      function KeysPipe() {
        _classCallCheck(this, KeysPipe);
      }

      _createClass(KeysPipe, [{
        key: "transform",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function transform(value) {
          return Object.keys(value);
        }
      }]);

      return KeysPipe;
    }();

    KeysPipe.ɵfac = function KeysPipe_Factory(t) {
      return new (t || KeysPipe)();
    };

    KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "keys",
      type: KeysPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'keys'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Config = function Config() {
      _classCallCheck(this, Config);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgOtpInputComponent = /*#__PURE__*/function () {
      /**
       * @param {?} keysPipe
       */
      function NgOtpInputComponent(keysPipe) {
        _classCallCheck(this, NgOtpInputComponent);

        this.keysPipe = keysPipe;
        this.config = {
          length: 4
        }; // tslint:disable-next-line: no-output-on-prefix

        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
      }
      /**
       * @return {?}
       */


      _createClass(NgOtpInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});

          for (var index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
          }

          this.inputType = this.getInputType();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          if (!this.config.disableAutoFocus) {
            /** @type {?} */
            var containerItem = document.getElementById("c_".concat(this.componentKey));

            if (containerItem) {
              containerItem.addEventListener('paste',
              /**
              * @param {?} evt
              * @return {?}
              */
              function (evt) {
                return _this.handlePaste(evt);
              });
              /** @type {?} */

              var ele = containerItem.getElementsByClassName('otp-input')[0];

              if (ele && ele.focus) {
                ele.focus();
              }
            }
          }
        }
        /**
         * @private
         * @param {?} idx
         * @return {?}
         */

      }, {
        key: "getControlName",
        value: function getControlName(idx) {
          return "ctrl_".concat(idx);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "ifLeftArrow",
        value: function ifLeftArrow(event) {
          return this.ifKeyCode(event, 37);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "ifRightArrow",
        value: function ifRightArrow(event) {
          return this.ifKeyCode(event, 39);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "ifBackspaceOrDelete",
        value: function ifBackspaceOrDelete(event) {
          return event.key === 'Backspace' || event.key === 'Delete' || this.ifKeyCode(event, 8) || this.ifKeyCode(event, 46);
        }
        /**
         * @param {?} event
         * @param {?} targetCode
         * @return {?}
         */

      }, {
        key: "ifKeyCode",
        value: function ifKeyCode(event, targetCode) {
          /** @type {?} */
          var key = event.keyCode || event.charCode; // tslint:disable-next-line: triple-equals

          return key == targetCode ? true : false;
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown($event) {
          /** @type {?} */
          var isSpace = this.ifKeyCode($event, 32);

          if (isSpace) {
            // prevent space
            return false;
          }
        }
        /**
         * @param {?} $event
         * @param {?} inputIdx
         * @return {?}
         */

      }, {
        key: "onKeyUp",
        value: function onKeyUp($event, inputIdx) {
          /** @type {?} */
          var nextInputId = this.appendKey("otp_".concat(inputIdx + 1));
          /** @type {?} */

          var prevInputId = this.appendKey("otp_".concat(inputIdx - 1));

          if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
          }

          if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
          }
          /** @type {?} */


          var isBackspace = this.ifBackspaceOrDelete($event);

          if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
          }

          if (!$event.target.value) {
            return;
          }

          if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
          }

          this.rebuildValue();
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "appendKey",
        value: function appendKey(id) {
          return "".concat(id, "_").concat(this.componentKey);
        }
        /**
         * @param {?} eleId
         * @return {?}
         */

      }, {
        key: "setSelected",
        value: function setSelected(eleId) {
          this.focusTo(eleId);
          /** @type {?} */

          var ele = document.getElementById(eleId);

          if (ele && ele.setSelectionRange) {
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              ele.setSelectionRange(0, 1);
            }, 0);
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "ifValidEntry",
        value: function ifValidEntry(event) {
          /** @type {?} */
          var inp = String.fromCharCode(event.keyCode);
          /** @type {?} */

          var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode) || event.keyCode >= 96 && event.keyCode <= 105;
        }
        /**
         * @param {?} eleId
         * @return {?}
         */

      }, {
        key: "focusTo",
        value: function focusTo(eleId) {
          /** @type {?} */
          var ele = document.getElementById(eleId);

          if (ele) {
            ele.focus();
          }
        } // method to set component value

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          var _this2 = this;

          if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
          }

          this.otpForm.reset();

          if (!value) {
            this.rebuildValue();
            return;
          }

          value = value.toString().replace(/\s/g, ''); // remove whitespace

          Array.from(value).forEach(
          /**
          * @param {?} c
          * @param {?} idx
          * @return {?}
          */
          function (c, idx) {
            if (_this2.otpForm.get(_this2.getControlName(idx))) {
              _this2.otpForm.get(_this2.getControlName(idx)).setValue(c);
            }
          });

          if (!this.config.disableAutoFocus) {
            /** @type {?} */
            var containerItem = document.getElementById("c_".concat(this.componentKey));
            /** @type {?} */

            var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
            /** @type {?} */

            var ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];

            if (ele && ele.focus) {
              ele.focus();
            }
          }

          this.rebuildValue();
        }
        /**
         * @return {?}
         */

      }, {
        key: "rebuildValue",
        value: function rebuildValue() {
          var _this3 = this;

          /** @type {?} */
          var val = '';
          this.keysPipe.transform(this.otpForm.controls).forEach(
          /**
          * @param {?} k
          * @return {?}
          */
          function (k) {
            if (_this3.otpForm.controls[k].value) {
              val += _this3.otpForm.controls[k].value;
            }
          });
          this.onInputChange.emit(val);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getInputType",
        value: function getInputType() {
          return this.config.isPasswordInput ? 'password' : this.config.allowNumbersOnly ? 'tel' : 'text';
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handlePaste",
        value: function handlePaste(e) {
          // Get pasted data via clipboard API

          /** @type {?} */
          var clipboardData = e.clipboardData || window['clipboardData'];

          if (clipboardData) {
            /** @type {?} */
            var pastedData = clipboardData.getData('Text');
          } // Stop data actually being pasted into div


          e.stopPropagation();
          e.preventDefault();

          if (!pastedData) {
            return;
          }

          this.setValue(pastedData);
        }
      }]);

      return NgOtpInputComponent;
    }();

    NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) {
      return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe));
    };

    NgOtpInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgOtpInputComponent,
      selectors: [["ng-otp-input"]],
      inputs: {
        config: "config"
      },
      outputs: {
        onInputChange: "onInputChange"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]],
      template: function NgOtpInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]];
      },
      pipes: function pipes() {
        return [KeysPipe];
      },
      styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
    });
    /** @nocollapse */

    NgOtpInputComponent.ctorParameters = function () {
      return [{
        type: KeysPipe
      }];
    };

    NgOtpInputComponent.propDecorators = {
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onInputChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'ng-otp-input',
          template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" maxlength=\"1\"\r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"off\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
          styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input{width:30px;font-size:18px;height:30px}}"]
        }]
      }], function () {
        return [{
          type: KeysPipe
        }];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NumberOnlyDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _elRef
       * @param {?} _renderer
       */
      function NumberOnlyDirective(_elRef, _renderer) {
        _classCallCheck(this, NumberOnlyDirective);

        this._elRef = _elRef;
        this._renderer = _renderer;
      }
      /**
       * @return {?}
       */


      _createClass(NumberOnlyDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
          }
        }
      }]);

      return NumberOnlyDirective;
    }();

    NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) {
      return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    NumberOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumberOnlyDirective,
      selectors: [["", "numberOnly", ""]],
      inputs: {
        disabledNumberOnly: "disabledNumberOnly"
      }
    });
    /** @nocollapse */

    NumberOnlyDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    NumberOnlyDirective.propDecorators = {
      disabledNumberOnly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[numberOnly]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        disabledNumberOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgOtpInputModule = function NgOtpInputModule() {
      _classCallCheck(this, NgOtpInputModule);
    };

    NgOtpInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgOtpInputModule
    });
    NgOtpInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgOtpInputModule_Factory(t) {
        return new (t || NgOtpInputModule)();
      },
      providers: [KeysPipe],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, {
        declarations: function declarations() {
          return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]];
        },
        exports: function exports() {
          return [NgOtpInputComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
          declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
          exports: [NgOtpInputComponent],
          providers: [KeysPipe]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-otp-input.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOtpOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--background: #05274d;color: #fff;\">\n    <ion-back-button defaultHref slot=\"start\"></ion-back-button>\n    <ion-title>Confirm OTP</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:#05274d;\">\n\n  <div class=\"div_content\">\n    <div class=\"div_logo\">\n      <img src=\"assets/images/loginlogo.png\" class=\"img_logo\" />\n    </div>\n    <div align='center'>\n      <p class=\"otp_text\"> Enter the one time Password<br/>\n        that you just received via<br/>\n        Mobile Number</p>\n      <div style=\"width: 80%;margin: auto;display: block;\">\n        <div class=\"otpInputs\">\n          <ng-otp-input (onInputChange)=\"onOtpChange($event)\"\n            [config]=\"{length:4,inputStyles:{'width': '55px','height': '55px','border-radius':'50%','list-style':'none'}}\">\n          </ng-otp-input>\n        </div>\n        \n        <!-- <ion-row>\n          <ion-col size=\"3\"> \n                <ion-input type=\"tel\" class=\"otp\" maxlength=\"1\" #Field1 (keyup)=\"gotonext(Field2)\" name=\"otp1\" [(ngModel)]=\"otp1\"></ion-input>\n          </ion-col>\n          <ion-col size=\"3\"> \n                <ion-input type=\"tel\" class=\"otp\" maxlength=\"1\" #Field2 (keyup)=\"gotonext(Field3)\" name=\"otp2\" [(ngModel)]=\"otp2\"></ion-input> \n          </ion-col>\n          <ion-col size=\"3\"> \n                <ion-input type=\"tel\" class=\"otp\" maxlength=\"1\" #Field3 (keyup)=\"gotonext(Field4)\" name=\"otp3\" [(ngModel)]=\"otp3\"></ion-input>\n          </ion-col>\n          <ion-col size=\"3\"> \n                <ion-input type=\"tel\" class=\"otp\" maxlength=\"1\" #Field4 name=\"otp4\" [(ngModel)]=\"otp4\"></ion-input>\n          </ion-col>             \n        </ion-row>   -->\n\n      </div>\n      <div class=\"div_btn\" align='center' (click)=\"gotoHome()\">\n        <ion-button type=\"submit\" class=\"btn_login\" expand=\"block\" mode=\"ios\">Confirm</ion-button>\n      </div>\n    </div>\n    <div align='center' style=\"padding-bottom:10px;\">\n      <p class=\"account\">Dont't receive code?</p>\n      <div >\n        <p class=\"create\" (click)=\"resendOTP()\">Resend</p>\n      </div>\n      \n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/otp/otp-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/otp/otp-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: OtpPageRoutingModule */

  /***/
  function srcAppOtpOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
      return OtpPageRoutingModule;
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


    var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./otp.page */
    "./src/app/otp/otp.page.ts");

    var routes = [{
      path: '',
      component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
    }];

    var OtpPageRoutingModule = function OtpPageRoutingModule() {
      _classCallCheck(this, OtpPageRoutingModule);
    };

    OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OtpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/otp/otp.module.ts":
  /*!***********************************!*\
    !*** ./src/app/otp/otp.module.ts ***!
    \***********************************/

  /*! exports provided: OtpPageModule */

  /***/
  function srcAppOtpOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
      return OtpPageModule;
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


    var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./otp-routing.module */
    "./src/app/otp/otp-routing.module.ts");
    /* harmony import */


    var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./otp.page */
    "./src/app/otp/otp.page.ts");
    /* harmony import */


    var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-otp-input */
    "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");

    var OtpPageModule = function OtpPageModule() {
      _classCallCheck(this, OtpPageModule);
    };

    OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]],
      declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
    })], OtpPageModule);
    /***/
  },

  /***/
  "./src/app/otp/otp.page.scss":
  /*!***********************************!*\
    !*** ./src/app/otp/otp.page.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppOtpOtpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md::after {\n  background-image: none;\n}\n\n.otpInputs {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n  list-style: none;\n}\n\n.div_content {\n  width: 100%;\n  height: 65vh;\n}\n\n.div_content .div_logo {\n  width: 100%;\n  position: relative;\n  height: 100px;\n  margin-top: 15%;\n}\n\n.div_content .div_logo .img_logo {\n  width: 220px;\n  position: absolute;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n}\n\n.div_content .otp_text {\n  color: #fff;\n  letter-spacing: 3px;\n  font-size: 17px;\n  line-height: 28px;\n}\n\n.div_content .otp {\n  background: #F2F2F2;\n  width: 55px;\n  height: 54px;\n  font-size: 28px;\n  border-radius: 50%;\n  color: #000;\n  text-align: center;\n}\n\n.div_content .div_btn {\n  width: 100%;\n  margin-top: 20px;\n  position: relative;\n}\n\n.div_content .div_btn .btn_login {\n  color: white;\n  --background: #e44424;\n  height: 55px;\n  font-size: 21px;\n  width: 65%;\n  text-transform: none;\n  --border-radius: 25px;\n  letter-spacing: 1px;\n  margin-top: 10%;\n}\n\n.account {\n  margin-top: 30px;\n  color: white;\n  margin-bottom: 0px;\n  letter-spacing: 1px;\n}\n\n.create {\n  margin-top: 7px;\n  color: #e44424;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwL0Q6XFxpb25pY3Byb2plY3RzXFxvZmZrZXRfdmVuZG9yYXBwX2lvbmljdjUvc3JjXFxhcHBcXG90cFxcb3RwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3RwL290cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBaUJJLFdBQUE7RUFDQSxZQUFBO0FDZko7O0FERkk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBQ0VSOztBREFRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQ0VaOztBRElJO0VBQ0ksV0FBQTtFQUNKLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRko7O0FESUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRlI7O0FESUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBRElRO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZaOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvb3RwL290cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kOjphZnRlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4ub3RwSW5wdXRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZGl2X2NvbnRlbnR7XG4gICAgLmRpdl9sb2dve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiAzMHZoO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xuXG4gICAgICAgIC5pbWdfbG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY1dmg7XG5cbiAgICAub3RwX3RleHR7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIH1cbiAgICAub3RwIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5kaXZfYnRue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5idG5fbG9naW57XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNlNDQ0MjQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzoxcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjEwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjY291bnR7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOjFweDtcbn1cbi5jcmVhdGV7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIGNvbG9yOiAjZTQ0NDI0O1xuICAgIGxldHRlci1zcGFjaW5nOjFweDtcbn0iLCIuaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5vdHBJbnB1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmRpdl9jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjV2aDtcbn1cbi5kaXZfY29udGVudCAuZGl2X2xvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9sb2dvIC5pbWdfbG9nbyB7XG4gIHdpZHRoOiAyMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5kaXZfY29udGVudCAub3RwX3RleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kaXZfY29udGVudCAub3RwIHtcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTRweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdl9jb250ZW50IC5kaXZfYnRuIC5idG5fbG9naW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogI2U0NDQyNDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBmb250LXNpemU6IDIxcHg7XG4gIHdpZHRoOiA2NSU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmFjY291bnQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmNyZWF0ZSB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgY29sb3I6ICNlNDQ0MjQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/otp/otp.page.ts":
  /*!*********************************!*\
    !*** ./src/app/otp/otp.page.ts ***!
    \*********************************/

  /*! exports provided: OtpPage */

  /***/
  function srcAppOtpOtpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
      return OtpPage;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_globalevents_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/globalevents.service */
    "./src/app/services/globalevents.service.ts");

    var OtpPage = /*#__PURE__*/function () {
      function OtpPage(router, actRoute, loadingController, util, api, globalEvents) {
        _classCallCheck(this, OtpPage);

        this.router = router;
        this.actRoute = actRoute;
        this.loadingController = loadingController;
        this.util = util;
        this.api = api;
        this.globalEvents = globalEvents;
      }

      _createClass(OtpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user_id = this.actRoute.snapshot.paramMap.get('user_id');
          this.phone = this.actRoute.snapshot.paramMap.get('phone');
        }
      }, {
        key: "gotonext",
        value: function gotonext(nextElement) {
          nextElement.setFocus();
        }
      }, {
        key: "onOtpChange",
        value: function onOtpChange(event) {
          this.userCode = event;
        }
      }, {
        key: "gotoHome",
        value: function gotoHome() {
          var _this4 = this;

          var otp = this.userCode;
          var otpObj = {
            action: "otp_verification",
            otp: otp,
            user_id: this.user_id
          };
          this.util.showLoader();
          this.api.otpVerification(function (response) {
            _this4.util.hideLoader();

            if (response.status == true) {
              /*let publishData = {
                  'loggedIn': true,
                  'name': response.name,
                  'mobile': response.phone,
                  'userId': response.user_id
                };
                this.globalEvents.publishEventData(publishData); */
              //let user_id = response.user_id;
              //localStorage.setItem('user_id', user_id);
              _this4.router.navigate(['/confirmregister']);

              _this4.util.presentToast(response.message, 'danger', 'bottom', 2500);
            } else {
              _this4.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
          }, otpObj);
        }
      }, {
        key: "resendOTP",
        value: function resendOTP() {
          var _this5 = this;

          var resendotpObj = {
            action: "resend_otp",
            user_id: this.user_id
          };
          this.util.showLoader();
          this.api.resendOTP(function (response) {
            _this5.util.hideLoader();

            if (response.status == true) {
              _this5.util.presentToast("OTP Resent Successfully", 'danger', 'bottom', 2500);
            } else {
              _this5.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
          }, resendotpObj);
        }
      }]);

      return OtpPage;
    }();

    OtpPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _services_globalevents_service__WEBPACK_IMPORTED_MODULE_6__["GlobalEventsService"]
      }];
    };

    OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-otp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./otp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./otp.page.scss */
      "./src/app/otp/otp.page.scss"))["default"]]
    })], OtpPage);
    /***/
  }
}]);
//# sourceMappingURL=otp-otp-module-es5.js.map