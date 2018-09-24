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
                styles: [`body{margin:0;font-size:100%}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}[class*=" sem-icon-"],[class^=sem-icon-]{font-family:sembler-ico!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sem-icon-drag:before{content:"\\e946";color:#ccc}.sem-icon-product:before{content:"\\e913";color:#444d63}.sem-icon-form:before{content:"\\e92a";color:#444d63}.sem-icon-location:before{content:"\\e914";color:#444d63}.sem-icon-chart:before{content:"\\e935";color:#444d63}.sem-icon-text:before{content:"\\e945";color:#444d63}.sem-icon-location2:before{content:"\\e947";color:#444d63}.sem-icon-I:before{content:"\\e906"}.sem-icon-S:before{content:"\\e907"}.sem-icon-U:before{content:"\\e908"}.sem-icon-B:before{content:"\\e909"}.sem-icon-justify:before{content:"\\e90c";color:#ccc}.sem-icon-left:before{content:"\\e910";color:#ccc}.sem-icon-middle:before{content:"\\e911";color:#ccc}.sem-icon-right:before{content:"\\e912";color:#ccc}.sem-icon-colour2:before{content:"\\e90a"}.sem-icon-brush:before{content:"\\e90b"}.sem-icon-folder2:before{content:"\\e90d"}.sem-icon-logout2:before{content:"\\e90e"}.sem-icon-ol2:before{content:"\\e90f";color:#ccc}.sem-icon-send:before{content:"\\e905";color:#05dcb6}.sem-icon-repeat:before{content:"\\e900"}.sem-icon-crop:before{content:"\\e901"}.sem-icon-case:before{content:"\\e902"}.sem-icon-resize:before{content:"\\e903"}.sem-icon-check:before{content:"\\e904"}.sem-icon-ol:before{content:"\\e915";color:#ccc}.sem-icon-ul:before{content:"\\e916";color:#ccc}.sem-icon-folder:before{content:"\\e917"}.sem-icon-close:before{content:"\\e918"}.sem-icon-inbox:before{content:"\\e919"}.sem-icon-home:before{content:"\\e91a"}.sem-icon-share:before{content:"\\e91b"}.sem-icon-hamburger:before{content:"\\e91c"}.sem-icon-lock:before{content:"\\e91d"}.sem-icon-unlock:before{content:"\\e91e"}.sem-icon-ellipse:before{content:"\\e91f"}.sem-icon-volume:before{content:"\\e920"}.sem-icon-play:before{content:"\\e921"}.sem-icon-video:before{content:"\\e922";color:#444d63}.sem-icon-design:before{content:"\\e923"}.sem-icon-address:before{content:"\\e924"}.sem-icon-center_align:before{content:"\\e925";color:#ccc}.sem-icon-justify2:before{content:"\\e926";color:#ccc}.sem-icon-right_align:before{content:"\\e927";color:#ccc}.sem-icon-left_align:before{content:"\\e928";color:#ccc}.sem-icon-carousel:before{content:"\\e929"}.sem-icon-image:before{content:"\\e92b";color:#444d63}.sem-icon-back:before{content:"\\e92c"}.sem-icon-delete:before{content:"\\e92d";color:#d0021b}.sem-icon-duplicate:before{content:"\\e92e"}.sem-icon-link:before{content:"\\e92f"}.sem-icon-style:before{content:"\\e930"}.sem-icon-colour:before{content:"\\e931"}.sem-icon-add_accent .path1:before{content:"\\e932";color:#fafafa}.sem-icon-add_accent .path2:before{content:"\\e933";margin-left:-1em;color:#05dcb6}.sem-icon-send2:before{content:"\\e934";color:#05dcb6}.sem-icon-search:before{content:"\\e936"}.sem-icon-colour_accent .path1:before{content:"\\e937";color:#05dcb6}.sem-icon-colour_accent .path2:before{content:"\\e938";margin-left:-1em;color:#fff}.sem-icon-profile-accent .path1:before{content:"\\e939";color:#05dcb6}.sem-icon-profile-accent .path2:before{content:"\\e93a";margin-left:-1em;color:#fff}.sem-icon-down_arrow:before{content:"\\e93b"}.sem-icon-chat_accent .path1:before{content:"\\e93c";color:#fafafa}.sem-icon-chat_accent .path2:before{content:"\\e93d";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path3:before{content:"\\e93e";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path4:before{content:"\\e93f";margin-left:-1em;color:#05dcb6}.sem-icon-logout:before{content:"\\e940"}.sem-icon-payment:before{content:"\\e941"}.sem-icon-settings:before{content:"\\e942"}.sem-icon-sites:before{content:"\\e943"}.sem-icon-profile:before{content:"\\e944"}.sem-list-reset{list-style:none;padding-left:0;margin:0}.sem-dnd-container{position:relative}.sem--corner ._top{border-radius:50% 0 50% 50%;background-clip:padding-box}.semui-form-select select{display:inline-block;margin-left:10%;width:80%;margin-right:10%;border:1px solid #d8cfcf;border-radius:10px;font-size:1.8em;color:#d8cfcf;cursor:pointer}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input.sem-input{width:calc(100%);outline:0;border-radius:10px 10px 0;background-clip:padding-box;border:1px solid #9498a3}.no-padding-list .sem-ul .sem-li,.no-padding-list .sem-ul-icon-list .sem-li{padding-top:0;padding-bottom:0}.sem-ul-icon-list .sem-li{white-space:nowrap;-webkit-font-smoothing:antialiased;padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none}.sem-ul-icon-list .sem-li:not([disabled]){cursor:pointer}.sem-ul-icon-list .sem-li.active img.icon-default{display:none}.sem-ul-icon-list .sem-li.active img.icon-hover{display:inline-block}.sem-ul-icon-list .sem-li img{display:inline-block;vertical-align:middle;margin-bottom:4px}.sem-ul-icon-list .sem-li img.icon-hover{display:none}.sem-ul{list-style:none;width:100%;margin:0 auto;padding:0}.sem-ul .sem-li{padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none}.sem-ul .sem-li:not([disabled]){cursor:pointer}.sem-ul .sem-li.active{border-radius:7px 0 0 7px;background-clip:padding-box}ul.corner_all li:first-child{border-radius:6px 6px 0 0;background-clip:padding-box}ul.corner_all li:last-child{border-radius:0 0 11px 11px;background-clip:padding-box}.corner_top{border-radius:6px 6px 0 0;background-clip:padding-box}.corner_bottom{border-radius:0 0 6px 6px;background-clip:padding-box}.corner_none{border-radius:0;background-clip:padding-box}.corner_all{border-radius:6px;background-clip:padding-box}.corner_right{border-radius:6px 0 0 6px;background-clip:padding-box}.corner_left{border-radius:0 6px 6px 0;background-clip:padding-box}.corner_top-left{border-radius:0 6px 6px;background-clip:padding-box}.corner_top-right{border-radius:6px 0 6px 6px;background-clip:padding-box}.corner_bottom-left,.corner_bottom-right{border-radius:6px 6px 0;background-clip:padding-box}.dialog-container,.sem-colorlist--container,.sem-shadow,.sidebar-container{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dialog-container:hover,.sem-colorlist--container:hover,.sem-shadow:hover,.sidebar-container:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.sem-button-dnd{height:70px;width:70px;margin:5px;border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sem-button-dnd--medium{height:50px;width:50px}.sem-button-dnd--small{height:30px;width:30px}.sem-btn-fab{outline:0;cursor:pointer;display:inline-block;border:none}.sem-btn-fab:not([disabled]){cursor:pointer}.sem-btn-fab img{width:16px;height:16px;display:block;vertical-align:middle}.sem-btn-fab--default>span{display:block;width:16px;height:16px}.sem-btn-fab--default_small{padding:.4rem}.sem-btn-fab--default_small>span{display:block}.sem-btn-fab--primary>span,.sem-btn-fab--secondary>span{display:block;width:16px;height:16px}.sem-btn-fab--corner_none{border-radius:50%;background-clip:padding-box}.sem-btn-fab--corner_right{border-radius:50% 0 0 50%;background-clip:padding-box}.sem-btn-fab--corner_left{border-radius:0 50% 50% 0;background-clip:padding-box}.sem-btn-fab--corner_top-left{border-radius:0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_top-right{border-radius:50% 0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_bottom-left,.sem-btn-fab--corner_bottom-right{border-radius:50% 50% 0;background-clip:padding-box}.semui-tabs .semui-tabs--navlist_horizontal{border-bottom:1px solid grey;padding-bottom:2px}.semui-tabs .semui-tabs--navlist_horizontal li.active button:not([disabled])::after,.semui-tabs .semui-tabs--navlist_horizontal li:hover button:not([disabled])::after{-webkit-transform:scale(1);transform:scale(1)}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{border:none;outline:0;box-shadow:none;padding:.35em .75em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;bottom:-1px}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button:not([disabled]):hover{border:none;opacity:1}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{content:"";height:3px;width:100%;bottom:-1px;transition:all 250ms ease 0s;-webkit-transform:scale(0);transform:scale(0)}ul.semui-tabs-list.tabs-vertical{margin:0}@font-face{font-family:sembler-ico;src:url(/assets/fonts/sembler.eot?9ik42l);src:url(/assets/fonts/sembler.eot?9ik42l#iefix) format("embedded-opentype"),url(/assets/fonts/sembler.ttf?9ik42l) format("truetype"),url(/assets/fonts/sembler.woff?9ik42l) format("woff"),url(/assets/fonts/sembler.svg?9ik42l#icomoon) format("svg");font-weight:400;font-style:normal}.sem-button{cursor:pointer;display:inline-block;border:none;border-radius:12px 12px 0;background-clip:padding-box}.sem-button:not([disabled]){cursor:pointer}.sem-button--secondary{border:1px solid #a9a9a9;border-radius:12px 12px 0;background-clip:padding-box}.sem-button--small{padding:6px 11px;border:1px solid transparent}.sem-button--large{border:1px solid transparent}.sem-button--full{width:100%}.sem-button--block{display:block;padding:.4em}.sem-button--link,.sem-button--link_primary{border:0 solid;text-decoration:underline;border-radius:0}.sem-button-circle{border-radius:50%;cursor:pointer;text-align:center;background:#fff;font-weight:700}.sem-button-circle:before{padding:0 0 0 1px}.sem-button-delete{color:#fff;font-size:6px;padding:.3rem;background-color:#d0021b;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sem-dnd-container--nav{z-index:1;position:absolute;top:0;right:0}.bullet-inlinelist li{vertical-align:top;margin:0 -2px}.bullet-inlinelist li .select{display:block;width:22px}.bullet-inlinelist li .select select{display:none}.bullet-inlinelist li.active .select select{display:inline}.bullet-inlinelist li.active::after{background-color:red}.bullet-inlinelist li::before{content:'';top:-5px;left:0;width:100%;border-top:1px solid #000}.bullet-inlinelist li::after{background-color:#002;display:block;top:-9px;left:38%;width:9px;height:9px;border-radius:50%;content:''}.bullet-inlinelist li:first-child::before{left:38%}.bullet-inlinelist li:last-child::before{left:-44%}.sem-button-rain-drop{position:relative;display:inline-block;width:23px;height:23px;margin:4px 6px 8px;cursor:pointer}.sem-button-rain-drop .sem-button-delete{font-size:6px;top:6px;right:-9px}.sem-button-rain-drop,.sem-rain-drop{border-bottom-right-radius:50%;border-bottom-left-radius:50%;border-top-left-radius:50%;box-shadow:inset 0 0 10px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sem-pagination-container{display:flex;align-items:center;justify-content:center}.sem-pagination-nav{max-width:300px}.sem-pagination-nav>div{flex:1;text-align:center;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.sem-pagination-next a,.sem-pagination-previous a{display:block;line-height:25px;vertical-align:middle}.sem-pagination-next a{text-align:left}.sem-pagination-previous a{text-align:right}.sem-pagination a{height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle}.sem-pagination.active div{border:none;height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle;border-radius:12px 12px 0;background-clip:padding-box}.sem-pagination.active div:not([disabled]){cursor:pointer}.sem-avatar{width:40px;height:40px}.sem-avatar .sem-avatar__img{width:100%;height:100%}.dialog-container{overflow:auto;border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.dialog-container--colordrop{border-radius:0;background-clip:padding-box;box-shadow:none}.dialog-container--colordrop:hover{box-shadow:none}.dialog-container--colordrop .dialog-container--header{border-radius:12px 0 0 12px;background-clip:padding-box}.dialog-container--colordrop .dialog-container--body{border-radius:0 0 12px 12px;background-clip:padding-box}.dialog-container-full{height:100%;z-index:2}.dialog-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.dialog-container--body,.dialog-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.dialog-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist{overflow:auto}.sem-colorlist--container{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist--list{min-height:20px}.sem-colorlist--list--inner{display:none}.sem-colorlist--list:hover .sem-colorlist--list--inner{display:block}.sem-colorlist--closebutton{font-size:11px}.browser-container{height:calc(100% - 30px - 20px);display:block;position:relative;margin:0 20px;border-radius:10px}.browser-container .layout{height:100%;width:100%;overflow:scroll}.browser-container::before{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;content:'';position:absolute;top:-20px;left:15px;width:10px;height:10px;border-radius:50%}.h1{font-size:2rem}.h2{font-size:1.5rem}.h3{font-size:1.25rem}.h4{font-size:1rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1}.line-height-2{line-height:1.125}.line-height-3{line-height:1.25}.line-height-4{line-height:1.5}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block,.sem-button-circle,.semui-tabs,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{display:block}.bullet-inlinelist li,.inline-block,.semui-tabs .semui-tabs--navlist_horizontal li,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit,.sem-avatar .sem-avatar__img{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0,.sem-button--link,.sem-button--link_primary,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button,figure,h1,h2,h3,h4,h5{margin:0}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.mt0,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0{margin-left:0}.mx0,.sem-pagination-nav{margin-left:0;margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:.5rem}.mt1{margin-top:.5rem}.mr1{margin-right:.5rem}.mb1{margin-bottom:.5rem}.ml1{margin-left:.5rem}.mx1,figure.semui-thumbnail button{margin-left:.5rem;margin-right:.5rem}.my1,.semui-tabs .semui-tabs--navlist_horizontal{margin-top:.5rem;margin-bottom:.5rem}.m2{margin:1rem}.mt2{margin-top:1rem}.mr2{margin-right:1rem}.mb2{margin-bottom:1rem}.ml2{margin-left:1rem}.mx2{margin-left:1rem;margin-right:1rem}.my2{margin-top:1rem;margin-bottom:1rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.sem-colorlist--container{margin-left:2rem}.mx3{margin-left:2rem;margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:4rem}.mt4{margin-top:4rem}.mr4{margin-right:4rem}.mb4{margin-bottom:4rem}.ml4{margin-left:4rem}.mx4{margin-left:4rem;margin-right:4rem}.my4{margin-top:4rem;margin-bottom:4rem}.mxn1{margin-left:-.5rem;margin-right:-.5rem}.mxn2{margin-left:-1rem;margin-right:-1rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-4rem;margin-right:-4rem}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.mx-auto{margin-left:auto;margin-right:auto}.browser-container,.p0,.sem-button--link,.sem-button--link_primary,figure,h1,h2,h3,h4,h5{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0{padding-left:0}.px0{padding-left:0;padding-right:0}.py0,.sem-ul-icon-list .sem-li.no-padding{padding-top:0;padding-bottom:0}.corner,.p1,.sem-btn-fab--default,.sem-btn-fab--primary,.sem-btn-fab--secondary,.sem-button--large,.sem-color-list li,.sem-section--corner{padding:.5rem}.pt1{padding-top:.5rem}.pr1,.semui-tabs .semui-tabs--navlist_horizontal{padding-right:.5rem}.pb1{padding-bottom:.5rem}.dialog-container--colordrop .dialog-container--body,.pl1,.semui-tabs .semui-tabs--navlist_horizontal{padding-left:.5rem}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.py1,.sem-button--primary,.sem-button--secondary,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header,figure.semui-thumbnail figcaption{padding-top:.5rem;padding-bottom:.5rem}.dialog-container--body_spaced,.dialog-container--header,.px1,.sidebar-container--body_spaced,.sidebar-container--header{padding-left:.5rem;padding-right:.5rem}.p2{padding:1rem}.pt2{padding-top:1rem}.pr2{padding-right:1rem}.pb2{padding-bottom:1rem}.pl2{padding-left:1rem}.py2{padding-top:1rem;padding-bottom:1rem}.bullet-inlinelist li,.dialog-container--footer,.px2,.sem-color-list li,.sem-ul .sem-li,.sem-ul-icon-list .sem-li,.sidebar-container--footer,figure.semui-thumbnail figcaption{padding-left:1rem;padding-right:1rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3,.sem-button--primary,.sem-button--secondary{padding-left:2rem;padding-right:2rem}.p4{padding:4rem}.pt4{padding-top:4rem}.pr4{padding-right:4rem}.pb4{padding-bottom:4rem}.pl4{padding-left:4rem}.py4{padding-top:4rem;padding-bottom:4rem}.px4{padding-left:4rem;padding-right:4rem}.col{float:left;box-sizing:border-box}.col-right{float:right;box-sizing:border-box}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.flex,.sem-color-swatches,.sem-pagination-nav{display:flex}@media (min-width:40em){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}.sm-flex{display:flex}}@media (min-width:52em){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}.md-flex{display:flex}}@media (min-width:64em){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}.lg-flex{display:flex}.lg-hide{display:none!important}}.flex-column{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.self-stretch{align-self:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-center{align-content:center}.content-between{align-content:space-between}.content-around{align-content:space-around}.content-stretch{align-content:stretch}.flex-auto{flex:1 1 auto;min-width:0;min-height:0}.flex-none{flex:none}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-last{order:99999}.bullet-inlinelist li,.color-picker .saturation-lightness,.relative,.sem-color-list li,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{position:relative}.absolute,.bullet-inlinelist li::after,.bullet-inlinelist li::before,.color-picker,.sem-button-circle,.sem-color-list li .color-delete,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after,figure.semui-thumbnail button,figure.semui-thumbnail figcaption{position:absolute}.fixed{position:fixed}.dialog-container-full,.sem-color-list li .color-delete,.top-0,figure.semui-thumbnail button{top:0}.right-0,.sem-color-list li .color-delete,figure.semui-thumbnail button{right:0}.bottom-0,figure.semui-thumbnail figcaption{bottom:0}.left-0,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle,.sem-avatar .sem-avatar__img{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40em){.xs-hide{display:none!important}}@media (min-width:40em) and (max-width:52em){.sm-hide{display:none!important}}@media (min-width:52em) and (max-width:64em){.md-hide{display:none!important}}.display-none{display:none!important}.sidebar-container{border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sidebar-container-full{height:100%}.sidebar-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.sidebar-container--body,.sidebar-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.sidebar-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-color-swatches{flex-wrap:nowrap}.sem-color-swatches_current{flex-grow:1}.sem-color-swatches_current button{margin-top:10px}.sem-color-swatches_preselected{margin-top:13px;margin-left:-10px;margin-bottom:0;flex-grow:1;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden;height:67px}figure.semui-thumbnail{width:100%}figure.semui-thumbnail img{display:block;width:100%}figure.semui-thumbnail figcaption{width:100%;display:block;min-height:44px}.semui-card-footer{color:#fff;width:100%;display:block;background-color:#2a2a2a}.semui-header-section{padding:2% 2% 0;display:block}.semui-header-section.large{padding:3% 2% 0}.semui-header-section.small{padding:1% .5% 0}.semui-footer-section{padding:0 2% 2%;display:block}.semui-footer-section.large{padding:0 2% 3%}.semui-footer-section.small{padding:0 .5% 1%}.button-send:before{color:#fff}.sem-color-switch--colors .sufix{top:-4px;right:4px}.color-picker{border-radius:0 12px 12px;background-clip:padding-box;z-index:100000;width:210px;height:auto;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker .cursor{position:relative;width:16px;height:16px;border:2px solid #222;border-radius:50%;cursor:default}.color-picker .hue-alpha{margin-bottom:3px}.color-picker .hue{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .alpha{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .saturation-lightness{width:100%;height:130px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.sem-color-dark-inputs .color-type{color:#555;line-height:22px}.sem-color-light-inputs .color-type{color:#fff;line-height:22px}.sem-color-list li{min-height:50px}`]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS1jb2xvcnMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWNvbG9ycy5zZXJ2aWNlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbnRhaW5lci9jb2xvci13aWRnZXQvY29sb3Itd2lkZ2V0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb21wb25lbnRzL3NlYXJjaC1jb2xvcmRyb3Avc2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29tcG9uZW50cy9jb2xvci1saXN0L2NvbG9yLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2hlbHBlcnMudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvY29sb3JwaWNrZXIvZm9ybWF0cy50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tY29sb3JzL2xpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvbGliL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWFycmF5LXJldmVyc2UudHMiLCJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy9saWIvc2VtLWNvbG9ycy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1Db2xvcnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcywgUExBVEZPUk1fSUQsIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW1ibGVyLWNvbG9yLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgIDwhLS0vLyBSR0JBLS0+XG4gIDxzcGFuXG4gICAgW2NvbG9yVG9nZ2xlXT1cImNvbG9yRHJvcEVuYWJsZWRcIlxuICAgIFtjcFdpZHRoXT1cIm92ZXJsYXlXaWR0aFwiXG4gICAgW2NwQWxwaGFDaGFubmVsXT1cIidhbHdheXMnXCJcbiAgICBbY3BQcmVzZXRDb2xvcnNdPVwiY29sb3JQYWxsZXRlXCJcbiAgICBbY3BBZGRDb2xvckJ1dHRvbl09XCJ0cnVlXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJsYXN0Q29sb3JcIlxuICAgIFtjcFRvZ2dsZV09XCJ0cnVlXCJcbiAgICBbY3BEaWFsb2dEaXNwbGF5XT1cIidpbmxpbmUnXCJcbiAgICBbY3BDYW5jZWxCdXR0b25dPVwiZmFsc2VcIlxuICAgIFtjcENhbmNlbEJ1dHRvbkNsYXNzXT0gXCInYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cydcIlxuICAgIFsoY29sb3JQaWNrZXIpXT1cImxhc3RDb2xvclwiXG4gICAgKGNwUHJlc2V0Q29sb3JzQ2hhbmdlKT1cInVwZGF0ZWRDb2xvclByZXNldCgkZXZlbnQpXCJcbiAgPlxuICA8L3NwYW4+XG5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG4gIEBJbnB1dCgpIGNvbG9yRHJvcEVuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG92ZXJsYXlXaWR0aDtcbiAgcHVibGljIGNvbG9yUGFsbGV0ZTtcbiAgcHVibGljIGxhc3RDb2xvcjtcblxuICBASW5wdXQoJ3VzZXJDb2xvcnNQYWxsZXRlJylcbiAgc2V0IHVzZXJDb2xvcnNQYWxsZXRlKGNvbG9ybGlzdDogYW55KSB7XG4gICAgdGhpcy5jb2xvclBhbGxldGUgPSBjb2xvcmxpc3RcbiAgICBpZihjb2xvcmxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxhc3RDb2xvciA9ICcjZmZmZmZmJztcbiAgICB9XG4gICAgaWYoY29sb3JsaXN0Lmxlbmd0aCAhPT0gMCl7XG4gICAgICB0aGlzLmxhc3RDb2xvciA9IGNvbG9ybGlzdFsgY29sb3JsaXN0Lmxlbmd0aCAtIDEgXTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55KSB7IH1cblxuICBAT3V0cHV0KClcbiAgdXBkYXRlQ29sb3JQcmVzZXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHVwZGF0ZWRDb2xvclByZXNldChldmVudDogQXJyYXk8YW55Pil7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpXG4gICAgdGhpcy51cGRhdGVDb2xvclByZXNldC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY29sb3JEcm9wRW5hYmxlZCA9IGNoYW5nZXMuY29sb3JEcm9wRW5hYmxlZC5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbWJsZXItc2VhcmNoLWNvbG9yZHJvcCcsXG4gIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJpbnB1dC1zdWZpeFwiPlxuICAgICAgIDxpbnB1dFxuICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXRcIlxuICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgW25nTW9kZWxdPVwiY29sb3JcIlxuICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlQ29sb3IoJGV2ZW50KVwiXG4gICAgICAgICBbdmFsdWVdPSdjb2xvcidcbiAgICAgICAgICNjb2xvclZhbHVlXG4gICAgICAgLz5cbiAgICAgIDxzcGFuXG4gICAgICAoY2xpY2spPVwiYWRkQ29sb3IoY29sb3JWYWx1ZSlcIlxuICAgICAgY2xhc3M9XCJzZW0taWNvbi1zZWFyY2ggc3VmaXhcIj5cbiAgICAgIDwvc3Bhbj5cbjwvc3Bhbj5cblxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sb3Jkcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ3NlbGVjdGVkJylcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnY29sb3InLCB2YWx1ZSk7XG4gICAgdGhpcy5jb2xvciA9IHZhbHVlLmNvbG9yO1xuICB9XG4gIEBPdXRwdXQoKSBzYXZlQ29sb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VTZWxlY3RlZENvbG9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZENvbG9yKGNvbG9yOiBhbnkpIHtcbiAgICBjb25zdCBzZXRDb2xvcjogYW55ID0ge1xuICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgIGNvbG9yOiBjb2xvci52YWx1ZVxuICAgIH07XG4gICAgdGhpcy5zYXZlQ29sb3IuZW1pdChzZXRDb2xvcik7XG4gIH1cbiAgY2hhbmdlQ29sb3IoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGNvbG9yID0ge3R5cGU6ICdjb2xvcicsIGNvbG9yOiBldmVudH07XG4gICAgdGhpcy5jaGFuZ2VTZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICB9XG4gIG5nT25Jbml0KCkge31cblxuICAvLyAoa2V5cHJlc3MpPVwia2V5UHJlc3NDaGFuZ2VDb2xvcigkZXZlbnQpXCJcbiAgLy8ga2V5UHJlc3NDaGFuZ2VDb2xvcihldmVudDogYW55KSB7XG4gIC8vICAgY29uc29sZS5sb2coJ2V2ZW50MTIzJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAvLyAgIGNvbnN0IGNvbG9yID0ge3R5cGU6ICdjb2xvcicsIGNvbG9yOiBldmVudC50YXJnZXQudmFsdWV9XG4gIC8vICAgdGhpcy5jaGFuZ2VTZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICAvLyB9XG5cbiAgLy8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlNldENvbG9ycyhldmVudCkpO1xuICAvLyB0aGlzLl9jb2xvclNlcnZpY2UuY29sb3JDaGFnZWQoZXZlbnQpXG4gIC8vIHB1YmxpYyBzZWxlY3RlZENvbG9yOiBhbnk7XG4gIC8vIEBPdXRwdXQoKVxuICAvLyBzYXZlQ29sb3JzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyB0aGlzLnNlbGVjdGVkQ29sb3IgPSAnIzAwMDAwMCc7XG5cbn1cblxuXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbWJsZXItY29sb3ItbGlzdCcsXG4gIHRlbXBsYXRlOiBgPCEtLTx1bD4tLT5cbiA8IS0tPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbG9yTGlzdCBcIj4tLT5cbiAgICA8IS0tPGRpdi0tPlxuICAgICAgPCEtLWNsYXNzPVwiY29sb3ItZHJvcFwiLS0+XG5cblxuICAgICAgPCEtLVtzdHlsZS5iYWNrZ3JvdW5kXT1cIml0ZW0uY29sb3JcIi0tPlxuXG4gICAgICA8IS0tZG5kLWRyYWdnYWJsZS0tPlxuICAgICAgPCEtLVtkcmFnRW5hYmxlZF09XCJ0cnVlXCItLT5cbiAgICAgIDwhLS1bZHJhZ0RhdGFdPVwiaXRlbVwiLS0+XG4gICAgICA8IS0tKG9uRHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KGl0ZW0pXCItLT5cbiAgICAgIDwhLS1bZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJ11cIi0tPlxuXG4gICAgIDwhLS0mZ3Q7LS0+XG4gICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiYnRuLXRpdGxlXCI+LS0+XG4gICAgICAgIDwhLS17e2l0ZW0uY29sb3J9fS0tPlxuICAgICAgIDwhLS08L3NwYW4+LS0+XG4gICAgIDwhLS08L2Rpdj4tLT5cbiAgPCEtLTwvbGk+LS0+XG48IS0tPC91bD4tLT5cblxuPCEtLVtzdHlsZS5jb2xvcl09XCJpdGVtLmNvbG9yXCItLT5cbjwhLS1kbmQtZHJhZ2dhYmxlLS0+XG48IS0tWyBkcmFnRW5hYmxlZF09XCJ0cnVlXCItLT5cbjwhLS1bZHJhZ0RhdGFdPVwiY29sb3Jkcm9wXCItLT5cbjwhLS1bZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJywtLT5cbjwhLS0nY2FudmFzLWRyb3Bab25lJywtLT5cbjwhLS0ncm93V3JhcHBlci1kcm9wWm9uZScsLS0+XG48IS0tJ3Jvdy1kcm9wWm9uZScsLS0+XG48IS0tJ2NvbHVtbi1kcm9wWm9uZScsLS0+XG48IS0tJ3dpZGdldC1kcm9wWm9uZScgXVwiLS0+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCdjb2xvcnMnKVxuICBzZXQgc2VsZWN0ZWQoY29sb3JzOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5jb2xvckxpc3QgPSBjb2xvcnM7XG4gIH1cbiAgY29sb3JMaXN0OiBBcnJheTxhbnk+ID0gW3t9XTtcblxuICBwcml2YXRlIHNlbGVjdGVkQ29sb3I6IGFueTtcbiAgcHJpdmF0ZSBjb21wb25lbnREYXRhOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG9uRHJhZ1N0YXJ0Q29sb3JEcm9wKHNlbGVjdGVkQ29sb3I6IGFueSkge1xuICAgIC8vIHRoaXMuX2NvbG9yU2VydmljZS5wdWJsaXNoRGF0YShzZWxlY3RlZENvbG9yKTtcbiAgfVxuICBsb2FkQ29sb3JXaWRnZXQoKSB7XG4gICAgLy8gdGhpcy5jb21wb25lbnREYXRhID0geyBjb21wb25lbnQ6IENvbG9yU2VsZWN0b3JDb21wb25lbnQsIGlucHV0czogeyBzaG93TnVtOiAwIH19XG4gIH1cblxuICBvbkRyYWdTdGFydChjb2xvcmRyb3Ape1xuICAgICBjb25zb2xlLmxvZygnc3RhcnRlZCBpbiBjb2xvciBzZWxlY3RvciBjb21wb25lbnQnLCBjb2xvcmRyb3ApXG4gICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdElFKCk6IGJvb2xlYW4gfCBudW1iZXIge1xuICBsZXQgdWEgPSAnJztcblxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdtc2llICcpO1xuXG4gIGlmIChtc2llID4gMCkge1xuICAgIC8vIElFIDEwIG9yIG9sZGVyID0+IHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIHJldHVybiBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcbiAgfVxuXG4gIC8vIE90aGVyIGJyb3dzZXJcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGV4dF0nXG59KVxuZXhwb3J0IGNsYXNzIFRleHREaXJlY3RpdmUge1xuICBASW5wdXQoKSByZzogbnVtYmVyO1xuICBASW5wdXQoKSB0ZXh0OiBhbnk7XG5cbiAgQE91dHB1dCgpIG5ld1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBpbnB1dENoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodGhpcy5yZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBudW1lcmljID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICAgIGlmICghaXNOYU4obnVtZXJpYykgJiYgbnVtZXJpYyA+PSAwICYmIG51bWVyaWMgPD0gdGhpcy5yZykge1xuICAgICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyB2OiBudW1lcmljLCByZzogdGhpcy5yZyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NsaWRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckRpcmVjdGl2ZSB7XG4gIHByaXZhdGUgbGlzdGVuZXJNb3ZlOiBhbnk7XG4gIHByaXZhdGUgbGlzdGVuZXJTdG9wOiBhbnk7XG5cbiAgQElucHV0KCkgcmdYOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJnWTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNsaWRlcjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBuZXdWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pIG1vdXNlRG93bihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdGFydChldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSkgdG91Y2hTdGFydChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdGFydChldmVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5saXN0ZW5lck1vdmUgPSAoZXZlbnQ6IGFueSkgPT4gdGhpcy5tb3ZlKGV2ZW50KTtcblxuICAgIHRoaXMubGlzdGVuZXJTdG9wID0gKCkgPT4gdGhpcy5zdG9wKCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldEN1cnNvcihldmVudCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnNvcihldmVudCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG5cbiAgICB0aGlzLmRyYWdTdGFydC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIHN0b3AoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xuXG4gICAgdGhpcy5kcmFnRW5kLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0WChldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHBhZ2VYID0gKGV2ZW50LnBhZ2VYICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuXG4gICAgcmV0dXJuIHBhZ2VYIC0gcG9zaXRpb24ubGVmdCAtIHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0WShldmVudDogYW55KTogbnVtYmVyIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHBhZ2VZID0gKGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuXG4gICAgcmV0dXJuIHBhZ2VZIC0gcG9zaXRpb24udG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJzb3IoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRYKGV2ZW50KSwgd2lkdGgpKTtcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRZKGV2ZW50KSwgaGVpZ2h0KSk7XG5cbiAgICBpZiAodGhpcy5yZ1ggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJnWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyBzOiB4IC8gd2lkdGgsIHY6ICgxIC0geSAvIGhlaWdodCksIHJnWDogdGhpcy5yZ1gsIHJnWTogdGhpcy5yZ1kgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJnWCA9PT0gdW5kZWZpbmVkICYmIHRoaXMucmdZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHkgLyBoZWlnaHQsIHJnWTogdGhpcy5yZ1kgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJnWCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmdZID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHggLyB3aWR0aCwgcmdYOiB0aGlzLnJnWCB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlclBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIHY6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlckRpbWVuc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBzOiBudW1iZXIsIHB1YmxpYyB2OiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG4iLCJleHBvcnQgY2xhc3MgQ215ayB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjOiBudW1iZXIsIHB1YmxpYyBtOiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIsIHB1YmxpYyBrOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBIc2xhIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIGw6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIEhzdmEge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgdjogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmdiYSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByOiBudW1iZXIsIHB1YmxpYyBnOiBudW1iZXIsIHB1YmxpYyBiOiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXlrLCBSZ2JhLCBIc2xhLCBIc3ZhIH0gZnJvbSAnLi9mb3JtYXRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyU2VydmljZSB7XG4gIHByaXZhdGUgYWN0aXZlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHNldEFjdGl2ZShhY3RpdmU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiB0aGlzLmFjdGl2ZSAhPT0gYWN0aXZlICYmIHRoaXMuYWN0aXZlLmNwRGlhbG9nRGlzcGxheSAhPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuYWN0aXZlLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHB1YmxpYyBoc3ZhMmhzbGEoaHN2YTogSHN2YSk6IEhzbGEge1xuICAgIGNvbnN0IGggPSBoc3ZhLmgsIHMgPSBoc3ZhLnMsIHYgPSBoc3ZhLnYsIGEgPSBoc3ZhLmE7XG5cbiAgICBpZiAodiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBIc2xhKGgsIDAsIDAsIGEpO1xuICAgIH0gZWxzZSBpZiAocyA9PT0gMCAmJiB2ID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEhzbGEoaCwgMSwgMSwgYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGwgPSB2ICogKDIgLSBzKSAvIDI7XG5cbiAgICAgIHJldHVybiBuZXcgSHNsYShoLCB2ICogcyAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSksIGwsIGEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoc2xhMmhzdmEoaHNsYTogSHNsYSk6IEhzdmEge1xuICAgIGNvbnN0IGggPSBNYXRoLm1pbihoc2xhLmgsIDEpLCBzID0gTWF0aC5taW4oaHNsYS5zLCAxKTtcbiAgICBjb25zdCBsID0gTWF0aC5taW4oaHNsYS5sLCAxKSwgYSA9IE1hdGgubWluKGhzbGEuYSwgMSk7XG5cbiAgICBpZiAobCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIDAsIDAsIGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2ID0gbCArIHMgKiAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpIC8gMjtcblxuICAgICAgcmV0dXJuIG5ldyBIc3ZhKGgsIDIgKiAodiAtIGwpIC8gdiwgdiwgYSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhzdmFUb1JnYmEoaHN2YTogSHN2YSk6IFJnYmEge1xuICAgIGxldCByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyO1xuXG4gICAgY29uc3QgaCA9IGhzdmEuaCwgcyA9IGhzdmEucywgdiA9IGhzdmEudiwgYSA9IGhzdmEuYTtcblxuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKGggKiA2KTtcbiAgICBjb25zdCBmID0gaCAqIDYgLSBpO1xuICAgIGNvbnN0IHAgPSB2ICogKDEgLSBzKTtcbiAgICBjb25zdCBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgIGNvbnN0IHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XG5cbiAgICBzd2l0Y2ggKGkgJSA2KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHIgPSB2LCBnID0gdCwgYiA9IHA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByID0gcSwgZyA9IHYsIGIgPSBwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgciA9IHAsIGcgPSB2LCBiID0gdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHIgPSBwLCBnID0gcSwgYiA9IHY7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByID0gdCwgZyA9IHAsIGIgPSB2O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgciA9IHYsIGcgPSBwLCBiID0gcTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZ2JhKHIsIGcsIGIsIGEpO1xuICB9XG5cbiAgcHVibGljIHJnYmFUb0NteWsocmdiYTogUmdiYSk6IENteWsge1xuICAgIGNvbnN0IGs6IG51bWJlciA9IDEgLSBNYXRoLm1heChyZ2JhLnIsIHJnYmEuZywgcmdiYS5iKTtcblxuICAgIGlmIChrID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IENteWsoMCwgMCwgMCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGMgPSAoMSAtIHJnYmEuciAtIGspIC8gKDEgLSBrKTtcbiAgICAgIGNvbnN0IG0gPSAoMSAtIHJnYmEuZyAtIGspIC8gKDEgLSBrKTtcbiAgICAgIGNvbnN0IHkgPSAoMSAtIHJnYmEuYiAtIGspIC8gKDEgLSBrKTtcblxuICAgICAgcmV0dXJuIG5ldyBDbXlrKGMsIG0sIHksIGspO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZ2JhVG9Ic3ZhKHJnYmE6IFJnYmEpOiBIc3ZhIHtcbiAgICBsZXQgaDogbnVtYmVyLCBzOiBudW1iZXI7XG5cbiAgICBjb25zdCByID0gTWF0aC5taW4ocmdiYS5yLCAxKSwgZyA9IE1hdGgubWluKHJnYmEuZywgMSk7XG4gICAgY29uc3QgYiA9IE1hdGgubWluKHJnYmEuYiwgMSksIGEgPSBNYXRoLm1pbihyZ2JhLmEsIDEpO1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYiksIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXG4gICAgY29uc3QgdjogbnVtYmVyID0gbWF4LCBkID0gbWF4IC0gbWluO1xuXG4gICAgcyA9IChtYXggPT09IDApID8gMCA6IGQgLyBtYXg7XG5cbiAgICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAgIGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBiOlxuICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGggLz0gNjtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEhzdmEoaCwgcywgdiwgYSk7XG4gIH1cblxuICBwdWJsaWMgcmdiYVRvSGV4KHJnYmE6IFJnYmEsIGFsbG93SGV4OD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgKi9cbiAgICBsZXQgaGV4ID0gJyMnICsgKCgxIDw8IDI0KSB8IChyZ2JhLnIgPDwgMTYpIHwgKHJnYmEuZyA8PCA4KSB8IHJnYmEuYikudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcblxuICAgIGlmIChhbGxvd0hleDgpIHtcbiAgICAgIGhleCArPSAoKDEgPDwgOCkgfCBNYXRoLnJvdW5kKHJnYmEuYSAqIDI1NSkpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gICAgfVxuICAgIC8qIHRzbGludDplbmFibGU6bm8tYml0d2lzZSAqL1xuXG4gICAgcmV0dXJuIGhleDtcbiAgfVxuXG4gIHB1YmxpYyBkZW5vcm1hbGl6ZVJHQkEocmdiYTogUmdiYSk6IFJnYmEge1xuICAgIHJldHVybiBuZXcgUmdiYShNYXRoLnJvdW5kKHJnYmEuciAqIDI1NSksIE1hdGgucm91bmQocmdiYS5nICogMjU1KSwgTWF0aC5yb3VuZChyZ2JhLmIgKiAyNTUpLCByZ2JhLmEpO1xuICB9XG5cbiAgcHVibGljIHN0cmluZ1RvSHN2YShjb2xvclN0cmluZzogc3RyaW5nID0gJycsIGFsbG93SGV4ODogYm9vbGVhbiA9IGZhbHNlKTogSHN2YSB7XG4gICAgbGV0IGhzdmE6IEhzdmEgPSBudWxsO1xuXG4gICAgY29sb3JTdHJpbmcgPSAoY29sb3JTdHJpbmcgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBjb25zdCBzdHJpbmdQYXJzZXJzID0gW1xuICAgICAge1xuICAgICAgICByZTogLyhyZ2IpYT9cXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqJT8sXFxzKihcXGR7MSwzfSlcXHMqJT8oPzosXFxzKihcXGQrKD86XFwuXFxkKyk/KVxccyopP1xcKS8sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihleGVjUmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJnYmEocGFyc2VJbnQoZXhlY1Jlc3VsdFsyXSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFs0XSwgMTApIC8gMjU1LFxuICAgICAgICAgICAgaXNOYU4ocGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSkgPyAxIDogcGFyc2VGbG9hdChleGVjUmVzdWx0WzVdKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcmU6IC8oaHNsKWE/XFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihcXGR7MSwzfSklXFxzKig/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pXFxzKik/XFwpLyxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKGV4ZWNSZXN1bHQ6IGFueSkge1xuICAgICAgICAgIHJldHVybiBuZXcgSHNsYShwYXJzZUludChleGVjUmVzdWx0WzJdLCAxMCkgLyAzNjAsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzNdLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzRdLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICBpc05hTihwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKSA/IDEgOiBwYXJzZUZsb2F0KGV4ZWNSZXN1bHRbNV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBpZiAoYWxsb3dIZXg4KSB7XG4gICAgICBzdHJpbmdQYXJzZXJzLnB1c2goe1xuICAgICAgICByZTogLyMoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KShbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pPyQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbNF0gfHwgJ0ZGJywgMTYpIC8gMjU1KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmluZ1BhcnNlcnMucHVzaCh7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XXsyfSkoW2EtZkEtRjAtOV17Mn0pKFthLWZBLUYwLTldezJ9KSQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbMl0sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIHBhcnNlSW50KGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIDEpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHJlOiAvIyhbYS1mQS1GMC05XSkoW2EtZkEtRjAtOV0pKFthLWZBLUYwLTldKSQvLFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oZXhlY1Jlc3VsdDogYW55KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZ2JhKHBhcnNlSW50KGV4ZWNSZXN1bHRbMV0gKyBleGVjUmVzdWx0WzFdLCAxNikgLyAyNTUsXG4gICAgICAgICAgICBwYXJzZUludChleGVjUmVzdWx0WzJdICsgZXhlY1Jlc3VsdFsyXSwgMTYpIC8gMjU1LFxuICAgICAgICAgICAgcGFyc2VJbnQoZXhlY1Jlc3VsdFszXSArIGV4ZWNSZXN1bHRbM10sIDE2KSAvIDI1NSxcbiAgICAgICAgICAgIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHJpbmdQYXJzZXJzKSB7XG4gICAgICBpZiAoc3RyaW5nUGFyc2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IHN0cmluZ1BhcnNlcnNba2V5XTtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHBhcnNlci5yZS5leGVjKGNvbG9yU3RyaW5nKSwgY29sb3I6IGFueSA9IG1hdGNoICYmIHBhcnNlci5wYXJzZShtYXRjaCk7XG5cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgaWYgKGNvbG9yIGluc3RhbmNlb2YgUmdiYSkge1xuICAgICAgICAgICAgaHN2YSA9IHRoaXMucmdiYVRvSHN2YShjb2xvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2xvciBpbnN0YW5jZW9mIEhzbGEpIHtcbiAgICAgICAgICAgIGhzdmEgPSB0aGlzLmhzbGEyaHN2YShjb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhzdmE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHN2YTtcbiAgfVxuXG4gIHB1YmxpYyBvdXRwdXRGb3JtYXQoaHN2YTogSHN2YSwgb3V0cHV0Rm9ybWF0OiBzdHJpbmcsIGFscGhhQ2hhbm5lbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKG91dHB1dEZvcm1hdCkge1xuICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgIGNvbnN0IGhzbGEgPSB0aGlzLmhzdmEyaHNsYShoc3ZhKTtcblxuICAgICAgICBjb25zdCBoc2xhVGV4dCA9IG5ldyBIc2xhKE1hdGgucm91bmQoKGhzbGEuaCkgKiAzNjApLCBNYXRoLnJvdW5kKGhzbGEucyAqIDEwMCksXG4gICAgICAgICAgTWF0aC5yb3VuZChoc2xhLmwgKiAxMDApLCBNYXRoLnJvdW5kKGhzbGEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIGlmIChoc3ZhLmEgPCAxIHx8IGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgICAgICByZXR1cm4gJ2hzbGEoJyArIGhzbGFUZXh0LmggKyAnLCcgKyBoc2xhVGV4dC5zICsgJyUsJyArIGhzbGFUZXh0LmwgKyAnJSwnICtcbiAgICAgICAgICAgIGhzbGFUZXh0LmEgKyAnKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdoc2woJyArIGhzbGFUZXh0LmggKyAnLCcgKyBoc2xhVGV4dC5zICsgJyUsJyArIGhzbGFUZXh0LmwgKyAnJSknO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JnYmEnOlxuICAgICAgICBjb25zdCByZ2JhID0gdGhpcy5kZW5vcm1hbGl6ZVJHQkEodGhpcy5oc3ZhVG9SZ2JhKGhzdmEpKTtcblxuICAgICAgICBpZiAoaHN2YS5hIDwgMSB8fCBhbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnKSB7XG4gICAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnLCcgK1xuICAgICAgICAgICAgTWF0aC5yb3VuZChyZ2JhLmEgKiAxMDApIC8gMTAwICsgJyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAncmdiKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc3QgYWxsb3dIZXg4ID0gKGFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycgfHwgYWxwaGFDaGFubmVsID09PSAnaGV4OCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJnYmFUb0hleCh0aGlzLmRlbm9ybWFsaXplUkdCQSh0aGlzLmhzdmFUb1JnYmEoaHN2YSkpLCBhbGxvd0hleDgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFBMQVRGT1JNX0lELCBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXRlY3RJRSB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBSZ2JhLCBIc2xhLCBIc3ZhIH0gZnJvbSAnLi9mb3JtYXRzJztcbmltcG9ydCB7IFNsaWRlclBvc2l0aW9uLCBTbGlkZXJEaW1lbnNpb24gfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvci1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnY29sb3ItcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4gICNkaWFsb2dQb3B1cFxuICBjbGFzcz1cImNvbG9yLXBpY2tlclwiXG4gIFtzdHlsZS52aXNpYmlsaXR5XT1cImhpZGRlbiB8fCAhc2hvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCIgW3N0eWxlLnRvcC5weF09XCJ0b3BcIlxuICBbc3R5bGUubGVmdC5weF09XCJsZWZ0XCJcbiAgW3N0eWxlLnBvc2l0aW9uXT1cInBvc2l0aW9uXCJcbiAgW3N0eWxlLmhlaWdodC5weF09XCJjcEhlaWdodFwiXG4gIFtzdHlsZS53aWR0aF09XCJjb2xvclRvZ2dsZSA/ICcxMDAlJyA6IGNwV2lkdGggKyAncHgnXCJcbj5cbiAgPGRpdlxuICAgICpuZ0lmPVwiIWNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cImNvbG9yLWlucHV0LWNvbnRhaW5lciBzZW0tY29sb3ItbGlnaHQtaW5wdXRzIHBiMVwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCBteTEgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIlxuICAgICAgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiAoY2xpY2spPVwib25Gb3JtYXRUb2dnbGUoKVwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzZWxmLXN0YXJ0IHNlbS0tbGluayBcIj5DaGFuZ2UgZm9ybWF0PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2gtLWNvbnRyb2wtLWxpbmtcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VtLWNvbG9yLXN3aXRjaCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC1yZXNldCBzZW0tY29sb3Itc3dpdGNoLS1jb2xvcnMgZmxleC1hdXRvXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMiA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlcyBtcjEgXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjM2MFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIzNjBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmhcIiAobmV3VmFsdWUpPVwib25IdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkg8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uc1wiIChuZXdWYWx1ZSk9XCJvblNhdHVyYXRpb25JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPlM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8ubFwiIChuZXdWYWx1ZSk9XCJvbkxpZ2h0bmVzc0lucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+TDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcLixdWzAtOV17MSwyfSk/XCIgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDEgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uclwiIChuZXdWYWx1ZSk9XCJvblJlZElucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Ujwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uZ1wiIChuZXdWYWx1ZSk9XCJvbkdyZWVuSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5HPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uYlwiIChuZXdWYWx1ZSk9XCJvbkJsdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyZ2JhVGV4dD8uYVwiIChuZXdWYWx1ZSk9XCJvbkFscGhhSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+QTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDAgPyAnbm9uZScgOiAnYmxvY2snXCI+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtc3VmaXhcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXRcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbdmFsdWVdPVwiaGV4VGV4dFwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25IZXhJbnB1dChudWxsKVwiXG4gICAgICAgICAgICAgICAgKG5ld1ZhbHVlKT1cIm9uSGV4SW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkQ29sb3IoKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taWNvbi1zZWFyY2ggc3VmaXhcIj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+SGV4PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2XG4gICAgI2h1ZVNsaWRlclxuICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgY2xhc3M9XCJodWVcIlxuICAgIFtzbGlkZXJdIFtyZ1hdPVwiMVwiIChuZXdWYWx1ZSk9XCJvbkh1ZUNoYW5nZSgkZXZlbnQpXCIgKGRyYWdTdGFydCk9XCJvbkRyYWdTdGFydCgnaHVlJylcIiAoZHJhZ0VuZCk9XCJvbkRyYWdFbmQoJ2h1ZScpXCI+XG4gICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5oXCI+PC9kaXY+XG5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgKm5nSWY9XCJjcERpYWxvZ0Rpc3BsYXk9PSdwb3B1cCdcIlxuICAgIGNsYXNzPVwiYXJyb3cgYXJyb3cte3tjcFBvc2l0aW9ufX1cIlxuICAgIFtzdHlsZS50b3AucHhdPVwiYXJyb3dUb3BcIj48L2Rpdj5cblxuICA8ZGl2XG4gICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICBjbGFzcz1cInNhdHVyYXRpb24tbGlnaHRuZXNzXCJcbiAgICBbc2xpZGVyXSBbcmdYXT1cIjFcIiBbcmdZXT1cIjFcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImh1ZVNsaWRlckNvbG9yXCJcbiAgICAobmV3VmFsdWUpPVwib25Db2xvckNoYW5nZSgkZXZlbnQpXCJcbiAgICAoZHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCdzYXR1cmF0aW9uLWxpZ2h0bmVzcycpXCJcbiAgICAoZHJhZ0VuZCk9XCJvbkRyYWdFbmQoJ3NhdHVyYXRpb24tbGlnaHRuZXNzJylcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgW3N0eWxlLnRvcC5weF09XCJzbGlkZXIudlwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5zXCI+PC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXZcbiAgICAjYWxwaGFTbGlkZXJcbiAgICBjbGFzcz1cImFscGhhXCJcbiAgICBbc2xpZGVyXVxuICAgIFtyZ1hdPVwiMVwiXG4gICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJhbHBoYVNsaWRlckNvbG9yXCJcbiAgICAobmV3VmFsdWUpPVwib25BbHBoYUNoYW5nZSgkZXZlbnQpXCJcbiAgICAoZHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KCdhbHBoYScpXCJcbiAgICAoZHJhZ0VuZCk9XCJvbkRyYWdFbmQoJ2FscGhhJylcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgW3N0eWxlLmxlZnQucHhdPVwic2xpZGVyLmFcIj48L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLUNvbG9yIGRyb3BzLS0+XG4gIDxkaXZcbiAgICAqbmdJZj1cImNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cInNlbS1jb2xvci1kcm9wc1wiPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNwUHJlc2V0Q29sb3JzPy5sZW5ndGggfHwgY3BBZGRDb2xvckJ1dHRvblwiPlxuICAgICAgPHVsICpuZ0lmPVwiY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aFwiIGNsYXNzPVwic2VtLWNvbG9yLWxpc3Qgc2VtLWxpc3QtcmVzZXRcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbG9yIG9mIGNwUHJlc2V0Q29sb3JzIHwgcmV2ZXJzZVwiXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldENvbG9yRnJvbVN0cmluZyhjb2xvcilcIlxuICAgICAgICAgIGNsYXNzPVwiYmxvY2tcIlxuICAgICAgICAgIGRuZC1kcmFnZ2FibGVcbiAgICAgICAgICBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgW2RyYWdEYXRhXT1cImNvbG9yXCJcbiAgICAgICAgICAob25EcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoY29sb3IpXCJcbiAgICAgICAgICBbZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJ11cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyaWdodC1hbGlnbiBibG9ja1wiPiB7e2NvbG9yfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cImNvbG9yLWRlbGV0ZSBzZW0taWNvbi1jbG9zZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVQcmVzZXRDb2xvcigkZXZlbnQsIGNvbG9yKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiIWNwUHJlc2V0Q29sb3JzPy5sZW5ndGggJiYgY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwie3tjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzfX1cbiAgICAgICAgICBcIj57e2NwUHJlc2V0RW1wdHlNZXNzYWdlfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cblxuICA8ZGl2XG4gICAgKm5nSWY9XCIhY29sb3JUb2dnbGVcIlxuICAgIGNsYXNzPVwic2VtLWNvbG9yLXN3YXRjaGVzXCI+XG4gICAgPCEtLTxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dhdGNoZXNfY3VycmVudFwiPjwvZGl2Pi0tPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBtZWRpdW1cbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwic2VsZWN0ZWRDb2xvclwiXG4gICAgICAgIHNlbXVpLWJ1dHRvbi1kbmQgc2VtLWltcG9ydGFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImNwUHJlc2V0Q29sb3JzICYmIGNwUHJlc2V0Q29sb3JzLmxlbmd0aCA+PSBjcE1heFByZXNldENvbG9yc0xlbmd0aFwiXG4gICAgICAgIChjbGljayk9XCJvbkFkZFByZXNldENvbG9yKCRldmVudCwgc2VsZWN0ZWRDb2xvcilcIlxuICAgICAgPlxuICAgICAgICBBZGQgQ29sb3JcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJjcFByZXNldENvbG9ycz8ubGVuZ3RoIHx8IGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgY2xhc3M9XCJzZW0tY29sb3Itc3dhdGNoZXNfcHJlc2VsZWN0ZWRcIj5cblxuICAgICAgPGRpdlxuICAgICAgICAqbmdJZj1cIiFjcFByZXNldENvbG9ycz8ubGVuZ3RoICYmIGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICBjbGFzcz1cInt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzc319XG4gICAgICAgICAgXCI+XG4gICAgICAgIHt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2V9fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjcFByZXNldENvbG9ycyB8IHJldmVyc2VcIlxuICAgICAgICBjbGFzcz1cInNlbS1idXR0b24tcmFpbi1kcm9wXCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiXG4gICAgICAgIChjbGljayk9XCJzZXRDb2xvckZyb21TdHJpbmcoY29sb3IpXCJcbiAgICAgID5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZVByZXNldENvbG9yKCRldmVudCwgY29sb3IpXCJcbiAgICAgICAgICAgIGNsYXNzPVwic2VtLWJ1dHRvbi1jaXJjbGUgc2VtLWJ1dHRvbi1kZWxldGUgc2VtLWljb24tY2xvc2VcIj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2XG4gICAgKm5nSWY9XCJjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLS1mb290ZXIgY29sb3ItaW5wdXQtY29udGFpbmVyIHNlbS1jb2xvci1saWdodC1pbnB1dHNcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgbXkxIHNlbS10eXBvLS1maWdjYXB0aW9uXCJcbiAgICAgICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgKGNsaWNrKT1cIm9uRm9ybWF0VG9nZ2xlKClcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2VsZi1zdGFydCBzZW0tLWxpbmsgXCI+Q2hhbmdlIGZvcm1hdDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dpdGNoLS1jb250cm9sLS1saW5rXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2ggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtcmVzZXQgc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIGZsZXgtYXV0b1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDIgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kIHBiMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzIG1yMSBcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMzYwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjM2MFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uaFwiIChuZXdWYWx1ZSk9XCJvbkh1ZUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+SDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlcyBtcjEgdGFibGUtY2VsbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMTAwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5zXCIgKG5ld1ZhbHVlKT1cIm9uU2F0dXJhdGlvbklucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Uzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlcyBtcjEgdGFibGUtY2VsbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMTAwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5sXCIgKG5ld1ZhbHVlKT1cIm9uTGlnaHRuZXNzSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5MPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIiBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMVwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uYVwiIChuZXdWYWx1ZSk9XCJvbkFscGhhSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5BPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMSA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5yXCIgKG5ld1ZhbHVlKT1cIm9uUmVkSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5SPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5nXCIgKG5ld1ZhbHVlKT1cIm9uR3JlZW5JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkc8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5iXCIgKG5ld1ZhbHVlKT1cIm9uQmx1ZUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Qjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcLixdWzAtOV17MSwyfSk/XCJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMVwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInJnYmFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5BPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMCA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGV4dF0gW3ZhbHVlXT1cImhleFRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25IZXhJbnB1dChudWxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAobmV3VmFsdWUpPVwib25IZXhJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VtLWJ0bi1mYWJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcm5lcj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VtdWktdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW0taW1wb3J0YW5jZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBZGRDb2xvckJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY3BQcmVzZXRDb2xvcnMgJiYgY3BQcmVzZXRDb2xvcnMubGVuZ3RoID49IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZFByZXNldENvbG9yKCRldmVudCwgc2VsZWN0ZWRDb2xvcilcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VtLWljb24tc2VuZCBidXR0b24tc2VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+SGV4PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8IS0tIFNUQVJUIC0tPlxuXG5cblxuXG4gPCEtLSBFTkQgLS0+XG5cbiAgPGRpdiAqbmdJZj1cImNwT0tCdXR0b24gfHwgY3BDYW5jZWxCdXR0b25cIiBjbGFzcz1cImJ1dHRvbi1hcmVhXCI+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImNwQ2FuY2VsQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tjcENhbmNlbEJ1dHRvbkNsYXNzfX1cIiAoY2xpY2spPVwib25DYW5jZWxDb2xvcigkZXZlbnQpXCI+e3tjcENhbmNlbEJ1dHRvblRleHR9fTwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJjcE9LQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tjcE9LQnV0dG9uQ2xhc3N9fVwiIChjbGljayk9XCJvbkFjY2VwdENvbG9yKCRldmVudClcIj57e2NwT0tCdXR0b25UZXh0fX08L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2Bib2R5e21hcmdpbjowO2ZvbnQtc2l6ZToxMDAlfWh0bWx7Ym94LXNpemluZzpib3JkZXItYm94fSosOmFmdGVyLDpiZWZvcmV7Ym94LXNpemluZzppbmhlcml0fVtjbGFzcyo9XCIgc2VtLWljb24tXCJdLFtjbGFzc149c2VtLWljb24tXXtmb250LWZhbWlseTpzZW1ibGVyLWljbyFpbXBvcnRhbnQ7c3BlYWs6bm9uZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDo0MDA7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2xpbmUtaGVpZ2h0OjE7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGV9LnNlbS1pY29uLWRyYWc6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXByb2R1Y3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxM1wiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWZvcm06YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyYVwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWxvY2F0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTRcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1jaGFydDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM1XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tdGV4dDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ1XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tbG9jYXRpb24yOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDdcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1JOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDZcIn0uc2VtLWljb24tUzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA3XCJ9LnNlbS1pY29uLVU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwOFwifS5zZW0taWNvbi1COmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDlcIn0uc2VtLWljb24tanVzdGlmeTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBjXCI7Y29sb3I6I2NjY30uc2VtLWljb24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEwXCI7Y29sb3I6I2NjY30uc2VtLWljb24tbWlkZGxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTFcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEyXCI7Y29sb3I6I2NjY30uc2VtLWljb24tY29sb3VyMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBhXCJ9LnNlbS1pY29uLWJydXNoOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGJcIn0uc2VtLWljb24tZm9sZGVyMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBkXCJ9LnNlbS1pY29uLWxvZ291dDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZVwifS5zZW0taWNvbi1vbDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXNlbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNVwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXJlcGVhdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAwXCJ9LnNlbS1pY29uLWNyb3A6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwMVwifS5zZW0taWNvbi1jYXNlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDJcIn0uc2VtLWljb24tcmVzaXplOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDNcIn0uc2VtLWljb24tY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNFwifS5zZW0taWNvbi1vbDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE1XCI7Y29sb3I6I2NjY30uc2VtLWljb24tdWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxNlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE3XCJ9LnNlbS1pY29uLWNsb3NlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MThcIn0uc2VtLWljb24taW5ib3g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxOVwifS5zZW0taWNvbi1ob21lOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWFcIn0uc2VtLWljb24tc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxYlwifS5zZW0taWNvbi1oYW1idXJnZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxY1wifS5zZW0taWNvbi1sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWRcIn0uc2VtLWljb24tdW5sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWVcIn0uc2VtLWljb24tZWxsaXBzZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFmXCJ9LnNlbS1pY29uLXZvbHVtZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIwXCJ9LnNlbS1pY29uLXBsYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyMVwifS5zZW0taWNvbi12aWRlbzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIyXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tZGVzaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjNcIn0uc2VtLWljb24tYWRkcmVzczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI0XCJ9LnNlbS1pY29uLWNlbnRlcl9hbGlnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI1XCI7Y29sb3I6I2NjY30uc2VtLWljb24tanVzdGlmeTI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyNlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXJpZ2h0X2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjdcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1sZWZ0X2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjhcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1jYXJvdXNlbDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI5XCJ9LnNlbS1pY29uLWltYWdlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmJcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1iYWNrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmNcIn0uc2VtLWljb24tZGVsZXRlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmRcIjtjb2xvcjojZDAwMjFifS5zZW0taWNvbi1kdXBsaWNhdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyZVwifS5zZW0taWNvbi1saW5rOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmZcIn0uc2VtLWljb24tc3R5bGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMFwifS5zZW0taWNvbi1jb2xvdXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMVwifS5zZW0taWNvbi1hZGRfYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMyXCI7Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tYWRkX2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzM1wiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tc2VuZDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzNFwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM2XCJ9LnNlbS1pY29uLWNvbG91cl9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzdcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1jb2xvdXJfYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM4XCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmZmfS5zZW0taWNvbi1wcm9maWxlLWFjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzOVwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXByb2ZpbGUtYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNhXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmZmfS5zZW0taWNvbi1kb3duX2Fycm93OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2JcIn0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2NcIjtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzZFwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2VcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoNDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNmXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1sb2dvdXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MFwifS5zZW0taWNvbi1wYXltZW50OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDFcIn0uc2VtLWljb24tc2V0dGluZ3M6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MlwifS5zZW0taWNvbi1zaXRlczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQzXCJ9LnNlbS1pY29uLXByb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NFwifS5zZW0tbGlzdC1yZXNldHtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZy1sZWZ0OjA7bWFyZ2luOjB9LnNlbS1kbmQtY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfS5zZW0tLWNvcm5lciAuX3RvcHtib3JkZXItcmFkaXVzOjUwJSAwIDUwJSA1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW11aS1mb3JtLXNlbGVjdCBzZWxlY3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6MTAlO3dpZHRoOjgwJTttYXJnaW4tcmlnaHQ6MTAlO2JvcmRlcjoxcHggc29saWQgI2Q4Y2ZjZjtib3JkZXItcmFkaXVzOjEwcHg7Zm9udC1zaXplOjEuOGVtO2NvbG9yOiNkOGNmY2Y7Y3Vyc29yOnBvaW50ZXJ9aW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTttYXJnaW46MH1pbnB1dC5zZW0taW5wdXR7d2lkdGg6Y2FsYygxMDAlKTtvdXRsaW5lOjA7Ym9yZGVyLXJhZGl1czoxMHB4IDEwcHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym9yZGVyOjFweCBzb2xpZCAjOTQ5OGEzfS5uby1wYWRkaW5nLWxpc3QgLnNlbS11bCAuc2VtLWxpLC5uby1wYWRkaW5nLWxpc3QgLnNlbS11bC1pY29uLWxpc3QgLnNlbS1saXtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saXt3aGl0ZS1zcGFjZTpub3dyYXA7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtwYWRkaW5nLXRvcDouNDVyZW07cGFkZGluZy1ib3R0b206LjQ1cmVtO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGk6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkuYWN0aXZlIGltZy5pY29uLWRlZmF1bHR7ZGlzcGxheTpub25lfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkuYWN0aXZlIGltZy5pY29uLWhvdmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkgaW1ne2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW4tYm90dG9tOjRweH0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpIGltZy5pY29uLWhvdmVye2Rpc3BsYXk6bm9uZX0uc2VtLXVse2xpc3Qtc3R5bGU6bm9uZTt3aWR0aDoxMDAlO21hcmdpbjowIGF1dG87cGFkZGluZzowfS5zZW0tdWwgLnNlbS1saXtwYWRkaW5nLXRvcDouNDVyZW07cGFkZGluZy1ib3R0b206LjQ1cmVtO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lfS5zZW0tdWwgLnNlbS1saTpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS11bCAuc2VtLWxpLmFjdGl2ZXtib3JkZXItcmFkaXVzOjdweCAwIDAgN3B4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH11bC5jb3JuZXJfYWxsIGxpOmZpcnN0LWNoaWxke2JvcmRlci1yYWRpdXM6NnB4IDZweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fXVsLmNvcm5lcl9hbGwgbGk6bGFzdC1jaGlsZHtib3JkZXItcmFkaXVzOjAgMCAxMXB4IDExcHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfdG9we2JvcmRlci1yYWRpdXM6NnB4IDZweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfYm90dG9te2JvcmRlci1yYWRpdXM6MCAwIDZweCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfbm9uZXtib3JkZXItcmFkaXVzOjA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfYWxse2JvcmRlci1yYWRpdXM6NnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3JpZ2h0e2JvcmRlci1yYWRpdXM6NnB4IDAgMCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfbGVmdHtib3JkZXItcmFkaXVzOjAgNnB4IDZweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3RvcC1sZWZ0e2JvcmRlci1yYWRpdXM6MCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3RvcC1yaWdodHtib3JkZXItcmFkaXVzOjZweCAwIDZweCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfYm90dG9tLWxlZnQsLmNvcm5lcl9ib3R0b20tcmlnaHR7Ym9yZGVyLXJhZGl1czo2cHggNnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLC5zZW0tY29sb3JsaXN0LS1jb250YWluZXIsLnNlbS1zaGFkb3csLnNpZGViYXItY29udGFpbmVye2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwwLDAsLjEyKSwwIDFweCAycHggcmdiYSgwLDAsMCwuMjQpfS5kaWFsb2ctY29udGFpbmVyOmhvdmVyLC5zZW0tY29sb3JsaXN0LS1jb250YWluZXI6aG92ZXIsLnNlbS1zaGFkb3c6aG92ZXIsLnNpZGViYXItY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxNHB4IDI4cHggcmdiYSgwLDAsMCwuMjUpLDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsLjIyKX0uc2VtLWJ1dHRvbi1kbmR7aGVpZ2h0OjcwcHg7d2lkdGg6NzBweDttYXJnaW46NXB4O2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uc2VtLWJ1dHRvbi1kbmQtLW1lZGl1bXtoZWlnaHQ6NTBweDt3aWR0aDo1MHB4fS5zZW0tYnV0dG9uLWRuZC0tc21hbGx7aGVpZ2h0OjMwcHg7d2lkdGg6MzBweH0uc2VtLWJ0bi1mYWJ7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjpub25lfS5zZW0tYnRuLWZhYjpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS1idG4tZmFiIGltZ3t3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2Rpc3BsYXk6YmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zZW0tYnRuLWZhYi0tZGVmYXVsdD5zcGFue2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTZweDtoZWlnaHQ6MTZweH0uc2VtLWJ0bi1mYWItLWRlZmF1bHRfc21hbGx7cGFkZGluZzouNHJlbX0uc2VtLWJ0bi1mYWItLWRlZmF1bHRfc21hbGw+c3BhbntkaXNwbGF5OmJsb2NrfS5zZW0tYnRuLWZhYi0tcHJpbWFyeT5zcGFuLC5zZW0tYnRuLWZhYi0tc2Vjb25kYXJ5PnNwYW57ZGlzcGxheTpibG9jazt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5zZW0tYnRuLWZhYi0tY29ybmVyX25vbmV7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX3JpZ2h0e2JvcmRlci1yYWRpdXM6NTAlIDAgMCA1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX2xlZnR7Ym9yZGVyLXJhZGl1czowIDUwJSA1MCUgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1idG4tZmFiLS1jb3JuZXJfdG9wLWxlZnR7Ym9yZGVyLXJhZGl1czowIDUwJSA1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX3RvcC1yaWdodHtib3JkZXItcmFkaXVzOjUwJSAwIDUwJSA1MCU7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnRuLWZhYi0tY29ybmVyX2JvdHRvbS1sZWZ0LC5zZW0tYnRuLWZhYi0tY29ybmVyX2JvdHRvbS1yaWdodHtib3JkZXItcmFkaXVzOjUwJSA1MCUgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbHtib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmV5O3BhZGRpbmctYm90dG9tOjJweH0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpLmFjdGl2ZSBidXR0b246bm90KFtkaXNhYmxlZF0pOjphZnRlciwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpOmhvdmVyIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6OmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b257Ym9yZGVyOm5vbmU7b3V0bGluZTowO2JveC1zaGFkb3c6bm9uZTtwYWRkaW5nOi4zNWVtIC43NWVtO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtib3R0b206LTFweH0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVye2JvcmRlcjpub25lO29wYWNpdHk6MX0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVye2NvbnRlbnQ6XCJcIjtoZWlnaHQ6M3B4O3dpZHRoOjEwMCU7Ym90dG9tOi0xcHg7dHJhbnNpdGlvbjphbGwgMjUwbXMgZWFzZSAwczstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9dWwuc2VtdWktdGFicy1saXN0LnRhYnMtdmVydGljYWx7bWFyZ2luOjB9QGZvbnQtZmFjZXtmb250LWZhbWlseTpzZW1ibGVyLWljbztzcmM6dXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci5lb3Q/OWlrNDJsKTtzcmM6dXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci5lb3Q/OWlrNDJsI2llZml4KSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSx1cmwoL2Fzc2V0cy9mb250cy9zZW1ibGVyLnR0Zj85aWs0MmwpIGZvcm1hdChcInRydWV0eXBlXCIpLHVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIud29mZj85aWs0MmwpIGZvcm1hdChcIndvZmZcIiksdXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci5zdmc/OWlrNDJsI2ljb21vb24pIGZvcm1hdChcInN2Z1wiKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9LnNlbS1idXR0b257Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czoxMnB4IDEycHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1idXR0b246bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tYnV0dG9uLS1zZWNvbmRhcnl7Ym9yZGVyOjFweCBzb2xpZCAjYTlhOWE5O2JvcmRlci1yYWRpdXM6MTJweCAxMnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnV0dG9uLS1zbWFsbHtwYWRkaW5nOjZweCAxMXB4O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9LnNlbS1idXR0b24tLWxhcmdle2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9LnNlbS1idXR0b24tLWZ1bGx7d2lkdGg6MTAwJX0uc2VtLWJ1dHRvbi0tYmxvY2t7ZGlzcGxheTpibG9jaztwYWRkaW5nOi40ZW19LnNlbS1idXR0b24tLWxpbmssLnNlbS1idXR0b24tLWxpbmtfcHJpbWFyeXtib3JkZXI6MCBzb2xpZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2JvcmRlci1yYWRpdXM6MH0uc2VtLWJ1dHRvbi1jaXJjbGV7Ym9yZGVyLXJhZGl1czo1MCU7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDojZmZmO2ZvbnQtd2VpZ2h0OjcwMH0uc2VtLWJ1dHRvbi1jaXJjbGU6YmVmb3Jle3BhZGRpbmc6MCAwIDAgMXB4fS5zZW0tYnV0dG9uLWRlbGV0ZXtjb2xvcjojZmZmO2ZvbnQtc2l6ZTo2cHg7cGFkZGluZzouM3JlbTtiYWNrZ3JvdW5kLWNvbG9yOiNkMDAyMWI7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc2VtLWRuZC1jb250YWluZXItLW5hdnt6LWluZGV4OjE7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MH0uYnVsbGV0LWlubGluZWxpc3QgbGl7dmVydGljYWwtYWxpZ246dG9wO21hcmdpbjowIC0ycHh9LmJ1bGxldC1pbmxpbmVsaXN0IGxpIC5zZWxlY3R7ZGlzcGxheTpibG9jazt3aWR0aDoyMnB4fS5idWxsZXQtaW5saW5lbGlzdCBsaSAuc2VsZWN0IHNlbGVjdHtkaXNwbGF5Om5vbmV9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLmFjdGl2ZSAuc2VsZWN0IHNlbGVjdHtkaXNwbGF5OmlubGluZX0uYnVsbGV0LWlubGluZWxpc3QgbGkuYWN0aXZlOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnJlZH0uYnVsbGV0LWlubGluZWxpc3QgbGk6OmJlZm9yZXtjb250ZW50OicnO3RvcDotNXB4O2xlZnQ6MDt3aWR0aDoxMDAlO2JvcmRlci10b3A6MXB4IHNvbGlkICMwMDB9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDI7ZGlzcGxheTpibG9jazt0b3A6LTlweDtsZWZ0OjM4JTt3aWR0aDo5cHg7aGVpZ2h0OjlweDtib3JkZXItcmFkaXVzOjUwJTtjb250ZW50OicnfS5idWxsZXQtaW5saW5lbGlzdCBsaTpmaXJzdC1jaGlsZDo6YmVmb3Jle2xlZnQ6MzglfS5idWxsZXQtaW5saW5lbGlzdCBsaTpsYXN0LWNoaWxkOjpiZWZvcmV7bGVmdDotNDQlfS5zZW0tYnV0dG9uLXJhaW4tZHJvcHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyM3B4O2hlaWdodDoyM3B4O21hcmdpbjo0cHggNnB4IDhweDtjdXJzb3I6cG9pbnRlcn0uc2VtLWJ1dHRvbi1yYWluLWRyb3AgLnNlbS1idXR0b24tZGVsZXRle2ZvbnQtc2l6ZTo2cHg7dG9wOjZweDtyaWdodDotOXB4fS5zZW0tYnV0dG9uLXJhaW4tZHJvcCwuc2VtLXJhaW4tZHJvcHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1MCU7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1MCU7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1MCU7Ym94LXNoYWRvdzppbnNldCAwIDAgMTBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnNlbS1wYWdpbmF0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnNlbS1wYWdpbmF0aW9uLW5hdnttYXgtd2lkdGg6MzAwcHh9LnNlbS1wYWdpbmF0aW9uLW5hdj5kaXZ7ZmxleDoxO3RleHQtYWxpZ246Y2VudGVyOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmV9LnNlbS1wYWdpbmF0aW9uLW5leHQgYSwuc2VtLXBhZ2luYXRpb24tcHJldmlvdXMgYXtkaXNwbGF5OmJsb2NrO2xpbmUtaGVpZ2h0OjI1cHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zZW0tcGFnaW5hdGlvbi1uZXh0IGF7dGV4dC1hbGlnbjpsZWZ0fS5zZW0tcGFnaW5hdGlvbi1wcmV2aW91cyBhe3RleHQtYWxpZ246cmlnaHR9LnNlbS1wYWdpbmF0aW9uIGF7aGVpZ2h0OjI1cHg7d2lkdGg6MjVweDtsaW5lLWhlaWdodDoyNXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc2VtLXBhZ2luYXRpb24uYWN0aXZlIGRpdntib3JkZXI6bm9uZTtoZWlnaHQ6MjVweDt3aWR0aDoyNXB4O2xpbmUtaGVpZ2h0OjI1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO2JvcmRlci1yYWRpdXM6MTJweCAxMnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tcGFnaW5hdGlvbi5hY3RpdmUgZGl2Om5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLWF2YXRhcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4fS5zZW0tYXZhdGFyIC5zZW0tYXZhdGFyX19pbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uZGlhbG9nLWNvbnRhaW5lcntvdmVyZmxvdzphdXRvO2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9we2JvcmRlci1yYWRpdXM6MDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym94LXNoYWRvdzpub25lfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3A6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3AgLmRpYWxvZy1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjEycHggMCAwIDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3AgLmRpYWxvZy1jb250YWluZXItLWJvZHl7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci1mdWxse2hlaWdodDoxMDAlO3otaW5kZXg6Mn0uZGlhbG9nLWNvbnRhaW5lci0taGVhZGVye2JvcmRlci1yYWRpdXM6MCAxMnB4IDAgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItLWJvZHksLmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2Vke2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLS1mb290ZXJ7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWNvbG9ybGlzdHtvdmVyZmxvdzphdXRvfS5zZW0tY29sb3JsaXN0LS1jb250YWluZXJ7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWNvbG9ybGlzdC0tbGlzdHttaW4taGVpZ2h0OjIwcHh9LnNlbS1jb2xvcmxpc3QtLWxpc3QtLWlubmVye2Rpc3BsYXk6bm9uZX0uc2VtLWNvbG9ybGlzdC0tbGlzdDpob3ZlciAuc2VtLWNvbG9ybGlzdC0tbGlzdC0taW5uZXJ7ZGlzcGxheTpibG9ja30uc2VtLWNvbG9ybGlzdC0tY2xvc2VidXR0b257Zm9udC1zaXplOjExcHh9LmJyb3dzZXItY29udGFpbmVye2hlaWdodDpjYWxjKDEwMCUgLSAzMHB4IC0gMjBweCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MCAyMHB4O2JvcmRlci1yYWRpdXM6MTBweH0uYnJvd3Nlci1jb250YWluZXIgLmxheW91dHtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbH0uYnJvd3Nlci1jb250YWluZXI6OmJlZm9yZXstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwcHg7bGVmdDoxNXB4O3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czo1MCV9Lmgxe2ZvbnQtc2l6ZToycmVtfS5oMntmb250LXNpemU6MS41cmVtfS5oM3tmb250LXNpemU6MS4yNXJlbX0uaDR7Zm9udC1zaXplOjFyZW19Lmg1e2ZvbnQtc2l6ZTouODc1cmVtfS5oNntmb250LXNpemU6Ljc1cmVtfS5mb250LWZhbWlseS1pbmhlcml0e2ZvbnQtZmFtaWx5OmluaGVyaXR9LmZvbnQtc2l6ZS1pbmhlcml0e2ZvbnQtc2l6ZTppbmhlcml0fS50ZXh0LWRlY29yYXRpb24tbm9uZXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYm9sZHtmb250LXdlaWdodDo3MDB9LnJlZ3VsYXJ7Zm9udC13ZWlnaHQ6NDAwfS5pdGFsaWN7Zm9udC1zdHlsZTppdGFsaWN9LmNhcHN7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOi4yZW19LmxlZnQtYWxpZ257dGV4dC1hbGlnbjpsZWZ0fS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9LnJpZ2h0LWFsaWdue3RleHQtYWxpZ246cmlnaHR9Lmp1c3RpZnl7dGV4dC1hbGlnbjpqdXN0aWZ5fS5ub3dyYXB7d2hpdGUtc3BhY2U6bm93cmFwfS5icmVhay13b3Jke3dvcmQtd3JhcDpicmVhay13b3JkfS5saW5lLWhlaWdodC0xe2xpbmUtaGVpZ2h0OjF9LmxpbmUtaGVpZ2h0LTJ7bGluZS1oZWlnaHQ6MS4xMjV9LmxpbmUtaGVpZ2h0LTN7bGluZS1oZWlnaHQ6MS4yNX0ubGluZS1oZWlnaHQtNHtsaW5lLWhlaWdodDoxLjV9Lmxpc3Qtc3R5bGUtbm9uZXtsaXN0LXN0eWxlOm5vbmV9LnVuZGVybGluZXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS50cnVuY2F0ZXttYXgtd2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Lmxpc3QtcmVzZXR7bGlzdC1zdHlsZTpub25lO3BhZGRpbmctbGVmdDowfS5pbmxpbmV7ZGlzcGxheTppbmxpbmV9LmJsb2NrLC5zZW0tYnV0dG9uLWNpcmNsZSwuc2VtdWktdGFicyxmaWd1cmUuc2VtdWktdGh1bWJuYWlsLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgLmZpZ2NhcHRpb24tY29udGFpbmVye2Rpc3BsYXk6YmxvY2t9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLC5pbmxpbmUtYmxvY2ssLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2t9LnRhYmxle2Rpc3BsYXk6dGFibGV9LnRhYmxlLWNlbGx7ZGlzcGxheTp0YWJsZS1jZWxsfS5vdmVyZmxvdy1oaWRkZW57b3ZlcmZsb3c6aGlkZGVufS5vdmVyZmxvdy1zY3JvbGx7b3ZlcmZsb3c6c2Nyb2xsfS5vdmVyZmxvdy1hdXRve292ZXJmbG93OmF1dG99LmNsZWFyZml4OmFmdGVyLC5jbGVhcmZpeDpiZWZvcmV7Y29udGVudDpcIiBcIjtkaXNwbGF5OnRhYmxlfS5jbGVhcmZpeDphZnRlcntjbGVhcjpib3RofS5sZWZ0e2Zsb2F0OmxlZnR9LnJpZ2h0e2Zsb2F0OnJpZ2h0fS5maXQsLnNlbS1hdmF0YXIgLnNlbS1hdmF0YXJfX2ltZ3ttYXgtd2lkdGg6MTAwJX0ubWF4LXdpZHRoLTF7bWF4LXdpZHRoOjI0cmVtfS5tYXgtd2lkdGgtMnttYXgtd2lkdGg6MzJyZW19Lm1heC13aWR0aC0ze21heC13aWR0aDo0OHJlbX0ubWF4LXdpZHRoLTR7bWF4LXdpZHRoOjY0cmVtfS5ib3JkZXItYm94e2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYWxpZ24tYmFzZWxpbmV7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9LmFsaWduLXRvcHt2ZXJ0aWNhbC1hbGlnbjp0b3B9LmFsaWduLW1pZGRsZXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmFsaWduLWJvdHRvbXt2ZXJ0aWNhbC1hbGlnbjpib3R0b219Lm0wLC5zZW0tYnV0dG9uLS1saW5rLC5zZW0tYnV0dG9uLS1saW5rX3ByaW1hcnksLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uLGZpZ3VyZSxoMSxoMixoMyxoNCxoNXttYXJnaW46MH0uZGlhbG9nLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLmRpYWxvZy1jb250YWluZXItLWZvb3RlciwuZGlhbG9nLWNvbnRhaW5lci0taGVhZGVyLC5tdDAsLnNpZGViYXItY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuc2lkZWJhci1jb250YWluZXItLWZvb3Rlciwuc2lkZWJhci1jb250YWluZXItLWhlYWRlcnttYXJnaW4tdG9wOjB9Lm1yMHttYXJnaW4tcmlnaHQ6MH0ubWIwe21hcmdpbi1ib3R0b206MH0ubWwwe21hcmdpbi1sZWZ0OjB9Lm14MCwuc2VtLXBhZ2luYXRpb24tbmF2e21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjB9Lm15MHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5tMXttYXJnaW46LjVyZW19Lm10MXttYXJnaW4tdG9wOi41cmVtfS5tcjF7bWFyZ2luLXJpZ2h0Oi41cmVtfS5tYjF7bWFyZ2luLWJvdHRvbTouNXJlbX0ubWwxe21hcmdpbi1sZWZ0Oi41cmVtfS5teDEsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBidXR0b257bWFyZ2luLWxlZnQ6LjVyZW07bWFyZ2luLXJpZ2h0Oi41cmVtfS5teTEsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbHttYXJnaW4tdG9wOi41cmVtO21hcmdpbi1ib3R0b206LjVyZW19Lm0ye21hcmdpbjoxcmVtfS5tdDJ7bWFyZ2luLXRvcDoxcmVtfS5tcjJ7bWFyZ2luLXJpZ2h0OjFyZW19Lm1iMnttYXJnaW4tYm90dG9tOjFyZW19Lm1sMnttYXJnaW4tbGVmdDoxcmVtfS5teDJ7bWFyZ2luLWxlZnQ6MXJlbTttYXJnaW4tcmlnaHQ6MXJlbX0ubXkye21hcmdpbi10b3A6MXJlbTttYXJnaW4tYm90dG9tOjFyZW19Lm0ze21hcmdpbjoycmVtfS5tdDN7bWFyZ2luLXRvcDoycmVtfS5tcjN7bWFyZ2luLXJpZ2h0OjJyZW19Lm1iM3ttYXJnaW4tYm90dG9tOjJyZW19Lm1sMywuc2VtLWNvbG9ybGlzdC0tY29udGFpbmVye21hcmdpbi1sZWZ0OjJyZW19Lm14M3ttYXJnaW4tbGVmdDoycmVtO21hcmdpbi1yaWdodDoycmVtfS5teTN7bWFyZ2luLXRvcDoycmVtO21hcmdpbi1ib3R0b206MnJlbX0ubTR7bWFyZ2luOjRyZW19Lm10NHttYXJnaW4tdG9wOjRyZW19Lm1yNHttYXJnaW4tcmlnaHQ6NHJlbX0ubWI0e21hcmdpbi1ib3R0b206NHJlbX0ubWw0e21hcmdpbi1sZWZ0OjRyZW19Lm14NHttYXJnaW4tbGVmdDo0cmVtO21hcmdpbi1yaWdodDo0cmVtfS5teTR7bWFyZ2luLXRvcDo0cmVtO21hcmdpbi1ib3R0b206NHJlbX0ubXhuMXttYXJnaW4tbGVmdDotLjVyZW07bWFyZ2luLXJpZ2h0Oi0uNXJlbX0ubXhuMnttYXJnaW4tbGVmdDotMXJlbTttYXJnaW4tcmlnaHQ6LTFyZW19Lm14bjN7bWFyZ2luLWxlZnQ6LTJyZW07bWFyZ2luLXJpZ2h0Oi0ycmVtfS5teG40e21hcmdpbi1sZWZ0Oi00cmVtO21hcmdpbi1yaWdodDotNHJlbX0ubWwtYXV0b3ttYXJnaW4tbGVmdDphdXRvfS5tci1hdXRve21hcmdpbi1yaWdodDphdXRvfS5teC1hdXRve21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG99LmJyb3dzZXItY29udGFpbmVyLC5wMCwuc2VtLWJ1dHRvbi0tbGluaywuc2VtLWJ1dHRvbi0tbGlua19wcmltYXJ5LGZpZ3VyZSxoMSxoMixoMyxoNCxoNXtwYWRkaW5nOjB9LnB0MHtwYWRkaW5nLXRvcDowfS5wcjB7cGFkZGluZy1yaWdodDowfS5wYjB7cGFkZGluZy1ib3R0b206MH0ucGwwe3BhZGRpbmctbGVmdDowfS5weDB7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfS5weTAsLnNlbS11bC1pY29uLWxpc3QgLnNlbS1saS5uby1wYWRkaW5ne3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uY29ybmVyLC5wMSwuc2VtLWJ0bi1mYWItLWRlZmF1bHQsLnNlbS1idG4tZmFiLS1wcmltYXJ5LC5zZW0tYnRuLWZhYi0tc2Vjb25kYXJ5LC5zZW0tYnV0dG9uLS1sYXJnZSwuc2VtLWNvbG9yLWxpc3QgbGksLnNlbS1zZWN0aW9uLS1jb3JuZXJ7cGFkZGluZzouNXJlbX0ucHQxe3BhZGRpbmctdG9wOi41cmVtfS5wcjEsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbHtwYWRkaW5nLXJpZ2h0Oi41cmVtfS5wYjF7cGFkZGluZy1ib3R0b206LjVyZW19LmRpYWxvZy1jb250YWluZXItLWNvbG9yZHJvcCAuZGlhbG9nLWNvbnRhaW5lci0tYm9keSwucGwxLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7cGFkZGluZy1sZWZ0Oi41cmVtfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLnB5MSwuc2VtLWJ1dHRvbi0tcHJpbWFyeSwuc2VtLWJ1dHRvbi0tc2Vjb25kYXJ5LC5zaWRlYmFyLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLnNpZGViYXItY29udGFpbmVyLS1mb290ZXIsLnNpZGViYXItY29udGFpbmVyLS1oZWFkZXIsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3BhZGRpbmctdG9wOi41cmVtO3BhZGRpbmctYm90dG9tOi41cmVtfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0taGVhZGVyLC5weDEsLnNpZGViYXItY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuc2lkZWJhci1jb250YWluZXItLWhlYWRlcntwYWRkaW5nLWxlZnQ6LjVyZW07cGFkZGluZy1yaWdodDouNXJlbX0ucDJ7cGFkZGluZzoxcmVtfS5wdDJ7cGFkZGluZy10b3A6MXJlbX0ucHIye3BhZGRpbmctcmlnaHQ6MXJlbX0ucGIye3BhZGRpbmctYm90dG9tOjFyZW19LnBsMntwYWRkaW5nLWxlZnQ6MXJlbX0ucHkye3BhZGRpbmctdG9wOjFyZW07cGFkZGluZy1ib3R0b206MXJlbX0uYnVsbGV0LWlubGluZWxpc3QgbGksLmRpYWxvZy1jb250YWluZXItLWZvb3RlciwucHgyLC5zZW0tY29sb3ItbGlzdCBsaSwuc2VtLXVsIC5zZW0tbGksLnNlbS11bC1pY29uLWxpc3QgLnNlbS1saSwuc2lkZWJhci1jb250YWluZXItLWZvb3RlcixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257cGFkZGluZy1sZWZ0OjFyZW07cGFkZGluZy1yaWdodDoxcmVtfS5wM3twYWRkaW5nOjJyZW19LnB0M3twYWRkaW5nLXRvcDoycmVtfS5wcjN7cGFkZGluZy1yaWdodDoycmVtfS5wYjN7cGFkZGluZy1ib3R0b206MnJlbX0ucGwze3BhZGRpbmctbGVmdDoycmVtfS5weTN7cGFkZGluZy10b3A6MnJlbTtwYWRkaW5nLWJvdHRvbToycmVtfS5weDMsLnNlbS1idXR0b24tLXByaW1hcnksLnNlbS1idXR0b24tLXNlY29uZGFyeXtwYWRkaW5nLWxlZnQ6MnJlbTtwYWRkaW5nLXJpZ2h0OjJyZW19LnA0e3BhZGRpbmc6NHJlbX0ucHQ0e3BhZGRpbmctdG9wOjRyZW19LnByNHtwYWRkaW5nLXJpZ2h0OjRyZW19LnBiNHtwYWRkaW5nLWJvdHRvbTo0cmVtfS5wbDR7cGFkZGluZy1sZWZ0OjRyZW19LnB5NHtwYWRkaW5nLXRvcDo0cmVtO3BhZGRpbmctYm90dG9tOjRyZW19LnB4NHtwYWRkaW5nLWxlZnQ6NHJlbTtwYWRkaW5nLXJpZ2h0OjRyZW19LmNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY29sLTF7d2lkdGg6OC4zMzMzMyV9LmNvbC0ye3dpZHRoOjE2LjY2NjY3JX0uY29sLTN7d2lkdGg6MjUlfS5jb2wtNHt3aWR0aDozMy4zMzMzMyV9LmNvbC01e3dpZHRoOjQxLjY2NjY3JX0uY29sLTZ7d2lkdGg6NTAlfS5jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LmNvbC04e3dpZHRoOjY2LjY2NjY3JX0uY29sLTl7d2lkdGg6NzUlfS5jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5jb2wtMTJ7d2lkdGg6MTAwJX0uZmxleCwuc2VtLWNvbG9yLXN3YXRjaGVzLC5zZW0tcGFnaW5hdGlvbi1uYXZ7ZGlzcGxheTpmbGV4fUBtZWRpYSAobWluLXdpZHRoOjQwZW0pey5zbS1jb2x7ZmxvYXQ6bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNtLWNvbC1yaWdodHtmbG9hdDpyaWdodDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNtLWNvbC0xe3dpZHRoOjguMzMzMzMlfS5zbS1jb2wtMnt3aWR0aDoxNi42NjY2NyV9LnNtLWNvbC0ze3dpZHRoOjI1JX0uc20tY29sLTR7d2lkdGg6MzMuMzMzMzMlfS5zbS1jb2wtNXt3aWR0aDo0MS42NjY2NyV9LnNtLWNvbC02e3dpZHRoOjUwJX0uc20tY29sLTd7d2lkdGg6NTguMzMzMzMlfS5zbS1jb2wtOHt3aWR0aDo2Ni42NjY2NyV9LnNtLWNvbC05e3dpZHRoOjc1JX0uc20tY29sLTEwe3dpZHRoOjgzLjMzMzMzJX0uc20tY29sLTExe3dpZHRoOjkxLjY2NjY3JX0uc20tY29sLTEye3dpZHRoOjEwMCV9LnNtLWZsZXh7ZGlzcGxheTpmbGV4fX1AbWVkaWEgKG1pbi13aWR0aDo1MmVtKXsubWQtY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5tZC1jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5tZC1jb2wtMXt3aWR0aDo4LjMzMzMzJX0ubWQtY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5tZC1jb2wtM3t3aWR0aDoyNSV9Lm1kLWNvbC00e3dpZHRoOjMzLjMzMzMzJX0ubWQtY29sLTV7d2lkdGg6NDEuNjY2NjclfS5tZC1jb2wtNnt3aWR0aDo1MCV9Lm1kLWNvbC03e3dpZHRoOjU4LjMzMzMzJX0ubWQtY29sLTh7d2lkdGg6NjYuNjY2NjclfS5tZC1jb2wtOXt3aWR0aDo3NSV9Lm1kLWNvbC0xMHt3aWR0aDo4My4zMzMzMyV9Lm1kLWNvbC0xMXt3aWR0aDo5MS42NjY2NyV9Lm1kLWNvbC0xMnt3aWR0aDoxMDAlfS5tZC1mbGV4e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6NjRlbSl7LmxnLWNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGctY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGctY29sLTF7d2lkdGg6OC4zMzMzMyV9LmxnLWNvbC0ye3dpZHRoOjE2LjY2NjY3JX0ubGctY29sLTN7d2lkdGg6MjUlfS5sZy1jb2wtNHt3aWR0aDozMy4zMzMzMyV9LmxnLWNvbC01e3dpZHRoOjQxLjY2NjY3JX0ubGctY29sLTZ7d2lkdGg6NTAlfS5sZy1jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LmxnLWNvbC04e3dpZHRoOjY2LjY2NjY3JX0ubGctY29sLTl7d2lkdGg6NzUlfS5sZy1jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5sZy1jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5sZy1jb2wtMTJ7d2lkdGg6MTAwJX0ubGctZmxleHtkaXNwbGF5OmZsZXh9LmxnLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19LmZsZXgtY29sdW1ue2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uZmxleC13cmFwe2ZsZXgtd3JhcDp3cmFwfS5pdGVtcy1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5pdGVtcy1lbmR7YWxpZ24taXRlbXM6ZmxleC1lbmR9Lml0ZW1zLWNlbnRlcnthbGlnbi1pdGVtczpjZW50ZXJ9Lml0ZW1zLWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lfS5pdGVtcy1zdHJldGNoe2FsaWduLWl0ZW1zOnN0cmV0Y2h9LnNlbGYtc3RhcnR7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5zZWxmLWVuZHthbGlnbi1zZWxmOmZsZXgtZW5kfS5zZWxmLWNlbnRlcnthbGlnbi1zZWxmOmNlbnRlcn0uc2VsZi1iYXNlbGluZXthbGlnbi1zZWxmOmJhc2VsaW5lfS5zZWxmLXN0cmV0Y2h7YWxpZ24tc2VsZjpzdHJldGNofS5qdXN0aWZ5LXN0YXJ0e2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5qdXN0aWZ5LWVuZHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lmp1c3RpZnktY2VudGVye2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lmp1c3RpZnktYmV0d2VlbntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uanVzdGlmeS1hcm91bmR7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdGFydHthbGlnbi1jb250ZW50OmZsZXgtc3RhcnR9LmNvbnRlbnQtZW5ke2FsaWduLWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRlbnQtY2VudGVye2FsaWduLWNvbnRlbnQ6Y2VudGVyfS5jb250ZW50LWJldHdlZW57YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVufS5jb250ZW50LWFyb3VuZHthbGlnbi1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdHJldGNoe2FsaWduLWNvbnRlbnQ6c3RyZXRjaH0uZmxleC1hdXRve2ZsZXg6MSAxIGF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowfS5mbGV4LW5vbmV7ZmxleDpub25lfS5vcmRlci0we29yZGVyOjB9Lm9yZGVyLTF7b3JkZXI6MX0ub3JkZXItMntvcmRlcjoyfS5vcmRlci0ze29yZGVyOjN9Lm9yZGVyLWxhc3R7b3JkZXI6OTk5OTl9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLC5jb2xvci1waWNrZXIgLnNhdHVyYXRpb24tbGlnaHRuZXNzLC5yZWxhdGl2ZSwuc2VtLWNvbG9yLWxpc3QgbGksZmlndXJlLnNlbXVpLXRodW1ibmFpbCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIC5maWdjYXB0aW9uLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0uYWJzb2x1dGUsLmJ1bGxldC1pbmxpbmVsaXN0IGxpOjphZnRlciwuYnVsbGV0LWlubGluZWxpc3QgbGk6OmJlZm9yZSwuY29sb3ItcGlja2VyLC5zZW0tYnV0dG9uLWNpcmNsZSwuc2VtLWNvbG9yLWxpc3QgbGkgLmNvbG9yLWRlbGV0ZSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVyLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9uLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntwb3NpdGlvbjphYnNvbHV0ZX0uZml4ZWR7cG9zaXRpb246Zml4ZWR9LmRpYWxvZy1jb250YWluZXItZnVsbCwuc2VtLWNvbG9yLWxpc3QgbGkgLmNvbG9yLWRlbGV0ZSwudG9wLTAsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBidXR0b257dG9wOjB9LnJpZ2h0LTAsLnNlbS1jb2xvci1saXN0IGxpIC5jb2xvci1kZWxldGUsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBidXR0b257cmlnaHQ6MH0uYm90dG9tLTAsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue2JvdHRvbTowfS5sZWZ0LTAsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOjphZnRlcntsZWZ0OjB9Lnoxe3otaW5kZXg6MX0uejJ7ei1pbmRleDoyfS56M3t6LWluZGV4OjN9Lno0e3otaW5kZXg6NH0uYm9yZGVye2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4fS5ib3JkZXItdG9we2JvcmRlci10b3Atc3R5bGU6c29saWQ7Ym9yZGVyLXRvcC13aWR0aDoxcHh9LmJvcmRlci1yaWdodHtib3JkZXItcmlnaHQtc3R5bGU6c29saWQ7Ym9yZGVyLXJpZ2h0LXdpZHRoOjFweH0uYm9yZGVyLWJvdHRvbXtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20td2lkdGg6MXB4fS5ib3JkZXItbGVmdHtib3JkZXItbGVmdC1zdHlsZTpzb2xpZDtib3JkZXItbGVmdC13aWR0aDoxcHh9LmJvcmRlci1ub25le2JvcmRlcjowfS5yb3VuZGVke2JvcmRlci1yYWRpdXM6M3B4fS5jaXJjbGUsLnNlbS1hdmF0YXIgLnNlbS1hdmF0YXJfX2ltZ3tib3JkZXItcmFkaXVzOjUwJX0ucm91bmRlZC10b3B7Ym9yZGVyLXJhZGl1czozcHggM3B4IDAgMH0ucm91bmRlZC1yaWdodHtib3JkZXItcmFkaXVzOjAgM3B4IDNweCAwfS5yb3VuZGVkLWJvdHRvbXtib3JkZXItcmFkaXVzOjAgMCAzcHggM3B4fS5yb3VuZGVkLWxlZnR7Ym9yZGVyLXJhZGl1czozcHggMCAwIDNweH0ubm90LXJvdW5kZWR7Ym9yZGVyLXJhZGl1czowfS5oaWRle3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtoZWlnaHQ6MXB4O3dpZHRoOjFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDFweCwxcHgsMXB4LDFweCl9QG1lZGlhIChtYXgtd2lkdGg6NDBlbSl7LnhzLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6NDBlbSkgYW5kIChtYXgtd2lkdGg6NTJlbSl7LnNtLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6NTJlbSkgYW5kIChtYXgtd2lkdGg6NjRlbSl7Lm1kLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19LmRpc3BsYXktbm9uZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5zaWRlYmFyLWNvbnRhaW5lcntib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9LnNpZGViYXItY29udGFpbmVyLWZ1bGx7aGVpZ2h0OjEwMCV9LnNpZGViYXItY29udGFpbmVyLS1oZWFkZXJ7Ym9yZGVyLXJhZGl1czowIDEycHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2lkZWJhci1jb250YWluZXItLWJvZHksLnNpZGViYXItY29udGFpbmVyLS1ib2R5X3NwYWNlZHtib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2lkZWJhci1jb250YWluZXItLWZvb3Rlcntib3JkZXItcmFkaXVzOjAgMCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tY29sb3Itc3dhdGNoZXN7ZmxleC13cmFwOm5vd3JhcH0uc2VtLWNvbG9yLXN3YXRjaGVzX2N1cnJlbnR7ZmxleC1ncm93OjF9LnNlbS1jb2xvci1zd2F0Y2hlc19jdXJyZW50IGJ1dHRvbnttYXJnaW4tdG9wOjEwcHh9LnNlbS1jb2xvci1zd2F0Y2hlc19wcmVzZWxlY3RlZHttYXJnaW4tdG9wOjEzcHg7bWFyZ2luLWxlZnQ6LTEwcHg7bWFyZ2luLWJvdHRvbTowO2ZsZXgtZ3JvdzoxO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtd3JhcDp3cmFwO292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6NjdweH1maWd1cmUuc2VtdWktdGh1bWJuYWlse3dpZHRoOjEwMCV9ZmlndXJlLnNlbXVpLXRodW1ibmFpbCBpbWd7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfWZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbnt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7bWluLWhlaWdodDo0NHB4fS5zZW11aS1jYXJkLWZvb3Rlcntjb2xvcjojZmZmO3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOiMyYTJhMmF9LnNlbXVpLWhlYWRlci1zZWN0aW9ue3BhZGRpbmc6MiUgMiUgMDtkaXNwbGF5OmJsb2NrfS5zZW11aS1oZWFkZXItc2VjdGlvbi5sYXJnZXtwYWRkaW5nOjMlIDIlIDB9LnNlbXVpLWhlYWRlci1zZWN0aW9uLnNtYWxse3BhZGRpbmc6MSUgLjUlIDB9LnNlbXVpLWZvb3Rlci1zZWN0aW9ue3BhZGRpbmc6MCAyJSAyJTtkaXNwbGF5OmJsb2NrfS5zZW11aS1mb290ZXItc2VjdGlvbi5sYXJnZXtwYWRkaW5nOjAgMiUgMyV9LnNlbXVpLWZvb3Rlci1zZWN0aW9uLnNtYWxse3BhZGRpbmc6MCAuNSUgMSV9LmJ1dHRvbi1zZW5kOmJlZm9yZXtjb2xvcjojZmZmfS5zZW0tY29sb3Itc3dpdGNoLS1jb2xvcnMgLnN1Zml4e3RvcDotNHB4O3JpZ2h0OjRweH0uY29sb3ItcGlja2Vye2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3otaW5kZXg6MTAwMDAwO3dpZHRoOjIxMHB4O2hlaWdodDphdXRvO2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmNvbG9yLXBpY2tlciAuY3Vyc29ye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyOjJweCBzb2xpZCAjMjIyO2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpkZWZhdWx0fS5jb2xvci1waWNrZXIgLmh1ZS1hbHBoYXttYXJnaW4tYm90dG9tOjNweH0uY29sb3ItcGlja2VyIC5odWV7d2lkdGg6MTAwJTtoZWlnaHQ6MTZweDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBUUNBWUFBQUQwNklZbkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0QUlXRHdrVUZXYkNDQUFBQUZ4SlJFRlVhTjd0MGtFS2cwQVFBTUUyeDgzL24ycXU1cUNnRDFpRGhDb1lkcG5iUUM5YmJZMXFWTy9qdmM2azNhZDkxczcvN0YxL2NzZ1BydWp1UTE3QkRZU0ZzQkFXd2dKaElTeUVCY0pDV0FnTGhJV3dFQllJaTJmN0FyLzFUQ2dGSDJYOUFBQUFBRWxGVGtTdVFtQ0MpfS5jb2xvci1waWNrZXIgLmFscGhhe3dpZHRoOjEwMCU7aGVpZ2h0OjE2cHg7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQVFDQVlBQUFEMDZJWW5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINEFJV0R3WVFsWk1hM2dBQUFXVkpSRUZVYU43dG1FR082akFRUkNzT0FySGdCcHlBSllHamNHb2N4QW00QTJJSHBtb1dFMGVCSCtlem1GbE52VTA2c2hKM1c2VkVlbFdNVVFBSUlGOWY2cVpwaW1zQTFMWXRTMnVGNTEvdTI3WVZBRlpWUlVrRW9HSGRQVi9zSWNiSUVJSWtVZEkvOVhhN25leXY2MStTV0ZVVkFWQ1NjdDAwVFduMmZ2NnUzK0VjZmQzdFh6eS8wK25FVXUrU1Bqby9rcXpybWlRcFNjTjZ2OThYZXdmQTgvbE1raUxKMld4R1NVb3BjVDZmTTZVME5YOS9mcmZiamV2MVd0ZnJsWmZMaFlmRFFRSEcvQUlPbG5Hd2pJTmxIQ3hqSEN6allKbS9USldkQ3dxdUpYc2VGRnpHd0ROTmVpS01PSlRPOHhRZERRYWVCMjkrSzllZmVMYUJvOUo3dmR2dEpqMVJqRkZqZml2N3F2OTV0angvN2xlU1FnaDkzZTFmZk1lSXA2TytZUWpoby9ONzkxdDFYVk9TU0k3Ti8vSys0L0dveFdMQngrUEI1L09wNVhMSisvM09sSkpXcXhVM204M292djVpR2Y4S2pZTmxIQ3hqSEN6allCa0h5NWdmNWd1c3ZRVTdVMzdqVEFBQUFBQkpSVTVFcmtKZ2dnPT0pfS5jb2xvci1waWNrZXIgLnNhdHVyYXRpb24tbGlnaHRuZXNze3dpZHRoOjEwMCU7aGVpZ2h0OjEzMHB4O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPWUFBQUNDQ0FZQUFBQlNEN1QzQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRBSVdEd2tzUFdSNmxnQUFJQUJKUkVGVWVOcnRuVnVUNDdnUnJBSE4rUC8vT3IvNjFZNXdPTlo3bVoxdTNYQWVMTWpKWkdaVmdkS3NmYzV4UjNTMFJJSVVXK0NIekNwYzJNY1lvN1hHdjNleDdVaVpkNTdyanl6enYrdiszM1gvUi8rM3IvZjd2UjM4NlkrVHZLTmNmL3dkaFRMUGN2OXFVMndaZDc0dXRoMHQxODIxamtJWkxQY3NJLzZuV2E0WHZ1dHF1VTBaODVtbng4MFMvWnpncG5Mbk90SE50Ny9vZngxVEtYY1NOek4vN3FiTVEzanU3ck5RbU1ZWWQvNHMyajlhYStQK2dHYU1jWnJiMU0vdGRydmY3L2Qydjk5UDkvdDkzTy8zY2J2ZHh1MTJHOWZyZFZ3dWwzRStuOGMvLy9uUCsyKy8vWGI2NmFlZnhsLy8rdGZ4NXovLzJZSzVBbDJyZ3ZmNFVzYnBkR3JCNTJiQXZBclhwdXpqbWlxQVZTR3o1ZURtR1lYemhiQVptQ3JubXpkZHBVVSs4WTFkQU9ZZVhDdERVd1Z3VjdZQ0dINnVBbXlNY1o5bDV2a1VhQlBHTVVaNy9KNXcvNzkyL2Z2djlYcTkzMjYzZHIvZlR4UEVDZU1FOG5LNWpNL1B6L0hUVHovZHYzMzdkdnJsbDEvR1AvN3hqL0czdi8xdC9PVXZmd2tWc3dvbmdqZE9wOVB6SDNVM0Qzem1XR25aVlhuNGpDcXM3d0MyQktQNC84dEF6a1pzb1d4NlhycWVIWnltdnA0QUJDQkpoVFF3S2ZEVDhnenJaQ0lxaTVBaGlBQ2pCZkVCMnJQOC9YNjNNTTdmNi9WNnY5L3Y3WGE3YllDODNXN2pjcmxzVkhJcTVmZnYzMCsvL2ZiYitPV1hYOFpQUC8wMC92NzN2NCtmZi83NUpTdmJldStiTDJXTU1hRmJBbHBCTk04NVFYK2N0NnFvU3FrUEF3dVFsQlZLcUdORlNVT0FBM0JtdTdnQzVoTk9kMTVuU3d2QU9VVzdDNGdpVUNWOFNnbjVMOWhORklxVHNwMEd4STB5c2lveWpBamtZL3RHSlZFcHorZnorT1dYWCs3ZnYzOC8vZjc3NytQYnQyL2oxMTkvSFQvLy9QUDQ5ZGRmeDhmSFJ3cm1UalY3NzlFWHUycHgyeGhqd3RkSlpRY0FXUUlQTFBJU3NNSmFTd2lEOGd6SUtyd1N5QVRFNWo1bkFiUjVjMWRCVXdCbHNFV1cwaDZMcWlZc3FGUEFReEN5Ulozd09TQVJ4bWxYTVg1azY0cFFmdnYyN2Y3NStkaytQajVPSHg4ZjQvdjM3K1BidDIvanQ5OStHOSsrZlJzZkh4L2pjcm1VRkxPMzFnWURXYmx4UklzL1RxZlQ3b3VzeEpzQXhYQTJHYzdUQTlYZGdmZG9IYkZzajc2WDIrMVdBcmdJMWFnZUd3QTNxdXBxb0hzbWNiSTZGdTkzcXVnZ0ZhOWQ3TGVEdGdLZkFGSEJKK05FQnlJa2NKNUtlcnZkVG1oaEdjZ0pKU1o1dm4vL2ZqK2Z6KzE4UHA4K1B6L0g1K2ZubUdEKy92dnY0L3YzNytQajQyTjhmbjZPMisxV3M3SmpqUDZ3cmFNSTVFNFJaOHgydlY1VFN3a3F1b3RWNy9kN1R6NkhGV3NEL3FOY2R3MENRM3EvMzIxYzY4NlR3RFZJZGJ1eTczek5sZGhTSGI4STJrbFp6bm0rSW5CUzRVNm4wMzAyYUJGc0xoSERBS0pWSlZnbGZJOWpodnU1M1c1M3NMQU5ZTnhBaURBNk1DZVVIeDhmOSt2MTJpNlhTN3RjTHFjWlc1N1A1eWVZOC9mejgzT2N6K2Zuc1NtWVV5a25XRUc4NVdCc3Q5c3R6U0x5TWRmcjlRaTA4aVkxNVVaMExsREdMaFIzbzV6SzJqN09QVVREMEUrblUzdGs3WGIvMTZORmJobG9BTXVZMXpqTFVPTzNCS2VJRGUrWjhzMy9KNGdGbzRUTTVqUG11UmcyOGZvVUtLVlN3bzE2VGdBNW5weXdjV0xIZ1lsL1B6OC83My82MDUvYWI3LzkxbTYzVzd0Y0xpZTBzWmo0bWFvNWdUeWZ6ODhFMGYxK2o4RWNZendUUEVHMmNxanlmSE5GME04ZnVxRWlhT1ZuUnpaWlFOaDVmd1F5SGcvSERHZkpvODlRMXpiL3F1dTVYQzY3NzNJMlhLZlRxZC92OStkM3d1cVd2YS9ZVGRVZEVWM2ZoSXYvVml5cHM2WUUzeDNyNDNLNWJKUVM2NnpheFZHRnN2ZCsvL2o0YUYrL2ZtM2Z2Mzl2dDl1dGZmMzZ0ZjMrKysvdGRydWR2bjM3WnVOTEJhYUNNZ1V6QytyWlJpRm93eFV1Skk4WU1xY0NwOU9wcTV2YWdhWVU2bEdKQTFYUXFlamNodzZDajBHdzVuWUJyR3cwMUEyTzIwNm4wNEJHb3VOTnlUZnAvRndFbGhVZXk2blhySUt3N1FRV2RkeHVOMmxkTDVmTDgzOWdTUEY4YWh1L0p2Qk80OENQU3VxTWY4VnA5L1A1M0w1OCtkTHU5M3M3bjgvdGZyOC8zOS92OS9iNStUa2hQSjNQNTZtUTQzNi9qKy9mdisvaVNnYnplcjArQVp4LzUrODhidjZPTWRhNlM1ejZrZDIxZllDOWR4djdjSUpKMmQ5QU9TMzBmUE16eUhpVE04QjRERjZYVWxZSHA0S1FXM1crMXQ3N01OQjF2R0h4V3E3WGE3dmY3OCt5NS9ONUErSDFldDI5eHVQNWRiWXR5YVJ1NEFrc2JQcTY5MzZmalJ6WFJ4QmJQci9iK2IxOCtmS2xqVEhhQkJCZm44L24wLzErSDErK2ZCbm44em0wc0I4Zkg1dTRjcjVHdUJoTVZrMEVFbjlSc2N0Z1ZoTStpeGxKdE1BMjNSOEI2eXlzQXN0Qk9nRlhJS0tDTUlnVG9NcU5FdTJmWU1IN3p0YzczMmRRS2tDajF5dEFadFkwS3g4cElyOEdHSitBVDNWKzJIaXJobCsrZkJtWHkyV3o3M3crYjE3UDhwK2ZuOC90VXdHVmxlVmtUeVViNjhEa2ZheVdZNHp4TlJpaFU0RXBMSlBaVnJLK3U3SjQvbWdmS3FlTFc5WDJSRVdsSXRMMWRpeW5iRERiMytqWGdZalFxbjBycnhXYytOa0lMUDdGN3hJYk12eDd2VjUzeDQweG5sYldKRjEyWlNhZy9OMHBXNnQrWnptT016SGphakt3RGZvbmQ3OHpZVGRmcTE4dXA5N3pyMnE4djNJaW9CcHJSdEJsMEVaOW9nNVdCUkdPZE9IaklqWEY3VW90RmJnT1duWHpJSnl6WXZqRzVJWWdzbU1PeEhrejhPc01TclZOV2VxNVQ4RGFPY2JFdjFPZDVyYnM5YU83WXZNZXQ2M0VrRisrZk1FeHErTVJsNC9MNWJMWk4vK2V6K2ZuWjZLYXp1TXFYU1FWTzVzcEpYZmxIQUl6ZXMveEpzZWNrUkppRE1vZzlkNlZmUnJxWE1yNktwVlYyN2pSd0phY0dvdk9BTTF6TWRRTW53SzFBdWJLNjNrZENDaHZJMUM3ZzB6OW5mL0QrWHplMlZqOEg3R3g0UDlkdVFsc1lDcnF5TjhYcUczSG0vMTBPajNqdy9uK2NybHN0dU0ralBtbXhUMmRUdVB6ODNQenQycG4xWHNFSFgvYm5QYVZxVm1oMHh3T3QwbzZYTExBSGVQVVUyMDN3SGZjcnNwQ3dtVjNUcnlCNXMwTXNlZWc5N3gvQnd6Q2pCbGJCK3BSQVBsYTBCVlF1VDZWNlFIZEJsajNkMEtHMTQ3YitEcXhRZVV5bURPNDNXNGRRYXIrVElqd21BZDB6OC9oNjV2ZjAveUx2M1BiNVhMcHJ1L3lkRG85czdFVDBJK1BqNmRLSzlWVUVJZUtXUVdQQU9ySjhMS2Q0dkUrdDkxWTNlN1VGbFdhdGcyVndKbmIrSFBtdHZtL3NmSzU5L09hV0YzeC9lUDFVUEh2QTVERFlEcFlYZmIwZHJ2MVYyRGtCa3h0dy90RVdWVmxYV2RDOXBGWXM1L2pmaDlkUy8xNnZXN3M2bFRHK1RmcXN4U0pIeGtYWHEvWGRyMWV1NExzZkQ2UDN2c1QzTjc3RGtMK3pQbTVqU2RLTDR6UjNBeFFkNnJIa0xrWWxTb3dzcnE3em56dTZ3U3dkc01KT1htQTVmQmNqeHRnTUdCWUhscjV6b2todHNNQ1RnWExRT1c0WEM2ZEV5RU1wckw4bUFRelhSZ2R1aXgyeVp6b3J4a1lzRG4zaEIxVmVNTEdzWHNWdGdsMnBXOFMzc3ZrMHZ3N1I0aE5hSHZ2NGNBQ2w1SEZ6d0lIMEtjNnp1NFhqRFBSL2pwQVZ4V3pPMVhrMkREYjN2VGN4ZUdVMWlXWkhrbUlEV3ppV0t2aXJDSjREcmF2czZJSi9HRzZjVHFXZFhEeStmQXJRRFZWa0xxa1ZqQW9aSUlUZG1tSXFYd3FhOTVOMytNR1lvWlFkUlZOTzUzWTF4UmtoTzE2dlk3ZXU1MDdDYTlsSm5iR3B4T2VtUWhTdy9BUXNtbXA1elU5QmlVOEc2d3ZYNzZNNi9VNlBqNCtkbzBCejRDcGdpa25UVWVEcXdsS0JtZzN1NE9WanJaMUErckFjZ2FlaldxNmVKQ3ZDWUZET05Td09nSFg0RVFSdzhseGJ6RE9kRUs2Z1ozSGsxYis4ZzJvMUpGdEtYeXYvZkVkVFh1V2pXWGRBWmlCcDZBRGVEckNGaWltN0I2WkZuZWVJN0d2bS9QTWtVRFg2N1c3eEk4YjBENy92OGRBOXFmTjVvYUNmNzRXWmpIMG1mMWNtZlkxWTBKVUZtVnJUV3U4dXprTmNMdEVqN3U1RlhCVGtmQzZHT0E1cThZTXhPOEtWdkY2c0FWR2RjclVic0tPRGNRS2tMTU9NZG1seHVtNjQyWXJQbTI2QWxoWlcxWUIxUityckdzd0U4VGFZQVdlVU14ZGYrV2p3U3ZaMkVmM3l0T3lmbjUrUHBWUEFhcU9uNDNNdE5CcXZtamp4YmpNNGxaalpZNGdxTk1JNWt0YVcvc1lLTndTKzlsRlF6R2lobU1DS1BhNytaMFY2RWIwR1Jtb2J0cFg4SmxqV3U1Rk1MTjVqYTZoRzlrd1FnWnFmNSsxTkg1VXh6a0ZSZUNkV2hKOFhkbEdVa3hPN0hSbFlSbTRtVk80M1c3dGVyMTJUUEpFdy9ybUVOM0w1U0tISVdaZzlteitwVW9LT1lxNWJKVEpkWDJnbWUxVWN4TVpRRmFFUUlsSGN0MzJNK1kxQnpHa0d1emZpeUFOOXordWdwbFoxc3ltQ3JEQ1lZa0d4RFRwSTlSekJ5MHJIeWVEVUMxbldhZVVhRDluNHhrTnlZTUJEWnR6WjNCKytmSmxZMjFYRkRPY0FSSmxhYk95aVMzdUNwTEk5anJaakNEa2FWdmNDQ2p3b2duS1NoV2R6WFpXbFpNdlZUZ0Q4THBxbENMcnFnYmNCK3FZd3JnS1lwVDBjY0NxYkt5Q1ZhbGtFYWJuL0Z5bm9nQ3JQS2ZxZjUxeEo3c0dCMlpYY1pteG9TT3p0angzMDBEWmk3YTAvMkFJUjBVbEJhZzlTdUR3NktjQXpsYUI3dkhadldwaks5MGR5cnE2Ykt5RFVaUWJSMEIwNWJpTFFrSEljU1VtZ0lLK1N3dXFnSENub2lvMlJRVTF5aitCbkJ5OXBwaFZLTEd5QzdaekZLMXB4V0srRThJaFZDV0xOL3VMdG5VVTRheW9ZTG9hQU56OEZkdGFTdlk0cFYwQkVXMmxzNjFjenFsbEJLcFR5S2dNQWhyWjFjZGMxUlJPdFBtdldOa2RjS1o3Wkt4YVdqaVBMSk1wcDdPWkt4QStycUcvb0pManhmMHBuSmxxTG9EWm8zZ3lVMG1LR3lzMnRhS2Vjai9kMUMrckpTcGxCcWxUeUFxZ1IrRDhLaktsbVJMMmd0VWNBZEN0c0wraWpDTlQxb3FxcWtIMk9IRWJHNXNERm5VZzVBYSt5TG91MlZVMXB0ajFTMlpRcXYxT1JaTjlJV3pSZmdhUkJ4S29CRThVV3lxbEpGdHJJYzBBeE5qU2plZDk5Q1RZL1hEZlN6Q3o1TTBJWm9WRXNXblBGTlRzbDhvb1ZDMVR6YkdncUZaTkRTZ1Z3S0srMXNHRE1LcXhaQ1dHVk1EeXNpRXIxalZTUUpVWXdqNWlIT2xUaGRIdDQ0U1FnOUNOK25sOEQ5ME5NSWdBZGdyNDZKcVJpUjlJOHZSZEZ2YnIxN20veXhVTUtqTkxNaVZVQUR3dTJDV0doaGkrRjU1VFdNOU05Y29nem1zMWRuTTR1T0YvTEFFWVdkY3FuTTd5Rm15cTNJZndtT1JPZDdZMWlGV3RPam9ZOFRvNDFtVFY1SXlzZ0ZGdVJ6c2JXRkdiTklJSkNEdjFkT280bFpHN2pXQndSRnRWVEt1V3llQ0J5SktPYW44b1ozZXA5WGRkTmwwdER1YXl3THo5Y1hQWWVEQUEwU3BrQk85c2JWY1RPVldsZFB2NHV5ekVrenhIdGp2b25Ib1NrRkVXTm9vMWQ4RGhjUXB1dGQycHBOb240QnpvQWlKMWhCRlFnMGRWdGRiR0hIRFFXdXNobU5FUXVrTE0yUU8xRzJZOGJnVFhxRmhjQkpqN0VqUGdjUHRzOFVTOHFQcFBCL2RYem5PaDVaNDM4dHpINWVjNlFnck9LclJSZktteXNCbVVEQitQaFlhYk1sVlBFUitHQ1NJVFR6cjdhbTJ0QXJIM2JnY0V6UEptK2NyNWpKNE5uSE5GRFZyRlhjSTVMZTlrNUpudytiZWRiVitGZlJ6WklIYU9PYU9zTFkwLzdVR3M1OERqckd3S01JTUZJR3pPRVcxL2pHc2RBdENONmhFQUk0aEJlOVlYZVJST0JTVlBBVlBBcXZJTTVieDVoVktXQU1QNnpCUnkzaWVzY3JpZFZkRkJpbkJ4WERuRzJHUlkyWGJDdnAxbGh2R3RPOUJ4dTVoOTA4WFF1NDJsblNBck1GZGl6TWltOHV3UkN4UEdubk9TOGx3cG5iT2lEcVRBanNyUk4vUGNvQVNjQ2JhQUNxVk00MHlsbmpqVEJzK2J3V2xBRzIzL1VLYmRraXdLV0lRUEd6V2FjenBvU2x4UEVqODIyY05Xa3BTN0Z5enNEcnFwZmdwRzNqYWh3MnZnYmFTUUF4dUxXWll0N0p6eU5lOEpvWnBOQWN2REZPZHcwd3FZVDlBSzFyWnovRGRiU2xMUHAwcnlJeGdRSmxLOUFabEVxN0lPWHBvaGc5UElockNuZzg4SnNPeGlWNFpXQVlmZzRzaWt4LzhreTJaOWw4NjJ1cXdyZnNjSUg4K3VnVG1WR3lpZGRlVllVZ0VNbjRHWnpnMTRFd0lzaDlzeDJjS0tpV1hSZXVPRTVnekdPUWdkbFJLVlZkbGV2cWIyNzlYcTBRbnN0czJWRGFCTzBjb2V6c3J1V3RIQXB1NnNLRzRJQmhOMGFHVTJrTHJNS0dSVE4zSG1iQ0R3S1YxNHp2a01FREc0UWZaVnNwVmxhTlUybWhjNVRFWjNOMWgvenFUaGV1THBXMDVaV1RHVmpiM2Ribk5teEtaQm5OOEpxaWRhVkxLQU95QVJOTFMrTUI1NFoyK1ZhcW9NTEtyb1ZCbG5nZWZuVFBBY29ITldDU3ZsZkE4Q0kwSEVtQk5CbkJsWHlNcnpVN0E3V1ZtOTRQUHFRMmdtcUt4K1dER3NudmlsbWNTT0JKcU9LMW5ZeUFJenVBeWVzcTNVZFNLM0tmV2NZS0Q5NUhtZllPVTNxc2VyMkN0WUVVQStGcGZxZE52Z1BCWlVCaERyR09OUlZsUXNoOHJMY2FVQ3lrSEcwT09Vd1RsTEJyc2g1c29FTUdlemkxRTRIUlZ0MWljcDV3WkVGWGRpYkNrRzhZOHZYNzVzYk80RTBpb205eitoalNpT2Z5M0RocFhJdHBWaEUrVUdRZHZvV2p0Q2htckdIZjRZQXpLZ0JObkd0dUp4RkNlR2RoVUFmUUxMSzhrQllBUDZndkZKWmFqTUczWGt5Y3k4S3VDMHE0RXl5bXd0d2R4ZHYyTTBtSUJ0SzBMS25mNjQwajAwQXVxNGdVa2RXR2xoczIycUpjNmRaQ3NMMTlveG5sVEpHNFNZVlJJR3BEOFRQRkJ1TTZPRWxiUzFwbGRpZDRtR0F5TjZaSXVwYkM1YlhKTjlmZHBiVGhTeExVYUk4SUcxWElZQnhXM1RqczZLUW9zS2N4ZnhjUW1kbndSR00xMEduRmNDeTJYWXVuTE15QWtkZ2s0bWVQaWN6c0x5Z3RoY0J1dDZnb09xUzdZVkZYQURMamFvc0I2czZvZmNaV0FaU0lSWXFTVWtpell3dHRZYWIzdlVPUTl3MkhSeElJZzhXd1JWZUU2OHhpNFV0TDN6UnBoeHBsend1WnJjcVlDcTFJM2pQSTVkbkpJeWdFb2hNYlBxVkpTenJ3enhCSlRzNXpOK1JlVVNneGlrUFFWRjNKVkJlTlF4YkhFTnJFTU52RWRGWlZWOWxIOStPUkdFc05aUXB5VE5jNEMzQUc3WEY0bmd6cStEck8yemJ1YWFPWGdkYUZjZGtFb3RvU0ZCVlgycUowQzhPV1plRzRLR2xwZ2hBMFhmVE9QQ3FWMnFxd1EyNlFXZkYyUE1MaEkydzFsVkFhMmFQc1lkMHphMjVNUVJ3Z2NaTjZ1UURDaStaeGlENFhFTTJrWnhPVDQxRm5abmFSbGNwWm91emxScXFkYlFWV29wUW9TQjU4UlY1MGxCTnJIaS9Bd1hTNUxyd0RWbHBZM0ZjM0J5aVlHYzUyVHJpc3Q2a09YZHdJbkFRdEpwcDVRY2h5YXF1WU9WN1N1K2Z4Vk1hVjNkYzBSRTJTNm1VWTBnTHQycE1jWXFyS0lROXcybDFncFFVTXRRWWNtbWJ0NURUTnhkaG5VQ2pRcXRiSzlTVVN6dnJDMG1taGhFMWUyRlMyK294eXB5L1pBU3V0a210angzdmNCQzI0UFg2NW5icWtCQ1JoZmpTOWtJWVBuZWU4Y01hZ1ZPaEkvM1QxZkFtZHRBV1pzQ3N3VEpDa1FWTmEwcVdLU0tQT3BIQVVoRDlEcmJWY3lvWWt3cWh2aDE3dllBYXlYTFF5S0dZZHhsVURGcDQ5NHJCWFJqWWdPMTdERFlldE5JVWovZXpwNlMwbG5scEV3c1dtSk1rT3dzS1hlWktFQWpJSG4wRVFKSVNhUkJjTzZVTUlOejdwL2JFampudzRmdCt4bUR2a3N4WDRHMnJJcmlzN3FhZUt3QUZNUDJPaTduNGNyaXVad3RwU1V3cGZMeFNuT1JTcklxdXNjNVpGYVh5c3FSV2ppWjJEeUFXRUlMMzV0VlNvUUVsRkFDak9lR0dTRTdBSEVRZ2RvL0xTdkNPZ0dCdmt4c21EYnZsUzNGcDV2aGFCMlRBR3FSS3JLS01yaExWcGFHekVWalowT1F4RGhhQ1RBK1F5UlIxZDE1YVF6ckpudEwzUmlic2lwakc2amxnTDR5cWJTMHNOWWcxZTg0dmhiQlZyRWxLNjRDVWNXWVhEZkt4aHBJdXhpVkpaVXhzYk15L3VSQktUTlJRNGtRM0xkUllMUzBySmpSUGxUUHFZNmdkSnNFRGMrYVFYQW4rSGdzTlVDYlJ1RjBPajB6d25BN2JXRGtiaE81RW5zMDBxZVFoUzFsYUJNbDVNL2NBYXhzTEY4ckt5cWwrVGY3RUxMRUd1L2l4aWltZEN2bzBUamZwakt3YWdnZW40ZWg1djdMb2tMS2JMdXl2SGhjWkc4ZGhHckVEeDdIZzkzWnBwSkY3cUJxTzNpVnZlWEVEUU5Jbnplb2U4WXE2ZVBhWkJaMkp2aU0zVzJVQUdvdGVrUkNBR3E0RWtGMVgzRE9uUjExeVJzQkwxdFJhMFBWY1ppTkZYWjJjMzRGc2t2b21JblFRNmx6cEpvWmJKeGs0M053S0pGQnF1SlNzckJ5SHlkeEtPblR4UUFTQm1TM2orSk1uc0hTbGEzRWM2SzlWV29KVm45emZqd09NN2hxWUFBcUpRd0UyYTNuQTQ4SjJRR2VnUmtwWk5pdlNZK3lzM0VrS2Q0b0pJd3N2SUhsM2NXZ0x0NWs0Tkg2T210TFdkcHVyT2t3RU11cFljN2VNdERSaE9jSTJ1aTVKaFZJelh6THl0by9HQVB1Wm95bzh3a29kdVZnSmdsQ3Q3T2hHYmdJRDRNcTRzaSs2M3pVUzFGdUZGWEZscXlhajJlbUhsTE1jQnFZdTBGTXVSMjhCYkI3bE94Uk1TaUNRWEZoQ0t1d2toWitwWURpR1NnYnNLS1Y4TWlTUnN1SFNJV005cmtsUmlJbFpadXFYanNRSzhvb1lKTWdxM0pLV1ZraEhiaHNWeEZVenRoT1dQa1lpamNieDU0SUtzU2RUK3VMcjNjckdLeW9ZZ0ZpR1I5aUJrNGtmbG9VWCtKSWxRUlFxYWJtcGduaHF0cFFwYjZSVlExV0g1RG5yUzRoRW9HWnFhZXJRMmRoRmJ6OFhlUHhTaG1EYm83MGVJU2pvb3JPMnZLOFNKWEk0U1VtRVU0eldLRHpVRHRXVFl3N3hYbGJTVEVqNEZSZzd6S25Lb0dSQUx2MEdzOVRnYzFCcEN5d0daUlFBdHFWejJ4ckJjQU16RXBmWndGU2EyRzVXMFFCRmpTTWFwV0FFRmEzSGNHTjdDeER6RUN5SWtKOTdxd3JxV05UV1ZvODc2UFBzalBrajJ3dmdyb001bExaS01FVEtWcWwvQ3ZuV1ZGaUZhL1N6SlVRd2tvWnNyNjdZNnZsU1JWMy8ydG1OVE9ZM3ZuYXhZd011b1BLcWR6UjF3N0lxSHltbFB4YUFUaGZVN0tvMlpYWWo0QVlKSEwra05kS3dSUVlFU1RSYTVmc1VaL3JWQzFUTVR5V1Z5WW9xTnR1emFIc015djJ0dm9hcnhkZnF3WWdVMWF4Rm8vY25xbDFGR3NxSyt1QVJPVjhCWDRHVThXY1pUQVRpMnE3UWN5aTBPMFYrR2hXQk1OUlVrbjhIMVNzV1ZFNUJ5M0dpMEVDcVVlSm9CZkF0RGE0YW1rZFhHMzdBR1A1R2dlYjg0cDdVYXpwb0tSemRGemVROEhrb0hHeHByS3kvSHBtNXQxMnA0N0o2eFRZREV6N3VJTkVYU3V4WVh2RnNrWUFjK3lTeEg5c2Y1ZnRLelU2SWJ3VkJjVUdnNWU1Rk1DRVhTRXJaUjB3R2F5VjE5d29NOWd1UGpUcUpkVlRxUjR1RTRuSm5MbGRXVmtFQ0NaTGQyVkxGK3h0YW1leDdJcGlyaVNEVXB2cnBuOWxyd0dNQ0h5cHBNSCtwczZMSUxzdUZHVWoxWEVPWGlxYnFTSFBVS25DbHBXVjY4a3F0VVJWTkRZNFROYW9jeWtvWWVUVTVuZ0dFUWEvUzFEbm5FNEFlWE1jS2pIUEFtRlZqQ0JFTmFleUxWTkhmcjNweDh4VXN0Sjk0aElwZkg0SEtFL2VEYUFySzZsU3lWVkZiZHQxZ3hUSVZrM3BwcFZsRlhpNHBFaFZCVE9icXVvaFU4NU1MWG4xaWFodlVrSEpqU0NNYzAxdExGdmVWVkJ4MERvZE02amZ0Q3U3RE90SXpZeHJjMHFwMUpHUDJheVlGejJHYjZIdk1yTzhjbkd0VjZHam0zdUltU2ZEMkdwV0s2dW93YlpHTXhGS1FDbzFwT010Y01YRnBSc3QraFhHb0FvbUYzc1NUQkdnVGdsYkJLV3dzUTN0WnFhWVNwMFoxQ2ltUkRXRmNDSlVQWUowMEJJNUZrS1lOb2lmdVF4bU44OFNXVlhXTE1hVXFxcWdDMEJtUUpSNnNrM3U5TkNmNmpZTFh4QWZxc1lFZ1ZMQWhSWTJBdGd0ZmxaTkZtRnloeGRyTGtBZFdsazREODhNMml4SHllcElkaE1IckcvaVIxWkd0cTBNR3BiRGJSUFlPWGVTWTFNNk55NFpzdHZHU2t0SytYYkZQQVRqMkQzNzFzYVBFc0FNWGhYcnNaMGttL1hTdGtoaE15QmZzYTZ1WEZaZTJWQ2UrWU1yMStHS2d3clF5TllxMVZSckIrRWl6QW93Nk5zZE5LY3lWRWtZZU03M3lzNnE0a0FIcDZCaUZrbFRrSXJWQzVvWVY3dXp3T0dDejRVSjBTdHEybFdNSnk0d3RiK1JldEw2dFpGaWNuSm1CdzVVakN2WFhNWlZKWDJNUWtiZitYTjVFV2Q3OFZ6OC9KRXNNWlRCaUtOenNtMWluTFJVUTc0SDROaWRhcUk2OGo1c0FGZ3hjUnZlQzdpZUxKWGZRWXhqWloyQ3NpV0Zld1pYSm1CSWxaMXRkdHJYNGhTdWF0ZUtzby9SWk90T0tXMm5tcTFvVHplSzZkUldBV3UyTlJWYjRocTBTWG0xR3Z0dWdIcmJyNUlYcW1Ta3RnNUN1REUyTVNsUHdzWTVrTkUyV3AzQXFpWmJXVkxBeGlCRisyaUJaYnVOajZNQjZyc01MQzdGeWFzYVlEeW83S2tvUHlFdHczcEVNWGZQdnhBSmkyakFRUWdqcnowckxJWlNXWmxJb05od2Q1eEs0QVI5bVlOaldBYUxybnVJbUplQlZOOXpCT1JPYlZ2YnIrbVRUZkZTRUpMU1JuSG83aEVKb0lpOE1GcWp4bXZnbUY1VVJaejR6TEZnWlo4Q3R1Mlg3Z2dWY2NLbTlnVnhJc09IcXhYZ05NS25GV1pZbmYxZEJuT2hheVhxMTdRd0ZsV1cwOWVOS3lWSkZtWHFhT05HQTVhQ2VnTWJKM1VVa0dZMWljM25LV2dqcThxZlZZR1FHMWdSdDZyczYyYTZIaXFxVU9xZGVzSzVObVg0bkdvZkpvaUUxZDBkRjlsVlZrdlQxL2tFRWFhQ29ZT3dGcGNWY29MTSs3NjY5UHhDOXJXcWt0SDBzV1VZbGQwVkNwdUJaL3N0VlJjR2d5OVdYMitVMVF0aGk5U3pBcVN4elpzeStPaUZ6QllueVNHVjZHa3U0NHJEOEJDT1pCVjNCdkQ1K0FLUkhOd01Fc0I2RXpIbkpwa1RBZWlVbEVHa2NFQ2VCNkdEWlRwNVlFSlRsdmRya254WWpUbGxNa2ZOdFh3RGpNN3VWaks1SlhVVW40M3JycXBLMmp5dGF4SFcwTTVHOERDOHJ0SE1ZczdLU2dkdVZRTUdUWUZxRnZWUzZya0Qzc0RKNDZhZmRZRndvcTExQU9LQ0JMaHZ3b1VnYzhJR0FOeWNSNmtuWnJkSlBkc3V4bnlqZmQzRm92VGxSTWRFZHRPbDVDTVY1RUhzWFFCaXM3VE93dklEWmFHajJWbnBiaDdjcEs2M1Z3WUVNTHdxYmp6eWw2OTlzYXdGRmtGMXlxalVVMzFIZkM2c1cxWkZWRnVYVlhWZ3o5a2VFYXcweXMxbFdmbSthelFBUVNXQStoS1lWZnNaalBuY0FjVUI5b0lheXkvVVpYUk5ja0RHamk3N0dzV2J2Qm82dFByV1BxT3lWa0JVcStJTmVxcHpOZFlzL3UwaWZoNXFtcHFJVyszM0pWU1Vjd1k3MEtMNFU5bFlkVTZsanRTbHM3bG1maTlnM1l6ZVFmVmthR0ZhVjNPRENuYUQyTjh3c0VERmtsRTNSek0zWmdoZFlrV0hzc3pxNzBGSWVjbktrVmt0OGV6TXpScTlia0d1S29qUkxCVlNvZDNZMXlQcUtnWVc3SlJRVFBWeXk1eElZTGpPZ3hnVDUyUktKVVkxZE9ySWlSZDRmdXRReC9BNUFjU21FanowdkZXcmtMenZiV0F1OUhPV2JHZ3hGazFWTlRwbkJLazZUZ3dpc0kvSGN4WVhQMXVBV083MlVMRmxCVHErYVN1MlZUVXM2aHJ4TTJDRitoRW9yMVZJQTlabUZVYWFiMWxTU2dac1ZzNHN4ekhsVkxvSkhyOUg0RGhPTlRrSTFYQzAvd2lZMk5vV0FHNVJsbkhGbnE2b0xjY3BRZGRNdUovTzE3SlZBNU9ITGkwQnFDenRxN1kxKyt1Y0NkOThxTEk4TUlIQlYvY0tqeFFUbWUzaEZCUzNNeUNxbkRzdXltMm84MEhqdkZGVHRyVVJtTmFHSnNtVmFoSW1qVHNVWEt0UVpUQVZzN012djgvK2Z6VXJaQVhjTEo2TTRrb2U2WFAwYjZTbVdXTkR6eVVwUThibCtMdFd4NHR1cVozNmNSWVYzeXVWeFBOd3ZJaXFpUUNTbXU3c3JnVHpSNm5reWhwQ2FyWHdGeTF2R2Q1aVAyY1kwNmxGcjVOamhoZzFZNitOQjI4ZnRiSzgzczhyZjdrTEpiS3dERlBiTGcyNWEwQWRaSkVpcXI1cGhpeEtNRGxSVXRjc3NxMWhyaUxxR29IK3plTmdWbTlPZW1qc0VUVjhKZEYwTkhua0lGeFdZMU9CNFlycDdydFdKN05nQUFBUFhrbEVRVlEzb05zNW5wbHlWZjh1MkZvTHUxSnJIdmVhWldRanFBa3NodEZhMmd6c1NHM1pwa2J2ZzNIYWZGOXNsUFBsbGRqRmxLODBHeXNtOE1yNE1QaG5lTldFTlBHakFJcG1pbFRQQVRkVFJUWGxDQllIWUFRdVB3QTM2eElwV3RHTjRxM1kyTWhpR3NVcHVTU25sRUpSRDhQb3JDN0NGWVZ3K0Y1MXFUaGdhYnhzVHhXekNHWTBaU3NiM2xmcUF5ME9QTmpOeTh4aVFRS3NIWUZRMkhCWlZ2VmJCdXEzbTFvV0thanFhb25zTTZ1WlVyNkNqWFdOWjBsNUUzaDNqVVJtYTZrUDNNSklpeTFMbStrYWhRcTQxTjJpWmphNXNqdGxMWU5aSFpySDZxVUdtNHZNYkRwNlJ3MkNGbXZ1eUZrckJjQ3lNdEZxQmFFQ21zSG9LOUJaMkxBL2xKY1JxU2FEcW5hV2JyWmRHYXozRExnSXZCbG40d29HenRieUpHcXNsd3hraGhIclRqVFlGWEN0T29LUzh1TGRvZlZkQWJPeWxHVTZubFlwWFdadHM0blhCcTZXeEppdE1Ob2tIVUpuYm5KcGxRbSthR3BZMmE1R01WMlFEMWhSdWJCUEZLZHVtZjVPSGtMSHowRjlsdUU1a2pCalJhMG5GRTVDVUdxSHczMk1talo2eGtnSU5WblNuWjFWWlN0SzJxS2xSYUxsUWdLN3VUcTdKRlhKd00rM1NPRUt5aFpOSSt0SjBJNXFNWXk5azJxSkQ3ZFZXZHFLWGEwQ0tOUjBDY2pnK0IySVl1MmZjQlpKWmtNRmdNMTFyMFg5MndpbGdoRkdnelZuZXhscUI3eEw5bVMyOVNpWVVWWTJuWE9aak5CUnN5RHNRUFJXVzVoclo0WGNkQzRIVldSYmpnSnI0c0ZvZks1U3pqUTdyaEkxVWViZFBkRWJqNnNxSXZUWlFaNXZhMDhyQUJzQVcwVXhlV3l0QWs3QTJLSjlacHh6Q2lvQjI0WEZ0WUFlWFl4cjZhblNxaExncHBFcVdiR3dMdW5UZ3JWK0lqV2xMMjlsamFBbDRFUU1Hc0VycDRhcGVaaXF1d1JYTFhBcU9DZXJ1MzJtbXlkYzZvV1RTV3BGQUdkemVUQjhSVEhWTUV0bE05MENiYlFDWWhQanEzZWdZcjFGR2RZSVFqaXVER1o1elovQXpvYktHT3lMeHRpNmM0Und0djJhbnlXbExJQ25sTGh4SlJYdDZBNWViREJXRk5PTmJ4V1oyZDAybW51NFM5WUVDcGVwcFYxelNXUkJXeEhZelZJdjFDWFNvdXdxcVgzakJCQkRaZFlRYnBUUVc0WlFsUzhyNWtINHN1U1JtZzIrKzNKTjEweDFQYUFtRWttdFlsRWRlR3BKRU02a091Q3FDUjIyb1N1amo1SVYySGRUMHpqNXByTEtUalhGQVBqZFFseXE3eElCeEFRUDV5TWN6RzRWeEFLdzBuNmlsWjJRQmNlMnBMdWxrdXh4cW5vSXpGZmdxeXFqaWw5UzFWTndCckZtZXllb3BzOHlPalpVeWJaZGZTOEN1YVRJSnVtenM1dE9EYU50THBGRFEvUGNKR3dlTGhtZUwxbkIwS3FpVURTY3NpVVZEODlEaTNIdHJLdFNVTHczUkxpeWdaRCs3c0Y4SlRPYmdZc3JHdkROVUZSR2wxaXkwTGwxWWtVYzJhSllNb2c5MjBJOHFXNllEQ2cxTXFrMEpISkZLWGtiZ2JScmVJK3FwWU5PWkhyVmNEVWJhN3Bqc3BoU0pOdEs2dXBnUk5BVm9PUzBtdWdCZU40YklaZ0hodVBaL3MxRU5hWDZLc1ZyK1lOcmgxTmI3aXBSMFBFNXpiTlJlZ0NickhSVXc2WWYwN2RMQkpsMWY4S0I5YXMyVjFuTnFBc2w2MkxCQmhlaHdhbGVya0htQjFKRklFWktTRXVzZGw1SlFqMW5KbEhYU0NGMzQyZ0o5Q1lHclhlbGtuSklYcVZQOHNEK3F0cGxDUjNYSDJxZktxMHlnTXArS25Wa0t4TmxaOG0yWWtJbFZNaUNuWFV3bDdxem5CS1N2UXozbTNQdDZvUWJYTzViNUZpeENoL2ZIeFVRVy9BRWNLNnpDTnFLUW5MOXN5d3FtS3V3dnFTWXpUL2FQVk5OcFZ5aHZSVzIxYXFjaUNzamRXdkJ3SUxVdmg1VnlDemJXb0MxcEpqSjY4MENXc2wrdWRLQjZUNVJ3RzFtbG9obmxwYmc0N2l6NVU5aGEwRkd0bVJMRllCdE85OXk5N0FwMHorWkRUQW9nNmtTTFpzTUhnL0lGa2tncDZDcHZVMlUwY1lWU2RubWtqd0JkT21YYnhUV05XenVJYmlwTWlvVnhFY2taRW9haFNPaXkyTTNLMGpjQzFMaFZEd2FxRzBadmtjV3FDbnJHNEdJeHlrcnFsYldkdzZMUXlCYVpSOEhtTFJJaFFXc0hzd0Q0MlpYVkxOa2Y5bCtGbFcwSFZRMmx3RnNDL1oxRmR6bFFSMEthUGZvK0ZkZnUrL2R3VlJJQ3UxQ0dSN0FFSWlBaGMrQVpVRjBrT0JhUHhtVXFnNGk2NHZRblU0bkZEWUo5TnorMWZWWHZlSDlxbXIra1BJTHg4b0tjUlYvQkZieGJFMEpNVDBrU0Q0dzZML2xOWThvY3NxYWdWZFUzQTNNanhoeGNHdXF6c1BINGlycGFvdzFxNk95clZqdnA5TnBjNTlFOTFMbGRib1lWekpXZGltV2ZBVzJTTkVLY0RhWDJGbUJMTEEvdUt4bG1oaDYxM0lzMVVSUUFwYktmdHR3eEwwMnE2T254NXBReFNiUG9qQWcrdjVoQW5ONkxIVlJEWElzdkt0UmppUzBxSlV5WlRBWFZiQUs4MkVsRkpXYVFkVm9xVUMxVW50N0JWYVRRdWRNNlN1cWV4alFKTjQrMGljYXh2L3V0Ykt2ODNFVGJUOEg4Z2pjT0t4T0ptYlVhNk9PVlhodDNkRlk2ckh2OVhvTnpGTGNlRUExbzgrcEttMExBSFBIWjJyWUtqRnEwaGZaRml4c3FISmdEM2VENW4rVTBrYjFtRmpYa24ybHZNU1NPc05FL0NkSUFLRjBTeXRxNnVyT0hVTjVnd2c0R1pvc2dibWdnTTV1Y3JhMnFyUzJJZzFjYmlCQmN4WXpnelVETkxDdkw4R2JaWE5wNk9SeTNMbVMrS2s4M3pSSUFLNkExaW9LYTJJOU5hcEl1aVVGZGZDOTc2NlBGWlV0cVVyNktiV2srelpVMWEvWnJJWEV6dHJqVE9mejdod0t6aUNlWElhcmFIdGJaSU16KzJwR2dhekNtdzRxV0FGdkVkaG9kWXAwWHEwcFY3RzFZV1lXYk80cWhHcTQyK1o4Qll0ckxXdmx1TlBwWkFlYUZGUzF2dWJQZ2JneHNxY3BuQWFzekJvdkthRm9EUThCR3RqZlVPbDROQUcybm1RVjA0ZmVKZ3VtdlgyZnNyUUVXWmdoTDBKblZkWWtuM0RPWkllUk44NlJxUFdDbXN2R1ZxRU1Sbnd4UUF4d1M4RU1ZbzNJem1ZMitCQ2NMcDRNS2l1eXVoSW1hbWxiWkZjTm9ObDd0cCtSSGQxOFpqUUlSS3lYZEZSaE45OC9oeUtxd1hXTm83TzF3aWFYb0hOMTA4UkVaWldFcTZncm5JZmp6ZWc4amRSZjFYRUw0a2tYYTViQmpLeG9LYWxqQmplSGxWeFE0R2F5Y3BXNGxET0FLdG5UeEhBdE9mek90WndIQU03c3FWWGtWNnl1NmthcDFuSGtYS3FXRi80WEhxamVuTktxQmpwUjNsMWNoM0VqZzErRXNnZFFoc2RHMEI0Rk05c1dBVldwdUF5aXdUUGxlWnh0OVZ5WlZTMnFYZlJlV3FUQWlscHI5QXBvV1RqeHltaXQ3TndWNEpUcmlaeU9BOUIwazdIRmZVTG91cm1LWUhWblJRdnFHTDVITUhkcUZjUjJxV3BtY0s2ZVR3eDJkaXBXcnZpRGlscitmS1dxM09XUldkSEt3QTRldTh3amNoYmVSekZpbHFqalpOM3VmQ3Bma0owL3NjVnBuWWs2TDBQSTc3bHhkV0NaODdXaVdtN0IvQUdxdVFTbnVqR0tzQjhDSm1pSnE4cTFwS0lWV3lxT2lUSzY2cjE4Qk44cjc0L0FFNzFmZEMzeVBTMk14ZE9wbkUxdGxWeEQ5Sm1WT29nZ04rcjRQakFYVkZQYTNFZzVqVkpHRlZVR05vbEgyMEdWclVCN0JPeVNXcTZXcVlRZFdSOTJwY0ZNWU13Y2tiU2dDS0NxRDY3RGlpV3UxZzhNUUM5QnlmY0ZxVzFMK2pMNzE0cU5DdXpub1N4dDBkYTJndFdOMUc4RjBCSzBOTjBudWltZWxVRjlkSWRBZmpPNDRVVDNDalFMb1VlTEhKRlRPM2dtcFJ1SUlPdndCUUNicU5lbzNxdFo5aUY2eFZLMTNHUmxvNHpxaW1xK0NHZFRpUjF1Ulk4b3FnRTAyaFpCYTc5a1pYUE1xdXhSSEtsYTJzYVpXTjRtUnFaVWowdkxDS2hraktucU9RSE51U1pWSm9LdkFxUzF3cEVxdXZXREMxQjJ5cHdyQ1BzUk1FUFZUT0RNTEpNRHY2cWVLWHdpMkpZVjVTcTRxS3l2Z0dzSENMaXVqMmpSNTlWOGdNcVNKMkZKWlJYRUhWUkhqM3NGUHJjdDZPcHFsVzFHcGF0UWR0MEd2d2ZNNm42M0luc0dWRmhKR2FCcWdxcUlWNklzWGxsWmd5U1BxNFIzYm50M3dpNWN2K2NOMnlxUUxXMVQ5NUtZVnNXV3RLazRjQjlXNTNXUVFmbFFZUjZXbDRIYUpaanZWRTBENXl2cStSS2daQ3M1cWRCRVA1c0Q5NGNBdlFMbFNnTmFTTUF0SHg4OEJ1TlE0MXpkRnNYMzB6S2JjczBNTEQvaWhrcFF6bDB3aVRxS0xUZmJLbUNteVlJQ25LMEliYWllQzRDRzlpU3lMUTdjSU1HUXdhdTZUS29xNjBBcGwzV040MExacGNhMUNLS0s5VlF5eUlFbjh3MEY4RjZDTDJoOG8zaXhHd0M3czdFV3pDT3FtY0FwWXhZRDRqc0F6VlMwc2wydDk4cEE3dnJLb3BoQ1ZTb25iWXBnSDZtdlNuMjRwVEJWNHNkdFYzQnRNcTVrODJ5K0lBRHZVSjB1QWxrQ1ZUeElhUG0rVU51L3FrVjRGMVR6SFhDR3JYSUFxSXRCS3lwcUs5OVZ0QU9WczY0TzRPYlg3cEhMVkNwWUhjUm13dkxSN1R2WUFLQkJONThMR1Z6RHVGeitoUWJXZ25jUXlDWkFrK1Zic1BTb3VmOTMyNjFpWmdtZkNwd1JiQXZxbVNxcmlVMlB3aGphb095WXF0SWVnVlhWaVRzbXl0YTZiR3lTcFkzZ3lScnBJeUFlYVdERHh0cHNYd0t5YWxNREtOUDdZQlhNcUVza1VzaTJ1QzhGTkFQeEFLVFZmVDFvNlZ6TTBFMGpGKzFyV2NVdUh2ZHlnN3Znb0ZwbFg4SHB2SHBNQ09NUlVQSHpaa0luc3FsRktOWC9FSU81MkUwU3hTek93b2IyVm1STFc1RDFYSVUwcmJnTTFBeldneUM3ZmU4Rzd4VUFLL3RhRUJhdDdsdXF0eVA3RW1zYUpRT2o1Rittcm5aZkN1WUNmQlVBV3dTaHlkNnBNWS92QUhHMVVxT1lwYkkvZ3k1VDBDTUttK1VPM2dGdUM4NWRnZkRWZWd1UERmSVRySUJMc0xyY2dkaDNDRmdGWmphS0o0SXYzRjhBTkVxdnV4UjF0VktPZ0xvQ2Exanhib0JBa2o2djdqL2ljRmJBN2Y0cmZSblFETFJWaUcxM2kwdnFCUXJZVnFCYkFEWlQwWnBpSG9TenZRcG9wS0lGUzNzRTFIZkJXbEhYZDBIN0xuQXJxdm91Z010bGpIQmdabmgzRW96L0JLakxNTDRaMkFxMCtoRUpyOWphVlVCYnZOekNJVWlyb0M3QVdtbUZ3NG81QUszTXRCNVZ5cFpNU0ZnczA1SnlHVndsd0Jxc0VHQUFhMlpVMUNqVWV4WEdzRTRyS3JpaWxCdkZ6T0tLbzNBdUFyb0U2UUZRVTN1OFlwTlh3UzVrKzFUWnQ1VXJ3b3VONEtpVUV3K2szWldEcDFSWEhOUnFYYjIxVHMzOTk0NXlaU2czVm5aRk5ROUNGM1hlWnlyNURnQlhLaXdDTWEyTXhlVERZWGdQMUZzZjlRTktaYzBrODFSSmszcjZFUTNyQ21CVnlMTDc1RWpaMXBJVkRIb0Z0aU9BSG9CMEJkVFZ5bHFCc0tLS1MrQWVCWEpWTFkrQ1hBU3VHdk8vQXVxN0d1RWpEZkdLZzFvS2Exei9kbW1pOUk5U1VHTmhsMEF0ZnVsSEFhd29Zcm5Ta21OWEFWdUdFaHJFVlh2VUYrQTVDdDJQcU5PakRldHluYTRDbWVVb2xtZVhMTjRBcTdDNVNqMTBRN3lqZ2wrdDZDTnhTUkhtSTVYK0Nwd3JlWUIzUWZkcW5hNHEyMUtkQnVjNEdvWnNuNDlaT09pVmlud0hxSzlXemp2Z2V3ZUVoMkFVNSt2dHhaOUNkOVdxa2g0OVYxOEU1b2o2dlZ5bjBSU3RBeUdJTzVlZFhSS2Q1QjBWR1ZYcTJ5cjN4WXArNVV0K0M0UUo0UDFOMzM5cFFNalJlamo0dmIvRGNyNnJRYzNPLzByam10WnBlWUNCaUNIZkNlbVJiTmhiSy9wTlVQYzN3Zkt5NWYyRDdPbEwzL3VQaHZlL29VNFQwRjhmK1ZOTTJ2eW9pdjBqSytLSFFmZEhxKzBibmN6NG96NzMvK1k2TGJLdzFvLzVCN2VPZjFSbC8wZHU5Qjl0bi85YnZyZi9qK3YwaDZ0dG4ydHAvci80ODE5eTQvenY1MzkxdXZ6emZ3RGlmejZwaFQxTVBnQUFBQUJKUlU1RXJrSmdnZz09KX0uc2VtLWNvbG9yLWRhcmstaW5wdXRzIC5jb2xvci10eXBle2NvbG9yOiM1NTU7bGluZS1oZWlnaHQ6MjJweH0uc2VtLWNvbG9yLWxpZ2h0LWlucHV0cyAuY29sb3ItdHlwZXtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjIycHh9LnNlbS1jb2xvci1saXN0IGxpe21pbi1oZWlnaHQ6NTBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBpc0lFMTA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGhzdmE6IEhzdmE7XG5cbiAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuXG4gIHByaXZhdGUgb3V0cHV0Q29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBpbml0aWFsQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBmYWxsYmFja0NvbG9yOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBsaXN0ZW5lclJlc2l6ZTogYW55O1xuICBwcml2YXRlIGxpc3RlbmVyTW91c2VEb3duOiBhbnk7XG5cbiAgcHJpdmF0ZSBkaXJlY3RpdmVJbnN0YW5jZTogYW55O1xuXG4gIHByaXZhdGUgc2xpZGVySDogbnVtYmVyO1xuICBwcml2YXRlIHNsaWRlckRpbU1heDogU2xpZGVyRGltZW5zaW9uO1xuICBwcml2YXRlIGRpcmVjdGl2ZUVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBkaWFsb2dBcnJvd1NpemU6IG51bWJlciA9IDEwO1xuICBwcml2YXRlIGRpYWxvZ0Fycm93T2Zmc2V0OiBudW1iZXIgPSAxNTtcblxuICBwcml2YXRlIHVzZVJvb3RWaWV3Q29udGFpbmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIHNob3c6IGJvb2xlYW47XG4gIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XG5cbiAgcHVibGljIHRvcDogbnVtYmVyO1xuICBwdWJsaWMgbGVmdDogbnVtYmVyO1xuICBwdWJsaWMgcG9zaXRpb246IHN0cmluZztcblxuICBwdWJsaWMgZm9ybWF0OiBudW1iZXI7XG4gIHB1YmxpYyBzbGlkZXI6IFNsaWRlclBvc2l0aW9uO1xuXG4gIHB1YmxpYyBoZXhUZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBoc2xhVGV4dDogSHNsYTtcbiAgcHVibGljIHJnYmFUZXh0OiBSZ2JhO1xuXG4gIHB1YmxpYyBhcnJvd1RvcDogbnVtYmVyO1xuXG4gIHB1YmxpYyBzZWxlY3RlZENvbG9yOiBzdHJpbmc7XG4gIHB1YmxpYyBodWVTbGlkZXJDb2xvcjogc3RyaW5nO1xuICBwdWJsaWMgYWxwaGFTbGlkZXJDb2xvcjogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcFdpZHRoOiBudW1iZXI7XG4gIHB1YmxpYyBjcEhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjcEFscGhhQ2hhbm5lbDogc3RyaW5nO1xuICBwdWJsaWMgY3BPdXRwdXRGb3JtYXQ6IHN0cmluZztcblxuICBwdWJsaWMgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjcERpYWxvZ0Rpc3BsYXk6IHN0cmluZztcblxuICBwdWJsaWMgY3BJZ25vcmVkRWxlbWVudHM6IGFueTtcbiAgcHVibGljIGNwU2F2ZUNsaWNrT3V0c2lkZTogYm9vbGVhbjtcblxuICBwdWJsaWMgY3BQb3NpdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgY3BQb3NpdGlvbk9mZnNldDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjcE9LQnV0dG9uOiBib29sZWFuO1xuICBwdWJsaWMgY3BPS0J1dHRvblRleHQ6IHN0cmluZztcbiAgcHVibGljIGNwT0tCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcENhbmNlbEJ1dHRvbjogYm9vbGVhbjtcbiAgcHVibGljIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgY3BDYW5jZWxCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcFByZXNldExhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBjcFByZXNldENvbG9yczogc3RyaW5nW107XG4gIHB1YmxpYyBjcE1heFByZXNldENvbG9yc0xlbmd0aDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjcEFkZENvbG9yQnV0dG9uOiBib29sZWFuO1xuICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZztcbiAgcHVibGljIGNwQWRkQ29sb3JCdXR0b25DbGFzczogc3RyaW5nO1xuICBwdWJsaWMgY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbG9yVG9nZ2xlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2h1ZVNsaWRlcicpIGh1ZVNsaWRlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWxwaGFTbGlkZXInKSBhbHBoYVNsaWRlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGlhbG9nUG9wdXAnKSBkaWFsb2dFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHNlcnZpY2U6IENvbG9yUGlja2VyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyUG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgICAgIGNvbnN0IGh1ZVdpZHRoID0gdGhpcy5odWVTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGFscGhhV2lkdGggPSB0aGlzLmFscGhhU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHRoaXMuc2xpZGVyRGltTWF4ID0gbmV3IFNsaWRlckRpbWVuc2lvbihodWVXaWR0aCwgdGhpcy5jcFdpZHRoLCAxMzAsIGFscGhhV2lkdGgpO1xuXG4gICAgICBpZiAodGhpcy5jcE91dHB1dEZvcm1hdCA9PT0gJ3JnYmEnKSB7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gMTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcE91dHB1dEZvcm1hdCA9PT0gJ2hzbGEnKSB7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0ZW5lck1vdXNlRG93biA9IChldmVudDogYW55KSA9PiB7IHRoaXMub25Nb3VzZURvd24oZXZlbnQpOyB9O1xuICAgICAgdGhpcy5saXN0ZW5lclJlc2l6ZSA9ICgpID0+IHsgdGhpcy5vblJlc2l6ZSgpOyB9O1xuXG4gICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5pbml0aWFsQ29sb3IsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuY3BXaWR0aCAhPT0gMTAwKSB7XG4gICAgICBjb25zdCBodWVXaWR0aCA9IHRoaXMuaHVlU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBhbHBoYVdpZHRoID0gdGhpcy5hbHBoYVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICB0aGlzLnNsaWRlckRpbU1heCA9IG5ldyBTbGlkZXJEaW1lbnNpb24oaHVlV2lkdGgsIHRoaXMuY3BXaWR0aCwgMTMwLCBhbHBoYVdpZHRoKTtcblxuICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcihmYWxzZSk7XG5cbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICB9XG4gIHB1YmxpYyBhZGRDb2xvcigpe31cbiAgcHVibGljIG9wZW5EaWFsb2coY29sb3I6IGFueSwgZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zZXJ2aWNlLnNldEFjdGl2ZSh0aGlzKTtcblxuICAgICAgaWYgKCF0aGlzLndpZHRoKSB7XG4gICAgICAgIHRoaXMuY3BXaWR0aCA9IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzIwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldEluaXRpYWxDb2xvcihjb2xvcik7XG5cbiAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKGNvbG9yLCBlbWl0KTtcblxuICAgICAgdGhpcy5vcGVuQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXR1cERpYWxvZyhcbiAgICBjb2xvclRvZ2dsZTogYm9vbGVhbixcbiAgICBpbnN0YW5jZTogYW55LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjb2xvcjogYW55LFxuICAgIGNwV2lkdGg6IHN0cmluZywgY3BIZWlnaHQ6IHN0cmluZywgY3BEaWFsb2dEaXNwbGF5OiBzdHJpbmcsIGNwRmFsbGJhY2tDb2xvcjogc3RyaW5nLFxuICAgIGNwQWxwaGFDaGFubmVsOiBzdHJpbmcsIGNwT3V0cHV0Rm9ybWF0OiBzdHJpbmcsIGNwRGlzYWJsZUlucHV0OiBib29sZWFuLFxuICAgIGNwSWdub3JlZEVsZW1lbnRzOiBhbnksIGNwU2F2ZUNsaWNrT3V0c2lkZTogYm9vbGVhbiwgY3BVc2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbixcbiAgICBjcFBvc2l0aW9uOiBzdHJpbmcsIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZywgY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdzogYm9vbGVhbixcbiAgICBjcFByZXNldExhYmVsOiBzdHJpbmcsIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXSwgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlcixcbiAgICBjcFByZXNldEVtcHR5TWVzc2FnZTogc3RyaW5nLCBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmcsXG4gICAgY3BPS0J1dHRvbjogYm9vbGVhbiwgY3BPS0J1dHRvbkNsYXNzOiBzdHJpbmcsIGNwT0tCdXR0b25UZXh0OiBzdHJpbmcsXG4gICAgY3BDYW5jZWxCdXR0b246IGJvb2xlYW4sIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZywgY3BDYW5jZWxCdXR0b25UZXh0OiBzdHJpbmcsXG4gICAgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhbiwgY3BBZGRDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmcsIGNwQWRkQ29sb3JCdXR0b25UZXh0OiBzdHJpbmcsXG4gICAgY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzOiBzdHJpbmcpOiB2b2lkXG4gIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zZXRJbml0aWFsQ29sb3IoY29sb3IpO1xuXG4gICAgICB0aGlzLmlzSUUxMCA9IChkZXRlY3RJRSgpID09PSAxMCk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG5cbiAgICAgIHRoaXMuY3BEaXNhYmxlSW5wdXQgPSBjcERpc2FibGVJbnB1dDtcblxuICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCA9IGNwQWxwaGFDaGFubmVsO1xuICAgICAgdGhpcy5jcE91dHB1dEZvcm1hdCA9IGNwT3V0cHV0Rm9ybWF0O1xuICAgICAgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPSBjcERpYWxvZ0Rpc3BsYXk7XG5cbiAgICAgIHRoaXMuY3BJZ25vcmVkRWxlbWVudHMgPSBjcElnbm9yZWRFbGVtZW50cztcbiAgICAgIHRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlID0gY3BTYXZlQ2xpY2tPdXRzaWRlO1xuXG4gICAgICB0aGlzLnVzZVJvb3RWaWV3Q29udGFpbmVyID0gY3BVc2VSb290Vmlld0NvbnRhaW5lcjtcblxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY3BXaWR0aCA9IHBhcnNlSW50KGNwV2lkdGgsIDEwKTtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jcEhlaWdodCA9IHBhcnNlSW50KGNwSGVpZ2h0LCAxMCk7XG5cbiAgICAgIHRoaXMuY3BQb3NpdGlvbiA9IGNwUG9zaXRpb247XG4gICAgICB0aGlzLmNwUG9zaXRpb25PZmZzZXQgPSBwYXJzZUludChjcFBvc2l0aW9uT2Zmc2V0LCAxMCk7XG5cbiAgICAgIHRoaXMuY3BPS0J1dHRvbiA9IGNwT0tCdXR0b247XG4gICAgICB0aGlzLmNwT0tCdXR0b25UZXh0ID0gY3BPS0J1dHRvblRleHQ7XG4gICAgICB0aGlzLmNwT0tCdXR0b25DbGFzcyA9IGNwT0tCdXR0b25DbGFzcztcblxuICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbiA9IGNwQ2FuY2VsQnV0dG9uO1xuICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvblRleHQgPSBjcENhbmNlbEJ1dHRvblRleHQ7XG4gICAgICB0aGlzLmNwQ2FuY2VsQnV0dG9uQ2xhc3MgPSBjcENhbmNlbEJ1dHRvbkNsYXNzO1xuXG4gICAgICB0aGlzLmZhbGxiYWNrQ29sb3IgPSBjcEZhbGxiYWNrQ29sb3IgfHwgJyNmZmYnO1xuXG4gICAgICB0aGlzLmNvbG9yVG9nZ2xlID0gY29sb3JUb2dnbGU7XG5cbiAgICAgIHRoaXMuc2V0UHJlc2V0Q29uZmlnKGNwUHJlc2V0TGFiZWwsIGNwUHJlc2V0Q29sb3JzKTtcblxuICAgICAgdGhpcy5jcE1heFByZXNldENvbG9yc0xlbmd0aCA9IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoO1xuICAgICAgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZSA9IGNwUHJlc2V0RW1wdHlNZXNzYWdlO1xuICAgICAgdGhpcy5jcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzID0gY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzcztcblxuICAgICAgdGhpcy5jcEFkZENvbG9yQnV0dG9uID0gY3BBZGRDb2xvckJ1dHRvbjtcbiAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvblRleHQgPSBjcEFkZENvbG9yQnV0dG9uVGV4dDtcbiAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbkNsYXNzID0gY3BBZGRDb2xvckJ1dHRvbkNsYXNzO1xuICAgICAgdGhpcy5jcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3MgPSBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M7XG5cbiAgICAgIGlmICghY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdykge1xuICAgICAgICB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgICB0aGlzLmRpYWxvZ0Fycm93U2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3BPdXRwdXRGb3JtYXQgPT09ICdoZXgnICYmIGNwQWxwaGFDaGFubmVsICE9PSAnYWx3YXlzJyAmJiBjcEFscGhhQ2hhbm5lbCAhPT0gJ2hleDgnKSB7XG4gICAgICAgIHRoaXMuY3BBbHBoYUNoYW5uZWwgPSAnZGlzYWJsZWQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0aWFsQ29sb3IoY29sb3I6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbENvbG9yID0gY29sb3I7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJlc2V0Q29uZmlnKGNwUHJlc2V0TGFiZWw6IHN0cmluZywgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5jcFByZXNldExhYmVsID0gY3BQcmVzZXRMYWJlbDtcbiAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gY3BQcmVzZXRDb2xvcnM7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sb3JUb2dnbGUoY29sb3JEcm9wRW5hYmxlZDogYm9vbGVhbik6dm9pZHtcbiAgICB0aGlzLmNvbG9yVG9nZ2xlID0gY29sb3JEcm9wRW5hYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2xvckZyb21TdHJpbmcodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbiA9IHRydWUsIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBsZXQgaHN2YTogSHN2YTtcblxuICAgIGlmICh0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnYWx3YXlzJyB8fCB0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnaGV4OCcpIHtcbiAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCB0cnVlKTtcblxuICAgICAgaWYgKCFoc3ZhICYmICF0aGlzLmhzdmEpIHtcbiAgICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodmFsdWUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodmFsdWUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoIWhzdmEgJiYgIXRoaXMuaHN2YSkge1xuICAgICAgaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodGhpcy5mYWxsYmFja0NvbG9yLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKGhzdmEpIHtcbiAgICAgIHRoaXMuaHN2YSA9IGhzdmE7XG5cbiAgICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKGVtaXQsIHVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICB0aGlzLnNldERpYWxvZ1Bvc2l0aW9uKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSAhPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkRyYWdFbmQoc2xpZGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckRyYWdFbmQoeyBzbGlkZXI6IHNsaWRlciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3IgfSk7XG4gIH1cblxuICBwdWJsaWMgb25EcmFnU3RhcnQoc2xpZGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckRyYWdTdGFydCh7IHNsaWRlcjogc2xpZGVyLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvciB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0lFMTAgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgPT09ICdwb3B1cCcgJiZcbiAgICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCAmJlxuICAgICAgICAhdGhpcy5pc0Rlc2NlbmRhbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBldmVudC50YXJnZXQpICYmXG4gICAgICAgIHRoaXMuY3BJZ25vcmVkRWxlbWVudHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0gPT09IGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgIGlmICghdGhpcy5jcFNhdmVDbGlja091dHNpZGUpIHtcbiAgICAgICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcodGhpcy5pbml0aWFsQ29sb3IsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLmluaXRpYWxDb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkFjY2VwdENvbG9yKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAncG9wdXAnKSB7XG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdXRwdXRDb2xvcikge1xuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvclNlbGVjdGVkKHRoaXMub3V0cHV0Q29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNhbmNlbENvbG9yKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5zZXRDb2xvckZyb21TdHJpbmcodGhpcy5pbml0aWFsQ29sb3IsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAncG9wdXAnKSB7XG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2hhbmdlZCh0aGlzLmluaXRpYWxDb2xvciwgdHJ1ZSk7XG5cbiAgICAgIHRoaXMuY2xvc2VDb2xvclBpY2tlcigpO1xuICAgIH1cblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDYW5jZWxlZCgpO1xuICB9XG5cbiAgcHVibGljIG9uRm9ybWF0VG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybWF0ID0gKHRoaXMuZm9ybWF0ICsgMSkgJSAzO1xuICB9XG5cbiAgcHVibGljIG9uQ29sb3JDaGFuZ2UodmFsdWU6IHtzOiBudW1iZXIsIHY6IG51bWJlciwgcmdYOiBudW1iZXIsIHJnWTogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5zID0gdmFsdWUucyAvIHZhbHVlLnJnWDtcbiAgICB0aGlzLmhzdmEudiA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1k7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnbGlnaHRuZXNzJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEudixcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnc2F0dXJhdGlvbicsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLnMsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uSHVlQ2hhbmdlKHZhbHVlOiB7djogbnVtYmVyLCByZ1g6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEuaCA9IHZhbHVlLnYgLyB2YWx1ZS5yZ1g7XG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnNsaWRlckNoYW5nZWQoe1xuICAgICAgc2xpZGVyOiAnaHVlJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuaCxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25BbHBoYUNoYW5nZSh2YWx1ZToge3Y6IG51bWJlciwgcmdYOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLmEgPSB2YWx1ZS52IC8gdmFsdWUucmdYO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ2FscGhhJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuYSxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25IZXhJbnB1dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZVswXSAhPT0gJyMnKSB7XG4gICAgICAgIHZhbHVlID0gJyMnICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHZhbHVlLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgICAgaW5wdXQ6ICdoZXgnLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZWRJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcblxuICAgIHJnYmEuciA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7aW5wdXQ6ICdyZWQnLCB2YWx1ZTogcmdiYS5yLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvcn0pO1xuICB9XG5cbiAgcHVibGljIG9uQmx1ZUlucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpO1xuXG4gICAgcmdiYS5iID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hzdmEocmdiYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtpbnB1dDogJ2JsdWUnLCB2YWx1ZTogcmdiYS5iLCBjb2xvcjogdGhpcy5vdXRwdXRDb2xvcn0pO1xuICB9XG5cbiAgcHVibGljIG9uR3JlZW5JbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcblxuICAgIHJnYmEuZyA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2dyZWVuJyxcbiAgICAgIHZhbHVlOiByZ2JhLmcsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWxwaGFJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEuYSA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnYWxwaGEnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5hLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkh1ZUlucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSkge1xuICAgIHRoaXMuaHN2YS5oID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2h1ZScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmgsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTGlnaHRuZXNzSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgaHNsYSA9IHRoaXMuc2VydmljZS5oc3ZhMmhzbGEodGhpcy5oc3ZhKTtcblxuICAgIGhzbGEubCA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5oc2xhMmhzdmEoaHNsYSk7XG5cbiAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuaW5wdXRDaGFuZ2VkKHtcbiAgICAgIGlucHV0OiAnbGlnaHRuZXNzJyxcbiAgICAgIHZhbHVlOiBoc2xhLmwsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU2F0dXJhdGlvbklucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSk7XG5cbiAgICBoc2xhLnMgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UuaHNsYTJoc3ZhKGhzbGEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ3NhdHVyYXRpb24nLFxuICAgICAgdmFsdWU6IGhzbGEucyxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25BZGRQcmVzZXRDb2xvcihldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoIXRoaXMuY3BQcmVzZXRDb2xvcnMuZmlsdGVyKChjb2xvcikgPT4gKGNvbG9yID09PSB2YWx1ZSkpLmxlbmd0aCkge1xuICAgICAgdGhpcy5jcFByZXNldENvbG9ycyA9IHRoaXMuY3BQcmVzZXRDb2xvcnMuY29uY2F0KHZhbHVlKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5wcmVzZXRDb2xvcnNDaGFuZ2VkKHRoaXMuY3BQcmVzZXRDb2xvcnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlbW92ZVByZXNldENvbG9yKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSB0aGlzLmNwUHJlc2V0Q29sb3JzLmZpbHRlcigoY29sb3IpID0+IChjb2xvciAhPT0gdmFsdWUpKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UucHJlc2V0Q29sb3JzQ2hhbmdlZCh0aGlzLmNwUHJlc2V0Q29sb3JzKTtcbiAgfVxuXG4gIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgc3RhdHVzXG5cbiAgcHJpdmF0ZSBvcGVuQ29sb3JQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNob3cpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2V0RGlhbG9nUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sIDApO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnRvZ2dsZSh0cnVlKTtcblxuICAgICAgaWYgKCF0aGlzLmlzSUUxMCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMubGlzdGVuZXJSZXNpemUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VDb2xvclBpY2tlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93KSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS50b2dnbGUoZmFsc2UpO1xuXG4gICAgICBpZiAoIXRoaXMuaXNJRTEwKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubGlzdGVuZXJNb3VzZURvd24pO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5saXN0ZW5lclJlc2l6ZSk7XG5cbiAgICAgIGlmICghdGhpcy5jZFJlZlsnZGVzdHJveWVkJ10pIHtcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2xvclBpY2tlcihlbWl0OiBib29sZWFuID0gdHJ1ZSwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlckRpbU1heCkge1xuICAgICAgY29uc3QgbGFzdE91dHB1dCA9IHRoaXMub3V0cHV0Q29sb3I7XG5cbiAgICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSk7XG4gICAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmRlbm9ybWFsaXplUkdCQSh0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpKTtcblxuICAgICAgY29uc3QgaHVlID0gdGhpcy5zZXJ2aWNlLmRlbm9ybWFsaXplUkdCQSh0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYShuZXcgSHN2YSh0aGlzLnNsaWRlckggfHwgdGhpcy5oc3ZhLmgsIDEsIDEsIDEpKSk7XG5cbiAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgdGhpcy5oc2xhVGV4dCA9IG5ldyBIc2xhKE1hdGgucm91bmQoKGhzbGEuaCkgKiAzNjApLCBNYXRoLnJvdW5kKGhzbGEucyAqIDEwMCksIE1hdGgucm91bmQoaHNsYS5sICogMTAwKSxcbiAgICAgICAgICBNYXRoLnJvdW5kKGhzbGEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIHRoaXMucmdiYVRleHQgPSBuZXcgUmdiYShyZ2JhLnIsIHJnYmEuZywgcmdiYS5iLCBNYXRoLnJvdW5kKHJnYmEuYSAqIDEwMCkgLyAxMDApO1xuXG4gICAgICAgIGNvbnN0IGFsbG93SGV4OCA9IHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdhbHdheXMnIHx8IHRoaXMuY3BBbHBoYUNoYW5uZWwgPT09ICdoZXg4JztcblxuICAgICAgICB0aGlzLmhleFRleHQgPSB0aGlzLnNlcnZpY2UucmdiYVRvSGV4KHJnYmEsIGFsbG93SGV4OCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaHVlU2xpZGVyQ29sb3IgPSAncmdiKCcgKyBodWUuciArICcsJyArIGh1ZS5nICsgJywnICsgaHVlLmIgKyAnKSc7XG4gICAgICB0aGlzLmFscGhhU2xpZGVyQ29sb3IgPSAncmdiKCcgKyByZ2JhLnIgKyAnLCcgKyByZ2JhLmcgKyAnLCcgKyByZ2JhLmIgKyAnKSc7XG5cbiAgICAgIHRoaXMub3V0cHV0Q29sb3IgPSB0aGlzLnNlcnZpY2Uub3V0cHV0Rm9ybWF0KHRoaXMuaHN2YSwgdGhpcy5jcE91dHB1dEZvcm1hdCwgdGhpcy5jcEFscGhhQ2hhbm5lbCk7XG4gICAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSB0aGlzLnNlcnZpY2Uub3V0cHV0Rm9ybWF0KHRoaXMuaHN2YSwgJ3JnYmEnLCBudWxsKTtcblxuICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyUG9zaXRpb24oXG4gICAgICAgICh0aGlzLnNsaWRlckggfHwgdGhpcy5oc3ZhLmgpICogdGhpcy5zbGlkZXJEaW1NYXguaCAtIDgsXG4gICAgICAgIHRoaXMuaHN2YS5zICogdGhpcy5zbGlkZXJEaW1NYXgucyAtIDgsXG4gICAgICAgICgxIC0gdGhpcy5oc3ZhLnYpICogdGhpcy5zbGlkZXJEaW1NYXgudiAtIDgsXG4gICAgICAgIHRoaXMuaHN2YS5hICogdGhpcy5zbGlkZXJEaW1NYXguYSAtIDhcbiAgICAgICk7XG5cbiAgICAgIGlmIChlbWl0ICYmIGxhc3RPdXRwdXQgIT09IHRoaXMub3V0cHV0Q29sb3IpIHtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5vdXRwdXRDb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZSBoZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgY29sb3IgcGlja2VyIGRpYWxvZyBwb3NpdGlvbmluZ1xuXG4gIHByaXZhdGUgc2V0RGlhbG9nUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpYWxvZ0hlaWdodCA9IHRoaXMuZGlhbG9nRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgbGV0IHBvc2l0aW9uID0gJ3N0YXRpYycsIHRyYW5zZm9ybSA9ICcnLCBzdHlsZSA9IG51bGw7XG5cbiAgICAgIGxldCBwYXJlbnROb2RlOiBhbnkgPSBudWxsLCB0cmFuc2Zvcm1Ob2RlOiBhbnkgPSBudWxsO1xuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZGlyZWN0aXZlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAgIHdoaWxlIChub2RlICE9PSBudWxsICYmIG5vZGUudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIHBvc2l0aW9uID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcbiAgICAgICAgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJyk7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnICYmIHRyYW5zZm9ybU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1Ob2RlID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0cmFuc2Zvcm1Ob2RlO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib3hEaXJlY3RpdmUgPSB0aGlzLmNyZWF0ZUJveCh0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgKHBvc2l0aW9uICE9PSAnZml4ZWQnKSk7XG5cbiAgICAgIGlmICh0aGlzLnVzZVJvb3RWaWV3Q29udGFpbmVyIHx8IChwb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJiAhcGFyZW50Tm9kZSkpIHtcbiAgICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wO1xuICAgICAgICB0aGlzLmxlZnQgPSBib3hEaXJlY3RpdmUubGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib3hQYXJlbnQgPSB0aGlzLmNyZWF0ZUJveChwYXJlbnROb2RlLCAocG9zaXRpb24gIT09ICdmaXhlZCcpKTtcblxuICAgICAgICB0aGlzLnRvcCA9IGJveERpcmVjdGl2ZS50b3AgLSBib3hQYXJlbnQudG9wO1xuICAgICAgICB0aGlzLmxlZnQgPSBib3hEaXJlY3RpdmUubGVmdCAtIGJveFBhcmVudC5sZWZ0O1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICogdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgICAgdGhpcy5sZWZ0IC09IHRoaXMuY3BXaWR0aCArIHRoaXMuZGlhbG9nQXJyb3dTaXplIC0gMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jcFBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICB0aGlzLmFycm93VG9wID0gZGlhbG9nSGVpZ2h0IC0gMTtcblxuICAgICAgICB0aGlzLnRvcCAtPSBkaWFsb2dIZWlnaHQgKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZTtcbiAgICAgICAgdGhpcy5sZWZ0ICs9IHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAqIGJveERpcmVjdGl2ZS53aWR0aCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCArIHRoaXMuZGlhbG9nQXJyb3dTaXplO1xuICAgICAgICB0aGlzLmxlZnQgKz0gdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwICogYm94RGlyZWN0aXZlLndpZHRoIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKiB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgICB0aGlzLmxlZnQgKz0gYm94RGlyZWN0aXZlLndpZHRoICsgdGhpcy5kaWFsb2dBcnJvd1NpemUgLSAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgcG9zaXRpb25pbmcgYW5kIG9wZW5pbmdcblxuICBwcml2YXRlIGNyZWF0ZUJveChlbGVtZW50OiBhbnksIG9mZnNldDogYm9vbGVhbik6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAob2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogMCksXG4gICAgICBsZWZ0OiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyAob2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogMCksXG4gICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBpc0Rlc2NlbmRhbnQocGFyZW50OiBhbnksIGNoaWxkOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgbm9kZTogYW55ID0gY2hpbGQucGFyZW50Tm9kZTtcblxuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdG9yLCBSZWZsZWN0aXZlSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb2xvci1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2NvbG9yUGlja2VyXScsXG4gIGV4cG9ydEFzOiAnbmd4Q29sb3JQaWNrZXInXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRpYWxvZzogYW55O1xuXG4gIHByaXZhdGUgZGlhbG9nQ3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGlnbm9yZUNoYW5nZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGNtcFJlZjogQ29tcG9uZW50UmVmPENvbG9yUGlja2VyQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjb2xvclBpY2tlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNwV2lkdGg6IHN0cmluZyA9ICcyMzBweCc7XG4gIEBJbnB1dCgpIGNwSGVpZ2h0OiBzdHJpbmcgPSAnYXV0byc7XG5cbiAgQElucHV0KCkgY3BUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3JUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcElnbm9yZWRFbGVtZW50czogYW55ID0gW107XG5cbiAgQElucHV0KCkgY3BEaXNhYmxlSW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcEFscGhhQ2hhbm5lbDogc3RyaW5nID0gJ2VuYWJsZWQnO1xuICBASW5wdXQoKSBjcE91dHB1dEZvcm1hdDogc3RyaW5nID0gJ2hleCc7XG5cbiAgQElucHV0KCkgY3BGYWxsYmFja0NvbG9yOiBzdHJpbmcgPSAnI2ZmZic7XG5cbiAgQElucHV0KCkgY3BEaWFsb2dEaXNwbGF5OiBzdHJpbmcgPSAncG9wdXAnO1xuXG4gIEBJbnB1dCgpIGNwU2F2ZUNsaWNrT3V0c2lkZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgY3BVc2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNwUG9zaXRpb246IHN0cmluZyA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIGNwUG9zaXRpb25PZmZzZXQ6IHN0cmluZyA9ICcwJSc7XG4gIEBJbnB1dCgpIGNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjcE9LQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNwT0tCdXR0b25UZXh0OiBzdHJpbmcgPSAnT0snO1xuICBASW5wdXQoKSBjcE9LQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1vay1idXR0b24tY2xhc3MnO1xuXG4gIEBJbnB1dCgpIGNwQ2FuY2VsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nID0gJ0NhbmNlbCc7XG4gIEBJbnB1dCgpIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1jYW5jZWwtYnV0dG9uLWNsYXNzJztcblxuICBASW5wdXQoKSBjcFByZXNldExhYmVsOiBzdHJpbmcgPSAnUHJlc2V0IGNvbG9ycyc7XG4gIEBJbnB1dCgpIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlciA9IDY7XG5cbiAgQElucHV0KCkgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZyA9ICdObyBjb2xvcnMgYWRkZWQnO1xuICBASW5wdXQoKSBjcFByZXNldEVtcHR5TWVzc2FnZUNsYXNzOiBzdHJpbmcgPSAncHJlc2V0LWVtcHR5LW1lc3NhZ2UnO1xuXG4gIEBJbnB1dCgpIGNwQWRkQ29sb3JCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY3BBZGRDb2xvckJ1dHRvblRleHQ6IHN0cmluZyA9ICdBZGQgY29sb3InO1xuICBASW5wdXQoKSBjcEFkZENvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1hZGQtY29sb3ItYnV0dG9uLWNsYXNzJztcblxuICBASW5wdXQoKSBjcFJlbW92ZUNvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdjcC1yZW1vdmUtY29sb3ItYnV0dG9uLWNsYXNzJztcblxuICBAT3V0cHV0KCkgY3BJbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcblxuICBAT3V0cHV0KCkgY3BUb2dnbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjcFNsaWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcbiAgQE91dHB1dCgpIGNwU2xpZGVyRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQE91dHB1dCgpIGNwU2xpZGVyRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlck9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuXG4gIEBPdXRwdXQoKSBjb2xvclBpY2tlckNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPih0cnVlKTtcbiAgQE91dHB1dCgpIGNvbG9yUGlja2VyU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuICBAT3V0cHV0KCkgY29sb3JQaWNrZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oZmFsc2UpO1xuXG4gIEBPdXRwdXQoKSBjcFByZXNldENvbG9yc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIGhhbmRsZUNsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Rm9jdXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSkgaGFuZGxlRm9jdXMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRGb2N1cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBoYW5kbGVJbnB1dChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3NlcnZpY2U6IENvbG9yUGlja2VyU2VydmljZSkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbXBSZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNwVG9nZ2xlKSB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgY2hhbmdlcy5jcFRvZ2dsZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nICYmICFjaGFuZ2VzLmNwVG9nZ2xlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZURpYWxvZygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihjaGFuZ2VzLmNvbG9yVG9nZ2xlKXtcbiAgICAgIHRoaXMuZGlhbG9nLnNldENvbG9yVG9nZ2xlKGNoYW5nZXMuY29sb3JUb2dnbGUuY3VycmVudFZhbHVlKVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jb2xvclBpY2tlcikge1xuICAgICAgaWYgKHRoaXMuZGlhbG9nICYmICF0aGlzLmlnbm9yZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgICAgIHRoaXMuZGlhbG9nLnNldEluaXRpYWxDb2xvcihjaGFuZ2VzLmNvbG9yUGlja2VyLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpYWxvZy5zZXRDb2xvckZyb21TdHJpbmcoY2hhbmdlcy5jb2xvclBpY2tlci5jdXJyZW50VmFsdWUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pZ25vcmVDaGFuZ2VzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuY3BQcmVzZXRMYWJlbCB8fCBjaGFuZ2VzLmNwUHJlc2V0Q29sb3JzKSB7XG4gICAgICBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cuc2V0UHJlc2V0Q29uZmlnKHRoaXMuY3BQcmVzZXRMYWJlbCwgdGhpcy5jcFByZXNldENvbG9ycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZ0NyZWF0ZWQpIHtcbiAgICAgIGxldCB2Y1JlZiA9IHRoaXMudmNSZWY7XG5cbiAgICAgIHRoaXMuZGlhbG9nQ3JlYXRlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmNwVXNlUm9vdFZpZXdDb250YWluZXIgJiYgdGhpcy5jcERpYWxvZ0Rpc3BsYXkgIT09ICdpbmxpbmUnKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzT2ZSb290Q29tcG9uZW50ID0gdGhpcy5hcHBSZWYuY29tcG9uZW50VHlwZXNbMF07XG4gICAgICAgIGNvbnN0IGFwcEluc3RhbmNlID0gdGhpcy5pbmplY3Rvci5nZXQoY2xhc3NPZlJvb3RDb21wb25lbnQpO1xuXG4gICAgICAgIHZjUmVmID0gYXBwSW5zdGFuY2UudmNSZWYgfHwgYXBwSW5zdGFuY2Uudmlld0NvbnRhaW5lclJlZiB8fCB0aGlzLnZjUmVmO1xuXG4gICAgICAgIGlmICh2Y1JlZiA9PT0gdGhpcy52Y1JlZikge1xuICAgICAgICAgIGNvbnNvbGUud2FybignWW91IGFyZSB1c2luZyBjcFVzZVJvb3RWaWV3Q29udGFpbmVyLCAnICtcbiAgICAgICAgICAgICdidXQgdGhlIHJvb3QgY29tcG9uZW50IGlzIG5vdCBleHBvc2luZyB2aWV3Q29udGFpbmVyUmVmIScgK1xuICAgICAgICAgICAgJ1BsZWFzZSBleHBvc2UgaXQgYnkgYWRkaW5nIFxcJ3B1YmxpYyB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxcJyB0byB0aGUgY29uc3RydWN0b3IuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcEZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb2xvclBpY2tlckNvbXBvbmVudCk7XG4gICAgICBjb25zdCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoW10sIHZjUmVmLnBhcmVudEluamVjdG9yKTtcblxuICAgICAgdGhpcy5jbXBSZWYgPSB2Y1JlZi5jcmVhdGVDb21wb25lbnQoY29tcEZhY3RvcnksIDAsIGluamVjdG9yLCBbXSk7XG5cbiAgICAgIHRoaXMuY21wUmVmLmluc3RhbmNlLnNldHVwRGlhbG9nKFxuICAgICAgICB0aGlzLmNvbG9yVG9nZ2xlLFxuICAgICAgICB0aGlzLCB0aGlzLmVsUmVmLCB0aGlzLmNvbG9yUGlja2VyLFxuICAgICAgICB0aGlzLmNwV2lkdGgsIHRoaXMuY3BIZWlnaHQsIHRoaXMuY3BEaWFsb2dEaXNwbGF5LCB0aGlzLmNwRmFsbGJhY2tDb2xvcixcbiAgICAgICAgdGhpcy5jcEFscGhhQ2hhbm5lbCwgdGhpcy5jcE91dHB1dEZvcm1hdCwgdGhpcy5jcERpc2FibGVJbnB1dCxcbiAgICAgICAgdGhpcy5jcElnbm9yZWRFbGVtZW50cywgdGhpcy5jcFNhdmVDbGlja091dHNpZGUsIHRoaXMuY3BVc2VSb290Vmlld0NvbnRhaW5lcixcbiAgICAgICAgdGhpcy5jcFBvc2l0aW9uLCB0aGlzLmNwUG9zaXRpb25PZmZzZXQsIHRoaXMuY3BQb3NpdGlvblJlbGF0aXZlVG9BcnJvdyxcbiAgICAgICAgdGhpcy5jcFByZXNldExhYmVsLCB0aGlzLmNwUHJlc2V0Q29sb3JzLCB0aGlzLmNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoLFxuICAgICAgICB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlLCB0aGlzLmNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3MsXG4gICAgICAgIHRoaXMuY3BPS0J1dHRvbiwgdGhpcy5jcE9LQnV0dG9uQ2xhc3MsIHRoaXMuY3BPS0J1dHRvblRleHQsXG4gICAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b24sIHRoaXMuY3BDYW5jZWxCdXR0b25DbGFzcywgdGhpcy5jcENhbmNlbEJ1dHRvblRleHQsXG4gICAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbiwgdGhpcy5jcEFkZENvbG9yQnV0dG9uQ2xhc3MsIHRoaXMuY3BBZGRDb2xvckJ1dHRvblRleHQsXG4gICAgICAgIHRoaXMuY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzKTtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0aGlzLmNtcFJlZi5pbnN0YW5jZTtcblxuICAgICAgICBpZiAodGhpcy52Y1JlZiAhPT0gdmNSZWYpIHtcbiAgICAgICAgICB0aGlzLmNtcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICB0aGlzLmRpYWxvZy5vcGVuRGlhbG9nKHRoaXMuY29sb3JQaWNrZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaWFsb2cpIHtcbiAgICAgIHRoaXMuZGlhbG9nLmNsb3NlRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY3BUb2dnbGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJPcGVuLmVtaXQodGhpcy5jb2xvclBpY2tlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDbG9zZS5lbWl0KHRoaXMuY29sb3JQaWNrZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb2xvckNoYW5nZWQodmFsdWU6IHN0cmluZywgaWdub3JlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuaWdub3JlQ2hhbmdlcyA9IGlnbm9yZTtcblxuICAgIHRoaXMuY29sb3JQaWNrZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgY29sb3JDYW5jZWxlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyQ2FuY2VsLmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xvclNlbGVjdGVkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyU2VsZWN0LmVtaXQodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGlucHV0Rm9jdXMoKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLmNwSWdub3JlZEVsZW1lbnRzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtID09PSBlbGVtZW50KTtcblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhaWdub3JlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMub3BlbkRpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbnB1dENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICB0aGlzLmRpYWxvZy5zZXRDb2xvckZyb21TdHJpbmcodmFsdWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yUGlja2VyID0gdmFsdWU7XG5cbiAgICAgIHRoaXMuY29sb3JQaWNrZXJDaGFuZ2UuZW1pdCh0aGlzLmNvbG9yUGlja2VyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5wdXRDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNwSW5wdXRDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgc2xpZGVyQ2hhbmdlZChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jcFNsaWRlckNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlkZXJEcmFnRW5kKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNwU2xpZGVyRHJhZ0VuZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlkZXJEcmFnU3RhcnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY3BTbGlkZXJEcmFnU3RhcnQuZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgcHJlc2V0Q29sb3JzQ2hhbmdlZCh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLmNwUHJlc2V0Q29sb3JzQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3JldmVyc2UnXG59KVxuZXhwb3J0IGNsYXNzIFJldmVyc2VQaXBlIHtcbiAgdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERuZE1vZHVsZSB9IGZyb20gJ25nMi1kbmQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyRGlyZWN0aXZlLCBUZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xvcnBpY2tlci9oZWxwZXJzJztcbmltcG9ydCB7IENvbG9yUGlja2VyU2VydmljZSB9IGZyb20gJy4vY29sb3JwaWNrZXIvY29sb3ItcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sb3JXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9jb2xvci13aWRnZXQvY29sb3Itd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29sb3ItbGlzdC9jb2xvci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWNvbG9yZHJvcC9zZWFyY2gtY29sb3Jkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkZhYk1vZHVsZSwgU2VtVWlCdXR0b25Nb2R1bGUsIFNlbVVpQnV0dG9uRG5kTW9kdWxlIH0gZnJvbSAnQGZyb250ci9zZW0tdWknO1xuaW1wb3J0IHsgUmV2ZXJzZVBpcGUgfSBmcm9tICcuL3NlbS1hcnJheS1yZXZlcnNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTZW1VaUJ1dHRvbkZhYk1vZHVsZSxcbiAgICBTZW1VaUJ1dHRvbk1vZHVsZSxcbiAgICBTZW1VaUJ1dHRvbkRuZE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERuZE1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbG9yV2lkZ2V0Q29tcG9uZW50LFxuICAgIFNlYXJjaENvbG9yZHJvcENvbXBvbmVudCxcbiAgICBDb2xvckxpc3RDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJEaXJlY3RpdmUsXG4gICAgVGV4dERpcmVjdGl2ZSxcbiAgICBTbGlkZXJEaXJlY3RpdmUsXG4gICAgUmV2ZXJzZVBpcGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbIENvbG9yUGlja2VyQ29tcG9uZW50IF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb2xvcldpZGdldENvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckRpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFsgQ29sb3JQaWNrZXJTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtQ29sb3JzTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7Ozs7SUErQ0UsWUFBbUQsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7aUNBRzNCLElBQUksWUFBWSxFQUFPO0tBSFM7Ozs7O0lBVnZFLElBQ0ksaUJBQWlCLENBQUMsU0FBYztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQTtRQUM3QixJQUFHLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzVCO1FBQ0QsSUFBRyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDO1NBQ3BEO0tBQ0Y7Ozs7O0lBS0Qsa0JBQWtCLENBQUMsS0FBaUI7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBWTtRQUN0QixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7YUFDL0Q7U0FDRjtLQUNGOzs7WUFyREYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUJYO2FBQ0E7Ozs7NENBaUJlLE1BQU0sU0FBQyxXQUFXOzs7K0JBZi9CLEtBQUs7MkJBQ0wsS0FBSztnQ0FJTCxLQUFLLFNBQUMsbUJBQW1CO2dDQVl6QixNQUFNOzs7Ozs7O0FDakRUO0lBbUNFO3lCQUx5QyxJQUFJLFlBQVksRUFBTzttQ0FDYixJQUFJLFlBQVksRUFBTztLQUkxRDs7Ozs7SUFWaEIsSUFDSSxRQUFRLENBQUMsS0FBVTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7S0FDMUI7Ozs7O0lBUUQsUUFBUSxDQUFDLEtBQVU7O1FBQ2pCLE1BQU0sUUFBUSxHQUFRO1lBQ3BCLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ25CLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFDRCxXQUFXLENBQUMsS0FBVTs7UUFDcEIsTUFBTSxLQUFLLEdBQUcsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RDOzs7O0lBQ0QsUUFBUSxNQUFLOzs7WUE5Q2QsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztDQWVYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2pDOzs7Ozt1QkFHRSxLQUFLLFNBQUMsVUFBVTt3QkFLaEIsTUFBTTtrQ0FDTixNQUFNOzs7Ozs7O0FDL0JUOzs7O0lBdURFLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7eUJBTGIsQ0FBQyxFQUFFLENBQUM7NkJBR0MsSUFBSTtLQUVTOzs7OztJQVQxQyxJQUNJLFFBQVEsQ0FBQyxNQUFrQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztLQUN6Qjs7Ozs7SUFRRCxvQkFBb0IsQ0FBQyxhQUFrQjs7S0FFdEM7Ozs7SUFDRCxlQUFlOztLQUVkOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFTO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLENBQUE7S0FDOUQ7OztZQTdESCxTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztnQkFFckMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQTFDQyxVQUFVOzs7dUJBNENULEtBQUssU0FBQyxRQUFROzs7Ozs7O0FDOUNqQjs7O0FBRUE7O0lBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRVosSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEVBQUU7UUFDcEMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDeEM7O0lBRUQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVqQyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7O1FBRVosT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDcEU7O0lBR0QsT0FBTyxLQUFLLENBQUM7Q0FDZDtBQUtEOzt3QkFJdUIsSUFBSSxZQUFZLEVBQU87Ozs7OztJQUVULFdBQVcsQ0FBQyxLQUFVOztRQUN2RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqQyxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO2FBQU07O1lBQ0wsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNqRDtTQUNGO0tBQ0Y7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7YUFDbkI7OztpQkFFRSxLQUFLO21CQUNMLEtBQUs7dUJBRUwsTUFBTTswQkFFTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7SUF3Q2pDLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7dUJBYmpCLElBQUksWUFBWSxFQUFFO3lCQUNoQixJQUFJLFlBQVksRUFBRTt3QkFFbkIsSUFBSSxZQUFZLEVBQU87UUFXMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEtBQVUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkM7Ozs7O0lBWnNDLFNBQVMsQ0FBQyxLQUFVO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkI7Ozs7O0lBRXVDLFVBQVUsQ0FBQyxLQUFVO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkI7Ozs7O0lBUU8sSUFBSSxDQUFDLEtBQVU7UUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztJQUdoQixLQUFLLENBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0lBR2hCLElBQUk7UUFDVixRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RCxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDOzs7Ozs7SUFHZCxJQUFJLENBQUMsS0FBVTs7UUFDckIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7UUFFbEUsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRWpGLE9BQU8sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Ozs7O0lBRzVDLElBQUksQ0FBQyxLQUFVOztRQUNyQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUVsRSxNQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFakYsT0FBTyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDOzs7Ozs7SUFHM0MsU0FBUyxDQUFDLEtBQVU7O1FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7UUFDbkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDOztRQUVyRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzs7UUFDekQsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUN6RjthQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdEQ7YUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEOzs7O1lBdEZKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQTlDOEQsVUFBVTs7O2tCQW1EdEUsS0FBSztrQkFDTCxLQUFLO3FCQUVMLEtBQUs7c0JBRUwsTUFBTTt3QkFDTixNQUFNO3VCQUVOLE1BQU07d0JBRU4sWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFJcEMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7O0lBc0V0QyxZQUFtQixDQUFTLEVBQVMsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTO1FBQS9ELE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7S0FBSTtDQUN2Rjs7Ozs7Ozs7SUFHQyxZQUFtQixDQUFTLEVBQVMsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTO1FBQS9ELE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7S0FBSTtDQUN2Rjs7Ozs7O0FDNUlEOzs7Ozs7O0lBQ0UsWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUztRQUEvRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0tBQUk7Q0FDdkY7Ozs7Ozs7O0lBR0MsWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUztRQUEvRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0tBQUk7Q0FDdkY7Ozs7Ozs7O0lBR0MsWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUztRQUEvRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0tBQUk7Q0FDdkY7Ozs7Ozs7O0lBR0MsWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUztRQUEvRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0tBQUk7Q0FDdkY7Ozs7OztBQ2REO0lBT0U7c0JBRmlCLElBQUk7S0FFTDs7Ozs7SUFFVCxTQUFTLENBQUMsTUFBVztRQUMxQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEtBQUssUUFBUSxFQUFFO1lBQ3JGLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOzs7Ozs7SUFHaEIsU0FBUyxDQUFDLElBQVU7O1FBQ3pCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQXFDOztRQUFyRCxNQUFrQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBeUI7O1FBQXJELE1BQThCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFhOztRQUFyRCxNQUEwQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3QjthQUFNOztZQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTFCLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3RDs7Ozs7O0lBR0ksU0FBUyxDQUFDLElBQVU7O1FBQ3pCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBMEI7O1FBQXZELE1BQStCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBQ3ZELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBMEI7O1FBQXZELE1BQStCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1gsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3QjthQUFNOztZQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVoRCxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0M7Ozs7OztJQUdJLFVBQVUsQ0FBQyxJQUFVOztRQUMxQixJQUFJLENBQUMsQ0FBK0I7O1FBQXBDLElBQWUsQ0FBQyxDQUFvQjs7UUFBcEMsSUFBMEIsQ0FBQyxDQUFTOztRQUVwQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFxQzs7UUFBckQsTUFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQXlCOztRQUFyRCxNQUE4QixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBYTs7UUFBckQsTUFBMEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O1FBRXJELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztRQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRWhDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDWCxLQUFLLENBQUM7Z0JBQ0osQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLENBQUM7Z0JBQ0osQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLENBQUM7Z0JBQ0osQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLENBQUM7Z0JBQ0osQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLENBQUM7Z0JBQ0osQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLENBQUM7Z0JBQ0osQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU07U0FDVDtRQUVELE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUd2QixVQUFVLENBQUMsSUFBVTs7UUFDMUIsTUFBTSxDQUFDLEdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdCO2FBQU07O1lBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztZQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVyQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdCOzs7Ozs7SUFHSSxVQUFVLENBQUMsSUFBVTs7UUFDMUIsSUFBSSxDQUFDLENBQW9COztRQUF6QixJQUFlLENBQUMsQ0FBUzs7UUFFekIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUEwQjs7UUFBdkQsTUFBK0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFDdkQsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUEwQjs7UUFBdkQsTUFBK0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFFdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUEwQjs7UUFBdkQsTUFBK0IsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFFdkQsTUFBTSxDQUFDLEdBQVcsR0FBRyxDQUFnQjs7UUFBckMsTUFBdUIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFckMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUU5QixJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDZixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1A7YUFBTTtZQUNMLFFBQVEsR0FBRztnQkFDVCxLQUFLLENBQUM7b0JBQ0osQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEIsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixNQUFNO2FBQ1Q7WUFFRCxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ1I7UUFFRCxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBR3ZCLFNBQVMsQ0FBQyxJQUFVLEVBQUUsU0FBbUI7O1FBRTlDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdGLElBQUksU0FBUyxFQUFFO1lBQ2IsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JFOztRQUdELE9BQU8sR0FBRyxDQUFDOzs7Ozs7SUFHTixlQUFlLENBQUMsSUFBVTtRQUMvQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQUdqRyxZQUFZLENBQUMsY0FBc0IsRUFBRSxFQUFFLFlBQXFCLEtBQUs7O1FBQ3RFLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQztRQUV0QixXQUFXLEdBQUcsQ0FBQyxXQUFXLElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDOztRQUVoRCxNQUFNLGFBQWEsR0FBRztZQUNwQjtnQkFDRSxFQUFFLEVBQUUsMkZBQTJGO2dCQUMvRixLQUFLLEVBQUUsVUFBUyxVQUFlO29CQUM3QixPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFDakMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JFO2FBQ0YsRUFBRTtnQkFDRCxFQUFFLEVBQUUseUZBQXlGO2dCQUM3RixLQUFLLEVBQUUsVUFBUyxVQUFlO29CQUM3QixPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFDakMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JFO2FBQ0Y7U0FDRixDQUFDO1FBRUYsSUFBSSxTQUFTLEVBQUU7WUFDYixhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUNqQixFQUFFLEVBQUUscUVBQXFFO2dCQUN6RSxLQUFLLEVBQUUsVUFBUyxVQUFlO29CQUM3QixPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFDakMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQ2pDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2lCQUM5QzthQUNGLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUNqQixFQUFFLEVBQUUsb0RBQW9EO2dCQUN4RCxLQUFLLEVBQUUsVUFBUyxVQUFlO29CQUM3QixPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFDakMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQ2pDLENBQUMsQ0FBQyxDQUFDO2lCQUNOO2FBQ0YsRUFBRTtnQkFDRCxFQUFFLEVBQUUsMkNBQTJDO2dCQUMvQyxLQUFLLEVBQUUsVUFBUyxVQUFlO29CQUM3QixPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFDL0QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUNqRCxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQ2pELENBQUMsQ0FBQyxDQUFDO2lCQUNOO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxLQUFLLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRTtZQUMvQixJQUFJLGFBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUNyQyxNQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7O2dCQUVsQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBNEM7O2dCQUFyRixNQUEyQyxLQUFLLEdBQVEsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXJGLElBQUksS0FBSyxFQUFFO29CQUNULElBQUksS0FBSyxZQUFZLElBQUksRUFBRTt3QkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQy9CO3lCQUFNLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTt3QkFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzlCO29CQUVELE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDOzs7Ozs7OztJQUdQLFlBQVksQ0FBQyxJQUFVLEVBQUUsWUFBb0IsRUFBRSxZQUFvQjtRQUN4RSxRQUFRLFlBQVk7WUFDbEIsS0FBSyxNQUFNOztnQkFDVCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFFbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUU1RCxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksS0FBSyxRQUFRLEVBQUU7b0JBQzNDLE9BQU8sT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSTt3QkFDdkUsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNMLE9BQU8sTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUMxRTtZQUVILEtBQUssTUFBTTs7Z0JBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRXpELElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxLQUFLLFFBQVEsRUFBRTtvQkFDM0MsT0FBTyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHO3dCQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztpQkFDeEM7cUJBQU07b0JBQ0wsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQzVEO1lBRUg7O2dCQUNFLE1BQU0sU0FBUyxJQUFJLFlBQVksS0FBSyxRQUFRLElBQUksWUFBWSxLQUFLLE1BQU0sQ0FBQyxDQUFDO2dCQUV6RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDakY7Ozs7WUFwUEosVUFBVTs7Ozs7Ozs7O0FDSFg7Ozs7Ozs7SUFxZEUsWUFDd0MsVUFBZSxFQUM3QyxPQUEyQixLQUF3QixFQUFVLE9BQTJCO1FBRDFELGVBQVUsR0FBVixVQUFVLENBQUs7UUFDN0MsVUFBSyxHQUFMLEtBQUs7UUFBc0IsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtzQkF4RnhFLEtBQUs7K0JBb0JHLEVBQUU7aUNBQ0EsRUFBRTtvQ0FFRSxLQUFLO0tBaUV5RDs7OztJQUV0RyxRQUFRO1FBQ04sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFFN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDOztZQUMxRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7WUFFOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFakYsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDakI7aUJBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sRUFBRTtnQkFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDakI7WUFFRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxLQUFVLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0tBQ0Y7Ozs7SUFFRCxlQUFlO1FBRWIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7O1lBQzlELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7WUFDMUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBRTlELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRWpGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzVCO0tBRUY7Ozs7SUFDTSxRQUFROzs7Ozs7SUFDUixVQUFVLENBQUMsS0FBVSxFQUFFLE9BQWdCLElBQUk7UUFDaEQsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzthQUNuRTtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzthQUNuQjtZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVyQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7Ozs7O0lBR0ksV0FBVztRQUNoQixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdJLFdBQVcsQ0FDaEIsV0FBb0IsRUFDcEIsUUFBYSxFQUFFLFVBQXNCLEVBQUUsS0FBVSxFQUNqRCxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxlQUF1QixFQUFFLGVBQXVCLEVBQ25GLGNBQXNCLEVBQUUsY0FBc0IsRUFBRSxjQUF1QixFQUN2RSxpQkFBc0IsRUFBRSxrQkFBMkIsRUFBRSxzQkFBK0IsRUFDcEYsVUFBa0IsRUFBRSxnQkFBd0IsRUFBRSx5QkFBa0MsRUFDaEYsYUFBcUIsRUFBRSxjQUF3QixFQUFFLHVCQUErQixFQUNoRixvQkFBNEIsRUFBRSx5QkFBaUMsRUFDL0QsVUFBbUIsRUFBRSxlQUF1QixFQUFFLGNBQXNCLEVBQ3BFLGNBQXVCLEVBQUUsbUJBQTJCLEVBQUUsa0JBQTBCLEVBQ2hGLGdCQUF5QixFQUFFLHFCQUE2QixFQUFFLG9CQUE0QixFQUN0Rix3QkFBZ0M7UUFFaEMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU1QixJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRWxDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7WUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQztZQUV0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztZQUVyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztZQUV2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7WUFDM0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1lBRTdDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztZQUVuRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXZELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1lBRXZDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztZQUM3QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7WUFFL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLElBQUksTUFBTSxDQUFDO1lBRS9DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBRS9CLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBRXBELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztZQUN2RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7WUFDakQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO1lBRTNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztZQUN6QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7WUFDakQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1lBQ25ELElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztZQUV6RCxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7YUFDNUI7WUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssUUFBUSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQzthQUM1QjtZQUVELElBQUksY0FBYyxLQUFLLEtBQUssSUFBSSxjQUFjLEtBQUssUUFBUSxJQUFJLGNBQWMsS0FBSyxNQUFNLEVBQUU7Z0JBQ3hGLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO2FBQ2xDO1NBQ0Y7Ozs7OztJQUdJLGVBQWUsQ0FBQyxLQUFVO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O0lBR3JCLGVBQWUsQ0FBQyxhQUFxQixFQUFFLGNBQXdCO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDOzs7Ozs7SUFHaEMsY0FBYyxDQUFDLGdCQUF5QjtRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDOzs7Ozs7OztJQUcvQixrQkFBa0IsQ0FBQyxLQUFhLEVBQUUsT0FBZ0IsSUFBSSxFQUFFLFNBQWtCLElBQUk7O1FBQ25GLElBQUksSUFBSSxDQUFPO1FBRWYsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sRUFBRTtZQUN0RSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTlDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7YUFBTTtZQUNMLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFFakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUUzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDOzs7OztJQUdJLFFBQVE7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO2FBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFFBQVEsRUFBRTtZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6Qjs7Ozs7O0lBR0ksU0FBUyxDQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7SUFHN0UsV0FBVyxDQUFDLE1BQWM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7SUFHL0UsV0FBVyxDQUFDLEtBQWlCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssT0FBTztZQUNoRCxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhO1lBQ3ZELENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUNwRjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUVsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN4RDtZQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCOzs7Ozs7SUFHSSxhQUFhLENBQUMsS0FBWTtRQUMvQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLE9BQU8sRUFBRTtZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4RDs7Ozs7O0lBR0ksYUFBYSxDQUFDLEtBQVk7UUFDL0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxPQUFPLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTdELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDOzs7OztJQUdsQyxjQUFjO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQUcvQixhQUFhLENBQUMsS0FBdUQ7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUVsQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBQ25DLE1BQU0sRUFBRSxXQUFXO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDbkMsTUFBTSxFQUFFLFlBQVk7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDeEIsQ0FBQyxDQUFDOzs7Ozs7SUFHRSxXQUFXLENBQUMsS0FBK0I7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztZQUNuQyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3hCLENBQUMsQ0FBQzs7Ozs7O0lBR0UsYUFBYSxDQUFDLEtBQStCO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUVsQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBQ25DLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDeEIsQ0FBQyxDQUFDOzs7Ozs7SUFHRSxVQUFVLENBQUMsS0FBYTtRQUM3QixJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQzdCLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQztnQkFDbEMsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQ3hCLENBQUMsQ0FBQztTQUNKOzs7Ozs7SUFHSSxVQUFVLENBQUMsS0FBOEI7O1FBQzlDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHdkYsV0FBVyxDQUFDLEtBQThCOztRQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQzs7Ozs7O0lBR3hGLFlBQVksQ0FBQyxLQUE4Qjs7UUFDaEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO1lBQ2xDLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3hCLENBQUMsQ0FBQzs7Ozs7O0lBR0UsWUFBWSxDQUFDLEtBQThCO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO1lBQ2xDLEtBQUssRUFBRSxPQUFPO1lBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDeEIsQ0FBQyxDQUFDOzs7Ozs7SUFHRSxVQUFVLENBQUMsS0FBOEI7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQztZQUNsQyxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3hCLENBQUMsQ0FBQzs7Ozs7O0lBR0UsZ0JBQWdCLENBQUMsS0FBOEI7O1FBQ3BELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQztZQUNsQyxLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDeEIsQ0FBQyxDQUFDOzs7Ozs7SUFHRSxpQkFBaUIsQ0FBQyxLQUE4Qjs7UUFDckQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO1lBQ2xDLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztTQUN4QixDQUFDLENBQUM7Ozs7Ozs7SUFHRSxnQkFBZ0IsQ0FBQyxLQUFVLEVBQUUsS0FBYTtRQUMvQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDakU7Ozs7Ozs7SUFHSSxtQkFBbUIsQ0FBQyxLQUFVLEVBQUUsS0FBYTtRQUNsRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztRQUUvRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7OztJQUsxRCxlQUFlO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkIsVUFBVSxDQUFDO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUVwQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRU4sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNoRTtZQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3hEOzs7OztJQUdLLGdCQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUVsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXJDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ25FO1lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDNUI7U0FDRjs7Ozs7OztJQUdLLGlCQUFpQixDQUFDLE9BQWdCLElBQUksRUFBRSxTQUFrQixJQUFJO1FBQ3BFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFDckIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7WUFFcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFFOUUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsSCxJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQ3JHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7O2dCQUVqRixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sQ0FBQztnQkFFckYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDeEQ7WUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN2RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBRTVFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXhFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQzlCLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDckMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ3RDLENBQUM7WUFFRixJQUFJLElBQUksSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDdkQ7U0FDRjs7Ozs7SUFLSyxpQkFBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFFBQVEsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztTQUM1QjthQUFNOztZQUNMLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQzs7WUFFbkUsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUErQjs7WUFBdEQsSUFBeUIsU0FBUyxHQUFHLEVBQUUsQ0FBZTs7WUFBdEQsSUFBeUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7WUFFdEQsSUFBSSxVQUFVLEdBQVEsSUFBSSxDQUE0Qjs7WUFBdEQsSUFBNEIsYUFBYSxHQUFRLElBQUksQ0FBQzs7WUFFdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7WUFFN0QsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO2dCQUMvQyxLQUFLLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxRQUFRLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QyxTQUFTLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUVoRCxJQUFJLFFBQVEsS0FBSyxRQUFRLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtvQkFDaEQsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDbkI7Z0JBRUQsSUFBSSxTQUFTLElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO29CQUMvRCxhQUFhLEdBQUcsSUFBSSxDQUFDO2lCQUN0QjtnQkFFRCxJQUFJLFFBQVEsS0FBSyxPQUFPLEVBQUU7b0JBQ3hCLFVBQVUsR0FBRyxhQUFhLENBQUM7b0JBRTNCLE1BQU07aUJBQ1A7Z0JBRUQsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEI7O1lBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxHQUFHLFFBQVEsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUVwRyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtvQkFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDbkI7O2dCQUVELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFFBQVEsS0FBSyxPQUFPLEVBQUUsQ0FBQztnQkFFckUsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQ2hEO1lBRUQsSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzthQUN6QjtZQUVELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFFakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQ3hGO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDeEY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUN2RixJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7YUFDNUQ7U0FDRjs7Ozs7OztJQUtLLFNBQVMsQ0FBQyxPQUFZLEVBQUUsTUFBZTtRQUM3QyxPQUFPO1lBQ0wsR0FBRyxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDNUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDOUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsWUFBWTtTQUM3QixDQUFDOzs7Ozs7O0lBR0ksWUFBWSxDQUFDLE1BQVcsRUFBRSxLQUFVOztRQUMxQyxJQUFJLElBQUksR0FBUSxLQUFLLENBQUMsVUFBVSxDQUFDO1FBRWpDLE9BQU8sSUFBSSxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4QjtRQUVELE9BQU8sS0FBSyxDQUFDOzs7O1lBcmpDaEIsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztnQkFFckMsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRXWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxva3pDQUFva3pDLENBQUM7YUFDL2t6Qzs7Ozs0Q0F5RkksTUFBTSxTQUFDLFdBQVc7WUFwZEYsVUFBVTtZQUFFLGlCQUFpQjtZQU16QyxrQkFBa0I7Ozt3QkF5Y3hCLFNBQVMsU0FBQyxXQUFXOzBCQUNyQixTQUFTLFNBQUMsYUFBYTs0QkFDdkIsU0FBUyxTQUFDLGFBQWE7Ozs7Ozs7QUNuZDFCOzs7Ozs7Ozs7SUFrR0UsWUFBb0IsUUFBa0IsRUFBVSxHQUE2QixFQUNuRSxRQUFnQyxLQUF1QixFQUFVLEtBQWlCLEVBQ2xGO1FBRlUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQ25FLFdBQU0sR0FBTixNQUFNO1FBQTBCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNsRixhQUFRLEdBQVIsUUFBUTs2QkF0RmUsS0FBSzs2QkFDTCxLQUFLO3VCQVFYLE9BQU87d0JBQ04sTUFBTTt3QkFFTCxLQUFLOzJCQUNGLEtBQUs7aUNBRUgsRUFBRTs4QkFFRCxLQUFLOzhCQUVOLFNBQVM7OEJBQ1QsS0FBSzsrQkFFSixNQUFNOytCQUVOLE9BQU87a0NBRUgsSUFBSTtzQ0FFQSxLQUFLOzBCQUVsQixPQUFPO2dDQUNELElBQUk7eUNBQ00sS0FBSzswQkFFcEIsS0FBSzs4QkFDRixJQUFJOytCQUNILG9CQUFvQjs4QkFFcEIsS0FBSztrQ0FDRixRQUFRO21DQUNQLHdCQUF3Qjs2QkFFOUIsZUFBZTt1Q0FFTCxDQUFDO29DQUVKLGlCQUFpQjt5Q0FDWixzQkFBc0I7Z0NBRTlCLEtBQUs7b0NBQ0YsV0FBVztxQ0FDViwyQkFBMkI7d0NBRXhCLDhCQUE4Qjs2QkFFaEQsSUFBSSxZQUFZLENBQU0sSUFBSSxDQUFDOzhCQUUxQixJQUFJLFlBQVksQ0FBVSxJQUFJLENBQUM7OEJBRS9CLElBQUksWUFBWSxDQUFNLElBQUksQ0FBQzsrQkFDMUIsSUFBSSxZQUFZLENBQVMsSUFBSSxDQUFDO2lDQUM1QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUM7K0JBRWhDLElBQUksWUFBWSxDQUFTLElBQUksQ0FBQztnQ0FDN0IsSUFBSSxZQUFZLENBQVMsSUFBSSxDQUFDO2lDQUU3QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUM7aUNBQzlCLElBQUksWUFBWSxDQUFTLElBQUksQ0FBQztpQ0FDOUIsSUFBSSxZQUFZLENBQVMsS0FBSyxDQUFDO29DQUU1QixJQUFJLFlBQVksQ0FBTSxJQUFJLENBQUM7S0FnQmxCOzs7OztJQWRQLFdBQVcsQ0FBQyxLQUFVO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjs7Ozs7SUFFa0MsV0FBVyxDQUFDLEtBQVU7UUFDdkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COzs7OztJQUVrQyxXQUFXLENBQUMsS0FBVTtRQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEM7Ozs7SUFNRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQVk7UUFDdEIsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUNuRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0I7U0FDRjtRQUNELElBQUcsT0FBTyxDQUFDLFdBQVcsRUFBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQzdEO1FBQ0QsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxRQUFRLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQy9EO2dCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekU7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtRQUVELElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN0RTtTQUNGO0tBQ0Y7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7O1lBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFFMUIsSUFBSSxJQUFJLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxRQUFRLEVBQUU7O2dCQUNwRSxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFDM0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFFNUQsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBRXhFLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0NBQXdDO3dCQUNuRCwwREFBMEQ7d0JBQzFELG1GQUFtRixDQUFDLENBQUM7aUJBQ3hGO2FBQ0Y7O1lBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztZQUMzRSxNQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRXBGLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVsRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQzlCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQ3ZFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUM3RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFDNUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixFQUN0RSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixFQUNyRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixFQUN6RCxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFDMUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFDNUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUVuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQy9DO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFDOzs7OztJQUdJLFdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQjs7Ozs7O0lBR0ksTUFBTSxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlDOzs7Ozs7O0lBR0ksWUFBWSxDQUFDLEtBQWEsRUFBRSxTQUFrQixJQUFJO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBRTVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBRzlCLGFBQWE7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDOzs7Ozs7SUFHekIsYUFBYSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHOUIsVUFBVTs7UUFDZixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7UUFFekMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVMsS0FBSyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7UUFFL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjs7Ozs7O0lBR0ksV0FBVyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBRXpCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DOzs7Ozs7SUFHSSxZQUFZLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O0lBRzFCLGFBQWEsQ0FBQyxLQUFVO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFHM0IsYUFBYSxDQUFDLEtBQVU7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztJQUc1QixlQUFlLENBQUMsS0FBVTtRQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFHOUIsbUJBQW1CLENBQUMsS0FBWTtRQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1lBdFB6QyxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBUkMsUUFBUTtZQUFzQix3QkFBd0I7WUFEeEMsY0FBYztZQUE0QixnQkFBZ0I7WUFBNUIsVUFBVTtZQUUvQyxrQkFBa0I7Ozt1QkFnQnhCLEtBQUs7MEJBRUwsS0FBSztzQkFFTCxLQUFLO3VCQUNMLEtBQUs7dUJBRUwsS0FBSzswQkFDTCxLQUFLO2dDQUVMLEtBQUs7NkJBRUwsS0FBSzs2QkFFTCxLQUFLOzZCQUNMLEtBQUs7OEJBRUwsS0FBSzs4QkFFTCxLQUFLO2lDQUVMLEtBQUs7cUNBRUwsS0FBSzt5QkFFTCxLQUFLOytCQUNMLEtBQUs7d0NBQ0wsS0FBSzt5QkFFTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFFTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSzs0QkFFTCxLQUFLOzZCQUNMLEtBQUs7c0NBQ0wsS0FBSzttQ0FFTCxLQUFLO3dDQUNMLEtBQUs7K0JBRUwsS0FBSzttQ0FDTCxLQUFLO29DQUNMLEtBQUs7dUNBRUwsS0FBSzs0QkFFTCxNQUFNOzZCQUVOLE1BQU07NkJBRU4sTUFBTTs4QkFDTixNQUFNO2dDQUNOLE1BQU07OEJBRU4sTUFBTTsrQkFDTixNQUFNO2dDQUVOLE1BQU07Z0NBQ04sTUFBTTtnQ0FDTixNQUFNO21DQUVOLE1BQU07MEJBRU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFJaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFJaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztBQzlGbkM7Ozs7O0lBTUUsU0FBUyxDQUFDLEtBQUs7UUFDYixPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQzs7O1lBTkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxTQUFTO2FBQ2hCOzs7Ozs7O0FDSkQ7OztZQWVDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsU0FBUyxDQUFDLE9BQU8sRUFBRTtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsV0FBVztpQkFDWjtnQkFDRCxlQUFlLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTtnQkFDekMsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsb0JBQW9CO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTthQUNsQzs7Ozs7Ozs7Ozs7Ozs7OyJ9