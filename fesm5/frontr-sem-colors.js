import { Injectable, Pipe, NgModule, Directive, Input, Output, EventEmitter, HostListener, ApplicationRef, ElementRef, ViewContainerRef, Injector, ReflectiveInjector, ComponentFactoryResolver, Component, ViewChild, ViewEncapsulation, ChangeDetectorRef, PLATFORM_ID, Inject, defineInjectable } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SemUiButtonFabModule, SemUiButtonModule, SemUiButtonDndModule } from '@frontr/sem-ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemColorsService = /** @class */ (function () {
    function SemColorsService() {
    }
    SemColorsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    SemColorsService.ctorParameters = function () { return []; };
    /** @nocollapse */ SemColorsService.ngInjectableDef = defineInjectable({ factory: function SemColorsService_Factory() { return new SemColorsService(); }, token: SemColorsService, providedIn: "root" });
    return SemColorsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ColorWidgetComponent = /** @class */ (function () {
    function ColorWidgetComponent(platformId) {
        this.platformId = platformId;
        this.updateColorPreset = new EventEmitter();
    }
    Object.defineProperty(ColorWidgetComponent.prototype, "userColorsPallete", {
        set: /**
         * @param {?} colorlist
         * @return {?}
         */
        function (colorlist) {
            this.colorPallete = colorlist;
            if (colorlist.length === 0) {
                this.lastColor = '#ffffff';
            }
            if (colorlist.length !== 0) {
                this.lastColor = colorlist[colorlist.length - 1];
            }
        },
        enumerable: true,
        configurable: true
    });
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
        if (isPlatformBrowser(this.platformId)) {
            if (changes.colorDropEnabled) {
                this.colorDropEnabled = changes.colorDropEnabled.currentValue;
            }
        }
    };
    ColorWidgetComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'div[sembler-color-widget]',
                    template: " <!--// RGBA-->\n  <span\n    [colorToggle]=\"colorDropEnabled\"\n    [cpWidth]=\"overlayWidth\"\n    [cpAlphaChannel]=\"'always'\"\n    [cpPresetColors]=\"colorPallete\"\n    [cpAddColorButton]=\"true\"\n    [style.background]=\"lastColor\"\n    [cpToggle]=\"true\"\n    [cpDialogDisplay]=\"'inline'\"\n    [cpCancelButton]=\"false\"\n    [cpCancelButtonClass]= \"'btn btn-primary btn-xs'\"\n    [(colorPicker)]=\"lastColor\"\n    (cpPresetColorsChange)=\"updatedColorPreset($event)\"\n  >\n  </span>\n\n"
                },] },
    ];
    /** @nocollapse */
    ColorWidgetComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ColorWidgetComponent.propDecorators = {
        colorDropEnabled: [{ type: Input }],
        overlayWidth: [{ type: Input }],
        userColorsPallete: [{ type: Input, args: ['userColorsPallete',] }],
        updateColorPreset: [{ type: Output }]
    };
    return ColorWidgetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SearchColordropComponent = /** @class */ (function () {
    function SearchColordropComponent() {
        this.saveColor = new EventEmitter();
        this.changeSelectedColor = new EventEmitter();
    }
    Object.defineProperty(SearchColordropComponent.prototype, "selected", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'sembler-search-colordrop',
                    template: "<span class=\"input-sufix\">\n       <input\n         class=\"sem-input\"\n         type=\"text\"\n         [ngModel]=\"color\"\n         (ngModelChange)=\"changeColor($event)\"\n         [value]='color'\n         #colorValue\n       />\n      <span\n      (click)=\"addColor(colorValue)\"\n      class=\"sem-icon-search sufix\">\n      </span>\n</span>\n\n",
                    styles: [":host{display:block}"]
                },] },
    ];
    /** @nocollapse */
    SearchColordropComponent.ctorParameters = function () { return []; };
    SearchColordropComponent.propDecorators = {
        selected: [{ type: Input, args: ['selected',] }],
        saveColor: [{ type: Output }],
        changeSelectedColor: [{ type: Output }]
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
var TextDirective = /** @class */ (function () {
    function TextDirective() {
        this.newValue = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[text]'
                },] },
    ];
    TextDirective.propDecorators = {
        rg: [{ type: Input }],
        text: [{ type: Input }],
        newValue: [{ type: Output }],
        inputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return TextDirective;
}());
var SliderDirective = /** @class */ (function () {
    function SliderDirective(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.dragEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.newValue = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[slider]'
                },] },
    ];
    /** @nocollapse */
    SliderDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SliderDirective.propDecorators = {
        rgX: [{ type: Input }],
        rgY: [{ type: Input }],
        slider: [{ type: Input }],
        dragEnd: [{ type: Output }],
        dragStart: [{ type: Output }],
        newValue: [{ type: Output }],
        mouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        touchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }]
    };
    return SliderDirective;
}());
var SliderPosition = /** @class */ (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());
var SliderDimension = /** @class */ (function () {
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
var Cmyk = /** @class */ (function () {
    function Cmyk(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
    return Cmyk;
}());
var Hsla = /** @class */ (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());
var Hsva = /** @class */ (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());
var Rgba = /** @class */ (function () {
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
var ColorPickerService = /** @class */ (function () {
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
        if (colorString === void 0) { colorString = ''; }
        if (allowHex8 === void 0) { allowHex8 = false; }
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
        { type: Injectable },
    ];
    /** @nocollapse */
    ColorPickerService.ctorParameters = function () { return []; };
    return ColorPickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ColorPickerComponent = /** @class */ (function () {
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
        if (isPlatformBrowser(this.platformId)) {
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
        if (isPlatformBrowser(this.platformId)) {
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
        if (isPlatformBrowser(this.platformId) && this.cpWidth !== 100) {
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
        if (emit === void 0) { emit = true; }
        if (isPlatformBrowser(this.platformId)) {
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
        if (isPlatformBrowser(this.platformId)) {
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
        if (isPlatformBrowser(this.platformId)) {
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
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
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
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.openColorPicker = /**
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
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
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
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.setDialogPosition = /**
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
    /**
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    ColorPickerComponent.prototype.createBox = /**
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
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: '[color-picker]',
                    template: "<div\n  #dialogPopup\n  class=\"color-picker\"\n  [style.visibility]=\"hidden || !show ? 'hidden' : 'visible'\" [style.top.px]=\"top\"\n  [style.left.px]=\"left\"\n  [style.position]=\"position\"\n  [style.height.px]=\"cpHeight\"\n  [style.width]=\"colorToggle ? '100%' : cpWidth + 'px'\"\n>\n  <div\n    *ngIf=\"!colorToggle\"\n    class=\"color-input-container sem-color-light-inputs pb1\">\n    <div class=\"block py1\">\n      <div class=\"flex justify-end  sem-typo--figcaption\"\n        *ngIf=\"!cpDisableInput\" (click)=\"onFormatToggle()\">\n        <span class=\"self-start sem--link \">Change format</span>\n        <div class=\"sem-color-switch--control--link\"></div>\n      </div>\n    </div>\n    <div class=\"sem-color-switch px1 flex items-center\">\n      <ul class=\"list-reset sem-color-switch--colors flex-auto\">\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes mr1 \"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"360\"\n                [text] [rg]=\"360\" [value]=\"hslaText?.h\" (newValue)=\"onHueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">H</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.s\" (newValue)=\"onSaturationInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">S</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.l\" (newValue)=\"onLightnessInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">L</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\" [value]=\"hslaText?.a\" (newValue)=\"onAlphaInput($event)\"/>\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 1 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (newValue)=\"onRedInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">R</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (newValue)=\"onGreenInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">G</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (newValue)=\"onBlueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">B</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"sem-input boxes\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\"\n                min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\"\n                [value]=\"rgbaText?.a\" (newValue)=\"onAlphaInput($event)\"\n              />\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 0 ? 'none' : 'block'\">\n\n            <span class=\"input-sufix\">\n              <input\n                class=\"sem-input\"\n                [text] [value]=\"hexText\"\n                (blur)=\"onHexInput(null)\"\n                (newValue)=\"onHexInput($event)\"/>\n              <span\n                (click)=\"addColor()\"\n                class=\"sem-icon-search sufix\">\n              </span>\n            </span>\n          <span class=\"block center sem-typo--figcaption\">Hex</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"px1\">\n    <div\n      #hueSlider\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      class=\"hue\"\n      [slider] [rgX]=\"1\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n      <div class=\"cursor\" [style.left.px]=\"slider.h\"></div>\n\n    </div>\n    <div\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      *ngIf=\"cpDialogDisplay=='popup'\"\n      class=\"arrow arrow-{{cpPosition}}\"\n      [style.top.px]=\"arrowTop\"></div>\n    <div\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      class=\"saturation-lightness\"\n      [slider] [rgX]=\"1\" [rgY]=\"1\"\n      [style.background-color]=\"hueSliderColor\"\n      (newValue)=\"onColorChange($event)\"\n      (dragStart)=\"onDragStart('saturation-lightness')\"\n      (dragEnd)=\"onDragEnd('saturation-lightness')\">\n      <div class=\"cursor\" [style.top.px]=\"slider.v\" [style.left.px]=\"slider.s\"></div>\n    </div>\n    <div\n      #alphaSlider\n      class=\"alpha\"\n      [slider]\n      [rgX]=\"1\"\n      [style.display]=\"colorToggle ? 'none' : 'block'\"\n      [style.background-color]=\"alphaSliderColor\"\n      (newValue)=\"onAlphaChange($event)\"\n      (dragStart)=\"onDragStart('alpha')\"\n      (dragEnd)=\"onDragEnd('alpha')\">\n      <div class=\"cursor\" [style.left.px]=\"slider.a\"></div>\n    </div>\n  </div>\n\n  <!--Color drops-->\n  <div\n    *ngIf=\"colorToggle\"\n    class=\"sem-color-drops\">\n\n    <ng-container *ngIf=\"cpPresetColors?.length || cpAddColorButton\">\n      <ul *ngIf=\"cpPresetColors?.length\" class=\"sem-color-list sem-list-reset\">\n        <li\n          *ngFor=\"let color of cpPresetColors | reverse\"\n          [style.backgroundColor]=\"color\"\n          (click)=\"setColorFromString(color)\"\n          class=\"block\"\n          dnd-draggable\n          [dragEnabled]=\"true\"\n          [dragData]=\"color\"\n          (onDragStart)=\"onDragStart(color)\"\n          [dropZones]=\"['widget-dropZone']\"\n        >\n          <span class=\"right-align block\"> {{color}}</span>\n          <span\n            *ngIf=\"cpAddColorButton\"\n            class=\"color-delete sem-icon-close\"\n            (click)=\"onRemovePresetColor($event, color)\"></span>\n        </li>\n      </ul>\n      <div\n        *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\n        class=\"{{cpPresetEmptyMessageClass}}\n          \">{{cpPresetEmptyMessage}}</div>\n    </ng-container>\n  </div>\n\n  <div\n    *ngIf=\"!colorToggle\"\n    class=\"sem-color-swatches px1\">\n    <!--<div class=\"sem-color-swatches_current\"></div>-->\n      <button\n        medium\n        [style.background-color]=\"selectedColor\"\n        semui-button-dnd sem-importance=\"primary\"\n        *ngIf=\"cpAddColorButton\"\n        [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\n        (click)=\"onAddPresetColor($event, selectedColor)\"\n      >\n        Add Color\n      </button>\n\n    <div\n      *ngIf=\"cpPresetColors?.length || cpAddColorButton\"\n      class=\"sem-color-swatches_preselected\">\n\n      <div\n        *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\n        class=\"{{cpPresetEmptyMessageClass}}\n          \">\n        {{cpPresetEmptyMessage}}\n      </div>\n\n      <span\n        *ngFor=\"let color of cpPresetColors | reverse\"\n        class=\"sem-button-rain-drop\"\n        [style.backgroundColor]=\"color\"\n        (click)=\"setColorFromString(color)\"\n      >\n          <span\n            *ngIf=\"cpAddColorButton\"\n            (click)=\"onRemovePresetColor($event, color)\"\n            class=\"sem-button-circle sem-button-delete sem-icon-close\">\n          </span>\n       </span>\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"colorToggle\"\n    class=\"dialog-container--footer color-input-container sem-color-light-inputs\">\n    <div\n      class=\"flex justify-end mb1 pt1 sem-typo--figcaption\"\n      *ngIf=\"!cpDisableInput\" (click)=\"onFormatToggle()\"\n    >\n      <span class=\"self-start sem--link \">Change format</span>\n      <div class=\"sem-color-switch--control--link\"></div>\n    </div>\n    <div class=\"sem-color-switch flex items-center\">\n      <ul class=\"list-reset sem-color-switch--colors flex-auto\">\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around pb1\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes mr1 \"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"360\"\n                [text] [rg]=\"360\" [value]=\"hslaText?.h\" (newValue)=\"onHueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">H</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.s\" (newValue)=\"onSaturationInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">S</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.l\" (newValue)=\"onLightnessInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">L</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\" [value]=\"hslaText?.a\" (newValue)=\"onAlphaInput($event)\"/>\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 1 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (newValue)=\"onRedInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">R</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (newValue)=\"onGreenInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">G</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (newValue)=\"onBlueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">B</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"sem-input boxes\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\"\n                min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\"\n                [value]=\"rgbaText?.a\" (newValue)=\"onAlphaInput($event)\"\n              />\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 0 ? 'none' : 'block'\">\n                  <span class=\"input-grp\">\n                      <input\n                        type=\"text\"\n                        class=\"sem-input\"\n                        [text] [value]=\"hexText\"\n                        (blur)=\"onHexInput(null)\"\n                        (newValue)=\"onHexInput($event)\"\n                      >\n                      <button\n                        sem-btn-fab\n                        corner=\"none\"\n                        semui-theme=\"light\"\n                        sem-importance=\"primary\"\n                        small\n                        *ngIf=\"cpAddColorButton\"\n                        [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\n                        (click)=\"onAddPresetColor($event, selectedColor)\"\n                      >\n                        <span class=\"sem-icon-send button-send\"\n                        ></span>\n                      </button>\n                  </span>\n          <span class=\"block center sem-typo--figcaption\">Hex</span>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n\n  <!-- START -->\n\n\n\n\n <!-- END -->\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
                    styles: ["body{margin:0;font-size:100%}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}[class*=\" sem-icon-\"],[class^=sem-icon-]{font-family:sembler-ico!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sem-icon-drag:before{content:\"\\e946\";color:#ccc}.sem-icon-product:before{content:\"\\e913\";color:#444d63}.sem-icon-form:before{content:\"\\e92a\";color:#444d63}.sem-icon-location:before{content:\"\\e914\";color:#444d63}.sem-icon-chart:before{content:\"\\e935\";color:#444d63}.sem-icon-text:before{content:\"\\e945\";color:#444d63}.sem-icon-location2:before{content:\"\\e947\";color:#444d63}.sem-icon-I:before{content:\"\\e906\"}.sem-icon-S:before{content:\"\\e907\"}.sem-icon-U:before{content:\"\\e908\"}.sem-icon-B:before{content:\"\\e909\"}.sem-icon-justify:before{content:\"\\e90c\";color:#ccc}.sem-icon-left:before{content:\"\\e910\";color:#ccc}.sem-icon-middle:before{content:\"\\e911\";color:#ccc}.sem-icon-right:before{content:\"\\e912\";color:#ccc}.sem-icon-colour2:before{content:\"\\e90a\"}.sem-icon-brush:before{content:\"\\e90b\"}.sem-icon-folder2:before{content:\"\\e90d\"}.sem-icon-logout2:before{content:\"\\e90e\"}.sem-icon-ol2:before{content:\"\\e90f\";color:#ccc}.sem-icon-send:before{content:\"\\e905\";color:#05dcb6}.sem-icon-repeat:before{content:\"\\e900\"}.sem-icon-crop:before{content:\"\\e901\"}.sem-icon-case:before{content:\"\\e902\"}.sem-icon-resize:before{content:\"\\e903\"}.sem-icon-check:before{content:\"\\e904\"}.sem-icon-ol:before{content:\"\\e915\";color:#ccc}.sem-icon-ul:before{content:\"\\e916\";color:#ccc}.sem-icon-folder:before{content:\"\\e917\"}.sem-icon-close:before{content:\"\\e918\"}.sem-icon-inbox:before{content:\"\\e919\"}.sem-icon-home:before{content:\"\\e91a\"}.sem-icon-share:before{content:\"\\e91b\"}.sem-icon-hamburger:before{content:\"\\e91c\"}.sem-icon-lock:before{content:\"\\e91d\"}.sem-icon-unlock:before{content:\"\\e91e\"}.sem-icon-ellipse:before{content:\"\\e91f\"}.sem-icon-volume:before{content:\"\\e920\"}.sem-icon-play:before{content:\"\\e921\"}.sem-icon-video:before{content:\"\\e922\";color:#444d63}.sem-icon-design:before{content:\"\\e923\"}.sem-icon-address:before{content:\"\\e924\"}.sem-icon-center_align:before{content:\"\\e925\";color:#ccc}.sem-icon-justify2:before{content:\"\\e926\";color:#ccc}.sem-icon-right_align:before{content:\"\\e927\";color:#ccc}.sem-icon-left_align:before{content:\"\\e928\";color:#ccc}.sem-icon-carousel:before{content:\"\\e929\"}.sem-icon-image:before{content:\"\\e92b\";color:#444d63}.sem-icon-back:before{content:\"\\e92c\"}.sem-icon-delete:before{content:\"\\e92d\";color:#d0021b}.sem-icon-duplicate:before{content:\"\\e92e\"}.sem-icon-link:before{content:\"\\e92f\"}.sem-icon-style:before{content:\"\\e930\"}.sem-icon-colour:before{content:\"\\e931\"}.sem-icon-add_accent .path1:before{content:\"\\e932\";color:#fafafa}.sem-icon-add_accent .path2:before{content:\"\\e933\";margin-left:-1em;color:#05dcb6}.sem-icon-send2:before{content:\"\\e934\";color:#05dcb6}.sem-icon-search:before{content:\"\\e936\"}.sem-icon-colour_accent .path1:before{content:\"\\e937\";color:#05dcb6}.sem-icon-colour_accent .path2:before{content:\"\\e938\";margin-left:-1em;color:#fff}.sem-icon-profile-accent .path1:before{content:\"\\e939\";color:#05dcb6}.sem-icon-profile-accent .path2:before{content:\"\\e93a\";margin-left:-1em;color:#fff}.sem-icon-down_arrow:before{content:\"\\e93b\"}.sem-icon-chat_accent .path1:before{content:\"\\e93c\";color:#fafafa}.sem-icon-chat_accent .path2:before{content:\"\\e93d\";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path3:before{content:\"\\e93e\";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path4:before{content:\"\\e93f\";margin-left:-1em;color:#05dcb6}.sem-icon-logout:before{content:\"\\e940\"}.sem-icon-payment:before{content:\"\\e941\"}.sem-icon-settings:before{content:\"\\e942\"}.sem-icon-sites:before{content:\"\\e943\"}.sem-icon-profile:before{content:\"\\e944\"}.sem-list-reset{list-style:none;padding-left:0;margin:0}.sem--corner ._top{border-radius:50% 0 50% 50%;background-clip:padding-box}.semui-form-select select{display:inline-block;margin-left:10%;width:80%;margin-right:10%;border:1px solid #d8cfcf;border-radius:10px;font-size:1.8em;color:#d8cfcf;cursor:pointer}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input.sem-input{width:calc(100%);outline:0;border-radius:10px 10px 0;background-clip:padding-box;border:1px solid #9498a3}.no-padding-list .sem-ul .sem-li,.no-padding-list .sem-ul-icon-list .sem-li{padding-top:0;padding-bottom:0}.sem-ul-icon-list .sem-li{white-space:nowrap;-webkit-font-smoothing:antialiased;padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none}.sem-ul-icon-list .sem-li:not([disabled]){cursor:pointer}.sem-ul-icon-list .sem-li.active img.icon-default{display:none}.sem-ul-icon-list .sem-li.active img.icon-hover{display:inline-block}.sem-ul-icon-list .sem-li img{display:inline-block;vertical-align:middle;margin-bottom:4px}.sem-ul-icon-list .sem-li img.icon-hover{display:none}.sem-ul{list-style:none;width:100%;margin:0 auto;padding:0}.sem-ul .sem-li{padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none;border-bottom:1px solid #ccc}.sem-ul .sem-li:not([disabled]){cursor:pointer}.sem-ul .sem-li.active{border-radius:7px 0 0 7px;background-clip:padding-box}ul.corner_all li:first-child{border-radius:6px 6px 0 0;background-clip:padding-box}ul.corner_all li:last-child{border-radius:0 0 11px 11px;background-clip:padding-box}.corner_top{border-radius:6px 6px 0 0;background-clip:padding-box}.corner_bottom{border-radius:0 0 6px 6px;background-clip:padding-box}.corner_none{border-radius:0;background-clip:padding-box}.corner_all{border-radius:6px;background-clip:padding-box}.corner_right{border-radius:6px 0 0 6px;background-clip:padding-box}.corner_left{border-radius:0 6px 6px 0;background-clip:padding-box}.corner_top-left{border-radius:0 6px 6px;background-clip:padding-box}.corner_top-right{border-radius:6px 0 6px 6px;background-clip:padding-box}.corner_bottom-left,.corner_bottom-right{border-radius:6px 6px 0;background-clip:padding-box}.dialog-container,.sem-colorlist--container,.sem-shadow,.sidebar-container{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dialog-container:hover,.sem-colorlist--container:hover,.sem-shadow:hover,.sidebar-container:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.sem-button-dnd{height:70px;width:70px;margin:5px;border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sem-button-dnd--medium{height:50px;width:50px}.sem-button-dnd--small{height:30px;width:30px}.sem-btn-fab{outline:0;cursor:pointer;display:inline-block;border:none}.sem-btn-fab:not([disabled]){cursor:pointer}.sem-btn-fab img{width:16px;height:16px;display:block;vertical-align:middle}.sem-btn-fab--default>span{display:block;width:16px;height:16px}.sem-btn-fab--default_small{padding:.4rem}.sem-btn-fab--default_small>span{display:block}.sem-btn-fab--primary>span,.sem-btn-fab--secondary>span{display:block;width:16px;height:16px}.sem-btn-fab--corner_none{border-radius:50%;background-clip:padding-box}.sem-btn-fab--corner_right{border-radius:50% 0 0 50%;background-clip:padding-box}.sem-btn-fab--corner_left{border-radius:0 50% 50% 0;background-clip:padding-box}.sem-btn-fab--corner_top-left{border-radius:0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_top-right{border-radius:50% 0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_bottom-left,.sem-btn-fab--corner_bottom-right{border-radius:50% 50% 0;background-clip:padding-box}.semui-tabs .semui-tabs--navlist_horizontal{border-bottom:1px solid grey;padding-bottom:2px}.semui-tabs .semui-tabs--navlist_horizontal li.active button:not([disabled])::after,.semui-tabs .semui-tabs--navlist_horizontal li:hover button:not([disabled])::after{-webkit-transform:scale(1);transform:scale(1)}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{border:none;outline:0;box-shadow:none;padding:.35em .75em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;bottom:-1px}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button:not([disabled]):hover{border:none;opacity:1}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{content:\"\";height:3px;width:100%;bottom:-1px;transition:all 250ms ease 0s;-webkit-transform:scale(0);transform:scale(0)}ul.semui-tabs-list.tabs-vertical{margin:0}@font-face{font-family:sembler-ico;src:url(/assets/fonts/sembler.eot?9ik42l);src:url(/assets/fonts/sembler.eot?9ik42l#iefix) format(\"embedded-opentype\"),url(/assets/fonts/sembler.ttf?9ik42l) format(\"truetype\"),url(/assets/fonts/sembler.woff?9ik42l) format(\"woff\"),url(/assets/fonts/sembler.svg?9ik42l#icomoon) format(\"svg\");font-weight:400;font-style:normal}.sem-button{cursor:pointer;display:inline-block;border:none;border-radius:12px 12px 0;background-clip:padding-box}.sem-button:not([disabled]){cursor:pointer}.sem-button--secondary{border:1px solid #a9a9a9;border-radius:12px 12px 0;background-clip:padding-box}.sem-button--small{padding:6px 11px;border:1px solid transparent}.sem-button--large{border:1px solid transparent}.sem-button--full{width:100%}.sem-button--block{display:block;padding:.4em}.sem-button--link,.sem-button--link_primary{border:0 solid;text-decoration:underline;border-radius:0}.sem-button-circle{border-radius:50%;cursor:pointer;text-align:center;background:#fff;font-weight:700}.sem-button-circle:before{padding:0 0 0 1px}.sem-button-delete{color:#fff;font-size:6px;padding:.3rem;background-color:#d0021b;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sem-dnd-container{position:relative;height:100%}.sem-dnd-container--dnd-nav{height:70px;width:70px;margin:5px;border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sem-dnd-container--nav{z-index:1;position:absolute;top:0;right:0}.bullet-inlinelist li{vertical-align:top;margin:0 -2px}.bullet-inlinelist li .select{display:block;width:22px}.bullet-inlinelist li .select select{display:none}.bullet-inlinelist li.active .select select{display:inline}.bullet-inlinelist li.active::after{background-color:red}.bullet-inlinelist li::before{content:'';top:-5px;left:0;width:100%;border-top:1px solid #000}.bullet-inlinelist li::after{background-color:#002;display:block;top:-9px;left:38%;width:9px;height:9px;border-radius:50%;content:''}.bullet-inlinelist li:first-child::before{left:38%}.bullet-inlinelist li:last-child::before{left:-44%}.sem-button-rain-drop{position:relative;display:inline-block;width:23px;height:23px;margin:4px 6px 8px;cursor:pointer}.sem-button-rain-drop .sem-button-delete{font-size:6px;top:6px;right:-9px}.sem-button-rain-drop,.sem-rain-drop{border-bottom-right-radius:50%;border-bottom-left-radius:50%;border-top-left-radius:50%;box-shadow:inset 0 0 10px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sem-pagination-container{display:flex;align-items:center;justify-content:center}.sem-pagination-nav{max-width:300px}.sem-pagination-nav>div{flex:1;text-align:center;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.sem-pagination-next a,.sem-pagination-previous a{display:block;line-height:25px;vertical-align:middle}.sem-pagination-next a{text-align:left}.sem-pagination-previous a{text-align:right}.sem-pagination a{height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle}.sem-pagination.active div{border:none;height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle;border-radius:12px 12px 0;background-clip:padding-box}.sem-pagination.active div:not([disabled]){cursor:pointer}.sem-avatar{width:40px;height:40px}.sem-avatar .sem-avatar__img{width:100%;height:100%}.dialog-container{overflow:auto;border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.dialog-container--colordrop{border-radius:0;background-clip:padding-box;box-shadow:none}.dialog-container--colordrop:hover{box-shadow:none}.dialog-container--colordrop .dialog-container--header{border-radius:12px 0 0 12px;background-clip:padding-box}.dialog-container--colordrop .dialog-container--body{border-radius:0 0 12px 12px;background-clip:padding-box}.dialog-container-full{height:100%;z-index:2}.dialog-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.dialog-container--body,.dialog-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.dialog-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist{overflow:auto}.sem-colorlist--container{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist--list{min-height:20px}.sem-colorlist--list--inner{display:none}.sem-colorlist--list:hover .sem-colorlist--list--inner{display:block}.sem-colorlist--closebutton{font-size:11px}.browser-container{height:calc(100% - 30px - 20px);display:block;position:relative;margin:0 20px;border-radius:10px}.browser-container .layout{height:100%;width:100%;overflow:scroll}.browser-container::before{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;content:'';position:absolute;top:-20px;left:15px;width:10px;height:10px;border-radius:50%}.h1{font-size:2rem}.h2{font-size:1.5rem}.h3{font-size:1.25rem}.h4{font-size:1rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1}.line-height-2{line-height:1.125}.line-height-3{line-height:1.25}.line-height-4{line-height:1.5}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block,.sem-button-circle,.semui-tabs,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{display:block}.bullet-inlinelist li,.inline-block,.semui-tabs .semui-tabs--navlist_horizontal li,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit,.sem-avatar .sem-avatar__img{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0,.sem-button--link,.sem-button--link_primary,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button,figure,h1,h2,h3,h4,h5{margin:0}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.mt0,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0{margin-left:0}.mx0,.sem-pagination-nav{margin-left:0;margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:.5rem}.mt1{margin-top:.5rem}.mr1{margin-right:.5rem}.mb1{margin-bottom:.5rem}.ml1{margin-left:.5rem}.mx1,figure.semui-thumbnail button{margin-left:.5rem;margin-right:.5rem}.my1,.semui-tabs .semui-tabs--navlist_horizontal{margin-top:.5rem;margin-bottom:.5rem}.m2{margin:1rem}.mt2{margin-top:1rem}.mr2{margin-right:1rem}.mb2{margin-bottom:1rem}.ml2{margin-left:1rem}.mx2{margin-left:1rem;margin-right:1rem}.my2{margin-top:1rem;margin-bottom:1rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.sem-colorlist--container{margin-left:2rem}.mx3{margin-left:2rem;margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:4rem}.mt4{margin-top:4rem}.mr4{margin-right:4rem}.mb4{margin-bottom:4rem}.ml4{margin-left:4rem}.mx4{margin-left:4rem;margin-right:4rem}.my4{margin-top:4rem;margin-bottom:4rem}.mxn1{margin-left:-.5rem;margin-right:-.5rem}.mxn2{margin-left:-1rem;margin-right:-1rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-4rem;margin-right:-4rem}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.mx-auto{margin-left:auto;margin-right:auto}.browser-container,.p0,.sem-button--link,.sem-button--link_primary,figure,h1,h2,h3,h4,h5{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0{padding-left:0}.px0{padding-left:0;padding-right:0}.py0,.sem-ul-icon-list .sem-li.no-padding{padding-top:0;padding-bottom:0}.corner,.p1,.sem-btn-fab--default,.sem-btn-fab--primary,.sem-btn-fab--secondary,.sem-button--large,.sem-color-list li,.sem-section--corner{padding:.5rem}.pt1{padding-top:.5rem}.pr1,.semui-tabs .semui-tabs--navlist_horizontal{padding-right:.5rem}.pb1{padding-bottom:.5rem}.dialog-container--colordrop .dialog-container--body,.pl1,.semui-tabs .semui-tabs--navlist_horizontal{padding-left:.5rem}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.py1,.sem-button--primary,.sem-button--secondary,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header,figure.semui-thumbnail figcaption{padding-top:.5rem;padding-bottom:.5rem}.dialog-container--body_spaced,.dialog-container--header,.px1,.sidebar-container--body_spaced,.sidebar-container--header{padding-left:.5rem;padding-right:.5rem}.p2{padding:1rem}.pt2{padding-top:1rem}.pr2{padding-right:1rem}.pb2{padding-bottom:1rem}.pl2{padding-left:1rem}.py2{padding-top:1rem;padding-bottom:1rem}.bullet-inlinelist li,.dialog-container--footer,.px2,.sem-color-list li,.sem-ul .sem-li,.sem-ul-icon-list .sem-li,.sidebar-container--footer,figure.semui-thumbnail figcaption{padding-left:1rem;padding-right:1rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3,.sem-button--primary,.sem-button--secondary{padding-left:2rem;padding-right:2rem}.p4{padding:4rem}.pt4{padding-top:4rem}.pr4{padding-right:4rem}.pb4{padding-bottom:4rem}.pl4{padding-left:4rem}.py4{padding-top:4rem;padding-bottom:4rem}.px4{padding-left:4rem;padding-right:4rem}.col{float:left;box-sizing:border-box}.col-right{float:right;box-sizing:border-box}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.flex,.sem-color-swatches,.sem-pagination-nav{display:flex}@media (min-width:40em){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}.sm-flex{display:flex}}@media (min-width:52em){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}.md-flex{display:flex}}@media (min-width:64em){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}.lg-flex{display:flex}.lg-hide{display:none!important}}.flex-column{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.self-stretch{align-self:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-center{align-content:center}.content-between{align-content:space-between}.content-around{align-content:space-around}.content-stretch{align-content:stretch}.flex-auto{flex:1 1 auto;min-width:0;min-height:0}.flex-none{flex:none}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-last{order:99999}.bullet-inlinelist li,.color-picker .saturation-lightness,.relative,.sem-color-list li,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{position:relative}.absolute,.bullet-inlinelist li::after,.bullet-inlinelist li::before,.color-picker,.sem-button-circle,.sem-color-list li .color-delete,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after,figure.semui-thumbnail button,figure.semui-thumbnail figcaption{position:absolute}.fixed{position:fixed}.dialog-container-full,.sem-color-list li .color-delete,.top-0,figure.semui-thumbnail button{top:0}.right-0,.sem-color-list li .color-delete,figure.semui-thumbnail button{right:0}.bottom-0,figure.semui-thumbnail figcaption{bottom:0}.left-0,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle,.sem-avatar .sem-avatar__img{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40em){.xs-hide{display:none!important}}@media (min-width:40em) and (max-width:52em){.sm-hide{display:none!important}}@media (min-width:52em) and (max-width:64em){.md-hide{display:none!important}}.display-none{display:none!important}.sidebar-container{border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sidebar-container-full{height:100%}.sidebar-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.sidebar-container--body,.sidebar-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.sidebar-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-color-swatches{flex-wrap:nowrap}.sem-color-swatches_current{flex-grow:1}.sem-color-swatches_current button{margin-top:10px}.sem-color-swatches_preselected{margin-top:13px;margin-left:-10px;margin-bottom:0;flex-grow:1;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden;height:67px}figure.semui-thumbnail{width:100%}figure.semui-thumbnail img{display:block;width:100%}figure.semui-thumbnail figcaption{width:100%;display:block;min-height:44px}.semui-card-footer{color:#fff;width:100%;display:block;background-color:#2a2a2a}.semui-header-section{padding:2% 2% 0;display:block}.semui-header-section.large{padding:3% 2% 0}.semui-header-section.small{padding:1% .5% 0}.semui-footer-section{padding:0 2% 2%;display:block}.semui-footer-section.large{padding:0 2% 3%}.semui-footer-section.small{padding:0 .5% 1%}.button-send:before{color:#fff}.sem-color-switch--colors .sufix{top:-4px;right:4px}.color-picker{margin:0 auto;border-radius:0 12px 12px;background-clip:padding-box;z-index:100000;width:210px;height:auto;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker .cursor{position:relative;width:16px;height:16px;border:2px solid #222;border-radius:50%;cursor:default}.color-picker .hue-alpha{margin-bottom:3px}.color-picker .hue{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .alpha{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .saturation-lightness{width:100%;height:130px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.sem-color-dark-inputs .color-type{color:#555;line-height:22px}.sem-color-light-inputs .color-type{color:#fff;line-height:22px}.sem-color-list li{min-height:50px}"]
                },] },
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ColorPickerService }
    ]; };
    ColorPickerComponent.propDecorators = {
        hueSlider: [{ type: ViewChild, args: ['hueSlider',] }],
        alphaSlider: [{ type: ViewChild, args: ['alphaSlider',] }],
        dialogElement: [{ type: ViewChild, args: ['dialogPopup',] }]
    };
    return ColorPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ColorPickerDirective = /** @class */ (function () {
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
        this.cpInputChange = new EventEmitter(true);
        this.cpToggleChange = new EventEmitter(true);
        this.cpSliderChange = new EventEmitter(true);
        this.cpSliderDragEnd = new EventEmitter(true);
        this.cpSliderDragStart = new EventEmitter(true);
        this.colorPickerOpen = new EventEmitter(true);
        this.colorPickerClose = new EventEmitter(true);
        this.colorPickerCancel = new EventEmitter(true);
        this.colorPickerSelect = new EventEmitter(true);
        this.colorPickerChange = new EventEmitter(false);
        this.cpPresetColorsChange = new EventEmitter(true);
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
            var injector = ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
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
        if (ignore === void 0) { ignore = true; }
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
        { type: Directive, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[colorPicker]',
                    exportAs: 'ngxColorPicker'
                },] },
    ];
    /** @nocollapse */
    ColorPickerDirective.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ViewContainerRef },
        { type: ElementRef },
        { type: ColorPickerService }
    ]; };
    ColorPickerDirective.propDecorators = {
        disabled: [{ type: Input }],
        colorPicker: [{ type: Input }],
        cpWidth: [{ type: Input }],
        cpHeight: [{ type: Input }],
        cpToggle: [{ type: Input }],
        colorToggle: [{ type: Input }],
        cpIgnoredElements: [{ type: Input }],
        cpDisableInput: [{ type: Input }],
        cpAlphaChannel: [{ type: Input }],
        cpOutputFormat: [{ type: Input }],
        cpFallbackColor: [{ type: Input }],
        cpDialogDisplay: [{ type: Input }],
        cpSaveClickOutside: [{ type: Input }],
        cpUseRootViewContainer: [{ type: Input }],
        cpPosition: [{ type: Input }],
        cpPositionOffset: [{ type: Input }],
        cpPositionRelativeToArrow: [{ type: Input }],
        cpOKButton: [{ type: Input }],
        cpOKButtonText: [{ type: Input }],
        cpOKButtonClass: [{ type: Input }],
        cpCancelButton: [{ type: Input }],
        cpCancelButtonText: [{ type: Input }],
        cpCancelButtonClass: [{ type: Input }],
        cpPresetLabel: [{ type: Input }],
        cpPresetColors: [{ type: Input }],
        cpMaxPresetColorsLength: [{ type: Input }],
        cpPresetEmptyMessage: [{ type: Input }],
        cpPresetEmptyMessageClass: [{ type: Input }],
        cpAddColorButton: [{ type: Input }],
        cpAddColorButtonText: [{ type: Input }],
        cpAddColorButtonClass: [{ type: Input }],
        cpRemoveColorButtonClass: [{ type: Input }],
        cpInputChange: [{ type: Output }],
        cpToggleChange: [{ type: Output }],
        cpSliderChange: [{ type: Output }],
        cpSliderDragEnd: [{ type: Output }],
        cpSliderDragStart: [{ type: Output }],
        colorPickerOpen: [{ type: Output }],
        colorPickerClose: [{ type: Output }],
        colorPickerCancel: [{ type: Output }],
        colorPickerSelect: [{ type: Output }],
        colorPickerChange: [{ type: Output }],
        cpPresetColorsChange: [{ type: Output }],
        handleClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        handleFocus: [{ type: HostListener, args: ['focus', ['$event'],] }],
        handleInput: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return ColorPickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReversePipe = /** @class */ (function () {
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
        { type: Pipe, args: [{
                    name: 'reverse'
                },] },
    ];
    return ReversePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemColorsModule = /** @class */ (function () {
    function SemColorsModule() {
    }
    SemColorsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SemUiButtonFabModule,
                        SemUiButtonModule,
                        SemUiButtonDndModule,
                        HttpClientModule,
                        FormsModule,
                        DndModule.forRoot(),
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

export { SemColorsService, ColorWidgetComponent, SearchColordropComponent, ColorPickerComponent, ColorPickerDirective, ColorPickerService, Cmyk, Hsla, Hsva, Rgba, detectIE, TextDirective, SliderDirective, SliderPosition, SliderDimension, SemColorsModule, ReversePipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS1jb2xvcnMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWNvbG9ycy5zZXJ2aWNlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbnRhaW5lci9jb2xvci13aWRnZXQvY29sb3Itd2lkZ2V0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb21wb25lbnRzL3NlYXJjaC1jb2xvcmRyb3Avc2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29sb3JwaWNrZXIvaGVscGVycy50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9mb3JtYXRzLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5zZXJ2aWNlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29sb3JwaWNrZXIvY29sb3ItcGlja2VyLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9zZW0tYXJyYXktcmV2ZXJzZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9zZW0tY29sb3JzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlbUNvbG9yc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLCBQTEFURk9STV9JRCwgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RpdltzZW1ibGVyLWNvbG9yLXdpZGdldF0nLFxuICB0ZW1wbGF0ZTogYCA8IS0tLy8gUkdCQS0tPlxuICA8c3BhblxuICAgIFtjb2xvclRvZ2dsZV09XCJjb2xvckRyb3BFbmFibGVkXCJcbiAgICBbY3BXaWR0aF09XCJvdmVybGF5V2lkdGhcIlxuICAgIFtjcEFscGhhQ2hhbm5lbF09XCInYWx3YXlzJ1wiXG4gICAgW2NwUHJlc2V0Q29sb3JzXT1cImNvbG9yUGFsbGV0ZVwiXG4gICAgW2NwQWRkQ29sb3JCdXR0b25dPVwidHJ1ZVwiXG4gICAgW3N0eWxlLmJhY2tncm91bmRdPVwibGFzdENvbG9yXCJcbiAgICBbY3BUb2dnbGVdPVwidHJ1ZVwiXG4gICAgW2NwRGlhbG9nRGlzcGxheV09XCInaW5saW5lJ1wiXG4gICAgW2NwQ2FuY2VsQnV0dG9uXT1cImZhbHNlXCJcbiAgICBbY3BDYW5jZWxCdXR0b25DbGFzc109IFwiJ2J0biBidG4tcHJpbWFyeSBidG4teHMnXCJcbiAgICBbKGNvbG9yUGlja2VyKV09XCJsYXN0Q29sb3JcIlxuICAgIChjcFByZXNldENvbG9yc0NoYW5nZSk9XCJ1cGRhdGVkQ29sb3JQcmVzZXQoJGV2ZW50KVwiXG4gID5cbiAgPC9zcGFuPlxuXG5gXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2Vze1xuICBASW5wdXQoKSBjb2xvckRyb3BFbmFibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBvdmVybGF5V2lkdGg7XG4gIHB1YmxpYyBjb2xvclBhbGxldGU7XG4gIHB1YmxpYyBsYXN0Q29sb3I7XG5cbiAgQElucHV0KCd1c2VyQ29sb3JzUGFsbGV0ZScpXG4gIHNldCB1c2VyQ29sb3JzUGFsbGV0ZShjb2xvcmxpc3Q6IGFueSkge1xuICAgIHRoaXMuY29sb3JQYWxsZXRlID0gY29sb3JsaXN0XG4gICAgaWYoY29sb3JsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5sYXN0Q29sb3IgPSAnI2ZmZmZmZic7XG4gICAgfVxuICAgIGlmKGNvbG9ybGlzdC5sZW5ndGggIT09IDApe1xuICAgICAgdGhpcy5sYXN0Q29sb3IgPSBjb2xvcmxpc3RbIGNvbG9ybGlzdC5sZW5ndGggLSAxIF07XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSkgeyB9XG5cbiAgQE91dHB1dCgpXG4gIHVwZGF0ZUNvbG9yUHJlc2V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICB1cGRhdGVkQ29sb3JQcmVzZXQoZXZlbnQ6IEFycmF5PGFueT4pe1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KVxuICAgIHRoaXMudXBkYXRlQ29sb3JQcmVzZXQuZW1pdChldmVudCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgaWYgKGNoYW5nZXMuY29sb3JEcm9wRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmNvbG9yRHJvcEVuYWJsZWQgPSBjaGFuZ2VzLmNvbG9yRHJvcEVuYWJsZWQuY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW1ibGVyLXNlYXJjaC1jb2xvcmRyb3AnLFxuICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwiaW5wdXQtc3VmaXhcIj5cbiAgICAgICA8aW5wdXRcbiAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0XCJcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgIFtuZ01vZGVsXT1cImNvbG9yXCJcbiAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuICAgICAgICAgW3ZhbHVlXT0nY29sb3InXG4gICAgICAgICAjY29sb3JWYWx1ZVxuICAgICAgIC8+XG4gICAgICA8c3BhblxuICAgICAgKGNsaWNrKT1cImFkZENvbG9yKGNvbG9yVmFsdWUpXCJcbiAgICAgIGNsYXNzPVwic2VtLWljb24tc2VhcmNoIHN1Zml4XCI+XG4gICAgICA8L3NwYW4+XG48L3NwYW4+XG5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfWBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbG9yZHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdzZWxlY3RlZCcpXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2NvbG9yJywgdmFsdWUpO1xuICAgIHRoaXMuY29sb3IgPSB2YWx1ZS5jb2xvcjtcbiAgfVxuICBAT3V0cHV0KCkgc2F2ZUNvbG9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlU2VsZWN0ZWRDb2xvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb2xvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhZGRDb2xvcihjb2xvcjogYW55KSB7XG4gICAgY29uc3Qgc2V0Q29sb3I6IGFueSA9IHtcbiAgICAgIHR5cGU6ICdjb2xvcicsXG4gICAgICBjb2xvcjogY29sb3IudmFsdWVcbiAgICB9O1xuICAgIHRoaXMuc2F2ZUNvbG9yLmVtaXQoc2V0Q29sb3IpO1xuICB9XG4gIGNoYW5nZUNvbG9yKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBjb2xvciA9IHt0eXBlOiAnY29sb3InLCBjb2xvcjogZXZlbnR9O1xuICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRDb2xvci5lbWl0KGNvbG9yKTtcbiAgfVxuICBuZ09uSW5pdCgpIHt9XG5cbiAgLy8gKGtleXByZXNzKT1cImtleVByZXNzQ2hhbmdlQ29sb3IoJGV2ZW50KVwiXG4gIC8vIGtleVByZXNzQ2hhbmdlQ29sb3IoZXZlbnQ6IGFueSkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdldmVudDEyMycsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgLy8gICBjb25zdCBjb2xvciA9IHt0eXBlOiAnY29sb3InLCBjb2xvcjogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAvLyAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRDb2xvci5lbWl0KGNvbG9yKTtcbiAgLy8gfVxuXG4gIC8vIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5TZXRDb2xvcnMoZXZlbnQpKTtcbiAgLy8gdGhpcy5fY29sb3JTZXJ2aWNlLmNvbG9yQ2hhZ2VkKGV2ZW50KVxuICAvLyBwdWJsaWMgc2VsZWN0ZWRDb2xvcjogYW55O1xuICAvLyBAT3V0cHV0KClcbiAgLy8gc2F2ZUNvbG9yczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gdGhpcy5zZWxlY3RlZENvbG9yID0gJyMwMDAwMDAnO1xuXG59XG5cblxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0SUUoKTogYm9vbGVhbiB8IG51bWJlciB7XG4gIGxldCB1YSA9ICcnO1xuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ21zaWUgJyk7XG5cbiAgaWYgKG1zaWUgPiAwKSB7XG4gICAgLy8gSUUgMTAgb3Igb2xkZXIgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgcmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhtc2llICsgNSwgdWEuaW5kZXhPZignLicsIG1zaWUpKSwgMTApO1xuICB9XG5cbiAgLy8gT3RoZXIgYnJvd3NlclxuICByZXR1cm4gZmFsc2U7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZXh0XSdcbn0pXG5leHBvcnQgY2xhc3MgVGV4dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHJnOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcblxuICBAT3V0cHV0KCkgbmV3VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIGlucHV0Q2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh0aGlzLnJnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG51bWVyaWMgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgICAgaWYgKCFpc05hTihudW1lcmljKSAmJiBudW1lcmljID49IDAgJiYgbnVtZXJpYyA8PSB0aGlzLnJnKSB7XG4gICAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IG51bWVyaWMsIHJnOiB0aGlzLnJnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2xpZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBsaXN0ZW5lck1vdmU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lclN0b3A6IGFueTtcblxuICBASW5wdXQoKSByZ1g6IG51bWJlcjtcbiAgQElucHV0KCkgcmdZOiBudW1iZXI7XG5cbiAgQElucHV0KCkgc2xpZGVyOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIG5ld1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSkgbW91c2VEb3duKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0KGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKSB0b3VjaFN0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0KGV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmxpc3RlbmVyTW92ZSA9IChldmVudDogYW55KSA9PiB0aGlzLm1vdmUoZXZlbnQpO1xuXG4gICAgdGhpcy5saXN0ZW5lclN0b3AgPSAoKSA9PiB0aGlzLnN0b3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZShldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0Q3Vyc29yKGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q3Vyc29yKGV2ZW50KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmxpc3RlbmVyU3RvcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmxpc3RlbmVyU3RvcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcblxuICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcCgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG5cbiAgICB0aGlzLmRyYWdFbmQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRYKGV2ZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgcGFnZVggPSAoZXZlbnQucGFnZVggIT09IHVuZGVmaW5lZCkgPyBldmVudC5wYWdlWCA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG5cbiAgICByZXR1cm4gcGFnZVggLSBwb3NpdGlvbi5sZWZ0IC0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRZKGV2ZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgcGFnZVkgPSAoZXZlbnQucGFnZVkgIT09IHVuZGVmaW5lZCkgPyBldmVudC5wYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICByZXR1cm4gcGFnZVkgLSBwb3NpdGlvbi50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIH1cblxuICBwcml2YXRlIHNldEN1cnNvcihldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldFgoZXZlbnQpLCB3aWR0aCkpO1xuICAgIGNvbnN0IHkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldFkoZXZlbnQpLCBoZWlnaHQpKTtcblxuICAgIGlmICh0aGlzLnJnWCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmdZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHM6IHggLyB3aWR0aCwgdjogKDEgLSB5IC8gaGVpZ2h0KSwgcmdYOiB0aGlzLnJnWCwgcmdZOiB0aGlzLnJnWSB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmdYID09PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogeSAvIGhlaWdodCwgcmdZOiB0aGlzLnJnWSB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmdYICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogeCAvIHdpZHRoLCByZ1g6IHRoaXMucmdYIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgdjogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyRGltZW5zaW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIHY6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cbiIsImV4cG9ydCBjbGFzcyBDbXlrIHtcbiAgY29uc3RydWN0b3IocHVibGljIGM6IG51bWJlciwgcHVibGljIG06IG51bWJlciwgcHVibGljIHk6IG51bWJlciwgcHVibGljIGs6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIEhzbGEge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgbDogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgSHN2YSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBzOiBudW1iZXIsIHB1YmxpYyB2OiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZ2JhIHtcbiAgY29uc3RydWN0b3IocHVibGljIHI6IG51bWJlciwgcHVibGljIGc6IG51bWJlciwgcHVibGljIGI6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENteWssIFJnYmEsIEhzbGEsIEhzdmEgfSBmcm9tICcuL2Zvcm1hdHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgc2V0QWN0aXZlKGFjdGl2ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlICYmIHRoaXMuYWN0aXZlICE9PSBhY3RpdmUgJiYgdGhpcy5hY3RpdmUuY3BEaWFsb2dEaXNwbGF5ICE9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5hY3RpdmUuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgcHVibGljIGhzdmEyaHNsYShoc3ZhOiBIc3ZhKTogSHNsYSB7XG4gICAgY29uc3QgaCA9IGhzdmEuaCwgcyA9IGhzdmEucywgdiA9IGhzdmEudiwgYSA9IGhzdmEuYTtcblxuICAgIGlmICh2ID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEhzbGEoaCwgMCwgMCwgYSk7XG4gICAgfSBlbHNlIGlmIChzID09PSAwICYmIHYgPT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgSHNsYShoLCAxLCAxLCBhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbCA9IHYgKiAoMiAtIHMpIC8gMjtcblxuICAgICAgcmV0dXJuIG5ldyBIc2xhKGgsIHYgKiBzIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSwgbCwgYSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhzbGEyaHN2YShoc2xhOiBIc2xhKTogSHN2YSB7XG4gICAgY29uc3QgaCA9IE1hdGgubWluKGhzbGEuaCwgMSksIHMgPSBNYXRoLm1pbihoc2xhLnMsIDEpO1xuICAgIGNvbnN0IGwgPSBNYXRoLm1pbihoc2xhLmwsIDEpLCBhID0gTWF0aC5taW4oaHNsYS5hLCAxKTtcblxuICAgIGlmIChsID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEhzdmEoaCwgMCwgMCwgYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHYgPSBsICsgcyAqICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSkgLyAyO1xuXG4gICAgICByZXR1cm4gbmV3IEhzdmEoaCwgMiAqICh2IC0gbCkgLyB2LCB2LCBhKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaHN2YVRvUmdiYShoc3ZhOiBIc3ZhKTogUmdiYSB7XG4gICAgbGV0IHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXI7XG5cbiAgICBjb25zdCBoID0gaHN2YS5oLCBzID0gaHN2YS5zLCB2ID0gaHN2YS52LCBhID0gaHN2YS5hO1xuXG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoaCAqIDYpO1xuICAgIGNvbnN0IGYgPSBoICogNiAtIGk7XG4gICAgY29uc3QgcCA9IHYgKiAoMSAtIHMpO1xuICAgIGNvbnN0IHEgPSB2ICogKDEgLSBmICogcyk7XG4gICAgY29uc3QgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcblxuICAgIHN3aXRjaCAoaSAlIDYpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgciA9IHYsIGcgPSB0LCBiID0gcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHIgPSBxLCBnID0gdiwgYiA9IHA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByID0gcCwgZyA9IHYsIGIgPSB0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgciA9IHAsIGcgPSBxLCBiID0gdjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHIgPSB0LCBnID0gcCwgYiA9IHY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByID0gdiwgZyA9IHAsIGIgPSBxO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJnYmEociwgZywgYiwgYSk7XG4gIH1cblxuICBwdWJsaWMgcmdiYVRvQ215ayhyZ2JhOiBSZ2JhKTogQ215ayB7XG4gICAgY29uc3QgazogbnVtYmVyID0gMSAtIE1hdGgubWF4KHJnYmEuciwgcmdiYS5nLCByZ2JhLmIpO1xuXG4gICAgaWYgKGsgPT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgQ215aygwLCAwLCAwLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYyA9ICgxIC0gcmdiYS5yIC0gaykgLyAoMSAtIGspO1xuICAgICAgY29uc3QgbSA9ICgxIC0gcmdiYS5nIC0gaykgLyAoMSAtIGspO1xuICAgICAgY29uc3QgeSA9ICgxIC0gcmdiYS5iIC0gaykgLyAoMSAtIGspO1xuXG4gICAgICByZXR1cm4gbmV3IENteWsoYywgbSwgeSwgayk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJnYmFUb0hzdmEocmdiYTogUmdiYSk6IEhzdmEge1xuICAgIGxldCBoOiBudW1iZXIsIHM6IG51bWJlcjtcblxuICAgIGNvbnN0IHIgPSBNYXRoLm1pbihyZ2JhLnIsIDEpLCBnID0gTWF0aC5taW4ocmdiYS5nLCAxKTtcbiAgICBjb25zdCBiID0gTWF0aC5taW4ocmdiYS5iLCAxKSwgYSA9IE1hdGgubWluKHJnYmEuYSwgMSk7XG5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKSwgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cbiAgICBjb25zdCB2OiBudW1iZXIgPSBtYXgsIGQgPSBtYXggLSBtaW47XG5cbiAgICBzID0gKG1heCA9PT0gMCkgPyAwIDogZCAvIG1heDtcblxuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgaCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICAgIGNhc2UgcjpcbiAgICAgICAgICBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZzpcbiAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGI6XG4gICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaCAvPSA2O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgSHN2YShoLCBzLCB2LCBhKTtcbiAgfVxuXG4gIHB1YmxpYyByZ2JhVG9IZXgocmdiYTogUmdiYSwgYWxsb3dIZXg4PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgLyogdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSAqL1xuICAgIGxldCBoZXggPSAnIycgKyAoKDEgPDwgMjQpIHwgKHJnYmEuciA8PCAxNikgfCAocmdiYS5nIDw8IDgpIHwgcmdiYS5iKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuXG4gICAgaWYgKGFsbG93SGV4OCkge1xuICAgICAgaGV4ICs9ICgoMSA8PCA4KSB8IE1hdGgucm91bmQocmdiYS5hICogMjU1KSkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgICB9XG4gICAgLyogdHNsaW50OmVuYWJsZTpuby1iaXR3aXNlICovXG5cbiAgICByZXR1cm4gaGV4O1xuICB9XG5cbiAgcHVibGljIGRlbm9ybWFsaXplUkdCQShyZ2JhOiBSZ2JhKTogUmdiYSB7XG4gICAgcmV0dXJuIG5ldyBSZ2JhKE1hdGgucm91bmQocmdiYS5yICogMjU1KSwgTWF0aC5yb3VuZChyZ2JhLmcgKiAyNTUpLCBNYXRoLnJvdW5kKHJnYmEuYiAqIDI1NSksIHJnYmEuYSk7XG4gIH1cblxuICBwdWJsaWMgc3RyaW5nVG9Ic3ZhKGNvbG9yU3RyaW5nOiBzdHJpbmcgPSAnJywgYWxsb3dIZXg4OiBib29sZWFuID0gZmFsc2UpOiBIc3ZhIHtcbiAgICBsZXQgaHN2YTogSHN2YSA9IG51bGw7XG5cbiAgICBjb2xvclN0cmluZyA9IChjb2xvclN0cmluZyB8fCAnJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGNvbnN0IHN0cmluZ1BhcnNlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIHJlOiAvKHJnYilhP1xcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyolPyxcXHMqKFxcZHsxLDN9KVxccyolPyg/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFxzKik/XFwpLyxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKGV4ZWNSZXN1bHQ6IGFueSkge1xuICAgICAgICAgIHJldHVybiBuZXcgUmdiYShwYXJzZUludChleGVjUmVzdWx0WzJdLCAxMCkgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdLCAxMCkgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzRdLCAxMCkgLyAyNTUsXG4gICAgICAgICAgICBpc05hTihwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKSA/IDEgOiBwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICByZTogLyhoc2wpYT9cXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqKD86LFxccyooXFxkKyg/OlxcLlxcZCspPylcXHMqKT9cXCkvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBIc2xhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDEwKSAvIDM2MCxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDEwKSAvIDEwMCxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbNF0sIDEwKSAvIDEwMCxcbiAgICAgICAgICAgIGlzTmFOKHBhcnNlRmxvYXQoZXhlY1Jlc3VsdFs1XSkpID8gMSA6IHBhcnNlRmxvYXQoZXhlY1Jlc3VsdFs1XSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGlmIChhbGxvd0hleDgpIHtcbiAgICAgIHN0cmluZ1BhcnNlcnMucHVzaCh7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSk/JC8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsxXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFs0XSB8fCAnRkYnLCAxNikgLyAyNTUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyaW5nUGFyc2Vycy5wdXNoKHtcbiAgICAgICAgcmU6IC8jKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pJC8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsxXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgMSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcmU6IC8jKFthLWZBLUYwLTldKShbYS1mQS1GMC05XSkoW2EtZkEtRjAtOV0pJC8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsxXSArIGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0gKyBleGVjUmVzdWx0WzJdLCAxNikgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdICsgZXhlY1Jlc3VsdFszXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0cmluZ1BhcnNlcnMpIHtcbiAgICAgIGlmIChzdHJpbmdQYXJzZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gc3RyaW5nUGFyc2Vyc1trZXldO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoID0gcGFyc2VyLnJlLmV4ZWMoY29sb3JTdHJpbmcpLCBjb2xvcjogYW55ID0gbWF0Y2ggJiYgcGFyc2VyLnBhcnNlKG1hdGNoKTtcblxuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICBpZiAoY29sb3IgaW5zdGFuY2VvZiBSZ2JhKSB7XG4gICAgICAgICAgICBoc3ZhID0gdGhpcy5yZ2JhVG9Ic3ZhKGNvbG9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbG9yIGluc3RhbmNlb2YgSHNsYSkge1xuICAgICAgICAgICAgaHN2YSA9IHRoaXMuaHNsYTJoc3ZhKGNvbG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaHN2YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoc3ZhO1xuICB9XG5cbiAgcHVibGljIG91dHB1dEZvcm1hdChoc3ZhOiBIc3ZhLCBvdXRwdXRGb3JtYXQ6IHN0cmluZywgYWxwaGFDaGFubmVsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAob3V0cHV0Rm9ybWF0KSB7XG4gICAgICBjYXNlICdoc2xhJzpcbiAgICAgICAgY29uc3QgaHNsYSA9IHRoaXMuaHN2YTJoc2xhKGhzdmEpO1xuXG4gICAgICAgIGNvbnN0IGhzbGFUZXh0ID0gbmV3IEhzbGEoTWF0aC5yb3VuZCgoaHNsYS5oKSAqIDM2MCksIE1hdGgucm91bmQoaHNsYS5zICogMTAwKSxcbiAgICAgICAgICBNYXRoLnJvdW5kKGhzbGEubCAqIDEwMCksIE1hdGgucm91bmQoaHNsYS5hICogMTAwKSAvIDEwMCk7XG5cbiAgICAgICAgaWYgKGhzdmEuYSA8IDEgfHwgYWxwaGFDaGFubmVsID09PSAnYWx3YXlzJykge1xuICAgICAgICAgIHJldHVybiAnaHNsYSgnICsgaHNsYVRleHQuaCArICcsJyArIGhzbGFUZXh0LnMgKyAnJSwnICsgaHNsYVRleHQubCArICclLCcgK1xuICAgICAgICAgICAgaHNsYVRleHQuYSArICcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2hzbCgnICsgaHNsYVRleHQuaCArICcsJyArIGhzbGFUZXh0LnMgKyAnJSwnICsgaHNsYVRleHQubCArICclKSc7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAncmdiYSc6XG4gICAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLmRlbm9ybWFsaXplUkdCQSh0aGlzLmhzdmFUb1JnYmEoaHN2YSkpO1xuXG4gICAgICAgIGlmIChoc3ZhLmEgPCAxIHx8IGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgICAgICByZXR1cm4gJ3JnYmEoJyArIHJnYmEuciArICcsJyArIHJnYmEuZyArICcsJyArIHJnYmEuYiArICcsJyArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKHJnYmEuYSAqIDEwMCkgLyAxMDAgKyAnKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJnYmEuciArICcsJyArIHJnYmEuZyArICcsJyArIHJnYmEuYiArICcpJztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBhbGxvd0hleDggPSAoYWxwaGFDaGFubmVsID09PSAnYWx3YXlzJyB8fCBhbHBoYUNoYW5uZWwgPT09ICdoZXg4Jyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmdiYVRvSGV4KHRoaXMuZGVub3JtYWxpemVSR0JBKHRoaXMuaHN2YVRvUmdiYShoc3ZhKSksIGFsbG93SGV4OCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgUExBVEZPUk1fSUQsIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRldGVjdElFIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IFJnYmEsIEhzbGEsIEhzdmEgfSBmcm9tICcuL2Zvcm1hdHMnO1xuaW1wb3J0IHsgU2xpZGVyUG9zaXRpb24sIFNsaWRlckRpbWVuc2lvbiB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY29sb3ItcGlja2VyXScsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICAjZGlhbG9nUG9wdXBcbiAgY2xhc3M9XCJjb2xvci1waWNrZXJcIlxuICBbc3R5bGUudmlzaWJpbGl0eV09XCJoaWRkZW4gfHwgIXNob3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiIFtzdHlsZS50b3AucHhdPVwidG9wXCJcbiAgW3N0eWxlLmxlZnQucHhdPVwibGVmdFwiXG4gIFtzdHlsZS5wb3NpdGlvbl09XCJwb3NpdGlvblwiXG4gIFtzdHlsZS5oZWlnaHQucHhdPVwiY3BIZWlnaHRcIlxuICBbc3R5bGUud2lkdGhdPVwiY29sb3JUb2dnbGUgPyAnMTAwJScgOiBjcFdpZHRoICsgJ3B4J1wiXG4+XG4gIDxkaXZcbiAgICAqbmdJZj1cIiFjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJjb2xvci1pbnB1dC1jb250YWluZXIgc2VtLWNvbG9yLWxpZ2h0LWlucHV0cyBwYjFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgcHkxXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCAgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIlxuICAgICAgICAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIChjbGljayk9XCJvbkZvcm1hdFRvZ2dsZSgpXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VsZi1zdGFydCBzZW0tLWxpbmsgXCI+Q2hhbmdlIGZvcm1hdDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2gtLWNvbnRyb2wtLWxpbmtcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dpdGNoIHB4MSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC1yZXNldCBzZW0tY29sb3Itc3dpdGNoLS1jb2xvcnMgZmxleC1hdXRvXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMiA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlcyBtcjEgXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjM2MFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIzNjBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmhcIiAobmV3VmFsdWUpPVwib25IdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkg8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uc1wiIChuZXdWYWx1ZSk9XCJvblNhdHVyYXRpb25JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPlM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8ubFwiIChuZXdWYWx1ZSk9XCJvbkxpZ2h0bmVzc0lucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+TDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcLixdWzAtOV17MSwyfSk/XCIgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDEgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uclwiIChuZXdWYWx1ZSk9XCJvblJlZElucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Ujwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uZ1wiIChuZXdWYWx1ZSk9XCJvbkdyZWVuSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5HPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uYlwiIChuZXdWYWx1ZSk9XCJvbkJsdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyZ2JhVGV4dD8uYVwiIChuZXdWYWx1ZSk9XCJvbkFscGhhSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDAgPyAnbm9uZScgOiAnYmxvY2snXCI+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtc3VmaXhcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXRcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbdmFsdWVdPVwiaGV4VGV4dFwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25IZXhJbnB1dChudWxsKVwiXG4gICAgICAgICAgICAgICAgKG5ld1ZhbHVlKT1cIm9uSGV4SW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkQ29sb3IoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taWNvbi1zZWFyY2ggc3VmaXhcIj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+SGV4PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInB4MVwiPlxuICAgIDxkaXZcbiAgICAgICNodWVTbGlkZXJcbiAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgICBjbGFzcz1cImh1ZVwiXG4gICAgICBbc2xpZGVyXSBbcmdYXT1cIjFcIiAobmV3VmFsdWUpPVwib25IdWVDaGFuZ2UoJGV2ZW50KVwiIChkcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoJ2h1ZScpXCIgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdodWUnKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5oXCI+PC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgICAgKm5nSWY9XCJjcERpYWxvZ0Rpc3BsYXk9PSdwb3B1cCdcIlxuICAgICAgY2xhc3M9XCJhcnJvdyBhcnJvdy17e2NwUG9zaXRpb259fVwiXG4gICAgICBbc3R5bGUudG9wLnB4XT1cImFycm93VG9wXCI+PC9kaXY+XG4gICAgPGRpdlxuICAgICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICAgIGNsYXNzPVwic2F0dXJhdGlvbi1saWdodG5lc3NcIlxuICAgICAgW3NsaWRlcl0gW3JnWF09XCIxXCIgW3JnWV09XCIxXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImh1ZVNsaWRlckNvbG9yXCJcbiAgICAgIChuZXdWYWx1ZSk9XCJvbkNvbG9yQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGRyYWdTdGFydCk9XCJvbkRyYWdTdGFydCgnc2F0dXJhdGlvbi1saWdodG5lc3MnKVwiXG4gICAgICAoZHJhZ0VuZCk9XCJvbkRyYWdFbmQoJ3NhdHVyYXRpb24tbGlnaHRuZXNzJylcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBbc3R5bGUudG9wLnB4XT1cInNsaWRlci52XCIgW3N0eWxlLmxlZnQucHhdPVwic2xpZGVyLnNcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAjYWxwaGFTbGlkZXJcbiAgICAgIGNsYXNzPVwiYWxwaGFcIlxuICAgICAgW3NsaWRlcl1cbiAgICAgIFtyZ1hdPVwiMVwiXG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYWxwaGFTbGlkZXJDb2xvclwiXG4gICAgICAobmV3VmFsdWUpPVwib25BbHBoYUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChkcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoJ2FscGhhJylcIlxuICAgICAgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdhbHBoYScpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgW3N0eWxlLmxlZnQucHhdPVwic2xpZGVyLmFcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLUNvbG9yIGRyb3BzLS0+XG4gIDxkaXZcbiAgICAqbmdJZj1cImNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cInNlbS1jb2xvci1kcm9wc1wiPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNwUHJlc2V0Q29sb3JzPy5sZW5ndGggfHwgY3BBZGRDb2xvckJ1dHRvblwiPlxuICAgICAgPHVsICpuZ0lmPVwiY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aFwiIGNsYXNzPVwic2VtLWNvbG9yLWxpc3Qgc2VtLWxpc3QtcmVzZXRcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbG9yIG9mIGNwUHJlc2V0Q29sb3JzIHwgcmV2ZXJzZVwiXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldENvbG9yRnJvbVN0cmluZyhjb2xvcilcIlxuICAgICAgICAgIGNsYXNzPVwiYmxvY2tcIlxuICAgICAgICAgIGRuZC1kcmFnZ2FibGVcbiAgICAgICAgICBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgW2RyYWdEYXRhXT1cImNvbG9yXCJcbiAgICAgICAgICAob25EcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoY29sb3IpXCJcbiAgICAgICAgICBbZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJ11cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyaWdodC1hbGlnbiBibG9ja1wiPiB7e2NvbG9yfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cImNvbG9yLWRlbGV0ZSBzZW0taWNvbi1jbG9zZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVQcmVzZXRDb2xvcigkZXZlbnQsIGNvbG9yKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiIWNwUHJlc2V0Q29sb3JzPy5sZW5ndGggJiYgY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwie3tjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzfX1cbiAgICAgICAgICBcIj57e2NwUHJlc2V0RW1wdHlNZXNzYWdlfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgICpuZ0lmPVwiIWNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cInNlbS1jb2xvci1zd2F0Y2hlcyBweDFcIj5cbiAgICA8IS0tPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2F0Y2hlc19jdXJyZW50XCI+PC9kaXY+LS0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG1lZGl1bVxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJzZWxlY3RlZENvbG9yXCJcbiAgICAgICAgc2VtdWktYnV0dG9uLWRuZCBzZW0taW1wb3J0YW5jZT1cInByaW1hcnlcIlxuICAgICAgICAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICBbZGlzYWJsZWRdPVwiY3BQcmVzZXRDb2xvcnMgJiYgY3BQcmVzZXRDb2xvcnMubGVuZ3RoID49IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoXCJcbiAgICAgICAgKGNsaWNrKT1cIm9uQWRkUHJlc2V0Q29sb3IoJGV2ZW50LCBzZWxlY3RlZENvbG9yKVwiXG4gICAgICA+XG4gICAgICAgIEFkZCBDb2xvclxuICAgICAgPC9idXR0b24+XG5cbiAgICA8ZGl2XG4gICAgICAqbmdJZj1cImNwUHJlc2V0Q29sb3JzPy5sZW5ndGggfHwgY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICBjbGFzcz1cInNlbS1jb2xvci1zd2F0Y2hlc19wcmVzZWxlY3RlZFwiPlxuXG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiIWNwUHJlc2V0Q29sb3JzPy5sZW5ndGggJiYgY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwie3tjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzfX1cbiAgICAgICAgICBcIj5cbiAgICAgICAge3tjcFByZXNldEVtcHR5TWVzc2FnZX19XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nRm9yPVwibGV0IGNvbG9yIG9mIGNwUHJlc2V0Q29sb3JzIHwgcmV2ZXJzZVwiXG4gICAgICAgIGNsYXNzPVwic2VtLWJ1dHRvbi1yYWluLWRyb3BcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgKGNsaWNrKT1cInNldENvbG9yRnJvbVN0cmluZyhjb2xvcilcIlxuICAgICAgPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlUHJlc2V0Q29sb3IoJGV2ZW50LCBjb2xvcilcIlxuICAgICAgICAgICAgY2xhc3M9XCJzZW0tYnV0dG9uLWNpcmNsZSBzZW0tYnV0dG9uLWRlbGV0ZSBzZW0taWNvbi1jbG9zZVwiPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXZcbiAgICAqbmdJZj1cImNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cImRpYWxvZy1jb250YWluZXItLWZvb3RlciBjb2xvci1pbnB1dC1jb250YWluZXIgc2VtLWNvbG9yLWxpZ2h0LWlucHV0c1wiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCBtYjEgcHQxIHNlbS10eXBvLS1maWdjYXB0aW9uXCJcbiAgICAgICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgKGNsaWNrKT1cIm9uRm9ybWF0VG9nZ2xlKClcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2VsZi1zdGFydCBzZW0tLWxpbmsgXCI+Q2hhbmdlIGZvcm1hdDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dpdGNoLS1jb250cm9sLS1saW5rXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2ggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtcmVzZXQgc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIGZsZXgtYXV0b1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDIgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kIHBiMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzIG1yMSBcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMzYwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjM2MFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uaFwiIChuZXdWYWx1ZSk9XCJvbkh1ZUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+SDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlcyBtcjEgdGFibGUtY2VsbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMTAwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5zXCIgKG5ld1ZhbHVlKT1cIm9uU2F0dXJhdGlvbklucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Uzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlcyBtcjEgdGFibGUtY2VsbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMTAwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5sXCIgKG5ld1ZhbHVlKT1cIm9uTGlnaHRuZXNzSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5MPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIiBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMVwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uYVwiIChuZXdWYWx1ZSk9XCJvbkFscGhhSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5BPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMSA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5yXCIgKG5ld1ZhbHVlKT1cIm9uUmVkSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5SPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5nXCIgKG5ld1ZhbHVlKT1cIm9uR3JlZW5JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkc8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5iXCIgKG5ld1ZhbHVlKT1cIm9uQmx1ZUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Qjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcLixdWzAtOV17MSwyfSk/XCJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMVwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInJnYmFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5BPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMCA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGV4dF0gW3ZhbHVlXT1cImhleFRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25IZXhJbnB1dChudWxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAobmV3VmFsdWUpPVwib25IZXhJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VtLWJ0bi1mYWJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcm5lcj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VtdWktdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW0taW1wb3J0YW5jZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY3BQcmVzZXRDb2xvcnMgJiYgY3BQcmVzZXRDb2xvcnMubGVuZ3RoID49IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZFByZXNldENvbG9yKCRldmVudCwgc2VsZWN0ZWRDb2xvcilcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VtLWljb24tc2VuZCBidXR0b24tc2VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+SGV4PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8IS0tIFNUQVJUIC0tPlxuXG5cblxuXG4gPCEtLSBFTkQgLS0+XG5cbiAgPGRpdiAqbmdJZj1cImNwT0tCdXR0b24gfHwgY3BDYW5jZWxCdXR0b25cIiBjbGFzcz1cImJ1dHRvbi1hcmVhXCI+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImNwQ2FuY2VsQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tjcENhbmNlbEJ1dHRvbkNsYXNzfX1cIiAoY2xpY2spPVwib25DYW5jZWxDb2xvcigkZXZlbnQpXCI+e3tjcENhbmNlbEJ1dHRvblRleHR9fTwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJjcE9LQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tjcE9LQnV0dG9uQ2xhc3N9fVwiIChjbGljayk9XCJvbkFjY2VwdENvbG9yKCRldmVudClcIj57e2NwT0tCdXR0b25UZXh0fX08L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2Bib2R5e21hcmdpbjowO2ZvbnQtc2l6ZToxMDAlfWh0bWx7Ym94LXNpemluZzpib3JkZXItYm94fSosOmFmdGVyLDpiZWZvcmV7Ym94LXNpemluZzppbmhlcml0fVtjbGFzcyo9XCIgc2VtLWljb24tXCJdLFtjbGFzc149c2VtLWljb24tXXtmb250LWZhbWlseTpzZW1ibGVyLWljbyFpbXBvcnRhbnQ7c3BlYWs6bm9uZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDo0MDA7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2xpbmUtaGVpZ2h0OjE7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGV9LnNlbS1pY29uLWRyYWc6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXByb2R1Y3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxM1wiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWZvcm06YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyYVwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWxvY2F0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTRcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1jaGFydDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM1XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tdGV4dDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ1XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tbG9jYXRpb24yOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDdcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1JOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDZcIn0uc2VtLWljb24tUzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA3XCJ9LnNlbS1pY29uLVU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwOFwifS5zZW0taWNvbi1COmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDlcIn0uc2VtLWljb24tanVzdGlmeTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBjXCI7Y29sb3I6I2NjY30uc2VtLWljb24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEwXCI7Y29sb3I6I2NjY30uc2VtLWljb24tbWlkZGxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTFcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEyXCI7Y29sb3I6I2NjY30uc2VtLWljb24tY29sb3VyMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBhXCJ9LnNlbS1pY29uLWJydXNoOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGJcIn0uc2VtLWljb24tZm9sZGVyMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBkXCJ9LnNlbS1pY29uLWxvZ291dDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZVwifS5zZW0taWNvbi1vbDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXNlbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNVwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXJlcGVhdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAwXCJ9LnNlbS1pY29uLWNyb3A6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwMVwifS5zZW0taWNvbi1jYXNlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDJcIn0uc2VtLWljb24tcmVzaXplOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDNcIn0uc2VtLWljb24tY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNFwifS5zZW0taWNvbi1vbDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE1XCI7Y29sb3I6I2NjY30uc2VtLWljb24tdWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxNlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE3XCJ9LnNlbS1pY29uLWNsb3NlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MThcIn0uc2VtLWljb24taW5ib3g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxOVwifS5zZW0taWNvbi1ob21lOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWFcIn0uc2VtLWljb24tc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxYlwifS5zZW0taWNvbi1oYW1idXJnZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxY1wifS5zZW0taWNvbi1sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWRcIn0uc2VtLWljb24tdW5sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWVcIn0uc2VtLWljb24tZWxsaXBzZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFmXCJ9LnNlbS1pY29uLXZvbHVtZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIwXCJ9LnNlbS1pY29uLXBsYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyMVwifS5zZW0taWNvbi12aWRlbzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIyXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tZGVzaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjNcIn0uc2VtLWljb24tYWRkcmVzczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI0XCJ9LnNlbS1pY29uLWNlbnRlcl9hbGlnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI1XCI7Y29sb3I6I2NjY30uc2VtLWljb24tanVzdGlmeTI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyNlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXJpZ2h0X2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjdcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1sZWZ0X2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjhcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1jYXJvdXNlbDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI5XCJ9LnNlbS1pY29uLWltYWdlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmJcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1iYWNrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmNcIn0uc2VtLWljb24tZGVsZXRlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmRcIjtjb2xvcjojZDAwMjFifS5zZW0taWNvbi1kdXBsaWNhdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyZVwifS5zZW0taWNvbi1saW5rOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmZcIn0uc2VtLWljb24tc3R5bGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMFwifS5zZW0taWNvbi1jb2xvdXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMVwifS5zZW0taWNvbi1hZGRfYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMyXCI7Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tYWRkX2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzM1wiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tc2VuZDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzNFwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM2XCJ9LnNlbS1pY29uLWNvbG91cl9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzdcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1jb2xvdXJfYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM4XCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmZmfS5zZW0taWNvbi1wcm9maWxlLWFjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzOVwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXByb2ZpbGUtYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNhXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmZmfS5zZW0taWNvbi1kb3duX2Fycm93OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2JcIn0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2NcIjtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzZFwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2VcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoNDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNmXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1sb2dvdXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MFwifS5zZW0taWNvbi1wYXltZW50OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDFcIn0uc2VtLWljb24tc2V0dGluZ3M6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MlwifS5zZW0taWNvbi1zaXRlczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQzXCJ9LnNlbS1pY29uLXByb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NFwifS5zZW0tbGlzdC1yZXNldHtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZy1sZWZ0OjA7bWFyZ2luOjB9LnNlbS0tY29ybmVyIC5fdG9we2JvcmRlci1yYWRpdXM6NTAlIDAgNTAlIDUwJTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbXVpLWZvcm0tc2VsZWN0IHNlbGVjdHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tbGVmdDoxMCU7d2lkdGg6ODAlO21hcmdpbi1yaWdodDoxMCU7Ym9yZGVyOjFweCBzb2xpZCAjZDhjZmNmO2JvcmRlci1yYWRpdXM6MTBweDtmb250LXNpemU6MS44ZW07Y29sb3I6I2Q4Y2ZjZjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24saW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfWlucHV0LnNlbS1pbnB1dHt3aWR0aDpjYWxjKDEwMCUpO291dGxpbmU6MDtib3JkZXItcmFkaXVzOjEwcHggMTBweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXI6MXB4IHNvbGlkICM5NDk4YTN9Lm5vLXBhZGRpbmctbGlzdCAuc2VtLXVsIC5zZW0tbGksLm5vLXBhZGRpbmctbGlzdCAuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpe3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpe3doaXRlLXNwYWNlOm5vd3JhcDstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO3BhZGRpbmctdG9wOi40NXJlbTtwYWRkaW5nLWJvdHRvbTouNDVyZW07Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOm5vbmV9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saTpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saS5hY3RpdmUgaW1nLmljb24tZGVmYXVsdHtkaXNwbGF5Om5vbmV9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saS5hY3RpdmUgaW1nLmljb24taG92ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saSBpbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO21hcmdpbi1ib3R0b206NHB4fS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkgaW1nLmljb24taG92ZXJ7ZGlzcGxheTpub25lfS5zZW0tdWx7bGlzdC1zdHlsZTpub25lO3dpZHRoOjEwMCU7bWFyZ2luOjAgYXV0bztwYWRkaW5nOjB9LnNlbS11bCAuc2VtLWxpe3BhZGRpbmctdG9wOi40NXJlbTtwYWRkaW5nLWJvdHRvbTouNDVyZW07Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjY30uc2VtLXVsIC5zZW0tbGk6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tdWwgLnNlbS1saS5hY3RpdmV7Ym9yZGVyLXJhZGl1czo3cHggMCAwIDdweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9dWwuY29ybmVyX2FsbCBsaTpmaXJzdC1jaGlsZHtib3JkZXItcmFkaXVzOjZweCA2cHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH11bC5jb3JuZXJfYWxsIGxpOmxhc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czowIDAgMTFweCAxMXB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3RvcHtib3JkZXItcmFkaXVzOjZweCA2cHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2JvdHRvbXtib3JkZXItcmFkaXVzOjAgMCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX25vbmV7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2FsbHtib3JkZXItcmFkaXVzOjZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl9yaWdodHtib3JkZXItcmFkaXVzOjZweCAwIDAgNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2xlZnR7Ym9yZGVyLXJhZGl1czowIDZweCA2cHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl90b3AtbGVmdHtib3JkZXItcmFkaXVzOjAgNnB4IDZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl90b3AtcmlnaHR7Ym9yZGVyLXJhZGl1czo2cHggMCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2JvdHRvbS1sZWZ0LC5jb3JuZXJfYm90dG9tLXJpZ2h0e2JvcmRlci1yYWRpdXM6NnB4IDZweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lciwuc2VtLWNvbG9ybGlzdC0tY29udGFpbmVyLC5zZW0tc2hhZG93LC5zaWRlYmFyLWNvbnRhaW5lcntib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4xMiksMCAxcHggMnB4IHJnYmEoMCwwLDAsLjI0KX0uZGlhbG9nLWNvbnRhaW5lcjpob3Zlciwuc2VtLWNvbG9ybGlzdC0tY29udGFpbmVyOmhvdmVyLC5zZW0tc2hhZG93OmhvdmVyLC5zaWRlYmFyLWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93OjAgMTRweCAyOHB4IHJnYmEoMCwwLDAsLjI1KSwwIDEwcHggMTBweCByZ2JhKDAsMCwwLC4yMil9LnNlbS1idXR0b24tZG5ke2hlaWdodDo3MHB4O3dpZHRoOjcwcHg7bWFyZ2luOjVweDtib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9LnNlbS1idXR0b24tZG5kLS1tZWRpdW17aGVpZ2h0OjUwcHg7d2lkdGg6NTBweH0uc2VtLWJ1dHRvbi1kbmQtLXNtYWxse2hlaWdodDozMHB4O3dpZHRoOjMwcHh9LnNlbS1idG4tZmFie291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6bm9uZX0uc2VtLWJ0bi1mYWI6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tYnRuLWZhYiBpbWd7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtkaXNwbGF5OmJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc2VtLWJ0bi1mYWItLWRlZmF1bHQ+c3BhbntkaXNwbGF5OmJsb2NrO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LnNlbS1idG4tZmFiLS1kZWZhdWx0X3NtYWxse3BhZGRpbmc6LjRyZW19LnNlbS1idG4tZmFiLS1kZWZhdWx0X3NtYWxsPnNwYW57ZGlzcGxheTpibG9ja30uc2VtLWJ0bi1mYWItLXByaW1hcnk+c3Bhbiwuc2VtLWJ0bi1mYWItLXNlY29uZGFyeT5zcGFue2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9ub25le2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9yaWdodHtib3JkZXItcmFkaXVzOjUwJSAwIDAgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9sZWZ0e2JvcmRlci1yYWRpdXM6MCA1MCUgNTAlIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX3RvcC1sZWZ0e2JvcmRlci1yYWRpdXM6MCA1MCUgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl90b3AtcmlnaHR7Ym9yZGVyLXJhZGl1czo1MCUgMCA1MCUgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9ib3R0b20tbGVmdCwuc2VtLWJ0bi1mYWItLWNvcm5lcl9ib3R0b20tcmlnaHR7Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtwYWRkaW5nLWJvdHRvbToycHh9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaS5hY3RpdmUgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTo6YWZ0ZXIsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaTpob3ZlciBidXR0b246bm90KFtkaXNhYmxlZF0pOjphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9ue2JvcmRlcjpub25lO291dGxpbmU6MDtib3gtc2hhZG93Om5vbmU7cGFkZGluZzouMzVlbSAuNzVlbTtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Ym90dG9tOi0xcHh9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3Zlcntib3JkZXI6bm9uZTtvcGFjaXR5OjF9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOjphZnRlcntjb250ZW50OlwiXCI7aGVpZ2h0OjNweDt3aWR0aDoxMDAlO2JvdHRvbTotMXB4O3RyYW5zaXRpb246YWxsIDI1MG1zIGVhc2UgMHM7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfXVsLnNlbXVpLXRhYnMtbGlzdC50YWJzLXZlcnRpY2Fse21hcmdpbjowfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6c2VtYmxlci1pY287c3JjOnVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIuZW90PzlpazQybCk7c3JjOnVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIuZW90PzlpazQybCNpZWZpeCkgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksdXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci50dGY/OWlrNDJsKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoL2Fzc2V0cy9mb250cy9zZW1ibGVyLndvZmY/OWlrNDJsKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIuc3ZnPzlpazQybCNpY29tb29uKSBmb3JtYXQoXCJzdmdcIik7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfS5zZW0tYnV0dG9ue2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MTJweCAxMnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLWJ1dHRvbi0tc2Vjb25kYXJ5e2JvcmRlcjoxcHggc29saWQgI2E5YTlhOTtib3JkZXItcmFkaXVzOjEycHggMTJweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ1dHRvbi0tc21hbGx7cGFkZGluZzo2cHggMTFweDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5zZW0tYnV0dG9uLS1sYXJnZXtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5zZW0tYnV0dG9uLS1mdWxse3dpZHRoOjEwMCV9LnNlbS1idXR0b24tLWJsb2Nre2Rpc3BsYXk6YmxvY2s7cGFkZGluZzouNGVtfS5zZW0tYnV0dG9uLS1saW5rLC5zZW0tYnV0dG9uLS1saW5rX3ByaW1hcnl7Ym9yZGVyOjAgc29saWQ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtib3JkZXItcmFkaXVzOjB9LnNlbS1idXR0b24tY2lyY2xle2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2ZmZjtmb250LXdlaWdodDo3MDB9LnNlbS1idXR0b24tY2lyY2xlOmJlZm9yZXtwYWRkaW5nOjAgMCAwIDFweH0uc2VtLWJ1dHRvbi1kZWxldGV7Y29sb3I6I2ZmZjtmb250LXNpemU6NnB4O3BhZGRpbmc6LjNyZW07YmFja2dyb3VuZC1jb2xvcjojZDAwMjFiOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnNlbS1kbmQtY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlfS5zZW0tZG5kLWNvbnRhaW5lci0tZG5kLW5hdntoZWlnaHQ6NzBweDt3aWR0aDo3MHB4O21hcmdpbjo1cHg7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5zZW0tZG5kLWNvbnRhaW5lci0tbmF2e3otaW5kZXg6MTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowfS5idWxsZXQtaW5saW5lbGlzdCBsaXt2ZXJ0aWNhbC1hbGlnbjp0b3A7bWFyZ2luOjAgLTJweH0uYnVsbGV0LWlubGluZWxpc3QgbGkgLnNlbGVjdHtkaXNwbGF5OmJsb2NrO3dpZHRoOjIycHh9LmJ1bGxldC1pbmxpbmVsaXN0IGxpIC5zZWxlY3Qgc2VsZWN0e2Rpc3BsYXk6bm9uZX0uYnVsbGV0LWlubGluZWxpc3QgbGkuYWN0aXZlIC5zZWxlY3Qgc2VsZWN0e2Rpc3BsYXk6aW5saW5lfS5idWxsZXQtaW5saW5lbGlzdCBsaS5hY3RpdmU6OmFmdGVye2JhY2tncm91bmQtY29sb3I6cmVkfS5idWxsZXQtaW5saW5lbGlzdCBsaTo6YmVmb3Jle2NvbnRlbnQ6Jyc7dG9wOi01cHg7bGVmdDowO3dpZHRoOjEwMCU7Ym9yZGVyLXRvcDoxcHggc29saWQgIzAwMH0uYnVsbGV0LWlubGluZWxpc3QgbGk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAwMjtkaXNwbGF5OmJsb2NrO3RvcDotOXB4O2xlZnQ6MzglO3dpZHRoOjlweDtoZWlnaHQ6OXB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbnRlbnQ6Jyd9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOmZpcnN0LWNoaWxkOjpiZWZvcmV7bGVmdDozOCV9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOmxhc3QtY2hpbGQ6OmJlZm9yZXtsZWZ0Oi00NCV9LnNlbS1idXR0b24tcmFpbi1kcm9we3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIzcHg7aGVpZ2h0OjIzcHg7bWFyZ2luOjRweCA2cHggOHB4O2N1cnNvcjpwb2ludGVyfS5zZW0tYnV0dG9uLXJhaW4tZHJvcCAuc2VtLWJ1dHRvbi1kZWxldGV7Zm9udC1zaXplOjZweDt0b3A6NnB4O3JpZ2h0Oi05cHh9LnNlbS1idXR0b24tcmFpbi1kcm9wLC5zZW0tcmFpbi1kcm9we2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjUwJTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjUwJTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjUwJTtib3gtc2hhZG93Omluc2V0IDAgMCAxMHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc2VtLXBhZ2luYXRpb24tY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc2VtLXBhZ2luYXRpb24tbmF2e21heC13aWR0aDozMDBweH0uc2VtLXBhZ2luYXRpb24tbmF2PmRpdntmbGV4OjE7dGV4dC1hbGlnbjpjZW50ZXI7LW1vei11c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZX0uc2VtLXBhZ2luYXRpb24tbmV4dCBhLC5zZW0tcGFnaW5hdGlvbi1wcmV2aW91cyBhe2Rpc3BsYXk6YmxvY2s7bGluZS1oZWlnaHQ6MjVweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNlbS1wYWdpbmF0aW9uLW5leHQgYXt0ZXh0LWFsaWduOmxlZnR9LnNlbS1wYWdpbmF0aW9uLXByZXZpb3VzIGF7dGV4dC1hbGlnbjpyaWdodH0uc2VtLXBhZ2luYXRpb24gYXtoZWlnaHQ6MjVweDt3aWR0aDoyNXB4O2xpbmUtaGVpZ2h0OjI1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zZW0tcGFnaW5hdGlvbi5hY3RpdmUgZGl2e2JvcmRlcjpub25lO2hlaWdodDoyNXB4O3dpZHRoOjI1cHg7bGluZS1oZWlnaHQ6MjVweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyLXJhZGl1czoxMnB4IDEycHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1wYWdpbmF0aW9uLmFjdGl2ZSBkaXY6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tYXZhdGFye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9LnNlbS1hdmF0YXIgLnNlbS1hdmF0YXJfX2ltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5kaWFsb2ctY29udGFpbmVye292ZXJmbG93OmF1dG87Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3B7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3gtc2hhZG93Om5vbmV9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcDpob3Zlcntib3gtc2hhZG93Om5vbmV9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcCAuZGlhbG9nLWNvbnRhaW5lci0taGVhZGVye2JvcmRlci1yYWRpdXM6MTJweCAwIDAgMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcCAuZGlhbG9nLWNvbnRhaW5lci0tYm9keXtib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLWZ1bGx7aGVpZ2h0OjEwMCU7ei1pbmRleDoyfS5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXJ7Ym9yZGVyLXJhZGl1czowIDEycHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci0tYm9keSwuZGlhbG9nLWNvbnRhaW5lci0tYm9keV9zcGFjZWR7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItLWZvb3Rlcntib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tY29sb3JsaXN0e292ZXJmbG93OmF1dG99LnNlbS1jb2xvcmxpc3QtLWNvbnRhaW5lcntib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tY29sb3JsaXN0LS1saXN0e21pbi1oZWlnaHQ6MjBweH0uc2VtLWNvbG9ybGlzdC0tbGlzdC0taW5uZXJ7ZGlzcGxheTpub25lfS5zZW0tY29sb3JsaXN0LS1saXN0OmhvdmVyIC5zZW0tY29sb3JsaXN0LS1saXN0LS1pbm5lcntkaXNwbGF5OmJsb2NrfS5zZW0tY29sb3JsaXN0LS1jbG9zZWJ1dHRvbntmb250LXNpemU6MTFweH0uYnJvd3Nlci1jb250YWluZXJ7aGVpZ2h0OmNhbGMoMTAwJSAtIDMwcHggLSAyMHB4KTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowIDIwcHg7Ym9yZGVyLXJhZGl1czoxMHB4fS5icm93c2VyLWNvbnRhaW5lciAubGF5b3V0e2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsfS5icm93c2VyLWNvbnRhaW5lcjo6YmVmb3Jley13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjBweDtsZWZ0OjE1cHg7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjUwJX0uaDF7Zm9udC1zaXplOjJyZW19Lmgye2ZvbnQtc2l6ZToxLjVyZW19Lmgze2ZvbnQtc2l6ZToxLjI1cmVtfS5oNHtmb250LXNpemU6MXJlbX0uaDV7Zm9udC1zaXplOi44NzVyZW19Lmg2e2ZvbnQtc2l6ZTouNzVyZW19LmZvbnQtZmFtaWx5LWluaGVyaXR7Zm9udC1mYW1pbHk6aW5oZXJpdH0uZm9udC1zaXplLWluaGVyaXR7Zm9udC1zaXplOmluaGVyaXR9LnRleHQtZGVjb3JhdGlvbi1ub25le3RleHQtZGVjb3JhdGlvbjpub25lfS5ib2xke2ZvbnQtd2VpZ2h0OjcwMH0ucmVndWxhcntmb250LXdlaWdodDo0MDB9Lml0YWxpY3tmb250LXN0eWxlOml0YWxpY30uY2Fwc3t0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6LjJlbX0ubGVmdC1hbGlnbnt0ZXh0LWFsaWduOmxlZnR9LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ucmlnaHQtYWxpZ257dGV4dC1hbGlnbjpyaWdodH0uanVzdGlmeXt0ZXh0LWFsaWduOmp1c3RpZnl9Lm5vd3JhcHt3aGl0ZS1zcGFjZTpub3dyYXB9LmJyZWFrLXdvcmR7d29yZC13cmFwOmJyZWFrLXdvcmR9LmxpbmUtaGVpZ2h0LTF7bGluZS1oZWlnaHQ6MX0ubGluZS1oZWlnaHQtMntsaW5lLWhlaWdodDoxLjEyNX0ubGluZS1oZWlnaHQtM3tsaW5lLWhlaWdodDoxLjI1fS5saW5lLWhlaWdodC00e2xpbmUtaGVpZ2h0OjEuNX0ubGlzdC1zdHlsZS1ub25le2xpc3Qtc3R5bGU6bm9uZX0udW5kZXJsaW5le3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnRydW5jYXRle21heC13aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubGlzdC1yZXNldHtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZy1sZWZ0OjB9LmlubGluZXtkaXNwbGF5OmlubGluZX0uYmxvY2ssLnNlbS1idXR0b24tY2lyY2xlLC5zZW11aS10YWJzLGZpZ3VyZS5zZW11aS10aHVtYm5haWwsZmlndXJlLnNlbXVpLXRodW1ibmFpbCAuZmlnY2FwdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9ja30uYnVsbGV0LWlubGluZWxpc3QgbGksLmlubGluZS1ibG9jaywuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9ja30udGFibGV7ZGlzcGxheTp0YWJsZX0udGFibGUtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGx9Lm92ZXJmbG93LWhpZGRlbntvdmVyZmxvdzpoaWRkZW59Lm92ZXJmbG93LXNjcm9sbHtvdmVyZmxvdzpzY3JvbGx9Lm92ZXJmbG93LWF1dG97b3ZlcmZsb3c6YXV0b30uY2xlYXJmaXg6YWZ0ZXIsLmNsZWFyZml4OmJlZm9yZXtjb250ZW50OlwiIFwiO2Rpc3BsYXk6dGFibGV9LmNsZWFyZml4OmFmdGVye2NsZWFyOmJvdGh9LmxlZnR7ZmxvYXQ6bGVmdH0ucmlnaHR7ZmxvYXQ6cmlnaHR9LmZpdCwuc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne21heC13aWR0aDoxMDAlfS5tYXgtd2lkdGgtMXttYXgtd2lkdGg6MjRyZW19Lm1heC13aWR0aC0ye21heC13aWR0aDozMnJlbX0ubWF4LXdpZHRoLTN7bWF4LXdpZHRoOjQ4cmVtfS5tYXgtd2lkdGgtNHttYXgtd2lkdGg6NjRyZW19LmJvcmRlci1ib3h7Ym94LXNpemluZzpib3JkZXItYm94fS5hbGlnbi1iYXNlbGluZXt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX0uYWxpZ24tdG9we3ZlcnRpY2FsLWFsaWduOnRvcH0uYWxpZ24tbWlkZGxle3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uYWxpZ24tYm90dG9te3ZlcnRpY2FsLWFsaWduOmJvdHRvbX0ubTAsLnNlbS1idXR0b24tLWxpbmssLnNlbS1idXR0b24tLWxpbmtfcHJpbWFyeSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b24sZmlndXJlLGgxLGgyLGgzLGg0LGg1e21hcmdpbjowfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLm10MCwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye21hcmdpbi10b3A6MH0ubXIwe21hcmdpbi1yaWdodDowfS5tYjB7bWFyZ2luLWJvdHRvbTowfS5tbDB7bWFyZ2luLWxlZnQ6MH0ubXgwLC5zZW0tcGFnaW5hdGlvbi1uYXZ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MH0ubXkwe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Lm0xe21hcmdpbjouNXJlbX0ubXQxe21hcmdpbi10b3A6LjVyZW19Lm1yMXttYXJnaW4tcmlnaHQ6LjVyZW19Lm1iMXttYXJnaW4tYm90dG9tOi41cmVtfS5tbDF7bWFyZ2luLWxlZnQ6LjVyZW19Lm14MSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbnttYXJnaW4tbGVmdDouNXJlbTttYXJnaW4tcmlnaHQ6LjVyZW19Lm15MSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse21hcmdpbi10b3A6LjVyZW07bWFyZ2luLWJvdHRvbTouNXJlbX0ubTJ7bWFyZ2luOjFyZW19Lm10MnttYXJnaW4tdG9wOjFyZW19Lm1yMnttYXJnaW4tcmlnaHQ6MXJlbX0ubWIye21hcmdpbi1ib3R0b206MXJlbX0ubWwye21hcmdpbi1sZWZ0OjFyZW19Lm14MnttYXJnaW4tbGVmdDoxcmVtO21hcmdpbi1yaWdodDoxcmVtfS5teTJ7bWFyZ2luLXRvcDoxcmVtO21hcmdpbi1ib3R0b206MXJlbX0ubTN7bWFyZ2luOjJyZW19Lm10M3ttYXJnaW4tdG9wOjJyZW19Lm1yM3ttYXJnaW4tcmlnaHQ6MnJlbX0ubWIze21hcmdpbi1ib3R0b206MnJlbX0ubWwzLC5zZW0tY29sb3JsaXN0LS1jb250YWluZXJ7bWFyZ2luLWxlZnQ6MnJlbX0ubXgze21hcmdpbi1sZWZ0OjJyZW07bWFyZ2luLXJpZ2h0OjJyZW19Lm15M3ttYXJnaW4tdG9wOjJyZW07bWFyZ2luLWJvdHRvbToycmVtfS5tNHttYXJnaW46NHJlbX0ubXQ0e21hcmdpbi10b3A6NHJlbX0ubXI0e21hcmdpbi1yaWdodDo0cmVtfS5tYjR7bWFyZ2luLWJvdHRvbTo0cmVtfS5tbDR7bWFyZ2luLWxlZnQ6NHJlbX0ubXg0e21hcmdpbi1sZWZ0OjRyZW07bWFyZ2luLXJpZ2h0OjRyZW19Lm15NHttYXJnaW4tdG9wOjRyZW07bWFyZ2luLWJvdHRvbTo0cmVtfS5teG4xe21hcmdpbi1sZWZ0Oi0uNXJlbTttYXJnaW4tcmlnaHQ6LS41cmVtfS5teG4ye21hcmdpbi1sZWZ0Oi0xcmVtO21hcmdpbi1yaWdodDotMXJlbX0ubXhuM3ttYXJnaW4tbGVmdDotMnJlbTttYXJnaW4tcmlnaHQ6LTJyZW19Lm14bjR7bWFyZ2luLWxlZnQ6LTRyZW07bWFyZ2luLXJpZ2h0Oi00cmVtfS5tbC1hdXRve21hcmdpbi1sZWZ0OmF1dG99Lm1yLWF1dG97bWFyZ2luLXJpZ2h0OmF1dG99Lm14LWF1dG97bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30uYnJvd3Nlci1jb250YWluZXIsLnAwLC5zZW0tYnV0dG9uLS1saW5rLC5zZW0tYnV0dG9uLS1saW5rX3ByaW1hcnksZmlndXJlLGgxLGgyLGgzLGg0LGg1e3BhZGRpbmc6MH0ucHQwe3BhZGRpbmctdG9wOjB9LnByMHtwYWRkaW5nLXJpZ2h0OjB9LnBiMHtwYWRkaW5nLWJvdHRvbTowfS5wbDB7cGFkZGluZy1sZWZ0OjB9LnB4MHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjB9LnB5MCwuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLm5vLXBhZGRpbmd7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5jb3JuZXIsLnAxLC5zZW0tYnRuLWZhYi0tZGVmYXVsdCwuc2VtLWJ0bi1mYWItLXByaW1hcnksLnNlbS1idG4tZmFiLS1zZWNvbmRhcnksLnNlbS1idXR0b24tLWxhcmdlLC5zZW0tY29sb3ItbGlzdCBsaSwuc2VtLXNlY3Rpb24tLWNvcm5lcntwYWRkaW5nOi41cmVtfS5wdDF7cGFkZGluZy10b3A6LjVyZW19LnByMSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse3BhZGRpbmctcmlnaHQ6LjVyZW19LnBiMXtwYWRkaW5nLWJvdHRvbTouNXJlbX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9wIC5kaWFsb2ctY29udGFpbmVyLS1ib2R5LC5wbDEsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbHtwYWRkaW5nLWxlZnQ6LjVyZW19LmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2VkLC5kaWFsb2ctY29udGFpbmVyLS1mb290ZXIsLmRpYWxvZy1jb250YWluZXItLWhlYWRlciwucHkxLC5zZW0tYnV0dG9uLS1wcmltYXJ5LC5zZW0tYnV0dG9uLS1zZWNvbmRhcnksLnNpZGViYXItY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuc2lkZWJhci1jb250YWluZXItLWZvb3Rlciwuc2lkZWJhci1jb250YWluZXItLWhlYWRlcixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257cGFkZGluZy10b3A6LjVyZW07cGFkZGluZy1ib3R0b206LjVyZW19LmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2VkLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLnB4MSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye3BhZGRpbmctbGVmdDouNXJlbTtwYWRkaW5nLXJpZ2h0Oi41cmVtfS5wMntwYWRkaW5nOjFyZW19LnB0MntwYWRkaW5nLXRvcDoxcmVtfS5wcjJ7cGFkZGluZy1yaWdodDoxcmVtfS5wYjJ7cGFkZGluZy1ib3R0b206MXJlbX0ucGwye3BhZGRpbmctbGVmdDoxcmVtfS5weTJ7cGFkZGluZy10b3A6MXJlbTtwYWRkaW5nLWJvdHRvbToxcmVtfS5idWxsZXQtaW5saW5lbGlzdCBsaSwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5weDIsLnNlbS1jb2xvci1saXN0IGxpLC5zZW0tdWwgLnNlbS1saSwuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntwYWRkaW5nLWxlZnQ6MXJlbTtwYWRkaW5nLXJpZ2h0OjFyZW19LnAze3BhZGRpbmc6MnJlbX0ucHQze3BhZGRpbmctdG9wOjJyZW19LnByM3twYWRkaW5nLXJpZ2h0OjJyZW19LnBiM3twYWRkaW5nLWJvdHRvbToycmVtfS5wbDN7cGFkZGluZy1sZWZ0OjJyZW19LnB5M3twYWRkaW5nLXRvcDoycmVtO3BhZGRpbmctYm90dG9tOjJyZW19LnB4Mywuc2VtLWJ1dHRvbi0tcHJpbWFyeSwuc2VtLWJ1dHRvbi0tc2Vjb25kYXJ5e3BhZGRpbmctbGVmdDoycmVtO3BhZGRpbmctcmlnaHQ6MnJlbX0ucDR7cGFkZGluZzo0cmVtfS5wdDR7cGFkZGluZy10b3A6NHJlbX0ucHI0e3BhZGRpbmctcmlnaHQ6NHJlbX0ucGI0e3BhZGRpbmctYm90dG9tOjRyZW19LnBsNHtwYWRkaW5nLWxlZnQ6NHJlbX0ucHk0e3BhZGRpbmctdG9wOjRyZW07cGFkZGluZy1ib3R0b206NHJlbX0ucHg0e3BhZGRpbmctbGVmdDo0cmVtO3BhZGRpbmctcmlnaHQ6NHJlbX0uY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5jb2wtMXt3aWR0aDo4LjMzMzMzJX0uY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5jb2wtM3t3aWR0aDoyNSV9LmNvbC00e3dpZHRoOjMzLjMzMzMzJX0uY29sLTV7d2lkdGg6NDEuNjY2NjclfS5jb2wtNnt3aWR0aDo1MCV9LmNvbC03e3dpZHRoOjU4LjMzMzMzJX0uY29sLTh7d2lkdGg6NjYuNjY2NjclfS5jb2wtOXt3aWR0aDo3NSV9LmNvbC0xMHt3aWR0aDo4My4zMzMzMyV9LmNvbC0xMXt3aWR0aDo5MS42NjY2NyV9LmNvbC0xMnt3aWR0aDoxMDAlfS5mbGV4LC5zZW0tY29sb3Itc3dhdGNoZXMsLnNlbS1wYWdpbmF0aW9uLW5hdntkaXNwbGF5OmZsZXh9QG1lZGlhIChtaW4td2lkdGg6NDBlbSl7LnNtLWNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc20tY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc20tY29sLTF7d2lkdGg6OC4zMzMzMyV9LnNtLWNvbC0ye3dpZHRoOjE2LjY2NjY3JX0uc20tY29sLTN7d2lkdGg6MjUlfS5zbS1jb2wtNHt3aWR0aDozMy4zMzMzMyV9LnNtLWNvbC01e3dpZHRoOjQxLjY2NjY3JX0uc20tY29sLTZ7d2lkdGg6NTAlfS5zbS1jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LnNtLWNvbC04e3dpZHRoOjY2LjY2NjY3JX0uc20tY29sLTl7d2lkdGg6NzUlfS5zbS1jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5zbS1jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5zbS1jb2wtMTJ7d2lkdGg6MTAwJX0uc20tZmxleHtkaXNwbGF5OmZsZXh9fUBtZWRpYSAobWluLXdpZHRoOjUyZW0pey5tZC1jb2x7ZmxvYXQ6bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1kLWNvbC1yaWdodHtmbG9hdDpyaWdodDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1kLWNvbC0xe3dpZHRoOjguMzMzMzMlfS5tZC1jb2wtMnt3aWR0aDoxNi42NjY2NyV9Lm1kLWNvbC0ze3dpZHRoOjI1JX0ubWQtY29sLTR7d2lkdGg6MzMuMzMzMzMlfS5tZC1jb2wtNXt3aWR0aDo0MS42NjY2NyV9Lm1kLWNvbC02e3dpZHRoOjUwJX0ubWQtY29sLTd7d2lkdGg6NTguMzMzMzMlfS5tZC1jb2wtOHt3aWR0aDo2Ni42NjY2NyV9Lm1kLWNvbC05e3dpZHRoOjc1JX0ubWQtY29sLTEwe3dpZHRoOjgzLjMzMzMzJX0ubWQtY29sLTExe3dpZHRoOjkxLjY2NjY3JX0ubWQtY29sLTEye3dpZHRoOjEwMCV9Lm1kLWZsZXh7ZGlzcGxheTpmbGV4fX1AbWVkaWEgKG1pbi13aWR0aDo2NGVtKXsubGctY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5sZy1jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5sZy1jb2wtMXt3aWR0aDo4LjMzMzMzJX0ubGctY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5sZy1jb2wtM3t3aWR0aDoyNSV9LmxnLWNvbC00e3dpZHRoOjMzLjMzMzMzJX0ubGctY29sLTV7d2lkdGg6NDEuNjY2NjclfS5sZy1jb2wtNnt3aWR0aDo1MCV9LmxnLWNvbC03e3dpZHRoOjU4LjMzMzMzJX0ubGctY29sLTh7d2lkdGg6NjYuNjY2NjclfS5sZy1jb2wtOXt3aWR0aDo3NSV9LmxnLWNvbC0xMHt3aWR0aDo4My4zMzMzMyV9LmxnLWNvbC0xMXt3aWR0aDo5MS42NjY2NyV9LmxnLWNvbC0xMnt3aWR0aDoxMDAlfS5sZy1mbGV4e2Rpc3BsYXk6ZmxleH0ubGctaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX0uZmxleC1jb2x1bW57ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5mbGV4LXdyYXB7ZmxleC13cmFwOndyYXB9Lml0ZW1zLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9Lml0ZW1zLWVuZHthbGlnbi1pdGVtczpmbGV4LWVuZH0uaXRlbXMtY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlcn0uaXRlbXMtYmFzZWxpbmV7YWxpZ24taXRlbXM6YmFzZWxpbmV9Lml0ZW1zLXN0cmV0Y2h7YWxpZ24taXRlbXM6c3RyZXRjaH0uc2VsZi1zdGFydHthbGlnbi1zZWxmOmZsZXgtc3RhcnR9LnNlbGYtZW5ke2FsaWduLXNlbGY6ZmxleC1lbmR9LnNlbGYtY2VudGVye2FsaWduLXNlbGY6Y2VudGVyfS5zZWxmLWJhc2VsaW5le2FsaWduLXNlbGY6YmFzZWxpbmV9LnNlbGYtc3RyZXRjaHthbGlnbi1zZWxmOnN0cmV0Y2h9Lmp1c3RpZnktc3RhcnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lmp1c3RpZnktZW5ke2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uanVzdGlmeS1jZW50ZXJ7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uanVzdGlmeS1iZXR3ZWVue2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5qdXN0aWZ5LWFyb3VuZHtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0YXJ0e2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydH0uY29udGVudC1lbmR7YWxpZ24tY29udGVudDpmbGV4LWVuZH0uY29udGVudC1jZW50ZXJ7YWxpZ24tY29udGVudDpjZW50ZXJ9LmNvbnRlbnQtYmV0d2VlbnthbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW59LmNvbnRlbnQtYXJvdW5ke2FsaWduLWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0cmV0Y2h7YWxpZ24tY29udGVudDpzdHJldGNofS5mbGV4LWF1dG97ZmxleDoxIDEgYXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjB9LmZsZXgtbm9uZXtmbGV4Om5vbmV9Lm9yZGVyLTB7b3JkZXI6MH0ub3JkZXItMXtvcmRlcjoxfS5vcmRlci0ye29yZGVyOjJ9Lm9yZGVyLTN7b3JkZXI6M30ub3JkZXItbGFzdHtvcmRlcjo5OTk5OX0uYnVsbGV0LWlubGluZWxpc3QgbGksLmNvbG9yLXBpY2tlciAuc2F0dXJhdGlvbi1saWdodG5lc3MsLnJlbGF0aXZlLC5zZW0tY29sb3ItbGlzdCBsaSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgLmZpZ2NhcHRpb24tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfS5hYnNvbHV0ZSwuYnVsbGV0LWlubGluZWxpc3QgbGk6OmFmdGVyLC5idWxsZXQtaW5saW5lbGlzdCBsaTo6YmVmb3JlLC5jb2xvci1waWNrZXIsLnNlbS1idXR0b24tY2lyY2xlLC5zZW0tY29sb3ItbGlzdCBsaSAuY29sb3ItZGVsZXRlLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbjo6YWZ0ZXIsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBidXR0b24sZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3Bvc2l0aW9uOmFic29sdXRlfS5maXhlZHtwb3NpdGlvbjpmaXhlZH0uZGlhbG9nLWNvbnRhaW5lci1mdWxsLC5zZW0tY29sb3ItbGlzdCBsaSAuY29sb3ItZGVsZXRlLC50b3AtMCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbnt0b3A6MH0ucmlnaHQtMCwuc2VtLWNvbG9yLWxpc3QgbGkgLmNvbG9yLWRlbGV0ZSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbntyaWdodDowfS5ib3R0b20tMCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257Ym90dG9tOjB9LmxlZnQtMCwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVye2xlZnQ6MH0uejF7ei1pbmRleDoxfS56Mnt6LWluZGV4OjJ9Lnoze3otaW5kZXg6M30uejR7ei1pbmRleDo0fS5ib3JkZXJ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHh9LmJvcmRlci10b3B7Ym9yZGVyLXRvcC1zdHlsZTpzb2xpZDtib3JkZXItdG9wLXdpZHRoOjFweH0uYm9yZGVyLXJpZ2h0e2JvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtib3JkZXItcmlnaHQtd2lkdGg6MXB4fS5ib3JkZXItYm90dG9te2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHh9LmJvcmRlci1sZWZ0e2JvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO2JvcmRlci1sZWZ0LXdpZHRoOjFweH0uYm9yZGVyLW5vbmV7Ym9yZGVyOjB9LnJvdW5kZWR7Ym9yZGVyLXJhZGl1czozcHh9LmNpcmNsZSwuc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne2JvcmRlci1yYWRpdXM6NTAlfS5yb3VuZGVkLXRvcHtib3JkZXItcmFkaXVzOjNweCAzcHggMCAwfS5yb3VuZGVkLXJpZ2h0e2JvcmRlci1yYWRpdXM6MCAzcHggM3B4IDB9LnJvdW5kZWQtYm90dG9te2JvcmRlci1yYWRpdXM6MCAwIDNweCAzcHh9LnJvdW5kZWQtbGVmdHtib3JkZXItcmFkaXVzOjNweCAwIDAgM3B4fS5ub3Qtcm91bmRlZHtib3JkZXItcmFkaXVzOjB9LmhpZGV7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O2hlaWdodDoxcHg7d2lkdGg6MXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMXB4LDFweCwxcHgsMXB4KX1AbWVkaWEgKG1heC13aWR0aDo0MGVtKXsueHMtaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo0MGVtKSBhbmQgKG1heC13aWR0aDo1MmVtKXsuc20taGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo1MmVtKSBhbmQgKG1heC13aWR0aDo2NGVtKXsubWQtaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX0uZGlzcGxheS1ub25le2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnNpZGViYXItY29udGFpbmVye2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uc2lkZWJhci1jb250YWluZXItZnVsbHtoZWlnaHQ6MTAwJX0uc2lkZWJhci1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjAgMTJweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tYm9keSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2Vke2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVye2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1jb2xvci1zd2F0Y2hlc3tmbGV4LXdyYXA6bm93cmFwfS5zZW0tY29sb3Itc3dhdGNoZXNfY3VycmVudHtmbGV4LWdyb3c6MX0uc2VtLWNvbG9yLXN3YXRjaGVzX2N1cnJlbnQgYnV0dG9ue21hcmdpbi10b3A6MTBweH0uc2VtLWNvbG9yLXN3YXRjaGVzX3ByZXNlbGVjdGVke21hcmdpbi10b3A6MTNweDttYXJnaW4tbGVmdDotMTBweDttYXJnaW4tYm90dG9tOjA7ZmxleC1ncm93OjE7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC13cmFwOndyYXA7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDo2N3B4fWZpZ3VyZS5zZW11aS10aHVtYm5haWx7d2lkdGg6MTAwJX1maWd1cmUuc2VtdWktdGh1bWJuYWlsIGltZ3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9ZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OjQ0cHh9LnNlbXVpLWNhcmQtZm9vdGVye2NvbG9yOiNmZmY7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQtY29sb3I6IzJhMmEyYX0uc2VtdWktaGVhZGVyLXNlY3Rpb257cGFkZGluZzoyJSAyJSAwO2Rpc3BsYXk6YmxvY2t9LnNlbXVpLWhlYWRlci1zZWN0aW9uLmxhcmdle3BhZGRpbmc6MyUgMiUgMH0uc2VtdWktaGVhZGVyLXNlY3Rpb24uc21hbGx7cGFkZGluZzoxJSAuNSUgMH0uc2VtdWktZm9vdGVyLXNlY3Rpb257cGFkZGluZzowIDIlIDIlO2Rpc3BsYXk6YmxvY2t9LnNlbXVpLWZvb3Rlci1zZWN0aW9uLmxhcmdle3BhZGRpbmc6MCAyJSAzJX0uc2VtdWktZm9vdGVyLXNlY3Rpb24uc21hbGx7cGFkZGluZzowIC41JSAxJX0uYnV0dG9uLXNlbmQ6YmVmb3Jle2NvbG9yOiNmZmZ9LnNlbS1jb2xvci1zd2l0Y2gtLWNvbG9ycyAuc3VmaXh7dG9wOi00cHg7cmlnaHQ6NHB4fS5jb2xvci1waWNrZXJ7bWFyZ2luOjAgYXV0bztib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt6LWluZGV4OjEwMDAwMDt3aWR0aDoyMTBweDtoZWlnaHQ6YXV0bztjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5jb2xvci1waWNrZXIgLmN1cnNvcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlcjoycHggc29saWQgIzIyMjtib3JkZXItcmFkaXVzOjUwJTtjdXJzb3I6ZGVmYXVsdH0uY29sb3ItcGlja2VyIC5odWUtYWxwaGF7bWFyZ2luLWJvdHRvbTozcHh9LmNvbG9yLXBpY2tlciAuaHVle3dpZHRoOjEwMCU7aGVpZ2h0OjE2cHg7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQVFDQVlBQUFEMDZJWW5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINEFJV0R3a1VGV2JDQ0FBQUFGeEpSRUZVYU43dDBrRUtnMEFRQU1FMng4My9uMnF1NXFDZ0QxaURoQ29ZZHBuYlFDOWJiWTFxVk8vanZjNmszYWQ5MXM3LzdGMS9jc2dQcnVqdVExN0JEWVNGc0JBV3dnSmhJU3lFQmNKQ1dBZ0xoSVd3RUJZSWkyZjdBci8xVENnRkgyWDlBQUFBQUVsRlRrU3VRbUNDKX0uY29sb3ItcGlja2VyIC5hbHBoYXt3aWR0aDoxMDAlO2hlaWdodDoxNnB4O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKWUFBQUFRQ0FZQUFBRDA2SVluQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRBSVdEd1lRbFpNYTNnQUFBV1ZKUkVGVWFON3RtRUdPNmpBUVJDc09BckhnQnB5QUpZR2pjR29jeEFtNEEySUhwbW9XRTBlQkgrZXptRmxOdlUwNnNoSjNXNlZFZWxXTVVRQUlJRjlmNnFacGltc0ExTFl0UzJ1RjUxL3UyN1lWQUZaVlJVa0VvR0hkUFYvc0ljYklFSUlrVWRJLzlYYTduZXl2NjErU1dGVVZBVkNTY3QwMFRXbjJmdjZ1MytFY2ZkM3RYenkvMCtuRVV1K1NQam8va3F6cm1pUXBTY042djk4WGV3ZkE4L2xNa2lMSjJXeEdTVW9wY1Q2Zk02VTBOWDkvZnJmYmpldjFXdGZybFpmTGhZZkRRUUhHL0FJT2xuR3dqSU5sSEN4akhDempZSm0vVEpXZEN3cXVKWHNlRkZ6R3dETk5laUtNT0pUTzh4UWREUWFlQjI5K0s5ZWZlTGFCbzlKN3ZkdnRKajFSakZGamZpdjdxdjk1dGp4LzdsZVNRZ2g5M2UxZmZNZUlwNk8rWVFqaG8vTjc5MXQxWFZPU1NJN04vL0srNC9Hb3hXTEJ4K1BCNS9PcDVYTEorLzNPbEpKV3F4VTNtODNvdnY1aUdmOEtqWU5sSEN4akhDempZQmtIeTVnZjVndXN2UVU3VTM3alRBQUFBQUJKUlU1RXJrSmdnZz09KX0uY29sb3ItcGlja2VyIC5zYXR1cmF0aW9uLWxpZ2h0bmVzc3t3aWR0aDoxMDAlO2hlaWdodDoxMzBweDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT1lBQUFDQ0NBWUFBQUJTRDdUM0FBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0QUlXRHdrc1BXUjZsZ0FBSUFCSlJFRlVlTnJ0blZ1VDQ3Z1JyQUhOK1AvL09yLzYxWTV3T05aN21aMXUzWEFlTE1qSlpHWlZnZEtzZmM1eFIzUzBSSUlVVytDSHpDcGMyTWNZbzdYR3YzZXg3VWlaZDU3cmp5enp2K3YrMzNYL1IvKzNyL2Y3dlIzODZZK1R2S05jZi93ZGhUTFBjdjlxVTJ3WmQ3NHV0aDB0MTgyMWprSVpMUGNzSS82bldhNFh2dXRxdVUwWjg1bW54ODBTL1p6Z3BuTG5PdEhOdDcvb2Z4MVRLWGNTTnpOLzdxYk1RM2p1N3JOUW1NWVlkLzRzMmo5YWErUCtnR2FNY1pyYjFNL3RkcnZmNy9kMnY5OVA5L3Q5M08vM2NidmR4dTEyRzlmcmRWd3VsM0UrbjhjLy8vblArMisvL1hiNjZhZWZ4bC8vK3RmeDV6Ly8yWUs1QWwycmd2ZjRVc2JwZEdyQjUyYkF2QXJYcHV6am1pcUFWU0d6NWVEbUdZWHpoYkFabUNybm16ZGRwVVUrOFkxZEFPWWVYQ3REVXdWd1Y3WUNHSDZ1QW15TWNaOWw1dmtVYUJQR01VWjcvSjV3Lzc5Mi9mdnY5WHE5MzI2M2RyL2ZUeFBFQ2VNRThuSzVqTS9Qei9IVFR6L2R2MzM3ZHZybGwxL0dQLzd4ai9HM3YvMXQvT1V2ZndrVnN3b25namRPcDlQekgzVTNEM3ptV0duWlZYbjRqQ3FzN3dDMkJLUDQvOHRBemtac29XeDZYcnFlSFp5bXZwNEFCQ0JKaFRRd0tmRFQ4Z3pyWkNJcWk1QWhpQUNqQmZFQjJyUDgvWDYzTU03ZjYvVjZ2OS92N1hhN2JZQzgzVzdqY3Jsc1ZISXE1ZmZ2MzArLy9mYmIrT1dYWDhaUFAvMDAvdjczdjQrZmYvNzVKU3ZiZXUrYkwyV01NYUZiQWxwQk5NODVRWCtjdDZxb1Nxa1BBd3VRbEJWS3FHTkZTVU9BQTNCbXU3Z0M1aE5PZDE1blN3dkFPVVc3QzRnaVVDVjhTZ241TDloTkZJcVRzcDBHeEkweXNpb3lqQWprWS90R0pWRXB6K2Z6K09XWFgrN2Z2MzgvL2Y3NzcrUGJ0Mi9qMTE5L0hULy8vUFA0OWRkZng4ZkhSd3JtVGpWNzc5RVh1MnB4Mnhoand0ZEpaUWNBV1FJUExQSVNzTUphU3dpRDhneklLcndTeUFURTVqNW5BYlI1YzFkQlV3QmxzRVdXMGg2THFpWXNxRlBBUXhDeVJaM3dPU0FSeG1sWE1YNWs2NHBRZnZ2MjdmNzUrZGsrUGo1T0h4OGY0L3YzNytQYnQyL2p0OTkrRzkrK2ZSc2ZIeC9qY3JtVUZMTzMxZ1lEV2JseFJJcy9UcWZUN291c3hKc0F4WEEyR2M3VEE5WGRnZmRvSGJGc2o3NlgyKzFXQXJnSTFhZ2VHd0EzcXVwcW9Ic21jYkk2RnU5M3F1Z2dGYTlkN0xlRHRnS2ZBRkhCSitORUJ5SWtjSjVLZXJ2ZFRtaGhHY2dKSlNaNXZuLy9maitmeisxOFBwOCtQei9INStmbm1HRCsvdnZ2NC92MzcrUGo0Mk44Zm42TzIrMVdzN0pqalA2d3JhTUk1RTRSWjh4MnZWNVRTd2txdW90VjcvZDdUejZIRldzRC9xTmNkdzBDUTNxLzMyMWM2ODZUd0RWSWRidXk3M3pObGRoU0hiOEkya2xaem5tK0luQlM0VTZuMDMwMmFCRnNMaEhEQUtKVkpWZ2xmSTlqaHZ1NTNXNTNzTEFOWU54QWlEQTZNQ2VVSHg4ZjkrdjEyaTZYUzd0Y0xxY1pXNTdQNXllWTgvZno4M09jeitmbnNTbVlVeWtuV0VHODVXQnN0OXN0elNMeU1kZnI5UWkwOGlZMTVVWjBMbERHTGhSM281eksyajdPUFVURDBFK25VM3RrN1hiLzE2TkZiaGxvQU11WTF6akxVT08zQktlSURlK1o4czMvSjRnRm80VE01alBtdVJnMjhmb1VLS1ZTd28xNlRnQTVucHl3Y1dMSGdZbC9QejgvNzMvNjA1L2FiNy85MW02M1c3dGNMaWUwc1pqNG1hbzVnVHlmejg4RTBmMStqOEVjWXp3VFBFRzJjcWp5ZkhORjBNOGZ1cUVpYU9WblJ6WlpRTmg1ZndReUhnL0hER2ZKbzg5UTF6Yi9xdXU1WEM2NzczSTJYS2ZUcWQvdjkrZDN3dXFXdmEvWVRkVWRFVjNmaEl2L1ZpeXBzNllFM3gzcjQzSzViSlFTNjZ6YXhWR0ZzdmQrLy9qNGFGKy9mbTNmdjM5dnQ5dXRmZjM2dGYzKysrL3RkcnVkdm4zN1p1TkxCYWFDTWdVekMrclpSaUZvd3hVdUpJOFlNcWNDcDlPcHE1dmFnYVlVNmxHSkExWFFxZWpjaHc2Q2owR3c1bllCckd3MDFBMk8yMDZuMDRCR291Tk55VGZwL0Z3RWxoVWV5Nm5YcklLdzdRUVdkZHh1TjJsZEw1Zkw4MzlnU1BGOGFodS9KdkJPNDhDUFN1cU1mOFZwOS9QNTNMNTgrZEx1OTNzN244L3RmcjgvMzkvdjkvYjUrVGtoUEozUDU2bVE0MzYvaisvZnYrL2lTZ2J6ZXIwK0FaeC81Kzg4YnY2T01kYTZTNXo2a2QyMWZZQzlkeHY3Y0lKSjJkOUFPUzMwZlBNenlIaVRNOEI0REY2WFVsWUhwNEtRVzNXKzF0NzdNTkIxdkdIeFdxN1hhN3ZmNzgreTUvTjVBK0gxZXQyOXh1UDVkYll0eWFSdTRBa3NiUHE2OTM2ZmpSelhSeEJiUHIvYitiMTgrZktsalRIYUJCQmZuOC9uMC8xK0gxKytmQm5uOHptMHNCOGZINXU0Y3I1R3VCaE1WazBFRW45UnNjdGdWaE0raXhsSnRNQTIzUjhCNnl5c0FzdEJPZ0ZYSUtLQ01JZ1RvTXFORXUyZllNSDd6dGM3MzJkUUtrQ2oxeXRBWnRZMEt4OHBJcjhHR0orQVQzVisySGlyaGwrK2ZCbVh5Mld6NzN3K2IxN1A4cCtmbjgvdFV3R1ZsZVZrVHlVYjY4RGtmYXlXWTR6eE5SaWhVNEVwTEpQWlZySyt1N0o0L21nZktxZUxXOVgyUkVXbEl0TDFkaXluYkREYjMralhnWWpRcW4wcnJ4V2MrTmtJTFA3Rjd4SWJNdng3dlY1M3g0MHhubGJXSkYxMlpTYWcvTjBwVzZ0K1p6bU9NekhqYWpLd0Rmb25kNzh6WVRkZnExOHVwOTd6cjJxOHYzSWlvQnByUnRCbDBFWjlvZzVXQlJHT2RPSGpJalhGN1VvdEZiZ09Xblh6SUp5ell2akc1SVlnc21NT3hIa3o4T3NNU3JWTldlcTVUOERhT2NiRXYxT2Q1cmJzOWFPN1l2TWV0NjNFa0YrK2ZNRXhxK01SbDQvTDViTFpOLytleitmblo2S2F6dU1xWFNRVk81c3BKWGZsSEFJemVzL3hKc2Vja1JKaURNb2c5ZDZWZlJycVhNcjZLcFZWMjdqUndKYWNHb3ZPQU0xek1kUU1ud0sxQXViSzYza2RDQ2h2STFDN2cwejluZi9EK1h6ZTJWajhIN0d4NFA5ZHVRbHNZQ3JxeU44WHFHM0htLzEwT2ozancvbitjcmxzdHVNK2pQbW14VDJkVHVQejgzUHp0MnBuMVhzRUhYL2JuUGFWcVZtaDB4d090MG82WExMQUhlUFVVMjAzd0hmY3JzcEN3bVYzVHJ5QjVzME1zZWVnOTd4L0J3ekNqQmxiQitwUkFQbGEwQlZRdVQ2VjZRSGRCbGozZDBLRzE0N2IrRHF4UWVVeW1ETzQzVzRkUWFyK1RJandtQWQwejgvaDY1dmYwL3lMdjNQYjVYTHBydS95ZERvOXM3RVQwSStQajZkS0s5VlVFSWVLV1FXUEFPcko4TEtkNHZFK3Q5MVkzZTdVRmxXYXRnMlZ3Sm5iK0hQbXR2bS9zZks1OS9PYVdGM3gvZVAxVVBIdkE1RERZRHBZWGZiMGRydjFWMkRrQmt4dHcvdEVXVlZsWFdkQzlwRllzNS9qZmg5ZFMvMTZ2VzdzNmxURytUZnFzeFNKSHhrWFhxL1hkcjFldTRMc2ZENlAzdnNUM043N0RrTCt6UG01alNkS0w0elIzQXhRZDZySGtMa1lsU293c3JxN3puenU2d1N3ZHNNSk9YbUE1ZkJjanh0Z01HQllIbHI1em9raHRzTUNUZ1hMUU9XNFhDNmRFeUVNcHJMOG1BUXpYUmdkdWl4Mnlaem9yeGtZc0RuM2hCMVZlTUxHc1hzVnRnbDJwVzhTM3N2azB2dzdSNGhOYUh2djRjQUNsNUhGendJSDBLYzZ6dTRYakRQUi9qcEFWeFd6TzFYazJERGIzdlRjeGVHVTFpV1pIa21JRFd6aVdLdmlyQ0o0RHJhdnM2SUovR0c2Y1RxV2RYRHkrZkFyUURWVmtMcWtWakFvWklJVGRtbUlxWHdxYTk1TjMrTUdZb1pRZFJWTk81M1kxeFJraE8xNnZZN2V1NTA3Q2E5bEpuYkdweE9lbVFoU3cvQVFzbW1wNXpVOUJpVThHNnd2WDc2TTYvVTZQajQrZG8wQno0Q3BnaWtuVFVlRHF3bEtCbWczdTRPVmpyWjFBK3JBY2dhZWpXcTZlSkN2Q1lGRE9OU3dPZ0hYNEVRUnc4bHhiekRPZEVLNmdaM0hrMWIrOGcybzFKRnRLWHl2L2ZFZFRYdVdqV1hkQVppQnA2QURlRHJDRmlpbTdCNlpGbmVlSTdHdm0vUE1rVURYNjdXN3hJOGIwRDcvdjhkQTlxZk41b2FDZjc0V1pqSDBtZjFjbWZZMVkwSlVGbVZyVFd1OHV6a05jTHRFajd1NUZYQlRrZkM2R09BNXE4WU14TzhLVnZGNnNBVkdkY3JVYnNLT0RjUUtrTE1PTWRtbHh1bTY0MllyUG0yNkFsaFpXMVlCMVIrcnJHc3dFOFRhWUFXZVVNeGRmK1dqd1N2WjJFZjN5dE95Zm41K1BwVlBBYXFPbjQzTXROQnF2bWpqeGJqTTRsWmpaWTRncU5NSTVrdGFXL3NZS053Uys5bEZRekdpaG1NQ0tQYTcrWjBWNkViMEdSbW9idHBYOEpsald1NUZNTE41amE2aEc5a3dRZ1pxZjUrMU5INVV4emtGUmVDZFdoSjhYZGxHVWt4TzdIUmxZUm00bVZPNDNXN3RlcjEyVFBKRXcvcm1FTjNMNVNLSElXWmc5bXorcFVvS09ZcTViSlRKZFgyZ21lMVVjeE1aUUZhRVFJbEhjdDMyTStZMUJ6R2tHdXpmaXlBTjl6K3VncGxaMXN5bUNyRENZWWtHeERUcEk5UnpCeTBySHllRFVDMW5XYWVVYUQ5bjR4a055WU1CRFp0elozQisrZkpsWTIxWEZET2NBUkpsYWJPeWlTM3VDcExJOWpyWmpDRGthVnZjQ0Nqd29nbktTaFdkelhaV2xaTXZWVGdEOExwcWxDTHJxZ2JjQitxWXdyZ0tZcFQwY2NDcWJLeUNWYWxrRWFibi9GeW5vZ0NyUEtmcWY1MXhKN3NHQjJaWGNabXhvU096dGp4MzAwRFppN2EwLzJBSVIwVWxCYWc5U3VEdzZLY0F6bGFCN3ZIWnZXcGpLOTBkeXJxNmJLeURVWlFiUjBCMDViaUxRa0hJY1NVbWdJSytTd3VxZ0hDbm9pbzJSUVUxeWorQm5CeTlwcGhWS0xHeUM3WnpGSzFweFdLK0U4SWhWQ1dMTi91THRuVVU0YXlvWUxvYUFOejhGZHRhU3ZZNHBWMEJFVzJsczYxY3pxbGxCS3BUeUtnTUFocloxY2RjMVJST3RQbXZXTmtkY0taN1pLeGFXamlQTEpNcHA3T1pLeEErcnFHL29KTGp4ZjBwbkpscUxvRFpvM2d5VTBtS0d5czJ0YUtlY2ovZDFDK3JKU3BsQnFsVHlBcWdSK0Q4S2pLbG1STDJndFVjQWRDdHNMK2lqQ05UMW9xcXFrSDJPSEViRzVzREZuVWc1QWEreUxvdTJWVTFwdGoxUzJaUXF2MU9SWk45SVd6UmZnYVJCeEtvQkU4VVd5cWxKRnRySWMwQXhOalNqZWQ5OUNUWS9YRGZTekN6NU0wSVpvVkVzV25QRk5Uc2w4b29WQzFUemJHZ3FGWk5EU2dWd0tLKzFzR0RNS3F4WkNXR1ZNRHlzaUVyMWpWU1FKVVl3ajVpSE9sVGhkSHQ0NFNRZzlDTitubDhEOTBOTUlnQWRncjQ2SnFSaVI5STh2UmRGdmJyMTdtL3l4VU1Lak5MTWlWVUFEd3UyQ1dHaGhpK0Y1NVRXTTlNOWNvZ3ptczFkbk00dU9GL0xBRVlXZGNxbk03eUZteXEzSWZ3bU9ST2Q3WTFpRld0T2pvWThUbzQxbVRWNUl5c2dGRnVSenNiV0ZHYk5JSUpDRHYxZE9vNGxaRzdqV0J3UkZ0VlRLdVd5ZUNCeUpLT2FuOG9aM2VwOVhkZE5sMHREdWF5d0x6OWNYUFllREFBMFNwa0JPOXNiVmNUT1ZXbGRQdjR1eXpFa3p4SHRqdm9uSG9Ta0ZFV05vbzFkOERoY1FwdXRkMnBwTm9uNEJ6b0FpSjFoQkZRZzBkVnRkYkdISERRV3VzaG1ORVF1a0xNMlFPMUcyWThiZ1RYcUZoY0JKajdFalBnY1B0czhVUzhxUHBQQi9kWHpuT2g1WjQzOHR6SDVlYzZRZ3JPS3JSUmZLbXlzQm1VREIrUGhZYWJNbFZQRVIrR0NTSVRUenI3YW0ydEFySDNiZ2NFelBKbStjcjVqSjRObkhORkRWckZYY0k1TGU5azVKbncrYmVkYlYrRmZSelpJSGFPT2FPc0xZMC83VUdzNThEanJHd0tNSU1GSUd6T0VXMS9qR3NkQXRDTjZoRUFJNGhCZTlZWGVSUk9CU1ZQQVZQQXF2SU01Yng1aFZLV0FNUDZ6QlJ5M2llc2NyaWRWZEZCaW5CeFhEbkcyR1JZMlhiQ3ZwMWxodkd0TzlCeHU1aDkwOFhRdTQybG5TQXJNRmRpek1pbTh1d1JDeFBHbm5PUzhsd3BuYk9pRHFUQWpzclJOL1Bjb0FTY0NiYUFDcVZNNDB5bG5qalRCcytid1dsQUcyMy9VS2Jka2l3S1dJUVBHeldhY3pwb1NseFBFajgyMmNOV2twUzdGeXpzRHJxcGZncEczamFodzJ2Z2JhU1FBeHVMV1pZdDdKenlOZThKb1pwTkFjdkRGT2R3MHdxWVQ5QUsxclp6L0RkYlNsTFBwMHJ5SXhnUUpsSzlBWmxFcTdJT1hwb2hnOVBJaHJDbmc4OEpzT3hpVjRaV0FZZmc0c2lreC84a3kyWjlsODYydXF3cmZzY0lIOCt1Z1RtVkd5aWRkZVZZVWdFTW40R1p6ZzE0RXdJc2g5c3gyY0tLaVdYUmV1T0U1Z3pHT1FnZGxSS1ZWZGxldnFiMjc5WHEwUW5zdHMyVkRhQk8wY29lenNydVd0SEFwdTZzS0c0SUJoTjBhR1Uya0xyTUtHUlROM0htYkNEd0tWMTR6dmtNRURHNFFmWlZzcFZsYU5VMm1oYzVURVozTjFoL3pxVGhldUxwVzA1WldUR1ZqYjNkYm5ObXhLWkJuTjhKcWlkYVZMS0FPeUFSTkxTK01CNTRaMitWYXFvTUxLcm9WQmxuZ2VmblRQQWNvSE5XQ1N2bGZBOENJMEhFbUJOQm5CbFh5TXJ6VTdBN1dWbTk0UFBxUTJnbXFLeCtXREdzbnZpbG1jU09CSnFPSzFuWXlBSXp1QXllc3EzVWRTSzNLZldjWUtEOTVIbWZZT1UzcXNlcjJDdFlFVUErRnBmcWROdmdQQlpVQmhEckdPTlJWbFFzaDhyTGNhVUN5a0hHME9PVXdUbExCcnNoNXNvRU1HZXppMUU0SFJWdDFpY3A1d1pFRlhkaWJDa0c4WTh2WDc1c2JPNEUwaW9tOXoraGpTaU9meTNEaHBYSXRwVmhFK1VHUWR2b1dqdENobXJHSGY0WUF6S2dCTm5HdHVKeEZDZUdkaFVBZlFMTEs4a0JZQVA2Z3ZGSlphak1HM1hreWN5OEt1QzBxNEV5eW13dHdkeGR2Mk0wbUlCdEswTEtuZjY0MGowMEF1cTRnVWtkV0dsaHMyMnFKYzZkWkNzTDE5b3hubFRKRzRTWVZSSUdwRDhUUEZCdU02T0VsYlMxcGxkaWQ0bUdBeU42Wkl1cGJDNWJYSk45ZmRwYlRoU3hMVWFJOElHMVhJWUJ4VzNUanM2S1Fvc0tjeGZ4Y1FtZG53UkdNMTBHbkZjQ3kyWFl1bkxNeUFrZGdrNG1lUGljenNMeWd0aGNCdXQ2Z29PcVM3WVZGWEFETGphb3NCNnM2b2ZjWldBWlNJUllxU1VraXpZd3R0WWFiM3ZVT1E5dzJIUnhJSWc4V3dSVmVFNjh4aTRVdEwzelJwaHhwbHp3dVpyY3FZQ3ExSTNqUEk1ZG5KSXlnRW9oTWJQcVZKU3pyd3p4QkpUczV6TitSZVVTZ3hpa1BRVkYzSlZCZU5ReGJIRU5yRU1OdkVkRlpWVjlsSDkrT1JHRXNOWlFweVROYzRDM0FHN1hGNG5nenErRHJPMnpidWFhT1hnZGFGY2RrRW90b1NGQlZYMnFKMEM4T1daZUc0S0dscGdoQTBYZlRPUENxVjJxcXdRMjZRV2ZGMlBNTGhJMncxbFZBYTJhUHNZZDB6YTI1TVFSd2djWk42dVFEQ2krWnhpRDRYRU0ya1p4T1Q0MUZuWm5hUmxjcFpvdXpsUnFxZGJRVldvcFFvU0I1OFJWNTBsQk5ySGkvQXdYUzVMcndEVmxwWTNGYzNCeWlZR2M1MlRyaXN0NmtPWGR3SW5BUXRKcHA1UWNoeWFxdVlPVjdTdStmeFZNYVYzZGMwUkUyUzZtVVkwZ0x0MnBNY1lxcktJUTl3MmwxZ3BRVU10UVljbW1idDVEVE54ZGhuVUNqUXF0Yks5U1VTenZyQzBtbWhoRTFlMkZTMitveHlweS9aQVN1dGttdGp4M3ZjQkMyNFBYNjVuYnFrQkNSaGZqUzlrSVlQbmVlOGNNYWdWT2hJLzNUMWZBbWR0QVdac0Nzd1RKQ2tRVk5hMHFXS1NLUE9wSEFVaEQ5RHJiVmN5b1lrd3FodmgxN3ZZQWF5WExReUtHWWR4bFVERnA0OTRyQlhSallnTzE3RERZZXROSVVqL2V6cDZTMGxubHBFd3NXbUpNa093c0tYZVpLRUFqSUhuMEVRSklTYVJCY082VU1JTno3cC9iRWpqbnc0ZnQreG1EdmtzeFg0RzJySXJpczdxYWVLd0FGTVAyT2k3bjRjcml1Wnd0cFNVd3BmTHhTbk9SU3JJcXVzYzVaRmFYeXNxUldqaVoyRHlBV0VJTDM1dFZTb1FFbEZBQ2pPZUdHU0U3QUhFUWdkby9MU3ZDT2dHQnZreHNtRGJ2bFMzRnA1dmhhQjJUQUdxUktyS0tNcmhMVnBhR3pFVmpaME9ReERoYUNUQStReVJSMWQxNWFRenJKbnRMM1JpYnNpcGpHNmpsZ0w0eXFiUzBzTllnMWU4NHZoYkJWckVsSzY0Q1VjV1lYRGZLeGhwSXV4aVZKWlV4c2JNeS91UkJLVE5SUTRrUTNMZFJZTFMwckpqUlBsVFBxWTZnZEpzRURjK2FRWEFuK0hnc05VQ2JSdUYwT2owenduQTdiV0RrYmhPNUVuczAwcWVRaFMxbGFCTWw1TS9jQWF4c0xGOHJLeXFsK1RmN0VMTEVHdS9peGlpbWRDdm8wVGpmcGpLd2FnZ2VuNGVoNXY3TG9rTEtiTHV5dkhoY1pHOGRoR3JFRHg3SGc5M1pwcEpGN3FCcU8zaVZ2ZVhFRFFOSW56ZW9lOFlxNmVQYVpCWjJKdmlNM1cyVUFHb3Rla1JDQUdxNEVrRjFYM0RPblIxMXlSc0JMMXRSYTBQVmNaaU5GWFoyYzM0RnNrdm9tSW5RUTZsenBKb1piSnhrNDNOd0tKRkJxdUpTc3JCeUh5ZHhLT25UeFFBU0JtUzNqK0pNbnNIU2xhM0VjNks5VldvSlZuOXpmandPTTdocVlBQXFKUXdFMmEzbkE0OEoyUUdlZ1JrcFpOaXZTWSt5czNFa0tkNG9KSXdzdklIbDNjV2dMdDVrNE5INk9tdExXZHB1ck9rd0VNdXBZYzdlTXREUmhPY0kydWk1SmhWSXpYekx5dG8vR0FQdVpveW84d2tvZHVWZ0pnbEN0N09oR2JnSUQ0TXE0c2krNjN6VVMxRnVGRlhGbHF5YWoyZW1IbExNY0JxWXUwRk11UjI4QmJCN2xPeFJNU2lDUVhGaENLdXdraForcFlEaUdTZ2JzS0tWOE1pU1JzdUhTSVdNOXJrbFJpSWxaWnVxWGpzUUs4b29ZSk1ncTNKS1dWa2hIYmhzVnhGVXp0aE9XUGtZaWpjYng1NElLc1NkVCt1THIzY3JHS3lvWWdGaUdSOWlCazRrZmxvVVgrSklsUVJRcWFibXBnbmhxdHBRcGI2UlZRMVdINURuclM0aEVvR1pxYWVyUTJkaEZiejhYZVB4U2htRGJvNzBlSVNqb29yTzJ2SzhTSlhJNFNVbUVVNHpXS0R6VUR0V1RZdzd4WGxiU1RFajRGUmc3ektuS29HUkFMdjBHczlUZ2MxQnBDeXdHWlJRQXRxVnoyeHJCY0FNekVwZlp3RlNhMkc1VzBRQkZqU01hcFdBRUZhM0hjR043Q3hEekVDeUlrSjk3cXdycVdOVFdWbzg3NlBQc2pQa2oyd3Zncm9NNWxMWktNRVRLVnFsL0N2bldWRmlGYS9TekpVUXdrb1pzcjY3WTZ2bFNSVjMvMnRtTlRPWTN2bmF4WXdNdW9QS3FkelIxdzdJcUh5bWxQeGFBVGhmVTdLbzJaWFlqNEFZSkhMK2tOZEt3UlFZRVNUUmE1ZnNVWi9yVkMxVE1UeVdWeVlvcU50dXphSHNNeXYydHZvYXJ4ZGZxd1lnVTFheEZvL2NucWwxRkdzcUsrdUFST1Y4Qlg0R1U4V2NaVEFUaTJxN1FjeWkwTzBWK0doV0JNTlJVa244SDFTc1dWRTVCeTNHaTBFQ3FVZUpvQmZBdERhNGFta2RYRzM3QUdQNUdnZWI4NHA3VWF6cG9LUnpkRnplUThIa29IR3hwckt5L0hwbTV0MTJwNDdKNnhUWURFejd1SU5FWFN1eFlYdkZza1lBYyt5U3hIOXNmNWZ0S3pVNklid1ZCY1VHZzVlNUZNQ0VYU0VyWlIwd0dheVYxOXdvTTlndVBqVHFKZFZUcVI0dUU0bkpuTGxkV1ZrRUNDWkxkMlZMRit4dGFtZXg3SXBpcmlTRFVwdnJwbjlscndHTUNIeXBwTUgrcHM2TElMc3VGR1VqMVhFT1hpcWJxU0hQVUtuQ2xwV1Y2OGtxdFVSVk5EWTRUTmFvY3lrb1llVFU1bmdHRVFhL1MxRG5uRTRBZVhNY0tqSFBBbUZWakNCRU5hZXlMVk5IZnIzcHg4eFVzdEo5NGhJcGZINEhLRS9lRGFBcks2bFN5VlZGYmR0MWd4VElWazNwcHBWbEZYaTRwRWhWQlRPYnF1b2hVODVNTFhuMWlhaHZVa0hKalNDTWMwMXRMRnZlVlZCeDBEb2RNNmpmdEN1N0RPdEl6WXhyYzBxcDFKR1AyYXlZRnoyR2I2SHZNck84Y25HdFY2R2ptM3VJbVNmRDJHcFdLNnVvd2JaR014RktRQ28xcE9NdGNNWEZwUnN0K2hYR29Bb21GM3NTVEJHZ1RnbGJCS1d3c1EzdFpxYVlTcDBaMUNpbVJEV0ZjQ0pVUFlKMDBCSTVGa0tZTm9pZnVReG1OODhTV1ZYV0xNYVVxcXFnQzBCbVFKUjZzazN1OU5DZjZqWUxYeEFmcXNZRWdWTEFoUlkyQXRndGZsWk5GbUZ5aHhkckxrQWRXbGs0RDg4TTJpeEh5ZXBJZGhNSHJHL2lSMVpHdHEwTUdwYkRiUlBZT1hlU1kxTTZOeTRac3R2R1NrdEsrWGJGUEFUajJEMzcxc2FQRXNBTVhoWHJzWjBrbS9YU3RraGhNeUJmc2E2dVhGWmUyVkNlK1lNcjErR0tnd3JReU5ZcTFWUnJCK0VpekFvdzZOc2ROS2N5VkVrWWVNNzN5czZxNGtBSHA2QmlGa2xUa0lyVkM1b1lWN3V6d09HQ3o0VUowU3RxMmxXTUp5NHd0YitSZXRMNnRaRmljbkptQnc1VWpDdlhYTVpWSlgyTVFrYmYrWE41RVdkNzhWejgvSkVzTVpUQmlLTnpzbTFpbkxSVVE3NEg0TmlkYXFJNjhqNXNBRmd4Y1J2ZUM3aWVMSlhmUVl4alpaMkNzaVdGZXdaWEptQklsWjF0ZHRyWDRoU3VhdGVLc28vUlpPdE9LVzJubXExb1R6ZUs2ZFJXQVd1Mk5SVmI0aHEwU1htMUd2dHVnSHJicjVJWHFtU2t0ZzVDdURFMk1TbFB3c1k1a05FMldwM0FxaVpiV1ZMQXhpQkYrMmlCWmJ1Tmo2TUI2cnNNTEM3Rnlhc2FZRHlvN0trb1B5RXR3M3BFTVhmUHZ4QUppMmpBUVFnanJ6MHJMSVpTV1psSW9OaHdkNXhLNEFSOW1ZTmpXQWFMcm51SW1KZUJWTjl6Qk9ST2JWdmJyK21UVGZGU0VKTFNSbkhvN2hFSm9JaThNRnFqeG12Z21GNVVSWno0ekxGZ1paOEN0dTJYN2dnVmNjS205Z1Z4SXNPSHF4WGdOTUtuRldaWW5mMWRCbk9oYXlYcTE3UXdGbFdXMDllTkt5VkpGbVhxYU9OR0E1YUNlZ01iSjNVVWtHWTFpYzNuS1dnanE4cWZWWUdRRzFnUnQ2cnM2MmE2SGlxcVVPcWRlc0s1Tm1YNG5Hb2ZKb2lFMWQwZEY5bFZWa3ZUMS9rRUVhYUNvWU93RnBjVmNvTE0rNzY2OVB4QzlyV3FrdEgwc1dVWWxkMFZDcHVCWi9zdFZSY0dneTlXWDIrVTFRdGhpOVN6QXFTeHpac3krT2lGekJZbnlTR1Y2R2t1NDRyRDhCQ09aQlYzQnZENStBS1JITndNRXNCNkV6SG5KcGtUQWVpVWxFR2tjRUNlQjZHRFpUcDVZRUpUbHZkcmtueFlqVGxsTWtmTnRYd0RqTTd1VmpLNUpYVVVuNDNycnFwSzJqeXRheEhXME01RzhEQzhydEhNWXM3S1NnZHVWUU1HVFlGcUZ2VlM2cmtEM3NESjQ2YWZkWUZ3b3ExMUFPS0NCTGh2d29VZ2M4SUdBTnljUjZrblpyZEpQZHN1eG55amZkM0ZvdlRsUk1kRWR0T2w1Q01WNUVIc1hRQmlzN1RPd3ZJRFphR2oyVm5wYmg3Y3BLNjNWd1lFTUx3cWJqenlsNjk5c2F3RkZrRjF5cWpVVTMxSGZDNnNXMVpGVkZ1WFZYVmd6OWtlRWF3MHlzMWxXZm0rYXpRQVFTV0EraEtZVmZzWmpQbmNBY1VCOW9JYXl5L1VaWFJOY2tER2ppNzdHc1didkJvNnRQcldQcU95VmtCVXErSU5lcXB6TmRZcy91MGlmaDVxbXBxSVcrMzNKVlNVY3dZNzBLTDRVOWxZZFU2bGp0U2xzN2xtZmk5ZzNZemVRZlZrYUdGYVYzT0RDbmFEMk44d3NFREZrbEUzUnpNM1pnaGRZa1dIc3N6cTcwRkllY25La1ZrdDhlek16UnE5YmtHdUtvalJMQlZTb2QzWTF5UHFLZ1lXN0pSUVRQVnl5NXhJWUxqT2d4Z1Q1MlJLSlVZMWRPcklpUmQ0ZnV0UXgvQTVBY1NtRWp6MHZGV3JrTHp2YldBdTlIT1diR2d4RmsxVk5UcG5CS2s2VGd3aXNJL0hjeFlYUDF1QVdPNzJVTEZsQlRxK2FTdTJWVFVzNmhyeE0yQ0YraEVvcjFWSUE5Wm1GVWFhYjFsU1NnWnNWczRzeHpIbFZMb0pIcjlINERoT05Ua0kxWEMwL3dpWTJOb1dBRzVSbG5IRm5xNm9MY2NwUWRkTXVKL08xN0pWQTVPSExpMEJxQ3p0cTdZMSsrdWNDZDk4cUxJOE1JSEJWL2NLanhRVG1lM2hGQlMzTXlDcW5Ec3V5bTJvODBIanZGRlR0clVSbU5hR0pzbVZhaEltalRzVVhLdFFaVEFWczdNdnY4LytmelVyWkFYY0xKNk00a29lNlhQMGI2U21XV05EenlVcFE4YmwrTHRXeDR0dXFaMzZjUllWM3l1VnhQTnd2SWlxaVFDU211N3NyZ1R6UjZua3locENhclh3RnkxdkdkNWlQMmNZMDZsRnI1TmpoaGcxWTYrTkIyOGZ0Yks4M3M4cmY3a0xKYkt3REZQYkxnMjVhMEFkWkpFaXFyNXBoaXhLTURsUlV0Y3NzcTFocmlMcUdvSCt6ZU5nVm05T2VtanNFVFY4SmRGME5IbmtJRnhXWTFPQjRZcnA3cnRXSjdOZ0FBQVBYa2xFUVZRM29OczVucGx5VmY4dTJGb0x1MUpySHZlYVpXUWpxQWtzaHRGYTJnenNTRzNacGtidmczSGFmRjlzbFBQbGxkakZsSzgwR3lzbThNcjRNUGhuZU5XRU5QR2pBSXBtaWxUUEFUZFRSVFhsQ0JZSFlBUXVQd0EzNnhJcFd0R040cTNZMk1oaUdzVXB1U1NubEVKUkQ4UG9yQzdDRllWdytGNTFxVGhnYWJ4c1R4V3pDR1kwWlNzYjNsZnFBeTBPUE5qTnk4eGlRUUtzSFlGUTJIQlpWdlZiQnVxM20xb1dLYWpxYW9uc002dVpVcjZDalhXTlowbDVFM2gzalVSbWE2a1AzTUpJaXkxTG0ra2FoUXE0MU4yaVpqYTVzanRsTFlOWkhackg2cVVHbTR2TWJEcDZSdzJDRm12dXlGa3JCY0N5TXRGcUJhRUNtc0hvSzlCWjJMQS9sSmNScVNhRHFuYVdiclpkR2F6M0RMZ0l2QmxuNHdvR3p0YnlKR3FzbHd4a2hoSHJUalRZRlhDdE9vS1M4dUxkb2ZWZEFiT3lsR1U2bmxZcFhXWnRzNG5YQnE2V3hKaXRNTm9rSFVKbmJuSnBsUW0rYUdwWTJhNUdNVjJRRDFoUnViQlBGS2R1bWY1T0hrTEh6MEY5bHVFNWtqQmpSYTBuRkU1Q1VHcUh3MzJNbWpaNnhrZ0lOVm5TbloxVlpTdEsycUtsUmFMbFFnSzd1VHE3SkZYSndNKzNTT0VLeWhaTkkrdEowSTVxTVl5OWsycUpEN2RWV2RxS1hhMENLTlIwQ2NqZytCMklZdTJmY0JaSlprTUZnTTExcjBYOTJ3aWxnaEZHZ3pWbmV4bHFCN3hMOW1TMjlTaVlVVlkyblhPWmpOQlJzeURzUVBSV1c1aHJaNFhjZEM0SFZXUmJqZ0pyNHNGb2ZLNVN6alE3cmhJMVVlYmRQZEViajZzcUl2VFpRWjV2YTA4ckFCc0FXMFV4ZVd5dEFrN0EyS0o5WnB4ekNpb0IyNFhGdFlBZVhZeHI2YW5TcWhMZ3BwRXFXYkd3THVuVGdyVitJaldsTDI5bGphQWw0RVFNR3NFcnA0YXBlWmlxdXdSWExYQXFPQ2VydTMybW15ZGM2b1dUU1dwRkFHZHplVEI4UlRIVk1FdGxNOTBDYmJRQ1loUGpxM2VnWXIxRkdkWUlRaml1REdaNXpaL0F6b2JLR095THh0aTZjNFJ3dHYyYW55V2xMSUNubExoeEpSWHQ2QTVlYkRCV0ZOT05ieFdaMmQwMm1udTRTOVlFQ3BlcHBWMXpTV1JCV3hIWXpWSXYxQ1hTb3V3cXFYM2pCQkJEWmRZUWJwVFFXNFpRbFM4cjVrSDRzdVNSbWcyKyszSk4xMHgxUGFBbUVrbXRZbEVkZUdwSkVNNmtPdUNxQ1IyMm9TdWpqNUlWMkhkVDB6ajVwckxLVGpYRkFQamRRbHlxN3hJQnhBUVA1eU1jekc0VnhBS3cwbjZpbFoyUUJjZTJwTHVsa3V4eHFub0l6RmZncXlxamlsOVMxVk53QnJGbWV5ZW9wczh5T2paVXliWmRmUzhDdWFUSUp1bXpzNXRPRGFOdExwRkRRL1BjSkd3ZUxobWVMMW5CMEtxaVVEU2NzaVVWRDg5RGkzSHRyS3RTVUx3M1JMaXlnWkQrN3NGOEpUT2JnWXNyR3ZETlVGUkdsMWl5MExsMVlrVWMyYUpZTW9nOTIwSThxVzZZRENnMU1xazBKSEpGS1hrYmdiUnJlSStxcFlOT1pIclZjRFViYTdwanNwaFNKTnRLNnVwZ1JOQVZvT1MwbXVnQmVONGJJWmdIaHVQWi9zMUVOYVg2S3NWcitZTnJoMU5iN2lwUjBQRTV6Yk5SZWdDYnJIUlV3NllmMDdkTEJKbDFmOEtCOWFzMlYxbk5xQXNsNjJMQkJoZWh3YWxlcmtIbUIxSkZJRVpLU0V1c2RsNUpRajFuSmxIWFNDRjM0MmdKOUNZR3JYZWxrbkpJWHFWUDhzRCtxdHBsQ1IzWEgycWZLcTB5Z01wK0tuVmtLeE5sWjhtMllrSWxWTWlDblhVd2w3cXpuQktTdlF6M20zUHQ2b1FiWE81YjVGaXhDaC9mSHhVUVcvQUVjSzZ6Q05xS1FuTDlzeXdxbUt1d3ZxU1l6VC9hUFZOTnBWeWh2UlcyMWFxY2lDc2pkV3ZCd0lMVXZoNVZ5Q3piV29DMXBKako2ODBDV3NsK3VkS0I2VDVSd0cxbWxvaG5scGJnNDdpejVVOWhhMEZHdG1STEZZQnRPOTl5OTdBcDB6K1pEVEFvZzZrU0xac01IZy9JRmtrZ3A2Q3B2VTJVMGNZVlNkbm1randCZE9tWGJ4VFdOV3p1SWJpcE1pb1Z4RWNrWkVvYWhTT2l5Mk0zSzBqY0MxTGhWRHdhcUcwWnZrY1dxQ25yRzRHSXh5a3JxbGJXZHc2TFF5QmFaUjhIbUxSSWhRV3NIc3dENDJaWFZMTmtmOWwrRmxXMEhWUTJsd0ZzQy9aMUZkemxRUjBLYVBmbytGZGZ1Ky9kd1ZSSUN1MUNHUjdBRUlpQWhjK0FaVUYwa09CYVB4bVVxZzRpNjR2UW5VNG5GRFlKOU56KzFmVlh2ZUg5cW1yK2tQSUx4OG9LY1JWL0JGYnhiRTBKTVQwa1NENHc2TC9sTlk4b2NzcWFnVmRVM0EzTWp4aHhjR3VxenNQSDRpcnBhb3cxcTZPeXJWanZwOU5wYzU5RTkxTGxkYm9ZVnpKV2RpbVdmQVcyU05FS2NEYVgyRm1CTExBL3VLeGxtaGg2MTNJczFVUlFBcGJLZnR0d3hMMDJxNk9ueDVwUXhTYlBvakFnK3Y1aEFuTjZMSFZSRFhJc3ZLdFJqaVMwcUpVeVpUQVhWYkFLODJFbEZKV2FRZFZvcVVDMVVudDdCVmFUUXVkTTZTdXFleGpRSk40KzBpY2F4di91dGJLdjgzRVRiVDhIOGdqY09LeE9KbWJVYTZPT1ZYaHQzZEZZNnJIdjlYb056RkxjZUVBMW84K3BLbTBMQUhQSFoycllLakZxMGhmWkZpeHNxSEpnRDNlRDVuK1Uwa2IxbUZqWGtuMmx2TVNTT3NORS9DZElBS0YwU3l0cTZ1ck9IVU41Z3dnNEdab3NnYm1nZ001dWNyYTJxclMySWcxY2JpQkJjeFl6Z3pVRE5MQ3ZMOEdiWlhOcDZPUnkzTG1TK0trODN6UklBSzZBMWlvS2EySTlOYXBJdWlVRmRmQzk3NjZQRlpVdHFVcjZLYldrK3paVTFhL1pySVhFenRyalRPZno3aHdLemlDZVhJYXJhSHRiWklNeisycEdnYXpDbXc0cVdBRnZFZGhvZFlwMFhxMHBWN0cxWVdZV2JPNHFoR3E0MitaOEJZdHJMV3ZsdU5QcFpBZWFGRlMxdnViUGdiZ3hzcWNwbkFhc3pCb3ZLYUZvRFE4Qkd0amZVT2w0TkFHMm5tUVYwNGZlSmd1bXZYMmZzclFFV1pnaEwwSm5WZFlrbjNET1pJZVJOODZScVBXQ21zdkdWcUVNUm53eFFBeHdTOEVNWW8zSXptWTIrQkNjTHA0TUtpdXl1aEltYW1sYlpGY05vTmw3dHArUkhkMThaalFJUkt5WGRGUmhOOTgvaHlLcXdYV05vN08xd2lhWG9ITjEwOFJFWlpXRXE2Z3JuSWZqemVnOGpkUmYxWEVMNGtrWGE1YkJqS3hvS2FsakJqZUhsVnhRNEdheWNwVzRsRE9BS3RuVHhIQXRPZnpPdFp3SEFNN3NxVlhrVjZ5dTZrYXAxbkhrWEtxV0YvNFhIcWplbk5LcUJqcFIzbDFjaDNFamcxK0VzZ2RRaHNkRzBCNEZNOXNXQVZXcHVBeWl3VFBsZVp4dDlWeVpWUzJxWGZSZVdxVEFpbHByOUFwb1dUanh5bWl0N053VjRKVHJpWnlPQTlCMGs3SEZmVUxvdXJtS1lIVm5SUXZxR0w1SE1IZHFGY1IycVdwbWNLNmVUd3gyZGlwV3J2aURpbHIrZktXcTNPV1JXZEhLd0E0ZXU4d2pjaGJlUnpGaWxxampaTjN1ZkNwZmtKMC9zY1ZwbllrNkwwUEk3N2x4ZFdDWjg3V2lXbTdCL0FHcXVRU251akdLc0I4Q0ptaUpxOHExcEtJVld5cU9pVEs2NnIxOEJOOHI3NC9BRTcxZmRDM3lQUzJNeGRPcG5FMXRsVnhEOUptVk9vZ2dOK3I0UGpBWFZGUGEzRWc1alZKR0ZWVUdOb2xIMjBHVnJVQjdCT3lTV3E2V3FZUWRXUjkycGNGTVlNd2NrYlNnQ0tDcUQ2N0RpaVd1MWc4TVFDOUJ5ZmNGcVcxTCtqTDcxNHFOQ3V6bm9TeHQwZGEyZ3RXTjFHOEYwQkswTk4wbnVpbWVsVUY5ZElkQWZqTzQ0VVQzQ2pRTG9VZUxISkZUTzNnbXBSdUlJT3Z3QlFDYnFOZW8zcXRaOWlGNnhWSzEzR1JsbzR6cWltcStDR2RUaVIxdVJZOG9xZ0UwMmhaQmE3OWtaWFBNcXV4UkhLbGEyc2FaV040bVJxWlVqMHZMQ0toa2pLbnFPUUhOdVNaVkpvS3ZBcVMxd3BFcXV2V0RDMUIyeXB3ckNQc1JNRVBWVE9ETUxKTUR2NnFlS1h3aTJKWVY1U3E0cUt5dmdHc0hDTGl1ajJqUjU5VjhnTXFTSjJGSlpSWEVIVlJIajNzRlByY3Q2T3BxbFcxR3BhdFFkdDBHdndmTTZuNjNJbnNHVkZoSkdhQnFncXFJVjZJc1hsbFpneVNQcTRSM2JudDN3aTVjditjTjJ5cVFMVzFUOTVLWVZzV1d0S2s0Y0I5VzUzV1FRZmxRWVI2V2w0SGFKWmp2VkUwRDV5dnErUktnWkNzNXFkQkVQNXNEOTRjQXZRTGxTZ05hU01BdEh4ODhCdU5RNDF6ZEZzWDMwektiY3MwTUxEL2loa3BRemwwd2lUcUtMVGZiS21DbXlZSUNuSzBJYmFpZUM0Q0c5aVN5TFE3Y0lNR1F3YXU2VEtvcTYwQXBsM1dONDBMWnBjYTFDS0tLOVZReXlJRW44dzBGOEY2Q0wyaDhvM2l4R3dDN3M3RVd6Q09xbWNBcFl4WUQ0anNBelZTMHNsMnQ5OHBBN3ZyS29waENWU29uYllwZ0g2bXZTbjI0cFRCVjRzZHRWM0J0TXE1azgyeStJQUR2VUowdUFsa0NWVHhJYVBtK1VOdS9xa1Y0RjFUekhYQ0dyWElBcUl0Qkt5cHFLOTlWdEFPVnM2NE80T2JYN3BITFZDcFlIY1Jtd3ZMUjdUdllBS0JCTjU4TEdWekR1RnoraFFiV2duY1F5Q1pBaytWYnNQU291ZjkzMjYxaVpnbWZDcHdSYkF2cW1TcXJpVTJQd2hqYW9PeVlxdEllZ1ZYVmlUc215dGE2Ykd5U3BZM2d5UnJwSXlBZWFXRER4dHBzWHdLeWFsTURLTlA3WUJYTXFFc2tVc2kydUM4Rk5BUHhBS1RWZlQxbzZWek0wRTBqRisxcldjVXVIdmR5Zzd2Z29GcGxYOEhwdkhwTUNPTVJVUEh6WmtJbnNxbEZLTlgvRUlPNTJFMFN4U3pPd29iMlZtUkxXNUQxWElVMHJiZ00xQXpXZ3lDN2ZlOEc3eFVBSy90YUVCYXQ3bHVxdHlQN0Vtc2FKUU9qNUYrbXJuWmZDdVlDZkJVQVd3U2h5ZDZwTVkvdkFIRzFVcU9ZcGJJL2d5NVQwQ01LbStVTzNnRnVDODVkZ2ZEVmVndVBEZklUcklCTHNMcmNnZGgzQ0ZnRlpqYUtKNEl2M0Y4QU5FcXZ1eFIxdFZLT2dMb0NhMWp4Ym9CQWtqNnY3ai9pY0ZiQTdmNHJmUm5RRExSVmlHMTNpMHZxQlFyWVZxQmJBRFpUMFpwaUhvU3p2UXBvcEtJRlMzc0UxSGZCV2xIWGQwSDdMbkFycXZvdWdNdGxqSEJnWm5oM0Vvei9CS2pMTUw0WjJBcTAraEVKcjlqYVZVQmJ2TnpDSVVpcm9DN0FXbW1GdzRvNUFLM010QjVWeXBaTVNGZ3MwNUp5R1Z3bHdCcXNFR0FBYTJaVTFDalVleFhHc0U0cktyaWlsQnZGek9LS28zQXVBcm9FNlFGUVUzdThZcE5Yd1M1aysxVFp0NVVyd291TjRLaVVFdytrM1pXRHAxUlhITlJxWGIyMVRzMzk5NDV5WlNnM1ZuWkZOUTlDRjNYZVp5cjVEZ0JYS2l3Q01hMk14ZVREWVhnUDFGc2Y5UU5LWmMwazgxUkprM3I2RVEzckNtQlZ5TEw3NUVqWjFwSVZESG9GdGlPQUhvQjBCZFRWeWxxQnNLS0tTK0FlQlhKVkxZK0NYQVN1R3ZPL0F1cTdHdUVqRGZHS2cxb0thMXovZG1taTlJOVNVR05obDBBdGZ1bEhBYXdvWXJuU2ttTlhBVnVHRWhyRVZYdlVGK0E1Q3QyUHFOT2pEZXR5bmE0Q21lVW9sbWVYTE40QXE3QzVTajEwUTd5amdsK3Q2Q054U1JIbUk1WCtDcHdyZVlCM1FmZHFuYTRxMjFLZEJ1YzRHb1pzbjQ5Wk9PaVZpbndIcUs5V3pqdmdld2VFaDJBVTUrdnR4WjlDZDlXcWtoNDlWMThFNW9qNnZWeW4wUlN0QXlHSU81ZWRYUktkNUIwVkdWWHEyeXIzeFlwKzVVdCtDNFFKNFAxTjMzOXBRTWpSZWpqNHZiL0RjcjZyUWMzTy8wcmptdFpwZVlDQmlDSGZDZW1SYk5oYksvcE5VUGMzd2ZLeTVmMkQ3T2xMMy91UGh2ZS9vVTRUMEY4ZitWTk0ydnlvaXYwaksrS0hRZmRIcSswYm5jejRvejczLytZNkxiS3cxby81QjdlT2YxUmwvMGR1OUI5dG4vOWJ2cmYvait2MGg2dHRuMnRwL3IvNDgxOXk0L3p2NTM5MXV2enpmd0RpZno2cGhUMU1QZ0FBQUFCSlJVNUVya0pnZ2c9PSl9LnNlbS1jb2xvci1kYXJrLWlucHV0cyAuY29sb3ItdHlwZXtjb2xvcjojNTU1O2xpbmUtaGVpZ2h0OjIycHh9LnNlbS1jb2xvci1saWdodC1pbnB1dHMgLmNvbG9yLXR5cGV7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyMnB4fS5zZW0tY29sb3ItbGlzdCBsaXttaW4taGVpZ2h0OjUwcHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgaXNJRTEwOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBoc3ZhOiBIc3ZhO1xuXG4gIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcblxuICBwcml2YXRlIG91dHB1dENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgaW5pdGlhbENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgZmFsbGJhY2tDb2xvcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgbGlzdGVuZXJSZXNpemU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lck1vdXNlRG93bjogYW55O1xuXG4gIHByaXZhdGUgZGlyZWN0aXZlSW5zdGFuY2U6IGFueTtcblxuICBwcml2YXRlIHNsaWRlckg6IG51bWJlcjtcbiAgcHJpdmF0ZSBzbGlkZXJEaW1NYXg6IFNsaWRlckRpbWVuc2lvbjtcbiAgcHJpdmF0ZSBkaXJlY3RpdmVFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgZGlhbG9nQXJyb3dTaXplOiBudW1iZXIgPSAxMDtcbiAgcHJpdmF0ZSBkaWFsb2dBcnJvd09mZnNldDogbnVtYmVyID0gMTU7XG5cbiAgcHJpdmF0ZSB1c2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBzaG93OiBib29sZWFuO1xuICBwdWJsaWMgaGlkZGVuOiBib29sZWFuO1xuXG4gIHB1YmxpYyB0b3A6IG51bWJlcjtcbiAgcHVibGljIGxlZnQ6IG51bWJlcjtcbiAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgcHVibGljIGZvcm1hdDogbnVtYmVyO1xuICBwdWJsaWMgc2xpZGVyOiBTbGlkZXJQb3NpdGlvbjtcblxuICBwdWJsaWMgaGV4VGV4dDogc3RyaW5nO1xuICBwdWJsaWMgaHNsYVRleHQ6IEhzbGE7XG4gIHB1YmxpYyByZ2JhVGV4dDogUmdiYTtcblxuICBwdWJsaWMgYXJyb3dUb3A6IG51bWJlcjtcblxuICBwdWJsaWMgc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xuICBwdWJsaWMgaHVlU2xpZGVyQ29sb3I6IHN0cmluZztcbiAgcHVibGljIGFscGhhU2xpZGVyQ29sb3I6IHN0cmluZztcblxuICBwdWJsaWMgY3BXaWR0aDogbnVtYmVyO1xuICBwdWJsaWMgY3BIZWlnaHQ6IG51bWJlcjtcblxuICBwdWJsaWMgY3BBbHBoYUNoYW5uZWw6IHN0cmluZztcbiAgcHVibGljIGNwT3V0cHV0Rm9ybWF0OiBzdHJpbmc7XG5cbiAgcHVibGljIGNwRGlzYWJsZUlucHV0OiBib29sZWFuO1xuICBwdWJsaWMgY3BEaWFsb2dEaXNwbGF5OiBzdHJpbmc7XG5cbiAgcHVibGljIGNwSWdub3JlZEVsZW1lbnRzOiBhbnk7XG4gIHB1YmxpYyBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW47XG5cbiAgcHVibGljIGNwUG9zaXRpb246IHN0cmluZztcbiAgcHVibGljIGNwUG9zaXRpb25PZmZzZXQ6IG51bWJlcjtcblxuICBwdWJsaWMgY3BPS0J1dHRvbjogYm9vbGVhbjtcbiAgcHVibGljIGNwT0tCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBjcE9LQnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY3BDYW5jZWxCdXR0b246IGJvb2xlYW47XG4gIHB1YmxpYyBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZztcbiAgcHVibGljIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY3BQcmVzZXRMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdO1xuICBwdWJsaWMgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlcjtcblxuICBwdWJsaWMgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhbjtcbiAgcHVibGljIGNwQWRkQ29sb3JCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBjcEFkZENvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZztcbiAgcHVibGljIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb2xvclRvZ2dsZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdodWVTbGlkZXInKSBodWVTbGlkZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FscGhhU2xpZGVyJykgYWxwaGFTbGlkZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZ1BvcHVwJykgZGlhbG9nRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBDb2xvclBpY2tlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlclBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gICAgICBjb25zdCBodWVXaWR0aCA9IHRoaXMuaHVlU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBhbHBoYVdpZHRoID0gdGhpcy5hbHBoYVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICB0aGlzLnNsaWRlckRpbU1heCA9IG5ldyBTbGlkZXJEaW1lbnNpb24oaHVlV2lkdGgsIHRoaXMuY3BXaWR0aCwgMTMwLCBhbHBoYVdpZHRoKTtcblxuICAgICAgaWYgKHRoaXMuY3BPdXRwdXRGb3JtYXQgPT09ICdyZ2JhJykge1xuICAgICAgICB0aGlzLmZvcm1hdCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3BPdXRwdXRGb3JtYXQgPT09ICdoc2xhJykge1xuICAgICAgICB0aGlzLmZvcm1hdCA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1hdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdGVuZXJNb3VzZURvd24gPSAoZXZlbnQ6IGFueSkgPT4geyB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTsgfTtcbiAgICAgIHRoaXMubGlzdGVuZXJSZXNpemUgPSAoKSA9PiB7IHRoaXMub25SZXNpemUoKTsgfTtcblxuICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuaW5pdGlhbENvbG9yLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLmNwV2lkdGggIT09IDEwMCkge1xuICAgICAgY29uc3QgaHVlV2lkdGggPSB0aGlzLmh1ZVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgY29uc3QgYWxwaGFXaWR0aCA9IHRoaXMuYWxwaGFTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgdGhpcy5zbGlkZXJEaW1NYXggPSBuZXcgU2xpZGVyRGltZW5zaW9uKGh1ZVdpZHRoLCB0aGlzLmNwV2lkdGgsIDEzMCwgYWxwaGFXaWR0aCk7XG5cbiAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoZmFsc2UpO1xuXG4gICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgfVxuICBwdWJsaWMgYWRkQ29sb3IoKXt9XG4gIHB1YmxpYyBvcGVuRGlhbG9nKGNvbG9yOiBhbnksIGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2VydmljZS5zZXRBY3RpdmUodGhpcyk7XG5cbiAgICAgIGlmICghdGhpcy53aWR0aCkge1xuICAgICAgICB0aGlzLmNwV2lkdGggPSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlaWdodCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDMyMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRJbml0aWFsQ29sb3IoY29sb3IpO1xuXG4gICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyhjb2xvciwgZW1pdCk7XG5cbiAgICAgIHRoaXMub3BlbkNvbG9yUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0dXBEaWFsb2coXG4gICAgY29sb3JUb2dnbGU6IGJvb2xlYW4sXG4gICAgaW5zdGFuY2U6IGFueSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY29sb3I6IGFueSxcbiAgICBjcFdpZHRoOiBzdHJpbmcsIGNwSGVpZ2h0OiBzdHJpbmcsIGNwRGlhbG9nRGlzcGxheTogc3RyaW5nLCBjcEZhbGxiYWNrQ29sb3I6IHN0cmluZyxcbiAgICBjcEFscGhhQ2hhbm5lbDogc3RyaW5nLCBjcE91dHB1dEZvcm1hdDogc3RyaW5nLCBjcERpc2FibGVJbnB1dDogYm9vbGVhbixcbiAgICBjcElnbm9yZWRFbGVtZW50czogYW55LCBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW4sIGNwVXNlUm9vdFZpZXdDb250YWluZXI6IGJvb2xlYW4sXG4gICAgY3BQb3NpdGlvbjogc3RyaW5nLCBjcFBvc2l0aW9uT2Zmc2V0OiBzdHJpbmcsIGNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3c6IGJvb2xlYW4sXG4gICAgY3BQcmVzZXRMYWJlbDogc3RyaW5nLCBjcFByZXNldENvbG9yczogc3RyaW5nW10sIGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoOiBudW1iZXIsXG4gICAgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZywgY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzczogc3RyaW5nLFxuICAgIGNwT0tCdXR0b246IGJvb2xlYW4sIGNwT0tCdXR0b25DbGFzczogc3RyaW5nLCBjcE9LQnV0dG9uVGV4dDogc3RyaW5nLFxuICAgIGNwQ2FuY2VsQnV0dG9uOiBib29sZWFuLCBjcENhbmNlbEJ1dHRvbkNsYXNzOiBzdHJpbmcsIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nLFxuICAgIGNwQWRkQ29sb3JCdXR0b246IGJvb2xlYW4sIGNwQWRkQ29sb3JCdXR0b25DbGFzczogc3RyaW5nLCBjcEFkZENvbG9yQnV0dG9uVGV4dDogc3RyaW5nLFxuICAgIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nKTogdm9pZFxuICB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbENvbG9yKGNvbG9yKTtcblxuICAgICAgdGhpcy5pc0lFMTAgPSAoZGV0ZWN0SUUoKSA9PT0gMTApO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuXG4gICAgICB0aGlzLmNwRGlzYWJsZUlucHV0ID0gY3BEaXNhYmxlSW5wdXQ7XG5cbiAgICAgIHRoaXMuY3BBbHBoYUNoYW5uZWwgPSBjcEFscGhhQ2hhbm5lbDtcbiAgICAgIHRoaXMuY3BPdXRwdXRGb3JtYXQgPSBjcE91dHB1dEZvcm1hdDtcbiAgICAgIHRoaXMuY3BEaWFsb2dEaXNwbGF5ID0gY3BEaWFsb2dEaXNwbGF5O1xuXG4gICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzID0gY3BJZ25vcmVkRWxlbWVudHM7XG4gICAgICB0aGlzLmNwU2F2ZUNsaWNrT3V0c2lkZSA9IGNwU2F2ZUNsaWNrT3V0c2lkZTtcblxuICAgICAgdGhpcy51c2VSb290Vmlld0NvbnRhaW5lciA9IGNwVXNlUm9vdFZpZXdDb250YWluZXI7XG5cbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNwV2lkdGggPSBwYXJzZUludChjcFdpZHRoLCAxMCk7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY3BIZWlnaHQgPSBwYXJzZUludChjcEhlaWdodCwgMTApO1xuXG4gICAgICB0aGlzLmNwUG9zaXRpb24gPSBjcFBvc2l0aW9uO1xuICAgICAgdGhpcy5jcFBvc2l0aW9uT2Zmc2V0ID0gcGFyc2VJbnQoY3BQb3NpdGlvbk9mZnNldCwgMTApO1xuXG4gICAgICB0aGlzLmNwT0tCdXR0b24gPSBjcE9LQnV0dG9uO1xuICAgICAgdGhpcy5jcE9LQnV0dG9uVGV4dCA9IGNwT0tCdXR0b25UZXh0O1xuICAgICAgdGhpcy5jcE9LQnV0dG9uQ2xhc3MgPSBjcE9LQnV0dG9uQ2xhc3M7XG5cbiAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b24gPSBjcENhbmNlbEJ1dHRvbjtcbiAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b25UZXh0ID0gY3BDYW5jZWxCdXR0b25UZXh0O1xuICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbkNsYXNzID0gY3BDYW5jZWxCdXR0b25DbGFzcztcblxuICAgICAgdGhpcy5mYWxsYmFja0NvbG9yID0gY3BGYWxsYmFja0NvbG9yIHx8ICcjZmZmJztcblxuICAgICAgdGhpcy5jb2xvclRvZ2dsZSA9IGNvbG9yVG9nZ2xlO1xuXG4gICAgICB0aGlzLnNldFByZXNldENvbmZpZyhjcFByZXNldExhYmVsLCBjcFByZXNldENvbG9ycyk7XG5cbiAgICAgIHRoaXMuY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGggPSBjcE1heFByZXNldENvbG9yc0xlbmd0aDtcbiAgICAgIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2UgPSBjcFByZXNldEVtcHR5TWVzc2FnZTtcbiAgICAgIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzcyA9IGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M7XG5cbiAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbiA9IGNwQWRkQ29sb3JCdXR0b247XG4gICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b25UZXh0ID0gY3BBZGRDb2xvckJ1dHRvblRleHQ7XG4gICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b25DbGFzcyA9IGNwQWRkQ29sb3JCdXR0b25DbGFzcztcbiAgICAgIHRoaXMuY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzID0gY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzO1xuXG4gICAgICBpZiAoIWNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3cpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dBcnJvd09mZnNldCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dBcnJvd1NpemUgPSAwO1xuICAgICAgICB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNwT3V0cHV0Rm9ybWF0ID09PSAnaGV4JyAmJiBjcEFscGhhQ2hhbm5lbCAhPT0gJ2Fsd2F5cycgJiYgY3BBbHBoYUNoYW5uZWwgIT09ICdoZXg4Jykge1xuICAgICAgICB0aGlzLmNwQWxwaGFDaGFubmVsID0gJ2Rpc2FibGVkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0SW5pdGlhbENvbG9yKGNvbG9yOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxDb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgcHVibGljIHNldFByZXNldENvbmZpZyhjcFByZXNldExhYmVsOiBzdHJpbmcsIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuY3BQcmVzZXRMYWJlbCA9IGNwUHJlc2V0TGFiZWw7XG4gICAgdGhpcy5jcFByZXNldENvbG9ycyA9IGNwUHJlc2V0Q29sb3JzO1xuICB9XG5cbiAgcHVibGljIHNldENvbG9yVG9nZ2xlKGNvbG9yRHJvcEVuYWJsZWQ6IGJvb2xlYW4pOnZvaWR7XG4gICAgdGhpcy5jb2xvclRvZ2dsZSA9IGNvbG9yRHJvcEVuYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sb3JGcm9tU3RyaW5nKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgbGV0IGhzdmE6IEhzdmE7XG5cbiAgICBpZiAodGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycgfHwgdGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2hleDgnKSB7XG4gICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgIGlmICghaHN2YSAmJiAhdGhpcy5oc3ZhKSB7XG4gICAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKCFoc3ZhICYmICF0aGlzLmhzdmEpIHtcbiAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHRoaXMuZmFsbGJhY2tDb2xvciwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChoc3ZhKSB7XG4gICAgICB0aGlzLmhzdmEgPSBoc3ZhO1xuXG4gICAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcihlbWl0LCB1cGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgdGhpcy5zZXREaWFsb2dQb3NpdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgIT09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25EcmFnRW5kKHNsaWRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJEcmFnRW5kKHsgc2xpZGVyOiBzbGlkZXIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRHJhZ1N0YXJ0KHNsaWRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJEcmFnU3RhcnQoeyBzbGlkZXI6IHNsaWRlciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3IgfSk7XG4gIH1cblxuICBwdWJsaWMgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNJRTEwICYmIHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAncG9wdXAnICYmXG4gICAgICAgIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtID09PSBldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICBpZiAoIXRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHRoaXMuaW5pdGlhbENvbG9yLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5pbml0aWFsQ29sb3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25BY2NlcHRDb2xvcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ3BvcHVwJykge1xuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3V0cHV0Q29sb3IpIHtcbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JTZWxlY3RlZCh0aGlzLm91dHB1dENvbG9yKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DYW5jZWxDb2xvcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHRoaXMuaW5pdGlhbENvbG9yLCB0cnVlKTtcblxuICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ3BvcHVwJykge1xuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5pbml0aWFsQ29sb3IsIHRydWUpO1xuXG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2FuY2VsZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZvcm1hdFRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1hdCA9ICh0aGlzLmZvcm1hdCArIDEpICUgMztcbiAgfVxuXG4gIHB1YmxpYyBvbkNvbG9yQ2hhbmdlKHZhbHVlOiB7czogbnVtYmVyLCB2OiBudW1iZXIsIHJnWDogbnVtYmVyLCByZ1k6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEucyA9IHZhbHVlLnMgLyB2YWx1ZS5yZ1g7XG4gICAgdGhpcy5oc3ZhLnYgPSB2YWx1ZS52IC8gdmFsdWUucmdZO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ2xpZ2h0bmVzcycsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLnYsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ3NhdHVyYXRpb24nLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5zLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkh1ZUNoYW5nZSh2YWx1ZToge3Y6IG51bWJlciwgcmdYOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLmggPSB2YWx1ZS52IC8gdmFsdWUucmdYO1xuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ2h1ZScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmgsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWxwaGFDaGFuZ2UodmFsdWU6IHt2OiBudW1iZXIsIHJnWDogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5hID0gdmFsdWUudiAvIHZhbHVlLnJnWDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XG4gICAgICBzbGlkZXI6ICdhbHBoYScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmEsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uSGV4SW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgJiYgdmFsdWVbMF0gIT09ICcjJykge1xuICAgICAgICB2YWx1ZSA9ICcjJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh2YWx1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICAgIGlucHV0OiAnaGV4JyxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVkSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSk7XG5cbiAgICByZ2JhLnIgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe2lucHV0OiAncmVkJywgdmFsdWU6IHJnYmEuciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJsdWVJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcblxuICAgIHJnYmEuYiA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7aW5wdXQ6ICdibHVlJywgdmFsdWU6IHJnYmEuYiwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkdyZWVuSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSk7XG5cbiAgICByZ2JhLmcgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdncmVlbicsXG4gICAgICB2YWx1ZTogcmdiYS5nLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFscGhhSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLmEgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2FscGhhJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuYSxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25IdWVJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pIHtcbiAgICB0aGlzLmhzdmEuaCA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdodWUnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5oLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxpZ2h0bmVzc0lucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSk7XG5cbiAgICBoc2xhLmwgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UuaHNsYTJoc3ZhKGhzbGEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2xpZ2h0bmVzcycsXG4gICAgICB2YWx1ZTogaHNsYS5sLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNhdHVyYXRpb25JbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpO1xuXG4gICAgaHNsYS5zID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLmhzbGEyaHN2YShoc2xhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdzYXR1cmF0aW9uJyxcbiAgICAgIHZhbHVlOiBoc2xhLnMsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWRkUHJlc2V0Q29sb3IoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCF0aGlzLmNwUHJlc2V0Q29sb3JzLmZpbHRlcigoY29sb3IpID0+IChjb2xvciA9PT0gdmFsdWUpKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSB0aGlzLmNwUHJlc2V0Q29sb3JzLmNvbmNhdCh2YWx1ZSk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UucHJlc2V0Q29sb3JzQ2hhbmdlZCh0aGlzLmNwUHJlc2V0Q29sb3JzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZW1vdmVQcmVzZXRDb2xvcihldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gdGhpcy5jcFByZXNldENvbG9ycy5maWx0ZXIoKGNvbG9yKSA9PiAoY29sb3IgIT09IHZhbHVlKSk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnByZXNldENvbG9yc0NoYW5nZWQodGhpcy5jcFByZXNldENvbG9ycyk7XG4gIH1cblxuICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHN0YXR1c1xuXG4gIHByaXZhdGUgb3BlbkNvbG9yUGlja2VyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zaG93KSB7XG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNldERpYWxvZ1Bvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LCAwKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS50b2dnbGUodHJ1ZSk7XG5cbiAgICAgIGlmICghdGhpcy5pc0lFMTApIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5saXN0ZW5lck1vdXNlRG93bik7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyUmVzaXplKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlQ29sb3JQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdykge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UudG9nZ2xlKGZhbHNlKTtcblxuICAgICAgaWYgKCF0aGlzLmlzSUUxMCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMubGlzdGVuZXJSZXNpemUpO1xuXG4gICAgICBpZiAoIXRoaXMuY2RSZWZbJ2Rlc3Ryb3llZCddKSB7XG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29sb3JQaWNrZXIoZW1pdDogYm9vbGVhbiA9IHRydWUsIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZXJEaW1NYXgpIHtcbiAgICAgIGNvbnN0IGxhc3RPdXRwdXQgPSB0aGlzLm91dHB1dENvbG9yO1xuXG4gICAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpO1xuICAgICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5kZW5vcm1hbGl6ZVJHQkEodGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKSk7XG5cbiAgICAgIGNvbnN0IGh1ZSA9IHRoaXMuc2VydmljZS5kZW5vcm1hbGl6ZVJHQkEodGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEobmV3IEhzdmEodGhpcy5zbGlkZXJIIHx8IHRoaXMuaHN2YS5oLCAxLCAxLCAxKSkpO1xuXG4gICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgIHRoaXMuaHNsYVRleHQgPSBuZXcgSHNsYShNYXRoLnJvdW5kKChoc2xhLmgpICogMzYwKSwgTWF0aC5yb3VuZChoc2xhLnMgKiAxMDApLCBNYXRoLnJvdW5kKGhzbGEubCAqIDEwMCksXG4gICAgICAgICAgTWF0aC5yb3VuZChoc2xhLmEgKiAxMDApIC8gMTAwKTtcblxuICAgICAgICB0aGlzLnJnYmFUZXh0ID0gbmV3IFJnYmEocmdiYS5yLCByZ2JhLmcsIHJnYmEuYiwgTWF0aC5yb3VuZChyZ2JhLmEgKiAxMDApIC8gMTAwKTtcblxuICAgICAgICBjb25zdCBhbGxvd0hleDggPSB0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnYWx3YXlzJyB8fCB0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnaGV4OCc7XG5cbiAgICAgICAgdGhpcy5oZXhUZXh0ID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hleChyZ2JhLCBhbGxvd0hleDgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmh1ZVNsaWRlckNvbG9yID0gJ3JnYignICsgaHVlLnIgKyAnLCcgKyBodWUuZyArICcsJyArIGh1ZS5iICsgJyknO1xuICAgICAgdGhpcy5hbHBoYVNsaWRlckNvbG9yID0gJ3JnYignICsgcmdiYS5yICsgJywnICsgcmdiYS5nICsgJywnICsgcmdiYS5iICsgJyknO1xuXG4gICAgICB0aGlzLm91dHB1dENvbG9yID0gdGhpcy5zZXJ2aWNlLm91dHB1dEZvcm1hdCh0aGlzLmhzdmEsIHRoaXMuY3BPdXRwdXRGb3JtYXQsIHRoaXMuY3BBbHBoYUNoYW5uZWwpO1xuICAgICAgdGhpcy5zZWxlY3RlZENvbG9yID0gdGhpcy5zZXJ2aWNlLm91dHB1dEZvcm1hdCh0aGlzLmhzdmEsICdyZ2JhJywgbnVsbCk7XG5cbiAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlclBvc2l0aW9uKFxuICAgICAgICAodGhpcy5zbGlkZXJIIHx8IHRoaXMuaHN2YS5oKSAqIHRoaXMuc2xpZGVyRGltTWF4LmggLSA4LFxuICAgICAgICB0aGlzLmhzdmEucyAqIHRoaXMuc2xpZGVyRGltTWF4LnMgLSA4LFxuICAgICAgICAoMSAtIHRoaXMuaHN2YS52KSAqIHRoaXMuc2xpZGVyRGltTWF4LnYgLSA4LFxuICAgICAgICB0aGlzLmhzdmEuYSAqIHRoaXMuc2xpZGVyRGltTWF4LmEgLSA4XG4gICAgICApO1xuXG4gICAgICBpZiAoZW1pdCAmJiBsYXN0T3V0cHV0ICE9PSB0aGlzLm91dHB1dENvbG9yKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDaGFuZ2VkKHRoaXMub3V0cHV0Q29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgcG9zaXRpb25pbmdcblxuICBwcml2YXRlIHNldERpYWxvZ1Bvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaWFsb2dIZWlnaHQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGxldCBwb3NpdGlvbiA9ICdzdGF0aWMnLCB0cmFuc2Zvcm0gPSAnJywgc3R5bGUgPSBudWxsO1xuXG4gICAgICBsZXQgcGFyZW50Tm9kZTogYW55ID0gbnVsbCwgdHJhbnNmb3JtTm9kZTogYW55ID0gbnVsbDtcblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCAmJiBub2RlLnRhZ05hbWUgIT09ICdIVE1MJykge1xuICAgICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBwb3NpdGlvbiA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJyk7XG4gICAgICAgIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJyAmJiB0cmFuc2Zvcm1Ob2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdHJhbnNmb3JtTm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gdHJhbnNmb3JtTm9kZTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYm94RGlyZWN0aXZlID0gdGhpcy5jcmVhdGVCb3godGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIChwb3NpdGlvbiAhPT0gJ2ZpeGVkJykpO1xuXG4gICAgICBpZiAodGhpcy51c2VSb290Vmlld0NvbnRhaW5lciB8fCAocG9zaXRpb24gPT09ICdmaXhlZCcgJiYgIXBhcmVudE5vZGUpKSB7XG4gICAgICAgIHRoaXMudG9wID0gYm94RGlyZWN0aXZlLnRvcDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gYm94RGlyZWN0aXZlLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm94UGFyZW50ID0gdGhpcy5jcmVhdGVCb3gocGFyZW50Tm9kZSwgKHBvc2l0aW9uICE9PSAnZml4ZWQnKSk7XG5cbiAgICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wIC0gYm94UGFyZW50LnRvcDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gYm94RGlyZWN0aXZlLmxlZnQgLSBib3hQYXJlbnQubGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jcFBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCAqIHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICAgIHRoaXMubGVmdCAtPSB0aGlzLmNwV2lkdGggKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZSAtIDI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgdGhpcy5hcnJvd1RvcCA9IGRpYWxvZ0hlaWdodCAtIDE7XG5cbiAgICAgICAgdGhpcy50b3AgLT0gZGlhbG9nSGVpZ2h0ICsgdGhpcy5kaWFsb2dBcnJvd1NpemU7XG4gICAgICAgIHRoaXMubGVmdCArPSB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgKiBib3hEaXJlY3RpdmUud2lkdGggLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZTtcbiAgICAgICAgdGhpcy5sZWZ0ICs9IHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAqIGJveERpcmVjdGl2ZS53aWR0aCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICogdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgICAgdGhpcy5sZWZ0ICs9IGJveERpcmVjdGl2ZS53aWR0aCArIHRoaXMuZGlhbG9nQXJyb3dTaXplIC0gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHBvc2l0aW9uaW5nIGFuZCBvcGVuaW5nXG5cbiAgcHJpdmF0ZSBjcmVhdGVCb3goZWxlbWVudDogYW55LCBvZmZzZXQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IDApLFxuICAgICAgbGVmdDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IDApLFxuICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgaXNEZXNjZW5kYW50KHBhcmVudDogYW55LCBjaGlsZDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IG5vZGU6IGFueSA9IGNoaWxkLnBhcmVudE5vZGU7XG5cbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLFxuICBJbmplY3RvciwgUmVmbGVjdGl2ZUluamVjdG9yLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yUGlja2VyU2VydmljZSB9IGZyb20gJy4vY29sb3ItcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tjb2xvclBpY2tlcl0nLFxuICBleHBvcnRBczogJ25neENvbG9yUGlja2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkaWFsb2c6IGFueTtcblxuICBwcml2YXRlIGRpYWxvZ0NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpZ25vcmVDaGFuZ2VzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjbXBSZWY6IENvbXBvbmVudFJlZjxDb2xvclBpY2tlckNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY29sb3JQaWNrZXI6IHN0cmluZztcblxuICBASW5wdXQoKSBjcFdpZHRoOiBzdHJpbmcgPSAnMjMwcHgnO1xuICBASW5wdXQoKSBjcEhlaWdodDogc3RyaW5nID0gJ2F1dG8nO1xuXG4gIEBJbnB1dCgpIGNwVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgY3BJZ25vcmVkRWxlbWVudHM6IGFueSA9IFtdO1xuXG4gIEBJbnB1dCgpIGNwRGlzYWJsZUlucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgY3BBbHBoYUNoYW5uZWw6IHN0cmluZyA9ICdlbmFibGVkJztcbiAgQElucHV0KCkgY3BPdXRwdXRGb3JtYXQ6IHN0cmluZyA9ICdoZXgnO1xuXG4gIEBJbnB1dCgpIGNwRmFsbGJhY2tDb2xvcjogc3RyaW5nID0gJyNmZmYnO1xuXG4gIEBJbnB1dCgpIGNwRGlhbG9nRGlzcGxheTogc3RyaW5nID0gJ3BvcHVwJztcblxuICBASW5wdXQoKSBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGNwVXNlUm9vdFZpZXdDb250YWluZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcFBvc2l0aW9uOiBzdHJpbmcgPSAncmlnaHQnO1xuICBASW5wdXQoKSBjcFBvc2l0aW9uT2Zmc2V0OiBzdHJpbmcgPSAnMCUnO1xuICBASW5wdXQoKSBjcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgY3BPS0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjcE9LQnV0dG9uVGV4dDogc3RyaW5nID0gJ09LJztcbiAgQElucHV0KCkgY3BPS0J1dHRvbkNsYXNzOiBzdHJpbmcgPSAnY3Atb2stYnV0dG9uLWNsYXNzJztcblxuICBASW5wdXQoKSBjcENhbmNlbEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZyA9ICdDYW5jZWwnO1xuICBASW5wdXQoKSBjcENhbmNlbEJ1dHRvbkNsYXNzOiBzdHJpbmcgPSAnY3AtY2FuY2VsLWJ1dHRvbi1jbGFzcyc7XG5cbiAgQElucHV0KCkgY3BQcmVzZXRMYWJlbDogc3RyaW5nID0gJ1ByZXNldCBjb2xvcnMnO1xuICBASW5wdXQoKSBjcFByZXNldENvbG9yczogc3RyaW5nW107XG4gIEBJbnB1dCgpIGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoOiBudW1iZXIgPSA2O1xuXG4gIEBJbnB1dCgpIGNwUHJlc2V0RW1wdHlNZXNzYWdlOiBzdHJpbmcgPSAnTm8gY29sb3JzIGFkZGVkJztcbiAgQElucHV0KCkgY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzczogc3RyaW5nID0gJ3ByZXNldC1lbXB0eS1tZXNzYWdlJztcblxuICBASW5wdXQoKSBjcEFkZENvbG9yQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNwQWRkQ29sb3JCdXR0b25UZXh0OiBzdHJpbmcgPSAnQWRkIGNvbG9yJztcbiAgQElucHV0KCkgY3BBZGRDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmcgPSAnY3AtYWRkLWNvbG9yLWJ1dHRvbi1jbGFzcyc7XG5cbiAgQElucHV0KCkgY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmcgPSAnY3AtcmVtb3ZlLWNvbG9yLWJ1dHRvbi1jbGFzcyc7XG5cbiAgQE91dHB1dCgpIGNwSW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4odHJ1ZSk7XG5cbiAgQE91dHB1dCgpIGNwVG9nZ2xlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcblxuICBAT3V0cHV0KCkgY3BTbGlkZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjcFNsaWRlckRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjcFNsaWRlckRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcblxuICBAT3V0cHV0KCkgY29sb3JQaWNrZXJPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuICBAT3V0cHV0KCkgY29sb3JQaWNrZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcblxuICBAT3V0cHV0KCkgY29sb3JQaWNrZXJDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlclNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KGZhbHNlKTtcblxuICBAT3V0cHV0KCkgY3BQcmVzZXRDb2xvcnNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4odHJ1ZSk7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBoYW5kbGVDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEZvY3VzKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pIGhhbmRsZUZvY3VzKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Rm9jdXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgaGFuZGxlSW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZiwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9zZXJ2aWNlOiBDb2xvclBpY2tlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY21wUmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY21wUmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jcFRvZ2dsZSkge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGNoYW5nZXMuY3BUb2dnbGUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMub3BlbkRpYWxvZygpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZyAmJiAhY2hhbmdlcy5jcFRvZ2dsZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2VEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoY2hhbmdlcy5jb2xvclRvZ2dsZSl7XG4gICAgICB0aGlzLmRpYWxvZy5zZXRDb2xvclRvZ2dsZShjaGFuZ2VzLmNvbG9yVG9nZ2xlLmN1cnJlbnRWYWx1ZSlcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY29sb3JQaWNrZXIpIHtcbiAgICAgIGlmICh0aGlzLmRpYWxvZyAmJiAhdGhpcy5pZ25vcmVDaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICB0aGlzLmRpYWxvZy5zZXRJbml0aWFsQ29sb3IoY2hhbmdlcy5jb2xvclBpY2tlci5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaWFsb2cuc2V0Q29sb3JGcm9tU3RyaW5nKGNoYW5nZXMuY29sb3JQaWNrZXIuY3VycmVudFZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaWdub3JlQ2hhbmdlcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmNwUHJlc2V0TGFiZWwgfHwgY2hhbmdlcy5jcFByZXNldENvbG9ycykge1xuICAgICAgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nLnNldFByZXNldENvbmZpZyh0aGlzLmNwUHJlc2V0TGFiZWwsIHRoaXMuY3BQcmVzZXRDb2xvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaWFsb2dDcmVhdGVkKSB7XG4gICAgICBsZXQgdmNSZWYgPSB0aGlzLnZjUmVmO1xuXG4gICAgICB0aGlzLmRpYWxvZ0NyZWF0ZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5jcFVzZVJvb3RWaWV3Q29udGFpbmVyICYmIHRoaXMuY3BEaWFsb2dEaXNwbGF5ICE9PSAnaW5saW5lJykge1xuICAgICAgICBjb25zdCBjbGFzc09mUm9vdENvbXBvbmVudCA9IHRoaXMuYXBwUmVmLmNvbXBvbmVudFR5cGVzWzBdO1xuICAgICAgICBjb25zdCBhcHBJbnN0YW5jZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KGNsYXNzT2ZSb290Q29tcG9uZW50KTtcblxuICAgICAgICB2Y1JlZiA9IGFwcEluc3RhbmNlLnZjUmVmIHx8IGFwcEluc3RhbmNlLnZpZXdDb250YWluZXJSZWYgfHwgdGhpcy52Y1JlZjtcblxuICAgICAgICBpZiAodmNSZWYgPT09IHRoaXMudmNSZWYpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBhcmUgdXNpbmcgY3BVc2VSb290Vmlld0NvbnRhaW5lciwgJyArXG4gICAgICAgICAgICAnYnV0IHRoZSByb290IGNvbXBvbmVudCBpcyBub3QgZXhwb3Npbmcgdmlld0NvbnRhaW5lclJlZiEnICtcbiAgICAgICAgICAgICdQbGVhc2UgZXhwb3NlIGl0IGJ5IGFkZGluZyBcXCdwdWJsaWMgdmNSZWY6IFZpZXdDb250YWluZXJSZWZcXCcgdG8gdGhlIGNvbnN0cnVjdG9yLicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBGYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQ29sb3JQaWNrZXJDb21wb25lbnQpO1xuICAgICAgY29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKFtdLCB2Y1JlZi5wYXJlbnRJbmplY3Rvcik7XG5cbiAgICAgIHRoaXMuY21wUmVmID0gdmNSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBGYWN0b3J5LCAwLCBpbmplY3RvciwgW10pO1xuXG4gICAgICB0aGlzLmNtcFJlZi5pbnN0YW5jZS5zZXR1cERpYWxvZyhcbiAgICAgICAgdGhpcy5jb2xvclRvZ2dsZSxcbiAgICAgICAgdGhpcywgdGhpcy5lbFJlZiwgdGhpcy5jb2xvclBpY2tlcixcbiAgICAgICAgdGhpcy5jcFdpZHRoLCB0aGlzLmNwSGVpZ2h0LCB0aGlzLmNwRGlhbG9nRGlzcGxheSwgdGhpcy5jcEZhbGxiYWNrQ29sb3IsXG4gICAgICAgIHRoaXMuY3BBbHBoYUNoYW5uZWwsIHRoaXMuY3BPdXRwdXRGb3JtYXQsIHRoaXMuY3BEaXNhYmxlSW5wdXQsXG4gICAgICAgIHRoaXMuY3BJZ25vcmVkRWxlbWVudHMsIHRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlLCB0aGlzLmNwVXNlUm9vdFZpZXdDb250YWluZXIsXG4gICAgICAgIHRoaXMuY3BQb3NpdGlvbiwgdGhpcy5jcFBvc2l0aW9uT2Zmc2V0LCB0aGlzLmNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3csXG4gICAgICAgIHRoaXMuY3BQcmVzZXRMYWJlbCwgdGhpcy5jcFByZXNldENvbG9ycywgdGhpcy5jcE1heFByZXNldENvbG9yc0xlbmd0aCxcbiAgICAgICAgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZSwgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzLFxuICAgICAgICB0aGlzLmNwT0tCdXR0b24sIHRoaXMuY3BPS0J1dHRvbkNsYXNzLCB0aGlzLmNwT0tCdXR0b25UZXh0LFxuICAgICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uLCB0aGlzLmNwQ2FuY2VsQnV0dG9uQ2xhc3MsIHRoaXMuY3BDYW5jZWxCdXR0b25UZXh0LFxuICAgICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b24sIHRoaXMuY3BBZGRDb2xvckJ1dHRvbkNsYXNzLCB0aGlzLmNwQWRkQ29sb3JCdXR0b25UZXh0LFxuICAgICAgICB0aGlzLmNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzcyk7XG4gICAgICAgIHRoaXMuZGlhbG9nID0gdGhpcy5jbXBSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHRoaXMudmNSZWYgIT09IHZjUmVmKSB7XG4gICAgICAgICAgdGhpcy5jbXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZykge1xuICAgICAgdGhpcy5kaWFsb2cub3BlbkRpYWxvZyh0aGlzLmNvbG9yUGlja2VyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICB0aGlzLmRpYWxvZy5jbG9zZURpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNwVG9nZ2xlQ2hhbmdlLmVtaXQodmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyT3Blbi5lbWl0KHRoaXMuY29sb3JQaWNrZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyQ2xvc2UuZW1pdCh0aGlzLmNvbG9yUGlja2VyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29sb3JDaGFuZ2VkKHZhbHVlOiBzdHJpbmcsIGlnbm9yZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLmlnbm9yZUNoYW5nZXMgPSBpZ25vcmU7XG5cbiAgICB0aGlzLmNvbG9yUGlja2VyQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGNvbG9yQ2FuY2VsZWQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xvclBpY2tlckNhbmNlbC5lbWl0KCk7XG4gIH1cblxuICBwdWJsaWMgY29sb3JTZWxlY3RlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb2xvclBpY2tlclNlbGVjdC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBpbnB1dEZvY3VzKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5jcElnbm9yZWRFbGVtZW50cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbSA9PT0gZWxlbWVudCk7XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIWlnbm9yZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9wZW5EaWFsb2coKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5wdXRDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpYWxvZykge1xuICAgICAgdGhpcy5kaWFsb2cuc2V0Q29sb3JGcm9tU3RyaW5nKHZhbHVlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvclBpY2tlciA9IHZhbHVlO1xuXG4gICAgICB0aGlzLmNvbG9yUGlja2VyQ2hhbmdlLmVtaXQodGhpcy5jb2xvclBpY2tlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlucHV0Q2hhbmdlZChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jcElucHV0Q2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIHNsaWRlckNoYW5nZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY3BTbGlkZXJDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgc2xpZGVyRHJhZ0VuZChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jcFNsaWRlckRyYWdFbmQuZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgc2xpZGVyRHJhZ1N0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNwU2xpZGVyRHJhZ1N0YXJ0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIHByZXNldENvbG9yc0NoYW5nZWQodmFsdWU6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5jcFByZXNldENvbG9yc0NoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdyZXZlcnNlJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXZlcnNlUGlwZSB7XG4gIHRyYW5zZm9ybSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zbGljZSgpLnJldmVyc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEbmRNb2R1bGUgfSBmcm9tICduZzItZG5kJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbG9yUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlckRpcmVjdGl2ZSwgVGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vY29sb3JwaWNrZXIvaGVscGVycyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbG9yV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29sb3Jkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1jb2xvcmRyb3Avc2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25GYWJNb2R1bGUsIFNlbVVpQnV0dG9uTW9kdWxlLCBTZW1VaUJ1dHRvbkRuZE1vZHVsZSB9IGZyb20gJ0Bmcm9udHIvc2VtLXVpJztcbmltcG9ydCB7IFJldmVyc2VQaXBlIH0gZnJvbSAnLi9zZW0tYXJyYXktcmV2ZXJzZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2VtVWlCdXR0b25GYWJNb2R1bGUsXG4gICAgU2VtVWlCdXR0b25Nb2R1bGUsXG4gICAgU2VtVWlCdXR0b25EbmRNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEbmRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb2xvcldpZGdldENvbXBvbmVudCxcbiAgICBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJEaXJlY3RpdmUsXG4gICAgVGV4dERpcmVjdGl2ZSxcbiAgICBTbGlkZXJEaXJlY3RpdmUsXG4gICAgUmV2ZXJzZVBpcGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbIENvbG9yUGlja2VyQ29tcG9uZW50IF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb2xvcldpZGdldENvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckRpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFsgQ29sb3JQaWNrZXJTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtQ29sb3JzTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsyQkFKRDs7Ozs7OztBQ0FBO0lBK0NFLDhCQUFtRCxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztpQ0FHM0IsSUFBSSxZQUFZLEVBQU87S0FIUztJQVZ2RSxzQkFDSSxtREFBaUI7Ozs7O1FBRHJCLFVBQ3NCLFNBQWM7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUE7WUFDN0IsSUFBRyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDNUI7WUFDRCxJQUFHLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDO2FBQ3BEO1NBQ0Y7OztPQUFBOzs7OztJQUtELGlEQUFrQjs7OztJQUFsQixVQUFtQixLQUFpQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENB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QXJELElBQTBDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUVyRCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFDNUIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBQ3BCLElBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBQ3RCLElBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztRQUMxQixJQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVoQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ1gsS0FBSyxDQUFDO2dCQUNKLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FB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