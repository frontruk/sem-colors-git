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
class SemColorsService {
    constructor() { }
}
SemColorsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
SemColorsService.ctorParameters = () => [];
/** @nocollapse */ SemColorsService.ngInjectableDef = defineInjectable({ factory: function SemColorsService_Factory() { return new SemColorsService(); }, token: SemColorsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ColorWidgetComponent {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.updateColorPreset = new EventEmitter();
    }
    /**
     * @param {?} colorlist
     * @return {?}
     */
    set userColorsPallete(colorlist) {
        this.colorPallete = colorlist;
        if (colorlist.length === 0) {
            this.lastColor = '#ffffff';
        }
        if (colorlist.length !== 0) {
            this.lastColor = colorlist[colorlist.length - 1];
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updatedColorPreset(event) {
        console.log('event', event);
        this.updateColorPreset.emit(event);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (isPlatformBrowser(this.platformId)) {
            if (changes.colorDropEnabled) {
                this.colorDropEnabled = changes.colorDropEnabled.currentValue;
            }
        }
    }
}
ColorWidgetComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'sembler-color-widget',
                template: ` <!--// RGBA-->
  <span
    [colorToggle]="colorDropEnabled"
    [cpWidth]="overlayWidth"
    [cpAlphaChannel]="'always'"
    [cpPresetColors]="colorPallete"
    [cpAddColorButton]="true"
    [style.background]="lastColor"
    [cpToggle]="true"
    [cpDialogDisplay]="'inline'"
    [cpCancelButton]="false"
    [cpCancelButtonClass]= "'btn btn-primary btn-xs'"
    [(colorPicker)]="lastColor"
    (cpPresetColorsChange)="updatedColorPreset($event)"
  >
  </span>

`
            },] },
];
/** @nocollapse */
ColorWidgetComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ColorWidgetComponent.propDecorators = {
    colorDropEnabled: [{ type: Input }],
    overlayWidth: [{ type: Input }],
    userColorsPallete: [{ type: Input, args: ['userColorsPallete',] }],
    updateColorPreset: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SearchColordropComponent {
    constructor() {
        this.saveColor = new EventEmitter();
        this.changeSelectedColor = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        console.log('color', value);
        this.color = value.color;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    addColor(color) {
        /** @type {?} */
        const setColor = {
            type: 'color',
            color: color.value
        };
        this.saveColor.emit(setColor);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeColor(event) {
        /** @type {?} */
        const color = { type: 'color', color: event };
        this.changeSelectedColor.emit(color);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SearchColordropComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'sembler-search-colordrop',
                template: `<span class="input-sufix">
       <input
         class="sem-input"
         type="text"
         [ngModel]="color"
         (ngModelChange)="changeColor($event)"
         [value]='color'
         #colorValue
       />
      <span
      (click)="addColor(colorValue)"
      class="sem-icon-search sufix">
      </span>
</span>

`,
                styles: [`:host{display:block}`]
            },] },
];
/** @nocollapse */
SearchColordropComponent.ctorParameters = () => [];
SearchColordropComponent.propDecorators = {
    selected: [{ type: Input, args: ['selected',] }],
    saveColor: [{ type: Output }],
    changeSelectedColor: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ColorListComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.colorList = [{}];
        this.componentData = null;
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    set selected(colors) {
        this.colorList = colors;
    }
    /**
     * @param {?} selectedColor
     * @return {?}
     */
    onDragStartColorDrop(selectedColor) {
        // this._colorService.publishData(selectedColor);
    }
    /**
     * @return {?}
     */
    loadColorWidget() {
        // this.componentData = { component: ColorSelectorComponent, inputs: { showNum: 0 }}
    }
    /**
     * @param {?} colordrop
     * @return {?}
     */
    onDragStart(colordrop) {
        console.log('started in color selector component', colordrop);
    }
}
ColorListComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'sembler-color-list',
                template: `<!--<ul>-->
 <!--<li *ngFor="let item of colorList ">-->
    <!--<div-->
      <!--class="color-drop"-->


      <!--[style.background]="item.color"-->

      <!--dnd-draggable-->
      <!--[dragEnabled]="true"-->
      <!--[dragData]="item"-->
      <!--(onDragStart)="onDragStart(item)"-->
      <!--[dropZones]="['widget-dropZone']"-->

     <!--&gt;-->
       <!--<span class="btn-title">-->
        <!--{{item.color}}-->
       <!--</span>-->
     <!--</div>-->
  <!--</li>-->
<!--</ul>-->

<!--[style.color]="item.color"-->
<!--dnd-draggable-->
<!--[ dragEnabled]="true"-->
<!--[dragData]="colordrop"-->
<!--[dropZones]="['widget-dropZone',-->
<!--'canvas-dropZone',-->
<!--'rowWrapper-dropZone',-->
<!--'row-dropZone',-->
<!--'column-dropZone',-->
<!--'widget-dropZone' ]"-->
`,
                styles: [``]
            },] },
];
/** @nocollapse */
ColorListComponent.ctorParameters = () => [
    { type: ElementRef }
];
ColorListComponent.propDecorators = {
    selected: [{ type: Input, args: ['colors',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function detectIE() {
    /** @type {?} */
    let ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    /** @type {?} */
    const msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
class TextDirective {
    constructor() {
        this.newValue = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    inputChange(event) {
        /** @type {?} */
        const value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            /** @type {?} */
            const numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    }
}
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
class SliderDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.dragEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.newValue = new EventEmitter();
        this.listenerMove = (event) => this.move(event);
        this.listenerStop = () => this.stop();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    mouseDown(event) {
        this.start(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    touchStart(event) {
        this.start(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    move(event) {
        event.preventDefault();
        this.setCursor(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    start(event) {
        this.setCursor(event);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    }
    /**
     * @return {?}
     */
    stop() {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getX(event) {
        /** @type {?} */
        const position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getY(event) {
        /** @type {?} */
        const position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setCursor(event) {
        /** @type {?} */
        const width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */
        const height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */
        const x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */
        const y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    }
}
SliderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[slider]'
            },] },
];
/** @nocollapse */
SliderDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
class SliderPosition {
    /**
     * @param {?} h
     * @param {?} s
     * @param {?} v
     * @param {?} a
     */
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
class SliderDimension {
    /**
     * @param {?} h
     * @param {?} s
     * @param {?} v
     * @param {?} a
     */
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Cmyk {
    /**
     * @param {?} c
     * @param {?} m
     * @param {?} y
     * @param {?} k
     */
    constructor(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
}
class Hsla {
    /**
     * @param {?} h
     * @param {?} s
     * @param {?} l
     * @param {?} a
     */
    constructor(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
}
class Hsva {
    /**
     * @param {?} h
     * @param {?} s
     * @param {?} v
     * @param {?} a
     */
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
class Rgba {
    /**
     * @param {?} r
     * @param {?} g
     * @param {?} b
     * @param {?} a
     */
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ColorPickerService {
    constructor() {
        this.active = null;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    setActive(active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
            this.active.closeColorPicker();
        }
        this.active = active;
    }
    /**
     * @param {?} hsva
     * @return {?}
     */
    hsva2hsla(hsva) {
        /** @type {?} */
        const h = hsva.h;
        /** @type {?} */
        const s = hsva.s;
        /** @type {?} */
        const v = hsva.v;
        /** @type {?} */
        const a = hsva.a;
        if (v === 0) {
            return new Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new Hsla(h, 1, 1, a);
        }
        else {
            /** @type {?} */
            const l = v * (2 - s) / 2;
            return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    }
    /**
     * @param {?} hsla
     * @return {?}
     */
    hsla2hsva(hsla) {
        /** @type {?} */
        const h = Math.min(hsla.h, 1);
        /** @type {?} */
        const s = Math.min(hsla.s, 1);
        /** @type {?} */
        const l = Math.min(hsla.l, 1);
        /** @type {?} */
        const a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new Hsva(h, 0, 0, a);
        }
        else {
            /** @type {?} */
            const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new Hsva(h, 2 * (v - l) / v, v, a);
        }
    }
    /**
     * @param {?} hsva
     * @return {?}
     */
    hsvaToRgba(hsva) {
        /** @type {?} */
        let r;
        /** @type {?} */
        let g;
        /** @type {?} */
        let b;
        /** @type {?} */
        const h = hsva.h;
        /** @type {?} */
        const s = hsva.s;
        /** @type {?} */
        const v = hsva.v;
        /** @type {?} */
        const a = hsva.a;
        /** @type {?} */
        const i = Math.floor(h * 6);
        /** @type {?} */
        const f = h * 6 - i;
        /** @type {?} */
        const p = v * (1 - s);
        /** @type {?} */
        const q = v * (1 - f * s);
        /** @type {?} */
        const t = v * (1 - (1 - f) * s);
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
    }
    /**
     * @param {?} rgba
     * @return {?}
     */
    rgbaToCmyk(rgba) {
        /** @type {?} */
        const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1);
        }
        else {
            /** @type {?} */
            const c = (1 - rgba.r - k) / (1 - k);
            /** @type {?} */
            const m = (1 - rgba.g - k) / (1 - k);
            /** @type {?} */
            const y = (1 - rgba.b - k) / (1 - k);
            return new Cmyk(c, m, y, k);
        }
    }
    /**
     * @param {?} rgba
     * @return {?}
     */
    rgbaToHsva(rgba) {
        /** @type {?} */
        let h;
        /** @type {?} */
        let s;
        /** @type {?} */
        const r = Math.min(rgba.r, 1);
        /** @type {?} */
        const g = Math.min(rgba.g, 1);
        /** @type {?} */
        const b = Math.min(rgba.b, 1);
        /** @type {?} */
        const a = Math.min(rgba.a, 1);
        /** @type {?} */
        const max = Math.max(r, g, b);
        /** @type {?} */
        const min = Math.min(r, g, b);
        /** @type {?} */
        const v = max;
        /** @type {?} */
        const d = max - min;
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
    }
    /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    rgbaToHex(rgba, allowHex8) {
        /** @type {?} */
        let hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        if (allowHex8) {
            hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex;
    }
    /**
     * @param {?} rgba
     * @return {?}
     */
    denormalizeRGBA(rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    }
    /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    stringToHsva(colorString = '', allowHex8 = false) {
        /** @type {?} */
        let hsva = null;
        colorString = (colorString || '').toLowerCase();
        /** @type {?} */
        const stringParsers = [
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
        for (const key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                /** @type {?} */
                const parser = stringParsers[key];
                /** @type {?} */
                const match = parser.re.exec(colorString);
                /** @type {?} */
                const color = match && parser.parse(match);
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
    }
    /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    outputFormat(hsva, outputFormat, alphaChannel) {
        switch (outputFormat) {
            case 'hsla':
                /** @type {?} */
                const hsla = this.hsva2hsla(hsva);
                /** @type {?} */
                const hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                        hslaText.a + ')';
                }
                else {
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                }
            case 'rgba':
                /** @type {?} */
                const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                        Math.round(rgba.a * 100) / 100 + ')';
                }
                else {
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                }
            default:
                /** @type {?} */
                const allowHex8 = (alphaChannel === 'always' || alphaChannel === 'hex8');
                return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
        }
    }
}
ColorPickerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ColorPickerService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ColorPickerComponent {
    /**
     * @param {?} platformId
     * @param {?} elRef
     * @param {?} cdRef
     * @param {?} service
     */
    constructor(platformId, elRef, cdRef, service) {
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
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.slider = new SliderPosition(0, 0, 0, 0);
            /** @type {?} */
            const hueWidth = this.hueSlider.nativeElement.offsetWidth;
            /** @type {?} */
            const alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
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
            this.listenerMouseDown = (event) => { this.onMouseDown(event); };
            this.listenerResize = () => { this.onResize(); };
            this.openDialog(this.initialColor, false);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.closeDialog();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId) && this.cpWidth !== 100) {
            /** @type {?} */
            const hueWidth = this.hueSlider.nativeElement.offsetWidth;
            /** @type {?} */
            const alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
            this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
            this.updateColorPicker(false);
            this.cdRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    addColor() { }
    /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    openDialog(color, emit = true) {
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
    }
    /**
     * @return {?}
     */
    closeDialog() {
        if (isPlatformBrowser(this.platformId)) {
            this.closeColorPicker();
        }
    }
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
    setupDialog(colorToggle, instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass) {
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
    }
    /**
     * @param {?} color
     * @return {?}
     */
    setInitialColor(color) {
        this.initialColor = color;
    }
    /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    setPresetConfig(cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    }
    /**
     * @param {?} colorDropEnabled
     * @return {?}
     */
    setColorToggle(colorDropEnabled) {
        this.colorToggle = colorDropEnabled;
    }
    /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    setColorFromString(value, emit = true, update = true) {
        /** @type {?} */
        let hsva;
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
    }
    /**
     * @return {?}
     */
    onResize() {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
        else if (this.cpDialogDisplay !== 'inline') {
            this.closeColorPicker();
        }
    }
    /**
     * @param {?} slider
     * @return {?}
     */
    onDragEnd(slider) {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
    }
    /**
     * @param {?} slider
     * @return {?}
     */
    onDragStart(slider) {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        if (!this.isIE10 && this.cpDialogDisplay === 'popup' &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            this.cpIgnoredElements.filter((item) => item === event.target).length === 0) {
            if (!this.cpSaveClickOutside) {
                this.setColorFromString(this.initialColor, false);
                this.directiveInstance.colorChanged(this.initialColor);
            }
            this.closeColorPicker();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAcceptColor(event) {
        event.stopPropagation();
        if (this.cpDialogDisplay === 'popup') {
            this.closeColorPicker();
        }
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCancelColor(event) {
        event.stopPropagation();
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay === 'popup') {
            this.directiveInstance.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
        this.directiveInstance.colorCanceled();
    }
    /**
     * @return {?}
     */
    onFormatToggle() {
        this.format = (this.format + 1) % 3;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onColorChange(value) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHueChange(value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onAlphaChange(value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHexInput(value) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onRedInput(value) {
        /** @type {?} */
        const rgba = this.service.hsvaToRgba(this.hsva);
        rgba.r = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({ input: 'red', value: rgba.r, color: this.outputColor });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onBlueInput(value) {
        /** @type {?} */
        const rgba = this.service.hsvaToRgba(this.hsva);
        rgba.b = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({ input: 'blue', value: rgba.b, color: this.outputColor });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onGreenInput(value) {
        /** @type {?} */
        const rgba = this.service.hsvaToRgba(this.hsva);
        rgba.g = value.v / value.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'green',
            value: rgba.g,
            color: this.outputColor
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onAlphaInput(value) {
        this.hsva.a = value.v / value.rg;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHueInput(value) {
        this.hsva.h = value.v / value.rg;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onLightnessInput(value) {
        /** @type {?} */
        const hsla = this.service.hsva2hsla(this.hsva);
        hsla.l = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'lightness',
            value: hsla.l,
            color: this.outputColor
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSaturationInput(value) {
        /** @type {?} */
        const hsla = this.service.hsva2hsla(this.hsva);
        hsla.s = value.v / value.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.inputChanged({
            input: 'saturation',
            value: hsla.s,
            color: this.outputColor
        });
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    onAddPresetColor(event, value) {
        event.stopPropagation();
        if (!this.cpPresetColors.filter((color) => (color === value)).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    onRemovePresetColor(event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter((color) => (color !== value));
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
    /**
     * @return {?}
     */
    openColorPicker() {
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout(() => {
                this.hidden = false;
                this.setDialogPosition();
                this.cdRef.detectChanges();
            }, 0);
            this.directiveInstance.toggle(true);
            if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
            }
            window.addEventListener('resize', this.listenerResize);
        }
    }
    /**
     * @return {?}
     */
    closeColorPicker() {
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
    }
    /**
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    updateColorPicker(emit = true, update = true) {
        if (this.sliderDimMax) {
            /** @type {?} */
            const lastOutput = this.outputColor;
            /** @type {?} */
            const hsla = this.service.hsva2hsla(this.hsva);
            /** @type {?} */
            const rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
            /** @type {?} */
            const hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
            if (update) {
                this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
                /** @type {?} */
                const allowHex8 = this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'hex8';
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
    }
    /**
     * @return {?}
     */
    setDialogPosition() {
        if (this.cpDialogDisplay === 'inline') {
            this.position = 'relative';
        }
        else {
            /** @type {?} */
            const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
            /** @type {?} */
            let position = 'static';
            /** @type {?} */
            let transform = '';
            /** @type {?} */
            let style = null;
            /** @type {?} */
            let parentNode = null;
            /** @type {?} */
            let transformNode = null;
            /** @type {?} */
            let node = this.directiveElementRef.nativeElement.parentNode;
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
            const boxDirective = this.createBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
            if (this.useRootViewContainer || (position === 'fixed' && !parentNode)) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode === null) {
                    parentNode = node;
                }
                /** @type {?} */
                const boxParent = this.createBox(parentNode, (position !== 'fixed'));
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
    }
    /**
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    createBox(element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }
    /**
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    isDescendant(parent, child) {
        /** @type {?} */
        let node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
}
ColorPickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'color-picker',
                template: `<div
  #dialogPopup
  class="color-picker"
  [style.visibility]="hidden || !show ? 'hidden' : 'visible'" [style.top.px]="top"
  [style.left.px]="left"
  [style.position]="position"
  [style.height.px]="cpHeight"
  [style.width]="colorToggle ? '100%' : cpWidth + 'px'"
>
  <div
    *ngIf="!colorToggle"
    class="color-input-container sem-color-light-inputs pb1">
    <div
      class="flex justify-end my1 sem-typo--figcaption"
      *ngIf="!cpDisableInput" (click)="onFormatToggle()"
    >
      <span class="self-start sem--link ">Change format</span>
      <div class="sem-color-switch--control--link"></div>
    </div>
    <div class="sem-color-switch flex items-center">
      <ul class="list-reset sem-color-switch--colors flex-auto">
        <li *ngIf="!cpDisableInput" [style.display]="format !== 2 ? 'none' : 'block'">
          <div class="flex flex-wrap content-around">
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes mr1 "
                type="number"
                pattern="[0-9]*" min="0" max="360"
                [text] [rg]="360" [value]="hslaText?.h" (newValue)="onHueInput($event)"/>
              <span class="block center sem-typo--figcaption">H</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes mr1 table-cell"
                type="number"
                pattern="[0-9]*" min="0" max="100"
                [text] [rg]="100" [value]="hslaText?.s" (newValue)="onSaturationInput($event)"/>
              <span class="block center sem-typo--figcaption">S</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes mr1 table-cell"
                type="number"
                pattern="[0-9]*" min="0" max="100"
                [text] [rg]="100" [value]="hslaText?.l" (newValue)="onLightnessInput($event)"/>
              <span class="block center sem-typo--figcaption">L</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes"
                *ngIf="cpAlphaChannel!=='disabled'"
                type="number"
                pattern="[0-9]+([\.,][0-9]{1,2})?" min="0" max="1" step="0.1"
                [text] [rg]="1" [value]="hslaText?.a" (newValue)="onAlphaInput($event)"/>
              <span
                *ngIf="cpAlphaChannel!=='disabled'"
                class="block center sem-typo--figcaption">A</span>
            </div>
          </div>
        </li>
        <li *ngIf="!cpDisableInput" [style.display]="format !== 1 ? 'none' : 'block'">
          <div class="flex flex-wrap content-around">
            <div class="col-3 ">
              <input
                class="sem-input boxes"
                type="number"  pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.r" (newValue)="onRedInput($event)"/>
              <span class="block center sem-typo--figcaption">R</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes"
                type="number" pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.g" (newValue)="onGreenInput($event)"/>
              <span class="block center sem-typo--figcaption">G</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes"
                type="number"  pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.b" (newValue)="onBlueInput($event)"/>
              <span class="block center sem-typo--figcaption">B</span>
            </div>
            <div class="col-3 ">
              <input
                *ngIf="cpAlphaChannel!=='disabled'"
                class="sem-input boxes"
                type="number"
                pattern="[0-9]+([\.,][0-9]{1,2})?"
                min="0" max="1" step="0.1"
                [text] [rg]="1"
                [value]="rgbaText?.a" (newValue)="onAlphaInput($event)"
              />
              <span
                *ngIf="cpAlphaChannel!=='disabled'"
                class="block center sem-typo--figcaption">A</span>
            </div>
          </div>
        </li>
        <li *ngIf="!cpDisableInput" [style.display]="format !== 0 ? 'none' : 'block'">

            <span class="input-sufix">
              <input
                class="sem-input"
                [text] [value]="hexText"
                (blur)="onHexInput(null)"
                (newValue)="onHexInput($event)"/>
              <span
                (click)="addColor()"
                class="sem-icon-search sufix">
              </span>
            </span>
          <span class="block center sem-typo--figcaption">Hex</span>
        </li>
      </ul>

    </div>
  </div>

  <div
    #hueSlider
    [style.display]="colorToggle ? 'none' : 'block'"
    class="hue"
    [slider] [rgX]="1" (newValue)="onHueChange($event)" (dragStart)="onDragStart('hue')" (dragEnd)="onDragEnd('hue')">
    <div class="cursor" [style.left.px]="slider.h"></div>

  </div>

  <div
    [style.display]="colorToggle ? 'none' : 'block'"
    *ngIf="cpDialogDisplay=='popup'"
    class="arrow arrow-{{cpPosition}}"
    [style.top.px]="arrowTop"></div>

  <div
    [style.display]="colorToggle ? 'none' : 'block'"
    class="saturation-lightness"
    [slider] [rgX]="1" [rgY]="1"
    [style.background-color]="hueSliderColor"
    (newValue)="onColorChange($event)"
    (dragStart)="onDragStart('saturation-lightness')"
    (dragEnd)="onDragEnd('saturation-lightness')">
    <div class="cursor" [style.top.px]="slider.v" [style.left.px]="slider.s"></div>
  </div>

  <div
    #alphaSlider
    class="alpha"
    [slider]
    [rgX]="1"
    [style.display]="colorToggle ? 'none' : 'block'"
    [style.background-color]="alphaSliderColor"
    (newValue)="onAlphaChange($event)"
    (dragStart)="onDragStart('alpha')"
    (dragEnd)="onDragEnd('alpha')">
    <div class="cursor" [style.left.px]="slider.a"></div>
  </div>

  <!--Color drops-->
  <div
    *ngIf="colorToggle"
    class="sem-color-drops">

    <ng-container *ngIf="cpPresetColors?.length || cpAddColorButton">
      <ul *ngIf="cpPresetColors?.length" class="sem-color-list sem-list-reset">
        <li
          *ngFor="let color of cpPresetColors | reverse"
          [style.backgroundColor]="color"
          (click)="setColorFromString(color)"
          class="block"
          dnd-draggable
          [dragEnabled]="true"
          [dragData]="color"
          (onDragStart)="onDragStart(color)"
          [dropZones]="['widget-dropZone']"
        >
          <span class="right-align block"> {{color}}</span>
          <span
            *ngIf="cpAddColorButton"
            class="color-delete sem-icon-close"
            (click)="onRemovePresetColor($event, color)"></span>
        </li>
      </ul>
      <div
        *ngIf="!cpPresetColors?.length && cpAddColorButton"
        class="{{cpPresetEmptyMessageClass}}
          ">{{cpPresetEmptyMessage}}</div>
    </ng-container>
  </div>


  <div
    *ngIf="!colorToggle"
    class="sem-color-swatches">
    <!--<div class="sem-color-swatches_current"></div>-->
      <button
        medium
        [style.background-color]="selectedColor"
        semui-button-dnd sem-importance="primary"
        *ngIf="cpAddColorButton"
        [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength"
        (click)="onAddPresetColor($event, selectedColor)"
      >
        Add Color
      </button>

    <div
      *ngIf="cpPresetColors?.length || cpAddColorButton"
      class="sem-color-swatches_preselected">

      <div
        *ngIf="!cpPresetColors?.length && cpAddColorButton"
        class="{{cpPresetEmptyMessageClass}}
          ">
        {{cpPresetEmptyMessage}}
      </div>

      <span
        *ngFor="let color of cpPresetColors | reverse"
        class="sem-button-rain-drop"
        [style.backgroundColor]="color"
        (click)="setColorFromString(color)"
      >
          <span
            *ngIf="cpAddColorButton"
            (click)="onRemovePresetColor($event, color)"
            class="sem-button-circle sem-button-delete sem-icon-close">
          </span>
       </span>
    </div>
  </div>

  <div
    *ngIf="colorToggle"
    class="dialog-container--footer color-input-container sem-color-light-inputs">
    <div
      class="flex justify-end my1 sem-typo--figcaption"
      *ngIf="!cpDisableInput" (click)="onFormatToggle()"
    >
      <span class="self-start sem--link ">Change format</span>
      <div class="sem-color-switch--control--link"></div>
    </div>
    <div class="sem-color-switch flex items-center">
      <ul class="list-reset sem-color-switch--colors flex-auto">
        <li *ngIf="!cpDisableInput" [style.display]="format !== 2 ? 'none' : 'block'">
          <div class="flex flex-wrap content-around pb1">
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes mr1 "
                type="number"
                pattern="[0-9]*" min="0" max="360"
                [text] [rg]="360" [value]="hslaText?.h" (newValue)="onHueInput($event)"/>
              <span class="block center sem-typo--figcaption">H</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes mr1 table-cell"
                type="number"
                pattern="[0-9]*" min="0" max="100"
                [text] [rg]="100" [value]="hslaText?.s" (newValue)="onSaturationInput($event)"/>
              <span class="block center sem-typo--figcaption">S</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes mr1 table-cell"
                type="number"
                pattern="[0-9]*" min="0" max="100"
                [text] [rg]="100" [value]="hslaText?.l" (newValue)="onLightnessInput($event)"/>
              <span class="block center sem-typo--figcaption">L</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes"
                *ngIf="cpAlphaChannel!=='disabled'"
                type="number"
                pattern="[0-9]+([\.,][0-9]{1,2})?" min="0" max="1" step="0.1"
                [text] [rg]="1" [value]="hslaText?.a" (newValue)="onAlphaInput($event)"/>
              <span
                *ngIf="cpAlphaChannel!=='disabled'"
                class="block center sem-typo--figcaption">A</span>
            </div>
          </div>
        </li>
        <li *ngIf="!cpDisableInput" [style.display]="format !== 1 ? 'none' : 'block'">
          <div class="flex flex-wrap content-around">
            <div class="col-3 ">
              <input
                class="sem-input boxes"
                type="number"  pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.r" (newValue)="onRedInput($event)"/>
              <span class="block center sem-typo--figcaption">R</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes"
                type="number" pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.g" (newValue)="onGreenInput($event)"/>
              <span class="block center sem-typo--figcaption">G</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input boxes"
                type="number"  pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.b" (newValue)="onBlueInput($event)"/>
              <span class="block center sem-typo--figcaption">B</span>
            </div>
            <div class="col-3 ">
              <input
                *ngIf="cpAlphaChannel!=='disabled'"
                class="sem-input boxes"
                type="number"
                pattern="[0-9]+([\.,][0-9]{1,2})?"
                min="0" max="1" step="0.1"
                [text] [rg]="1"
                [value]="rgbaText?.a" (newValue)="onAlphaInput($event)"
              />
              <span
                *ngIf="cpAlphaChannel!=='disabled'"
                class="block center sem-typo--figcaption">A</span>
            </div>
          </div>
        </li>
        <li *ngIf="!cpDisableInput" [style.display]="format !== 0 ? 'none' : 'block'">
                  <span class="input-grp">
                      <input
                        type="text"
                        class="sem-input"
                        [text] [value]="hexText"
                        (blur)="onHexInput(null)"
                        (newValue)="onHexInput($event)"
                      >
                      <button
                        sem-btn-fab
                        corner="none"
                        semui-theme="light"
                        sem-importance="primary"
                        small
                        *ngIf="cpAddColorButton"
                        [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength"
                        (click)="onAddPresetColor($event, selectedColor)"
                      >
                        <span class="sem-icon-send button-send"
                        ></span>
                      </button>
                  </span>
          <span class="block center sem-typo--figcaption">Hex</span>
        </li>
      </ul>

    </div>
  </div>

  <!-- START -->




 <!-- END -->

  <div *ngIf="cpOKButton || cpCancelButton" class="button-area">
    <button *ngIf="cpCancelButton" type="button" class="{{cpCancelButtonClass}}" (click)="onCancelColor($event)">{{cpCancelButtonText}}</button>
    <button *ngIf="cpOKButton" type="button" class="{{cpOKButtonClass}}" (click)="onAcceptColor($event)">{{cpOKButtonText}}</button>
  </div>
</div>
`,
                styles: [`body{margin:0;font-size:100%}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}[class*=" sem-icon-"],[class^=sem-icon-]{font-family:sembler-ico!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sem-icon-drag:before{content:"\\e946";color:#ccc}.sem-icon-product:before{content:"\\e913";color:#444d63}.sem-icon-form:before{content:"\\e92a";color:#444d63}.sem-icon-location:before{content:"\\e914";color:#444d63}.sem-icon-chart:before{content:"\\e935";color:#444d63}.sem-icon-text:before{content:"\\e945";color:#444d63}.sem-icon-location2:before{content:"\\e947";color:#444d63}.sem-icon-I:before{content:"\\e906"}.sem-icon-S:before{content:"\\e907"}.sem-icon-U:before{content:"\\e908"}.sem-icon-B:before{content:"\\e909"}.sem-icon-justify:before{content:"\\e90c";color:#ccc}.sem-icon-left:before{content:"\\e910";color:#ccc}.sem-icon-middle:before{content:"\\e911";color:#ccc}.sem-icon-right:before{content:"\\e912";color:#ccc}.sem-icon-colour2:before{content:"\\e90a"}.sem-icon-brush:before{content:"\\e90b"}.sem-icon-folder2:before{content:"\\e90d"}.sem-icon-logout2:before{content:"\\e90e"}.sem-icon-ol2:before{content:"\\e90f";color:#ccc}.sem-icon-send:before{content:"\\e905";color:#05dcb6}.sem-icon-repeat:before{content:"\\e900"}.sem-icon-crop:before{content:"\\e901"}.sem-icon-case:before{content:"\\e902"}.sem-icon-resize:before{content:"\\e903"}.sem-icon-check:before{content:"\\e904"}.sem-icon-ol:before{content:"\\e915";color:#ccc}.sem-icon-ul:before{content:"\\e916";color:#ccc}.sem-icon-folder:before{content:"\\e917"}.sem-icon-close:before{content:"\\e918"}.sem-icon-inbox:before{content:"\\e919"}.sem-icon-home:before{content:"\\e91a"}.sem-icon-share:before{content:"\\e91b"}.sem-icon-hamburger:before{content:"\\e91c"}.sem-icon-lock:before{content:"\\e91d"}.sem-icon-unlock:before{content:"\\e91e"}.sem-icon-ellipse:before{content:"\\e91f"}.sem-icon-volume:before{content:"\\e920"}.sem-icon-play:before{content:"\\e921"}.sem-icon-video:before{content:"\\e922";color:#444d63}.sem-icon-design:before{content:"\\e923"}.sem-icon-address:before{content:"\\e924"}.sem-icon-center_align:before{content:"\\e925";color:#ccc}.sem-icon-justify2:before{content:"\\e926";color:#ccc}.sem-icon-right_align:before{content:"\\e927";color:#ccc}.sem-icon-left_align:before{content:"\\e928";color:#ccc}.sem-icon-carousel:before{content:"\\e929"}.sem-icon-image:before{content:"\\e92b";color:#444d63}.sem-icon-back:before{content:"\\e92c"}.sem-icon-delete:before{content:"\\e92d";color:#d0021b}.sem-icon-duplicate:before{content:"\\e92e"}.sem-icon-link:before{content:"\\e92f"}.sem-icon-style:before{content:"\\e930"}.sem-icon-colour:before{content:"\\e931"}.sem-icon-add_accent .path1:before{content:"\\e932";color:#fafafa}.sem-icon-add_accent .path2:before{content:"\\e933";margin-left:-1em;color:#05dcb6}.sem-icon-send2:before{content:"\\e934";color:#05dcb6}.sem-icon-search:before{content:"\\e936"}.sem-icon-colour_accent .path1:before{content:"\\e937";color:#05dcb6}.sem-icon-colour_accent .path2:before{content:"\\e938";margin-left:-1em;color:#fff}.sem-icon-profile-accent .path1:before{content:"\\e939";color:#05dcb6}.sem-icon-profile-accent .path2:before{content:"\\e93a";margin-left:-1em;color:#fff}.sem-icon-down_arrow:before{content:"\\e93b"}.sem-icon-chat_accent .path1:before{content:"\\e93c";color:#fafafa}.sem-icon-chat_accent .path2:before{content:"\\e93d";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path3:before{content:"\\e93e";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path4:before{content:"\\e93f";margin-left:-1em;color:#05dcb6}.sem-icon-logout:before{content:"\\e940"}.sem-icon-payment:before{content:"\\e941"}.sem-icon-settings:before{content:"\\e942"}.sem-icon-sites:before{content:"\\e943"}.sem-icon-profile:before{content:"\\e944"}.sem-list-reset{list-style:none;padding-left:0;margin:0}.sem--corner ._top{border-radius:50% 0 50% 50%;background-clip:padding-box}.semui-form-select select{display:inline-block;margin-left:10%;width:80%;margin-right:10%;border:1px solid #d8cfcf;border-radius:10px;font-size:1.8em;color:#d8cfcf;cursor:pointer}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input.sem-input{width:calc(100%);outline:0;border-radius:10px 10px 0;background-clip:padding-box;border:1px solid #9498a3}.no-padding-list .sem-ul .sem-li,.no-padding-list .sem-ul-icon-list .sem-li{padding-top:0;padding-bottom:0}.sem-ul-icon-list .sem-li{white-space:nowrap;-webkit-font-smoothing:antialiased;padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none}.sem-ul-icon-list .sem-li:not([disabled]){cursor:pointer}.sem-ul-icon-list .sem-li.active img.icon-default{display:none}.sem-ul-icon-list .sem-li.active img.icon-hover{display:inline-block}.sem-ul-icon-list .sem-li img{display:inline-block;vertical-align:middle;margin-bottom:4px}.sem-ul-icon-list .sem-li img.icon-hover{display:none}.sem-ul{list-style:none;width:100%;margin:0 auto;padding:0}.sem-ul .sem-li{padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none;border-bottom:1px solid #ccc}.sem-ul .sem-li:not([disabled]){cursor:pointer}.sem-ul .sem-li.active{border-radius:7px 0 0 7px;background-clip:padding-box}ul.corner_all li:first-child{border-radius:6px 6px 0 0;background-clip:padding-box}ul.corner_all li:last-child{border-radius:0 0 11px 11px;background-clip:padding-box}.corner_top{border-radius:6px 6px 0 0;background-clip:padding-box}.corner_bottom{border-radius:0 0 6px 6px;background-clip:padding-box}.corner_none{border-radius:0;background-clip:padding-box}.corner_all{border-radius:6px;background-clip:padding-box}.corner_right{border-radius:6px 0 0 6px;background-clip:padding-box}.corner_left{border-radius:0 6px 6px 0;background-clip:padding-box}.corner_top-left{border-radius:0 6px 6px;background-clip:padding-box}.corner_top-right{border-radius:6px 0 6px 6px;background-clip:padding-box}.corner_bottom-left,.corner_bottom-right{border-radius:6px 6px 0;background-clip:padding-box}.dialog-container,.sem-colorlist--container,.sem-shadow,.sidebar-container{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dialog-container:hover,.sem-colorlist--container:hover,.sem-shadow:hover,.sidebar-container:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.sem-button-dnd{height:70px;width:70px;margin:5px;border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sem-button-dnd--medium{height:50px;width:50px}.sem-button-dnd--small{height:30px;width:30px}.sem-btn-fab{outline:0;cursor:pointer;display:inline-block;border:none}.sem-btn-fab:not([disabled]){cursor:pointer}.sem-btn-fab img{width:16px;height:16px;display:block;vertical-align:middle}.sem-btn-fab--default>span{display:block;width:16px;height:16px}.sem-btn-fab--default_small{padding:.4rem}.sem-btn-fab--default_small>span{display:block}.sem-btn-fab--primary>span,.sem-btn-fab--secondary>span{display:block;width:16px;height:16px}.sem-btn-fab--corner_none{border-radius:50%;background-clip:padding-box}.sem-btn-fab--corner_right{border-radius:50% 0 0 50%;background-clip:padding-box}.sem-btn-fab--corner_left{border-radius:0 50% 50% 0;background-clip:padding-box}.sem-btn-fab--corner_top-left{border-radius:0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_top-right{border-radius:50% 0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_bottom-left,.sem-btn-fab--corner_bottom-right{border-radius:50% 50% 0;background-clip:padding-box}.semui-tabs .semui-tabs--navlist_horizontal{border-bottom:1px solid grey;padding-bottom:2px}.semui-tabs .semui-tabs--navlist_horizontal li.active button:not([disabled])::after,.semui-tabs .semui-tabs--navlist_horizontal li:hover button:not([disabled])::after{-webkit-transform:scale(1);transform:scale(1)}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{border:none;outline:0;box-shadow:none;padding:.35em .75em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;bottom:-1px}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button:not([disabled]):hover{border:none;opacity:1}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{content:"";height:3px;width:100%;bottom:-1px;transition:all 250ms ease 0s;-webkit-transform:scale(0);transform:scale(0)}ul.semui-tabs-list.tabs-vertical{margin:0}@font-face{font-family:sembler-ico;src:url(/assets/fonts/sembler.eot?9ik42l);src:url(/assets/fonts/sembler.eot?9ik42l#iefix) format("embedded-opentype"),url(/assets/fonts/sembler.ttf?9ik42l) format("truetype"),url(/assets/fonts/sembler.woff?9ik42l) format("woff"),url(/assets/fonts/sembler.svg?9ik42l#icomoon) format("svg");font-weight:400;font-style:normal}.sem-button{cursor:pointer;display:inline-block;border:none;border-radius:12px 12px 0;background-clip:padding-box}.sem-button:not([disabled]){cursor:pointer}.sem-button--secondary{border:1px solid #a9a9a9;border-radius:12px 12px 0;background-clip:padding-box}.sem-button--small{padding:6px 11px;border:1px solid transparent}.sem-button--large{border:1px solid transparent}.sem-button--full{width:100%}.sem-button--block{display:block;padding:.4em}.sem-button--link,.sem-button--link_primary{border:0 solid;text-decoration:underline;border-radius:0}.sem-button-circle{border-radius:50%;cursor:pointer;text-align:center;background:#fff;font-weight:700}.sem-button-circle:before{padding:0 0 0 1px}.sem-button-delete{color:#fff;font-size:6px;padding:.3rem;background-color:#d0021b;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sem-dnd-container{position:relative;height:100%}.sem-dnd-container--dnd-nav{height:70px;width:70px;margin:5px;border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sem-dnd-container--nav{z-index:1;position:absolute;top:0;right:0}.bullet-inlinelist li{vertical-align:top;margin:0 -2px}.bullet-inlinelist li .select{display:block;width:22px}.bullet-inlinelist li .select select{display:none}.bullet-inlinelist li.active .select select{display:inline}.bullet-inlinelist li.active::after{background-color:red}.bullet-inlinelist li::before{content:'';top:-5px;left:0;width:100%;border-top:1px solid #000}.bullet-inlinelist li::after{background-color:#002;display:block;top:-9px;left:38%;width:9px;height:9px;border-radius:50%;content:''}.bullet-inlinelist li:first-child::before{left:38%}.bullet-inlinelist li:last-child::before{left:-44%}.sem-button-rain-drop{position:relative;display:inline-block;width:23px;height:23px;margin:4px 6px 8px;cursor:pointer}.sem-button-rain-drop .sem-button-delete{font-size:6px;top:6px;right:-9px}.sem-button-rain-drop,.sem-rain-drop{border-bottom-right-radius:50%;border-bottom-left-radius:50%;border-top-left-radius:50%;box-shadow:inset 0 0 10px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sem-pagination-container{display:flex;align-items:center;justify-content:center}.sem-pagination-nav{max-width:300px}.sem-pagination-nav>div{flex:1;text-align:center;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.sem-pagination-next a,.sem-pagination-previous a{display:block;line-height:25px;vertical-align:middle}.sem-pagination-next a{text-align:left}.sem-pagination-previous a{text-align:right}.sem-pagination a{height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle}.sem-pagination.active div{border:none;height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle;border-radius:12px 12px 0;background-clip:padding-box}.sem-pagination.active div:not([disabled]){cursor:pointer}.sem-avatar{width:40px;height:40px}.sem-avatar .sem-avatar__img{width:100%;height:100%}.dialog-container{overflow:auto;border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.dialog-container--colordrop{border-radius:0;background-clip:padding-box;box-shadow:none}.dialog-container--colordrop:hover{box-shadow:none}.dialog-container--colordrop .dialog-container--header{border-radius:12px 0 0 12px;background-clip:padding-box}.dialog-container--colordrop .dialog-container--body{border-radius:0 0 12px 12px;background-clip:padding-box}.dialog-container-full{height:100%;z-index:2}.dialog-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.dialog-container--body,.dialog-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.dialog-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist{overflow:auto}.sem-colorlist--container{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist--list{min-height:20px}.sem-colorlist--list--inner{display:none}.sem-colorlist--list:hover .sem-colorlist--list--inner{display:block}.sem-colorlist--closebutton{font-size:11px}.browser-container{height:calc(100% - 30px - 20px);display:block;position:relative;margin:0 20px;border-radius:10px}.browser-container .layout{height:100%;width:100%;overflow:scroll}.browser-container::before{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;content:'';position:absolute;top:-20px;left:15px;width:10px;height:10px;border-radius:50%}.h1{font-size:2rem}.h2{font-size:1.5rem}.h3{font-size:1.25rem}.h4{font-size:1rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1}.line-height-2{line-height:1.125}.line-height-3{line-height:1.25}.line-height-4{line-height:1.5}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block,.sem-button-circle,.semui-tabs,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{display:block}.bullet-inlinelist li,.inline-block,.semui-tabs .semui-tabs--navlist_horizontal li,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit,.sem-avatar .sem-avatar__img{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0,.sem-button--link,.sem-button--link_primary,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button,figure,h1,h2,h3,h4,h5{margin:0}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.mt0,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0{margin-left:0}.mx0,.sem-pagination-nav{margin-left:0;margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:.5rem}.mt1{margin-top:.5rem}.mr1{margin-right:.5rem}.mb1{margin-bottom:.5rem}.ml1{margin-left:.5rem}.mx1,figure.semui-thumbnail button{margin-left:.5rem;margin-right:.5rem}.my1,.semui-tabs .semui-tabs--navlist_horizontal{margin-top:.5rem;margin-bottom:.5rem}.m2{margin:1rem}.mt2{margin-top:1rem}.mr2{margin-right:1rem}.mb2{margin-bottom:1rem}.ml2{margin-left:1rem}.mx2{margin-left:1rem;margin-right:1rem}.my2{margin-top:1rem;margin-bottom:1rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.sem-colorlist--container{margin-left:2rem}.mx3{margin-left:2rem;margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:4rem}.mt4{margin-top:4rem}.mr4{margin-right:4rem}.mb4{margin-bottom:4rem}.ml4{margin-left:4rem}.mx4{margin-left:4rem;margin-right:4rem}.my4{margin-top:4rem;margin-bottom:4rem}.mxn1{margin-left:-.5rem;margin-right:-.5rem}.mxn2{margin-left:-1rem;margin-right:-1rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-4rem;margin-right:-4rem}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.mx-auto{margin-left:auto;margin-right:auto}.browser-container,.p0,.sem-button--link,.sem-button--link_primary,figure,h1,h2,h3,h4,h5{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0{padding-left:0}.px0{padding-left:0;padding-right:0}.py0,.sem-ul-icon-list .sem-li.no-padding{padding-top:0;padding-bottom:0}.corner,.p1,.sem-btn-fab--default,.sem-btn-fab--primary,.sem-btn-fab--secondary,.sem-button--large,.sem-color-list li,.sem-section--corner{padding:.5rem}.pt1{padding-top:.5rem}.pr1,.semui-tabs .semui-tabs--navlist_horizontal{padding-right:.5rem}.pb1{padding-bottom:.5rem}.dialog-container--colordrop .dialog-container--body,.pl1,.semui-tabs .semui-tabs--navlist_horizontal{padding-left:.5rem}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.py1,.sem-button--primary,.sem-button--secondary,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header,figure.semui-thumbnail figcaption{padding-top:.5rem;padding-bottom:.5rem}.dialog-container--body_spaced,.dialog-container--header,.px1,.sidebar-container--body_spaced,.sidebar-container--header{padding-left:.5rem;padding-right:.5rem}.p2{padding:1rem}.pt2{padding-top:1rem}.pr2{padding-right:1rem}.pb2{padding-bottom:1rem}.pl2{padding-left:1rem}.py2{padding-top:1rem;padding-bottom:1rem}.bullet-inlinelist li,.dialog-container--footer,.px2,.sem-color-list li,.sem-ul .sem-li,.sem-ul-icon-list .sem-li,.sidebar-container--footer,figure.semui-thumbnail figcaption{padding-left:1rem;padding-right:1rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3,.sem-button--primary,.sem-button--secondary{padding-left:2rem;padding-right:2rem}.p4{padding:4rem}.pt4{padding-top:4rem}.pr4{padding-right:4rem}.pb4{padding-bottom:4rem}.pl4{padding-left:4rem}.py4{padding-top:4rem;padding-bottom:4rem}.px4{padding-left:4rem;padding-right:4rem}.col{float:left;box-sizing:border-box}.col-right{float:right;box-sizing:border-box}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.flex,.sem-color-swatches,.sem-pagination-nav{display:flex}@media (min-width:40em){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}.sm-flex{display:flex}}@media (min-width:52em){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}.md-flex{display:flex}}@media (min-width:64em){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}.lg-flex{display:flex}.lg-hide{display:none!important}}.flex-column{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.self-stretch{align-self:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-center{align-content:center}.content-between{align-content:space-between}.content-around{align-content:space-around}.content-stretch{align-content:stretch}.flex-auto{flex:1 1 auto;min-width:0;min-height:0}.flex-none{flex:none}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-last{order:99999}.bullet-inlinelist li,.color-picker .saturation-lightness,.relative,.sem-color-list li,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{position:relative}.absolute,.bullet-inlinelist li::after,.bullet-inlinelist li::before,.color-picker,.sem-button-circle,.sem-color-list li .color-delete,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after,figure.semui-thumbnail button,figure.semui-thumbnail figcaption{position:absolute}.fixed{position:fixed}.dialog-container-full,.sem-color-list li .color-delete,.top-0,figure.semui-thumbnail button{top:0}.right-0,.sem-color-list li .color-delete,figure.semui-thumbnail button{right:0}.bottom-0,figure.semui-thumbnail figcaption{bottom:0}.left-0,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle,.sem-avatar .sem-avatar__img{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40em){.xs-hide{display:none!important}}@media (min-width:40em) and (max-width:52em){.sm-hide{display:none!important}}@media (min-width:52em) and (max-width:64em){.md-hide{display:none!important}}.display-none{display:none!important}.sidebar-container{border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sidebar-container-full{height:100%}.sidebar-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.sidebar-container--body,.sidebar-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.sidebar-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-color-swatches{flex-wrap:nowrap}.sem-color-swatches_current{flex-grow:1}.sem-color-swatches_current button{margin-top:10px}.sem-color-swatches_preselected{margin-top:13px;margin-left:-10px;margin-bottom:0;flex-grow:1;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden;height:67px}figure.semui-thumbnail{width:100%}figure.semui-thumbnail img{display:block;width:100%}figure.semui-thumbnail figcaption{width:100%;display:block;min-height:44px}.semui-card-footer{color:#fff;width:100%;display:block;background-color:#2a2a2a}.semui-header-section{padding:2% 2% 0;display:block}.semui-header-section.large{padding:3% 2% 0}.semui-header-section.small{padding:1% .5% 0}.semui-footer-section{padding:0 2% 2%;display:block}.semui-footer-section.large{padding:0 2% 3%}.semui-footer-section.small{padding:0 .5% 1%}.button-send:before{color:#fff}.sem-color-switch--colors .sufix{top:-4px;right:4px}.color-picker{border-radius:0 12px 12px;background-clip:padding-box;z-index:100000;width:210px;height:auto;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker .cursor{position:relative;width:16px;height:16px;border:2px solid #222;border-radius:50%;cursor:default}.color-picker .hue-alpha{margin-bottom:3px}.color-picker .hue{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .alpha{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .saturation-lightness{width:100%;height:130px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.sem-color-dark-inputs .color-type{color:#555;line-height:22px}.sem-color-light-inputs .color-type{color:#fff;line-height:22px}.sem-color-list li{min-height:50px}`]
            },] },
];
/** @nocollapse */
ColorPickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ColorPickerService }
];
ColorPickerComponent.propDecorators = {
    hueSlider: [{ type: ViewChild, args: ['hueSlider',] }],
    alphaSlider: [{ type: ViewChild, args: ['alphaSlider',] }],
    dialogElement: [{ type: ViewChild, args: ['dialogPopup',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ColorPickerDirective {
    /**
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?} vcRef
     * @param {?} elRef
     * @param {?} _service
     */
    constructor(injector, cfr, appRef, vcRef, elRef, _service) {
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
    handleClick(event) {
        this.inputFocus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleFocus(event) {
        this.inputFocus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        this.inputChange(event.target.value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.cmpRef !== undefined) {
            this.cmpRef.destroy();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @return {?}
     */
    openDialog() {
        if (!this.dialogCreated) {
            /** @type {?} */
            let vcRef = this.vcRef;
            this.dialogCreated = true;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                /** @type {?} */
                const classOfRootComponent = this.appRef.componentTypes[0];
                /** @type {?} */
                const appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, ' +
                        'but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            /** @type {?} */
            const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
            /** @type {?} */
            const injector = ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
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
    }
    /**
     * @return {?}
     */
    closeDialog() {
        if (this.dialog) {
            this.dialog.closeDialog();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        this.cpToggleChange.emit(value);
        if (value) {
            this.colorPickerOpen.emit(this.colorPicker);
        }
        else {
            this.colorPickerClose.emit(this.colorPicker);
        }
    }
    /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    colorChanged(value, ignore = true) {
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
    }
    /**
     * @return {?}
     */
    colorCanceled() {
        this.colorPickerCancel.emit();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    colorSelected(value) {
        this.colorPickerSelect.emit(value);
    }
    /**
     * @return {?}
     */
    inputFocus() {
        /** @type {?} */
        const element = this.elRef.nativeElement;
        /** @type {?} */
        const ignored = this.cpIgnoredElements.filter((item) => item === element);
        if (!this.disabled && !ignored.length) {
            this.openDialog();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    inputChange(value) {
        if (this.dialog) {
            this.dialog.setColorFromString(value, true);
        }
        else {
            this.colorPicker = value;
            this.colorPickerChange.emit(this.colorPicker);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    inputChanged(event) {
        this.cpInputChange.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    sliderChanged(event) {
        this.cpSliderChange.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    sliderDragEnd(event) {
        this.cpSliderDragEnd.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    sliderDragStart(event) {
        this.cpSliderDragStart.emit(event);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    presetColorsChanged(value) {
        this.cpPresetColorsChange.emit(value);
    }
}
ColorPickerDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[colorPicker]',
                exportAs: 'ngxColorPicker'
            },] },
];
/** @nocollapse */
ColorPickerDirective.ctorParameters = () => [
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: ColorPickerService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ReversePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value.slice().reverse();
    }
}
ReversePipe.decorators = [
    { type: Pipe, args: [{
                name: 'reverse'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SemColorsModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SemColorsService, ColorWidgetComponent, SearchColordropComponent, ColorListComponent, ColorPickerComponent, ColorPickerDirective, ColorPickerService, Cmyk, Hsla, Hsva, Rgba, detectIE, TextDirective, SliderDirective, SliderPosition, SliderDimension, SemColorsModule, ReversePipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS1jb2xvcnMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWNvbG9ycy5zZXJ2aWNlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbnRhaW5lci9jb2xvci13aWRnZXQvY29sb3Itd2lkZ2V0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb21wb25lbnRzL3NlYXJjaC1jb2xvcmRyb3Avc2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29tcG9uZW50cy9jb2xvci1saXN0L2NvbG9yLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2hlbHBlcnMudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29sb3JwaWNrZXIvZm9ybWF0cy50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWFycmF5LXJldmVyc2UudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWNvbG9ycy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1Db2xvcnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcywgUExBVEZPUk1fSUQsIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW1ibGVyLWNvbG9yLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgIDwhLS0vLyBSR0JBLS0+XG4gIDxzcGFuXG4gICAgW2NvbG9yVG9nZ2xlXT1cImNvbG9yRHJvcEVuYWJsZWRcIlxuICAgIFtjcFdpZHRoXT1cIm92ZXJsYXlXaWR0aFwiXG4gICAgW2NwQWxwaGFDaGFubmVsXT1cIidhbHdheXMnXCJcbiAgICBbY3BQcmVzZXRDb2xvcnNdPVwiY29sb3JQYWxsZXRlXCJcbiAgICBbY3BBZGRDb2xvckJ1dHRvbl09XCJ0cnVlXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJsYXN0Q29sb3JcIlxuICAgIFtjcFRvZ2dsZV09XCJ0cnVlXCJcbiAgICBbY3BEaWFsb2dEaXNwbGF5XT1cIidpbmxpbmUnXCJcbiAgICBbY3BDYW5jZWxCdXR0b25dPVwiZmFsc2VcIlxuICAgIFtjcENhbmNlbEJ1dHRvbkNsYXNzXT0gXCInYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cydcIlxuICAgIFsoY29sb3JQaWNrZXIpXT1cImxhc3RDb2xvclwiXG4gICAgKGNwUHJlc2V0Q29sb3JzQ2hhbmdlKT1cInVwZGF0ZWRDb2xvclByZXNldCgkZXZlbnQpXCJcbiAgPlxuICA8L3NwYW4+XG5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG4gIEBJbnB1dCgpIGNvbG9yRHJvcEVuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG92ZXJsYXlXaWR0aDtcbiAgcHVibGljIGNvbG9yUGFsbGV0ZTtcbiAgcHVibGljIGxhc3RDb2xvcjtcblxuICBASW5wdXQoJ3VzZXJDb2xvcnNQYWxsZXRlJylcbiAgc2V0IHVzZXJDb2xvcnNQYWxsZXRlKGNvbG9ybGlzdDogYW55KSB7XG4gICAgdGhpcy5jb2xvclBhbGxldGUgPSBjb2xvcmxpc3RcbiAgICBpZihjb2xvcmxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxhc3RDb2xvciA9ICcjZmZmZmZmJztcbiAgICB9XG4gICAgaWYoY29sb3JsaXN0Lmxlbmd0aCAhPT0gMCl7XG4gICAgICB0aGlzLmxhc3RDb2xvciA9IGNvbG9ybGlzdFsgY29sb3JsaXN0Lmxlbmd0aCAtIDEgXTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55KSB7IH1cblxuICBAT3V0cHV0KClcbiAgdXBkYXRlQ29sb3JQcmVzZXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHVwZGF0ZWRDb2xvclByZXNldChldmVudDogQXJyYXk8YW55Pil7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpXG4gICAgdGhpcy51cGRhdGVDb2xvclByZXNldC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY29sb3JEcm9wRW5hYmxlZCA9IGNoYW5nZXMuY29sb3JEcm9wRW5hYmxlZC5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbWJsZXItc2VhcmNoLWNvbG9yZHJvcCcsXG4gIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJpbnB1dC1zdWZpeFwiPlxuICAgICAgIDxpbnB1dFxuICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXRcIlxuICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgW25nTW9kZWxdPVwiY29sb3JcIlxuICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlQ29sb3IoJGV2ZW50KVwiXG4gICAgICAgICBbdmFsdWVdPSdjb2xvcidcbiAgICAgICAgICNjb2xvclZhbHVlXG4gICAgICAgLz5cbiAgICAgIDxzcGFuXG4gICAgICAoY2xpY2spPVwiYWRkQ29sb3IoY29sb3JWYWx1ZSlcIlxuICAgICAgY2xhc3M9XCJzZW0taWNvbi1zZWFyY2ggc3VmaXhcIj5cbiAgICAgIDwvc3Bhbj5cbjwvc3Bhbj5cblxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sb3Jkcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ3NlbGVjdGVkJylcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnY29sb3InLCB2YWx1ZSk7XG4gICAgdGhpcy5jb2xvciA9IHZhbHVlLmNvbG9yO1xuICB9XG4gIEBPdXRwdXQoKSBzYXZlQ29sb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VTZWxlY3RlZENvbG9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZENvbG9yKGNvbG9yOiBhbnkpIHtcbiAgICBjb25zdCBzZXRDb2xvcjogYW55ID0ge1xuICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgIGNvbG9yOiBjb2xvci52YWx1ZVxuICAgIH07XG4gICAgdGhpcy5zYXZlQ29sb3IuZW1pdChzZXRDb2xvcik7XG4gIH1cbiAgY2hhbmdlQ29sb3IoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGNvbG9yID0ge3R5cGU6ICdjb2xvcicsIGNvbG9yOiBldmVudH07XG4gICAgdGhpcy5jaGFuZ2VTZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICB9XG4gIG5nT25Jbml0KCkge31cblxuICAvLyAoa2V5cHJlc3MpPVwia2V5UHJlc3NDaGFuZ2VDb2xvcigkZXZlbnQpXCJcbiAgLy8ga2V5UHJlc3NDaGFuZ2VDb2xvcihldmVudDogYW55KSB7XG4gIC8vICAgY29uc29sZS5sb2coJ2V2ZW50MTIzJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAvLyAgIGNvbnN0IGNvbG9yID0ge3R5cGU6ICdjb2xvcicsIGNvbG9yOiBldmVudC50YXJnZXQudmFsdWV9XG4gIC8vICAgdGhpcy5jaGFuZ2VTZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICAvLyB9XG5cbiAgLy8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlNldENvbG9ycyhldmVudCkpO1xuICAvLyB0aGlzLl9jb2xvclNlcnZpY2UuY29sb3JDaGFnZWQoZXZlbnQpXG4gIC8vIHB1YmxpYyBzZWxlY3RlZENvbG9yOiBhbnk7XG4gIC8vIEBPdXRwdXQoKVxuICAvLyBzYXZlQ29sb3JzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyB0aGlzLnNlbGVjdGVkQ29sb3IgPSAnIzAwMDAwMCc7XG5cbn1cblxuXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbWJsZXItY29sb3ItbGlzdCcsXG4gIHRlbXBsYXRlOiBgPCEtLTx1bD4tLT5cbiA8IS0tPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbG9yTGlzdCBcIj4tLT5cbiAgICA8IS0tPGRpdi0tPlxuICAgICAgPCEtLWNsYXNzPVwiY29sb3ItZHJvcFwiLS0+XG5cblxuICAgICAgPCEtLVtzdHlsZS5iYWNrZ3JvdW5kXT1cIml0ZW0uY29sb3JcIi0tPlxuXG4gICAgICA8IS0tZG5kLWRyYWdnYWJsZS0tPlxuICAgICAgPCEtLVtkcmFnRW5hYmxlZF09XCJ0cnVlXCItLT5cbiAgICAgIDwhLS1bZHJhZ0RhdGFdPVwiaXRlbVwiLS0+XG4gICAgICA8IS0tKG9uRHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KGl0ZW0pXCItLT5cbiAgICAgIDwhLS1bZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJ11cIi0tPlxuXG4gICAgIDwhLS0mZ3Q7LS0+XG4gICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiYnRuLXRpdGxlXCI+LS0+XG4gICAgICAgIDwhLS17e2l0ZW0uY29sb3J9fS0tPlxuICAgICAgIDwhLS08L3NwYW4+LS0+XG4gICAgIDwhLS08L2Rpdj4tLT5cbiAgPCEtLTwvbGk+LS0+XG48IS0tPC91bD4tLT5cblxuPCEtLVtzdHlsZS5jb2xvcl09XCJpdGVtLmNvbG9yXCItLT5cbjwhLS1kbmQtZHJhZ2dhYmxlLS0+XG48IS0tWyBkcmFnRW5hYmxlZF09XCJ0cnVlXCItLT5cbjwhLS1bZHJhZ0RhdGFdPVwiY29sb3Jkcm9wXCItLT5cbjwhLS1bZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJywtLT5cbjwhLS0nY2FudmFzLWRyb3Bab25lJywtLT5cbjwhLS0ncm93V3JhcHBlci1kcm9wWm9uZScsLS0+XG48IS0tJ3Jvdy1kcm9wWm9uZScsLS0+XG48IS0tJ2NvbHVtbi1kcm9wWm9uZScsLS0+XG48IS0tJ3dpZGdldC1kcm9wWm9uZScgXVwiLS0+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCdjb2xvcnMnKVxuICBzZXQgc2VsZWN0ZWQoY29sb3JzOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5jb2xvckxpc3QgPSBjb2xvcnM7XG4gIH1cbiAgY29sb3JMaXN0OiBBcnJheTxhbnk+ID0gW3t9XTtcblxuICBwcml2YXRlIHNlbGVjdGVkQ29sb3I6IGFueTtcbiAgcHJpdmF0ZSBjb21wb25lbnREYXRhOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG9uRHJhZ1N0YXJ0Q29sb3JEcm9wKHNlbGVjdGVkQ29sb3I6IGFueSkge1xuICAgIC8vIHRoaXMuX2NvbG9yU2VydmljZS5wdWJsaXNoRGF0YShzZWxlY3RlZENvbG9yKTtcbiAgfVxuICBsb2FkQ29sb3JXaWRnZXQoKSB7XG4gICAgLy8gdGhpcy5jb21wb25lbnREYXRhID0geyBjb21wb25lbnQ6IENvbG9yU2VsZWN0b3JDb21wb25lbnQsIGlucHV0czogeyBzaG93TnVtOiAwIH19XG4gIH1cblxuICBvbkRyYWdTdGFydChjb2xvcmRyb3Ape1xuICAgICBjb25zb2xlLmxvZygnc3RhcnRlZCBpbiBjb2xvciBzZWxlY3RvciBjb21wb25lbnQnLCBjb2xvcmRyb3ApXG4gICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdElFKCk6IGJvb2xlYW4gfCBudW1iZXIge1xuICBsZXQgdWEgPSAnJztcblxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdtc2llICcpO1xuXG4gIGlmIChtc2llID4gMCkge1xuICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcbiAgfVxuXG4gIC8vIE90aGVyIGJyb3dzZXJcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGV4dF0nXG59KVxuZXhwb3J0IGNsYXNzIFRleHREaXJlY3RpdmUge1xuICBASW5wdXQoKSByZzogbnVtYmVyO1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG5cbiAgQE91dHB1dCgpIG5ld1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBpbnB1dENoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodGhpcy5yZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBudW1lcmljID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICAgIGlmICghaXNOYU4obnVtZXJpYykgJiYgbnVtZXJpYyA+PSAwICYmIG51bWVyaWMgPD0gdGhpcy5yZykge1xuICAgICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyB2OiBudW1lcmljLCByZzogdGhpcy5yZyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NsaWRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckRpcmVjdGl2ZSB7XG4gIHByaXZhdGUgbGlzdGVuZXJNb3ZlOiBhbnk7XG4gIHByaXZhdGUgbGlzdGVuZXJTdG9wOiBhbnk7XG5cbiAgQElucHV0KCkgcmdYOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJnWTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNsaWRlcjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBuZXdWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pIG1vdXNlRG93bihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdGFydChldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSkgdG91Y2hTdGFydChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdGFydChldmVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5saXN0ZW5lck1vdmUgPSAoZXZlbnQ6IGFueSkgPT4gdGhpcy5tb3ZlKGV2ZW50KTtcblxuICAgIHRoaXMubGlzdGVuZXJTdG9wID0gKCkgPT4gdGhpcy5zdG9wKCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldEN1cnNvcihldmVudCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnNvcihldmVudCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG5cbiAgICB0aGlzLmRyYWdTdGFydC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIHN0b3AoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xuXG4gICAgdGhpcy5kcmFnRW5kLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0WChldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHBhZ2VYID0gKGV2ZW50LnBhZ2VYICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuXG4gICAgcmV0dXJuIHBhZ2VYIC0gcG9zaXRpb24ubGVmdCAtIHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0WShldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHBhZ2VZID0gKGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgcmV0dXJuIHBhZ2VZIC0gcG9zaXRpb24udG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJzb3IoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRYKGV2ZW50KSwgd2lkdGgpKTtcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRZKGV2ZW50KSwgaGVpZ2h0KSk7XG5cbiAgICBpZiAodGhpcy5yZ1ggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJnWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyBzOiB4IC8gd2lkdGgsIHY6ICgxIC0geSAvIGhlaWdodCksIHJnWDogdGhpcy5yZ1gsIHJnWTogdGhpcy5yZ1kgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJnWCA9PT0gdW5kZWZpbmVkICYmIHRoaXMucmdZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHkgLyBoZWlnaHQsIHJnWTogdGhpcy5yZ1kgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJnWCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmdZID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHggLyB3aWR0aCwgcmdYOiB0aGlzLnJnWCB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlclBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIHY6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlckRpbWVuc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBzOiBudW1iZXIsIHB1YmxpYyB2OiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG4iLCJleHBvcnQgY2xhc3MgQ215ayB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjOiBudW1iZXIsIHB1YmxpYyBtOiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIsIHB1YmxpYyBrOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBIc2xhIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIGw6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIEhzdmEge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgdjogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmdiYSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByOiBudW1iZXIsIHB1YmxpYyBnOiBudW1iZXIsIHB1YmxpYyBiOiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXlrLCBSZ2JhLCBIc2xhLCBIc3ZhIH0gZnJvbSAnLi9mb3JtYXRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyU2VydmljZSB7XG4gIHByaXZhdGUgYWN0aXZlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHNldEFjdGl2ZShhY3RpdmU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiB0aGlzLmFjdGl2ZSAhPT0gYWN0aXZlICYmIHRoaXMuYWN0aXZlLmNwRGlhbG9nRGlzcGxheSAhPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuYWN0aXZlLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHB1YmxpYyBoc3ZhMmhzbGEoaHN2YTogSHN2YSk6IEhzbGEge1xuICAgIGNvbnN0IGggPSBoc3ZhLmgsIHMgPSBoc3ZhLnMsIHYgPSBoc3ZhLnYsIGEgPSBoc3ZhLmE7XG5cbiAgICBpZiAodiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBIc2xhKGgsIDAsIDAsIGEpO1xuICAgIH0gZWxzZSBpZiAocyA9PT0gMCAmJiB2ID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEhzbGEoaCwgMSwgMSwgYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGwgPSB2ICogKDIgLSBzKSAvIDI7XG5cbiAgICAgIHJldHVybiBuZXcgSHNsYShoLCB2ICogcyAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSksIGwsIGEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoc2xhMmhzdmEoaHNsYTogSHNsYSk6IEhzdmEge1xuICAgIGNvbnN0IGggPSBNYXRoLm1pbihoc2xhLmgsIDEpLCBzID0gTWF0aC5taW4oaHNsYS5zLCAxKTtcbiAgICBjb25zdCBsID0gTWF0aC5taW4oaHNsYS5sLCAxKSwgYSA9IE1hdGgubWluKGhzbGEuYSwgMSk7XG5cbiAgICBpZiAobCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIDAsIDAsIGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2ID0gbCArIHMgKiAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpIC8gMjtcblxuICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIDIgKiAodiAtIGwpIC8gdiwgdiwgYSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhzdmFUb1JnYmEoaHN2YTogSHN2YSk6IFJnYmEge1xuICAgIGxldCByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyO1xuXG4gICAgY29uc3QgaCA9IGhzdmEuaCwgcyA9IGhzdmEucywgdiA9IGhzdmEudiwgYSA9IGhzdmEuYTtcblxuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKGggKiA2KTtcbiAgICBjb25zdCBmID0gaCAqIDYgLSBpO1xuICAgIGNvbnN0IHAgPSB2ICogKDEgLSBzKTtcbiAgICBjb25zdCBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgIGNvbnN0IHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XG5cbiAgICBzd2l0Y2ggKGkgJSA2KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHIgPSB2LCBnID0gdCwgYiA9IHA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByID0gcSwgZyA9IHYsIGIgPSBwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgciA9IHAsIGcgPSB2LCBiID0gdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHIgPSBwLCBnID0gcSwgYiA9IHY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByID0gdCwgZyA9IHAsIGIgPSB2O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgciA9IHYsIGcgPSBwLCBiID0gcTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZ2JhKHIsIGcsIGIsIGEpO1xuICB9XG5cbiAgcHVibGljIHJnYmFUb0NteWsocmdiYTogUmdiYSk6IENteWsge1xuICAgIGNvbnN0IGs6IG51bWJlciA9IDEgLSBNYXRoLm1heChyZ2JhLnIsIHJnYmEuZywgcmdiYS5iKTtcblxuICAgIGlmIChrID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IENteWsoMCwgMCwgMCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGMgPSAoMSAtIHJnYmEuciAtIGspIC8gKDEgLSBrKTtcbiAgICAgIGNvbnN0IG0gPSAoMSAtIHJnYmEuZyAtIGspIC8gKDEgLSBrKTtcbiAgICAgIGNvbnN0IHkgPSAoMSAtIHJnYmEuYiAtIGspIC8gKDEgLSBrKTtcblxuICAgICAgcmV0dXJuIG5ldyBDbXlrKGMsIG0sIHksIGspO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZ2JhVG9Ic3ZhKHJnYmE6IFJnYmEpOiBIc3ZhIHtcbiAgICBsZXQgaDogbnVtYmVyLCBzOiBudW1iZXI7XG5cbiAgICBjb25zdCByID0gTWF0aC5taW4ocmdiYS5yLCAxKSwgZyA9IE1hdGgubWluKHJnYmEuZywgMSk7XG4gICAgY29uc3QgYiA9IE1hdGgubWluKHJnYmEuYiwgMSksIGEgPSBNYXRoLm1pbihyZ2JhLmEsIDEpO1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYiksIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXG4gICAgY29uc3QgdjogbnVtYmVyID0gbWF4LCBkID0gbWF4IC0gbWluO1xuXG4gICAgcyA9IChtYXggPT09IDApID8gMCA6IGQgLyBtYXg7XG5cbiAgICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAgIGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBiOlxuICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGggLz0gNjtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEhzdmEoaCwgcywgdiwgYSk7XG4gIH1cblxuICBwdWJsaWMgcmdiYVRvSGV4KHJnYmE6IFJnYmEsIGFsbG93SGV4OD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgKi9cbiAgICBsZXQgaGV4ID0gJyMnICsgKCgxIDw8IDI0KSB8IChyZ2JhLnIgPDwgMTYpIHwgKHJnYmEuZyA8PCA4KSB8IHJnYmEuYikudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcblxuICAgIGlmIChhbGxvd0hleDgpIHtcbiAgICAgIGhleCArPSAoKDEgPDwgOCkgfCBNYXRoLnJvdW5kKHJnYmEuYSAqIDI1NSkpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gICAgfVxuICAgIC8qIHRzbGludDplbmFibGU6bm8tYml0d2lzZSAqL1xuXG4gICAgcmV0dXJuIGhleDtcbiAgfVxuXG4gIHB1YmxpYyBkZW5vcm1hbGl6ZVJHQkEocmdiYTogUmdiYSk6IFJnYmEge1xuICAgIHJldHVybiBuZXcgUmdiYShNYXRoLnJvdW5kKHJnYmEuciAqIDI1NSksIE1hdGgucm91bmQocmdiYS5nICogMjU1KSwgTWF0aC5yb3VuZChyZ2JhLmIgKiAyNTUpLCByZ2JhLmEpO1xuICB9XG5cbiAgcHVibGljIHN0cmluZ1RvSHN2YShjb2xvclN0cmluZzogc3RyaW5nID0gJycsIGFsbG93SGV4ODogYm9vbGVhbiA9IGZhbHNlKTogSHN2YSB7XG4gICAgbGV0IGhzdmE6IEhzdmEgPSBudWxsO1xuXG4gICAgY29sb3JTdHJpbmcgPSAoY29sb3JTdHJpbmcgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBjb25zdCBzdHJpbmdQYXJzZXJzID0gW1xuICAgICAge1xuICAgICAgICByZTogLyhyZ2IpYT9cXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqJT8sXFxzKihcXGR7MSwzfSlcXHMqJT8oPzosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxccyopP1xcKS8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFs0XSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgaXNOYU4ocGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSkgPyAxIDogcGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcmU6IC8oaHNsKWE/XFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihcXGR7MSwzfSklXFxzKig/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFxzKik/XFwpLyxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKGV4ZWNSZXN1bHQ6IGFueSkge1xuICAgICAgICAgIHJldHVybiBuZXcgSHNsYShwYXJzZUludChleGVjUmVzdWx0WzJdLCAxMCkgLyAzNjAsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzRdLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICBpc05hTihwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKSA/IDEgOiBwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBpZiAoYWxsb3dIZXg4KSB7XG4gICAgICBzdHJpbmdQYXJzZXJzLnB1c2goe1xuICAgICAgICByZTogLyMoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pPyQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbNF0gfHwgJ0ZGJywgMTYpIC8gMjU1KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmluZ1BhcnNlcnMucHVzaCh7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KSQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIDEpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XSkoW2EtZkEtRjAtOV0pKFthLWZBLUYwLTldKSQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0gKyBleGVjUmVzdWx0WzFdLCAxNikgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzJdICsgZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSArIGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHJpbmdQYXJzZXJzKSB7XG4gICAgICBpZiAoc3RyaW5nUGFyc2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IHN0cmluZ1BhcnNlcnNba2V5XTtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHBhcnNlci5yZS5leGVjKGNvbG9yU3RyaW5nKSwgY29sb3I6IGFueSA9IG1hdGNoICYmIHBhcnNlci5wYXJzZShtYXRjaCk7XG5cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgaWYgKGNvbG9yIGluc3RhbmNlb2YgUmdiYSkge1xuICAgICAgICAgICAgaHN2YSA9IHRoaXMucmdiYVRvSHN2YShjb2xvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2xvciBpbnN0YW5jZW9mIEhzbGEpIHtcbiAgICAgICAgICAgIGhzdmEgPSB0aGlzLmhzbGEyaHN2YShjb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhzdmE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHN2YTtcbiAgfVxuXG4gIHB1YmxpYyBvdXRwdXRGb3JtYXQoaHN2YTogSHN2YSwgb3V0cHV0Rm9ybWF0OiBzdHJpbmcsIGFscGhhQ2hhbm5lbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKG91dHB1dEZvcm1hdCkge1xuICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgIGNvbnN0IGhzbGEgPSB0aGlzLmhzdmEyaHNsYShoc3ZhKTtcblxuICAgICAgICBjb25zdCBoc2xhVGV4dCA9IG5ldyBIc2xhKE1hdGgucm91bmQoKGhzbGEuaCkgKiAzNjApLCBNYXRoLnJvdW5kKGhzbGEucyAqIDEwMCksXG4gICAgICAgICAgTWF0aC5yb3VuZChoc2xhLmwgKiAxMDApLCBNYXRoLnJvdW5kKGhzbGEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIGlmIChoc3ZhLmEgPCAxIHx8IGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgICAgICByZXR1cm4gJ2hzbGEoJyArIGhzbGFUZXh0LmggKyAnLCcgKyBoc2xhVGV4dC5zICsgJyUsJyArIGhzbGFUZXh0LmwgKyAnJSwnICtcbiAgICAgICAgICAgIGhzbGFUZXh0LmEgKyAnKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdoc2woJyArIGhzbGFUZXh0LmggKyAnLCcgKyBoc2xhVGV4dC5zICsgJyUsJyArIGhzbGFUZXh0LmwgKyAnJSknO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JnYmEnOlxuICAgICAgICBjb25zdCByZ2JhID0gdGhpcy5kZW5vcm1hbGl6ZVJHQkEodGhpcy5oc3ZhVG9SZ2JhKGhzdmEpKTtcblxuICAgICAgICBpZiAoaHN2YS5hIDwgMSB8fCBhbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnKSB7XG4gICAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnLCcgK1xuICAgICAgICAgICAgTWF0aC5yb3VuZChyZ2JhLmEgKiAxMDApIC8gMTAwICsgJyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAncmdiKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc3QgYWxsb3dIZXg4ID0gKGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycgfHwgYWxwaGFDaGFubmVsID09PSAnaGV4OCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJnYmFUb0hleCh0aGlzLmRlbm9ybWFsaXplUkdCQSh0aGlzLmhzdmFUb1JnYmEoaHN2YSkpLCBhbGxvd0hleDgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFBMQVRGT1JNX0lELCBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXRlY3RJRSB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBSZ2JhLCBIc2xhLCBIc3ZhIH0gZnJvbSAnLi9mb3JtYXRzJztcbmltcG9ydCB7IFNsaWRlclBvc2l0aW9uLCBTbGlkZXJEaW1lbnNpb24gfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvci1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnY29sb3ItcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4gICNkaWFsb2dQb3B1cFxuICBjbGFzcz1cImNvbG9yLXBpY2tlclwiXG4gIFtzdHlsZS52aXNpYmlsaXR5XT1cImhpZGRlbiB8fCAhc2hvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCIgW3N0eWxlLnRvcC5weF09XCJ0b3BcIlxuICBbc3R5bGUubGVmdC5weF09XCJsZWZ0XCJcbiAgW3N0eWxlLnBvc2l0aW9uXT1cInBvc2l0aW9uXCJcbiAgW3N0eWxlLmhlaWdodC5weF09XCJjcEhlaWdodFwiXG4gIFtzdHlsZS53aWR0aF09XCJjb2xvclRvZ2dsZSA/ICcxMDAlJyA6IGNwV2lkdGggKyAncHgnXCJcbj5cbiAgPGRpdlxuICAgICpuZ0lmPVwiIWNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cImNvbG9yLWlucHV0LWNvbnRhaW5lciBzZW0tY29sb3ItbGlnaHQtaW5wdXRzIHBiMVwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCBteTEgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIlxuICAgICAgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiAoY2xpY2spPVwib25Gb3JtYXRUb2dnbGUoKVwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzZWxmLXN0YXJ0IHNlbS0tbGluayBcIj5DaGFuZ2UgZm9ybWF0PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2gtLWNvbnRyb2wtLWxpbmtcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VtLWNvbG9yLXN3aXRjaCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC1yZXNldCBzZW0tY29sb3Itc3dpdGNoLS1jb2xvcnMgZmxleC1hdXRvXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMiA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlcyBtcjEgXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjM2MFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIzNjBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmhcIiAobmV3VmFsdWUpPVwib25IdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkg8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uc1wiIChuZXdWYWx1ZSk9XCJvblNhdHVyYXRpb25JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPlM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8ubFwiIChuZXdWYWx1ZSk9XCJvbkxpZ2h0bmVzc0lucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+TDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcLixdWzAtOV17MSwyfSk/XCIgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDEgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uclwiIChuZXdWYWx1ZSk9XCJvblJlZElucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Ujwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uZ1wiIChuZXdWYWx1ZSk9XCJvbkdyZWVuSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5HPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uYlwiIChuZXdWYWx1ZSk9XCJvbkJsdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyZ2JhVGV4dD8uYVwiIChuZXdWYWx1ZSk9XCJvbkFscGhhSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDAgPyAnbm9uZScgOiAnYmxvY2snXCI+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtc3VmaXhcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXRcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbdmFsdWVdPVwiaGV4VGV4dFwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25IZXhJbnB1dChudWxsKVwiXG4gICAgICAgICAgICAgICAgKG5ld1ZhbHVlKT1cIm9uSGV4SW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkQ29sb3IoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taWNvbi1zZWFyY2ggc3VmaXhcIj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+SGV4PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2XG4gICAgI2h1ZVNsaWRlclxuICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgY2xhc3M9XCJodWVcIlxuICAgIFtzbGlkZXJdIFtyZ1hdPVwiMVwiIChuZXdWYWx1ZSk9XCJvbkh1ZUNoYW5nZSgkZXZlbnQpXCIgKGRyYWdTdGFydCk9XCJvbkRyYWdTdGFydCgnaHVlJylcIiAoZHJhZ0VuZCk9XCJvbkRyYWdFbmQoJ2h1ZScpXCI+XG4gICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5oXCI+PC9kaXY+XG5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgKm5nSWY9XCJjcERpYWxvZ0Rpc3BsYXk9PSdwb3B1cCdcIlxuICAgIGNsYXNzPVwiYXJyb3cgYXJyb3cte3tjcFBvc2l0aW9ufX1cIlxuICAgIFtzdHlsZS50b3AucHhdPVwiYXJyb3dUb3BcIj48L2Rpdj5cblxuICA8ZGl2XG4gICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICBjbGFzcz1cInNhdHVyYXRpb24tbGlnaHRuZXNzXCJcbiAgICBbc2xpZGVyXSBbcmdYXT1cIjFcIiBbcmdZXT1cIjFcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImh1ZVNsaWRlckNvbG9yXCJcbiAgICAobmV3VmFsdWUpPVwib25Db2xvckNoYW5nZSgkZXZlbnQpXCJcbiAgICAoZHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCdzYXR1cmF0aW9uLWxpZ2h0bmVzcycpXCJcbiAgICAoZHJhZ0VuZCk9XCJvbkRyYWdFbmQoJ3NhdHVyYXRpb24tbGlnaHRuZXNzJylcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgW3N0eWxlLnRvcC5weF09XCJzbGlkZXIudlwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5zXCI+PC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXZcbiAgICAjYWxwaGFTbGlkZXJcbiAgICBjbGFzcz1cImFscGhhXCJcbiAgICBbc2xpZGVyXVxuICAgIFtyZ1hdPVwiMVwiXG4gICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJhbHBoYVNsaWRlckNvbG9yXCJcbiAgICAobmV3VmFsdWUpPVwib25BbHBoYUNoYW5nZSgkZXZlbnQpXCJcbiAgICAoZHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCdhbHBoYScpXCJcbiAgICAoZHJhZ0VuZCk9XCJvbkRyYWdFbmQoJ2FscGhhJylcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgW3N0eWxlLmxlZnQucHhdPVwic2xpZGVyLmFcIj48L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLUNvbG9yIGRyb3BzLS0+XG4gIDxkaXZcbiAgICAqbmdJZj1cImNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cInNlbS1jb2xvci1kcm9wc1wiPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNwUHJlc2V0Q29sb3JzPy5sZW5ndGggfHwgY3BBZGRDb2xvckJ1dHRvblwiPlxuICAgICAgPHVsICpuZ0lmPVwiY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aFwiIGNsYXNzPVwic2VtLWNvbG9yLWxpc3Qgc2VtLWxpc3QtcmVzZXRcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbG9yIG9mIGNwUHJlc2V0Q29sb3JzIHwgcmV2ZXJzZVwiXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldENvbG9yRnJvbVN0cmluZyhjb2xvcilcIlxuICAgICAgICAgIGNsYXNzPVwiYmxvY2tcIlxuICAgICAgICAgIGRuZC1kcmFnZ2FibGVcbiAgICAgICAgICBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgW2RyYWdEYXRhXT1cImNvbG9yXCJcbiAgICAgICAgICAob25EcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoY29sb3IpXCJcbiAgICAgICAgICBbZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJ11cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyaWdodC1hbGlnbiBibG9ja1wiPiB7e2NvbG9yfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cImNvbG9yLWRlbGV0ZSBzZW0taWNvbi1jbG9zZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVQcmVzZXRDb2xvcigkZXZlbnQsIGNvbG9yKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiIWNwUHJlc2V0Q29sb3JzPy5sZW5ndGggJiYgY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwie3tjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzfX1cbiAgICAgICAgICBcIj57e2NwUHJlc2V0RW1wdHlNZXNzYWdlfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cblxuICA8ZGl2XG4gICAgKm5nSWY9XCIhY29sb3JUb2dnbGVcIlxuICAgIGNsYXNzPVwic2VtLWNvbG9yLXN3YXRjaGVzXCI+XG4gICAgPCEtLTxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dhdGNoZXNfY3VycmVudFwiPjwvZGl2Pi0tPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBtZWRpdW1cbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwic2VsZWN0ZWRDb2xvclwiXG4gICAgICAgIHNlbXVpLWJ1dHRvbi1kbmQgc2VtLWltcG9ydGFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImNwUHJlc2V0Q29sb3JzICYmIGNwUHJlc2V0Q29sb3JzLmxlbmd0aCA+PSBjcE1heFByZXNldENvbG9yc0xlbmd0aFwiXG4gICAgICAgIChjbGljayk9XCJvbkFkZFByZXNldENvbG9yKCRldmVudCwgc2VsZWN0ZWRDb2xvcilcIlxuICAgICAgPlxuICAgICAgICBBZGQgQ29sb3JcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJjcFByZXNldENvbG9ycz8ubGVuZ3RoIHx8IGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgY2xhc3M9XCJzZW0tY29sb3Itc3dhdGNoZXNfcHJlc2VsZWN0ZWRcIj5cblxuICAgICAgPGRpdlxuICAgICAgICAqbmdJZj1cIiFjcFByZXNldENvbG9ycz8ubGVuZ3RoICYmIGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICBjbGFzcz1cInt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzc319XG4gICAgICAgICAgXCI+XG4gICAgICAgIHt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2V9fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjcFByZXNldENvbG9ycyB8IHJldmVyc2VcIlxuICAgICAgICBjbGFzcz1cInNlbS1idXR0b24tcmFpbi1kcm9wXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiXG4gICAgICAgIChjbGljayk9XCJzZXRDb2xvckZyb21TdHJpbmcoY29sb3IpXCJcbiAgICAgID5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZVByZXNldENvbG9yKCRldmVudCwgY29sb3IpXCJcbiAgICAgICAgICAgIGNsYXNzPVwic2VtLWJ1dHRvbi1jaXJjbGUgc2VtLWJ1dHRvbi1kZWxldGUgc2VtLWljb24tY2xvc2VcIj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2XG4gICAgKm5nSWY9XCJjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLS1mb290ZXIgY29sb3ItaW5wdXQtY29udGFpbmVyIHNlbS1jb2xvci1saWdodC1pbnB1dHNcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgbXkxIHNlbS10eXBvLS1maWdjYXB0aW9uXCJcbiAgICAgICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgKGNsaWNrKT1cIm9uRm9ybWF0VG9nZ2xlKClcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2VsZi1zdGFydCBzZW0tLWxpbmsgXCI+Q2hhbmdlIGZvcm1hdDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dpdGNoLS1jb250cm9sLS1saW5rXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2ggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtcmVzZXQgc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIGZsZXgtYXV0b1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDIgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kIHBiMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzIG1yMSBcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMzYwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjM2MFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uaFwiIChuZXdWYWx1ZSk9XCJvbkh1ZUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+SDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlcyBtcjEgdGFibGUtY2VsbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMTAwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5zXCIgKG5ld1ZhbHVlKT1cIm9uU2F0dXJhdGlvbklucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Uzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlcyBtcjEgdGFibGUtY2VsbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMTAwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5sXCIgKG5ld1ZhbHVlKT1cIm9uTGlnaHRuZXNzSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5MPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIiBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMVwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uYVwiIChuZXdWYWx1ZSk9XCJvbkFscGhhSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5BPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMSA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5yXCIgKG5ld1ZhbHVlKT1cIm9uUmVkSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5SPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5nXCIgKG5ld1ZhbHVlKT1cIm9uR3JlZW5JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkc8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5iXCIgKG5ld1ZhbHVlKT1cIm9uQmx1ZUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Qjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcLixdWzAtOV17MSwyfSk/XCJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMVwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInJnYmFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5BPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMCA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGV4dF0gW3ZhbHVlXT1cImhleFRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25IZXhJbnB1dChudWxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAobmV3VmFsdWUpPVwib25IZXhJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VtLWJ0bi1mYWJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcm5lcj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VtdWktdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW0taW1wb3J0YW5jZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY3BQcmVzZXRDb2xvcnMgJiYgY3BQcmVzZXRDb2xvcnMubGVuZ3RoID49IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZFByZXNldENvbG9yKCRldmVudCwgc2VsZWN0ZWRDb2xvcilcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VtLWljb24tc2VuZCBidXR0b24tc2VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+SGV4PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8IS0tIFNUQVJUIC0tPlxuXG5cblxuXG4gPCEtLSBFTkQgLS0+XG5cbiAgPGRpdiAqbmdJZj1cImNwT0tCdXR0b24gfHwgY3BDYW5jZWxCdXR0b25cIiBjbGFzcz1cImJ1dHRvbi1hcmVhXCI+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImNwQ2FuY2VsQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tjcENhbmNlbEJ1dHRvbkNsYXNzfX1cIiAoY2xpY2spPVwib25DYW5jZWxDb2xvcigkZXZlbnQpXCI+e3tjcENhbmNlbEJ1dHRvblRleHR9fTwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJjcE9LQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tjcE9LQnV0dG9uQ2xhc3N9fVwiIChjbGljayk9XCJvbkFjY2VwdENvbG9yKCRldmVudClcIj57e2NwT0tCdXR0b25UZXh0fX08L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2Bib2R5e21hcmdpbjowO2ZvbnQtc2l6ZToxMDAlfWh0bWx7Ym94LXNpemluZzpib3JkZXItYm94fSosOmFmdGVyLDpiZWZvcmV7Ym94LXNpemluZzppbmhlcml0fVtjbGFzcyo9XCIgc2VtLWljb24tXCJdLFtjbGFzc149c2VtLWljb24tXXtmb250LWZhbWlseTpzZW1ibGVyLWljbyFpbXBvcnRhbnQ7c3BlYWs6bm9uZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDo0MDA7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2xpbmUtaGVpZ2h0OjE7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGV9LnNlbS1pY29uLWRyYWc6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXByb2R1Y3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxM1wiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWZvcm06YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyYVwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWxvY2F0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTRcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1jaGFydDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM1XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tdGV4dDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ1XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tbG9jYXRpb24yOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDdcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1JOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDZcIn0uc2VtLWljb24tUzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA3XCJ9LnNlbS1pY29uLVU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwOFwifS5zZW0taWNvbi1COmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDlcIn0uc2VtLWljb24tanVzdGlmeTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBjXCI7Y29sb3I6I2NjY30uc2VtLWljb24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEwXCI7Y29sb3I6I2NjY30uc2VtLWljb24tbWlkZGxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTFcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEyXCI7Y29sb3I6I2NjY30uc2VtLWljb24tY29sb3VyMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBhXCJ9LnNlbS1pY29uLWJydXNoOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGJcIn0uc2VtLWljb24tZm9sZGVyMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBkXCJ9LnNlbS1pY29uLWxvZ291dDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZVwifS5zZW0taWNvbi1vbDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXNlbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNVwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXJlcGVhdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAwXCJ9LnNlbS1pY29uLWNyb3A6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwMVwifS5zZW0taWNvbi1jYXNlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDJcIn0uc2VtLWljb24tcmVzaXplOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDNcIn0uc2VtLWljb24tY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNFwifS5zZW0taWNvbi1vbDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE1XCI7Y29sb3I6I2NjY30uc2VtLWljb24tdWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxNlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE3XCJ9LnNlbS1pY29uLWNsb3NlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MThcIn0uc2VtLWljb24taW5ib3g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxOVwifS5zZW0taWNvbi1ob21lOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWFcIn0uc2VtLWljb24tc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxYlwifS5zZW0taWNvbi1oYW1idXJnZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxY1wifS5zZW0taWNvbi1sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWRcIn0uc2VtLWljb24tdW5sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWVcIn0uc2VtLWljb24tZWxsaXBzZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFmXCJ9LnNlbS1pY29uLXZvbHVtZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIwXCJ9LnNlbS1pY29uLXBsYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyMVwifS5zZW0taWNvbi12aWRlbzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIyXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tZGVzaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjNcIn0uc2VtLWljb24tYWRkcmVzczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI0XCJ9LnNlbS1pY29uLWNlbnRlcl9hbGlnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI1XCI7Y29sb3I6I2NjY30uc2VtLWljb24tanVzdGlmeTI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyNlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXJpZ2h0X2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjdcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1sZWZ0X2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjhcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1jYXJvdXNlbDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI5XCJ9LnNlbS1pY29uLWltYWdlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmJcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1iYWNrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmNcIn0uc2VtLWljb24tZGVsZXRlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmRcIjtjb2xvcjojZDAwMjFifS5zZW0taWNvbi1kdXBsaWNhdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyZVwifS5zZW0taWNvbi1saW5rOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmZcIn0uc2VtLWljb24tc3R5bGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMFwifS5zZW0taWNvbi1jb2xvdXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMVwifS5zZW0taWNvbi1hZGRfYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMyXCI7Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tYWRkX2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzM1wiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tc2VuZDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzNFwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM2XCJ9LnNlbS1pY29uLWNvbG91cl9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzdcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1jb2xvdXJfYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM4XCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmZmfS5zZW0taWNvbi1wcm9maWxlLWFjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzOVwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXByb2ZpbGUtYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNhXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmZmfS5zZW0taWNvbi1kb3duX2Fycm93OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2JcIn0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2NcIjtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzZFwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2VcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoNDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNmXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1sb2dvdXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MFwifS5zZW0taWNvbi1wYXltZW50OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDFcIn0uc2VtLWljb24tc2V0dGluZ3M6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MlwifS5zZW0taWNvbi1zaXRlczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQzXCJ9LnNlbS1pY29uLXByb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NFwifS5zZW0tbGlzdC1yZXNldHtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZy1sZWZ0OjA7bWFyZ2luOjB9LnNlbS0tY29ybmVyIC5fdG9we2JvcmRlci1yYWRpdXM6NTAlIDAgNTAlIDUwJTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbXVpLWZvcm0tc2VsZWN0IHNlbGVjdHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tbGVmdDoxMCU7d2lkdGg6ODAlO21hcmdpbi1yaWdodDoxMCU7Ym9yZGVyOjFweCBzb2xpZCAjZDhjZmNmO2JvcmRlci1yYWRpdXM6MTBweDtmb250LXNpemU6MS44ZW07Y29sb3I6I2Q4Y2ZjZjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24saW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfWlucHV0LnNlbS1pbnB1dHt3aWR0aDpjYWxjKDEwMCUpO291dGxpbmU6MDtib3JkZXItcmFkaXVzOjEwcHggMTBweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXI6MXB4IHNvbGlkICM5NDk4YTN9Lm5vLXBhZGRpbmctbGlzdCAuc2VtLXVsIC5zZW0tbGksLm5vLXBhZGRpbmctbGlzdCAuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpe3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpe3doaXRlLXNwYWNlOm5vd3JhcDstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO3BhZGRpbmctdG9wOi40NXJlbTtwYWRkaW5nLWJvdHRvbTouNDVyZW07Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOm5vbmV9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saTpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saS5hY3RpdmUgaW1nLmljb24tZGVmYXVsdHtkaXNwbGF5Om5vbmV9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saS5hY3RpdmUgaW1nLmljb24taG92ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saSBpbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO21hcmdpbi1ib3R0b206NHB4fS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkgaW1nLmljb24taG92ZXJ7ZGlzcGxheTpub25lfS5zZW0tdWx7bGlzdC1zdHlsZTpub25lO3dpZHRoOjEwMCU7bWFyZ2luOjAgYXV0bztwYWRkaW5nOjB9LnNlbS11bCAuc2VtLWxpe3BhZGRpbmctdG9wOi40NXJlbTtwYWRkaW5nLWJvdHRvbTouNDVyZW07Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjY30uc2VtLXVsIC5zZW0tbGk6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tdWwgLnNlbS1saS5hY3RpdmV7Ym9yZGVyLXJhZGl1czo3cHggMCAwIDdweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9dWwuY29ybmVyX2FsbCBsaTpmaXJzdC1jaGlsZHtib3JkZXItcmFkaXVzOjZweCA2cHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH11bC5jb3JuZXJfYWxsIGxpOmxhc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czowIDAgMTFweCAxMXB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3RvcHtib3JkZXItcmFkaXVzOjZweCA2cHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2JvdHRvbXtib3JkZXItcmFkaXVzOjAgMCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX25vbmV7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2FsbHtib3JkZXItcmFkaXVzOjZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl9yaWdodHtib3JkZXItcmFkaXVzOjZweCAwIDAgNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2xlZnR7Ym9yZGVyLXJhZGl1czowIDZweCA2cHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl90b3AtbGVmdHtib3JkZXItcmFkaXVzOjAgNnB4IDZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl90b3AtcmlnaHR7Ym9yZGVyLXJhZGl1czo2cHggMCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2JvdHRvbS1sZWZ0LC5jb3JuZXJfYm90dG9tLXJpZ2h0e2JvcmRlci1yYWRpdXM6NnB4IDZweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lciwuc2VtLWNvbG9ybGlzdC0tY29udGFpbmVyLC5zZW0tc2hhZG93LC5zaWRlYmFyLWNvbnRhaW5lcntib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4xMiksMCAxcHggMnB4IHJnYmEoMCwwLDAsLjI0KX0uZGlhbG9nLWNvbnRhaW5lcjpob3Zlciwuc2VtLWNvbG9ybGlzdC0tY29udGFpbmVyOmhvdmVyLC5zZW0tc2hhZG93OmhvdmVyLC5zaWRlYmFyLWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93OjAgMTRweCAyOHB4IHJnYmEoMCwwLDAsLjI1KSwwIDEwcHggMTBweCByZ2JhKDAsMCwwLC4yMil9LnNlbS1idXR0b24tZG5ke2hlaWdodDo3MHB4O3dpZHRoOjcwcHg7bWFyZ2luOjVweDtib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9LnNlbS1idXR0b24tZG5kLS1tZWRpdW17aGVpZ2h0OjUwcHg7d2lkdGg6NTBweH0uc2VtLWJ1dHRvbi1kbmQtLXNtYWxse2hlaWdodDozMHB4O3dpZHRoOjMwcHh9LnNlbS1idG4tZmFie291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6bm9uZX0uc2VtLWJ0bi1mYWI6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tYnRuLWZhYiBpbWd7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtkaXNwbGF5OmJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc2VtLWJ0bi1mYWItLWRlZmF1bHQ+c3BhbntkaXNwbGF5OmJsb2NrO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LnNlbS1idG4tZmFiLS1kZWZhdWx0X3NtYWxse3BhZGRpbmc6LjRyZW19LnNlbS1idG4tZmFiLS1kZWZhdWx0X3NtYWxsPnNwYW57ZGlzcGxheTpibG9ja30uc2VtLWJ0bi1mYWItLXByaW1hcnk+c3Bhbiwuc2VtLWJ0bi1mYWItLXNlY29uZGFyeT5zcGFue2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9ub25le2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9yaWdodHtib3JkZXItcmFkaXVzOjUwJSAwIDAgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9sZWZ0e2JvcmRlci1yYWRpdXM6MCA1MCUgNTAlIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX3RvcC1sZWZ0e2JvcmRlci1yYWRpdXM6MCA1MCUgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl90b3AtcmlnaHR7Ym9yZGVyLXJhZGl1czo1MCUgMCA1MCUgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl9ib3R0b20tbGVmdCwuc2VtLWJ0bi1mYWItLWNvcm5lcl9ib3R0b20tcmlnaHR7Ym9yZGVyLXJhZGl1czo1MCUgNTAlIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtwYWRkaW5nLWJvdHRvbToycHh9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaS5hY3RpdmUgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTo6YWZ0ZXIsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaTpob3ZlciBidXR0b246bm90KFtkaXNhYmxlZF0pOjphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9ue2JvcmRlcjpub25lO291dGxpbmU6MDtib3gtc2hhZG93Om5vbmU7cGFkZGluZzouMzVlbSAuNzVlbTtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Ym90dG9tOi0xcHh9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3Zlcntib3JkZXI6bm9uZTtvcGFjaXR5OjF9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOjphZnRlcntjb250ZW50OlwiXCI7aGVpZ2h0OjNweDt3aWR0aDoxMDAlO2JvdHRvbTotMXB4O3RyYW5zaXRpb246YWxsIDI1MG1zIGVhc2UgMHM7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfXVsLnNlbXVpLXRhYnMtbGlzdC50YWJzLXZlcnRpY2Fse21hcmdpbjowfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6c2VtYmxlci1pY287c3JjOnVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIuZW90PzlpazQybCk7c3JjOnVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIuZW90PzlpazQybCNpZWZpeCkgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksdXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci50dGY/OWlrNDJsKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoL2Fzc2V0cy9mb250cy9zZW1ibGVyLndvZmY/OWlrNDJsKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIuc3ZnPzlpazQybCNpY29tb29uKSBmb3JtYXQoXCJzdmdcIik7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfS5zZW0tYnV0dG9ue2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MTJweCAxMnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLWJ1dHRvbi0tc2Vjb25kYXJ5e2JvcmRlcjoxcHggc29saWQgI2E5YTlhOTtib3JkZXItcmFkaXVzOjEycHggMTJweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ1dHRvbi0tc21hbGx7cGFkZGluZzo2cHggMTFweDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5zZW0tYnV0dG9uLS1sYXJnZXtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5zZW0tYnV0dG9uLS1mdWxse3dpZHRoOjEwMCV9LnNlbS1idXR0b24tLWJsb2Nre2Rpc3BsYXk6YmxvY2s7cGFkZGluZzouNGVtfS5zZW0tYnV0dG9uLS1saW5rLC5zZW0tYnV0dG9uLS1saW5rX3ByaW1hcnl7Ym9yZGVyOjAgc29saWQ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtib3JkZXItcmFkaXVzOjB9LnNlbS1idXR0b24tY2lyY2xle2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2ZmZjtmb250LXdlaWdodDo3MDB9LnNlbS1idXR0b24tY2lyY2xlOmJlZm9yZXtwYWRkaW5nOjAgMCAwIDFweH0uc2VtLWJ1dHRvbi1kZWxldGV7Y29sb3I6I2ZmZjtmb250LXNpemU6NnB4O3BhZGRpbmc6LjNyZW07YmFja2dyb3VuZC1jb2xvcjojZDAwMjFiOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnNlbS1kbmQtY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlfS5zZW0tZG5kLWNvbnRhaW5lci0tZG5kLW5hdntoZWlnaHQ6NzBweDt3aWR0aDo3MHB4O21hcmdpbjo1cHg7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5zZW0tZG5kLWNvbnRhaW5lci0tbmF2e3otaW5kZXg6MTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowfS5idWxsZXQtaW5saW5lbGlzdCBsaXt2ZXJ0aWNhbC1hbGlnbjp0b3A7bWFyZ2luOjAgLTJweH0uYnVsbGV0LWlubGluZWxpc3QgbGkgLnNlbGVjdHtkaXNwbGF5OmJsb2NrO3dpZHRoOjIycHh9LmJ1bGxldC1pbmxpbmVsaXN0IGxpIC5zZWxlY3Qgc2VsZWN0e2Rpc3BsYXk6bm9uZX0uYnVsbGV0LWlubGluZWxpc3QgbGkuYWN0aXZlIC5zZWxlY3Qgc2VsZWN0e2Rpc3BsYXk6aW5saW5lfS5idWxsZXQtaW5saW5lbGlzdCBsaS5hY3RpdmU6OmFmdGVye2JhY2tncm91bmQtY29sb3I6cmVkfS5idWxsZXQtaW5saW5lbGlzdCBsaTo6YmVmb3Jle2NvbnRlbnQ6Jyc7dG9wOi01cHg7bGVmdDowO3dpZHRoOjEwMCU7Ym9yZGVyLXRvcDoxcHggc29saWQgIzAwMH0uYnVsbGV0LWlubGluZWxpc3QgbGk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAwMjtkaXNwbGF5OmJsb2NrO3RvcDotOXB4O2xlZnQ6MzglO3dpZHRoOjlweDtoZWlnaHQ6OXB4O2JvcmRlci1yYWRpdXM6NTAlO2NvbnRlbnQ6Jyd9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOmZpcnN0LWNoaWxkOjpiZWZvcmV7bGVmdDozOCV9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOmxhc3QtY2hpbGQ6OmJlZm9yZXtsZWZ0Oi00NCV9LnNlbS1idXR0b24tcmFpbi1kcm9we3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIzcHg7aGVpZ2h0OjIzcHg7bWFyZ2luOjRweCA2cHggOHB4O2N1cnNvcjpwb2ludGVyfS5zZW0tYnV0dG9uLXJhaW4tZHJvcCAuc2VtLWJ1dHRvbi1kZWxldGV7Zm9udC1zaXplOjZweDt0b3A6NnB4O3JpZ2h0Oi05cHh9LnNlbS1idXR0b24tcmFpbi1kcm9wLC5zZW0tcmFpbi1kcm9we2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjUwJTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjUwJTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjUwJTtib3gtc2hhZG93Omluc2V0IDAgMCAxMHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc2VtLXBhZ2luYXRpb24tY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc2VtLXBhZ2luYXRpb24tbmF2e21heC13aWR0aDozMDBweH0uc2VtLXBhZ2luYXRpb24tbmF2PmRpdntmbGV4OjE7dGV4dC1hbGlnbjpjZW50ZXI7LW1vei11c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZX0uc2VtLXBhZ2luYXRpb24tbmV4dCBhLC5zZW0tcGFnaW5hdGlvbi1wcmV2aW91cyBhe2Rpc3BsYXk6YmxvY2s7bGluZS1oZWlnaHQ6MjVweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNlbS1wYWdpbmF0aW9uLW5leHQgYXt0ZXh0LWFsaWduOmxlZnR9LnNlbS1wYWdpbmF0aW9uLXByZXZpb3VzIGF7dGV4dC1hbGlnbjpyaWdodH0uc2VtLXBhZ2luYXRpb24gYXtoZWlnaHQ6MjVweDt3aWR0aDoyNXB4O2xpbmUtaGVpZ2h0OjI1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zZW0tcGFnaW5hdGlvbi5hY3RpdmUgZGl2e2JvcmRlcjpub25lO2hlaWdodDoyNXB4O3dpZHRoOjI1cHg7bGluZS1oZWlnaHQ6MjVweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyLXJhZGl1czoxMnB4IDEycHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1wYWdpbmF0aW9uLmFjdGl2ZSBkaXY6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tYXZhdGFye3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9LnNlbS1hdmF0YXIgLnNlbS1hdmF0YXJfX2ltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5kaWFsb2ctY29udGFpbmVye292ZXJmbG93OmF1dG87Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3B7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3gtc2hhZG93Om5vbmV9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcDpob3Zlcntib3gtc2hhZG93Om5vbmV9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcCAuZGlhbG9nLWNvbnRhaW5lci0taGVhZGVye2JvcmRlci1yYWRpdXM6MTJweCAwIDAgMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcCAuZGlhbG9nLWNvbnRhaW5lci0tYm9keXtib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLWZ1bGx7aGVpZ2h0OjEwMCU7ei1pbmRleDoyfS5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXJ7Ym9yZGVyLXJhZGl1czowIDEycHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci0tYm9keSwuZGlhbG9nLWNvbnRhaW5lci0tYm9keV9zcGFjZWR7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItLWZvb3Rlcntib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tY29sb3JsaXN0e292ZXJmbG93OmF1dG99LnNlbS1jb2xvcmxpc3QtLWNvbnRhaW5lcntib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tY29sb3JsaXN0LS1saXN0e21pbi1oZWlnaHQ6MjBweH0uc2VtLWNvbG9ybGlzdC0tbGlzdC0taW5uZXJ7ZGlzcGxheTpub25lfS5zZW0tY29sb3JsaXN0LS1saXN0OmhvdmVyIC5zZW0tY29sb3JsaXN0LS1saXN0LS1pbm5lcntkaXNwbGF5OmJsb2NrfS5zZW0tY29sb3JsaXN0LS1jbG9zZWJ1dHRvbntmb250LXNpemU6MTFweH0uYnJvd3Nlci1jb250YWluZXJ7aGVpZ2h0OmNhbGMoMTAwJSAtIDMwcHggLSAyMHB4KTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowIDIwcHg7Ym9yZGVyLXJhZGl1czoxMHB4fS5icm93c2VyLWNvbnRhaW5lciAubGF5b3V0e2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsfS5icm93c2VyLWNvbnRhaW5lcjo6YmVmb3Jley13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjBweDtsZWZ0OjE1cHg7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjUwJX0uaDF7Zm9udC1zaXplOjJyZW19Lmgye2ZvbnQtc2l6ZToxLjVyZW19Lmgze2ZvbnQtc2l6ZToxLjI1cmVtfS5oNHtmb250LXNpemU6MXJlbX0uaDV7Zm9udC1zaXplOi44NzVyZW19Lmg2e2ZvbnQtc2l6ZTouNzVyZW19LmZvbnQtZmFtaWx5LWluaGVyaXR7Zm9udC1mYW1pbHk6aW5oZXJpdH0uZm9udC1zaXplLWluaGVyaXR7Zm9udC1zaXplOmluaGVyaXR9LnRleHQtZGVjb3JhdGlvbi1ub25le3RleHQtZGVjb3JhdGlvbjpub25lfS5ib2xke2ZvbnQtd2VpZ2h0OjcwMH0ucmVndWxhcntmb250LXdlaWdodDo0MDB9Lml0YWxpY3tmb250LXN0eWxlOml0YWxpY30uY2Fwc3t0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6LjJlbX0ubGVmdC1hbGlnbnt0ZXh0LWFsaWduOmxlZnR9LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ucmlnaHQtYWxpZ257dGV4dC1hbGlnbjpyaWdodH0uanVzdGlmeXt0ZXh0LWFsaWduOmp1c3RpZnl9Lm5vd3JhcHt3aGl0ZS1zcGFjZTpub3dyYXB9LmJyZWFrLXdvcmR7d29yZC13cmFwOmJyZWFrLXdvcmR9LmxpbmUtaGVpZ2h0LTF7bGluZS1oZWlnaHQ6MX0ubGluZS1oZWlnaHQtMntsaW5lLWhlaWdodDoxLjEyNX0ubGluZS1oZWlnaHQtM3tsaW5lLWhlaWdodDoxLjI1fS5saW5lLWhlaWdodC00e2xpbmUtaGVpZ2h0OjEuNX0ubGlzdC1zdHlsZS1ub25le2xpc3Qtc3R5bGU6bm9uZX0udW5kZXJsaW5le3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LnRydW5jYXRle21heC13aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubGlzdC1yZXNldHtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZy1sZWZ0OjB9LmlubGluZXtkaXNwbGF5OmlubGluZX0uYmxvY2ssLnNlbS1idXR0b24tY2lyY2xlLC5zZW11aS10YWJzLGZpZ3VyZS5zZW11aS10aHVtYm5haWwsZmlndXJlLnNlbXVpLXRodW1ibmFpbCAuZmlnY2FwdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9ja30uYnVsbGV0LWlubGluZWxpc3QgbGksLmlubGluZS1ibG9jaywuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9ja30udGFibGV7ZGlzcGxheTp0YWJsZX0udGFibGUtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGx9Lm92ZXJmbG93LWhpZGRlbntvdmVyZmxvdzpoaWRkZW59Lm92ZXJmbG93LXNjcm9sbHtvdmVyZmxvdzpzY3JvbGx9Lm92ZXJmbG93LWF1dG97b3ZlcmZsb3c6YXV0b30uY2xlYXJmaXg6YWZ0ZXIsLmNsZWFyZml4OmJlZm9yZXtjb250ZW50OlwiIFwiO2Rpc3BsYXk6dGFibGV9LmNsZWFyZml4OmFmdGVye2NsZWFyOmJvdGh9LmxlZnR7ZmxvYXQ6bGVmdH0ucmlnaHR7ZmxvYXQ6cmlnaHR9LmZpdCwuc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne21heC13aWR0aDoxMDAlfS5tYXgtd2lkdGgtMXttYXgtd2lkdGg6MjRyZW19Lm1heC13aWR0aC0ye21heC13aWR0aDozMnJlbX0ubWF4LXdpZHRoLTN7bWF4LXdpZHRoOjQ4cmVtfS5tYXgtd2lkdGgtNHttYXgtd2lkdGg6NjRyZW19LmJvcmRlci1ib3h7Ym94LXNpemluZzpib3JkZXItYm94fS5hbGlnbi1iYXNlbGluZXt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX0uYWxpZ24tdG9we3ZlcnRpY2FsLWFsaWduOnRvcH0uYWxpZ24tbWlkZGxle3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uYWxpZ24tYm90dG9te3ZlcnRpY2FsLWFsaWduOmJvdHRvbX0ubTAsLnNlbS1idXR0b24tLWxpbmssLnNlbS1idXR0b24tLWxpbmtfcHJpbWFyeSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b24sZmlndXJlLGgxLGgyLGgzLGg0LGg1e21hcmdpbjowfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLm10MCwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye21hcmdpbi10b3A6MH0ubXIwe21hcmdpbi1yaWdodDowfS5tYjB7bWFyZ2luLWJvdHRvbTowfS5tbDB7bWFyZ2luLWxlZnQ6MH0ubXgwLC5zZW0tcGFnaW5hdGlvbi1uYXZ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MH0ubXkwe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Lm0xe21hcmdpbjouNXJlbX0ubXQxe21hcmdpbi10b3A6LjVyZW19Lm1yMXttYXJnaW4tcmlnaHQ6LjVyZW19Lm1iMXttYXJnaW4tYm90dG9tOi41cmVtfS5tbDF7bWFyZ2luLWxlZnQ6LjVyZW19Lm14MSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbnttYXJnaW4tbGVmdDouNXJlbTttYXJnaW4tcmlnaHQ6LjVyZW19Lm15MSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse21hcmdpbi10b3A6LjVyZW07bWFyZ2luLWJvdHRvbTouNXJlbX0ubTJ7bWFyZ2luOjFyZW19Lm10MnttYXJnaW4tdG9wOjFyZW19Lm1yMnttYXJnaW4tcmlnaHQ6MXJlbX0ubWIye21hcmdpbi1ib3R0b206MXJlbX0ubWwye21hcmdpbi1sZWZ0OjFyZW19Lm14MnttYXJnaW4tbGVmdDoxcmVtO21hcmdpbi1yaWdodDoxcmVtfS5teTJ7bWFyZ2luLXRvcDoxcmVtO21hcmdpbi1ib3R0b206MXJlbX0ubTN7bWFyZ2luOjJyZW19Lm10M3ttYXJnaW4tdG9wOjJyZW19Lm1yM3ttYXJnaW4tcmlnaHQ6MnJlbX0ubWIze21hcmdpbi1ib3R0b206MnJlbX0ubWwzLC5zZW0tY29sb3JsaXN0LS1jb250YWluZXJ7bWFyZ2luLWxlZnQ6MnJlbX0ubXgze21hcmdpbi1sZWZ0OjJyZW07bWFyZ2luLXJpZ2h0OjJyZW19Lm15M3ttYXJnaW4tdG9wOjJyZW07bWFyZ2luLWJvdHRvbToycmVtfS5tNHttYXJnaW46NHJlbX0ubXQ0e21hcmdpbi10b3A6NHJlbX0ubXI0e21hcmdpbi1yaWdodDo0cmVtfS5tYjR7bWFyZ2luLWJvdHRvbTo0cmVtfS5tbDR7bWFyZ2luLWxlZnQ6NHJlbX0ubXg0e21hcmdpbi1sZWZ0OjRyZW07bWFyZ2luLXJpZ2h0OjRyZW19Lm15NHttYXJnaW4tdG9wOjRyZW07bWFyZ2luLWJvdHRvbTo0cmVtfS5teG4xe21hcmdpbi1sZWZ0Oi0uNXJlbTttYXJnaW4tcmlnaHQ6LS41cmVtfS5teG4ye21hcmdpbi1sZWZ0Oi0xcmVtO21hcmdpbi1yaWdodDotMXJlbX0ubXhuM3ttYXJnaW4tbGVmdDotMnJlbTttYXJnaW4tcmlnaHQ6LTJyZW19Lm14bjR7bWFyZ2luLWxlZnQ6LTRyZW07bWFyZ2luLXJpZ2h0Oi00cmVtfS5tbC1hdXRve21hcmdpbi1sZWZ0OmF1dG99Lm1yLWF1dG97bWFyZ2luLXJpZ2h0OmF1dG99Lm14LWF1dG97bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30uYnJvd3Nlci1jb250YWluZXIsLnAwLC5zZW0tYnV0dG9uLS1saW5rLC5zZW0tYnV0dG9uLS1saW5rX3ByaW1hcnksZmlndXJlLGgxLGgyLGgzLGg0LGg1e3BhZGRpbmc6MH0ucHQwe3BhZGRpbmctdG9wOjB9LnByMHtwYWRkaW5nLXJpZ2h0OjB9LnBiMHtwYWRkaW5nLWJvdHRvbTowfS5wbDB7cGFkZGluZy1sZWZ0OjB9LnB4MHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjB9LnB5MCwuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLm5vLXBhZGRpbmd7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5jb3JuZXIsLnAxLC5zZW0tYnRuLWZhYi0tZGVmYXVsdCwuc2VtLWJ0bi1mYWItLXByaW1hcnksLnNlbS1idG4tZmFiLS1zZWNvbmRhcnksLnNlbS1idXR0b24tLWxhcmdlLC5zZW0tY29sb3ItbGlzdCBsaSwuc2VtLXNlY3Rpb24tLWNvcm5lcntwYWRkaW5nOi41cmVtfS5wdDF7cGFkZGluZy10b3A6LjVyZW19LnByMSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse3BhZGRpbmctcmlnaHQ6LjVyZW19LnBiMXtwYWRkaW5nLWJvdHRvbTouNXJlbX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9wIC5kaWFsb2ctY29udGFpbmVyLS1ib2R5LC5wbDEsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbHtwYWRkaW5nLWxlZnQ6LjVyZW19LmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2VkLC5kaWFsb2ctY29udGFpbmVyLS1mb290ZXIsLmRpYWxvZy1jb250YWluZXItLWhlYWRlciwucHkxLC5zZW0tYnV0dG9uLS1wcmltYXJ5LC5zZW0tYnV0dG9uLS1zZWNvbmRhcnksLnNpZGViYXItY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuc2lkZWJhci1jb250YWluZXItLWZvb3Rlciwuc2lkZWJhci1jb250YWluZXItLWhlYWRlcixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257cGFkZGluZy10b3A6LjVyZW07cGFkZGluZy1ib3R0b206LjVyZW19LmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2VkLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLnB4MSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye3BhZGRpbmctbGVmdDouNXJlbTtwYWRkaW5nLXJpZ2h0Oi41cmVtfS5wMntwYWRkaW5nOjFyZW19LnB0MntwYWRkaW5nLXRvcDoxcmVtfS5wcjJ7cGFkZGluZy1yaWdodDoxcmVtfS5wYjJ7cGFkZGluZy1ib3R0b206MXJlbX0ucGwye3BhZGRpbmctbGVmdDoxcmVtfS5weTJ7cGFkZGluZy10b3A6MXJlbTtwYWRkaW5nLWJvdHRvbToxcmVtfS5idWxsZXQtaW5saW5lbGlzdCBsaSwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5weDIsLnNlbS1jb2xvci1saXN0IGxpLC5zZW0tdWwgLnNlbS1saSwuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntwYWRkaW5nLWxlZnQ6MXJlbTtwYWRkaW5nLXJpZ2h0OjFyZW19LnAze3BhZGRpbmc6MnJlbX0ucHQze3BhZGRpbmctdG9wOjJyZW19LnByM3twYWRkaW5nLXJpZ2h0OjJyZW19LnBiM3twYWRkaW5nLWJvdHRvbToycmVtfS5wbDN7cGFkZGluZy1sZWZ0OjJyZW19LnB5M3twYWRkaW5nLXRvcDoycmVtO3BhZGRpbmctYm90dG9tOjJyZW19LnB4Mywuc2VtLWJ1dHRvbi0tcHJpbWFyeSwuc2VtLWJ1dHRvbi0tc2Vjb25kYXJ5e3BhZGRpbmctbGVmdDoycmVtO3BhZGRpbmctcmlnaHQ6MnJlbX0ucDR7cGFkZGluZzo0cmVtfS5wdDR7cGFkZGluZy10b3A6NHJlbX0ucHI0e3BhZGRpbmctcmlnaHQ6NHJlbX0ucGI0e3BhZGRpbmctYm90dG9tOjRyZW19LnBsNHtwYWRkaW5nLWxlZnQ6NHJlbX0ucHk0e3BhZGRpbmctdG9wOjRyZW07cGFkZGluZy1ib3R0b206NHJlbX0ucHg0e3BhZGRpbmctbGVmdDo0cmVtO3BhZGRpbmctcmlnaHQ6NHJlbX0uY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5jb2wtMXt3aWR0aDo4LjMzMzMzJX0uY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5jb2wtM3t3aWR0aDoyNSV9LmNvbC00e3dpZHRoOjMzLjMzMzMzJX0uY29sLTV7d2lkdGg6NDEuNjY2NjclfS5jb2wtNnt3aWR0aDo1MCV9LmNvbC03e3dpZHRoOjU4LjMzMzMzJX0uY29sLTh7d2lkdGg6NjYuNjY2NjclfS5jb2wtOXt3aWR0aDo3NSV9LmNvbC0xMHt3aWR0aDo4My4zMzMzMyV9LmNvbC0xMXt3aWR0aDo5MS42NjY2NyV9LmNvbC0xMnt3aWR0aDoxMDAlfS5mbGV4LC5zZW0tY29sb3Itc3dhdGNoZXMsLnNlbS1wYWdpbmF0aW9uLW5hdntkaXNwbGF5OmZsZXh9QG1lZGlhIChtaW4td2lkdGg6NDBlbSl7LnNtLWNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc20tY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc20tY29sLTF7d2lkdGg6OC4zMzMzMyV9LnNtLWNvbC0ye3dpZHRoOjE2LjY2NjY3JX0uc20tY29sLTN7d2lkdGg6MjUlfS5zbS1jb2wtNHt3aWR0aDozMy4zMzMzMyV9LnNtLWNvbC01e3dpZHRoOjQxLjY2NjY3JX0uc20tY29sLTZ7d2lkdGg6NTAlfS5zbS1jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LnNtLWNvbC04e3dpZHRoOjY2LjY2NjY3JX0uc20tY29sLTl7d2lkdGg6NzUlfS5zbS1jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5zbS1jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5zbS1jb2wtMTJ7d2lkdGg6MTAwJX0uc20tZmxleHtkaXNwbGF5OmZsZXh9fUBtZWRpYSAobWluLXdpZHRoOjUyZW0pey5tZC1jb2x7ZmxvYXQ6bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1kLWNvbC1yaWdodHtmbG9hdDpyaWdodDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1kLWNvbC0xe3dpZHRoOjguMzMzMzMlfS5tZC1jb2wtMnt3aWR0aDoxNi42NjY2NyV9Lm1kLWNvbC0ze3dpZHRoOjI1JX0ubWQtY29sLTR7d2lkdGg6MzMuMzMzMzMlfS5tZC1jb2wtNXt3aWR0aDo0MS42NjY2NyV9Lm1kLWNvbC02e3dpZHRoOjUwJX0ubWQtY29sLTd7d2lkdGg6NTguMzMzMzMlfS5tZC1jb2wtOHt3aWR0aDo2Ni42NjY2NyV9Lm1kLWNvbC05e3dpZHRoOjc1JX0ubWQtY29sLTEwe3dpZHRoOjgzLjMzMzMzJX0ubWQtY29sLTExe3dpZHRoOjkxLjY2NjY3JX0ubWQtY29sLTEye3dpZHRoOjEwMCV9Lm1kLWZsZXh7ZGlzcGxheTpmbGV4fX1AbWVkaWEgKG1pbi13aWR0aDo2NGVtKXsubGctY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5sZy1jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5sZy1jb2wtMXt3aWR0aDo4LjMzMzMzJX0ubGctY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5sZy1jb2wtM3t3aWR0aDoyNSV9LmxnLWNvbC00e3dpZHRoOjMzLjMzMzMzJX0ubGctY29sLTV7d2lkdGg6NDEuNjY2NjclfS5sZy1jb2wtNnt3aWR0aDo1MCV9LmxnLWNvbC03e3dpZHRoOjU4LjMzMzMzJX0ubGctY29sLTh7d2lkdGg6NjYuNjY2NjclfS5sZy1jb2wtOXt3aWR0aDo3NSV9LmxnLWNvbC0xMHt3aWR0aDo4My4zMzMzMyV9LmxnLWNvbC0xMXt3aWR0aDo5MS42NjY2NyV9LmxnLWNvbC0xMnt3aWR0aDoxMDAlfS5sZy1mbGV4e2Rpc3BsYXk6ZmxleH0ubGctaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX0uZmxleC1jb2x1bW57ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5mbGV4LXdyYXB7ZmxleC13cmFwOndyYXB9Lml0ZW1zLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9Lml0ZW1zLWVuZHthbGlnbi1pdGVtczpmbGV4LWVuZH0uaXRlbXMtY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlcn0uaXRlbXMtYmFzZWxpbmV7YWxpZ24taXRlbXM6YmFzZWxpbmV9Lml0ZW1zLXN0cmV0Y2h7YWxpZ24taXRlbXM6c3RyZXRjaH0uc2VsZi1zdGFydHthbGlnbi1zZWxmOmZsZXgtc3RhcnR9LnNlbGYtZW5ke2FsaWduLXNlbGY6ZmxleC1lbmR9LnNlbGYtY2VudGVye2FsaWduLXNlbGY6Y2VudGVyfS5zZWxmLWJhc2VsaW5le2FsaWduLXNlbGY6YmFzZWxpbmV9LnNlbGYtc3RyZXRjaHthbGlnbi1zZWxmOnN0cmV0Y2h9Lmp1c3RpZnktc3RhcnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lmp1c3RpZnktZW5ke2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uanVzdGlmeS1jZW50ZXJ7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uanVzdGlmeS1iZXR3ZWVue2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5qdXN0aWZ5LWFyb3VuZHtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0YXJ0e2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydH0uY29udGVudC1lbmR7YWxpZ24tY29udGVudDpmbGV4LWVuZH0uY29udGVudC1jZW50ZXJ7YWxpZ24tY29udGVudDpjZW50ZXJ9LmNvbnRlbnQtYmV0d2VlbnthbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW59LmNvbnRlbnQtYXJvdW5ke2FsaWduLWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0cmV0Y2h7YWxpZ24tY29udGVudDpzdHJldGNofS5mbGV4LWF1dG97ZmxleDoxIDEgYXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjB9LmZsZXgtbm9uZXtmbGV4Om5vbmV9Lm9yZGVyLTB7b3JkZXI6MH0ub3JkZXItMXtvcmRlcjoxfS5vcmRlci0ye29yZGVyOjJ9Lm9yZGVyLTN7b3JkZXI6M30ub3JkZXItbGFzdHtvcmRlcjo5OTk5OX0uYnVsbGV0LWlubGluZWxpc3QgbGksLmNvbG9yLXBpY2tlciAuc2F0dXJhdGlvbi1saWdodG5lc3MsLnJlbGF0aXZlLC5zZW0tY29sb3ItbGlzdCBsaSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgLmZpZ2NhcHRpb24tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfS5hYnNvbHV0ZSwuYnVsbGV0LWlubGluZWxpc3QgbGk6OmFmdGVyLC5idWxsZXQtaW5saW5lbGlzdCBsaTo6YmVmb3JlLC5jb2xvci1waWNrZXIsLnNlbS1idXR0b24tY2lyY2xlLC5zZW0tY29sb3ItbGlzdCBsaSAuY29sb3ItZGVsZXRlLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbjo6YWZ0ZXIsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBidXR0b24sZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3Bvc2l0aW9uOmFic29sdXRlfS5maXhlZHtwb3NpdGlvbjpmaXhlZH0uZGlhbG9nLWNvbnRhaW5lci1mdWxsLC5zZW0tY29sb3ItbGlzdCBsaSAuY29sb3ItZGVsZXRlLC50b3AtMCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbnt0b3A6MH0ucmlnaHQtMCwuc2VtLWNvbG9yLWxpc3QgbGkgLmNvbG9yLWRlbGV0ZSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbntyaWdodDowfS5ib3R0b20tMCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257Ym90dG9tOjB9LmxlZnQtMCwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVye2xlZnQ6MH0uejF7ei1pbmRleDoxfS56Mnt6LWluZGV4OjJ9Lnoze3otaW5kZXg6M30uejR7ei1pbmRleDo0fS5ib3JkZXJ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHh9LmJvcmRlci10b3B7Ym9yZGVyLXRvcC1zdHlsZTpzb2xpZDtib3JkZXItdG9wLXdpZHRoOjFweH0uYm9yZGVyLXJpZ2h0e2JvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtib3JkZXItcmlnaHQtd2lkdGg6MXB4fS5ib3JkZXItYm90dG9te2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHh9LmJvcmRlci1sZWZ0e2JvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO2JvcmRlci1sZWZ0LXdpZHRoOjFweH0uYm9yZGVyLW5vbmV7Ym9yZGVyOjB9LnJvdW5kZWR7Ym9yZGVyLXJhZGl1czozcHh9LmNpcmNsZSwuc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne2JvcmRlci1yYWRpdXM6NTAlfS5yb3VuZGVkLXRvcHtib3JkZXItcmFkaXVzOjNweCAzcHggMCAwfS5yb3VuZGVkLXJpZ2h0e2JvcmRlci1yYWRpdXM6MCAzcHggM3B4IDB9LnJvdW5kZWQtYm90dG9te2JvcmRlci1yYWRpdXM6MCAwIDNweCAzcHh9LnJvdW5kZWQtbGVmdHtib3JkZXItcmFkaXVzOjNweCAwIDAgM3B4fS5ub3Qtcm91bmRlZHtib3JkZXItcmFkaXVzOjB9LmhpZGV7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O2hlaWdodDoxcHg7d2lkdGg6MXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMXB4LDFweCwxcHgsMXB4KX1AbWVkaWEgKG1heC13aWR0aDo0MGVtKXsueHMtaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo0MGVtKSBhbmQgKG1heC13aWR0aDo1MmVtKXsuc20taGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo1MmVtKSBhbmQgKG1heC13aWR0aDo2NGVtKXsubWQtaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX0uZGlzcGxheS1ub25le2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnNpZGViYXItY29udGFpbmVye2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uc2lkZWJhci1jb250YWluZXItZnVsbHtoZWlnaHQ6MTAwJX0uc2lkZWJhci1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjAgMTJweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tYm9keSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2Vke2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVye2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1jb2xvci1zd2F0Y2hlc3tmbGV4LXdyYXA6bm93cmFwfS5zZW0tY29sb3Itc3dhdGNoZXNfY3VycmVudHtmbGV4LWdyb3c6MX0uc2VtLWNvbG9yLXN3YXRjaGVzX2N1cnJlbnQgYnV0dG9ue21hcmdpbi10b3A6MTBweH0uc2VtLWNvbG9yLXN3YXRjaGVzX3ByZXNlbGVjdGVke21hcmdpbi10b3A6MTNweDttYXJnaW4tbGVmdDotMTBweDttYXJnaW4tYm90dG9tOjA7ZmxleC1ncm93OjE7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC13cmFwOndyYXA7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDo2N3B4fWZpZ3VyZS5zZW11aS10aHVtYm5haWx7d2lkdGg6MTAwJX1maWd1cmUuc2VtdWktdGh1bWJuYWlsIGltZ3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9ZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OjQ0cHh9LnNlbXVpLWNhcmQtZm9vdGVye2NvbG9yOiNmZmY7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQtY29sb3I6IzJhMmEyYX0uc2VtdWktaGVhZGVyLXNlY3Rpb257cGFkZGluZzoyJSAyJSAwO2Rpc3BsYXk6YmxvY2t9LnNlbXVpLWhlYWRlci1zZWN0aW9uLmxhcmdle3BhZGRpbmc6MyUgMiUgMH0uc2VtdWktaGVhZGVyLXNlY3Rpb24uc21hbGx7cGFkZGluZzoxJSAuNSUgMH0uc2VtdWktZm9vdGVyLXNlY3Rpb257cGFkZGluZzowIDIlIDIlO2Rpc3BsYXk6YmxvY2t9LnNlbXVpLWZvb3Rlci1zZWN0aW9uLmxhcmdle3BhZGRpbmc6MCAyJSAzJX0uc2VtdWktZm9vdGVyLXNlY3Rpb24uc21hbGx7cGFkZGluZzowIC41JSAxJX0uYnV0dG9uLXNlbmQ6YmVmb3Jle2NvbG9yOiNmZmZ9LnNlbS1jb2xvci1zd2l0Y2gtLWNvbG9ycyAuc3VmaXh7dG9wOi00cHg7cmlnaHQ6NHB4fS5jb2xvci1waWNrZXJ7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7ei1pbmRleDoxMDAwMDA7d2lkdGg6MjEwcHg7aGVpZ2h0OmF1dG87Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uY29sb3ItcGlja2VyIC5jdXJzb3J7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXI6MnB4IHNvbGlkICMyMjI7Ym9yZGVyLXJhZGl1czo1MCU7Y3Vyc29yOmRlZmF1bHR9LmNvbG9yLXBpY2tlciAuaHVlLWFscGhhe21hcmdpbi1ib3R0b206M3B4fS5jb2xvci1waWNrZXIgLmh1ZXt3aWR0aDoxMDAlO2hlaWdodDoxNnB4O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKWUFBQUFRQ0FZQUFBRDA2SVluQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRBSVdEd2tVRldiQ0NBQUFBRnhKUkVGVWFON3Qwa0VLZzBBUUFNRTJ4ODMvbjJxdTVxQ2dEMWlEaENvWWRwbmJRQzliYlkxcVZPL2p2YzZrM2FkOTFzNy83RjEvY3NnUHJ1anVRMTdCRFlTRnNCQVd3Z0poSVN5RUJjSkNXQWdMaElXd0VCWUlpMmY3QXIvMVRDZ0ZIMlg5QUFBQUFFbEZUa1N1UW1DQyl9LmNvbG9yLXBpY2tlciAuYWxwaGF7d2lkdGg6MTAwJTtoZWlnaHQ6MTZweDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBUUNBWUFBQUQwNklZbkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0QUlXRHdZUWxaTWEzZ0FBQVdWSlJFRlVhTjd0bUVHTzZqQVFSQ3NPQXJIZ0JweUFKWUdqY0dvY3hBbTRBMklIcG1vV0UwZUJIK2V6bUZsTnZVMDZzaEozVzZWRWVsV01VUUFJSUY5ZjZxWnBpbXNBMUxZdFMydUY1MS91MjdZVkFGWlZSVWtFb0dIZFBWL3NJY2JJRUlJa1VkSS85WGE3bmV5djYxK1NXRlVWQVZDU2N0MDBUV24yZnY2dTMrRWNmZDN0WHp5LzArbkVVdStTUGpvL2txenJtaVFwU2NONnY5OFhld2ZBOC9sTWtpTEoyV3hHU1VvcGNUNmZNNlUwTlg5L2ZyZmJqZXYxV3RmcmxaZkxoWWZEUVFIRy9BSU9sbkd3aklObEhDeGpIQ3pqWUptL1RKV2RDd3F1SlhzZUZGekd3RE5OZWlLTU9KVE84eFFkRFFhZUIyOStLOWVmZUxhQm85Sjd2ZHZ0SmoxUmpGRmpmaXY3cXY5NXRqeC83bGVTUWdoOTNlMWZmTWVJcDZPK1lRamhvL043OTF0MVhWT1NTSTdOLy9LKzQvR294V0xCeCtQQjUvT3A1WExKKy8zT2xKSldxeFUzbTgzb3Z2NWlHZjhLallObEhDeGpIQ3pqWUJrSHk1Z2Y1Z3VzdlFVN1UzN2pUQUFBQUFCSlJVNUVya0pnZ2c9PSl9LmNvbG9yLXBpY2tlciAuc2F0dXJhdGlvbi1saWdodG5lc3N7d2lkdGg6MTAwJTtoZWlnaHQ6MTMwcHg7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9ZQUFBQ0NDQVlBQUFCU0Q3VDNBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINEFJV0R3a3NQV1I2bGdBQUlBQkpSRUZVZU5ydG5WdVQ0N2dSckFITitQLy9Pci82MVk1d09OWjdtWjF1M1hBZUxNakpaR1pWZ2RLc2ZjNXhSM1MwUklJVVcrQ0h6Q3BjMk1jWW83WEd2M2V4N1VpWmQ1N3JqeXp6dit2KzMzWC9SLyszci9mN3ZSMzg2WStUdktOY2Yvd2RoVExQY3Y5cVUyd1pkNzR1dGgwdDE4MjFqa0laTFBjc0kvNm5XYTRYdnV0cXVVMFo4NW1ueDgwUy9aemdwbkxuT3RITnQ3L29meDFUS1hjU056Ti83cWJNUTNqdTdyTlFtTVlZZC80czJqOWFhK1ArZ0dhTWNacmIxTS90ZHJ2ZjcvZDJ2OTlQOS90OTNPLzNjYnZkeHUxMkc5ZnJkVnd1bDNFK244Yy8vL25QKzIrLy9YYjY2YWVmeGwvLyt0Zng1ei8vMllLNUFsMnJndmY0VXNicGRHckI1MmJBdkFyWHB1emptaXFBVlNHejVlRG1HWVh6aGJBWm1Dcm5temRkcFVVKzhZMWRBT1llWEN0RFV3VndWN1lDR0g2dUFteU1jWjlsNXZrVWFCUEdNVVo3L0o1dy83OTIvZnZ2OVhxOTMyNjNkci9mVHhQRUNlTUU4bks1ak0vUHovSFRUei9kdjMzN2R2cmxsMS9HUC83eGovRzN2LzF0L09VdmZ3a1Zzd29uZ2pkT3A5UHpIM1UzRDN6bVdHblpWWG40akNxczd3QzJCS1A0Lzh0QXprWnNvV3g2WHJxZUhaeW12cDRBQkNCSmhUUXdLZkRUOGd6clpDSXFpNUFoaUFDakJmRUIyclA4L1g2M01NN2Y2L1Y2djkvdjdYYTdiWUM4M1c3amNybHNWSElxNWZmdjMwKy8vZmJiK09XWFg4WlBQLzAwL3Y3M3Y0K2ZmLzc1SlN2YmV1K2JMMldNTWFGYkFscEJOTTg1UVgrY3Q2cW9TcWtQQXd1UWxCVktxR05GU1VPQUEzQm11N2dDNWhOT2QxNW5Td3ZBT1VXN0M0Z2lVQ1Y4U2duNUw5aE5GSXFUc3AwR3hJMHlzaW95akFqa1kvdEdKVkVweitmeitPV1hYKzdmdjM4Ly9mNzc3K1BidDIvajExOS9IVC8vL1BQNDlkZGZ4OGZIUndybVRqVjc3OUVYdTJweDJ4aGp3dGRKWlFjQVdRSVBMUElTc01KYVN3aUQ4Z3pJS3J3U3lBVEU1ajVuQWJSNWMxZEJVd0Jsc0VXVzBoNkxxaVlzcUZQQVF4Q3lSWjN3T1NBUnhtbFhNWDVrNjRwUWZ2djI3Zjc1K2RrK1BqNU9IeDhmNC92MzcrUGJ0Mi9qdDk5K0c5KytmUnNmSHgvamNybVVGTE8zMWdZRFdibHhSSXMvVHFmVDdvdXN4SnNBeFhBMkdjN1RBOVhkZ2Zkb0hiRnNqNzZYMisxV0FyZ0kxYWdlR3dBM3F1cHFvSHNtY2JJNkZ1OTNxdWdnRmE5ZDdMZUR0Z0tmQUZIQkorTkVCeUlrY0o1S2VydmRUbWhoR2NnSkpTWjV2bi8vZmorZnorMThQcDgrUHovSDUrZm5tR0QrL3Z2djQvdjM3K1BqNDJOOGZuNk8yKzFXczdKampQNndyYU1JNUU0Ulo4eDJ2VjVUU3drcXVvdFY3L2Q3VHo2SEZXc0QvcU5jZHcwQ1EzcS8zMjFjNjg2VHdEVklkYnV5NzN6TmxkaFNIYjhJMmtsWnpubStJbkJTNFU2bjAzMDJhQkZzTGhIREFLSlZKVmdsZkk5amh2dTUzVzUzc0xBTllOeEFpREE2TUNlVUh4OGY5K3YxMmk2WFM3dGNMcWNaVzU3UDV5ZVk4L2Z6ODNPY3orZm5zU21ZVXlrbldFRzg1V0JzdDlzdHpTTHlNZGZyOVFpMDhpWTE1VVowTGxER0xoUjNvNXpLMmo3T1BVVEQwRStuVTN0azdYYi8xNk5GYmhsb0FNdVkxempMVU9PM0JLZUlEZStaOHMzL0o0Z0ZvNFRNNWpQbXVSZzI4Zm9VS0tWU3dvMTZUZ0E1bnB5d2NXTEhnWWwvUHo4LzczLzYwNS9hYjcvOTFtNjNXN3RjTGllMHNaajRtYW81Z1R5Zno4OEUwZjErajhFY1l6d1RQRUcyY3FqeWZITkYwTThmdXFFaWFPVm5SelpaUU5oNWZ3UXlIZy9IREdmSm84OVExemIvcXV1NVhDNjc3M0kyWEtmVHFkL3Y5K2Qzd3VxV3ZhL1lUZFVkRVYzZmhJdi9WaXlwczZZRTN4M3I0M0s1YkpRUzY2emF4VkdGc3ZkKy8vajRhRisvZm0zZnYzOXZ0OXV0ZmYzNnRmMysrKy90ZHJ1ZHZuMzdadU5MQmFhQ01nVXpDK3JaUmlGb3d4VXVKSThZTXFjQ3A5T3BxNXZhZ2FZVTZsR0pBMVhRcWVqY2h3NkNqMEd3NW5ZQnJHdzAxQTJPMjA2bjA0QkdvdU5OeVRmcC9Gd0VsaFVleTZuWHJJS3c3UVFXZGR4dU4ybGRMNWZMODM5Z1NQRjhhaHUvSnZCTzQ4Q1BTdXFNZjhWcDkvUDUzTDU4K2RMdTkzczduOC90ZnI4LzM5L3Y5L2I1K1RraFBKM1A1Nm1RNDM2L2orL2Z2Ky9pU2diemVyMCtBWngvNSs4OGJ2Nk9NZGE2UzV6NmtkMjFmWUM5ZHh2N2NJSkoyZDlBT1MzMGZQTXp5SGlUTThCNERGNlhVbFlIcDRLUVczVysxdDc3TU5CMXZHSHhXcTdYYTd2Zjc4K3k1L041QStIMWV0Mjl4dVA1ZGJZdHlhUnU0QWtzYlBxNjkzNmZqUnpYUnhCYlByL2IrYjE4K2ZLbGpUSGFCQkJmbjgvbjAvMStIMSsrZkJubjh6bTBzQjhmSDV1NGNyNUd1QmhNVmswRUVuOVJzY3RnVmhNK2l4bEp0TUEyM1I4QjZ5eXNBc3RCT2dGWElLS0NNSWdUb01xTkV1MmZZTUg3enRjNzMyZFFLa0NqMXl0QVp0WTBLeDhwSXI4R0dKK0FUM1YrMkhpcmhsKytmQm1YeTJXejczdytiMTdQOHArZm44L3RVd0dWbGVWa1R5VWI2OERrZmF5V1k0enhOUmloVTRFcExKUFpWcksrdTdKNC9tZ2ZLcWVMVzlYMlJFV2xJdEwxZGl5bmJERGIzK2pYZ1lqUXFuMHJyeFdjK05rSUxQN0Y3eEliTXZ4N3ZWNTN4NDB4bmxiV0pGMTJaU2FnL04wcFc2dCtaem1PTXpIamFqS3dEZm9uZDc4ellUZGZxMTh1cDk3enIycTh2M0lpb0JwclJ0QmwwRVo5b2c1V0JSR09kT0hqSWpYRjdVb3RGYmdPV25YeklKeXpZdmpHNUlZZ3NtTU94SGt6OE9zTVNyVk5XZXE1VDhEYU9jYkV2MU9kNXJiczlhTzdZdk1ldDYzRWtGKytmTUV4cStNUmw0L0w1YkxaTi8rZXorZm5aNkthenVNcVhTUVZPNXNwSlhmbEhBSXplcy94SnNlY2tSSmlETW9nOWQ2VmZScnFYTXI2S3BWVjI3alJ3SmFjR292T0FNMXpNZFFNbndLMUF1Yks2M2tkQ0NodkkxQzdnMHo5bmYvRCtYemUyVmo4SDdHeDRQOWR1UWxzWUNycXlOOFhxRzNIbS8xME9qM2p3L24rY3Jsc3R1TStqUG1teFQyZFR1UHo4M1B6dDJwbjFYc0VIWC9iblBhVnFWbWgweHdPdDBvNlhMTEFIZVBVVTIwM3dIZmNyc3BDd21WM1RyeUI1czBNc2VlZzk3eC9Cd3pDakJsYkIrcFJBUGxhMEJWUXVUNlY2UUhkQmxqM2QwS0cxNDdiK0RxeFFlVXltRE80M1c0ZFFhcitUSWp3bUFkMHo4L2g2NXZmMC95THYzUGI1WExwcnUveWREbzlzN0VUMEkrUGo2ZEtLOVZVRUllS1dRV1BBT3JKOExLZDR2RSt0OTFZM2U3VUZsV2F0ZzJWd0puYitIUG10dm0vc2ZLNTkvT2FXRjN4L2VQMVVQSHZBNUREWURwWVhmYjBkcnYxVjJEa0JreHR3L3RFV1ZWbFhXZEM5cEZZczUvamZoOWRTLzE2dlc3czZsVEcrVGZxc3hTSkh4a1hYcS9YZHIxZXU0THNmRDZQM3ZzVDNONzdEa0wrelBtNWpTZEtMNHpSM0F4UWQ2ckhrTGtZbFNvd3NycTd6bnp1NndTd2RzTUpPWG1BNWZCY2p4dGdNR0JZSGxyNXpva2h0c01DVGdYTFFPVzRYQzZkRXlFTXByTDhtQVF6WFJnZHVpeDJ5WnpvcnhrWXNEbjNoQjFWZU1MR3NYc1Z0Z2wycFc4UzNzdmswdnc3UjRoTmFIdnY0Y0FDbDVIRnp3SUgwS2M2enU0WGpEUFIvanBBVnhXek8xWGsyRERiM3ZUY3hlR1UxaVdaSGttSURXemlXS3ZpckNKNERyYXZzNklKL0dHNmNUcVdkWER5K2ZBclFEVlZrTHFrVmpBb1pJSVRkbW1JcVh3cWE5NU4zK01HWW9aUWRSVk5PNTNZMXhSa2hPMTZ2WTdldTUwN0NhOWxKbmJHcHhPZW1RaFN3L0FRc21tcDV6VTlCaVU4RzZ3dlg3Nk02L1U2UGo0K2RvMEJ6NENwZ2lrblRVZURxd2xLQm1nM3U0T1ZqcloxQStyQWNnYWVqV3E2ZUpDdkNZRkRPTlN3T2dIWDRFUVJ3OGx4YnpET2RFSzZnWjNIazFiKzhnMm8xSkZ0S1h5di9mRWRUWHVXaldYZEFaaUJwNkFEZURyQ0ZpaW03QjZaRm5lZUk3R3ZtL1BNa1VEWDY3Vzd4SThiMEQ3L3Y4ZEE5cWZONW9hQ2Y3NFdaakgwbWYxY21mWTFZMEpVRm1WclRXdTh1emtOY0x0RWo3dTVGWEJUa2ZDNkdPQTVxOFlNeE84S1Z2RjZzQVZHZGNyVWJzS09EY1FLa0xNT01kbWx4dW02NDJZclBtMjZBbGhaVzFZQjFSK3JyR3N3RThUYVlBV2VVTXhkZitXandTdloyRWYzeXRPeWZuNStQcFZQQWFxT240M010TkJxdm1qanhiak00bFpqWlk0Z3FOTUk1a3RhVy9zWUtOd1MrOWxGUXpHaWhtTUNLUGE3K1owVjZFYjBHUm1vYnRwWDhKbGpXdTVGTUxONWphNmhHOWt3UWdacWY1KzFOSDVVeHprRlJlQ2RXaEo4WGRsR1VreE83SFJsWVJtNG1WTzQzVzd0ZXIxMlRQSkV3L3JtRU4zTDVTS0hJV1pnOW16K3BVb0tPWXE1YkpUSmRYMmdtZTFVY3hNWlFGYUVRSWxIY3QzMk0rWTFCekdrR3V6Zml5QU45eit1Z3BsWjFzeW1DckRDWVlrR3hEVHBJOVJ6Qnkwckh5ZURVQzFuV2FlVWFEOW40eGtOeVlNQkRadHpaM0IrK2ZKbFkyMVhGRE9jQVJKbGFiT3lpUzN1Q3BMSTlqclpqQ0RrYVZ2Y0NDandvZ25LU2hXZHpYWldsWk12VlRnRDhMcHFsQ0xycWdiY0IrcVl3cmdLWXBUMGNjQ3FiS3lDVmFsa0VhYm4vRnlub2dDclBLZnFmNTF4SjdzR0IyWlhjWm14b1NPenRqeDMwMERaaTdhMC8yQUlSMFVsQmFnOVN1RHc2S2NBemxhQjd2SFp2V3BqSzkwZHlycTZiS3lEVVpRYlIwQjA1YmlMUWtISWNTVW1nSUsrU3d1cWdIQ25vaW8yUlFVMXlqK0JuQnk5cHBoVktMR3lDN1p6RksxcHhXSytFOEloVkNXTE4vdUx0blVVNGF5b1lMb2FBTno4RmR0YVN2WTRwVjBCRVcybHM2MWN6cWxsQktwVHlLZ01BaHJaMWNkYzFSUk90UG12V05rZGNLWjdaS3hhV2ppUExKTXBwN09aS3hBK3JxRy9vSkxqeGYwcG5KbHFMb0RabzNneVUwbUtHeXMydGFLZWNqL2QxQytySlNwbEJxbFR5QXFnUitEOEtqS2xtUkwyZ3RVY0FkQ3RzTCtpakNOVDFvcXFxa0gyT0hFYkc1c0RGblVnNUFhK3lMb3UyVlUxcHRqMVMyWlFxdjFPUlpOOUlXelJmZ2FSQnhLb0JFOFVXeXFsSkZ0ckljMEF4TmpTamVkOTlDVFkvWERmU3pDejVNMElab1ZFc1duUEZOVHNsOG9vVkMxVHpiR2dxRlpORFNnVndLSysxc0dETUtxeFpDV0dWTUR5c2lFcjFqVlNRSlVZd2o1aUhPbFRoZEh0NDRTUWc5Q04rbmw4RDkwTk1JZ0FkZ3I0NkpxUmlSOUk4dlJkRnZicjE3bS95eFVNS2pOTE1pVlVBRHd1MkNXR2hoaStGNTVUV005TTljb2d6bXMxZG5NNHVPRi9MQUVZV2RjcW5NN3lGbXlxM0lmd21PUk9kN1kxaUZXdE9qb1k4VG80MW1UVjVJeXNnRkZ1UnpzYldGR2JOSUlKQ0R2MWRPbzRsWkc3aldCd1JGdFZUS3VXeWVDQnlKS09hbjhvWjNlcDlYZGRObDB0RHVheXdMejljWFBZZURBQTBTcGtCTzlzYlZjVE9WV2xkUHY0dXl6RWt6eEh0anZvbkhvU2tGRVdOb28xZDhEaGNRcHV0ZDJwcE5vbjRCem9BaUoxaEJGUWcwZFZ0ZGJHSEhEUVd1c2htTkVRdWtMTTJRTzFHMlk4YmdUWHFGaGNCSmo3RWpQZ2NQdHM4VVM4cVBwUEIvZFh6bk9oNVo0Mzh0ekg1ZWM2UWdyT0tyUlJmS215c0JtVURCK1BoWWFiTWxWUEVSK0dDU0lUVHpyN2FtMnRBckgzYmdjRXpQSm0rY3I1ako0Tm5ITkZEVnJGWGNJNUxlOWs1Sm53K2JlZGJWK0ZmUnpaSUhhT09hT3NMWTAvN1VHczU4RGpyR3dLTUlNRklHek9FVzEvakdzZEF0Q042aEVBSTRoQmU5WVhlUlJPQlNWUEFWUEFxdklNNWJ4NWhWS1dBTVA2ekJSeTNpZXNjcmlkVmRGQmluQnhYRG5HMkdSWTJYYkN2cDFsaHZHdE85Qnh1NWg5MDhYUXU0MmxuU0FyTUZkaXpNaW04dXdSQ3hQR25uT1M4bHdwbmJPaURxVEFqc3JSTi9QY29BU2NDYmFBQ3FWTTQweWxuampUQnMrYndXbEFHMjMvVUtiZGtpd0tXSVFQR3pXYWN6cG9TbHhQRWo4MjJjTldrcFM3Rnl6c0RycXBmZ3BHM2phaHcydmdiYVNRQXh1TFdaWXQ3Snp5TmU4Sm9acE5BY3ZERk9kdzB3cVlUOUFLMXJaei9EZGJTbExQcDByeUl4Z1FKbEs5QVpsRXE3SU9YcG9oZzlQSWhyQ25nODhKc094aVY0WldBWWZnNHNpa3gvOGt5Mlo5bDg2MnVxd3Jmc2NJSDgrdWdUbVZHeWlkZGVWWVVnRU1uNEdaemcxNEV3SXNoOXN4MmNLS2lXWFJldU9FNWd6R09RZ2RsUktWVmRsZXZxYjI3OVhxMFFuc3RzMlZEYUJPMGNvZXpzcnVXdEhBcHU2c0tHNElCaE4wYUdVMmtMck1LR1JUTjNIbWJDRHdLVjE0enZrTUVERzRRZlpWc3BWbGFOVTJtaGM1VEVaM04xaC96cVRoZXVMcFcwNVpXVEdWamIzZGJuTm14S1pCbk44SnFpZGFWTEtBT3lBUk5MUytNQjU0WjIrVmFxb01MS3JvVkJsbmdlZm5UUEFjb0hOV0NTdmxmQThDSTBIRW1CTkJuQmxYeU1yelU3QTdXVm05NFBQcVEyZ21xS3grV0RHc252aWxtY1NPQkpxT0sxbll5QUl6dUF5ZXNxM1VkU0szS2ZXY1lLRDk1SG1mWU9VM3FzZXIyQ3RZRVVBK0ZwZnFkTnZnUEJaVUJoRHJHT05SVmxRc2g4ckxjYVVDeWtIRzBPT1V3VGxMQnJzaDVzb0VNR2V6aTFFNEhSVnQxaWNwNXdaRUZYZGliQ2tHOFk4dlg3NXNiTzRFMGlvbTl6K2hqU2lPZnkzRGhwWEl0cFZoRStVR1Fkdm9XanRDaG1yR0hmNFlBektnQk5uR3R1SnhGQ2VHZGhVQWZRTExLOGtCWUFQNmd2RkpaYWpNRzNYa3ljeThLdUMwcTRFeXltd3R3ZHhkdjJNMG1JQnRLMExLbmY2NDBqMDBBdXE0Z1VrZFdHbGhzMjJxSmM2ZFpDc0wxOW94bmxUSkc0U1lWUklHcEQ4VFBGQnVNNk9FbGJTMXBsZGlkNG1HQXlONlpJdXBiQzViWEpOOWZkcGJUaFN4TFVhSThJRzFYSVlCeFczVGpzNktRb3NLY3hmeGNRbWRud1JHTTEwR25GY0N5MlhZdW5MTXlBa2RnazRtZVBpY3pzTHlndGhjQnV0NmdvT3FTN1lWRlhBRExqYW9zQjZzNm9mY1pXQVpTSVJZcVNVa2l6WXd0dFlhYjN2VU9ROXcySFJ4SUlnOFd3UlZlRTY4eGk0VXRMM3pScGh4cGx6d3VacmNxWUNxMUkzalBJNWRuSkl5Z0VvaE1iUHFWSlN6cnd6eEJKVHM1ek4rUmVVU2d4aWtQUVZGM0pWQmVOUXhiSEVOckVNTnZFZEZaVlY5bEg5K09SR0VzTlpRcHlUTmM0QzNBRzdYRjRuZ3pxK0RyTzJ6YnVhYU9YZ2RhRmNka0VvdG9TRkJWWDJxSjBDOE9XWmVHNEtHbHBnaEEwWGZUT1BDcVYycXF3UTI2UVdmRjJQTUxoSTJ3MWxWQWEyYVBzWWQwemEyNU1RUndnY1pONnVRRENpK1p4aUQ0WEVNMmtaeE9UNDFGblpuYVJsY3Bab3V6bFJxcWRiUVZXb3BRb1NCNThSVjUwbEJOckhpL0F3WFM1THJ3RFZscFkzRmMzQnlpWUdjNTJUcmlzdDZrT1hkd0luQVF0SnBwNVFjaHlhcXVZT1Y3U3UrZnhWTWFWM2RjMFJFMlM2bVVZMGdMdDJwTWNZcXJLSVE5dzJsMWdwUVVNdFFZY21tYnQ1RFROeGRoblVDalFxdGJLOVNVU3p2ckMwbW1oaEUxZTJGUzIrb3h5cHkvWkFTdXRrbXRqeDN2Y0JDMjRQWDY1bmJxa0JDUmhmalM5a0lZUG5lZThjTWFnVk9oSS8zVDFmQW1kdEFXWnNDc3dUSkNrUVZOYTBxV0tTS1BPcEhBVWhEOURyYlZjeW9Za3dxaHZoMTd2WUFheVhMUXlLR1lkeGxVREZwNDk0ckJYUmpZZ08xN0REWWV0TklVai9lenA2UzBsbmxwRXdzV21KTWtPd3NLWGVaS0VBaklIbjBFUUpJU2FSQmNPNlVNSU56N3AvYkVqam53NGZ0K3htRHZrc3hYNEcycklyaXM3cWFlS3dBRk1QMk9pN240Y3JpdVp3dHBTVXdwZkx4U25PUlNySXF1c2M1WkZhWHlzcVJXamlaMkR5QVdFSUwzNXRWU29RRWxGQUNqT2VHR1NFN0FIRVFnZG8vTFN2Q09nR0J2a3hzbURidmxTM0ZwNXZoYUIyVEFHcVJLcktLTXJoTFZwYUd6RVZqWjBPUXhEaGFDVEErUXlSUjFkMTVhUXpySm50TDNSaWJzaXBqRzZqbGdMNHlxYlMwc05ZZzFlODR2aGJCVnJFbEs2NENVY1dZWERmS3hocEl1eGlWSlpVeHNiTXkvdVJCS1ROUlE0a1EzTGRSWUxTMHJKalJQbFRQcVk2Z2RKc0VEYythUVhBbitIZ3NOVUNiUnVGME9qMHp3bkE3YldEa2JoTzVFbnMwMHFlUWhTMWxhQk1sNU0vY0FheHNMRjhyS3lxbCtUZjdFTExFR3UvaXhpaW1kQ3ZvMFRqZnBqS3dhZ2dlbjRlaDV2N0xva0xLYkx1eXZIaGNaRzhkaEdyRUR4N0hnOTNacHBKRjdxQnFPM2lWdmVYRURRTkluemVvZThZcTZlUGFaQloySnZpTTNXMlVBR290ZWtSQ0FHcTRFa0YxWDNET25SMTF5UnNCTDF0UmEwUFZjWmlORlhaMmMzNEZza3ZvbUluUVE2bHpwSm9aYkp4azQzTndLSkZCcXVKU3NyQnlIeWR4S09uVHhRQVNCbVMzaitKTW5zSFNsYTNFYzZLOVZXb0pWbjl6Zmp3T003aHFZQUFxSlF3RTJhM25BNDhKMlFHZWdSa3BaTml2U1kreXMzRWtLZDRvSkl3c3ZJSGwzY1dnTHQ1azROSDZPbXRMV2RwdXJPa3dFTXVwWWM3ZU10RFJoT2NJMnVpNUpoVkl6WHpMeXRvL0dBUHVab3lvOHdrb2R1VmdKZ2xDdDdPaEdiZ0lENE1xNHNpKzYzelVTMUZ1RkZYRmxxeWFqMmVtSGxMTWNCcVl1MEZNdVIyOEJiQjdsT3hSTVNpQ1FYRmhDS3V3a2haK3BZRGlHU2dic0tLVjhNaVNSc3VIU0lXTTlya2xSaUlsWlp1cVhqc1FLOG9vWUpNZ3EzSktXVmtoSGJoc1Z4RlV6dGhPV1BrWWlqY2J4NTRJS3NTZFQrdUxyM2NyR0t5b1lnRmlHUjlpQms0a2Zsb1VYK0pJbFFSUXFhYm1wZ25ocXRwUXBiNlJWUTFXSDVEbnJTNGhFb0dacWFlclEyZGhGYno4WGVQeFNobURibzcwZUlTam9vck8ydks4U0pYSTRTVW1FVTR6V0tEelVEdFdUWXc3eFhsYlNURWo0RlJnN3pLbktvR1JBTHYwR3M5VGdjMUJwQ3l3R1pSUUF0cVZ6MnhyQmNBTXpFcGZad0ZTYTJHNVcwUUJGalNNYXBXQUVGYTNIY0dON0N4RHpFQ3lJa0o5N3F3cnFXTlRXVm84NzZQUHNqUGtqMnd2Z3JvTTVsTFpLTUVUS1ZxbC9Ddm5XVkZpRmEvU3pKVVF3a29ac3I2N1k2dmxTUlYzLzJ0bU5UT1kzdm5heFl3TXVvUEtxZHpSMXc3SXFIeW1sUHhhQVRoZlU3S28yWlhZajRBWUpITCtrTmRLd1JRWUVTVFJhNWZzVVovclZDMVRNVHlXVnlZb3FOdHV6YUhzTXl2MnR2b2FyeGRmcXdZZ1UxYXhGby9jbnFsMUZHc3FLK3VBUk9WOEJYNEdVOFdjWlRBVGkycTdRY3lpME8wVitHaFdCTU5SVWtuOEgxU3NXVkU1QnkzR2kwRUNxVWVKb0JmQXREYTRhbWtkWEczN0FHUDVHZ2ViODRwN1VhenBvS1J6ZEZ6ZVE4SGtvSEd4cHJLeS9IcG01dDEycDQ3SjZ4VFlERXo3dUlORVhTdXhZWHZGc2tZQWMreVN4SDlzZjVmdEt6VTZJYndWQmNVR2c1ZTVGTUNFWFNFclpSMHdHYXlWMTl3b005Z3VQalRxSmRWVHFSNHVFNG5KbkxsZFdWa0VDQ1pMZDJWTEYreHRhbWV4N0lwaXJpU0RVcHZycG45bHJ3R01DSHlwcE1IK3BzNkxJTHN1RkdVajFYRU9YaXFicVNIUFVLbkNscFdWNjhrcXRVUlZORFk0VE5hb2N5a29ZZVRVNW5nR0VRYS9TMURubkU0QWVYTWNLakhQQW1GVmpDQkVOYWV5TFZOSGZyM3B4OHhVc3RKOTRoSXBmSDRIS0UvZURhQXJLNmxTeVZWRmJkdDFneFRJVmszcHBwVmxGWGk0cEVoVkJUT2JxdW9oVTg1TUxYbjFpYWh2VWtISmpTQ01jMDF0TEZ2ZVZWQngwRG9kTTZqZnRDdTdET3RJell4cmMwcXAxSkdQMmF5WUZ6MkdiNkh2TXJPOGNuR3RWNkdqbTN1SW1TZkQyR3BXSzZ1b3diWkdNeEZLUUNvMXBPTXRjTVhGcFJzdCtoWEdvQW9tRjNzU1RCR2dUZ2xiQktXd3NRM3RacWFZU3AwWjFDaW1SRFdGY0NKVVBZSjAwQkk1RmtLWU5vaWZ1UXhtTjg4U1dWWFdMTWFVcXFxZ0MwQm1RSlI2c2szdTlOQ2Y2allMWHhBZnFzWUVnVkxBaFJZMkF0Z3RmbFpORm1GeWh4ZHJMa0FkV2xrNEQ4OE0yaXhIeWVwSWRoTUhyRy9pUjFaR3RxME1HcGJEYlJQWU9YZVNZMU02Tnk0WnN0dkdTa3RLK1hiRlBBVGoyRDM3MXNhUEVzQU1YaFhyc1owa20vWFN0a2hoTXlCZnNhNnVYRlplMlZDZStZTXIxK0dLZ3dyUXlOWXExVlJyQitFaXpBb3c2TnNkTktjeVZFa1llTTczeXM2cTRrQUhwNkJpRmtsVGtJclZDNW9ZVjd1endPR0N6NFVKMFN0cTJsV01KeTR3dGIrUmV0TDZ0WkZpY25KbUJ3NVVqQ3ZYWE1aVkpYMk1Ra2JmK1hONUVXZDc4Vno4L0pFc01aVEJpS056c20xaW5MUlVRNzRINE5pZGFxSTY4ajVzQUZneGNSdmVDN2llTEpYZlFZeGpaWjJDc2lXRmV3WlhKbUJJbFoxdGR0clg0aFN1YXRlS3NvL1JaT3RPS1cybm1xMW9UemVLNmRSV0FXdTJOUlZiNGhxMFNYbTFHdnR1Z0hyYnI1SVhxbVNrdGc1Q3VERTJNU2xQd3NZNWtORTJXcDNBcWlaYldWTEF4aUJGKzJpQlpidU5qNk1CNnJzTUxDN0Z5YXNhWUR5bzdLa29QeUV0dzNwRU1YZlB2eEFKaTJqQVFRZ2pyejByTElaU1dabElvTmh3ZDV4SzRBUjltWU5qV0FhTHJudUltSmVCVk45ekJPUk9iVnZicittVFRmRlNFSkxTUm5IbzdoRUpvSWk4TUZxanhtdmdtRjVVUlp6NHpMRmdaWjhDdHUyWDdnZ1ZjY0ttOWdWeElzT0hxeFhnTk1LbkZXWlluZjFkQm5PaGF5WHExN1F3RmxXVzA5ZU5LeVZKRm1YcWFPTkdBNWFDZWdNYkozVVVrR1kxaWMzbktXZ2pxOHFmVllHUUcxZ1J0NnJzNjJhNkhpcXFVT3FkZXNLNU5tWDRuR29mSm9pRTFkMGRGOWxWVmt2VDEva0VFYWFDb1lPd0ZwY1Zjb0xNKzc2NjlQeEM5cldxa3RIMHNXVVlsZDBWQ3B1Qlovc3RWUmNHZ3k5V1gyK1UxUXRoaTlTekFxU3h6WnN5K09pRnpCWW55U0dWNkdrdTQ0ckQ4QkNPWkJWM0J2RDUrQUtSSE53TUVzQjZFekhuSnBrVEFlaVVsRUdrY0VDZUI2R0RaVHA1WUVKVGx2ZHJrbnhZalRsbE1rZk50WHdEak03dVZqSzVKWFVVbjQzcnJxcEsyanl0YXhIVzBNNUc4REM4cnRITVlzN0tTZ2R1VlFNR1RZRnFGdlZTNnJrRDNzREo0NmFmZFlGd29xMTFBT0tDQkxodndvVWdjOElHQU55Y1I2a25acmRKUGRzdXhueWpmZDNGb3ZUbFJNZEVkdE9sNUNNVjVFSHNYUUJpczdUT3d2SURaYUdqMlZucGJoN2NwSzYzVndZRU1Md3Fianp5bDY5OXNhd0ZGa0YxeXFqVVUzMUhmQzZzVzFaRlZGdVhWWFZnejlrZUVhdzB5czFsV2ZtK2F6UUFRU1dBK2hLWVZmc1pqUG5jQWNVQjlvSWF5eS9VWlhSTmNrREdqaTc3R3NXYnZCbzZ0UHJXUHFPeVZrQlVxK0lOZXFwek5kWXMvdTBpZmg1cW1wcUlXKzMzSlZTVWN3WTcwS0w0VTlsWWRVNmxqdFNsczdsbWZpOWczWXplUWZWa2FHRmFWM09EQ25hRDJOOHdzRURGa2xFM1J6TTNaZ2hkWWtXSHNzenE3MEZJZWNuS2tWa3Q4ZXpNelJxOWJrR3VLb2pSTEJWU29kM1kxeVBxS2dZVzdKUlFUUFZ5eTV4SVlMak9neGdUNTJSS0pVWTFkT3JJaVJkNGZ1dFF4L0E1QWNTbUVqejB2Rldya0x6dmJXQXU5SE9XYkdneEZrMVZOVHBuQktrNlRnd2lzSS9IY3hZWFAxdUFXTzcyVUxGbEJUcSthU3UyVlRVczZocnhNMkNGK2hFb3IxVklBOVptRlVhYWIxbFNTZ1pzVnM0c3h6SGxWTG9KSHI5SDREaE9OVGtJMVhDMC93aVkyTm9XQUc1UmxuSEZucTZvTGNjcFFkZE11Si9PMTdKVkE1T0hMaTBCcUN6dHE3WTErK3VjQ2Q5OHFMSThNSUhCVi9jS2p4UVRtZTNoRkJTM015Q3FuRHN1eW0ybzgwSGp2RkZUdHJVUm1OYUdKc21WYWhJbWpUc1VYS3RRWlRBVnM3TXZ2OC8rZnpVclpBWGNMSjZNNGtvZTZYUDBiNlNtV1dORHp5VXBROGJsK0x0V3g0dHVxWjM2Y1JZVjN5dVZ4UE53dklpcWlRQ1NtdTdzcmdUelI2bmt5aHBDYXJYd0Z5MXZHZDVpUDJjWTA2bEZyNU5qaGhnMVk2K05CMjhmdGJLODNzOHJmN2tMSmJLd0RGUGJMZzI1YTBBZFpKRWlxcjVwaGl4S01EbFJVdGNzc3ExaHJpTHFHb0gremVOZ1ZtOU9lbWpzRVRWOEpkRjBOSG5rSUZ4V1kxT0I0WXJwN3J0V0o3TmdBQUFQWGtsRVFWUTNvTnM1bnBseVZmOHUyRm9MdTFKckh2ZWFaV1FqcUFrc2h0RmEyZ3pzU0czWnBrYnZnM0hhZkY5c2xQUGxsZGpGbEs4MEd5c204TXI0TVBobmVOV0VOUEdqQUlwbWlsVFBBVGRUUlRYbENCWUhZQVF1UHdBMzZ4SXBXdEdONHEzWTJNaGlHc1VwdVNTbmxFSlJEOFBvckM3Q0ZZVncrRjUxcVRoZ2FieHNUeFd6Q0dZMFpTc2IzbGZxQXkwT1BOak55OHhpUVFLc0hZRlEySEJaVnZWYkJ1cTNtMW9XS2FqcWFvbnNNNnVaVXI2Q2pYV05aMGw1RTNoM2pVUm1hNmtQM01KSWl5MUxtK2thaFFxNDFOMmlaamE1c2p0bExZTlpIWnJINnFVR200dk1iRHA2UncyQ0ZtdnV5RmtyQmNDeU10RnFCYUVDbXNIb0s5QloyTEEvbEpjUnFTYURxbmFXYnJaZEdhejNETGdJdkJsbjR3b0d6dGJ5Skdxc2x3eGtoaEhyVGpUWUZYQ3RPb0tTOHVMZG9mVmRBYk95bEdVNm5sWXBYV1p0czRuWEJxNld4Sml0TU5va0hVSm5ibkpwbFFtK2FHcFkyYTVHTVYyUUQxaFJ1YkJQRktkdW1mNU9Ia0xIejBGOWx1RTVrakJqUmEwbkZFNUNVR3FIdzMyTW1qWjZ4a2dJTlZuU25aMVZaU3RLMnFLbFJhTGxRZ0s3dVRxN0pGWEp3TSszU09FS3loWk5JK3RKMEk1cU1ZeTlrMnFKRDdkVldkcUtYYTBDS05SMENjamcrQjJJWXUyZmNCWkpaa01GZ00xMXIwWDkyd2lsZ2hGR2d6Vm5leGxxQjd4TDltUzI5U2lZVVZZMm5YT1pqTkJSc3lEc1FQUldXNWhyWjRYY2RDNEhWV1JiamdKcjRzRm9mSzVTempRN3JoSTFVZWJkUGRFYmo2c3FJdlRaUVo1dmEwOHJBQnNBVzBVeGVXeXRBazdBMktKOVpweHpDaW9CMjRYRnRZQWVYWXhyNmFuU3FoTGdwcEVxV2JHd0x1blRnclYrSWpXbEwyOWxqYUFsNEVRTUdzRXJwNGFwZVppcXV3UlhMWEFxT0NlcnUzMm1teWRjNm9XVFNXcEZBR2R6ZVRCOFJUSFZNRXRsTTkwQ2JiUUNZaFBqcTNlZ1lyMUZHZFlJUWppdURHWjV6Wi9Bem9iS0dPeUx4dGk2YzRSd3R2MmFueVdsTElDbmxMaHhKUlh0NkE1ZWJEQldGTk9OYnhXWjJkMDJtbnU0UzlZRUNwZXBwVjF6U1dSQld4SFl6Vkl2MUNYU291d3FxWDNqQkJCRFpkWVFicFRRVzRaUWxTOHI1a0g0c3VTUm1nMisrM0pOMTB4MVBhQW1Fa210WWxFZGVHcEpFTTZrT3VDcUNSMjJvU3VqajVJVjJIZFQwemo1cHJMS1RqWEZBUGpkUWx5cTd4SUJ4QVFQNXlNY3pHNFZ4QUt3MG42aWxaMlFCY2UycEx1bGt1eHhxbm9JekZmZ3F5cWppbDlTMVZOd0JyRm1leWVvcHM4eU9qWlV5YlpkZlM4Q3VhVElKdW16czV0T0RhTnRMcEZEUS9QY0pHd2VMaG1lTDFuQjBLcWlVRFNjc2lVVkQ4OURpM0h0ckt0U1VMdzNSTGl5Z1pEKzdzRjhKVE9iZ1lzckd2RE5VRlJHbDFpeTBMbDFZa1VjMmFKWU1vZzkyMEk4cVc2WURDZzFNcWswSkhKRktYa2JnYlJyZUkrcXBZTk9aSHJWY0RVYmE3cGpzcGhTSk50SzZ1cGdSTkFWb09TMG11Z0JlTjRiSVpnSGh1UFovczFFTmFYNktzVnIrWU5yaDFOYjdpcFIwUEU1emJOUmVnQ2JySFJVdzZZZjA3ZExCSmwxZjhLQjlhczJWMW5OcUFzbDYyTEJCaGVod2FsZXJrSG1CMUpGSUVaS1NFdXNkbDVKUWoxbkpsSFhTQ0YzNDJnSjlDWUdyWGVsa25KSVhxVlA4c0QrcXRwbENSM1hIMnFmS3EweWdNcCtLblZrS3hObFo4bTJZa0lsVk1pQ25YVXdsN3F6bkJLU3ZRejNtM1B0Nm9RYlhPNWI1Rml4Q2gvZkh4VVFXL0FFY0s2ekNOcUtRbkw5c3l3cW1LdXd2cVNZelQvYVBWTk5wVnlodlJXMjFhcWNpQ3NqZFd2QndJTFV2aDVWeUN6YldvQzFwSmpKNjgwQ1dzbCt1ZEtCNlQ1UndHMW1sb2hubHBiZzQ3aXo1VTloYTBGR3RtUkxGWUJ0Tzk5eTk3QXAweitaRFRBb2c2a1NMWnNNSGcvSUZra2dwNkNwdlUyVTBjWVZTZG5ta2p3QmRPbVhieFRXTld6dUliaXBNaW9WeEVja1pFb2FoU09peTJNM0swamNDMUxoVkR3YXFHMFp2a2NXcUNuckc0R0l4eWtycWxiV2R3NkxReUJhWlI4SG1MUkloUVdzSHN3RDQyWlhWTE5rZjlsK0ZsVzBIVlEybHdGc0MvWjFGZHpsUVIwS2FQZm8rRmRmdSsvZHdWUklDdTFDR1I3QUVJaUFoYytBWlVGMGtPQmFQeG1VcWc0aTY0dlFuVTRuRkRZSjlOeisxZlZYdmVIOXFtcitrUElMeDhvS2NSVi9CRmJ4YkUwSk1UMGtTRDR3NkwvbE5ZOG9jc3FhZ1ZkVTNBM01qeGh4Y0d1cXpzUEg0aXJwYW93MXE2T3lyVmp2cDlOcGM1OUU5MUxsZGJvWVZ6SldkaW1XZkFXMlNORUtjRGFYMkZtQkxMQS91S3hsbWhoNjEzSXMxVVJRQXBiS2Z0dHd4TDAycTZPbng1cFF4U2JQb2pBZyt2NWhBbk42TEhWUkRYSXN2S3RSamlTMHFKVXlaVEFYVmJBSzgyRWxGSldhUWRWb3FVQzFVbnQ3QlZhVFF1ZE02U3VxZXhqUUpONCswaWNheHYvdXRiS3Y4M0VUYlQ4SDhnamNPS3hPSm1iVWE2T09WWGh0M2RGWTZySHY5WG9OekZMY2VFQTFvOCtwS20wTEFIUEhaMnJZS2pGcTBoZlpGaXhzcUhKZ0QzZUQ1bitVMGtiMW1GalhrbjJsdk1TU09zTkUvQ2RJQUtGMFN5dHE2dXJPSFVONWd3ZzRHWm9zZ2JtZ2dNNXVjcmEycXJTMklnMWNiaUJCY3hZemd6VUROTEN2TDhHYlpYTnA2T1J5M0xtUytLazgzelJJQUs2QTFpb0thMkk5TmFwSXVpVUZkZkM5NzY2UEZaVXRxVXI2S2JXayt6WlUxYS9acklYRXp0cmpUT2Z6N2h3S3ppQ2VYSWFyYUh0YlpJTXorMnBHZ2F6Q213NHFXQUZ2RWRob2RZcDBYcTBwVjdHMVlXWVdiTzRxaEdxNDIrWjhCWXRyTFd2bHVOUHBaQWVhRkZTMXZ1YlBnYmd4c3FjcG5BYXN6Qm92S2FGb0RROEJHdGpmVU9sNE5BRzJubVFWMDRmZUpndW12WDJmc3JRRVdaZ2hMMEpuVmRZa24zRE9aSWVSTjg2UnFQV0Ntc3ZHVnFFTVJud3hRQXh3UzhFTVlvM0l6bVkyK0JDY0xwNE1LaXV5dWhJbWFtbGJaRmNOb05sN3RwK1JIZDE4WmpRSVJLeVhkRlJoTjk4L2h5S3F3WFdObzdPMXdpYVhvSE4xMDhSRVpaV0VxNmdybklmanplZzhqZFJmMVhFTDRra1hhNWJCakt4b0thbGpCamVIbFZ4UTRHYXljcFc0bERPQUt0blR4SEF0T2Z6T3Rad0hBTTdzcVZYa1Y2eXU2a2FwMW5Ia1hLcVdGLzRYSHFqZW5OS3FCanBSM2wxY2gzRWpnMStFc2dkUWhzZEcwQjRGTTlzV0FWV3B1QXlpd1RQbGVaeHQ5VnlaVlMycVhmUmVXcVRBaWxwcjlBcG9XVGp4eW1pdDdOd1Y0SlRyaVp5T0E5QjBrN0hGZlVMb3VybUtZSFZuUlF2cUdMNUhNSGRxRmNSMnFXcG1jSzZlVHd4MmRpcFdydmlEaWxyK2ZLV3EzT1dSV2RIS3dBNGV1OHdqY2hiZVJ6RmlscWpqWk4zdWZDcGZrSjAvc2NWcG5ZazZMMFBJNzdseGRXQ1o4N1dpV203Qi9BR3F1UVNudWpHS3NCOENKbWlKcThxMXBLSVZXeXFPaVRLNjZyMThCTjhyNzQvQUU3MWZkQzN5UFMyTXhkT3BuRTF0bFZ4RDlKbVZPb2dnTityNFBqQVhWRlBhM0VnNWpWSkdGVlVHTm9sSDIwR1ZyVUI3Qk95U1dxNldxWVFkV1I5MnBjRk1ZTXdja2JTZ0NLQ3FENjdEaWlXdTFnOE1RQzlCeWZjRnFXMUwrakw3MTRxTkN1em5vU3h0MGRhMmd0V04xRzhGMEJLME5OMG51aW1lbFVGOWRJZEFmak80NFVUM0NqUUxvVWVMSEpGVE8zZ21wUnVJSU92d0JRQ2JxTmVvM3F0WjlpRjZ4VksxM0dSbG80enFpbXErQ0dkVGlSMXVSWThvcWdFMDJoWkJhNzlrWlhQTXF1eFJIS2xhMnNhWldONG1ScVpVajB2TENLaGtqS25xT1FITnVTWlZKb0t2QXFTMXdwRXF1dldEQzFCMnlwd3JDUHNSTUVQVlRPRE1MSk1EdjZxZUtYd2kySllWNVNxNHFLeXZnR3NIQ0xpdWoyalI1OVY4Z01xU0oyRkpaUlhFSFZSSGozc0ZQcmN0Nk9wcWxXMUdwYXRRZHQwR3Z3Zk02bjYzSW5zR1ZGaEpHYUJxZ3FxSVY2SXNYbGxaZ3lTUHE0UjNibnQzd2k1Y3YrY04yeXFRTFcxVDk1S1lWc1dXdEtrNGNCOVc1M1dRUWZsUVlSNldsNEhhSlpqdlZFMEQ1eXZxK1JLZ1pDczVxZEJFUDVzRDk0Y0F2UUxsU2dOYVNNQXRIeDg4QnVOUTQxemRGc1gzMHpLYmNzME1MRC9paGtwUXpsMHdpVHFLTFRmYkttQ215WUlDbkswSWJhaWVDNENHOWlTeUxRN2NJTUdRd2F1NlRLb3E2MEFwbDNXTjQwTFpwY2ExQ0tLSzlWUXl5SUVuOHcwRjhGNkNMMmg4bzNpeEd3QzdzN0VXekNPcW1jQXBZeFlENGpzQXpWUzBzbDJ0OThwQTd2cktvcGhDVlNvbmJZcGdINm12U24yNHBUQlY0c2R0VjNCdE1xNWs4MnkrSUFEdlVKMHVBbGtDVlR4SWFQbStVTnUvcWtWNEYxVHpIWENHclhJQXFJdEJLeXBxSzk5VnRBT1ZzNjRPNE9iWDdwSExWQ3BZSGNSbXd2TFI3VHZZQUtCQk41OExHVnpEdUZ6K2hRYldnbmNReUNaQWsrVmJzUFNvdWY5MzI2MWlaZ21mQ3B3UmJBdnFtU3FyaVUyUHdoamFvT3lZcXRJZWdWWFZpVHNteXRhNmJHeVNwWTNneVJycEl5QWVhV0REeHRwc1h3S3lhbE1ES05QN1lCWE1xRXNrVXNpMnVDOEZOQVB4QUtUVmZUMW82VnpNMEUwakYrMXJXY1V1SHZkeWc3dmdvRnBsWDhIcHZIcE1DT01SVVBIelprSW5zcWxGS05YL0VJTzUyRTBTeFN6T3dvYjJWbVJMVzVEMVhJVTByYmdNMUF6V2d5QzdmZThHN3hVQUsvdGFFQmF0N2x1cXR5UDdFbXNhSlFPajVGK21yblpmQ3VZQ2ZCVUFXd1NoeWQ2cE1ZL3ZBSEcxVXFPWXBiSS9neTVUMENNS20rVU8zZ0Z1Qzg1ZGdmRFZlZ3VQRGZJVHJJQkxzTHJjZ2RoM0NGZ0ZaamFLSjRJdjNGOEFORXF2dXhSMXRWS09nTG9DYTFqeGJvQkFrajZ2N2ovaWNGYkE3ZjRyZlJuUURMUlZpRzEzaTB2cUJRcllWcUJiQURaVDBacGlIb1N6dlFwb3BLSUZTM3NFMUhmQldsSFhkMEg3TG5BcnF2b3VnTXRsakhCZ1puaDNFb3ovQktqTE1MNFoyQXEwK2hFSnI5amFWVUJidk56Q0lVaXJvQzdBV21tRnc0bzVBSzNNdEI1VnlwWk1TRmdzMDVKeUdWd2x3QnFzRUdBQWEyWlUxQ2pVZXhYR3NFNHJLcmlpbEJ2RnpPS0tvM0F1QXJvRTZRRlFVM3U4WXBOWHdTNWsrMVRadDVVcndvdU40S2lVRXcrazNaV0RwMVJYSE5ScVhiMjFUczM5OTQ1eVpTZzNWblpGTlE5Q0YzWGVaeXI1RGdCWEtpd0NNYTJNeGVURFlYZ1AxRnNmOVFOS1pjMGs4MVJKazNyNkVRM3JDbUJWeUxMNzVFaloxcElWREhvRnRpT0FIb0IwQmRUVnlscUJzS0tLUytBZUJYSlZMWStDWEFTdUd2Ty9BdXE3R3VFakRmR0tnMW9LYTF6L2RtbWk5STlTVUdOaGwwQXRmdWxIQWF3b1lyblNrbU5YQVZ1R0VockVWWHZVRitBNUN0MlBxTk9qRGV0eW5hNENtZVVvbG1lWExONEFxN0M1U2oxMFE3eWpnbCt0NkNOeFNSSG1JNVgrQ3B3cmVZQjNRZmRxbmE0cTIxS2RCdWM0R29ac240OVpPT2lWaW53SHFLOVd6anZnZXdlRWgyQVU1K3Z0eFo5Q2Q5V3FraDQ5VjE4RTVvajZ2VnluMFJTdEF5R0lPNWVkWFJLZDVCMFZHVlhxMnlyM3hZcCs1VXQrQzRRSjRQMU4zMzlwUU1qUmVqajR2Yi9EY3I2clFjM08vMHJqbXRacGVZQ0JpQ0hmQ2VtUmJOaGJLL3BOVVBjM3dmS3k1ZjJEN09sTDMvdVBodmUvb1U0VDBGOGYrVk5NMnZ5b2l2MGpLK0tIUWZkSHErMGJuY3o0b3o3My8rWTZMYkt3MW8vNUI3ZU9mMVJsLzBkdTlCOXRuLzlidnJmL2ordjBoNnR0bjJ0cC9yLzQ4MTl5NC96djUzOTF1dnp6ZndEaWZ6NnBoVDFNUGdBQUFBQkpSVTVFcmtKZ2dnPT0pfS5zZW0tY29sb3ItZGFyay1pbnB1dHMgLmNvbG9yLXR5cGV7Y29sb3I6IzU1NTtsaW5lLWhlaWdodDoyMnB4fS5zZW0tY29sb3ItbGlnaHQtaW5wdXRzIC5jb2xvci10eXBle2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MjJweH0uc2VtLWNvbG9yLWxpc3QgbGl7bWluLWhlaWdodDo1MHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIGlzSUUxMDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaHN2YTogSHN2YTtcblxuICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBvdXRwdXRDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIGluaXRpYWxDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIGZhbGxiYWNrQ29sb3I6IHN0cmluZztcblxuICBwcml2YXRlIGxpc3RlbmVyUmVzaXplOiBhbnk7XG4gIHByaXZhdGUgbGlzdGVuZXJNb3VzZURvd246IGFueTtcblxuICBwcml2YXRlIGRpcmVjdGl2ZUluc3RhbmNlOiBhbnk7XG5cbiAgcHJpdmF0ZSBzbGlkZXJIOiBudW1iZXI7XG4gIHByaXZhdGUgc2xpZGVyRGltTWF4OiBTbGlkZXJEaW1lbnNpb247XG4gIHByaXZhdGUgZGlyZWN0aXZlRWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGRpYWxvZ0Fycm93U2l6ZTogbnVtYmVyID0gMTA7XG4gIHByaXZhdGUgZGlhbG9nQXJyb3dPZmZzZXQ6IG51bWJlciA9IDE1O1xuXG4gIHByaXZhdGUgdXNlUm9vdFZpZXdDb250YWluZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgc2hvdzogYm9vbGVhbjtcbiAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcblxuICBwdWJsaWMgdG9wOiBudW1iZXI7XG4gIHB1YmxpYyBsZWZ0OiBudW1iZXI7XG4gIHB1YmxpYyBwb3NpdGlvbjogc3RyaW5nO1xuXG4gIHB1YmxpYyBmb3JtYXQ6IG51bWJlcjtcbiAgcHVibGljIHNsaWRlcjogU2xpZGVyUG9zaXRpb247XG5cbiAgcHVibGljIGhleFRleHQ6IHN0cmluZztcbiAgcHVibGljIGhzbGFUZXh0OiBIc2xhO1xuICBwdWJsaWMgcmdiYVRleHQ6IFJnYmE7XG5cbiAgcHVibGljIGFycm93VG9wOiBudW1iZXI7XG5cbiAgcHVibGljIHNlbGVjdGVkQ29sb3I6IHN0cmluZztcbiAgcHVibGljIGh1ZVNsaWRlckNvbG9yOiBzdHJpbmc7XG4gIHB1YmxpYyBhbHBoYVNsaWRlckNvbG9yOiBzdHJpbmc7XG5cbiAgcHVibGljIGNwV2lkdGg6IG51bWJlcjtcbiAgcHVibGljIGNwSGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIGNwQWxwaGFDaGFubmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBjcE91dHB1dEZvcm1hdDogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcERpc2FibGVJbnB1dDogYm9vbGVhbjtcbiAgcHVibGljIGNwRGlhbG9nRGlzcGxheTogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcElnbm9yZWRFbGVtZW50czogYW55O1xuICBwdWJsaWMgY3BTYXZlQ2xpY2tPdXRzaWRlOiBib29sZWFuO1xuXG4gIHB1YmxpYyBjcFBvc2l0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBjcFBvc2l0aW9uT2Zmc2V0OiBudW1iZXI7XG5cbiAgcHVibGljIGNwT0tCdXR0b246IGJvb2xlYW47XG4gIHB1YmxpYyBjcE9LQnV0dG9uVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgY3BPS0J1dHRvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGNwQ2FuY2VsQnV0dG9uOiBib29sZWFuO1xuICBwdWJsaWMgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBjcENhbmNlbEJ1dHRvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGNwUHJlc2V0TGFiZWw6IHN0cmluZztcbiAgcHVibGljIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXTtcbiAgcHVibGljIGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoOiBudW1iZXI7XG5cbiAgcHVibGljIGNwUHJlc2V0RW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGNwQWRkQ29sb3JCdXR0b246IGJvb2xlYW47XG4gIHB1YmxpYyBjcEFkZENvbG9yQnV0dG9uVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmc7XG4gIHB1YmxpYyBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY29sb3JUb2dnbGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnaHVlU2xpZGVyJykgaHVlU2xpZGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhbHBoYVNsaWRlcicpIGFscGhhU2xpZGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdkaWFsb2dQb3B1cCcpIGRpYWxvZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnksXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgc2VydmljZTogQ29sb3JQaWNrZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXJQb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICAgICAgY29uc3QgaHVlV2lkdGggPSB0aGlzLmh1ZVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgY29uc3QgYWxwaGFXaWR0aCA9IHRoaXMuYWxwaGFTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgdGhpcy5zbGlkZXJEaW1NYXggPSBuZXcgU2xpZGVyRGltZW5zaW9uKGh1ZVdpZHRoLCB0aGlzLmNwV2lkdGgsIDEzMCwgYWxwaGFXaWR0aCk7XG5cbiAgICAgIGlmICh0aGlzLmNwT3V0cHV0Rm9ybWF0ID09PSAncmdiYScpIHtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSAxO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNwT3V0cHV0Rm9ybWF0ID09PSAnaHNsYScpIHtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RlbmVyTW91c2VEb3duID0gKGV2ZW50OiBhbnkpID0+IHsgdGhpcy5vbk1vdXNlRG93bihldmVudCk7IH07XG4gICAgICB0aGlzLmxpc3RlbmVyUmVzaXplID0gKCkgPT4geyB0aGlzLm9uUmVzaXplKCk7IH07XG5cbiAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLmluaXRpYWxDb2xvciwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5jcFdpZHRoICE9PSAxMDApIHtcbiAgICAgIGNvbnN0IGh1ZVdpZHRoID0gdGhpcy5odWVTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGFscGhhV2lkdGggPSB0aGlzLmFscGhhU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHRoaXMuc2xpZGVyRGltTWF4ID0gbmV3IFNsaWRlckRpbWVuc2lvbihodWVXaWR0aCwgdGhpcy5jcFdpZHRoLCAxMzAsIGFscGhhV2lkdGgpO1xuXG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKGZhbHNlKTtcblxuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gIH1cbiAgcHVibGljIGFkZENvbG9yKCl7fVxuICBwdWJsaWMgb3BlbkRpYWxvZyhjb2xvcjogYW55LCBlbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnNlcnZpY2Uuc2V0QWN0aXZlKHRoaXMpO1xuXG4gICAgICBpZiAoIXRoaXMud2lkdGgpIHtcbiAgICAgICAgdGhpcy5jcFdpZHRoID0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMjA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0SW5pdGlhbENvbG9yKGNvbG9yKTtcblxuICAgICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcoY29sb3IsIGVtaXQpO1xuXG4gICAgICB0aGlzLm9wZW5Db2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldHVwRGlhbG9nKFxuICAgIGNvbG9yVG9nZ2xlOiBib29sZWFuLFxuICAgIGluc3RhbmNlOiBhbnksIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNvbG9yOiBhbnksXG4gICAgY3BXaWR0aDogc3RyaW5nLCBjcEhlaWdodDogc3RyaW5nLCBjcERpYWxvZ0Rpc3BsYXk6IHN0cmluZywgY3BGYWxsYmFja0NvbG9yOiBzdHJpbmcsXG4gICAgY3BBbHBoYUNoYW5uZWw6IHN0cmluZywgY3BPdXRwdXRGb3JtYXQ6IHN0cmluZywgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW4sXG4gICAgY3BJZ25vcmVkRWxlbWVudHM6IGFueSwgY3BTYXZlQ2xpY2tPdXRzaWRlOiBib29sZWFuLCBjcFVzZVJvb3RWaWV3Q29udGFpbmVyOiBib29sZWFuLFxuICAgIGNwUG9zaXRpb246IHN0cmluZywgY3BQb3NpdGlvbk9mZnNldDogc3RyaW5nLCBjcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93OiBib29sZWFuLFxuICAgIGNwUHJlc2V0TGFiZWw6IHN0cmluZywgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdLCBjcE1heFByZXNldENvbG9yc0xlbmd0aDogbnVtYmVyLFxuICAgIGNwUHJlc2V0RW1wdHlNZXNzYWdlOiBzdHJpbmcsIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZyxcbiAgICBjcE9LQnV0dG9uOiBib29sZWFuLCBjcE9LQnV0dG9uQ2xhc3M6IHN0cmluZywgY3BPS0J1dHRvblRleHQ6IHN0cmluZyxcbiAgICBjcENhbmNlbEJ1dHRvbjogYm9vbGVhbiwgY3BDYW5jZWxCdXR0b25DbGFzczogc3RyaW5nLCBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZyxcbiAgICBjcEFkZENvbG9yQnV0dG9uOiBib29sZWFuLCBjcEFkZENvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZywgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZyxcbiAgICBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZyk6IHZvaWRcbiAge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnNldEluaXRpYWxDb2xvcihjb2xvcik7XG5cbiAgICAgIHRoaXMuaXNJRTEwID0gKGRldGVjdElFKCkgPT09IDEwKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmID0gZWxlbWVudFJlZjtcblxuICAgICAgdGhpcy5jcERpc2FibGVJbnB1dCA9IGNwRGlzYWJsZUlucHV0O1xuXG4gICAgICB0aGlzLmNwQWxwaGFDaGFubmVsID0gY3BBbHBoYUNoYW5uZWw7XG4gICAgICB0aGlzLmNwT3V0cHV0Rm9ybWF0ID0gY3BPdXRwdXRGb3JtYXQ7XG4gICAgICB0aGlzLmNwRGlhbG9nRGlzcGxheSA9IGNwRGlhbG9nRGlzcGxheTtcblxuICAgICAgdGhpcy5jcElnbm9yZWRFbGVtZW50cyA9IGNwSWdub3JlZEVsZW1lbnRzO1xuICAgICAgdGhpcy5jcFNhdmVDbGlja091dHNpZGUgPSBjcFNhdmVDbGlja091dHNpZGU7XG5cbiAgICAgIHRoaXMudXNlUm9vdFZpZXdDb250YWluZXIgPSBjcFVzZVJvb3RWaWV3Q29udGFpbmVyO1xuXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5jcFdpZHRoID0gcGFyc2VJbnQoY3BXaWR0aCwgMTApO1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNwSGVpZ2h0ID0gcGFyc2VJbnQoY3BIZWlnaHQsIDEwKTtcblxuICAgICAgdGhpcy5jcFBvc2l0aW9uID0gY3BQb3NpdGlvbjtcbiAgICAgIHRoaXMuY3BQb3NpdGlvbk9mZnNldCA9IHBhcnNlSW50KGNwUG9zaXRpb25PZmZzZXQsIDEwKTtcblxuICAgICAgdGhpcy5jcE9LQnV0dG9uID0gY3BPS0J1dHRvbjtcbiAgICAgIHRoaXMuY3BPS0J1dHRvblRleHQgPSBjcE9LQnV0dG9uVGV4dDtcbiAgICAgIHRoaXMuY3BPS0J1dHRvbkNsYXNzID0gY3BPS0J1dHRvbkNsYXNzO1xuXG4gICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uID0gY3BDYW5jZWxCdXR0b247XG4gICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uVGV4dCA9IGNwQ2FuY2VsQnV0dG9uVGV4dDtcbiAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b25DbGFzcyA9IGNwQ2FuY2VsQnV0dG9uQ2xhc3M7XG5cbiAgICAgIHRoaXMuZmFsbGJhY2tDb2xvciA9IGNwRmFsbGJhY2tDb2xvciB8fCAnI2ZmZic7XG5cbiAgICAgIHRoaXMuY29sb3JUb2dnbGUgPSBjb2xvclRvZ2dsZTtcblxuICAgICAgdGhpcy5zZXRQcmVzZXRDb25maWcoY3BQcmVzZXRMYWJlbCwgY3BQcmVzZXRDb2xvcnMpO1xuXG4gICAgICB0aGlzLmNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoID0gY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg7XG4gICAgICB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlID0gY3BQcmVzZXRFbXB0eU1lc3NhZ2U7XG4gICAgICB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3MgPSBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzO1xuXG4gICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b24gPSBjcEFkZENvbG9yQnV0dG9uO1xuICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uVGV4dCA9IGNwQWRkQ29sb3JCdXR0b25UZXh0O1xuICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uQ2xhc3MgPSBjcEFkZENvbG9yQnV0dG9uQ2xhc3M7XG4gICAgICB0aGlzLmNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzcyA9IGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzcztcblxuICAgICAgaWYgKCFjcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93KSB7XG4gICAgICAgIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nQXJyb3dTaXplID0gMDtcbiAgICAgICAgdGhpcy5kaWFsb2dBcnJvd09mZnNldCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChjcE91dHB1dEZvcm1hdCA9PT0gJ2hleCcgJiYgY3BBbHBoYUNoYW5uZWwgIT09ICdhbHdheXMnICYmIGNwQWxwaGFDaGFubmVsICE9PSAnaGV4OCcpIHtcbiAgICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCA9ICdkaXNhYmxlZCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEluaXRpYWxDb2xvcihjb2xvcjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsQ29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcmVzZXRDb25maWcoY3BQcmVzZXRMYWJlbDogc3RyaW5nLCBjcFByZXNldENvbG9yczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLmNwUHJlc2V0TGFiZWwgPSBjcFByZXNldExhYmVsO1xuICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSBjcFByZXNldENvbG9ycztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2xvclRvZ2dsZShjb2xvckRyb3BFbmFibGVkOiBib29sZWFuKTp2b2lke1xuICAgIHRoaXMuY29sb3JUb2dnbGUgPSBjb2xvckRyb3BFbmFibGVkO1xuICB9XG5cbiAgcHVibGljIHNldENvbG9yRnJvbVN0cmluZyh2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuID0gdHJ1ZSwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGxldCBoc3ZhOiBIc3ZhO1xuXG4gICAgaWYgKHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnIHx8IHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdoZXg4Jykge1xuICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodmFsdWUsIHRydWUpO1xuXG4gICAgICBpZiAoIWhzdmEgJiYgIXRoaXMuaHN2YSkge1xuICAgICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICghaHN2YSAmJiAhdGhpcy5oc3ZhKSB7XG4gICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh0aGlzLmZhbGxiYWNrQ29sb3IsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoaHN2YSkge1xuICAgICAgdGhpcy5oc3ZhID0gaHN2YTtcblxuICAgICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoZW1pdCwgdXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHRoaXMuc2V0RGlhbG9nUG9zaXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ICE9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uRHJhZ0VuZChzbGlkZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyRHJhZ0VuZCh7IHNsaWRlcjogc2xpZGVyLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvciB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRyYWdTdGFydChzbGlkZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyRHJhZ1N0YXJ0KHsgc2xpZGVyOiBzbGlkZXIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzSUUxMCAmJiB0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ3BvcHVwJyAmJlxuICAgICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICF0aGlzLmlzRGVzY2VuZGFudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgdGhpcy5jcElnbm9yZWRFbGVtZW50cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbSA9PT0gZXZlbnQudGFyZ2V0KS5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgaWYgKCF0aGlzLmNwU2F2ZUNsaWNrT3V0c2lkZSkge1xuICAgICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh0aGlzLmluaXRpYWxDb2xvciwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDaGFuZ2VkKHRoaXMuaW5pdGlhbENvbG9yKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQWNjZXB0Q29sb3IoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdwb3B1cCcpIHtcbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm91dHB1dENvbG9yKSB7XG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yU2VsZWN0ZWQodGhpcy5vdXRwdXRDb2xvcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2FuY2VsQ29sb3IoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh0aGlzLmluaXRpYWxDb2xvciwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdwb3B1cCcpIHtcbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDaGFuZ2VkKHRoaXMuaW5pdGlhbENvbG9yLCB0cnVlKTtcblxuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNhbmNlbGVkKCk7XG4gIH1cblxuICBwdWJsaWMgb25Gb3JtYXRUb2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtYXQgPSAodGhpcy5mb3JtYXQgKyAxKSAlIDM7XG4gIH1cblxuICBwdWJsaWMgb25Db2xvckNoYW5nZSh2YWx1ZToge3M6IG51bWJlciwgdjogbnVtYmVyLCByZ1g6IG51bWJlciwgcmdZOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLnMgPSB2YWx1ZS5zIC8gdmFsdWUucmdYO1xuICAgIHRoaXMuaHN2YS52ID0gdmFsdWUudiAvIHZhbHVlLnJnWTtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XG4gICAgICBzbGlkZXI6ICdsaWdodG5lc3MnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS52LFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XG4gICAgICBzbGlkZXI6ICdzYXR1cmF0aW9uJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEucyxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25IdWVDaGFuZ2UodmFsdWU6IHt2OiBudW1iZXIsIHJnWDogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5oID0gdmFsdWUudiAvIHZhbHVlLnJnWDtcbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XG4gICAgICBzbGlkZXI6ICdodWUnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5oLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFscGhhQ2hhbmdlKHZhbHVlOiB7djogbnVtYmVyLCByZ1g6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEuYSA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1g7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnYWxwaGEnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5hLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkhleElucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlICYmIHZhbHVlWzBdICE9PSAnIycpIHtcbiAgICAgICAgdmFsdWUgPSAnIycgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcodmFsdWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgICBpbnB1dDogJ2hleCcsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlZElucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpO1xuXG4gICAgcmdiYS5yID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hzdmEocmdiYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtpbnB1dDogJ3JlZCcsIHZhbHVlOiByZ2JhLnIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yfSk7XG4gIH1cblxuICBwdWJsaWMgb25CbHVlSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSk7XG5cbiAgICByZ2JhLmIgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe2lucHV0OiAnYmx1ZScsIHZhbHVlOiByZ2JhLmIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yfSk7XG4gIH1cblxuICBwdWJsaWMgb25HcmVlbklucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpO1xuXG4gICAgcmdiYS5nID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hzdmEocmdiYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnZ3JlZW4nLFxuICAgICAgdmFsdWU6IHJnYmEuZyxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25BbHBoYUlucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5hID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdhbHBoYScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmEsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uSHVlSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KSB7XG4gICAgdGhpcy5oc3ZhLmggPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnaHVlJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuaCxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25MaWdodG5lc3NJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpO1xuXG4gICAgaHNsYS5sID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLmhzbGEyaHN2YShoc2xhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdsaWdodG5lc3MnLFxuICAgICAgdmFsdWU6IGhzbGEubCxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25TYXR1cmF0aW9uSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKTtcblxuICAgIGhzbGEucyA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5oc2xhMmhzdmEoaHNsYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnc2F0dXJhdGlvbicsXG4gICAgICB2YWx1ZTogaHNsYS5zLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFkZFByZXNldENvbG9yKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICghdGhpcy5jcFByZXNldENvbG9ycy5maWx0ZXIoKGNvbG9yKSA9PiAoY29sb3IgPT09IHZhbHVlKSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gdGhpcy5jcFByZXNldENvbG9ycy5jb25jYXQodmFsdWUpO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnByZXNldENvbG9yc0NoYW5nZWQodGhpcy5jcFByZXNldENvbG9ycyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVtb3ZlUHJlc2V0Q29sb3IoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5jcFByZXNldENvbG9ycyA9IHRoaXMuY3BQcmVzZXRDb2xvcnMuZmlsdGVyKChjb2xvcikgPT4gKGNvbG9yICE9PSB2YWx1ZSkpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5wcmVzZXRDb2xvcnNDaGFuZ2VkKHRoaXMuY3BQcmVzZXRDb2xvcnMpO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgY29sb3IgcGlja2VyIGRpYWxvZyBzdGF0dXNcblxuICBwcml2YXRlIG9wZW5Db2xvclBpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2hvdykge1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZXREaWFsb2dQb3NpdGlvbigpO1xuXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSwgMCk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UudG9nZ2xlKHRydWUpO1xuXG4gICAgICBpZiAoIXRoaXMuaXNJRTEwKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubGlzdGVuZXJNb3VzZURvd24pO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5saXN0ZW5lclJlc2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUNvbG9yUGlja2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3cpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnRvZ2dsZShmYWxzZSk7XG5cbiAgICAgIGlmICghdGhpcy5pc0lFMTApIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5saXN0ZW5lck1vdXNlRG93bik7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyUmVzaXplKTtcblxuICAgICAgaWYgKCF0aGlzLmNkUmVmWydkZXN0cm95ZWQnXSkge1xuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbG9yUGlja2VyKGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVyRGltTWF4KSB7XG4gICAgICBjb25zdCBsYXN0T3V0cHV0ID0gdGhpcy5vdXRwdXRDb2xvcjtcblxuICAgICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKTtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuZGVub3JtYWxpemVSR0JBKHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSkpO1xuXG4gICAgICBjb25zdCBodWUgPSB0aGlzLnNlcnZpY2UuZGVub3JtYWxpemVSR0JBKHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKG5ldyBIc3ZhKHRoaXMuc2xpZGVySCB8fCB0aGlzLmhzdmEuaCwgMSwgMSwgMSkpKTtcblxuICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICB0aGlzLmhzbGFUZXh0ID0gbmV3IEhzbGEoTWF0aC5yb3VuZCgoaHNsYS5oKSAqIDM2MCksIE1hdGgucm91bmQoaHNsYS5zICogMTAwKSwgTWF0aC5yb3VuZChoc2xhLmwgKiAxMDApLFxuICAgICAgICAgIE1hdGgucm91bmQoaHNsYS5hICogMTAwKSAvIDEwMCk7XG5cbiAgICAgICAgdGhpcy5yZ2JhVGV4dCA9IG5ldyBSZ2JhKHJnYmEuciwgcmdiYS5nLCByZ2JhLmIsIE1hdGgucm91bmQocmdiYS5hICogMTAwKSAvIDEwMCk7XG5cbiAgICAgICAgY29uc3QgYWxsb3dIZXg4ID0gdGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycgfHwgdGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2hleDgnO1xuXG4gICAgICAgIHRoaXMuaGV4VGV4dCA9IHRoaXMuc2VydmljZS5yZ2JhVG9IZXgocmdiYSwgYWxsb3dIZXg4KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5odWVTbGlkZXJDb2xvciA9ICdyZ2IoJyArIGh1ZS5yICsgJywnICsgaHVlLmcgKyAnLCcgKyBodWUuYiArICcpJztcbiAgICAgIHRoaXMuYWxwaGFTbGlkZXJDb2xvciA9ICdyZ2IoJyArIHJnYmEuciArICcsJyArIHJnYmEuZyArICcsJyArIHJnYmEuYiArICcpJztcblxuICAgICAgdGhpcy5vdXRwdXRDb2xvciA9IHRoaXMuc2VydmljZS5vdXRwdXRGb3JtYXQodGhpcy5oc3ZhLCB0aGlzLmNwT3V0cHV0Rm9ybWF0LCB0aGlzLmNwQWxwaGFDaGFubmVsKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb2xvciA9IHRoaXMuc2VydmljZS5vdXRwdXRGb3JtYXQodGhpcy5oc3ZhLCAncmdiYScsIG51bGwpO1xuXG4gICAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXJQb3NpdGlvbihcbiAgICAgICAgKHRoaXMuc2xpZGVySCB8fCB0aGlzLmhzdmEuaCkgKiB0aGlzLnNsaWRlckRpbU1heC5oIC0gOCxcbiAgICAgICAgdGhpcy5oc3ZhLnMgKiB0aGlzLnNsaWRlckRpbU1heC5zIC0gOCxcbiAgICAgICAgKDEgLSB0aGlzLmhzdmEudikgKiB0aGlzLnNsaWRlckRpbU1heC52IC0gOCxcbiAgICAgICAgdGhpcy5oc3ZhLmEgKiB0aGlzLnNsaWRlckRpbU1heC5hIC0gOFxuICAgICAgKTtcblxuICAgICAgaWYgKGVtaXQgJiYgbGFzdE91dHB1dCAhPT0gdGhpcy5vdXRwdXRDb2xvcikge1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLm91dHB1dENvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHBvc2l0aW9uaW5nXG5cbiAgcHJpdmF0ZSBzZXREaWFsb2dQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlhbG9nSGVpZ2h0ID0gdGhpcy5kaWFsb2dFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBsZXQgcG9zaXRpb24gPSAnc3RhdGljJywgdHJhbnNmb3JtID0gJycsIHN0eWxlID0gbnVsbDtcblxuICAgICAgbGV0IHBhcmVudE5vZGU6IGFueSA9IG51bGwsIHRyYW5zZm9ybU5vZGU6IGFueSA9IG51bGw7XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgICAgd2hpbGUgKG5vZGUgIT09IG51bGwgJiYgbm9kZS50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgcG9zaXRpb24gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpO1xuICAgICAgICB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKTtcblxuICAgICAgICBpZiAocG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScgJiYgdHJhbnNmb3JtTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRyYW5zZm9ybU5vZGUgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRyYW5zZm9ybU5vZGU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJveERpcmVjdGl2ZSA9IHRoaXMuY3JlYXRlQm94KHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAocG9zaXRpb24gIT09ICdmaXhlZCcpKTtcblxuICAgICAgaWYgKHRoaXMudXNlUm9vdFZpZXdDb250YWluZXIgfHwgKHBvc2l0aW9uID09PSAnZml4ZWQnICYmICFwYXJlbnROb2RlKSkge1xuICAgICAgICB0aGlzLnRvcCA9IGJveERpcmVjdGl2ZS50b3A7XG4gICAgICAgIHRoaXMubGVmdCA9IGJveERpcmVjdGl2ZS5sZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJveFBhcmVudCA9IHRoaXMuY3JlYXRlQm94KHBhcmVudE5vZGUsIChwb3NpdGlvbiAhPT0gJ2ZpeGVkJykpO1xuXG4gICAgICAgIHRoaXMudG9wID0gYm94RGlyZWN0aXZlLnRvcCAtIGJveFBhcmVudC50b3A7XG4gICAgICAgIHRoaXMubGVmdCA9IGJveERpcmVjdGl2ZS5sZWZ0IC0gYm94UGFyZW50LmxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKiB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgICB0aGlzLmxlZnQgLT0gdGhpcy5jcFdpZHRoICsgdGhpcy5kaWFsb2dBcnJvd1NpemUgLSAyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgIHRoaXMuYXJyb3dUb3AgPSBkaWFsb2dIZWlnaHQgLSAxO1xuXG4gICAgICAgIHRoaXMudG9wIC09IGRpYWxvZ0hlaWdodCArIHRoaXMuZGlhbG9nQXJyb3dTaXplO1xuICAgICAgICB0aGlzLmxlZnQgKz0gdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwICogYm94RGlyZWN0aXZlLndpZHRoIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcFBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICsgdGhpcy5kaWFsb2dBcnJvd1NpemU7XG4gICAgICAgIHRoaXMubGVmdCArPSB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgKiBib3hEaXJlY3RpdmUud2lkdGggLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCAqIHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICAgIHRoaXMubGVmdCArPSBib3hEaXJlY3RpdmUud2lkdGggKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZSAtIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgY29sb3IgcGlja2VyIGRpYWxvZyBwb3NpdGlvbmluZyBhbmQgb3BlbmluZ1xuXG4gIHByaXZhdGUgY3JlYXRlQm94KGVsZW1lbnQ6IGFueSwgb2Zmc2V0OiBib29sZWFuKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIChvZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAwKSxcbiAgICAgIGxlZnQ6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIChvZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiAwKSxcbiAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGlzRGVzY2VuZGFudChwYXJlbnQ6IGFueSwgY2hpbGQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBub2RlOiBhbnkgPSBjaGlsZC5wYXJlbnROb2RlO1xuXG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lciwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZixcbiAgSW5qZWN0b3IsIFJlZmxlY3RpdmVJbmplY3RvciwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xvci1waWNrZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY29sb3JQaWNrZXJdJyxcbiAgZXhwb3J0QXM6ICduZ3hDb2xvclBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGlhbG9nOiBhbnk7XG5cbiAgcHJpdmF0ZSBkaWFsb2dDcmVhdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaWdub3JlQ2hhbmdlczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY21wUmVmOiBDb21wb25lbnRSZWY8Q29sb3JQaWNrZXJDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGNvbG9yUGlja2VyOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY3BXaWR0aDogc3RyaW5nID0gJzIzMHB4JztcbiAgQElucHV0KCkgY3BIZWlnaHQ6IHN0cmluZyA9ICdhdXRvJztcblxuICBASW5wdXQoKSBjcFRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2xvclRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNwSWdub3JlZEVsZW1lbnRzOiBhbnkgPSBbXTtcblxuICBASW5wdXQoKSBjcERpc2FibGVJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNwQWxwaGFDaGFubmVsOiBzdHJpbmcgPSAnZW5hYmxlZCc7XG4gIEBJbnB1dCgpIGNwT3V0cHV0Rm9ybWF0OiBzdHJpbmcgPSAnaGV4JztcblxuICBASW5wdXQoKSBjcEZhbGxiYWNrQ29sb3I6IHN0cmluZyA9ICcjZmZmJztcblxuICBASW5wdXQoKSBjcERpYWxvZ0Rpc3BsYXk6IHN0cmluZyA9ICdwb3B1cCc7XG5cbiAgQElucHV0KCkgY3BTYXZlQ2xpY2tPdXRzaWRlOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSBjcFVzZVJvb3RWaWV3Q29udGFpbmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgY3BQb3NpdGlvbjogc3RyaW5nID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgY3BQb3NpdGlvbk9mZnNldDogc3RyaW5nID0gJzAlJztcbiAgQElucHV0KCkgY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNwT0tCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY3BPS0J1dHRvblRleHQ6IHN0cmluZyA9ICdPSyc7XG4gIEBJbnB1dCgpIGNwT0tCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLW9rLWJ1dHRvbi1jbGFzcyc7XG5cbiAgQElucHV0KCkgY3BDYW5jZWxCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmcgPSAnQ2FuY2VsJztcbiAgQElucHV0KCkgY3BDYW5jZWxCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLWNhbmNlbC1idXR0b24tY2xhc3MnO1xuXG4gIEBJbnB1dCgpIGNwUHJlc2V0TGFiZWw6IHN0cmluZyA9ICdQcmVzZXQgY29sb3JzJztcbiAgQElucHV0KCkgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBjcE1heFByZXNldENvbG9yc0xlbmd0aDogbnVtYmVyID0gNjtcblxuICBASW5wdXQoKSBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nID0gJ05vIGNvbG9ycyBhZGRlZCc7XG4gIEBJbnB1dCgpIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZyA9ICdwcmVzZXQtZW1wdHktbWVzc2FnZSc7XG5cbiAgQElucHV0KCkgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjcEFkZENvbG9yQnV0dG9uVGV4dDogc3RyaW5nID0gJ0FkZCBjb2xvcic7XG4gIEBJbnB1dCgpIGNwQWRkQ29sb3JCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLWFkZC1jb2xvci1idXR0b24tY2xhc3MnO1xuXG4gIEBJbnB1dCgpIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nID0gJ2NwLXJlbW92ZS1jb2xvci1idXR0b24tY2xhc3MnO1xuXG4gIEBPdXRwdXQoKSBjcElucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjcFRvZ2dsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgQE91dHB1dCgpIGNwU2xpZGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpO1xuICBAT3V0cHV0KCkgY3BTbGlkZXJEcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuICBAT3V0cHV0KCkgY3BTbGlkZXJEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG5cbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG5cbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuICBAT3V0cHV0KCkgY29sb3JQaWNrZXJTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihmYWxzZSk7XG5cbiAgQE91dHB1dCgpIGNwUHJlc2V0Q29sb3JzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KHRydWUpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgaGFuZGxlQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRGb2N1cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKSBoYW5kbGVGb2N1cyhldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEZvY3VzKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIGhhbmRsZUlucHV0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfc2VydmljZTogQ29sb3JQaWNrZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNtcFJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNtcFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY3BUb2dnbGUpIHtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBjaGFuZ2VzLmNwVG9nZ2xlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLm9wZW5EaWFsb2coKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2cgJiYgIWNoYW5nZXMuY3BUb2dnbGUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlRGlhbG9nKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGNoYW5nZXMuY29sb3JUb2dnbGUpe1xuICAgICAgdGhpcy5kaWFsb2cuc2V0Q29sb3JUb2dnbGUoY2hhbmdlcy5jb2xvclRvZ2dsZS5jdXJyZW50VmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNvbG9yUGlja2VyKSB7XG4gICAgICBpZiAodGhpcy5kaWFsb2cgJiYgIXRoaXMuaWdub3JlQ2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgdGhpcy5kaWFsb2cuc2V0SW5pdGlhbENvbG9yKGNoYW5nZXMuY29sb3JQaWNrZXIuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlhbG9nLnNldENvbG9yRnJvbVN0cmluZyhjaGFuZ2VzLmNvbG9yUGlja2VyLmN1cnJlbnRWYWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlnbm9yZUNoYW5nZXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5jcFByZXNldExhYmVsIHx8IGNoYW5nZXMuY3BQcmVzZXRDb2xvcnMpIHtcbiAgICAgIGlmICh0aGlzLmRpYWxvZykge1xuICAgICAgICB0aGlzLmRpYWxvZy5zZXRQcmVzZXRDb25maWcodGhpcy5jcFByZXNldExhYmVsLCB0aGlzLmNwUHJlc2V0Q29sb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlhbG9nQ3JlYXRlZCkge1xuICAgICAgbGV0IHZjUmVmID0gdGhpcy52Y1JlZjtcblxuICAgICAgdGhpcy5kaWFsb2dDcmVhdGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuY3BVc2VSb290Vmlld0NvbnRhaW5lciAmJiB0aGlzLmNwRGlhbG9nRGlzcGxheSAhPT0gJ2lubGluZScpIHtcbiAgICAgICAgY29uc3QgY2xhc3NPZlJvb3RDb21wb25lbnQgPSB0aGlzLmFwcFJlZi5jb21wb25lbnRUeXBlc1swXTtcbiAgICAgICAgY29uc3QgYXBwSW5zdGFuY2UgPSB0aGlzLmluamVjdG9yLmdldChjbGFzc09mUm9vdENvbXBvbmVudCk7XG5cbiAgICAgICAgdmNSZWYgPSBhcHBJbnN0YW5jZS52Y1JlZiB8fCBhcHBJbnN0YW5jZS52aWV3Q29udGFpbmVyUmVmIHx8IHRoaXMudmNSZWY7XG5cbiAgICAgICAgaWYgKHZjUmVmID09PSB0aGlzLnZjUmVmKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgYXJlIHVzaW5nIGNwVXNlUm9vdFZpZXdDb250YWluZXIsICcgK1xuICAgICAgICAgICAgJ2J1dCB0aGUgcm9vdCBjb21wb25lbnQgaXMgbm90IGV4cG9zaW5nIHZpZXdDb250YWluZXJSZWYhJyArXG4gICAgICAgICAgICAnUGxlYXNlIGV4cG9zZSBpdCBieSBhZGRpbmcgXFwncHVibGljIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXFwnIHRvIHRoZSBjb25zdHJ1Y3Rvci4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wRmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbG9yUGlja2VyQ29tcG9uZW50KTtcbiAgICAgIGNvbnN0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhbXSwgdmNSZWYucGFyZW50SW5qZWN0b3IpO1xuXG4gICAgICB0aGlzLmNtcFJlZiA9IHZjUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wRmFjdG9yeSwgMCwgaW5qZWN0b3IsIFtdKTtcblxuICAgICAgdGhpcy5jbXBSZWYuaW5zdGFuY2Uuc2V0dXBEaWFsb2coXG4gICAgICAgIHRoaXMuY29sb3JUb2dnbGUsXG4gICAgICAgIHRoaXMsIHRoaXMuZWxSZWYsIHRoaXMuY29sb3JQaWNrZXIsXG4gICAgICAgIHRoaXMuY3BXaWR0aCwgdGhpcy5jcEhlaWdodCwgdGhpcy5jcERpYWxvZ0Rpc3BsYXksIHRoaXMuY3BGYWxsYmFja0NvbG9yLFxuICAgICAgICB0aGlzLmNwQWxwaGFDaGFubmVsLCB0aGlzLmNwT3V0cHV0Rm9ybWF0LCB0aGlzLmNwRGlzYWJsZUlucHV0LFxuICAgICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzLCB0aGlzLmNwU2F2ZUNsaWNrT3V0c2lkZSwgdGhpcy5jcFVzZVJvb3RWaWV3Q29udGFpbmVyLFxuICAgICAgICB0aGlzLmNwUG9zaXRpb24sIHRoaXMuY3BQb3NpdGlvbk9mZnNldCwgdGhpcy5jcFBvc2l0aW9uUmVsYXRpdmVUb0Fycm93LFxuICAgICAgICB0aGlzLmNwUHJlc2V0TGFiZWwsIHRoaXMuY3BQcmVzZXRDb2xvcnMsIHRoaXMuY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGgsXG4gICAgICAgIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2UsIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzcyxcbiAgICAgICAgdGhpcy5jcE9LQnV0dG9uLCB0aGlzLmNwT0tCdXR0b25DbGFzcywgdGhpcy5jcE9LQnV0dG9uVGV4dCxcbiAgICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbiwgdGhpcy5jcENhbmNlbEJ1dHRvbkNsYXNzLCB0aGlzLmNwQ2FuY2VsQnV0dG9uVGV4dCxcbiAgICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uLCB0aGlzLmNwQWRkQ29sb3JCdXR0b25DbGFzcywgdGhpcy5jcEFkZENvbG9yQnV0dG9uVGV4dCxcbiAgICAgICAgdGhpcy5jcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3MpO1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRoaXMuY21wUmVmLmluc3RhbmNlO1xuXG4gICAgICAgIGlmICh0aGlzLnZjUmVmICE9PSB2Y1JlZikge1xuICAgICAgICAgIHRoaXMuY21wUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW5EaWFsb2codGhpcy5jb2xvclBpY2tlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpYWxvZykge1xuICAgICAgdGhpcy5kaWFsb2cuY2xvc2VEaWFsb2coKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jcFRvZ2dsZUNoYW5nZS5lbWl0KHZhbHVlKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5jb2xvclBpY2tlck9wZW4uZW1pdCh0aGlzLmNvbG9yUGlja2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xvclBpY2tlckNsb3NlLmVtaXQodGhpcy5jb2xvclBpY2tlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbG9yQ2hhbmdlZCh2YWx1ZTogc3RyaW5nLCBpZ25vcmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVDaGFuZ2VzID0gaWdub3JlO1xuXG4gICAgdGhpcy5jb2xvclBpY2tlckNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xvckNhbmNlbGVkKCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JQaWNrZXJDYW5jZWwuZW1pdCgpO1xuICB9XG5cbiAgcHVibGljIGNvbG9yU2VsZWN0ZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JQaWNrZXJTZWxlY3QuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgaW5wdXRGb2N1cygpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgY29uc3QgaWdub3JlZCA9IHRoaXMuY3BJZ25vcmVkRWxlbWVudHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0gPT09IGVsZW1lbnQpO1xuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFpZ25vcmVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlucHV0Q2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgIHRoaXMuZGlhbG9nLnNldENvbG9yRnJvbVN0cmluZyh2YWx1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXIgPSB2YWx1ZTtcblxuICAgICAgdGhpcy5jb2xvclBpY2tlckNoYW5nZS5lbWl0KHRoaXMuY29sb3JQaWNrZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbnB1dENoYW5nZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY3BJbnB1dENoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlkZXJDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNwU2xpZGVyQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIHNsaWRlckRyYWdFbmQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY3BTbGlkZXJEcmFnRW5kLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIHNsaWRlckRyYWdTdGFydChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jcFNsaWRlckRyYWdTdGFydC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVzZXRDb2xvcnNDaGFuZ2VkKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuY3BQcmVzZXRDb2xvcnNDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncmV2ZXJzZSdcbn0pXG5leHBvcnQgY2xhc3MgUmV2ZXJzZVBpcGUge1xuICB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoKS5yZXZlcnNlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG5kTW9kdWxlIH0gZnJvbSAnbmcyLWRuZCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29sb3JwaWNrZXIvY29sb3ItcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3JwaWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJEaXJlY3RpdmUsIFRleHREaXJlY3RpdmUgfSBmcm9tICcuL2NvbG9ycGlja2VyL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xvcldpZGdldENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL2NvbG9yLXdpZGdldC9jb2xvci13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9yTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb2xvci1saXN0L2NvbG9yLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbG9yZHJvcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gtY29sb3Jkcm9wL3NlYXJjaC1jb2xvcmRyb3AuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbVVpQnV0dG9uRmFiTW9kdWxlLCBTZW1VaUJ1dHRvbk1vZHVsZSwgU2VtVWlCdXR0b25EbmRNb2R1bGUgfSBmcm9tICdAZnJvbnRyL3NlbS11aSc7XG5pbXBvcnQgeyBSZXZlcnNlUGlwZSB9IGZyb20gJy4vc2VtLWFycmF5LXJldmVyc2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNlbVVpQnV0dG9uRmFiTW9kdWxlLFxuICAgIFNlbVVpQnV0dG9uTW9kdWxlLFxuICAgIFNlbVVpQnV0dG9uRG5kTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRG5kTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29sb3JXaWRnZXRDb21wb25lbnQsXG4gICAgU2VhcmNoQ29sb3Jkcm9wQ29tcG9uZW50LFxuICAgIENvbG9yTGlzdENvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckNvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckRpcmVjdGl2ZSxcbiAgICBUZXh0RGlyZWN0aXZlLFxuICAgIFNsaWRlckRpcmVjdGl2ZSxcbiAgICBSZXZlcnNlUGlwZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsgQ29sb3JQaWNrZXJDb21wb25lbnQgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbG9yV2lkZ2V0Q29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyRGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogWyBDb2xvclBpY2tlclNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBTZW1Db2xvcnNNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNKRDs7OztJQStDRSxZQUFtRCxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztpQ0FHM0IsSUFBSSxZQUFZLEVBQU87S0FIUzs7Ozs7SUFWdkUsSUFDSSxpQkFBaUIsQ0FBQyxTQUFjO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFBO1FBQzdCLElBQUcsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFDRCxJQUFHLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUM7U0FDcEQ7S0FDRjs7Ozs7SUFLRCxrQkFBa0IsQ0FBQyxLQUFpQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMs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O1FBRXJELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDOztRQUN6RCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUUxRCxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3pGO2FBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUN0RDthQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDckQ7Ozs7WUF0Rkos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LEtBQUssQ0FBQztnQkFDSixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtZQUNSLEtBQUssQ0FBQztnQkFDSixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtZQUNSLEtBQUssQ0FBQztnQkFDSixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtZQUNSLEtBQUssQ0FBQztnQkFDSixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsTUFBTTtTQUNUO1FBRUQsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBR3ZCLFVBQVUsQ0FBQyxJQUFVOztRQUMxQixNQUFNLENBQUMsR0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNYLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0I7YUFBTTs7WUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7WUFDckMsTUFBTSxDQUFDLEdB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TyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQy9DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztZQUU5RSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxILElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFDckcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUVsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzs7Z0JBRWpGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxD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