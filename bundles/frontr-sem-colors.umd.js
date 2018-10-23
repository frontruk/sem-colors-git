(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng2-dnd'), require('@angular/forms'), require('@angular/common/http'), require('@frontr/sem-ui')) :
    typeof define === 'function' && define.amd ? define('@frontr/sem-colors', ['exports', '@angular/core', '@angular/common', 'ng2-dnd', '@angular/forms', '@angular/common/http', '@frontr/sem-ui'], factory) :
    (factory((global.frontr = global.frontr || {}, global.frontr['sem-colors'] = {}),global.ng.core,global.ng.common,null,global.ng.forms,global.ng.common.http,null));
}(this, (function (exports,i0,common,ng2Dnd,forms,http,semUi) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.move = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                this.setCursor(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.start = /**
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
         * @return {?}
         */
        SliderDirective.prototype.stop = /**
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
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.getX = /**
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
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.getY = /**
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
         * @param {?} event
         * @return {?}
         */
        SliderDirective.prototype.setCursor = /**
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
         * @return {?}
         */
        ColorPickerComponent.prototype.openColorPicker =
            // Private helper functions for the color picker dialog status
            /**
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
         * @return {?}
         */
        ColorPickerComponent.prototype.closeColorPicker = /**
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
         * @param {?=} emit
         * @param {?=} update
         * @return {?}
         */
        ColorPickerComponent.prototype.updateColorPicker = /**
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
         * @return {?}
         */
        ColorPickerComponent.prototype.setDialogPosition =
            // Private helper functions for the color picker dialog positioning
            /**
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
         * @param {?} element
         * @param {?} offset
         * @return {?}
         */
        ColorPickerComponent.prototype.createBox =
            // Private helper functions for the color picker dialog positioning and opening
            /**
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
         * @param {?} parent
         * @param {?} child
         * @return {?}
         */
        ColorPickerComponent.prototype.isDescendant = /**
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
                        template: "<div\n  #dialogPopup\n  class=\"color-picker\"\n  [style.visibility]=\"hidden || !show ? 'hidden' : 'visible'\" [style.top.px]=\"top\"\n  [style.left.px]=\"left\"\n  [style.position]=\"position\"\n  [style.height.px]=\"cpHeight\"\n  [style.width]=\"colorToggle ? '100%' : cpWidth + 'px'\"\n>\n  <div\n    *ngIf=\"!colorToggle\"\n    class=\"color-input-container sem-color-light-inputs pb1\">\n    <div class=\"block py1\">\n      <div class=\"flex justify-end  sem-typo--figcaption\"\n        *ngIf=\"!cpDisableInput\" (click)=\"onFormatToggle()\">\n        <span class=\"self-start sem--link \">Change format</span>\n        <div class=\"sem-color-switch--control--link\"></div>\n      </div>\n    </div>\n    <div class=\"sem-color-switch px1 flex items-center\">\n      <ul class=\"list-reset sem-color-switch--colors flex-auto\">\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes mr1 \"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"360\"\n                [text] [rg]=\"360\" [value]=\"hslaText?.h\" (newValue)=\"onHueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">H</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.s\" (newValue)=\"onSaturationInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">S</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.l\" (newValue)=\"onLightnessInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">L</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\" [value]=\"hslaText?.a\" (newValue)=\"onAlphaInput($event)\"/>\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 1 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (newValue)=\"onRedInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">R</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (newValue)=\"onGreenInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">G</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (newValue)=\"onBlueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">B</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"sem-input boxes\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\"\n                min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\"\n                [value]=\"rgbaText?.a\" (newValue)=\"onAlphaInput($event)\"\n              />\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 0 ? 'none' : 'block'\">\n\n            <span class=\"input-sufix\">\n              <input\n                class=\"sem-input\"\n                [text] [value]=\"hexText\"\n                (blur)=\"onHexInput(null)\"\n                (newValue)=\"onHexInput($event)\"/>\n              <span\n                (click)=\"addColor()\"\n                class=\"sem-icon-search sufix\">\n              </span>\n            </span>\n          <span class=\"block center sem-typo--figcaption\">Hex</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"px1\">\n    <div\n      #hueSlider\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      class=\"hue\"\n      [slider] [rgX]=\"1\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n      <div class=\"cursor\" [style.left.px]=\"slider.h\"></div>\n\n    </div>\n    <div\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      *ngIf=\"cpDialogDisplay=='popup'\"\n      class=\"arrow arrow-{{cpPosition}}\"\n      [style.top.px]=\"arrowTop\"></div>\n    <div\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      class=\"saturation-lightness\"\n      [slider] [rgX]=\"1\" [rgY]=\"1\"\n      [style.background-color]=\"hueSliderColor\"\n      (newValue)=\"onColorChange($event)\"\n      (dragStart)=\"onDragStart('saturation-lightness')\"\n      (dragEnd)=\"onDragEnd('saturation-lightness')\">\n      <div class=\"cursor\" [style.top.px]=\"slider.v\" [style.left.px]=\"slider.s\"></div>\n    </div>\n    <div\n      #alphaSlider\n      class=\"alpha\"\n      [slider]\n      [rgX]=\"1\"\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      [style.background-color]=\"alphaSliderColor\"\n      (newValue)=\"onAlphaChange($event)\"\n      (dragStart)=\"onDragStart('alpha')\"\n      (dragEnd)=\"onDragEnd('alpha')\">\n      <div class=\"cursor\" [style.left.px]=\"slider.a\"></div>\n    </div>\n  </div>\n\n  <!--Color drops-->\n  <div\n    *ngIf=\"colorToggle\"\n    class=\"sem-color-drops\">\n\n    <ng-container *ngIf=\"cpPresetColors?.length || cpAddColorButton\">\n      <ul *ngIf=\"cpPresetColors?.length\" class=\"sem-color-list sem-list-reset\">\n        <li\n          *ngFor=\"let color of cpPresetColors | reverse\"\n          [style.backgroundColor]=\"color\"\n          (click)=\"setColorFromString(color)\"\n          class=\"block\"\n          dnd-draggable\n          [dragEnabled]=\"true\"\n          [dragData]=\"color\"\n          (onDragStart)=\"onDragStart(color)\"\n          [dropZones]=\"['widget-dropZone']\"\n        >\n          <span class=\"right-align block\"> {{color}}</span>\n          <span\n            *ngIf=\"cpAddColorButton\"\n            class=\"color-delete sem-icon-close\"\n            (click)=\"onRemovePresetColor($event, color)\"></span>\n        </li>\n      </ul>\n      <div\n        *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\n        class=\"{{cpPresetEmptyMessageClass}}\n          \">{{cpPresetEmptyMessage}}</div>\n    </ng-container>\n  </div>\n\n  <div\n    *ngIf=\"!colorToggle\"\n    class=\"sem-color-swatches px1\">\n    <!--<div class=\"sem-color-swatches_current\"></div>-->\n      <button\n        medium\n        [style.background-color]=\"selectedColor\"\n        semui-button-dnd sem-importance=\"primary\"\n        *ngIf=\"cpAddColorButton\"\n        [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\n        (click)=\"onAddPresetColor($event, selectedColor)\"\n      >\n        Add Color\n      </button>\n\n    <div\n      *ngIf=\"cpPresetColors?.length || cpAddColorButton\"\n      class=\"sem-color-swatches_preselected\">\n\n      <div\n        *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\n        class=\"{{cpPresetEmptyMessageClass}}\n          \">\n        {{cpPresetEmptyMessage}}\n      </div>\n\n      <span\n        *ngFor=\"let color of cpPresetColors | reverse\"\n        class=\"sem-button-rain-drop\"\n        [style.backgroundColor]=\"color\"\n        (click)=\"setColorFromString(color)\"\n      >\n          <span\n            *ngIf=\"cpAddColorButton\"\n            (click)=\"onRemovePresetColor($event, color)\"\n            class=\"sem-button-circle sem-button-delete sem-icon-close\">\n          </span>\n       </span>\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"colorToggle\"\n    class=\"dialog-container--footer color-input-container sem-color-light-inputs\">\n    <div\n      class=\"flex justify-end mb1 pt1 sem-typo--figcaption\"\n      *ngIf=\"!cpDisableInput\" (click)=\"onFormatToggle()\"\n    >\n      <span class=\"self-start sem--link \">Change format</span>\n      <div class=\"sem-color-switch--control--link\"></div>\n    </div>\n    <div class=\"sem-color-switch flex items-center\">\n      <ul class=\"list-reset sem-color-switch--colors flex-auto\">\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around pb1\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes mr1 \"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"360\"\n                [text] [rg]=\"360\" [value]=\"hslaText?.h\" (newValue)=\"onHueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">H</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.s\" (newValue)=\"onSaturationInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">S</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.l\" (newValue)=\"onLightnessInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">L</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\" [value]=\"hslaText?.a\" (newValue)=\"onAlphaInput($event)\"/>\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 1 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (newValue)=\"onRedInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">R</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (newValue)=\"onGreenInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">G</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (newValue)=\"onBlueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">B</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"sem-input boxes\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\"\n                min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\"\n                [value]=\"rgbaText?.a\" (newValue)=\"onAlphaInput($event)\"\n              />\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 0 ? 'none' : 'block'\">\n                  <span class=\"input-grp\">\n                      <input\n                        type=\"text\"\n                        class=\"sem-input\"\n                        [text] [value]=\"hexText\"\n                        (blur)=\"onHexInput(null)\"\n                        (newValue)=\"onHexInput($event)\"\n                      >\n                      <button\n                        sem-btn-fab\n                        corner=\"none\"\n                        semui-theme=\"light\"\n                        sem-importance=\"primary\"\n                        small\n                        *ngIf=\"cpAddColorButton\"\n                        [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\n                        (click)=\"onAddPresetColor($event, selectedColor)\"\n                      >\n                        <span class=\"sem-icon-send button-send\"\n                        ></span>\n                      </button>\n                  </span>\n          <span class=\"block center sem-typo--figcaption\">Hex</span>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n\n  <!-- START -->\n\n\n\n\n <!-- END -->\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
                        styles: ["body{margin:0;font-size:100%}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}[class*=\" sem-icon-\"],[class^=sem-icon-]{font-family:sembler-ico!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sem-icon-drag:before{content:\"\\e946\";color:#ccc}.sem-icon-product:before{content:\"\\e913\";color:#444d63}.sem-icon-form:before{content:\"\\e92a\";color:#444d63}.sem-icon-location:before{content:\"\\e914\";color:#444d63}.sem-icon-chart:before{content:\"\\e935\";color:#444d63}.sem-icon-text:before{content:\"\\e945\";color:#444d63}.sem-icon-location2:before{content:\"\\e947\";color:#444d63}.sem-icon-I:before{content:\"\\e906\"}.sem-icon-S:before{content:\"\\e907\"}.sem-icon-U:before{content:\"\\e908\"}.sem-icon-B:before{content:\"\\e909\"}.sem-icon-justify:before{content:\"\\e90c\";color:#ccc}.sem-icon-left:before{content:\"\\e910\";color:#ccc}.sem-icon-middle:before{content:\"\\e911\";color:#ccc}.sem-icon-right:before{content:\"\\e912\";color:#ccc}.sem-icon-colour2:before{content:\"\\e90a\"}.sem-icon-brush:before{content:\"\\e90b\"}.sem-icon-folder2:before{content:\"\\e90d\"}.sem-icon-logout2:before{content:\"\\e90e\"}.sem-icon-ol2:before{content:\"\\e90f\";color:#ccc}.sem-icon-send:before{content:\"\\e905\";color:#05dcb6}.sem-icon-repeat:before{content:\"\\e900\"}.sem-icon-crop:before{content:\"\\e901\"}.sem-icon-case:before{content:\"\\e902\"}.sem-icon-resize:before{content:\"\\e903\"}.sem-icon-check:before{content:\"\\e904\"}.sem-icon-ol:before{content:\"\\e915\";color:#ccc}.sem-icon-ul:before{content:\"\\e916\";color:#ccc}.sem-icon-folder:before{content:\"\\e917\"}.sem-icon-close:before{content:\"\\e918\"}.sem-icon-inbox:before{content:\"\\e919\"}.sem-icon-home:before{content:\"\\e91a\"}.sem-icon-share:before{content:\"\\e91b\"}.sem-icon-hamburger:before{content:\"\\e91c\"}.sem-icon-lock:before{content:\"\\e91d\"}.sem-icon-unlock:before{content:\"\\e91e\"}.sem-icon-ellipse:before{content:\"\\e91f\"}.sem-icon-volume:before{content:\"\\e920\"}.sem-icon-play:before{content:\"\\e921\"}.sem-icon-video:before{content:\"\\e922\";color:#444d63}.sem-icon-design:before{content:\"\\e923\"}.sem-icon-address:before{content:\"\\e924\"}.sem-icon-center_align:before{content:\"\\e925\";color:#ccc}.sem-icon-justify2:before{content:\"\\e926\";color:#ccc}.sem-icon-right_align:before{content:\"\\e927\";color:#ccc}.sem-icon-left_align:before{content:\"\\e928\";color:#ccc}.sem-icon-carousel:before{content:\"\\e929\"}.sem-icon-image:before{content:\"\\e92b\";color:#444d63}.sem-icon-back:before{content:\"\\e92c\"}.sem-icon-delete:before{content:\"\\e92d\";color:#d0021b}.sem-icon-duplicate:before{content:\"\\e92e\"}.sem-icon-link:before{content:\"\\e92f\"}.sem-icon-style:before{content:\"\\e930\"}.sem-icon-colour:before{content:\"\\e931\"}.sem-icon-add_accent .path1:before{content:\"\\e932\";color:#fafafa}.sem-icon-add_accent .path2:before{content:\"\\e933\";margin-left:-1em;color:#05dcb6}.sem-icon-send2:before{content:\"\\e934\";color:#05dcb6}.sem-icon-search:before{content:\"\\e936\"}.sem-icon-colour_accent .path1:before{content:\"\\e937\";color:#05dcb6}.sem-icon-colour_accent .path2:before{content:\"\\e938\";margin-left:-1em;color:#fff}.sem-icon-profile-accent .path1:before{content:\"\\e939\";color:#05dcb6}.sem-icon-profile-accent .path2:before{content:\"\\e93a\";margin-left:-1em;color:#fff}.sem-icon-down_arrow:before{content:\"\\e93b\"}.sem-icon-chat_accent .path1:before{content:\"\\e93c\";color:#fafafa}.sem-icon-chat_accent .path2:before{content:\"\\e93d\";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path3:before{content:\"\\e93e\";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path4:before{content:\"\\e93f\";margin-left:-1em;color:#05dcb6}.sem-icon-logout:before{content:\"\\e940\"}.sem-icon-payment:before{content:\"\\e941\"}.sem-icon-settings:before{content:\"\\e942\"}.sem-icon-sites:before{content:\"\\e943\"}.sem-icon-profile:before{content:\"\\e944\"}.sem-list-reset{list-style:none;padding-left:0;margin:0}.sem--corner ._top{border-radius:50% 0 50% 50%;background-clip:padding-box}.semui-form-select select{display:inline-block;margin-left:10%;width:80%;margin-right:10%;border:1px solid #d8cfcf;border-radius:10px;font-size:1.8em;color:#d8cfcf;cursor:pointer}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input.sem-input{width:calc(100%);outline:0;border-radius:10px 10px 0;background-clip:padding-box;border:1px solid #9498a3}.sem-ul-icon-list>div .sem-li{border-bottom:1px solid #ccc}.sem-ul-icon-list>div:last-child .sem-li{border-bottom:0 solid #ccc}.no-padding-list .sem-ul .sem-li,.no-padding-list .sem-ul-icon-list .sem-li{padding-top:0;padding-bottom:0}.sem-ul-icon-list .sem-li{white-space:nowrap;-webkit-font-smoothing:antialiased;padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none}.sem-ul-icon-list .sem-li:not([disabled]){cursor:pointer}.sem-ul-icon-list .sem-li.active img.icon-default{display:none}.sem-ul-icon-list .sem-li.active img.icon-hover{display:inline-block}.sem-ul-icon-list .sem-li img{display:inline-block;vertical-align:middle;margin-bottom:4px}.sem-ul-icon-list .sem-li img.icon-hover{display:none}.sem-ul{list-style:none;width:100%;margin:0 auto;padding:0}.sem-ul .sem-li{padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none}.sem-ul .sem-li:not([disabled]){cursor:pointer}.sem-ul .sem-li.active{border-radius:7px 0 0 7px;background-clip:padding-box}.sem-ul .sem-li--line-seperator{border-bottom:1px solid #ccc}ul.corner_all li:first-child{border-radius:6px 6px 0 0;background-clip:padding-box}ul.corner_all li:last-child{border-radius:0 0 11px 11px;background-clip:padding-box}.corner_top{border-radius:6px 6px 0 0;background-clip:padding-box}.corner_bottom{border-radius:0 0 6px 6px;background-clip:padding-box}.corner_none{border-radius:0;background-clip:padding-box}.corner_all{border-radius:6px;background-clip:padding-box}.corner_right{border-radius:6px 0 0 6px;background-clip:padding-box}.corner_left{border-radius:0 6px 6px 0;background-clip:padding-box}.corner_top-left{border-radius:0 6px 6px;background-clip:padding-box}.corner_top-right{border-radius:6px 0 6px 6px;background-clip:padding-box}.corner_bottom-left,.corner_bottom-right{border-radius:6px 6px 0;background-clip:padding-box}.dialog-container,.sem-colorlist--container,.sem-shadow,.sidebar-container{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dialog-container:hover,.sem-colorlist--container:hover,.sem-shadow:hover,.sidebar-container:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.sem-button-dnd{height:70px;width:70px;margin:5px;border-radius:0 12px 12px;background-clip:padding-box;transition:.3s cubic-bezier(.25,.8,.25,1)}.sem-button-dnd--medium{height:50px;width:50px}.sem-button-dnd--small{height:30px;width:30px}.sem-btn-fab{outline:0;cursor:pointer;display:inline-block;border:none}.sem-btn-fab:not([disabled]){cursor:pointer}.sem-btn-fab img{width:16px;height:16px;display:block;vertical-align:middle}.sem-btn-fab--default>span{display:block;width:16px;height:16px}.sem-btn-fab--default_small{padding:.4rem}.sem-btn-fab--default_small>span{display:block}.sem-btn-fab--primary>span,.sem-btn-fab--secondary>span{display:block;width:16px;height:16px}.sem-btn-fab--corner_none{border-radius:50%;background-clip:padding-box}.sem-btn-fab--corner_right{border-radius:50% 0 0 50%;background-clip:padding-box}.sem-btn-fab--corner_left{border-radius:0 50% 50% 0;background-clip:padding-box}.sem-btn-fab--corner_top-left{border-radius:0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_top-right{border-radius:50% 0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_bottom-left,.sem-btn-fab--corner_bottom-right{border-radius:50% 50% 0;background-clip:padding-box}.semui-tabs .semui-tabs--navlist_horizontal{border-bottom:1px solid grey;padding-bottom:2px}.semui-tabs .semui-tabs--navlist_horizontal li.active button:not([disabled])::after,.semui-tabs .semui-tabs--navlist_horizontal li:hover button:not([disabled])::after{-webkit-transform:scale(1);transform:scale(1)}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{border:none;outline:0;box-shadow:none;padding:.35em .75em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;bottom:-1px}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button:not([disabled]):hover{border:none;opacity:1}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{content:\"\";height:3px;width:100%;bottom:-1px;transition:250ms;-webkit-transform:scale(0);transform:scale(0)}ul.semui-tabs-list.tabs-vertical{margin:0}@font-face{font-family:sembler-ico;src:url(/assets/fonts/sembler.eot?9ik42l);src:url(/assets/fonts/sembler.eot?9ik42l#iefix) format(\"embedded-opentype\"),url(/assets/fonts/sembler.ttf?9ik42l) format(\"truetype\"),url(/assets/fonts/sembler.woff?9ik42l) format(\"woff\"),url(/assets/fonts/sembler.svg?9ik42l#icomoon) format(\"svg\");font-weight:400;font-style:normal}.sem-button{cursor:pointer;display:inline-block;border:none;border-radius:12px 12px 0;background-clip:padding-box}.sem-button:not([disabled]){cursor:pointer}.sem-button--secondary{border:1px solid #a9a9a9;border-radius:12px 12px 0;background-clip:padding-box}.sem-button--small{border:1px solid transparent;padding:6px 0 11px}.sem-button--large{border:1px solid transparent}.sem-button--full{width:100%}.sem-button--block{display:block;padding:.4em}.sem-button--link,.sem-button--link_primary{border:0 solid;text-decoration:underline;border-radius:0}.sem-button-circle{border-radius:50%;cursor:pointer;text-align:center;background:#fff;font-weight:700}.sem-button-circle:before{padding:0 0 0 1px}.sem-button-delete{color:#fff;font-size:6px;padding:.3rem;background-color:#d0021b;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sem-dnd-container{position:relative;height:100%}.sem-dnd-container--dnd-nav{height:70px;width:70px;margin:5px;border-radius:0 12px 12px;background-clip:padding-box;transition:.3s cubic-bezier(.25,.8,.25,1)}.sem-dnd-container--nav{z-index:1;position:absolute;top:0;right:0}.bullet-inlinelist li{vertical-align:top;margin:0 -2px}.bullet-inlinelist li .select{display:block;width:22px}.bullet-inlinelist li .select select{display:none}.bullet-inlinelist li.active .select select{display:inline}.bullet-inlinelist li.active::after{background-color:red}.bullet-inlinelist li::before{content:'';top:-5px;left:0;width:100%;border-top:1px solid #000}.bullet-inlinelist li::after{background-color:#002;display:block;top:-9px;left:38%;width:9px;height:9px;border-radius:50%;content:''}.bullet-inlinelist li:first-child::before{left:38%}.bullet-inlinelist li:last-child::before{left:-44%}.sem-button-rain-drop{position:relative;display:inline-block;width:23px;height:23px;margin:4px 6px 8px;cursor:pointer}.sem-button-rain-drop .sem-button-delete{font-size:6px;top:6px;right:-9px}.sem-button-rain-drop,.sem-rain-drop{border-bottom-right-radius:50%;border-bottom-left-radius:50%;border-top-left-radius:50%;box-shadow:inset 0 0 10px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sem-pagination-container{display:flex;align-items:center;justify-content:center}.sem-pagination-nav{max-width:300px}.sem-pagination-nav>div{flex:1;text-align:center;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.sem-pagination-next a,.sem-pagination-previous a{display:block;line-height:25px;vertical-align:middle}.sem-pagination-next a{text-align:left}.sem-pagination-previous a{text-align:right}.sem-pagination a{height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle}.sem-pagination.active div{border:none;height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle;border-radius:12px 12px 0;background-clip:padding-box}.sem-pagination.active div:not([disabled]){cursor:pointer}.sem-avatar{width:40px;height:40px}.sem-avatar .sem-avatar__img{width:100%;height:100%}.dialog-container{overflow:auto;border-radius:0 12px 12px;background-clip:padding-box;transition:.3s cubic-bezier(.25,.8,.25,1)}.dialog-container--colordrop{border-radius:0;background-clip:padding-box;box-shadow:none}.dialog-container--colordrop:hover{box-shadow:none}.dialog-container--colordrop .dialog-container--header{border-radius:12px 0 0 12px;background-clip:padding-box}.dialog-container--colordrop .dialog-container--body{padding-left:26px;border-radius:0 0 12px 12px;background-clip:padding-box}.dialog-container-full{height:100%;z-index:2}.dialog-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.dialog-container--body,.dialog-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.dialog-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist{overflow:auto}.sem-colorlist--container{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist--list{min-height:20px}.sem-colorlist--list--inner{display:none}.sem-colorlist--list:hover .sem-colorlist--list--inner{display:block}.sem-colorlist--closebutton{font-size:11px}.browser-container{height:calc(100% - 30px - 20px);display:block;position:relative;margin:0 20px;border-radius:10px}.browser-container .layout{height:100%;width:100%;overflow:scroll}.browser-container::before{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;content:'';position:absolute;top:-20px;left:15px;width:10px;height:10px;border-radius:50%}.h1{font-size:2rem}.h2{font-size:1.5rem}.h3{font-size:1.25rem}.h4{font-size:1rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1}.line-height-2{line-height:1.125}.line-height-3{line-height:1.25}.line-height-4{line-height:1.5}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block,.sem-button-circle,.semui-tabs,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{display:block}.bullet-inlinelist li,.inline-block,.semui-tabs .semui-tabs--navlist_horizontal li,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit,.sem-avatar .sem-avatar__img{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0,.sem-button--link,.sem-button--link_primary,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button,figure,h1,h2,h3,h4,h5{margin:0}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.mt0,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0{margin-left:0}.mx0,.sem-pagination-nav{margin-left:0;margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:.5rem}.mt1{margin-top:.5rem}.mr1{margin-right:.5rem}.mb1{margin-bottom:.5rem}.ml1{margin-left:.5rem}.mx1,figure.semui-thumbnail button{margin-left:.5rem;margin-right:.5rem}.my1,.semui-tabs .semui-tabs--navlist_horizontal{margin-top:.5rem;margin-bottom:.5rem}.m2{margin:1rem}.mt2{margin-top:1rem}.mr2{margin-right:1rem}.mb2{margin-bottom:1rem}.ml2{margin-left:1rem}.mx2{margin-left:1rem;margin-right:1rem}.my2{margin-top:1rem;margin-bottom:1rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.sem-colorlist--container{margin-left:2rem}.mx3{margin-left:2rem;margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:4rem}.mt4{margin-top:4rem}.mr4{margin-right:4rem}.mb4{margin-bottom:4rem}.ml4{margin-left:4rem}.mx4{margin-left:4rem;margin-right:4rem}.my4{margin-top:4rem;margin-bottom:4rem}.mxn1{margin-left:-.5rem;margin-right:-.5rem}.mxn2{margin-left:-1rem;margin-right:-1rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-4rem;margin-right:-4rem}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.mx-auto{margin-left:auto;margin-right:auto}.browser-container,.p0,.sem-button--link,.sem-button--link_primary,figure,h1,h2,h3,h4,h5{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0{padding-left:0}.px0{padding-left:0;padding-right:0}.py0,.sem-ul-icon-list .sem-li.no-padding{padding-top:0;padding-bottom:0}.corner,.p1,.sem-btn-fab--default,.sem-btn-fab--primary,.sem-btn-fab--secondary,.sem-button--large,.sem-color-list li,.sem-section--corner{padding:.5rem}.pt1{padding-top:.5rem}.pr1,.semui-tabs .semui-tabs--navlist_horizontal{padding-right:.5rem}.pb1{padding-bottom:.5rem}.pl1,.semui-tabs .semui-tabs--navlist_horizontal{padding-left:.5rem}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.py1,.sem-button--primary,.sem-button--secondary,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header,figure.semui-thumbnail figcaption{padding-top:.5rem;padding-bottom:.5rem}.dialog-container--body_spaced,.dialog-container--header,.px1,.sidebar-container--body_spaced,.sidebar-container--header{padding-left:.5rem;padding-right:.5rem}.p2{padding:1rem}.pt2{padding-top:1rem}.pr2{padding-right:1rem}.pb2{padding-bottom:1rem}.pl2{padding-left:1rem}.py2{padding-top:1rem;padding-bottom:1rem}.bullet-inlinelist li,.dialog-container--footer,.px2,.sem-color-list li,.sem-ul .sem-li,.sem-ul-icon-list .sem-li,.sidebar-container--footer,figure.semui-thumbnail figcaption{padding-left:1rem;padding-right:1rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3,.sem-button--primary,.sem-button--secondary{padding-left:2rem;padding-right:2rem}.p4{padding:4rem}.pt4{padding-top:4rem}.pr4{padding-right:4rem}.pb4{padding-bottom:4rem}.pl4{padding-left:4rem}.py4{padding-top:4rem;padding-bottom:4rem}.px4{padding-left:4rem;padding-right:4rem}.col{float:left;box-sizing:border-box}.col-right{float:right;box-sizing:border-box}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.flex,.sem-color-swatches,.sem-pagination-nav{display:flex}@media (min-width:40em){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}.sm-flex{display:flex}}@media (min-width:52em){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}.md-flex{display:flex}}@media (min-width:64em){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}.lg-flex{display:flex}.lg-hide{display:none!important}}.flex-column{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.self-stretch{align-self:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-center{align-content:center}.content-between{align-content:space-between}.content-around{align-content:space-around}.content-stretch{align-content:stretch}.flex-auto{flex:1 1 auto;min-width:0;min-height:0}.flex-none{flex:none}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-last{order:99999}.bullet-inlinelist li,.color-picker .saturation-lightness,.relative,.sem-color-list li,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{position:relative}.absolute,.bullet-inlinelist li::after,.bullet-inlinelist li::before,.color-picker,.sem-button-circle,.sem-color-list li .color-delete,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after,figure.semui-thumbnail button,figure.semui-thumbnail figcaption{position:absolute}.fixed{position:fixed}.dialog-container-full,.sem-color-list li .color-delete,.top-0,figure.semui-thumbnail button{top:0}.right-0,.sem-color-list li .color-delete,figure.semui-thumbnail button{right:0}.bottom-0,figure.semui-thumbnail figcaption{bottom:0}.left-0,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle,.sem-avatar .sem-avatar__img{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40em){.xs-hide{display:none!important}}@media (min-width:40em) and (max-width:52em){.sm-hide{display:none!important}}@media (min-width:52em) and (max-width:64em){.md-hide{display:none!important}}.display-none{display:none!important}.sidebar-container{border-radius:0 12px 12px;background-clip:padding-box;transition:.3s cubic-bezier(.25,.8,.25,1)}.sidebar-container-full{height:100%}.sidebar-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.sidebar-container--body,.sidebar-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.sidebar-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-color-swatches{flex-wrap:nowrap}.sem-color-swatches_current{flex-grow:1}.sem-color-swatches_current button{margin-top:10px}.sem-color-swatches_preselected{margin-top:13px;margin-left:-10px;margin-bottom:0;flex-grow:1;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden;height:67px}.section-list{overflow:scroll;height:84%}.section-container{border:1px solid grey;display:block;width:100%}.sections-search{height:16%;background-color:grey}.sidebar-dialog{width:142%;position:absolute;top:0;height:100%}figure.semui-thumbnail{width:100%;min-height:45px}figure.semui-thumbnail img{display:block;width:100%}figure.semui-thumbnail figcaption{width:100%;display:block;min-height:44px}.semui-card-footer{color:#fff;width:100%;display:block;background-color:#2a2a2a}.semui-header-section{padding:2% 2% 0;display:block}.semui-header-section.large{padding:3% 2% 0}.semui-header-section.small{padding:1% .5% 0}.semui-footer-section{padding:0 2% 2%;display:block}.semui-footer-section.large{padding:0 2% 3%}.semui-footer-section.small{padding:0 .5% 1%}.button-send:before{color:#fff}.sem-color-switch--colors .sufix{top:-4px;right:4px}.color-picker{margin:0 auto;border-radius:0 12px 12px;background-clip:padding-box;z-index:100000;width:210px;height:auto;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker .cursor{position:relative;width:16px;height:16px;border:2px solid #222;border-radius:50%;cursor:default}.color-picker .hue-alpha{margin-bottom:3px}.color-picker .hue{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .alpha{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .saturation-lightness{width:100%;height:130px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==)}.sem-color-dark-inputs .color-type{color:#555;line-height:22px}.sem-color-light-inputs .color-type{color:#fff;line-height:22px}.sem-color-list li{min-height:50px}"]
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS1jb2xvcnMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL3NlbS1jb2xvcnMuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29tcG9uZW50cy9zZWFyY2gtY29sb3Jkcm9wL3NlYXJjaC1jb2xvcmRyb3AuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2hlbHBlcnMudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29sb3JwaWNrZXIvZm9ybWF0cy50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWFycmF5LXJldmVyc2UudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWNvbG9ycy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1Db2xvcnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcywgUExBVEZPUk1fSUQsIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtYmxlci1jb2xvci13aWRnZXRdJyxcbiAgdGVtcGxhdGU6IGAgPCEtLS8vIFJHQkEtLT5cbiAgPHNwYW5cbiAgICBbY29sb3JUb2dnbGVdPVwiZGF0YS5lbmFibGVkTGlzdFwiXG4gICAgW2NwV2lkdGhdPVwib3ZlcmxheVdpZHRoXCJcbiAgICBbY3BBbHBoYUNoYW5uZWxdPVwiJ2Fsd2F5cydcIlxuICAgIFtjcFByZXNldENvbG9yc109XCJkYXRhLml0ZW1zXCJcbiAgICBbY3BBZGRDb2xvckJ1dHRvbl09XCJ0cnVlXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJsYXN0Q29sb3JcIlxuICAgIFtjcFRvZ2dsZV09XCJ0cnVlXCJcbiAgICBbY3BEaWFsb2dEaXNwbGF5XT1cIidpbmxpbmUnXCJcbiAgICBbY3BDYW5jZWxCdXR0b25dPVwiZmFsc2VcIlxuICAgIFtjcENhbmNlbEJ1dHRvbkNsYXNzXT0gXCInYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cydcIlxuICAgIFsoY29sb3JQaWNrZXIpXT1cImxhc3RDb2xvclwiXG4gICAgKGNwUHJlc2V0Q29sb3JzQ2hhbmdlKT1cInVwZGF0ZWRDb2xvclByZXNldCgkZXZlbnQpXCJcbiAgPlxuICA8L3NwYW4+XG5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG5cbiAgQElucHV0KCkgb3ZlcmxheVdpZHRoO1xuICBwdWJsaWMgY29sb3JQYWxsZXRlO1xuICBwdWJsaWMgbGFzdENvbG9yO1xuXG4gIC8vIEBJbnB1dCgpIGNvbG9yRHJvcEVuYWJsZWQ6IGJvb2xlYW47XG4gIC8vIHB1YmxpYyB0b2dnbGVTdGF0dXM7XG4gIC8vIEBJbnB1dCgnZGF0YScpXG4gIC8vIHNldCB1c2VyQ29sb3JzUGFsbGV0ZShjb2xvcmxpc3Q6IGFueSkge1xuICAvLyAgIC8vIHRoaXMuY29sb3JQYWxsZXRlID0gY29sb3JsaXN0XG4gIC8vICAgY29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLmRhdGEpXG4gIC8vICAgdGhpcy5jb2xvclBhbGxldGUgPSBjb2xvcmxpc3QuaXRlbXM7XG4gIC8vICAgdGhpcy50b2dnbGVTdGF0dXMgPSAgY29sb3JsaXN0LmVuYWJsZWRMaXN0O1xuICAvLyAgIGlmKGNvbG9ybGlzdC5sZW5ndGggPT09IDApIHtcbiAgLy8gICAgIHRoaXMubGFzdENvbG9yID0gJyNmZmZmZmYnO1xuICAvLyAgIH1cbiAgLy8gICBpZihjb2xvcmxpc3QubGVuZ3RoICE9PSAwKXtcbiAgLy8gICAgIHRoaXMubGFzdENvbG9yID0gY29sb3JsaXN0WyBjb2xvcmxpc3QubGVuZ3RoIC0gMSBdO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIEBJbnB1dCgpIGRhdGE7XG5cblxuICBjb25zdHJ1Y3RvciggQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnkpIHt9XG5cbiAgQE91dHB1dCgpXG4gIHVwZGF0ZUNvbG9yUHJlc2V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICB1cGRhdGVkQ29sb3JQcmVzZXQoZXZlbnQ6IEFycmF5PGFueT4pe1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KVxuICAgIHRoaXMudXBkYXRlQ29sb3JQcmVzZXQuZW1pdChldmVudCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgIC8vICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnY2hhbmdlcycsIGNoYW5nZXMpXG4gICAgLy8gICAgIC8vIHRoaXMudG9nZ2xlU3RhdHVzID0gY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtYmxlci1zZWFyY2gtY29sb3Jkcm9wJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImlucHV0LXN1Zml4XCI+XG4gICAgICAgPGlucHV0XG4gICAgICAgICBjbGFzcz1cInNlbS1pbnB1dFwiXG4gICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICBbbmdNb2RlbF09XCJjb2xvclwiXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCJcbiAgICAgICAgIFt2YWx1ZV09J2NvbG9yJ1xuICAgICAgICAgI2NvbG9yVmFsdWVcbiAgICAgICAvPlxuICAgICAgPHNwYW5cbiAgICAgIChjbGljayk9XCJhZGRDb2xvcihjb2xvclZhbHVlKVwiXG4gICAgICBjbGFzcz1cInNlbS1pY29uLXNlYXJjaCBzdWZpeFwiPlxuICAgICAgPC9zcGFuPlxuPC9zcGFuPlxuXG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnc2VsZWN0ZWQnKVxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdjb2xvcicsIHZhbHVlKTtcbiAgICB0aGlzLmNvbG9yID0gdmFsdWUuY29sb3I7XG4gIH1cbiAgQE91dHB1dCgpIHNhdmVDb2xvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZVNlbGVjdGVkQ29sb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkQ29sb3IoY29sb3I6IGFueSkge1xuICAgIGNvbnN0IHNldENvbG9yOiBhbnkgPSB7XG4gICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgY29sb3I6IGNvbG9yLnZhbHVlXG4gICAgfTtcbiAgICB0aGlzLnNhdmVDb2xvci5lbWl0KHNldENvbG9yKTtcbiAgfVxuICBjaGFuZ2VDb2xvcihldmVudDogYW55KSB7XG4gICAgY29uc3QgY29sb3IgPSB7dHlwZTogJ2NvbG9yJywgY29sb3I6IGV2ZW50fTtcbiAgICB0aGlzLmNoYW5nZVNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIH1cbiAgbmdPbkluaXQoKSB7fVxuXG4gIC8vIChrZXlwcmVzcyk9XCJrZXlQcmVzc0NoYW5nZUNvbG9yKCRldmVudClcIlxuICAvLyBrZXlQcmVzc0NoYW5nZUNvbG9yKGV2ZW50OiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnZXZlbnQxMjMnLCBldmVudC50YXJnZXQudmFsdWUpXG4gIC8vICAgY29uc3QgY29sb3IgPSB7dHlwZTogJ2NvbG9yJywgY29sb3I6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgLy8gICB0aGlzLmNoYW5nZVNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIC8vIH1cblxuICAvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuU2V0Q29sb3JzKGV2ZW50KSk7XG4gIC8vIHRoaXMuX2NvbG9yU2VydmljZS5jb2xvckNoYWdlZChldmVudClcbiAgLy8gcHVibGljIHNlbGVjdGVkQ29sb3I6IGFueTtcbiAgLy8gQE91dHB1dCgpXG4gIC8vIHNhdmVDb2xvcnM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHRoaXMuc2VsZWN0ZWRDb2xvciA9ICcjMDAwMDAwJztcblxufVxuXG5cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdElFKCk6IGJvb2xlYW4gfCBudW1iZXIge1xuICBsZXQgdWEgPSAnJztcblxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdtc2llICcpO1xuXG4gIGlmIChtc2llID4gMCkge1xuICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcbiAgfVxuXG4gIC8vIE90aGVyIGJyb3dzZXJcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGV4dF0nXG59KVxuZXhwb3J0IGNsYXNzIFRleHREaXJlY3RpdmUge1xuICBASW5wdXQoKSByZzogbnVtYmVyO1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG5cbiAgQE91dHB1dCgpIG5ld1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBpbnB1dENoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodGhpcy5yZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBudW1lcmljID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICAgIGlmICghaXNOYU4obnVtZXJpYykgJiYgbnVtZXJpYyA+PSAwICYmIG51bWVyaWMgPD0gdGhpcy5yZykge1xuICAgICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyB2OiBudW1lcmljLCByZzogdGhpcy5yZyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NsaWRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckRpcmVjdGl2ZSB7XG4gIHByaXZhdGUgbGlzdGVuZXJNb3ZlOiBhbnk7XG4gIHByaXZhdGUgbGlzdGVuZXJTdG9wOiBhbnk7XG5cbiAgQElucHV0KCkgcmdYOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJnWTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNsaWRlcjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBuZXdWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pIG1vdXNlRG93bihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdGFydChldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSkgdG91Y2hTdGFydChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdGFydChldmVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5saXN0ZW5lck1vdmUgPSAoZXZlbnQ6IGFueSkgPT4gdGhpcy5tb3ZlKGV2ZW50KTtcblxuICAgIHRoaXMubGlzdGVuZXJTdG9wID0gKCkgPT4gdGhpcy5zdG9wKCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldEN1cnNvcihldmVudCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnNvcihldmVudCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG5cbiAgICB0aGlzLmRyYWdTdGFydC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIHN0b3AoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xuXG4gICAgdGhpcy5kcmFnRW5kLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0WChldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHBhZ2VYID0gKGV2ZW50LnBhZ2VYICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuXG4gICAgcmV0dXJuIHBhZ2VYIC0gcG9zaXRpb24ubGVmdCAtIHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0WShldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHBhZ2VZID0gKGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgcmV0dXJuIHBhZ2VZIC0gcG9zaXRpb24udG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJzb3IoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRYKGV2ZW50KSwgd2lkdGgpKTtcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRZKGV2ZW50KSwgaGVpZ2h0KSk7XG5cbiAgICBpZiAodGhpcy5yZ1ggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJnWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyBzOiB4IC8gd2lkdGgsIHY6ICgxIC0geSAvIGhlaWdodCksIHJnWDogdGhpcy5yZ1gsIHJnWTogdGhpcy5yZ1kgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJnWCA9PT0gdW5kZWZpbmVkICYmIHRoaXMucmdZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHkgLyBoZWlnaHQsIHJnWTogdGhpcy5yZ1kgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJnWCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmdZID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHggLyB3aWR0aCwgcmdYOiB0aGlzLnJnWCB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlclBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIHY6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlckRpbWVuc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBzOiBudW1iZXIsIHB1YmxpYyB2OiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG4iLCJleHBvcnQgY2xhc3MgQ215ayB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjOiBudW1iZXIsIHB1YmxpYyBtOiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIsIHB1YmxpYyBrOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBIc2xhIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIGw6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIEhzdmEge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgdjogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmdiYSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByOiBudW1iZXIsIHB1YmxpYyBnOiBudW1iZXIsIHB1YmxpYyBiOiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXlrLCBSZ2JhLCBIc2xhLCBIc3ZhIH0gZnJvbSAnLi9mb3JtYXRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyU2VydmljZSB7XG4gIHByaXZhdGUgYWN0aXZlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHNldEFjdGl2ZShhY3RpdmU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiB0aGlzLmFjdGl2ZSAhPT0gYWN0aXZlICYmIHRoaXMuYWN0aXZlLmNwRGlhbG9nRGlzcGxheSAhPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuYWN0aXZlLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHB1YmxpYyBoc3ZhMmhzbGEoaHN2YTogSHN2YSk6IEhzbGEge1xuICAgIGNvbnN0IGggPSBoc3ZhLmgsIHMgPSBoc3ZhLnMsIHYgPSBoc3ZhLnYsIGEgPSBoc3ZhLmE7XG5cbiAgICBpZiAodiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBIc2xhKGgsIDAsIDAsIGEpO1xuICAgIH0gZWxzZSBpZiAocyA9PT0gMCAmJiB2ID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEhzbGEoaCwgMSwgMSwgYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGwgPSB2ICogKDIgLSBzKSAvIDI7XG5cbiAgICAgIHJldHVybiBuZXcgSHNsYShoLCB2ICogcyAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSksIGwsIGEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoc2xhMmhzdmEoaHNsYTogSHNsYSk6IEhzdmEge1xuICAgIGNvbnN0IGggPSBNYXRoLm1pbihoc2xhLmgsIDEpLCBzID0gTWF0aC5taW4oaHNsYS5zLCAxKTtcbiAgICBjb25zdCBsID0gTWF0aC5taW4oaHNsYS5sLCAxKSwgYSA9IE1hdGgubWluKGhzbGEuYSwgMSk7XG5cbiAgICBpZiAobCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIDAsIDAsIGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2ID0gbCArIHMgKiAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpIC8gMjtcblxuICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIDIgKiAodiAtIGwpIC8gdiwgdiwgYSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhzdmFUb1JnYmEoaHN2YTogSHN2YSk6IFJnYmEge1xuICAgIGxldCByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyO1xuXG4gICAgY29uc3QgaCA9IGhzdmEuaCwgcyA9IGhzdmEucywgdiA9IGhzdmEudiwgYSA9IGhzdmEuYTtcblxuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKGggKiA2KTtcbiAgICBjb25zdCBmID0gaCAqIDYgLSBpO1xuICAgIGNvbnN0IHAgPSB2ICogKDEgLSBzKTtcbiAgICBjb25zdCBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgIGNvbnN0IHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XG5cbiAgICBzd2l0Y2ggKGkgJSA2KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHIgPSB2LCBnID0gdCwgYiA9IHA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByID0gcSwgZyA9IHYsIGIgPSBwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgciA9IHAsIGcgPSB2LCBiID0gdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHIgPSBwLCBnID0gcSwgYiA9IHY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByID0gdCwgZyA9IHAsIGIgPSB2O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgciA9IHYsIGcgPSBwLCBiID0gcTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZ2JhKHIsIGcsIGIsIGEpO1xuICB9XG5cbiAgcHVibGljIHJnYmFUb0NteWsocmdiYTogUmdiYSk6IENteWsge1xuICAgIGNvbnN0IGs6IG51bWJlciA9IDEgLSBNYXRoLm1heChyZ2JhLnIsIHJnYmEuZywgcmdiYS5iKTtcblxuICAgIGlmIChrID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IENteWsoMCwgMCwgMCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGMgPSAoMSAtIHJnYmEuciAtIGspIC8gKDEgLSBrKTtcbiAgICAgIGNvbnN0IG0gPSAoMSAtIHJnYmEuZyAtIGspIC8gKDEgLSBrKTtcbiAgICAgIGNvbnN0IHkgPSAoMSAtIHJnYmEuYiAtIGspIC8gKDEgLSBrKTtcblxuICAgICAgcmV0dXJuIG5ldyBDbXlrKGMsIG0sIHksIGspO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZ2JhVG9Ic3ZhKHJnYmE6IFJnYmEpOiBIc3ZhIHtcbiAgICBsZXQgaDogbnVtYmVyLCBzOiBudW1iZXI7XG5cbiAgICBjb25zdCByID0gTWF0aC5taW4ocmdiYS5yLCAxKSwgZyA9IE1hdGgubWluKHJnYmEuZywgMSk7XG4gICAgY29uc3QgYiA9IE1hdGgubWluKHJnYmEuYiwgMSksIGEgPSBNYXRoLm1pbihyZ2JhLmEsIDEpO1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYiksIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXG4gICAgY29uc3QgdjogbnVtYmVyID0gbWF4LCBkID0gbWF4IC0gbWluO1xuXG4gICAgcyA9IChtYXggPT09IDApID8gMCA6IGQgLyBtYXg7XG5cbiAgICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAgIGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBiOlxuICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGggLz0gNjtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEhzdmEoaCwgcywgdiwgYSk7XG4gIH1cblxuICBwdWJsaWMgcmdiYVRvSGV4KHJnYmE6IFJnYmEsIGFsbG93SGV4OD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgKi9cbiAgICBsZXQgaGV4ID0gJyMnICsgKCgxIDw8IDI0KSB8IChyZ2JhLnIgPDwgMTYpIHwgKHJnYmEuZyA8PCA4KSB8IHJnYmEuYikudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcblxuICAgIGlmIChhbGxvd0hleDgpIHtcbiAgICAgIGhleCArPSAoKDEgPDwgOCkgfCBNYXRoLnJvdW5kKHJnYmEuYSAqIDI1NSkpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gICAgfVxuICAgIC8qIHRzbGludDplbmFibGU6bm8tYml0d2lzZSAqL1xuXG4gICAgcmV0dXJuIGhleDtcbiAgfVxuXG4gIHB1YmxpYyBkZW5vcm1hbGl6ZVJHQkEocmdiYTogUmdiYSk6IFJnYmEge1xuICAgIHJldHVybiBuZXcgUmdiYShNYXRoLnJvdW5kKHJnYmEuciAqIDI1NSksIE1hdGgucm91bmQocmdiYS5nICogMjU1KSwgTWF0aC5yb3VuZChyZ2JhLmIgKiAyNTUpLCByZ2JhLmEpO1xuICB9XG5cbiAgcHVibGljIHN0cmluZ1RvSHN2YShjb2xvclN0cmluZzogc3RyaW5nID0gJycsIGFsbG93SGV4ODogYm9vbGVhbiA9IGZhbHNlKTogSHN2YSB7XG4gICAgbGV0IGhzdmE6IEhzdmEgPSBudWxsO1xuXG4gICAgY29sb3JTdHJpbmcgPSAoY29sb3JTdHJpbmcgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBjb25zdCBzdHJpbmdQYXJzZXJzID0gW1xuICAgICAge1xuICAgICAgICByZTogLyhyZ2IpYT9cXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqJT8sXFxzKihcXGR7MSwzfSlcXHMqJT8oPzosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxccyopP1xcKS8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFs0XSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgaXNOYU4ocGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSkgPyAxIDogcGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcmU6IC8oaHNsKWE/XFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihcXGR7MSwzfSklXFxzKig/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFxzKik/XFwpLyxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKGV4ZWNSZXN1bHQ6IGFueSkge1xuICAgICAgICAgIHJldHVybiBuZXcgSHNsYShwYXJzZUludChleGVjUmVzdWx0WzJdLCAxMCkgLyAzNjAsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzRdLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICBpc05hTihwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKSA/IDEgOiBwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBpZiAoYWxsb3dIZXg4KSB7XG4gICAgICBzdHJpbmdQYXJzZXJzLnB1c2goe1xuICAgICAgICByZTogLyMoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pPyQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbNF0gfHwgJ0ZGJywgMTYpIC8gMjU1KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmluZ1BhcnNlcnMucHVzaCh7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KSQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIDEpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XSkoW2EtZkEtRjAtOV0pKFthLWZBLUYwLTldKSQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0gKyBleGVjUmVzdWx0WzFdLCAxNikgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzJdICsgZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSArIGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHJpbmdQYXJzZXJzKSB7XG4gICAgICBpZiAoc3RyaW5nUGFyc2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IHN0cmluZ1BhcnNlcnNba2V5XTtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHBhcnNlci5yZS5leGVjKGNvbG9yU3RyaW5nKSwgY29sb3I6IGFueSA9IG1hdGNoICYmIHBhcnNlci5wYXJzZShtYXRjaCk7XG5cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgaWYgKGNvbG9yIGluc3RhbmNlb2YgUmdiYSkge1xuICAgICAgICAgICAgaHN2YSA9IHRoaXMucmdiYVRvSHN2YShjb2xvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2xvciBpbnN0YW5jZW9mIEhzbGEpIHtcbiAgICAgICAgICAgIGhzdmEgPSB0aGlzLmhzbGEyaHN2YShjb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhzdmE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHN2YTtcbiAgfVxuXG4gIHB1YmxpYyBvdXRwdXRGb3JtYXQoaHN2YTogSHN2YSwgb3V0cHV0Rm9ybWF0OiBzdHJpbmcsIGFscGhhQ2hhbm5lbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKG91dHB1dEZvcm1hdCkge1xuICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgIGNvbnN0IGhzbGEgPSB0aGlzLmhzdmEyaHNsYShoc3ZhKTtcblxuICAgICAgICBjb25zdCBoc2xhVGV4dCA9IG5ldyBIc2xhKE1hdGgucm91bmQoKGhzbGEuaCkgKiAzNjApLCBNYXRoLnJvdW5kKGhzbGEucyAqIDEwMCksXG4gICAgICAgICAgTWF0aC5yb3VuZChoc2xhLmwgKiAxMDApLCBNYXRoLnJvdW5kKGhzbGEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIGlmIChoc3ZhLmEgPCAxIHx8IGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgICAgICByZXR1cm4gJ2hzbGEoJyArIGhzbGFUZXh0LmggKyAnLCcgKyBoc2xhVGV4dC5zICsgJyUsJyArIGhzbGFUZXh0LmwgKyAnJSwnICtcbiAgICAgICAgICAgIGhzbGFUZXh0LmEgKyAnKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdoc2woJyArIGhzbGFUZXh0LmggKyAnLCcgKyBoc2xhVGV4dC5zICsgJyUsJyArIGhzbGFUZXh0LmwgKyAnJSknO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JnYmEnOlxuICAgICAgICBjb25zdCByZ2JhID0gdGhpcy5kZW5vcm1hbGl6ZVJHQkEodGhpcy5oc3ZhVG9SZ2JhKGhzdmEpKTtcblxuICAgICAgICBpZiAoaHN2YS5hIDwgMSB8fCBhbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnKSB7XG4gICAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnLCcgK1xuICAgICAgICAgICAgTWF0aC5yb3VuZChyZ2JhLmEgKiAxMDApIC8gMTAwICsgJyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAncmdiKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc3QgYWxsb3dIZXg4ID0gKGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycgfHwgYWxwaGFDaGFubmVsID09PSAnaGV4OCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJnYmFUb0hleCh0aGlzLmRlbm9ybWFsaXplUkdCQSh0aGlzLmhzdmFUb1JnYmEoaHN2YSkpLCBhbGxvd0hleDgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFBMQVRGT1JNX0lELCBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXRlY3RJRSB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBSZ2JhLCBIc2xhLCBIc3ZhIH0gZnJvbSAnLi9mb3JtYXRzJztcbmltcG9ydCB7IFNsaWRlclBvc2l0aW9uLCBTbGlkZXJEaW1lbnNpb24gfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvci1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2NvbG9yLXBpY2tlcl0nLFxuICB0ZW1wbGF0ZTogYDxkaXZcbiAgI2RpYWxvZ1BvcHVwXG4gIGNsYXNzPVwiY29sb3ItcGlja2VyXCJcbiAgW3N0eWxlLnZpc2liaWxpdHldPVwiaGlkZGVuIHx8ICFzaG93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIiBbc3R5bGUudG9wLnB4XT1cInRvcFwiXG4gIFtzdHlsZS5sZWZ0LnB4XT1cImxlZnRcIlxuICBbc3R5bGUucG9zaXRpb25dPVwicG9zaXRpb25cIlxuICBbc3R5bGUuaGVpZ2h0LnB4XT1cImNwSGVpZ2h0XCJcbiAgW3N0eWxlLndpZHRoXT1cImNvbG9yVG9nZ2xlID8gJzEwMCUnIDogY3BXaWR0aCArICdweCdcIlxuPlxuICA8ZGl2XG4gICAgKm5nSWY9XCIhY29sb3JUb2dnbGVcIlxuICAgIGNsYXNzPVwiY29sb3ItaW5wdXQtY29udGFpbmVyIHNlbS1jb2xvci1saWdodC1pbnB1dHMgcGIxXCI+XG4gICAgPGRpdiBjbGFzcz1cImJsb2NrIHB5MVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgIHNlbS10eXBvLS1maWdjYXB0aW9uXCJcbiAgICAgICAgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiAoY2xpY2spPVwib25Gb3JtYXRUb2dnbGUoKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNlbGYtc3RhcnQgc2VtLS1saW5rIFwiPkNoYW5nZSBmb3JtYXQ8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dpdGNoLS1jb250cm9sLS1saW5rXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VtLWNvbG9yLXN3aXRjaCBweDEgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtcmVzZXQgc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIGZsZXgtYXV0b1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDIgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIzNjBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMzYwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5oXCIgKG5ld1ZhbHVlKT1cIm9uSHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5IPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LnNcIiAobmV3VmFsdWUpPVwib25TYXR1cmF0aW9uSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5TPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmxcIiAobmV3VmFsdWUpPVwib25MaWdodG5lc3NJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkw8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAxID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBjb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LnJcIiAobmV3VmFsdWUpPVwib25SZWRJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPlI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmdcIiAobmV3VmFsdWUpPVwib25HcmVlbklucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Rzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmJcIiAobmV3VmFsdWUpPVwib25CbHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5CPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIlxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwicmdiYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAwID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LXN1Zml4XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3ZhbHVlXT1cImhleFRleHRcIlxuICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSGV4SW5wdXQobnVsbClcIlxuICAgICAgICAgICAgICAgIChuZXdWYWx1ZSk9XCJvbkhleElucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZENvbG9yKClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWljb24tc2VhcmNoIHN1Zml4XCI+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkhleDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJweDFcIj5cbiAgICA8ZGl2XG4gICAgICAjaHVlU2xpZGVyXG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgICAgY2xhc3M9XCJodWVcIlxuICAgICAgW3NsaWRlcl0gW3JnWF09XCIxXCIgKG5ld1ZhbHVlKT1cIm9uSHVlQ2hhbmdlKCRldmVudClcIiAoZHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCdodWUnKVwiIChkcmFnRW5kKT1cIm9uRHJhZ0VuZCgnaHVlJylcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBbc3R5bGUubGVmdC5weF09XCJzbGlkZXIuaFwiPjwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICAgICpuZ0lmPVwiY3BEaWFsb2dEaXNwbGF5PT0ncG9wdXAnXCJcbiAgICAgIGNsYXNzPVwiYXJyb3cgYXJyb3cte3tjcFBvc2l0aW9ufX1cIlxuICAgICAgW3N0eWxlLnRvcC5weF09XCJhcnJvd1RvcFwiPjwvZGl2PlxuICAgIDxkaXZcbiAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgICBjbGFzcz1cInNhdHVyYXRpb24tbGlnaHRuZXNzXCJcbiAgICAgIFtzbGlkZXJdIFtyZ1hdPVwiMVwiIFtyZ1ldPVwiMVwiXG4gICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJodWVTbGlkZXJDb2xvclwiXG4gICAgICAobmV3VmFsdWUpPVwib25Db2xvckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChkcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoJ3NhdHVyYXRpb24tbGlnaHRuZXNzJylcIlxuICAgICAgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdzYXR1cmF0aW9uLWxpZ2h0bmVzcycpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgW3N0eWxlLnRvcC5weF09XCJzbGlkZXIudlwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5zXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgI2FscGhhU2xpZGVyXG4gICAgICBjbGFzcz1cImFscGhhXCJcbiAgICAgIFtzbGlkZXJdXG4gICAgICBbcmdYXT1cIjFcIlxuICAgICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImFscGhhU2xpZGVyQ29sb3JcIlxuICAgICAgKG5ld1ZhbHVlKT1cIm9uQWxwaGFDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoZHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCdhbHBoYScpXCJcbiAgICAgIChkcmFnRW5kKT1cIm9uRHJhZ0VuZCgnYWxwaGEnKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5hXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS1Db2xvciBkcm9wcy0tPlxuICA8ZGl2XG4gICAgKm5nSWY9XCJjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJzZW0tY29sb3ItZHJvcHNcIj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjcFByZXNldENvbG9ycz8ubGVuZ3RoIHx8IGNwQWRkQ29sb3JCdXR0b25cIj5cbiAgICAgIDx1bCAqbmdJZj1cImNwUHJlc2V0Q29sb3JzPy5sZW5ndGhcIiBjbGFzcz1cInNlbS1jb2xvci1saXN0IHNlbS1saXN0LXJlc2V0XCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjcFByZXNldENvbG9ycyB8IHJldmVyc2VcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRDb2xvckZyb21TdHJpbmcoY29sb3IpXCJcbiAgICAgICAgICBjbGFzcz1cImJsb2NrXCJcbiAgICAgICAgICBkbmQtZHJhZ2dhYmxlXG4gICAgICAgICAgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAgICAgIFtkcmFnRGF0YV09XCJjb2xvclwiXG4gICAgICAgICAgKG9uRHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KGNvbG9yKVwiXG4gICAgICAgICAgW2Ryb3Bab25lc109XCJbJ3dpZGdldC1kcm9wWm9uZSddXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmlnaHQtYWxpZ24gYmxvY2tcIj4ge3tjb2xvcn19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJjb2xvci1kZWxldGUgc2VtLWljb24tY2xvc2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlUHJlc2V0Q29sb3IoJGV2ZW50LCBjb2xvcilcIj48L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdJZj1cIiFjcFByZXNldENvbG9ycz8ubGVuZ3RoICYmIGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICBjbGFzcz1cInt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzc319XG4gICAgICAgICAgXCI+e3tjcFByZXNldEVtcHR5TWVzc2FnZX19PC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxkaXZcbiAgICAqbmdJZj1cIiFjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJzZW0tY29sb3Itc3dhdGNoZXMgcHgxXCI+XG4gICAgPCEtLTxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dhdGNoZXNfY3VycmVudFwiPjwvZGl2Pi0tPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBtZWRpdW1cbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwic2VsZWN0ZWRDb2xvclwiXG4gICAgICAgIHNlbXVpLWJ1dHRvbi1kbmQgc2VtLWltcG9ydGFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImNwUHJlc2V0Q29sb3JzICYmIGNwUHJlc2V0Q29sb3JzLmxlbmd0aCA+PSBjcE1heFByZXNldENvbG9yc0xlbmd0aFwiXG4gICAgICAgIChjbGljayk9XCJvbkFkZFByZXNldENvbG9yKCRldmVudCwgc2VsZWN0ZWRDb2xvcilcIlxuICAgICAgPlxuICAgICAgICBBZGQgQ29sb3JcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJjcFByZXNldENvbG9ycz8ubGVuZ3RoIHx8IGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgY2xhc3M9XCJzZW0tY29sb3Itc3dhdGNoZXNfcHJlc2VsZWN0ZWRcIj5cblxuICAgICAgPGRpdlxuICAgICAgICAqbmdJZj1cIiFjcFByZXNldENvbG9ycz8ubGVuZ3RoICYmIGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICBjbGFzcz1cInt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzc319XG4gICAgICAgICAgXCI+XG4gICAgICAgIHt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2V9fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjcFByZXNldENvbG9ycyB8IHJldmVyc2VcIlxuICAgICAgICBjbGFzcz1cInNlbS1idXR0b24tcmFpbi1kcm9wXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiXG4gICAgICAgIChjbGljayk9XCJzZXRDb2xvckZyb21TdHJpbmcoY29sb3IpXCJcbiAgICAgID5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZVByZXNldENvbG9yKCRldmVudCwgY29sb3IpXCJcbiAgICAgICAgICAgIGNsYXNzPVwic2VtLWJ1dHRvbi1jaXJjbGUgc2VtLWJ1dHRvbi1kZWxldGUgc2VtLWljb24tY2xvc2VcIj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2XG4gICAgKm5nSWY9XCJjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLS1mb290ZXIgY29sb3ItaW5wdXQtY29udGFpbmVyIHNlbS1jb2xvci1saWdodC1pbnB1dHNcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgbWIxIHB0MSBzZW0tdHlwby0tZmlnY2FwdGlvblwiXG4gICAgICAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIChjbGljayk9XCJvbkZvcm1hdFRvZ2dsZSgpXCJcbiAgICA+XG4gICAgICA8c3BhbiBjbGFzcz1cInNlbGYtc3RhcnQgc2VtLS1saW5rIFwiPkNoYW5nZSBmb3JtYXQ8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VtLWNvbG9yLXN3aXRjaC0tY29udHJvbC0tbGlua1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dpdGNoIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8dWwgY2xhc3M9XCJsaXN0LXJlc2V0IHNlbS1jb2xvci1zd2l0Y2gtLWNvbG9ycyBmbGV4LWF1dG9cIj5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAyID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBjb250ZW50LWFyb3VuZCBwYjFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlcyBtcjEgXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjM2MFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIzNjBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmhcIiAobmV3VmFsdWUpPVwib25IdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkg8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uc1wiIChuZXdWYWx1ZSk9XCJvblNhdHVyYXRpb25JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPlM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8ubFwiIChuZXdWYWx1ZSk9XCJvbkxpZ2h0bmVzc0lucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+TDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcLixdWzAtOV17MSwyfSk/XCIgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDEgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uclwiIChuZXdWYWx1ZSk9XCJvblJlZElucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Ujwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uZ1wiIChuZXdWYWx1ZSk9XCJvbkdyZWVuSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5HPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uYlwiIChuZXdWYWx1ZSk9XCJvbkJsdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyZ2JhVGV4dD8uYVwiIChuZXdWYWx1ZSk9XCJvbkFscGhhSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDAgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdycFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3RleHRdIFt2YWx1ZV09XCJoZXhUZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSGV4SW5wdXQobnVsbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG5ld1ZhbHVlKT1cIm9uSGV4SW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbS1idG4tZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JuZXI9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbXVpLXRoZW1lPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VtLWltcG9ydGFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNwUHJlc2V0Q29sb3JzICYmIGNwUHJlc2V0Q29sb3JzLmxlbmd0aCA+PSBjcE1heFByZXNldENvbG9yc0xlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25BZGRQcmVzZXRDb2xvcigkZXZlbnQsIHNlbGVjdGVkQ29sb3IpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlbS1pY29uLXNlbmQgYnV0dG9uLXNlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkhleDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLSBTVEFSVCAtLT5cblxuXG5cblxuIDwhLS0gRU5EIC0tPlxuXG4gIDxkaXYgKm5nSWY9XCJjcE9LQnV0dG9uIHx8IGNwQ2FuY2VsQnV0dG9uXCIgY2xhc3M9XCJidXR0b24tYXJlYVwiPlxuICAgIDxidXR0b24gKm5nSWY9XCJjcENhbmNlbEJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInt7Y3BDYW5jZWxCdXR0b25DbGFzc319XCIgKGNsaWNrKT1cIm9uQ2FuY2VsQ29sb3IoJGV2ZW50KVwiPnt7Y3BDYW5jZWxCdXR0b25UZXh0fX08L2J1dHRvbj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiY3BPS0J1dHRvblwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInt7Y3BPS0J1dHRvbkNsYXNzfX1cIiAoY2xpY2spPVwib25BY2NlcHRDb2xvcigkZXZlbnQpXCI+e3tjcE9LQnV0dG9uVGV4dH19PC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgYm9keXttYXJnaW46MDtmb250LXNpemU6MTAwJX1odG1se2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLDphZnRlciw6YmVmb3Jle2JveC1zaXppbmc6aW5oZXJpdH1bY2xhc3MqPVwiIHNlbS1pY29uLVwiXSxbY2xhc3NePXNlbS1pY29uLV17Zm9udC1mYW1pbHk6c2VtYmxlci1pY28haW1wb3J0YW50O3NwZWFrOm5vbmU7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtsaW5lLWhlaWdodDoxOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlfS5zZW0taWNvbi1kcmFnOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDZcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1wcm9kdWN0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTNcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1mb3JtOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmFcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1sb2NhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE0XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzNVwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLXRleHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NVwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWxvY2F0aW9uMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ3XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tSTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA2XCJ9LnNlbS1pY29uLVM6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwN1wifS5zZW0taWNvbi1VOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDhcIn0uc2VtLWljb24tQjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA5XCJ9LnNlbS1pY29uLWp1c3RpZnk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwY1wiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxMFwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLW1pZGRsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTExXCI7Y29sb3I6I2NjY30uc2VtLWljb24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxMlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWNvbG91cjI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwYVwifS5zZW0taWNvbi1icnVzaDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBiXCJ9LnNlbS1pY29uLWZvbGRlcjI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZFwifS5zZW0taWNvbi1sb2dvdXQyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGVcIn0uc2VtLWljb24tb2wyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGZcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1zZW5kOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDVcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1yZXBlYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwMFwifS5zZW0taWNvbi1jcm9wOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDFcIn0uc2VtLWljb24tY2FzZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAyXCJ9LnNlbS1pY29uLXJlc2l6ZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAzXCJ9LnNlbS1pY29uLWNoZWNrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDRcIn0uc2VtLWljb24tb2w6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxNVwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXVsOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTZcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1mb2xkZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxN1wifS5zZW0taWNvbi1jbG9zZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE4XCJ9LnNlbS1pY29uLWluYm94OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTlcIn0uc2VtLWljb24taG9tZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFhXCJ9LnNlbS1pY29uLXNoYXJlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWJcIn0uc2VtLWljb24taGFtYnVyZ2VyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWNcIn0uc2VtLWljb24tbG9jazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFkXCJ9LnNlbS1pY29uLXVubG9jazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFlXCJ9LnNlbS1pY29uLWVsbGlwc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxZlwifS5zZW0taWNvbi12b2x1bWU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyMFwifS5zZW0taWNvbi1wbGF5OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjFcIn0uc2VtLWljb24tdmlkZW86YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyMlwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWRlc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIzXCJ9LnNlbS1pY29uLWFkZHJlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyNFwifS5zZW0taWNvbi1jZW50ZXJfYWxpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyNVwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWp1c3RpZnkyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjZcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1yaWdodF9hbGlnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI3XCI7Y29sb3I6I2NjY30uc2VtLWljb24tbGVmdF9hbGlnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI4XCI7Y29sb3I6I2NjY30uc2VtLWljb24tY2Fyb3VzZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyOVwifS5zZW0taWNvbi1pbWFnZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJiXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tYmFjazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJjXCJ9LnNlbS1pY29uLWRlbGV0ZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJkXCI7Y29sb3I6I2QwMDIxYn0uc2VtLWljb24tZHVwbGljYXRlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmVcIn0uc2VtLWljb24tbGluazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJmXCJ9LnNlbS1pY29uLXN0eWxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzBcIn0uc2VtLWljb24tY29sb3VyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzFcIn0uc2VtLWljb24tYWRkX2FjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMlwiO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWFkZF9hY2NlbnQgLnBhdGgyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzNcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXNlbmQyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzRcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzNlwifS5zZW0taWNvbi1jb2xvdXJfYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM3XCI7Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tY29sb3VyX2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzOFwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZmZn0uc2VtLWljb24tcHJvZmlsZS1hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzlcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1wcm9maWxlLWFjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzYVwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZmZn0uc2VtLWljb24tZG93bl9hcnJvdzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNiXCJ9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNjXCI7Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2RcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoMzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNlXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzZlwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tbG9nb3V0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDBcIn0uc2VtLWljb24tcGF5bWVudDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQxXCJ9LnNlbS1pY29uLXNldHRpbmdzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDJcIn0uc2VtLWljb24tc2l0ZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0M1wifS5zZW0taWNvbi1wcm9maWxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDRcIn0uc2VtLWxpc3QtcmVzZXR7bGlzdC1zdHlsZTpub25lO3BhZGRpbmctbGVmdDowO21hcmdpbjowfS5zZW0tLWNvcm5lciAuX3RvcHtib3JkZXItcmFkaXVzOjUwJSAwIDUwJSA1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW11aS1mb3JtLXNlbGVjdCBzZWxlY3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6MTAlO3dpZHRoOjgwJTttYXJnaW4tcmlnaHQ6MTAlO2JvcmRlcjoxcHggc29saWQgI2Q4Y2ZjZjtib3JkZXItcmFkaXVzOjEwcHg7Zm9udC1zaXplOjEuOGVtO2NvbG9yOiNkOGNmY2Y7Y3Vyc29yOnBvaW50ZXJ9aW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTttYXJnaW46MH1pbnB1dC5zZW0taW5wdXR7d2lkdGg6Y2FsYygxMDAlKTtvdXRsaW5lOjA7Ym9yZGVyLXJhZGl1czoxMHB4IDEwcHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym9yZGVyOjFweCBzb2xpZCAjOTQ5OGEzfS5zZW0tdWwtaWNvbi1saXN0PmRpdiAuc2VtLWxpe2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2N9LnNlbS11bC1pY29uLWxpc3Q+ZGl2Omxhc3QtY2hpbGQgLnNlbS1saXtib3JkZXItYm90dG9tOjAgc29saWQgI2NjY30ubm8tcGFkZGluZy1saXN0IC5zZW0tdWwgLnNlbS1saSwubm8tcGFkZGluZy1saXN0IC5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGl7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGl7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7cGFkZGluZy10b3A6LjQ1cmVtO3BhZGRpbmctYm90dG9tOi40NXJlbTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZX0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLmFjdGl2ZSBpbWcuaWNvbi1kZWZhdWx0e2Rpc3BsYXk6bm9uZX0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLmFjdGl2ZSBpbWcuaWNvbi1ob3ZlcntkaXNwbGF5OmlubGluZS1ibG9ja30uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpIGltZ3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7bWFyZ2luLWJvdHRvbTo0cHh9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saSBpbWcuaWNvbi1ob3ZlcntkaXNwbGF5Om5vbmV9LnNlbS11bHtsaXN0LXN0eWxlOm5vbmU7d2lkdGg6MTAwJTttYXJnaW46MCBhdXRvO3BhZGRpbmc6MH0uc2VtLXVsIC5zZW0tbGl7cGFkZGluZy10b3A6LjQ1cmVtO3BhZGRpbmctYm90dG9tOi40NXJlbTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZX0uc2VtLXVsIC5zZW0tbGk6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tdWwgLnNlbS1saS5hY3RpdmV7Ym9yZGVyLXJhZGl1czo3cHggMCAwIDdweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS11bCAuc2VtLWxpLS1saW5lLXNlcGVyYXRvcntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjfXVsLmNvcm5lcl9hbGwgbGk6Zmlyc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czo2cHggNnB4IDAgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9dWwuY29ybmVyX2FsbCBsaTpsYXN0LWNoaWxke2JvcmRlci1yYWRpdXM6MCAwIDExcHggMTFweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl90b3B7Ym9yZGVyLXJhZGl1czo2cHggNnB4IDAgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl9ib3R0b217Ym9yZGVyLXJhZGl1czowIDAgNnB4IDZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl9ub25le2JvcmRlci1yYWRpdXM6MDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl9hbGx7Ym9yZGVyLXJhZGl1czo2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfcmlnaHR7Ym9yZGVyLXJhZGl1czo2cHggMCAwIDZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl9sZWZ0e2JvcmRlci1yYWRpdXM6MCA2cHggNnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfdG9wLWxlZnR7Ym9yZGVyLXJhZGl1czowIDZweCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfdG9wLXJpZ2h0e2JvcmRlci1yYWRpdXM6NnB4IDAgNnB4IDZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl9ib3R0b20tbGVmdCwuY29ybmVyX2JvdHRvbS1yaWdodHtib3JkZXItcmFkaXVzOjZweCA2cHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXIsLnNlbS1jb2xvcmxpc3QtLWNvbnRhaW5lciwuc2VtLXNoYWRvdywuc2lkZWJhci1jb250YWluZXJ7Ym94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwuMTIpLDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yNCl9LmRpYWxvZy1jb250YWluZXI6aG92ZXIsLnNlbS1jb2xvcmxpc3QtLWNvbnRhaW5lcjpob3Zlciwuc2VtLXNoYWRvdzpob3Zlciwuc2lkZWJhci1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDE0cHggMjhweCByZ2JhKDAsMCwwLC4yNSksMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwuMjIpfS5zZW0tYnV0dG9uLWRuZHtoZWlnaHQ6NzBweDt3aWR0aDo3MHB4O21hcmdpbjo1cHg7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjouM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9LnNlbS1idXR0b24tZG5kLS1tZWRpdW17aGVpZ2h0OjUwcHg7d2lkdGg6NTBweH0uc2VtLWJ1dHRvbi1kbmQtLXNtYWxse2hlaWdodDozMHB4O3dpZHRoOjMwcHh9LnNlbS1idG4tZmFie291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6bm9uZX0uc2VtLWJ0bi1mYWI6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tYnRuLWZhYiBpbWd7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtkaXNwbGF5OmJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc2VtLWJ0bi1mYWItLWRlZmF1bHQ+c3BhbntkaXNwbGF5OmJsb2NrO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LnNlbS1idG4tZmFiLS1kZWZhdWx0X3NtYWxse3BhZGRpbmc6LjRyZW19LnNlbS1idG4tZmFiLS1kZWZhdWx0X3NtYWxsPnNwYW57ZGlzcGxheTpibG9ja30uc2VtLWJ0bi1mYWItLXByaW1hcnk+c3Bhbiwuc2VtLWJ0bi1mYWItLXNlY29uZGFyeT5zcGFue2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9ub25le2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9yaWdodHtib3JkZXItcmFkaXVzOjUwJSAwIDAgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9sZWZ0e2JvcmRlci1yYWRpdXM6MCA1MCUgNTAlIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX3RvcC1sZWZ0e2JvcmRlci1yYWRpdXM6MCA1MCUgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl90b3AtcmlnaHR7Ym9yZGVyLXJhZGl1czo1MCUgMCA1MCUgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9ib3R0b20tbGVmdCwuc2VtLWJ0bi1mYWItLWNvcm5lcl9ib3R0b20tcmlnaHR7Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtwYWRkaW5nLWJvdHRvbToycHh9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaS5hY3RpdmUgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTo6YWZ0ZXIsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaTpob3ZlciBidXR0b246bm90KFtkaXNhYmxlZF0pOjphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9ue2JvcmRlcjpub25lO291dGxpbmU6MDtib3gtc2hhZG93Om5vbmU7cGFkZGluZzouMzVlbSAuNzVlbTtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Ym90dG9tOi0xcHh9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3Zlcntib3JkZXI6bm9uZTtvcGFjaXR5OjF9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOjphZnRlcntjb250ZW50OlwiXCI7aGVpZ2h0OjNweDt3aWR0aDoxMDAlO2JvdHRvbTotMXB4O3RyYW5zaXRpb246MjUwbXM7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfXVsLnNlbXVpLXRhYnMtbGlzdC50YWJzLXZlcnRpY2Fse21hcmdpbjowfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6c2VtYmxlci1pY287c3JjOnVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIuZW90PzlpazQybCk7c3JjOnVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIuZW90PzlpazQybCNpZWZpeCkgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksdXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci50dGY/OWlrNDJsKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoL2Fzc2V0cy9mb250cy9zZW1ibGVyLndvZmY/OWlrNDJsKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIuc3ZnPzlpazQybCNpY29tb29uKSBmb3JtYXQoXCJzdmdcIik7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfS5zZW0tYnV0dG9ue2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MTJweCAxMnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLWJ1dHRvbi0tc2Vjb25kYXJ5e2JvcmRlcjoxcHggc29saWQgI2E5YTlhOTtib3JkZXItcmFkaXVzOjEycHggMTJweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ1dHRvbi0tc21hbGx7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtwYWRkaW5nOjZweCAwIDExcHh9LnNlbS1idXR0b24tLWxhcmdle2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9LnNlbS1idXR0b24tLWZ1bGx7d2lkdGg6MTAwJX0uc2VtLWJ1dHRvbi0tYmxvY2t7ZGlzcGxheTpibG9jaztwYWRkaW5nOi40ZW19LnNlbS1idXR0b24tLWxpbmssLnNlbS1idXR0b24tLWxpbmtfcHJpbWFyeXtib3JkZXI6MCBzb2xpZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2JvcmRlci1yYWRpdXM6MH0uc2VtLWJ1dHRvbi1jaXJjbGV7Ym9yZGVyLXJhZGl1czo1MCU7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZmZmO2ZvbnQtd2VpZ2h0OjcwMH0uc2VtLWJ1dHRvbi1jaXJjbGU6YmVmb3Jle3BhZGRpbmc6MCAwIDAgMXB4fS5zZW0tYnV0dG9uLWRlbGV0ZXtjb2xvcjojZmZmO2ZvbnQtc2l6ZTo2cHg7cGFkZGluZzouM3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiNkMDAyMWI7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc2VtLWRuZC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCV9LnNlbS1kbmQtY29udGFpbmVyLS1kbmQtbmF2e2hlaWdodDo3MHB4O3dpZHRoOjcwcHg7bWFyZ2luOjVweDtib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt0cmFuc2l0aW9uOi4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uc2VtLWRuZC1jb250YWluZXItLW5hdnt6LWluZGV4OjE7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MH0uYnVsbGV0LWlubGluZWxpc3QgbGl7dmVydGljYWwtYWxpZ246dG9wO21hcmdpbjowIC0ycHh9LmJ1bGxldC1pbmxpbmVsaXN0IGxpIC5zZWxlY3R7ZGlzcGxheTpibG9jazt3aWR0aDoyMnB4fS5idWxsZXQtaW5saW5lbGlzdCBsaSAuc2VsZWN0IHNlbGVjdHtkaXNwbGF5Om5vbmV9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLmFjdGl2ZSAuc2VsZWN0IHNlbGVjdHtkaXNwbGF5OmlubGluZX0uYnVsbGV0LWlubGluZWxpc3QgbGkuYWN0aXZlOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnJlZH0uYnVsbGV0LWlubGluZWxpc3QgbGk6OmJlZm9yZXtjb250ZW50OicnO3RvcDotNXB4O2xlZnQ6MDt3aWR0aDoxMDAlO2JvcmRlci10b3A6MXB4IHNvbGlkICMwMDB9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDI7ZGlzcGxheTpibG9jazt0b3A6LTlweDtsZWZ0OjM4JTt3aWR0aDo5cHg7aGVpZ2h0OjlweDtib3JkZXItcmFkaXVzOjUwJTtjb250ZW50OicnfS5idWxsZXQtaW5saW5lbGlzdCBsaTpmaXJzdC1jaGlsZDo6YmVmb3Jle2xlZnQ6MzglfS5idWxsZXQtaW5saW5lbGlzdCBsaTpsYXN0LWNoaWxkOjpiZWZvcmV7bGVmdDotNDQlfS5zZW0tYnV0dG9uLXJhaW4tZHJvcHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyM3B4O2hlaWdodDoyM3B4O21hcmdpbjo0cHggNnB4IDhweDtjdXJzb3I6cG9pbnRlcn0uc2VtLWJ1dHRvbi1yYWluLWRyb3AgLnNlbS1idXR0b24tZGVsZXRle2ZvbnQtc2l6ZTo2cHg7dG9wOjZweDtyaWdodDotOXB4fS5zZW0tYnV0dG9uLXJhaW4tZHJvcCwuc2VtLXJhaW4tZHJvcHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1MCU7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1MCU7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1MCU7Ym94LXNoYWRvdzppbnNldCAwIDAgMTBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnNlbS1wYWdpbmF0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnNlbS1wYWdpbmF0aW9uLW5hdnttYXgtd2lkdGg6MzAwcHh9LnNlbS1wYWdpbmF0aW9uLW5hdj5kaXZ7ZmxleDoxO3RleHQtYWxpZ246Y2VudGVyOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmV9LnNlbS1wYWdpbmF0aW9uLW5leHQgYSwuc2VtLXBhZ2luYXRpb24tcHJldmlvdXMgYXtkaXNwbGF5OmJsb2NrO2xpbmUtaGVpZ2h0OjI1cHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zZW0tcGFnaW5hdGlvbi1uZXh0IGF7dGV4dC1hbGlnbjpsZWZ0fS5zZW0tcGFnaW5hdGlvbi1wcmV2aW91cyBhe3RleHQtYWxpZ246cmlnaHR9LnNlbS1wYWdpbmF0aW9uIGF7aGVpZ2h0OjI1cHg7d2lkdGg6MjVweDtsaW5lLWhlaWdodDoyNXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc2VtLXBhZ2luYXRpb24uYWN0aXZlIGRpdntib3JkZXI6bm9uZTtoZWlnaHQ6MjVweDt3aWR0aDoyNXB4O2xpbmUtaGVpZ2h0OjI1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO2JvcmRlci1yYWRpdXM6MTJweCAxMnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tcGFnaW5hdGlvbi5hY3RpdmUgZGl2Om5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLWF2YXRhcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4fS5zZW0tYXZhdGFyIC5zZW0tYXZhdGFyX19pbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uZGlhbG9nLWNvbnRhaW5lcntvdmVyZmxvdzphdXRvO2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246LjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3B7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3gtc2hhZG93Om5vbmV9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcDpob3Zlcntib3gtc2hhZG93Om5vbmV9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcCAuZGlhbG9nLWNvbnRhaW5lci0taGVhZGVye2JvcmRlci1yYWRpdXM6MTJweCAwIDAgMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcCAuZGlhbG9nLWNvbnRhaW5lci0tYm9keXtwYWRkaW5nLWxlZnQ6MjZweDtib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLWZ1bGx7aGVpZ2h0OjEwMCU7ei1pbmRleDoyfS5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXJ7Ym9yZGVyLXJhZGl1czowIDEycHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci0tYm9keSwuZGlhbG9nLWNvbnRhaW5lci0tYm9keV9zcGFjZWR7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItLWZvb3Rlcntib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tY29sb3JsaXN0e292ZXJmbG93OmF1dG99LnNlbS1jb2xvcmxpc3QtLWNvbnRhaW5lcntib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tY29sb3JsaXN0LS1saXN0e21pbi1oZWlnaHQ6MjBweH0uc2VtLWNvbG9ybGlzdC0tbGlzdC0taW5uZXJ7ZGlzcGxheTpub25lfS5zZW0tY29sb3JsaXN0LS1saXN0OmhvdmVyIC5zZW0tY29sb3JsaXN0LS1saXN0LS1pbm5lcntkaXNwbGF5OmJsb2NrfS5zZW0tY29sb3JsaXN0LS1jbG9zZWJ1dHRvbntmb250LXNpemU6MTFweH0uYnJvd3Nlci1jb250YWluZXJ7aGVpZ2h0OmNhbGMoMTAwJSAtIDMwcHggLSAyMHB4KTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowIDIwcHg7Ym9yZGVyLXJhZGl1czoxMHB4fS5icm93c2VyLWNvbnRhaW5lciAubGF5b3V0e2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsfS5icm93c2VyLWNvbnRhaW5lcjo6YmVmb3Jley13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjBweDtsZWZ0OjE1cHg7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjUwJX0uaDF7Zm9udC1zaXplOjJyZW19Lmgye2ZvbnQtc2l6ZToxLjVyZW19Lmgze2ZvbnQtc2l6ZToxLjI1cmVtfS5oNHtmb250LXNpemU6MXJlbX0uaDV7Zm9udC1zaXplOi44NzVyZW19Lmg2e2ZvbnQtc2l6ZTouNzVyZW19LmZvbnQtZmFtaWx5LWluaGVyaXR7Zm9udC1mYW1pbHk6aW5oZXJpdH0uZm9udC1zaXplLWluaGVyaXR7Zm9udC1zaXplOmluaGVyaXR9LnRleHQtZGVjb3JhdGlvbi1ub25le3RleHQtZGVjb3JhdGlvbjpub25lfS5ib2xke2ZvbnQtd2VpZ2h0OjcwMH0ucmVndWxhcntmb250LXdlaWdodDo0MDB9Lml0YWxpY3tmb250LXN0eWxlOml0YWxpY30uY2Fwc3t0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6LjJlbX0ubGVmdC1hbGlnbnt0ZXh0LWFsaWduOmxlZnR9LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ucmlnaHQtYWxpZ257dGV4dC1hbGlnbjpyaWdodH0uanVzdGlmeXt0ZXh0LWFsaWduOmp1c3RpZnl9Lm5vd3JhcHt3aGl0ZS1zcGFjZTpub3dyYXB9LmJyZWFrLXdvcmR7d29yZC13cmFwOmJyZWFrLXdvcmR9LmxpbmUtaGVpZ2h0LTF7bGluZS1oZWlnaHQ6MX0ubGluZS1oZWlnaHQtMntsaW5lLWhlaWdodDoxLjEyNX0ubGluZS1oZWlnaHQtM3tsaW5lLWhlaWdodDoxLjI1fS5saW5lLWhlaWdodC00e2xpbmUtaGVpZ2h0OjEuNX0ubGlzdC1zdHlsZS1ub25le2xpc3Qtc3R5bGU6bm9uZX0udW5kZXJsaW5le3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnRydW5jYXRle21heC13aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubGlzdC1yZXNldHtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZy1sZWZ0OjB9LmlubGluZXtkaXNwbGF5OmlubGluZX0uYmxvY2ssLnNlbS1idXR0b24tY2lyY2xlLC5zZW11aS10YWJzLGZpZ3VyZS5zZW11aS10aHVtYm5haWwsZmlndXJlLnNlbXVpLXRodW1ibmFpbCAuZmlnY2FwdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9ja30uYnVsbGV0LWlubGluZWxpc3QgbGksLmlubGluZS1ibG9jaywuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9ja30udGFibGV7ZGlzcGxheTp0YWJsZX0udGFibGUtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGx9Lm92ZXJmbG93LWhpZGRlbntvdmVyZmxvdzpoaWRkZW59Lm92ZXJmbG93LXNjcm9sbHtvdmVyZmxvdzpzY3JvbGx9Lm92ZXJmbG93LWF1dG97b3ZlcmZsb3c6YXV0b30uY2xlYXJmaXg6YWZ0ZXIsLmNsZWFyZml4OmJlZm9yZXtjb250ZW50OlwiIFwiO2Rpc3BsYXk6dGFibGV9LmNsZWFyZml4OmFmdGVye2NsZWFyOmJvdGh9LmxlZnR7ZmxvYXQ6bGVmdH0ucmlnaHR7ZmxvYXQ6cmlnaHR9LmZpdCwuc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne21heC13aWR0aDoxMDAlfS5tYXgtd2lkdGgtMXttYXgtd2lkdGg6MjRyZW19Lm1heC13aWR0aC0ye21heC13aWR0aDozMnJlbX0ubWF4LXdpZHRoLTN7bWF4LXdpZHRoOjQ4cmVtfS5tYXgtd2lkdGgtNHttYXgtd2lkdGg6NjRyZW19LmJvcmRlci1ib3h7Ym94LXNpemluZzpib3JkZXItYm94fS5hbGlnbi1iYXNlbGluZXt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX0uYWxpZ24tdG9we3ZlcnRpY2FsLWFsaWduOnRvcH0uYWxpZ24tbWlkZGxle3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uYWxpZ24tYm90dG9te3ZlcnRpY2FsLWFsaWduOmJvdHRvbX0ubTAsLnNlbS1idXR0b24tLWxpbmssLnNlbS1idXR0b24tLWxpbmtfcHJpbWFyeSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b24sZmlndXJlLGgxLGgyLGgzLGg0LGg1e21hcmdpbjowfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLm10MCwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye21hcmdpbi10b3A6MH0ubXIwe21hcmdpbi1yaWdodDowfS5tYjB7bWFyZ2luLWJvdHRvbTowfS5tbDB7bWFyZ2luLWxlZnQ6MH0ubXgwLC5zZW0tcGFnaW5hdGlvbi1uYXZ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MH0ubXkwe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Lm0xe21hcmdpbjouNXJlbX0ubXQxe21hcmdpbi10b3A6LjVyZW19Lm1yMXttYXJnaW4tcmlnaHQ6LjVyZW19Lm1iMXttYXJnaW4tYm90dG9tOi41cmVtfS5tbDF7bWFyZ2luLWxlZnQ6LjVyZW19Lm14MSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbnttYXJnaW4tbGVmdDouNXJlbTttYXJnaW4tcmlnaHQ6LjVyZW19Lm15MSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse21hcmdpbi10b3A6LjVyZW07bWFyZ2luLWJvdHRvbTouNXJlbX0ubTJ7bWFyZ2luOjFyZW19Lm10MnttYXJnaW4tdG9wOjFyZW19Lm1yMnttYXJnaW4tcmlnaHQ6MXJlbX0ubWIye21hcmdpbi1ib3R0b206MXJlbX0ubWwye21hcmdpbi1sZWZ0OjFyZW19Lm14MnttYXJnaW4tbGVmdDoxcmVtO21hcmdpbi1yaWdodDoxcmVtfS5teTJ7bWFyZ2luLXRvcDoxcmVtO21hcmdpbi1ib3R0b206MXJlbX0ubTN7bWFyZ2luOjJyZW19Lm10M3ttYXJnaW4tdG9wOjJyZW19Lm1yM3ttYXJnaW4tcmlnaHQ6MnJlbX0ubWIze21hcmdpbi1ib3R0b206MnJlbX0ubWwzLC5zZW0tY29sb3JsaXN0LS1jb250YWluZXJ7bWFyZ2luLWxlZnQ6MnJlbX0ubXgze21hcmdpbi1sZWZ0OjJyZW07bWFyZ2luLXJpZ2h0OjJyZW19Lm15M3ttYXJnaW4tdG9wOjJyZW07bWFyZ2luLWJvdHRvbToycmVtfS5tNHttYXJnaW46NHJlbX0ubXQ0e21hcmdpbi10b3A6NHJlbX0ubXI0e21hcmdpbi1yaWdodDo0cmVtfS5tYjR7bWFyZ2luLWJvdHRvbTo0cmVtfS5tbDR7bWFyZ2luLWxlZnQ6NHJlbX0ubXg0e21hcmdpbi1sZWZ0OjRyZW07bWFyZ2luLXJpZ2h0OjRyZW19Lm15NHttYXJnaW4tdG9wOjRyZW07bWFyZ2luLWJvdHRvbTo0cmVtfS5teG4xe21hcmdpbi1sZWZ0Oi0uNXJlbTttYXJnaW4tcmlnaHQ6LS41cmVtfS5teG4ye21hcmdpbi1sZWZ0Oi0xcmVtO21hcmdpbi1yaWdodDotMXJlbX0ubXhuM3ttYXJnaW4tbGVmdDotMnJlbTttYXJnaW4tcmlnaHQ6LTJyZW19Lm14bjR7bWFyZ2luLWxlZnQ6LTRyZW07bWFyZ2luLXJpZ2h0Oi00cmVtfS5tbC1hdXRve21hcmdpbi1sZWZ0OmF1dG99Lm1yLWF1dG97bWFyZ2luLXJpZ2h0OmF1dG99Lm14LWF1dG97bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30uYnJvd3Nlci1jb250YWluZXIsLnAwLC5zZW0tYnV0dG9uLS1saW5rLC5zZW0tYnV0dG9uLS1saW5rX3ByaW1hcnksZmlndXJlLGgxLGgyLGgzLGg0LGg1e3BhZGRpbmc6MH0ucHQwe3BhZGRpbmctdG9wOjB9LnByMHtwYWRkaW5nLXJpZ2h0OjB9LnBiMHtwYWRkaW5nLWJvdHRvbTowfS5wbDB7cGFkZGluZy1sZWZ0OjB9LnB4MHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjB9LnB5MCwuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLm5vLXBhZGRpbmd7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5jb3JuZXIsLnAxLC5zZW0tYnRuLWZhYi0tZGVmYXVsdCwuc2VtLWJ0bi1mYWItLXByaW1hcnksLnNlbS1idG4tZmFiLS1zZWNvbmRhcnksLnNlbS1idXR0b24tLWxhcmdlLC5zZW0tY29sb3ItbGlzdCBsaSwuc2VtLXNlY3Rpb24tLWNvcm5lcntwYWRkaW5nOi41cmVtfS5wdDF7cGFkZGluZy10b3A6LjVyZW19LnByMSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse3BhZGRpbmctcmlnaHQ6LjVyZW19LnBiMXtwYWRkaW5nLWJvdHRvbTouNXJlbX0ucGwxLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7cGFkZGluZy1sZWZ0Oi41cmVtfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLnB5MSwuc2VtLWJ1dHRvbi0tcHJpbWFyeSwuc2VtLWJ1dHRvbi0tc2Vjb25kYXJ5LC5zaWRlYmFyLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLnNpZGViYXItY29udGFpbmVyLS1mb290ZXIsLnNpZGViYXItY29udGFpbmVyLS1oZWFkZXIsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3BhZGRpbmctdG9wOi41cmVtO3BhZGRpbmctYm90dG9tOi41cmVtfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0taGVhZGVyLC5weDEsLnNpZGViYXItY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuc2lkZWJhci1jb250YWluZXItLWhlYWRlcntwYWRkaW5nLWxlZnQ6LjVyZW07cGFkZGluZy1yaWdodDouNXJlbX0ucDJ7cGFkZGluZzoxcmVtfS5wdDJ7cGFkZGluZy10b3A6MXJlbX0ucHIye3BhZGRpbmctcmlnaHQ6MXJlbX0ucGIye3BhZGRpbmctYm90dG9tOjFyZW19LnBsMntwYWRkaW5nLWxlZnQ6MXJlbX0ucHkye3BhZGRpbmctdG9wOjFyZW07cGFkZGluZy1ib3R0b206MXJlbX0uYnVsbGV0LWlubGluZWxpc3QgbGksLmRpYWxvZy1jb250YWluZXItLWZvb3RlciwucHgyLC5zZW0tY29sb3ItbGlzdCBsaSwuc2VtLXVsIC5zZW0tbGksLnNlbS11bC1pY29uLWxpc3QgLnNlbS1saSwuc2lkZWJhci1jb250YWluZXItLWZvb3RlcixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257cGFkZGluZy1sZWZ0OjFyZW07cGFkZGluZy1yaWdodDoxcmVtfS5wM3twYWRkaW5nOjJyZW19LnB0M3twYWRkaW5nLXRvcDoycmVtfS5wcjN7cGFkZGluZy1yaWdodDoycmVtfS5wYjN7cGFkZGluZy1ib3R0b206MnJlbX0ucGwze3BhZGRpbmctbGVmdDoycmVtfS5weTN7cGFkZGluZy10b3A6MnJlbTtwYWRkaW5nLWJvdHRvbToycmVtfS5weDMsLnNlbS1idXR0b24tLXByaW1hcnksLnNlbS1idXR0b24tLXNlY29uZGFyeXtwYWRkaW5nLWxlZnQ6MnJlbTtwYWRkaW5nLXJpZ2h0OjJyZW19LnA0e3BhZGRpbmc6NHJlbX0ucHQ0e3BhZGRpbmctdG9wOjRyZW19LnByNHtwYWRkaW5nLXJpZ2h0OjRyZW19LnBiNHtwYWRkaW5nLWJvdHRvbTo0cmVtfS5wbDR7cGFkZGluZy1sZWZ0OjRyZW19LnB5NHtwYWRkaW5nLXRvcDo0cmVtO3BhZGRpbmctYm90dG9tOjRyZW19LnB4NHtwYWRkaW5nLWxlZnQ6NHJlbTtwYWRkaW5nLXJpZ2h0OjRyZW19LmNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY29sLTF7d2lkdGg6OC4zMzMzMyV9LmNvbC0ye3dpZHRoOjE2LjY2NjY3JX0uY29sLTN7d2lkdGg6MjUlfS5jb2wtNHt3aWR0aDozMy4zMzMzMyV9LmNvbC01e3dpZHRoOjQxLjY2NjY3JX0uY29sLTZ7d2lkdGg6NTAlfS5jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LmNvbC04e3dpZHRoOjY2LjY2NjY3JX0uY29sLTl7d2lkdGg6NzUlfS5jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5jb2wtMTJ7d2lkdGg6MTAwJX0uZmxleCwuc2VtLWNvbG9yLXN3YXRjaGVzLC5zZW0tcGFnaW5hdGlvbi1uYXZ7ZGlzcGxheTpmbGV4fUBtZWRpYSAobWluLXdpZHRoOjQwZW0pey5zbS1jb2x7ZmxvYXQ6bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNtLWNvbC1yaWdodHtmbG9hdDpyaWdodDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNtLWNvbC0xe3dpZHRoOjguMzMzMzMlfS5zbS1jb2wtMnt3aWR0aDoxNi42NjY2NyV9LnNtLWNvbC0ze3dpZHRoOjI1JX0uc20tY29sLTR7d2lkdGg6MzMuMzMzMzMlfS5zbS1jb2wtNXt3aWR0aDo0MS42NjY2NyV9LnNtLWNvbC02e3dpZHRoOjUwJX0uc20tY29sLTd7d2lkdGg6NTguMzMzMzMlfS5zbS1jb2wtOHt3aWR0aDo2Ni42NjY2NyV9LnNtLWNvbC05e3dpZHRoOjc1JX0uc20tY29sLTEwe3dpZHRoOjgzLjMzMzMzJX0uc20tY29sLTExe3dpZHRoOjkxLjY2NjY3JX0uc20tY29sLTEye3dpZHRoOjEwMCV9LnNtLWZsZXh7ZGlzcGxheTpmbGV4fX1AbWVkaWEgKG1pbi13aWR0aDo1MmVtKXsubWQtY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5tZC1jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5tZC1jb2wtMXt3aWR0aDo4LjMzMzMzJX0ubWQtY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5tZC1jb2wtM3t3aWR0aDoyNSV9Lm1kLWNvbC00e3dpZHRoOjMzLjMzMzMzJX0ubWQtY29sLTV7d2lkdGg6NDEuNjY2NjclfS5tZC1jb2wtNnt3aWR0aDo1MCV9Lm1kLWNvbC03e3dpZHRoOjU4LjMzMzMzJX0ubWQtY29sLTh7d2lkdGg6NjYuNjY2NjclfS5tZC1jb2wtOXt3aWR0aDo3NSV9Lm1kLWNvbC0xMHt3aWR0aDo4My4zMzMzMyV9Lm1kLWNvbC0xMXt3aWR0aDo5MS42NjY2NyV9Lm1kLWNvbC0xMnt3aWR0aDoxMDAlfS5tZC1mbGV4e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6NjRlbSl7LmxnLWNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGctY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGctY29sLTF7d2lkdGg6OC4zMzMzMyV9LmxnLWNvbC0ye3dpZHRoOjE2LjY2NjY3JX0ubGctY29sLTN7d2lkdGg6MjUlfS5sZy1jb2wtNHt3aWR0aDozMy4zMzMzMyV9LmxnLWNvbC01e3dpZHRoOjQxLjY2NjY3JX0ubGctY29sLTZ7d2lkdGg6NTAlfS5sZy1jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LmxnLWNvbC04e3dpZHRoOjY2LjY2NjY3JX0ubGctY29sLTl7d2lkdGg6NzUlfS5sZy1jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5sZy1jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5sZy1jb2wtMTJ7d2lkdGg6MTAwJX0ubGctZmxleHtkaXNwbGF5OmZsZXh9LmxnLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19LmZsZXgtY29sdW1ue2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uZmxleC13cmFwe2ZsZXgtd3JhcDp3cmFwfS5pdGVtcy1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5pdGVtcy1lbmR7YWxpZ24taXRlbXM6ZmxleC1lbmR9Lml0ZW1zLWNlbnRlcnthbGlnbi1pdGVtczpjZW50ZXJ9Lml0ZW1zLWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lfS5pdGVtcy1zdHJldGNoe2FsaWduLWl0ZW1zOnN0cmV0Y2h9LnNlbGYtc3RhcnR7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5zZWxmLWVuZHthbGlnbi1zZWxmOmZsZXgtZW5kfS5zZWxmLWNlbnRlcnthbGlnbi1zZWxmOmNlbnRlcn0uc2VsZi1iYXNlbGluZXthbGlnbi1zZWxmOmJhc2VsaW5lfS5zZWxmLXN0cmV0Y2h7YWxpZ24tc2VsZjpzdHJldGNofS5qdXN0aWZ5LXN0YXJ0e2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5qdXN0aWZ5LWVuZHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lmp1c3RpZnktY2VudGVye2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lmp1c3RpZnktYmV0d2VlbntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uanVzdGlmeS1hcm91bmR7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdGFydHthbGlnbi1jb250ZW50OmZsZXgtc3RhcnR9LmNvbnRlbnQtZW5ke2FsaWduLWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRlbnQtY2VudGVye2FsaWduLWNvbnRlbnQ6Y2VudGVyfS5jb250ZW50LWJldHdlZW57YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVufS5jb250ZW50LWFyb3VuZHthbGlnbi1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdHJldGNoe2FsaWduLWNvbnRlbnQ6c3RyZXRjaH0uZmxleC1hdXRve2ZsZXg6MSAxIGF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowfS5mbGV4LW5vbmV7ZmxleDpub25lfS5vcmRlci0we29yZGVyOjB9Lm9yZGVyLTF7b3JkZXI6MX0ub3JkZXItMntvcmRlcjoyfS5vcmRlci0ze29yZGVyOjN9Lm9yZGVyLWxhc3R7b3JkZXI6OTk5OTl9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLC5jb2xvci1waWNrZXIgLnNhdHVyYXRpb24tbGlnaHRuZXNzLC5yZWxhdGl2ZSwuc2VtLWNvbG9yLWxpc3QgbGksZmlndXJlLnNlbXVpLXRodW1ibmFpbCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIC5maWdjYXB0aW9uLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0uYWJzb2x1dGUsLmJ1bGxldC1pbmxpbmVsaXN0IGxpOjphZnRlciwuYnVsbGV0LWlubGluZWxpc3QgbGk6OmJlZm9yZSwuY29sb3ItcGlja2VyLC5zZW0tYnV0dG9uLWNpcmNsZSwuc2VtLWNvbG9yLWxpc3QgbGkgLmNvbG9yLWRlbGV0ZSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVyLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9uLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntwb3NpdGlvbjphYnNvbHV0ZX0uZml4ZWR7cG9zaXRpb246Zml4ZWR9LmRpYWxvZy1jb250YWluZXItZnVsbCwuc2VtLWNvbG9yLWxpc3QgbGkgLmNvbG9yLWRlbGV0ZSwudG9wLTAsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBidXR0b257dG9wOjB9LnJpZ2h0LTAsLnNlbS1jb2xvci1saXN0IGxpIC5jb2xvci1kZWxldGUsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBidXR0b257cmlnaHQ6MH0uYm90dG9tLTAsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue2JvdHRvbTowfS5sZWZ0LTAsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOjphZnRlcntsZWZ0OjB9Lnoxe3otaW5kZXg6MX0uejJ7ei1pbmRleDoyfS56M3t6LWluZGV4OjN9Lno0e3otaW5kZXg6NH0uYm9yZGVye2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4fS5ib3JkZXItdG9we2JvcmRlci10b3Atc3R5bGU6c29saWQ7Ym9yZGVyLXRvcC13aWR0aDoxcHh9LmJvcmRlci1yaWdodHtib3JkZXItcmlnaHQtc3R5bGU6c29saWQ7Ym9yZGVyLXJpZ2h0LXdpZHRoOjFweH0uYm9yZGVyLWJvdHRvbXtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20td2lkdGg6MXB4fS5ib3JkZXItbGVmdHtib3JkZXItbGVmdC1zdHlsZTpzb2xpZDtib3JkZXItbGVmdC13aWR0aDoxcHh9LmJvcmRlci1ub25le2JvcmRlcjowfS5yb3VuZGVke2JvcmRlci1yYWRpdXM6M3B4fS5jaXJjbGUsLnNlbS1hdmF0YXIgLnNlbS1hdmF0YXJfX2ltZ3tib3JkZXItcmFkaXVzOjUwJX0ucm91bmRlZC10b3B7Ym9yZGVyLXJhZGl1czozcHggM3B4IDAgMH0ucm91bmRlZC1yaWdodHtib3JkZXItcmFkaXVzOjAgM3B4IDNweCAwfS5yb3VuZGVkLWJvdHRvbXtib3JkZXItcmFkaXVzOjAgMCAzcHggM3B4fS5yb3VuZGVkLWxlZnR7Ym9yZGVyLXJhZGl1czozcHggMCAwIDNweH0ubm90LXJvdW5kZWR7Ym9yZGVyLXJhZGl1czowfS5oaWRle3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtoZWlnaHQ6MXB4O3dpZHRoOjFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDFweCwxcHgsMXB4LDFweCl9QG1lZGlhIChtYXgtd2lkdGg6NDBlbSl7LnhzLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6NDBlbSkgYW5kIChtYXgtd2lkdGg6NTJlbSl7LnNtLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6NTJlbSkgYW5kIChtYXgtd2lkdGg6NjRlbSl7Lm1kLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19LmRpc3BsYXktbm9uZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5zaWRlYmFyLWNvbnRhaW5lcntib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt0cmFuc2l0aW9uOi4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uc2lkZWJhci1jb250YWluZXItZnVsbHtoZWlnaHQ6MTAwJX0uc2lkZWJhci1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjAgMTJweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tYm9keSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2Vke2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVye2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1jb2xvci1zd2F0Y2hlc3tmbGV4LXdyYXA6bm93cmFwfS5zZW0tY29sb3Itc3dhdGNoZXNfY3VycmVudHtmbGV4LWdyb3c6MX0uc2VtLWNvbG9yLXN3YXRjaGVzX2N1cnJlbnQgYnV0dG9ue21hcmdpbi10b3A6MTBweH0uc2VtLWNvbG9yLXN3YXRjaGVzX3ByZXNlbGVjdGVke21hcmdpbi10b3A6MTNweDttYXJnaW4tbGVmdDotMTBweDttYXJnaW4tYm90dG9tOjA7ZmxleC1ncm93OjE7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC13cmFwOndyYXA7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDo2N3B4fS5zZWN0aW9uLWxpc3R7b3ZlcmZsb3c6c2Nyb2xsO2hlaWdodDo4NCV9LnNlY3Rpb24tY29udGFpbmVye2JvcmRlcjoxcHggc29saWQgZ3JleTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9LnNlY3Rpb25zLXNlYXJjaHtoZWlnaHQ6MTYlO2JhY2tncm91bmQtY29sb3I6Z3JleX0uc2lkZWJhci1kaWFsb2d7d2lkdGg6MTQyJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtoZWlnaHQ6MTAwJX1maWd1cmUuc2VtdWktdGh1bWJuYWlse3dpZHRoOjEwMCU7bWluLWhlaWdodDo0NXB4fWZpZ3VyZS5zZW11aS10aHVtYm5haWwgaW1ne2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX1maWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO21pbi1oZWlnaHQ6NDRweH0uc2VtdWktY2FyZC1mb290ZXJ7Y29sb3I6I2ZmZjt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjojMmEyYTJhfS5zZW11aS1oZWFkZXItc2VjdGlvbntwYWRkaW5nOjIlIDIlIDA7ZGlzcGxheTpibG9ja30uc2VtdWktaGVhZGVyLXNlY3Rpb24ubGFyZ2V7cGFkZGluZzozJSAyJSAwfS5zZW11aS1oZWFkZXItc2VjdGlvbi5zbWFsbHtwYWRkaW5nOjElIC41JSAwfS5zZW11aS1mb290ZXItc2VjdGlvbntwYWRkaW5nOjAgMiUgMiU7ZGlzcGxheTpibG9ja30uc2VtdWktZm9vdGVyLXNlY3Rpb24ubGFyZ2V7cGFkZGluZzowIDIlIDMlfS5zZW11aS1mb290ZXItc2VjdGlvbi5zbWFsbHtwYWRkaW5nOjAgLjUlIDElfS5idXR0b24tc2VuZDpiZWZvcmV7Y29sb3I6I2ZmZn0uc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIC5zdWZpeHt0b3A6LTRweDtyaWdodDo0cHh9LmNvbG9yLXBpY2tlcnttYXJnaW46MCBhdXRvO2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3otaW5kZXg6MTAwMDAwO3dpZHRoOjIxMHB4O2hlaWdodDphdXRvO2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmNvbG9yLXBpY2tlciAuY3Vyc29ye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyOjJweCBzb2xpZCAjMjIyO2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpkZWZhdWx0fS5jb2xvci1waWNrZXIgLmh1ZS1hbHBoYXttYXJnaW4tYm90dG9tOjNweH0uY29sb3ItcGlja2VyIC5odWV7d2lkdGg6MTAwJTtoZWlnaHQ6MTZweDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBUUNBWUFBQUQwNklZbkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0QUlXRHdrVUZXYkNDQUFBQUZ4SlJFRlVhTjd0MGtFS2cwQVFBTUUyeDgzL24ycXU1cUNnRDFpRGhDb1lkcG5iUUM5YmJZMXFWTy9qdmM2azNhZDkxczcvN0YxL2NzZ1BydWp1UTE3QkRZU0ZzQkFXd2dKaElTeUVCY0pDV0FnTGhJV3dFQllJaTJmN0FyLzFUQ2dGSDJYOUFBQUFBRWxGVGtTdVFtQ0MpfS5jb2xvci1waWNrZXIgLmFscGhhe3dpZHRoOjEwMCU7aGVpZ2h0OjE2cHg7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQVFDQVlBQUFEMDZJWW5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINEFJV0R3WVFsWk1hM2dBQUFXVkpSRUZVYU43dG1FR082akFRUkNzT0FySGdCcHlBSllHamNHb2N4QW00QTJJSHBtb1dFMGVCSCtlem1GbE52VTA2c2hKM1c2VkVlbFdNVVFBSUlGOWY2cVpwaW1zQTFMWXRTMnVGNTEvdTI3WVZBRlpWUlVrRW9HSGRQVi9zSWNiSUVJSWtVZEkvOVhhN25leXY2MStTV0ZVVkFWQ1NjdDAwVFduMmZ2NnUzK0VjZmQzdFh6eS8wK25FVXUrU1Bqby9rcXpybWlRcFNjTjZ2OThYZXdmQTgvbE1raUxKMld4R1NVb3BjVDZmTTZVME5YOS9mcmZiamV2MVd0ZnJsWmZMaFlmRFFRSEcvQUlPbG5Hd2pJTmxIQ3hqSEN6allKbS9USldkQ3dxdUpYc2VGRnpHd0ROTmVpS01PSlRPOHhRZERRYWVCMjkrSzllZmVMYUJvOUo3dmR2dEpqMVJqRkZqZml2N3F2OTV0angvN2xlU1FnaDkzZTFmZk1lSXA2TytZUWpoby9ONzkxdDFYVk9TU0k3Ti8vSys0L0dveFdMQngrUEI1L09wNVhMSisvM09sSkpXcXhVM204M292djVpR2Y4S2pZTmxIQ3hqSEN6allCa0h5NWdmNWd1c3ZRVTdVMzdqVEFBQUFBQkpSVTVFcmtKZ2dnPT0pfS5jb2xvci1waWNrZXIgLnNhdHVyYXRpb24tbGlnaHRuZXNze3dpZHRoOjEwMCU7aGVpZ2h0OjEzMHB4O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPWUFBQUNDQ0FZQUFBQlNEN1QzQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRBSVdEd2tzUFdSNmxnQUFJQUJKUkVGVWVOcnRuVnVUNDdnUnJBSE4rUC8vT3IvNjFZNXdPTlo3bVoxdTNYQWVMTWpKWkdaVmdkS3NmYzV4UjNTMFJJSVVXK0NIekNwYzJNY1lvN1hHdjNleDdVaVpkNTdyanl6enYrdiszM1gvUi8rM3IvZjd2UjM4NlkrVHZLTmNmL3dkaFRMUGN2OXFVMndaZDc0dXRoMHQxODIxamtJWkxQY3NJLzZuV2E0WHZ1dHF1VTBaODVtbng4MFMvWnpncG5Mbk90SE50Ny9vZngxVEtYY1NOek4vN3FiTVEzanU3ck5RbU1ZWWQvNHMyajlhYStQK2dHYU1jWnJiMU0vdGRydmY3L2Qydjk5UDkvdDkzTy8zY2J2ZHh1MTJHOWZyZFZ3dWwzRStuOGMvLy9uUCsyKy8vWGI2NmFlZnhsLy8rdGZ4NXovLzJZSzVBbDJyZ3ZmNFVzYnBkR3JCNTJiQXZBclhwdXpqbWlxQVZTR3o1ZURtR1lYemhiQVptQ3JubXpkZHBVVSs4WTFkQU9ZZVhDdERVd1Z3VjdZQ0dINnVBbXlNY1o5bDV2a1VhQlBHTVVaNy9KNXcvNzkyL2Z2djlYcTkzMjYzZHIvZlR4UEVDZU1FOG5LNWpNL1B6L0hUVHovZHYzMzdkdnJsbDEvR1AvN3hqL0czdi8xdC9PVXZmd2tWc3dvbmdqZE9wOVB6SDNVM0Qzem1XR25aVlhuNGpDcXM3d0MyQktQNC84dEF6a1pzb1d4NlhycWVIWnltdnA0QUJDQkpoVFF3S2ZEVDhnenJaQ0lxaTVBaGlBQ2pCZkVCMnJQOC9YNjNNTTdmNi9WNnY5L3Y3WGE3YllDODNXN2pjcmxzVkhJcTVmZnYzMCsvL2ZiYitPV1hYOFpQUC8wMC92NzN2NCtmZi83NUpTdmJldStiTDJXTU1hRmJBbHBCTk04NVFYK2N0NnFvU3FrUEF3dVFsQlZLcUdORlNVT0FBM0JtdTdnQzVoTk9kMTVuU3d2QU9VVzdDNGdpVUNWOFNnbjVMOWhORklxVHNwMEd4STB5c2lveWpBamtZL3RHSlZFcHorZnorT1dYWCs3ZnYzOC8vZjc3NytQYnQyL2oxMTkvSFQvLy9QUDQ5ZGRmeDhmSFJ3cm1UalY3NzlFWHUycHgyeGhqd3RkSlpRY0FXUUlQTFBJU3NNSmFTd2lEOGd6SUtyd1N5QVRFNWo1bkFiUjVjMWRCVXdCbHNFV1cwaDZMcWlZc3FGUEFReEN5Ulozd09TQVJ4bWxYTVg1azY0cFFmdnYyN2Y3NStkaytQajVPSHg4ZjQvdjM3K1BidDIvanQ5OStHOSsrZlJzZkh4L2pjcm1VRkxPMzFnWURXYmx4UklzL1RxZlQ3b3VzeEpzQXhYQTJHYzdUQTlYZGdmZG9IYkZzajc2WDIrMVdBcmdJMWFnZUd3QTNxdXBxb0hzbWNiSTZGdTkzcXVnZ0ZhOWQ3TGVEdGdLZkFGSEJKK05FQnlJa2NKNUtlcnZkVG1oaEdjZ0pKU1o1dm4vL2ZqK2Z6KzE4UHA4K1B6L0g1K2ZubUdEKy92dnY0L3YzNytQajQyTjhmbjZPMisxV3M3SmpqUDZ3cmFNSTVFNFJaOHgydlY1VFN3a3F1b3RWNy9kN1R6NkhGV3NEL3FOY2R3MENRM3EvMzIxYzY4NlR3RFZJZGJ1eTczek5sZGhTSGI4STJrbFp6bm0rSW5CUzRVNm4wMzAyYUJGc0xoSERBS0pWSlZnbGZJOWpodnU1M1c1M3NMQU5ZTnhBaURBNk1DZVVIeDhmOSt2MTJpNlhTN3RjTHFjWlc1N1A1eWVZOC9mejgzT2N6K2Zuc1NtWVV5a25XRUc4NVdCc3Q5c3R6U0x5TWRmcjlRaTA4aVkxNVVaMExsREdMaFIzbzV6SzJqN09QVVREMEUrblUzdGs3WGIvMTZORmJobG9BTXVZMXpqTFVPTzNCS2VJRGUrWjhzMy9KNGdGbzRUTTVqUG11UmcyOGZvVUtLVlN3bzE2VGdBNW5weXdjV0xIZ1lsL1B6OC83My82MDUvYWI3LzkxbTYzVzd0Y0xpZTBzWmo0bWFvNWdUeWZ6ODhFMGYxK2o4RWNZendUUEVHMmNxanlmSE5GME04ZnVxRWlhT1ZuUnpaWlFOaDVmd1F5SGcvSERHZkpvODlRMXpiL3F1dTVYQzY3NzNJMlhLZlRxZC92OStkM3d1cVd2YS9ZVGRVZEVWM2ZoSXYvVml5cHM2WUUzeDNyNDNLNWJKUVM2NnpheFZHRnN2ZCsvL2o0YUYrL2ZtM2Z2Mzl2dDl1dGZmMzZ0ZjMrKysvdGRydWR2bjM3WnVOTEJhYUNNZ1V6QytyWlJpRm93eFV1Skk4WU1xY0NwOU9wcTV2YWdhWVU2bEdKQTFYUXFlamNodzZDajBHdzVuWUJyR3cwMUEyTzIwNm4wNEJHb3VOTnlUZnAvRndFbGhVZXk2blhySUt3N1FRV2RkeHVOMmxkTDVmTDgzOWdTUEY4YWh1L0p2Qk80OENQU3VxTWY4VnA5L1A1M0w1OCtkTHU5M3M3bjgvdGZyOC8zOS92OS9iNStUa2hQSjNQNTZtUTQzNi9qKy9mdisvaVNnYnplcjArQVp4LzUrODhidjZPTWRhNlM1ejZrZDIxZllDOWR4djdjSUpKMmQ5QU9TMzBmUE16eUhpVE04QjRERjZYVWxZSHA0S1FXM1crMXQ3N01OQjF2R0h4V3E3WGE3dmY3OCt5NS9ONUErSDFldDI5eHVQNWRiWXR5YVJ1NEFrc2JQcTY5MzZmalJ6WFJ4QmJQci9iK2IxOCtmS2xqVEhhQkJCZm44L24wLzErSDErK2ZCbm44em0wc0I4Zkg1dTRjcjVHdUJoTVZrMEVFbjlSc2N0Z1ZoTStpeGxKdE1BMjNSOEI2eXlzQXN0Qk9nRlhJS0tDTUlnVG9NcU5FdTJmWU1IN3p0YzczMmRRS2tDajF5dEFadFkwS3g4cElyOEdHSitBVDNWKzJIaXJobCsrZkJtWHkyV3o3M3crYjE3UDhwK2ZuOC90VXdHVmxlVmtUeVViNjhEa2ZheVdZNHp4TlJpaFU0RXBMSlBaVnJLK3U3SjQvbWdmS3FlTFc5WDJSRVdsSXRMMWRpeW5iRERiMytqWGdZalFxbjBycnhXYytOa0lMUDdGN3hJYk12eDd2VjUzeDQweG5sYldKRjEyWlNhZy9OMHBXNnQrWnptT016SGphakt3RGZvbmQ3OHpZVGRmcTE4dXA5N3pyMnE4djNJaW9CcHJSdEJsMEVaOW9nNVdCUkdPZE9IaklqWEY3VW90RmJnT1duWHpJSnl6WXZqRzVJWWdzbU1PeEhrejhPc01TclZOV2VxNVQ4RGFPY2JFdjFPZDVyYnM5YU83WXZNZXQ2M0VrRisrZk1FeHErTVJsNC9MNWJMWk4vK2V6K2ZuWjZLYXp1TXFYU1FWTzVzcEpYZmxIQUl6ZXMveEpzZWNrUkppRE1vZzlkNlZmUnJxWE1yNktwVlYyN2pSd0phY0dvdk9BTTF6TWRRTW53SzFBdWJLNjNrZENDaHZJMUM3ZzB6OW5mL0QrWHplMlZqOEg3R3g0UDlkdVFsc1lDcnF5TjhYcUczSG0vMTBPajNqdy9uK2NybHN0dU0ralBtbXhUMmRUdVB6ODNQenQycG4xWHNFSFgvYm5QYVZxVm1oMHh3T3QwbzZYTExBSGVQVVUyMDN3SGZjcnNwQ3dtVjNUcnlCNXMwTXNlZWc5N3gvQnd6Q2pCbGJCK3BSQVBsYTBCVlF1VDZWNlFIZEJsajNkMEtHMTQ3YitEcXhRZVV5bURPNDNXNGRRYXIrVElqd21BZDB6OC9oNjV2ZjAveUx2M1BiNVhMcHJ1L3lkRG85czdFVDBJK1BqNmRLSzlWVUVJZUtXUVdQQU9ySjhMS2Q0dkUrdDkxWTNlN1VGbFdhdGcyVndKbmIrSFBtdHZtL3NmSzU5L09hV0YzeC9lUDFVUEh2QTVERFlEcFlYZmIwZHJ2MVYyRGtCa3h0dy90RVdWVmxYV2RDOXBGWXM1L2pmaDlkUy8xNnZXN3M2bFRHK1RmcXN4U0pIeGtYWHEvWGRyMWV1NExzZkQ2UDN2c1QzTjc3RGtMK3pQbTVqU2RLTDR6UjNBeFFkNnJIa0xrWWxTb3dzcnE3em56dTZ3U3dkc01KT1htQTVmQmNqeHRnTUdCWUhscjV6b2todHNNQ1RnWExRT1c0WEM2ZEV5RU1wckw4bUFRelhSZ2R1aXgyeVp6b3J4a1lzRG4zaEIxVmVNTEdzWHNWdGdsMnBXOFMzc3ZrMHZ3N1I0aE5hSHZ2NGNBQ2w1SEZ6d0lIMEtjNnp1NFhqRFBSL2pwQVZ4V3pPMVhrMkREYjN2VGN4ZUdVMWlXWkhrbUlEV3ppV0t2aXJDSjREcmF2czZJSi9HRzZjVHFXZFhEeStmQXJRRFZWa0xxa1ZqQW9aSUlUZG1tSXFYd3FhOTVOMytNR1lvWlFkUlZOTzUzWTF4UmtoTzE2dlk3ZXU1MDdDYTlsSm5iR3B4T2VtUWhTdy9BUXNtbXA1elU5QmlVOEc2d3ZYNzZNNi9VNlBqNCtkbzBCejRDcGdpa25UVWVEcXdsS0JtZzN1NE9WanJaMUErckFjZ2FlaldxNmVKQ3ZDWUZET05Td09nSFg0RVFSdzhseGJ6RE9kRUs2Z1ozSGsxYis4ZzJvMUpGdEtYeXYvZkVkVFh1V2pXWGRBWmlCcDZBRGVEckNGaWltN0I2WkZuZWVJN0d2bS9QTWtVRFg2N1c3eEk4YjBENy92OGRBOXFmTjVvYUNmNzRXWmpIMG1mMWNtZlkxWTBKVUZtVnJUV3U4dXprTmNMdEVqN3U1RlhCVGtmQzZHT0E1cThZTXhPOEtWdkY2c0FWR2RjclVic0tPRGNRS2tMTU9NZG1seHVtNjQyWXJQbTI2QWxoWlcxWUIxUityckdzd0U4VGFZQVdlVU14ZGYrV2p3U3ZaMkVmM3l0T3lmbjUrUHBWUEFhcU9uNDNNdE5CcXZtamp4YmpNNGxaalpZNGdxTk1JNWt0YVcvc1lLTndTKzlsRlF6R2lobU1DS1BhNytaMFY2RWIwR1Jtb2J0cFg4SmxqV3U1Rk1MTjVqYTZoRzlrd1FnWnFmNSsxTkg1VXh6a0ZSZUNkV2hKOFhkbEdVa3hPN0hSbFlSbTRtVk80M1c3dGVyMTJUUEpFdy9ybUVOM0w1U0tISVdaZzlteitwVW9LT1lxNWJKVEpkWDJnbWUxVWN4TVpRRmFFUUlsSGN0MzJNK1kxQnpHa0d1emZpeUFOOXordWdwbFoxc3ltQ3JEQ1lZa0d4RFRwSTlSekJ5MHJIeWVEVUMxbldhZVVhRDluNHhrTnlZTUJEWnR6WjNCKytmSmxZMjFYRkRPY0FSSmxhYk95aVMzdUNwTEk5anJaakNEa2FWdmNDQ2p3b2duS1NoV2R6WFpXbFpNdlZUZ0Q4THBxbENMcnFnYmNCK3FZd3JnS1lwVDBjY0NxYkt5Q1ZhbGtFYWJuL0Z5bm9nQ3JQS2ZxZjUxeEo3c0dCMlpYY1pteG9TT3p0angzMDBEWmk3YTAvMkFJUjBVbEJhZzlTdUR3NktjQXpsYUI3dkhadldwaks5MGR5cnE2Ykt5RFVaUWJSMEIwNWJpTFFrSEljU1VtZ0lLK1N3dXFnSENub2lvMlJRVTF5aitCbkJ5OXBwaFZLTEd5QzdaekZLMXB4V0srRThJaFZDV0xOL3VMdG5VVTRheW9ZTG9hQU56OEZkdGFTdlk0cFYwQkVXMmxzNjFjenFsbEJLcFR5S2dNQWhyWjFjZGMxUlJPdFBtdldOa2RjS1o3Wkt4YVdqaVBMSk1wcDdPWkt4QStycUcvb0pManhmMHBuSmxxTG9EWm8zZ3lVMG1LR3lzMnRhS2Vjai9kMUMrckpTcGxCcWxUeUFxZ1IrRDhLaktsbVJMMmd0VWNBZEN0c0wraWpDTlQxb3FxcWtIMk9IRWJHNXNERm5VZzVBYSt5TG91MlZVMXB0ajFTMlpRcXYxT1JaTjlJV3pSZmdhUkJ4S29CRThVV3lxbEpGdHJJYzBBeE5qU2plZDk5Q1RZL1hEZlN6Q3o1TTBJWm9WRXNXblBGTlRzbDhvb1ZDMVR6YkdncUZaTkRTZ1Z3S0srMXNHRE1LcXhaQ1dHVk1EeXNpRXIxalZTUUpVWXdqNWlIT2xUaGRIdDQ0U1FnOUNOK25sOEQ5ME5NSWdBZGdyNDZKcVJpUjlJOHZSZEZ2YnIxN20veXhVTUtqTkxNaVZVQUR3dTJDV0doaGkrRjU1VFdNOU05Y29nem1zMWRuTTR1T0YvTEFFWVdkY3FuTTd5Rm15cTNJZndtT1JPZDdZMWlGV3RPam9ZOFRvNDFtVFY1SXlzZ0ZGdVJ6c2JXRkdiTklJSkNEdjFkT280bFpHN2pXQndSRnRWVEt1V3llQ0J5SktPYW44b1ozZXA5WGRkTmwwdER1YXl3THo5Y1hQWWVEQUEwU3BrQk85c2JWY1RPVldsZFB2NHV5ekVrenhIdGp2b25Ib1NrRkVXTm9vMWQ4RGhjUXB1dGQycHBOb240QnpvQWlKMWhCRlFnMGRWdGRiR0hIRFFXdXNobU5FUXVrTE0yUU8xRzJZOGJnVFhxRmhjQkpqN0VqUGdjUHRzOFVTOHFQcFBCL2RYem5PaDVaNDM4dHpINWVjNlFnck9LclJSZktteXNCbVVEQitQaFlhYk1sVlBFUitHQ1NJVFR6cjdhbTJ0QXJIM2JnY0V6UEptK2NyNWpKNE5uSE5GRFZyRlhjSTVMZTlrNUpudytiZWRiVitGZlJ6WklIYU9PYU9zTFkwLzdVR3M1OERqckd3S01JTUZJR3pPRVcxL2pHc2RBdENONmhFQUk0aEJlOVlYZVJST0JTVlBBVlBBcXZJTTVieDVoVktXQU1QNnpCUnkzaWVzY3JpZFZkRkJpbkJ4WERuRzJHUlkyWGJDdnAxbGh2R3RPOUJ4dTVoOTA4WFF1NDJsblNBck1GZGl6TWltOHV3UkN4UEdubk9TOGx3cG5iT2lEcVRBanNyUk4vUGNvQVNjQ2JhQUNxVk00MHlsbmpqVEJzK2J3V2xBRzIzL1VLYmRraXdLV0lRUEd6V2FjenBvU2x4UEVqODIyY05Xa3BTN0Z5enNEcnFwZmdwRzNqYWh3MnZnYmFTUUF4dUxXWll0N0p6eU5lOEpvWnBOQWN2REZPZHcwd3FZVDlBSzFyWnovRGRiU2xMUHAwcnlJeGdRSmxLOUFabEVxN0lPWHBvaGc5UElockNuZzg4SnNPeGlWNFpXQVlmZzRzaWt4LzhreTJaOWw4NjJ1cXdyZnNjSUg4K3VnVG1WR3lpZGRlVllVZ0VNbjRHWnpnMTRFd0lzaDlzeDJjS0tpV1hSZXVPRTVnekdPUWdkbFJLVlZkbGV2cWIyNzlYcTBRbnN0czJWRGFCTzBjb2V6c3J1V3RIQXB1NnNLRzRJQmhOMGFHVTJrTHJNS0dSVE4zSG1iQ0R3S1YxNHp2a01FREc0UWZaVnNwVmxhTlUybWhjNVRFWjNOMWgvenFUaGV1THBXMDVaV1RHVmpiM2Ribk5teEtaQm5OOEpxaWRhVkxLQU95QVJOTFMrTUI1NFoyK1ZhcW9NTEtyb1ZCbG5nZWZuVFBBY29ITldDU3ZsZkE4Q0kwSEVtQk5CbkJsWHlNcnpVN0E3V1ZtOTRQUHFRMmdtcUt4K1dER3NudmlsbWNTT0JKcU9LMW5ZeUFJenVBeWVzcTNVZFNLM0tmV2NZS0Q5NUhtZllPVTNxc2VyMkN0WUVVQStGcGZxZE52Z1BCWlVCaERyR09OUlZsUXNoOHJMY2FVQ3lrSEcwT09Vd1RsTEJyc2g1c29FTUdlemkxRTRIUlZ0MWljcDV3WkVGWGRpYkNrRzhZOHZYNzVzYk80RTBpb205eitoalNpT2Z5M0RocFhJdHBWaEUrVUdRZHZvV2p0Q2htckdIZjRZQXpLZ0JObkd0dUp4RkNlR2RoVUFmUUxMSzhrQllBUDZndkZKWmFqTUczWGt5Y3k4S3VDMHE0RXl5bXd0d2R4ZHYyTTBtSUJ0SzBMS25mNjQwajAwQXVxNGdVa2RXR2xoczIycUpjNmRaQ3NMMTlveG5sVEpHNFNZVlJJR3BEOFRQRkJ1TTZPRWxiUzFwbGRpZDRtR0F5TjZaSXVwYkM1YlhKTjlmZHBiVGhTeExVYUk4SUcxWElZQnhXM1RqczZLUW9zS2N4ZnhjUW1kbndSR00xMEduRmNDeTJYWXVuTE15QWtkZ2s0bWVQaWN6c0x5Z3RoY0J1dDZnb09xUzdZVkZYQURMamFvc0I2czZvZmNaV0FaU0lSWXFTVWtpell3dHRZYWIzdlVPUTl3MkhSeElJZzhXd1JWZUU2OHhpNFV0TDN6UnBoeHBsend1WnJjcVlDcTFJM2pQSTVkbkpJeWdFb2hNYlBxVkpTenJ3enhCSlRzNXpOK1JlVVNneGlrUFFWRjNKVkJlTlF4YkhFTnJFTU52RWRGWlZWOWxIOStPUkdFc05aUXB5VE5jNEMzQUc3WEY0bmd6cStEck8yemJ1YWFPWGdkYUZjZGtFb3RvU0ZCVlgycUowQzhPV1plRzRLR2xwZ2hBMFhmVE9QQ3FWMnFxd1EyNlFXZkYyUE1MaEkydzFsVkFhMmFQc1lkMHphMjVNUVJ3Z2NaTjZ1UURDaStaeGlENFhFTTJrWnhPVDQxRm5abmFSbGNwWm91emxScXFkYlFWV29wUW9TQjU4UlY1MGxCTnJIaS9Bd1hTNUxyd0RWbHBZM0ZjM0J5aVlHYzUyVHJpc3Q2a09YZHdJbkFRdEpwcDVRY2h5YXF1WU9WN1N1K2Z4Vk1hVjNkYzBSRTJTNm1VWTBnTHQycE1jWXFyS0lROXcybDFncFFVTXRRWWNtbWJ0NURUTnhkaG5VQ2pRcXRiSzlTVVN6dnJDMG1taGhFMWUyRlMyK294eXB5L1pBU3V0a210angzdmNCQzI0UFg2NW5icWtCQ1JoZmpTOWtJWVBuZWU4Y01hZ1ZPaEkvM1QxZkFtZHRBV1pzQ3N3VEpDa1FWTmEwcVdLU0tQT3BIQVVoRDlEcmJWY3lvWWt3cWh2aDE3dllBYXlYTFF5S0dZZHhsVURGcDQ5NHJCWFJqWWdPMTdERFlldE5JVWovZXpwNlMwbG5scEV3c1dtSk1rT3dzS1hlWktFQWpJSG4wRVFKSVNhUkJjTzZVTUlOejdwL2JFampudzRmdCt4bUR2a3N4WDRHMnJJcmlzN3FhZUt3QUZNUDJPaTduNGNyaXVad3RwU1V3cGZMeFNuT1JTcklxdXNjNVpGYVh5c3FSV2ppWjJEeUFXRUlMMzV0VlNvUUVsRkFDak9lR0dTRTdBSEVRZ2RvL0xTdkNPZ0dCdmt4c21EYnZsUzNGcDV2aGFCMlRBR3FSS3JLS01yaExWcGFHekVWalowT1F4RGhhQ1RBK1F5UlIxZDE1YVF6ckpudEwzUmlic2lwakc2amxnTDR5cWJTMHNOWWcxZTg0dmhiQlZyRWxLNjRDVWNXWVhEZkt4aHBJdXhpVkpaVXhzYk15L3VSQktUTlJRNGtRM0xkUllMUzBySmpSUGxUUHFZNmdkSnNFRGMrYVFYQW4rSGdzTlVDYlJ1RjBPajB6d25BN2JXRGtiaE81RW5zMDBxZVFoUzFsYUJNbDVNL2NBYXhzTEY4ckt5cWwrVGY3RUxMRUd1L2l4aWltZEN2bzBUamZwakt3YWdnZW40ZWg1djdMb2tMS2JMdXl2SGhjWkc4ZGhHckVEeDdIZzkzWnBwSkY3cUJxTzNpVnZlWEVEUU5Jbnplb2U4WXE2ZVBhWkJaMkp2aU0zVzJVQUdvdGVrUkNBR3E0RWtGMVgzRE9uUjExeVJzQkwxdFJhMFBWY1ppTkZYWjJjMzRGc2t2b21JblFRNmx6cEpvWmJKeGs0M053S0pGQnF1SlNzckJ5SHlkeEtPblR4UUFTQm1TM2orSk1uc0hTbGEzRWM2SzlWV29KVm45emZqd09NN2hxWUFBcUpRd0UyYTNuQTQ4SjJRR2VnUmtwWk5pdlNZK3lzM0VrS2Q0b0pJd3N2SUhsM2NXZ0x0NWs0Tkg2T210TFdkcHVyT2t3RU11cFljN2VNdERSaE9jSTJ1aTVKaFZJelh6THl0by9HQVB1Wm95bzh3a29kdVZnSmdsQ3Q3T2hHYmdJRDRNcTRzaSs2M3pVUzFGdUZGWEZscXlhajJlbUhsTE1jQnFZdTBGTXVSMjhCYkI3bE94Uk1TaUNRWEZoQ0t1d2toWitwWURpR1NnYnNLS1Y4TWlTUnN1SFNJV005cmtsUmlJbFpadXFYanNRSzhvb1lKTWdxM0pLV1ZraEhiaHNWeEZVenRoT1dQa1lpamNieDU0SUtzU2RUK3VMcjNjckdLeW9ZZ0ZpR1I5aUJrNGtmbG9VWCtKSWxRUlFxYWJtcGduaHF0cFFwYjZSVlExV0g1RG5yUzRoRW9HWnFhZXJRMmRoRmJ6OFhlUHhTaG1EYm83MGVJU2pvb3JPMnZLOFNKWEk0U1VtRVU0eldLRHpVRHRXVFl3N3hYbGJTVEVqNEZSZzd6S25Lb0dSQUx2MEdzOVRnYzFCcEN5d0daUlFBdHFWejJ4ckJjQU16RXBmWndGU2EyRzVXMFFCRmpTTWFwV0FFRmEzSGNHTjdDeER6RUN5SWtKOTdxd3JxV05UV1ZvODc2UFBzalBrajJ3dmdyb001bExaS01FVEtWcWwvQ3ZuV1ZGaUZhL1N6SlVRd2tvWnNyNjdZNnZsU1JWMy8ydG1OVE9ZM3ZuYXhZd011b1BLcWR6UjF3N0lxSHltbFB4YUFUaGZVN0tvMlpYWWo0QVlKSEwra05kS3dSUVlFU1RSYTVmc1VaL3JWQzFUTVR5V1Z5WW9xTnR1emFIc015djJ0dm9hcnhkZnF3WWdVMWF4Rm8vY25xbDFGR3NxSyt1QVJPVjhCWDRHVThXY1pUQVRpMnE3UWN5aTBPMFYrR2hXQk1OUlVrbjhIMVNzV1ZFNUJ5M0dpMEVDcVVlSm9CZkF0RGE0YW1rZFhHMzdBR1A1R2dlYjg0cDdVYXpwb0tSemRGemVROEhrb0hHeHByS3kvSHBtNXQxMnA0N0o2eFRZREV6N3VJTkVYU3V4WVh2RnNrWUFjK3lTeEg5c2Y1ZnRLelU2SWJ3VkJjVUdnNWU1Rk1DRVhTRXJaUjB3R2F5VjE5d29NOWd1UGpUcUpkVlRxUjR1RTRuSm5MbGRXVmtFQ0NaTGQyVkxGK3h0YW1leDdJcGlyaVNEVXB2cnBuOWxyd0dNQ0h5cHBNSCtwczZMSUxzdUZHVWoxWEVPWGlxYnFTSFBVS25DbHBXVjY4a3F0VVJWTkRZNFROYW9jeWtvWWVUVTVuZ0dFUWEvUzFEbm5FNEFlWE1jS2pIUEFtRlZqQ0JFTmFleUxWTkhmcjNweDh4VXN0Sjk0aElwZkg0SEtFL2VEYUFySzZsU3lWVkZiZHQxZ3hUSVZrM3BwcFZsRlhpNHBFaFZCVE9icXVvaFU4NU1MWG4xaWFodlVrSEpqU0NNYzAxdExGdmVWVkJ4MERvZE02amZ0Q3U3RE90SXpZeHJjMHFwMUpHUDJheVlGejJHYjZIdk1yTzhjbkd0VjZHam0zdUltU2ZEMkdwV0s2dW93YlpHTXhGS1FDbzFwT010Y01YRnBSc3QraFhHb0FvbUYzc1NUQkdnVGdsYkJLV3dzUTN0WnFhWVNwMFoxQ2ltUkRXRmNDSlVQWUowMEJJNUZrS1lOb2lmdVF4bU44OFNXVlhXTE1hVXFxcWdDMEJtUUpSNnNrM3U5TkNmNmpZTFh4QWZxc1lFZ1ZMQWhSWTJBdGd0ZmxaTkZtRnloeGRyTGtBZFdsazREODhNMml4SHllcElkaE1IckcvaVIxWkd0cTBNR3BiRGJSUFlPWGVTWTFNNk55NFpzdHZHU2t0SytYYkZQQVRqMkQzNzFzYVBFc0FNWGhYcnNaMGttL1hTdGtoaE15QmZzYTZ1WEZaZTJWQ2UrWU1yMStHS2d3clF5TllxMVZSckIrRWl6QW93Nk5zZE5LY3lWRWtZZU03M3lzNnE0a0FIcDZCaUZrbFRrSXJWQzVvWVY3dXp3T0dDejRVSjBTdHEybFdNSnk0d3RiK1JldEw2dFpGaWNuSm1CdzVVakN2WFhNWlZKWDJNUWtiZitYTjVFV2Q3OFZ6OC9KRXNNWlRCaUtOenNtMWluTFJVUTc0SDROaWRhcUk2OGo1c0FGZ3hjUnZlQzdpZUxKWGZRWXhqWloyQ3NpV0Zld1pYSm1CSWxaMXRkdHJYNGhTdWF0ZUtzby9SWk90T0tXMm5tcTFvVHplSzZkUldBV3UyTlJWYjRocTBTWG0xR3Z0dWdIcmJyNUlYcW1Ta3RnNUN1REUyTVNsUHdzWTVrTkUyV3AzQXFpWmJXVkxBeGlCRisyaUJaYnVOajZNQjZyc01MQzdGeWFzYVlEeW83S2tvUHlFdHczcEVNWGZQdnhBSmkyakFRUWdqcnowckxJWlNXWmxJb05od2Q1eEs0QVI5bVlOaldBYUxybnVJbUplQlZOOXpCT1JPYlZ2YnIrbVRUZkZTRUpMU1JuSG83aEVKb0lpOE1GcWp4bXZnbUY1VVJaejR6TEZnWlo4Q3R1Mlg3Z2dWY2NLbTlnVnhJc09IcXhYZ05NS25GV1pZbmYxZEJuT2hheVhxMTdRd0ZsV1cwOWVOS3lWSkZtWHFhT05HQTVhQ2VnTWJKM1VVa0dZMWljM25LV2dqcThxZlZZR1FHMWdSdDZyczYyYTZIaXFxVU9xZGVzSzVObVg0bkdvZkpvaUUxZDBkRjlsVlZrdlQxL2tFRWFhQ29ZT3dGcGNWY29MTSs3NjY5UHhDOXJXcWt0SDBzV1VZbGQwVkNwdUJaL3N0VlJjR2d5OVdYMitVMVF0aGk5U3pBcVN4elpzeStPaUZ6QllueVNHVjZHa3U0NHJEOEJDT1pCVjNCdkQ1K0FLUkhOd01Fc0I2RXpIbkpwa1RBZWlVbEVHa2NFQ2VCNkdEWlRwNVlFSlRsdmRya254WWpUbGxNa2ZOdFh3RGpNN3VWaks1SlhVVW40M3JycXBLMmp5dGF4SFcwTTVHOERDOHJ0SE1ZczdLU2dkdVZRTUdUWUZxRnZWUzZya0Qzc0RKNDZhZmRZRndvcTExQU9LQ0JMaHZ3b1VnYzhJR0FOeWNSNmtuWnJkSlBkc3V4bnlqZmQzRm92VGxSTWRFZHRPbDVDTVY1RUhzWFFCaXM3VE93dklEWmFHajJWbnBiaDdjcEs2M1Z3WUVNTHdxYmp6eWw2OTlzYXdGRmtGMXlxalVVMzFIZkM2c1cxWkZWRnVYVlhWZ3o5a2VFYXcweXMxbFdmbSthelFBUVNXQStoS1lWZnNaalBuY0FjVUI5b0lheXkvVVpYUk5ja0RHamk3N0dzV2J2Qm82dFByV1BxT3lWa0JVcStJTmVxcHpOZFlzL3UwaWZoNXFtcHFJVyszM0pWU1Vjd1k3MEtMNFU5bFlkVTZsanRTbHM3bG1maTlnM1l6ZVFmVmthR0ZhVjNPRENuYUQyTjh3c0VERmtsRTNSek0zWmdoZFlrV0hzc3pxNzBGSWVjbktrVmt0OGV6TXpScTlia0d1S29qUkxCVlNvZDNZMXlQcUtnWVc3SlJRVFBWeXk1eElZTGpPZ3hnVDUyUktKVVkxZE9ySWlSZDRmdXRReC9BNUFjU21FanowdkZXcmtMenZiV0F1OUhPV2JHZ3hGazFWTlRwbkJLazZUZ3dpc0kvSGN4WVhQMXVBV083MlVMRmxCVHErYVN1MlZUVXM2aHJ4TTJDRitoRW9yMVZJQTlabUZVYWFiMWxTU2dac1ZzNHN4ekhsVkxvSkhyOUg0RGhPTlRrSTFYQzAvd2lZMk5vV0FHNVJsbkhGbnE2b0xjY3BRZGRNdUovTzE3SlZBNU9ITGkwQnFDenRxN1kxKyt1Y0NkOThxTEk4TUlIQlYvY0tqeFFUbWUzaEZCUzNNeUNxbkRzdXltMm84MEhqdkZGVHRyVVJtTmFHSnNtVmFoSW1qVHNVWEt0UVpUQVZzN012djgvK2Z6VXJaQVhjTEo2TTRrb2U2WFAwYjZTbVdXTkR6eVVwUThibCtMdFd4NHR1cVozNmNSWVYzeXVWeFBOd3ZJaXFpUUNTbXU3c3JnVHpSNm5reWhwQ2FyWHdGeTF2R2Q1aVAyY1kwNmxGcjVOamhoZzFZNitOQjI4ZnRiSzgzczhyZjdrTEpiS3dERlBiTGcyNWEwQWRaSkVpcXI1cGhpeEtNRGxSVXRjc3NxMWhyaUxxR29IK3plTmdWbTlPZW1qc0VUVjhKZEYwTkhua0lGeFdZMU9CNFlycDdydFdKN05nQUFBUFhrbEVRVlEzb05zNW5wbHlWZjh1MkZvTHUxSnJIdmVhWldRanFBa3NodEZhMmd6c1NHM1pwa2J2ZzNIYWZGOXNsUFBsbGRqRmxLODBHeXNtOE1yNE1QaG5lTldFTlBHakFJcG1pbFRQQVRkVFJUWGxDQllIWUFRdVB3QTM2eElwV3RHTjRxM1kyTWhpR3NVcHVTU25sRUpSRDhQb3JDN0NGWVZ3K0Y1MXFUaGdhYnhzVHhXekNHWTBaU3NiM2xmcUF5ME9QTmpOeTh4aVFRS3NIWUZRMkhCWlZ2VmJCdXEzbTFvV0thanFhb25zTTZ1WlVyNkNqWFdOWjBsNUUzaDNqVVJtYTZrUDNNSklpeTFMbStrYWhRcTQxTjJpWmphNXNqdGxMWU5aSFpySDZxVUdtNHZNYkRwNlJ3MkNGbXZ1eUZrckJjQ3lNdEZxQmFFQ21zSG9LOUJaMkxBL2xKY1JxU2FEcW5hV2JyWmRHYXozRExnSXZCbG40d29HenRieUpHcXNsd3hraGhIclRqVFlGWEN0T29LUzh1TGRvZlZkQWJPeWxHVTZubFlwWFdadHM0blhCcTZXeEppdE1Ob2tIVUpuYm5KcGxRbSthR3BZMmE1R01WMlFEMWhSdWJCUEZLZHVtZjVPSGtMSHowRjlsdUU1a2pCalJhMG5GRTVDVUdxSHczMk1talo2eGtnSU5WblNuWjFWWlN0SzJxS2xSYUxsUWdLN3VUcTdKRlhKd00rM1NPRUt5aFpOSSt0SjBJNXFNWXk5azJxSkQ3ZFZXZHFLWGEwQ0tOUjBDY2pnK0IySVl1MmZjQlpKWmtNRmdNMTFyMFg5MndpbGdoRkdnelZuZXhscUI3eEw5bVMyOVNpWVVWWTJuWE9aak5CUnN5RHNRUFJXVzVoclo0WGNkQzRIVldSYmpnSnI0c0ZvZks1U3pqUTdyaEkxVWViZFBkRWJqNnNxSXZUWlFaNXZhMDhyQUJzQVcwVXhlV3l0QWs3QTJLSjlacHh6Q2lvQjI0WEZ0WUFlWFl4cjZhblNxaExncHBFcVdiR3dMdW5UZ3JWK0lqV2xMMjlsamFBbDRFUU1Hc0VycDRhcGVaaXF1d1JYTFhBcU9DZXJ1MzJtbXlkYzZvV1RTV3BGQUdkemVUQjhSVEhWTUV0bE05MENiYlFDWWhQanEzZWdZcjFGR2RZSVFqaXVER1o1elovQXpvYktHT3lMeHRpNmM0Und0djJhbnlXbExJQ25sTGh4SlJYdDZBNWViREJXRk5PTmJ4V1oyZDAybW51NFM5WUVDcGVwcFYxelNXUkJXeEhZelZJdjFDWFNvdXdxcVgzakJCQkRaZFlRYnBUUVc0WlFsUzhyNWtINHN1U1JtZzIrKzNKTjEweDFQYUFtRWttdFlsRWRlR3BKRU02a091Q3FDUjIyb1N1amo1SVYySGRUMHpqNXByTEtUalhGQVBqZFFseXE3eElCeEFRUDV5TWN6RzRWeEFLdzBuNmlsWjJRQmNlMnBMdWxrdXh4cW5vSXpGZmdxeXFqaWw5UzFWTndCckZtZXllb3BzOHlPalpVeWJaZGZTOEN1YVRJSnVtenM1dE9EYU50THBGRFEvUGNKR3dlTGhtZUwxbkIwS3FpVURTY3NpVVZEODlEaTNIdHJLdFNVTHczUkxpeWdaRCs3c0Y4SlRPYmdZc3JHdkROVUZSR2wxaXkwTGwxWWtVYzJhSllNb2c5MjBJOHFXNllEQ2cxTXFrMEpISkZLWGtiZ2JScmVJK3FwWU5PWkhyVmNEVWJhN3Bqc3BoU0pOdEs2dXBnUk5BVm9PUzBtdWdCZU40YklaZ0hodVBaL3MxRU5hWDZLc1ZyK1lOcmgxTmI3aXBSMFBFNXpiTlJlZ0NickhSVXc2WWYwN2RMQkpsMWY4S0I5YXMyVjFuTnFBc2w2MkxCQmhlaHdhbGVya0htQjFKRklFWktTRXVzZGw1SlFqMW5KbEhYU0NGMzQyZ0o5Q1lHclhlbGtuSklYcVZQOHNEK3F0cGxDUjNYSDJxZktxMHlnTXArS25Wa0t4TmxaOG0yWWtJbFZNaUNuWFV3bDdxem5CS1N2UXozbTNQdDZvUWJYTzViNUZpeENoL2ZIeFVRVy9BRWNLNnpDTnFLUW5MOXN5d3FtS3V3dnFTWXpUL2FQVk5OcFZ5aHZSVzIxYXFjaUNzamRXdkJ3SUxVdmg1VnlDemJXb0MxcEpqSjY4MENXc2wrdWRLQjZUNVJ3RzFtbG9obmxwYmc0N2l6NVU5aGEwRkd0bVJMRllCdE85OXk5N0FwMHorWkRUQW9nNmtTTFpzTUhnL0lGa2tncDZDcHZVMlUwY1lWU2RubWtqd0JkT21YYnhUV05XenVJYmlwTWlvVnhFY2taRW9haFNPaXkyTTNLMGpjQzFMaFZEd2FxRzBadmtjV3FDbnJHNEdJeHlrcnFsYldkdzZMUXlCYVpSOEhtTFJJaFFXc0hzd0Q0MlpYVkxOa2Y5bCtGbFcwSFZRMmx3RnNDL1oxRmR6bFFSMEthUGZvK0ZkZnUrL2R3VlJJQ3UxQ0dSN0FFSWlBaGMrQVpVRjBrT0JhUHhtVXFnNGk2NHZRblU0bkZEWUo5TnorMWZWWHZlSDlxbXIra1BJTHg4b0tjUlYvQkZieGJFMEpNVDBrU0Q0dzZML2xOWThvY3NxYWdWZFUzQTNNanhoeGNHdXF6c1BINGlycGFvdzFxNk95clZqdnA5TnBjNTlFOTFMbGRib1lWekpXZGltV2ZBVzJTTkVLY0RhWDJGbUJMTEEvdUt4bG1oaDYxM0lzMVVSUUFwYktmdHR3eEwwMnE2T254NXBReFNiUG9qQWcrdjVoQW5ONkxIVlJEWElzdkt0UmppUzBxSlV5WlRBWFZiQUs4MkVsRkpXYVFkVm9xVUMxVW50N0JWYVRRdWRNNlN1cWV4alFKTjQrMGljYXh2L3V0Ykt2ODNFVGJUOEg4Z2pjT0t4T0ptYlVhNk9PVlhodDNkRlk2ckh2OVhvTnpGTGNlRUExbzgrcEttMExBSFBIWjJyWUtqRnEwaGZaRml4c3FISmdEM2VENW4rVTBrYjFtRmpYa24ybHZNU1NPc05FL0NkSUFLRjBTeXRxNnVyT0hVTjVnd2c0R1pvc2dibWdnTTV1Y3JhMnFyUzJJZzFjYmlCQmN4WXpnelVETkxDdkw4R2JaWE5wNk9SeTNMbVMrS2s4M3pSSUFLNkExaW9LYTJJOU5hcEl1aVVGZGZDOTc2NlBGWlV0cVVyNktiV2srelpVMWEvWnJJWEV6dHJqVE9mejdod0t6aUNlWElhcmFIdGJaSU16KzJwR2dhekNtdzRxV0FGdkVkaG9kWXAwWHEwcFY3RzFZV1lXYk80cWhHcTQyK1o4Qll0ckxXdmx1TlBwWkFlYUZGUzF2dWJQZ2JneHNxY3BuQWFzekJvdkthRm9EUThCR3RqZlVPbDROQUcybm1RVjA0ZmVKZ3VtdlgyZnNyUUVXWmdoTDBKblZkWWtuM0RPWkllUk44NlJxUFdDbXN2R1ZxRU1Sbnd4UUF4d1M4RU1ZbzNJem1ZMitCQ2NMcDRNS2l1eXVoSW1hbWxiWkZjTm9ObDd0cCtSSGQxOFpqUUlSS3lYZEZSaE45OC9oeUtxd1hXTm83TzF3aWFYb0hOMTA4UkVaWldFcTZncm5JZmp6ZWc4amRSZjFYRUw0a2tYYTViQmpLeG9LYWxqQmplSGxWeFE0R2F5Y3BXNGxET0FLdG5UeEhBdE9mek90WndIQU03c3FWWGtWNnl1NmthcDFuSGtYS3FXRi80WEhxamVuTktxQmpwUjNsMWNoM0VqZzErRXNnZFFoc2RHMEI0Rk05c1dBVldwdUF5aXdUUGxlWnh0OVZ5WlZTMnFYZlJlV3FUQWlscHI5QXBvV1RqeHltaXQ3TndWNEpUcmlaeU9BOUIwazdIRmZVTG91cm1LWUhWblJRdnFHTDVITUhkcUZjUjJxV3BtY0s2ZVR3eDJkaXBXcnZpRGlscitmS1dxM09XUldkSEt3QTRldTh3amNoYmVSekZpbHFqalpOM3VmQ3Bma0owL3NjVnBuWWs2TDBQSTc3bHhkV0NaODdXaVdtN0IvQUdxdVFTbnVqR0tzQjhDSm1pSnE4cTFwS0lWV3lxT2lUSzY2cjE4Qk44cjc0L0FFNzFmZEMzeVBTMk14ZE9wbkUxdGxWeEQ5Sm1WT29nZ04rcjRQakFYVkZQYTNFZzVqVkpHRlZVR05vbEgyMEdWclVCN0JPeVNXcTZXcVlRZFdSOTJwY0ZNWU13Y2tiU2dDS0NxRDY3RGlpV3UxZzhNUUM5QnlmY0ZxVzFMK2pMNzE0cU5DdXpub1N4dDBkYTJndFdOMUc4RjBCSzBOTjBudWltZWxVRjlkSWRBZmpPNDRVVDNDalFMb1VlTEhKRlRPM2dtcFJ1SUlPdndCUUNicU5lbzNxdFo5aUY2eFZLMTNHUmxvNHpxaW1xK0NHZFRpUjF1Ulk4b3FnRTAyaFpCYTc5a1pYUE1xdXhSSEtsYTJzYVpXTjRtUnFaVWowdkxDS2hraktucU9RSE51U1pWSm9LdkFxUzF3cEVxdXZXREMxQjJ5cHdyQ1BzUk1FUFZUT0RNTEpNRHY2cWVLWHdpMkpZVjVTcTRxS3l2Z0dzSENMaXVqMmpSNTlWOGdNcVNKMkZKWlJYRUhWUkhqM3NGUHJjdDZPcHFsVzFHcGF0UWR0MEd2d2ZNNm42M0luc0dWRmhKR2FCcWdxcUlWNklzWGxsWmd5U1BxNFIzYm50M3dpNWN2K2NOMnlxUUxXMVQ5NUtZVnNXV3RLazRjQjlXNTNXUVFmbFFZUjZXbDRIYUpaanZWRTBENXl2cStSS2daQ3M1cWRCRVA1c0Q5NGNBdlFMbFNnTmFTTUF0SHg4OEJ1TlE0MXpkRnNYMzB6S2JjczBNTEQvaWhrcFF6bDB3aVRxS0xUZmJLbUNteVlJQ25LMEliYWllQzRDRzlpU3lMUTdjSU1HUXdhdTZUS29xNjBBcGwzV040MExacGNhMUNLS0s5VlF5eUlFbjh3MEY4RjZDTDJoOG8zaXhHd0M3czdFV3pDT3FtY0FwWXhZRDRqc0F6VlMwc2wydDk4cEE3dnJLb3BoQ1ZTb25iWXBnSDZtdlNuMjRwVEJWNHNkdFYzQnRNcTVrODJ5K0lBRHZVSjB1QWxrQ1ZUeElhUG0rVU51L3FrVjRGMVR6SFhDR3JYSUFxSXRCS3lwcUs5OVZ0QU9WczY0TzRPYlg3cEhMVkNwWUhjUm13dkxSN1R2WUFLQkJONThMR1Z6RHVGeitoUWJXZ25jUXlDWkFrK1Zic1BTb3VmOTMyNjFpWmdtZkNwd1JiQXZxbVNxcmlVMlB3aGphb095WXF0SWVnVlhWaVRzbXl0YTZiR3lTcFkzZ3lScnBJeUFlYVdERHh0cHNYd0t5YWxNREtOUDdZQlhNcUVza1VzaTJ1QzhGTkFQeEFLVFZmVDFvNlZ6TTBFMGpGKzFyV2NVdUh2ZHlnN3Znb0ZwbFg4SHB2SHBNQ09NUlVQSHpaa0luc3FsRktOWC9FSU81MkUwU3hTek93b2IyVm1STFc1RDFYSVUwcmJnTTFBeldneUM3ZmU4Rzd4VUFLL3RhRUJhdDdsdXF0eVA3RW1zYUpRT2o1Rittcm5aZkN1WUNmQlVBV3dTaHlkNnBNWS92QUhHMVVxT1lwYkkvZ3k1VDBDTUttK1VPM2dGdUM4NWRnZkRWZWd1UERmSVRySUJMc0xyY2dkaDNDRmdGWmphS0o0SXYzRjhBTkVxdnV4UjF0VktPZ0xvQ2Exanhib0JBa2o2djdqL2ljRmJBN2Y0cmZSblFETFJWaUcxM2kwdnFCUXJZVnFCYkFEWlQwWnBpSG9TenZRcG9wS0lGUzNzRTFIZkJXbEhYZDBIN0xuQXJxdm91Z010bGpIQmdabmgzRW96L0JLakxNTDRaMkFxMCtoRUpyOWphVlVCYnZOekNJVWlyb0M3QVdtbUZ3NG81QUszTXRCNVZ5cFpNU0ZnczA1SnlHVndsd0Jxc0VHQUFhMlpVMUNqVWV4WEdzRTRyS3JpaWxCdkZ6T0tLbzNBdUFyb0U2UUZRVTN1OFlwTlh3UzVrKzFUWnQ1VXJ3b3VONEtpVUV3K2szWldEcDFSWEhOUnFYYjIxVHMzOTk0NXlaU2czVm5aRk5ROUNGM1hlWnlyNURnQlhLaXdDTWEyTXhlVERZWGdQMUZzZjlRTktaYzBrODFSSmszcjZFUTNyQ21CVnlMTDc1RWpaMXBJVkRIb0Z0aU9BSG9CMEJkVFZ5bHFCc0tLS1MrQWVCWEpWTFkrQ1hBU3VHdk8vQXVxN0d1RWpEZkdLZzFvS2Exei9kbW1pOUk5U1VHTmhsMEF0ZnVsSEFhd29Zcm5Ta21OWEFWdUdFaHJFVlh2VUYrQTVDdDJQcU5PakRldHluYTRDbWVVb2xtZVhMTjRBcTdDNVNqMTBRN3lqZ2wrdDZDTnhTUkhtSTVYK0Nwd3JlWUIzUWZkcW5hNHEyMUtkQnVjNEdvWnNuNDlaT09pVmlud0hxSzlXemp2Z2V3ZUVoMkFVNSt2dHhaOUNkOVdxa2g0OVYxOEU1b2o2dlZ5bjBSU3RBeUdJTzVlZFhSS2Q1QjBWR1ZYcTJ5cjN4WXArNVV0K0M0UUo0UDFOMzM5cFFNalJlamo0dmIvRGNyNnJRYzNPLzByam10WnBlWUNCaUNIZkNlbVJiTmhiSy9wTlVQYzN3Zkt5NWYyRDdPbEwzL3VQaHZlL29VNFQwRjhmK1ZOTTJ2eW9pdjBqSytLSFFmZEhxKzBibmN6NG96NzMvK1k2TGJLdzFvLzVCN2VPZjFSbC8wZHU5Qjl0bi85YnZyZi9qK3YwaDZ0dG4ydHAvci80ODE5eTQvenY1MzkxdXZ6emZ3RGlmejZwaFQxTVBnQUFBQUJKUlU1RXJrSmdnZz09KX0uc2VtLWNvbG9yLWRhcmstaW5wdXRzIC5jb2xvci10eXBle2NvbG9yOiM1NTU7bGluZS1oZWlnaHQ6MjJweH0uc2VtLWNvbG9yLWxpZ2h0LWlucHV0cyAuY29sb3ItdHlwZXtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjIycHh9LnNlbS1jb2xvci1saXN0IGxpe21pbi1oZWlnaHQ6NTBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBpc0lFMTA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGhzdmE6IEhzdmE7XG5cbiAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuXG4gIHByaXZhdGUgb3V0cHV0Q29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBpbml0aWFsQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBmYWxsYmFja0NvbG9yOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBsaXN0ZW5lclJlc2l6ZTogYW55O1xuICBwcml2YXRlIGxpc3RlbmVyTW91c2VEb3duOiBhbnk7XG5cbiAgcHJpdmF0ZSBkaXJlY3RpdmVJbnN0YW5jZTogYW55O1xuXG4gIHByaXZhdGUgc2xpZGVySDogbnVtYmVyO1xuICBwcml2YXRlIHNsaWRlckRpbU1heDogU2xpZGVyRGltZW5zaW9uO1xuICBwcml2YXRlIGRpcmVjdGl2ZUVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBkaWFsb2dBcnJvd1NpemU6IG51bWJlciA9IDEwO1xuICBwcml2YXRlIGRpYWxvZ0Fycm93T2Zmc2V0OiBudW1iZXIgPSAxNTtcblxuICBwcml2YXRlIHVzZVJvb3RWaWV3Q29udGFpbmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIHNob3c6IGJvb2xlYW47XG4gIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XG5cbiAgcHVibGljIHRvcDogbnVtYmVyO1xuICBwdWJsaWMgbGVmdDogbnVtYmVyO1xuICBwdWJsaWMgcG9zaXRpb246IHN0cmluZztcblxuICBwdWJsaWMgZm9ybWF0OiBudW1iZXI7XG4gIHB1YmxpYyBzbGlkZXI6IFNsaWRlclBvc2l0aW9uO1xuXG4gIHB1YmxpYyBoZXhUZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBoc2xhVGV4dDogSHNsYTtcbiAgcHVibGljIHJnYmFUZXh0OiBSZ2JhO1xuXG4gIHB1YmxpYyBhcnJvd1RvcDogbnVtYmVyO1xuXG4gIHB1YmxpYyBzZWxlY3RlZENvbG9yOiBzdHJpbmc7XG4gIHB1YmxpYyBodWVTbGlkZXJDb2xvcjogc3RyaW5nO1xuICBwdWJsaWMgYWxwaGFTbGlkZXJDb2xvcjogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcFdpZHRoOiBudW1iZXI7XG4gIHB1YmxpYyBjcEhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjcEFscGhhQ2hhbm5lbDogc3RyaW5nO1xuICBwdWJsaWMgY3BPdXRwdXRGb3JtYXQ6IHN0cmluZztcblxuICBwdWJsaWMgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjcERpYWxvZ0Rpc3BsYXk6IHN0cmluZztcblxuICBwdWJsaWMgY3BJZ25vcmVkRWxlbWVudHM6IGFueTtcbiAgcHVibGljIGNwU2F2ZUNsaWNrT3V0c2lkZTogYm9vbGVhbjtcblxuICBwdWJsaWMgY3BQb3NpdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgY3BQb3NpdGlvbk9mZnNldDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjcE9LQnV0dG9uOiBib29sZWFuO1xuICBwdWJsaWMgY3BPS0J1dHRvblRleHQ6IHN0cmluZztcbiAgcHVibGljIGNwT0tCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcENhbmNlbEJ1dHRvbjogYm9vbGVhbjtcbiAgcHVibGljIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgY3BDYW5jZWxCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcFByZXNldExhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBjcFByZXNldENvbG9yczogc3RyaW5nW107XG4gIHB1YmxpYyBjcE1heFByZXNldENvbG9yc0xlbmd0aDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcEFkZENvbG9yQnV0dG9uOiBib29sZWFuO1xuICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZztcbiAgcHVibGljIGNwQWRkQ29sb3JCdXR0b25DbGFzczogc3RyaW5nO1xuICBwdWJsaWMgY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbG9yVG9nZ2xlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2h1ZVNsaWRlcicpIGh1ZVNsaWRlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWxwaGFTbGlkZXInKSBhbHBoYVNsaWRlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGlhbG9nUG9wdXAnKSBkaWFsb2dFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHNlcnZpY2U6IENvbG9yUGlja2VyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyUG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgICAgIGNvbnN0IGh1ZVdpZHRoID0gdGhpcy5odWVTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGFscGhhV2lkdGggPSB0aGlzLmFscGhhU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHRoaXMuc2xpZGVyRGltTWF4ID0gbmV3IFNsaWRlckRpbWVuc2lvbihodWVXaWR0aCwgdGhpcy5jcFdpZHRoLCAxMzAsIGFscGhhV2lkdGgpO1xuXG4gICAgICBpZiAodGhpcy5jcE91dHB1dEZvcm1hdCA9PT0gJ3JnYmEnKSB7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gMTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcE91dHB1dEZvcm1hdCA9PT0gJ2hzbGEnKSB7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0ZW5lck1vdXNlRG93biA9IChldmVudDogYW55KSA9PiB7IHRoaXMub25Nb3VzZURvd24oZXZlbnQpOyB9O1xuICAgICAgdGhpcy5saXN0ZW5lclJlc2l6ZSA9ICgpID0+IHsgdGhpcy5vblJlc2l6ZSgpOyB9O1xuXG4gICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5pbml0aWFsQ29sb3IsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuY3BXaWR0aCAhPT0gMTAwKSB7XG4gICAgICBjb25zdCBodWVXaWR0aCA9IHRoaXMuaHVlU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBhbHBoYVdpZHRoID0gdGhpcy5hbHBoYVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICB0aGlzLnNsaWRlckRpbU1heCA9IG5ldyBTbGlkZXJEaW1lbnNpb24oaHVlV2lkdGgsIHRoaXMuY3BXaWR0aCwgMTMwLCBhbHBoYVdpZHRoKTtcblxuICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcihmYWxzZSk7XG5cbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICB9XG4gIHB1YmxpYyBhZGRDb2xvcigpe31cbiAgcHVibGljIG9wZW5EaWFsb2coY29sb3I6IGFueSwgZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zZXJ2aWNlLnNldEFjdGl2ZSh0aGlzKTtcblxuICAgICAgaWYgKCF0aGlzLndpZHRoKSB7XG4gICAgICAgIHRoaXMuY3BXaWR0aCA9IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzIwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldEluaXRpYWxDb2xvcihjb2xvcik7XG5cbiAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKGNvbG9yLCBlbWl0KTtcblxuICAgICAgdGhpcy5vcGVuQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXR1cERpYWxvZyhcbiAgICBjb2xvclRvZ2dsZTogYm9vbGVhbixcbiAgICBpbnN0YW5jZTogYW55LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjb2xvcjogYW55LFxuICAgIGNwV2lkdGg6IHN0cmluZywgY3BIZWlnaHQ6IHN0cmluZywgY3BEaWFsb2dEaXNwbGF5OiBzdHJpbmcsIGNwRmFsbGJhY2tDb2xvcjogc3RyaW5nLFxuICAgIGNwQWxwaGFDaGFubmVsOiBzdHJpbmcsIGNwT3V0cHV0Rm9ybWF0OiBzdHJpbmcsIGNwRGlzYWJsZUlucHV0OiBib29sZWFuLFxuICAgIGNwSWdub3JlZEVsZW1lbnRzOiBhbnksIGNwU2F2ZUNsaWNrT3V0c2lkZTogYm9vbGVhbiwgY3BVc2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbixcbiAgICBjcFBvc2l0aW9uOiBzdHJpbmcsIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZywgY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdzogYm9vbGVhbixcbiAgICBjcFByZXNldExhYmVsOiBzdHJpbmcsIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXSwgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlcixcbiAgICBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nLCBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmcsXG4gICAgY3BPS0J1dHRvbjogYm9vbGVhbiwgY3BPS0J1dHRvbkNsYXNzOiBzdHJpbmcsIGNwT0tCdXR0b25UZXh0OiBzdHJpbmcsXG4gICAgY3BDYW5jZWxCdXR0b246IGJvb2xlYW4sIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZywgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmcsXG4gICAgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhbiwgY3BBZGRDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmcsIGNwQWRkQ29sb3JCdXR0b25UZXh0OiBzdHJpbmcsXG4gICAgY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmcpOiB2b2lkXG4gIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zZXRJbml0aWFsQ29sb3IoY29sb3IpO1xuXG4gICAgICB0aGlzLmlzSUUxMCA9IChkZXRlY3RJRSgpID09PSAxMCk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG5cbiAgICAgIHRoaXMuY3BEaXNhYmxlSW5wdXQgPSBjcERpc2FibGVJbnB1dDtcblxuICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCA9IGNwQWxwaGFDaGFubmVsO1xuICAgICAgdGhpcy5jcE91dHB1dEZvcm1hdCA9IGNwT3V0cHV0Rm9ybWF0O1xuICAgICAgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPSBjcERpYWxvZ0Rpc3BsYXk7XG5cbiAgICAgIHRoaXMuY3BJZ25vcmVkRWxlbWVudHMgPSBjcElnbm9yZWRFbGVtZW50cztcbiAgICAgIHRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlID0gY3BTYXZlQ2xpY2tPdXRzaWRlO1xuXG4gICAgICB0aGlzLnVzZVJvb3RWaWV3Q29udGFpbmVyID0gY3BVc2VSb290Vmlld0NvbnRhaW5lcjtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY3BXaWR0aCA9IHBhcnNlSW50KGNwV2lkdGgsIDEwKTtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jcEhlaWdodCA9IHBhcnNlSW50KGNwSGVpZ2h0LCAxMCk7XG5cbiAgICAgIHRoaXMuY3BQb3NpdGlvbiA9IGNwUG9zaXRpb247XG4gICAgICB0aGlzLmNwUG9zaXRpb25PZmZzZXQgPSBwYXJzZUludChjcFBvc2l0aW9uT2Zmc2V0LCAxMCk7XG5cbiAgICAgIHRoaXMuY3BPS0J1dHRvbiA9IGNwT0tCdXR0b247XG4gICAgICB0aGlzLmNwT0tCdXR0b25UZXh0ID0gY3BPS0J1dHRvblRleHQ7XG4gICAgICB0aGlzLmNwT0tCdXR0b25DbGFzcyA9IGNwT0tCdXR0b25DbGFzcztcblxuICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbiA9IGNwQ2FuY2VsQnV0dG9uO1xuICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvblRleHQgPSBjcENhbmNlbEJ1dHRvblRleHQ7XG4gICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uQ2xhc3MgPSBjcENhbmNlbEJ1dHRvbkNsYXNzO1xuXG4gICAgICB0aGlzLmZhbGxiYWNrQ29sb3IgPSBjcEZhbGxiYWNrQ29sb3IgfHwgJyNmZmYnO1xuXG4gICAgICB0aGlzLmNvbG9yVG9nZ2xlID0gY29sb3JUb2dnbGU7XG5cbiAgICAgIHRoaXMuc2V0UHJlc2V0Q29uZmlnKGNwUHJlc2V0TGFiZWwsIGNwUHJlc2V0Q29sb3JzKTtcblxuICAgICAgdGhpcy5jcE1heFByZXNldENvbG9yc0xlbmd0aCA9IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoO1xuICAgICAgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZSA9IGNwUHJlc2V0RW1wdHlNZXNzYWdlO1xuICAgICAgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzID0gY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzcztcblxuICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uID0gY3BBZGRDb2xvckJ1dHRvbjtcbiAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvblRleHQgPSBjcEFkZENvbG9yQnV0dG9uVGV4dDtcbiAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbkNsYXNzID0gY3BBZGRDb2xvckJ1dHRvbkNsYXNzO1xuICAgICAgdGhpcy5jcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3MgPSBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M7XG5cbiAgICAgIGlmICghY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdykge1xuICAgICAgICB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgICB0aGlzLmRpYWxvZ0Fycm93U2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3BPdXRwdXRGb3JtYXQgPT09ICdoZXgnICYmIGNwQWxwaGFDaGFubmVsICE9PSAnYWx3YXlzJyAmJiBjcEFscGhhQ2hhbm5lbCAhPT0gJ2hleDgnKSB7XG4gICAgICAgIHRoaXMuY3BBbHBoYUNoYW5uZWwgPSAnZGlzYWJsZWQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0aWFsQ29sb3IoY29sb3I6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbENvbG9yID0gY29sb3I7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJlc2V0Q29uZmlnKGNwUHJlc2V0TGFiZWw6IHN0cmluZywgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5jcFByZXNldExhYmVsID0gY3BQcmVzZXRMYWJlbDtcbiAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gY3BQcmVzZXRDb2xvcnM7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sb3JUb2dnbGUoY29sb3JEcm9wRW5hYmxlZDogYm9vbGVhbik6dm9pZHtcbiAgICB0aGlzLmNvbG9yVG9nZ2xlID0gY29sb3JEcm9wRW5hYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2xvckZyb21TdHJpbmcodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbiA9IHRydWUsIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBsZXQgaHN2YTogSHN2YTtcblxuICAgIGlmICh0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnYWx3YXlzJyB8fCB0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnaGV4OCcpIHtcbiAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCB0cnVlKTtcblxuICAgICAgaWYgKCFoc3ZhICYmICF0aGlzLmhzdmEpIHtcbiAgICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodmFsdWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodmFsdWUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoIWhzdmEgJiYgIXRoaXMuaHN2YSkge1xuICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodGhpcy5mYWxsYmFja0NvbG9yLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKGhzdmEpIHtcbiAgICAgIHRoaXMuaHN2YSA9IGhzdmE7XG5cbiAgICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKGVtaXQsIHVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICB0aGlzLnNldERpYWxvZ1Bvc2l0aW9uKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSAhPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkRyYWdFbmQoc2xpZGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckRyYWdFbmQoeyBzbGlkZXI6IHNsaWRlciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3IgfSk7XG4gIH1cblxuICBwdWJsaWMgb25EcmFnU3RhcnQoc2xpZGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckRyYWdTdGFydCh7IHNsaWRlcjogc2xpZGVyLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvciB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0lFMTAgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdwb3B1cCcgJiZcbiAgICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBldmVudC50YXJnZXQpICYmXG4gICAgICAgIHRoaXMuY3BJZ25vcmVkRWxlbWVudHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0gPT09IGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgIGlmICghdGhpcy5jcFNhdmVDbGlja091dHNpZGUpIHtcbiAgICAgICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcodGhpcy5pbml0aWFsQ29sb3IsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLmluaXRpYWxDb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkFjY2VwdENvbG9yKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAncG9wdXAnKSB7XG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdXRwdXRDb2xvcikge1xuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvclNlbGVjdGVkKHRoaXMub3V0cHV0Q29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNhbmNlbENvbG9yKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcodGhpcy5pbml0aWFsQ29sb3IsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAncG9wdXAnKSB7XG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLmluaXRpYWxDb2xvciwgdHJ1ZSk7XG5cbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDYW5jZWxlZCgpO1xuICB9XG5cbiAgcHVibGljIG9uRm9ybWF0VG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybWF0ID0gKHRoaXMuZm9ybWF0ICsgMSkgJSAzO1xuICB9XG5cbiAgcHVibGljIG9uQ29sb3JDaGFuZ2UodmFsdWU6IHtzOiBudW1iZXIsIHY6IG51bWJlciwgcmdYOiBudW1iZXIsIHJnWTogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5zID0gdmFsdWUucyAvIHZhbHVlLnJnWDtcbiAgICB0aGlzLmhzdmEudiA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1k7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnbGlnaHRuZXNzJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEudixcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnc2F0dXJhdGlvbicsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLnMsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uSHVlQ2hhbmdlKHZhbHVlOiB7djogbnVtYmVyLCByZ1g6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEuaCA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1g7XG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnaHVlJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuaCxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25BbHBoYUNoYW5nZSh2YWx1ZToge3Y6IG51bWJlciwgcmdYOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLmEgPSB2YWx1ZS52IC8gdmFsdWUucmdYO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ2FscGhhJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuYSxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25IZXhJbnB1dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZVswXSAhPT0gJyMnKSB7XG4gICAgICAgIHZhbHVlID0gJyMnICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHZhbHVlLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgICAgaW5wdXQ6ICdoZXgnLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZWRJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcblxuICAgIHJnYmEuciA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7aW5wdXQ6ICdyZWQnLCB2YWx1ZTogcmdiYS5yLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvcn0pO1xuICB9XG5cbiAgcHVibGljIG9uQmx1ZUlucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpO1xuXG4gICAgcmdiYS5iID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hzdmEocmdiYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtpbnB1dDogJ2JsdWUnLCB2YWx1ZTogcmdiYS5iLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvcn0pO1xuICB9XG5cbiAgcHVibGljIG9uR3JlZW5JbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcblxuICAgIHJnYmEuZyA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2dyZWVuJyxcbiAgICAgIHZhbHVlOiByZ2JhLmcsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWxwaGFJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEuYSA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnYWxwaGEnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5hLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkh1ZUlucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSkge1xuICAgIHRoaXMuaHN2YS5oID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2h1ZScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmgsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTGlnaHRuZXNzSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKTtcblxuICAgIGhzbGEubCA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5oc2xhMmhzdmEoaHNsYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnbGlnaHRuZXNzJyxcbiAgICAgIHZhbHVlOiBoc2xhLmwsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU2F0dXJhdGlvbklucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSk7XG5cbiAgICBoc2xhLnMgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UuaHNsYTJoc3ZhKGhzbGEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ3NhdHVyYXRpb24nLFxuICAgICAgdmFsdWU6IGhzbGEucyxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25BZGRQcmVzZXRDb2xvcihldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoIXRoaXMuY3BQcmVzZXRDb2xvcnMuZmlsdGVyKChjb2xvcikgPT4gKGNvbG9yID09PSB2YWx1ZSkpLmxlbmd0aCkge1xuICAgICAgdGhpcy5jcFByZXNldENvbG9ycyA9IHRoaXMuY3BQcmVzZXRDb2xvcnMuY29uY2F0KHZhbHVlKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5wcmVzZXRDb2xvcnNDaGFuZ2VkKHRoaXMuY3BQcmVzZXRDb2xvcnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlbW92ZVByZXNldENvbG9yKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSB0aGlzLmNwUHJlc2V0Q29sb3JzLmZpbHRlcigoY29sb3IpID0+IChjb2xvciAhPT0gdmFsdWUpKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UucHJlc2V0Q29sb3JzQ2hhbmdlZCh0aGlzLmNwUHJlc2V0Q29sb3JzKTtcbiAgfVxuXG4gIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgc3RhdHVzXG5cbiAgcHJpdmF0ZSBvcGVuQ29sb3JQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNob3cpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2V0RGlhbG9nUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sIDApO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnRvZ2dsZSh0cnVlKTtcblxuICAgICAgaWYgKCF0aGlzLmlzSUUxMCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMubGlzdGVuZXJSZXNpemUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VDb2xvclBpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93KSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS50b2dnbGUoZmFsc2UpO1xuXG4gICAgICBpZiAoIXRoaXMuaXNJRTEwKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubGlzdGVuZXJNb3VzZURvd24pO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5saXN0ZW5lclJlc2l6ZSk7XG5cbiAgICAgIGlmICghdGhpcy5jZFJlZlsnZGVzdHJveWVkJ10pIHtcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2xvclBpY2tlcihlbWl0OiBib29sZWFuID0gdHJ1ZSwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlckRpbU1heCkge1xuICAgICAgY29uc3QgbGFzdE91dHB1dCA9IHRoaXMub3V0cHV0Q29sb3I7XG5cbiAgICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSk7XG4gICAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmRlbm9ybWFsaXplUkdCQSh0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpKTtcblxuICAgICAgY29uc3QgaHVlID0gdGhpcy5zZXJ2aWNlLmRlbm9ybWFsaXplUkdCQSh0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYShuZXcgSHN2YSh0aGlzLnNsaWRlckggfHwgdGhpcy5oc3ZhLmgsIDEsIDEsIDEpKSk7XG5cbiAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgdGhpcy5oc2xhVGV4dCA9IG5ldyBIc2xhKE1hdGgucm91bmQoKGhzbGEuaCkgKiAzNjApLCBNYXRoLnJvdW5kKGhzbGEucyAqIDEwMCksIE1hdGgucm91bmQoaHNsYS5sICogMTAwKSxcbiAgICAgICAgICBNYXRoLnJvdW5kKGhzbGEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIHRoaXMucmdiYVRleHQgPSBuZXcgUmdiYShyZ2JhLnIsIHJnYmEuZywgcmdiYS5iLCBNYXRoLnJvdW5kKHJnYmEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIGNvbnN0IGFsbG93SGV4OCA9IHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnIHx8IHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdoZXg4JztcblxuICAgICAgICB0aGlzLmhleFRleHQgPSB0aGlzLnNlcnZpY2UucmdiYVRvSGV4KHJnYmEsIGFsbG93SGV4OCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaHVlU2xpZGVyQ29sb3IgPSAncmdiKCcgKyBodWUuciArICcsJyArIGh1ZS5nICsgJywnICsgaHVlLmIgKyAnKSc7XG4gICAgICB0aGlzLmFscGhhU2xpZGVyQ29sb3IgPSAncmdiKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnKSc7XG5cbiAgICAgIHRoaXMub3V0cHV0Q29sb3IgPSB0aGlzLnNlcnZpY2Uub3V0cHV0Rm9ybWF0KHRoaXMuaHN2YSwgdGhpcy5jcE91dHB1dEZvcm1hdCwgdGhpcy5jcEFscGhhQ2hhbm5lbCk7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSB0aGlzLnNlcnZpY2Uub3V0cHV0Rm9ybWF0KHRoaXMuaHN2YSwgJ3JnYmEnLCBudWxsKTtcblxuICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyUG9zaXRpb24oXG4gICAgICAgICh0aGlzLnNsaWRlckggfHwgdGhpcy5oc3ZhLmgpICogdGhpcy5zbGlkZXJEaW1NYXguaCAtIDgsXG4gICAgICAgIHRoaXMuaHN2YS5zICogdGhpcy5zbGlkZXJEaW1NYXgucyAtIDgsXG4gICAgICAgICgxIC0gdGhpcy5oc3ZhLnYpICogdGhpcy5zbGlkZXJEaW1NYXgudiAtIDgsXG4gICAgICAgIHRoaXMuaHN2YS5hICogdGhpcy5zbGlkZXJEaW1NYXguYSAtIDhcbiAgICAgICk7XG5cbiAgICAgIGlmIChlbWl0ICYmIGxhc3RPdXRwdXQgIT09IHRoaXMub3V0cHV0Q29sb3IpIHtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5vdXRwdXRDb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgY29sb3IgcGlja2VyIGRpYWxvZyBwb3NpdGlvbmluZ1xuXG4gIHByaXZhdGUgc2V0RGlhbG9nUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpYWxvZ0hlaWdodCA9IHRoaXMuZGlhbG9nRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgbGV0IHBvc2l0aW9uID0gJ3N0YXRpYycsIHRyYW5zZm9ybSA9ICcnLCBzdHlsZSA9IG51bGw7XG5cbiAgICAgIGxldCBwYXJlbnROb2RlOiBhbnkgPSBudWxsLCB0cmFuc2Zvcm1Ob2RlOiBhbnkgPSBudWxsO1xuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAgIHdoaWxlIChub2RlICE9PSBudWxsICYmIG5vZGUudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIHBvc2l0aW9uID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcbiAgICAgICAgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnICYmIHRyYW5zZm9ybU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1Ob2RlID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0cmFuc2Zvcm1Ob2RlO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib3hEaXJlY3RpdmUgPSB0aGlzLmNyZWF0ZUJveCh0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgKHBvc2l0aW9uICE9PSAnZml4ZWQnKSk7XG5cbiAgICAgIGlmICh0aGlzLnVzZVJvb3RWaWV3Q29udGFpbmVyIHx8IChwb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJiAhcGFyZW50Tm9kZSkpIHtcbiAgICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wO1xuICAgICAgICB0aGlzLmxlZnQgPSBib3hEaXJlY3RpdmUubGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib3hQYXJlbnQgPSB0aGlzLmNyZWF0ZUJveChwYXJlbnROb2RlLCAocG9zaXRpb24gIT09ICdmaXhlZCcpKTtcblxuICAgICAgICB0aGlzLnRvcCA9IGJveERpcmVjdGl2ZS50b3AgLSBib3hQYXJlbnQudG9wO1xuICAgICAgICB0aGlzLmxlZnQgPSBib3hEaXJlY3RpdmUubGVmdCAtIGJveFBhcmVudC5sZWZ0O1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICogdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgICAgdGhpcy5sZWZ0IC09IHRoaXMuY3BXaWR0aCArIHRoaXMuZGlhbG9nQXJyb3dTaXplIC0gMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcFBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICB0aGlzLmFycm93VG9wID0gZGlhbG9nSGVpZ2h0IC0gMTtcblxuICAgICAgICB0aGlzLnRvcCAtPSBkaWFsb2dIZWlnaHQgKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZTtcbiAgICAgICAgdGhpcy5sZWZ0ICs9IHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAqIGJveERpcmVjdGl2ZS53aWR0aCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCArIHRoaXMuZGlhbG9nQXJyb3dTaXplO1xuICAgICAgICB0aGlzLmxlZnQgKz0gdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwICogYm94RGlyZWN0aXZlLndpZHRoIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKiB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgICB0aGlzLmxlZnQgKz0gYm94RGlyZWN0aXZlLndpZHRoICsgdGhpcy5kaWFsb2dBcnJvd1NpemUgLSAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgcG9zaXRpb25pbmcgYW5kIG9wZW5pbmdcblxuICBwcml2YXRlIGNyZWF0ZUJveChlbGVtZW50OiBhbnksIG9mZnNldDogYm9vbGVhbik6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAob2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogMCksXG4gICAgICBsZWZ0OiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyAob2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogMCksXG4gICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBpc0Rlc2NlbmRhbnQocGFyZW50OiBhbnksIGNoaWxkOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgbm9kZTogYW55ID0gY2hpbGQucGFyZW50Tm9kZTtcblxuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdG9yLCBSZWZsZWN0aXZlSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvci1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2NvbG9yUGlja2VyXScsXG4gIGV4cG9ydEFzOiAnbmd4Q29sb3JQaWNrZXInXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRpYWxvZzogYW55O1xuXG4gIHByaXZhdGUgZGlhbG9nQ3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGlnbm9yZUNoYW5nZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGNtcFJlZjogQ29tcG9uZW50UmVmPENvbG9yUGlja2VyQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjb2xvclBpY2tlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNwV2lkdGg6IHN0cmluZyA9ICcyMzBweCc7XG4gIEBJbnB1dCgpIGNwSGVpZ2h0OiBzdHJpbmcgPSAnYXV0byc7XG5cbiAgQElucHV0KCkgY3BUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3JUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcElnbm9yZWRFbGVtZW50czogYW55ID0gW107XG5cbiAgQElucHV0KCkgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcEFscGhhQ2hhbm5lbDogc3RyaW5nID0gJ2VuYWJsZWQnO1xuICBASW5wdXQoKSBjcE91dHB1dEZvcm1hdDogc3RyaW5nID0gJ2hleCc7XG5cbiAgQElucHV0KCkgY3BGYWxsYmFja0NvbG9yOiBzdHJpbmcgPSAnI2ZmZic7XG5cbiAgQElucHV0KCkgY3BEaWFsb2dEaXNwbGF5OiBzdHJpbmcgPSAncG9wdXAnO1xuXG4gIEBJbnB1dCgpIGNwU2F2ZUNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgY3BVc2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNwUG9zaXRpb246IHN0cmluZyA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZyA9ICcwJSc7XG4gIEBJbnB1dCgpIGNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcE9LQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNwT0tCdXR0b25UZXh0OiBzdHJpbmcgPSAnT0snO1xuICBASW5wdXQoKSBjcE9LQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1vay1idXR0b24tY2xhc3MnO1xuXG4gIEBJbnB1dCgpIGNwQ2FuY2VsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nID0gJ0NhbmNlbCc7XG4gIEBJbnB1dCgpIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1jYW5jZWwtYnV0dG9uLWNsYXNzJztcblxuICBASW5wdXQoKSBjcFByZXNldExhYmVsOiBzdHJpbmcgPSAnUHJlc2V0IGNvbG9ycyc7XG4gIEBJbnB1dCgpIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlciA9IDY7XG5cbiAgQElucHV0KCkgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZyA9ICdObyBjb2xvcnMgYWRkZWQnO1xuICBASW5wdXQoKSBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmcgPSAncHJlc2V0LWVtcHR5LW1lc3NhZ2UnO1xuXG4gIEBJbnB1dCgpIGNwQWRkQ29sb3JCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZyA9ICdBZGQgY29sb3InO1xuICBASW5wdXQoKSBjcEFkZENvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1hZGQtY29sb3ItYnV0dG9uLWNsYXNzJztcblxuICBASW5wdXQoKSBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1yZW1vdmUtY29sb3ItYnV0dG9uLWNsYXNzJztcblxuICBAT3V0cHV0KCkgY3BJbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcblxuICBAT3V0cHV0KCkgY3BUb2dnbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjcFNsaWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcbiAgQE91dHB1dCgpIGNwU2xpZGVyRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQE91dHB1dCgpIGNwU2xpZGVyRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlck9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlckNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuICBAT3V0cHV0KCkgY29sb3JQaWNrZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oZmFsc2UpO1xuXG4gIEBPdXRwdXQoKSBjcFByZXNldENvbG9yc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIGhhbmRsZUNsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Rm9jdXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSkgaGFuZGxlRm9jdXMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRGb2N1cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBoYW5kbGVJbnB1dChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3NlcnZpY2U6IENvbG9yUGlja2VyU2VydmljZSkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbXBSZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNwVG9nZ2xlKSB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgY2hhbmdlcy5jcFRvZ2dsZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nICYmICFjaGFuZ2VzLmNwVG9nZ2xlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZURpYWxvZygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihjaGFuZ2VzLmNvbG9yVG9nZ2xlKXtcbiAgICAgIHRoaXMuZGlhbG9nLnNldENvbG9yVG9nZ2xlKGNoYW5nZXMuY29sb3JUb2dnbGUuY3VycmVudFZhbHVlKVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jb2xvclBpY2tlcikge1xuICAgICAgaWYgKHRoaXMuZGlhbG9nICYmICF0aGlzLmlnbm9yZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgICAgIHRoaXMuZGlhbG9nLnNldEluaXRpYWxDb2xvcihjaGFuZ2VzLmNvbG9yUGlja2VyLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpYWxvZy5zZXRDb2xvckZyb21TdHJpbmcoY2hhbmdlcy5jb2xvclBpY2tlci5jdXJyZW50VmFsdWUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pZ25vcmVDaGFuZ2VzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuY3BQcmVzZXRMYWJlbCB8fCBjaGFuZ2VzLmNwUHJlc2V0Q29sb3JzKSB7XG4gICAgICBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuc2V0UHJlc2V0Q29uZmlnKHRoaXMuY3BQcmVzZXRMYWJlbCwgdGhpcy5jcFByZXNldENvbG9ycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZ0NyZWF0ZWQpIHtcbiAgICAgIGxldCB2Y1JlZiA9IHRoaXMudmNSZWY7XG5cbiAgICAgIHRoaXMuZGlhbG9nQ3JlYXRlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmNwVXNlUm9vdFZpZXdDb250YWluZXIgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgIT09ICdpbmxpbmUnKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzT2ZSb290Q29tcG9uZW50ID0gdGhpcy5hcHBSZWYuY29tcG9uZW50VHlwZXNbMF07XG4gICAgICAgIGNvbnN0IGFwcEluc3RhbmNlID0gdGhpcy5pbmplY3Rvci5nZXQoY2xhc3NPZlJvb3RDb21wb25lbnQpO1xuXG4gICAgICAgIHZjUmVmID0gYXBwSW5zdGFuY2UudmNSZWYgfHwgYXBwSW5zdGFuY2Uudmlld0NvbnRhaW5lclJlZiB8fCB0aGlzLnZjUmVmO1xuXG4gICAgICAgIGlmICh2Y1JlZiA9PT0gdGhpcy52Y1JlZikge1xuICAgICAgICAgIGNvbnNvbGUud2FybignWW91IGFyZSB1c2luZyBjcFVzZVJvb3RWaWV3Q29udGFpbmVyLCAnICtcbiAgICAgICAgICAgICdidXQgdGhlIHJvb3QgY29tcG9uZW50IGlzIG5vdCBleHBvc2luZyB2aWV3Q29udGFpbmVyUmVmIScgK1xuICAgICAgICAgICAgJ1BsZWFzZSBleHBvc2UgaXQgYnkgYWRkaW5nIFxcJ3B1YmxpYyB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxcJyB0byB0aGUgY29uc3RydWN0b3IuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcEZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb2xvclBpY2tlckNvbXBvbmVudCk7XG4gICAgICBjb25zdCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoW10sIHZjUmVmLnBhcmVudEluamVjdG9yKTtcblxuICAgICAgdGhpcy5jbXBSZWYgPSB2Y1JlZi5jcmVhdGVDb21wb25lbnQoY29tcEZhY3RvcnksIDAsIGluamVjdG9yLCBbXSk7XG5cbiAgICAgIHRoaXMuY21wUmVmLmluc3RhbmNlLnNldHVwRGlhbG9nKFxuICAgICAgICB0aGlzLmNvbG9yVG9nZ2xlLFxuICAgICAgICB0aGlzLCB0aGlzLmVsUmVmLCB0aGlzLmNvbG9yUGlja2VyLFxuICAgICAgICB0aGlzLmNwV2lkdGgsIHRoaXMuY3BIZWlnaHQsIHRoaXMuY3BEaWFsb2dEaXNwbGF5LCB0aGlzLmNwRmFsbGJhY2tDb2xvcixcbiAgICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCwgdGhpcy5jcE91dHB1dEZvcm1hdCwgdGhpcy5jcERpc2FibGVJbnB1dCxcbiAgICAgICAgdGhpcy5jcElnbm9yZWRFbGVtZW50cywgdGhpcy5jcFNhdmVDbGlja091dHNpZGUsIHRoaXMuY3BVc2VSb290Vmlld0NvbnRhaW5lcixcbiAgICAgICAgdGhpcy5jcFBvc2l0aW9uLCB0aGlzLmNwUG9zaXRpb25PZmZzZXQsIHRoaXMuY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdyxcbiAgICAgICAgdGhpcy5jcFByZXNldExhYmVsLCB0aGlzLmNwUHJlc2V0Q29sb3JzLCB0aGlzLmNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoLFxuICAgICAgICB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlLCB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3MsXG4gICAgICAgIHRoaXMuY3BPS0J1dHRvbiwgdGhpcy5jcE9LQnV0dG9uQ2xhc3MsIHRoaXMuY3BPS0J1dHRvblRleHQsXG4gICAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b24sIHRoaXMuY3BDYW5jZWxCdXR0b25DbGFzcywgdGhpcy5jcENhbmNlbEJ1dHRvblRleHQsXG4gICAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbiwgdGhpcy5jcEFkZENvbG9yQnV0dG9uQ2xhc3MsIHRoaXMuY3BBZGRDb2xvckJ1dHRvblRleHQsXG4gICAgICAgIHRoaXMuY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzKTtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0aGlzLmNtcFJlZi5pbnN0YW5jZTtcblxuICAgICAgICBpZiAodGhpcy52Y1JlZiAhPT0gdmNSZWYpIHtcbiAgICAgICAgICB0aGlzLmNtcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICB0aGlzLmRpYWxvZy5vcGVuRGlhbG9nKHRoaXMuY29sb3JQaWNrZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgIHRoaXMuZGlhbG9nLmNsb3NlRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY3BUb2dnbGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJPcGVuLmVtaXQodGhpcy5jb2xvclBpY2tlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDbG9zZS5lbWl0KHRoaXMuY29sb3JQaWNrZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb2xvckNoYW5nZWQodmFsdWU6IHN0cmluZywgaWdub3JlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlQ2hhbmdlcyA9IGlnbm9yZTtcblxuICAgIHRoaXMuY29sb3JQaWNrZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgY29sb3JDYW5jZWxlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyQ2FuY2VsLmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xvclNlbGVjdGVkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyU2VsZWN0LmVtaXQodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGlucHV0Rm9jdXMoKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLmNwSWdub3JlZEVsZW1lbnRzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtID09PSBlbGVtZW50KTtcblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhaWdub3JlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMub3BlbkRpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbnB1dENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICB0aGlzLmRpYWxvZy5zZXRDb2xvckZyb21TdHJpbmcodmFsdWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyID0gdmFsdWU7XG5cbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDaGFuZ2UuZW1pdCh0aGlzLmNvbG9yUGlja2VyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5wdXRDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNwSW5wdXRDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgc2xpZGVyQ2hhbmdlZChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jcFNsaWRlckNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlkZXJEcmFnRW5kKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNwU2xpZGVyRHJhZ0VuZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlkZXJEcmFnU3RhcnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY3BTbGlkZXJEcmFnU3RhcnQuZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgcHJlc2V0Q29sb3JzQ2hhbmdlZCh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLmNwUHJlc2V0Q29sb3JzQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3JldmVyc2UnXG59KVxuZXhwb3J0IGNsYXNzIFJldmVyc2VQaXBlIHtcbiAgdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERuZE1vZHVsZSB9IGZyb20gJ25nMi1kbmQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyRGlyZWN0aXZlLCBUZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xvcnBpY2tlci9oZWxwZXJzJztcbmltcG9ydCB7IENvbG9yUGlja2VyU2VydmljZSB9IGZyb20gJy4vY29sb3JwaWNrZXIvY29sb3ItcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sb3JXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9jb2xvci13aWRnZXQvY29sb3Itd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWNvbG9yZHJvcC9zZWFyY2gtY29sb3Jkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkZhYk1vZHVsZSwgU2VtVWlCdXR0b25Nb2R1bGUsIFNlbVVpQnV0dG9uRG5kTW9kdWxlIH0gZnJvbSAnQGZyb250ci9zZW0tdWknO1xuaW1wb3J0IHsgUmV2ZXJzZVBpcGUgfSBmcm9tICcuL3NlbS1hcnJheS1yZXZlcnNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTZW1VaUJ1dHRvbkZhYk1vZHVsZSxcbiAgICBTZW1VaUJ1dHRvbk1vZHVsZSxcbiAgICBTZW1VaUJ1dHRvbkRuZE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERuZE1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbG9yV2lkZ2V0Q29tcG9uZW50LFxuICAgIFNlYXJjaENvbG9yZHJvcENvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckNvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckRpcmVjdGl2ZSxcbiAgICBUZXh0RGlyZWN0aXZlLFxuICAgIFNsaWRlckRpcmVjdGl2ZSxcbiAgICBSZXZlcnNlUGlwZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsgQ29sb3JQaWNrZXJDb21wb25lbnQgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbG9yV2lkZ2V0Q29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyRGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogWyBDb2xvclBpY2tlclNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBTZW1Db2xvcnNNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbmplY3QiLCJQTEFURk9STV9JRCIsIklucHV0IiwiT3V0cHV0IiwiRGlyZWN0aXZlIiwiSG9zdExpc3RlbmVyIiwiRWxlbWVudFJlZiIsImlzUGxhdGZvcm1Ccm93c2VyIiwiVmlld0VuY2Fwc3VsYXRpb24iLCJDaGFuZ2VEZXRlY3RvclJlZiIsIlZpZXdDaGlsZCIsIlJlZmxlY3RpdmVJbmplY3RvciIsIkluamVjdG9yIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiQXBwbGljYXRpb25SZWYiLCJWaWV3Q29udGFpbmVyUmVmIiwiUGlwZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiU2VtVWlCdXR0b25GYWJNb2R1bGUiLCJTZW1VaUJ1dHRvbk1vZHVsZSIsIlNlbVVpQnV0dG9uRG5kTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiRG5kTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OytCQUpEO0tBUUM7Ozs7OztBQ1JEO1FBd0RFLDhCQUFtRCxVQUFlO1lBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztZQUdsRSxzQkFBaUIsR0FBc0IsSUFBSUMsZUFBWSxFQUFPLENBQUM7U0FITzs7Ozs7UUFJdEUsaURBQWtCOzs7O1lBQWxCLFVBQW1CLEtBQWlCO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQzs7Ozs7UUFFRCwwQ0FBVzs7OztZQUFYLFVBQVksT0FBWTs7Ozs7OzthQU92Qjs7b0JBL0RGQyxZQUFTLFNBQUM7O3dCQUVULFFBQVEs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