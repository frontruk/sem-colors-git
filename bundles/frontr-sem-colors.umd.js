(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng2-dnd'), require('@angular/forms'), require('@angular/common/http'), require('@frontr/sem-ui')) :
    typeof define === 'function' && define.amd ? define('@frontr/sem-colors', ['exports', '@angular/core', '@angular/common', 'ng2-dnd', '@angular/forms', '@angular/common/http', '@frontr/sem-ui'], factory) :
    (factory((global.frontr = global.frontr || {}, global.frontr['sem-colors'] = {}),global.ng.core,global.ng.common,null,global.ng.forms,global.ng.common.http,null));
}(this, (function (exports,i0,common,ng2Dnd,forms,http,semUi) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SemColorsService = (function () {
        function SemColorsService() {
        }
        SemColorsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        SemColorsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SemColorsService.ngInjectableDef = i0.defineInjectable({ factory: function SemColorsService_Factory() { return new SemColorsService(); }, token: SemColorsService, providedIn: "root" });
        return SemColorsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ColorWidgetComponent = (function () {
        function ColorWidgetComponent(platformId) {
            this.platformId = platformId;
            this.updateColorPreset = new i0.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        ColorWidgetComponent.prototype.updatedColorPreset = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                console.log('event', event);
                this.updateColorPreset.emit(event);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        ColorWidgetComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                // if (isPlatformBrowser(this.platformId)) {
                //   if (changes.data) {
                //     console.log('changes', changes)
                //     // this.toggleStatus = changes.colorDropEnabled.currentValue;
                //   }
                // }
            };
        ColorWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'div[sembler-color-widget]',
                        template: " <!--// RGBA-->\n  <span\n    [colorToggle]=\"data.enabledList\"\n    [cpWidth]=\"overlayWidth\"\n    [cpAlphaChannel]=\"'always'\"\n    [cpPresetColors]=\"data.items\"\n    [cpAddColorButton]=\"true\"\n    [style.background]=\"lastColor\"\n    [cpToggle]=\"true\"\n    [cpDialogDisplay]=\"'inline'\"\n    [cpCancelButton]=\"false\"\n    [cpCancelButtonClass]= \"'btn btn-primary btn-xs'\"\n    [(colorPicker)]=\"lastColor\"\n    (cpPresetColorsChange)=\"updatedColorPreset($event)\"\n  >\n  </span>\n\n"
                    },] },
        ];
        ColorWidgetComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        ColorWidgetComponent.propDecorators = {
            overlayWidth: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            updateColorPreset: [{ type: i0.Output }]
        };
        return ColorWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchColordropComponent = (function () {
        function SearchColordropComponent() {
            this.saveColor = new i0.EventEmitter();
            this.changeSelectedColor = new i0.EventEmitter();
        }
        Object.defineProperty(SearchColordropComponent.prototype, "selected", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                console.log('color', value);
                this.color = value.color;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} color
         * @return {?}
         */
        SearchColordropComponent.prototype.addColor = /**
         * @param {?} color
         * @return {?}
         */
            function (color) {
                /** @type {?} */
                var setColor = {
                    type: 'color',
                    color: color.value
                };
                this.saveColor.emit(setColor);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SearchColordropComponent.prototype.changeColor = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var color = { type: 'color', color: event };
                this.changeSelectedColor.emit(color);
            };
        /**
         * @return {?}
         */
        SearchColordropComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SearchColordropComponent.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'sembler-search-colordrop',
                        template: "<span class=\"input-sufix\">\n       <input\n         class=\"sem-input\"\n         type=\"text\"\n         [ngModel]=\"color\"\n         (ngModelChange)=\"changeColor($event)\"\n         [value]='color'\n         #colorValue\n       />\n      <span\n      (click)=\"addColor(colorValue)\"\n      class=\"sem-icon-search sufix\">\n      </span>\n</span>\n\n",
                        styles: [":host{display:block}"]
                    },] },
        ];
        SearchColordropComponent.ctorParameters = function () { return []; };
        SearchColordropComponent.propDecorators = {
            selected: [{ type: i0.Input, args: ['selected',] }],
            saveColor: [{ type: i0.Output }],
            changeSelectedColor: [{ type: i0.Output }]
        };
        return SearchColordropComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function detectIE() {
        /** @type {?} */
        var ua = '';
        if (typeof navigator !== 'undefined') {
            ua = navigator.userAgent.toLowerCase();
        }
        /** @type {?} */
        var msie = ua.indexOf('msie ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        // Other browser
        return false;
    }
    var TextDirective = (function () {
        function TextDirective() {
            this.newValue = new i0.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TextDirective.prototype.inputChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var value = event.target.value;
                if (this.rg === undefined) {
                    this.newValue.emit(value);
                }
                else {
                    /** @type {?} */
                    var numeric = parseFloat(value);
                    if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                        this.newValue.emit({ v: numeric, rg: this.rg });
                    }
                }
            };
        TextDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[text]'
                    },] },
        ];
        TextDirective.propDecorators = {
            rg: [{ type: i0.Input }],
            text: [{ type: i0.Input }],
            newValue: [{ type: i0.Output }],
            inputChange: [{ type: i0.HostListener, args: ['input', ['$event'],] }]
        };
        return TextDirective;
    }());
    var SliderDirective = (function () {
        function SliderDirective(elRef) {
            var _this = this;
            this.elRef = elRef;
            this.dragEnd = new i0.EventEmitter();
            this.dragStart = new i0.EventEmitter();
            this.newValue = new i0.EventEmitter();
            this.listenerMove = function (event) { return _this.move(event); };
            this.listenerStop = function () { return _this.stop(); };
        }
        /**
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.mouseDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.start(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.touchStart = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.start(event);
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.move = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                this.setCursor(event);
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.start = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.setCursor(event);
                document.addEventListener('mouseup', this.listenerStop);
                document.addEventListener('touchend', this.listenerStop);
                document.addEventListener('mousemove', this.listenerMove);
                document.addEventListener('touchmove', this.listenerMove);
                this.dragStart.emit();
            };
        /**
         * @private
         * @return {?}
         */
        SliderDirective.prototype.stop = /**
         * @private
         * @return {?}
         */
            function () {
                document.removeEventListener('mouseup', this.listenerStop);
                document.removeEventListener('touchend', this.listenerStop);
                document.removeEventListener('mousemove', this.listenerMove);
                document.removeEventListener('touchmove', this.listenerMove);
                this.dragEnd.emit();
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.getX = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var position = this.elRef.nativeElement.getBoundingClientRect();
                /** @type {?} */
                var pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
                return pageX - position.left - window.pageXOffset;
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.getY = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var position = this.elRef.nativeElement.getBoundingClientRect();
                /** @type {?} */
                var pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
                return pageY - position.top - window.pageYOffset;
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.setCursor = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var width = this.elRef.nativeElement.offsetWidth;
                /** @type {?} */
                var height = this.elRef.nativeElement.offsetHeight;
                /** @type {?} */
                var x = Math.max(0, Math.min(this.getX(event), width));
                /** @type {?} */
                var y = Math.max(0, Math.min(this.getY(event), height));
                if (this.rgX !== undefined && this.rgY !== undefined) {
                    this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
                }
                else if (this.rgX === undefined && this.rgY !== undefined) {
                    this.newValue.emit({ v: y / height, rgY: this.rgY });
                }
                else if (this.rgX !== undefined && this.rgY === undefined) {
                    this.newValue.emit({ v: x / width, rgX: this.rgX });
                }
            };
        SliderDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[slider]'
                    },] },
        ];
        SliderDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        SliderDirective.propDecorators = {
            rgX: [{ type: i0.Input }],
            rgY: [{ type: i0.Input }],
            slider: [{ type: i0.Input }],
            dragEnd: [{ type: i0.Output }],
            dragStart: [{ type: i0.Output }],
            newValue: [{ type: i0.Output }],
            mouseDown: [{ type: i0.HostListener, args: ['mousedown', ['$event'],] }],
            touchStart: [{ type: i0.HostListener, args: ['touchstart', ['$event'],] }]
        };
        return SliderDirective;
    }());
    var SliderPosition = (function () {
        function SliderPosition(h, s, v, a) {
            this.h = h;
            this.s = s;
            this.v = v;
            this.a = a;
        }
        return SliderPosition;
    }());
    var SliderDimension = (function () {
        function SliderDimension(h, s, v, a) {
            this.h = h;
            this.s = s;
            this.v = v;
            this.a = a;
        }
        return SliderDimension;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Cmyk = (function () {
        function Cmyk(c, m, y, k) {
            this.c = c;
            this.m = m;
            this.y = y;
            this.k = k;
        }
        return Cmyk;
    }());
    var Hsla = (function () {
        function Hsla(h, s, l, a) {
            this.h = h;
            this.s = s;
            this.l = l;
            this.a = a;
        }
        return Hsla;
    }());
    var Hsva = (function () {
        function Hsva(h, s, v, a) {
            this.h = h;
            this.s = s;
            this.v = v;
            this.a = a;
        }
        return Hsva;
    }());
    var Rgba = (function () {
        function Rgba(r, g, b, a) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        return Rgba;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ColorPickerService = (function () {
        function ColorPickerService() {
            this.active = null;
        }
        /**
         * @param {?} active
         * @return {?}
         */
        ColorPickerService.prototype.setActive = /**
         * @param {?} active
         * @return {?}
         */
            function (active) {
                if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
                    this.active.closeColorPicker();
                }
                this.active = active;
            };
        /**
         * @param {?} hsva
         * @return {?}
         */
        ColorPickerService.prototype.hsva2hsla = /**
         * @param {?} hsva
         * @return {?}
         */
            function (hsva) {
                /** @type {?} */
                var h = hsva.h;
                /** @type {?} */
                var s = hsva.s;
                /** @type {?} */
                var v = hsva.v;
                /** @type {?} */
                var a = hsva.a;
                if (v === 0) {
                    return new Hsla(h, 0, 0, a);
                }
                else if (s === 0 && v === 1) {
                    return new Hsla(h, 1, 1, a);
                }
                else {
                    /** @type {?} */
                    var l = v * (2 - s) / 2;
                    return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
                }
            };
        /**
         * @param {?} hsla
         * @return {?}
         */
        ColorPickerService.prototype.hsla2hsva = /**
         * @param {?} hsla
         * @return {?}
         */
            function (hsla) {
                /** @type {?} */
                var h = Math.min(hsla.h, 1);
                /** @type {?} */
                var s = Math.min(hsla.s, 1);
                /** @type {?} */
                var l = Math.min(hsla.l, 1);
                /** @type {?} */
                var a = Math.min(hsla.a, 1);
                if (l === 0) {
                    return new Hsva(h, 0, 0, a);
                }
                else {
                    /** @type {?} */
                    var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
                    return new Hsva(h, 2 * (v - l) / v, v, a);
                }
            };
        /**
         * @param {?} hsva
         * @return {?}
         */
        ColorPickerService.prototype.hsvaToRgba = /**
         * @param {?} hsva
         * @return {?}
         */
            function (hsva) {
                /** @type {?} */
                var r;
                /** @type {?} */
                var g;
                /** @type {?} */
                var b;
                /** @type {?} */
                var h = hsva.h;
                /** @type {?} */
                var s = hsva.s;
                /** @type {?} */
                var v = hsva.v;
                /** @type {?} */
                var a = hsva.a;
                /** @type {?} */
                var i = Math.floor(h * 6);
                /** @type {?} */
                var f = h * 6 - i;
                /** @type {?} */
                var p = v * (1 - s);
                /** @type {?} */
                var q = v * (1 - f * s);
                /** @type {?} */
                var t = v * (1 - (1 - f) * s);
                switch (i % 6) {
                    case 0:
                        r = v, g = t, b = p;
                        break;
                    case 1:
                        r = q, g = v, b = p;
                        break;
                    case 2:
                        r = p, g = v, b = t;
                        break;
                    case 3:
                        r = p, g = q, b = v;
                        break;
                    case 4:
                        r = t, g = p, b = v;
                        break;
                    case 5:
                        r = v, g = p, b = q;
                        break;
                }
                return new Rgba(r, g, b, a);
            };
        /**
         * @param {?} rgba
         * @return {?}
         */
        ColorPickerService.prototype.rgbaToCmyk = /**
         * @param {?} rgba
         * @return {?}
         */
            function (rgba) {
                /** @type {?} */
                var k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
                if (k === 1) {
                    return new Cmyk(0, 0, 0, 1);
                }
                else {
                    /** @type {?} */
                    var c = (1 - rgba.r - k) / (1 - k);
                    /** @type {?} */
                    var m = (1 - rgba.g - k) / (1 - k);
                    /** @type {?} */
                    var y = (1 - rgba.b - k) / (1 - k);
                    return new Cmyk(c, m, y, k);
                }
            };
        /**
         * @param {?} rgba
         * @return {?}
         */
        ColorPickerService.prototype.rgbaToHsva = /**
         * @param {?} rgba
         * @return {?}
         */
            function (rgba) {
                /** @type {?} */
                var h;
                /** @type {?} */
                var s;
                /** @type {?} */
                var r = Math.min(rgba.r, 1);
                /** @type {?} */
                var g = Math.min(rgba.g, 1);
                /** @type {?} */
                var b = Math.min(rgba.b, 1);
                /** @type {?} */
                var a = Math.min(rgba.a, 1);
                /** @type {?} */
                var max = Math.max(r, g, b);
                /** @type {?} */
                var min = Math.min(r, g, b);
                /** @type {?} */
                var v = max;
                /** @type {?} */
                var d = max - min;
                s = (max === 0) ? 0 : d / max;
                if (max === min) {
                    h = 0;
                }
                else {
                    switch (max) {
                        case r:
                            h = (g - b) / d + (g < b ? 6 : 0);
                            break;
                        case g:
                            h = (b - r) / d + 2;
                            break;
                        case b:
                            h = (r - g) / d + 4;
                            break;
                    }
                    h /= 6;
                }
                return new Hsva(h, s, v, a);
            };
        /**
         * @param {?} rgba
         * @param {?=} allowHex8
         * @return {?}
         */
        ColorPickerService.prototype.rgbaToHex = /**
         * @param {?} rgba
         * @param {?=} allowHex8
         * @return {?}
         */
            function (rgba, allowHex8) {
                /* tslint:disable:no-bitwise */
                /** @type {?} */
                var hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
                if (allowHex8) {
                    hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
                }
                /* tslint:enable:no-bitwise */
                return hex;
            };
        /**
         * @param {?} rgba
         * @return {?}
         */
        ColorPickerService.prototype.denormalizeRGBA = /**
         * @param {?} rgba
         * @return {?}
         */
            function (rgba) {
                return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
            };
        /**
         * @param {?=} colorString
         * @param {?=} allowHex8
         * @return {?}
         */
        ColorPickerService.prototype.stringToHsva = /**
         * @param {?=} colorString
         * @param {?=} allowHex8
         * @return {?}
         */
            function (colorString, allowHex8) {
                if (colorString === void 0) {
                    colorString = '';
                }
                if (allowHex8 === void 0) {
                    allowHex8 = false;
                }
                /** @type {?} */
                var hsva = null;
                colorString = (colorString || '').toLowerCase();
                /** @type {?} */
                var stringParsers = [
                    {
                        re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        parse: function (execResult) {
                            return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                        }
                    }, {
                        re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        parse: function (execResult) {
                            return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                        }
                    }
                ];
                if (allowHex8) {
                    stringParsers.push({
                        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                        parse: function (execResult) {
                            return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                        }
                    });
                }
                else {
                    stringParsers.push({
                        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                        parse: function (execResult) {
                            return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                        }
                    }, {
                        re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                        parse: function (execResult) {
                            return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
                        }
                    });
                }
                for (var key in stringParsers) {
                    if (stringParsers.hasOwnProperty(key)) {
                        /** @type {?} */
                        var parser = stringParsers[key];
                        /** @type {?} */
                        var match = parser.re.exec(colorString);
                        /** @type {?} */
                        var color = match && parser.parse(match);
                        if (color) {
                            if (color instanceof Rgba) {
                                hsva = this.rgbaToHsva(color);
                            }
                            else if (color instanceof Hsla) {
                                hsva = this.hsla2hsva(color);
                            }
                            return hsva;
                        }
                    }
                }
                return hsva;
            };
        /**
         * @param {?} hsva
         * @param {?} outputFormat
         * @param {?} alphaChannel
         * @return {?}
         */
        ColorPickerService.prototype.outputFormat = /**
         * @param {?} hsva
         * @param {?} outputFormat
         * @param {?} alphaChannel
         * @return {?}
         */
            function (hsva, outputFormat, alphaChannel) {
                switch (outputFormat) {
                    case 'hsla':
                        /** @type {?} */
                        var hsla = this.hsva2hsla(hsva);
                        /** @type {?} */
                        var hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                        if (hsva.a < 1 || alphaChannel === 'always') {
                            return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                                hslaText.a + ')';
                        }
                        else {
                            return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                        }
                    case 'rgba':
                        /** @type {?} */
                        var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                        if (hsva.a < 1 || alphaChannel === 'always') {
                            return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                                Math.round(rgba.a * 100) / 100 + ')';
                        }
                        else {
                            return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                        }
                    default:
                        /** @type {?} */
                        var allowHex8 = (alphaChannel === 'always' || alphaChannel === 'hex8');
                        return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
                }
            };
        ColorPickerService.decorators = [
            { type: i0.Injectable },
        ];
        ColorPickerService.ctorParameters = function () { return []; };
        return ColorPickerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ColorPickerComponent = (function () {
        function ColorPickerComponent(platformId, elRef, cdRef, service) {
            this.platformId = platformId;
            this.elRef = elRef;
            this.cdRef = cdRef;
            this.service = service;
            this.isIE10 = false;
            this.dialogArrowSize = 10;
            this.dialogArrowOffset = 15;
            this.useRootViewContainer = false;
        }
        /**
         * @return {?}
         */
        ColorPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (common.isPlatformBrowser(this.platformId)) {
                    this.slider = new SliderPosition(0, 0, 0, 0);
                    /** @type {?} */
                    var hueWidth = this.hueSlider.nativeElement.offsetWidth;
                    /** @type {?} */
                    var alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
                    this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
                    if (this.cpOutputFormat === 'rgba') {
                        this.format = 1;
                    }
                    else if (this.cpOutputFormat === 'hsla') {
                        this.format = 2;
                    }
                    else {
                        this.format = 0;
                    }
                    this.listenerMouseDown = function (event) { _this.onMouseDown(event); };
                    this.listenerResize = function () { _this.onResize(); };
                    this.openDialog(this.initialColor, false);
                }
            };
        /**
         * @return {?}
         */
        ColorPickerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (common.isPlatformBrowser(this.platformId)) {
                    this.closeDialog();
                }
            };
        /**
         * @return {?}
         */
        ColorPickerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (common.isPlatformBrowser(this.platformId) && this.cpWidth !== 100) {
                    /** @type {?} */
                    var hueWidth = this.hueSlider.nativeElement.offsetWidth;
                    /** @type {?} */
                    var alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
                    this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
                    this.updateColorPicker(false);
                    this.cdRef.detectChanges();
                }
            };
        /**
         * @return {?}
         */
        ColorPickerComponent.prototype.addColor = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} color
         * @param {?=} emit
         * @return {?}
         */
        ColorPickerComponent.prototype.openDialog = /**
         * @param {?} color
         * @param {?=} emit
         * @return {?}
         */
            function (color, emit) {
                if (emit === void 0) {
                    emit = true;
                }
                if (common.isPlatformBrowser(this.platformId)) {
                    this.service.setActive(this);
                    if (!this.width) {
                        this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
                    }
                    if (!this.height) {
                        this.height = 320;
                    }
                    this.setInitialColor(color);
                    this.setColorFromString(color, emit);
                    this.openColorPicker();
                }
            };
        /**
         * @return {?}
         */
        ColorPickerComponent.prototype.closeDialog = /**
         * @return {?}
         */
            function () {
                if (common.isPlatformBrowser(this.platformId)) {
                    this.closeColorPicker();
                }
            };
        /**
         * @param {?} colorToggle
         * @param {?} instance
         * @param {?} elementRef
         * @param {?} color
         * @param {?} cpWidth
         * @param {?} cpHeight
         * @param {?} cpDialogDisplay
         * @param {?} cpFallbackColor
         * @param {?} cpAlphaChannel
         * @param {?} cpOutputFormat
         * @param {?} cpDisableInput
         * @param {?} cpIgnoredElements
         * @param {?} cpSaveClickOutside
         * @param {?} cpUseRootViewContainer
         * @param {?} cpPosition
         * @param {?} cpPositionOffset
         * @param {?} cpPositionRelativeToArrow
         * @param {?} cpPresetLabel
         * @param {?} cpPresetColors
         * @param {?} cpMaxPresetColorsLength
         * @param {?} cpPresetEmptyMessage
         * @param {?} cpPresetEmptyMessageClass
         * @param {?} cpOKButton
         * @param {?} cpOKButtonClass
         * @param {?} cpOKButtonText
         * @param {?} cpCancelButton
         * @param {?} cpCancelButtonClass
         * @param {?} cpCancelButtonText
         * @param {?} cpAddColorButton
         * @param {?} cpAddColorButtonClass
         * @param {?} cpAddColorButtonText
         * @param {?} cpRemoveColorButtonClass
         * @return {?}
         */
        ColorPickerComponent.prototype.setupDialog = /**
         * @param {?} colorToggle
         * @param {?} instance
         * @param {?} elementRef
         * @param {?} color
         * @param {?} cpWidth
         * @param {?} cpHeight
         * @param {?} cpDialogDisplay
         * @param {?} cpFallbackColor
         * @param {?} cpAlphaChannel
         * @param {?} cpOutputFormat
         * @param {?} cpDisableInput
         * @param {?} cpIgnoredElements
         * @param {?} cpSaveClickOutside
         * @param {?} cpUseRootViewContainer
         * @param {?} cpPosition
         * @param {?} cpPositionOffset
         * @param {?} cpPositionRelativeToArrow
         * @param {?} cpPresetLabel
         * @param {?} cpPresetColors
         * @param {?} cpMaxPresetColorsLength
         * @param {?} cpPresetEmptyMessage
         * @param {?} cpPresetEmptyMessageClass
         * @param {?} cpOKButton
         * @param {?} cpOKButtonClass
         * @param {?} cpOKButtonText
         * @param {?} cpCancelButton
         * @param {?} cpCancelButtonClass
         * @param {?} cpCancelButtonText
         * @param {?} cpAddColorButton
         * @param {?} cpAddColorButtonClass
         * @param {?} cpAddColorButtonText
         * @param {?} cpRemoveColorButtonClass
         * @return {?}
         */
            function (colorToggle, instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass) {
                if (common.isPlatformBrowser(this.platformId)) {
                    this.setInitialColor(color);
                    this.isIE10 = (detectIE() === 10);
                    this.directiveInstance = instance;
                    this.directiveElementRef = elementRef;
                    this.cpDisableInput = cpDisableInput;
                    this.cpAlphaChannel = cpAlphaChannel;
                    this.cpOutputFormat = cpOutputFormat;
                    this.cpDialogDisplay = cpDialogDisplay;
                    this.cpIgnoredElements = cpIgnoredElements;
                    this.cpSaveClickOutside = cpSaveClickOutside;
                    this.useRootViewContainer = cpUseRootViewContainer;
                    this.width = this.cpWidth = parseInt(cpWidth, 10);
                    this.height = this.cpHeight = parseInt(cpHeight, 10);
                    this.cpPosition = cpPosition;
                    this.cpPositionOffset = parseInt(cpPositionOffset, 10);
                    this.cpOKButton = cpOKButton;
                    this.cpOKButtonText = cpOKButtonText;
                    this.cpOKButtonClass = cpOKButtonClass;
                    this.cpCancelButton = cpCancelButton;
                    this.cpCancelButtonText = cpCancelButtonText;
                    this.cpCancelButtonClass = cpCancelButtonClass;
                    this.fallbackColor = cpFallbackColor || '#fff';
                    this.colorToggle = colorToggle;
                    this.setPresetConfig(cpPresetLabel, cpPresetColors);
                    this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
                    this.cpPresetEmptyMessage = cpPresetEmptyMessage;
                    this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
                    this.cpAddColorButton = cpAddColorButton;
                    this.cpAddColorButtonText = cpAddColorButtonText;
                    this.cpAddColorButtonClass = cpAddColorButtonClass;
                    this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
                    if (!cpPositionRelativeToArrow) {
                        this.dialogArrowOffset = 0;
                    }
                    if (this.cpDialogDisplay === 'inline') {
                        this.dialogArrowSize = 0;
                        this.dialogArrowOffset = 0;
                    }
                    if (cpOutputFormat === 'hex' && cpAlphaChannel !== 'always' && cpAlphaChannel !== 'hex8') {
                        this.cpAlphaChannel = 'disabled';
                    }
                }
            };
        /**
         * @param {?} color
         * @return {?}
         */
        ColorPickerComponent.prototype.setInitialColor = /**
         * @param {?} color
         * @return {?}
         */
            function (color) {
                this.initialColor = color;
            };
        /**
         * @param {?} cpPresetLabel
         * @param {?} cpPresetColors
         * @return {?}
         */
        ColorPickerComponent.prototype.setPresetConfig = /**
         * @param {?} cpPresetLabel
         * @param {?} cpPresetColors
         * @return {?}
         */
            function (cpPresetLabel, cpPresetColors) {
                this.cpPresetLabel = cpPresetLabel;
                this.cpPresetColors = cpPresetColors;
            };
        /**
         * @param {?} colorDropEnabled
         * @return {?}
         */
        ColorPickerComponent.prototype.setColorToggle = /**
         * @param {?} colorDropEnabled
         * @return {?}
         */
            function (colorDropEnabled) {
                this.colorToggle = colorDropEnabled;
            };
        /**
         * @param {?} value
         * @param {?=} emit
         * @param {?=} update
         * @return {?}
         */
        ColorPickerComponent.prototype.setColorFromString = /**
         * @param {?} value
         * @param {?=} emit
         * @param {?=} update
         * @return {?}
         */
            function (value, emit, update) {
                if (emit === void 0) {
                    emit = true;
                }
                if (update === void 0) {
                    update = true;
                }
                /** @type {?} */
                var hsva;
                if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'hex8') {
                    hsva = this.service.stringToHsva(value, true);
                    if (!hsva && !this.hsva) {
                        hsva = this.service.stringToHsva(value, false);
                    }
                }
                else {
                    hsva = this.service.stringToHsva(value, false);
                }
                if (!hsva && !this.hsva) {
                    hsva = this.service.stringToHsva(this.fallbackColor, false);
                }
                if (hsva) {
                    this.hsva = hsva;
                    this.sliderH = this.hsva.h;
                    this.updateColorPicker(emit, update);
                }
            };
        /**
         * @return {?}
         */
        ColorPickerComponent.prototype.onResize = /**
         * @return {?}
         */
            function () {
                if (this.position === 'fixed') {
                    this.setDialogPosition();
                }
                else if (this.cpDialogDisplay !== 'inline') {
                    this.closeColorPicker();
                }
            };
        /**
         * @param {?} slider
         * @return {?}
         */
        ColorPickerComponent.prototype.onDragEnd = /**
         * @param {?} slider
         * @return {?}
         */
            function (slider) {
                this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
            };
        /**
         * @param {?} slider
         * @return {?}
         */
        ColorPickerComponent.prototype.onDragStart = /**
         * @param {?} slider
         * @return {?}
         */
            function (slider) {
                this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerComponent.prototype.onMouseDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.isIE10 && this.cpDialogDisplay === 'popup' &&
                    event.target !== this.directiveElementRef.nativeElement &&
                    !this.isDescendant(this.elRef.nativeElement, event.target) &&
                    this.cpIgnoredElements.filter(function (item) { return item === event.target; }).length === 0) {
                    if (!this.cpSaveClickOutside) {
                        this.setColorFromString(this.initialColor, false);
                        this.directiveInstance.colorChanged(this.initialColor);
                    }
                    this.closeColorPicker();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerComponent.prototype.onAcceptColor = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                if (this.cpDialogDisplay === 'popup') {
                    this.closeColorPicker();
                }
                if (this.outputColor) {
                    this.directiveInstance.colorSelected(this.outputColor);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerComponent.prototype.onCancelColor = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                this.setColorFromString(this.initialColor, true);
                if (this.cpDialogDisplay === 'popup') {
                    this.directiveInstance.colorChanged(this.initialColor, true);
                    this.closeColorPicker();
                }
                this.directiveInstance.colorCanceled();
            };
        /**
         * @return {?}
         */
        ColorPickerComponent.prototype.onFormatToggle = /**
         * @return {?}
         */
            function () {
                this.format = (this.format + 1) % 3;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onColorChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.hsva.s = value.s / value.rgX;
                this.hsva.v = value.v / value.rgY;
                this.updateColorPicker();
                this.directiveInstance.sliderChanged({
                    slider: 'lightness',
                    value: this.hsva.v,
                    color: this.outputColor
                });
                this.directiveInstance.sliderChanged({
                    slider: 'saturation',
                    value: this.hsva.s,
                    color: this.outputColor
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onHueChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.hsva.h = value.v / value.rgX;
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
                this.directiveInstance.sliderChanged({
                    slider: 'hue',
                    value: this.hsva.h,
                    color: this.outputColor
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onAlphaChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.hsva.a = value.v / value.rgX;
                this.updateColorPicker();
                this.directiveInstance.sliderChanged({
                    slider: 'alpha',
                    value: this.hsva.a,
                    color: this.outputColor
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onHexInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value === null) {
                    this.updateColorPicker();
                }
                else {
                    if (value && value[0] !== '#') {
                        value = '#' + value;
                    }
                    this.setColorFromString(value, true, false);
                    this.directiveInstance.inputChanged({
                        input: 'hex',
                        value: value,
                        color: this.outputColor
                    });
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onRedInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var rgba = this.service.hsvaToRgba(this.hsva);
                rgba.r = value.v / value.rg;
                this.hsva = this.service.rgbaToHsva(rgba);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
                this.directiveInstance.inputChanged({ input: 'red', value: rgba.r, color: this.outputColor });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onBlueInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var rgba = this.service.hsvaToRgba(this.hsva);
                rgba.b = value.v / value.rg;
                this.hsva = this.service.rgbaToHsva(rgba);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
                this.directiveInstance.inputChanged({ input: 'blue', value: rgba.b, color: this.outputColor });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onGreenInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var rgba = this.service.hsvaToRgba(this.hsva);
                rgba.g = value.v / value.rg;
                this.hsva = this.service.rgbaToHsva(rgba);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
                this.directiveInstance.inputChanged({
                    input: 'green',
                    value: rgba.g,
                    color: this.outputColor
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onAlphaInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.hsva.a = value.v / value.rg;
                this.updateColorPicker();
                this.directiveInstance.inputChanged({
                    input: 'alpha',
                    value: this.hsva.a,
                    color: this.outputColor
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onHueInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.hsva.h = value.v / value.rg;
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
                this.directiveInstance.inputChanged({
                    input: 'hue',
                    value: this.hsva.h,
                    color: this.outputColor
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onLightnessInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var hsla = this.service.hsva2hsla(this.hsva);
                hsla.l = value.v / value.rg;
                this.hsva = this.service.hsla2hsva(hsla);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
                this.directiveInstance.inputChanged({
                    input: 'lightness',
                    value: hsla.l,
                    color: this.outputColor
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onSaturationInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var hsla = this.service.hsva2hsla(this.hsva);
                hsla.s = value.v / value.rg;
                this.hsva = this.service.hsla2hsva(hsla);
                this.sliderH = this.hsva.h;
                this.updateColorPicker();
                this.directiveInstance.inputChanged({
                    input: 'saturation',
                    value: hsla.s,
                    color: this.outputColor
                });
            };
        /**
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onAddPresetColor = /**
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
            function (event, value) {
                event.stopPropagation();
                if (!this.cpPresetColors.filter(function (color) { return (color === value); }).length) {
                    this.cpPresetColors = this.cpPresetColors.concat(value);
                    this.directiveInstance.presetColorsChanged(this.cpPresetColors);
                }
            };
        /**
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        ColorPickerComponent.prototype.onRemovePresetColor = /**
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
            function (event, value) {
                event.stopPropagation();
                this.cpPresetColors = this.cpPresetColors.filter(function (color) { return (color !== value); });
                this.directiveInstance.presetColorsChanged(this.cpPresetColors);
            };
        // Private helper functions for the color picker dialog status
        // Private helper functions for the color picker dialog status
        /**
         * @private
         * @return {?}
         */
        ColorPickerComponent.prototype.openColorPicker =
            // Private helper functions for the color picker dialog status
            /**
             * @private
             * @return {?}
             */
            function () {
                var _this = this;
                if (!this.show) {
                    this.show = true;
                    this.hidden = true;
                    setTimeout(function () {
                        _this.hidden = false;
                        _this.setDialogPosition();
                        _this.cdRef.detectChanges();
                    }, 0);
                    this.directiveInstance.toggle(true);
                    if (!this.isIE10) {
                        document.addEventListener('mousedown', this.listenerMouseDown);
                    }
                    window.addEventListener('resize', this.listenerResize);
                }
            };
        /**
         * @private
         * @return {?}
         */
        ColorPickerComponent.prototype.closeColorPicker = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.show) {
                    this.show = false;
                    this.directiveInstance.toggle(false);
                    if (!this.isIE10) {
                        document.removeEventListener('mousedown', this.listenerMouseDown);
                    }
                    window.removeEventListener('resize', this.listenerResize);
                    if (!this.cdRef['destroyed']) {
                        this.cdRef.detectChanges();
                    }
                }
            };
        /**
         * @private
         * @param {?=} emit
         * @param {?=} update
         * @return {?}
         */
        ColorPickerComponent.prototype.updateColorPicker = /**
         * @private
         * @param {?=} emit
         * @param {?=} update
         * @return {?}
         */
            function (emit, update) {
                if (emit === void 0) {
                    emit = true;
                }
                if (update === void 0) {
                    update = true;
                }
                if (this.sliderDimMax) {
                    /** @type {?} */
                    var lastOutput = this.outputColor;
                    /** @type {?} */
                    var hsla = this.service.hsva2hsla(this.hsva);
                    /** @type {?} */
                    var rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
                    /** @type {?} */
                    var hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
                    if (update) {
                        this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                        this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
                        /** @type {?} */
                        var allowHex8 = this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'hex8';
                        this.hexText = this.service.rgbaToHex(rgba, allowHex8);
                    }
                    this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
                    this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                    this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
                    this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
                    this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
                    if (emit && lastOutput !== this.outputColor) {
                        this.directiveInstance.colorChanged(this.outputColor);
                    }
                }
            };
        // Private helper functions for the color picker dialog positioning
        // Private helper functions for the color picker dialog positioning
        /**
         * @private
         * @return {?}
         */
        ColorPickerComponent.prototype.setDialogPosition =
            // Private helper functions for the color picker dialog positioning
            /**
             * @private
             * @return {?}
             */
            function () {
                if (this.cpDialogDisplay === 'inline') {
                    this.position = 'relative';
                }
                else {
                    /** @type {?} */
                    var dialogHeight = this.dialogElement.nativeElement.offsetHeight;
                    /** @type {?} */
                    var position = 'static';
                    /** @type {?} */
                    var transform = '';
                    /** @type {?} */
                    var style = null;
                    /** @type {?} */
                    var parentNode = null;
                    /** @type {?} */
                    var transformNode = null;
                    /** @type {?} */
                    var node = this.directiveElementRef.nativeElement.parentNode;
                    while (node !== null && node.tagName !== 'HTML') {
                        style = window.getComputedStyle(node);
                        position = style.getPropertyValue('position');
                        transform = style.getPropertyValue('transform');
                        if (position !== 'static' && parentNode === null) {
                            parentNode = node;
                        }
                        if (transform && transform !== 'none' && transformNode === null) {
                            transformNode = node;
                        }
                        if (position === 'fixed') {
                            parentNode = transformNode;
                            break;
                        }
                        node = node.parentNode;
                    }
                    /** @type {?} */
                    var boxDirective = this.createBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
                    if (this.useRootViewContainer || (position === 'fixed' && !parentNode)) {
                        this.top = boxDirective.top;
                        this.left = boxDirective.left;
                    }
                    else {
                        if (parentNode === null) {
                            parentNode = node;
                        }
                        /** @type {?} */
                        var boxParent = this.createBox(parentNode, (position !== 'fixed'));
                        this.top = boxDirective.top - boxParent.top;
                        this.left = boxDirective.left - boxParent.left;
                    }
                    if (position === 'fixed') {
                        this.position = 'fixed';
                    }
                    if (this.cpPosition === 'left') {
                        this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                        this.left -= this.cpWidth + this.dialogArrowSize - 2;
                    }
                    else if (this.cpPosition === 'top') {
                        this.arrowTop = dialogHeight - 1;
                        this.top -= dialogHeight + this.dialogArrowSize;
                        this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
                    }
                    else if (this.cpPosition === 'bottom') {
                        this.top += boxDirective.height + this.dialogArrowSize;
                        this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
                    }
                    else {
                        this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                        this.left += boxDirective.width + this.dialogArrowSize - 2;
                    }
                }
            };
        // Private helper functions for the color picker dialog positioning and opening
        // Private helper functions for the color picker dialog positioning and opening
        /**
         * @private
         * @param {?} element
         * @param {?} offset
         * @return {?}
         */
        ColorPickerComponent.prototype.createBox =
            // Private helper functions for the color picker dialog positioning and opening
            /**
             * @private
             * @param {?} element
             * @param {?} offset
             * @return {?}
             */
            function (element, offset) {
                return {
                    top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
                    left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
                    width: element.offsetWidth,
                    height: element.offsetHeight
                };
            };
        /**
         * @private
         * @param {?} parent
         * @param {?} child
         * @return {?}
         */
        ColorPickerComponent.prototype.isDescendant = /**
         * @private
         * @param {?} parent
         * @param {?} child
         * @return {?}
         */
            function (parent, child) {
                /** @type {?} */
                var node = child.parentNode;
                while (node !== null) {
                    if (node === parent) {
                        return true;
                    }
                    node = node.parentNode;
                }
                return false;
            };
        ColorPickerComponent.decorators = [
            { type: i0.Component, args: [{
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: '[color-picker]',
                        template: "<div\n  #dialogPopup\n  class=\"color-picker\"\n  [style.visibility]=\"hidden || !show ? 'hidden' : 'visible'\" [style.top.px]=\"top\"\n  [style.left.px]=\"left\"\n  [style.position]=\"position\"\n  [style.height.px]=\"cpHeight\"\n  [style.width]=\"colorToggle ? '100%' : cpWidth + 'px'\"\n>\n  <div\n    *ngIf=\"!colorToggle\"\n    class=\"\n    color-switch-container\n    color-input-container\n    sem-color-light-inputs pb1\">\n    <div class=\"block py1\">\n      <div class=\"flex justify-end  sem-typo--figcaption\"\n        *ngIf=\"!cpDisableInput\" (click)=\"onFormatToggle()\">\n\n        <button\n          sem-button role=\"button\"\n          class=\"sem-button sem-button--link sem-button--link--primary\">\n          Change format\n          <span class=\"sem-icon-drop_icon\"></span>\n        </button>\n\n\n\n      </div>\n    </div>\n    <div class=\"sem-color-switch flex items-center\">\n      <ul class=\"list-reset sem-color-switch--colors flex-auto\">\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"\n                sem-input sem-input--small boxes mr1 \"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"360\"\n                [text] [rg]=\"360\" [value]=\"hslaText?.h\" (newValue)=\"onHueInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">\n                H</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"\n                sem-input sem-input--small boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.s\" (newValue)=\"onSaturationInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">\n                S</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"\n                 sem-input sem-input--small boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.l\" (newValue)=\"onLightnessInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">\n                L</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"\n                 sem-input sem-input--small boxes table-cell\"\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\" [value]=\"hslaText?.a\" (newValue)=\"onAlphaInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">\n                A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 1 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (newValue)=\"onRedInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">\n                R</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes\"\n                type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (newValue)=\"onGreenInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">\n                G</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (newValue)=\"onBlueInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">\n                B</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"sem-input sem-input--small boxes\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\"\n                min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\"\n                [value]=\"rgbaText?.a\" (newValue)=\"onAlphaInput($event)\"\n              />\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">\n                A\n              </span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 0 ? 'none' : 'block'\">\n          <div class=\"sem-default_bg \">\n            <span class=\"input-grp\">\n              <input\n                type=\"text\"\n                class=\"sem-input sem-input--small  sem-input--secondary\"\n                [text] [value]=\"hexText\"\n                (blur)=\"onHexInput(null)\"\n                (newValue)=\"onHexInput($event)\"\n              >\n              <button\n                class=\"\n                sem-button\n                sem-button--dnd_small\n                sem-button--dnd--tertiary\n                sem-button--dnd sem-button--dnd\"\n                *ngIf=\"cpAddColorButton\"\n                [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\n                (click)=\"onAddPresetColor($event, selectedColor)\"\n              >\n               <span class=\"sem-icon-send\"></span>\n              </button>\n            </span>\n            <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">Hex</span>\n          </div>\n\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"px1\">\n    <div\n      #hueSlider\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      class=\"hue\"\n      [slider] [rgX]=\"1\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n      <div class=\"cursor\" [style.left.px]=\"slider.h\"></div>\n\n    </div>\n    <div\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      *ngIf=\"cpDialogDisplay=='popup'\"\n      class=\"arrow arrow-{{cpPosition}}\"\n      [style.top.px]=\"arrowTop\"></div>\n    <div\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      class=\"saturation-lightness\"\n      [slider] [rgX]=\"1\" [rgY]=\"1\"\n      [style.background-color]=\"hueSliderColor\"\n      (newValue)=\"onColorChange($event)\"\n      (dragStart)=\"onDragStart('saturation-lightness')\"\n      (dragEnd)=\"onDragEnd('saturation-lightness')\">\n      <div class=\"cursor\" [style.top.px]=\"slider.v\" [style.left.px]=\"slider.s\"></div>\n    </div>\n    <div\n      #alphaSlider\n      class=\"alpha\"\n      [slider]\n      [rgX]=\"1\"\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      [style.background-color]=\"alphaSliderColor\"\n      (newValue)=\"onAlphaChange($event)\"\n      (dragStart)=\"onDragStart('alpha')\"\n      (dragEnd)=\"onDragEnd('alpha')\">\n      <div class=\"cursor\" [style.left.px]=\"slider.a\"></div>\n    </div>\n  </div>\n\n  <!--Color drops-->\n  <div\n    *ngIf=\"colorToggle\"\n    class=\"sem-color-drops\">\n\n    <ng-container *ngIf=\"cpPresetColors?.length || cpAddColorButton\">\n      <ul *ngIf=\"cpPresetColors?.length\"\n          class=\"\n            sem-colorlist\n            sem-list-reset\n            temp-colorlist-container\">\n\n\n        <li\n          *ngFor=\"let color of cpPresetColors | reverse\"\n          [style.backgroundColor]=\"color\"\n          class=\"block p2 relative sem-colorlist--list\"\n          (click)=\"setColorFromString(color)\"\n          dnd-draggable\n          [dragEnabled]=\"true\"\n          [dragData]=\"color\"\n          (onDragStart)=\"onDragStart(color)\"\n          [dropZones]=\"['widget-dropZone']\"\n        >\n          <div class=\"sem-colorlist--list--inner\">\n            <span\n              *ngIf=\"cpAddColorButton\"\n              class=\"sem-icon-close absolute top-0  right-0 m1 sem-colorlist--closebutton\"\n              (click)=\"onRemovePresetColor($event, color)\"\n            >\n            </span>\n                  <span class=\"sem-icon-drag absolute top-1 left-1\"></span>\n                  <span class=\"ml3 right-align block\">\n               <strong>{{color}}</strong>\n            </span>\n          </div>\n        </li>\n      </ul>\n      <div\n        *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\n        class=\"{{cpPresetEmptyMessageClass}}\n          \">{{cpPresetEmptyMessage}}</div>\n    </ng-container>\n  </div>\n\n  <div\n    *ngIf=\"!colorToggle\"\n    class=\"sem-swatches-container\">\n    <!--<div class=\"sem-color-swatches_current\"></div>-->\n    <button\n      sem-button role=\"button\"\n      class=\"\n      sem-button\n      sem-button_medium\n      sem-button--dnd\n      sem-button--dnd sem-button--dnd_medium\"\n      [style.background-color]=\"selectedColor\"\n      *ngIf=\"cpAddColorButton\"\n      [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\n      (click)=\"onAddPresetColor($event, selectedColor)\">\n      Add\n    </button>\n    <div\n      *ngIf=\"cpPresetColors?.length || cpAddColorButton\"\n      class=\"sem-swatches-container--list\">\n\n      <div\n        *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\n        class=\"{{cpPresetEmptyMessageClass}}\n          \">\n        {{cpPresetEmptyMessage}}\n      </div>\n\n\n      <button\n        *ngFor=\"let color of cpPresetColors | reverse\"\n        sem-button role=\"button\"\n        class=\"sem-button sem-button--fab\n               sem-button--fab_medium sem-button--fab_top-middle\n                relative\"\n        [style.backgroundColor]=\"color\"\n        (click)=\"setColorFromString(color)\"\n      >\n        <button\n          *ngIf=\"cpAddColorButton\"\n          sem-button role=\"button\"\n          class=\"sem-button sem-button--fab--danger\n          sem-button--fab sem-button--fab_xsmall\n          sem-button--fab_circle mr1 absolute \"\n          (click)=\"onRemovePresetColor($event, color)\"\n        >\n          <span class=\"sem-icon-close\"></span>\n        </button>\n      </button>\n\n      <!--<span-->\n        <!--*ngFor=\"let color of cpPresetColors | reverse\"-->\n        <!--class=\"sem-button-rain-drop\"-->\n        <!--[style.backgroundColor]=\"color\"-->\n        <!--(click)=\"setColorFromString(color)\"-->\n      <!--&gt;-->\n          <!--<span-->\n            <!--*ngIf=\"cpAddColorButton\"-->\n            <!--(click)=\"onRemovePresetColor($event, color)\"-->\n            <!--class=\"sem-button-circle sem-button-delete sem-icon-close\">-->\n          <!--</span>-->\n       <!--</span>-->\n\n\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"colorToggle\"\n    class=\"\n    color-switch-container\n    color-input-container\n    sem-color-light-inputs\">\n\n    <div class=\"block py1\">\n      <div class=\"flex justify-end  sem-typo--figcaption\"\n           *ngIf=\"!cpDisableInput\" (click)=\"onFormatToggle()\">\n\n        <button\n          sem-button role=\"button\"\n          class=\"sem-button sem-button--link sem-button--link--primary\">\n          Change format\n          <span class=\"sem-icon-drop_icon\"></span>\n        </button>\n\n      </div>\n    </div>\n\n    <div class=\"sem-color-switch flex items-center\">\n      <ul class=\"list-reset sem-color-switch--colors flex-auto\">\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes mr1 \"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"360\"\n                [text] [rg]=\"360\" [value]=\"hslaText?.h\" (newValue)=\"onHueInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">H</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.s\" (newValue)=\"onSaturationInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">S</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.l\" (newValue)=\"onLightnessInput($event)\"/>\n              <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">L</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes\"\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\" [value]=\"hslaText?.a\" (newValue)=\"onAlphaInput($event)\"/>\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 1 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (newValue)=\"onRedInput($event)\"/>\n              <span\n                class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">R</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes\"\n                type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (newValue)=\"onGreenInput($event)\"/>\n              <span\n                class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">G</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (newValue)=\"onBlueInput($event)\"/>\n              <span\n                class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">B</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"sem-input sem-input--small boxes\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\"\n                min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\"\n                [value]=\"rgbaText?.a\" (newValue)=\"onAlphaInput($event)\"\n              />\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li\n          *ngIf=\"!cpDisableInput\"\n          [style.display]=\"format !== 0 ? 'none' : 'block'\">\n\n\n          <div class=\"sem-default_bg \">\n            <span class=\"input-grp\">\n              <input\n                type=\"text\"\n                class=\"sem-input sem-input--small  sem-input--secondary\"\n                [text] [value]=\"hexText\"\n                (blur)=\"onHexInput(null)\"\n                (newValue)=\"onHexInput($event)\"\n              >\n              <button\n                class=\"\n                sem-button\n                sem-button--dnd_small\n                sem-button--dnd--tertiary\n                sem-button--dnd sem-button--dnd\"\n                *ngIf=\"cpAddColorButton\"\n                [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\n                (click)=\"onAddPresetColor($event, selectedColor)\"\n              >\n               <span class=\"sem-icon-send\"></span>\n              </button>\n            </span>\n            <span class=\"\n                sem-secondary\n                block center\n                sem-typo--sub-caption\">Hex</span>\n          </div>\n\n        </li>\n      </ul>\n\n    </div>\n  </div>\n\n  <!-- START -->\n\n\n\n\n <!-- END -->\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
                        styles: ["body{margin:0;font-size:100%;height:100%}html{height:100%;box-sizing:border-box}*,:after,:before{box-sizing:inherit}[class*=\" sem-icon-\"],[class^=sem-icon-]{vertical-align:middle;font-family:sembler-ico!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sem-icon-drop_icon:before{content:\"\\e90b\";color:#444d63}.sem-icon-drag:before{content:\"\\e946\";color:#ccc}.sem-icon-product:before{content:\"\\e913\";color:#444d63}.sem-icon-form:before{content:\"\\e92a\";color:#444d63}.sem-icon-location:before{content:\"\\e914\";color:#444d63}.sem-icon-chart:before{content:\"\\e935\";color:#444d63}.sem-icon-text:before{content:\"\\e945\";color:#444d63}.sem-icon-location2:before{content:\"\\e947\";color:#444d63}.sem-icon-I:before{content:\"\\e906\"}.sem-icon-S:before{content:\"\\e907\"}.sem-icon-U:before{content:\"\\e908\"}.sem-icon-B:before{content:\"\\e909\"}.sem-icon-justify:before{content:\"\\e90c\";color:#ccc}.sem-icon-left:before{content:\"\\e910\";color:#ccc}.sem-icon-middle:before{content:\"\\e911\";color:#ccc}.sem-icon-right:before{content:\"\\e912\";color:#ccc}.sem-icon-colour2:before{content:\"\\e90a\"}.sem-icon-brush:before{content:\"\\e90b\"}.sem-icon-folder2:before{content:\"\\e90d\"}.sem-icon-logout2:before{content:\"\\e90e\"}.sem-icon-ol2:before{content:\"\\e90f\";color:#ccc}.sem-icon-send:before{content:\"\\e905\";color:#05dcb6}.sem-icon-repeat:before{content:\"\\e900\"}.sem-icon-crop:before{content:\"\\e901\"}.sem-icon-case:before{content:\"\\e902\"}.sem-icon-resize:before{content:\"\\e903\"}.sem-icon-check:before{content:\"\\e904\"}.sem-icon-ol:before{content:\"\\e915\";color:#ccc}.sem-icon-ul:before{content:\"\\e916\";color:#ccc}.sem-icon-folder:before{content:\"\\e917\"}.sem-icon-close:before{content:\"\\e918\"}.sem-icon-inbox:before{content:\"\\e919\"}.sem-icon-home:before{content:\"\\e91a\"}.sem-icon-share:before{content:\"\\e91b\"}.sem-icon-hamburger:before{content:\"\\e91c\"}.sem-icon-lock:before{content:\"\\e91d\"}.sem-icon-unlock:before{content:\"\\e91e\"}.sem-icon-ellipse:before{content:\"\\e91f\"}.sem-icon-volume:before{content:\"\\e920\"}.sem-icon-play:before{content:\"\\e921\"}.sem-icon-video:before{content:\"\\e922\";color:#444d63}.sem-icon-design:before{content:\"\\e923\"}.sem-icon-address:before{content:\"\\e924\"}.sem-icon-center_align:before{content:\"\\e925\";color:#ccc}.sem-icon-justify2:before{content:\"\\e926\";color:#ccc}.sem-icon-right_align:before{content:\"\\e927\";color:#ccc}.sem-icon-left_align:before{content:\"\\e928\";color:#ccc}.sem-icon-carousel:before{content:\"\\e929\"}.sem-icon-image:before{content:\"\\e92b\";color:#444d63}.sem-icon-back:before{content:\"\\e92c\"}.sem-icon-delete:before{content:\"\\e92d\";color:#d0021b}.sem-icon-duplicate:before{content:\"\\e92e\"}.sem-icon-link:before{content:\"\\e92f\"}.sem-icon-style:before{content:\"\\e930\"}.sem-icon-colour:before{content:\"\\e931\"}.sem-icon-add_accent .path1:before{content:\"\\e932\";color:#fafafa}.sem-icon-add_accent .path2:before{content:\"\\e933\";margin-left:-1em;color:#05dcb6}.sem-icon-send2:before{content:\"\\e934\";color:#05dcb6}.sem-icon-search:before{content:\"\\e936\"}.sem-icon-colour_accent .path1:before{content:\"\\e937\";color:#05dcb6}.sem-icon-colour_accent .path2:before{content:\"\\e938\";margin-left:-1em;color:#fff}.sem-icon-profile-accent .path1:before{content:\"\\e939\";color:#05dcb6}.sem-icon-profile-accent .path2:before{content:\"\\e93a\";margin-left:-1em;color:#fff}.sem-icon-down_arrow:before{content:\"\\e93b\"}.sem-icon-chat_accent .path1:before{content:\"\\e93c\";color:#fafafa}.sem-icon-chat_accent .path2:before{content:\"\\e93d\";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path3:before{content:\"\\e93e\";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path4:before{content:\"\\e93f\";margin-left:-1em;color:#05dcb6}.sem-icon-logout:before{content:\"\\e940\"}.sem-icon-payment:before{content:\"\\e941\"}.sem-icon-settings:before{content:\"\\e942\"}.sem-icon-sites:before{content:\"\\e943\"}.sem-icon-profile:before{content:\"\\e944\"}.sem-list-reset{list-style:none;padding-left:0;margin:0}.sem-border{border-style:solid;border-width:1px}.sem-border-top{border-top:1px solid #ccc}.sem-border-right{border-right:1px solid #ccc}.sem-border-bottom{border-bottom:1px solid #ccc}.sem-border-left{border-left:1px solid #ccc}.sem-border-none{border:0}.sem-rounded{border-radius:3px}.sem-circle{border-radius:50%}.sem-rounded-top{border-radius:3px 3px 0 0}.sem-rounded-right{border-radius:0 3px 3px 0}.sem-rounded-bottom{border-radius:0 0 3px 3px}.sem-rounded-left{border-radius:3px 0 0 3px}.sem-not-rounded{border-radius:0}.sem-button-circle{border-radius:50%;position:absolute;display:block;cursor:pointer;text-align:center;background:#fff;font-weight:700}.sem-button-circle:before{padding:0 0 0 1px}.sem-button-delete{color:#fff;font-size:6px;padding:.3rem;background-color:#d0021b;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.bullet-inlinelist li{vertical-align:top;margin:0 -2px}.bullet-inlinelist li .select{display:block;width:22px}.bullet-inlinelist li .select select{display:none}.bullet-inlinelist li.active .select select{display:inline}.bullet-inlinelist li.active::after{background-color:red}.bullet-inlinelist li::before{content:'';top:-5px;left:0;width:100%;border-top:1px solid #000}.bullet-inlinelist li::after{background-color:#002;display:block;top:-9px;left:38%;width:9px;height:9px;border-radius:50%;content:''}.bullet-inlinelist li:first-child::before{left:38%}.bullet-inlinelist li:last-child::before{left:-44%}.sem-button-rain-drop{position:relative;display:inline-block;width:23px;height:23px;margin:4px 6px 8px;cursor:pointer}.sem-button-rain-drop .sem-button-delete{font-size:6px;top:6px;right:-9px}.sem-demo-sidebar{position:fixed;overflow-y:scroll;height:100%;width:160px;background:#444d63}.sem-demo-sidebar figcaption{color:#9bc1bc}.sem-demo-sidebar a,.sem-demo-sidebar li{text-decoration:none}.sem-demo-sidebar a:hover,.sem-demo-sidebar li:hover{color:#002}.sem-demo-sidebar a.active,.sem-demo-sidebar li.active{background-color:#05dcb6}.sem-demo-sidebar::-webkit-scrollbar{-webkit-appearance:none;width:7px}.sem-demo-sidebar::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,.5);-webkit-box-shadow:0 0 1px rgba(255,255,255,.5)}.sem-demo-content{display:block;min-height:100%;padding-left:160px;background-color:#f1f1f1}.corner_top{border-radius:6px 6px 0 0;background-clip:padding-box}.corner_bottom{border-radius:0 0 6px 6px;background-clip:padding-box}.corner_none{border-radius:0;background-clip:padding-box}.corner_all{border-radius:6px;background-clip:padding-box}.corner_right{border-radius:6px 0 0 6px;background-clip:padding-box}.corner_left{border-radius:0 6px 6px 0;background-clip:padding-box}.corner_top-left{border-radius:0 6px 6px;background-clip:padding-box}.corner_top-right{border-radius:6px 0 6px 6px;background-clip:padding-box}.corner_bottom-left,.corner_bottom-right{border-radius:6px 6px 0;background-clip:padding-box}.sem-pagination-container{display:flex;align-items:center;justify-content:center}.sem-pagination-nav{max-width:300px}.sem-pagination-nav>div{flex:1;text-align:center;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.sem-pagination-next a{text-align:left}.sem-pagination-previous a{text-align:right}.sem-pagination a,.sem-pagination-next a,.sem-pagination-previous a{display:inline-block;vertical-align:middle}.sem-pagination.active div{border:none;display:inline-block;vertical-align:middle}.sem-pagination.active div:not([disabled]){cursor:pointer}.sem-avatar{width:40px;height:40px}.sem-avatar .sem-avatar__img{width:100%;height:100%}.dialog-container,.sem-colorlist--container,.sem-shadow,.sidebar-container{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dialog-container:hover,.sem-colorlist--container:hover,.sem-shadow:hover,.sidebar-container:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.sem-shadow_small{box-shadow:0 1px 2px rgba(0,0,0,.7),0 1px 2px rgba(0,0,0,.24)}.sem-shadow_small:hover{box-shadow:0 2px 3px rgba(0,0,0,.9),0 10px 10px rgba(0,0,0,.19)}.dialog-container{overflow:auto;border-radius:0 12px 12px;background-clip:padding-box;transition:.3s cubic-bezier(.25,.8,.25,1)}.dialog-container--colordrop{border-radius:0;background-clip:padding-box;box-shadow:none}.dialog-container--colordrop:hover{box-shadow:none}.dialog-container--colordrop .dialog-container--header{border-radius:12px 0 0 12px;background-clip:padding-box}.dialog-container--colordrop .dialog-container--body{padding-left:26px;border-radius:0 0 12px 12px;background-clip:padding-box}.dialog-container-full{height:100%;z-index:2}.dialog-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.dialog-container--body,.dialog-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.dialog-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist{overflow:auto}.sem-colorlist--container{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist--list{min-height:20px}.sem-colorlist--list--inner{display:none}.sem-colorlist--list:hover .sem-colorlist--list--inner{display:block}.sem-colorlist--closebutton{font-size:11px}.browser-container{height:calc(100% - 30px - 20px);display:block;position:relative;margin:0 20px;border-radius:10px}.browser-container .layout{height:100%;width:100%;overflow:scroll}.browser-container::before{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;content:'';position:absolute;top:-20px;left:15px;width:10px;height:10px;border-radius:50%}.semui-form-select select{display:inline-block;margin-left:10%;width:80%;margin-right:10%;border:1px solid #d8cfcf;border-radius:10px;font-size:1.8em;color:#d8cfcf;cursor:pointer}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input.sem-input{width:calc(100%);outline:0;border-radius:10px 10px 0;background-clip:padding-box}figure.semui-thumbnail input.figcaption-container,input.block,input.semui-tabs{display:inline-block;width:auto}.sem-ul-icon-list>div .sem-li{border-bottom:1px solid #ccc}.sem-ul-icon-list>div:last-child .sem-li{border-bottom:0 solid #ccc}.no-padding-list .sem-ul .sem-li,.no-padding-list .sem-ul-icon-list .sem-li{padding-top:0;padding-bottom:0}.sem-ul-icon-list .sem-li{white-space:nowrap;-webkit-font-smoothing:antialiased;padding-top:.45rem;padding-bottom:.45rem;cursor:pointer}.sem-ul-icon-list .sem-li:not([disabled]){cursor:pointer}.sem-ul-icon-list .sem-li.active img.icon-default{display:none}.sem-ul-icon-list .sem-li.active img.icon-hover{display:inline-block}.sem-ul-icon-list .sem-li img{display:inline-block;vertical-align:middle;margin-bottom:4px}.sem-ul-icon-list .sem-li img.icon-hover{display:none}.sem-ul{list-style:none;width:100%;margin:0 auto;padding:0}.sem-ul .sem-li{padding-top:.45rem;padding-bottom:.45rem;cursor:pointer}.sem-ul .sem-li:not([disabled]){cursor:pointer}.sem-ul .sem-li.active{border-radius:7px 0 0 7px;background-clip:padding-box}ul.corner_all li:first-child{border-radius:6px 6px 0 0;background-clip:padding-box}ul.corner_all li:last-child{border-radius:0 0 11px 11px;background-clip:padding-box}.sidebar-container{border-radius:0 12px 12px;background-clip:padding-box;transition:.3s cubic-bezier(.25,.8,.25,1)}.sidebar-container-full{height:100%}.sidebar-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.sidebar-container--body,.sidebar-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.sidebar-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-color-swatches{flex-wrap:nowrap}.sem-color-swatches_current{flex-grow:1}.sem-color-swatches_current button{margin-top:10px}.sem-color-swatches_preselected{margin-top:13px;margin-left:-10px;margin-bottom:0;flex-grow:1;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden;height:67px}.section-list{overflow:scroll;height:84%}.section-container{border:1px solid grey;display:block;width:100%}.sections-search{height:16%;background-color:grey}.sidebar-dialog{width:142%;position:absolute;top:0;height:100%}.h1{font-size:2rem}.h2{font-size:1.5rem}.h3{font-size:1.25rem}.h4{font-size:1rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1}.line-height-2{line-height:1.125}.line-height-3{line-height:1.25}.line-height-4{line-height:1.5}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block,.semui-tabs,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{display:block}.bullet-inlinelist li,.inline-block,.semui-tabs .semui-tabs--navlist_horizontal li,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit,.sem-avatar .sem-avatar__img{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button,figure,h1,h2,h3,h4,h5{margin:0}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.mt0,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0{margin-left:0}.mx0,.sem-pagination-nav{margin-left:0;margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:.5rem}.mt1{margin-top:.5rem}.mr1{margin-right:.5rem}.mb1{margin-bottom:.5rem}.ml1{margin-left:.5rem}.mx1,figure.semui-thumbnail button{margin-left:.5rem;margin-right:.5rem}.my1,.semui-tabs .semui-tabs--navlist_horizontal{margin-top:.5rem;margin-bottom:.5rem}.m2{margin:1rem}.mt2{margin-top:1rem}.mr2{margin-right:1rem}.mb2{margin-bottom:1rem}.ml2{margin-left:1rem}.mx2{margin-left:1rem;margin-right:1rem}.my2{margin-top:1rem;margin-bottom:1rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.sem-colorlist--container{margin-left:2rem}.mx3{margin-left:2rem;margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:4rem}.mt4{margin-top:4rem}.mr4{margin-right:4rem}.mb4{margin-bottom:4rem}.ml4{margin-left:4rem}.mx4{margin-left:4rem;margin-right:4rem}.my4{margin-top:4rem;margin-bottom:4rem}.mxn1{margin-left:-.5rem;margin-right:-.5rem}.mxn2{margin-left:-1rem;margin-right:-1rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-4rem;margin-right:-4rem}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.mx-auto{margin-left:auto;margin-right:auto}.browser-container,.p0,figure,h1,h2,h3,h4,h5{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0{padding-left:0}.px0{padding-left:0;padding-right:0}.py0,.sem-ul-icon-list .sem-li.no-padding{padding-top:0;padding-bottom:0}.corner,.p1,.sem-color-list li,.sem-section--corner{padding:.5rem}.pt1{padding-top:.5rem}.pr1,.semui-tabs .semui-tabs--navlist_horizontal{padding-right:.5rem}.pb1{padding-bottom:.5rem}.pl1,.semui-tabs .semui-tabs--navlist_horizontal{padding-left:.5rem}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.py1,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header,figure.semui-thumbnail figcaption{padding-top:.5rem;padding-bottom:.5rem}.dialog-container--body_spaced,.dialog-container--header,.px1,.sidebar-container--body_spaced,.sidebar-container--header{padding-left:.5rem;padding-right:.5rem}.p2{padding:1rem}.pt2{padding-top:1rem}.pr2{padding-right:1rem}.pb2{padding-bottom:1rem}.pl2{padding-left:1rem}.py2{padding-top:1rem;padding-bottom:1rem}.bullet-inlinelist li,.dialog-container--footer,.px2,.sem-color-list li,.sem-ul .sem-li,.sem-ul-icon-list .sem-li,.sidebar-container--footer,figure.semui-thumbnail figcaption{padding-left:1rem;padding-right:1rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3{padding-left:2rem;padding-right:2rem}.p4{padding:4rem}.pt4{padding-top:4rem}.pr4{padding-right:4rem}.pb4{padding-bottom:4rem}.pl4{padding-left:4rem}.py4{padding-top:4rem;padding-bottom:4rem}.px4{padding-left:4rem;padding-right:4rem}.col,.sem-demo-content,.sem-demo-sidebar{float:left;box-sizing:border-box}.col-right{float:right;box-sizing:border-box}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12,.sem-demo-content{width:100%}.flex,.sem-color-swatches,.sem-pagination-nav{display:flex}@media (min-width:40em){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}.sm-flex{display:flex}}@media (min-width:52em){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}.md-flex{display:flex}}@media (min-width:64em){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}.lg-flex{display:flex}.lg-hide{display:none!important}}.flex-column{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.self-stretch{align-self:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-center{align-content:center}.content-between{align-content:space-between}.content-around{align-content:space-around}.content-stretch{align-content:stretch}.flex-auto{flex:1 1 auto;min-width:0;min-height:0}.flex-none{flex:none}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-last{order:99999}.bullet-inlinelist li,.color-picker .saturation-lightness,.relative,.sem-color-list li,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{position:relative}.absolute,.bullet-inlinelist li::after,.bullet-inlinelist li::before,.color-picker,.sem-color-list li .color-delete,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after,figure.semui-thumbnail button,figure.semui-thumbnail figcaption{position:absolute}.fixed{position:fixed}.dialog-container-full,.sem-color-list li .color-delete,.top-0,figure.semui-thumbnail button{top:0}.right-0,.sem-color-list li .color-delete,figure.semui-thumbnail button{right:0}.bottom-0,figure.semui-thumbnail figcaption{bottom:0}.left-0,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle,.sem-avatar .sem-avatar__img{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40em){.xs-hide{display:none!important}}@media (min-width:40em) and (max-width:52em){.sm-hide{display:none!important}}@media (min-width:52em) and (max-width:64em){.md-hide{display:none!important}}.display-none{display:none!important}.sem-label-button{text-align:center;font-weight:700;text-transform:uppercase;text-shadow:1px 1px 1px #585858;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:12px 12px 0;background-clip:padding-box;cursor:pointer;border:none}.sem-label-button:not([disabled]){cursor:pointer}.sem-label-button_square{height:40px;width:40px}.semui-tabs .semui-tabs--navlist_horizontal{border-bottom:1px solid grey;padding-bottom:2px}.semui-tabs .semui-tabs--navlist_horizontal li.active button:not([disabled])::after,.semui-tabs .semui-tabs--navlist_horizontal li:hover button:not([disabled])::after{-webkit-transform:scale(1);transform:scale(1)}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{border:none;outline:0;box-shadow:none;padding:.35em .75em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;bottom:-1px}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button:not([disabled]):hover{border:none;opacity:1}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{content:\"\";height:3px;width:100%;bottom:-1px;transition:250ms;-webkit-transform:scale(0);transform:scale(0)}ul.semui-tabs-list.tabs-vertical{margin:0}figure.semui-thumbnail{width:100%;min-height:45px}figure.semui-thumbnail img{display:block;width:100%}figure.semui-thumbnail figcaption{width:100%;display:block;min-height:44px}.semui-card-footer{color:#fff;width:100%;display:block;background-color:#2a2a2a}.semui-header-section{padding:2% 2% 0;display:block}.semui-header-section.large{padding:3% 2% 0}.semui-header-section.small{padding:1% .5% 0}.semui-footer-section{padding:0 2% 2%;display:block}.semui-footer-section.large{padding:0 2% 3%}.semui-footer-section.small{padding:0 .5% 1%}.color-switch-container{padding:0 .3em .5em}.color-switch-container .sem-input{font-size:10px}.color-switch-container .sem-typo--sub-caption{font-size:13px;font-weight:400;line-height:17px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.color-switch-container .input-grp input.sem-input{width:calc(100% - 2.1rem)}.sem-swatches-container{flex-wrap:nowrap;display:flex;padding:0 .3em .5em}.sem-swatches-container>button{margin-top:11px;height:46px;width:46px;text-align:center;padding:0;font-size:14px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.sem-swatches-container--list{padding-top:.3rem;margin-top:2px;margin-left:-11px;margin-bottom:0;flex-grow:1;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden;height:67px;width:130px}.sem-swatches-container--list>button{margin-right:.3rem;margin-bottom:5px}.button-send:before{color:#fff}.sem-color-switch--colors .sufix{top:-4px;right:4px}.color-picker{margin:0 auto;border-radius:0 12px 12px;background-clip:padding-box;z-index:100000;width:210px;height:auto;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker .cursor{position:relative;width:16px;height:16px;border:2px solid #222;border-radius:50%;cursor:default}.color-picker .hue-alpha{margin-bottom:3px}.color-picker .hue{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .alpha{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .saturation-lightness{width:100%;height:130px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.sem-color-dark-inputs .color-type{color:#555;line-height:22px}.sem-color-light-inputs .color-type{color:#fff;line-height:22px}.sem-color-list li{min-height:50px}"]
                    },] },
        ];
        ColorPickerComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.ElementRef },
                { type: i0.ChangeDetectorRef },
                { type: ColorPickerService }
            ];
        };
        ColorPickerComponent.propDecorators = {
            hueSlider: [{ type: i0.ViewChild, args: ['hueSlider',] }],
            alphaSlider: [{ type: i0.ViewChild, args: ['alphaSlider',] }],
            dialogElement: [{ type: i0.ViewChild, args: ['dialogPopup',] }]
        };
        return ColorPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ColorPickerDirective = (function () {
        function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, _service) {
            this.injector = injector;
            this.cfr = cfr;
            this.appRef = appRef;
            this.vcRef = vcRef;
            this.elRef = elRef;
            this._service = _service;
            this.dialogCreated = false;
            this.ignoreChanges = false;
            this.cpWidth = '230px';
            this.cpHeight = 'auto';
            this.cpToggle = false;
            this.colorToggle = false;
            this.cpIgnoredElements = [];
            this.cpDisableInput = false;
            this.cpAlphaChannel = 'enabled';
            this.cpOutputFormat = 'hex';
            this.cpFallbackColor = '#fff';
            this.cpDialogDisplay = 'popup';
            this.cpSaveClickOutside = true;
            this.cpUseRootViewContainer = false;
            this.cpPosition = 'right';
            this.cpPositionOffset = '0%';
            this.cpPositionRelativeToArrow = false;
            this.cpOKButton = false;
            this.cpOKButtonText = 'OK';
            this.cpOKButtonClass = 'cp-ok-button-class';
            this.cpCancelButton = false;
            this.cpCancelButtonText = 'Cancel';
            this.cpCancelButtonClass = 'cp-cancel-button-class';
            this.cpPresetLabel = 'Preset colors';
            this.cpMaxPresetColorsLength = 6;
            this.cpPresetEmptyMessage = 'No colors added';
            this.cpPresetEmptyMessageClass = 'preset-empty-message';
            this.cpAddColorButton = false;
            this.cpAddColorButtonText = 'Add color';
            this.cpAddColorButtonClass = 'cp-add-color-button-class';
            this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
            this.cpInputChange = new i0.EventEmitter(true);
            this.cpToggleChange = new i0.EventEmitter(true);
            this.cpSliderChange = new i0.EventEmitter(true);
            this.cpSliderDragEnd = new i0.EventEmitter(true);
            this.cpSliderDragStart = new i0.EventEmitter(true);
            this.colorPickerOpen = new i0.EventEmitter(true);
            this.colorPickerClose = new i0.EventEmitter(true);
            this.colorPickerCancel = new i0.EventEmitter(true);
            this.colorPickerSelect = new i0.EventEmitter(true);
            this.colorPickerChange = new i0.EventEmitter(false);
            this.cpPresetColorsChange = new i0.EventEmitter(true);
        }
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerDirective.prototype.handleClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.inputFocus();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerDirective.prototype.handleFocus = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.inputFocus();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerDirective.prototype.handleInput = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.inputChange(event.target.value);
            };
        /**
         * @return {?}
         */
        ColorPickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.cmpRef !== undefined) {
                    this.cmpRef.destroy();
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        ColorPickerDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.cpToggle) {
                    if (!this.disabled && changes.cpToggle.currentValue) {
                        this.openDialog();
                    }
                    else if (this.dialog && !changes.cpToggle.currentValue) {
                        this.dialog.closeDialog();
                    }
                }
                if (changes.colorToggle) {
                    this.dialog.setColorToggle(changes.colorToggle.currentValue);
                }
                if (changes.colorPicker) {
                    if (this.dialog && !this.ignoreChanges) {
                        if (this.cpDialogDisplay === 'inline') {
                            this.dialog.setInitialColor(changes.colorPicker.currentValue);
                        }
                        this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
                    }
                    this.ignoreChanges = false;
                }
                if (changes.cpPresetLabel || changes.cpPresetColors) {
                    if (this.dialog) {
                        this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
                    }
                }
            };
        /**
         * @return {?}
         */
        ColorPickerDirective.prototype.openDialog = /**
         * @return {?}
         */
            function () {
                if (!this.dialogCreated) {
                    /** @type {?} */
                    var vcRef = this.vcRef;
                    this.dialogCreated = true;
                    if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                        /** @type {?} */
                        var classOfRootComponent = this.appRef.componentTypes[0];
                        /** @type {?} */
                        var appInstance = this.injector.get(classOfRootComponent);
                        vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                        if (vcRef === this.vcRef) {
                            console.warn('You are using cpUseRootViewContainer, ' +
                                'but the root component is not exposing viewContainerRef!' +
                                'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                        }
                    }
                    /** @type {?} */
                    var compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
                    /** @type {?} */
                    var injector = i0.ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
                    this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
                    this.cmpRef.instance.setupDialog(this.colorToggle, this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
                    this.dialog = this.cmpRef.instance;
                    if (this.vcRef !== vcRef) {
                        this.cmpRef.changeDetectorRef.detectChanges();
                    }
                }
                else if (this.dialog) {
                    this.dialog.openDialog(this.colorPicker);
                }
            };
        /**
         * @return {?}
         */
        ColorPickerDirective.prototype.closeDialog = /**
         * @return {?}
         */
            function () {
                if (this.dialog) {
                    this.dialog.closeDialog();
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerDirective.prototype.toggle = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.cpToggleChange.emit(value);
                if (value) {
                    this.colorPickerOpen.emit(this.colorPicker);
                }
                else {
                    this.colorPickerClose.emit(this.colorPicker);
                }
            };
        /**
         * @param {?} value
         * @param {?=} ignore
         * @return {?}
         */
        ColorPickerDirective.prototype.colorChanged = /**
         * @param {?} value
         * @param {?=} ignore
         * @return {?}
         */
            function (value, ignore) {
                if (ignore === void 0) {
                    ignore = true;
                }
                this.ignoreChanges = ignore;
                this.colorPickerChange.emit(value);
            };
        /**
         * @return {?}
         */
        ColorPickerDirective.prototype.colorCanceled = /**
         * @return {?}
         */
            function () {
                this.colorPickerCancel.emit();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerDirective.prototype.colorSelected = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.colorPickerSelect.emit(value);
            };
        /**
         * @return {?}
         */
        ColorPickerDirective.prototype.inputFocus = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var element = this.elRef.nativeElement;
                /** @type {?} */
                var ignored = this.cpIgnoredElements.filter(function (item) { return item === element; });
                if (!this.disabled && !ignored.length) {
                    this.openDialog();
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerDirective.prototype.inputChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.dialog) {
                    this.dialog.setColorFromString(value, true);
                }
                else {
                    this.colorPicker = value;
                    this.colorPickerChange.emit(this.colorPicker);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerDirective.prototype.inputChanged = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.cpInputChange.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerDirective.prototype.sliderChanged = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.cpSliderChange.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerDirective.prototype.sliderDragEnd = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.cpSliderDragEnd.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ColorPickerDirective.prototype.sliderDragStart = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.cpSliderDragStart.emit(event);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ColorPickerDirective.prototype.presetColorsChanged = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.cpPresetColorsChange.emit(value);
            };
        ColorPickerDirective.decorators = [
            { type: i0.Directive, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: '[colorPicker]',
                        exportAs: 'ngxColorPicker'
                    },] },
        ];
        ColorPickerDirective.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i0.ComponentFactoryResolver },
                { type: i0.ApplicationRef },
                { type: i0.ViewContainerRef },
                { type: i0.ElementRef },
                { type: ColorPickerService }
            ];
        };
        ColorPickerDirective.propDecorators = {
            disabled: [{ type: i0.Input }],
            colorPicker: [{ type: i0.Input }],
            cpWidth: [{ type: i0.Input }],
            cpHeight: [{ type: i0.Input }],
            cpToggle: [{ type: i0.Input }],
            colorToggle: [{ type: i0.Input }],
            cpIgnoredElements: [{ type: i0.Input }],
            cpDisableInput: [{ type: i0.Input }],
            cpAlphaChannel: [{ type: i0.Input }],
            cpOutputFormat: [{ type: i0.Input }],
            cpFallbackColor: [{ type: i0.Input }],
            cpDialogDisplay: [{ type: i0.Input }],
            cpSaveClickOutside: [{ type: i0.Input }],
            cpUseRootViewContainer: [{ type: i0.Input }],
            cpPosition: [{ type: i0.Input }],
            cpPositionOffset: [{ type: i0.Input }],
            cpPositionRelativeToArrow: [{ type: i0.Input }],
            cpOKButton: [{ type: i0.Input }],
            cpOKButtonText: [{ type: i0.Input }],
            cpOKButtonClass: [{ type: i0.Input }],
            cpCancelButton: [{ type: i0.Input }],
            cpCancelButtonText: [{ type: i0.Input }],
            cpCancelButtonClass: [{ type: i0.Input }],
            cpPresetLabel: [{ type: i0.Input }],
            cpPresetColors: [{ type: i0.Input }],
            cpMaxPresetColorsLength: [{ type: i0.Input }],
            cpPresetEmptyMessage: [{ type: i0.Input }],
            cpPresetEmptyMessageClass: [{ type: i0.Input }],
            cpAddColorButton: [{ type: i0.Input }],
            cpAddColorButtonText: [{ type: i0.Input }],
            cpAddColorButtonClass: [{ type: i0.Input }],
            cpRemoveColorButtonClass: [{ type: i0.Input }],
            cpInputChange: [{ type: i0.Output }],
            cpToggleChange: [{ type: i0.Output }],
            cpSliderChange: [{ type: i0.Output }],
            cpSliderDragEnd: [{ type: i0.Output }],
            cpSliderDragStart: [{ type: i0.Output }],
            colorPickerOpen: [{ type: i0.Output }],
            colorPickerClose: [{ type: i0.Output }],
            colorPickerCancel: [{ type: i0.Output }],
            colorPickerSelect: [{ type: i0.Output }],
            colorPickerChange: [{ type: i0.Output }],
            cpPresetColorsChange: [{ type: i0.Output }],
            handleClick: [{ type: i0.HostListener, args: ['click', ['$event'],] }],
            handleFocus: [{ type: i0.HostListener, args: ['focus', ['$event'],] }],
            handleInput: [{ type: i0.HostListener, args: ['input', ['$event'],] }]
        };
        return ColorPickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReversePipe = (function () {
        function ReversePipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ReversePipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value.slice().reverse();
            };
        ReversePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'reverse'
                    },] },
        ];
        return ReversePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SemColorsModule = (function () {
        function SemColorsModule() {
        }
        SemColorsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            semUi.SemUiButtonFabModule,
                            semUi.SemUiButtonModule,
                            semUi.SemUiButtonDndModule,
                            http.HttpClientModule,
                            forms.FormsModule,
                            ng2Dnd.DndModule.forRoot(),
                        ],
                        declarations: [
                            ColorWidgetComponent,
                            SearchColordropComponent,
                            ColorPickerComponent,
                            ColorPickerDirective,
                            TextDirective,
                            SliderDirective,
                            ReversePipe
                        ],
                        entryComponents: [ColorPickerComponent],
                        exports: [
                            ColorWidgetComponent,
                            ColorPickerDirective
                        ],
                        providers: [ColorPickerService]
                    },] },
        ];
        return SemColorsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SemColorsService = SemColorsService;
    exports.ColorWidgetComponent = ColorWidgetComponent;
    exports.SearchColordropComponent = SearchColordropComponent;
    exports.ColorPickerComponent = ColorPickerComponent;
    exports.ColorPickerDirective = ColorPickerDirective;
    exports.ColorPickerService = ColorPickerService;
    exports.Cmyk = Cmyk;
    exports.Hsla = Hsla;
    exports.Hsva = Hsva;
    exports.Rgba = Rgba;
    exports.detectIE = detectIE;
    exports.TextDirective = TextDirective;
    exports.SliderDirective = SliderDirective;
    exports.SliderPosition = SliderPosition;
    exports.SliderDimension = SliderDimension;
    exports.SemColorsModule = SemColorsModule;
    exports.ɵa = ReversePipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS1jb2xvcnMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL3NlbS1jb2xvcnMuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29tcG9uZW50cy9zZWFyY2gtY29sb3Jkcm9wL3NlYXJjaC1jb2xvcmRyb3AuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2hlbHBlcnMudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29sb3JwaWNrZXIvZm9ybWF0cy50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWFycmF5LXJldmVyc2UudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWNvbG9ycy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1Db2xvcnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcywgUExBVEZPUk1fSUQsIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtYmxlci1jb2xvci13aWRnZXRdJyxcbiAgdGVtcGxhdGU6IGAgPCEtLS8vIFJHQkEtLT5cbiAgPHNwYW5cbiAgICBbY29sb3JUb2dnbGVdPVwiZGF0YS5lbmFibGVkTGlzdFwiXG4gICAgW2NwV2lkdGhdPVwib3ZlcmxheVdpZHRoXCJcbiAgICBbY3BBbHBoYUNoYW5uZWxdPVwiJ2Fsd2F5cydcIlxuICAgIFtjcFByZXNldENvbG9yc109XCJkYXRhLml0ZW1zXCJcbiAgICBbY3BBZGRDb2xvckJ1dHRvbl09XCJ0cnVlXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJsYXN0Q29sb3JcIlxuICAgIFtjcFRvZ2dsZV09XCJ0cnVlXCJcbiAgICBbY3BEaWFsb2dEaXNwbGF5XT1cIidpbmxpbmUnXCJcbiAgICBbY3BDYW5jZWxCdXR0b25dPVwiZmFsc2VcIlxuICAgIFtjcENhbmNlbEJ1dHRvbkNsYXNzXT0gXCInYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cydcIlxuICAgIFsoY29sb3JQaWNrZXIpXT1cImxhc3RDb2xvclwiXG4gICAgKGNwUHJlc2V0Q29sb3JzQ2hhbmdlKT1cInVwZGF0ZWRDb2xvclByZXNldCgkZXZlbnQpXCJcbiAgPlxuICA8L3NwYW4+XG5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG5cbiAgQElucHV0KCkgb3ZlcmxheVdpZHRoO1xuICBwdWJsaWMgY29sb3JQYWxsZXRlO1xuICBwdWJsaWMgbGFzdENvbG9yO1xuXG4gIC8vIEBJbnB1dCgpIGNvbG9yRHJvcEVuYWJsZWQ6IGJvb2xlYW47XG4gIC8vIHB1YmxpYyB0b2dnbGVTdGF0dXM7XG4gIC8vIEBJbnB1dCgnZGF0YScpXG4gIC8vIHNldCB1c2VyQ29sb3JzUGFsbGV0ZShjb2xvcmxpc3Q6IGFueSkge1xuICAvLyAgIC8vIHRoaXMuY29sb3JQYWxsZXRlID0gY29sb3JsaXN0XG4gIC8vICAgY29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLmRhdGEpXG4gIC8vICAgdGhpcy5jb2xvclBhbGxldGUgPSBjb2xvcmxpc3QuaXRlbXM7XG4gIC8vICAgdGhpcy50b2dnbGVTdGF0dXMgPSAgY29sb3JsaXN0LmVuYWJsZWRMaXN0O1xuICAvLyAgIGlmKGNvbG9ybGlzdC5sZW5ndGggPT09IDApIHtcbiAgLy8gICAgIHRoaXMubGFzdENvbG9yID0gJyNmZmZmZmYnO1xuICAvLyAgIH1cbiAgLy8gICBpZihjb2xvcmxpc3QubGVuZ3RoICE9PSAwKXtcbiAgLy8gICAgIHRoaXMubGFzdENvbG9yID0gY29sb3JsaXN0WyBjb2xvcmxpc3QubGVuZ3RoIC0gMSBdO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIEBJbnB1dCgpIGRhdGE7XG5cblxuICBjb25zdHJ1Y3RvciggQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnkpIHt9XG5cbiAgQE91dHB1dCgpXG4gIHVwZGF0ZUNvbG9yUHJlc2V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICB1cGRhdGVkQ29sb3JQcmVzZXQoZXZlbnQ6IEFycmF5PGFueT4pe1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KVxuICAgIHRoaXMudXBkYXRlQ29sb3JQcmVzZXQuZW1pdChldmVudCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgIC8vICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnY2hhbmdlcycsIGNoYW5nZXMpXG4gICAgLy8gICAgIC8vIHRoaXMudG9nZ2xlU3RhdHVzID0gY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtYmxlci1zZWFyY2gtY29sb3Jkcm9wJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImlucHV0LXN1Zml4XCI+XG4gICAgICAgPGlucHV0XG4gICAgICAgICBjbGFzcz1cInNlbS1pbnB1dFwiXG4gICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICBbbmdNb2RlbF09XCJjb2xvclwiXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCJcbiAgICAgICAgIFt2YWx1ZV09J2NvbG9yJ1xuICAgICAgICAgI2NvbG9yVmFsdWVcbiAgICAgICAvPlxuICAgICAgPHNwYW5cbiAgICAgIChjbGljayk9XCJhZGRDb2xvcihjb2xvclZhbHVlKVwiXG4gICAgICBjbGFzcz1cInNlbS1pY29uLXNlYXJjaCBzdWZpeFwiPlxuICAgICAgPC9zcGFuPlxuPC9zcGFuPlxuXG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnc2VsZWN0ZWQnKVxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdjb2xvcicsIHZhbHVlKTtcbiAgICB0aGlzLmNvbG9yID0gdmFsdWUuY29sb3I7XG4gIH1cbiAgQE91dHB1dCgpIHNhdmVDb2xvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZVNlbGVjdGVkQ29sb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkQ29sb3IoY29sb3I6IGFueSkge1xuICAgIGNvbnN0IHNldENvbG9yOiBhbnkgPSB7XG4gICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgY29sb3I6IGNvbG9yLnZhbHVlXG4gICAgfTtcbiAgICB0aGlzLnNhdmVDb2xvci5lbWl0KHNldENvbG9yKTtcbiAgfVxuICBjaGFuZ2VDb2xvcihldmVudDogYW55KSB7XG4gICAgY29uc3QgY29sb3IgPSB7dHlwZTogJ2NvbG9yJywgY29sb3I6IGV2ZW50fTtcbiAgICB0aGlzLmNoYW5nZVNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIH1cbiAgbmdPbkluaXQoKSB7fVxuXG4gIC8vIChrZXlwcmVzcyk9XCJrZXlQcmVzc0NoYW5nZUNvbG9yKCRldmVudClcIlxuICAvLyBrZXlQcmVzc0NoYW5nZUNvbG9yKGV2ZW50OiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnZXZlbnQxMjMnLCBldmVudC50YXJnZXQudmFsdWUpXG4gIC8vICAgY29uc3QgY29sb3IgPSB7dHlwZTogJ2NvbG9yJywgY29sb3I6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgLy8gICB0aGlzLmNoYW5nZVNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIC8vIH1cblxuICAvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuU2V0Q29sb3JzKGV2ZW50KSk7XG4gIC8vIHRoaXMuX2NvbG9yU2VydmljZS5jb2xvckNoYWdlZChldmVudClcbiAgLy8gcHVibGljIHNlbGVjdGVkQ29sb3I6IGFueTtcbiAgLy8gQE91dHB1dCgpXG4gIC8vIHNhdmVDb2xvcnM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHRoaXMuc2VsZWN0ZWRDb2xvciA9ICcjMDAwMDAwJztcblxufVxuXG5cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdElFKCk6IGJvb2xlYW4gfCBudW1iZXIge1xuICBsZXQgdWEgPSAnJztcblxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdtc2llICcpO1xuXG4gIGlmIChtc2llID4gMCkge1xuICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcbiAgfVxuXG4gIC8vIE90aGVyIGJyb3dzZXJcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGV4dF0nXG59KVxuZXhwb3J0IGNsYXNzIFRleHREaXJlY3RpdmUge1xuICBASW5wdXQoKSByZzogbnVtYmVyO1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG5cbiAgQE91dHB1dCgpIG5ld1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBpbnB1dENoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodGhpcy5yZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBudW1lcmljID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICAgIGlmICghaXNOYU4obnVtZXJpYykgJiYgbnVtZXJpYyA+PSAwICYmIG51bWVyaWMgPD0gdGhpcy5yZykge1xuICAgICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyB2OiBudW1lcmljLCByZzogdGhpcy5yZyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NsaWRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckRpcmVjdGl2ZSB7XG4gIHByaXZhdGUgbGlzdGVuZXJNb3ZlOiBhbnk7XG4gIHByaXZhdGUgbGlzdGVuZXJTdG9wOiBhbnk7XG5cbiAgQElucHV0KCkgcmdYOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJnWTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNsaWRlcjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBuZXdWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pIG1vdXNlRG93bihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdGFydChldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSkgdG91Y2hTdGFydChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdGFydChldmVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5saXN0ZW5lck1vdmUgPSAoZXZlbnQ6IGFueSkgPT4gdGhpcy5tb3ZlKGV2ZW50KTtcblxuICAgIHRoaXMubGlzdGVuZXJTdG9wID0gKCkgPT4gdGhpcy5zdG9wKCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldEN1cnNvcihldmVudCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnNvcihldmVudCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG5cbiAgICB0aGlzLmRyYWdTdGFydC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIHN0b3AoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xuXG4gICAgdGhpcy5kcmFnRW5kLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0WChldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHBhZ2VYID0gKGV2ZW50LnBhZ2VYICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuXG4gICAgcmV0dXJuIHBhZ2VYIC0gcG9zaXRpb24ubGVmdCAtIHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0WShldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHBhZ2VZID0gKGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgcmV0dXJuIHBhZ2VZIC0gcG9zaXRpb24udG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJzb3IoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRYKGV2ZW50KSwgd2lkdGgpKTtcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRZKGV2ZW50KSwgaGVpZ2h0KSk7XG5cbiAgICBpZiAodGhpcy5yZ1ggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJnWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyBzOiB4IC8gd2lkdGgsIHY6ICgxIC0geSAvIGhlaWdodCksIHJnWDogdGhpcy5yZ1gsIHJnWTogdGhpcy5yZ1kgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJnWCA9PT0gdW5kZWZpbmVkICYmIHRoaXMucmdZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHkgLyBoZWlnaHQsIHJnWTogdGhpcy5yZ1kgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJnWCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmdZID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHggLyB3aWR0aCwgcmdYOiB0aGlzLnJnWCB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlclBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIHY6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlckRpbWVuc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBzOiBudW1iZXIsIHB1YmxpYyB2OiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG4iLCJleHBvcnQgY2xhc3MgQ215ayB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjOiBudW1iZXIsIHB1YmxpYyBtOiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIsIHB1YmxpYyBrOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBIc2xhIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIGw6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIEhzdmEge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgdjogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmdiYSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByOiBudW1iZXIsIHB1YmxpYyBnOiBudW1iZXIsIHB1YmxpYyBiOiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXlrLCBSZ2JhLCBIc2xhLCBIc3ZhIH0gZnJvbSAnLi9mb3JtYXRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyU2VydmljZSB7XG4gIHByaXZhdGUgYWN0aXZlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHNldEFjdGl2ZShhY3RpdmU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiB0aGlzLmFjdGl2ZSAhPT0gYWN0aXZlICYmIHRoaXMuYWN0aXZlLmNwRGlhbG9nRGlzcGxheSAhPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuYWN0aXZlLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHB1YmxpYyBoc3ZhMmhzbGEoaHN2YTogSHN2YSk6IEhzbGEge1xuICAgIGNvbnN0IGggPSBoc3ZhLmgsIHMgPSBoc3ZhLnMsIHYgPSBoc3ZhLnYsIGEgPSBoc3ZhLmE7XG5cbiAgICBpZiAodiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBIc2xhKGgsIDAsIDAsIGEpO1xuICAgIH0gZWxzZSBpZiAocyA9PT0gMCAmJiB2ID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEhzbGEoaCwgMSwgMSwgYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGwgPSB2ICogKDIgLSBzKSAvIDI7XG5cbiAgICAgIHJldHVybiBuZXcgSHNsYShoLCB2ICogcyAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSksIGwsIGEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoc2xhMmhzdmEoaHNsYTogSHNsYSk6IEhzdmEge1xuICAgIGNvbnN0IGggPSBNYXRoLm1pbihoc2xhLmgsIDEpLCBzID0gTWF0aC5taW4oaHNsYS5zLCAxKTtcbiAgICBjb25zdCBsID0gTWF0aC5taW4oaHNsYS5sLCAxKSwgYSA9IE1hdGgubWluKGhzbGEuYSwgMSk7XG5cbiAgICBpZiAobCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIDAsIDAsIGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2ID0gbCArIHMgKiAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpIC8gMjtcblxuICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIDIgKiAodiAtIGwpIC8gdiwgdiwgYSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhzdmFUb1JnYmEoaHN2YTogSHN2YSk6IFJnYmEge1xuICAgIGxldCByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyO1xuXG4gICAgY29uc3QgaCA9IGhzdmEuaCwgcyA9IGhzdmEucywgdiA9IGhzdmEudiwgYSA9IGhzdmEuYTtcblxuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKGggKiA2KTtcbiAgICBjb25zdCBmID0gaCAqIDYgLSBpO1xuICAgIGNvbnN0IHAgPSB2ICogKDEgLSBzKTtcbiAgICBjb25zdCBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgIGNvbnN0IHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XG5cbiAgICBzd2l0Y2ggKGkgJSA2KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHIgPSB2LCBnID0gdCwgYiA9IHA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByID0gcSwgZyA9IHYsIGIgPSBwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgciA9IHAsIGcgPSB2LCBiID0gdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHIgPSBwLCBnID0gcSwgYiA9IHY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByID0gdCwgZyA9IHAsIGIgPSB2O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgciA9IHYsIGcgPSBwLCBiID0gcTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZ2JhKHIsIGcsIGIsIGEpO1xuICB9XG5cbiAgcHVibGljIHJnYmFUb0NteWsocmdiYTogUmdiYSk6IENteWsge1xuICAgIGNvbnN0IGs6IG51bWJlciA9IDEgLSBNYXRoLm1heChyZ2JhLnIsIHJnYmEuZywgcmdiYS5iKTtcblxuICAgIGlmIChrID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IENteWsoMCwgMCwgMCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGMgPSAoMSAtIHJnYmEuciAtIGspIC8gKDEgLSBrKTtcbiAgICAgIGNvbnN0IG0gPSAoMSAtIHJnYmEuZyAtIGspIC8gKDEgLSBrKTtcbiAgICAgIGNvbnN0IHkgPSAoMSAtIHJnYmEuYiAtIGspIC8gKDEgLSBrKTtcblxuICAgICAgcmV0dXJuIG5ldyBDbXlrKGMsIG0sIHksIGspO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZ2JhVG9Ic3ZhKHJnYmE6IFJnYmEpOiBIc3ZhIHtcbiAgICBsZXQgaDogbnVtYmVyLCBzOiBudW1iZXI7XG5cbiAgICBjb25zdCByID0gTWF0aC5taW4ocmdiYS5yLCAxKSwgZyA9IE1hdGgubWluKHJnYmEuZywgMSk7XG4gICAgY29uc3QgYiA9IE1hdGgubWluKHJnYmEuYiwgMSksIGEgPSBNYXRoLm1pbihyZ2JhLmEsIDEpO1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYiksIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXG4gICAgY29uc3QgdjogbnVtYmVyID0gbWF4LCBkID0gbWF4IC0gbWluO1xuXG4gICAgcyA9IChtYXggPT09IDApID8gMCA6IGQgLyBtYXg7XG5cbiAgICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAgIGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBiOlxuICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGggLz0gNjtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEhzdmEoaCwgcywgdiwgYSk7XG4gIH1cblxuICBwdWJsaWMgcmdiYVRvSGV4KHJnYmE6IFJnYmEsIGFsbG93SGV4OD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgKi9cbiAgICBsZXQgaGV4ID0gJyMnICsgKCgxIDw8IDI0KSB8IChyZ2JhLnIgPDwgMTYpIHwgKHJnYmEuZyA8PCA4KSB8IHJnYmEuYikudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcblxuICAgIGlmIChhbGxvd0hleDgpIHtcbiAgICAgIGhleCArPSAoKDEgPDwgOCkgfCBNYXRoLnJvdW5kKHJnYmEuYSAqIDI1NSkpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gICAgfVxuICAgIC8qIHRzbGludDplbmFibGU6bm8tYml0d2lzZSAqL1xuXG4gICAgcmV0dXJuIGhleDtcbiAgfVxuXG4gIHB1YmxpYyBkZW5vcm1hbGl6ZVJHQkEocmdiYTogUmdiYSk6IFJnYmEge1xuICAgIHJldHVybiBuZXcgUmdiYShNYXRoLnJvdW5kKHJnYmEuciAqIDI1NSksIE1hdGgucm91bmQocmdiYS5nICogMjU1KSwgTWF0aC5yb3VuZChyZ2JhLmIgKiAyNTUpLCByZ2JhLmEpO1xuICB9XG5cbiAgcHVibGljIHN0cmluZ1RvSHN2YShjb2xvclN0cmluZzogc3RyaW5nID0gJycsIGFsbG93SGV4ODogYm9vbGVhbiA9IGZhbHNlKTogSHN2YSB7XG4gICAgbGV0IGhzdmE6IEhzdmEgPSBudWxsO1xuXG4gICAgY29sb3JTdHJpbmcgPSAoY29sb3JTdHJpbmcgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBjb25zdCBzdHJpbmdQYXJzZXJzID0gW1xuICAgICAge1xuICAgICAgICByZTogLyhyZ2IpYT9cXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqJT8sXFxzKihcXGR7MSwzfSlcXHMqJT8oPzosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxccyopP1xcKS8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFs0XSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgaXNOYU4ocGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSkgPyAxIDogcGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcmU6IC8oaHNsKWE/XFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihcXGR7MSwzfSklXFxzKig/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFxzKik/XFwpLyxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKGV4ZWNSZXN1bHQ6IGFueSkge1xuICAgICAgICAgIHJldHVybiBuZXcgSHNsYShwYXJzZUludChleGVjUmVzdWx0WzJdLCAxMCkgLyAzNjAsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzRdLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICBpc05hTihwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKSA/IDEgOiBwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBpZiAoYWxsb3dIZXg4KSB7XG4gICAgICBzdHJpbmdQYXJzZXJzLnB1c2goe1xuICAgICAgICByZTogLyMoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pPyQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbNF0gfHwgJ0ZGJywgMTYpIC8gMjU1KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmluZ1BhcnNlcnMucHVzaCh7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KSQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIDEpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XSkoW2EtZkEtRjAtOV0pKFthLWZBLUYwLTldKSQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0gKyBleGVjUmVzdWx0WzFdLCAxNikgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzJdICsgZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSArIGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHJpbmdQYXJzZXJzKSB7XG4gICAgICBpZiAoc3RyaW5nUGFyc2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IHN0cmluZ1BhcnNlcnNba2V5XTtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHBhcnNlci5yZS5leGVjKGNvbG9yU3RyaW5nKSwgY29sb3I6IGFueSA9IG1hdGNoICYmIHBhcnNlci5wYXJzZShtYXRjaCk7XG5cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgaWYgKGNvbG9yIGluc3RhbmNlb2YgUmdiYSkge1xuICAgICAgICAgICAgaHN2YSA9IHRoaXMucmdiYVRvSHN2YShjb2xvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2xvciBpbnN0YW5jZW9mIEhzbGEpIHtcbiAgICAgICAgICAgIGhzdmEgPSB0aGlzLmhzbGEyaHN2YShjb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhzdmE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHN2YTtcbiAgfVxuXG4gIHB1YmxpYyBvdXRwdXRGb3JtYXQoaHN2YTogSHN2YSwgb3V0cHV0Rm9ybWF0OiBzdHJpbmcsIGFscGhhQ2hhbm5lbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKG91dHB1dEZvcm1hdCkge1xuICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgIGNvbnN0IGhzbGEgPSB0aGlzLmhzdmEyaHNsYShoc3ZhKTtcblxuICAgICAgICBjb25zdCBoc2xhVGV4dCA9IG5ldyBIc2xhKE1hdGgucm91bmQoKGhzbGEuaCkgKiAzNjApLCBNYXRoLnJvdW5kKGhzbGEucyAqIDEwMCksXG4gICAgICAgICAgTWF0aC5yb3VuZChoc2xhLmwgKiAxMDApLCBNYXRoLnJvdW5kKGhzbGEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIGlmIChoc3ZhLmEgPCAxIHx8IGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgICAgICByZXR1cm4gJ2hzbGEoJyArIGhzbGFUZXh0LmggKyAnLCcgKyBoc2xhVGV4dC5zICsgJyUsJyArIGhzbGFUZXh0LmwgKyAnJSwnICtcbiAgICAgICAgICAgIGhzbGFUZXh0LmEgKyAnKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdoc2woJyArIGhzbGFUZXh0LmggKyAnLCcgKyBoc2xhVGV4dC5zICsgJyUsJyArIGhzbGFUZXh0LmwgKyAnJSknO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JnYmEnOlxuICAgICAgICBjb25zdCByZ2JhID0gdGhpcy5kZW5vcm1hbGl6ZVJHQkEodGhpcy5oc3ZhVG9SZ2JhKGhzdmEpKTtcblxuICAgICAgICBpZiAoaHN2YS5hIDwgMSB8fCBhbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnKSB7XG4gICAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnLCcgK1xuICAgICAgICAgICAgTWF0aC5yb3VuZChyZ2JhLmEgKiAxMDApIC8gMTAwICsgJyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAncmdiKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc3QgYWxsb3dIZXg4ID0gKGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycgfHwgYWxwaGFDaGFubmVsID09PSAnaGV4OCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJnYmFUb0hleCh0aGlzLmRlbm9ybWFsaXplUkdCQSh0aGlzLmhzdmFUb1JnYmEoaHN2YSkpLCBhbGxvd0hleDgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFBMQVRGT1JNX0lELCBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXRlY3RJRSB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBSZ2JhLCBIc2xhLCBIc3ZhIH0gZnJvbSAnLi9mb3JtYXRzJztcbmltcG9ydCB7IFNsaWRlclBvc2l0aW9uLCBTbGlkZXJEaW1lbnNpb24gfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvci1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2NvbG9yLXBpY2tlcl0nLFxuICB0ZW1wbGF0ZTogYDxkaXZcbiAgI2RpYWxvZ1BvcHVwXG4gIGNsYXNzPVwiY29sb3ItcGlja2VyXCJcbiAgW3N0eWxlLnZpc2liaWxpdHldPVwiaGlkZGVuIHx8ICFzaG93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIiBbc3R5bGUudG9wLnB4XT1cInRvcFwiXG4gIFtzdHlsZS5sZWZ0LnB4XT1cImxlZnRcIlxuICBbc3R5bGUucG9zaXRpb25dPVwicG9zaXRpb25cIlxuICBbc3R5bGUuaGVpZ2h0LnB4XT1cImNwSGVpZ2h0XCJcbiAgW3N0eWxlLndpZHRoXT1cImNvbG9yVG9nZ2xlID8gJzEwMCUnIDogY3BXaWR0aCArICdweCdcIlxuPlxuICA8ZGl2XG4gICAgKm5nSWY9XCIhY29sb3JUb2dnbGVcIlxuICAgIGNsYXNzPVwiXG4gICAgY29sb3Itc3dpdGNoLWNvbnRhaW5lclxuICAgIGNvbG9yLWlucHV0LWNvbnRhaW5lclxuICAgIHNlbS1jb2xvci1saWdodC1pbnB1dHMgcGIxXCI+XG4gICAgPGRpdiBjbGFzcz1cImJsb2NrIHB5MVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgIHNlbS10eXBvLS1maWdjYXB0aW9uXCJcbiAgICAgICAgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiAoY2xpY2spPVwib25Gb3JtYXRUb2dnbGUoKVwiPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBzZW0tYnV0dG9uIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwic2VtLWJ1dHRvbiBzZW0tYnV0dG9uLS1saW5rIHNlbS1idXR0b24tLWxpbmstLXByaW1hcnlcIj5cbiAgICAgICAgICBDaGFuZ2UgZm9ybWF0XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZW0taWNvbi1kcm9wX2ljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2ggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtcmVzZXQgc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIGZsZXgtYXV0b1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDIgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIzNjBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMzYwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5oXCIgKG5ld1ZhbHVlKT1cIm9uSHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgSDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LnNcIiAobmV3VmFsdWUpPVwib25TYXR1cmF0aW9uSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgUzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgICBzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlcyBtcjEgdGFibGUtY2VsbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMTAwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5sXCIgKG5ld1ZhbHVlKT1cIm9uTGlnaHRuZXNzSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgTDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgICBzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlcyB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIiBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMVwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uYVwiIChuZXdWYWx1ZSk9XCJvbkFscGhhSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgQTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDEgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5yXCIgKG5ld1ZhbHVlKT1cIm9uUmVkSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgUjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5nXCIgKG5ld1ZhbHVlKT1cIm9uR3JlZW5JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICBHPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5iXCIgKG5ld1ZhbHVlKT1cIm9uQmx1ZUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIGJsb2NrIGNlbnRlclxuICAgICAgICAgICAgICAgIHNlbS10eXBvLS1zdWItY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgIEI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcLixdWzAtOV17MSwyfSk/XCJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMVwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInJnYmFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgQVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAwID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW0tZGVmYXVsdF9iZyBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsICBzZW0taW5wdXQtLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFt2YWx1ZV09XCJoZXhUZXh0XCJcbiAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkhleElucHV0KG51bGwpXCJcbiAgICAgICAgICAgICAgICAobmV3VmFsdWUpPVwib25IZXhJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tYnV0dG9uXG4gICAgICAgICAgICAgICAgc2VtLWJ1dHRvbi0tZG5kX3NtYWxsXG4gICAgICAgICAgICAgICAgc2VtLWJ1dHRvbi0tZG5kLS10ZXJ0aWFyeVxuICAgICAgICAgICAgICAgIHNlbS1idXR0b24tLWRuZCBzZW0tYnV0dG9uLS1kbmRcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNwUHJlc2V0Q29sb3JzICYmIGNwUHJlc2V0Q29sb3JzLmxlbmd0aCA+PSBjcE1heFByZXNldENvbG9yc0xlbmd0aFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkUHJlc2V0Q29sb3IoJGV2ZW50LCBzZWxlY3RlZENvbG9yKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VtLWljb24tc2VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5IZXg8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJweDFcIj5cbiAgICA8ZGl2XG4gICAgICAjaHVlU2xpZGVyXG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgICAgY2xhc3M9XCJodWVcIlxuICAgICAgW3NsaWRlcl0gW3JnWF09XCIxXCIgKG5ld1ZhbHVlKT1cIm9uSHVlQ2hhbmdlKCRldmVudClcIiAoZHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCdodWUnKVwiIChkcmFnRW5kKT1cIm9uRHJhZ0VuZCgnaHVlJylcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBbc3R5bGUubGVmdC5weF09XCJzbGlkZXIuaFwiPjwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICAgICpuZ0lmPVwiY3BEaWFsb2dEaXNwbGF5PT0ncG9wdXAnXCJcbiAgICAgIGNsYXNzPVwiYXJyb3cgYXJyb3cte3tjcFBvc2l0aW9ufX1cIlxuICAgICAgW3N0eWxlLnRvcC5weF09XCJhcnJvd1RvcFwiPjwvZGl2PlxuICAgIDxkaXZcbiAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgICBjbGFzcz1cInNhdHVyYXRpb24tbGlnaHRuZXNzXCJcbiAgICAgIFtzbGlkZXJdIFtyZ1hdPVwiMVwiIFtyZ1ldPVwiMVwiXG4gICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJodWVTbGlkZXJDb2xvclwiXG4gICAgICAobmV3VmFsdWUpPVwib25Db2xvckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChkcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoJ3NhdHVyYXRpb24tbGlnaHRuZXNzJylcIlxuICAgICAgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdzYXR1cmF0aW9uLWxpZ2h0bmVzcycpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgW3N0eWxlLnRvcC5weF09XCJzbGlkZXIudlwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5zXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgI2FscGhhU2xpZGVyXG4gICAgICBjbGFzcz1cImFscGhhXCJcbiAgICAgIFtzbGlkZXJdXG4gICAgICBbcmdYXT1cIjFcIlxuICAgICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImFscGhhU2xpZGVyQ29sb3JcIlxuICAgICAgKG5ld1ZhbHVlKT1cIm9uQWxwaGFDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoZHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCdhbHBoYScpXCJcbiAgICAgIChkcmFnRW5kKT1cIm9uRHJhZ0VuZCgnYWxwaGEnKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5hXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS1Db2xvciBkcm9wcy0tPlxuICA8ZGl2XG4gICAgKm5nSWY9XCJjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJzZW0tY29sb3ItZHJvcHNcIj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjcFByZXNldENvbG9ycz8ubGVuZ3RoIHx8IGNwQWRkQ29sb3JCdXR0b25cIj5cbiAgICAgIDx1bCAqbmdJZj1cImNwUHJlc2V0Q29sb3JzPy5sZW5ndGhcIlxuICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICBzZW0tY29sb3JsaXN0XG4gICAgICAgICAgICBzZW0tbGlzdC1yZXNldFxuICAgICAgICAgICAgdGVtcC1jb2xvcmxpc3QtY29udGFpbmVyXCI+XG5cblxuICAgICAgICA8bGlcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sb3Igb2YgY3BQcmVzZXRDb2xvcnMgfCByZXZlcnNlXCJcbiAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgICBjbGFzcz1cImJsb2NrIHAyIHJlbGF0aXZlIHNlbS1jb2xvcmxpc3QtLWxpc3RcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRDb2xvckZyb21TdHJpbmcoY29sb3IpXCJcbiAgICAgICAgICBkbmQtZHJhZ2dhYmxlXG4gICAgICAgICAgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAgICAgIFtkcmFnRGF0YV09XCJjb2xvclwiXG4gICAgICAgICAgKG9uRHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KGNvbG9yKVwiXG4gICAgICAgICAgW2Ryb3Bab25lc109XCJbJ3dpZGdldC1kcm9wWm9uZSddXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3JsaXN0LS1saXN0LS1pbm5lclwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taWNvbi1jbG9zZSBhYnNvbHV0ZSB0b3AtMCAgcmlnaHQtMCBtMSBzZW0tY29sb3JsaXN0LS1jbG9zZWJ1dHRvblwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZVByZXNldENvbG9yKCRldmVudCwgY29sb3IpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VtLWljb24tZHJhZyBhYnNvbHV0ZSB0b3AtMSBsZWZ0LTFcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sMyByaWdodC1hbGlnbiBibG9ja1wiPlxuICAgICAgICAgICAgICAgPHN0cm9uZz57e2NvbG9yfX08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiIWNwUHJlc2V0Q29sb3JzPy5sZW5ndGggJiYgY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwie3tjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzfX1cbiAgICAgICAgICBcIj57e2NwUHJlc2V0RW1wdHlNZXNzYWdlfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgICpuZ0lmPVwiIWNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cInNlbS1zd2F0Y2hlcy1jb250YWluZXJcIj5cbiAgICA8IS0tPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2F0Y2hlc19jdXJyZW50XCI+PC9kaXY+LS0+XG4gICAgPGJ1dHRvblxuICAgICAgc2VtLWJ1dHRvbiByb2xlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiXG4gICAgICBzZW0tYnV0dG9uXG4gICAgICBzZW0tYnV0dG9uX21lZGl1bVxuICAgICAgc2VtLWJ1dHRvbi0tZG5kXG4gICAgICBzZW0tYnV0dG9uLS1kbmQgc2VtLWJ1dHRvbi0tZG5kX21lZGl1bVwiXG4gICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJzZWxlY3RlZENvbG9yXCJcbiAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICBbZGlzYWJsZWRdPVwiY3BQcmVzZXRDb2xvcnMgJiYgY3BQcmVzZXRDb2xvcnMubGVuZ3RoID49IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoXCJcbiAgICAgIChjbGljayk9XCJvbkFkZFByZXNldENvbG9yKCRldmVudCwgc2VsZWN0ZWRDb2xvcilcIj5cbiAgICAgIEFkZFxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXZcbiAgICAgICpuZ0lmPVwiY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aCB8fCBjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgIGNsYXNzPVwic2VtLXN3YXRjaGVzLWNvbnRhaW5lci0tbGlzdFwiPlxuXG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiIWNwUHJlc2V0Q29sb3JzPy5sZW5ndGggJiYgY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwie3tjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzfX1cbiAgICAgICAgICBcIj5cbiAgICAgICAge3tjcFByZXNldEVtcHR5TWVzc2FnZX19XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjcFByZXNldENvbG9ycyB8IHJldmVyc2VcIlxuICAgICAgICBzZW0tYnV0dG9uIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cInNlbS1idXR0b24gc2VtLWJ1dHRvbi0tZmFiXG4gICAgICAgICAgICAgICBzZW0tYnV0dG9uLS1mYWJfbWVkaXVtIHNlbS1idXR0b24tLWZhYl90b3AtbWlkZGxlXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgKGNsaWNrKT1cInNldENvbG9yRnJvbVN0cmluZyhjb2xvcilcIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICBzZW0tYnV0dG9uIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwic2VtLWJ1dHRvbiBzZW0tYnV0dG9uLS1mYWItLWRhbmdlclxuICAgICAgICAgIHNlbS1idXR0b24tLWZhYiBzZW0tYnV0dG9uLS1mYWJfeHNtYWxsXG4gICAgICAgICAgc2VtLWJ1dHRvbi0tZmFiX2NpcmNsZSBtcjEgYWJzb2x1dGUgXCJcbiAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVQcmVzZXRDb2xvcigkZXZlbnQsIGNvbG9yKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlbS1pY29uLWNsb3NlXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8IS0tPHNwYW4tLT5cbiAgICAgICAgPCEtLSpuZ0Zvcj1cImxldCBjb2xvciBvZiBjcFByZXNldENvbG9ycyB8IHJldmVyc2VcIi0tPlxuICAgICAgICA8IS0tY2xhc3M9XCJzZW0tYnV0dG9uLXJhaW4tZHJvcFwiLS0+XG4gICAgICAgIDwhLS1bc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImNvbG9yXCItLT5cbiAgICAgICAgPCEtLShjbGljayk9XCJzZXRDb2xvckZyb21TdHJpbmcoY29sb3IpXCItLT5cbiAgICAgIDwhLS0mZ3Q7LS0+XG4gICAgICAgICAgPCEtLTxzcGFuLS0+XG4gICAgICAgICAgICA8IS0tKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCItLT5cbiAgICAgICAgICAgIDwhLS0oY2xpY2spPVwib25SZW1vdmVQcmVzZXRDb2xvcigkZXZlbnQsIGNvbG9yKVwiLS0+XG4gICAgICAgICAgICA8IS0tY2xhc3M9XCJzZW0tYnV0dG9uLWNpcmNsZSBzZW0tYnV0dG9uLWRlbGV0ZSBzZW0taWNvbi1jbG9zZVwiPi0tPlxuICAgICAgICAgIDwhLS08L3NwYW4+LS0+XG4gICAgICAgPCEtLTwvc3Bhbj4tLT5cblxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXZcbiAgICAqbmdJZj1cImNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cIlxuICAgIGNvbG9yLXN3aXRjaC1jb250YWluZXJcbiAgICBjb2xvci1pbnB1dC1jb250YWluZXJcbiAgICBzZW0tY29sb3ItbGlnaHQtaW5wdXRzXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgcHkxXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCAgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIlxuICAgICAgICAgICAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIChjbGljayk9XCJvbkZvcm1hdFRvZ2dsZSgpXCI+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHNlbS1idXR0b24gcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3M9XCJzZW0tYnV0dG9uIHNlbS1idXR0b24tLWxpbmsgc2VtLWJ1dHRvbi0tbGluay0tcHJpbWFyeVwiPlxuICAgICAgICAgIENoYW5nZSBmb3JtYXRcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlbS1pY29uLWRyb3BfaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2ggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtcmVzZXQgc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIGZsZXgtYXV0b1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDIgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIzNjBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMzYwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5oXCIgKG5ld1ZhbHVlKT1cIm9uSHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+SDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LnNcIiAobmV3VmFsdWUpPVwib25TYXR1cmF0aW9uSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+Uzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmxcIiAobmV3VmFsdWUpPVwib25MaWdodG5lc3NJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5MPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5BPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMSA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LnJcIiAobmV3VmFsdWUpPVwib25SZWRJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIGJsb2NrIGNlbnRlclxuICAgICAgICAgICAgICAgIHNlbS10eXBvLS1zdWItY2FwdGlvblwiPlI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uZ1wiIChuZXdWYWx1ZSk9XCJvbkdyZWVuSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5HPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5iXCIgKG5ld1ZhbHVlKT1cIm9uQmx1ZUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+Qjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIlxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwicmdiYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5BPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCJcbiAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDAgPyAnbm9uZScgOiAnYmxvY2snXCI+XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW0tZGVmYXVsdF9iZyBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsICBzZW0taW5wdXQtLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFt2YWx1ZV09XCJoZXhUZXh0XCJcbiAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkhleElucHV0KG51bGwpXCJcbiAgICAgICAgICAgICAgICAobmV3VmFsdWUpPVwib25IZXhJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tYnV0dG9uXG4gICAgICAgICAgICAgICAgc2VtLWJ1dHRvbi0tZG5kX3NtYWxsXG4gICAgICAgICAgICAgICAgc2VtLWJ1dHRvbi0tZG5kLS10ZXJ0aWFyeVxuICAgICAgICAgICAgICAgIHNlbS1idXR0b24tLWRuZCBzZW0tYnV0dG9uLS1kbmRcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNwUHJlc2V0Q29sb3JzICYmIGNwUHJlc2V0Q29sb3JzLmxlbmd0aCA+PSBjcE1heFByZXNldENvbG9yc0xlbmd0aFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkUHJlc2V0Q29sb3IoJGV2ZW50LCBzZWxlY3RlZENvbG9yKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VtLWljb24tc2VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5IZXg8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLSBTVEFSVCAtLT5cblxuXG5cblxuIDwhLS0gRU5EIC0tPlxuXG4gIDxkaXYgKm5nSWY9XCJjcE9LQnV0dG9uIHx8IGNwQ2FuY2VsQnV0dG9uXCIgY2xhc3M9XCJidXR0b24tYXJlYVwiPlxuICAgIDxidXR0b24gKm5nSWY9XCJjcENhbmNlbEJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInt7Y3BDYW5jZWxCdXR0b25DbGFzc319XCIgKGNsaWNrKT1cIm9uQ2FuY2VsQ29sb3IoJGV2ZW50KVwiPnt7Y3BDYW5jZWxCdXR0b25UZXh0fX08L2J1dHRvbj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiY3BPS0J1dHRvblwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInt7Y3BPS0J1dHRvbkNsYXNzfX1cIiAoY2xpY2spPVwib25BY2NlcHRDb2xvcigkZXZlbnQpXCI+e3tjcE9LQnV0dG9uVGV4dH19PC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgYm9keXttYXJnaW46MDtmb250LXNpemU6MTAwJTtoZWlnaHQ6MTAwJX1odG1se2hlaWdodDoxMDAlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLDphZnRlciw6YmVmb3Jle2JveC1zaXppbmc6aW5oZXJpdH1bY2xhc3MqPVwiIHNlbS1pY29uLVwiXSxbY2xhc3NePXNlbS1pY29uLV17dmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtZmFtaWx5OnNlbWJsZXItaWNvIWltcG9ydGFudDtzcGVhazpub25lO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7bGluZS1oZWlnaHQ6MTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZX0uc2VtLWljb24tZHJvcF9pY29uOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGJcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1kcmFnOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDZcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1wcm9kdWN0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTNcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1mb3JtOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmFcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1sb2NhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE0XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzNVwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLXRleHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NVwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWxvY2F0aW9uMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ3XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tSTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA2XCJ9LnNlbS1pY29uLVM6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwN1wifS5zZW0taWNvbi1VOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDhcIn0uc2VtLWljb24tQjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA5XCJ9LnNlbS1pY29uLWp1c3RpZnk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwY1wiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxMFwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLW1pZGRsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTExXCI7Y29sb3I6I2NjY30uc2VtLWljb24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxMlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWNvbG91cjI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwYVwifS5zZW0taWNvbi1icnVzaDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBiXCJ9LnNlbS1pY29uLWZvbGRlcjI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZFwifS5zZW0taWNvbi1sb2dvdXQyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGVcIn0uc2VtLWljb24tb2wyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGZcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1zZW5kOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDVcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1yZXBlYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwMFwifS5zZW0taWNvbi1jcm9wOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDFcIn0uc2VtLWljb24tY2FzZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAyXCJ9LnNlbS1pY29uLXJlc2l6ZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAzXCJ9LnNlbS1pY29uLWNoZWNrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDRcIn0uc2VtLWljb24tb2w6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxNVwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXVsOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTZcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1mb2xkZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxN1wifS5zZW0taWNvbi1jbG9zZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE4XCJ9LnNlbS1pY29uLWluYm94OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTlcIn0uc2VtLWljb24taG9tZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFhXCJ9LnNlbS1pY29uLXNoYXJlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWJcIn0uc2VtLWljb24taGFtYnVyZ2VyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWNcIn0uc2VtLWljb24tbG9jazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFkXCJ9LnNlbS1pY29uLXVubG9jazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFlXCJ9LnNlbS1pY29uLWVsbGlwc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxZlwifS5zZW0taWNvbi12b2x1bWU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyMFwifS5zZW0taWNvbi1wbGF5OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjFcIn0uc2VtLWljb24tdmlkZW86YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyMlwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWRlc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIzXCJ9LnNlbS1pY29uLWFkZHJlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyNFwifS5zZW0taWNvbi1jZW50ZXJfYWxpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyNVwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWp1c3RpZnkyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjZcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1yaWdodF9hbGlnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI3XCI7Y29sb3I6I2NjY30uc2VtLWljb24tbGVmdF9hbGlnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI4XCI7Y29sb3I6I2NjY30uc2VtLWljb24tY2Fyb3VzZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyOVwifS5zZW0taWNvbi1pbWFnZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJiXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tYmFjazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJjXCJ9LnNlbS1pY29uLWRlbGV0ZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJkXCI7Y29sb3I6I2QwMDIxYn0uc2VtLWljb24tZHVwbGljYXRlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmVcIn0uc2VtLWljb24tbGluazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJmXCJ9LnNlbS1pY29uLXN0eWxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzBcIn0uc2VtLWljb24tY29sb3VyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzFcIn0uc2VtLWljb24tYWRkX2FjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMlwiO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWFkZF9hY2NlbnQgLnBhdGgyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzNcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXNlbmQyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzRcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzNlwifS5zZW0taWNvbi1jb2xvdXJfYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM3XCI7Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tY29sb3VyX2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzOFwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZmZn0uc2VtLWljb24tcHJvZmlsZS1hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzlcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1wcm9maWxlLWFjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzYVwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZmZn0uc2VtLWljb24tZG93bl9hcnJvdzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNiXCJ9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNjXCI7Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2RcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoMzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNlXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzZlwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tbG9nb3V0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDBcIn0uc2VtLWljb24tcGF5bWVudDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQxXCJ9LnNlbS1pY29uLXNldHRpbmdzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDJcIn0uc2VtLWljb24tc2l0ZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0M1wifS5zZW0taWNvbi1wcm9maWxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDRcIn0uc2VtLWxpc3QtcmVzZXR7bGlzdC1zdHlsZTpub25lO3BhZGRpbmctbGVmdDowO21hcmdpbjowfS5zZW0tYm9yZGVye2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4fS5zZW0tYm9yZGVyLXRvcHtib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjfS5zZW0tYm9yZGVyLXJpZ2h0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2NjY30uc2VtLWJvcmRlci1ib3R0b217Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjY30uc2VtLWJvcmRlci1sZWZ0e2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjY2NjfS5zZW0tYm9yZGVyLW5vbmV7Ym9yZGVyOjB9LnNlbS1yb3VuZGVke2JvcmRlci1yYWRpdXM6M3B4fS5zZW0tY2lyY2xle2JvcmRlci1yYWRpdXM6NTAlfS5zZW0tcm91bmRlZC10b3B7Ym9yZGVyLXJhZGl1czozcHggM3B4IDAgMH0uc2VtLXJvdW5kZWQtcmlnaHR7Ym9yZGVyLXJhZGl1czowIDNweCAzcHggMH0uc2VtLXJvdW5kZWQtYm90dG9te2JvcmRlci1yYWRpdXM6MCAwIDNweCAzcHh9LnNlbS1yb3VuZGVkLWxlZnR7Ym9yZGVyLXJhZGl1czozcHggMCAwIDNweH0uc2VtLW5vdC1yb3VuZGVke2JvcmRlci1yYWRpdXM6MH0uc2VtLWJ1dHRvbi1jaXJjbGV7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOiNmZmY7Zm9udC13ZWlnaHQ6NzAwfS5zZW0tYnV0dG9uLWNpcmNsZTpiZWZvcmV7cGFkZGluZzowIDAgMCAxcHh9LnNlbS1idXR0b24tZGVsZXRle2NvbG9yOiNmZmY7Zm9udC1zaXplOjZweDtwYWRkaW5nOi4zcmVtO2JhY2tncm91bmQtY29sb3I6I2QwMDIxYjstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5idWxsZXQtaW5saW5lbGlzdCBsaXt2ZXJ0aWNhbC1hbGlnbjp0b3A7bWFyZ2luOjAgLTJweH0uYnVsbGV0LWlubGluZWxpc3QgbGkgLnNlbGVjdHtkaXNwbGF5OmJsb2NrO3dpZHRoOjIycHh9LmJ1bGxldC1pbmxpbmVsaXN0IGxpIC5zZWxlY3Qgc2VsZWN0e2Rpc3BsYXk6bm9uZX0uYnVsbGV0LWlubGluZWxpc3QgbGkuYWN0aXZlIC5zZWxlY3Qgc2VsZWN0e2Rpc3BsYXk6aW5saW5lfS5idWxsZXQtaW5saW5lbGlzdCBsaS5hY3RpdmU6OmFmdGVye2JhY2tncm91bmQtY29sb3I6cmVkfS5idWxsZXQtaW5saW5lbGlzdCBsaTo6YmVmb3Jle2NvbnRlbnQ6Jyc7dG9wOi01cHg7bGVmdDowO3dpZHRoOjEwMCU7Ym9yZGVyLXRvcDoxcHggc29saWQgIzAwMH0uYnVsbGV0LWlubGluZWxpc3QgbGk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAwMjtkaXNwbGF5OmJsb2NrO3RvcDotOXB4O2xlZnQ6MzglO3dpZHRoOjlweDtoZWlnaHQ6OXB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbnRlbnQ6Jyd9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOmZpcnN0LWNoaWxkOjpiZWZvcmV7bGVmdDozOCV9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOmxhc3QtY2hpbGQ6OmJlZm9yZXtsZWZ0Oi00NCV9LnNlbS1idXR0b24tcmFpbi1kcm9we3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIzcHg7aGVpZ2h0OjIzcHg7bWFyZ2luOjRweCA2cHggOHB4O2N1cnNvcjpwb2ludGVyfS5zZW0tYnV0dG9uLXJhaW4tZHJvcCAuc2VtLWJ1dHRvbi1kZWxldGV7Zm9udC1zaXplOjZweDt0b3A6NnB4O3JpZ2h0Oi05cHh9LnNlbS1kZW1vLXNpZGViYXJ7cG9zaXRpb246Zml4ZWQ7b3ZlcmZsb3cteTpzY3JvbGw7aGVpZ2h0OjEwMCU7d2lkdGg6MTYwcHg7YmFja2dyb3VuZDojNDQ0ZDYzfS5zZW0tZGVtby1zaWRlYmFyIGZpZ2NhcHRpb257Y29sb3I6IzliYzFiY30uc2VtLWRlbW8tc2lkZWJhciBhLC5zZW0tZGVtby1zaWRlYmFyIGxpe3RleHQtZGVjb3JhdGlvbjpub25lfS5zZW0tZGVtby1zaWRlYmFyIGE6aG92ZXIsLnNlbS1kZW1vLXNpZGViYXIgbGk6aG92ZXJ7Y29sb3I6IzAwMn0uc2VtLWRlbW8tc2lkZWJhciBhLmFjdGl2ZSwuc2VtLWRlbW8tc2lkZWJhciBsaS5hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMDVkY2I2fS5zZW0tZGVtby1zaWRlYmFyOjotd2Via2l0LXNjcm9sbGJhcnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTt3aWR0aDo3cHh9LnNlbS1kZW1vLXNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNSk7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNSl9LnNlbS1kZW1vLWNvbnRlbnR7ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OjEwMCU7cGFkZGluZy1sZWZ0OjE2MHB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMX0uY29ybmVyX3RvcHtib3JkZXItcmFkaXVzOjZweCA2cHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2JvdHRvbXtib3JkZXItcmFkaXVzOjAgMCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX25vbmV7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2FsbHtib3JkZXItcmFkaXVzOjZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl9yaWdodHtib3JkZXItcmFkaXVzOjZweCAwIDAgNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2xlZnR7Ym9yZGVyLXJhZGl1czowIDZweCA2cHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl90b3AtbGVmdHtib3JkZXItcmFkaXVzOjAgNnB4IDZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl90b3AtcmlnaHR7Ym9yZGVyLXJhZGl1czo2cHggMCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2JvdHRvbS1sZWZ0LC5jb3JuZXJfYm90dG9tLXJpZ2h0e2JvcmRlci1yYWRpdXM6NnB4IDZweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLXBhZ2luYXRpb24tY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc2VtLXBhZ2luYXRpb24tbmF2e21heC13aWR0aDozMDBweH0uc2VtLXBhZ2luYXRpb24tbmF2PmRpdntmbGV4OjE7dGV4dC1hbGlnbjpjZW50ZXI7LW1vei11c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZX0uc2VtLXBhZ2luYXRpb24tbmV4dCBhe3RleHQtYWxpZ246bGVmdH0uc2VtLXBhZ2luYXRpb24tcHJldmlvdXMgYXt0ZXh0LWFsaWduOnJpZ2h0fS5zZW0tcGFnaW5hdGlvbiBhLC5zZW0tcGFnaW5hdGlvbi1uZXh0IGEsLnNlbS1wYWdpbmF0aW9uLXByZXZpb3VzIGF7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zZW0tcGFnaW5hdGlvbi5hY3RpdmUgZGl2e2JvcmRlcjpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc2VtLXBhZ2luYXRpb24uYWN0aXZlIGRpdjpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS1hdmF0YXJ7d2lkdGg6NDBweDtoZWlnaHQ6NDBweH0uc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmRpYWxvZy1jb250YWluZXIsLnNlbS1jb2xvcmxpc3QtLWNvbnRhaW5lciwuc2VtLXNoYWRvdywuc2lkZWJhci1jb250YWluZXJ7Ym94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwuMTIpLDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yNCl9LmRpYWxvZy1jb250YWluZXI6aG92ZXIsLnNlbS1jb2xvcmxpc3QtLWNvbnRhaW5lcjpob3Zlciwuc2VtLXNoYWRvdzpob3Zlciwuc2lkZWJhci1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDE0cHggMjhweCByZ2JhKDAsMCwwLC4yNSksMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwuMjIpfS5zZW0tc2hhZG93X3NtYWxse2JveC1zaGFkb3c6MCAxcHggMnB4IHJnYmEoMCwwLDAsLjcpLDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yNCl9LnNlbS1zaGFkb3dfc21hbGw6aG92ZXJ7Ym94LXNoYWRvdzowIDJweCAzcHggcmdiYSgwLDAsMCwuOSksMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwuMTkpfS5kaWFsb2ctY29udGFpbmVye292ZXJmbG93OmF1dG87Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjouM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcHtib3JkZXItcmFkaXVzOjA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2JveC1zaGFkb3c6bm9uZX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9wOmhvdmVye2JveC1zaGFkb3c6bm9uZX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9wIC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXJ7Ym9yZGVyLXJhZGl1czoxMnB4IDAgMCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9wIC5kaWFsb2ctY29udGFpbmVyLS1ib2R5e3BhZGRpbmctbGVmdDoyNnB4O2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItZnVsbHtoZWlnaHQ6MTAwJTt6LWluZGV4OjJ9LmRpYWxvZy1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjAgMTJweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLS1ib2R5LC5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZHtib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVye2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1jb2xvcmxpc3R7b3ZlcmZsb3c6YXV0b30uc2VtLWNvbG9ybGlzdC0tY29udGFpbmVye2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1jb2xvcmxpc3QtLWxpc3R7bWluLWhlaWdodDoyMHB4fS5zZW0tY29sb3JsaXN0LS1saXN0LS1pbm5lcntkaXNwbGF5Om5vbmV9LnNlbS1jb2xvcmxpc3QtLWxpc3Q6aG92ZXIgLnNlbS1jb2xvcmxpc3QtLWxpc3QtLWlubmVye2Rpc3BsYXk6YmxvY2t9LnNlbS1jb2xvcmxpc3QtLWNsb3NlYnV0dG9ue2ZvbnQtc2l6ZToxMXB4fS5icm93c2VyLWNvbnRhaW5lcntoZWlnaHQ6Y2FsYygxMDAlIC0gMzBweCAtIDIwcHgpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjAgMjBweDtib3JkZXItcmFkaXVzOjEwcHh9LmJyb3dzZXItY29udGFpbmVyIC5sYXlvdXR7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGx9LmJyb3dzZXItY29udGFpbmVyOjpiZWZvcmV7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yMHB4O2xlZnQ6MTVweDt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2JvcmRlci1yYWRpdXM6NTAlfS5zZW11aS1mb3JtLXNlbGVjdCBzZWxlY3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6MTAlO3dpZHRoOjgwJTttYXJnaW4tcmlnaHQ6MTAlO2JvcmRlcjoxcHggc29saWQgI2Q4Y2ZjZjtib3JkZXItcmFkaXVzOjEwcHg7Zm9udC1zaXplOjEuOGVtO2NvbG9yOiNkOGNmY2Y7Y3Vyc29yOnBvaW50ZXJ9aW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTttYXJnaW46MH1pbnB1dC5zZW0taW5wdXR7d2lkdGg6Y2FsYygxMDAlKTtvdXRsaW5lOjA7Ym9yZGVyLXJhZGl1czoxMHB4IDEwcHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9ZmlndXJlLnNlbXVpLXRodW1ibmFpbCBpbnB1dC5maWdjYXB0aW9uLWNvbnRhaW5lcixpbnB1dC5ibG9jayxpbnB1dC5zZW11aS10YWJze2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG99LnNlbS11bC1pY29uLWxpc3Q+ZGl2IC5zZW0tbGl7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjY30uc2VtLXVsLWljb24tbGlzdD5kaXY6bGFzdC1jaGlsZCAuc2VtLWxpe2JvcmRlci1ib3R0b206MCBzb2xpZCAjY2NjfS5uby1wYWRkaW5nLWxpc3QgLnNlbS11bCAuc2VtLWxpLC5uby1wYWRkaW5nLWxpc3QgLnNlbS11bC1pY29uLWxpc3QgLnNlbS1saXtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saXt3aGl0ZS1zcGFjZTpub3dyYXA7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtwYWRkaW5nLXRvcDouNDVyZW07cGFkZGluZy1ib3R0b206LjQ1cmVtO2N1cnNvcjpwb2ludGVyfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGk6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkuYWN0aXZlIGltZy5pY29uLWRlZmF1bHR7ZGlzcGxheTpub25lfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkuYWN0aXZlIGltZy5pY29uLWhvdmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkgaW1ne2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW4tYm90dG9tOjRweH0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpIGltZy5pY29uLWhvdmVye2Rpc3BsYXk6bm9uZX0uc2VtLXVse2xpc3Qtc3R5bGU6bm9uZTt3aWR0aDoxMDAlO21hcmdpbjowIGF1dG87cGFkZGluZzowfS5zZW0tdWwgLnNlbS1saXtwYWRkaW5nLXRvcDouNDVyZW07cGFkZGluZy1ib3R0b206LjQ1cmVtO2N1cnNvcjpwb2ludGVyfS5zZW0tdWwgLnNlbS1saTpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS11bCAuc2VtLWxpLmFjdGl2ZXtib3JkZXItcmFkaXVzOjdweCAwIDAgN3B4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH11bC5jb3JuZXJfYWxsIGxpOmZpcnN0LWNoaWxke2JvcmRlci1yYWRpdXM6NnB4IDZweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fXVsLmNvcm5lcl9hbGwgbGk6bGFzdC1jaGlsZHtib3JkZXItcmFkaXVzOjAgMCAxMXB4IDExcHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lcntib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt0cmFuc2l0aW9uOi4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uc2lkZWJhci1jb250YWluZXItZnVsbHtoZWlnaHQ6MTAwJX0uc2lkZWJhci1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjAgMTJweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tYm9keSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2Vke2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVye2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1jb2xvci1zd2F0Y2hlc3tmbGV4LXdyYXA6bm93cmFwfS5zZW0tY29sb3Itc3dhdGNoZXNfY3VycmVudHtmbGV4LWdyb3c6MX0uc2VtLWNvbG9yLXN3YXRjaGVzX2N1cnJlbnQgYnV0dG9ue21hcmdpbi10b3A6MTBweH0uc2VtLWNvbG9yLXN3YXRjaGVzX3ByZXNlbGVjdGVke21hcmdpbi10b3A6MTNweDttYXJnaW4tbGVmdDotMTBweDttYXJnaW4tYm90dG9tOjA7ZmxleC1ncm93OjE7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC13cmFwOndyYXA7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDo2N3B4fS5zZWN0aW9uLWxpc3R7b3ZlcmZsb3c6c2Nyb2xsO2hlaWdodDo4NCV9LnNlY3Rpb24tY29udGFpbmVye2JvcmRlcjoxcHggc29saWQgZ3JleTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9LnNlY3Rpb25zLXNlYXJjaHtoZWlnaHQ6MTYlO2JhY2tncm91bmQtY29sb3I6Z3JleX0uc2lkZWJhci1kaWFsb2d7d2lkdGg6MTQyJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtoZWlnaHQ6MTAwJX0uaDF7Zm9udC1zaXplOjJyZW19Lmgye2ZvbnQtc2l6ZToxLjVyZW19Lmgze2ZvbnQtc2l6ZToxLjI1cmVtfS5oNHtmb250LXNpemU6MXJlbX0uaDV7Zm9udC1zaXplOi44NzVyZW19Lmg2e2ZvbnQtc2l6ZTouNzVyZW19LmZvbnQtZmFtaWx5LWluaGVyaXR7Zm9udC1mYW1pbHk6aW5oZXJpdH0uZm9udC1zaXplLWluaGVyaXR7Zm9udC1zaXplOmluaGVyaXR9LnRleHQtZGVjb3JhdGlvbi1ub25le3RleHQtZGVjb3JhdGlvbjpub25lfS5ib2xke2ZvbnQtd2VpZ2h0OjcwMH0ucmVndWxhcntmb250LXdlaWdodDo0MDB9Lml0YWxpY3tmb250LXN0eWxlOml0YWxpY30uY2Fwc3t0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6LjJlbX0ubGVmdC1hbGlnbnt0ZXh0LWFsaWduOmxlZnR9LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ucmlnaHQtYWxpZ257dGV4dC1hbGlnbjpyaWdodH0uanVzdGlmeXt0ZXh0LWFsaWduOmp1c3RpZnl9Lm5vd3JhcHt3aGl0ZS1zcGFjZTpub3dyYXB9LmJyZWFrLXdvcmR7d29yZC13cmFwOmJyZWFrLXdvcmR9LmxpbmUtaGVpZ2h0LTF7bGluZS1oZWlnaHQ6MX0ubGluZS1oZWlnaHQtMntsaW5lLWhlaWdodDoxLjEyNX0ubGluZS1oZWlnaHQtM3tsaW5lLWhlaWdodDoxLjI1fS5saW5lLWhlaWdodC00e2xpbmUtaGVpZ2h0OjEuNX0ubGlzdC1zdHlsZS1ub25le2xpc3Qtc3R5bGU6bm9uZX0udW5kZXJsaW5le3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnRydW5jYXRle21heC13aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubGlzdC1yZXNldHtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZy1sZWZ0OjB9LmlubGluZXtkaXNwbGF5OmlubGluZX0uYmxvY2ssLnNlbXVpLXRhYnMsZmlndXJlLnNlbXVpLXRodW1ibmFpbCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIC5maWdjYXB0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmJsb2NrfS5idWxsZXQtaW5saW5lbGlzdCBsaSwuaW5saW5lLWJsb2NrLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGksLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrfS50YWJsZXtkaXNwbGF5OnRhYmxlfS50YWJsZS1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbH0ub3ZlcmZsb3ctaGlkZGVue292ZXJmbG93OmhpZGRlbn0ub3ZlcmZsb3ctc2Nyb2xse292ZXJmbG93OnNjcm9sbH0ub3ZlcmZsb3ctYXV0b3tvdmVyZmxvdzphdXRvfS5jbGVhcmZpeDphZnRlciwuY2xlYXJmaXg6YmVmb3Jle2NvbnRlbnQ6XCIgXCI7ZGlzcGxheTp0YWJsZX0uY2xlYXJmaXg6YWZ0ZXJ7Y2xlYXI6Ym90aH0ubGVmdHtmbG9hdDpsZWZ0fS5yaWdodHtmbG9hdDpyaWdodH0uZml0LC5zZW0tYXZhdGFyIC5zZW0tYXZhdGFyX19pbWd7bWF4LXdpZHRoOjEwMCV9Lm1heC13aWR0aC0xe21heC13aWR0aDoyNHJlbX0ubWF4LXdpZHRoLTJ7bWF4LXdpZHRoOjMycmVtfS5tYXgtd2lkdGgtM3ttYXgtd2lkdGg6NDhyZW19Lm1heC13aWR0aC00e21heC13aWR0aDo2NHJlbX0uYm9yZGVyLWJveHtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmFsaWduLWJhc2VsaW5le3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfS5hbGlnbi10b3B7dmVydGljYWwtYWxpZ246dG9wfS5hbGlnbi1taWRkbGV7dmVydGljYWwtYWxpZ246bWlkZGxlfS5hbGlnbi1ib3R0b217dmVydGljYWwtYWxpZ246Ym90dG9tfS5tMCwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b24sZmlndXJlLGgxLGgyLGgzLGg0LGg1e21hcmdpbjowfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLm10MCwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye21hcmdpbi10b3A6MH0ubXIwe21hcmdpbi1yaWdodDowfS5tYjB7bWFyZ2luLWJvdHRvbTowfS5tbDB7bWFyZ2luLWxlZnQ6MH0ubXgwLC5zZW0tcGFnaW5hdGlvbi1uYXZ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MH0ubXkwe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Lm0xe21hcmdpbjouNXJlbX0ubXQxe21hcmdpbi10b3A6LjVyZW19Lm1yMXttYXJnaW4tcmlnaHQ6LjVyZW19Lm1iMXttYXJnaW4tYm90dG9tOi41cmVtfS5tbDF7bWFyZ2luLWxlZnQ6LjVyZW19Lm14MSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbnttYXJnaW4tbGVmdDouNXJlbTttYXJnaW4tcmlnaHQ6LjVyZW19Lm15MSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse21hcmdpbi10b3A6LjVyZW07bWFyZ2luLWJvdHRvbTouNXJlbX0ubTJ7bWFyZ2luOjFyZW19Lm10MnttYXJnaW4tdG9wOjFyZW19Lm1yMnttYXJnaW4tcmlnaHQ6MXJlbX0ubWIye21hcmdpbi1ib3R0b206MXJlbX0ubWwye21hcmdpbi1sZWZ0OjFyZW19Lm14MnttYXJnaW4tbGVmdDoxcmVtO21hcmdpbi1yaWdodDoxcmVtfS5teTJ7bWFyZ2luLXRvcDoxcmVtO21hcmdpbi1ib3R0b206MXJlbX0ubTN7bWFyZ2luOjJyZW19Lm10M3ttYXJnaW4tdG9wOjJyZW19Lm1yM3ttYXJnaW4tcmlnaHQ6MnJlbX0ubWIze21hcmdpbi1ib3R0b206MnJlbX0ubWwzLC5zZW0tY29sb3JsaXN0LS1jb250YWluZXJ7bWFyZ2luLWxlZnQ6MnJlbX0ubXgze21hcmdpbi1sZWZ0OjJyZW07bWFyZ2luLXJpZ2h0OjJyZW19Lm15M3ttYXJnaW4tdG9wOjJyZW07bWFyZ2luLWJvdHRvbToycmVtfS5tNHttYXJnaW46NHJlbX0ubXQ0e21hcmdpbi10b3A6NHJlbX0ubXI0e21hcmdpbi1yaWdodDo0cmVtfS5tYjR7bWFyZ2luLWJvdHRvbTo0cmVtfS5tbDR7bWFyZ2luLWxlZnQ6NHJlbX0ubXg0e21hcmdpbi1sZWZ0OjRyZW07bWFyZ2luLXJpZ2h0OjRyZW19Lm15NHttYXJnaW4tdG9wOjRyZW07bWFyZ2luLWJvdHRvbTo0cmVtfS5teG4xe21hcmdpbi1sZWZ0Oi0uNXJlbTttYXJnaW4tcmlnaHQ6LS41cmVtfS5teG4ye21hcmdpbi1sZWZ0Oi0xcmVtO21hcmdpbi1yaWdodDotMXJlbX0ubXhuM3ttYXJnaW4tbGVmdDotMnJlbTttYXJnaW4tcmlnaHQ6LTJyZW19Lm14bjR7bWFyZ2luLWxlZnQ6LTRyZW07bWFyZ2luLXJpZ2h0Oi00cmVtfS5tbC1hdXRve21hcmdpbi1sZWZ0OmF1dG99Lm1yLWF1dG97bWFyZ2luLXJpZ2h0OmF1dG99Lm14LWF1dG97bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30uYnJvd3Nlci1jb250YWluZXIsLnAwLGZpZ3VyZSxoMSxoMixoMyxoNCxoNXtwYWRkaW5nOjB9LnB0MHtwYWRkaW5nLXRvcDowfS5wcjB7cGFkZGluZy1yaWdodDowfS5wYjB7cGFkZGluZy1ib3R0b206MH0ucGwwe3BhZGRpbmctbGVmdDowfS5weDB7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfS5weTAsLnNlbS11bC1pY29uLWxpc3QgLnNlbS1saS5uby1wYWRkaW5ne3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uY29ybmVyLC5wMSwuc2VtLWNvbG9yLWxpc3QgbGksLnNlbS1zZWN0aW9uLS1jb3JuZXJ7cGFkZGluZzouNXJlbX0ucHQxe3BhZGRpbmctdG9wOi41cmVtfS5wcjEsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbHtwYWRkaW5nLXJpZ2h0Oi41cmVtfS5wYjF7cGFkZGluZy1ib3R0b206LjVyZW19LnBsMSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse3BhZGRpbmctbGVmdDouNXJlbX0uZGlhbG9nLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLmRpYWxvZy1jb250YWluZXItLWZvb3RlciwuZGlhbG9nLWNvbnRhaW5lci0taGVhZGVyLC5weTEsLnNpZGViYXItY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuc2lkZWJhci1jb250YWluZXItLWZvb3Rlciwuc2lkZWJhci1jb250YWluZXItLWhlYWRlcixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257cGFkZGluZy10b3A6LjVyZW07cGFkZGluZy1ib3R0b206LjVyZW19LmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2VkLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLnB4MSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye3BhZGRpbmctbGVmdDouNXJlbTtwYWRkaW5nLXJpZ2h0Oi41cmVtfS5wMntwYWRkaW5nOjFyZW19LnB0MntwYWRkaW5nLXRvcDoxcmVtfS5wcjJ7cGFkZGluZy1yaWdodDoxcmVtfS5wYjJ7cGFkZGluZy1ib3R0b206MXJlbX0ucGwye3BhZGRpbmctbGVmdDoxcmVtfS5weTJ7cGFkZGluZy10b3A6MXJlbTtwYWRkaW5nLWJvdHRvbToxcmVtfS5idWxsZXQtaW5saW5lbGlzdCBsaSwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5weDIsLnNlbS1jb2xvci1saXN0IGxpLC5zZW0tdWwgLnNlbS1saSwuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntwYWRkaW5nLWxlZnQ6MXJlbTtwYWRkaW5nLXJpZ2h0OjFyZW19LnAze3BhZGRpbmc6MnJlbX0ucHQze3BhZGRpbmctdG9wOjJyZW19LnByM3twYWRkaW5nLXJpZ2h0OjJyZW19LnBiM3twYWRkaW5nLWJvdHRvbToycmVtfS5wbDN7cGFkZGluZy1sZWZ0OjJyZW19LnB5M3twYWRkaW5nLXRvcDoycmVtO3BhZGRpbmctYm90dG9tOjJyZW19LnB4M3twYWRkaW5nLWxlZnQ6MnJlbTtwYWRkaW5nLXJpZ2h0OjJyZW19LnA0e3BhZGRpbmc6NHJlbX0ucHQ0e3BhZGRpbmctdG9wOjRyZW19LnByNHtwYWRkaW5nLXJpZ2h0OjRyZW19LnBiNHtwYWRkaW5nLWJvdHRvbTo0cmVtfS5wbDR7cGFkZGluZy1sZWZ0OjRyZW19LnB5NHtwYWRkaW5nLXRvcDo0cmVtO3BhZGRpbmctYm90dG9tOjRyZW19LnB4NHtwYWRkaW5nLWxlZnQ6NHJlbTtwYWRkaW5nLXJpZ2h0OjRyZW19LmNvbCwuc2VtLWRlbW8tY29udGVudCwuc2VtLWRlbW8tc2lkZWJhcntmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY29sLTF7d2lkdGg6OC4zMzMzMyV9LmNvbC0ye3dpZHRoOjE2LjY2NjY3JX0uY29sLTN7d2lkdGg6MjUlfS5jb2wtNHt3aWR0aDozMy4zMzMzMyV9LmNvbC01e3dpZHRoOjQxLjY2NjY3JX0uY29sLTZ7d2lkdGg6NTAlfS5jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LmNvbC04e3dpZHRoOjY2LjY2NjY3JX0uY29sLTl7d2lkdGg6NzUlfS5jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5jb2wtMTIsLnNlbS1kZW1vLWNvbnRlbnR7d2lkdGg6MTAwJX0uZmxleCwuc2VtLWNvbG9yLXN3YXRjaGVzLC5zZW0tcGFnaW5hdGlvbi1uYXZ7ZGlzcGxheTpmbGV4fUBtZWRpYSAobWluLXdpZHRoOjQwZW0pey5zbS1jb2x7ZmxvYXQ6bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNtLWNvbC1yaWdodHtmbG9hdDpyaWdodDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNtLWNvbC0xe3dpZHRoOjguMzMzMzMlfS5zbS1jb2wtMnt3aWR0aDoxNi42NjY2NyV9LnNtLWNvbC0ze3dpZHRoOjI1JX0uc20tY29sLTR7d2lkdGg6MzMuMzMzMzMlfS5zbS1jb2wtNXt3aWR0aDo0MS42NjY2NyV9LnNtLWNvbC02e3dpZHRoOjUwJX0uc20tY29sLTd7d2lkdGg6NTguMzMzMzMlfS5zbS1jb2wtOHt3aWR0aDo2Ni42NjY2NyV9LnNtLWNvbC05e3dpZHRoOjc1JX0uc20tY29sLTEwe3dpZHRoOjgzLjMzMzMzJX0uc20tY29sLTExe3dpZHRoOjkxLjY2NjY3JX0uc20tY29sLTEye3dpZHRoOjEwMCV9LnNtLWZsZXh7ZGlzcGxheTpmbGV4fX1AbWVkaWEgKG1pbi13aWR0aDo1MmVtKXsubWQtY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5tZC1jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5tZC1jb2wtMXt3aWR0aDo4LjMzMzMzJX0ubWQtY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5tZC1jb2wtM3t3aWR0aDoyNSV9Lm1kLWNvbC00e3dpZHRoOjMzLjMzMzMzJX0ubWQtY29sLTV7d2lkdGg6NDEuNjY2NjclfS5tZC1jb2wtNnt3aWR0aDo1MCV9Lm1kLWNvbC03e3dpZHRoOjU4LjMzMzMzJX0ubWQtY29sLTh7d2lkdGg6NjYuNjY2NjclfS5tZC1jb2wtOXt3aWR0aDo3NSV9Lm1kLWNvbC0xMHt3aWR0aDo4My4zMzMzMyV9Lm1kLWNvbC0xMXt3aWR0aDo5MS42NjY2NyV9Lm1kLWNvbC0xMnt3aWR0aDoxMDAlfS5tZC1mbGV4e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6NjRlbSl7LmxnLWNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGctY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGctY29sLTF7d2lkdGg6OC4zMzMzMyV9LmxnLWNvbC0ye3dpZHRoOjE2LjY2NjY3JX0ubGctY29sLTN7d2lkdGg6MjUlfS5sZy1jb2wtNHt3aWR0aDozMy4zMzMzMyV9LmxnLWNvbC01e3dpZHRoOjQxLjY2NjY3JX0ubGctY29sLTZ7d2lkdGg6NTAlfS5sZy1jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LmxnLWNvbC04e3dpZHRoOjY2LjY2NjY3JX0ubGctY29sLTl7d2lkdGg6NzUlfS5sZy1jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5sZy1jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5sZy1jb2wtMTJ7d2lkdGg6MTAwJX0ubGctZmxleHtkaXNwbGF5OmZsZXh9LmxnLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19LmZsZXgtY29sdW1ue2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uZmxleC13cmFwe2ZsZXgtd3JhcDp3cmFwfS5pdGVtcy1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5pdGVtcy1lbmR7YWxpZ24taXRlbXM6ZmxleC1lbmR9Lml0ZW1zLWNlbnRlcnthbGlnbi1pdGVtczpjZW50ZXJ9Lml0ZW1zLWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lfS5pdGVtcy1zdHJldGNoe2FsaWduLWl0ZW1zOnN0cmV0Y2h9LnNlbGYtc3RhcnR7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5zZWxmLWVuZHthbGlnbi1zZWxmOmZsZXgtZW5kfS5zZWxmLWNlbnRlcnthbGlnbi1zZWxmOmNlbnRlcn0uc2VsZi1iYXNlbGluZXthbGlnbi1zZWxmOmJhc2VsaW5lfS5zZWxmLXN0cmV0Y2h7YWxpZ24tc2VsZjpzdHJldGNofS5qdXN0aWZ5LXN0YXJ0e2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5qdXN0aWZ5LWVuZHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lmp1c3RpZnktY2VudGVye2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lmp1c3RpZnktYmV0d2VlbntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uanVzdGlmeS1hcm91bmR7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdGFydHthbGlnbi1jb250ZW50OmZsZXgtc3RhcnR9LmNvbnRlbnQtZW5ke2FsaWduLWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRlbnQtY2VudGVye2FsaWduLWNvbnRlbnQ6Y2VudGVyfS5jb250ZW50LWJldHdlZW57YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVufS5jb250ZW50LWFyb3VuZHthbGlnbi1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdHJldGNoe2FsaWduLWNvbnRlbnQ6c3RyZXRjaH0uZmxleC1hdXRve2ZsZXg6MSAxIGF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowfS5mbGV4LW5vbmV7ZmxleDpub25lfS5vcmRlci0we29yZGVyOjB9Lm9yZGVyLTF7b3JkZXI6MX0ub3JkZXItMntvcmRlcjoyfS5vcmRlci0ze29yZGVyOjN9Lm9yZGVyLWxhc3R7b3JkZXI6OTk5OTl9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLC5jb2xvci1waWNrZXIgLnNhdHVyYXRpb24tbGlnaHRuZXNzLC5yZWxhdGl2ZSwuc2VtLWNvbG9yLWxpc3QgbGksZmlndXJlLnNlbXVpLXRodW1ibmFpbCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIC5maWdjYXB0aW9uLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0uYWJzb2x1dGUsLmJ1bGxldC1pbmxpbmVsaXN0IGxpOjphZnRlciwuYnVsbGV0LWlubGluZWxpc3QgbGk6OmJlZm9yZSwuY29sb3ItcGlja2VyLC5zZW0tY29sb3ItbGlzdCBsaSAuY29sb3ItZGVsZXRlLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbjo6YWZ0ZXIsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBidXR0b24sZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3Bvc2l0aW9uOmFic29sdXRlfS5maXhlZHtwb3NpdGlvbjpmaXhlZH0uZGlhbG9nLWNvbnRhaW5lci1mdWxsLC5zZW0tY29sb3ItbGlzdCBsaSAuY29sb3ItZGVsZXRlLC50b3AtMCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbnt0b3A6MH0ucmlnaHQtMCwuc2VtLWNvbG9yLWxpc3QgbGkgLmNvbG9yLWRlbGV0ZSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbntyaWdodDowfS5ib3R0b20tMCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257Ym90dG9tOjB9LmxlZnQtMCwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVye2xlZnQ6MH0uejF7ei1pbmRleDoxfS56Mnt6LWluZGV4OjJ9Lnoze3otaW5kZXg6M30uejR7ei1pbmRleDo0fS5ib3JkZXJ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHh9LmJvcmRlci10b3B7Ym9yZGVyLXRvcC1zdHlsZTpzb2xpZDtib3JkZXItdG9wLXdpZHRoOjFweH0uYm9yZGVyLXJpZ2h0e2JvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtib3JkZXItcmlnaHQtd2lkdGg6MXB4fS5ib3JkZXItYm90dG9te2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHh9LmJvcmRlci1sZWZ0e2JvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO2JvcmRlci1sZWZ0LXdpZHRoOjFweH0uYm9yZGVyLW5vbmV7Ym9yZGVyOjB9LnJvdW5kZWR7Ym9yZGVyLXJhZGl1czozcHh9LmNpcmNsZSwuc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne2JvcmRlci1yYWRpdXM6NTAlfS5yb3VuZGVkLXRvcHtib3JkZXItcmFkaXVzOjNweCAzcHggMCAwfS5yb3VuZGVkLXJpZ2h0e2JvcmRlci1yYWRpdXM6MCAzcHggM3B4IDB9LnJvdW5kZWQtYm90dG9te2JvcmRlci1yYWRpdXM6MCAwIDNweCAzcHh9LnJvdW5kZWQtbGVmdHtib3JkZXItcmFkaXVzOjNweCAwIDAgM3B4fS5ub3Qtcm91bmRlZHtib3JkZXItcmFkaXVzOjB9LmhpZGV7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O2hlaWdodDoxcHg7d2lkdGg6MXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMXB4LDFweCwxcHgsMXB4KX1AbWVkaWEgKG1heC13aWR0aDo0MGVtKXsueHMtaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo0MGVtKSBhbmQgKG1heC13aWR0aDo1MmVtKXsuc20taGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo1MmVtKSBhbmQgKG1heC13aWR0aDo2NGVtKXsubWQtaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX0uZGlzcGxheS1ub25le2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnNlbS1sYWJlbC1idXR0b257dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC13ZWlnaHQ6NzAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCAjNTg1ODU4Oy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47Ym9yZGVyLXJhZGl1czoxMnB4IDEycHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOm5vbmV9LnNlbS1sYWJlbC1idXR0b246bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tbGFiZWwtYnV0dG9uX3NxdWFyZXtoZWlnaHQ6NDBweDt3aWR0aDo0MHB4fS5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtwYWRkaW5nLWJvdHRvbToycHh9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaS5hY3RpdmUgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTo6YWZ0ZXIsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaTpob3ZlciBidXR0b246bm90KFtkaXNhYmxlZF0pOjphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9ue2JvcmRlcjpub25lO291dGxpbmU6MDtib3gtc2hhZG93Om5vbmU7cGFkZGluZzouMzVlbSAuNzVlbTtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Ym90dG9tOi0xcHh9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3Zlcntib3JkZXI6bm9uZTtvcGFjaXR5OjF9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOjphZnRlcntjb250ZW50OlwiXCI7aGVpZ2h0OjNweDt3aWR0aDoxMDAlO2JvdHRvbTotMXB4O3RyYW5zaXRpb246MjUwbXM7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfXVsLnNlbXVpLXRhYnMtbGlzdC50YWJzLXZlcnRpY2Fse21hcmdpbjowfWZpZ3VyZS5zZW11aS10aHVtYm5haWx7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ1cHh9ZmlndXJlLnNlbXVpLXRodW1ibmFpbCBpbWd7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfWZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbnt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7bWluLWhlaWdodDo0NHB4fS5zZW11aS1jYXJkLWZvb3Rlcntjb2xvcjojZmZmO3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOiMyYTJhMmF9LnNlbXVpLWhlYWRlci1zZWN0aW9ue3BhZGRpbmc6MiUgMiUgMDtkaXNwbGF5OmJsb2NrfS5zZW11aS1oZWFkZXItc2VjdGlvbi5sYXJnZXtwYWRkaW5nOjMlIDIlIDB9LnNlbXVpLWhlYWRlci1zZWN0aW9uLnNtYWxse3BhZGRpbmc6MSUgLjUlIDB9LnNlbXVpLWZvb3Rlci1zZWN0aW9ue3BhZGRpbmc6MCAyJSAyJTtkaXNwbGF5OmJsb2NrfS5zZW11aS1mb290ZXItc2VjdGlvbi5sYXJnZXtwYWRkaW5nOjAgMiUgMyV9LnNlbXVpLWZvb3Rlci1zZWN0aW9uLnNtYWxse3BhZGRpbmc6MCAuNSUgMSV9LmNvbG9yLXN3aXRjaC1jb250YWluZXJ7cGFkZGluZzowIC4zZW0gLjVlbX0uY29sb3Itc3dpdGNoLWNvbnRhaW5lciAuc2VtLWlucHV0e2ZvbnQtc2l6ZToxMHB4fS5jb2xvci1zd2l0Y2gtY29udGFpbmVyIC5zZW0tdHlwby0tc3ViLWNhcHRpb257Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjE3cHg7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5jb2xvci1zd2l0Y2gtY29udGFpbmVyIC5pbnB1dC1ncnAgaW5wdXQuc2VtLWlucHV0e3dpZHRoOmNhbGMoMTAwJSAtIDIuMXJlbSl9LnNlbS1zd2F0Y2hlcy1jb250YWluZXJ7ZmxleC13cmFwOm5vd3JhcDtkaXNwbGF5OmZsZXg7cGFkZGluZzowIC4zZW0gLjVlbX0uc2VtLXN3YXRjaGVzLWNvbnRhaW5lcj5idXR0b257bWFyZ2luLXRvcDoxMXB4O2hlaWdodDo0NnB4O3dpZHRoOjQ2cHg7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzowO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0uc2VtLXN3YXRjaGVzLWNvbnRhaW5lci0tbGlzdHtwYWRkaW5nLXRvcDouM3JlbTttYXJnaW4tdG9wOjJweDttYXJnaW4tbGVmdDotMTFweDttYXJnaW4tYm90dG9tOjA7ZmxleC1ncm93OjE7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC13cmFwOndyYXA7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDo2N3B4O3dpZHRoOjEzMHB4fS5zZW0tc3dhdGNoZXMtY29udGFpbmVyLS1saXN0PmJ1dHRvbnttYXJnaW4tcmlnaHQ6LjNyZW07bWFyZ2luLWJvdHRvbTo1cHh9LmJ1dHRvbi1zZW5kOmJlZm9yZXtjb2xvcjojZmZmfS5zZW0tY29sb3Itc3dpdGNoLS1jb2xvcnMgLnN1Zml4e3RvcDotNHB4O3JpZ2h0OjRweH0uY29sb3ItcGlja2Vye21hcmdpbjowIGF1dG87Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7ei1pbmRleDoxMDAwMDA7d2lkdGg6MjEwcHg7aGVpZ2h0OmF1dG87Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uY29sb3ItcGlja2VyIC5jdXJzb3J7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXI6MnB4IHNvbGlkICMyMjI7Ym9yZGVyLXJhZGl1czo1MCU7Y3Vyc29yOmRlZmF1bHR9LmNvbG9yLXBpY2tlciAuaHVlLWFscGhhe21hcmdpbi1ib3R0b206M3B4fS5jb2xvci1waWNrZXIgLmh1ZXt3aWR0aDoxMDAlO2hlaWdodDoxNnB4O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKWUFBQUFRQ0FZQUFBRDA2SVluQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRBSVdEd2tVRldiQ0NBQUFBRnhKUkVGVWFON3Qwa0VLZzBBUUFNRTJ4ODMvbjJxdTVxQ2dEMWlEaENvWWRwbmJRQzliYlkxcVZPL2p2YzZrM2FkOTFzNy83RjEvY3NnUHJ1anVRMTdCRFlTRnNCQVd3Z0poSVN5RUJjSkNXQWdMaElXd0VCWUlpMmY3QXIvMVRDZ0ZIMlg5QUFBQUFFbEZUa1N1UW1DQyl9LmNvbG9yLXBpY2tlciAuYWxwaGF7d2lkdGg6MTAwJTtoZWlnaHQ6MTZweDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBUUNBWUFBQUQwNklZbkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0QUlXRHdZUWxaTWEzZ0FBQVdWSlJFRlVhTjd0bUVHTzZqQVFSQ3NPQXJIZ0JweUFKWUdqY0dvY3hBbTRBMklIcG1vV0UwZUJIK2V6bUZsTnZVMDZzaEozVzZWRWVsV01VUUFJSUY5ZjZxWnBpbXNBMUxZdFMydUY1MS91MjdZVkFGWlZSVWtFb0dIZFBWL3NJY2JJRUlJa1VkSS85WGE3bmV5djYxK1NXRlVWQVZDU2N0MDBUV24yZnY2dTMrRWNmZDN0WHp5LzArbkVVdStTUGpvL2txenJtaVFwU2NONnY5OFhld2ZBOC9sTWtpTEoyV3hHU1VvcGNUNmZNNlUwTlg5L2ZyZmJqZXYxV3RmcmxaZkxoWWZEUVFIRy9BSU9sbkd3aklObEhDeGpIQ3pqWUptL1RKV2RDd3F1SlhzZUZGekd3RE5OZWlLTU9KVE84eFFkRFFhZUIyOStLOWVmZUxhQm85Sjd2ZHZ0SmoxUmpGRmpmaXY3cXY5NXRqeC83bGVTUWdoOTNlMWZmTWVJcDZPK1lRamhvL043OTF0MVhWT1NTSTdOLy9LKzQvR294V0xCeCtQQjUvT3A1WExKKy8zT2xKSldxeFUzbTgzb3Z2NWlHZjhLallObEhDeGpIQ3pqWUJrSHk1Z2Y1Z3VzdlFVN1UzN2pUQUFBQUFCSlJVNUVya0pnZ2c9PSl9LmNvbG9yLXBpY2tlciAuc2F0dXJhdGlvbi1saWdodG5lc3N7d2lkdGg6MTAwJTtoZWlnaHQ6MTMwcHg7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9ZQUFBQ0NDQVlBQUFCU0Q3VDNBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINEFJV0R3a3NQV1I2bGdBQUlBQkpSRUZVZU5ydG5WdVQ0N2dSckFITitQLy9Pci82MVk1d09OWjdtWjF1M1hBZUxNakpaR1pWZ2RLc2ZjNXhSM1MwUklJVVcrQ0h6Q3BjMk1jWW83WEd2M2V4N1VpWmQ1N3JqeXp6dit2KzMzWC9SLyszci9mN3ZSMzg2WStUdktOY2Yvd2RoVExQY3Y5cVUyd1pkNzR1dGgwdDE4MjFqa0laTFBjc0kvNm5XYTRYdnV0cXVVMFo4NW1ueDgwUy9aemdwbkxuT3RITnQ3L29meDFUS1hjU056Ti83cWJNUTNqdTdyTlFtTVlZZC80czJqOWFhK1ArZ0dhTWNacmIxTS90ZHJ2ZjcvZDJ2OTlQOS90OTNPLzNjYnZkeHUxMkc5ZnJkVnd1bDNFK244Yy8vL25QKzIrLy9YYjY2YWVmeGwvLyt0Zng1ei8vMllLNUFsMnJndmY0VXNicGRHckI1MmJBdkFyWHB1emptaXFBVlNHejVlRG1HWVh6aGJBWm1Dcm5temRkcFVVKzhZMWRBT1llWEN0RFV3VndWN1lDR0g2dUFteU1jWjlsNXZrVWFCUEdNVVo3L0o1dy83OTIvZnZ2OVhxOTMyNjNkci9mVHhQRUNlTUU4bks1ak0vUHovSFRUei9kdjMzN2R2cmxsMS9HUC83eGovRzN2LzF0L09VdmZ3a1Zzd29uZ2pkT3A5UHpIM1UzRDN6bVdHblpWWG40akNxczd3QzJCS1A0Lzh0QXprWnNvV3g2WHJxZUhaeW12cDRBQkNCSmhUUXdLZkRUOGd6clpDSXFpNUFoaUFDakJmRUIyclA4L1g2M01NN2Y2L1Y2djkvdjdYYTdiWUM4M1c3amNybHNWSElxNWZmdjMwKy8vZmJiK09XWFg4WlBQLzAwL3Y3M3Y0K2ZmLzc1SlN2YmV1K2JMMldNTWFGYkFscEJOTTg1UVgrY3Q2cW9TcWtQQXd1UWxCVktxR05GU1VPQUEzQm11N2dDNWhOT2QxNW5Td3ZBT1VXN0M0Z2lVQ1Y4U2duNUw5aE5GSXFUc3AwR3hJMHlzaW95akFqa1kvdEdKVkVweitmeitPV1hYKzdmdjM4Ly9mNzc3K1BidDIvajExOS9IVC8vL1BQNDlkZGZ4OGZIUndybVRqVjc3OUVYdTJweDJ4aGp3dGRKWlFjQVdRSVBMUElTc01KYVN3aUQ4Z3pJS3J3U3lBVEU1ajVuQWJSNWMxZEJVd0Jsc0VXVzBoNkxxaVlzcUZQQVF4Q3lSWjN3T1NBUnhtbFhNWDVrNjRwUWZ2djI3Zjc1K2RrK1BqNU9IeDhmNC92MzcrUGJ0Mi9qdDk5K0c5KytmUnNmSHgvamNybVVGTE8zMWdZRFdibHhSSXMvVHFmVDdvdXN4SnNBeFhBMkdjN1RBOVhkZ2Zkb0hiRnNqNzZYMisxV0FyZ0kxYWdlR3dBM3F1cHFvSHNtY2JJNkZ1OTNxdWdnRmE5ZDdMZUR0Z0tmQUZIQkorTkVCeUlrY0o1S2VydmRUbWhoR2NnSkpTWjV2bi8vZmorZnorMThQcDgrUHovSDUrZm5tR0QrL3Z2djQvdjM3K1BqNDJOOGZuNk8yKzFXczdKampQNndyYU1JNUU0Ulo4eDJ2VjVUU3drcXVvdFY3L2Q3VHo2SEZXc0QvcU5jZHcwQ1EzcS8zMjFjNjg2VHdEVklkYnV5NzN6TmxkaFNIYjhJMmtsWnpubStJbkJTNFU2bjAzMDJhQkZzTGhIREFLSlZKVmdsZkk5amh2dTUzVzUzc0xBTllOeEFpREE2TUNlVUh4OGY5K3YxMmk2WFM3dGNMcWNaVzU3UDV5ZVk4L2Z6ODNPY3orZm5zU21ZVXlrbldFRzg1V0JzdDlzdHpTTHlNZGZyOVFpMDhpWTE1VVowTGxER0xoUjNvNXpLMmo3T1BVVEQwRStuVTN0azdYYi8xNk5GYmhsb0FNdVkxempMVU9PM0JLZUlEZStaOHMzL0o0Z0ZvNFRNNWpQbXVSZzI4Zm9VS0tWU3dvMTZUZ0E1bnB5d2NXTEhnWWwvUHo4LzczLzYwNS9hYjcvOTFtNjNXN3RjTGllMHNaajRtYW81Z1R5Zno4OEUwZjErajhFY1l6d1RQRUcyY3FqeWZITkYwTThmdXFFaWFPVm5SelpaUU5oNWZ3UXlIZy9IREdmSm84OVExemIvcXV1NVhDNjc3M0kyWEtmVHFkL3Y5K2Qzd3VxV3ZhL1lUZFVkRVYzZmhJdi9WaXlwczZZRTN4M3I0M0s1YkpRUzY2emF4VkdGc3ZkKy8vajRhRisvZm0zZnYzOXZ0OXV0ZmYzNnRmMysrKy90ZHJ1ZHZuMzdadU5MQmFhQ01nVXpDK3JaUmlGb3d4VXVKSThZTXFjQ3A5T3BxNXZhZ2FZVTZsR0pBMVhRcWVqY2h3NkNqMEd3NW5ZQnJHdzAxQTJPMjA2bjA0QkdvdU5OeVRmcC9Gd0VsaFVleTZuWHJJS3c3UVFXZGR4dU4ybGRMNWZMODM5Z1NQRjhhaHUvSnZCTzQ4Q1BTdXFNZjhWcDkvUDUzTDU4K2RMdTkzczduOC90ZnI4LzM5L3Y5L2I1K1RraFBKM1A1Nm1RNDM2L2orL2Z2Ky9pU2diemVyMCtBWngvNSs4OGJ2Nk9NZGE2UzV6NmtkMjFmWUM5ZHh2N2NJSkoyZDlBT1MzMGZQTXp5SGlUTThCNERGNlhVbFlIcDRLUVczVysxdDc3TU5CMXZHSHhXcTdYYTd2Zjc4K3k1L041QStIMWV0Mjl4dVA1ZGJZdHlhUnU0QWtzYlBxNjkzNmZqUnpYUnhCYlByL2IrYjE4K2ZLbGpUSGFCQkJmbjgvbjAvMStIMSsrZkJubjh6bTBzQjhmSDV1NGNyNUd1QmhNVmswRUVuOVJzY3RnVmhNK2l4bEp0TUEyM1I4QjZ5eXNBc3RCT2dGWElLS0NNSWdUb01xTkV1MmZZTUg3enRjNzMyZFFLa0NqMXl0QVp0WTBLeDhwSXI4R0dKK0FUM1YrMkhpcmhsKytmQm1YeTJXejczdytiMTdQOHArZm44L3RVd0dWbGVWa1R5VWI2OERrZmF5V1k0enhOUmloVTRFcExKUFpWcksrdTdKNC9tZ2ZLcWVMVzlYMlJFV2xJdEwxZGl5bmJERGIzK2pYZ1lqUXFuMHJyeFdjK05rSUxQN0Y3eEliTXZ4N3ZWNTN4NDB4bmxiV0pGMTJaU2FnL04wcFc2dCtaem1PTXpIamFqS3dEZm9uZDc4ellUZGZxMTh1cDk3enIycTh2M0lpb0JwclJ0QmwwRVo5b2c1V0JSR09kT0hqSWpYRjdVb3RGYmdPV25YeklKeXpZdmpHNUlZZ3NtTU94SGt6OE9zTVNyVk5XZXE1VDhEYU9jYkV2MU9kNXJiczlhTzdZdk1ldDYzRWtGKytmTUV4cStNUmw0L0w1YkxaTi8rZXorZm5aNkthenVNcVhTUVZPNXNwSlhmbEhBSXplcy94SnNlY2tSSmlETW9nOWQ2VmZScnFYTXI2S3BWVjI3alJ3SmFjR292T0FNMXpNZFFNbndLMUF1Yks2M2tkQ0NodkkxQzdnMHo5bmYvRCtYemUyVmo4SDdHeDRQOWR1UWxzWUNycXlOOFhxRzNIbS8xME9qM2p3L24rY3Jsc3R1TStqUG1teFQyZFR1UHo4M1B6dDJwbjFYc0VIWC9iblBhVnFWbWgweHdPdDBvNlhMTEFIZVBVVTIwM3dIZmNyc3BDd21WM1RyeUI1czBNc2VlZzk3eC9Cd3pDakJsYkIrcFJBUGxhMEJWUXVUNlY2UUhkQmxqM2QwS0cxNDdiK0RxeFFlVXltRE80M1c0ZFFhcitUSWp3bUFkMHo4L2g2NXZmMC95THYzUGI1WExwcnUveWREbzlzN0VUMEkrUGo2ZEtLOVZVRUllS1dRV1BBT3JKOExLZDR2RSt0OTFZM2U3VUZsV2F0ZzJWd0puYitIUG10dm0vc2ZLNTkvT2FXRjN4L2VQMVVQSHZBNUREWURwWVhmYjBkcnYxVjJEa0JreHR3L3RFV1ZWbFhXZEM5cEZZczUvamZoOWRTLzE2dlc3czZsVEcrVGZxc3hTSkh4a1hYcS9YZHIxZXU0THNmRDZQM3ZzVDNONzdEa0wrelBtNWpTZEtMNHpSM0F4UWQ2ckhrTGtZbFNvd3NycTd6bnp1NndTd2RzTUpPWG1BNWZCY2p4dGdNR0JZSGxyNXpva2h0c01DVGdYTFFPVzRYQzZkRXlFTXByTDhtQVF6WFJnZHVpeDJ5WnpvcnhrWXNEbjNoQjFWZU1MR3NYc1Z0Z2wycFc4UzNzdmswdnc3UjRoTmFIdnY0Y0FDbDVIRnp3SUgwS2M2enU0WGpEUFIvanBBVnhXek8xWGsyRERiM3ZUY3hlR1UxaVdaSGttSURXemlXS3ZpckNKNERyYXZzNklKL0dHNmNUcVdkWER5K2ZBclFEVlZrTHFrVmpBb1pJSVRkbW1JcVh3cWE5NU4zK01HWW9aUWRSVk5PNTNZMXhSa2hPMTZ2WTdldTUwN0NhOWxKbmJHcHhPZW1RaFN3L0FRc21tcDV6VTlCaVU4RzZ3dlg3Nk02L1U2UGo0K2RvMEJ6NENwZ2lrblRVZURxd2xLQm1nM3U0T1ZqcloxQStyQWNnYWVqV3E2ZUpDdkNZRkRPTlN3T2dIWDRFUVJ3OGx4YnpET2RFSzZnWjNIazFiKzhnMm8xSkZ0S1h5di9mRWRUWHVXaldYZEFaaUJwNkFEZURyQ0ZpaW03QjZaRm5lZUk3R3ZtL1BNa1VEWDY3Vzd4SThiMEQ3L3Y4ZEE5cWZONW9hQ2Y3NFdaakgwbWYxY21mWTFZMEpVRm1WclRXdTh1emtOY0x0RWo3dTVGWEJUa2ZDNkdPQTVxOFlNeE84S1Z2RjZzQVZHZGNyVWJzS09EY1FLa0xNT01kbWx4dW02NDJZclBtMjZBbGhaVzFZQjFSK3JyR3N3RThUYVlBV2VVTXhkZitXandTdloyRWYzeXRPeWZuNStQcFZQQWFxT240M010TkJxdm1qanhiak00bFpqWlk0Z3FOTUk1a3RhVy9zWUtOd1MrOWxGUXpHaWhtTUNLUGE3K1owVjZFYjBHUm1vYnRwWDhKbGpXdTVGTUxONWphNmhHOWt3UWdacWY1KzFOSDVVeHprRlJlQ2RXaEo4WGRsR1VreE83SFJsWVJtNG1WTzQzVzd0ZXIxMlRQSkV3L3JtRU4zTDVTS0hJV1pnOW16K3BVb0tPWXE1YkpUSmRYMmdtZTFVY3hNWlFGYUVRSWxIY3QzMk0rWTFCekdrR3V6Zml5QU45eit1Z3BsWjFzeW1DckRDWVlrR3hEVHBJOVJ6Qnkwckh5ZURVQzFuV2FlVWFEOW40eGtOeVlNQkRadHpaM0IrK2ZKbFkyMVhGRE9jQVJKbGFiT3lpUzN1Q3BMSTlqclpqQ0RrYVZ2Y0NDandvZ25LU2hXZHpYWldsWk12VlRnRDhMcHFsQ0xycWdiY0IrcVl3cmdLWXBUMGNjQ3FiS3lDVmFsa0VhYm4vRnlub2dDclBLZnFmNTF4SjdzR0IyWlhjWm14b1NPenRqeDMwMERaaTdhMC8yQUlSMFVsQmFnOVN1RHc2S2NBemxhQjd2SFp2V3BqSzkwZHlycTZiS3lEVVpRYlIwQjA1YmlMUWtISWNTVW1nSUsrU3d1cWdIQ25vaW8yUlFVMXlqK0JuQnk5cHBoVktMR3lDN1p6RksxcHhXSytFOEloVkNXTE4vdUx0blVVNGF5b1lMb2FBTno4RmR0YVN2WTRwVjBCRVcybHM2MWN6cWxsQktwVHlLZ01BaHJaMWNkYzFSUk90UG12V05rZGNLWjdaS3hhV2ppUExKTXBwN09aS3hBK3JxRy9vSkxqeGYwcG5KbHFMb0RabzNneVUwbUtHeXMydGFLZWNqL2QxQytySlNwbEJxbFR5QXFnUitEOEtqS2xtUkwyZ3RVY0FkQ3RzTCtpakNOVDFvcXFxa0gyT0hFYkc1c0RGblVnNUFhK3lMb3UyVlUxcHRqMVMyWlFxdjFPUlpOOUlXelJmZ2FSQnhLb0JFOFVXeXFsSkZ0ckljMEF4TmpTamVkOTlDVFkvWERmU3pDejVNMElab1ZFc1duUEZOVHNsOG9vVkMxVHpiR2dxRlpORFNnVndLSysxc0dETUtxeFpDV0dWTUR5c2lFcjFqVlNRSlVZd2o1aUhPbFRoZEh0NDRTUWc5Q04rbmw4RDkwTk1JZ0FkZ3I0NkpxUmlSOUk4dlJkRnZicjE3bS95eFVNS2pOTE1pVlVBRHd1MkNXR2hoaStGNTVUV005TTljb2d6bXMxZG5NNHVPRi9MQUVZV2RjcW5NN3lGbXlxM0lmd21PUk9kN1kxaUZXdE9qb1k4VG80MW1UVjVJeXNnRkZ1UnpzYldGR2JOSUlKQ0R2MWRPbzRsWkc3aldCd1JGdFZUS3VXeWVDQnlKS09hbjhvWjNlcDlYZGRObDB0RHVheXdMejljWFBZZURBQTBTcGtCTzlzYlZjVE9WV2xkUHY0dXl6RWt6eEh0anZvbkhvU2tGRVdOb28xZDhEaGNRcHV0ZDJwcE5vbjRCem9BaUoxaEJGUWcwZFZ0ZGJHSEhEUVd1c2htTkVRdWtMTTJRTzFHMlk4YmdUWHFGaGNCSmo3RWpQZ2NQdHM4VVM4cVBwUEIvZFh6bk9oNVo0Mzh0ekg1ZWM2UWdyT0tyUlJmS215c0JtVURCK1BoWWFiTWxWUEVSK0dDU0lUVHpyN2FtMnRBckgzYmdjRXpQSm0rY3I1ako0Tm5ITkZEVnJGWGNJNUxlOWs1Sm53K2JlZGJWK0ZmUnpaSUhhT09hT3NMWTAvN1VHczU4RGpyR3dLTUlNRklHek9FVzEvakdzZEF0Q042aEVBSTRoQmU5WVhlUlJPQlNWUEFWUEFxdklNNWJ4NWhWS1dBTVA2ekJSeTNpZXNjcmlkVmRGQmluQnhYRG5HMkdSWTJYYkN2cDFsaHZHdE85Qnh1NWg5MDhYUXU0MmxuU0FyTUZkaXpNaW04dXdSQ3hQR25uT1M4bHdwbmJPaURxVEFqc3JSTi9QY29BU2NDYmFBQ3FWTTQweWxuampUQnMrYndXbEFHMjMvVUtiZGtpd0tXSVFQR3pXYWN6cG9TbHhQRWo4MjJjTldrcFM3Rnl6c0RycXBmZ3BHM2phaHcydmdiYVNRQXh1TFdaWXQ3Snp5TmU4Sm9acE5BY3ZERk9kdzB3cVlUOUFLMXJaei9EZGJTbExQcDByeUl4Z1FKbEs5QVpsRXE3SU9YcG9oZzlQSWhyQ25nODhKc094aVY0WldBWWZnNHNpa3gvOGt5Mlo5bDg2MnVxd3Jmc2NJSDgrdWdUbVZHeWlkZGVWWVVnRU1uNEdaemcxNEV3SXNoOXN4MmNLS2lXWFJldU9FNWd6R09RZ2RsUktWVmRsZXZxYjI3OVhxMFFuc3RzMlZEYUJPMGNvZXpzcnVXdEhBcHU2c0tHNElCaE4wYUdVMmtMck1LR1JUTjNIbWJDRHdLVjE0enZrTUVERzRRZlpWc3BWbGFOVTJtaGM1VEVaM04xaC96cVRoZXVMcFcwNVpXVEdWamIzZGJuTm14S1pCbk44SnFpZGFWTEtBT3lBUk5MUytNQjU0WjIrVmFxb01MS3JvVkJsbmdlZm5UUEFjb0hOV0NTdmxmQThDSTBIRW1CTkJuQmxYeU1yelU3QTdXVm05NFBQcVEyZ21xS3grV0RHc252aWxtY1NPQkpxT0sxbll5QUl6dUF5ZXNxM1VkU0szS2ZXY1lLRDk1SG1mWU9VM3FzZXIyQ3RZRVVBK0ZwZnFkTnZnUEJaVUJoRHJHT05SVmxRc2g4ckxjYVVDeWtIRzBPT1V3VGxMQnJzaDVzb0VNR2V6aTFFNEhSVnQxaWNwNXdaRUZYZGliQ2tHOFk4dlg3NXNiTzRFMGlvbTl6K2hqU2lPZnkzRGhwWEl0cFZoRStVR1Fkdm9XanRDaG1yR0hmNFlBektnQk5uR3R1SnhGQ2VHZGhVQWZRTExLOGtCWUFQNmd2RkpaYWpNRzNYa3ljeThLdUMwcTRFeXltd3R3ZHhkdjJNMG1JQnRLMExLbmY2NDBqMDBBdXE0Z1VrZFdHbGhzMjJxSmM2ZFpDc0wxOW94bmxUSkc0U1lWUklHcEQ4VFBGQnVNNk9FbGJTMXBsZGlkNG1HQXlONlpJdXBiQzViWEpOOWZkcGJUaFN4TFVhSThJRzFYSVlCeFczVGpzNktRb3NLY3hmeGNRbWRud1JHTTEwR25GY0N5MlhZdW5MTXlBa2RnazRtZVBpY3pzTHlndGhjQnV0NmdvT3FTN1lWRlhBRExqYW9zQjZzNm9mY1pXQVpTSVJZcVNVa2l6WXd0dFlhYjN2VU9ROXcySFJ4SUlnOFd3UlZlRTY4eGk0VXRMM3pScGh4cGx6d3VacmNxWUNxMUkzalBJNWRuSkl5Z0VvaE1iUHFWSlN6cnd6eEJKVHM1ek4rUmVVU2d4aWtQUVZGM0pWQmVOUXhiSEVOckVNTnZFZEZaVlY5bEg5K09SR0VzTlpRcHlUTmM0QzNBRzdYRjRuZ3pxK0RyTzJ6YnVhYU9YZ2RhRmNka0VvdG9TRkJWWDJxSjBDOE9XWmVHNEtHbHBnaEEwWGZUT1BDcVYycXF3UTI2UVdmRjJQTUxoSTJ3MWxWQWEyYVBzWWQwemEyNU1RUndnY1pONnVRRENpK1p4aUQ0WEVNMmtaeE9UNDFGblpuYVJsY3Bab3V6bFJxcWRiUVZXb3BRb1NCNThSVjUwbEJOckhpL0F3WFM1THJ3RFZscFkzRmMzQnlpWUdjNTJUcmlzdDZrT1hkd0luQVF0SnBwNVFjaHlhcXVZT1Y3U3UrZnhWTWFWM2RjMFJFMlM2bVVZMGdMdDJwTWNZcXJLSVE5dzJsMWdwUVVNdFFZY21tYnQ1RFROeGRoblVDalFxdGJLOVNVU3p2ckMwbW1oaEUxZTJGUzIrb3h5cHkvWkFTdXRrbXRqeDN2Y0JDMjRQWDY1bmJxa0JDUmhmalM5a0lZUG5lZThjTWFnVk9oSS8zVDFmQW1kdEFXWnNDc3dUSkNrUVZOYTBxV0tTS1BPcEhBVWhEOURyYlZjeW9Za3dxaHZoMTd2WUFheVhMUXlLR1lkeGxVREZwNDk0ckJYUmpZZ08xN0REWWV0TklVai9lenA2UzBsbmxwRXdzV21KTWtPd3NLWGVaS0VBaklIbjBFUUpJU2FSQmNPNlVNSU56N3AvYkVqam53NGZ0K3htRHZrc3hYNEcycklyaXM3cWFlS3dBRk1QMk9pN240Y3JpdVp3dHBTVXdwZkx4U25PUlNySXF1c2M1WkZhWHlzcVJXamlaMkR5QVdFSUwzNXRWU29RRWxGQUNqT2VHR1NFN0FIRVFnZG8vTFN2Q09nR0J2a3hzbURidmxTM0ZwNXZoYUIyVEFHcVJLcktLTXJoTFZwYUd6RVZqWjBPUXhEaGFDVEErUXlSUjFkMTVhUXpySm50TDNSaWJzaXBqRzZqbGdMNHlxYlMwc05ZZzFlODR2aGJCVnJFbEs2NENVY1dZWERmS3hocEl1eGlWSlpVeHNiTXkvdVJCS1ROUlE0a1EzTGRSWUxTMHJKalJQbFRQcVk2Z2RKc0VEYythUVhBbitIZ3NOVUNiUnVGME9qMHp3bkE3YldEa2JoTzVFbnMwMHFlUWhTMWxhQk1sNU0vY0FheHNMRjhyS3lxbCtUZjdFTExFR3UvaXhpaW1kQ3ZvMFRqZnBqS3dhZ2dlbjRlaDV2N0xva0xLYkx1eXZIaGNaRzhkaEdyRUR4N0hnOTNacHBKRjdxQnFPM2lWdmVYRURRTkluemVvZThZcTZlUGFaQloySnZpTTNXMlVBR290ZWtSQ0FHcTRFa0YxWDNET25SMTF5UnNCTDF0UmEwUFZjWmlORlhaMmMzNEZza3ZvbUluUVE2bHpwSm9aYkp4azQzTndLSkZCcXVKU3NyQnlIeWR4S09uVHhRQVNCbVMzaitKTW5zSFNsYTNFYzZLOVZXb0pWbjl6Zmp3T003aHFZQUFxSlF3RTJhM25BNDhKMlFHZWdSa3BaTml2U1kreXMzRWtLZDRvSkl3c3ZJSGwzY1dnTHQ1azROSDZPbXRMV2RwdXJPa3dFTXVwWWM3ZU10RFJoT2NJMnVpNUpoVkl6WHpMeXRvL0dBUHVab3lvOHdrb2R1VmdKZ2xDdDdPaEdiZ0lENE1xNHNpKzYzelVTMUZ1RkZYRmxxeWFqMmVtSGxMTWNCcVl1MEZNdVIyOEJiQjdsT3hSTVNpQ1FYRmhDS3V3a2haK3BZRGlHU2dic0tLVjhNaVNSc3VIU0lXTTlya2xSaUlsWlp1cVhqc1FLOG9vWUpNZ3EzSktXVmtoSGJoc1Z4RlV6dGhPV1BrWWlqY2J4NTRJS3NTZFQrdUxyM2NyR0t5b1lnRmlHUjlpQms0a2Zsb1VYK0pJbFFSUXFhYm1wZ25ocXRwUXBiNlJWUTFXSDVEbnJTNGhFb0dacWFlclEyZGhGYno4WGVQeFNobURibzcwZUlTam9vck8ydks4U0pYSTRTVW1FVTR6V0tEelVEdFdUWXc3eFhsYlNURWo0RlJnN3pLbktvR1JBTHYwR3M5VGdjMUJwQ3l3R1pSUUF0cVZ6MnhyQmNBTXpFcGZad0ZTYTJHNVcwUUJGalNNYXBXQUVGYTNIY0dON0N4RHpFQ3lJa0o5N3F3cnFXTlRXVm84NzZQUHNqUGtqMnd2Z3JvTTVsTFpLTUVUS1ZxbC9Ddm5XVkZpRmEvU3pKVVF3a29ac3I2N1k2dmxTUlYzLzJ0bU5UT1kzdm5heFl3TXVvUEtxZHpSMXc3SXFIeW1sUHhhQVRoZlU3S28yWlhZajRBWUpITCtrTmRLd1JRWUVTVFJhNWZzVVovclZDMVRNVHlXVnlZb3FOdHV6YUhzTXl2MnR2b2FyeGRmcXdZZ1UxYXhGby9jbnFsMUZHc3FLK3VBUk9WOEJYNEdVOFdjWlRBVGkycTdRY3lpME8wVitHaFdCTU5SVWtuOEgxU3NXVkU1QnkzR2kwRUNxVWVKb0JmQXREYTRhbWtkWEczN0FHUDVHZ2ViODRwN1VhenBvS1J6ZEZ6ZVE4SGtvSEd4cHJLeS9IcG01dDEycDQ3SjZ4VFlERXo3dUlORVhTdXhZWHZGc2tZQWMreVN4SDlzZjVmdEt6VTZJYndWQmNVR2c1ZTVGTUNFWFNFclpSMHdHYXlWMTl3b005Z3VQalRxSmRWVHFSNHVFNG5KbkxsZFdWa0VDQ1pMZDJWTEYreHRhbWV4N0lwaXJpU0RVcHZycG45bHJ3R01DSHlwcE1IK3BzNkxJTHN1RkdVajFYRU9YaXFicVNIUFVLbkNscFdWNjhrcXRVUlZORFk0VE5hb2N5a29ZZVRVNW5nR0VRYS9TMURubkU0QWVYTWNLakhQQW1GVmpDQkVOYWV5TFZOSGZyM3B4OHhVc3RKOTRoSXBmSDRIS0UvZURhQXJLNmxTeVZWRmJkdDFneFRJVmszcHBwVmxGWGk0cEVoVkJUT2JxdW9oVTg1TUxYbjFpYWh2VWtISmpTQ01jMDF0TEZ2ZVZWQngwRG9kTTZqZnRDdTdET3RJell4cmMwcXAxSkdQMmF5WUZ6MkdiNkh2TXJPOGNuR3RWNkdqbTN1SW1TZkQyR3BXSzZ1b3diWkdNeEZLUUNvMXBPTXRjTVhGcFJzdCtoWEdvQW9tRjNzU1RCR2dUZ2xiQktXd3NRM3RacWFZU3AwWjFDaW1SRFdGY0NKVVBZSjAwQkk1RmtLWU5vaWZ1UXhtTjg4U1dWWFdMTWFVcXFxZ0MwQm1RSlI2c2szdTlOQ2Y2allMWHhBZnFzWUVnVkxBaFJZMkF0Z3RmbFpORm1GeWh4ZHJMa0FkV2xrNEQ4OE0yaXhIeWVwSWRoTUhyRy9pUjFaR3RxME1HcGJEYlJQWU9YZVNZMU02Tnk0WnN0dkdTa3RLK1hiRlBBVGoyRDM3MXNhUEVzQU1YaFhyc1owa20vWFN0a2hoTXlCZnNhNnVYRlplMlZDZStZTXIxK0dLZ3dyUXlOWXExVlJyQitFaXpBb3c2TnNkTktjeVZFa1llTTczeXM2cTRrQUhwNkJpRmtsVGtJclZDNW9ZVjd1endPR0N6NFVKMFN0cTJsV01KeTR3dGIrUmV0TDZ0WkZpY25KbUJ3NVVqQ3ZYWE1aVkpYMk1Ra2JmK1hONUVXZDc4Vno4L0pFc01aVEJpS056c20xaW5MUlVRNzRINE5pZGFxSTY4ajVzQUZneGNSdmVDN2llTEpYZlFZeGpaWjJDc2lXRmV3WlhKbUJJbFoxdGR0clg0aFN1YXRlS3NvL1JaT3RPS1cybm1xMW9UemVLNmRSV0FXdTJOUlZiNGhxMFNYbTFHdnR1Z0hyYnI1SVhxbVNrdGc1Q3VERTJNU2xQd3NZNWtORTJXcDNBcWlaYldWTEF4aUJGKzJpQlpidU5qNk1CNnJzTUxDN0Z5YXNhWUR5bzdLa29QeUV0dzNwRU1YZlB2eEFKaTJqQVFRZ2pyejByTElaU1dabElvTmh3ZDV4SzRBUjltWU5qV0FhTHJudUltSmVCVk45ekJPUk9iVnZicittVFRmRlNFSkxTUm5IbzdoRUpvSWk4TUZxanhtdmdtRjVVUlp6NHpMRmdaWjhDdHUyWDdnZ1ZjY0ttOWdWeElzT0hxeFhnTk1LbkZXWlluZjFkQm5PaGF5WHExN1F3RmxXVzA5ZU5LeVZKRm1YcWFPTkdBNWFDZWdNYkozVVVrR1kxaWMzbktXZ2pxOHFmVllHUUcxZ1J0NnJzNjJhNkhpcXFVT3FkZXNLNU5tWDRuR29mSm9pRTFkMGRGOWxWVmt2VDEva0VFYWFDb1lPd0ZwY1Zjb0xNKzc2NjlQeEM5cldxa3RIMHNXVVlsZDBWQ3B1Qlovc3RWUmNHZ3k5V1gyK1UxUXRoaTlTekFxU3h6WnN5K09pRnpCWW55U0dWNkdrdTQ0ckQ4QkNPWkJWM0J2RDUrQUtSSE53TUVzQjZFekhuSnBrVEFlaVVsRUdrY0VDZUI2R0RaVHA1WUVKVGx2ZHJrbnhZalRsbE1rZk50WHdEak03dVZqSzVKWFVVbjQzcnJxcEsyanl0YXhIVzBNNUc4REM4cnRITVlzN0tTZ2R1VlFNR1RZRnFGdlZTNnJrRDNzREo0NmFmZFlGd29xMTFBT0tDQkxodndvVWdjOElHQU55Y1I2a25acmRKUGRzdXhueWpmZDNGb3ZUbFJNZEVkdE9sNUNNVjVFSHNYUUJpczdUT3d2SURaYUdqMlZucGJoN2NwSzYzVndZRU1Md3Fianp5bDY5OXNhd0ZGa0YxeXFqVVUzMUhmQzZzVzFaRlZGdVhWWFZnejlrZUVhdzB5czFsV2ZtK2F6UUFRU1dBK2hLWVZmc1pqUG5jQWNVQjlvSWF5eS9VWlhSTmNrREdqaTc3R3NXYnZCbzZ0UHJXUHFPeVZrQlVxK0lOZXFwek5kWXMvdTBpZmg1cW1wcUlXKzMzSlZTVWN3WTcwS0w0VTlsWWRVNmxqdFNsczdsbWZpOWczWXplUWZWa2FHRmFWM09EQ25hRDJOOHdzRURGa2xFM1J6TTNaZ2hkWWtXSHNzenE3MEZJZWNuS2tWa3Q4ZXpNelJxOWJrR3VLb2pSTEJWU29kM1kxeVBxS2dZVzdKUlFUUFZ5eTV4SVlMak9neGdUNTJSS0pVWTFkT3JJaVJkNGZ1dFF4L0E1QWNTbUVqejB2Rldya0x6dmJXQXU5SE9XYkdneEZrMVZOVHBuQktrNlRnd2lzSS9IY3hZWFAxdUFXTzcyVUxGbEJUcSthU3UyVlRVczZocnhNMkNGK2hFb3IxVklBOVptRlVhYWIxbFNTZ1pzVnM0c3h6SGxWTG9KSHI5SDREaE9OVGtJMVhDMC93aVkyTm9XQUc1UmxuSEZucTZvTGNjcFFkZE11Si9PMTdKVkE1T0hMaTBCcUN6dHE3WTErK3VjQ2Q5OHFMSThNSUhCVi9jS2p4UVRtZTNoRkJTM015Q3FuRHN1eW0ybzgwSGp2RkZUdHJVUm1OYUdKc21WYWhJbWpUc1VYS3RRWlRBVnM3TXZ2OC8rZnpVclpBWGNMSjZNNGtvZTZYUDBiNlNtV1dORHp5VXBROGJsK0x0V3g0dHVxWjM2Y1JZVjN5dVZ4UE53dklpcWlRQ1NtdTdzcmdUelI2bmt5aHBDYXJYd0Z5MXZHZDVpUDJjWTA2bEZyNU5qaGhnMVk2K05CMjhmdGJLODNzOHJmN2tMSmJLd0RGUGJMZzI1YTBBZFpKRWlxcjVwaGl4S01EbFJVdGNzc3ExaHJpTHFHb0gremVOZ1ZtOU9lbWpzRVRWOEpkRjBOSG5rSUZ4V1kxT0I0WXJwN3J0V0o3TmdBQUFQWGtsRVFWUTNvTnM1bnBseVZmOHUyRm9MdTFKckh2ZWFaV1FqcUFrc2h0RmEyZ3pzU0czWnBrYnZnM0hhZkY5c2xQUGxsZGpGbEs4MEd5c204TXI0TVBobmVOV0VOUEdqQUlwbWlsVFBBVGRUUlRYbENCWUhZQVF1UHdBMzZ4SXBXdEdONHEzWTJNaGlHc1VwdVNTbmxFSlJEOFBvckM3Q0ZZVncrRjUxcVRoZ2FieHNUeFd6Q0dZMFpTc2IzbGZxQXkwT1BOak55OHhpUVFLc0hZRlEySEJaVnZWYkJ1cTNtMW9XS2FqcWFvbnNNNnVaVXI2Q2pYV05aMGw1RTNoM2pVUm1hNmtQM01KSWl5MUxtK2thaFFxNDFOMmlaamE1c2p0bExZTlpIWnJINnFVR200dk1iRHA2UncyQ0ZtdnV5RmtyQmNDeU10RnFCYUVDbXNIb0s5QloyTEEvbEpjUnFTYURxbmFXYnJaZEdhejNETGdJdkJsbjR3b0d6dGJ5Skdxc2x3eGtoaEhyVGpUWUZYQ3RPb0tTOHVMZG9mVmRBYk95bEdVNm5sWXBYV1p0czRuWEJxNld4Sml0TU5va0hVSm5ibkpwbFFtK2FHcFkyYTVHTVYyUUQxaFJ1YkJQRktkdW1mNU9Ia0xIejBGOWx1RTVrakJqUmEwbkZFNUNVR3FIdzMyTW1qWjZ4a2dJTlZuU25aMVZaU3RLMnFLbFJhTGxRZ0s3dVRxN0pGWEp3TSszU09FS3loWk5JK3RKMEk1cU1ZeTlrMnFKRDdkVldkcUtYYTBDS05SMENjamcrQjJJWXUyZmNCWkpaa01GZ00xMXIwWDkyd2lsZ2hGR2d6Vm5leGxxQjd4TDltUzI5U2lZVVZZMm5YT1pqTkJSc3lEc1FQUldXNWhyWjRYY2RDNEhWV1JiamdKcjRzRm9mSzVTempRN3JoSTFVZWJkUGRFYmo2c3FJdlRaUVo1dmEwOHJBQnNBVzBVeGVXeXRBazdBMktKOVpweHpDaW9CMjRYRnRZQWVYWXhyNmFuU3FoTGdwcEVxV2JHd0x1blRnclYrSWpXbEwyOWxqYUFsNEVRTUdzRXJwNGFwZVppcXV3UlhMWEFxT0NlcnUzMm1teWRjNm9XVFNXcEZBR2R6ZVRCOFJUSFZNRXRsTTkwQ2JiUUNZaFBqcTNlZ1lyMUZHZFlJUWppdURHWjV6Wi9Bem9iS0dPeUx4dGk2YzRSd3R2MmFueVdsTElDbmxMaHhKUlh0NkE1ZWJEQldGTk9OYnhXWjJkMDJtbnU0UzlZRUNwZXBwVjF6U1dSQld4SFl6Vkl2MUNYU291d3FxWDNqQkJCRFpkWVFicFRRVzRaUWxTOHI1a0g0c3VTUm1nMisrM0pOMTB4MVBhQW1Fa210WWxFZGVHcEpFTTZrT3VDcUNSMjJvU3VqajVJVjJIZFQwemo1cHJMS1RqWEZBUGpkUWx5cTd4SUJ4QVFQNXlNY3pHNFZ4QUt3MG42aWxaMlFCY2UycEx1bGt1eHhxbm9JekZmZ3F5cWppbDlTMVZOd0JyRm1leWVvcHM4eU9qWlV5YlpkZlM4Q3VhVElKdW16czV0T0RhTnRMcEZEUS9QY0pHd2VMaG1lTDFuQjBLcWlVRFNjc2lVVkQ4OURpM0h0ckt0U1VMdzNSTGl5Z1pEKzdzRjhKVE9iZ1lzckd2RE5VRlJHbDFpeTBMbDFZa1VjMmFKWU1vZzkyMEk4cVc2WURDZzFNcWswSkhKRktYa2JnYlJyZUkrcXBZTk9aSHJWY0RVYmE3cGpzcGhTSk50SzZ1cGdSTkFWb09TMG11Z0JlTjRiSVpnSGh1UFovczFFTmFYNktzVnIrWU5yaDFOYjdpcFIwUEU1emJOUmVnQ2JySFJVdzZZZjA3ZExCSmwxZjhLQjlhczJWMW5OcUFzbDYyTEJCaGVod2FsZXJrSG1CMUpGSUVaS1NFdXNkbDVKUWoxbkpsSFhTQ0YzNDJnSjlDWUdyWGVsa25KSVhxVlA4c0QrcXRwbENSM1hIMnFmS3EweWdNcCtLblZrS3hObFo4bTJZa0lsVk1pQ25YVXdsN3F6bkJLU3ZRejNtM1B0Nm9RYlhPNWI1Rml4Q2gvZkh4VVFXL0FFY0s2ekNOcUtRbkw5c3l3cW1LdXd2cVNZelQvYVBWTk5wVnlodlJXMjFhcWNpQ3NqZFd2QndJTFV2aDVWeUN6YldvQzFwSmpKNjgwQ1dzbCt1ZEtCNlQ1UndHMW1sb2hubHBiZzQ3aXo1VTloYTBGR3RtUkxGWUJ0Tzk5eTk3QXAweitaRFRBb2c2a1NMWnNNSGcvSUZra2dwNkNwdlUyVTBjWVZTZG5ta2p3QmRPbVhieFRXTld6dUliaXBNaW9WeEVja1pFb2FoU09peTJNM0swamNDMUxoVkR3YXFHMFp2a2NXcUNuckc0R0l4eWtycWxiV2R3NkxReUJhWlI4SG1MUkloUVdzSHN3RDQyWlhWTE5rZjlsK0ZsVzBIVlEybHdGc0MvWjFGZHpsUVIwS2FQZm8rRmRmdSsvZHdWUklDdTFDR1I3QUVJaUFoYytBWlVGMGtPQmFQeG1VcWc0aTY0dlFuVTRuRkRZSjlOeisxZlZYdmVIOXFtcitrUElMeDhvS2NSVi9CRmJ4YkUwSk1UMGtTRDR3NkwvbE5ZOG9jc3FhZ1ZkVTNBM01qeGh4Y0d1cXpzUEg0aXJwYW93MXE2T3lyVmp2cDlOcGM1OUU5MUxsZGJvWVZ6SldkaW1XZkFXMlNORUtjRGFYMkZtQkxMQS91S3hsbWhoNjEzSXMxVVJRQXBiS2Z0dHd4TDAycTZPbng1cFF4U2JQb2pBZyt2NWhBbk42TEhWUkRYSXN2S3RSamlTMHFKVXlaVEFYVmJBSzgyRWxGSldhUWRWb3FVQzFVbnQ3QlZhVFF1ZE02U3VxZXhqUUpONCswaWNheHYvdXRiS3Y4M0VUYlQ4SDhnamNPS3hPSm1iVWE2T09WWGh0M2RGWTZySHY5WG9OekZMY2VFQTFvOCtwS20wTEFIUEhaMnJZS2pGcTBoZlpGaXhzcUhKZ0QzZUQ1bitVMGtiMW1GalhrbjJsdk1TU09zTkUvQ2RJQUtGMFN5dHE2dXJPSFVONWd3ZzRHWm9zZ2JtZ2dNNXVjcmEycXJTMklnMWNiaUJCY3hZemd6VUROTEN2TDhHYlpYTnA2T1J5M0xtUytLazgzelJJQUs2QTFpb0thMkk5TmFwSXVpVUZkZkM5NzY2UEZaVXRxVXI2S2JXayt6WlUxYS9acklYRXp0cmpUT2Z6N2h3S3ppQ2VYSWFyYUh0YlpJTXorMnBHZ2F6Q213NHFXQUZ2RWRob2RZcDBYcTBwVjdHMVlXWVdiTzRxaEdxNDIrWjhCWXRyTFd2bHVOUHBaQWVhRkZTMXZ1YlBnYmd4c3FjcG5BYXN6Qm92S2FGb0RROEJHdGpmVU9sNE5BRzJubVFWMDRmZUpndW12WDJmc3JRRVdaZ2hMMEpuVmRZa24zRE9aSWVSTjg2UnFQV0Ntc3ZHVnFFTVJud3hRQXh3UzhFTVlvM0l6bVkyK0JDY0xwNE1LaXV5dWhJbWFtbGJaRmNOb05sN3RwK1JIZDE4WmpRSVJLeVhkRlJoTjk4L2h5S3F3WFdObzdPMXdpYVhvSE4xMDhSRVpaV0VxNmdybklmanplZzhqZFJmMVhFTDRra1hhNWJCakt4b0thbGpCamVIbFZ4UTRHYXljcFc0bERPQUt0blR4SEF0T2Z6T3Rad0hBTTdzcVZYa1Y2eXU2a2FwMW5Ia1hLcVdGLzRYSHFqZW5OS3FCanBSM2wxY2gzRWpnMStFc2dkUWhzZEcwQjRGTTlzV0FWV3B1QXlpd1RQbGVaeHQ5VnlaVlMycVhmUmVXcVRBaWxwcjlBcG9XVGp4eW1pdDdOd1Y0SlRyaVp5T0E5QjBrN0hGZlVMb3VybUtZSFZuUlF2cUdMNUhNSGRxRmNSMnFXcG1jSzZlVHd4MmRpcFdydmlEaWxyK2ZLV3EzT1dSV2RIS3dBNGV1OHdqY2hiZVJ6RmlscWpqWk4zdWZDcGZrSjAvc2NWcG5ZazZMMFBJNzdseGRXQ1o4N1dpV203Qi9BR3F1UVNudWpHS3NCOENKbWlKcThxMXBLSVZXeXFPaVRLNjZyMThCTjhyNzQvQUU3MWZkQzN5UFMyTXhkT3BuRTF0bFZ4RDlKbVZPb2dnTityNFBqQVhWRlBhM0VnNWpWSkdGVlVHTm9sSDIwR1ZyVUI3Qk95U1dxNldxWVFkV1I5MnBjRk1ZTXdja2JTZ0NLQ3FENjdEaWlXdTFnOE1RQzlCeWZjRnFXMUwrakw3MTRxTkN1em5vU3h0MGRhMmd0V04xRzhGMEJLME5OMG51aW1lbFVGOWRJZEFmak80NFVUM0NqUUxvVWVMSEpGVE8zZ21wUnVJSU92d0JRQ2JxTmVvM3F0WjlpRjZ4VksxM0dSbG80enFpbXErQ0dkVGlSMXVSWThvcWdFMDJoWkJhNzlrWlhQTXF1eFJIS2xhMnNhWldONG1ScVpVajB2TENLaGtqS25xT1FITnVTWlZKb0t2QXFTMXdwRXF1dldEQzFCMnlwd3JDUHNSTUVQVlRPRE1MSk1EdjZxZUtYd2kySllWNVNxNHFLeXZnR3NIQ0xpdWoyalI1OVY4Z01xU0oyRkpaUlhFSFZSSGozc0ZQcmN0Nk9wcWxXMUdwYXRRZHQwR3Z3Zk02bjYzSW5zR1ZGaEpHYUJxZ3FxSVY2SXNYbGxaZ3lTUHE0UjNibnQzd2k1Y3YrY04yeXFRTFcxVDk1S1lWc1dXdEtrNGNCOVc1M1dRUWZsUVlSNldsNEhhSlpqdlZFMEQ1eXZxK1JLZ1pDczVxZEJFUDVzRDk0Y0F2UUxsU2dOYVNNQXRIeDg4QnVOUTQxemRGc1gzMHpLYmNzME1MRC9paGtwUXpsMHdpVHFLTFRmYkttQ215WUlDbkswSWJhaWVDNENHOWlTeUxRN2NJTUdRd2F1NlRLb3E2MEFwbDNXTjQwTFpwY2ExQ0tLSzlWUXl5SUVuOHcwRjhGNkNMMmg4bzNpeEd3QzdzN0VXekNPcW1jQXBZeFlENGpzQXpWUzBzbDJ0OThwQTd2cktvcGhDVlNvbmJZcGdINm12U24yNHBUQlY0c2R0VjNCdE1xNWs4MnkrSUFEdlVKMHVBbGtDVlR4SWFQbStVTnUvcWtWNEYxVHpIWENHclhJQXFJdEJLeXBxSzk5VnRBT1ZzNjRPNE9iWDdwSExWQ3BZSGNSbXd2TFI3VHZZQUtCQk41OExHVnpEdUZ6K2hRYldnbmNReUNaQWsrVmJzUFNvdWY5MzI2MWlaZ21mQ3B3UmJBdnFtU3FyaVUyUHdoamFvT3lZcXRJZWdWWFZpVHNteXRhNmJHeVNwWTNneVJycEl5QWVhV0REeHRwc1h3S3lhbE1ES05QN1lCWE1xRXNrVXNpMnVDOEZOQVB4QUtUVmZUMW82VnpNMEUwakYrMXJXY1V1SHZkeWc3dmdvRnBsWDhIcHZIcE1DT01SVVBIelprSW5zcWxGS05YL0VJTzUyRTBTeFN6T3dvYjJWbVJMVzVEMVhJVTByYmdNMUF6V2d5QzdmZThHN3hVQUsvdGFFQmF0N2x1cXR5UDdFbXNhSlFPajVGK21yblpmQ3VZQ2ZCVUFXd1NoeWQ2cE1ZL3ZBSEcxVXFPWXBiSS9neTVUMENNS20rVU8zZ0Z1Qzg1ZGdmRFZlZ3VQRGZJVHJJQkxzTHJjZ2RoM0NGZ0ZaamFLSjRJdjNGOEFORXF2dXhSMXRWS09nTG9DYTFqeGJvQkFrajZ2N2ovaWNGYkE3ZjRyZlJuUURMUlZpRzEzaTB2cUJRcllWcUJiQURaVDBacGlIb1N6dlFwb3BLSUZTM3NFMUhmQldsSFhkMEg3TG5BcnF2b3VnTXRsakhCZ1puaDNFb3ovQktqTE1MNFoyQXEwK2hFSnI5amFWVUJidk56Q0lVaXJvQzdBV21tRnc0bzVBSzNNdEI1VnlwWk1TRmdzMDVKeUdWd2x3QnFzRUdBQWEyWlUxQ2pVZXhYR3NFNHJLcmlpbEJ2RnpPS0tvM0F1QXJvRTZRRlFVM3U4WXBOWHdTNWsrMVRadDVVcndvdU40S2lVRXcrazNaV0RwMVJYSE5ScVhiMjFUczM5OTQ1eVpTZzNWblpGTlE5Q0YzWGVaeXI1RGdCWEtpd0NNYTJNeGVURFlYZ1AxRnNmOVFOS1pjMGs4MVJKazNyNkVRM3JDbUJWeUxMNzVFaloxcElWREhvRnRpT0FIb0IwQmRUVnlscUJzS0tLUytBZUJYSlZMWStDWEFTdUd2Ty9BdXE3R3VFakRmR0tnMW9LYTF6L2RtbWk5STlTVUdOaGwwQXRmdWxIQWF3b1lyblNrbU5YQVZ1R0VockVWWHZVRitBNUN0MlBxTk9qRGV0eW5hNENtZVVvbG1lWExONEFxN0M1U2oxMFE3eWpnbCt0NkNOeFNSSG1JNVgrQ3B3cmVZQjNRZmRxbmE0cTIxS2RCdWM0R29ac240OVpPT2lWaW53SHFLOVd6anZnZXdlRWgyQVU1K3Z0eFo5Q2Q5V3FraDQ5VjE4RTVvajZ2VnluMFJTdEF5R0lPNWVkWFJLZDVCMFZHVlhxMnlyM3hZcCs1VXQrQzRRSjRQMU4zMzlwUU1qUmVqajR2Yi9EY3I2clFjM08vMHJqbXRacGVZQ0JpQ0hmQ2VtUmJOaGJLL3BOVVBjM3dmS3k1ZjJEN09sTDMvdVBodmUvb1U0VDBGOGYrVk5NMnZ5b2l2MGpLK0tIUWZkSHErMGJuY3o0b3o3My8rWTZMYkt3MW8vNUI3ZU9mMVJsLzBkdTlCOXRuLzlidnJmL2ordjBoNnR0bjJ0cC9yLzQ4MTl5NC96djUzOTF1dnp6ZndEaWZ6NnBoVDFNUGdBQUFBQkpSVTVFcmtKZ2dnPT0pfS5zZW0tY29sb3ItZGFyay1pbnB1dHMgLmNvbG9yLXR5cGV7Y29sb3I6IzU1NTtsaW5lLWhlaWdodDoyMnB4fS5zZW0tY29sb3ItbGlnaHQtaW5wdXRzIC5jb2xvci10eXBle2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MjJweH0uc2VtLWNvbG9yLWxpc3QgbGl7bWluLWhlaWdodDo1MHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIGlzSUUxMDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaHN2YTogSHN2YTtcblxuICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBvdXRwdXRDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIGluaXRpYWxDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIGZhbGxiYWNrQ29sb3I6IHN0cmluZztcblxuICBwcml2YXRlIGxpc3RlbmVyUmVzaXplOiBhbnk7XG4gIHByaXZhdGUgbGlzdGVuZXJNb3VzZURvd246IGFueTtcblxuICBwcml2YXRlIGRpcmVjdGl2ZUluc3RhbmNlOiBhbnk7XG5cbiAgcHJpdmF0ZSBzbGlkZXJIOiBudW1iZXI7XG4gIHByaXZhdGUgc2xpZGVyRGltTWF4OiBTbGlkZXJEaW1lbnNpb247XG4gIHByaXZhdGUgZGlyZWN0aXZlRWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGRpYWxvZ0Fycm93U2l6ZTogbnVtYmVyID0gMTA7XG4gIHByaXZhdGUgZGlhbG9nQXJyb3dPZmZzZXQ6IG51bWJlciA9IDE1O1xuXG4gIHByaXZhdGUgdXNlUm9vdFZpZXdDb250YWluZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgc2hvdzogYm9vbGVhbjtcbiAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcblxuICBwdWJsaWMgdG9wOiBudW1iZXI7XG4gIHB1YmxpYyBsZWZ0OiBudW1iZXI7XG4gIHB1YmxpYyBwb3NpdGlvbjogc3RyaW5nO1xuXG4gIHB1YmxpYyBmb3JtYXQ6IG51bWJlcjtcbiAgcHVibGljIHNsaWRlcjogU2xpZGVyUG9zaXRpb247XG5cbiAgcHVibGljIGhleFRleHQ6IHN0cmluZztcbiAgcHVibGljIGhzbGFUZXh0OiBIc2xhO1xuICBwdWJsaWMgcmdiYVRleHQ6IFJnYmE7XG5cbiAgcHVibGljIGFycm93VG9wOiBudW1iZXI7XG5cbiAgcHVibGljIHNlbGVjdGVkQ29sb3I6IHN0cmluZztcbiAgcHVibGljIGh1ZVNsaWRlckNvbG9yOiBzdHJpbmc7XG4gIHB1YmxpYyBhbHBoYVNsaWRlckNvbG9yOiBzdHJpbmc7XG5cbiAgcHVibGljIGNwV2lkdGg6IG51bWJlcjtcbiAgcHVibGljIGNwSGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIGNwQWxwaGFDaGFubmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBjcE91dHB1dEZvcm1hdDogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcERpc2FibGVJbnB1dDogYm9vbGVhbjtcbiAgcHVibGljIGNwRGlhbG9nRGlzcGxheTogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcElnbm9yZWRFbGVtZW50czogYW55O1xuICBwdWJsaWMgY3BTYXZlQ2xpY2tPdXRzaWRlOiBib29sZWFuO1xuXG4gIHB1YmxpYyBjcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBjcFBvc2l0aW9uT2Zmc2V0OiBudW1iZXI7XG5cbiAgcHVibGljIGNwT0tCdXR0b246IGJvb2xlYW47XG4gIHB1YmxpYyBjcE9LQnV0dG9uVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgY3BPS0J1dHRvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGNwQ2FuY2VsQnV0dG9uOiBib29sZWFuO1xuICBwdWJsaWMgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBjcENhbmNlbEJ1dHRvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGNwUHJlc2V0TGFiZWw6IHN0cmluZztcbiAgcHVibGljIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXTtcbiAgcHVibGljIGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoOiBudW1iZXI7XG5cbiAgcHVibGljIGNwUHJlc2V0RW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGNwQWRkQ29sb3JCdXR0b246IGJvb2xlYW47XG4gIHB1YmxpYyBjcEFkZENvbG9yQnV0dG9uVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmc7XG4gIHB1YmxpYyBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY29sb3JUb2dnbGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnaHVlU2xpZGVyJykgaHVlU2xpZGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhbHBoYVNsaWRlcicpIGFscGhhU2xpZGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdkaWFsb2dQb3B1cCcpIGRpYWxvZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnksXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgc2VydmljZTogQ29sb3JQaWNrZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXJQb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICAgICAgY29uc3QgaHVlV2lkdGggPSB0aGlzLmh1ZVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgY29uc3QgYWxwaGFXaWR0aCA9IHRoaXMuYWxwaGFTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgdGhpcy5zbGlkZXJEaW1NYXggPSBuZXcgU2xpZGVyRGltZW5zaW9uKGh1ZVdpZHRoLCB0aGlzLmNwV2lkdGgsIDEzMCwgYWxwaGFXaWR0aCk7XG5cbiAgICAgIGlmICh0aGlzLmNwT3V0cHV0Rm9ybWF0ID09PSAncmdiYScpIHtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSAxO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNwT3V0cHV0Rm9ybWF0ID09PSAnaHNsYScpIHtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RlbmVyTW91c2VEb3duID0gKGV2ZW50OiBhbnkpID0+IHsgdGhpcy5vbk1vdXNlRG93bihldmVudCk7IH07XG4gICAgICB0aGlzLmxpc3RlbmVyUmVzaXplID0gKCkgPT4geyB0aGlzLm9uUmVzaXplKCk7IH07XG5cbiAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLmluaXRpYWxDb2xvciwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5jcFdpZHRoICE9PSAxMDApIHtcbiAgICAgIGNvbnN0IGh1ZVdpZHRoID0gdGhpcy5odWVTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGFscGhhV2lkdGggPSB0aGlzLmFscGhhU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHRoaXMuc2xpZGVyRGltTWF4ID0gbmV3IFNsaWRlckRpbWVuc2lvbihodWVXaWR0aCwgdGhpcy5jcFdpZHRoLCAxMzAsIGFscGhhV2lkdGgpO1xuXG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKGZhbHNlKTtcblxuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gIH1cbiAgcHVibGljIGFkZENvbG9yKCl7fVxuICBwdWJsaWMgb3BlbkRpYWxvZyhjb2xvcjogYW55LCBlbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnNlcnZpY2Uuc2V0QWN0aXZlKHRoaXMpO1xuXG4gICAgICBpZiAoIXRoaXMud2lkdGgpIHtcbiAgICAgICAgdGhpcy5jcFdpZHRoID0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMjA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0SW5pdGlhbENvbG9yKGNvbG9yKTtcblxuICAgICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcoY29sb3IsIGVtaXQpO1xuXG4gICAgICB0aGlzLm9wZW5Db2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldHVwRGlhbG9nKFxuICAgIGNvbG9yVG9nZ2xlOiBib29sZWFuLFxuICAgIGluc3RhbmNlOiBhbnksIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNvbG9yOiBhbnksXG4gICAgY3BXaWR0aDogc3RyaW5nLCBjcEhlaWdodDogc3RyaW5nLCBjcERpYWxvZ0Rpc3BsYXk6IHN0cmluZywgY3BGYWxsYmFja0NvbG9yOiBzdHJpbmcsXG4gICAgY3BBbHBoYUNoYW5uZWw6IHN0cmluZywgY3BPdXRwdXRGb3JtYXQ6IHN0cmluZywgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW4sXG4gICAgY3BJZ25vcmVkRWxlbWVudHM6IGFueSwgY3BTYXZlQ2xpY2tPdXRzaWRlOiBib29sZWFuLCBjcFVzZVJvb3RWaWV3Q29udGFpbmVyOiBib29sZWFuLFxuICAgIGNwUG9zaXRpb246IHN0cmluZywgY3BQb3NpdGlvbk9mZnNldDogc3RyaW5nLCBjcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93OiBib29sZWFuLFxuICAgIGNwUHJlc2V0TGFiZWw6IHN0cmluZywgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdLCBjcE1heFByZXNldENvbG9yc0xlbmd0aDogbnVtYmVyLFxuICAgIGNwUHJlc2V0RW1wdHlNZXNzYWdlOiBzdHJpbmcsIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZyxcbiAgICBjcE9LQnV0dG9uOiBib29sZWFuLCBjcE9LQnV0dG9uQ2xhc3M6IHN0cmluZywgY3BPS0J1dHRvblRleHQ6IHN0cmluZyxcbiAgICBjcENhbmNlbEJ1dHRvbjogYm9vbGVhbiwgY3BDYW5jZWxCdXR0b25DbGFzczogc3RyaW5nLCBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZyxcbiAgICBjcEFkZENvbG9yQnV0dG9uOiBib29sZWFuLCBjcEFkZENvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZywgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZyxcbiAgICBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZyk6IHZvaWRcbiAge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnNldEluaXRpYWxDb2xvcihjb2xvcik7XG5cbiAgICAgIHRoaXMuaXNJRTEwID0gKGRldGVjdElFKCkgPT09IDEwKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmID0gZWxlbWVudFJlZjtcblxuICAgICAgdGhpcy5jcERpc2FibGVJbnB1dCA9IGNwRGlzYWJsZUlucHV0O1xuXG4gICAgICB0aGlzLmNwQWxwaGFDaGFubmVsID0gY3BBbHBoYUNoYW5uZWw7XG4gICAgICB0aGlzLmNwT3V0cHV0Rm9ybWF0ID0gY3BPdXRwdXRGb3JtYXQ7XG4gICAgICB0aGlzLmNwRGlhbG9nRGlzcGxheSA9IGNwRGlhbG9nRGlzcGxheTtcblxuICAgICAgdGhpcy5jcElnbm9yZWRFbGVtZW50cyA9IGNwSWdub3JlZEVsZW1lbnRzO1xuICAgICAgdGhpcy5jcFNhdmVDbGlja091dHNpZGUgPSBjcFNhdmVDbGlja091dHNpZGU7XG5cbiAgICAgIHRoaXMudXNlUm9vdFZpZXdDb250YWluZXIgPSBjcFVzZVJvb3RWaWV3Q29udGFpbmVyO1xuXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5jcFdpZHRoID0gcGFyc2VJbnQoY3BXaWR0aCwgMTApO1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNwSGVpZ2h0ID0gcGFyc2VJbnQoY3BIZWlnaHQsIDEwKTtcblxuICAgICAgdGhpcy5jcFBvc2l0aW9uID0gY3BQb3NpdGlvbjtcbiAgICAgIHRoaXMuY3BQb3NpdGlvbk9mZnNldCA9IHBhcnNlSW50KGNwUG9zaXRpb25PZmZzZXQsIDEwKTtcblxuICAgICAgdGhpcy5jcE9LQnV0dG9uID0gY3BPS0J1dHRvbjtcbiAgICAgIHRoaXMuY3BPS0J1dHRvblRleHQgPSBjcE9LQnV0dG9uVGV4dDtcbiAgICAgIHRoaXMuY3BPS0J1dHRvbkNsYXNzID0gY3BPS0J1dHRvbkNsYXNzO1xuXG4gICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uID0gY3BDYW5jZWxCdXR0b247XG4gICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uVGV4dCA9IGNwQ2FuY2VsQnV0dG9uVGV4dDtcbiAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b25DbGFzcyA9IGNwQ2FuY2VsQnV0dG9uQ2xhc3M7XG5cbiAgICAgIHRoaXMuZmFsbGJhY2tDb2xvciA9IGNwRmFsbGJhY2tDb2xvciB8fCAnI2ZmZic7XG5cbiAgICAgIHRoaXMuY29sb3JUb2dnbGUgPSBjb2xvclRvZ2dsZTtcblxuICAgICAgdGhpcy5zZXRQcmVzZXRDb25maWcoY3BQcmVzZXRMYWJlbCwgY3BQcmVzZXRDb2xvcnMpO1xuXG4gICAgICB0aGlzLmNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoID0gY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg7XG4gICAgICB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlID0gY3BQcmVzZXRFbXB0eU1lc3NhZ2U7XG4gICAgICB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3MgPSBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzO1xuXG4gICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b24gPSBjcEFkZENvbG9yQnV0dG9uO1xuICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uVGV4dCA9IGNwQWRkQ29sb3JCdXR0b25UZXh0O1xuICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uQ2xhc3MgPSBjcEFkZENvbG9yQnV0dG9uQ2xhc3M7XG4gICAgICB0aGlzLmNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzcyA9IGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzcztcblxuICAgICAgaWYgKCFjcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93KSB7XG4gICAgICAgIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nQXJyb3dTaXplID0gMDtcbiAgICAgICAgdGhpcy5kaWFsb2dBcnJvd09mZnNldCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChjcE91dHB1dEZvcm1hdCA9PT0gJ2hleCcgJiYgY3BBbHBoYUNoYW5uZWwgIT09ICdhbHdheXMnICYmIGNwQWxwaGFDaGFubmVsICE9PSAnaGV4OCcpIHtcbiAgICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCA9ICdkaXNhYmxlZCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEluaXRpYWxDb2xvcihjb2xvcjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsQ29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcmVzZXRDb25maWcoY3BQcmVzZXRMYWJlbDogc3RyaW5nLCBjcFByZXNldENvbG9yczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLmNwUHJlc2V0TGFiZWwgPSBjcFByZXNldExhYmVsO1xuICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSBjcFByZXNldENvbG9ycztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2xvclRvZ2dsZShjb2xvckRyb3BFbmFibGVkOiBib29sZWFuKTp2b2lke1xuICAgIHRoaXMuY29sb3JUb2dnbGUgPSBjb2xvckRyb3BFbmFibGVkO1xuICB9XG5cbiAgcHVibGljIHNldENvbG9yRnJvbVN0cmluZyh2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuID0gdHJ1ZSwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGxldCBoc3ZhOiBIc3ZhO1xuXG4gICAgaWYgKHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnIHx8IHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdoZXg4Jykge1xuICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodmFsdWUsIHRydWUpO1xuXG4gICAgICBpZiAoIWhzdmEgJiYgIXRoaXMuaHN2YSkge1xuICAgICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICghaHN2YSAmJiAhdGhpcy5oc3ZhKSB7XG4gICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh0aGlzLmZhbGxiYWNrQ29sb3IsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoaHN2YSkge1xuICAgICAgdGhpcy5oc3ZhID0gaHN2YTtcblxuICAgICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoZW1pdCwgdXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHRoaXMuc2V0RGlhbG9nUG9zaXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ICE9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uRHJhZ0VuZChzbGlkZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyRHJhZ0VuZCh7IHNsaWRlcjogc2xpZGVyLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvciB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyYWdTdGFydChzbGlkZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyRHJhZ1N0YXJ0KHsgc2xpZGVyOiBzbGlkZXIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzSUUxMCAmJiB0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ3BvcHVwJyAmJlxuICAgICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgdGhpcy5jcElnbm9yZWRFbGVtZW50cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbSA9PT0gZXZlbnQudGFyZ2V0KS5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgaWYgKCF0aGlzLmNwU2F2ZUNsaWNrT3V0c2lkZSkge1xuICAgICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh0aGlzLmluaXRpYWxDb2xvciwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDaGFuZ2VkKHRoaXMuaW5pdGlhbENvbG9yKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQWNjZXB0Q29sb3IoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdwb3B1cCcpIHtcbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm91dHB1dENvbG9yKSB7XG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yU2VsZWN0ZWQodGhpcy5vdXRwdXRDb2xvcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2FuY2VsQ29sb3IoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh0aGlzLmluaXRpYWxDb2xvciwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdwb3B1cCcpIHtcbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDaGFuZ2VkKHRoaXMuaW5pdGlhbENvbG9yLCB0cnVlKTtcblxuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNhbmNlbGVkKCk7XG4gIH1cblxuICBwdWJsaWMgb25Gb3JtYXRUb2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtYXQgPSAodGhpcy5mb3JtYXQgKyAxKSAlIDM7XG4gIH1cblxuICBwdWJsaWMgb25Db2xvckNoYW5nZSh2YWx1ZToge3M6IG51bWJlciwgdjogbnVtYmVyLCByZ1g6IG51bWJlciwgcmdZOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLnMgPSB2YWx1ZS5zIC8gdmFsdWUucmdYO1xuICAgIHRoaXMuaHN2YS52ID0gdmFsdWUudiAvIHZhbHVlLnJnWTtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XG4gICAgICBzbGlkZXI6ICdsaWdodG5lc3MnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS52LFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XG4gICAgICBzbGlkZXI6ICdzYXR1cmF0aW9uJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEucyxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25IdWVDaGFuZ2UodmFsdWU6IHt2OiBudW1iZXIsIHJnWDogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5oID0gdmFsdWUudiAvIHZhbHVlLnJnWDtcbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XG4gICAgICBzbGlkZXI6ICdodWUnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5oLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFscGhhQ2hhbmdlKHZhbHVlOiB7djogbnVtYmVyLCByZ1g6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEuYSA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1g7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnYWxwaGEnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5hLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkhleElucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlICYmIHZhbHVlWzBdICE9PSAnIycpIHtcbiAgICAgICAgdmFsdWUgPSAnIycgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcodmFsdWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgICBpbnB1dDogJ2hleCcsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlZElucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpO1xuXG4gICAgcmdiYS5yID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hzdmEocmdiYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtpbnB1dDogJ3JlZCcsIHZhbHVlOiByZ2JhLnIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yfSk7XG4gIH1cblxuICBwdWJsaWMgb25CbHVlSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSk7XG5cbiAgICByZ2JhLmIgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe2lucHV0OiAnYmx1ZScsIHZhbHVlOiByZ2JhLmIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yfSk7XG4gIH1cblxuICBwdWJsaWMgb25HcmVlbklucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpO1xuXG4gICAgcmdiYS5nID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hzdmEocmdiYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnZ3JlZW4nLFxuICAgICAgdmFsdWU6IHJnYmEuZyxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25BbHBoYUlucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5hID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdhbHBoYScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmEsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uSHVlSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KSB7XG4gICAgdGhpcy5oc3ZhLmggPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnaHVlJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuaCxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25MaWdodG5lc3NJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpO1xuXG4gICAgaHNsYS5sID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLmhzbGEyaHN2YShoc2xhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdsaWdodG5lc3MnLFxuICAgICAgdmFsdWU6IGhzbGEubCxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25TYXR1cmF0aW9uSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKTtcblxuICAgIGhzbGEucyA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5oc2xhMmhzdmEoaHNsYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnc2F0dXJhdGlvbicsXG4gICAgICB2YWx1ZTogaHNsYS5zLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFkZFByZXNldENvbG9yKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICghdGhpcy5jcFByZXNldENvbG9ycy5maWx0ZXIoKGNvbG9yKSA9PiAoY29sb3IgPT09IHZhbHVlKSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gdGhpcy5jcFByZXNldENvbG9ycy5jb25jYXQodmFsdWUpO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnByZXNldENvbG9yc0NoYW5nZWQodGhpcy5jcFByZXNldENvbG9ycyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVtb3ZlUHJlc2V0Q29sb3IoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5jcFByZXNldENvbG9ycyA9IHRoaXMuY3BQcmVzZXRDb2xvcnMuZmlsdGVyKChjb2xvcikgPT4gKGNvbG9yICE9PSB2YWx1ZSkpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5wcmVzZXRDb2xvcnNDaGFuZ2VkKHRoaXMuY3BQcmVzZXRDb2xvcnMpO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgY29sb3IgcGlja2VyIGRpYWxvZyBzdGF0dXNcblxuICBwcml2YXRlIG9wZW5Db2xvclBpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2hvdykge1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZXREaWFsb2dQb3NpdGlvbigpO1xuXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSwgMCk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UudG9nZ2xlKHRydWUpO1xuXG4gICAgICBpZiAoIXRoaXMuaXNJRTEwKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubGlzdGVuZXJNb3VzZURvd24pO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5saXN0ZW5lclJlc2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUNvbG9yUGlja2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3cpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnRvZ2dsZShmYWxzZSk7XG5cbiAgICAgIGlmICghdGhpcy5pc0lFMTApIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5saXN0ZW5lck1vdXNlRG93bik7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyUmVzaXplKTtcblxuICAgICAgaWYgKCF0aGlzLmNkUmVmWydkZXN0cm95ZWQnXSkge1xuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbG9yUGlja2VyKGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVyRGltTWF4KSB7XG4gICAgICBjb25zdCBsYXN0T3V0cHV0ID0gdGhpcy5vdXRwdXRDb2xvcjtcblxuICAgICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKTtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuZGVub3JtYWxpemVSR0JBKHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSkpO1xuXG4gICAgICBjb25zdCBodWUgPSB0aGlzLnNlcnZpY2UuZGVub3JtYWxpemVSR0JBKHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKG5ldyBIc3ZhKHRoaXMuc2xpZGVySCB8fCB0aGlzLmhzdmEuaCwgMSwgMSwgMSkpKTtcblxuICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICB0aGlzLmhzbGFUZXh0ID0gbmV3IEhzbGEoTWF0aC5yb3VuZCgoaHNsYS5oKSAqIDM2MCksIE1hdGgucm91bmQoaHNsYS5zICogMTAwKSwgTWF0aC5yb3VuZChoc2xhLmwgKiAxMDApLFxuICAgICAgICAgIE1hdGgucm91bmQoaHNsYS5hICogMTAwKSAvIDEwMCk7XG5cbiAgICAgICAgdGhpcy5yZ2JhVGV4dCA9IG5ldyBSZ2JhKHJnYmEuciwgcmdiYS5nLCByZ2JhLmIsIE1hdGgucm91bmQocmdiYS5hICogMTAwKSAvIDEwMCk7XG5cbiAgICAgICAgY29uc3QgYWxsb3dIZXg4ID0gdGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycgfHwgdGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2hleDgnO1xuXG4gICAgICAgIHRoaXMuaGV4VGV4dCA9IHRoaXMuc2VydmljZS5yZ2JhVG9IZXgocmdiYSwgYWxsb3dIZXg4KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5odWVTbGlkZXJDb2xvciA9ICdyZ2IoJyArIGh1ZS5yICsgJywnICsgaHVlLmcgKyAnLCcgKyBodWUuYiArICcpJztcbiAgICAgIHRoaXMuYWxwaGFTbGlkZXJDb2xvciA9ICdyZ2IoJyArIHJnYmEuciArICcsJyArIHJnYmEuZyArICcsJyArIHJnYmEuYiArICcpJztcblxuICAgICAgdGhpcy5vdXRwdXRDb2xvciA9IHRoaXMuc2VydmljZS5vdXRwdXRGb3JtYXQodGhpcy5oc3ZhLCB0aGlzLmNwT3V0cHV0Rm9ybWF0LCB0aGlzLmNwQWxwaGFDaGFubmVsKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb2xvciA9IHRoaXMuc2VydmljZS5vdXRwdXRGb3JtYXQodGhpcy5oc3ZhLCAncmdiYScsIG51bGwpO1xuXG4gICAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXJQb3NpdGlvbihcbiAgICAgICAgKHRoaXMuc2xpZGVySCB8fCB0aGlzLmhzdmEuaCkgKiB0aGlzLnNsaWRlckRpbU1heC5oIC0gOCxcbiAgICAgICAgdGhpcy5oc3ZhLnMgKiB0aGlzLnNsaWRlckRpbU1heC5zIC0gOCxcbiAgICAgICAgKDEgLSB0aGlzLmhzdmEudikgKiB0aGlzLnNsaWRlckRpbU1heC52IC0gOCxcbiAgICAgICAgdGhpcy5oc3ZhLmEgKiB0aGlzLnNsaWRlckRpbU1heC5hIC0gOFxuICAgICAgKTtcblxuICAgICAgaWYgKGVtaXQgJiYgbGFzdE91dHB1dCAhPT0gdGhpcy5vdXRwdXRDb2xvcikge1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLm91dHB1dENvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHBvc2l0aW9uaW5nXG5cbiAgcHJpdmF0ZSBzZXREaWFsb2dQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlhbG9nSGVpZ2h0ID0gdGhpcy5kaWFsb2dFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBsZXQgcG9zaXRpb24gPSAnc3RhdGljJywgdHJhbnNmb3JtID0gJycsIHN0eWxlID0gbnVsbDtcblxuICAgICAgbGV0IHBhcmVudE5vZGU6IGFueSA9IG51bGwsIHRyYW5zZm9ybU5vZGU6IGFueSA9IG51bGw7XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgICAgd2hpbGUgKG5vZGUgIT09IG51bGwgJiYgbm9kZS50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgcG9zaXRpb24gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpO1xuICAgICAgICB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKTtcblxuICAgICAgICBpZiAocG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScgJiYgdHJhbnNmb3JtTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRyYW5zZm9ybU5vZGUgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRyYW5zZm9ybU5vZGU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJveERpcmVjdGl2ZSA9IHRoaXMuY3JlYXRlQm94KHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAocG9zaXRpb24gIT09ICdmaXhlZCcpKTtcblxuICAgICAgaWYgKHRoaXMudXNlUm9vdFZpZXdDb250YWluZXIgfHwgKHBvc2l0aW9uID09PSAnZml4ZWQnICYmICFwYXJlbnROb2RlKSkge1xuICAgICAgICB0aGlzLnRvcCA9IGJveERpcmVjdGl2ZS50b3A7XG4gICAgICAgIHRoaXMubGVmdCA9IGJveERpcmVjdGl2ZS5sZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJveFBhcmVudCA9IHRoaXMuY3JlYXRlQm94KHBhcmVudE5vZGUsIChwb3NpdGlvbiAhPT0gJ2ZpeGVkJykpO1xuXG4gICAgICAgIHRoaXMudG9wID0gYm94RGlyZWN0aXZlLnRvcCAtIGJveFBhcmVudC50b3A7XG4gICAgICAgIHRoaXMubGVmdCA9IGJveERpcmVjdGl2ZS5sZWZ0IC0gYm94UGFyZW50LmxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKiB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgICB0aGlzLmxlZnQgLT0gdGhpcy5jcFdpZHRoICsgdGhpcy5kaWFsb2dBcnJvd1NpemUgLSAyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgIHRoaXMuYXJyb3dUb3AgPSBkaWFsb2dIZWlnaHQgLSAxO1xuXG4gICAgICAgIHRoaXMudG9wIC09IGRpYWxvZ0hlaWdodCArIHRoaXMuZGlhbG9nQXJyb3dTaXplO1xuICAgICAgICB0aGlzLmxlZnQgKz0gdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwICogYm94RGlyZWN0aXZlLndpZHRoIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcFBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICsgdGhpcy5kaWFsb2dBcnJvd1NpemU7XG4gICAgICAgIHRoaXMubGVmdCArPSB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgKiBib3hEaXJlY3RpdmUud2lkdGggLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCAqIHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICAgIHRoaXMubGVmdCArPSBib3hEaXJlY3RpdmUud2lkdGggKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZSAtIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgY29sb3IgcGlja2VyIGRpYWxvZyBwb3NpdGlvbmluZyBhbmQgb3BlbmluZ1xuXG4gIHByaXZhdGUgY3JlYXRlQm94KGVsZW1lbnQ6IGFueSwgb2Zmc2V0OiBib29sZWFuKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIChvZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAwKSxcbiAgICAgIGxlZnQ6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIChvZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiAwKSxcbiAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGlzRGVzY2VuZGFudChwYXJlbnQ6IGFueSwgY2hpbGQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBub2RlOiBhbnkgPSBjaGlsZC5wYXJlbnROb2RlO1xuXG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lciwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZixcbiAgSW5qZWN0b3IsIFJlZmxlY3RpdmVJbmplY3RvciwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xvci1waWNrZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY29sb3JQaWNrZXJdJyxcbiAgZXhwb3J0QXM6ICduZ3hDb2xvclBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGlhbG9nOiBhbnk7XG5cbiAgcHJpdmF0ZSBkaWFsb2dDcmVhdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaWdub3JlQ2hhbmdlczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY21wUmVmOiBDb21wb25lbnRSZWY8Q29sb3JQaWNrZXJDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGNvbG9yUGlja2VyOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY3BXaWR0aDogc3RyaW5nID0gJzIzMHB4JztcbiAgQElucHV0KCkgY3BIZWlnaHQ6IHN0cmluZyA9ICdhdXRvJztcblxuICBASW5wdXQoKSBjcFRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2xvclRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNwSWdub3JlZEVsZW1lbnRzOiBhbnkgPSBbXTtcblxuICBASW5wdXQoKSBjcERpc2FibGVJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNwQWxwaGFDaGFubmVsOiBzdHJpbmcgPSAnZW5hYmxlZCc7XG4gIEBJbnB1dCgpIGNwT3V0cHV0Rm9ybWF0OiBzdHJpbmcgPSAnaGV4JztcblxuICBASW5wdXQoKSBjcEZhbGxiYWNrQ29sb3I6IHN0cmluZyA9ICcjZmZmJztcblxuICBASW5wdXQoKSBjcERpYWxvZ0Rpc3BsYXk6IHN0cmluZyA9ICdwb3B1cCc7XG5cbiAgQElucHV0KCkgY3BTYXZlQ2xpY2tPdXRzaWRlOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSBjcFVzZVJvb3RWaWV3Q29udGFpbmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgY3BQb3NpdGlvbjogc3RyaW5nID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgY3BQb3NpdGlvbk9mZnNldDogc3RyaW5nID0gJzAlJztcbiAgQElucHV0KCkgY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNwT0tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY3BPS0J1dHRvblRleHQ6IHN0cmluZyA9ICdPSyc7XG4gIEBJbnB1dCgpIGNwT0tCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLW9rLWJ1dHRvbi1jbGFzcyc7XG5cbiAgQElucHV0KCkgY3BDYW5jZWxCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmcgPSAnQ2FuY2VsJztcbiAgQElucHV0KCkgY3BDYW5jZWxCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLWNhbmNlbC1idXR0b24tY2xhc3MnO1xuXG4gIEBJbnB1dCgpIGNwUHJlc2V0TGFiZWw6IHN0cmluZyA9ICdQcmVzZXQgY29sb3JzJztcbiAgQElucHV0KCkgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBjcE1heFByZXNldENvbG9yc0xlbmd0aDogbnVtYmVyID0gNjtcblxuICBASW5wdXQoKSBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nID0gJ05vIGNvbG9ycyBhZGRlZCc7XG4gIEBJbnB1dCgpIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZyA9ICdwcmVzZXQtZW1wdHktbWVzc2FnZSc7XG5cbiAgQElucHV0KCkgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjcEFkZENvbG9yQnV0dG9uVGV4dDogc3RyaW5nID0gJ0FkZCBjb2xvcic7XG4gIEBJbnB1dCgpIGNwQWRkQ29sb3JCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLWFkZC1jb2xvci1idXR0b24tY2xhc3MnO1xuXG4gIEBJbnB1dCgpIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLXJlbW92ZS1jb2xvci1idXR0b24tY2xhc3MnO1xuXG4gIEBPdXRwdXQoKSBjcElucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjcFRvZ2dsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgQE91dHB1dCgpIGNwU2xpZGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpO1xuICBAT3V0cHV0KCkgY3BTbGlkZXJEcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuICBAT3V0cHV0KCkgY3BTbGlkZXJEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG5cbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG5cbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuICBAT3V0cHV0KCkgY29sb3JQaWNrZXJTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihmYWxzZSk7XG5cbiAgQE91dHB1dCgpIGNwUHJlc2V0Q29sb3JzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgaGFuZGxlQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRGb2N1cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKSBoYW5kbGVGb2N1cyhldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEZvY3VzKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIGhhbmRsZUlucHV0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfc2VydmljZTogQ29sb3JQaWNrZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNtcFJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNtcFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY3BUb2dnbGUpIHtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBjaGFuZ2VzLmNwVG9nZ2xlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLm9wZW5EaWFsb2coKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2cgJiYgIWNoYW5nZXMuY3BUb2dnbGUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlRGlhbG9nKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGNoYW5nZXMuY29sb3JUb2dnbGUpe1xuICAgICAgdGhpcy5kaWFsb2cuc2V0Q29sb3JUb2dnbGUoY2hhbmdlcy5jb2xvclRvZ2dsZS5jdXJyZW50VmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNvbG9yUGlja2VyKSB7XG4gICAgICBpZiAodGhpcy5kaWFsb2cgJiYgIXRoaXMuaWdub3JlQ2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgdGhpcy5kaWFsb2cuc2V0SW5pdGlhbENvbG9yKGNoYW5nZXMuY29sb3JQaWNrZXIuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlhbG9nLnNldENvbG9yRnJvbVN0cmluZyhjaGFuZ2VzLmNvbG9yUGlja2VyLmN1cnJlbnRWYWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlnbm9yZUNoYW5nZXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5jcFByZXNldExhYmVsIHx8IGNoYW5nZXMuY3BQcmVzZXRDb2xvcnMpIHtcbiAgICAgIGlmICh0aGlzLmRpYWxvZykge1xuICAgICAgICB0aGlzLmRpYWxvZy5zZXRQcmVzZXRDb25maWcodGhpcy5jcFByZXNldExhYmVsLCB0aGlzLmNwUHJlc2V0Q29sb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlhbG9nQ3JlYXRlZCkge1xuICAgICAgbGV0IHZjUmVmID0gdGhpcy52Y1JlZjtcblxuICAgICAgdGhpcy5kaWFsb2dDcmVhdGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuY3BVc2VSb290Vmlld0NvbnRhaW5lciAmJiB0aGlzLmNwRGlhbG9nRGlzcGxheSAhPT0gJ2lubGluZScpIHtcbiAgICAgICAgY29uc3QgY2xhc3NPZlJvb3RDb21wb25lbnQgPSB0aGlzLmFwcFJlZi5jb21wb25lbnRUeXBlc1swXTtcbiAgICAgICAgY29uc3QgYXBwSW5zdGFuY2UgPSB0aGlzLmluamVjdG9yLmdldChjbGFzc09mUm9vdENvbXBvbmVudCk7XG5cbiAgICAgICAgdmNSZWYgPSBhcHBJbnN0YW5jZS52Y1JlZiB8fCBhcHBJbnN0YW5jZS52aWV3Q29udGFpbmVyUmVmIHx8IHRoaXMudmNSZWY7XG5cbiAgICAgICAgaWYgKHZjUmVmID09PSB0aGlzLnZjUmVmKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgYXJlIHVzaW5nIGNwVXNlUm9vdFZpZXdDb250YWluZXIsICcgK1xuICAgICAgICAgICAgJ2J1dCB0aGUgcm9vdCBjb21wb25lbnQgaXMgbm90IGV4cG9zaW5nIHZpZXdDb250YWluZXJSZWYhJyArXG4gICAgICAgICAgICAnUGxlYXNlIGV4cG9zZSBpdCBieSBhZGRpbmcgXFwncHVibGljIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXFwnIHRvIHRoZSBjb25zdHJ1Y3Rvci4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wRmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbG9yUGlja2VyQ29tcG9uZW50KTtcbiAgICAgIGNvbnN0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhbXSwgdmNSZWYucGFyZW50SW5qZWN0b3IpO1xuXG4gICAgICB0aGlzLmNtcFJlZiA9IHZjUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wRmFjdG9yeSwgMCwgaW5qZWN0b3IsIFtdKTtcblxuICAgICAgdGhpcy5jbXBSZWYuaW5zdGFuY2Uuc2V0dXBEaWFsb2coXG4gICAgICAgIHRoaXMuY29sb3JUb2dnbGUsXG4gICAgICAgIHRoaXMsIHRoaXMuZWxSZWYsIHRoaXMuY29sb3JQaWNrZXIsXG4gICAgICAgIHRoaXMuY3BXaWR0aCwgdGhpcy5jcEhlaWdodCwgdGhpcy5jcERpYWxvZ0Rpc3BsYXksIHRoaXMuY3BGYWxsYmFja0NvbG9yLFxuICAgICAgICB0aGlzLmNwQWxwaGFDaGFubmVsLCB0aGlzLmNwT3V0cHV0Rm9ybWF0LCB0aGlzLmNwRGlzYWJsZUlucHV0LFxuICAgICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzLCB0aGlzLmNwU2F2ZUNsaWNrT3V0c2lkZSwgdGhpcy5jcFVzZVJvb3RWaWV3Q29udGFpbmVyLFxuICAgICAgICB0aGlzLmNwUG9zaXRpb24sIHRoaXMuY3BQb3NpdGlvbk9mZnNldCwgdGhpcy5jcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93LFxuICAgICAgICB0aGlzLmNwUHJlc2V0TGFiZWwsIHRoaXMuY3BQcmVzZXRDb2xvcnMsIHRoaXMuY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGgsXG4gICAgICAgIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2UsIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzcyxcbiAgICAgICAgdGhpcy5jcE9LQnV0dG9uLCB0aGlzLmNwT0tCdXR0b25DbGFzcywgdGhpcy5jcE9LQnV0dG9uVGV4dCxcbiAgICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbiwgdGhpcy5jcENhbmNlbEJ1dHRvbkNsYXNzLCB0aGlzLmNwQ2FuY2VsQnV0dG9uVGV4dCxcbiAgICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uLCB0aGlzLmNwQWRkQ29sb3JCdXR0b25DbGFzcywgdGhpcy5jcEFkZENvbG9yQnV0dG9uVGV4dCxcbiAgICAgICAgdGhpcy5jcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3MpO1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRoaXMuY21wUmVmLmluc3RhbmNlO1xuXG4gICAgICAgIGlmICh0aGlzLnZjUmVmICE9PSB2Y1JlZikge1xuICAgICAgICAgIHRoaXMuY21wUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW5EaWFsb2codGhpcy5jb2xvclBpY2tlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpYWxvZykge1xuICAgICAgdGhpcy5kaWFsb2cuY2xvc2VEaWFsb2coKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jcFRvZ2dsZUNoYW5nZS5lbWl0KHZhbHVlKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5jb2xvclBpY2tlck9wZW4uZW1pdCh0aGlzLmNvbG9yUGlja2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvclBpY2tlckNsb3NlLmVtaXQodGhpcy5jb2xvclBpY2tlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbG9yQ2hhbmdlZCh2YWx1ZTogc3RyaW5nLCBpZ25vcmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDaGFuZ2VzID0gaWdub3JlO1xuXG4gICAgdGhpcy5jb2xvclBpY2tlckNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xvckNhbmNlbGVkKCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JQaWNrZXJDYW5jZWwuZW1pdCgpO1xuICB9XG5cbiAgcHVibGljIGNvbG9yU2VsZWN0ZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JQaWNrZXJTZWxlY3QuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgaW5wdXRGb2N1cygpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgY29uc3QgaWdub3JlZCA9IHRoaXMuY3BJZ25vcmVkRWxlbWVudHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0gPT09IGVsZW1lbnQpO1xuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFpZ25vcmVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlucHV0Q2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgIHRoaXMuZGlhbG9nLnNldENvbG9yRnJvbVN0cmluZyh2YWx1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXIgPSB2YWx1ZTtcblxuICAgICAgdGhpcy5jb2xvclBpY2tlckNoYW5nZS5lbWl0KHRoaXMuY29sb3JQaWNrZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbnB1dENoYW5nZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY3BJbnB1dENoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlkZXJDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNwU2xpZGVyQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIHNsaWRlckRyYWdFbmQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY3BTbGlkZXJEcmFnRW5kLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIHNsaWRlckRyYWdTdGFydChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jcFNsaWRlckRyYWdTdGFydC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVzZXRDb2xvcnNDaGFuZ2VkKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuY3BQcmVzZXRDb2xvcnNDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncmV2ZXJzZSdcbn0pXG5leHBvcnQgY2xhc3MgUmV2ZXJzZVBpcGUge1xuICB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoKS5yZXZlcnNlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG5kTW9kdWxlIH0gZnJvbSAnbmcyLWRuZCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29sb3JwaWNrZXIvY29sb3ItcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3JwaWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJEaXJlY3RpdmUsIFRleHREaXJlY3RpdmUgfSBmcm9tICcuL2NvbG9ycGlja2VyL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xvcldpZGdldENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL2NvbG9yLXdpZGdldC9jb2xvci13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbG9yZHJvcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gtY29sb3Jkcm9wL3NlYXJjaC1jb2xvcmRyb3AuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbVVpQnV0dG9uRmFiTW9kdWxlLCBTZW1VaUJ1dHRvbk1vZHVsZSwgU2VtVWlCdXR0b25EbmRNb2R1bGUgfSBmcm9tICdAZnJvbnRyL3NlbS11aSc7XG5pbXBvcnQgeyBSZXZlcnNlUGlwZSB9IGZyb20gJy4vc2VtLWFycmF5LXJldmVyc2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNlbVVpQnV0dG9uRmFiTW9kdWxlLFxuICAgIFNlbVVpQnV0dG9uTW9kdWxlLFxuICAgIFNlbVVpQnV0dG9uRG5kTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRG5kTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29sb3JXaWRnZXRDb21wb25lbnQsXG4gICAgU2VhcmNoQ29sb3Jkcm9wQ29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyRGlyZWN0aXZlLFxuICAgIFRleHREaXJlY3RpdmUsXG4gICAgU2xpZGVyRGlyZWN0aXZlLFxuICAgIFJldmVyc2VQaXBlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogWyBDb2xvclBpY2tlckNvbXBvbmVudCBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29sb3JXaWRnZXRDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJEaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbIENvbG9yUGlja2VyU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbUNvbG9yc01vZHVsZSB7XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIkluamVjdCIsIlBMQVRGT1JNX0lEIiwiSW5wdXQiLCJPdXRwdXQiLCJEaXJlY3RpdmUiLCJIb3N0TGlzdGVuZXIiLCJFbGVtZW50UmVmIiwiaXNQbGF0Zm9ybUJyb3dzZXIiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkNoYW5nZURldGVjdG9yUmVmIiwiVmlld0NoaWxkIiwiUmVmbGVjdGl2ZUluamVjdG9yIiwiSW5qZWN0b3IiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJBcHBsaWNhdGlvblJlZiIsIlZpZXdDb250YWluZXJSZWYiLCJQaXBlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJTZW1VaUJ1dHRvbkZhYk1vZHVsZSIsIlNlbVVpQnV0dG9uTW9kdWxlIiwiU2VtVWlCdXR0b25EbmRNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJEbmRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7K0JBSkQ7S0FRQzs7Ozs7O0FDUkQ7UUF3REUsOEJBQW1ELFVBQWU7WUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1lBR2xFLHNCQUFpQixHQUFzQixJQUFJQyxlQUFZLEVBQU8sQ0FBQztTQUhPOzs7OztRQUl0RSxpREFBa0I7Ozs7WUFBbEIsVUFBbUIsS0FBaUI7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BDOzs7OztRQUVELDBDQUFXOzs7O1lBQVgsVUFBWSxPQUFZOzs7Ozs7O2FBT3ZCOztvQkEvREZDLFlBQVMsU0FBQzs7d0JBRVQsUUFBUSxFQUFFLDJCQUEyQjt3QkFDckMsUUFBUSxFQUFFLHlmQWlCWDtxQkFDQTs7Ozt3REEwQmVDLFNBQU0sU0FBQ0MsY0FBVzs7OzttQ0F2Qi9CQyxRQUFLOzJCQW9CTEEsUUFBSzt3Q0FLTEMsU0FBTTs7UUFlVCwyQkFBQztLQUFBOzs7Ozs7QUN6RUQ7UUFtQ0U7WUFMVSxjQUFTLEdBQXNCLElBQUlMLGVBQVksRUFBTyxDQUFDO1lBQ3ZELHdCQUFtQixHQUFzQixJQUFJQSxlQUFZLEVBQU8sQ0FBQztTQUkzRDtRQVZoQixzQkFDSSw4Q0FBUTs7OztnQkFEWixVQUNhLEtBQVU7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUss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