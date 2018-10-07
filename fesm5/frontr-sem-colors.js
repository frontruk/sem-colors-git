import { Injectable, Pipe, NgModule, Directive, Input, Output, EventEmitter, HostListener, ApplicationRef, ElementRef, ViewContainerRef, Injector, ReflectiveInjector, ComponentFactoryResolver, Component, ViewChild, ViewEncapsulation, ChangeDetectorRef, PLATFORM_ID, Inject, ChangeDetectionStrategy, defineInjectable } from '@angular/core';
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
var ColorListComponent = /** @class */ (function () {
    function ColorListComponent(elRef) {
        this.elRef = elRef;
        this.colorList = [{}];
        this.componentData = null;
    }
    Object.defineProperty(ColorListComponent.prototype, "selected", {
        set: /**
         * @param {?} colors
         * @return {?}
         */
        function (colors) {
            this.colorList = colors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selectedColor
     * @return {?}
     */
    ColorListComponent.prototype.onDragStartColorDrop = /**
     * @param {?} selectedColor
     * @return {?}
     */
    function (selectedColor) {
        // this._colorService.publishData(selectedColor);
    };
    /**
     * @return {?}
     */
    ColorListComponent.prototype.loadColorWidget = /**
     * @return {?}
     */
    function () {
        // this.componentData = { component: ColorSelectorComponent, inputs: { showNum: 0 }}
    };
    /**
     * @param {?} colordrop
     * @return {?}
     */
    ColorListComponent.prototype.onDragStart = /**
     * @param {?} colordrop
     * @return {?}
     */
    function (colordrop) {
        console.log('started in color selector component', colordrop);
    };
    ColorListComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'sembler-color-list',
                    template: "<!--<ul>-->\n <!--<li *ngFor=\"let item of colorList \">-->\n    <!--<div-->\n      <!--class=\"color-drop\"-->\n\n\n      <!--[style.background]=\"item.color\"-->\n\n      <!--dnd-draggable-->\n      <!--[dragEnabled]=\"true\"-->\n      <!--[dragData]=\"item\"-->\n      <!--(onDragStart)=\"onDragStart(item)\"-->\n      <!--[dropZones]=\"['widget-dropZone']\"-->\n\n     <!--&gt;-->\n       <!--<span class=\"btn-title\">-->\n        <!--{{item.color}}-->\n       <!--</span>-->\n     <!--</div>-->\n  <!--</li>-->\n<!--</ul>-->\n\n<!--[style.color]=\"item.color\"-->\n<!--dnd-draggable-->\n<!--[ dragEnabled]=\"true\"-->\n<!--[dragData]=\"colordrop\"-->\n<!--[dropZones]=\"['widget-dropZone',-->\n<!--'canvas-dropZone',-->\n<!--'rowWrapper-dropZone',-->\n<!--'row-dropZone',-->\n<!--'column-dropZone',-->\n<!--'widget-dropZone' ]\"-->\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ColorListComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ColorListComponent.propDecorators = {
        selected: [{ type: Input, args: ['colors',] }]
    };
    return ColorListComponent;
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
                    template: "<div\n  #dialogPopup\n  class=\"color-picker\"\n  [style.visibility]=\"hidden || !show ? 'hidden' : 'visible'\" [style.top.px]=\"top\"\n  [style.left.px]=\"left\"\n  [style.position]=\"position\"\n  [style.height.px]=\"cpHeight\"\n  [style.width]=\"colorToggle ? '100%' : cpWidth + 'px'\"\n>\n  <div\n    *ngIf=\"!colorToggle\"\n    class=\"color-input-container sem-color-light-inputs pb1\">\n    <div\n      class=\"flex justify-end my1 sem-typo--figcaption\"\n      *ngIf=\"!cpDisableInput\" (click)=\"onFormatToggle()\"\n    >\n      <span class=\"self-start sem--link \">Change format</span>\n      <div class=\"sem-color-switch--control--link\"></div>\n    </div>\n    <div class=\"sem-color-switch flex items-center\">\n      <ul class=\"list-reset sem-color-switch--colors flex-auto\">\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes mr1 \"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"360\"\n                [text] [rg]=\"360\" [value]=\"hslaText?.h\" (newValue)=\"onHueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">H</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.s\" (newValue)=\"onSaturationInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">S</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.l\" (newValue)=\"onLightnessInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">L</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\" [value]=\"hslaText?.a\" (newValue)=\"onAlphaInput($event)\"/>\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 1 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (newValue)=\"onRedInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">R</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (newValue)=\"onGreenInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">G</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (newValue)=\"onBlueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">B</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"sem-input boxes\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\"\n                min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\"\n                [value]=\"rgbaText?.a\" (newValue)=\"onAlphaInput($event)\"\n              />\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 0 ? 'none' : 'block'\">\n\n            <span class=\"input-sufix\">\n              <input\n                class=\"sem-input\"\n                [text] [value]=\"hexText\"\n                (blur)=\"onHexInput(null)\"\n                (newValue)=\"onHexInput($event)\"/>\n              <span\n                (click)=\"addColor()\"\n                class=\"sem-icon-search sufix\">\n              </span>\n            </span>\n          <span class=\"block center sem-typo--figcaption\">Hex</span>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n\n  <div\n    #hueSlider\n    [style.display]=\"colorToggle ? 'none' : 'block'\"\n    class=\"hue\"\n    [slider] [rgX]=\"1\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n    <div class=\"cursor\" [style.left.px]=\"slider.h\"></div>\n\n  </div>\n\n  <div\n    [style.display]=\"colorToggle ? 'none' : 'block'\"\n    *ngIf=\"cpDialogDisplay=='popup'\"\n    class=\"arrow arrow-{{cpPosition}}\"\n    [style.top.px]=\"arrowTop\"></div>\n\n  <div\n    [style.display]=\"colorToggle ? 'none' : 'block'\"\n    class=\"saturation-lightness\"\n    [slider] [rgX]=\"1\" [rgY]=\"1\"\n    [style.background-color]=\"hueSliderColor\"\n    (newValue)=\"onColorChange($event)\"\n    (dragStart)=\"onDragStart('saturation-lightness')\"\n    (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider.v\" [style.left.px]=\"slider.s\"></div>\n  </div>\n\n  <div\n    #alphaSlider\n    class=\"alpha\"\n    [slider]\n    [rgX]=\"1\"\n    [style.display]=\"colorToggle ? 'none' : 'block'\"\n    [style.background-color]=\"alphaSliderColor\"\n    (newValue)=\"onAlphaChange($event)\"\n    (dragStart)=\"onDragStart('alpha')\"\n    (dragEnd)=\"onDragEnd('alpha')\">\n    <div class=\"cursor\" [style.left.px]=\"slider.a\"></div>\n  </div>\n\n  <!--Color drops-->\n  <div\n    *ngIf=\"colorToggle\"\n    class=\"sem-color-drops\">\n\n    <ng-container *ngIf=\"cpPresetColors?.length || cpAddColorButton\">\n      <ul *ngIf=\"cpPresetColors?.length\" class=\"sem-color-list sem-list-reset\">\n        <li\n          *ngFor=\"let color of cpPresetColors | reverse\"\n          [style.backgroundColor]=\"color\"\n          (click)=\"setColorFromString(color)\"\n          class=\"block\"\n          dnd-draggable\n          [dragEnabled]=\"true\"\n          [dragData]=\"color\"\n          (onDragStart)=\"onDragStart(color)\"\n          [dropZones]=\"['widget-dropZone']\"\n        >\n          <span class=\"right-align block\"> {{color}}</span>\n          <span\n            *ngIf=\"cpAddColorButton\"\n            class=\"color-delete sem-icon-close\"\n            (click)=\"onRemovePresetColor($event, color)\"></span>\n        </li>\n      </ul>\n      <div\n        *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\n        class=\"{{cpPresetEmptyMessageClass}}\n          \">{{cpPresetEmptyMessage}}</div>\n    </ng-container>\n  </div>\n\n\n  <div\n    *ngIf=\"!colorToggle\"\n    class=\"sem-color-swatches\">\n    <!--<div class=\"sem-color-swatches_current\"></div>-->\n      <button\n        medium\n        [style.background-color]=\"selectedColor\"\n        semui-button-dnd sem-importance=\"primary\"\n        *ngIf=\"cpAddColorButton\"\n        [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\n        (click)=\"onAddPresetColor($event, selectedColor)\"\n      >\n        Add Color\n      </button>\n\n    <div\n      *ngIf=\"cpPresetColors?.length || cpAddColorButton\"\n      class=\"sem-color-swatches_preselected\">\n\n      <div\n        *ngIf=\"!cpPresetColors?.length && cpAddColorButton\"\n        class=\"{{cpPresetEmptyMessageClass}}\n          \">\n        {{cpPresetEmptyMessage}}\n      </div>\n\n      <span\n        *ngFor=\"let color of cpPresetColors | reverse\"\n        class=\"sem-button-rain-drop\"\n        [style.backgroundColor]=\"color\"\n        (click)=\"setColorFromString(color)\"\n      >\n          <span\n            *ngIf=\"cpAddColorButton\"\n            (click)=\"onRemovePresetColor($event, color)\"\n            class=\"sem-button-circle sem-button-delete sem-icon-close\">\n          </span>\n       </span>\n    </div>\n  </div>\n\n  <div\n    *ngIf=\"colorToggle\"\n    class=\"dialog-container--footer color-input-container sem-color-light-inputs\">\n    <div\n      class=\"flex justify-end mb1 pt1 sem-typo--figcaption\"\n      *ngIf=\"!cpDisableInput\" (click)=\"onFormatToggle()\"\n    >\n      <span class=\"self-start sem--link \">Change format</span>\n      <div class=\"sem-color-switch--control--link\"></div>\n    </div>\n    <div class=\"sem-color-switch flex items-center\">\n      <ul class=\"list-reset sem-color-switch--colors flex-auto\">\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around pb1\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input sem-input--small boxes mr1 \"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"360\"\n                [text] [rg]=\"360\" [value]=\"hslaText?.h\" (newValue)=\"onHueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">H</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.s\" (newValue)=\"onSaturationInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">S</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes mr1 table-cell\"\n                type=\"number\"\n                pattern=\"[0-9]*\" min=\"0\" max=\"100\"\n                [text] [rg]=\"100\" [value]=\"hslaText?.l\" (newValue)=\"onLightnessInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">L</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\" [value]=\"hslaText?.a\" (newValue)=\"onAlphaInput($event)\"/>\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 1 ? 'none' : 'block'\">\n          <div class=\"flex flex-wrap content-around\">\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (newValue)=\"onRedInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">R</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (newValue)=\"onGreenInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">G</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                class=\"sem-input boxes\"\n                type=\"number\"  pattern=\"[0-9]*\" min=\"0\" max=\"255\"\n                [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (newValue)=\"onBlueInput($event)\"/>\n              <span class=\"block center sem-typo--figcaption\">B</span>\n            </div>\n            <div class=\"col-3 \">\n              <input\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"sem-input boxes\"\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\"\n                min=\"0\" max=\"1\" step=\"0.1\"\n                [text] [rg]=\"1\"\n                [value]=\"rgbaText?.a\" (newValue)=\"onAlphaInput($event)\"\n              />\n              <span\n                *ngIf=\"cpAlphaChannel!=='disabled'\"\n                class=\"block center sem-typo--figcaption\">A</span>\n            </div>\n          </div>\n        </li>\n        <li *ngIf=\"!cpDisableInput\" [style.display]=\"format !== 0 ? 'none' : 'block'\">\n                  <span class=\"input-grp\">\n                      <input\n                        type=\"text\"\n                        class=\"sem-input\"\n                        [text] [value]=\"hexText\"\n                        (blur)=\"onHexInput(null)\"\n                        (newValue)=\"onHexInput($event)\"\n                      >\n                      <button\n                        sem-btn-fab\n                        corner=\"none\"\n                        semui-theme=\"light\"\n                        sem-importance=\"primary\"\n                        small\n                        *ngIf=\"cpAddColorButton\"\n                        [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\"\n                        (click)=\"onAddPresetColor($event, selectedColor)\"\n                      >\n                        <span class=\"sem-icon-send button-send\"\n                        ></span>\n                      </button>\n                  </span>\n          <span class=\"block center sem-typo--figcaption\">Hex</span>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n\n  <!-- START -->\n\n\n\n\n <!-- END -->\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
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
                        ColorListComponent,
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

export { SemColorsService, ColorWidgetComponent, SearchColordropComponent, ColorListComponent, ColorPickerComponent, ColorPickerDirective, ColorPickerService, Cmyk, Hsla, Hsva, Rgba, detectIE, TextDirective, SliderDirective, SliderPosition, SliderDimension, SemColorsModule, ReversePipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS1jb2xvcnMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWNvbG9ycy5zZXJ2aWNlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbnRhaW5lci9jb2xvci13aWRnZXQvY29sb3Itd2lkZ2V0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb21wb25lbnRzL3NlYXJjaC1jb2xvcmRyb3Avc2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29tcG9uZW50cy9jb2xvci1saXN0L2NvbG9yLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2hlbHBlcnMudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29sb3JwaWNrZXIvZm9ybWF0cy50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWFycmF5LXJldmVyc2UudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWNvbG9ycy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1Db2xvcnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcywgUExBVEZPUk1fSUQsIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtYmxlci1jb2xvci13aWRnZXRdJyxcbiAgdGVtcGxhdGU6IGAgPCEtLS8vIFJHQkEtLT5cbiAgPHNwYW5cbiAgICBbY29sb3JUb2dnbGVdPVwiY29sb3JEcm9wRW5hYmxlZFwiXG4gICAgW2NwV2lkdGhdPVwib3ZlcmxheVdpZHRoXCJcbiAgICBbY3BBbHBoYUNoYW5uZWxdPVwiJ2Fsd2F5cydcIlxuICAgIFtjcFByZXNldENvbG9yc109XCJjb2xvclBhbGxldGVcIlxuICAgIFtjcEFkZENvbG9yQnV0dG9uXT1cInRydWVcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImxhc3RDb2xvclwiXG4gICAgW2NwVG9nZ2xlXT1cInRydWVcIlxuICAgIFtjcERpYWxvZ0Rpc3BsYXldPVwiJ2lubGluZSdcIlxuICAgIFtjcENhbmNlbEJ1dHRvbl09XCJmYWxzZVwiXG4gICAgW2NwQ2FuY2VsQnV0dG9uQ2xhc3NdPSBcIididG4gYnRuLXByaW1hcnkgYnRuLXhzJ1wiXG4gICAgWyhjb2xvclBpY2tlcildPVwibGFzdENvbG9yXCJcbiAgICAoY3BQcmVzZXRDb2xvcnNDaGFuZ2UpPVwidXBkYXRlZENvbG9yUHJlc2V0KCRldmVudClcIlxuICA+XG4gIDwvc3Bhbj5cblxuYFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvcldpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcbiAgQElucHV0KCkgY29sb3JEcm9wRW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgb3ZlcmxheVdpZHRoO1xuICBwdWJsaWMgY29sb3JQYWxsZXRlO1xuICBwdWJsaWMgbGFzdENvbG9yO1xuXG4gIEBJbnB1dCgndXNlckNvbG9yc1BhbGxldGUnKVxuICBzZXQgdXNlckNvbG9yc1BhbGxldGUoY29sb3JsaXN0OiBhbnkpIHtcbiAgICB0aGlzLmNvbG9yUGFsbGV0ZSA9IGNvbG9ybGlzdFxuICAgIGlmKGNvbG9ybGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubGFzdENvbG9yID0gJyNmZmZmZmYnO1xuICAgIH1cbiAgICBpZihjb2xvcmxpc3QubGVuZ3RoICE9PSAwKXtcbiAgICAgIHRoaXMubGFzdENvbG9yID0gY29sb3JsaXN0WyBjb2xvcmxpc3QubGVuZ3RoIC0gMSBdO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvciggQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnkpIHsgfVxuXG4gIEBPdXRwdXQoKVxuICB1cGRhdGVDb2xvclByZXNldDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgdXBkYXRlZENvbG9yUHJlc2V0KGV2ZW50OiBBcnJheTxhbnk+KXtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudClcbiAgICB0aGlzLnVwZGF0ZUNvbG9yUHJlc2V0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmNvbG9yRHJvcEVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jb2xvckRyb3BFbmFibGVkID0gY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtYmxlci1zZWFyY2gtY29sb3Jkcm9wJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImlucHV0LXN1Zml4XCI+XG4gICAgICAgPGlucHV0XG4gICAgICAgICBjbGFzcz1cInNlbS1pbnB1dFwiXG4gICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICBbbmdNb2RlbF09XCJjb2xvclwiXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCJcbiAgICAgICAgIFt2YWx1ZV09J2NvbG9yJ1xuICAgICAgICAgI2NvbG9yVmFsdWVcbiAgICAgICAvPlxuICAgICAgPHNwYW5cbiAgICAgIChjbGljayk9XCJhZGRDb2xvcihjb2xvclZhbHVlKVwiXG4gICAgICBjbGFzcz1cInNlbS1pY29uLXNlYXJjaCBzdWZpeFwiPlxuICAgICAgPC9zcGFuPlxuPC9zcGFuPlxuXG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnc2VsZWN0ZWQnKVxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdjb2xvcicsIHZhbHVlKTtcbiAgICB0aGlzLmNvbG9yID0gdmFsdWUuY29sb3I7XG4gIH1cbiAgQE91dHB1dCgpIHNhdmVDb2xvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZVNlbGVjdGVkQ29sb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkQ29sb3IoY29sb3I6IGFueSkge1xuICAgIGNvbnN0IHNldENvbG9yOiBhbnkgPSB7XG4gICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgY29sb3I6IGNvbG9yLnZhbHVlXG4gICAgfTtcbiAgICB0aGlzLnNhdmVDb2xvci5lbWl0KHNldENvbG9yKTtcbiAgfVxuICBjaGFuZ2VDb2xvcihldmVudDogYW55KSB7XG4gICAgY29uc3QgY29sb3IgPSB7dHlwZTogJ2NvbG9yJywgY29sb3I6IGV2ZW50fTtcbiAgICB0aGlzLmNoYW5nZVNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIH1cbiAgbmdPbkluaXQoKSB7fVxuXG4gIC8vIChrZXlwcmVzcyk9XCJrZXlQcmVzc0NoYW5nZUNvbG9yKCRldmVudClcIlxuICAvLyBrZXlQcmVzc0NoYW5nZUNvbG9yKGV2ZW50OiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnZXZlbnQxMjMnLCBldmVudC50YXJnZXQudmFsdWUpXG4gIC8vICAgY29uc3QgY29sb3IgPSB7dHlwZTogJ2NvbG9yJywgY29sb3I6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgLy8gICB0aGlzLmNoYW5nZVNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIC8vIH1cblxuICAvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuU2V0Q29sb3JzKGV2ZW50KSk7XG4gIC8vIHRoaXMuX2NvbG9yU2VydmljZS5jb2xvckNoYWdlZChldmVudClcbiAgLy8gcHVibGljIHNlbGVjdGVkQ29sb3I6IGFueTtcbiAgLy8gQE91dHB1dCgpXG4gIC8vIHNhdmVDb2xvcnM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHRoaXMuc2VsZWN0ZWRDb2xvciA9ICcjMDAwMDAwJztcblxufVxuXG5cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtYmxlci1jb2xvci1saXN0JyxcbiAgdGVtcGxhdGU6IGA8IS0tPHVsPi0tPlxuIDwhLS08bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29sb3JMaXN0IFwiPi0tPlxuICAgIDwhLS08ZGl2LS0+XG4gICAgICA8IS0tY2xhc3M9XCJjb2xvci1kcm9wXCItLT5cblxuXG4gICAgICA8IS0tW3N0eWxlLmJhY2tncm91bmRdPVwiaXRlbS5jb2xvclwiLS0+XG5cbiAgICAgIDwhLS1kbmQtZHJhZ2dhYmxlLS0+XG4gICAgICA8IS0tW2RyYWdFbmFibGVkXT1cInRydWVcIi0tPlxuICAgICAgPCEtLVtkcmFnRGF0YV09XCJpdGVtXCItLT5cbiAgICAgIDwhLS0ob25EcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoaXRlbSlcIi0tPlxuICAgICAgPCEtLVtkcm9wWm9uZXNdPVwiWyd3aWRnZXQtZHJvcFpvbmUnXVwiLS0+XG5cbiAgICAgPCEtLSZndDstLT5cbiAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJidG4tdGl0bGVcIj4tLT5cbiAgICAgICAgPCEtLXt7aXRlbS5jb2xvcn19LS0+XG4gICAgICAgPCEtLTwvc3Bhbj4tLT5cbiAgICAgPCEtLTwvZGl2Pi0tPlxuICA8IS0tPC9saT4tLT5cbjwhLS08L3VsPi0tPlxuXG48IS0tW3N0eWxlLmNvbG9yXT1cIml0ZW0uY29sb3JcIi0tPlxuPCEtLWRuZC1kcmFnZ2FibGUtLT5cbjwhLS1bIGRyYWdFbmFibGVkXT1cInRydWVcIi0tPlxuPCEtLVtkcmFnRGF0YV09XCJjb2xvcmRyb3BcIi0tPlxuPCEtLVtkcm9wWm9uZXNdPVwiWyd3aWRnZXQtZHJvcFpvbmUnLC0tPlxuPCEtLSdjYW52YXMtZHJvcFpvbmUnLC0tPlxuPCEtLSdyb3dXcmFwcGVyLWRyb3Bab25lJywtLT5cbjwhLS0ncm93LWRyb3Bab25lJywtLT5cbjwhLS0nY29sdW1uLWRyb3Bab25lJywtLT5cbjwhLS0nd2lkZ2V0LWRyb3Bab25lJyBdXCItLT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvckxpc3RDb21wb25lbnQge1xuICBASW5wdXQoJ2NvbG9ycycpXG4gIHNldCBzZWxlY3RlZChjb2xvcnM6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLmNvbG9yTGlzdCA9IGNvbG9ycztcbiAgfVxuICBjb2xvckxpc3Q6IEFycmF5PGFueT4gPSBbe31dO1xuXG4gIHByaXZhdGUgc2VsZWN0ZWRDb2xvcjogYW55O1xuICBwcml2YXRlIGNvbXBvbmVudERhdGE6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgb25EcmFnU3RhcnRDb2xvckRyb3Aoc2VsZWN0ZWRDb2xvcjogYW55KSB7XG4gICAgLy8gdGhpcy5fY29sb3JTZXJ2aWNlLnB1Ymxpc2hEYXRhKHNlbGVjdGVkQ29sb3IpO1xuICB9XG4gIGxvYWRDb2xvcldpZGdldCgpIHtcbiAgICAvLyB0aGlzLmNvbXBvbmVudERhdGEgPSB7IGNvbXBvbmVudDogQ29sb3JTZWxlY3RvckNvbXBvbmVudCwgaW5wdXRzOiB7IHNob3dOdW06IDAgfX1cbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGNvbG9yZHJvcCl7XG4gICAgIGNvbnNvbGUubG9nKCdzdGFydGVkIGluIGNvbG9yIHNlbGVjdG9yIGNvbXBvbmVudCcsIGNvbG9yZHJvcClcbiAgIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0SUUoKTogYm9vbGVhbiB8IG51bWJlciB7XG4gIGxldCB1YSA9ICcnO1xuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ21zaWUgJyk7XG5cbiAgaWYgKG1zaWUgPiAwKSB7XG4gICAgLy8gSUUgMTAgb3Igb2xkZXIgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgcmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhtc2llICsgNSwgdWEuaW5kZXhPZignLicsIG1zaWUpKSwgMTApO1xuICB9XG5cbiAgLy8gT3RoZXIgYnJvd3NlclxuICByZXR1cm4gZmFsc2U7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZXh0XSdcbn0pXG5leHBvcnQgY2xhc3MgVGV4dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHJnOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcblxuICBAT3V0cHV0KCkgbmV3VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIGlucHV0Q2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh0aGlzLnJnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG51bWVyaWMgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgICAgaWYgKCFpc05hTihudW1lcmljKSAmJiBudW1lcmljID49IDAgJiYgbnVtZXJpYyA8PSB0aGlzLnJnKSB7XG4gICAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IG51bWVyaWMsIHJnOiB0aGlzLnJnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2xpZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBsaXN0ZW5lck1vdmU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lclN0b3A6IGFueTtcblxuICBASW5wdXQoKSByZ1g6IG51bWJlcjtcbiAgQElucHV0KCkgcmdZOiBudW1iZXI7XG5cbiAgQElucHV0KCkgc2xpZGVyOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIG5ld1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSkgbW91c2VEb3duKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0KGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKSB0b3VjaFN0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0KGV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmxpc3RlbmVyTW92ZSA9IChldmVudDogYW55KSA9PiB0aGlzLm1vdmUoZXZlbnQpO1xuXG4gICAgdGhpcy5saXN0ZW5lclN0b3AgPSAoKSA9PiB0aGlzLnN0b3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZShldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0Q3Vyc29yKGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q3Vyc29yKGV2ZW50KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmxpc3RlbmVyU3RvcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmxpc3RlbmVyU3RvcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcblxuICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcCgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG5cbiAgICB0aGlzLmRyYWdFbmQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRYKGV2ZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgcGFnZVggPSAoZXZlbnQucGFnZVggIT09IHVuZGVmaW5lZCkgPyBldmVudC5wYWdlWCA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG5cbiAgICByZXR1cm4gcGFnZVggLSBwb3NpdGlvbi5sZWZ0IC0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRZKGV2ZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgcGFnZVkgPSAoZXZlbnQucGFnZVkgIT09IHVuZGVmaW5lZCkgPyBldmVudC5wYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICByZXR1cm4gcGFnZVkgLSBwb3NpdGlvbi50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIH1cblxuICBwcml2YXRlIHNldEN1cnNvcihldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldFgoZXZlbnQpLCB3aWR0aCkpO1xuICAgIGNvbnN0IHkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldFkoZXZlbnQpLCBoZWlnaHQpKTtcblxuICAgIGlmICh0aGlzLnJnWCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmdZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHM6IHggLyB3aWR0aCwgdjogKDEgLSB5IC8gaGVpZ2h0KSwgcmdYOiB0aGlzLnJnWCwgcmdZOiB0aGlzLnJnWSB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmdYID09PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogeSAvIGhlaWdodCwgcmdZOiB0aGlzLnJnWSB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmdYICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogeCAvIHdpZHRoLCByZ1g6IHRoaXMucmdYIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgdjogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyRGltZW5zaW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIHY6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cbiIsImV4cG9ydCBjbGFzcyBDbXlrIHtcbiAgY29uc3RydWN0b3IocHVibGljIGM6IG51bWJlciwgcHVibGljIG06IG51bWJlciwgcHVibGljIHk6IG51bWJlciwgcHVibGljIGs6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIEhzbGEge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgbDogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgSHN2YSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBzOiBudW1iZXIsIHB1YmxpYyB2OiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZ2JhIHtcbiAgY29uc3RydWN0b3IocHVibGljIHI6IG51bWJlciwgcHVibGljIGc6IG51bWJlciwgcHVibGljIGI6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENteWssIFJnYmEsIEhzbGEsIEhzdmEgfSBmcm9tICcuL2Zvcm1hdHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgc2V0QWN0aXZlKGFjdGl2ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlICYmIHRoaXMuYWN0aXZlICE9PSBhY3RpdmUgJiYgdGhpcy5hY3RpdmUuY3BEaWFsb2dEaXNwbGF5ICE9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5hY3RpdmUuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgcHVibGljIGhzdmEyaHNsYShoc3ZhOiBIc3ZhKTogSHNsYSB7XG4gICAgY29uc3QgaCA9IGhzdmEuaCwgcyA9IGhzdmEucywgdiA9IGhzdmEudiwgYSA9IGhzdmEuYTtcblxuICAgIGlmICh2ID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEhzbGEoaCwgMCwgMCwgYSk7XG4gICAgfSBlbHNlIGlmIChzID09PSAwICYmIHYgPT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgSHNsYShoLCAxLCAxLCBhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbCA9IHYgKiAoMiAtIHMpIC8gMjtcblxuICAgICAgcmV0dXJuIG5ldyBIc2xhKGgsIHYgKiBzIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSwgbCwgYSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhzbGEyaHN2YShoc2xhOiBIc2xhKTogSHN2YSB7XG4gICAgY29uc3QgaCA9IE1hdGgubWluKGhzbGEuaCwgMSksIHMgPSBNYXRoLm1pbihoc2xhLnMsIDEpO1xuICAgIGNvbnN0IGwgPSBNYXRoLm1pbihoc2xhLmwsIDEpLCBhID0gTWF0aC5taW4oaHNsYS5hLCAxKTtcblxuICAgIGlmIChsID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEhzdmEoaCwgMCwgMCwgYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHYgPSBsICsgcyAqICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSkgLyAyO1xuXG4gICAgICByZXR1cm4gbmV3IEhzdmEoaCwgMiAqICh2IC0gbCkgLyB2LCB2LCBhKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaHN2YVRvUmdiYShoc3ZhOiBIc3ZhKTogUmdiYSB7XG4gICAgbGV0IHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXI7XG5cbiAgICBjb25zdCBoID0gaHN2YS5oLCBzID0gaHN2YS5zLCB2ID0gaHN2YS52LCBhID0gaHN2YS5hO1xuXG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoaCAqIDYpO1xuICAgIGNvbnN0IGYgPSBoICogNiAtIGk7XG4gICAgY29uc3QgcCA9IHYgKiAoMSAtIHMpO1xuICAgIGNvbnN0IHEgPSB2ICogKDEgLSBmICogcyk7XG4gICAgY29uc3QgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcblxuICAgIHN3aXRjaCAoaSAlIDYpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgciA9IHYsIGcgPSB0LCBiID0gcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHIgPSBxLCBnID0gdiwgYiA9IHA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByID0gcCwgZyA9IHYsIGIgPSB0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgciA9IHAsIGcgPSBxLCBiID0gdjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHIgPSB0LCBnID0gcCwgYiA9IHY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByID0gdiwgZyA9IHAsIGIgPSBxO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJnYmEociwgZywgYiwgYSk7XG4gIH1cblxuICBwdWJsaWMgcmdiYVRvQ215ayhyZ2JhOiBSZ2JhKTogQ215ayB7XG4gICAgY29uc3QgazogbnVtYmVyID0gMSAtIE1hdGgubWF4KHJnYmEuciwgcmdiYS5nLCByZ2JhLmIpO1xuXG4gICAgaWYgKGsgPT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgQ215aygwLCAwLCAwLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYyA9ICgxIC0gcmdiYS5yIC0gaykgLyAoMSAtIGspO1xuICAgICAgY29uc3QgbSA9ICgxIC0gcmdiYS5nIC0gaykgLyAoMSAtIGspO1xuICAgICAgY29uc3QgeSA9ICgxIC0gcmdiYS5iIC0gaykgLyAoMSAtIGspO1xuXG4gICAgICByZXR1cm4gbmV3IENteWsoYywgbSwgeSwgayk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJnYmFUb0hzdmEocmdiYTogUmdiYSk6IEhzdmEge1xuICAgIGxldCBoOiBudW1iZXIsIHM6IG51bWJlcjtcblxuICAgIGNvbnN0IHIgPSBNYXRoLm1pbihyZ2JhLnIsIDEpLCBnID0gTWF0aC5taW4ocmdiYS5nLCAxKTtcbiAgICBjb25zdCBiID0gTWF0aC5taW4ocmdiYS5iLCAxKSwgYSA9IE1hdGgubWluKHJnYmEuYSwgMSk7XG5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKSwgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cbiAgICBjb25zdCB2OiBudW1iZXIgPSBtYXgsIGQgPSBtYXggLSBtaW47XG5cbiAgICBzID0gKG1heCA9PT0gMCkgPyAwIDogZCAvIG1heDtcblxuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgaCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICAgIGNhc2UgcjpcbiAgICAgICAgICBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZzpcbiAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGI6XG4gICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaCAvPSA2O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgSHN2YShoLCBzLCB2LCBhKTtcbiAgfVxuXG4gIHB1YmxpYyByZ2JhVG9IZXgocmdiYTogUmdiYSwgYWxsb3dIZXg4PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgLyogdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSAqL1xuICAgIGxldCBoZXggPSAnIycgKyAoKDEgPDwgMjQpIHwgKHJnYmEuciA8PCAxNikgfCAocmdiYS5nIDw8IDgpIHwgcmdiYS5iKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuXG4gICAgaWYgKGFsbG93SGV4OCkge1xuICAgICAgaGV4ICs9ICgoMSA8PCA4KSB8IE1hdGgucm91bmQocmdiYS5hICogMjU1KSkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgICB9XG4gICAgLyogdHNsaW50OmVuYWJsZTpuby1iaXR3aXNlICovXG5cbiAgICByZXR1cm4gaGV4O1xuICB9XG5cbiAgcHVibGljIGRlbm9ybWFsaXplUkdCQShyZ2JhOiBSZ2JhKTogUmdiYSB7XG4gICAgcmV0dXJuIG5ldyBSZ2JhKE1hdGgucm91bmQocmdiYS5yICogMjU1KSwgTWF0aC5yb3VuZChyZ2JhLmcgKiAyNTUpLCBNYXRoLnJvdW5kKHJnYmEuYiAqIDI1NSksIHJnYmEuYSk7XG4gIH1cblxuICBwdWJsaWMgc3RyaW5nVG9Ic3ZhKGNvbG9yU3RyaW5nOiBzdHJpbmcgPSAnJywgYWxsb3dIZXg4OiBib29sZWFuID0gZmFsc2UpOiBIc3ZhIHtcbiAgICBsZXQgaHN2YTogSHN2YSA9IG51bGw7XG5cbiAgICBjb2xvclN0cmluZyA9IChjb2xvclN0cmluZyB8fCAnJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGNvbnN0IHN0cmluZ1BhcnNlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIHJlOiAvKHJnYilhP1xcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyolPyxcXHMqKFxcZHsxLDN9KVxccyolPyg/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFxzKik/XFwpLyxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKGV4ZWNSZXN1bHQ6IGFueSkge1xuICAgICAgICAgIHJldHVybiBuZXcgUmdiYShwYXJzZUludChleGVjUmVzdWx0WzJdLCAxMCkgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdLCAxMCkgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzRdLCAxMCkgLyAyNTUsXG4gICAgICAgICAgICBpc05hTihwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKSA/IDEgOiBwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICByZTogLyhoc2wpYT9cXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqKD86LFxccyooXFxkKyg/OlxcLlxcZCspPylcXHMqKT9cXCkvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBIc2xhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDEwKSAvIDM2MCxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDEwKSAvIDEwMCxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbNF0sIDEwKSAvIDEwMCxcbiAgICAgICAgICAgIGlzTmFOKHBhcnNlRmxvYXQoZXhlY1Jlc3VsdFs1XSkpID8gMSA6IHBhcnNlRmxvYXQoZXhlY1Jlc3VsdFs1XSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGlmIChhbGxvd0hleDgpIHtcbiAgICAgIHN0cmluZ1BhcnNlcnMucHVzaCh7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSk/JC8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsxXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFs0XSB8fCAnRkYnLCAxNikgLyAyNTUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyaW5nUGFyc2Vycy5wdXNoKHtcbiAgICAgICAgcmU6IC8jKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pJC8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsxXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgMSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcmU6IC8jKFthLWZBLUYwLTldKShbYS1mQS1GMC05XSkoW2EtZkEtRjAtOV0pJC8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsxXSArIGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0gKyBleGVjUmVzdWx0WzJdLCAxNikgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdICsgZXhlY1Jlc3VsdFszXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0cmluZ1BhcnNlcnMpIHtcbiAgICAgIGlmIChzdHJpbmdQYXJzZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gc3RyaW5nUGFyc2Vyc1trZXldO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoID0gcGFyc2VyLnJlLmV4ZWMoY29sb3JTdHJpbmcpLCBjb2xvcjogYW55ID0gbWF0Y2ggJiYgcGFyc2VyLnBhcnNlKG1hdGNoKTtcblxuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICBpZiAoY29sb3IgaW5zdGFuY2VvZiBSZ2JhKSB7XG4gICAgICAgICAgICBoc3ZhID0gdGhpcy5yZ2JhVG9Ic3ZhKGNvbG9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbG9yIGluc3RhbmNlb2YgSHNsYSkge1xuICAgICAgICAgICAgaHN2YSA9IHRoaXMuaHNsYTJoc3ZhKGNvbG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaHN2YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoc3ZhO1xuICB9XG5cbiAgcHVibGljIG91dHB1dEZvcm1hdChoc3ZhOiBIc3ZhLCBvdXRwdXRGb3JtYXQ6IHN0cmluZywgYWxwaGFDaGFubmVsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAob3V0cHV0Rm9ybWF0KSB7XG4gICAgICBjYXNlICdoc2xhJzpcbiAgICAgICAgY29uc3QgaHNsYSA9IHRoaXMuaHN2YTJoc2xhKGhzdmEpO1xuXG4gICAgICAgIGNvbnN0IGhzbGFUZXh0ID0gbmV3IEhzbGEoTWF0aC5yb3VuZCgoaHNsYS5oKSAqIDM2MCksIE1hdGgucm91bmQoaHNsYS5zICogMTAwKSxcbiAgICAgICAgICBNYXRoLnJvdW5kKGhzbGEubCAqIDEwMCksIE1hdGgucm91bmQoaHNsYS5hICogMTAwKSAvIDEwMCk7XG5cbiAgICAgICAgaWYgKGhzdmEuYSA8IDEgfHwgYWxwaGFDaGFubmVsID09PSAnYWx3YXlzJykge1xuICAgICAgICAgIHJldHVybiAnaHNsYSgnICsgaHNsYVRleHQuaCArICcsJyArIGhzbGFUZXh0LnMgKyAnJSwnICsgaHNsYVRleHQubCArICclLCcgK1xuICAgICAgICAgICAgaHNsYVRleHQuYSArICcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2hzbCgnICsgaHNsYVRleHQuaCArICcsJyArIGhzbGFUZXh0LnMgKyAnJSwnICsgaHNsYVRleHQubCArICclKSc7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAncmdiYSc6XG4gICAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLmRlbm9ybWFsaXplUkdCQSh0aGlzLmhzdmFUb1JnYmEoaHN2YSkpO1xuXG4gICAgICAgIGlmIChoc3ZhLmEgPCAxIHx8IGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgICAgICByZXR1cm4gJ3JnYmEoJyArIHJnYmEuciArICcsJyArIHJnYmEuZyArICcsJyArIHJnYmEuYiArICcsJyArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKHJnYmEuYSAqIDEwMCkgLyAxMDAgKyAnKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJnYmEuciArICcsJyArIHJnYmEuZyArICcsJyArIHJnYmEuYiArICcpJztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBhbGxvd0hleDggPSAoYWxwaGFDaGFubmVsID09PSAnYWx3YXlzJyB8fCBhbHBoYUNoYW5uZWwgPT09ICdoZXg4Jyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmdiYVRvSGV4KHRoaXMuZGVub3JtYWxpemVSR0JBKHRoaXMuaHN2YVRvUmdiYShoc3ZhKSksIGFsbG93SGV4OCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgUExBVEZPUk1fSUQsIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRldGVjdElFIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IFJnYmEsIEhzbGEsIEhzdmEgfSBmcm9tICcuL2Zvcm1hdHMnO1xuaW1wb3J0IHsgU2xpZGVyUG9zaXRpb24sIFNsaWRlckRpbWVuc2lvbiB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY29sb3ItcGlja2VyXScsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICAjZGlhbG9nUG9wdXBcbiAgY2xhc3M9XCJjb2xvci1waWNrZXJcIlxuICBbc3R5bGUudmlzaWJpbGl0eV09XCJoaWRkZW4gfHwgIXNob3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiIFtzdHlsZS50b3AucHhdPVwidG9wXCJcbiAgW3N0eWxlLmxlZnQucHhdPVwibGVmdFwiXG4gIFtzdHlsZS5wb3NpdGlvbl09XCJwb3NpdGlvblwiXG4gIFtzdHlsZS5oZWlnaHQucHhdPVwiY3BIZWlnaHRcIlxuICBbc3R5bGUud2lkdGhdPVwiY29sb3JUb2dnbGUgPyAnMTAwJScgOiBjcFdpZHRoICsgJ3B4J1wiXG4+XG4gIDxkaXZcbiAgICAqbmdJZj1cIiFjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJjb2xvci1pbnB1dC1jb250YWluZXIgc2VtLWNvbG9yLWxpZ2h0LWlucHV0cyBwYjFcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgbXkxIHNlbS10eXBvLS1maWdjYXB0aW9uXCJcbiAgICAgICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgKGNsaWNrKT1cIm9uRm9ybWF0VG9nZ2xlKClcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2VsZi1zdGFydCBzZW0tLWxpbmsgXCI+Q2hhbmdlIGZvcm1hdDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dpdGNoLS1jb250cm9sLS1saW5rXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2ggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtcmVzZXQgc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIGZsZXgtYXV0b1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDIgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIzNjBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMzYwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5oXCIgKG5ld1ZhbHVlKT1cIm9uSHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5IPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LnNcIiAobmV3VmFsdWUpPVwib25TYXR1cmF0aW9uSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5TPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmxcIiAobmV3VmFsdWUpPVwib25MaWdodG5lc3NJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkw8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAxID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBjb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LnJcIiAobmV3VmFsdWUpPVwib25SZWRJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPlI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmdcIiAobmV3VmFsdWUpPVwib25HcmVlbklucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Rzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmJcIiAobmV3VmFsdWUpPVwib25CbHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5CPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIlxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwicmdiYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAwID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LXN1Zml4XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3ZhbHVlXT1cImhleFRleHRcIlxuICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSGV4SW5wdXQobnVsbClcIlxuICAgICAgICAgICAgICAgIChuZXdWYWx1ZSk9XCJvbkhleElucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZENvbG9yKClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWljb24tc2VhcmNoIHN1Zml4XCI+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkhleDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgICNodWVTbGlkZXJcbiAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgIGNsYXNzPVwiaHVlXCJcbiAgICBbc2xpZGVyXSBbcmdYXT1cIjFcIiAobmV3VmFsdWUpPVwib25IdWVDaGFuZ2UoJGV2ZW50KVwiIChkcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoJ2h1ZScpXCIgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdodWUnKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBbc3R5bGUubGVmdC5weF09XCJzbGlkZXIuaFwiPjwvZGl2PlxuXG4gIDwvZGl2PlxuXG4gIDxkaXZcbiAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgICpuZ0lmPVwiY3BEaWFsb2dEaXNwbGF5PT0ncG9wdXAnXCJcbiAgICBjbGFzcz1cImFycm93IGFycm93LXt7Y3BQb3NpdGlvbn19XCJcbiAgICBbc3R5bGUudG9wLnB4XT1cImFycm93VG9wXCI+PC9kaXY+XG5cbiAgPGRpdlxuICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgY2xhc3M9XCJzYXR1cmF0aW9uLWxpZ2h0bmVzc1wiXG4gICAgW3NsaWRlcl0gW3JnWF09XCIxXCIgW3JnWV09XCIxXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJodWVTbGlkZXJDb2xvclwiXG4gICAgKG5ld1ZhbHVlKT1cIm9uQ29sb3JDaGFuZ2UoJGV2ZW50KVwiXG4gICAgKGRyYWdTdGFydCk9XCJvbkRyYWdTdGFydCgnc2F0dXJhdGlvbi1saWdodG5lc3MnKVwiXG4gICAgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdzYXR1cmF0aW9uLWxpZ2h0bmVzcycpXCI+XG4gICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS50b3AucHhdPVwic2xpZGVyLnZcIiBbc3R5bGUubGVmdC5weF09XCJzbGlkZXIuc1wiPjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2XG4gICAgI2FscGhhU2xpZGVyXG4gICAgY2xhc3M9XCJhbHBoYVwiXG4gICAgW3NsaWRlcl1cbiAgICBbcmdYXT1cIjFcIlxuICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYWxwaGFTbGlkZXJDb2xvclwiXG4gICAgKG5ld1ZhbHVlKT1cIm9uQWxwaGFDaGFuZ2UoJGV2ZW50KVwiXG4gICAgKGRyYWdTdGFydCk9XCJvbkRyYWdTdGFydCgnYWxwaGEnKVwiXG4gICAgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdhbHBoYScpXCI+XG4gICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5hXCI+PC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS1Db2xvciBkcm9wcy0tPlxuICA8ZGl2XG4gICAgKm5nSWY9XCJjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJzZW0tY29sb3ItZHJvcHNcIj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjcFByZXNldENvbG9ycz8ubGVuZ3RoIHx8IGNwQWRkQ29sb3JCdXR0b25cIj5cbiAgICAgIDx1bCAqbmdJZj1cImNwUHJlc2V0Q29sb3JzPy5sZW5ndGhcIiBjbGFzcz1cInNlbS1jb2xvci1saXN0IHNlbS1saXN0LXJlc2V0XCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjcFByZXNldENvbG9ycyB8IHJldmVyc2VcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRDb2xvckZyb21TdHJpbmcoY29sb3IpXCJcbiAgICAgICAgICBjbGFzcz1cImJsb2NrXCJcbiAgICAgICAgICBkbmQtZHJhZ2dhYmxlXG4gICAgICAgICAgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAgICAgIFtkcmFnRGF0YV09XCJjb2xvclwiXG4gICAgICAgICAgKG9uRHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KGNvbG9yKVwiXG4gICAgICAgICAgW2Ryb3Bab25lc109XCJbJ3dpZGdldC1kcm9wWm9uZSddXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmlnaHQtYWxpZ24gYmxvY2tcIj4ge3tjb2xvcn19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJjb2xvci1kZWxldGUgc2VtLWljb24tY2xvc2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlUHJlc2V0Q29sb3IoJGV2ZW50LCBjb2xvcilcIj48L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdJZj1cIiFjcFByZXNldENvbG9ycz8ubGVuZ3RoICYmIGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICBjbGFzcz1cInt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzc319XG4gICAgICAgICAgXCI+e3tjcFByZXNldEVtcHR5TWVzc2FnZX19PC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG5cbiAgPGRpdlxuICAgICpuZ0lmPVwiIWNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cInNlbS1jb2xvci1zd2F0Y2hlc1wiPlxuICAgIDwhLS08ZGl2IGNsYXNzPVwic2VtLWNvbG9yLXN3YXRjaGVzX2N1cnJlbnRcIj48L2Rpdj4tLT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgbWVkaXVtXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInNlbGVjdGVkQ29sb3JcIlxuICAgICAgICBzZW11aS1idXR0b24tZG5kIHNlbS1pbXBvcnRhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJjcFByZXNldENvbG9ycyAmJiBjcFByZXNldENvbG9ycy5sZW5ndGggPj0gY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGhcIlxuICAgICAgICAoY2xpY2spPVwib25BZGRQcmVzZXRDb2xvcigkZXZlbnQsIHNlbGVjdGVkQ29sb3IpXCJcbiAgICAgID5cbiAgICAgICAgQWRkIENvbG9yXG4gICAgICA8L2J1dHRvbj5cblxuICAgIDxkaXZcbiAgICAgICpuZ0lmPVwiY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aCB8fCBjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgIGNsYXNzPVwic2VtLWNvbG9yLXN3YXRjaGVzX3ByZXNlbGVjdGVkXCI+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCIhY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aCAmJiBjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJ7e2NwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3N9fVxuICAgICAgICAgIFwiPlxuICAgICAgICB7e2NwUHJlc2V0RW1wdHlNZXNzYWdlfX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3BhblxuICAgICAgICAqbmdGb3I9XCJsZXQgY29sb3Igb2YgY3BQcmVzZXRDb2xvcnMgfCByZXZlcnNlXCJcbiAgICAgICAgY2xhc3M9XCJzZW0tYnV0dG9uLXJhaW4tZHJvcFwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIlxuICAgICAgICAoY2xpY2spPVwic2V0Q29sb3JGcm9tU3RyaW5nKGNvbG9yKVwiXG4gICAgICA+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVQcmVzZXRDb2xvcigkZXZlbnQsIGNvbG9yKVwiXG4gICAgICAgICAgICBjbGFzcz1cInNlbS1idXR0b24tY2lyY2xlIHNlbS1idXR0b24tZGVsZXRlIHNlbS1pY29uLWNsb3NlXCI+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgICpuZ0lmPVwiY29sb3JUb2dnbGVcIlxuICAgIGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyIGNvbG9yLWlucHV0LWNvbnRhaW5lciBzZW0tY29sb3ItbGlnaHQtaW5wdXRzXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIG1iMSBwdDEgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIlxuICAgICAgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiAoY2xpY2spPVwib25Gb3JtYXRUb2dnbGUoKVwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzZWxmLXN0YXJ0IHNlbS0tbGluayBcIj5DaGFuZ2UgZm9ybWF0PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2gtLWNvbnRyb2wtLWxpbmtcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VtLWNvbG9yLXN3aXRjaCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC1yZXNldCBzZW0tY29sb3Itc3dpdGNoLS1jb2xvcnMgZmxleC1hdXRvXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMiA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmQgcGIxXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIzNjBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMzYwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5oXCIgKG5ld1ZhbHVlKT1cIm9uSHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5IPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LnNcIiAobmV3VmFsdWUpPVwib25TYXR1cmF0aW9uSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5TPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmxcIiAobmV3VmFsdWUpPVwib25MaWdodG5lc3NJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkw8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAxID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBjb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LnJcIiAobmV3VmFsdWUpPVwib25SZWRJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPlI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmdcIiAobmV3VmFsdWUpPVwib25HcmVlbklucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Rzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmJcIiAobmV3VmFsdWUpPVwib25CbHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5CPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIlxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwicmdiYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAwID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncnBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0XSBbdmFsdWVdPVwiaGV4VGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkhleElucHV0KG51bGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZXdWYWx1ZSk9XCJvbkhleElucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW0tYnRuLWZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgY29ybmVyPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW11aS10aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbS1pbXBvcnRhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjcFByZXNldENvbG9ycyAmJiBjcFByZXNldENvbG9ycy5sZW5ndGggPj0gY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkUHJlc2V0Q29sb3IoJGV2ZW50LCBzZWxlY3RlZENvbG9yKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZW0taWNvbi1zZW5kIGJ1dHRvbi1zZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5IZXg8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS0gU1RBUlQgLS0+XG5cblxuXG5cbiA8IS0tIEVORCAtLT5cblxuICA8ZGl2ICpuZ0lmPVwiY3BPS0J1dHRvbiB8fCBjcENhbmNlbEJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uLWFyZWFcIj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiY3BDYW5jZWxCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ7e2NwQ2FuY2VsQnV0dG9uQ2xhc3N9fVwiIChjbGljayk9XCJvbkNhbmNlbENvbG9yKCRldmVudClcIj57e2NwQ2FuY2VsQnV0dG9uVGV4dH19PC9idXR0b24+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImNwT0tCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ7e2NwT0tCdXR0b25DbGFzc319XCIgKGNsaWNrKT1cIm9uQWNjZXB0Q29sb3IoJGV2ZW50KVwiPnt7Y3BPS0J1dHRvblRleHR9fTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYGJvZHl7bWFyZ2luOjA7Zm9udC1zaXplOjEwMCV9aHRtbHtib3gtc2l6aW5nOmJvcmRlci1ib3h9Kiw6YWZ0ZXIsOmJlZm9yZXtib3gtc2l6aW5nOmluaGVyaXR9W2NsYXNzKj1cIiBzZW0taWNvbi1cIl0sW2NsYXNzXj1zZW0taWNvbi1de2ZvbnQtZmFtaWx5OnNlbWJsZXItaWNvIWltcG9ydGFudDtzcGVhazpub25lO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7bGluZS1oZWlnaHQ6MTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZX0uc2VtLWljb24tZHJhZzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ2XCI7Y29sb3I6I2NjY30uc2VtLWljb24tcHJvZHVjdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEzXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tZm9ybTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJhXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tbG9jYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxNFwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWNoYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzVcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi10ZXh0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDVcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1sb2NhdGlvbjI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0N1wiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLUk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNlwifS5zZW0taWNvbi1TOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDdcIn0uc2VtLWljb24tVTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA4XCJ9LnNlbS1pY29uLUI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwOVwifS5zZW0taWNvbi1qdXN0aWZ5OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGNcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTBcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1taWRkbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxMVwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTJcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1jb2xvdXIyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGFcIn0uc2VtLWljb24tYnJ1c2g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwYlwifS5zZW0taWNvbi1mb2xkZXIyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGRcIn0uc2VtLWljb24tbG9nb3V0MjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBlXCJ9LnNlbS1pY29uLW9sMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBmXCI7Y29sb3I6I2NjY30uc2VtLWljb24tc2VuZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA1XCI7Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tcmVwZWF0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDBcIn0uc2VtLWljb24tY3JvcDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAxXCJ9LnNlbS1pY29uLWNhc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwMlwifS5zZW0taWNvbi1yZXNpemU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwM1wifS5zZW0taWNvbi1jaGVjazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA0XCJ9LnNlbS1pY29uLW9sOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTVcIjtjb2xvcjojY2NjfS5zZW0taWNvbi11bDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE2XCI7Y29sb3I6I2NjY30uc2VtLWljb24tZm9sZGVyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTdcIn0uc2VtLWljb24tY2xvc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxOFwifS5zZW0taWNvbi1pbmJveDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE5XCJ9LnNlbS1pY29uLWhvbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxYVwifS5zZW0taWNvbi1zaGFyZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFiXCJ9LnNlbS1pY29uLWhhbWJ1cmdlcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFjXCJ9LnNlbS1pY29uLWxvY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxZFwifS5zZW0taWNvbi11bmxvY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxZVwifS5zZW0taWNvbi1lbGxpcHNlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWZcIn0uc2VtLWljb24tdm9sdW1lOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjBcIn0uc2VtLWljb24tcGxheTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIxXCJ9LnNlbS1pY29uLXZpZGVvOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjJcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1kZXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyM1wifS5zZW0taWNvbi1hZGRyZXNzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjRcIn0uc2VtLWljb24tY2VudGVyX2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjVcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1qdXN0aWZ5MjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI2XCI7Y29sb3I6I2NjY30uc2VtLWljb24tcmlnaHRfYWxpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyN1wiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWxlZnRfYWxpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyOFwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWNhcm91c2VsOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjlcIn0uc2VtLWljb24taW1hZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyYlwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWJhY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyY1wifS5zZW0taWNvbi1kZWxldGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyZFwiO2NvbG9yOiNkMDAyMWJ9LnNlbS1pY29uLWR1cGxpY2F0ZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJlXCJ9LnNlbS1pY29uLWxpbms6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyZlwifS5zZW0taWNvbi1zdHlsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMwXCJ9LnNlbS1pY29uLWNvbG91cjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMxXCJ9LnNlbS1pY29uLWFkZF9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzJcIjtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1hZGRfYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMzXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1zZW5kMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM0XCI7Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tc2VhcmNoOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzZcIn0uc2VtLWljb24tY29sb3VyX2FjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzN1wiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLWNvbG91cl9hY2NlbnQgLnBhdGgyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzhcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmZmZ9LnNlbS1pY29uLXByb2ZpbGUtYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM5XCI7Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tcHJvZmlsZS1hY2NlbnQgLnBhdGgyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2FcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmZmZ9LnNlbS1pY29uLWRvd25fYXJyb3c6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzYlwifS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzY1wiO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNkXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDM6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzZVwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGg0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2ZcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLWxvZ291dDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQwXCJ9LnNlbS1pY29uLXBheW1lbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MVwifS5zZW0taWNvbi1zZXR0aW5nczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQyXCJ9LnNlbS1pY29uLXNpdGVzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDNcIn0uc2VtLWljb24tcHJvZmlsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ0XCJ9LnNlbS1saXN0LXJlc2V0e2xpc3Qtc3R5bGU6bm9uZTtwYWRkaW5nLWxlZnQ6MDttYXJnaW46MH0uc2VtLS1jb3JuZXIgLl90b3B7Ym9yZGVyLXJhZGl1czo1MCUgMCA1MCUgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtdWktZm9ybS1zZWxlY3Qgc2VsZWN0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1sZWZ0OjEwJTt3aWR0aDo4MCU7bWFyZ2luLXJpZ2h0OjEwJTtib3JkZXI6MXB4IHNvbGlkICNkOGNmY2Y7Ym9yZGVyLXJhZGl1czoxMHB4O2ZvbnQtc2l6ZToxLjhlbTtjb2xvcjojZDhjZmNmO2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjB9aW5wdXQuc2VtLWlucHV0e3dpZHRoOmNhbGMoMTAwJSk7b3V0bGluZTowO2JvcmRlci1yYWRpdXM6MTBweCAxMHB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2JvcmRlcjoxcHggc29saWQgIzk0OThhM30ubm8tcGFkZGluZy1saXN0IC5zZW0tdWwgLnNlbS1saSwubm8tcGFkZGluZy1saXN0IC5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGl7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGl7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7cGFkZGluZy10b3A6LjQ1cmVtO3BhZGRpbmctYm90dG9tOi40NXJlbTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZX0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLmFjdGl2ZSBpbWcuaWNvbi1kZWZhdWx0e2Rpc3BsYXk6bm9uZX0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLmFjdGl2ZSBpbWcuaWNvbi1ob3ZlcntkaXNwbGF5OmlubGluZS1ibG9ja30uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpIGltZ3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7bWFyZ2luLWJvdHRvbTo0cHh9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saSBpbWcuaWNvbi1ob3ZlcntkaXNwbGF5Om5vbmV9LnNlbS11bHtsaXN0LXN0eWxlOm5vbmU7d2lkdGg6MTAwJTttYXJnaW46MCBhdXRvO3BhZGRpbmc6MH0uc2VtLXVsIC5zZW0tbGl7cGFkZGluZy10b3A6LjQ1cmVtO3BhZGRpbmctYm90dG9tOi40NXJlbTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjfS5zZW0tdWwgLnNlbS1saTpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS11bCAuc2VtLWxpLmFjdGl2ZXtib3JkZXItcmFkaXVzOjdweCAwIDAgN3B4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH11bC5jb3JuZXJfYWxsIGxpOmZpcnN0LWNoaWxke2JvcmRlci1yYWRpdXM6NnB4IDZweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fXVsLmNvcm5lcl9hbGwgbGk6bGFzdC1jaGlsZHtib3JkZXItcmFkaXVzOjAgMCAxMXB4IDExcHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfdG9we2JvcmRlci1yYWRpdXM6NnB4IDZweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfYm90dG9te2JvcmRlci1yYWRpdXM6MCAwIDZweCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfbm9uZXtib3JkZXItcmFkaXVzOjA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfYWxse2JvcmRlci1yYWRpdXM6NnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3JpZ2h0e2JvcmRlci1yYWRpdXM6NnB4IDAgMCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfbGVmdHtib3JkZXItcmFkaXVzOjAgNnB4IDZweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3RvcC1sZWZ0e2JvcmRlci1yYWRpdXM6MCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3RvcC1yaWdodHtib3JkZXItcmFkaXVzOjZweCAwIDZweCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfYm90dG9tLWxlZnQsLmNvcm5lcl9ib3R0b20tcmlnaHR7Ym9yZGVyLXJhZGl1czo2cHggNnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLC5zZW0tY29sb3JsaXN0LS1jb250YWluZXIsLnNlbS1zaGFkb3csLnNpZGViYXItY29udGFpbmVye2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwwLDAsLjEyKSwwIDFweCAycHggcmdiYSgwLDAsMCwuMjQpfS5kaWFsb2ctY29udGFpbmVyOmhvdmVyLC5zZW0tY29sb3JsaXN0LS1jb250YWluZXI6aG92ZXIsLnNlbS1zaGFkb3c6aG92ZXIsLnNpZGViYXItY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxNHB4IDI4cHggcmdiYSgwLDAsMCwuMjUpLDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsLjIyKX0uc2VtLWJ1dHRvbi1kbmR7aGVpZ2h0OjcwcHg7d2lkdGg6NzBweDttYXJnaW46NXB4O2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uc2VtLWJ1dHRvbi1kbmQtLW1lZGl1bXtoZWlnaHQ6NTBweDt3aWR0aDo1MHB4fS5zZW0tYnV0dG9uLWRuZC0tc21hbGx7aGVpZ2h0OjMwcHg7d2lkdGg6MzBweH0uc2VtLWJ0bi1mYWJ7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjpub25lfS5zZW0tYnRuLWZhYjpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS1idG4tZmFiIGltZ3t3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2Rpc3BsYXk6YmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zZW0tYnRuLWZhYi0tZGVmYXVsdD5zcGFue2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0uc2VtLWJ0bi1mYWItLWRlZmF1bHRfc21hbGx7cGFkZGluZzouNHJlbX0uc2VtLWJ0bi1mYWItLWRlZmF1bHRfc21hbGw+c3BhbntkaXNwbGF5OmJsb2NrfS5zZW0tYnRuLWZhYi0tcHJpbWFyeT5zcGFuLC5zZW0tYnRuLWZhYi0tc2Vjb25kYXJ5PnNwYW57ZGlzcGxheTpibG9jazt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5zZW0tYnRuLWZhYi0tY29ybmVyX25vbmV7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX3JpZ2h0e2JvcmRlci1yYWRpdXM6NTAlIDAgMCA1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX2xlZnR7Ym9yZGVyLXJhZGl1czowIDUwJSA1MCUgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1idG4tZmFiLS1jb3JuZXJfdG9wLWxlZnR7Ym9yZGVyLXJhZGl1czowIDUwJSA1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX3RvcC1yaWdodHtib3JkZXItcmFkaXVzOjUwJSAwIDUwJSA1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX2JvdHRvbS1sZWZ0LC5zZW0tYnRuLWZhYi0tY29ybmVyX2JvdHRvbS1yaWdodHtib3JkZXItcmFkaXVzOjUwJSA1MCUgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbHtib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmV5O3BhZGRpbmctYm90dG9tOjJweH0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpLmFjdGl2ZSBidXR0b246bm90KFtkaXNhYmxlZF0pOjphZnRlciwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpOmhvdmVyIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6OmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b257Ym9yZGVyOm5vbmU7b3V0bGluZTowO2JveC1zaGFkb3c6bm9uZTtwYWRkaW5nOi4zNWVtIC43NWVtO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtib3R0b206LTFweH0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVye2JvcmRlcjpub25lO29wYWNpdHk6MX0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVye2NvbnRlbnQ6XCJcIjtoZWlnaHQ6M3B4O3dpZHRoOjEwMCU7Ym90dG9tOi0xcHg7dHJhbnNpdGlvbjphbGwgMjUwbXMgZWFzZSAwczstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9dWwuc2VtdWktdGFicy1saXN0LnRhYnMtdmVydGljYWx7bWFyZ2luOjB9QGZvbnQtZmFjZXtmb250LWZhbWlseTpzZW1ibGVyLWljbztzcmM6dXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci5lb3Q/OWlrNDJsKTtzcmM6dXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci5lb3Q/OWlrNDJsI2llZml4KSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSx1cmwoL2Fzc2V0cy9mb250cy9zZW1ibGVyLnR0Zj85aWs0MmwpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIud29mZj85aWs0MmwpIGZvcm1hdChcIndvZmZcIiksdXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci5zdmc/OWlrNDJsI2ljb21vb24pIGZvcm1hdChcInN2Z1wiKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9LnNlbS1idXR0b257Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czoxMnB4IDEycHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1idXR0b246bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tYnV0dG9uLS1zZWNvbmRhcnl7Ym9yZGVyOjFweCBzb2xpZCAjYTlhOWE5O2JvcmRlci1yYWRpdXM6MTJweCAxMnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnV0dG9uLS1zbWFsbHtwYWRkaW5nOjZweCAxMXB4O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9LnNlbS1idXR0b24tLWxhcmdle2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9LnNlbS1idXR0b24tLWZ1bGx7d2lkdGg6MTAwJX0uc2VtLWJ1dHRvbi0tYmxvY2t7ZGlzcGxheTpibG9jaztwYWRkaW5nOi40ZW19LnNlbS1idXR0b24tLWxpbmssLnNlbS1idXR0b24tLWxpbmtfcHJpbWFyeXtib3JkZXI6MCBzb2xpZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2JvcmRlci1yYWRpdXM6MH0uc2VtLWJ1dHRvbi1jaXJjbGV7Ym9yZGVyLXJhZGl1czo1MCU7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZmZmO2ZvbnQtd2VpZ2h0OjcwMH0uc2VtLWJ1dHRvbi1jaXJjbGU6YmVmb3Jle3BhZGRpbmc6MCAwIDAgMXB4fS5zZW0tYnV0dG9uLWRlbGV0ZXtjb2xvcjojZmZmO2ZvbnQtc2l6ZTo2cHg7cGFkZGluZzouM3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiNkMDAyMWI7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc2VtLWRuZC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCV9LnNlbS1kbmQtY29udGFpbmVyLS1kbmQtbmF2e2hlaWdodDo3MHB4O3dpZHRoOjcwcHg7bWFyZ2luOjVweDtib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9LnNlbS1kbmQtY29udGFpbmVyLS1uYXZ7ei1pbmRleDoxO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjB9LmJ1bGxldC1pbmxpbmVsaXN0IGxpe3ZlcnRpY2FsLWFsaWduOnRvcDttYXJnaW46MCAtMnB4fS5idWxsZXQtaW5saW5lbGlzdCBsaSAuc2VsZWN0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MjJweH0uYnVsbGV0LWlubGluZWxpc3QgbGkgLnNlbGVjdCBzZWxlY3R7ZGlzcGxheTpub25lfS5idWxsZXQtaW5saW5lbGlzdCBsaS5hY3RpdmUgLnNlbGVjdCBzZWxlY3R7ZGlzcGxheTppbmxpbmV9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLmFjdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZWR9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOjpiZWZvcmV7Y29udGVudDonJzt0b3A6LTVweDtsZWZ0OjA7d2lkdGg6MTAwJTtib3JkZXItdG9wOjFweCBzb2xpZCAjMDAwfS5idWxsZXQtaW5saW5lbGlzdCBsaTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAyO2Rpc3BsYXk6YmxvY2s7dG9wOi05cHg7bGVmdDozOCU7d2lkdGg6OXB4O2hlaWdodDo5cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29udGVudDonJ30uYnVsbGV0LWlubGluZWxpc3QgbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZXtsZWZ0OjM4JX0uYnVsbGV0LWlubGluZWxpc3QgbGk6bGFzdC1jaGlsZDo6YmVmb3Jle2xlZnQ6LTQ0JX0uc2VtLWJ1dHRvbi1yYWluLWRyb3B7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjNweDtoZWlnaHQ6MjNweDttYXJnaW46NHB4IDZweCA4cHg7Y3Vyc29yOnBvaW50ZXJ9LnNlbS1idXR0b24tcmFpbi1kcm9wIC5zZW0tYnV0dG9uLWRlbGV0ZXtmb250LXNpemU6NnB4O3RvcDo2cHg7cmlnaHQ6LTlweH0uc2VtLWJ1dHRvbi1yYWluLWRyb3AsLnNlbS1yYWluLWRyb3B7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NTAlO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NTAlO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NTAlO2JveC1zaGFkb3c6aW5zZXQgMCAwIDEwcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zZW0tcGFnaW5hdGlvbi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zZW0tcGFnaW5hdGlvbi1uYXZ7bWF4LXdpZHRoOjMwMHB4fS5zZW0tcGFnaW5hdGlvbi1uYXY+ZGl2e2ZsZXg6MTt0ZXh0LWFsaWduOmNlbnRlcjstbW96LXVzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lfS5zZW0tcGFnaW5hdGlvbi1uZXh0IGEsLnNlbS1wYWdpbmF0aW9uLXByZXZpb3VzIGF7ZGlzcGxheTpibG9jaztsaW5lLWhlaWdodDoyNXB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc2VtLXBhZ2luYXRpb24tbmV4dCBhe3RleHQtYWxpZ246bGVmdH0uc2VtLXBhZ2luYXRpb24tcHJldmlvdXMgYXt0ZXh0LWFsaWduOnJpZ2h0fS5zZW0tcGFnaW5hdGlvbiBhe2hlaWdodDoyNXB4O3dpZHRoOjI1cHg7bGluZS1oZWlnaHQ6MjVweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNlbS1wYWdpbmF0aW9uLmFjdGl2ZSBkaXZ7Ym9yZGVyOm5vbmU7aGVpZ2h0OjI1cHg7d2lkdGg6MjVweDtsaW5lLWhlaWdodDoyNXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3JkZXItcmFkaXVzOjEycHggMTJweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLXBhZ2luYXRpb24uYWN0aXZlIGRpdjpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS1hdmF0YXJ7d2lkdGg6NDBweDtoZWlnaHQ6NDBweH0uc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmRpYWxvZy1jb250YWluZXJ7b3ZlcmZsb3c6YXV0bztib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcHtib3JkZXItcmFkaXVzOjA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2JveC1zaGFkb3c6bm9uZX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9wOmhvdmVye2JveC1zaGFkb3c6bm9uZX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9wIC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXJ7Ym9yZGVyLXJhZGl1czoxMnB4IDAgMCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9wIC5kaWFsb2ctY29udGFpbmVyLS1ib2R5e2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItZnVsbHtoZWlnaHQ6MTAwJTt6LWluZGV4OjJ9LmRpYWxvZy1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjAgMTJweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLS1ib2R5LC5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZHtib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVye2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1jb2xvcmxpc3R7b3ZlcmZsb3c6YXV0b30uc2VtLWNvbG9ybGlzdC0tY29udGFpbmVye2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1jb2xvcmxpc3QtLWxpc3R7bWluLWhlaWdodDoyMHB4fS5zZW0tY29sb3JsaXN0LS1saXN0LS1pbm5lcntkaXNwbGF5Om5vbmV9LnNlbS1jb2xvcmxpc3QtLWxpc3Q6aG92ZXIgLnNlbS1jb2xvcmxpc3QtLWxpc3QtLWlubmVye2Rpc3BsYXk6YmxvY2t9LnNlbS1jb2xvcmxpc3QtLWNsb3NlYnV0dG9ue2ZvbnQtc2l6ZToxMXB4fS5icm93c2VyLWNvbnRhaW5lcntoZWlnaHQ6Y2FsYygxMDAlIC0gMzBweCAtIDIwcHgpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjAgMjBweDtib3JkZXItcmFkaXVzOjEwcHh9LmJyb3dzZXItY29udGFpbmVyIC5sYXlvdXR7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGx9LmJyb3dzZXItY29udGFpbmVyOjpiZWZvcmV7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yMHB4O2xlZnQ6MTVweDt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2JvcmRlci1yYWRpdXM6NTAlfS5oMXtmb250LXNpemU6MnJlbX0uaDJ7Zm9udC1zaXplOjEuNXJlbX0uaDN7Zm9udC1zaXplOjEuMjVyZW19Lmg0e2ZvbnQtc2l6ZToxcmVtfS5oNXtmb250LXNpemU6Ljg3NXJlbX0uaDZ7Zm9udC1zaXplOi43NXJlbX0uZm9udC1mYW1pbHktaW5oZXJpdHtmb250LWZhbWlseTppbmhlcml0fS5mb250LXNpemUtaW5oZXJpdHtmb250LXNpemU6aW5oZXJpdH0udGV4dC1kZWNvcmF0aW9uLW5vbmV7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmJvbGR7Zm9udC13ZWlnaHQ6NzAwfS5yZWd1bGFye2ZvbnQtd2VpZ2h0OjQwMH0uaXRhbGlje2ZvbnQtc3R5bGU6aXRhbGljfS5jYXBze3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzouMmVtfS5sZWZ0LWFsaWdue3RleHQtYWxpZ246bGVmdH0uY2VudGVye3RleHQtYWxpZ246Y2VudGVyfS5yaWdodC1hbGlnbnt0ZXh0LWFsaWduOnJpZ2h0fS5qdXN0aWZ5e3RleHQtYWxpZ246anVzdGlmeX0ubm93cmFwe3doaXRlLXNwYWNlOm5vd3JhcH0uYnJlYWstd29yZHt3b3JkLXdyYXA6YnJlYWstd29yZH0ubGluZS1oZWlnaHQtMXtsaW5lLWhlaWdodDoxfS5saW5lLWhlaWdodC0ye2xpbmUtaGVpZ2h0OjEuMTI1fS5saW5lLWhlaWdodC0ze2xpbmUtaGVpZ2h0OjEuMjV9LmxpbmUtaGVpZ2h0LTR7bGluZS1oZWlnaHQ6MS41fS5saXN0LXN0eWxlLW5vbmV7bGlzdC1zdHlsZTpub25lfS51bmRlcmxpbmV7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0udHJ1bmNhdGV7bWF4LXdpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5saXN0LXJlc2V0e2xpc3Qtc3R5bGU6bm9uZTtwYWRkaW5nLWxlZnQ6MH0uaW5saW5le2Rpc3BsYXk6aW5saW5lfS5ibG9jaywuc2VtLWJ1dHRvbi1jaXJjbGUsLnNlbXVpLXRhYnMsZmlndXJlLnNlbXVpLXRodW1ibmFpbCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIC5maWdjYXB0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmJsb2NrfS5idWxsZXQtaW5saW5lbGlzdCBsaSwuaW5saW5lLWJsb2NrLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGksLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrfS50YWJsZXtkaXNwbGF5OnRhYmxlfS50YWJsZS1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbH0ub3ZlcmZsb3ctaGlkZGVue292ZXJmbG93OmhpZGRlbn0ub3ZlcmZsb3ctc2Nyb2xse292ZXJmbG93OnNjcm9sbH0ub3ZlcmZsb3ctYXV0b3tvdmVyZmxvdzphdXRvfS5jbGVhcmZpeDphZnRlciwuY2xlYXJmaXg6YmVmb3Jle2NvbnRlbnQ6XCIgXCI7ZGlzcGxheTp0YWJsZX0uY2xlYXJmaXg6YWZ0ZXJ7Y2xlYXI6Ym90aH0ubGVmdHtmbG9hdDpsZWZ0fS5yaWdodHtmbG9hdDpyaWdodH0uZml0LC5zZW0tYXZhdGFyIC5zZW0tYXZhdGFyX19pbWd7bWF4LXdpZHRoOjEwMCV9Lm1heC13aWR0aC0xe21heC13aWR0aDoyNHJlbX0ubWF4LXdpZHRoLTJ7bWF4LXdpZHRoOjMycmVtfS5tYXgtd2lkdGgtM3ttYXgtd2lkdGg6NDhyZW19Lm1heC13aWR0aC00e21heC13aWR0aDo2NHJlbX0uYm9yZGVyLWJveHtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmFsaWduLWJhc2VsaW5le3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfS5hbGlnbi10b3B7dmVydGljYWwtYWxpZ246dG9wfS5hbGlnbi1taWRkbGV7dmVydGljYWwtYWxpZ246bWlkZGxlfS5hbGlnbi1ib3R0b217dmVydGljYWwtYWxpZ246Ym90dG9tfS5tMCwuc2VtLWJ1dHRvbi0tbGluaywuc2VtLWJ1dHRvbi0tbGlua19wcmltYXJ5LC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbixmaWd1cmUsaDEsaDIsaDMsaDQsaDV7bWFyZ2luOjB9LmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2VkLC5kaWFsb2ctY29udGFpbmVyLS1mb290ZXIsLmRpYWxvZy1jb250YWluZXItLWhlYWRlciwubXQwLC5zaWRlYmFyLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLnNpZGViYXItY29udGFpbmVyLS1mb290ZXIsLnNpZGViYXItY29udGFpbmVyLS1oZWFkZXJ7bWFyZ2luLXRvcDowfS5tcjB7bWFyZ2luLXJpZ2h0OjB9Lm1iMHttYXJnaW4tYm90dG9tOjB9Lm1sMHttYXJnaW4tbGVmdDowfS5teDAsLnNlbS1wYWdpbmF0aW9uLW5hdnttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowfS5teTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0ubTF7bWFyZ2luOi41cmVtfS5tdDF7bWFyZ2luLXRvcDouNXJlbX0ubXIxe21hcmdpbi1yaWdodDouNXJlbX0ubWIxe21hcmdpbi1ib3R0b206LjVyZW19Lm1sMXttYXJnaW4tbGVmdDouNXJlbX0ubXgxLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9ue21hcmdpbi1sZWZ0Oi41cmVtO21hcmdpbi1yaWdodDouNXJlbX0ubXkxLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7bWFyZ2luLXRvcDouNXJlbTttYXJnaW4tYm90dG9tOi41cmVtfS5tMnttYXJnaW46MXJlbX0ubXQye21hcmdpbi10b3A6MXJlbX0ubXIye21hcmdpbi1yaWdodDoxcmVtfS5tYjJ7bWFyZ2luLWJvdHRvbToxcmVtfS5tbDJ7bWFyZ2luLWxlZnQ6MXJlbX0ubXgye21hcmdpbi1sZWZ0OjFyZW07bWFyZ2luLXJpZ2h0OjFyZW19Lm15MnttYXJnaW4tdG9wOjFyZW07bWFyZ2luLWJvdHRvbToxcmVtfS5tM3ttYXJnaW46MnJlbX0ubXQze21hcmdpbi10b3A6MnJlbX0ubXIze21hcmdpbi1yaWdodDoycmVtfS5tYjN7bWFyZ2luLWJvdHRvbToycmVtfS5tbDMsLnNlbS1jb2xvcmxpc3QtLWNvbnRhaW5lcnttYXJnaW4tbGVmdDoycmVtfS5teDN7bWFyZ2luLWxlZnQ6MnJlbTttYXJnaW4tcmlnaHQ6MnJlbX0ubXkze21hcmdpbi10b3A6MnJlbTttYXJnaW4tYm90dG9tOjJyZW19Lm00e21hcmdpbjo0cmVtfS5tdDR7bWFyZ2luLXRvcDo0cmVtfS5tcjR7bWFyZ2luLXJpZ2h0OjRyZW19Lm1iNHttYXJnaW4tYm90dG9tOjRyZW19Lm1sNHttYXJnaW4tbGVmdDo0cmVtfS5teDR7bWFyZ2luLWxlZnQ6NHJlbTttYXJnaW4tcmlnaHQ6NHJlbX0ubXk0e21hcmdpbi10b3A6NHJlbTttYXJnaW4tYm90dG9tOjRyZW19Lm14bjF7bWFyZ2luLWxlZnQ6LS41cmVtO21hcmdpbi1yaWdodDotLjVyZW19Lm14bjJ7bWFyZ2luLWxlZnQ6LTFyZW07bWFyZ2luLXJpZ2h0Oi0xcmVtfS5teG4ze21hcmdpbi1sZWZ0Oi0ycmVtO21hcmdpbi1yaWdodDotMnJlbX0ubXhuNHttYXJnaW4tbGVmdDotNHJlbTttYXJnaW4tcmlnaHQ6LTRyZW19Lm1sLWF1dG97bWFyZ2luLWxlZnQ6YXV0b30ubXItYXV0b3ttYXJnaW4tcmlnaHQ6YXV0b30ubXgtYXV0b3ttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvfS5icm93c2VyLWNvbnRhaW5lciwucDAsLnNlbS1idXR0b24tLWxpbmssLnNlbS1idXR0b24tLWxpbmtfcHJpbWFyeSxmaWd1cmUsaDEsaDIsaDMsaDQsaDV7cGFkZGluZzowfS5wdDB7cGFkZGluZy10b3A6MH0ucHIwe3BhZGRpbmctcmlnaHQ6MH0ucGIwe3BhZGRpbmctYm90dG9tOjB9LnBsMHtwYWRkaW5nLWxlZnQ6MH0ucHgwe3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MH0ucHkwLC5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkubm8tcGFkZGluZ3twYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9LmNvcm5lciwucDEsLnNlbS1idG4tZmFiLS1kZWZhdWx0LC5zZW0tYnRuLWZhYi0tcHJpbWFyeSwuc2VtLWJ0bi1mYWItLXNlY29uZGFyeSwuc2VtLWJ1dHRvbi0tbGFyZ2UsLnNlbS1jb2xvci1saXN0IGxpLC5zZW0tc2VjdGlvbi0tY29ybmVye3BhZGRpbmc6LjVyZW19LnB0MXtwYWRkaW5nLXRvcDouNXJlbX0ucHIxLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7cGFkZGluZy1yaWdodDouNXJlbX0ucGIxe3BhZGRpbmctYm90dG9tOi41cmVtfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3AgLmRpYWxvZy1jb250YWluZXItLWJvZHksLnBsMSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse3BhZGRpbmctbGVmdDouNXJlbX0uZGlhbG9nLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLmRpYWxvZy1jb250YWluZXItLWZvb3RlciwuZGlhbG9nLWNvbnRhaW5lci0taGVhZGVyLC5weTEsLnNlbS1idXR0b24tLXByaW1hcnksLnNlbS1idXR0b24tLXNlY29uZGFyeSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVyLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntwYWRkaW5nLXRvcDouNXJlbTtwYWRkaW5nLWJvdHRvbTouNXJlbX0uZGlhbG9nLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLmRpYWxvZy1jb250YWluZXItLWhlYWRlciwucHgxLC5zaWRlYmFyLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLnNpZGViYXItY29udGFpbmVyLS1oZWFkZXJ7cGFkZGluZy1sZWZ0Oi41cmVtO3BhZGRpbmctcmlnaHQ6LjVyZW19LnAye3BhZGRpbmc6MXJlbX0ucHQye3BhZGRpbmctdG9wOjFyZW19LnByMntwYWRkaW5nLXJpZ2h0OjFyZW19LnBiMntwYWRkaW5nLWJvdHRvbToxcmVtfS5wbDJ7cGFkZGluZy1sZWZ0OjFyZW19LnB5MntwYWRkaW5nLXRvcDoxcmVtO3BhZGRpbmctYm90dG9tOjFyZW19LmJ1bGxldC1pbmxpbmVsaXN0IGxpLC5kaWFsb2ctY29udGFpbmVyLS1mb290ZXIsLnB4Miwuc2VtLWNvbG9yLWxpc3QgbGksLnNlbS11bCAuc2VtLWxpLC5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGksLnNpZGViYXItY29udGFpbmVyLS1mb290ZXIsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3BhZGRpbmctbGVmdDoxcmVtO3BhZGRpbmctcmlnaHQ6MXJlbX0ucDN7cGFkZGluZzoycmVtfS5wdDN7cGFkZGluZy10b3A6MnJlbX0ucHIze3BhZGRpbmctcmlnaHQ6MnJlbX0ucGIze3BhZGRpbmctYm90dG9tOjJyZW19LnBsM3twYWRkaW5nLWxlZnQ6MnJlbX0ucHkze3BhZGRpbmctdG9wOjJyZW07cGFkZGluZy1ib3R0b206MnJlbX0ucHgzLC5zZW0tYnV0dG9uLS1wcmltYXJ5LC5zZW0tYnV0dG9uLS1zZWNvbmRhcnl7cGFkZGluZy1sZWZ0OjJyZW07cGFkZGluZy1yaWdodDoycmVtfS5wNHtwYWRkaW5nOjRyZW19LnB0NHtwYWRkaW5nLXRvcDo0cmVtfS5wcjR7cGFkZGluZy1yaWdodDo0cmVtfS5wYjR7cGFkZGluZy1ib3R0b206NHJlbX0ucGw0e3BhZGRpbmctbGVmdDo0cmVtfS5weTR7cGFkZGluZy10b3A6NHJlbTtwYWRkaW5nLWJvdHRvbTo0cmVtfS5weDR7cGFkZGluZy1sZWZ0OjRyZW07cGFkZGluZy1yaWdodDo0cmVtfS5jb2x7ZmxvYXQ6bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmNvbC1yaWdodHtmbG9hdDpyaWdodDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmNvbC0xe3dpZHRoOjguMzMzMzMlfS5jb2wtMnt3aWR0aDoxNi42NjY2NyV9LmNvbC0ze3dpZHRoOjI1JX0uY29sLTR7d2lkdGg6MzMuMzMzMzMlfS5jb2wtNXt3aWR0aDo0MS42NjY2NyV9LmNvbC02e3dpZHRoOjUwJX0uY29sLTd7d2lkdGg6NTguMzMzMzMlfS5jb2wtOHt3aWR0aDo2Ni42NjY2NyV9LmNvbC05e3dpZHRoOjc1JX0uY29sLTEwe3dpZHRoOjgzLjMzMzMzJX0uY29sLTExe3dpZHRoOjkxLjY2NjY3JX0uY29sLTEye3dpZHRoOjEwMCV9LmZsZXgsLnNlbS1jb2xvci1zd2F0Y2hlcywuc2VtLXBhZ2luYXRpb24tbmF2e2Rpc3BsYXk6ZmxleH1AbWVkaWEgKG1pbi13aWR0aDo0MGVtKXsuc20tY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5zbS1jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5zbS1jb2wtMXt3aWR0aDo4LjMzMzMzJX0uc20tY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5zbS1jb2wtM3t3aWR0aDoyNSV9LnNtLWNvbC00e3dpZHRoOjMzLjMzMzMzJX0uc20tY29sLTV7d2lkdGg6NDEuNjY2NjclfS5zbS1jb2wtNnt3aWR0aDo1MCV9LnNtLWNvbC03e3dpZHRoOjU4LjMzMzMzJX0uc20tY29sLTh7d2lkdGg6NjYuNjY2NjclfS5zbS1jb2wtOXt3aWR0aDo3NSV9LnNtLWNvbC0xMHt3aWR0aDo4My4zMzMzMyV9LnNtLWNvbC0xMXt3aWR0aDo5MS42NjY2NyV9LnNtLWNvbC0xMnt3aWR0aDoxMDAlfS5zbS1mbGV4e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6NTJlbSl7Lm1kLWNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWQtY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWQtY29sLTF7d2lkdGg6OC4zMzMzMyV9Lm1kLWNvbC0ye3dpZHRoOjE2LjY2NjY3JX0ubWQtY29sLTN7d2lkdGg6MjUlfS5tZC1jb2wtNHt3aWR0aDozMy4zMzMzMyV9Lm1kLWNvbC01e3dpZHRoOjQxLjY2NjY3JX0ubWQtY29sLTZ7d2lkdGg6NTAlfS5tZC1jb2wtN3t3aWR0aDo1OC4zMzMzMyV9Lm1kLWNvbC04e3dpZHRoOjY2LjY2NjY3JX0ubWQtY29sLTl7d2lkdGg6NzUlfS5tZC1jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5tZC1jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5tZC1jb2wtMTJ7d2lkdGg6MTAwJX0ubWQtZmxleHtkaXNwbGF5OmZsZXh9fUBtZWRpYSAobWluLXdpZHRoOjY0ZW0pey5sZy1jb2x7ZmxvYXQ6bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxnLWNvbC1yaWdodHtmbG9hdDpyaWdodDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxnLWNvbC0xe3dpZHRoOjguMzMzMzMlfS5sZy1jb2wtMnt3aWR0aDoxNi42NjY2NyV9LmxnLWNvbC0ze3dpZHRoOjI1JX0ubGctY29sLTR7d2lkdGg6MzMuMzMzMzMlfS5sZy1jb2wtNXt3aWR0aDo0MS42NjY2NyV9LmxnLWNvbC02e3dpZHRoOjUwJX0ubGctY29sLTd7d2lkdGg6NTguMzMzMzMlfS5sZy1jb2wtOHt3aWR0aDo2Ni42NjY2NyV9LmxnLWNvbC05e3dpZHRoOjc1JX0ubGctY29sLTEwe3dpZHRoOjgzLjMzMzMzJX0ubGctY29sLTExe3dpZHRoOjkxLjY2NjY3JX0ubGctY29sLTEye3dpZHRoOjEwMCV9LmxnLWZsZXh7ZGlzcGxheTpmbGV4fS5sZy1oaWRle2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fS5mbGV4LWNvbHVtbntmbGV4LWRpcmVjdGlvbjpjb2x1bW59LmZsZXgtd3JhcHtmbGV4LXdyYXA6d3JhcH0uaXRlbXMtc3RhcnR7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uaXRlbXMtZW5ke2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5pdGVtcy1jZW50ZXJ7YWxpZ24taXRlbXM6Y2VudGVyfS5pdGVtcy1iYXNlbGluZXthbGlnbi1pdGVtczpiYXNlbGluZX0uaXRlbXMtc3RyZXRjaHthbGlnbi1pdGVtczpzdHJldGNofS5zZWxmLXN0YXJ0e2FsaWduLXNlbGY6ZmxleC1zdGFydH0uc2VsZi1lbmR7YWxpZ24tc2VsZjpmbGV4LWVuZH0uc2VsZi1jZW50ZXJ7YWxpZ24tc2VsZjpjZW50ZXJ9LnNlbGYtYmFzZWxpbmV7YWxpZ24tc2VsZjpiYXNlbGluZX0uc2VsZi1zdHJldGNoe2FsaWduLXNlbGY6c3RyZXRjaH0uanVzdGlmeS1zdGFydHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uanVzdGlmeS1lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5qdXN0aWZ5LWNlbnRlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5qdXN0aWZ5LWJldHdlZW57anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lmp1c3RpZnktYXJvdW5ke2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmR9LmNvbnRlbnQtc3RhcnR7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0fS5jb250ZW50LWVuZHthbGlnbi1jb250ZW50OmZsZXgtZW5kfS5jb250ZW50LWNlbnRlcnthbGlnbi1jb250ZW50OmNlbnRlcn0uY29udGVudC1iZXR3ZWVue2FsaWduLWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uY29udGVudC1hcm91bmR7YWxpZ24tY29udGVudDpzcGFjZS1hcm91bmR9LmNvbnRlbnQtc3RyZXRjaHthbGlnbi1jb250ZW50OnN0cmV0Y2h9LmZsZXgtYXV0b3tmbGV4OjEgMSBhdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MH0uZmxleC1ub25le2ZsZXg6bm9uZX0ub3JkZXItMHtvcmRlcjowfS5vcmRlci0xe29yZGVyOjF9Lm9yZGVyLTJ7b3JkZXI6Mn0ub3JkZXItM3tvcmRlcjozfS5vcmRlci1sYXN0e29yZGVyOjk5OTk5fS5idWxsZXQtaW5saW5lbGlzdCBsaSwuY29sb3ItcGlja2VyIC5zYXR1cmF0aW9uLWxpZ2h0bmVzcywucmVsYXRpdmUsLnNlbS1jb2xvci1saXN0IGxpLGZpZ3VyZS5zZW11aS10aHVtYm5haWwsZmlndXJlLnNlbXVpLXRodW1ibmFpbCAuZmlnY2FwdGlvbi1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LmFic29sdXRlLC5idWxsZXQtaW5saW5lbGlzdCBsaTo6YWZ0ZXIsLmJ1bGxldC1pbmxpbmVsaXN0IGxpOjpiZWZvcmUsLmNvbG9yLXBpY2tlciwuc2VtLWJ1dHRvbi1jaXJjbGUsLnNlbS1jb2xvci1saXN0IGxpIC5jb2xvci1kZWxldGUsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOjphZnRlcixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257cG9zaXRpb246YWJzb2x1dGV9LmZpeGVke3Bvc2l0aW9uOmZpeGVkfS5kaWFsb2ctY29udGFpbmVyLWZ1bGwsLnNlbS1jb2xvci1saXN0IGxpIC5jb2xvci1kZWxldGUsLnRvcC0wLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9ue3RvcDowfS5yaWdodC0wLC5zZW0tY29sb3ItbGlzdCBsaSAuY29sb3ItZGVsZXRlLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9ue3JpZ2h0OjB9LmJvdHRvbS0wLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntib3R0b206MH0ubGVmdC0wLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbjo6YWZ0ZXJ7bGVmdDowfS56MXt6LWluZGV4OjF9Lnoye3otaW5kZXg6Mn0uejN7ei1pbmRleDozfS56NHt6LWluZGV4OjR9LmJvcmRlcntib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweH0uYm9yZGVyLXRvcHtib3JkZXItdG9wLXN0eWxlOnNvbGlkO2JvcmRlci10b3Atd2lkdGg6MXB4fS5ib3JkZXItcmlnaHR7Ym9yZGVyLXJpZ2h0LXN0eWxlOnNvbGlkO2JvcmRlci1yaWdodC13aWR0aDoxcHh9LmJvcmRlci1ib3R0b217Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLXdpZHRoOjFweH0uYm9yZGVyLWxlZnR7Ym9yZGVyLWxlZnQtc3R5bGU6c29saWQ7Ym9yZGVyLWxlZnQtd2lkdGg6MXB4fS5ib3JkZXItbm9uZXtib3JkZXI6MH0ucm91bmRlZHtib3JkZXItcmFkaXVzOjNweH0uY2lyY2xlLC5zZW0tYXZhdGFyIC5zZW0tYXZhdGFyX19pbWd7Ym9yZGVyLXJhZGl1czo1MCV9LnJvdW5kZWQtdG9we2JvcmRlci1yYWRpdXM6M3B4IDNweCAwIDB9LnJvdW5kZWQtcmlnaHR7Ym9yZGVyLXJhZGl1czowIDNweCAzcHggMH0ucm91bmRlZC1ib3R0b217Ym9yZGVyLXJhZGl1czowIDAgM3B4IDNweH0ucm91bmRlZC1sZWZ0e2JvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHh9Lm5vdC1yb3VuZGVke2JvcmRlci1yYWRpdXM6MH0uaGlkZXtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7aGVpZ2h0OjFweDt3aWR0aDoxcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgxcHgsMXB4LDFweCwxcHgpfUBtZWRpYSAobWF4LXdpZHRoOjQwZW0pey54cy1oaWRle2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjQwZW0pIGFuZCAobWF4LXdpZHRoOjUyZW0pey5zbS1oaWRle2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjUyZW0pIGFuZCAobWF4LXdpZHRoOjY0ZW0pey5tZC1oaWRle2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fS5kaXNwbGF5LW5vbmV7ZGlzcGxheTpub25lIWltcG9ydGFudH0uc2lkZWJhci1jb250YWluZXJ7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5zaWRlYmFyLWNvbnRhaW5lci1mdWxse2hlaWdodDoxMDAlfS5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye2JvcmRlci1yYWRpdXM6MCAxMnB4IDAgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNpZGViYXItY29udGFpbmVyLS1ib2R5LC5zaWRlYmFyLWNvbnRhaW5lci0tYm9keV9zcGFjZWR7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNpZGViYXItY29udGFpbmVyLS1mb290ZXJ7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWNvbG9yLXN3YXRjaGVze2ZsZXgtd3JhcDpub3dyYXB9LnNlbS1jb2xvci1zd2F0Y2hlc19jdXJyZW50e2ZsZXgtZ3JvdzoxfS5zZW0tY29sb3Itc3dhdGNoZXNfY3VycmVudCBidXR0b257bWFyZ2luLXRvcDoxMHB4fS5zZW0tY29sb3Itc3dhdGNoZXNfcHJlc2VsZWN0ZWR7bWFyZ2luLXRvcDoxM3B4O21hcmdpbi1sZWZ0Oi0xMHB4O21hcmdpbi1ib3R0b206MDtmbGV4LWdyb3c6MTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LXdyYXA6d3JhcDtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OjY3cHh9ZmlndXJlLnNlbXVpLXRodW1ibmFpbHt3aWR0aDoxMDAlfWZpZ3VyZS5zZW11aS10aHVtYm5haWwgaW1ne2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX1maWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO21pbi1oZWlnaHQ6NDRweH0uc2VtdWktY2FyZC1mb290ZXJ7Y29sb3I6I2ZmZjt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjojMmEyYTJhfS5zZW11aS1oZWFkZXItc2VjdGlvbntwYWRkaW5nOjIlIDIlIDA7ZGlzcGxheTpibG9ja30uc2VtdWktaGVhZGVyLXNlY3Rpb24ubGFyZ2V7cGFkZGluZzozJSAyJSAwfS5zZW11aS1oZWFkZXItc2VjdGlvbi5zbWFsbHtwYWRkaW5nOjElIC41JSAwfS5zZW11aS1mb290ZXItc2VjdGlvbntwYWRkaW5nOjAgMiUgMiU7ZGlzcGxheTpibG9ja30uc2VtdWktZm9vdGVyLXNlY3Rpb24ubGFyZ2V7cGFkZGluZzowIDIlIDMlfS5zZW11aS1mb290ZXItc2VjdGlvbi5zbWFsbHtwYWRkaW5nOjAgLjUlIDElfS5idXR0b24tc2VuZDpiZWZvcmV7Y29sb3I6I2ZmZn0uc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIC5zdWZpeHt0b3A6LTRweDtyaWdodDo0cHh9LmNvbG9yLXBpY2tlcnttYXJnaW46MCBhdXRvO2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3otaW5kZXg6MTAwMDAwO3dpZHRoOjIxMHB4O2hlaWdodDphdXRvO2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmNvbG9yLXBpY2tlciAuY3Vyc29ye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyOjJweCBzb2xpZCAjMjIyO2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpkZWZhdWx0fS5jb2xvci1waWNrZXIgLmh1ZS1hbHBoYXttYXJnaW4tYm90dG9tOjNweH0uY29sb3ItcGlja2VyIC5odWV7d2lkdGg6MTAwJTtoZWlnaHQ6MTZweDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBUUNBWUFBQUQwNklZbkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0QUlXRHdrVUZXYkNDQUFBQUZ4SlJFRlVhTjd0MGtFS2cwQVFBTUUyeDgzL24ycXU1cUNnRDFpRGhDb1lkcG5iUUM5YmJZMXFWTy9qdmM2azNhZDkxczcvN0YxL2NzZ1BydWp1UTE3QkRZU0ZzQkFXd2dKaElTeUVCY0pDV0FnTGhJV3dFQllJaTJmN0FyLzFUQ2dGSDJYOUFBQUFBRWxGVGtTdVFtQ0MpfS5jb2xvci1waWNrZXIgLmFscGhhe3dpZHRoOjEwMCU7aGVpZ2h0OjE2cHg7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQVFDQVlBQUFEMDZJWW5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINEFJV0R3WVFsWk1hM2dBQUFXVkpSRUZVYU43dG1FR082akFRUkNzT0FySGdCcHlBSllHamNHb2N4QW00QTJJSHBtb1dFMGVCSCtlem1GbE52VTA2c2hKM1c2VkVlbFdNVVFBSUlGOWY2cVpwaW1zQTFMWXRTMnVGNTEvdTI3WVZBRlpWUlVrRW9HSGRQVi9zSWNiSUVJSWtVZEkvOVhhN25leXY2MStTV0ZVVkFWQ1NjdDAwVFduMmZ2NnUzK0VjZmQzdFh6eS8wK25FVXUrU1Bqby9rcXpybWlRcFNjTjZ2OThYZXdmQTgvbE1raUxKMld4R1NVb3BjVDZmTTZVME5YOS9mcmZiamV2MVd0ZnJsWmZMaFlmRFFRSEcvQUlPbG5Hd2pJTmxIQ3hqSEN6allKbS9USldkQ3dxdUpYc2VGRnpHd0ROTmVpS01PSlRPOHhRZERRYWVCMjkrSzllZmVMYUJvOUo3dmR2dEpqMVJqRkZqZml2N3F2OTV0angvN2xlU1FnaDkzZTFmZk1lSXA2TytZUWpoby9ONzkxdDFYVk9TU0k3Ti8vSys0L0dveFdMQngrUEI1L09wNVhMSisvM09sSkpXcXhVM204M292djVpR2Y4S2pZTmxIQ3hqSEN6allCa0h5NWdmNWd1c3ZRVTdVMzdqVEFBQUFBQkpSVTVFcmtKZ2dnPT0pfS5jb2xvci1waWNrZXIgLnNhdHVyYXRpb24tbGlnaHRuZXNze3dpZHRoOjEwMCU7aGVpZ2h0OjEzMHB4O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPWUFBQUNDQ0FZQUFBQlNEN1QzQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRBSVdEd2tzUFdSNmxnQUFJQUJKUkVGVWVOcnRuVnVUNDdnUnJBSE4rUC8vT3IvNjFZNXdPTlo3bVoxdTNYQWVMTWpKWkdaVmdkS3NmYzV4UjNTMFJJSVVXK0NIekNwYzJNY1lvN1hHdjNleDdVaVpkNTdyanl6enYrdiszM1gvUi8rM3IvZjd2UjM4NlkrVHZLTmNmL3dkaFRMUGN2OXFVMndaZDc0dXRoMHQxODIxamtJWkxQY3NJLzZuV2E0WHZ1dHF1VTBaODVtbng4MFMvWnpncG5Mbk90SE50Ny9vZngxVEtYY1NOek4vN3FiTVEzanU3ck5RbU1ZWWQvNHMyajlhYStQK2dHYU1jWnJiMU0vdGRydmY3L2Qydjk5UDkvdDkzTy8zY2J2ZHh1MTJHOWZyZFZ3dWwzRStuOGMvLy9uUCsyKy8vWGI2NmFlZnhsLy8rdGZ4NXovLzJZSzVBbDJyZ3ZmNFVzYnBkR3JCNTJiQXZBclhwdXpqbWlxQVZTR3o1ZURtR1lYemhiQVptQ3JubXpkZHBVVSs4WTFkQU9ZZVhDdERVd1Z3VjdZQ0dINnVBbXlNY1o5bDV2a1VhQlBHTVVaNy9KNXcvNzkyL2Z2djlYcTkzMjYzZHIvZlR4UEVDZU1FOG5LNWpNL1B6L0hUVHovZHYzMzdkdnJsbDEvR1AvN3hqL0czdi8xdC9PVXZmd2tWc3dvbmdqZE9wOVB6SDNVM0Qzem1XR25aVlhuNGpDcXM3d0MyQktQNC84dEF6a1pzb1d4NlhycWVIWnltdnA0QUJDQkpoVFF3S2ZEVDhnenJaQ0lxaTVBaGlBQ2pCZkVCMnJQOC9YNjNNTTdmNi9WNnY5L3Y3WGE3YllDODNXN2pjcmxzVkhJcTVmZnYzMCsvL2ZiYitPV1hYOFpQUC8wMC92NzN2NCtmZi83NUpTdmJldStiTDJXTU1hRmJBbHBCTk04NVFYK2N0NnFvU3FrUEF3dVFsQlZLcUdORlNVT0FBM0JtdTdnQzVoTk9kMTVuU3d2QU9VVzdDNGdpVUNWOFNnbjVMOWhORklxVHNwMEd4STB5c2lveWpBamtZL3RHSlZFcHorZnorT1dYWCs3ZnYzOC8vZjc3NytQYnQyL2oxMTkvSFQvLy9QUDQ5ZGRmeDhmSFJ3cm1UalY3NzlFWHUycHgyeGhqd3RkSlpRY0FXUUlQTFBJU3NNSmFTd2lEOGd6SUtyd1N5QVRFNWo1bkFiUjVjMWRCVXdCbHNFV1cwaDZMcWlZc3FGUEFReEN5Ulozd09TQVJ4bWxYTVg1azY0cFFmdnYyN2Y3NStkaytQajVPSHg4ZjQvdjM3K1BidDIvanQ5OStHOSsrZlJzZkh4L2pjcm1VRkxPMzFnWURXYmx4UklzL1RxZlQ3b3VzeEpzQXhYQTJHYzdUQTlYZGdmZG9IYkZzajc2WDIrMVdBcmdJMWFnZUd3QTNxdXBxb0hzbWNiSTZGdTkzcXVnZ0ZhOWQ3TGVEdGdLZkFGSEJKK05FQnlJa2NKNUtlcnZkVG1oaEdjZ0pKU1o1dm4vL2ZqK2Z6KzE4UHA4K1B6L0g1K2ZubUdEKy92dnY0L3YzNytQajQyTjhmbjZPMisxV3M3SmpqUDZ3cmFNSTVFNFJaOHgydlY1VFN3a3F1b3RWNy9kN1R6NkhGV3NEL3FOY2R3MENRM3EvMzIxYzY4NlR3RFZJZGJ1eTczek5sZGhTSGI4STJrbFp6bm0rSW5CUzRVNm4wMzAyYUJGc0xoSERBS0pWSlZnbGZJOWpodnU1M1c1M3NMQU5ZTnhBaURBNk1DZVVIeDhmOSt2MTJpNlhTN3RjTHFjWlc1N1A1eWVZOC9mejgzT2N6K2Zuc1NtWVV5a25XRUc4NVdCc3Q5c3R6U0x5TWRmcjlRaTA4aVkxNVVaMExsREdMaFIzbzV6SzJqN09QVVREMEUrblUzdGs3WGIvMTZORmJobG9BTXVZMXpqTFVPTzNCS2VJRGUrWjhzMy9KNGdGbzRUTTVqUG11UmcyOGZvVUtLVlN3bzE2VGdBNW5weXdjV0xIZ1lsL1B6OC83My82MDUvYWI3LzkxbTYzVzd0Y0xpZTBzWmo0bWFvNWdUeWZ6ODhFMGYxK2o4RWNZendUUEVHMmNxanlmSE5GME04ZnVxRWlhT1ZuUnpaWlFOaDVmd1F5SGcvSERHZkpvODlRMXpiL3F1dTVYQzY3NzNJMlhLZlRxZC92OStkM3d1cVd2YS9ZVGRVZEVWM2ZoSXYvVml5cHM2WUUzeDNyNDNLNWJKUVM2NnpheFZHRnN2ZCsvL2o0YUYrL2ZtM2Z2Mzl2dDl1dGZmMzZ0ZjMrKysvdGRydWR2bjM3WnVOTEJhYUNNZ1V6QytyWlJpRm93eFV1Skk4WU1xY0NwOU9wcTV2YWdhWVU2bEdKQTFYUXFlamNodzZDajBHdzVuWUJyR3cwMUEyTzIwNm4wNEJHb3VOTnlUZnAvRndFbGhVZXk2blhySUt3N1FRV2RkeHVOMmxkTDVmTDgzOWdTUEY4YWh1L0p2Qk80OENQU3VxTWY4VnA5L1A1M0w1OCtkTHU5M3M3bjgvdGZyOC8zOS92OS9iNStUa2hQSjNQNTZtUTQzNi9qKy9mdisvaVNnYnplcjArQVp4LzUrODhidjZPTWRhNlM1ejZrZDIxZllDOWR4djdjSUpKMmQ5QU9TMzBmUE16eUhpVE04QjRERjZYVWxZSHA0S1FXM1crMXQ3N01OQjF2R0h4V3E3WGE3dmY3OCt5NS9ONUErSDFldDI5eHVQNWRiWXR5YVJ1NEFrc2JQcTY5MzZmalJ6WFJ4QmJQci9iK2IxOCtmS2xqVEhhQkJCZm44L24wLzErSDErK2ZCbm44em0wc0I4Zkg1dTRjcjVHdUJoTVZrMEVFbjlSc2N0Z1ZoTStpeGxKdE1BMjNSOEI2eXlzQXN0Qk9nRlhJS0tDTUlnVG9NcU5FdTJmWU1IN3p0YzczMmRRS2tDajF5dEFadFkwS3g4cElyOEdHSitBVDNWKzJIaXJobCsrZkJtWHkyV3o3M3crYjE3UDhwK2ZuOC90VXdHVmxlVmtUeVViNjhEa2ZheVdZNHp4TlJpaFU0RXBMSlBaVnJLK3U3SjQvbWdmS3FlTFc5WDJSRVdsSXRMMWRpeW5iRERiMytqWGdZalFxbjBycnhXYytOa0lMUDdGN3hJYk12eDd2VjUzeDQweG5sYldKRjEyWlNhZy9OMHBXNnQrWnptT016SGphakt3RGZvbmQ3OHpZVGRmcTE4dXA5N3pyMnE4djNJaW9CcHJSdEJsMEVaOW9nNVdCUkdPZE9IaklqWEY3VW90RmJnT1duWHpJSnl6WXZqRzVJWWdzbU1PeEhrejhPc01TclZOV2VxNVQ4RGFPY2JFdjFPZDVyYnM5YU83WXZNZXQ2M0VrRisrZk1FeHErTVJsNC9MNWJMWk4vK2V6K2ZuWjZLYXp1TXFYU1FWTzVzcEpYZmxIQUl6ZXMveEpzZWNrUkppRE1vZzlkNlZmUnJxWE1yNktwVlYyN2pSd0phY0dvdk9BTTF6TWRRTW53SzFBdWJLNjNrZENDaHZJMUM3ZzB6OW5mL0QrWHplMlZqOEg3R3g0UDlkdVFsc1lDcnF5TjhYcUczSG0vMTBPajNqdy9uK2NybHN0dU0ralBtbXhUMmRUdVB6ODNQenQycG4xWHNFSFgvYm5QYVZxVm1oMHh3T3QwbzZYTExBSGVQVVUyMDN3SGZjcnNwQ3dtVjNUcnlCNXMwTXNlZWc5N3gvQnd6Q2pCbGJCK3BSQVBsYTBCVlF1VDZWNlFIZEJsajNkMEtHMTQ3YitEcXhRZVV5bURPNDNXNGRRYXIrVElqd21BZDB6OC9oNjV2ZjAveUx2M1BiNVhMcHJ1L3lkRG85czdFVDBJK1BqNmRLSzlWVUVJZUtXUVdQQU9ySjhMS2Q0dkUrdDkxWTNlN1VGbFdhdGcyVndKbmIrSFBtdHZtL3NmSzU5L09hV0YzeC9lUDFVUEh2QTVERFlEcFlYZmIwZHJ2MVYyRGtCa3h0dy90RVdWVmxYV2RDOXBGWXM1L2pmaDlkUy8xNnZXN3M2bFRHK1RmcXN4U0pIeGtYWHEvWGRyMWV1NExzZkQ2UDN2c1QzTjc3RGtMK3pQbTVqU2RLTDR6UjNBeFFkNnJIa0xrWWxTb3dzcnE3em56dTZ3U3dkc01KT1htQTVmQmNqeHRnTUdCWUhscjV6b2todHNNQ1RnWExRT1c0WEM2ZEV5RU1wckw4bUFRelhSZ2R1aXgyeVp6b3J4a1lzRG4zaEIxVmVNTEdzWHNWdGdsMnBXOFMzc3ZrMHZ3N1I0aE5hSHZ2NGNBQ2w1SEZ6d0lIMEtjNnp1NFhqRFBSL2pwQVZ4V3pPMVhrMkREYjN2VGN4ZUdVMWlXWkhrbUlEV3ppV0t2aXJDSjREcmF2czZJSi9HRzZjVHFXZFhEeStmQXJRRFZWa0xxa1ZqQW9aSUlUZG1tSXFYd3FhOTVOMytNR1lvWlFkUlZOTzUzWTF4UmtoTzE2dlk3ZXU1MDdDYTlsSm5iR3B4T2VtUWhTdy9BUXNtbXA1elU5QmlVOEc2d3ZYNzZNNi9VNlBqNCtkbzBCejRDcGdpa25UVWVEcXdsS0JtZzN1NE9WanJaMUErckFjZ2FlaldxNmVKQ3ZDWUZET05Td09nSFg0RVFSdzhseGJ6RE9kRUs2Z1ozSGsxYis4ZzJvMUpGdEtYeXYvZkVkVFh1V2pXWGRBWmlCcDZBRGVEckNGaWltN0I2WkZuZWVJN0d2bS9QTWtVRFg2N1c3eEk4YjBENy92OGRBOXFmTjVvYUNmNzRXWmpIMG1mMWNtZlkxWTBKVUZtVnJUV3U4dXprTmNMdEVqN3U1RlhCVGtmQzZHT0E1cThZTXhPOEtWdkY2c0FWR2RjclVic0tPRGNRS2tMTU9NZG1seHVtNjQyWXJQbTI2QWxoWlcxWUIxUityckdzd0U4VGFZQVdlVU14ZGYrV2p3U3ZaMkVmM3l0T3lmbjUrUHBWUEFhcU9uNDNNdE5CcXZtamp4YmpNNGxaalpZNGdxTk1JNWt0YVcvc1lLTndTKzlsRlF6R2lobU1DS1BhNytaMFY2RWIwR1Jtb2J0cFg4SmxqV3U1Rk1MTjVqYTZoRzlrd1FnWnFmNSsxTkg1VXh6a0ZSZUNkV2hKOFhkbEdVa3hPN0hSbFlSbTRtVk80M1c3dGVyMTJUUEpFdy9ybUVOM0w1U0tISVdaZzlteitwVW9LT1lxNWJKVEpkWDJnbWUxVWN4TVpRRmFFUUlsSGN0MzJNK1kxQnpHa0d1emZpeUFOOXordWdwbFoxc3ltQ3JEQ1lZa0d4RFRwSTlSekJ5MHJIeWVEVUMxbldhZVVhRDluNHhrTnlZTUJEWnR6WjNCKytmSmxZMjFYRkRPY0FSSmxhYk95aVMzdUNwTEk5anJaakNEa2FWdmNDQ2p3b2duS1NoV2R6WFpXbFpNdlZUZ0Q4THBxbENMcnFnYmNCK3FZd3JnS1lwVDBjY0NxYkt5Q1ZhbGtFYWJuL0Z5bm9nQ3JQS2ZxZjUxeEo3c0dCMlpYY1pteG9TT3p0angzMDBEWmk3YTAvMkFJUjBVbEJhZzlTdUR3NktjQXpsYUI3dkhadldwaks5MGR5cnE2Ykt5RFVaUWJSMEIwNWJpTFFrSEljU1VtZ0lLK1N3dXFnSENub2lvMlJRVTF5aitCbkJ5OXBwaFZLTEd5QzdaekZLMXB4V0srRThJaFZDV0xOL3VMdG5VVTRheW9ZTG9hQU56OEZkdGFTdlk0cFYwQkVXMmxzNjFjenFsbEJLcFR5S2dNQWhyWjFjZGMxUlJPdFBtdldOa2RjS1o3Wkt4YVdqaVBMSk1wcDdPWkt4QStycUcvb0pManhmMHBuSmxxTG9EWm8zZ3lVMG1LR3lzMnRhS2Vjai9kMUMrckpTcGxCcWxUeUFxZ1IrRDhLaktsbVJMMmd0VWNBZEN0c0wraWpDTlQxb3FxcWtIMk9IRWJHNXNERm5VZzVBYSt5TG91MlZVMXB0ajFTMlpRcXYxT1JaTjlJV3pSZmdhUkJ4S29CRThVV3lxbEpGdHJJYzBBeE5qU2plZDk5Q1RZL1hEZlN6Q3o1TTBJWm9WRXNXblBGTlRzbDhvb1ZDMVR6YkdncUZaTkRTZ1Z3S0srMXNHRE1LcXhaQ1dHVk1EeXNpRXIxalZTUUpVWXdqNWlIT2xUaGRIdDQ0U1FnOUNOK25sOEQ5ME5NSWdBZGdyNDZKcVJpUjlJOHZSZEZ2YnIxN20veXhVTUtqTkxNaVZVQUR3dTJDV0doaGkrRjU1VFdNOU05Y29nem1zMWRuTTR1T0YvTEFFWVdkY3FuTTd5Rm15cTNJZndtT1JPZDdZMWlGV3RPam9ZOFRvNDFtVFY1SXlzZ0ZGdVJ6c2JXRkdiTklJSkNEdjFkT280bFpHN2pXQndSRnRWVEt1V3llQ0J5SktPYW44b1ozZXA5WGRkTmwwdER1YXl3THo5Y1hQWWVEQUEwU3BrQk85c2JWY1RPVldsZFB2NHV5ekVrenhIdGp2b25Ib1NrRkVXTm9vMWQ4RGhjUXB1dGQycHBOb240QnpvQWlKMWhCRlFnMGRWdGRiR0hIRFFXdXNobU5FUXVrTE0yUU8xRzJZOGJnVFhxRmhjQkpqN0VqUGdjUHRzOFVTOHFQcFBCL2RYem5PaDVaNDM4dHpINWVjNlFnck9LclJSZktteXNCbVVEQitQaFlhYk1sVlBFUitHQ1NJVFR6cjdhbTJ0QXJIM2JnY0V6UEptK2NyNWpKNE5uSE5GRFZyRlhjSTVMZTlrNUpudytiZWRiVitGZlJ6WklIYU9PYU9zTFkwLzdVR3M1OERqckd3S01JTUZJR3pPRVcxL2pHc2RBdENONmhFQUk0aEJlOVlYZVJST0JTVlBBVlBBcXZJTTVieDVoVktXQU1QNnpCUnkzaWVzY3JpZFZkRkJpbkJ4WERuRzJHUlkyWGJDdnAxbGh2R3RPOUJ4dTVoOTA4WFF1NDJsblNBck1GZGl6TWltOHV3UkN4UEdubk9TOGx3cG5iT2lEcVRBanNyUk4vUGNvQVNjQ2JhQUNxVk00MHlsbmpqVEJzK2J3V2xBRzIzL1VLYmRraXdLV0lRUEd6V2FjenBvU2x4UEVqODIyY05Xa3BTN0Z5enNEcnFwZmdwRzNqYWh3MnZnYmFTUUF4dUxXWll0N0p6eU5lOEpvWnBOQWN2REZPZHcwd3FZVDlBSzFyWnovRGRiU2xMUHAwcnlJeGdRSmxLOUFabEVxN0lPWHBvaGc5UElockNuZzg4SnNPeGlWNFpXQVlmZzRzaWt4LzhreTJaOWw4NjJ1cXdyZnNjSUg4K3VnVG1WR3lpZGRlVllVZ0VNbjRHWnpnMTRFd0lzaDlzeDJjS0tpV1hSZXVPRTVnekdPUWdkbFJLVlZkbGV2cWIyNzlYcTBRbnN0czJWRGFCTzBjb2V6c3J1V3RIQXB1NnNLRzRJQmhOMGFHVTJrTHJNS0dSVE4zSG1iQ0R3S1YxNHp2a01FREc0UWZaVnNwVmxhTlUybWhjNVRFWjNOMWgvenFUaGV1THBXMDVaV1RHVmpiM2Ribk5teEtaQm5OOEpxaWRhVkxLQU95QVJOTFMrTUI1NFoyK1ZhcW9NTEtyb1ZCbG5nZWZuVFBBY29ITldDU3ZsZkE4Q0kwSEVtQk5CbkJsWHlNcnpVN0E3V1ZtOTRQUHFRMmdtcUt4K1dER3NudmlsbWNTT0JKcU9LMW5ZeUFJenVBeWVzcTNVZFNLM0tmV2NZS0Q5NUhtZllPVTNxc2VyMkN0WUVVQStGcGZxZE52Z1BCWlVCaERyR09OUlZsUXNoOHJMY2FVQ3lrSEcwT09Vd1RsTEJyc2g1c29FTUdlemkxRTRIUlZ0MWljcDV3WkVGWGRpYkNrRzhZOHZYNzVzYk80RTBpb205eitoalNpT2Z5M0RocFhJdHBWaEUrVUdRZHZvV2p0Q2htckdIZjRZQXpLZ0JObkd0dUp4RkNlR2RoVUFmUUxMSzhrQllBUDZndkZKWmFqTUczWGt5Y3k4S3VDMHE0RXl5bXd0d2R4ZHYyTTBtSUJ0SzBMS25mNjQwajAwQXVxNGdVa2RXR2xoczIycUpjNmRaQ3NMMTlveG5sVEpHNFNZVlJJR3BEOFRQRkJ1TTZPRWxiUzFwbGRpZDRtR0F5TjZaSXVwYkM1YlhKTjlmZHBiVGhTeExVYUk4SUcxWElZQnhXM1RqczZLUW9zS2N4ZnhjUW1kbndSR00xMEduRmNDeTJYWXVuTE15QWtkZ2s0bWVQaWN6c0x5Z3RoY0J1dDZnb09xUzdZVkZYQURMamFvc0I2czZvZmNaV0FaU0lSWXFTVWtpell3dHRZYWIzdlVPUTl3MkhSeElJZzhXd1JWZUU2OHhpNFV0TDN6UnBoeHBsend1WnJjcVlDcTFJM2pQSTVkbkpJeWdFb2hNYlBxVkpTenJ3enhCSlRzNXpOK1JlVVNneGlrUFFWRjNKVkJlTlF4YkhFTnJFTU52RWRGWlZWOWxIOStPUkdFc05aUXB5VE5jNEMzQUc3WEY0bmd6cStEck8yemJ1YWFPWGdkYUZjZGtFb3RvU0ZCVlgycUowQzhPV1plRzRLR2xwZ2hBMFhmVE9QQ3FWMnFxd1EyNlFXZkYyUE1MaEkydzFsVkFhMmFQc1lkMHphMjVNUVJ3Z2NaTjZ1UURDaStaeGlENFhFTTJrWnhPVDQxRm5abmFSbGNwWm91emxScXFkYlFWV29wUW9TQjU4UlY1MGxCTnJIaS9Bd1hTNUxyd0RWbHBZM0ZjM0J5aVlHYzUyVHJpc3Q2a09YZHdJbkFRdEpwcDVRY2h5YXF1WU9WN1N1K2Z4Vk1hVjNkYzBSRTJTNm1VWTBnTHQycE1jWXFyS0lROXcybDFncFFVTXRRWWNtbWJ0NURUTnhkaG5VQ2pRcXRiSzlTVVN6dnJDMG1taGhFMWUyRlMyK294eXB5L1pBU3V0a210angzdmNCQzI0UFg2NW5icWtCQ1JoZmpTOWtJWVBuZWU4Y01hZ1ZPaEkvM1QxZkFtZHRBV1pzQ3N3VEpDa1FWTmEwcVdLU0tQT3BIQVVoRDlEcmJWY3lvWWt3cWh2aDE3dllBYXlYTFF5S0dZZHhsVURGcDQ5NHJCWFJqWWdPMTdERFlldE5JVWovZXpwNlMwbG5scEV3c1dtSk1rT3dzS1hlWktFQWpJSG4wRVFKSVNhUkJjTzZVTUlOejdwL2JFampudzRmdCt4bUR2a3N4WDRHMnJJcmlzN3FhZUt3QUZNUDJPaTduNGNyaXVad3RwU1V3cGZMeFNuT1JTcklxdXNjNVpGYVh5c3FSV2ppWjJEeUFXRUlMMzV0VlNvUUVsRkFDak9lR0dTRTdBSEVRZ2RvL0xTdkNPZ0dCdmt4c21EYnZsUzNGcDV2aGFCMlRBR3FSS3JLS01yaExWcGFHekVWalowT1F4RGhhQ1RBK1F5UlIxZDE1YVF6ckpudEwzUmlic2lwakc2amxnTDR5cWJTMHNOWWcxZTg0dmhiQlZyRWxLNjRDVWNXWVhEZkt4aHBJdXhpVkpaVXhzYk15L3VSQktUTlJRNGtRM0xkUllMUzBySmpSUGxUUHFZNmdkSnNFRGMrYVFYQW4rSGdzTlVDYlJ1RjBPajB6d25BN2JXRGtiaE81RW5zMDBxZVFoUzFsYUJNbDVNL2NBYXhzTEY4ckt5cWwrVGY3RUxMRUd1L2l4aWltZEN2bzBUamZwakt3YWdnZW40ZWg1djdMb2tMS2JMdXl2SGhjWkc4ZGhHckVEeDdIZzkzWnBwSkY3cUJxTzNpVnZlWEVEUU5Jbnplb2U4WXE2ZVBhWkJaMkp2aU0zVzJVQUdvdGVrUkNBR3E0RWtGMVgzRE9uUjExeVJzQkwxdFJhMFBWY1ppTkZYWjJjMzRGc2t2b21JblFRNmx6cEpvWmJKeGs0M053S0pGQnF1SlNzckJ5SHlkeEtPblR4UUFTQm1TM2orSk1uc0hTbGEzRWM2SzlWV29KVm45emZqd09NN2hxWUFBcUpRd0UyYTNuQTQ4SjJRR2VnUmtwWk5pdlNZK3lzM0VrS2Q0b0pJd3N2SUhsM2NXZ0x0NWs0Tkg2T210TFdkcHVyT2t3RU11cFljN2VNdERSaE9jSTJ1aTVKaFZJelh6THl0by9HQVB1Wm95bzh3a29kdVZnSmdsQ3Q3T2hHYmdJRDRNcTRzaSs2M3pVUzFGdUZGWEZscXlhajJlbUhsTE1jQnFZdTBGTXVSMjhCYkI3bE94Uk1TaUNRWEZoQ0t1d2toWitwWURpR1NnYnNLS1Y4TWlTUnN1SFNJV005cmtsUmlJbFpadXFYanNRSzhvb1lKTWdxM0pLV1ZraEhiaHNWeEZVenRoT1dQa1lpamNieDU0SUtzU2RUK3VMcjNjckdLeW9ZZ0ZpR1I5aUJrNGtmbG9VWCtKSWxRUlFxYWJtcGduaHF0cFFwYjZSVlExV0g1RG5yUzRoRW9HWnFhZXJRMmRoRmJ6OFhlUHhTaG1EYm83MGVJU2pvb3JPMnZLOFNKWEk0U1VtRVU0eldLRHpVRHRXVFl3N3hYbGJTVEVqNEZSZzd6S25Lb0dSQUx2MEdzOVRnYzFCcEN5d0daUlFBdHFWejJ4ckJjQU16RXBmWndGU2EyRzVXMFFCRmpTTWFwV0FFRmEzSGNHTjdDeER6RUN5SWtKOTdxd3JxV05UV1ZvODc2UFBzalBrajJ3dmdyb001bExaS01FVEtWcWwvQ3ZuV1ZGaUZhL1N6SlVRd2tvWnNyNjdZNnZsU1JWMy8ydG1OVE9ZM3ZuYXhZd011b1BLcWR6UjF3N0lxSHltbFB4YUFUaGZVN0tvMlpYWWo0QVlKSEwra05kS3dSUVlFU1RSYTVmc1VaL3JWQzFUTVR5V1Z5WW9xTnR1emFIc015djJ0dm9hcnhkZnF3WWdVMWF4Rm8vY25xbDFGR3NxSyt1QVJPVjhCWDRHVThXY1pUQVRpMnE3UWN5aTBPMFYrR2hXQk1OUlVrbjhIMVNzV1ZFNUJ5M0dpMEVDcVVlSm9CZkF0RGE0YW1rZFhHMzdBR1A1R2dlYjg0cDdVYXpwb0tSemRGemVROEhrb0hHeHByS3kvSHBtNXQxMnA0N0o2eFRZREV6N3VJTkVYU3V4WVh2RnNrWUFjK3lTeEg5c2Y1ZnRLelU2SWJ3VkJjVUdnNWU1Rk1DRVhTRXJaUjB3R2F5VjE5d29NOWd1UGpUcUpkVlRxUjR1RTRuSm5MbGRXVmtFQ0NaTGQyVkxGK3h0YW1leDdJcGlyaVNEVXB2cnBuOWxyd0dNQ0h5cHBNSCtwczZMSUxzdUZHVWoxWEVPWGlxYnFTSFBVS25DbHBXVjY4a3F0VVJWTkRZNFROYW9jeWtvWWVUVTVuZ0dFUWEvUzFEbm5FNEFlWE1jS2pIUEFtRlZqQ0JFTmFleUxWTkhmcjNweDh4VXN0Sjk0aElwZkg0SEtFL2VEYUFySzZsU3lWVkZiZHQxZ3hUSVZrM3BwcFZsRlhpNHBFaFZCVE9icXVvaFU4NU1MWG4xaWFodlVrSEpqU0NNYzAxdExGdmVWVkJ4MERvZE02amZ0Q3U3RE90SXpZeHJjMHFwMUpHUDJheVlGejJHYjZIdk1yTzhjbkd0VjZHam0zdUltU2ZEMkdwV0s2dW93YlpHTXhGS1FDbzFwT010Y01YRnBSc3QraFhHb0FvbUYzc1NUQkdnVGdsYkJLV3dzUTN0WnFhWVNwMFoxQ2ltUkRXRmNDSlVQWUowMEJJNUZrS1lOb2lmdVF4bU44OFNXVlhXTE1hVXFxcWdDMEJtUUpSNnNrM3U5TkNmNmpZTFh4QWZxc1lFZ1ZMQWhSWTJBdGd0ZmxaTkZtRnloeGRyTGtBZFdsazREODhNMml4SHllcElkaE1IckcvaVIxWkd0cTBNR3BiRGJSUFlPWGVTWTFNNk55NFpzdHZHU2t0SytYYkZQQVRqMkQzNzFzYVBFc0FNWGhYcnNaMGttL1hTdGtoaE15QmZzYTZ1WEZaZTJWQ2UrWU1yMStHS2d3clF5TllxMVZSckIrRWl6QW93Nk5zZE5LY3lWRWtZZU03M3lzNnE0a0FIcDZCaUZrbFRrSXJWQzVvWVY3dXp3T0dDejRVSjBTdHEybFdNSnk0d3RiK1JldEw2dFpGaWNuSm1CdzVVakN2WFhNWlZKWDJNUWtiZitYTjVFV2Q3OFZ6OC9KRXNNWlRCaUtOenNtMWluTFJVUTc0SDROaWRhcUk2OGo1c0FGZ3hjUnZlQzdpZUxKWGZRWXhqWloyQ3NpV0Zld1pYSm1CSWxaMXRkdHJYNGhTdWF0ZUtzby9SWk90T0tXMm5tcTFvVHplSzZkUldBV3UyTlJWYjRocTBTWG0xR3Z0dWdIcmJyNUlYcW1Ta3RnNUN1REUyTVNsUHdzWTVrTkUyV3AzQXFpWmJXVkxBeGlCRisyaUJaYnVOajZNQjZyc01MQzdGeWFzYVlEeW83S2tvUHlFdHczcEVNWGZQdnhBSmkyakFRUWdqcnowckxJWlNXWmxJb05od2Q1eEs0QVI5bVlOaldBYUxybnVJbUplQlZOOXpCT1JPYlZ2YnIrbVRUZkZTRUpMU1JuSG83aEVKb0lpOE1GcWp4bXZnbUY1VVJaejR6TEZnWlo4Q3R1Mlg3Z2dWY2NLbTlnVnhJc09IcXhYZ05NS25GV1pZbmYxZEJuT2hheVhxMTdRd0ZsV1cwOWVOS3lWSkZtWHFhT05HQTVhQ2VnTWJKM1VVa0dZMWljM25LV2dqcThxZlZZR1FHMWdSdDZyczYyYTZIaXFxVU9xZGVzSzVObVg0bkdvZkpvaUUxZDBkRjlsVlZrdlQxL2tFRWFhQ29ZT3dGcGNWY29MTSs3NjY5UHhDOXJXcWt0SDBzV1VZbGQwVkNwdUJaL3N0VlJjR2d5OVdYMitVMVF0aGk5U3pBcVN4elpzeStPaUZ6QllueVNHVjZHa3U0NHJEOEJDT1pCVjNCdkQ1K0FLUkhOd01Fc0I2RXpIbkpwa1RBZWlVbEVHa2NFQ2VCNkdEWlRwNVlFSlRsdmRya254WWpUbGxNa2ZOdFh3RGpNN3VWaks1SlhVVW40M3JycXBLMmp5dGF4SFcwTTVHOERDOHJ0SE1ZczdLU2dkdVZRTUdUWUZxRnZWUzZya0Qzc0RKNDZhZmRZRndvcTExQU9LQ0JMaHZ3b1VnYzhJR0FOeWNSNmtuWnJkSlBkc3V4bnlqZmQzRm92VGxSTWRFZHRPbDVDTVY1RUhzWFFCaXM3VE93dklEWmFHajJWbnBiaDdjcEs2M1Z3WUVNTHdxYmp6eWw2OTlzYXdGRmtGMXlxalVVMzFIZkM2c1cxWkZWRnVYVlhWZ3o5a2VFYXcweXMxbFdmbSthelFBUVNXQStoS1lWZnNaalBuY0FjVUI5b0lheXkvVVpYUk5ja0RHamk3N0dzV2J2Qm82dFByV1BxT3lWa0JVcStJTmVxcHpOZFlzL3UwaWZoNXFtcHFJVyszM0pWU1Vjd1k3MEtMNFU5bFlkVTZsanRTbHM3bG1maTlnM1l6ZVFmVmthR0ZhVjNPRENuYUQyTjh3c0VERmtsRTNSek0zWmdoZFlrV0hzc3pxNzBGSWVjbktrVmt0OGV6TXpScTlia0d1S29qUkxCVlNvZDNZMXlQcUtnWVc3SlJRVFBWeXk1eElZTGpPZ3hnVDUyUktKVVkxZE9ySWlSZDRmdXRReC9BNUFjU21FanowdkZXcmtMenZiV0F1OUhPV2JHZ3hGazFWTlRwbkJLazZUZ3dpc0kvSGN4WVhQMXVBV083MlVMRmxCVHErYVN1MlZUVXM2aHJ4TTJDRitoRW9yMVZJQTlabUZVYWFiMWxTU2dac1ZzNHN4ekhsVkxvSkhyOUg0RGhPTlRrSTFYQzAvd2lZMk5vV0FHNVJsbkhGbnE2b0xjY3BRZGRNdUovTzE3SlZBNU9ITGkwQnFDenRxN1kxKyt1Y0NkOThxTEk4TUlIQlYvY0tqeFFUbWUzaEZCUzNNeUNxbkRzdXltMm84MEhqdkZGVHRyVVJtTmFHSnNtVmFoSW1qVHNVWEt0UVpUQVZzN012djgvK2Z6VXJaQVhjTEo2TTRrb2U2WFAwYjZTbVdXTkR6eVVwUThibCtMdFd4NHR1cVozNmNSWVYzeXVWeFBOd3ZJaXFpUUNTbXU3c3JnVHpSNm5reWhwQ2FyWHdGeTF2R2Q1aVAyY1kwNmxGcjVOamhoZzFZNitOQjI4ZnRiSzgzczhyZjdrTEpiS3dERlBiTGcyNWEwQWRaSkVpcXI1cGhpeEtNRGxSVXRjc3NxMWhyaUxxR29IK3plTmdWbTlPZW1qc0VUVjhKZEYwTkhua0lGeFdZMU9CNFlycDdydFdKN05nQUFBUFhrbEVRVlEzb05zNW5wbHlWZjh1MkZvTHUxSnJIdmVhWldRanFBa3NodEZhMmd6c1NHM1pwa2J2ZzNIYWZGOXNsUFBsbGRqRmxLODBHeXNtOE1yNE1QaG5lTldFTlBHakFJcG1pbFRQQVRkVFJUWGxDQllIWUFRdVB3QTM2eElwV3RHTjRxM1kyTWhpR3NVcHVTU25sRUpSRDhQb3JDN0NGWVZ3K0Y1MXFUaGdhYnhzVHhXekNHWTBaU3NiM2xmcUF5ME9QTmpOeTh4aVFRS3NIWUZRMkhCWlZ2VmJCdXEzbTFvV0thanFhb25zTTZ1WlVyNkNqWFdOWjBsNUUzaDNqVVJtYTZrUDNNSklpeTFMbStrYWhRcTQxTjJpWmphNXNqdGxMWU5aSFpySDZxVUdtNHZNYkRwNlJ3MkNGbXZ1eUZrckJjQ3lNdEZxQmFFQ21zSG9LOUJaMkxBL2xKY1JxU2FEcW5hV2JyWmRHYXozRExnSXZCbG40d29HenRieUpHcXNsd3hraGhIclRqVFlGWEN0T29LUzh1TGRvZlZkQWJPeWxHVTZubFlwWFdadHM0blhCcTZXeEppdE1Ob2tIVUpuYm5KcGxRbSthR3BZMmE1R01WMlFEMWhSdWJCUEZLZHVtZjVPSGtMSHowRjlsdUU1a2pCalJhMG5GRTVDVUdxSHczMk1talo2eGtnSU5WblNuWjFWWlN0SzJxS2xSYUxsUWdLN3VUcTdKRlhKd00rM1NPRUt5aFpOSSt0SjBJNXFNWXk5azJxSkQ3ZFZXZHFLWGEwQ0tOUjBDY2pnK0IySVl1MmZjQlpKWmtNRmdNMTFyMFg5MndpbGdoRkdnelZuZXhscUI3eEw5bVMyOVNpWVVWWTJuWE9aak5CUnN5RHNRUFJXVzVoclo0WGNkQzRIVldSYmpnSnI0c0ZvZks1U3pqUTdyaEkxVWViZFBkRWJqNnNxSXZUWlFaNXZhMDhyQUJzQVcwVXhlV3l0QWs3QTJLSjlacHh6Q2lvQjI0WEZ0WUFlWFl4cjZhblNxaExncHBFcVdiR3dMdW5UZ3JWK0lqV2xMMjlsamFBbDRFUU1Hc0VycDRhcGVaaXF1d1JYTFhBcU9DZXJ1MzJtbXlkYzZvV1RTV3BGQUdkemVUQjhSVEhWTUV0bE05MENiYlFDWWhQanEzZWdZcjFGR2RZSVFqaXVER1o1elovQXpvYktHT3lMeHRpNmM0Und0djJhbnlXbExJQ25sTGh4SlJYdDZBNWViREJXRk5PTmJ4V1oyZDAybW51NFM5WUVDcGVwcFYxelNXUkJXeEhZelZJdjFDWFNvdXdxcVgzakJCQkRaZFlRYnBUUVc0WlFsUzhyNWtINHN1U1JtZzIrKzNKTjEweDFQYUFtRWttdFlsRWRlR3BKRU02a091Q3FDUjIyb1N1amo1SVYySGRUMHpqNXByTEtUalhGQVBqZFFseXE3eElCeEFRUDV5TWN6RzRWeEFLdzBuNmlsWjJRQmNlMnBMdWxrdXh4cW5vSXpGZmdxeXFqaWw5UzFWTndCckZtZXllb3BzOHlPalpVeWJaZGZTOEN1YVRJSnVtenM1dE9EYU50THBGRFEvUGNKR3dlTGhtZUwxbkIwS3FpVURTY3NpVVZEODlEaTNIdHJLdFNVTHczUkxpeWdaRCs3c0Y4SlRPYmdZc3JHdkROVUZSR2wxaXkwTGwxWWtVYzJhSllNb2c5MjBJOHFXNllEQ2cxTXFrMEpISkZLWGtiZ2JScmVJK3FwWU5PWkhyVmNEVWJhN3Bqc3BoU0pOdEs2dXBnUk5BVm9PUzBtdWdCZU40YklaZ0hodVBaL3MxRU5hWDZLc1ZyK1lOcmgxTmI3aXBSMFBFNXpiTlJlZ0NickhSVXc2WWYwN2RMQkpsMWY4S0I5YXMyVjFuTnFBc2w2MkxCQmhlaHdhbGVya0htQjFKRklFWktTRXVzZGw1SlFqMW5KbEhYU0NGMzQyZ0o5Q1lHclhlbGtuSklYcVZQOHNEK3F0cGxDUjNYSDJxZktxMHlnTXArS25Wa0t4TmxaOG0yWWtJbFZNaUNuWFV3bDdxem5CS1N2UXozbTNQdDZvUWJYTzViNUZpeENoL2ZIeFVRVy9BRWNLNnpDTnFLUW5MOXN5d3FtS3V3dnFTWXpUL2FQVk5OcFZ5aHZSVzIxYXFjaUNzamRXdkJ3SUxVdmg1VnlDemJXb0MxcEpqSjY4MENXc2wrdWRLQjZUNVJ3RzFtbG9obmxwYmc0N2l6NVU5aGEwRkd0bVJMRllCdE85OXk5N0FwMHorWkRUQW9nNmtTTFpzTUhnL0lGa2tncDZDcHZVMlUwY1lWU2RubWtqd0JkT21YYnhUV05XenVJYmlwTWlvVnhFY2taRW9haFNPaXkyTTNLMGpjQzFMaFZEd2FxRzBadmtjV3FDbnJHNEdJeHlrcnFsYldkdzZMUXlCYVpSOEhtTFJJaFFXc0hzd0Q0MlpYVkxOa2Y5bCtGbFcwSFZRMmx3RnNDL1oxRmR6bFFSMEthUGZvK0ZkZnUrL2R3VlJJQ3UxQ0dSN0FFSWlBaGMrQVpVRjBrT0JhUHhtVXFnNGk2NHZRblU0bkZEWUo5TnorMWZWWHZlSDlxbXIra1BJTHg4b0tjUlYvQkZieGJFMEpNVDBrU0Q0dzZML2xOWThvY3NxYWdWZFUzQTNNanhoeGNHdXF6c1BINGlycGFvdzFxNk95clZqdnA5TnBjNTlFOTFMbGRib1lWekpXZGltV2ZBVzJTTkVLY0RhWDJGbUJMTEEvdUt4bG1oaDYxM0lzMVVSUUFwYktmdHR3eEwwMnE2T254NXBReFNiUG9qQWcrdjVoQW5ONkxIVlJEWElzdkt0UmppUzBxSlV5WlRBWFZiQUs4MkVsRkpXYVFkVm9xVUMxVW50N0JWYVRRdWRNNlN1cWV4alFKTjQrMGljYXh2L3V0Ykt2ODNFVGJUOEg4Z2pjT0t4T0ptYlVhNk9PVlhodDNkRlk2ckh2OVhvTnpGTGNlRUExbzgrcEttMExBSFBIWjJyWUtqRnEwaGZaRml4c3FISmdEM2VENW4rVTBrYjFtRmpYa24ybHZNU1NPc05FL0NkSUFLRjBTeXRxNnVyT0hVTjVnd2c0R1pvc2dibWdnTTV1Y3JhMnFyUzJJZzFjYmlCQmN4WXpnelVETkxDdkw4R2JaWE5wNk9SeTNMbVMrS2s4M3pSSUFLNkExaW9LYTJJOU5hcEl1aVVGZGZDOTc2NlBGWlV0cVVyNktiV2srelpVMWEvWnJJWEV6dHJqVE9mejdod0t6aUNlWElhcmFIdGJaSU16KzJwR2dhekNtdzRxV0FGdkVkaG9kWXAwWHEwcFY3RzFZV1lXYk80cWhHcTQyK1o4Qll0ckxXdmx1TlBwWkFlYUZGUzF2dWJQZ2JneHNxY3BuQWFzekJvdkthRm9EUThCR3RqZlVPbDROQUcybm1RVjA0ZmVKZ3VtdlgyZnNyUUVXWmdoTDBKblZkWWtuM0RPWkllUk44NlJxUFdDbXN2R1ZxRU1Sbnd4UUF4d1M4RU1ZbzNJem1ZMitCQ2NMcDRNS2l1eXVoSW1hbWxiWkZjTm9ObDd0cCtSSGQxOFpqUUlSS3lYZEZSaE45OC9oeUtxd1hXTm83TzF3aWFYb0hOMTA4UkVaWldFcTZncm5JZmp6ZWc4amRSZjFYRUw0a2tYYTViQmpLeG9LYWxqQmplSGxWeFE0R2F5Y3BXNGxET0FLdG5UeEhBdE9mek90WndIQU03c3FWWGtWNnl1NmthcDFuSGtYS3FXRi80WEhxamVuTktxQmpwUjNsMWNoM0VqZzErRXNnZFFoc2RHMEI0Rk05c1dBVldwdUF5aXdUUGxlWnh0OVZ5WlZTMnFYZlJlV3FUQWlscHI5QXBvV1RqeHltaXQ3TndWNEpUcmlaeU9BOUIwazdIRmZVTG91cm1LWUhWblJRdnFHTDVITUhkcUZjUjJxV3BtY0s2ZVR3eDJkaXBXcnZpRGlscitmS1dxM09XUldkSEt3QTRldTh3amNoYmVSekZpbHFqalpOM3VmQ3Bma0owL3NjVnBuWWs2TDBQSTc3bHhkV0NaODdXaVdtN0IvQUdxdVFTbnVqR0tzQjhDSm1pSnE4cTFwS0lWV3lxT2lUSzY2cjE4Qk44cjc0L0FFNzFmZEMzeVBTMk14ZE9wbkUxdGxWeEQ5Sm1WT29nZ04rcjRQakFYVkZQYTNFZzVqVkpHRlZVR05vbEgyMEdWclVCN0JPeVNXcTZXcVlRZFdSOTJwY0ZNWU13Y2tiU2dDS0NxRDY3RGlpV3UxZzhNUUM5QnlmY0ZxVzFMK2pMNzE0cU5DdXpub1N4dDBkYTJndFdOMUc4RjBCSzBOTjBudWltZWxVRjlkSWRBZmpPNDRVVDNDalFMb1VlTEhKRlRPM2dtcFJ1SUlPdndCUUNicU5lbzNxdFo5aUY2eFZLMTNHUmxvNHpxaW1xK0NHZFRpUjF1Ulk4b3FnRTAyaFpCYTc5a1pYUE1xdXhSSEtsYTJzYVpXTjRtUnFaVWowdkxDS2hraktucU9RSE51U1pWSm9LdkFxUzF3cEVxdXZXREMxQjJ5cHdyQ1BzUk1FUFZUT0RNTEpNRHY2cWVLWHdpMkpZVjVTcTRxS3l2Z0dzSENMaXVqMmpSNTlWOGdNcVNKMkZKWlJYRUhWUkhqM3NGUHJjdDZPcHFsVzFHcGF0UWR0MEd2d2ZNNm42M0luc0dWRmhKR2FCcWdxcUlWNklzWGxsWmd5U1BxNFIzYm50M3dpNWN2K2NOMnlxUUxXMVQ5NUtZVnNXV3RLazRjQjlXNTNXUVFmbFFZUjZXbDRIYUpaanZWRTBENXl2cStSS2daQ3M1cWRCRVA1c0Q5NGNBdlFMbFNnTmFTTUF0SHg4OEJ1TlE0MXpkRnNYMzB6S2JjczBNTEQvaWhrcFF6bDB3aVRxS0xUZmJLbUNteVlJQ25LMEliYWllQzRDRzlpU3lMUTdjSU1HUXdhdTZUS29xNjBBcGwzV040MExacGNhMUNLS0s5VlF5eUlFbjh3MEY4RjZDTDJoOG8zaXhHd0M3czdFV3pDT3FtY0FwWXhZRDRqc0F6VlMwc2wydDk4cEE3dnJLb3BoQ1ZTb25iWXBnSDZtdlNuMjRwVEJWNHNkdFYzQnRNcTVrODJ5K0lBRHZVSjB1QWxrQ1ZUeElhUG0rVU51L3FrVjRGMVR6SFhDR3JYSUFxSXRCS3lwcUs5OVZ0QU9WczY0TzRPYlg3cEhMVkNwWUhjUm13dkxSN1R2WUFLQkJONThMR1Z6RHVGeitoUWJXZ25jUXlDWkFrK1Zic1BTb3VmOTMyNjFpWmdtZkNwd1JiQXZxbVNxcmlVMlB3aGphb095WXF0SWVnVlhWaVRzbXl0YTZiR3lTcFkzZ3lScnBJeUFlYVdERHh0cHNYd0t5YWxNREtOUDdZQlhNcUVza1VzaTJ1QzhGTkFQeEFLVFZmVDFvNlZ6TTBFMGpGKzFyV2NVdUh2ZHlnN3Znb0ZwbFg4SHB2SHBNQ09NUlVQSHpaa0luc3FsRktOWC9FSU81MkUwU3hTek93b2IyVm1STFc1RDFYSVUwcmJnTTFBeldneUM3ZmU4Rzd4VUFLL3RhRUJhdDdsdXF0eVA3RW1zYUpRT2o1Rittcm5aZkN1WUNmQlVBV3dTaHlkNnBNWS92QUhHMVVxT1lwYkkvZ3k1VDBDTUttK1VPM2dGdUM4NWRnZkRWZWd1UERmSVRySUJMc0xyY2dkaDNDRmdGWmphS0o0SXYzRjhBTkVxdnV4UjF0VktPZ0xvQ2Exanhib0JBa2o2djdqL2ljRmJBN2Y0cmZSblFETFJWaUcxM2kwdnFCUXJZVnFCYkFEWlQwWnBpSG9TenZRcG9wS0lGUzNzRTFIZkJXbEhYZDBIN0xuQXJxdm91Z010bGpIQmdabmgzRW96L0JLakxNTDRaMkFxMCtoRUpyOWphVlVCYnZOekNJVWlyb0M3QVdtbUZ3NG81QUszTXRCNVZ5cFpNU0ZnczA1SnlHVndsd0Jxc0VHQUFhMlpVMUNqVWV4WEdzRTRyS3JpaWxCdkZ6T0tLbzNBdUFyb0U2UUZRVTN1OFlwTlh3UzVrKzFUWnQ1VXJ3b3VONEtpVUV3K2szWldEcDFSWEhOUnFYYjIxVHMzOTk0NXlaU2czVm5aRk5ROUNGM1hlWnlyNURnQlhLaXdDTWEyTXhlVERZWGdQMUZzZjlRTktaYzBrODFSSmszcjZFUTNyQ21CVnlMTDc1RWpaMXBJVkRIb0Z0aU9BSG9CMEJkVFZ5bHFCc0tLS1MrQWVCWEpWTFkrQ1hBU3VHdk8vQXVxN0d1RWpEZkdLZzFvS2Exei9kbW1pOUk5U1VHTmhsMEF0ZnVsSEFhd29Zcm5Ta21OWEFWdUdFaHJFVlh2VUYrQTVDdDJQcU5PakRldHluYTRDbWVVb2xtZVhMTjRBcTdDNVNqMTBRN3lqZ2wrdDZDTnhTUkhtSTVYK0Nwd3JlWUIzUWZkcW5hNHEyMUtkQnVjNEdvWnNuNDlaT09pVmlud0hxSzlXemp2Z2V3ZUVoMkFVNSt2dHhaOUNkOVdxa2g0OVYxOEU1b2o2dlZ5bjBSU3RBeUdJTzVlZFhSS2Q1QjBWR1ZYcTJ5cjN4WXArNVV0K0M0UUo0UDFOMzM5cFFNalJlamo0dmIvRGNyNnJRYzNPLzByam10WnBlWUNCaUNIZkNlbVJiTmhiSy9wTlVQYzN3Zkt5NWYyRDdPbEwzL3VQaHZlL29VNFQwRjhmK1ZOTTJ2eW9pdjBqSytLSFFmZEhxKzBibmN6NG96NzMvK1k2TGJLdzFvLzVCN2VPZjFSbC8wZHU5Qjl0bi85YnZyZi9qK3YwaDZ0dG4ydHAvci80ODE5eTQvenY1MzkxdXZ6emZ3RGlmejZwaFQxTVBnQUFBQUJKUlU1RXJrSmdnZz09KX0uc2VtLWNvbG9yLWRhcmstaW5wdXRzIC5jb2xvci10eXBle2NvbG9yOiM1NTU7bGluZS1oZWlnaHQ6MjJweH0uc2VtLWNvbG9yLWxpZ2h0LWlucHV0cyAuY29sb3ItdHlwZXtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjIycHh9LnNlbS1jb2xvci1saXN0IGxpe21pbi1oZWlnaHQ6NTBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBpc0lFMTA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGhzdmE6IEhzdmE7XG5cbiAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuXG4gIHByaXZhdGUgb3V0cHV0Q29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBpbml0aWFsQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBmYWxsYmFja0NvbG9yOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBsaXN0ZW5lclJlc2l6ZTogYW55O1xuICBwcml2YXRlIGxpc3RlbmVyTW91c2VEb3duOiBhbnk7XG5cbiAgcHJpdmF0ZSBkaXJlY3RpdmVJbnN0YW5jZTogYW55O1xuXG4gIHByaXZhdGUgc2xpZGVySDogbnVtYmVyO1xuICBwcml2YXRlIHNsaWRlckRpbU1heDogU2xpZGVyRGltZW5zaW9uO1xuICBwcml2YXRlIGRpcmVjdGl2ZUVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBkaWFsb2dBcnJvd1NpemU6IG51bWJlciA9IDEwO1xuICBwcml2YXRlIGRpYWxvZ0Fycm93T2Zmc2V0OiBudW1iZXIgPSAxNTtcblxuICBwcml2YXRlIHVzZVJvb3RWaWV3Q29udGFpbmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIHNob3c6IGJvb2xlYW47XG4gIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XG5cbiAgcHVibGljIHRvcDogbnVtYmVyO1xuICBwdWJsaWMgbGVmdDogbnVtYmVyO1xuICBwdWJsaWMgcG9zaXRpb246IHN0cmluZztcblxuICBwdWJsaWMgZm9ybWF0OiBudW1iZXI7XG4gIHB1YmxpYyBzbGlkZXI6IFNsaWRlclBvc2l0aW9uO1xuXG4gIHB1YmxpYyBoZXhUZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBoc2xhVGV4dDogSHNsYTtcbiAgcHVibGljIHJnYmFUZXh0OiBSZ2JhO1xuXG4gIHB1YmxpYyBhcnJvd1RvcDogbnVtYmVyO1xuXG4gIHB1YmxpYyBzZWxlY3RlZENvbG9yOiBzdHJpbmc7XG4gIHB1YmxpYyBodWVTbGlkZXJDb2xvcjogc3RyaW5nO1xuICBwdWJsaWMgYWxwaGFTbGlkZXJDb2xvcjogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcFdpZHRoOiBudW1iZXI7XG4gIHB1YmxpYyBjcEhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjcEFscGhhQ2hhbm5lbDogc3RyaW5nO1xuICBwdWJsaWMgY3BPdXRwdXRGb3JtYXQ6IHN0cmluZztcblxuICBwdWJsaWMgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjcERpYWxvZ0Rpc3BsYXk6IHN0cmluZztcblxuICBwdWJsaWMgY3BJZ25vcmVkRWxlbWVudHM6IGFueTtcbiAgcHVibGljIGNwU2F2ZUNsaWNrT3V0c2lkZTogYm9vbGVhbjtcblxuICBwdWJsaWMgY3BQb3NpdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgY3BQb3NpdGlvbk9mZnNldDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjcE9LQnV0dG9uOiBib29sZWFuO1xuICBwdWJsaWMgY3BPS0J1dHRvblRleHQ6IHN0cmluZztcbiAgcHVibGljIGNwT0tCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcENhbmNlbEJ1dHRvbjogYm9vbGVhbjtcbiAgcHVibGljIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgY3BDYW5jZWxCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcFByZXNldExhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBjcFByZXNldENvbG9yczogc3RyaW5nW107XG4gIHB1YmxpYyBjcE1heFByZXNldENvbG9yc0xlbmd0aDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcEFkZENvbG9yQnV0dG9uOiBib29sZWFuO1xuICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZztcbiAgcHVibGljIGNwQWRkQ29sb3JCdXR0b25DbGFzczogc3RyaW5nO1xuICBwdWJsaWMgY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbG9yVG9nZ2xlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2h1ZVNsaWRlcicpIGh1ZVNsaWRlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWxwaGFTbGlkZXInKSBhbHBoYVNsaWRlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGlhbG9nUG9wdXAnKSBkaWFsb2dFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHNlcnZpY2U6IENvbG9yUGlja2VyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyUG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgICAgIGNvbnN0IGh1ZVdpZHRoID0gdGhpcy5odWVTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGFscGhhV2lkdGggPSB0aGlzLmFscGhhU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHRoaXMuc2xpZGVyRGltTWF4ID0gbmV3IFNsaWRlckRpbWVuc2lvbihodWVXaWR0aCwgdGhpcy5jcFdpZHRoLCAxMzAsIGFscGhhV2lkdGgpO1xuXG4gICAgICBpZiAodGhpcy5jcE91dHB1dEZvcm1hdCA9PT0gJ3JnYmEnKSB7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gMTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcE91dHB1dEZvcm1hdCA9PT0gJ2hzbGEnKSB7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0ZW5lck1vdXNlRG93biA9IChldmVudDogYW55KSA9PiB7IHRoaXMub25Nb3VzZURvd24oZXZlbnQpOyB9O1xuICAgICAgdGhpcy5saXN0ZW5lclJlc2l6ZSA9ICgpID0+IHsgdGhpcy5vblJlc2l6ZSgpOyB9O1xuXG4gICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5pbml0aWFsQ29sb3IsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuY3BXaWR0aCAhPT0gMTAwKSB7XG4gICAgICBjb25zdCBodWVXaWR0aCA9IHRoaXMuaHVlU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBhbHBoYVdpZHRoID0gdGhpcy5hbHBoYVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICB0aGlzLnNsaWRlckRpbU1heCA9IG5ldyBTbGlkZXJEaW1lbnNpb24oaHVlV2lkdGgsIHRoaXMuY3BXaWR0aCwgMTMwLCBhbHBoYVdpZHRoKTtcblxuICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcihmYWxzZSk7XG5cbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICB9XG4gIHB1YmxpYyBhZGRDb2xvcigpe31cbiAgcHVibGljIG9wZW5EaWFsb2coY29sb3I6IGFueSwgZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zZXJ2aWNlLnNldEFjdGl2ZSh0aGlzKTtcblxuICAgICAgaWYgKCF0aGlzLndpZHRoKSB7XG4gICAgICAgIHRoaXMuY3BXaWR0aCA9IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzIwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldEluaXRpYWxDb2xvcihjb2xvcik7XG5cbiAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKGNvbG9yLCBlbWl0KTtcblxuICAgICAgdGhpcy5vcGVuQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXR1cERpYWxvZyhcbiAgICBjb2xvclRvZ2dsZTogYm9vbGVhbixcbiAgICBpbnN0YW5jZTogYW55LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjb2xvcjogYW55LFxuICAgIGNwV2lkdGg6IHN0cmluZywgY3BIZWlnaHQ6IHN0cmluZywgY3BEaWFsb2dEaXNwbGF5OiBzdHJpbmcsIGNwRmFsbGJhY2tDb2xvcjogc3RyaW5nLFxuICAgIGNwQWxwaGFDaGFubmVsOiBzdHJpbmcsIGNwT3V0cHV0Rm9ybWF0OiBzdHJpbmcsIGNwRGlzYWJsZUlucHV0OiBib29sZWFuLFxuICAgIGNwSWdub3JlZEVsZW1lbnRzOiBhbnksIGNwU2F2ZUNsaWNrT3V0c2lkZTogYm9vbGVhbiwgY3BVc2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbixcbiAgICBjcFBvc2l0aW9uOiBzdHJpbmcsIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZywgY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdzogYm9vbGVhbixcbiAgICBjcFByZXNldExhYmVsOiBzdHJpbmcsIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXSwgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlcixcbiAgICBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nLCBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmcsXG4gICAgY3BPS0J1dHRvbjogYm9vbGVhbiwgY3BPS0J1dHRvbkNsYXNzOiBzdHJpbmcsIGNwT0tCdXR0b25UZXh0OiBzdHJpbmcsXG4gICAgY3BDYW5jZWxCdXR0b246IGJvb2xlYW4sIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZywgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmcsXG4gICAgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhbiwgY3BBZGRDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmcsIGNwQWRkQ29sb3JCdXR0b25UZXh0OiBzdHJpbmcsXG4gICAgY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmcpOiB2b2lkXG4gIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zZXRJbml0aWFsQ29sb3IoY29sb3IpO1xuXG4gICAgICB0aGlzLmlzSUUxMCA9IChkZXRlY3RJRSgpID09PSAxMCk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG5cbiAgICAgIHRoaXMuY3BEaXNhYmxlSW5wdXQgPSBjcERpc2FibGVJbnB1dDtcblxuICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCA9IGNwQWxwaGFDaGFubmVsO1xuICAgICAgdGhpcy5jcE91dHB1dEZvcm1hdCA9IGNwT3V0cHV0Rm9ybWF0O1xuICAgICAgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPSBjcERpYWxvZ0Rpc3BsYXk7XG5cbiAgICAgIHRoaXMuY3BJZ25vcmVkRWxlbWVudHMgPSBjcElnbm9yZWRFbGVtZW50cztcbiAgICAgIHRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlID0gY3BTYXZlQ2xpY2tPdXRzaWRlO1xuXG4gICAgICB0aGlzLnVzZVJvb3RWaWV3Q29udGFpbmVyID0gY3BVc2VSb290Vmlld0NvbnRhaW5lcjtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY3BXaWR0aCA9IHBhcnNlSW50KGNwV2lkdGgsIDEwKTtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jcEhlaWdodCA9IHBhcnNlSW50KGNwSGVpZ2h0LCAxMCk7XG5cbiAgICAgIHRoaXMuY3BQb3NpdGlvbiA9IGNwUG9zaXRpb247XG4gICAgICB0aGlzLmNwUG9zaXRpb25PZmZzZXQgPSBwYXJzZUludChjcFBvc2l0aW9uT2Zmc2V0LCAxMCk7XG5cbiAgICAgIHRoaXMuY3BPS0J1dHRvbiA9IGNwT0tCdXR0b247XG4gICAgICB0aGlzLmNwT0tCdXR0b25UZXh0ID0gY3BPS0J1dHRvblRleHQ7XG4gICAgICB0aGlzLmNwT0tCdXR0b25DbGFzcyA9IGNwT0tCdXR0b25DbGFzcztcblxuICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbiA9IGNwQ2FuY2VsQnV0dG9uO1xuICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvblRleHQgPSBjcENhbmNlbEJ1dHRvblRleHQ7XG4gICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uQ2xhc3MgPSBjcENhbmNlbEJ1dHRvbkNsYXNzO1xuXG4gICAgICB0aGlzLmZhbGxiYWNrQ29sb3IgPSBjcEZhbGxiYWNrQ29sb3IgfHwgJyNmZmYnO1xuXG4gICAgICB0aGlzLmNvbG9yVG9nZ2xlID0gY29sb3JUb2dnbGU7XG5cbiAgICAgIHRoaXMuc2V0UHJlc2V0Q29uZmlnKGNwUHJlc2V0TGFiZWwsIGNwUHJlc2V0Q29sb3JzKTtcblxuICAgICAgdGhpcy5jcE1heFByZXNldENvbG9yc0xlbmd0aCA9IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoO1xuICAgICAgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZSA9IGNwUHJlc2V0RW1wdHlNZXNzYWdlO1xuICAgICAgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzID0gY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzcztcblxuICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uID0gY3BBZGRDb2xvckJ1dHRvbjtcbiAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvblRleHQgPSBjcEFkZENvbG9yQnV0dG9uVGV4dDtcbiAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbkNsYXNzID0gY3BBZGRDb2xvckJ1dHRvbkNsYXNzO1xuICAgICAgdGhpcy5jcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3MgPSBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M7XG5cbiAgICAgIGlmICghY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdykge1xuICAgICAgICB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgICB0aGlzLmRpYWxvZ0Fycm93U2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3BPdXRwdXRGb3JtYXQgPT09ICdoZXgnICYmIGNwQWxwaGFDaGFubmVsICE9PSAnYWx3YXlzJyAmJiBjcEFscGhhQ2hhbm5lbCAhPT0gJ2hleDgnKSB7XG4gICAgICAgIHRoaXMuY3BBbHBoYUNoYW5uZWwgPSAnZGlzYWJsZWQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0aWFsQ29sb3IoY29sb3I6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbENvbG9yID0gY29sb3I7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJlc2V0Q29uZmlnKGNwUHJlc2V0TGFiZWw6IHN0cmluZywgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5jcFByZXNldExhYmVsID0gY3BQcmVzZXRMYWJlbDtcbiAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gY3BQcmVzZXRDb2xvcnM7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sb3JUb2dnbGUoY29sb3JEcm9wRW5hYmxlZDogYm9vbGVhbik6dm9pZHtcbiAgICB0aGlzLmNvbG9yVG9nZ2xlID0gY29sb3JEcm9wRW5hYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2xvckZyb21TdHJpbmcodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbiA9IHRydWUsIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBsZXQgaHN2YTogSHN2YTtcblxuICAgIGlmICh0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnYWx3YXlzJyB8fCB0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnaGV4OCcpIHtcbiAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCB0cnVlKTtcblxuICAgICAgaWYgKCFoc3ZhICYmICF0aGlzLmhzdmEpIHtcbiAgICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodmFsdWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodmFsdWUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoIWhzdmEgJiYgIXRoaXMuaHN2YSkge1xuICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodGhpcy5mYWxsYmFja0NvbG9yLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKGhzdmEpIHtcbiAgICAgIHRoaXMuaHN2YSA9IGhzdmE7XG5cbiAgICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKGVtaXQsIHVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICB0aGlzLnNldERpYWxvZ1Bvc2l0aW9uKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSAhPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkRyYWdFbmQoc2xpZGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckRyYWdFbmQoeyBzbGlkZXI6IHNsaWRlciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3IgfSk7XG4gIH1cblxuICBwdWJsaWMgb25EcmFnU3RhcnQoc2xpZGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckRyYWdTdGFydCh7IHNsaWRlcjogc2xpZGVyLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvciB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0lFMTAgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdwb3B1cCcgJiZcbiAgICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBldmVudC50YXJnZXQpICYmXG4gICAgICAgIHRoaXMuY3BJZ25vcmVkRWxlbWVudHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0gPT09IGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgIGlmICghdGhpcy5jcFNhdmVDbGlja091dHNpZGUpIHtcbiAgICAgICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcodGhpcy5pbml0aWFsQ29sb3IsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLmluaXRpYWxDb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkFjY2VwdENvbG9yKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAncG9wdXAnKSB7XG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdXRwdXRDb2xvcikge1xuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvclNlbGVjdGVkKHRoaXMub3V0cHV0Q29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNhbmNlbENvbG9yKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcodGhpcy5pbml0aWFsQ29sb3IsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAncG9wdXAnKSB7XG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLmluaXRpYWxDb2xvciwgdHJ1ZSk7XG5cbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDYW5jZWxlZCgpO1xuICB9XG5cbiAgcHVibGljIG9uRm9ybWF0VG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybWF0ID0gKHRoaXMuZm9ybWF0ICsgMSkgJSAzO1xuICB9XG5cbiAgcHVibGljIG9uQ29sb3JDaGFuZ2UodmFsdWU6IHtzOiBudW1iZXIsIHY6IG51bWJlciwgcmdYOiBudW1iZXIsIHJnWTogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5zID0gdmFsdWUucyAvIHZhbHVlLnJnWDtcbiAgICB0aGlzLmhzdmEudiA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1k7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnbGlnaHRuZXNzJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEudixcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnc2F0dXJhdGlvbicsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLnMsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uSHVlQ2hhbmdlKHZhbHVlOiB7djogbnVtYmVyLCByZ1g6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEuaCA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1g7XG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnaHVlJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuaCxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25BbHBoYUNoYW5nZSh2YWx1ZToge3Y6IG51bWJlciwgcmdYOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLmEgPSB2YWx1ZS52IC8gdmFsdWUucmdYO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ2FscGhhJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuYSxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25IZXhJbnB1dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZVswXSAhPT0gJyMnKSB7XG4gICAgICAgIHZhbHVlID0gJyMnICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHZhbHVlLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgICAgaW5wdXQ6ICdoZXgnLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZWRJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcblxuICAgIHJnYmEuciA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7aW5wdXQ6ICdyZWQnLCB2YWx1ZTogcmdiYS5yLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvcn0pO1xuICB9XG5cbiAgcHVibGljIG9uQmx1ZUlucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpO1xuXG4gICAgcmdiYS5iID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hzdmEocmdiYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtpbnB1dDogJ2JsdWUnLCB2YWx1ZTogcmdiYS5iLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvcn0pO1xuICB9XG5cbiAgcHVibGljIG9uR3JlZW5JbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcblxuICAgIHJnYmEuZyA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2dyZWVuJyxcbiAgICAgIHZhbHVlOiByZ2JhLmcsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWxwaGFJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEuYSA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnYWxwaGEnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5hLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkh1ZUlucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSkge1xuICAgIHRoaXMuaHN2YS5oID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2h1ZScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmgsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTGlnaHRuZXNzSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKTtcblxuICAgIGhzbGEubCA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5oc2xhMmhzdmEoaHNsYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnbGlnaHRuZXNzJyxcbiAgICAgIHZhbHVlOiBoc2xhLmwsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU2F0dXJhdGlvbklucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSk7XG5cbiAgICBoc2xhLnMgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UuaHNsYTJoc3ZhKGhzbGEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ3NhdHVyYXRpb24nLFxuICAgICAgdmFsdWU6IGhzbGEucyxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25BZGRQcmVzZXRDb2xvcihldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoIXRoaXMuY3BQcmVzZXRDb2xvcnMuZmlsdGVyKChjb2xvcikgPT4gKGNvbG9yID09PSB2YWx1ZSkpLmxlbmd0aCkge1xuICAgICAgdGhpcy5jcFByZXNldENvbG9ycyA9IHRoaXMuY3BQcmVzZXRDb2xvcnMuY29uY2F0KHZhbHVlKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5wcmVzZXRDb2xvcnNDaGFuZ2VkKHRoaXMuY3BQcmVzZXRDb2xvcnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlbW92ZVByZXNldENvbG9yKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSB0aGlzLmNwUHJlc2V0Q29sb3JzLmZpbHRlcigoY29sb3IpID0+IChjb2xvciAhPT0gdmFsdWUpKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UucHJlc2V0Q29sb3JzQ2hhbmdlZCh0aGlzLmNwUHJlc2V0Q29sb3JzKTtcbiAgfVxuXG4gIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgc3RhdHVzXG5cbiAgcHJpdmF0ZSBvcGVuQ29sb3JQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNob3cpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2V0RGlhbG9nUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sIDApO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnRvZ2dsZSh0cnVlKTtcblxuICAgICAgaWYgKCF0aGlzLmlzSUUxMCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMubGlzdGVuZXJSZXNpemUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VDb2xvclBpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93KSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS50b2dnbGUoZmFsc2UpO1xuXG4gICAgICBpZiAoIXRoaXMuaXNJRTEwKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubGlzdGVuZXJNb3VzZURvd24pO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5saXN0ZW5lclJlc2l6ZSk7XG5cbiAgICAgIGlmICghdGhpcy5jZFJlZlsnZGVzdHJveWVkJ10pIHtcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2xvclBpY2tlcihlbWl0OiBib29sZWFuID0gdHJ1ZSwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlckRpbU1heCkge1xuICAgICAgY29uc3QgbGFzdE91dHB1dCA9IHRoaXMub3V0cHV0Q29sb3I7XG5cbiAgICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSk7XG4gICAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmRlbm9ybWFsaXplUkdCQSh0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpKTtcblxuICAgICAgY29uc3QgaHVlID0gdGhpcy5zZXJ2aWNlLmRlbm9ybWFsaXplUkdCQSh0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYShuZXcgSHN2YSh0aGlzLnNsaWRlckggfHwgdGhpcy5oc3ZhLmgsIDEsIDEsIDEpKSk7XG5cbiAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgdGhpcy5oc2xhVGV4dCA9IG5ldyBIc2xhKE1hdGgucm91bmQoKGhzbGEuaCkgKiAzNjApLCBNYXRoLnJvdW5kKGhzbGEucyAqIDEwMCksIE1hdGgucm91bmQoaHNsYS5sICogMTAwKSxcbiAgICAgICAgICBNYXRoLnJvdW5kKGhzbGEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIHRoaXMucmdiYVRleHQgPSBuZXcgUmdiYShyZ2JhLnIsIHJnYmEuZywgcmdiYS5iLCBNYXRoLnJvdW5kKHJnYmEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIGNvbnN0IGFsbG93SGV4OCA9IHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnIHx8IHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdoZXg4JztcblxuICAgICAgICB0aGlzLmhleFRleHQgPSB0aGlzLnNlcnZpY2UucmdiYVRvSGV4KHJnYmEsIGFsbG93SGV4OCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaHVlU2xpZGVyQ29sb3IgPSAncmdiKCcgKyBodWUuciArICcsJyArIGh1ZS5nICsgJywnICsgaHVlLmIgKyAnKSc7XG4gICAgICB0aGlzLmFscGhhU2xpZGVyQ29sb3IgPSAncmdiKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnKSc7XG5cbiAgICAgIHRoaXMub3V0cHV0Q29sb3IgPSB0aGlzLnNlcnZpY2Uub3V0cHV0Rm9ybWF0KHRoaXMuaHN2YSwgdGhpcy5jcE91dHB1dEZvcm1hdCwgdGhpcy5jcEFscGhhQ2hhbm5lbCk7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSB0aGlzLnNlcnZpY2Uub3V0cHV0Rm9ybWF0KHRoaXMuaHN2YSwgJ3JnYmEnLCBudWxsKTtcblxuICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyUG9zaXRpb24oXG4gICAgICAgICh0aGlzLnNsaWRlckggfHwgdGhpcy5oc3ZhLmgpICogdGhpcy5zbGlkZXJEaW1NYXguaCAtIDgsXG4gICAgICAgIHRoaXMuaHN2YS5zICogdGhpcy5zbGlkZXJEaW1NYXgucyAtIDgsXG4gICAgICAgICgxIC0gdGhpcy5oc3ZhLnYpICogdGhpcy5zbGlkZXJEaW1NYXgudiAtIDgsXG4gICAgICAgIHRoaXMuaHN2YS5hICogdGhpcy5zbGlkZXJEaW1NYXguYSAtIDhcbiAgICAgICk7XG5cbiAgICAgIGlmIChlbWl0ICYmIGxhc3RPdXRwdXQgIT09IHRoaXMub3V0cHV0Q29sb3IpIHtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5vdXRwdXRDb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgY29sb3IgcGlja2VyIGRpYWxvZyBwb3NpdGlvbmluZ1xuXG4gIHByaXZhdGUgc2V0RGlhbG9nUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpYWxvZ0hlaWdodCA9IHRoaXMuZGlhbG9nRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgbGV0IHBvc2l0aW9uID0gJ3N0YXRpYycsIHRyYW5zZm9ybSA9ICcnLCBzdHlsZSA9IG51bGw7XG5cbiAgICAgIGxldCBwYXJlbnROb2RlOiBhbnkgPSBudWxsLCB0cmFuc2Zvcm1Ob2RlOiBhbnkgPSBudWxsO1xuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAgIHdoaWxlIChub2RlICE9PSBudWxsICYmIG5vZGUudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIHBvc2l0aW9uID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcbiAgICAgICAgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnICYmIHRyYW5zZm9ybU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1Ob2RlID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0cmFuc2Zvcm1Ob2RlO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib3hEaXJlY3RpdmUgPSB0aGlzLmNyZWF0ZUJveCh0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgKHBvc2l0aW9uICE9PSAnZml4ZWQnKSk7XG5cbiAgICAgIGlmICh0aGlzLnVzZVJvb3RWaWV3Q29udGFpbmVyIHx8IChwb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJiAhcGFyZW50Tm9kZSkpIHtcbiAgICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wO1xuICAgICAgICB0aGlzLmxlZnQgPSBib3hEaXJlY3RpdmUubGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib3hQYXJlbnQgPSB0aGlzLmNyZWF0ZUJveChwYXJlbnROb2RlLCAocG9zaXRpb24gIT09ICdmaXhlZCcpKTtcblxuICAgICAgICB0aGlzLnRvcCA9IGJveERpcmVjdGl2ZS50b3AgLSBib3hQYXJlbnQudG9wO1xuICAgICAgICB0aGlzLmxlZnQgPSBib3hEaXJlY3RpdmUubGVmdCAtIGJveFBhcmVudC5sZWZ0O1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICogdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgICAgdGhpcy5sZWZ0IC09IHRoaXMuY3BXaWR0aCArIHRoaXMuZGlhbG9nQXJyb3dTaXplIC0gMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcFBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICB0aGlzLmFycm93VG9wID0gZGlhbG9nSGVpZ2h0IC0gMTtcblxuICAgICAgICB0aGlzLnRvcCAtPSBkaWFsb2dIZWlnaHQgKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZTtcbiAgICAgICAgdGhpcy5sZWZ0ICs9IHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAqIGJveERpcmVjdGl2ZS53aWR0aCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCArIHRoaXMuZGlhbG9nQXJyb3dTaXplO1xuICAgICAgICB0aGlzLmxlZnQgKz0gdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwICogYm94RGlyZWN0aXZlLndpZHRoIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKiB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgICB0aGlzLmxlZnQgKz0gYm94RGlyZWN0aXZlLndpZHRoICsgdGhpcy5kaWFsb2dBcnJvd1NpemUgLSAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgcG9zaXRpb25pbmcgYW5kIG9wZW5pbmdcblxuICBwcml2YXRlIGNyZWF0ZUJveChlbGVtZW50OiBhbnksIG9mZnNldDogYm9vbGVhbik6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAob2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogMCksXG4gICAgICBsZWZ0OiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyAob2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogMCksXG4gICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBpc0Rlc2NlbmRhbnQocGFyZW50OiBhbnksIGNoaWxkOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgbm9kZTogYW55ID0gY2hpbGQucGFyZW50Tm9kZTtcblxuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdG9yLCBSZWZsZWN0aXZlSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvci1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2NvbG9yUGlja2VyXScsXG4gIGV4cG9ydEFzOiAnbmd4Q29sb3JQaWNrZXInXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRpYWxvZzogYW55O1xuXG4gIHByaXZhdGUgZGlhbG9nQ3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGlnbm9yZUNoYW5nZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGNtcFJlZjogQ29tcG9uZW50UmVmPENvbG9yUGlja2VyQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjb2xvclBpY2tlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNwV2lkdGg6IHN0cmluZyA9ICcyMzBweCc7XG4gIEBJbnB1dCgpIGNwSGVpZ2h0OiBzdHJpbmcgPSAnYXV0byc7XG5cbiAgQElucHV0KCkgY3BUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3JUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcElnbm9yZWRFbGVtZW50czogYW55ID0gW107XG5cbiAgQElucHV0KCkgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcEFscGhhQ2hhbm5lbDogc3RyaW5nID0gJ2VuYWJsZWQnO1xuICBASW5wdXQoKSBjcE91dHB1dEZvcm1hdDogc3RyaW5nID0gJ2hleCc7XG5cbiAgQElucHV0KCkgY3BGYWxsYmFja0NvbG9yOiBzdHJpbmcgPSAnI2ZmZic7XG5cbiAgQElucHV0KCkgY3BEaWFsb2dEaXNwbGF5OiBzdHJpbmcgPSAncG9wdXAnO1xuXG4gIEBJbnB1dCgpIGNwU2F2ZUNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgY3BVc2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNwUG9zaXRpb246IHN0cmluZyA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZyA9ICcwJSc7XG4gIEBJbnB1dCgpIGNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcE9LQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNwT0tCdXR0b25UZXh0OiBzdHJpbmcgPSAnT0snO1xuICBASW5wdXQoKSBjcE9LQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1vay1idXR0b24tY2xhc3MnO1xuXG4gIEBJbnB1dCgpIGNwQ2FuY2VsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nID0gJ0NhbmNlbCc7XG4gIEBJbnB1dCgpIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1jYW5jZWwtYnV0dG9uLWNsYXNzJztcblxuICBASW5wdXQoKSBjcFByZXNldExhYmVsOiBzdHJpbmcgPSAnUHJlc2V0IGNvbG9ycyc7XG4gIEBJbnB1dCgpIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlciA9IDY7XG5cbiAgQElucHV0KCkgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZyA9ICdObyBjb2xvcnMgYWRkZWQnO1xuICBASW5wdXQoKSBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmcgPSAncHJlc2V0LWVtcHR5LW1lc3NhZ2UnO1xuXG4gIEBJbnB1dCgpIGNwQWRkQ29sb3JCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZyA9ICdBZGQgY29sb3InO1xuICBASW5wdXQoKSBjcEFkZENvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1hZGQtY29sb3ItYnV0dG9uLWNsYXNzJztcblxuICBASW5wdXQoKSBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1yZW1vdmUtY29sb3ItYnV0dG9uLWNsYXNzJztcblxuICBAT3V0cHV0KCkgY3BJbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcblxuICBAT3V0cHV0KCkgY3BUb2dnbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjcFNsaWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcbiAgQE91dHB1dCgpIGNwU2xpZGVyRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQE91dHB1dCgpIGNwU2xpZGVyRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlck9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlckNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuICBAT3V0cHV0KCkgY29sb3JQaWNrZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oZmFsc2UpO1xuXG4gIEBPdXRwdXQoKSBjcFByZXNldENvbG9yc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIGhhbmRsZUNsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Rm9jdXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSkgaGFuZGxlRm9jdXMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRGb2N1cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBoYW5kbGVJbnB1dChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3NlcnZpY2U6IENvbG9yUGlja2VyU2VydmljZSkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbXBSZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNwVG9nZ2xlKSB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgY2hhbmdlcy5jcFRvZ2dsZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nICYmICFjaGFuZ2VzLmNwVG9nZ2xlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZURpYWxvZygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihjaGFuZ2VzLmNvbG9yVG9nZ2xlKXtcbiAgICAgIHRoaXMuZGlhbG9nLnNldENvbG9yVG9nZ2xlKGNoYW5nZXMuY29sb3JUb2dnbGUuY3VycmVudFZhbHVlKVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jb2xvclBpY2tlcikge1xuICAgICAgaWYgKHRoaXMuZGlhbG9nICYmICF0aGlzLmlnbm9yZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgICAgIHRoaXMuZGlhbG9nLnNldEluaXRpYWxDb2xvcihjaGFuZ2VzLmNvbG9yUGlja2VyLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpYWxvZy5zZXRDb2xvckZyb21TdHJpbmcoY2hhbmdlcy5jb2xvclBpY2tlci5jdXJyZW50VmFsdWUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pZ25vcmVDaGFuZ2VzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuY3BQcmVzZXRMYWJlbCB8fCBjaGFuZ2VzLmNwUHJlc2V0Q29sb3JzKSB7XG4gICAgICBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuc2V0UHJlc2V0Q29uZmlnKHRoaXMuY3BQcmVzZXRMYWJlbCwgdGhpcy5jcFByZXNldENvbG9ycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZ0NyZWF0ZWQpIHtcbiAgICAgIGxldCB2Y1JlZiA9IHRoaXMudmNSZWY7XG5cbiAgICAgIHRoaXMuZGlhbG9nQ3JlYXRlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmNwVXNlUm9vdFZpZXdDb250YWluZXIgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgIT09ICdpbmxpbmUnKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzT2ZSb290Q29tcG9uZW50ID0gdGhpcy5hcHBSZWYuY29tcG9uZW50VHlwZXNbMF07XG4gICAgICAgIGNvbnN0IGFwcEluc3RhbmNlID0gdGhpcy5pbmplY3Rvci5nZXQoY2xhc3NPZlJvb3RDb21wb25lbnQpO1xuXG4gICAgICAgIHZjUmVmID0gYXBwSW5zdGFuY2UudmNSZWYgfHwgYXBwSW5zdGFuY2Uudmlld0NvbnRhaW5lclJlZiB8fCB0aGlzLnZjUmVmO1xuXG4gICAgICAgIGlmICh2Y1JlZiA9PT0gdGhpcy52Y1JlZikge1xuICAgICAgICAgIGNvbnNvbGUud2FybignWW91IGFyZSB1c2luZyBjcFVzZVJvb3RWaWV3Q29udGFpbmVyLCAnICtcbiAgICAgICAgICAgICdidXQgdGhlIHJvb3QgY29tcG9uZW50IGlzIG5vdCBleHBvc2luZyB2aWV3Q29udGFpbmVyUmVmIScgK1xuICAgICAgICAgICAgJ1BsZWFzZSBleHBvc2UgaXQgYnkgYWRkaW5nIFxcJ3B1YmxpYyB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxcJyB0byB0aGUgY29uc3RydWN0b3IuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcEZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb2xvclBpY2tlckNvbXBvbmVudCk7XG4gICAgICBjb25zdCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoW10sIHZjUmVmLnBhcmVudEluamVjdG9yKTtcblxuICAgICAgdGhpcy5jbXBSZWYgPSB2Y1JlZi5jcmVhdGVDb21wb25lbnQoY29tcEZhY3RvcnksIDAsIGluamVjdG9yLCBbXSk7XG5cbiAgICAgIHRoaXMuY21wUmVmLmluc3RhbmNlLnNldHVwRGlhbG9nKFxuICAgICAgICB0aGlzLmNvbG9yVG9nZ2xlLFxuICAgICAgICB0aGlzLCB0aGlzLmVsUmVmLCB0aGlzLmNvbG9yUGlja2VyLFxuICAgICAgICB0aGlzLmNwV2lkdGgsIHRoaXMuY3BIZWlnaHQsIHRoaXMuY3BEaWFsb2dEaXNwbGF5LCB0aGlzLmNwRmFsbGJhY2tDb2xvcixcbiAgICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCwgdGhpcy5jcE91dHB1dEZvcm1hdCwgdGhpcy5jcERpc2FibGVJbnB1dCxcbiAgICAgICAgdGhpcy5jcElnbm9yZWRFbGVtZW50cywgdGhpcy5jcFNhdmVDbGlja091dHNpZGUsIHRoaXMuY3BVc2VSb290Vmlld0NvbnRhaW5lcixcbiAgICAgICAgdGhpcy5jcFBvc2l0aW9uLCB0aGlzLmNwUG9zaXRpb25PZmZzZXQsIHRoaXMuY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdyxcbiAgICAgICAgdGhpcy5jcFByZXNldExhYmVsLCB0aGlzLmNwUHJlc2V0Q29sb3JzLCB0aGlzLmNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoLFxuICAgICAgICB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlLCB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3MsXG4gICAgICAgIHRoaXMuY3BPS0J1dHRvbiwgdGhpcy5jcE9LQnV0dG9uQ2xhc3MsIHRoaXMuY3BPS0J1dHRvblRleHQsXG4gICAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b24sIHRoaXMuY3BDYW5jZWxCdXR0b25DbGFzcywgdGhpcy5jcENhbmNlbEJ1dHRvblRleHQsXG4gICAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbiwgdGhpcy5jcEFkZENvbG9yQnV0dG9uQ2xhc3MsIHRoaXMuY3BBZGRDb2xvckJ1dHRvblRleHQsXG4gICAgICAgIHRoaXMuY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzKTtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0aGlzLmNtcFJlZi5pbnN0YW5jZTtcblxuICAgICAgICBpZiAodGhpcy52Y1JlZiAhPT0gdmNSZWYpIHtcbiAgICAgICAgICB0aGlzLmNtcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICB0aGlzLmRpYWxvZy5vcGVuRGlhbG9nKHRoaXMuY29sb3JQaWNrZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgIHRoaXMuZGlhbG9nLmNsb3NlRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY3BUb2dnbGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJPcGVuLmVtaXQodGhpcy5jb2xvclBpY2tlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDbG9zZS5lbWl0KHRoaXMuY29sb3JQaWNrZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb2xvckNoYW5nZWQodmFsdWU6IHN0cmluZywgaWdub3JlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlQ2hhbmdlcyA9IGlnbm9yZTtcblxuICAgIHRoaXMuY29sb3JQaWNrZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgY29sb3JDYW5jZWxlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyQ2FuY2VsLmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xvclNlbGVjdGVkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyU2VsZWN0LmVtaXQodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGlucHV0Rm9jdXMoKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLmNwSWdub3JlZEVsZW1lbnRzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtID09PSBlbGVtZW50KTtcblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhaWdub3JlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMub3BlbkRpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbnB1dENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICB0aGlzLmRpYWxvZy5zZXRDb2xvckZyb21TdHJpbmcodmFsdWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyID0gdmFsdWU7XG5cbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDaGFuZ2UuZW1pdCh0aGlzLmNvbG9yUGlja2VyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5wdXRDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNwSW5wdXRDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgc2xpZGVyQ2hhbmdlZChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jcFNsaWRlckNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlkZXJEcmFnRW5kKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNwU2xpZGVyRHJhZ0VuZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlkZXJEcmFnU3RhcnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY3BTbGlkZXJEcmFnU3RhcnQuZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgcHJlc2V0Q29sb3JzQ2hhbmdlZCh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLmNwUHJlc2V0Q29sb3JzQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3JldmVyc2UnXG59KVxuZXhwb3J0IGNsYXNzIFJldmVyc2VQaXBlIHtcbiAgdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERuZE1vZHVsZSB9IGZyb20gJ25nMi1kbmQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyRGlyZWN0aXZlLCBUZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xvcnBpY2tlci9oZWxwZXJzJztcbmltcG9ydCB7IENvbG9yUGlja2VyU2VydmljZSB9IGZyb20gJy4vY29sb3JwaWNrZXIvY29sb3ItcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sb3JXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9jb2xvci13aWRnZXQvY29sb3Itd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29sb3ItbGlzdC9jb2xvci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWNvbG9yZHJvcC9zZWFyY2gtY29sb3Jkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkZhYk1vZHVsZSwgU2VtVWlCdXR0b25Nb2R1bGUsIFNlbVVpQnV0dG9uRG5kTW9kdWxlIH0gZnJvbSAnQGZyb250ci9zZW0tdWknO1xuaW1wb3J0IHsgUmV2ZXJzZVBpcGUgfSBmcm9tICcuL3NlbS1hcnJheS1yZXZlcnNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTZW1VaUJ1dHRvbkZhYk1vZHVsZSxcbiAgICBTZW1VaUJ1dHRvbk1vZHVsZSxcbiAgICBTZW1VaUJ1dHRvbkRuZE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERuZE1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbG9yV2lkZ2V0Q29tcG9uZW50LFxuICAgIFNlYXJjaENvbG9yZHJvcENvbXBvbmVudCxcbiAgICBDb2xvckxpc3RDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJEaXJlY3RpdmUsXG4gICAgVGV4dERpcmVjdGl2ZSxcbiAgICBTbGlkZXJEaXJlY3RpdmUsXG4gICAgUmV2ZXJzZVBpcGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbIENvbG9yUGlja2VyQ29tcG9uZW50IF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb2xvcldpZGdldENvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckRpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFsgQ29sb3JQaWNrZXJTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtQ29sb3JzTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsyQkFKRDs7Ozs7OztBQ0FBO0lBK0NFLDhCQUFtRCxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztpQ0FHM0IsSUFBSSxZQUFZLEVBQU87S0FIUztJQVZ2RSxzQkFDSSxtREFBaUI7Ozs7O1FBRHJCLFVBQ3NCLFNBQWM7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUE7WUFDN0IsSUFBRyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDNUI7WUFDRCxJQUFHLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDO2FBQ3BEO1NBQ0Y7OztPQUFBOzs7OztJQUtELGlEQUFrQjs7OztJQUFsQixV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LEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7Ozs7OztJQUczQyxtQ0FBUzs7OztjQUFDLEtBQVU7O1FBQzFCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7UUFDbkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDOztRQUVyRCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzs7UUFDekQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUN6RjthQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENB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