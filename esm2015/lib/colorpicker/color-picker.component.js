/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewEncapsulation, ElementRef, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { detectIE } from './helpers';
import { Rgba, Hsla, Hsva } from './formats';
import { SliderPosition, SliderDimension } from './helpers';
import { ColorPickerService } from './color-picker.service';
import { isPlatformBrowser } from '@angular/common';
export class ColorPickerComponent {
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
    class="color-input-container sem-color-light-inputs mb2">
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

    <div
      *ngIf="cpPresetColors?.length || cpAddColorButton"
     >
      <ul
        *ngIf="cpPresetColors?.length"
        class="sem-color-list"
      >
        <li
          *ngFor="let color of cpPresetColors"
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
    </div>
  </div>

  <!--Color preset-->
  <div
    *ngIf="!colorToggle"
    class="hue-alpha box my2">
    <div class="left">
      <div class="color-preview mb1">
        <div class="selected-color-background"></div>
        <div class="selected-color" [style.background-color]="selectedColor"></div>
      </div>
      <button
        sem-button
        small
        sem-importance="primary"
        *ngIf="cpAddColorButton"
        [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength"
        (click)="onAddPresetColor($event, selectedColor)">
        {{cpAddColorButtonText}}
      </button>
    </div>
    <div class="right">
      <div *ngIf="cpPresetColors?.length || cpAddColorButton" class="preset-area">
        <div class="preset-label">{{cpPresetLabel}}</div>
        <div *ngIf="cpPresetColors?.length">
          <div *ngFor="let color of cpPresetColors"
               class="rain-drop preset-color"
               [style.backgroundColor]="color"
               (click)="setColorFromString(color)"
          >
          <span *ngIf="cpAddColorButton"
                class="rain-drop_button button-delete sem-icon-close"
                (click)="onRemovePresetColor($event, color)"></span>
            </div>
          </div>
        <div
          *ngIf="!cpPresetColors?.length && cpAddColorButton"
          class="{{cpPresetEmptyMessageClass}}
          ">{{cpPresetEmptyMessage}}</div>
      </div>
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
                styles: [`body{margin:0;font-size:100%}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}[class*=" sem-icon-"],[class^=sem-icon-]{font-family:sembler-ico!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sem-icon-drag:before{content:"\\e946";color:#ccc}.sem-icon-product:before{content:"\\e913";color:#444d63}.sem-icon-form:before{content:"\\e92a";color:#444d63}.sem-icon-location:before{content:"\\e914";color:#444d63}.sem-icon-chart:before{content:"\\e935";color:#444d63}.sem-icon-text:before{content:"\\e945";color:#444d63}.sem-icon-location2:before{content:"\\e947";color:#444d63}.sem-icon-I:before{content:"\\e906"}.sem-icon-S:before{content:"\\e907"}.sem-icon-U:before{content:"\\e908"}.sem-icon-B:before{content:"\\e909"}.sem-icon-justify:before{content:"\\e90c";color:#ccc}.sem-icon-left:before{content:"\\e910";color:#ccc}.sem-icon-middle:before{content:"\\e911";color:#ccc}.sem-icon-right:before{content:"\\e912";color:#ccc}.sem-icon-colour2:before{content:"\\e90a"}.sem-icon-brush:before{content:"\\e90b"}.sem-icon-folder2:before{content:"\\e90d"}.sem-icon-logout2:before{content:"\\e90e"}.sem-icon-ol2:before{content:"\\e90f";color:#ccc}.sem-icon-send:before{content:"\\e905";color:#05dcb6}.sem-icon-repeat:before{content:"\\e900"}.sem-icon-crop:before{content:"\\e901"}.sem-icon-case:before{content:"\\e902"}.sem-icon-resize:before{content:"\\e903"}.sem-icon-check:before{content:"\\e904"}.sem-icon-ol:before{content:"\\e915";color:#ccc}.sem-icon-ul:before{content:"\\e916";color:#ccc}.sem-icon-folder:before{content:"\\e917"}.sem-icon-close:before{content:"\\e918"}.sem-icon-inbox:before{content:"\\e919"}.sem-icon-home:before{content:"\\e91a"}.sem-icon-share:before{content:"\\e91b"}.sem-icon-hamburger:before{content:"\\e91c"}.sem-icon-lock:before{content:"\\e91d"}.sem-icon-unlock:before{content:"\\e91e"}.sem-icon-ellipse:before{content:"\\e91f"}.sem-icon-volume:before{content:"\\e920"}.sem-icon-play:before{content:"\\e921"}.sem-icon-video:before{content:"\\e922";color:#444d63}.sem-icon-design:before{content:"\\e923"}.sem-icon-address:before{content:"\\e924"}.sem-icon-center_align:before{content:"\\e925";color:#ccc}.sem-icon-justify2:before{content:"\\e926";color:#ccc}.sem-icon-right_align:before{content:"\\e927";color:#ccc}.sem-icon-left_align:before{content:"\\e928";color:#ccc}.sem-icon-carousel:before{content:"\\e929"}.sem-icon-image:before{content:"\\e92b";color:#444d63}.sem-icon-back:before{content:"\\e92c"}.sem-icon-delete:before{content:"\\e92d";color:#d0021b}.sem-icon-duplicate:before{content:"\\e92e"}.sem-icon-link:before{content:"\\e92f"}.sem-icon-style:before{content:"\\e930"}.sem-icon-colour:before{content:"\\e931"}.sem-icon-add_accent .path1:before{content:"\\e932";color:#fafafa}.sem-icon-add_accent .path2:before{content:"\\e933";margin-left:-1em;color:#05dcb6}.sem-icon-send2:before{content:"\\e934";color:#05dcb6}.sem-icon-search:before{content:"\\e936"}.sem-icon-colour_accent .path1:before{content:"\\e937";color:#05dcb6}.sem-icon-colour_accent .path2:before{content:"\\e938";margin-left:-1em;color:#fff}.sem-icon-profile-accent .path1:before{content:"\\e939";color:#05dcb6}.sem-icon-profile-accent .path2:before{content:"\\e93a";margin-left:-1em;color:#fff}.sem-icon-down_arrow:before{content:"\\e93b"}.sem-icon-chat_accent .path1:before{content:"\\e93c";color:#fafafa}.sem-icon-chat_accent .path2:before{content:"\\e93d";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path3:before{content:"\\e93e";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path4:before{content:"\\e93f";margin-left:-1em;color:#05dcb6}.sem-icon-logout:before{content:"\\e940"}.sem-icon-payment:before{content:"\\e941"}.sem-icon-settings:before{content:"\\e942"}.sem-icon-sites:before{content:"\\e943"}.sem-icon-profile:before{content:"\\e944"}.sem--corner ._top{border-radius:50% 0 50% 50%;background-clip:padding-box}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input.sem-input{width:calc(100%);outline:0;border-radius:10px 10px 0;background-clip:padding-box;border:1px solid #9498a3}.no-padding-list .sem-ul .sem-li,.no-padding-list .sem-ul-icon-list .sem-li{padding-top:0;padding-bottom:0}.sem-ul-icon-list .sem-li{white-space:nowrap;-webkit-font-smoothing:antialiased;padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none}.sem-ul-icon-list .sem-li:not([disabled]){cursor:pointer}.sem-ul-icon-list .sem-li.active img.icon-default{display:none}.sem-ul-icon-list .sem-li.active img.icon-hover{display:inline-block}.sem-ul-icon-list .sem-li img{display:inline-block;vertical-align:middle;margin-bottom:4px}.sem-ul-icon-list .sem-li img.icon-hover{display:none}.sem-ul .sem-li{padding-top:.45rem;padding-bottom:.45rem;cursor:pointer;border:none}.sem-ul .sem-li:not([disabled]){cursor:pointer}.sem-ul .sem-li.active{border-radius:7px 0 0 7px;background-clip:padding-box}ul.corner_all li:first-child{border-radius:6px 6px 0 0;background-clip:padding-box}ul.corner_all li:last-child{border-radius:0 0 11px 11px;background-clip:padding-box}.corner_top{border-radius:6px 6px 0 0;background-clip:padding-box}.corner_bottom{border-radius:0 0 6px 6px;background-clip:padding-box}.corner_none{border-radius:0;background-clip:padding-box}.corner_all{border-radius:6px;background-clip:padding-box}.corner_right{border-radius:6px 0 0 6px;background-clip:padding-box}.corner_left{border-radius:0 6px 6px 0;background-clip:padding-box}.corner_top-left{border-radius:0 6px 6px;background-clip:padding-box}.corner_top-right{border-radius:6px 0 6px 6px;background-clip:padding-box}.corner_bottom-left,.corner_bottom-right{border-radius:6px 6px 0;background-clip:padding-box}.dialog-container,.sem-colorlist--container,.sem-shadow,.sidebar-container{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dialog-container:hover,.sem-colorlist--container:hover,.sem-shadow:hover,.sidebar-container:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.sem-button-dnd{border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sem-btn-fab,:host{outline:0;cursor:pointer;display:inline-block;border:none}.sem-btn-fab:not([disabled]),:host:not([disabled]){cursor:pointer}.sem-btn-fab img,:host img{width:16px;height:16px;display:block;vertical-align:middle}.sem-btn-fab--default>span{display:block;width:16px;height:16px}.sem-btn-fab--default_small{padding:.4rem}.sem-btn-fab--default_small>span{display:block}.sem-btn-fab--primary>span,.sem-btn-fab--secondary>span{display:block;width:16px;height:16px}.sem-btn-fab--corner_none{border-radius:50%;background-clip:padding-box}.sem-btn-fab--corner_right{border-radius:50% 0 0 50%;background-clip:padding-box}.sem-btn-fab--corner_left{border-radius:0 50% 50% 0;background-clip:padding-box}.sem-btn-fab--corner_top-left{border-radius:0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_top-right{border-radius:50% 0 50% 50%;background-clip:padding-box}.sem-btn-fab--corner_bottom-left,.sem-btn-fab--corner_bottom-right{border-radius:50% 50% 0;background-clip:padding-box}.semui-tabs .semui-tabs--navlist_horizontal{border-bottom:1px solid grey;padding-bottom:2px}.semui-tabs .semui-tabs--navlist_horizontal li.active button:not([disabled])::after,.semui-tabs .semui-tabs--navlist_horizontal li:hover button:not([disabled])::after{-webkit-transform:scale(1);transform:scale(1)}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{border:none;outline:0;box-shadow:none;padding:.35em .75em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;bottom:-1px}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button:not([disabled]):hover{border:none;opacity:1}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{content:"";height:3px;width:100%;bottom:-1px;transition:all 250ms ease 0s;-webkit-transform:scale(0);transform:scale(0)}ul.semui-tabs-list.tabs-vertical{margin:0}@font-face{font-family:sembler-ico;src:url(/assets/fonts/sembler.eot?9ik42l);src:url(/assets/fonts/sembler.eot?9ik42l#iefix) format("embedded-opentype"),url(/assets/fonts/sembler.ttf?9ik42l) format("truetype"),url(/assets/fonts/sembler.woff?9ik42l) format("woff"),url(/assets/fonts/sembler.svg?9ik42l#icomoon) format("svg");font-weight:400;font-style:normal}.sem-button,:host{cursor:pointer;display:inline-block;border:none;border-radius:12px 12px 0;background-clip:padding-box}.sem-button:not([disabled]),:host:not([disabled]){cursor:pointer}.sem-button--secondary{border:1px solid #a9a9a9;border-radius:12px 12px 0;background-clip:padding-box}.sem-button--small{padding:6px 11px;border:1px solid transparent}.sem-button--large{border:1px solid transparent}.sem-button--full{width:100%}.sem-button--block{display:block;padding:.4em}.sem-button--link,.sem-button--link_primary{border:0 solid;text-decoration:underline;border-radius:0}.bullet-inlinelist li{vertical-align:top;margin:0 -2px}.bullet-inlinelist li .select{display:block;width:22px}.bullet-inlinelist li .select select{display:none}.bullet-inlinelist li.active .select select{display:inline}.bullet-inlinelist li.active::after{background-color:red}.bullet-inlinelist li::before{content:'';top:-5px;left:0;width:100%;border-top:1px solid #000}.bullet-inlinelist li::after{background-color:#002;display:block;top:-9px;left:38%;width:9px;height:9px;border-radius:50%;content:''}.bullet-inlinelist li:first-child::before{left:38%}.bullet-inlinelist li:last-child::before{left:-44%}.rain-drop{border-bottom-right-radius:50%;border-bottom-left-radius:50%;border-top-left-radius:50%;box-shadow:inset 0 0 10px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.rain-drop_button{border-radius:50%;cursor:pointer;text-align:center;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg);font-weight:700}.rain-drop_button:before{padding:0 0 0 1px}.button-delete{color:#fff;background-color:#d0021b}.sem-pagination-container{display:flex;align-items:center;justify-content:center}.sem-pagination-nav{max-width:300px}.sem-pagination-nav>div{flex:1;text-align:center;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.sem-pagination-next a,.sem-pagination-previous a{display:block;line-height:25px;vertical-align:middle}.sem-pagination-next a{text-align:left}.sem-pagination-previous a{text-align:right}.sem-pagination a{height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle}.sem-pagination.active div{border:none;height:25px;width:25px;line-height:25px;display:inline-block;vertical-align:middle;border-radius:12px 12px 0;background-clip:padding-box}.sem-pagination.active div:not([disabled]){cursor:pointer}.sem-avatar{width:40px;height:40px}.sem-avatar .sem-avatar__img{width:100%;height:100%}.dialog-container{overflow:auto;border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.dialog-container--colordrop{border-radius:0;background-clip:padding-box;box-shadow:none}.dialog-container--colordrop:hover{box-shadow:none}.dialog-container--colordrop .dialog-container--header{border-radius:12px 0 0 12px;background-clip:padding-box}.dialog-container--colordrop .dialog-container--body{border-radius:0 0 12px 12px;background-clip:padding-box}.dialog-container-full{height:100%;z-index:2}.dialog-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.dialog-container--body,.dialog-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.dialog-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist{overflow:auto}.sem-colorlist--container{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist--list{min-height:20px}.sem-colorlist--list--inner{display:none}.sem-colorlist--list:hover .sem-colorlist--list--inner{display:block}.sem-colorlist--closebutton{font-size:11px}.browser-container{height:calc(100% - 30px - 20px);display:block;position:relative;margin:0 20px;border-radius:10px}.browser-container .layout{height:100%;width:100%;overflow:scroll}.browser-container::before{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;content:'';position:absolute;top:-20px;left:15px;width:10px;height:10px;border-radius:50%}.h1{font-size:2rem}.h2{font-size:1.5rem}.h3{font-size:1.25rem}.h4{font-size:1rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1}.line-height-2{line-height:1.125}.line-height-3{line-height:1.25}.line-height-4{line-height:1.5}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block,.rain-drop_button,.semui-tabs,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{display:block}.bullet-inlinelist li,.inline-block,.semui-tabs .semui-tabs--navlist_horizontal li,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit,.sem-avatar .sem-avatar__img{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0,.sem-button--link,.sem-button--link_primary,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button,figure,h1,h2,h3,h4,h5{margin:0}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.mt0,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0{margin-left:0}.mx0,.sem-pagination-nav{margin-left:0;margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:.5rem}.mt1{margin-top:.5rem}.mr1{margin-right:.5rem}.mb1{margin-bottom:.5rem}.ml1{margin-left:.5rem}.mx1,figure.semui-thumbnail button{margin-left:.5rem;margin-right:.5rem}.my1,.semui-tabs .semui-tabs--navlist_horizontal{margin-top:.5rem;margin-bottom:.5rem}.m2{margin:1rem}.mt2{margin-top:1rem}.mr2{margin-right:1rem}.mb2{margin-bottom:1rem}.ml2{margin-left:1rem}.mx2{margin-left:1rem;margin-right:1rem}.my2{margin-top:1rem;margin-bottom:1rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.sem-colorlist--container{margin-left:2rem}.mx3{margin-left:2rem;margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:4rem}.mt4{margin-top:4rem}.mr4{margin-right:4rem}.mb4{margin-bottom:4rem}.ml4{margin-left:4rem}.mx4{margin-left:4rem;margin-right:4rem}.my4{margin-top:4rem;margin-bottom:4rem}.mxn1{margin-left:-.5rem;margin-right:-.5rem}.mxn2{margin-left:-1rem;margin-right:-1rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-4rem;margin-right:-4rem}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.mx-auto{margin-left:auto;margin-right:auto}.browser-container,.p0,.sem-button--link,.sem-button--link_primary,figure,h1,h2,h3,h4,h5{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0{padding-left:0}.px0{padding-left:0;padding-right:0}.py0,.sem-ul-icon-list .sem-li.no-padding{padding-top:0;padding-bottom:0}.corner,.p1,.sem-btn-fab--default,.sem-btn-fab--primary,.sem-btn-fab--secondary,.sem-button--large,.sem-color-list li,.sem-section--corner{padding:.5rem}.pt1{padding-top:.5rem}.pr1,.semui-tabs .semui-tabs--navlist_horizontal{padding-right:.5rem}.pb1{padding-bottom:.5rem}.dialog-container--colordrop .dialog-container--body,.pl1,.semui-tabs .semui-tabs--navlist_horizontal{padding-left:.5rem}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.py1,.sem-button--primary,.sem-button--secondary,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header,figure.semui-thumbnail figcaption{padding-top:.5rem;padding-bottom:.5rem}.dialog-container--body_spaced,.dialog-container--header,.px1,.sidebar-container--body_spaced,.sidebar-container--header{padding-left:.5rem;padding-right:.5rem}.p2{padding:1rem}.pt2{padding-top:1rem}.pr2{padding-right:1rem}.pb2{padding-bottom:1rem}.pl2{padding-left:1rem}.py2{padding-top:1rem;padding-bottom:1rem}.bullet-inlinelist li,.dialog-container--footer,.px2,.sem-color-list li,.sem-ul .sem-li,.sem-ul-icon-list .sem-li,.sidebar-container--footer,figure.semui-thumbnail figcaption{padding-left:1rem;padding-right:1rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3,.sem-button--primary,.sem-button--secondary{padding-left:2rem;padding-right:2rem}.p4{padding:4rem}.pt4{padding-top:4rem}.pr4{padding-right:4rem}.pb4{padding-bottom:4rem}.pl4{padding-left:4rem}.py4{padding-top:4rem;padding-bottom:4rem}.px4{padding-left:4rem;padding-right:4rem}.col{float:left;box-sizing:border-box}.col-right{float:right;box-sizing:border-box}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.flex,.sem-pagination-nav{display:flex}@media (min-width:40em){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}.sm-flex{display:flex}}@media (min-width:52em){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}.md-flex{display:flex}}@media (min-width:64em){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}.lg-flex{display:flex}.lg-hide{display:none!important}}.flex-column{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.self-stretch{align-self:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-center{align-content:center}.content-between{align-content:space-between}.content-around{align-content:space-around}.content-stretch{align-content:stretch}.flex-auto{flex:1 1 auto;min-width:0;min-height:0}.flex-none{flex:none}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-last{order:99999}.bullet-inlinelist li,.color-picker .saturation-lightness,.color-preview,.relative,.sem-color-list li,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{position:relative}.absolute,.bullet-inlinelist li::after,.bullet-inlinelist li::before,.color-picker,.color-preview .selected-color,.rain-drop_button,.sem-color-list li .color-delete,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after,figure.semui-thumbnail button,figure.semui-thumbnail figcaption{position:absolute}.fixed{position:fixed}.color-preview .selected-color,.dialog-container-full,.sem-color-list li .color-delete,.top-0,figure.semui-thumbnail button{top:0}.right-0,.sem-color-list li .color-delete,figure.semui-thumbnail button{right:0}.bottom-0,figure.semui-thumbnail figcaption{bottom:0}.color-preview .selected-color,.left-0,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle,.sem-avatar .sem-avatar__img{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40em){.xs-hide{display:none!important}}@media (min-width:40em) and (max-width:52em){.sm-hide{display:none!important}}@media (min-width:52em) and (max-width:64em){.md-hide{display:none!important}}.display-none{display:none!important}.sidebar-container{border-radius:0 12px 12px;background-clip:padding-box;transition:all .3s cubic-bezier(.25,.8,.25,1)}.sidebar-container-full{height:100%}.sidebar-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.sidebar-container--body,.sidebar-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.sidebar-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}figure.semui-thumbnail{width:100%}figure.semui-thumbnail img{display:block;width:100%}figure.semui-thumbnail figcaption{width:100%;display:block;min-height:44px}.semui-card-footer{color:#fff;width:100%;display:block;background-color:#2a2a2a}.button-send:before{color:#fff}.sem-color-switch--colors .sufix{top:-4px;right:4px}.color-picker{border-radius:0 12px 12px;background-clip:padding-box;z-index:100000;width:230px;height:auto;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker *{box-sizing:border-box;margin:0}.color-picker .cursor{position:relative;width:16px;height:16px;border:2px solid #222;border-radius:50%;cursor:default}.color-picker .preset-area{padding:4px 0 15px}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hue-alpha{margin-bottom:3px}.color-picker .hue{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .alpha{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{width:100%;height:130px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-preview{display:block;width:40px;margin:0 auto}.color-preview .selected-color{width:40px;height:40px;border-radius:50%}.rain-drop{position:relative;display:inline-block;width:26px;height:26px;margin:4px 6px 8px;cursor:pointer}.rain-drop_button{font-size:6px;top:6px;right:-9px;padding:.3rem}.preset-label{width:100%;padding:4px;font-size:11px;text-align:left;color:#555}.sem-color-dark-inputs .color-type{color:#555;line-height:22px}.sem-color-light-inputs .color-type{color:#fff;line-height:22px}.sem-color-list li{min-height:50px}`]
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
if (false) {
    /** @type {?} */
    ColorPickerComponent.prototype.isIE10;
    /** @type {?} */
    ColorPickerComponent.prototype.hsva;
    /** @type {?} */
    ColorPickerComponent.prototype.width;
    /** @type {?} */
    ColorPickerComponent.prototype.height;
    /** @type {?} */
    ColorPickerComponent.prototype.outputColor;
    /** @type {?} */
    ColorPickerComponent.prototype.initialColor;
    /** @type {?} */
    ColorPickerComponent.prototype.fallbackColor;
    /** @type {?} */
    ColorPickerComponent.prototype.listenerResize;
    /** @type {?} */
    ColorPickerComponent.prototype.listenerMouseDown;
    /** @type {?} */
    ColorPickerComponent.prototype.directiveInstance;
    /** @type {?} */
    ColorPickerComponent.prototype.sliderH;
    /** @type {?} */
    ColorPickerComponent.prototype.sliderDimMax;
    /** @type {?} */
    ColorPickerComponent.prototype.directiveElementRef;
    /** @type {?} */
    ColorPickerComponent.prototype.dialogArrowSize;
    /** @type {?} */
    ColorPickerComponent.prototype.dialogArrowOffset;
    /** @type {?} */
    ColorPickerComponent.prototype.useRootViewContainer;
    /** @type {?} */
    ColorPickerComponent.prototype.show;
    /** @type {?} */
    ColorPickerComponent.prototype.hidden;
    /** @type {?} */
    ColorPickerComponent.prototype.top;
    /** @type {?} */
    ColorPickerComponent.prototype.left;
    /** @type {?} */
    ColorPickerComponent.prototype.position;
    /** @type {?} */
    ColorPickerComponent.prototype.format;
    /** @type {?} */
    ColorPickerComponent.prototype.slider;
    /** @type {?} */
    ColorPickerComponent.prototype.hexText;
    /** @type {?} */
    ColorPickerComponent.prototype.hslaText;
    /** @type {?} */
    ColorPickerComponent.prototype.rgbaText;
    /** @type {?} */
    ColorPickerComponent.prototype.arrowTop;
    /** @type {?} */
    ColorPickerComponent.prototype.selectedColor;
    /** @type {?} */
    ColorPickerComponent.prototype.hueSliderColor;
    /** @type {?} */
    ColorPickerComponent.prototype.alphaSliderColor;
    /** @type {?} */
    ColorPickerComponent.prototype.cpWidth;
    /** @type {?} */
    ColorPickerComponent.prototype.cpHeight;
    /** @type {?} */
    ColorPickerComponent.prototype.cpAlphaChannel;
    /** @type {?} */
    ColorPickerComponent.prototype.cpOutputFormat;
    /** @type {?} */
    ColorPickerComponent.prototype.cpDisableInput;
    /** @type {?} */
    ColorPickerComponent.prototype.cpDialogDisplay;
    /** @type {?} */
    ColorPickerComponent.prototype.cpIgnoredElements;
    /** @type {?} */
    ColorPickerComponent.prototype.cpSaveClickOutside;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPosition;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPositionOffset;
    /** @type {?} */
    ColorPickerComponent.prototype.cpOKButton;
    /** @type {?} */
    ColorPickerComponent.prototype.cpOKButtonText;
    /** @type {?} */
    ColorPickerComponent.prototype.cpOKButtonClass;
    /** @type {?} */
    ColorPickerComponent.prototype.cpCancelButton;
    /** @type {?} */
    ColorPickerComponent.prototype.cpCancelButtonText;
    /** @type {?} */
    ColorPickerComponent.prototype.cpCancelButtonClass;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPresetLabel;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPresetColors;
    /** @type {?} */
    ColorPickerComponent.prototype.cpMaxPresetColorsLength;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPresetEmptyMessage;
    /** @type {?} */
    ColorPickerComponent.prototype.cpPresetEmptyMessageClass;
    /** @type {?} */
    ColorPickerComponent.prototype.cpAddColorButton;
    /** @type {?} */
    ColorPickerComponent.prototype.cpAddColorButtonText;
    /** @type {?} */
    ColorPickerComponent.prototype.cpAddColorButtonClass;
    /** @type {?} */
    ColorPickerComponent.prototype.cpRemoveColorButtonClass;
    /** @type {?} */
    ColorPickerComponent.prototype.colorToggle;
    /** @type {?} */
    ColorPickerComponent.prototype.hueSlider;
    /** @type {?} */
    ColorPickerComponent.prototype.alphaSlider;
    /** @type {?} */
    ColorPickerComponent.prototype.dialogElement;
    /** @type {?} */
    ColorPickerComponent.prototype.platformId;
    /** @type {?} */
    ColorPickerComponent.prototype.elRef;
    /** @type {?} */
    ColorPickerComponent.prototype.cdRef;
    /** @type {?} */
    ColorPickerComponent.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFvQyxTQUFTLEVBQ3RELGlCQUFpQixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFDaEQsV0FBVyxFQUFFLE1BQU0sRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUEwWHBELE1BQU07Ozs7Ozs7SUF1RkosWUFDd0MsVUFBZSxFQUM3QyxPQUEyQixLQUF3QixFQUFVLE9BQTJCO1FBRDFELGVBQVUsR0FBVixVQUFVLENBQUs7UUFDN0MsVUFBSyxHQUFMLEtBQUs7UUFBc0IsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtzQkF4RnhFLEtBQUs7K0JBb0JHLEVBQUU7aUNBQ0EsRUFBRTtvQ0FFRSxLQUFLO0tBaUV5RDs7OztJQUV0RyxRQUFRO1FBQ04sRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaVhYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHcyeUNBQXcyeUMsQ0FBQzthQUNuM3lDOzs7OzRDQXlGSSxNQUFNLFNBQUMsV0FBVztZQXpkRixVQUFVO1lBQUUsaUJBQWlCO1lBTXpDLGtCQUFrQjs7O3dCQThjeEIsU0FBUyxTQUFDLFdBQVc7MEJBQ3JCLFNBQVMsU0FBQyxhQUFhOzRCQUN2QixTQUFTLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLFxuICBQTEFURk9STV9JRCwgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGV0ZWN0SUUgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgUmdiYSwgSHNsYSwgSHN2YSB9IGZyb20gJy4vZm9ybWF0cyc7XG5pbXBvcnQgeyBTbGlkZXJQb3NpdGlvbiwgU2xpZGVyRGltZW5zaW9uIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IENvbG9yUGlja2VyU2VydmljZSB9IGZyb20gJy4vY29sb3ItcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2NvbG9yLXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICAjZGlhbG9nUG9wdXBcbiAgY2xhc3M9XCJjb2xvci1waWNrZXJcIlxuICBbc3R5bGUudmlzaWJpbGl0eV09XCJoaWRkZW4gfHwgIXNob3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiIFtzdHlsZS50b3AucHhdPVwidG9wXCJcbiAgW3N0eWxlLmxlZnQucHhdPVwibGVmdFwiXG4gIFtzdHlsZS5wb3NpdGlvbl09XCJwb3NpdGlvblwiXG4gIFtzdHlsZS5oZWlnaHQucHhdPVwiY3BIZWlnaHRcIlxuICBbc3R5bGUud2lkdGhdPVwiY29sb3JUb2dnbGUgPyAnMTAwJScgOiBjcFdpZHRoICsgJ3B4J1wiXG4+XG4gIDxkaXZcbiAgICAqbmdJZj1cIiFjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJjb2xvci1pbnB1dC1jb250YWluZXIgc2VtLWNvbG9yLWxpZ2h0LWlucHV0cyBtYjJcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgbXkxIHNlbS10eXBvLS1maWdjYXB0aW9uXCJcbiAgICAgICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgKGNsaWNrKT1cIm9uRm9ybWF0VG9nZ2xlKClcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2VsZi1zdGFydCBzZW0tLWxpbmsgXCI+Q2hhbmdlIGZvcm1hdDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dpdGNoLS1jb250cm9sLS1saW5rXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2ggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtcmVzZXQgc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIGZsZXgtYXV0b1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDIgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIzNjBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMzYwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5oXCIgKG5ld1ZhbHVlKT1cIm9uSHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5IPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LnNcIiAobmV3VmFsdWUpPVwib25TYXR1cmF0aW9uSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5TPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmxcIiAobmV3VmFsdWUpPVwib25MaWdodG5lc3NJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkw8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAxID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBjb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LnJcIiAobmV3VmFsdWUpPVwib25SZWRJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPlI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmdcIiAobmV3VmFsdWUpPVwib25HcmVlbklucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Rzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmJcIiAobmV3VmFsdWUpPVwib25CbHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5CPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIlxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwicmdiYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAwID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LXN1Zml4XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3ZhbHVlXT1cImhleFRleHRcIlxuICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSGV4SW5wdXQobnVsbClcIlxuICAgICAgICAgICAgICAgIChuZXdWYWx1ZSk9XCJvbkhleElucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZENvbG9yKClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWljb24tc2VhcmNoIHN1Zml4XCI+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkhleDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgICNodWVTbGlkZXJcbiAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgIGNsYXNzPVwiaHVlXCJcbiAgICBbc2xpZGVyXSBbcmdYXT1cIjFcIiAobmV3VmFsdWUpPVwib25IdWVDaGFuZ2UoJGV2ZW50KVwiIChkcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoJ2h1ZScpXCIgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdodWUnKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBbc3R5bGUubGVmdC5weF09XCJzbGlkZXIuaFwiPjwvZGl2PlxuXG4gIDwvZGl2PlxuXG4gIDxkaXZcbiAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgICpuZ0lmPVwiY3BEaWFsb2dEaXNwbGF5PT0ncG9wdXAnXCJcbiAgICBjbGFzcz1cImFycm93IGFycm93LXt7Y3BQb3NpdGlvbn19XCJcbiAgICBbc3R5bGUudG9wLnB4XT1cImFycm93VG9wXCI+PC9kaXY+XG5cbiAgPGRpdlxuICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgY2xhc3M9XCJzYXR1cmF0aW9uLWxpZ2h0bmVzc1wiXG4gICAgW3NsaWRlcl0gW3JnWF09XCIxXCIgW3JnWV09XCIxXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJodWVTbGlkZXJDb2xvclwiXG4gICAgKG5ld1ZhbHVlKT1cIm9uQ29sb3JDaGFuZ2UoJGV2ZW50KVwiXG4gICAgKGRyYWdTdGFydCk9XCJvbkRyYWdTdGFydCgnc2F0dXJhdGlvbi1saWdodG5lc3MnKVwiXG4gICAgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdzYXR1cmF0aW9uLWxpZ2h0bmVzcycpXCI+XG4gICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS50b3AucHhdPVwic2xpZGVyLnZcIiBbc3R5bGUubGVmdC5weF09XCJzbGlkZXIuc1wiPjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2XG4gICAgI2FscGhhU2xpZGVyXG4gICAgY2xhc3M9XCJhbHBoYVwiXG4gICAgW3NsaWRlcl1cbiAgICBbcmdYXT1cIjFcIlxuICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYWxwaGFTbGlkZXJDb2xvclwiXG4gICAgKG5ld1ZhbHVlKT1cIm9uQWxwaGFDaGFuZ2UoJGV2ZW50KVwiXG4gICAgKGRyYWdTdGFydCk9XCJvbkRyYWdTdGFydCgnYWxwaGEnKVwiXG4gICAgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdhbHBoYScpXCI+XG4gICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5hXCI+PC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS1Db2xvciBkcm9wcy0tPlxuICA8ZGl2XG4gICAgKm5nSWY9XCJjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJzZW0tY29sb3ItZHJvcHNcIj5cblxuICAgIDxkaXZcbiAgICAgICpuZ0lmPVwiY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aCB8fCBjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgPlxuICAgICAgPHVsXG4gICAgICAgICpuZ0lmPVwiY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aFwiXG4gICAgICAgIGNsYXNzPVwic2VtLWNvbG9yLWxpc3RcIlxuICAgICAgPlxuICAgICAgICA8bGlcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sb3Igb2YgY3BQcmVzZXRDb2xvcnNcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRDb2xvckZyb21TdHJpbmcoY29sb3IpXCJcbiAgICAgICAgICBjbGFzcz1cImJsb2NrXCJcbiAgICAgICAgICBkbmQtZHJhZ2dhYmxlXG4gICAgICAgICAgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAgICAgIFtkcmFnRGF0YV09XCJjb2xvclwiXG4gICAgICAgICAgKG9uRHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KGNvbG9yKVwiXG4gICAgICAgICAgW2Ryb3Bab25lc109XCJbJ3dpZGdldC1kcm9wWm9uZSddXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmlnaHQtYWxpZ24gYmxvY2tcIj4ge3tjb2xvcn19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJjb2xvci1kZWxldGUgc2VtLWljb24tY2xvc2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlUHJlc2V0Q29sb3IoJGV2ZW50LCBjb2xvcilcIj48L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdJZj1cIiFjcFByZXNldENvbG9ycz8ubGVuZ3RoICYmIGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICBjbGFzcz1cInt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzc319XG4gICAgICAgICAgXCI+e3tjcFByZXNldEVtcHR5TWVzc2FnZX19PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS1Db2xvciBwcmVzZXQtLT5cbiAgPGRpdlxuICAgICpuZ0lmPVwiIWNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cImh1ZS1hbHBoYSBib3ggbXkyXCI+XG4gICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1wcmV2aWV3IG1iMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtY29sb3ItYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtY29sb3JcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJzZWxlY3RlZENvbG9yXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc2VtLWJ1dHRvblxuICAgICAgICBzbWFsbFxuICAgICAgICBzZW0taW1wb3J0YW5jZT1cInByaW1hcnlcIlxuICAgICAgICAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICBbZGlzYWJsZWRdPVwiY3BQcmVzZXRDb2xvcnMgJiYgY3BQcmVzZXRDb2xvcnMubGVuZ3RoID49IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoXCJcbiAgICAgICAgKGNsaWNrKT1cIm9uQWRkUHJlc2V0Q29sb3IoJGV2ZW50LCBzZWxlY3RlZENvbG9yKVwiPlxuICAgICAgICB7e2NwQWRkQ29sb3JCdXR0b25UZXh0fX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgPGRpdiAqbmdJZj1cImNwUHJlc2V0Q29sb3JzPy5sZW5ndGggfHwgY3BBZGRDb2xvckJ1dHRvblwiIGNsYXNzPVwicHJlc2V0LWFyZWFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNldC1sYWJlbFwiPnt7Y3BQcmVzZXRMYWJlbH19PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJjcFByZXNldENvbG9ycz8ubGVuZ3RoXCI+XG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sb3Igb2YgY3BQcmVzZXRDb2xvcnNcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJyYWluLWRyb3AgcHJlc2V0LWNvbG9yXCJcbiAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgKGNsaWNrKT1cInNldENvbG9yRnJvbVN0cmluZyhjb2xvcilcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicmFpbi1kcm9wX2J1dHRvbiBidXR0b24tZGVsZXRlIHNlbS1pY29uLWNsb3NlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVQcmVzZXRDb2xvcigkZXZlbnQsIGNvbG9yKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nSWY9XCIhY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aCAmJiBjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cInt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzc319XG4gICAgICAgICAgXCI+e3tjcFByZXNldEVtcHR5TWVzc2FnZX19PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cblxuICA8ZGl2XG4gICAgKm5nSWY9XCJjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLS1mb290ZXIgY29sb3ItaW5wdXQtY29udGFpbmVyIHNlbS1jb2xvci1saWdodC1pbnB1dHNcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgbXkxIHNlbS10eXBvLS1maWdjYXB0aW9uXCJcbiAgICAgICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgKGNsaWNrKT1cIm9uRm9ybWF0VG9nZ2xlKClcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2VsZi1zdGFydCBzZW0tLWxpbmsgXCI+Q2hhbmdlIGZvcm1hdDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZW0tY29sb3Itc3dpdGNoLS1jb250cm9sLS1saW5rXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvci1zd2l0Y2ggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtcmVzZXQgc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIGZsZXgtYXV0b1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDIgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIzNjBcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMzYwXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5oXCIgKG5ld1ZhbHVlKT1cIm9uSHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5IPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LnNcIiAobmV3VmFsdWUpPVwib25TYXR1cmF0aW9uSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5TPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmxcIiAobmV3VmFsdWUpPVwib25MaWdodG5lc3NJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkw8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAxID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBjb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LnJcIiAobmV3VmFsdWUpPVwib25SZWRJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPlI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmdcIiAobmV3VmFsdWUpPVwib25HcmVlbklucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgY2VudGVyIHNlbS10eXBvLS1maWdjYXB0aW9uXCI+Rzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmJcIiAobmV3VmFsdWUpPVwib25CbHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5CPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIlxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwicmdiYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIGNlbnRlciBzZW0tdHlwby0tZmlnY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAwID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncnBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0XSBbdmFsdWVdPVwiaGV4VGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkhleElucHV0KG51bGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZXdWYWx1ZSk9XCJvbkhleElucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW0tYnRuLWZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgY29ybmVyPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW11aS10aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbS1pbXBvcnRhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjcFByZXNldENvbG9ycyAmJiBjcFByZXNldENvbG9ycy5sZW5ndGggPj0gY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkUHJlc2V0Q29sb3IoJGV2ZW50LCBzZWxlY3RlZENvbG9yKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZW0taWNvbi1zZW5kIGJ1dHRvbi1zZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBjZW50ZXIgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIj5IZXg8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS0gU1RBUlQgLS0+XG5cblxuXG5cbiA8IS0tIEVORCAtLT5cblxuICA8ZGl2ICpuZ0lmPVwiY3BPS0J1dHRvbiB8fCBjcENhbmNlbEJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uLWFyZWFcIj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiY3BDYW5jZWxCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ7e2NwQ2FuY2VsQnV0dG9uQ2xhc3N9fVwiIChjbGljayk9XCJvbkNhbmNlbENvbG9yKCRldmVudClcIj57e2NwQ2FuY2VsQnV0dG9uVGV4dH19PC9idXR0b24+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImNwT0tCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ7e2NwT0tCdXR0b25DbGFzc319XCIgKGNsaWNrKT1cIm9uQWNjZXB0Q29sb3IoJGV2ZW50KVwiPnt7Y3BPS0J1dHRvblRleHR9fTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYGJvZHl7bWFyZ2luOjA7Zm9udC1zaXplOjEwMCV9aHRtbHtib3gtc2l6aW5nOmJvcmRlci1ib3h9Kiw6YWZ0ZXIsOmJlZm9yZXtib3gtc2l6aW5nOmluaGVyaXR9W2NsYXNzKj1cIiBzZW0taWNvbi1cIl0sW2NsYXNzXj1zZW0taWNvbi1de2ZvbnQtZmFtaWx5OnNlbWJsZXItaWNvIWltcG9ydGFudDtzcGVhazpub25lO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7bGluZS1oZWlnaHQ6MTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZX0uc2VtLWljb24tZHJhZzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ2XCI7Y29sb3I6I2NjY30uc2VtLWljb24tcHJvZHVjdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEzXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tZm9ybTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJhXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tbG9jYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxNFwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWNoYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzVcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi10ZXh0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDVcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1sb2NhdGlvbjI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0N1wiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLUk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNlwifS5zZW0taWNvbi1TOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDdcIn0uc2VtLWljb24tVTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA4XCJ9LnNlbS1pY29uLUI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwOVwifS5zZW0taWNvbi1qdXN0aWZ5OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGNcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTBcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1taWRkbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxMVwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTJcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1jb2xvdXIyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGFcIn0uc2VtLWljb24tYnJ1c2g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwYlwifS5zZW0taWNvbi1mb2xkZXIyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGRcIn0uc2VtLWljb24tbG9nb3V0MjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBlXCJ9LnNlbS1pY29uLW9sMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBmXCI7Y29sb3I6I2NjY30uc2VtLWljb24tc2VuZDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA1XCI7Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tcmVwZWF0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDBcIn0uc2VtLWljb24tY3JvcDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAxXCJ9LnNlbS1pY29uLWNhc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwMlwifS5zZW0taWNvbi1yZXNpemU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwM1wifS5zZW0taWNvbi1jaGVjazpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA0XCJ9LnNlbS1pY29uLW9sOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTVcIjtjb2xvcjojY2NjfS5zZW0taWNvbi11bDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE2XCI7Y29sb3I6I2NjY30uc2VtLWljb24tZm9sZGVyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTdcIn0uc2VtLWljb24tY2xvc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxOFwifS5zZW0taWNvbi1pbmJveDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE5XCJ9LnNlbS1pY29uLWhvbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxYVwifS5zZW0taWNvbi1zaGFyZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFiXCJ9LnNlbS1pY29uLWhhbWJ1cmdlcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFjXCJ9LnNlbS1pY29uLWxvY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxZFwifS5zZW0taWNvbi11bmxvY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxZVwifS5zZW0taWNvbi1lbGxpcHNlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWZcIn0uc2VtLWljb24tdm9sdW1lOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjBcIn0uc2VtLWljb24tcGxheTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIxXCJ9LnNlbS1pY29uLXZpZGVvOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjJcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1kZXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyM1wifS5zZW0taWNvbi1hZGRyZXNzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjRcIn0uc2VtLWljb24tY2VudGVyX2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjVcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1qdXN0aWZ5MjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI2XCI7Y29sb3I6I2NjY30uc2VtLWljb24tcmlnaHRfYWxpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyN1wiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWxlZnRfYWxpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyOFwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWNhcm91c2VsOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjlcIn0uc2VtLWljb24taW1hZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyYlwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWJhY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyY1wifS5zZW0taWNvbi1kZWxldGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyZFwiO2NvbG9yOiNkMDAyMWJ9LnNlbS1pY29uLWR1cGxpY2F0ZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTJlXCJ9LnNlbS1pY29uLWxpbms6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyZlwifS5zZW0taWNvbi1zdHlsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMwXCJ9LnNlbS1pY29uLWNvbG91cjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMxXCJ9LnNlbS1pY29uLWFkZF9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzJcIjtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1hZGRfYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMzXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1zZW5kMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM0XCI7Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tc2VhcmNoOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzZcIn0uc2VtLWljb24tY29sb3VyX2FjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzN1wiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLWNvbG91cl9hY2NlbnQgLnBhdGgyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzhcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmZmZ9LnNlbS1pY29uLXByb2ZpbGUtYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM5XCI7Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tcHJvZmlsZS1hY2NlbnQgLnBhdGgyOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2FcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmZmZ9LnNlbS1pY29uLWRvd25fYXJyb3c6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzYlwifS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzY1wiO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNkXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDM6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzZVwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGg0OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2ZcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLWxvZ291dDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQwXCJ9LnNlbS1pY29uLXBheW1lbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MVwifS5zZW0taWNvbi1zZXR0aW5nczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQyXCJ9LnNlbS1pY29uLXNpdGVzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDNcIn0uc2VtLWljb24tcHJvZmlsZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ0XCJ9LnNlbS0tY29ybmVyIC5fdG9we2JvcmRlci1yYWRpdXM6NTAlIDAgNTAlIDUwJTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9aW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTttYXJnaW46MH1pbnB1dC5zZW0taW5wdXR7d2lkdGg6Y2FsYygxMDAlKTtvdXRsaW5lOjA7Ym9yZGVyLXJhZGl1czoxMHB4IDEwcHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym9yZGVyOjFweCBzb2xpZCAjOTQ5OGEzfS5uby1wYWRkaW5nLWxpc3QgLnNlbS11bCAuc2VtLWxpLC5uby1wYWRkaW5nLWxpc3QgLnNlbS11bC1pY29uLWxpc3QgLnNlbS1saXtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saXt3aGl0ZS1zcGFjZTpub3dyYXA7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtwYWRkaW5nLXRvcDouNDVyZW07cGFkZGluZy1ib3R0b206LjQ1cmVtO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGk6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkuYWN0aXZlIGltZy5pY29uLWRlZmF1bHR7ZGlzcGxheTpub25lfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkuYWN0aXZlIGltZy5pY29uLWhvdmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkgaW1ne2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW4tYm90dG9tOjRweH0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpIGltZy5pY29uLWhvdmVye2Rpc3BsYXk6bm9uZX0uc2VtLXVsIC5zZW0tbGl7cGFkZGluZy10b3A6LjQ1cmVtO3BhZGRpbmctYm90dG9tOi40NXJlbTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZX0uc2VtLXVsIC5zZW0tbGk6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tdWwgLnNlbS1saS5hY3RpdmV7Ym9yZGVyLXJhZGl1czo3cHggMCAwIDdweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9dWwuY29ybmVyX2FsbCBsaTpmaXJzdC1jaGlsZHtib3JkZXItcmFkaXVzOjZweCA2cHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH11bC5jb3JuZXJfYWxsIGxpOmxhc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czowIDAgMTFweCAxMXB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3RvcHtib3JkZXItcmFkaXVzOjZweCA2cHggMCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2JvdHRvbXtib3JkZXItcmFkaXVzOjAgMCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX25vbmV7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2FsbHtib3JkZXItcmFkaXVzOjZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl9yaWdodHtib3JkZXItcmFkaXVzOjZweCAwIDAgNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2xlZnR7Ym9yZGVyLXJhZGl1czowIDZweCA2cHggMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl90b3AtbGVmdHtib3JkZXItcmFkaXVzOjAgNnB4IDZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmNvcm5lcl90b3AtcmlnaHR7Ym9yZGVyLXJhZGl1czo2cHggMCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX2JvdHRvbS1sZWZ0LC5jb3JuZXJfYm90dG9tLXJpZ2h0e2JvcmRlci1yYWRpdXM6NnB4IDZweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lciwuc2VtLWNvbG9ybGlzdC0tY29udGFpbmVyLC5zZW0tc2hhZG93LC5zaWRlYmFyLWNvbnRhaW5lcntib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4xMiksMCAxcHggMnB4IHJnYmEoMCwwLDAsLjI0KX0uZGlhbG9nLWNvbnRhaW5lcjpob3Zlciwuc2VtLWNvbG9ybGlzdC0tY29udGFpbmVyOmhvdmVyLC5zZW0tc2hhZG93OmhvdmVyLC5zaWRlYmFyLWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93OjAgMTRweCAyOHB4IHJnYmEoMCwwLDAsLjI1KSwwIDEwcHggMTBweCByZ2JhKDAsMCwwLC4yMil9LnNlbS1idXR0b24tZG5ke2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uc2VtLWJ0bi1mYWIsOmhvc3R7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjpub25lfS5zZW0tYnRuLWZhYjpub3QoW2Rpc2FibGVkXSksOmhvc3Q6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tYnRuLWZhYiBpbWcsOmhvc3QgaW1ne3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7ZGlzcGxheTpibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNlbS1idG4tZmFiLS1kZWZhdWx0PnNwYW57ZGlzcGxheTpibG9jazt3aWR0aDoxNnB4O2hlaWdodDoxNnB4fS5zZW0tYnRuLWZhYi0tZGVmYXVsdF9zbWFsbHtwYWRkaW5nOi40cmVtfS5zZW0tYnRuLWZhYi0tZGVmYXVsdF9zbWFsbD5zcGFue2Rpc3BsYXk6YmxvY2t9LnNlbS1idG4tZmFiLS1wcmltYXJ5PnNwYW4sLnNlbS1idG4tZmFiLS1zZWNvbmRhcnk+c3BhbntkaXNwbGF5OmJsb2NrO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHh9LnNlbS1idG4tZmFiLS1jb3JuZXJfbm9uZXtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1idG4tZmFiLS1jb3JuZXJfcmlnaHR7Ym9yZGVyLXJhZGl1czo1MCUgMCAwIDUwJTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1idG4tZmFiLS1jb3JuZXJfbGVmdHtib3JkZXItcmFkaXVzOjAgNTAlIDUwJSAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ0bi1mYWItLWNvcm5lcl90b3AtbGVmdHtib3JkZXItcmFkaXVzOjAgNTAlIDUwJTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1idG4tZmFiLS1jb3JuZXJfdG9wLXJpZ2h0e2JvcmRlci1yYWRpdXM6NTAlIDAgNTAlIDUwJTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNlbS1idG4tZmFiLS1jb3JuZXJfYm90dG9tLWxlZnQsLnNlbS1idG4tZmFiLS1jb3JuZXJfYm90dG9tLXJpZ2h0e2JvcmRlci1yYWRpdXM6NTAlIDUwJSAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse2JvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyZXk7cGFkZGluZy1ib3R0b206MnB4fS5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkuYWN0aXZlIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6OmFmdGVyLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGk6aG92ZXIgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbntib3JkZXI6bm9uZTtvdXRsaW5lOjA7Ym94LXNoYWRvdzpub25lO3BhZGRpbmc6LjM1ZW0gLjc1ZW07cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JvdHRvbTotMXB4fS5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7Ym9yZGVyOm5vbmU7b3BhY2l0eToxfS5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbjo6YWZ0ZXJ7Y29udGVudDpcIlwiO2hlaWdodDozcHg7d2lkdGg6MTAwJTtib3R0b206LTFweDt0cmFuc2l0aW9uOmFsbCAyNTBtcyBlYXNlIDBzOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX11bC5zZW11aS10YWJzLWxpc3QudGFicy12ZXJ0aWNhbHttYXJnaW46MH1AZm9udC1mYWNle2ZvbnQtZmFtaWx5OnNlbWJsZXItaWNvO3NyYzp1cmwoL2Fzc2V0cy9mb250cy9zZW1ibGVyLmVvdD85aWs0MmwpO3NyYzp1cmwoL2Fzc2V0cy9mb250cy9zZW1ibGVyLmVvdD85aWs0MmwjaWVmaXgpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLHVybCgvYXNzZXRzL2ZvbnRzL3NlbWJsZXIudHRmPzlpazQybCkgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKC9hc3NldHMvZm9udHMvc2VtYmxlci53b2ZmPzlpazQybCkgZm9ybWF0KFwid29mZlwiKSx1cmwoL2Fzc2V0cy9mb250cy9zZW1ibGVyLnN2Zz85aWs0MmwjaWNvbW9vbikgZm9ybWF0KFwic3ZnXCIpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH0uc2VtLWJ1dHRvbiw6aG9zdHtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjEycHggMTJweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSksOmhvc3Q6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfS5zZW0tYnV0dG9uLS1zZWNvbmRhcnl7Ym9yZGVyOjFweCBzb2xpZCAjYTlhOWE5O2JvcmRlci1yYWRpdXM6MTJweCAxMnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tYnV0dG9uLS1zbWFsbHtwYWRkaW5nOjZweCAxMXB4O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9LnNlbS1idXR0b24tLWxhcmdle2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9LnNlbS1idXR0b24tLWZ1bGx7d2lkdGg6MTAwJX0uc2VtLWJ1dHRvbi0tYmxvY2t7ZGlzcGxheTpibG9jaztwYWRkaW5nOi40ZW19LnNlbS1idXR0b24tLWxpbmssLnNlbS1idXR0b24tLWxpbmtfcHJpbWFyeXtib3JkZXI6MCBzb2xpZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2JvcmRlci1yYWRpdXM6MH0uYnVsbGV0LWlubGluZWxpc3QgbGl7dmVydGljYWwtYWxpZ246dG9wO21hcmdpbjowIC0ycHh9LmJ1bGxldC1pbmxpbmVsaXN0IGxpIC5zZWxlY3R7ZGlzcGxheTpibG9jazt3aWR0aDoyMnB4fS5idWxsZXQtaW5saW5lbGlzdCBsaSAuc2VsZWN0IHNlbGVjdHtkaXNwbGF5Om5vbmV9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLmFjdGl2ZSAuc2VsZWN0IHNlbGVjdHtkaXNwbGF5OmlubGluZX0uYnVsbGV0LWlubGluZWxpc3QgbGkuYWN0aXZlOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnJlZH0uYnVsbGV0LWlubGluZWxpc3QgbGk6OmJlZm9yZXtjb250ZW50OicnO3RvcDotNXB4O2xlZnQ6MDt3aWR0aDoxMDAlO2JvcmRlci10b3A6MXB4IHNvbGlkICMwMDB9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDI7ZGlzcGxheTpibG9jazt0b3A6LTlweDtsZWZ0OjM4JTt3aWR0aDo5cHg7aGVpZ2h0OjlweDtib3JkZXItcmFkaXVzOjUwJTtjb250ZW50OicnfS5idWxsZXQtaW5saW5lbGlzdCBsaTpmaXJzdC1jaGlsZDo6YmVmb3Jle2xlZnQ6MzglfS5idWxsZXQtaW5saW5lbGlzdCBsaTpsYXN0LWNoaWxkOjpiZWZvcmV7bGVmdDotNDQlfS5yYWluLWRyb3B7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NTAlO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NTAlO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NTAlO2JveC1zaGFkb3c6aW5zZXQgMCAwIDEwcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5yYWluLWRyb3BfYnV0dG9ue2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2ZvbnQtd2VpZ2h0OjcwMH0ucmFpbi1kcm9wX2J1dHRvbjpiZWZvcmV7cGFkZGluZzowIDAgMCAxcHh9LmJ1dHRvbi1kZWxldGV7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNkMDAyMWJ9LnNlbS1wYWdpbmF0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnNlbS1wYWdpbmF0aW9uLW5hdnttYXgtd2lkdGg6MzAwcHh9LnNlbS1wYWdpbmF0aW9uLW5hdj5kaXZ7ZmxleDoxO3RleHQtYWxpZ246Y2VudGVyOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmV9LnNlbS1wYWdpbmF0aW9uLW5leHQgYSwuc2VtLXBhZ2luYXRpb24tcHJldmlvdXMgYXtkaXNwbGF5OmJsb2NrO2xpbmUtaGVpZ2h0OjI1cHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zZW0tcGFnaW5hdGlvbi1uZXh0IGF7dGV4dC1hbGlnbjpsZWZ0fS5zZW0tcGFnaW5hdGlvbi1wcmV2aW91cyBhe3RleHQtYWxpZ246cmlnaHR9LnNlbS1wYWdpbmF0aW9uIGF7aGVpZ2h0OjI1cHg7d2lkdGg6MjVweDtsaW5lLWhlaWdodDoyNXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc2VtLXBhZ2luYXRpb24uYWN0aXZlIGRpdntib3JkZXI6bm9uZTtoZWlnaHQ6MjVweDt3aWR0aDoyNXB4O2xpbmUtaGVpZ2h0OjI1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO2JvcmRlci1yYWRpdXM6MTJweCAxMnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tcGFnaW5hdGlvbi5hY3RpdmUgZGl2Om5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLWF2YXRhcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4fS5zZW0tYXZhdGFyIC5zZW0tYXZhdGFyX19pbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uZGlhbG9nLWNvbnRhaW5lcntvdmVyZmxvdzphdXRvO2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9we2JvcmRlci1yYWRpdXM6MDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym94LXNoYWRvdzpub25lfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3A6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3AgLmRpYWxvZy1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjEycHggMCAwIDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3AgLmRpYWxvZy1jb250YWluZXItLWJvZHl7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci1mdWxse2hlaWdodDoxMDAlO3otaW5kZXg6Mn0uZGlhbG9nLWNvbnRhaW5lci0taGVhZGVye2JvcmRlci1yYWRpdXM6MCAxMnB4IDAgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItLWJvZHksLmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2Vke2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLS1mb290ZXJ7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWNvbG9ybGlzdHtvdmVyZmxvdzphdXRvfS5zZW0tY29sb3JsaXN0LS1jb250YWluZXJ7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWNvbG9ybGlzdC0tbGlzdHttaW4taGVpZ2h0OjIwcHh9LnNlbS1jb2xvcmxpc3QtLWxpc3QtLWlubmVye2Rpc3BsYXk6bm9uZX0uc2VtLWNvbG9ybGlzdC0tbGlzdDpob3ZlciAuc2VtLWNvbG9ybGlzdC0tbGlzdC0taW5uZXJ7ZGlzcGxheTpibG9ja30uc2VtLWNvbG9ybGlzdC0tY2xvc2VidXR0b257Zm9udC1zaXplOjExcHh9LmJyb3dzZXItY29udGFpbmVye2hlaWdodDpjYWxjKDEwMCUgLSAzMHB4IC0gMjBweCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MCAyMHB4O2JvcmRlci1yYWRpdXM6MTBweH0uYnJvd3Nlci1jb250YWluZXIgLmxheW91dHtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbH0uYnJvd3Nlci1jb250YWluZXI6OmJlZm9yZXstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwcHg7bGVmdDoxNXB4O3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czo1MCV9Lmgxe2ZvbnQtc2l6ZToycmVtfS5oMntmb250LXNpemU6MS41cmVtfS5oM3tmb250LXNpemU6MS4yNXJlbX0uaDR7Zm9udC1zaXplOjFyZW19Lmg1e2ZvbnQtc2l6ZTouODc1cmVtfS5oNntmb250LXNpemU6Ljc1cmVtfS5mb250LWZhbWlseS1pbmhlcml0e2ZvbnQtZmFtaWx5OmluaGVyaXR9LmZvbnQtc2l6ZS1pbmhlcml0e2ZvbnQtc2l6ZTppbmhlcml0fS50ZXh0LWRlY29yYXRpb24tbm9uZXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYm9sZHtmb250LXdlaWdodDo3MDB9LnJlZ3VsYXJ7Zm9udC13ZWlnaHQ6NDAwfS5pdGFsaWN7Zm9udC1zdHlsZTppdGFsaWN9LmNhcHN7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOi4yZW19LmxlZnQtYWxpZ257dGV4dC1hbGlnbjpsZWZ0fS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9LnJpZ2h0LWFsaWdue3RleHQtYWxpZ246cmlnaHR9Lmp1c3RpZnl7dGV4dC1hbGlnbjpqdXN0aWZ5fS5ub3dyYXB7d2hpdGUtc3BhY2U6bm93cmFwfS5icmVhay13b3Jke3dvcmQtd3JhcDpicmVhay13b3JkfS5saW5lLWhlaWdodC0xe2xpbmUtaGVpZ2h0OjF9LmxpbmUtaGVpZ2h0LTJ7bGluZS1oZWlnaHQ6MS4xMjV9LmxpbmUtaGVpZ2h0LTN7bGluZS1oZWlnaHQ6MS4yNX0ubGluZS1oZWlnaHQtNHtsaW5lLWhlaWdodDoxLjV9Lmxpc3Qtc3R5bGUtbm9uZXtsaXN0LXN0eWxlOm5vbmV9LnVuZGVybGluZXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS50cnVuY2F0ZXttYXgtd2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Lmxpc3QtcmVzZXR7bGlzdC1zdHlsZTpub25lO3BhZGRpbmctbGVmdDowfS5pbmxpbmV7ZGlzcGxheTppbmxpbmV9LmJsb2NrLC5yYWluLWRyb3BfYnV0dG9uLC5zZW11aS10YWJzLGZpZ3VyZS5zZW11aS10aHVtYm5haWwsZmlndXJlLnNlbXVpLXRodW1ibmFpbCAuZmlnY2FwdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9ja30uYnVsbGV0LWlubGluZWxpc3QgbGksLmlubGluZS1ibG9jaywuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9ja30udGFibGV7ZGlzcGxheTp0YWJsZX0udGFibGUtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGx9Lm92ZXJmbG93LWhpZGRlbntvdmVyZmxvdzpoaWRkZW59Lm92ZXJmbG93LXNjcm9sbHtvdmVyZmxvdzpzY3JvbGx9Lm92ZXJmbG93LWF1dG97b3ZlcmZsb3c6YXV0b30uY2xlYXJmaXg6YWZ0ZXIsLmNsZWFyZml4OmJlZm9yZXtjb250ZW50OlwiIFwiO2Rpc3BsYXk6dGFibGV9LmNsZWFyZml4OmFmdGVye2NsZWFyOmJvdGh9LmxlZnR7ZmxvYXQ6bGVmdH0ucmlnaHR7ZmxvYXQ6cmlnaHR9LmZpdCwuc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne21heC13aWR0aDoxMDAlfS5tYXgtd2lkdGgtMXttYXgtd2lkdGg6MjRyZW19Lm1heC13aWR0aC0ye21heC13aWR0aDozMnJlbX0ubWF4LXdpZHRoLTN7bWF4LXdpZHRoOjQ4cmVtfS5tYXgtd2lkdGgtNHttYXgtd2lkdGg6NjRyZW19LmJvcmRlci1ib3h7Ym94LXNpemluZzpib3JkZXItYm94fS5hbGlnbi1iYXNlbGluZXt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX0uYWxpZ24tdG9we3ZlcnRpY2FsLWFsaWduOnRvcH0uYWxpZ24tbWlkZGxle3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uYWxpZ24tYm90dG9te3ZlcnRpY2FsLWFsaWduOmJvdHRvbX0ubTAsLnNlbS1idXR0b24tLWxpbmssLnNlbS1idXR0b24tLWxpbmtfcHJpbWFyeSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b24sZmlndXJlLGgxLGgyLGgzLGg0LGg1e21hcmdpbjowfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLm10MCwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye21hcmdpbi10b3A6MH0ubXIwe21hcmdpbi1yaWdodDowfS5tYjB7bWFyZ2luLWJvdHRvbTowfS5tbDB7bWFyZ2luLWxlZnQ6MH0ubXgwLC5zZW0tcGFnaW5hdGlvbi1uYXZ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MH0ubXkwe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Lm0xe21hcmdpbjouNXJlbX0ubXQxe21hcmdpbi10b3A6LjVyZW19Lm1yMXttYXJnaW4tcmlnaHQ6LjVyZW19Lm1iMXttYXJnaW4tYm90dG9tOi41cmVtfS5tbDF7bWFyZ2luLWxlZnQ6LjVyZW19Lm14MSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbnttYXJnaW4tbGVmdDouNXJlbTttYXJnaW4tcmlnaHQ6LjVyZW19Lm15MSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse21hcmdpbi10b3A6LjVyZW07bWFyZ2luLWJvdHRvbTouNXJlbX0ubTJ7bWFyZ2luOjFyZW19Lm10MnttYXJnaW4tdG9wOjFyZW19Lm1yMnttYXJnaW4tcmlnaHQ6MXJlbX0ubWIye21hcmdpbi1ib3R0b206MXJlbX0ubWwye21hcmdpbi1sZWZ0OjFyZW19Lm14MnttYXJnaW4tbGVmdDoxcmVtO21hcmdpbi1yaWdodDoxcmVtfS5teTJ7bWFyZ2luLXRvcDoxcmVtO21hcmdpbi1ib3R0b206MXJlbX0ubTN7bWFyZ2luOjJyZW19Lm10M3ttYXJnaW4tdG9wOjJyZW19Lm1yM3ttYXJnaW4tcmlnaHQ6MnJlbX0ubWIze21hcmdpbi1ib3R0b206MnJlbX0ubWwzLC5zZW0tY29sb3JsaXN0LS1jb250YWluZXJ7bWFyZ2luLWxlZnQ6MnJlbX0ubXgze21hcmdpbi1sZWZ0OjJyZW07bWFyZ2luLXJpZ2h0OjJyZW19Lm15M3ttYXJnaW4tdG9wOjJyZW07bWFyZ2luLWJvdHRvbToycmVtfS5tNHttYXJnaW46NHJlbX0ubXQ0e21hcmdpbi10b3A6NHJlbX0ubXI0e21hcmdpbi1yaWdodDo0cmVtfS5tYjR7bWFyZ2luLWJvdHRvbTo0cmVtfS5tbDR7bWFyZ2luLWxlZnQ6NHJlbX0ubXg0e21hcmdpbi1sZWZ0OjRyZW07bWFyZ2luLXJpZ2h0OjRyZW19Lm15NHttYXJnaW4tdG9wOjRyZW07bWFyZ2luLWJvdHRvbTo0cmVtfS5teG4xe21hcmdpbi1sZWZ0Oi0uNXJlbTttYXJnaW4tcmlnaHQ6LS41cmVtfS5teG4ye21hcmdpbi1sZWZ0Oi0xcmVtO21hcmdpbi1yaWdodDotMXJlbX0ubXhuM3ttYXJnaW4tbGVmdDotMnJlbTttYXJnaW4tcmlnaHQ6LTJyZW19Lm14bjR7bWFyZ2luLWxlZnQ6LTRyZW07bWFyZ2luLXJpZ2h0Oi00cmVtfS5tbC1hdXRve21hcmdpbi1sZWZ0OmF1dG99Lm1yLWF1dG97bWFyZ2luLXJpZ2h0OmF1dG99Lm14LWF1dG97bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30uYnJvd3Nlci1jb250YWluZXIsLnAwLC5zZW0tYnV0dG9uLS1saW5rLC5zZW0tYnV0dG9uLS1saW5rX3ByaW1hcnksZmlndXJlLGgxLGgyLGgzLGg0LGg1e3BhZGRpbmc6MH0ucHQwe3BhZGRpbmctdG9wOjB9LnByMHtwYWRkaW5nLXJpZ2h0OjB9LnBiMHtwYWRkaW5nLWJvdHRvbTowfS5wbDB7cGFkZGluZy1sZWZ0OjB9LnB4MHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjB9LnB5MCwuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLm5vLXBhZGRpbmd7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5jb3JuZXIsLnAxLC5zZW0tYnRuLWZhYi0tZGVmYXVsdCwuc2VtLWJ0bi1mYWItLXByaW1hcnksLnNlbS1idG4tZmFiLS1zZWNvbmRhcnksLnNlbS1idXR0b24tLWxhcmdlLC5zZW0tY29sb3ItbGlzdCBsaSwuc2VtLXNlY3Rpb24tLWNvcm5lcntwYWRkaW5nOi41cmVtfS5wdDF7cGFkZGluZy10b3A6LjVyZW19LnByMSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse3BhZGRpbmctcmlnaHQ6LjVyZW19LnBiMXtwYWRkaW5nLWJvdHRvbTouNXJlbX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9wIC5kaWFsb2ctY29udGFpbmVyLS1ib2R5LC5wbDEsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbHtwYWRkaW5nLWxlZnQ6LjVyZW19LmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2VkLC5kaWFsb2ctY29udGFpbmVyLS1mb290ZXIsLmRpYWxvZy1jb250YWluZXItLWhlYWRlciwucHkxLC5zZW0tYnV0dG9uLS1wcmltYXJ5LC5zZW0tYnV0dG9uLS1zZWNvbmRhcnksLnNpZGViYXItY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuc2lkZWJhci1jb250YWluZXItLWZvb3Rlciwuc2lkZWJhci1jb250YWluZXItLWhlYWRlcixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257cGFkZGluZy10b3A6LjVyZW07cGFkZGluZy1ib3R0b206LjVyZW19LmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2VkLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLnB4MSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye3BhZGRpbmctbGVmdDouNXJlbTtwYWRkaW5nLXJpZ2h0Oi41cmVtfS5wMntwYWRkaW5nOjFyZW19LnB0MntwYWRkaW5nLXRvcDoxcmVtfS5wcjJ7cGFkZGluZy1yaWdodDoxcmVtfS5wYjJ7cGFkZGluZy1ib3R0b206MXJlbX0ucGwye3BhZGRpbmctbGVmdDoxcmVtfS5weTJ7cGFkZGluZy10b3A6MXJlbTtwYWRkaW5nLWJvdHRvbToxcmVtfS5idWxsZXQtaW5saW5lbGlzdCBsaSwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5weDIsLnNlbS1jb2xvci1saXN0IGxpLC5zZW0tdWwgLnNlbS1saSwuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntwYWRkaW5nLWxlZnQ6MXJlbTtwYWRkaW5nLXJpZ2h0OjFyZW19LnAze3BhZGRpbmc6MnJlbX0ucHQze3BhZGRpbmctdG9wOjJyZW19LnByM3twYWRkaW5nLXJpZ2h0OjJyZW19LnBiM3twYWRkaW5nLWJvdHRvbToycmVtfS5wbDN7cGFkZGluZy1sZWZ0OjJyZW19LnB5M3twYWRkaW5nLXRvcDoycmVtO3BhZGRpbmctYm90dG9tOjJyZW19LnB4Mywuc2VtLWJ1dHRvbi0tcHJpbWFyeSwuc2VtLWJ1dHRvbi0tc2Vjb25kYXJ5e3BhZGRpbmctbGVmdDoycmVtO3BhZGRpbmctcmlnaHQ6MnJlbX0ucDR7cGFkZGluZzo0cmVtfS5wdDR7cGFkZGluZy10b3A6NHJlbX0ucHI0e3BhZGRpbmctcmlnaHQ6NHJlbX0ucGI0e3BhZGRpbmctYm90dG9tOjRyZW19LnBsNHtwYWRkaW5nLWxlZnQ6NHJlbX0ucHk0e3BhZGRpbmctdG9wOjRyZW07cGFkZGluZy1ib3R0b206NHJlbX0ucHg0e3BhZGRpbmctbGVmdDo0cmVtO3BhZGRpbmctcmlnaHQ6NHJlbX0uY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5jb2wtMXt3aWR0aDo4LjMzMzMzJX0uY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5jb2wtM3t3aWR0aDoyNSV9LmNvbC00e3dpZHRoOjMzLjMzMzMzJX0uY29sLTV7d2lkdGg6NDEuNjY2NjclfS5jb2wtNnt3aWR0aDo1MCV9LmNvbC03e3dpZHRoOjU4LjMzMzMzJX0uY29sLTh7d2lkdGg6NjYuNjY2NjclfS5jb2wtOXt3aWR0aDo3NSV9LmNvbC0xMHt3aWR0aDo4My4zMzMzMyV9LmNvbC0xMXt3aWR0aDo5MS42NjY2NyV9LmNvbC0xMnt3aWR0aDoxMDAlfS5mbGV4LC5zZW0tcGFnaW5hdGlvbi1uYXZ7ZGlzcGxheTpmbGV4fUBtZWRpYSAobWluLXdpZHRoOjQwZW0pey5zbS1jb2x7ZmxvYXQ6bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNtLWNvbC1yaWdodHtmbG9hdDpyaWdodDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNtLWNvbC0xe3dpZHRoOjguMzMzMzMlfS5zbS1jb2wtMnt3aWR0aDoxNi42NjY2NyV9LnNtLWNvbC0ze3dpZHRoOjI1JX0uc20tY29sLTR7d2lkdGg6MzMuMzMzMzMlfS5zbS1jb2wtNXt3aWR0aDo0MS42NjY2NyV9LnNtLWNvbC02e3dpZHRoOjUwJX0uc20tY29sLTd7d2lkdGg6NTguMzMzMzMlfS5zbS1jb2wtOHt3aWR0aDo2Ni42NjY2NyV9LnNtLWNvbC05e3dpZHRoOjc1JX0uc20tY29sLTEwe3dpZHRoOjgzLjMzMzMzJX0uc20tY29sLTExe3dpZHRoOjkxLjY2NjY3JX0uc20tY29sLTEye3dpZHRoOjEwMCV9LnNtLWZsZXh7ZGlzcGxheTpmbGV4fX1AbWVkaWEgKG1pbi13aWR0aDo1MmVtKXsubWQtY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5tZC1jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5tZC1jb2wtMXt3aWR0aDo4LjMzMzMzJX0ubWQtY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5tZC1jb2wtM3t3aWR0aDoyNSV9Lm1kLWNvbC00e3dpZHRoOjMzLjMzMzMzJX0ubWQtY29sLTV7d2lkdGg6NDEuNjY2NjclfS5tZC1jb2wtNnt3aWR0aDo1MCV9Lm1kLWNvbC03e3dpZHRoOjU4LjMzMzMzJX0ubWQtY29sLTh7d2lkdGg6NjYuNjY2NjclfS5tZC1jb2wtOXt3aWR0aDo3NSV9Lm1kLWNvbC0xMHt3aWR0aDo4My4zMzMzMyV9Lm1kLWNvbC0xMXt3aWR0aDo5MS42NjY2NyV9Lm1kLWNvbC0xMnt3aWR0aDoxMDAlfS5tZC1mbGV4e2Rpc3BsYXk6ZmxleH19QG1lZGlhIChtaW4td2lkdGg6NjRlbSl7LmxnLWNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGctY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGctY29sLTF7d2lkdGg6OC4zMzMzMyV9LmxnLWNvbC0ye3dpZHRoOjE2LjY2NjY3JX0ubGctY29sLTN7d2lkdGg6MjUlfS5sZy1jb2wtNHt3aWR0aDozMy4zMzMzMyV9LmxnLWNvbC01e3dpZHRoOjQxLjY2NjY3JX0ubGctY29sLTZ7d2lkdGg6NTAlfS5sZy1jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LmxnLWNvbC04e3dpZHRoOjY2LjY2NjY3JX0ubGctY29sLTl7d2lkdGg6NzUlfS5sZy1jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5sZy1jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5sZy1jb2wtMTJ7d2lkdGg6MTAwJX0ubGctZmxleHtkaXNwbGF5OmZsZXh9LmxnLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19LmZsZXgtY29sdW1ue2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uZmxleC13cmFwe2ZsZXgtd3JhcDp3cmFwfS5pdGVtcy1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5pdGVtcy1lbmR7YWxpZ24taXRlbXM6ZmxleC1lbmR9Lml0ZW1zLWNlbnRlcnthbGlnbi1pdGVtczpjZW50ZXJ9Lml0ZW1zLWJhc2VsaW5le2FsaWduLWl0ZW1zOmJhc2VsaW5lfS5pdGVtcy1zdHJldGNoe2FsaWduLWl0ZW1zOnN0cmV0Y2h9LnNlbGYtc3RhcnR7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5zZWxmLWVuZHthbGlnbi1zZWxmOmZsZXgtZW5kfS5zZWxmLWNlbnRlcnthbGlnbi1zZWxmOmNlbnRlcn0uc2VsZi1iYXNlbGluZXthbGlnbi1zZWxmOmJhc2VsaW5lfS5zZWxmLXN0cmV0Y2h7YWxpZ24tc2VsZjpzdHJldGNofS5qdXN0aWZ5LXN0YXJ0e2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5qdXN0aWZ5LWVuZHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lmp1c3RpZnktY2VudGVye2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lmp1c3RpZnktYmV0d2VlbntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uanVzdGlmeS1hcm91bmR7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdGFydHthbGlnbi1jb250ZW50OmZsZXgtc3RhcnR9LmNvbnRlbnQtZW5ke2FsaWduLWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRlbnQtY2VudGVye2FsaWduLWNvbnRlbnQ6Y2VudGVyfS5jb250ZW50LWJldHdlZW57YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVufS5jb250ZW50LWFyb3VuZHthbGlnbi1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdHJldGNoe2FsaWduLWNvbnRlbnQ6c3RyZXRjaH0uZmxleC1hdXRve2ZsZXg6MSAxIGF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowfS5mbGV4LW5vbmV7ZmxleDpub25lfS5vcmRlci0we29yZGVyOjB9Lm9yZGVyLTF7b3JkZXI6MX0ub3JkZXItMntvcmRlcjoyfS5vcmRlci0ze29yZGVyOjN9Lm9yZGVyLWxhc3R7b3JkZXI6OTk5OTl9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLC5jb2xvci1waWNrZXIgLnNhdHVyYXRpb24tbGlnaHRuZXNzLC5jb2xvci1wcmV2aWV3LC5yZWxhdGl2ZSwuc2VtLWNvbG9yLWxpc3QgbGksZmlndXJlLnNlbXVpLXRodW1ibmFpbCxmaWd1cmUuc2VtdWktdGh1bWJuYWlsIC5maWdjYXB0aW9uLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0uYWJzb2x1dGUsLmJ1bGxldC1pbmxpbmVsaXN0IGxpOjphZnRlciwuYnVsbGV0LWlubGluZWxpc3QgbGk6OmJlZm9yZSwuY29sb3ItcGlja2VyLC5jb2xvci1wcmV2aWV3IC5zZWxlY3RlZC1jb2xvciwucmFpbi1kcm9wX2J1dHRvbiwuc2VtLWNvbG9yLWxpc3QgbGkgLmNvbG9yLWRlbGV0ZSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVyLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9uLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntwb3NpdGlvbjphYnNvbHV0ZX0uZml4ZWR7cG9zaXRpb246Zml4ZWR9LmNvbG9yLXByZXZpZXcgLnNlbGVjdGVkLWNvbG9yLC5kaWFsb2ctY29udGFpbmVyLWZ1bGwsLnNlbS1jb2xvci1saXN0IGxpIC5jb2xvci1kZWxldGUsLnRvcC0wLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9ue3RvcDowfS5yaWdodC0wLC5zZW0tY29sb3ItbGlzdCBsaSAuY29sb3ItZGVsZXRlLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9ue3JpZ2h0OjB9LmJvdHRvbS0wLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntib3R0b206MH0uY29sb3ItcHJldmlldyAuc2VsZWN0ZWQtY29sb3IsLmxlZnQtMCwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVye2xlZnQ6MH0uejF7ei1pbmRleDoxfS56Mnt6LWluZGV4OjJ9Lnoze3otaW5kZXg6M30uejR7ei1pbmRleDo0fS5ib3JkZXJ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHh9LmJvcmRlci10b3B7Ym9yZGVyLXRvcC1zdHlsZTpzb2xpZDtib3JkZXItdG9wLXdpZHRoOjFweH0uYm9yZGVyLXJpZ2h0e2JvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtib3JkZXItcmlnaHQtd2lkdGg6MXB4fS5ib3JkZXItYm90dG9te2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHh9LmJvcmRlci1sZWZ0e2JvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO2JvcmRlci1sZWZ0LXdpZHRoOjFweH0uYm9yZGVyLW5vbmV7Ym9yZGVyOjB9LnJvdW5kZWR7Ym9yZGVyLXJhZGl1czozcHh9LmNpcmNsZSwuc2VtLWF2YXRhciAuc2VtLWF2YXRhcl9faW1ne2JvcmRlci1yYWRpdXM6NTAlfS5yb3VuZGVkLXRvcHtib3JkZXItcmFkaXVzOjNweCAzcHggMCAwfS5yb3VuZGVkLXJpZ2h0e2JvcmRlci1yYWRpdXM6MCAzcHggM3B4IDB9LnJvdW5kZWQtYm90dG9te2JvcmRlci1yYWRpdXM6MCAwIDNweCAzcHh9LnJvdW5kZWQtbGVmdHtib3JkZXItcmFkaXVzOjNweCAwIDAgM3B4fS5ub3Qtcm91bmRlZHtib3JkZXItcmFkaXVzOjB9LmhpZGV7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O2hlaWdodDoxcHg7d2lkdGg6MXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMXB4LDFweCwxcHgsMXB4KX1AbWVkaWEgKG1heC13aWR0aDo0MGVtKXsueHMtaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo0MGVtKSBhbmQgKG1heC13aWR0aDo1MmVtKXsuc20taGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo1MmVtKSBhbmQgKG1heC13aWR0aDo2NGVtKXsubWQtaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX0uZGlzcGxheS1ub25le2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnNpZGViYXItY29udGFpbmVye2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uc2lkZWJhci1jb250YWluZXItZnVsbHtoZWlnaHQ6MTAwJX0uc2lkZWJhci1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjAgMTJweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tYm9keSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2Vke2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVye2JvcmRlci1yYWRpdXM6MCAwIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9ZmlndXJlLnNlbXVpLXRodW1ibmFpbHt3aWR0aDoxMDAlfWZpZ3VyZS5zZW11aS10aHVtYm5haWwgaW1ne2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX1maWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO21pbi1oZWlnaHQ6NDRweH0uc2VtdWktY2FyZC1mb290ZXJ7Y29sb3I6I2ZmZjt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjojMmEyYTJhfS5idXR0b24tc2VuZDpiZWZvcmV7Y29sb3I6I2ZmZn0uc2VtLWNvbG9yLXN3aXRjaC0tY29sb3JzIC5zdWZpeHt0b3A6LTRweDtyaWdodDo0cHh9LmNvbG9yLXBpY2tlcntib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt6LWluZGV4OjEwMDAwMDt3aWR0aDoyMzBweDtoZWlnaHQ6YXV0bztjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5jb2xvci1waWNrZXIgKntib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjB9LmNvbG9yLXBpY2tlciAuY3Vyc29ye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyOjJweCBzb2xpZCAjMjIyO2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpkZWZhdWx0fS5jb2xvci1waWNrZXIgLnByZXNldC1hcmVhe3BhZGRpbmc6NHB4IDAgMTVweH0uY29sb3ItcGlja2VyIC5wcmVzZXQtYXJlYSAucHJlc2V0LWVtcHR5LW1lc3NhZ2V7bWluLWhlaWdodDoxOHB4O21hcmdpbi10b3A6NHB4O21hcmdpbi1ib3R0b206OHB4O2ZvbnQtc3R5bGU6aXRhbGljO3RleHQtYWxpZ246Y2VudGVyfS5jb2xvci1waWNrZXIgLmh1ZS1hbHBoYXttYXJnaW4tYm90dG9tOjNweH0uY29sb3ItcGlja2VyIC5odWV7d2lkdGg6MTAwJTtoZWlnaHQ6MTZweDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBUUNBWUFBQUQwNklZbkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0QUlXRHdrVUZXYkNDQUFBQUZ4SlJFRlVhTjd0MGtFS2cwQVFBTUUyeDgzL24ycXU1cUNnRDFpRGhDb1lkcG5iUUM5YmJZMXFWTy9qdmM2azNhZDkxczcvN0YxL2NzZ1BydWp1UTE3QkRZU0ZzQkFXd2dKaElTeUVCY0pDV0FnTGhJV3dFQllJaTJmN0FyLzFUQ2dGSDJYOUFBQUFBRWxGVGtTdVFtQ0MpfS5jb2xvci1waWNrZXIgLmFscGhhe3dpZHRoOjEwMCU7aGVpZ2h0OjE2cHg7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQVFDQVlBQUFEMDZJWW5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINEFJV0R3WVFsWk1hM2dBQUFXVkpSRUZVYU43dG1FR082akFRUkNzT0FySGdCcHlBSllHamNHb2N4QW00QTJJSHBtb1dFMGVCSCtlem1GbE52VTA2c2hKM1c2VkVlbFdNVVFBSUlGOWY2cVpwaW1zQTFMWXRTMnVGNTEvdTI3WVZBRlpWUlVrRW9HSGRQVi9zSWNiSUVJSWtVZEkvOVhhN25leXY2MStTV0ZVVkFWQ1NjdDAwVFduMmZ2NnUzK0VjZmQzdFh6eS8wK25FVXUrU1Bqby9rcXpybWlRcFNjTjZ2OThYZXdmQTgvbE1raUxKMld4R1NVb3BjVDZmTTZVME5YOS9mcmZiamV2MVd0ZnJsWmZMaFlmRFFRSEcvQUlPbG5Hd2pJTmxIQ3hqSEN6allKbS9USldkQ3dxdUpYc2VGRnpHd0ROTmVpS01PSlRPOHhRZERRYWVCMjkrSzllZmVMYUJvOUo3dmR2dEpqMVJqRkZqZml2N3F2OTV0angvN2xlU1FnaDkzZTFmZk1lSXA2TytZUWpoby9ONzkxdDFYVk9TU0k3Ti8vSys0L0dveFdMQngrUEI1L09wNVhMSisvM09sSkpXcXhVM204M292djVpR2Y4S2pZTmxIQ3hqSEN6allCa0h5NWdmNWd1c3ZRVTdVMzdqVEFBQUFBQkpSVTVFcmtKZ2dnPT0pfS5jb2xvci1waWNrZXIgLnNlbGVjdGVkLWNvbG9yLWJhY2tncm91bmR7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNnQUFBQW9DQVlBQUFDTS9yaHRBQUFBaDBsRVFWUllSKzJXMFFsQU1RZ0Q2MHpkZndPZHFhOFRtSS93UU1yNUswSTViWkxJekxPYTJudDM3VlZWYmQrZER4NW9iZ0NDM0tCTHdKMmZmNFBuVmlka2YrdWNJaHc4MEhRYUNMbzNETUgzQ1JLM2lGc21BV1ZsNmhQTkR3dDhFdk5FNXErWXVFWGNNZ2tvblZNNlNkeUNvRXZBblo4djFIang4MTdNaWxteFNVQjVyZExKRHljWmdVQVpVY2gvQUFBQUFFbEZUa1N1UW1DQyl9LmNvbG9yLXBpY2tlciAuc2F0dXJhdGlvbi1saWdodG5lc3N7d2lkdGg6MTAwJTtoZWlnaHQ6MTMwcHg7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9ZQUFBQ0NDQVlBQUFCU0Q3VDNBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINEFJV0R3a3NQV1I2bGdBQUlBQkpSRUZVZU5ydG5WdVQ0N2dSckFITitQLy9Pci82MVk1d09OWjdtWjF1M1hBZUxNakpaR1pWZ2RLc2ZjNXhSM1MwUklJVVcrQ0h6Q3BjMk1jWW83WEd2M2V4N1VpWmQ1N3JqeXp6dit2KzMzWC9SLyszci9mN3ZSMzg2WStUdktOY2Yvd2RoVExQY3Y5cVUyd1pkNzR1dGgwdDE4MjFqa0laTFBjc0kvNm5XYTRYdnV0cXVVMFo4NW1ueDgwUy9aemdwbkxuT3RITnQ3L29meDFUS1hjU056Ti83cWJNUTNqdTdyTlFtTVlZZC80czJqOWFhK1ArZ0dhTWNacmIxTS90ZHJ2ZjcvZDJ2OTlQOS90OTNPLzNjYnZkeHUxMkc5ZnJkVnd1bDNFK244Yy8vL25QKzIrLy9YYjY2YWVmeGwvLyt0Zng1ei8vMllLNUFsMnJndmY0VXNicGRHckI1MmJBdkFyWHB1emptaXFBVlNHejVlRG1HWVh6aGJBWm1Dcm5temRkcFVVKzhZMWRBT1llWEN0RFV3VndWN1lDR0g2dUFteU1jWjlsNXZrVWFCUEdNVVo3L0o1dy83OTIvZnZ2OVhxOTMyNjNkci9mVHhQRUNlTUU4bks1ak0vUHovSFRUei9kdjMzN2R2cmxsMS9HUC83eGovRzN2LzF0L09VdmZ3a1Zzd29uZ2pkT3A5UHpIM1UzRDN6bVdHblpWWG40akNxczd3QzJCS1A0Lzh0QXprWnNvV3g2WHJxZUhaeW12cDRBQkNCSmhUUXdLZkRUOGd6clpDSXFpNUFoaUFDakJmRUIyclA4L1g2M01NN2Y2L1Y2djkvdjdYYTdiWUM4M1c3amNybHNWSElxNWZmdjMwKy8vZmJiK09XWFg4WlBQLzAwL3Y3M3Y0K2ZmLzc1SlN2YmV1K2JMMldNTWFGYkFscEJOTTg1UVgrY3Q2cW9TcWtQQXd1UWxCVktxR05GU1VPQUEzQm11N2dDNWhOT2QxNW5Td3ZBT1VXN0M0Z2lVQ1Y4U2duNUw5aE5GSXFUc3AwR3hJMHlzaW95akFqa1kvdEdKVkVweitmeitPV1hYKzdmdjM4Ly9mNzc3K1BidDIvajExOS9IVC8vL1BQNDlkZGZ4OGZIUndybVRqVjc3OUVYdTJweDJ4aGp3dGRKWlFjQVdRSVBMUElTc01KYVN3aUQ4Z3pJS3J3U3lBVEU1ajVuQWJSNWMxZEJVd0Jsc0VXVzBoNkxxaVlzcUZQQVF4Q3lSWjN3T1NBUnhtbFhNWDVrNjRwUWZ2djI3Zjc1K2RrK1BqNU9IeDhmNC92MzcrUGJ0Mi9qdDk5K0c5KytmUnNmSHgvamNybVVGTE8zMWdZRFdibHhSSXMvVHFmVDdvdXN4SnNBeFhBMkdjN1RBOVhkZ2Zkb0hiRnNqNzZYMisxV0FyZ0kxYWdlR3dBM3F1cHFvSHNtY2JJNkZ1OTNxdWdnRmE5ZDdMZUR0Z0tmQUZIQkorTkVCeUlrY0o1S2VydmRUbWhoR2NnSkpTWjV2bi8vZmorZnorMThQcDgrUHovSDUrZm5tR0QrL3Z2djQvdjM3K1BqNDJOOGZuNk8yKzFXczdKampQNndyYU1JNUU0Ulo4eDJ2VjVUU3drcXVvdFY3L2Q3VHo2SEZXc0QvcU5jZHcwQ1EzcS8zMjFjNjg2VHdEVklkYnV5NzN6TmxkaFNIYjhJMmtsWnpubStJbkJTNFU2bjAzMDJhQkZzTGhIREFLSlZKVmdsZkk5amh2dTUzVzUzc0xBTllOeEFpREE2TUNlVUh4OGY5K3YxMmk2WFM3dGNMcWNaVzU3UDV5ZVk4L2Z6ODNPY3orZm5zU21ZVXlrbldFRzg1V0JzdDlzdHpTTHlNZGZyOVFpMDhpWTE1VVowTGxER0xoUjNvNXpLMmo3T1BVVEQwRStuVTN0azdYYi8xNk5GYmhsb0FNdVkxempMVU9PM0JLZUlEZStaOHMzL0o0Z0ZvNFRNNWpQbXVSZzI4Zm9VS0tWU3dvMTZUZ0E1bnB5d2NXTEhnWWwvUHo4LzczLzYwNS9hYjcvOTFtNjNXN3RjTGllMHNaajRtYW81Z1R5Zno4OEUwZjErajhFY1l6d1RQRUcyY3FqeWZITkYwTThmdXFFaWFPVm5SelpaUU5oNWZ3UXlIZy9IREdmSm84OVExemIvcXV1NVhDNjc3M0kyWEtmVHFkL3Y5K2Qzd3VxV3ZhL1lUZFVkRVYzZmhJdi9WaXlwczZZRTN4M3I0M0s1YkpRUzY2emF4VkdGc3ZkKy8vajRhRisvZm0zZnYzOXZ0OXV0ZmYzNnRmMysrKy90ZHJ1ZHZuMzdadU5MQmFhQ01nVXpDK3JaUmlGb3d4VXVKSThZTXFjQ3A5T3BxNXZhZ2FZVTZsR0pBMVhRcWVqY2h3NkNqMEd3NW5ZQnJHdzAxQTJPMjA2bjA0QkdvdU5OeVRmcC9Gd0VsaFVleTZuWHJJS3c3UVFXZGR4dU4ybGRMNWZMODM5Z1NQRjhhaHUvSnZCTzQ4Q1BTdXFNZjhWcDkvUDUzTDU4K2RMdTkzczduOC90ZnI4LzM5L3Y5L2I1K1RraFBKM1A1Nm1RNDM2L2orL2Z2Ky9pU2diemVyMCtBWngvNSs4OGJ2Nk9NZGE2UzV6NmtkMjFmWUM5ZHh2N2NJSkoyZDlBT1MzMGZQTXp5SGlUTThCNERGNlhVbFlIcDRLUVczVysxdDc3TU5CMXZHSHhXcTdYYTd2Zjc4K3k1L041QStIMWV0Mjl4dVA1ZGJZdHlhUnU0QWtzYlBxNjkzNmZqUnpYUnhCYlByL2IrYjE4K2ZLbGpUSGFCQkJmbjgvbjAvMStIMSsrZkJubjh6bTBzQjhmSDV1NGNyNUd1QmhNVmswRUVuOVJzY3RnVmhNK2l4bEp0TUEyM1I4QjZ5eXNBc3RCT2dGWElLS0NNSWdUb01xTkV1MmZZTUg3enRjNzMyZFFLa0NqMXl0QVp0WTBLeDhwSXI4R0dKK0FUM1YrMkhpcmhsKytmQm1YeTJXejczdytiMTdQOHArZm44L3RVd0dWbGVWa1R5VWI2OERrZmF5V1k0enhOUmloVTRFcExKUFpWcksrdTdKNC9tZ2ZLcWVMVzlYMlJFV2xJdEwxZGl5bmJERGIzK2pYZ1lqUXFuMHJyeFdjK05rSUxQN0Y3eEliTXZ4N3ZWNTN4NDB4bmxiV0pGMTJaU2FnL04wcFc2dCtaem1PTXpIamFqS3dEZm9uZDc4ellUZGZxMTh1cDk3enIycTh2M0lpb0JwclJ0QmwwRVo5b2c1V0JSR09kT0hqSWpYRjdVb3RGYmdPV25YeklKeXpZdmpHNUlZZ3NtTU94SGt6OE9zTVNyVk5XZXE1VDhEYU9jYkV2MU9kNXJiczlhTzdZdk1ldDYzRWtGKytmTUV4cStNUmw0L0w1YkxaTi8rZXorZm5aNkthenVNcVhTUVZPNXNwSlhmbEhBSXplcy94SnNlY2tSSmlETW9nOWQ2VmZScnFYTXI2S3BWVjI3alJ3SmFjR292T0FNMXpNZFFNbndLMUF1Yks2M2tkQ0NodkkxQzdnMHo5bmYvRCtYemUyVmo4SDdHeDRQOWR1UWxzWUNycXlOOFhxRzNIbS8xME9qM2p3L24rY3Jsc3R1TStqUG1teFQyZFR1UHo4M1B6dDJwbjFYc0VIWC9iblBhVnFWbWgweHdPdDBvNlhMTEFIZVBVVTIwM3dIZmNyc3BDd21WM1RyeUI1czBNc2VlZzk3eC9Cd3pDakJsYkIrcFJBUGxhMEJWUXVUNlY2UUhkQmxqM2QwS0cxNDdiK0RxeFFlVXltRE80M1c0ZFFhcitUSWp3bUFkMHo4L2g2NXZmMC95THYzUGI1WExwcnUveWREbzlzN0VUMEkrUGo2ZEtLOVZVRUllS1dRV1BBT3JKOExLZDR2RSt0OTFZM2U3VUZsV2F0ZzJWd0puYitIUG10dm0vc2ZLNTkvT2FXRjN4L2VQMVVQSHZBNUREWURwWVhmYjBkcnYxVjJEa0JreHR3L3RFV1ZWbFhXZEM5cEZZczUvamZoOWRTLzE2dlc3czZsVEcrVGZxc3hTSkh4a1hYcS9YZHIxZXU0THNmRDZQM3ZzVDNONzdEa0wrelBtNWpTZEtMNHpSM0F4UWQ2ckhrTGtZbFNvd3NycTd6bnp1NndTd2RzTUpPWG1BNWZCY2p4dGdNR0JZSGxyNXpva2h0c01DVGdYTFFPVzRYQzZkRXlFTXByTDhtQVF6WFJnZHVpeDJ5WnpvcnhrWXNEbjNoQjFWZU1MR3NYc1Z0Z2wycFc4UzNzdmswdnc3UjRoTmFIdnY0Y0FDbDVIRnp3SUgwS2M2enU0WGpEUFIvanBBVnhXek8xWGsyRERiM3ZUY3hlR1UxaVdaSGttSURXemlXS3ZpckNKNERyYXZzNklKL0dHNmNUcVdkWER5K2ZBclFEVlZrTHFrVmpBb1pJSVRkbW1JcVh3cWE5NU4zK01HWW9aUWRSVk5PNTNZMXhSa2hPMTZ2WTdldTUwN0NhOWxKbmJHcHhPZW1RaFN3L0FRc21tcDV6VTlCaVU4RzZ3dlg3Nk02L1U2UGo0K2RvMEJ6NENwZ2lrblRVZURxd2xLQm1nM3U0T1ZqcloxQStyQWNnYWVqV3E2ZUpDdkNZRkRPTlN3T2dIWDRFUVJ3OGx4YnpET2RFSzZnWjNIazFiKzhnMm8xSkZ0S1h5di9mRWRUWHVXaldYZEFaaUJwNkFEZURyQ0ZpaW03QjZaRm5lZUk3R3ZtL1BNa1VEWDY3Vzd4SThiMEQ3L3Y4ZEE5cWZONW9hQ2Y3NFdaakgwbWYxY21mWTFZMEpVRm1WclRXdTh1emtOY0x0RWo3dTVGWEJUa2ZDNkdPQTVxOFlNeE84S1Z2RjZzQVZHZGNyVWJzS09EY1FLa0xNT01kbWx4dW02NDJZclBtMjZBbGhaVzFZQjFSK3JyR3N3RThUYVlBV2VVTXhkZitXandTdloyRWYzeXRPeWZuNStQcFZQQWFxT240M010TkJxdm1qanhiak00bFpqWlk0Z3FOTUk1a3RhVy9zWUtOd1MrOWxGUXpHaWhtTUNLUGE3K1owVjZFYjBHUm1vYnRwWDhKbGpXdTVGTUxONWphNmhHOWt3UWdacWY1KzFOSDVVeHprRlJlQ2RXaEo4WGRsR1VreE83SFJsWVJtNG1WTzQzVzd0ZXIxMlRQSkV3L3JtRU4zTDVTS0hJV1pnOW16K3BVb0tPWXE1YkpUSmRYMmdtZTFVY3hNWlFGYUVRSWxIY3QzMk0rWTFCekdrR3V6Zml5QU45eit1Z3BsWjFzeW1DckRDWVlrR3hEVHBJOVJ6Qnkwckh5ZURVQzFuV2FlVWFEOW40eGtOeVlNQkRadHpaM0IrK2ZKbFkyMVhGRE9jQVJKbGFiT3lpUzN1Q3BMSTlqclpqQ0RrYVZ2Y0NDandvZ25LU2hXZHpYWldsWk12VlRnRDhMcHFsQ0xycWdiY0IrcVl3cmdLWXBUMGNjQ3FiS3lDVmFsa0VhYm4vRnlub2dDclBLZnFmNTF4SjdzR0IyWlhjWm14b1NPenRqeDMwMERaaTdhMC8yQUlSMFVsQmFnOVN1RHc2S2NBemxhQjd2SFp2V3BqSzkwZHlycTZiS3lEVVpRYlIwQjA1YmlMUWtISWNTVW1nSUsrU3d1cWdIQ25vaW8yUlFVMXlqK0JuQnk5cHBoVktMR3lDN1p6RksxcHhXSytFOEloVkNXTE4vdUx0blVVNGF5b1lMb2FBTno4RmR0YVN2WTRwVjBCRVcybHM2MWN6cWxsQktwVHlLZ01BaHJaMWNkYzFSUk90UG12V05rZGNLWjdaS3hhV2ppUExKTXBwN09aS3hBK3JxRy9vSkxqeGYwcG5KbHFMb0RabzNneVUwbUtHeXMydGFLZWNqL2QxQytySlNwbEJxbFR5QXFnUitEOEtqS2xtUkwyZ3RVY0FkQ3RzTCtpakNOVDFvcXFxa0gyT0hFYkc1c0RGblVnNUFhK3lMb3UyVlUxcHRqMVMyWlFxdjFPUlpOOUlXelJmZ2FSQnhLb0JFOFVXeXFsSkZ0ckljMEF4TmpTamVkOTlDVFkvWERmU3pDejVNMElab1ZFc1duUEZOVHNsOG9vVkMxVHpiR2dxRlpORFNnVndLSysxc0dETUtxeFpDV0dWTUR5c2lFcjFqVlNRSlVZd2o1aUhPbFRoZEh0NDRTUWc5Q04rbmw4RDkwTk1JZ0FkZ3I0NkpxUmlSOUk4dlJkRnZicjE3bS95eFVNS2pOTE1pVlVBRHd1MkNXR2hoaStGNTVUV005TTljb2d6bXMxZG5NNHVPRi9MQUVZV2RjcW5NN3lGbXlxM0lmd21PUk9kN1kxaUZXdE9qb1k4VG80MW1UVjVJeXNnRkZ1UnpzYldGR2JOSUlKQ0R2MWRPbzRsWkc3aldCd1JGdFZUS3VXeWVDQnlKS09hbjhvWjNlcDlYZGRObDB0RHVheXdMejljWFBZZURBQTBTcGtCTzlzYlZjVE9WV2xkUHY0dXl6RWt6eEh0anZvbkhvU2tGRVdOb28xZDhEaGNRcHV0ZDJwcE5vbjRCem9BaUoxaEJGUWcwZFZ0ZGJHSEhEUVd1c2htTkVRdWtMTTJRTzFHMlk4YmdUWHFGaGNCSmo3RWpQZ2NQdHM4VVM4cVBwUEIvZFh6bk9oNVo0Mzh0ekg1ZWM2UWdyT0tyUlJmS215c0JtVURCK1BoWWFiTWxWUEVSK0dDU0lUVHpyN2FtMnRBckgzYmdjRXpQSm0rY3I1ako0Tm5ITkZEVnJGWGNJNUxlOWs1Sm53K2JlZGJWK0ZmUnpaSUhhT09hT3NMWTAvN1VHczU4RGpyR3dLTUlNRklHek9FVzEvakdzZEF0Q042aEVBSTRoQmU5WVhlUlJPQlNWUEFWUEFxdklNNWJ4NWhWS1dBTVA2ekJSeTNpZXNjcmlkVmRGQmluQnhYRG5HMkdSWTJYYkN2cDFsaHZHdE85Qnh1NWg5MDhYUXU0MmxuU0FyTUZkaXpNaW04dXdSQ3hQR25uT1M4bHdwbmJPaURxVEFqc3JSTi9QY29BU2NDYmFBQ3FWTTQweWxuampUQnMrYndXbEFHMjMvVUtiZGtpd0tXSVFQR3pXYWN6cG9TbHhQRWo4MjJjTldrcFM3Rnl6c0RycXBmZ3BHM2phaHcydmdiYVNRQXh1TFdaWXQ3Snp5TmU4Sm9acE5BY3ZERk9kdzB3cVlUOUFLMXJaei9EZGJTbExQcDByeUl4Z1FKbEs5QVpsRXE3SU9YcG9oZzlQSWhyQ25nODhKc094aVY0WldBWWZnNHNpa3gvOGt5Mlo5bDg2MnVxd3Jmc2NJSDgrdWdUbVZHeWlkZGVWWVVnRU1uNEdaemcxNEV3SXNoOXN4MmNLS2lXWFJldU9FNWd6R09RZ2RsUktWVmRsZXZxYjI3OVhxMFFuc3RzMlZEYUJPMGNvZXpzcnVXdEhBcHU2c0tHNElCaE4wYUdVMmtMck1LR1JUTjNIbWJDRHdLVjE0enZrTUVERzRRZlpWc3BWbGFOVTJtaGM1VEVaM04xaC96cVRoZXVMcFcwNVpXVEdWamIzZGJuTm14S1pCbk44SnFpZGFWTEtBT3lBUk5MUytNQjU0WjIrVmFxb01MS3JvVkJsbmdlZm5UUEFjb0hOV0NTdmxmQThDSTBIRW1CTkJuQmxYeU1yelU3QTdXVm05NFBQcVEyZ21xS3grV0RHc252aWxtY1NPQkpxT0sxbll5QUl6dUF5ZXNxM1VkU0szS2ZXY1lLRDk1SG1mWU9VM3FzZXIyQ3RZRVVBK0ZwZnFkTnZnUEJaVUJoRHJHT05SVmxRc2g4ckxjYVVDeWtIRzBPT1V3VGxMQnJzaDVzb0VNR2V6aTFFNEhSVnQxaWNwNXdaRUZYZGliQ2tHOFk4dlg3NXNiTzRFMGlvbTl6K2hqU2lPZnkzRGhwWEl0cFZoRStVR1Fkdm9XanRDaG1yR0hmNFlBektnQk5uR3R1SnhGQ2VHZGhVQWZRTExLOGtCWUFQNmd2RkpaYWpNRzNYa3ljeThLdUMwcTRFeXltd3R3ZHhkdjJNMG1JQnRLMExLbmY2NDBqMDBBdXE0Z1VrZFdHbGhzMjJxSmM2ZFpDc0wxOW94bmxUSkc0U1lWUklHcEQ4VFBGQnVNNk9FbGJTMXBsZGlkNG1HQXlONlpJdXBiQzViWEpOOWZkcGJUaFN4TFVhSThJRzFYSVlCeFczVGpzNktRb3NLY3hmeGNRbWRud1JHTTEwR25GY0N5MlhZdW5MTXlBa2RnazRtZVBpY3pzTHlndGhjQnV0NmdvT3FTN1lWRlhBRExqYW9zQjZzNm9mY1pXQVpTSVJZcVNVa2l6WXd0dFlhYjN2VU9ROXcySFJ4SUlnOFd3UlZlRTY4eGk0VXRMM3pScGh4cGx6d3VacmNxWUNxMUkzalBJNWRuSkl5Z0VvaE1iUHFWSlN6cnd6eEJKVHM1ek4rUmVVU2d4aWtQUVZGM0pWQmVOUXhiSEVOckVNTnZFZEZaVlY5bEg5K09SR0VzTlpRcHlUTmM0QzNBRzdYRjRuZ3pxK0RyTzJ6YnVhYU9YZ2RhRmNka0VvdG9TRkJWWDJxSjBDOE9XWmVHNEtHbHBnaEEwWGZUT1BDcVYycXF3UTI2UVdmRjJQTUxoSTJ3MWxWQWEyYVBzWWQwemEyNU1RUndnY1pONnVRRENpK1p4aUQ0WEVNMmtaeE9UNDFGblpuYVJsY3Bab3V6bFJxcWRiUVZXb3BRb1NCNThSVjUwbEJOckhpL0F3WFM1THJ3RFZscFkzRmMzQnlpWUdjNTJUcmlzdDZrT1hkd0luQVF0SnBwNVFjaHlhcXVZT1Y3U3UrZnhWTWFWM2RjMFJFMlM2bVVZMGdMdDJwTWNZcXJLSVE5dzJsMWdwUVVNdFFZY21tYnQ1RFROeGRoblVDalFxdGJLOVNVU3p2ckMwbW1oaEUxZTJGUzIrb3h5cHkvWkFTdXRrbXRqeDN2Y0JDMjRQWDY1bmJxa0JDUmhmalM5a0lZUG5lZThjTWFnVk9oSS8zVDFmQW1kdEFXWnNDc3dUSkNrUVZOYTBxV0tTS1BPcEhBVWhEOURyYlZjeW9Za3dxaHZoMTd2WUFheVhMUXlLR1lkeGxVREZwNDk0ckJYUmpZZ08xN0REWWV0TklVai9lenA2UzBsbmxwRXdzV21KTWtPd3NLWGVaS0VBaklIbjBFUUpJU2FSQmNPNlVNSU56N3AvYkVqam53NGZ0K3htRHZrc3hYNEcycklyaXM3cWFlS3dBRk1QMk9pN240Y3JpdVp3dHBTVXdwZkx4U25PUlNySXF1c2M1WkZhWHlzcVJXamlaMkR5QVdFSUwzNXRWU29RRWxGQUNqT2VHR1NFN0FIRVFnZG8vTFN2Q09nR0J2a3hzbURidmxTM0ZwNXZoYUIyVEFHcVJLcktLTXJoTFZwYUd6RVZqWjBPUXhEaGFDVEErUXlSUjFkMTVhUXpySm50TDNSaWJzaXBqRzZqbGdMNHlxYlMwc05ZZzFlODR2aGJCVnJFbEs2NENVY1dZWERmS3hocEl1eGlWSlpVeHNiTXkvdVJCS1ROUlE0a1EzTGRSWUxTMHJKalJQbFRQcVk2Z2RKc0VEYythUVhBbitIZ3NOVUNiUnVGME9qMHp3bkE3YldEa2JoTzVFbnMwMHFlUWhTMWxhQk1sNU0vY0FheHNMRjhyS3lxbCtUZjdFTExFR3UvaXhpaW1kQ3ZvMFRqZnBqS3dhZ2dlbjRlaDV2N0xva0xLYkx1eXZIaGNaRzhkaEdyRUR4N0hnOTNacHBKRjdxQnFPM2lWdmVYRURRTkluemVvZThZcTZlUGFaQloySnZpTTNXMlVBR290ZWtSQ0FHcTRFa0YxWDNET25SMTF5UnNCTDF0UmEwUFZjWmlORlhaMmMzNEZza3ZvbUluUVE2bHpwSm9aYkp4azQzTndLSkZCcXVKU3NyQnlIeWR4S09uVHhRQVNCbVMzaitKTW5zSFNsYTNFYzZLOVZXb0pWbjl6Zmp3T003aHFZQUFxSlF3RTJhM25BNDhKMlFHZWdSa3BaTml2U1kreXMzRWtLZDRvSkl3c3ZJSGwzY1dnTHQ1azROSDZPbXRMV2RwdXJPa3dFTXVwWWM3ZU10RFJoT2NJMnVpNUpoVkl6WHpMeXRvL0dBUHVab3lvOHdrb2R1VmdKZ2xDdDdPaEdiZ0lENE1xNHNpKzYzelVTMUZ1RkZYRmxxeWFqMmVtSGxMTWNCcVl1MEZNdVIyOEJiQjdsT3hSTVNpQ1FYRmhDS3V3a2haK3BZRGlHU2dic0tLVjhNaVNSc3VIU0lXTTlya2xSaUlsWlp1cVhqc1FLOG9vWUpNZ3EzSktXVmtoSGJoc1Z4RlV6dGhPV1BrWWlqY2J4NTRJS3NTZFQrdUxyM2NyR0t5b1lnRmlHUjlpQms0a2Zsb1VYK0pJbFFSUXFhYm1wZ25ocXRwUXBiNlJWUTFXSDVEbnJTNGhFb0dacWFlclEyZGhGYno4WGVQeFNobURibzcwZUlTam9vck8ydks4U0pYSTRTVW1FVTR6V0tEelVEdFdUWXc3eFhsYlNURWo0RlJnN3pLbktvR1JBTHYwR3M5VGdjMUJwQ3l3R1pSUUF0cVZ6MnhyQmNBTXpFcGZad0ZTYTJHNVcwUUJGalNNYXBXQUVGYTNIY0dON0N4RHpFQ3lJa0o5N3F3cnFXTlRXVm84NzZQUHNqUGtqMnd2Z3JvTTVsTFpLTUVUS1ZxbC9Ddm5XVkZpRmEvU3pKVVF3a29ac3I2N1k2dmxTUlYzLzJ0bU5UT1kzdm5heFl3TXVvUEtxZHpSMXc3SXFIeW1sUHhhQVRoZlU3S28yWlhZajRBWUpITCtrTmRLd1JRWUVTVFJhNWZzVVovclZDMVRNVHlXVnlZb3FOdHV6YUhzTXl2MnR2b2FyeGRmcXdZZ1UxYXhGby9jbnFsMUZHc3FLK3VBUk9WOEJYNEdVOFdjWlRBVGkycTdRY3lpME8wVitHaFdCTU5SVWtuOEgxU3NXVkU1QnkzR2kwRUNxVWVKb0JmQXREYTRhbWtkWEczN0FHUDVHZ2ViODRwN1VhenBvS1J6ZEZ6ZVE4SGtvSEd4cHJLeS9IcG01dDEycDQ3SjZ4VFlERXo3dUlORVhTdXhZWHZGc2tZQWMreVN4SDlzZjVmdEt6VTZJYndWQmNVR2c1ZTVGTUNFWFNFclpSMHdHYXlWMTl3b005Z3VQalRxSmRWVHFSNHVFNG5KbkxsZFdWa0VDQ1pMZDJWTEYreHRhbWV4N0lwaXJpU0RVcHZycG45bHJ3R01DSHlwcE1IK3BzNkxJTHN1RkdVajFYRU9YaXFicVNIUFVLbkNscFdWNjhrcXRVUlZORFk0VE5hb2N5a29ZZVRVNW5nR0VRYS9TMURubkU0QWVYTWNLakhQQW1GVmpDQkVOYWV5TFZOSGZyM3B4OHhVc3RKOTRoSXBmSDRIS0UvZURhQXJLNmxTeVZWRmJkdDFneFRJVmszcHBwVmxGWGk0cEVoVkJUT2JxdW9oVTg1TUxYbjFpYWh2VWtISmpTQ01jMDF0TEZ2ZVZWQngwRG9kTTZqZnRDdTdET3RJell4cmMwcXAxSkdQMmF5WUZ6MkdiNkh2TXJPOGNuR3RWNkdqbTN1SW1TZkQyR3BXSzZ1b3diWkdNeEZLUUNvMXBPTXRjTVhGcFJzdCtoWEdvQW9tRjNzU1RCR2dUZ2xiQktXd3NRM3RacWFZU3AwWjFDaW1SRFdGY0NKVVBZSjAwQkk1RmtLWU5vaWZ1UXhtTjg4U1dWWFdMTWFVcXFxZ0MwQm1RSlI2c2szdTlOQ2Y2allMWHhBZnFzWUVnVkxBaFJZMkF0Z3RmbFpORm1GeWh4ZHJMa0FkV2xrNEQ4OE0yaXhIeWVwSWRoTUhyRy9pUjFaR3RxME1HcGJEYlJQWU9YZVNZMU02Tnk0WnN0dkdTa3RLK1hiRlBBVGoyRDM3MXNhUEVzQU1YaFhyc1owa20vWFN0a2hoTXlCZnNhNnVYRlplMlZDZStZTXIxK0dLZ3dyUXlOWXExVlJyQitFaXpBb3c2TnNkTktjeVZFa1llTTczeXM2cTRrQUhwNkJpRmtsVGtJclZDNW9ZVjd1endPR0N6NFVKMFN0cTJsV01KeTR3dGIrUmV0TDZ0WkZpY25KbUJ3NVVqQ3ZYWE1aVkpYMk1Ra2JmK1hONUVXZDc4Vno4L0pFc01aVEJpS056c20xaW5MUlVRNzRINE5pZGFxSTY4ajVzQUZneGNSdmVDN2llTEpYZlFZeGpaWjJDc2lXRmV3WlhKbUJJbFoxdGR0clg0aFN1YXRlS3NvL1JaT3RPS1cybm1xMW9UemVLNmRSV0FXdTJOUlZiNGhxMFNYbTFHdnR1Z0hyYnI1SVhxbVNrdGc1Q3VERTJNU2xQd3NZNWtORTJXcDNBcWlaYldWTEF4aUJGKzJpQlpidU5qNk1CNnJzTUxDN0Z5YXNhWUR5bzdLa29QeUV0dzNwRU1YZlB2eEFKaTJqQVFRZ2pyejByTElaU1dabElvTmh3ZDV4SzRBUjltWU5qV0FhTHJudUltSmVCVk45ekJPUk9iVnZicittVFRmRlNFSkxTUm5IbzdoRUpvSWk4TUZxanhtdmdtRjVVUlp6NHpMRmdaWjhDdHUyWDdnZ1ZjY0ttOWdWeElzT0hxeFhnTk1LbkZXWlluZjFkQm5PaGF5WHExN1F3RmxXVzA5ZU5LeVZKRm1YcWFPTkdBNWFDZWdNYkozVVVrR1kxaWMzbktXZ2pxOHFmVllHUUcxZ1J0NnJzNjJhNkhpcXFVT3FkZXNLNU5tWDRuR29mSm9pRTFkMGRGOWxWVmt2VDEva0VFYWFDb1lPd0ZwY1Zjb0xNKzc2NjlQeEM5cldxa3RIMHNXVVlsZDBWQ3B1Qlovc3RWUmNHZ3k5V1gyK1UxUXRoaTlTekFxU3h6WnN5K09pRnpCWW55U0dWNkdrdTQ0ckQ4QkNPWkJWM0J2RDUrQUtSSE53TUVzQjZFekhuSnBrVEFlaVVsRUdrY0VDZUI2R0RaVHA1WUVKVGx2ZHJrbnhZalRsbE1rZk50WHdEak03dVZqSzVKWFVVbjQzcnJxcEsyanl0YXhIVzBNNUc4REM4cnRITVlzN0tTZ2R1VlFNR1RZRnFGdlZTNnJrRDNzREo0NmFmZFlGd29xMTFBT0tDQkxodndvVWdjOElHQU55Y1I2a25acmRKUGRzdXhueWpmZDNGb3ZUbFJNZEVkdE9sNUNNVjVFSHNYUUJpczdUT3d2SURaYUdqMlZucGJoN2NwSzYzVndZRU1Md3Fianp5bDY5OXNhd0ZGa0YxeXFqVVUzMUhmQzZzVzFaRlZGdVhWWFZnejlrZUVhdzB5czFsV2ZtK2F6UUFRU1dBK2hLWVZmc1pqUG5jQWNVQjlvSWF5eS9VWlhSTmNrREdqaTc3R3NXYnZCbzZ0UHJXUHFPeVZrQlVxK0lOZXFwek5kWXMvdTBpZmg1cW1wcUlXKzMzSlZTVWN3WTcwS0w0VTlsWWRVNmxqdFNsczdsbWZpOWczWXplUWZWa2FHRmFWM09EQ25hRDJOOHdzRURGa2xFM1J6TTNaZ2hkWWtXSHNzenE3MEZJZWNuS2tWa3Q4ZXpNelJxOWJrR3VLb2pSTEJWU29kM1kxeVBxS2dZVzdKUlFUUFZ5eTV4SVlMak9neGdUNTJSS0pVWTFkT3JJaVJkNGZ1dFF4L0E1QWNTbUVqejB2Rldya0x6dmJXQXU5SE9XYkdneEZrMVZOVHBuQktrNlRnd2lzSS9IY3hZWFAxdUFXTzcyVUxGbEJUcSthU3UyVlRVczZocnhNMkNGK2hFb3IxVklBOVptRlVhYWIxbFNTZ1pzVnM0c3h6SGxWTG9KSHI5SDREaE9OVGtJMVhDMC93aVkyTm9XQUc1UmxuSEZucTZvTGNjcFFkZE11Si9PMTdKVkE1T0hMaTBCcUN6dHE3WTErK3VjQ2Q5OHFMSThNSUhCVi9jS2p4UVRtZTNoRkJTM015Q3FuRHN1eW0ybzgwSGp2RkZUdHJVUm1OYUdKc21WYWhJbWpUc1VYS3RRWlRBVnM3TXZ2OC8rZnpVclpBWGNMSjZNNGtvZTZYUDBiNlNtV1dORHp5VXBROGJsK0x0V3g0dHVxWjM2Y1JZVjN5dVZ4UE53dklpcWlRQ1NtdTdzcmdUelI2bmt5aHBDYXJYd0Z5MXZHZDVpUDJjWTA2bEZyNU5qaGhnMVk2K05CMjhmdGJLODNzOHJmN2tMSmJLd0RGUGJMZzI1YTBBZFpKRWlxcjVwaGl4S01EbFJVdGNzc3ExaHJpTHFHb0gremVOZ1ZtOU9lbWpzRVRWOEpkRjBOSG5rSUZ4V1kxT0I0WXJwN3J0V0o3TmdBQUFQWGtsRVFWUTNvTnM1bnBseVZmOHUyRm9MdTFKckh2ZWFaV1FqcUFrc2h0RmEyZ3pzU0czWnBrYnZnM0hhZkY5c2xQUGxsZGpGbEs4MEd5c204TXI0TVBobmVOV0VOUEdqQUlwbWlsVFBBVGRUUlRYbENCWUhZQVF1UHdBMzZ4SXBXdEdONHEzWTJNaGlHc1VwdVNTbmxFSlJEOFBvckM3Q0ZZVncrRjUxcVRoZ2FieHNUeFd6Q0dZMFpTc2IzbGZxQXkwT1BOak55OHhpUVFLc0hZRlEySEJaVnZWYkJ1cTNtMW9XS2FqcWFvbnNNNnVaVXI2Q2pYV05aMGw1RTNoM2pVUm1hNmtQM01KSWl5MUxtK2thaFFxNDFOMmlaamE1c2p0bExZTlpIWnJINnFVR200dk1iRHA2UncyQ0ZtdnV5RmtyQmNDeU10RnFCYUVDbXNIb0s5QloyTEEvbEpjUnFTYURxbmFXYnJaZEdhejNETGdJdkJsbjR3b0d6dGJ5Skdxc2x3eGtoaEhyVGpUWUZYQ3RPb0tTOHVMZG9mVmRBYk95bEdVNm5sWXBYV1p0czRuWEJxNld4Sml0TU5va0hVSm5ibkpwbFFtK2FHcFkyYTVHTVYyUUQxaFJ1YkJQRktkdW1mNU9Ia0xIejBGOWx1RTVrakJqUmEwbkZFNUNVR3FIdzMyTW1qWjZ4a2dJTlZuU25aMVZaU3RLMnFLbFJhTGxRZ0s3dVRxN0pGWEp3TSszU09FS3loWk5JK3RKMEk1cU1ZeTlrMnFKRDdkVldkcUtYYTBDS05SMENjamcrQjJJWXUyZmNCWkpaa01GZ00xMXIwWDkyd2lsZ2hGR2d6Vm5leGxxQjd4TDltUzI5U2lZVVZZMm5YT1pqTkJSc3lEc1FQUldXNWhyWjRYY2RDNEhWV1JiamdKcjRzRm9mSzVTempRN3JoSTFVZWJkUGRFYmo2c3FJdlRaUVo1dmEwOHJBQnNBVzBVeGVXeXRBazdBMktKOVpweHpDaW9CMjRYRnRZQWVYWXhyNmFuU3FoTGdwcEVxV2JHd0x1blRnclYrSWpXbEwyOWxqYUFsNEVRTUdzRXJwNGFwZVppcXV3UlhMWEFxT0NlcnUzMm1teWRjNm9XVFNXcEZBR2R6ZVRCOFJUSFZNRXRsTTkwQ2JiUUNZaFBqcTNlZ1lyMUZHZFlJUWppdURHWjV6Wi9Bem9iS0dPeUx4dGk2YzRSd3R2MmFueVdsTElDbmxMaHhKUlh0NkE1ZWJEQldGTk9OYnhXWjJkMDJtbnU0UzlZRUNwZXBwVjF6U1dSQld4SFl6Vkl2MUNYU291d3FxWDNqQkJCRFpkWVFicFRRVzRaUWxTOHI1a0g0c3VTUm1nMisrM0pOMTB4MVBhQW1Fa210WWxFZGVHcEpFTTZrT3VDcUNSMjJvU3VqajVJVjJIZFQwemo1cHJMS1RqWEZBUGpkUWx5cTd4SUJ4QVFQNXlNY3pHNFZ4QUt3MG42aWxaMlFCY2UycEx1bGt1eHhxbm9JekZmZ3F5cWppbDlTMVZOd0JyRm1leWVvcHM4eU9qWlV5YlpkZlM4Q3VhVElKdW16czV0T0RhTnRMcEZEUS9QY0pHd2VMaG1lTDFuQjBLcWlVRFNjc2lVVkQ4OURpM0h0ckt0U1VMdzNSTGl5Z1pEKzdzRjhKVE9iZ1lzckd2RE5VRlJHbDFpeTBMbDFZa1VjMmFKWU1vZzkyMEk4cVc2WURDZzFNcWswSkhKRktYa2JnYlJyZUkrcXBZTk9aSHJWY0RVYmE3cGpzcGhTSk50SzZ1cGdSTkFWb09TMG11Z0JlTjRiSVpnSGh1UFovczFFTmFYNktzVnIrWU5yaDFOYjdpcFIwUEU1emJOUmVnQ2JySFJVdzZZZjA3ZExCSmwxZjhLQjlhczJWMW5OcUFzbDYyTEJCaGVod2FsZXJrSG1CMUpGSUVaS1NFdXNkbDVKUWoxbkpsSFhTQ0YzNDJnSjlDWUdyWGVsa25KSVhxVlA4c0QrcXRwbENSM1hIMnFmS3EweWdNcCtLblZrS3hObFo4bTJZa0lsVk1pQ25YVXdsN3F6bkJLU3ZRejNtM1B0Nm9RYlhPNWI1Rml4Q2gvZkh4VVFXL0FFY0s2ekNOcUtRbkw5c3l3cW1LdXd2cVNZelQvYVBWTk5wVnlodlJXMjFhcWNpQ3NqZFd2QndJTFV2aDVWeUN6YldvQzFwSmpKNjgwQ1dzbCt1ZEtCNlQ1UndHMW1sb2hubHBiZzQ3aXo1VTloYTBGR3RtUkxGWUJ0Tzk5eTk3QXAweitaRFRBb2c2a1NMWnNNSGcvSUZra2dwNkNwdlUyVTBjWVZTZG5ta2p3QmRPbVhieFRXTld6dUliaXBNaW9WeEVja1pFb2FoU09peTJNM0swamNDMUxoVkR3YXFHMFp2a2NXcUNuckc0R0l4eWtycWxiV2R3NkxReUJhWlI4SG1MUkloUVdzSHN3RDQyWlhWTE5rZjlsK0ZsVzBIVlEybHdGc0MvWjFGZHpsUVIwS2FQZm8rRmRmdSsvZHdWUklDdTFDR1I3QUVJaUFoYytBWlVGMGtPQmFQeG1VcWc0aTY0dlFuVTRuRkRZSjlOeisxZlZYdmVIOXFtcitrUElMeDhvS2NSVi9CRmJ4YkUwSk1UMGtTRDR3NkwvbE5ZOG9jc3FhZ1ZkVTNBM01qeGh4Y0d1cXpzUEg0aXJwYW93MXE2T3lyVmp2cDlOcGM1OUU5MUxsZGJvWVZ6SldkaW1XZkFXMlNORUtjRGFYMkZtQkxMQS91S3hsbWhoNjEzSXMxVVJRQXBiS2Z0dHd4TDAycTZPbng1cFF4U2JQb2pBZyt2NWhBbk42TEhWUkRYSXN2S3RSamlTMHFKVXlaVEFYVmJBSzgyRWxGSldhUWRWb3FVQzFVbnQ3QlZhVFF1ZE02U3VxZXhqUUpONCswaWNheHYvdXRiS3Y4M0VUYlQ4SDhnamNPS3hPSm1iVWE2T09WWGh0M2RGWTZySHY5WG9OekZMY2VFQTFvOCtwS20wTEFIUEhaMnJZS2pGcTBoZlpGaXhzcUhKZ0QzZUQ1bitVMGtiMW1GalhrbjJsdk1TU09zTkUvQ2RJQUtGMFN5dHE2dXJPSFVONWd3ZzRHWm9zZ2JtZ2dNNXVjcmEycXJTMklnMWNiaUJCY3hZemd6VUROTEN2TDhHYlpYTnA2T1J5M0xtUytLazgzelJJQUs2QTFpb0thMkk5TmFwSXVpVUZkZkM5NzY2UEZaVXRxVXI2S2JXayt6WlUxYS9acklYRXp0cmpUT2Z6N2h3S3ppQ2VYSWFyYUh0YlpJTXorMnBHZ2F6Q213NHFXQUZ2RWRob2RZcDBYcTBwVjdHMVlXWVdiTzRxaEdxNDIrWjhCWXRyTFd2bHVOUHBaQWVhRkZTMXZ1YlBnYmd4c3FjcG5BYXN6Qm92S2FGb0RROEJHdGpmVU9sNE5BRzJubVFWMDRmZUpndW12WDJmc3JRRVdaZ2hMMEpuVmRZa24zRE9aSWVSTjg2UnFQV0Ntc3ZHVnFFTVJud3hRQXh3UzhFTVlvM0l6bVkyK0JDY0xwNE1LaXV5dWhJbWFtbGJaRmNOb05sN3RwK1JIZDE4WmpRSVJLeVhkRlJoTjk4L2h5S3F3WFdObzdPMXdpYVhvSE4xMDhSRVpaV0VxNmdybklmanplZzhqZFJmMVhFTDRra1hhNWJCakt4b0thbGpCamVIbFZ4UTRHYXljcFc0bERPQUt0blR4SEF0T2Z6T3Rad0hBTTdzcVZYa1Y2eXU2a2FwMW5Ia1hLcVdGLzRYSHFqZW5OS3FCanBSM2wxY2gzRWpnMStFc2dkUWhzZEcwQjRGTTlzV0FWV3B1QXlpd1RQbGVaeHQ5VnlaVlMycVhmUmVXcVRBaWxwcjlBcG9XVGp4eW1pdDdOd1Y0SlRyaVp5T0E5QjBrN0hGZlVMb3VybUtZSFZuUlF2cUdMNUhNSGRxRmNSMnFXcG1jSzZlVHd4MmRpcFdydmlEaWxyK2ZLV3EzT1dSV2RIS3dBNGV1OHdqY2hiZVJ6RmlscWpqWk4zdWZDcGZrSjAvc2NWcG5ZazZMMFBJNzdseGRXQ1o4N1dpV203Qi9BR3F1UVNudWpHS3NCOENKbWlKcThxMXBLSVZXeXFPaVRLNjZyMThCTjhyNzQvQUU3MWZkQzN5UFMyTXhkT3BuRTF0bFZ4RDlKbVZPb2dnTityNFBqQVhWRlBhM0VnNWpWSkdGVlVHTm9sSDIwR1ZyVUI3Qk95U1dxNldxWVFkV1I5MnBjRk1ZTXdja2JTZ0NLQ3FENjdEaWlXdTFnOE1RQzlCeWZjRnFXMUwrakw3MTRxTkN1em5vU3h0MGRhMmd0V04xRzhGMEJLME5OMG51aW1lbFVGOWRJZEFmak80NFVUM0NqUUxvVWVMSEpGVE8zZ21wUnVJSU92d0JRQ2JxTmVvM3F0WjlpRjZ4VksxM0dSbG80enFpbXErQ0dkVGlSMXVSWThvcWdFMDJoWkJhNzlrWlhQTXF1eFJIS2xhMnNhWldONG1ScVpVajB2TENLaGtqS25xT1FITnVTWlZKb0t2QXFTMXdwRXF1dldEQzFCMnlwd3JDUHNSTUVQVlRPRE1MSk1EdjZxZUtYd2kySllWNVNxNHFLeXZnR3NIQ0xpdWoyalI1OVY4Z01xU0oyRkpaUlhFSFZSSGozc0ZQcmN0Nk9wcWxXMUdwYXRRZHQwR3Z3Zk02bjYzSW5zR1ZGaEpHYUJxZ3FxSVY2SXNYbGxaZ3lTUHE0UjNibnQzd2k1Y3YrY04yeXFRTFcxVDk1S1lWc1dXdEtrNGNCOVc1M1dRUWZsUVlSNldsNEhhSlpqdlZFMEQ1eXZxK1JLZ1pDczVxZEJFUDVzRDk0Y0F2UUxsU2dOYVNNQXRIeDg4QnVOUTQxemRGc1gzMHpLYmNzME1MRC9paGtwUXpsMHdpVHFLTFRmYkttQ215WUlDbkswSWJhaWVDNENHOWlTeUxRN2NJTUdRd2F1NlRLb3E2MEFwbDNXTjQwTFpwY2ExQ0tLSzlWUXl5SUVuOHcwRjhGNkNMMmg4bzNpeEd3QzdzN0VXekNPcW1jQXBZeFlENGpzQXpWUzBzbDJ0OThwQTd2cktvcGhDVlNvbmJZcGdINm12U24yNHBUQlY0c2R0VjNCdE1xNWs4MnkrSUFEdlVKMHVBbGtDVlR4SWFQbStVTnUvcWtWNEYxVHpIWENHclhJQXFJdEJLeXBxSzk5VnRBT1ZzNjRPNE9iWDdwSExWQ3BZSGNSbXd2TFI3VHZZQUtCQk41OExHVnpEdUZ6K2hRYldnbmNReUNaQWsrVmJzUFNvdWY5MzI2MWlaZ21mQ3B3UmJBdnFtU3FyaVUyUHdoamFvT3lZcXRJZWdWWFZpVHNteXRhNmJHeVNwWTNneVJycEl5QWVhV0REeHRwc1h3S3lhbE1ES05QN1lCWE1xRXNrVXNpMnVDOEZOQVB4QUtUVmZUMW82VnpNMEUwakYrMXJXY1V1SHZkeWc3dmdvRnBsWDhIcHZIcE1DT01SVVBIelprSW5zcWxGS05YL0VJTzUyRTBTeFN6T3dvYjJWbVJMVzVEMVhJVTByYmdNMUF6V2d5QzdmZThHN3hVQUsvdGFFQmF0N2x1cXR5UDdFbXNhSlFPajVGK21yblpmQ3VZQ2ZCVUFXd1NoeWQ2cE1ZL3ZBSEcxVXFPWXBiSS9neTVUMENNS20rVU8zZ0Z1Qzg1ZGdmRFZlZ3VQRGZJVHJJQkxzTHJjZ2RoM0NGZ0ZaamFLSjRJdjNGOEFORXF2dXhSMXRWS09nTG9DYTFqeGJvQkFrajZ2N2ovaWNGYkE3ZjRyZlJuUURMUlZpRzEzaTB2cUJRcllWcUJiQURaVDBacGlIb1N6dlFwb3BLSUZTM3NFMUhmQldsSFhkMEg3TG5BcnF2b3VnTXRsakhCZ1puaDNFb3ovQktqTE1MNFoyQXEwK2hFSnI5amFWVUJidk56Q0lVaXJvQzdBV21tRnc0bzVBSzNNdEI1VnlwWk1TRmdzMDVKeUdWd2x3QnFzRUdBQWEyWlUxQ2pVZXhYR3NFNHJLcmlpbEJ2RnpPS0tvM0F1QXJvRTZRRlFVM3U4WXBOWHdTNWsrMVRadDVVcndvdU40S2lVRXcrazNaV0RwMVJYSE5ScVhiMjFUczM5OTQ1eVpTZzNWblpGTlE5Q0YzWGVaeXI1RGdCWEtpd0NNYTJNeGVURFlYZ1AxRnNmOVFOS1pjMGs4MVJKazNyNkVRM3JDbUJWeUxMNzVFaloxcElWREhvRnRpT0FIb0IwQmRUVnlscUJzS0tLUytBZUJYSlZMWStDWEFTdUd2Ty9BdXE3R3VFakRmR0tnMW9LYTF6L2RtbWk5STlTVUdOaGwwQXRmdWxIQWF3b1lyblNrbU5YQVZ1R0VockVWWHZVRitBNUN0MlBxTk9qRGV0eW5hNENtZVVvbG1lWExONEFxN0M1U2oxMFE3eWpnbCt0NkNOeFNSSG1JNVgrQ3B3cmVZQjNRZmRxbmE0cTIxS2RCdWM0R29ac240OVpPT2lWaW53SHFLOVd6anZnZXdlRWgyQVU1K3Z0eFo5Q2Q5V3FraDQ5VjE4RTVvajZ2VnluMFJTdEF5R0lPNWVkWFJLZDVCMFZHVlhxMnlyM3hZcCs1VXQrQzRRSjRQMU4zMzlwUU1qUmVqajR2Yi9EY3I2clFjM08vMHJqbXRacGVZQ0JpQ0hmQ2VtUmJOaGJLL3BOVVBjM3dmS3k1ZjJEN09sTDMvdVBodmUvb1U0VDBGOGYrVk5NMnZ5b2l2MGpLK0tIUWZkSHErMGJuY3o0b3o3My8rWTZMYkt3MW8vNUI3ZU9mMVJsLzBkdTlCOXRuLzlidnJmL2ordjBoNnR0bjJ0cC9yLzQ4MTl5NC96djUzOTF1dnp6ZndEaWZ6NnBoVDFNUGdBQUFBQkpSVTVFcmtKZ2dnPT0pfS5jb2xvci1wcmV2aWV3e2Rpc3BsYXk6YmxvY2s7d2lkdGg6NDBweDttYXJnaW46MCBhdXRvfS5jb2xvci1wcmV2aWV3IC5zZWxlY3RlZC1jb2xvcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2JvcmRlci1yYWRpdXM6NTAlfS5yYWluLWRyb3B7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjZweDtoZWlnaHQ6MjZweDttYXJnaW46NHB4IDZweCA4cHg7Y3Vyc29yOnBvaW50ZXJ9LnJhaW4tZHJvcF9idXR0b257Zm9udC1zaXplOjZweDt0b3A6NnB4O3JpZ2h0Oi05cHg7cGFkZGluZzouM3JlbX0ucHJlc2V0LWxhYmVse3dpZHRoOjEwMCU7cGFkZGluZzo0cHg7Zm9udC1zaXplOjExcHg7dGV4dC1hbGlnbjpsZWZ0O2NvbG9yOiM1NTV9LnNlbS1jb2xvci1kYXJrLWlucHV0cyAuY29sb3ItdHlwZXtjb2xvcjojNTU1O2xpbmUtaGVpZ2h0OjIycHh9LnNlbS1jb2xvci1saWdodC1pbnB1dHMgLmNvbG9yLXR5cGV7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyMnB4fS5zZW0tY29sb3ItbGlzdCBsaXttaW4taGVpZ2h0OjUwcHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgaXNJRTEwOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBoc3ZhOiBIc3ZhO1xuXG4gIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcblxuICBwcml2YXRlIG91dHB1dENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgaW5pdGlhbENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgZmFsbGJhY2tDb2xvcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgbGlzdGVuZXJSZXNpemU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lck1vdXNlRG93bjogYW55O1xuXG4gIHByaXZhdGUgZGlyZWN0aXZlSW5zdGFuY2U6IGFueTtcblxuICBwcml2YXRlIHNsaWRlckg6IG51bWJlcjtcbiAgcHJpdmF0ZSBzbGlkZXJEaW1NYXg6IFNsaWRlckRpbWVuc2lvbjtcbiAgcHJpdmF0ZSBkaXJlY3RpdmVFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgZGlhbG9nQXJyb3dTaXplOiBudW1iZXIgPSAxMDtcbiAgcHJpdmF0ZSBkaWFsb2dBcnJvd09mZnNldDogbnVtYmVyID0gMTU7XG5cbiAgcHJpdmF0ZSB1c2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBzaG93OiBib29sZWFuO1xuICBwdWJsaWMgaGlkZGVuOiBib29sZWFuO1xuXG4gIHB1YmxpYyB0b3A6IG51bWJlcjtcbiAgcHVibGljIGxlZnQ6IG51bWJlcjtcbiAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgcHVibGljIGZvcm1hdDogbnVtYmVyO1xuICBwdWJsaWMgc2xpZGVyOiBTbGlkZXJQb3NpdGlvbjtcblxuICBwdWJsaWMgaGV4VGV4dDogc3RyaW5nO1xuICBwdWJsaWMgaHNsYVRleHQ6IEhzbGE7XG4gIHB1YmxpYyByZ2JhVGV4dDogUmdiYTtcblxuICBwdWJsaWMgYXJyb3dUb3A6IG51bWJlcjtcblxuICBwdWJsaWMgc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xuICBwdWJsaWMgaHVlU2xpZGVyQ29sb3I6IHN0cmluZztcbiAgcHVibGljIGFscGhhU2xpZGVyQ29sb3I6IHN0cmluZztcblxuICBwdWJsaWMgY3BXaWR0aDogbnVtYmVyO1xuICBwdWJsaWMgY3BIZWlnaHQ6IG51bWJlcjtcblxuICBwdWJsaWMgY3BBbHBoYUNoYW5uZWw6IHN0cmluZztcbiAgcHVibGljIGNwT3V0cHV0Rm9ybWF0OiBzdHJpbmc7XG5cbiAgcHVibGljIGNwRGlzYWJsZUlucHV0OiBib29sZWFuO1xuICBwdWJsaWMgY3BEaWFsb2dEaXNwbGF5OiBzdHJpbmc7XG5cbiAgcHVibGljIGNwSWdub3JlZEVsZW1lbnRzOiBhbnk7XG4gIHB1YmxpYyBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW47XG5cbiAgcHVibGljIGNwUG9zaXRpb246IHN0cmluZztcbiAgcHVibGljIGNwUG9zaXRpb25PZmZzZXQ6IG51bWJlcjtcblxuICBwdWJsaWMgY3BPS0J1dHRvbjogYm9vbGVhbjtcbiAgcHVibGljIGNwT0tCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBjcE9LQnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY3BDYW5jZWxCdXR0b246IGJvb2xlYW47XG4gIHB1YmxpYyBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZztcbiAgcHVibGljIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY3BQcmVzZXRMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdO1xuICBwdWJsaWMgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlcjtcblxuICBwdWJsaWMgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhbjtcbiAgcHVibGljIGNwQWRkQ29sb3JCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBjcEFkZENvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZztcbiAgcHVibGljIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb2xvclRvZ2dsZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdodWVTbGlkZXInKSBodWVTbGlkZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FscGhhU2xpZGVyJykgYWxwaGFTbGlkZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZ1BvcHVwJykgZGlhbG9nRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBDb2xvclBpY2tlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlclBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gICAgICBjb25zdCBodWVXaWR0aCA9IHRoaXMuaHVlU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBhbHBoYVdpZHRoID0gdGhpcy5hbHBoYVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICB0aGlzLnNsaWRlckRpbU1heCA9IG5ldyBTbGlkZXJEaW1lbnNpb24oaHVlV2lkdGgsIHRoaXMuY3BXaWR0aCwgMTMwLCBhbHBoYVdpZHRoKTtcblxuICAgICAgaWYgKHRoaXMuY3BPdXRwdXRGb3JtYXQgPT09ICdyZ2JhJykge1xuICAgICAgICB0aGlzLmZvcm1hdCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3BPdXRwdXRGb3JtYXQgPT09ICdoc2xhJykge1xuICAgICAgICB0aGlzLmZvcm1hdCA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1hdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdGVuZXJNb3VzZURvd24gPSAoZXZlbnQ6IGFueSkgPT4geyB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTsgfTtcbiAgICAgIHRoaXMubGlzdGVuZXJSZXNpemUgPSAoKSA9PiB7IHRoaXMub25SZXNpemUoKTsgfTtcblxuICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuaW5pdGlhbENvbG9yLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLmNwV2lkdGggIT09IDEwMCkge1xuICAgICAgY29uc3QgaHVlV2lkdGggPSB0aGlzLmh1ZVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgY29uc3QgYWxwaGFXaWR0aCA9IHRoaXMuYWxwaGFTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgdGhpcy5zbGlkZXJEaW1NYXggPSBuZXcgU2xpZGVyRGltZW5zaW9uKGh1ZVdpZHRoLCB0aGlzLmNwV2lkdGgsIDEzMCwgYWxwaGFXaWR0aCk7XG5cbiAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoZmFsc2UpO1xuXG4gICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgfVxuICBwdWJsaWMgYWRkQ29sb3IoKXt9XG4gIHB1YmxpYyBvcGVuRGlhbG9nKGNvbG9yOiBhbnksIGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2VydmljZS5zZXRBY3RpdmUodGhpcyk7XG5cbiAgICAgIGlmICghdGhpcy53aWR0aCkge1xuICAgICAgICB0aGlzLmNwV2lkdGggPSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlaWdodCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDMyMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRJbml0aWFsQ29sb3IoY29sb3IpO1xuXG4gICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyhjb2xvciwgZW1pdCk7XG5cbiAgICAgIHRoaXMub3BlbkNvbG9yUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0dXBEaWFsb2coXG4gICAgY29sb3JUb2dnbGU6IGJvb2xlYW4sXG4gICAgaW5zdGFuY2U6IGFueSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY29sb3I6IGFueSxcbiAgICBjcFdpZHRoOiBzdHJpbmcsIGNwSGVpZ2h0OiBzdHJpbmcsIGNwRGlhbG9nRGlzcGxheTogc3RyaW5nLCBjcEZhbGxiYWNrQ29sb3I6IHN0cmluZyxcbiAgICBjcEFscGhhQ2hhbm5lbDogc3RyaW5nLCBjcE91dHB1dEZvcm1hdDogc3RyaW5nLCBjcERpc2FibGVJbnB1dDogYm9vbGVhbixcbiAgICBjcElnbm9yZWRFbGVtZW50czogYW55LCBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW4sIGNwVXNlUm9vdFZpZXdDb250YWluZXI6IGJvb2xlYW4sXG4gICAgY3BQb3NpdGlvbjogc3RyaW5nLCBjcFBvc2l0aW9uT2Zmc2V0OiBzdHJpbmcsIGNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3c6IGJvb2xlYW4sXG4gICAgY3BQcmVzZXRMYWJlbDogc3RyaW5nLCBjcFByZXNldENvbG9yczogc3RyaW5nW10sIGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoOiBudW1iZXIsXG4gICAgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZywgY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzczogc3RyaW5nLFxuICAgIGNwT0tCdXR0b246IGJvb2xlYW4sIGNwT0tCdXR0b25DbGFzczogc3RyaW5nLCBjcE9LQnV0dG9uVGV4dDogc3RyaW5nLFxuICAgIGNwQ2FuY2VsQnV0dG9uOiBib29sZWFuLCBjcENhbmNlbEJ1dHRvbkNsYXNzOiBzdHJpbmcsIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nLFxuICAgIGNwQWRkQ29sb3JCdXR0b246IGJvb2xlYW4sIGNwQWRkQ29sb3JCdXR0b25DbGFzczogc3RyaW5nLCBjcEFkZENvbG9yQnV0dG9uVGV4dDogc3RyaW5nLFxuICAgIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nKTogdm9pZFxuICB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbENvbG9yKGNvbG9yKTtcblxuICAgICAgdGhpcy5pc0lFMTAgPSAoZGV0ZWN0SUUoKSA9PT0gMTApO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuXG4gICAgICB0aGlzLmNwRGlzYWJsZUlucHV0ID0gY3BEaXNhYmxlSW5wdXQ7XG5cbiAgICAgIHRoaXMuY3BBbHBoYUNoYW5uZWwgPSBjcEFscGhhQ2hhbm5lbDtcbiAgICAgIHRoaXMuY3BPdXRwdXRGb3JtYXQgPSBjcE91dHB1dEZvcm1hdDtcbiAgICAgIHRoaXMuY3BEaWFsb2dEaXNwbGF5ID0gY3BEaWFsb2dEaXNwbGF5O1xuXG4gICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzID0gY3BJZ25vcmVkRWxlbWVudHM7XG4gICAgICB0aGlzLmNwU2F2ZUNsaWNrT3V0c2lkZSA9IGNwU2F2ZUNsaWNrT3V0c2lkZTtcblxuICAgICAgdGhpcy51c2VSb290Vmlld0NvbnRhaW5lciA9IGNwVXNlUm9vdFZpZXdDb250YWluZXI7XG5cbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNwV2lkdGggPSBwYXJzZUludChjcFdpZHRoLCAxMCk7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY3BIZWlnaHQgPSBwYXJzZUludChjcEhlaWdodCwgMTApO1xuXG4gICAgICB0aGlzLmNwUG9zaXRpb24gPSBjcFBvc2l0aW9uO1xuICAgICAgdGhpcy5jcFBvc2l0aW9uT2Zmc2V0ID0gcGFyc2VJbnQoY3BQb3NpdGlvbk9mZnNldCwgMTApO1xuXG4gICAgICB0aGlzLmNwT0tCdXR0b24gPSBjcE9LQnV0dG9uO1xuICAgICAgdGhpcy5jcE9LQnV0dG9uVGV4dCA9IGNwT0tCdXR0b25UZXh0O1xuICAgICAgdGhpcy5jcE9LQnV0dG9uQ2xhc3MgPSBjcE9LQnV0dG9uQ2xhc3M7XG5cbiAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b24gPSBjcENhbmNlbEJ1dHRvbjtcbiAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b25UZXh0ID0gY3BDYW5jZWxCdXR0b25UZXh0O1xuICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbkNsYXNzID0gY3BDYW5jZWxCdXR0b25DbGFzcztcblxuICAgICAgdGhpcy5mYWxsYmFja0NvbG9yID0gY3BGYWxsYmFja0NvbG9yIHx8ICcjZmZmJztcblxuICAgICAgdGhpcy5jb2xvclRvZ2dsZSA9IGNvbG9yVG9nZ2xlO1xuXG4gICAgICB0aGlzLnNldFByZXNldENvbmZpZyhjcFByZXNldExhYmVsLCBjcFByZXNldENvbG9ycyk7XG5cbiAgICAgIHRoaXMuY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGggPSBjcE1heFByZXNldENvbG9yc0xlbmd0aDtcbiAgICAgIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2UgPSBjcFByZXNldEVtcHR5TWVzc2FnZTtcbiAgICAgIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzcyA9IGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M7XG5cbiAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbiA9IGNwQWRkQ29sb3JCdXR0b247XG4gICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b25UZXh0ID0gY3BBZGRDb2xvckJ1dHRvblRleHQ7XG4gICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b25DbGFzcyA9IGNwQWRkQ29sb3JCdXR0b25DbGFzcztcbiAgICAgIHRoaXMuY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzID0gY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzO1xuXG4gICAgICBpZiAoIWNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3cpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dBcnJvd09mZnNldCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dBcnJvd1NpemUgPSAwO1xuICAgICAgICB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNwT3V0cHV0Rm9ybWF0ID09PSAnaGV4JyAmJiBjcEFscGhhQ2hhbm5lbCAhPT0gJ2Fsd2F5cycgJiYgY3BBbHBoYUNoYW5uZWwgIT09ICdoZXg4Jykge1xuICAgICAgICB0aGlzLmNwQWxwaGFDaGFubmVsID0gJ2Rpc2FibGVkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0SW5pdGlhbENvbG9yKGNvbG9yOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxDb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgcHVibGljIHNldFByZXNldENvbmZpZyhjcFByZXNldExhYmVsOiBzdHJpbmcsIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuY3BQcmVzZXRMYWJlbCA9IGNwUHJlc2V0TGFiZWw7XG4gICAgdGhpcy5jcFByZXNldENvbG9ycyA9IGNwUHJlc2V0Q29sb3JzO1xuICB9XG5cbiAgcHVibGljIHNldENvbG9yVG9nZ2xlKGNvbG9yRHJvcEVuYWJsZWQ6IGJvb2xlYW4pOnZvaWR7XG4gICAgdGhpcy5jb2xvclRvZ2dsZSA9IGNvbG9yRHJvcEVuYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sb3JGcm9tU3RyaW5nKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgbGV0IGhzdmE6IEhzdmE7XG5cbiAgICBpZiAodGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycgfHwgdGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2hleDgnKSB7XG4gICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgIGlmICghaHN2YSAmJiAhdGhpcy5oc3ZhKSB7XG4gICAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKCFoc3ZhICYmICF0aGlzLmhzdmEpIHtcbiAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHRoaXMuZmFsbGJhY2tDb2xvciwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChoc3ZhKSB7XG4gICAgICB0aGlzLmhzdmEgPSBoc3ZhO1xuXG4gICAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcihlbWl0LCB1cGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgdGhpcy5zZXREaWFsb2dQb3NpdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgIT09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25EcmFnRW5kKHNsaWRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJEcmFnRW5kKHsgc2xpZGVyOiBzbGlkZXIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRHJhZ1N0YXJ0KHNsaWRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJEcmFnU3RhcnQoeyBzbGlkZXI6IHNsaWRlciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3IgfSk7XG4gIH1cblxuICBwdWJsaWMgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNJRTEwICYmIHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAncG9wdXAnICYmXG4gICAgICAgIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtID09PSBldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICBpZiAoIXRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHRoaXMuaW5pdGlhbENvbG9yLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5pbml0aWFsQ29sb3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25BY2NlcHRDb2xvcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ3BvcHVwJykge1xuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3V0cHV0Q29sb3IpIHtcbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JTZWxlY3RlZCh0aGlzLm91dHB1dENvbG9yKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DYW5jZWxDb2xvcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHRoaXMuaW5pdGlhbENvbG9yLCB0cnVlKTtcblxuICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ3BvcHVwJykge1xuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5pbml0aWFsQ29sb3IsIHRydWUpO1xuXG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2FuY2VsZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZvcm1hdFRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1hdCA9ICh0aGlzLmZvcm1hdCArIDEpICUgMztcbiAgfVxuXG4gIHB1YmxpYyBvbkNvbG9yQ2hhbmdlKHZhbHVlOiB7czogbnVtYmVyLCB2OiBudW1iZXIsIHJnWDogbnVtYmVyLCByZ1k6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEucyA9IHZhbHVlLnMgLyB2YWx1ZS5yZ1g7XG4gICAgdGhpcy5oc3ZhLnYgPSB2YWx1ZS52IC8gdmFsdWUucmdZO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ2xpZ2h0bmVzcycsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLnYsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ3NhdHVyYXRpb24nLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5zLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkh1ZUNoYW5nZSh2YWx1ZToge3Y6IG51bWJlciwgcmdYOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLmggPSB2YWx1ZS52IC8gdmFsdWUucmdYO1xuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ2h1ZScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmgsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWxwaGFDaGFuZ2UodmFsdWU6IHt2OiBudW1iZXIsIHJnWDogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5hID0gdmFsdWUudiAvIHZhbHVlLnJnWDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XG4gICAgICBzbGlkZXI6ICdhbHBoYScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmEsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uSGV4SW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgJiYgdmFsdWVbMF0gIT09ICcjJykge1xuICAgICAgICB2YWx1ZSA9ICcjJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh2YWx1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICAgIGlucHV0OiAnaGV4JyxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVkSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSk7XG5cbiAgICByZ2JhLnIgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe2lucHV0OiAncmVkJywgdmFsdWU6IHJnYmEuciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJsdWVJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcblxuICAgIHJnYmEuYiA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7aW5wdXQ6ICdibHVlJywgdmFsdWU6IHJnYmEuYiwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkdyZWVuSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSk7XG5cbiAgICByZ2JhLmcgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdncmVlbicsXG4gICAgICB2YWx1ZTogcmdiYS5nLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFscGhhSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLmEgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2FscGhhJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuYSxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25IdWVJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pIHtcbiAgICB0aGlzLmhzdmEuaCA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdodWUnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5oLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxpZ2h0bmVzc0lucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSk7XG5cbiAgICBoc2xhLmwgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UuaHNsYTJoc3ZhKGhzbGEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2xpZ2h0bmVzcycsXG4gICAgICB2YWx1ZTogaHNsYS5sLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNhdHVyYXRpb25JbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpO1xuXG4gICAgaHNsYS5zID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLmhzbGEyaHN2YShoc2xhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdzYXR1cmF0aW9uJyxcbiAgICAgIHZhbHVlOiBoc2xhLnMsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWRkUHJlc2V0Q29sb3IoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCF0aGlzLmNwUHJlc2V0Q29sb3JzLmZpbHRlcigoY29sb3IpID0+IChjb2xvciA9PT0gdmFsdWUpKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSB0aGlzLmNwUHJlc2V0Q29sb3JzLmNvbmNhdCh2YWx1ZSk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UucHJlc2V0Q29sb3JzQ2hhbmdlZCh0aGlzLmNwUHJlc2V0Q29sb3JzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZW1vdmVQcmVzZXRDb2xvcihldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gdGhpcy5jcFByZXNldENvbG9ycy5maWx0ZXIoKGNvbG9yKSA9PiAoY29sb3IgIT09IHZhbHVlKSk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnByZXNldENvbG9yc0NoYW5nZWQodGhpcy5jcFByZXNldENvbG9ycyk7XG4gIH1cblxuICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHN0YXR1c1xuXG4gIHByaXZhdGUgb3BlbkNvbG9yUGlja2VyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zaG93KSB7XG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNldERpYWxvZ1Bvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LCAwKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS50b2dnbGUodHJ1ZSk7XG5cbiAgICAgIGlmICghdGhpcy5pc0lFMTApIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5saXN0ZW5lck1vdXNlRG93bik7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyUmVzaXplKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlQ29sb3JQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdykge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UudG9nZ2xlKGZhbHNlKTtcblxuICAgICAgaWYgKCF0aGlzLmlzSUUxMCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMubGlzdGVuZXJSZXNpemUpO1xuXG4gICAgICBpZiAoIXRoaXMuY2RSZWZbJ2Rlc3Ryb3llZCddKSB7XG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29sb3JQaWNrZXIoZW1pdDogYm9vbGVhbiA9IHRydWUsIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZXJEaW1NYXgpIHtcbiAgICAgIGNvbnN0IGxhc3RPdXRwdXQgPSB0aGlzLm91dHB1dENvbG9yO1xuXG4gICAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpO1xuICAgICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5kZW5vcm1hbGl6ZVJHQkEodGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKSk7XG5cbiAgICAgIGNvbnN0IGh1ZSA9IHRoaXMuc2VydmljZS5kZW5vcm1hbGl6ZVJHQkEodGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEobmV3IEhzdmEodGhpcy5zbGlkZXJIIHx8IHRoaXMuaHN2YS5oLCAxLCAxLCAxKSkpO1xuXG4gICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgIHRoaXMuaHNsYVRleHQgPSBuZXcgSHNsYShNYXRoLnJvdW5kKChoc2xhLmgpICogMzYwKSwgTWF0aC5yb3VuZChoc2xhLnMgKiAxMDApLCBNYXRoLnJvdW5kKGhzbGEubCAqIDEwMCksXG4gICAgICAgICAgTWF0aC5yb3VuZChoc2xhLmEgKiAxMDApIC8gMTAwKTtcblxuICAgICAgICB0aGlzLnJnYmFUZXh0ID0gbmV3IFJnYmEocmdiYS5yLCByZ2JhLmcsIHJnYmEuYiwgTWF0aC5yb3VuZChyZ2JhLmEgKiAxMDApIC8gMTAwKTtcblxuICAgICAgICBjb25zdCBhbGxvd0hleDggPSB0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnYWx3YXlzJyB8fCB0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnaGV4OCc7XG5cbiAgICAgICAgdGhpcy5oZXhUZXh0ID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hleChyZ2JhLCBhbGxvd0hleDgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmh1ZVNsaWRlckNvbG9yID0gJ3JnYignICsgaHVlLnIgKyAnLCcgKyBodWUuZyArICcsJyArIGh1ZS5iICsgJyknO1xuICAgICAgdGhpcy5hbHBoYVNsaWRlckNvbG9yID0gJ3JnYignICsgcmdiYS5yICsgJywnICsgcmdiYS5nICsgJywnICsgcmdiYS5iICsgJyknO1xuXG4gICAgICB0aGlzLm91dHB1dENvbG9yID0gdGhpcy5zZXJ2aWNlLm91dHB1dEZvcm1hdCh0aGlzLmhzdmEsIHRoaXMuY3BPdXRwdXRGb3JtYXQsIHRoaXMuY3BBbHBoYUNoYW5uZWwpO1xuICAgICAgdGhpcy5zZWxlY3RlZENvbG9yID0gdGhpcy5zZXJ2aWNlLm91dHB1dEZvcm1hdCh0aGlzLmhzdmEsICdyZ2JhJywgbnVsbCk7XG5cbiAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlclBvc2l0aW9uKFxuICAgICAgICAodGhpcy5zbGlkZXJIIHx8IHRoaXMuaHN2YS5oKSAqIHRoaXMuc2xpZGVyRGltTWF4LmggLSA4LFxuICAgICAgICB0aGlzLmhzdmEucyAqIHRoaXMuc2xpZGVyRGltTWF4LnMgLSA4LFxuICAgICAgICAoMSAtIHRoaXMuaHN2YS52KSAqIHRoaXMuc2xpZGVyRGltTWF4LnYgLSA4LFxuICAgICAgICB0aGlzLmhzdmEuYSAqIHRoaXMuc2xpZGVyRGltTWF4LmEgLSA4XG4gICAgICApO1xuXG4gICAgICBpZiAoZW1pdCAmJiBsYXN0T3V0cHV0ICE9PSB0aGlzLm91dHB1dENvbG9yKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDaGFuZ2VkKHRoaXMub3V0cHV0Q29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgcG9zaXRpb25pbmdcblxuICBwcml2YXRlIHNldERpYWxvZ1Bvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaWFsb2dIZWlnaHQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGxldCBwb3NpdGlvbiA9ICdzdGF0aWMnLCB0cmFuc2Zvcm0gPSAnJywgc3R5bGUgPSBudWxsO1xuXG4gICAgICBsZXQgcGFyZW50Tm9kZTogYW55ID0gbnVsbCwgdHJhbnNmb3JtTm9kZTogYW55ID0gbnVsbDtcblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCAmJiBub2RlLnRhZ05hbWUgIT09ICdIVE1MJykge1xuICAgICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBwb3NpdGlvbiA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJyk7XG4gICAgICAgIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJyAmJiB0cmFuc2Zvcm1Ob2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdHJhbnNmb3JtTm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gdHJhbnNmb3JtTm9kZTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYm94RGlyZWN0aXZlID0gdGhpcy5jcmVhdGVCb3godGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIChwb3NpdGlvbiAhPT0gJ2ZpeGVkJykpO1xuXG4gICAgICBpZiAodGhpcy51c2VSb290Vmlld0NvbnRhaW5lciB8fCAocG9zaXRpb24gPT09ICdmaXhlZCcgJiYgIXBhcmVudE5vZGUpKSB7XG4gICAgICAgIHRoaXMudG9wID0gYm94RGlyZWN0aXZlLnRvcDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gYm94RGlyZWN0aXZlLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm94UGFyZW50ID0gdGhpcy5jcmVhdGVCb3gocGFyZW50Tm9kZSwgKHBvc2l0aW9uICE9PSAnZml4ZWQnKSk7XG5cbiAgICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wIC0gYm94UGFyZW50LnRvcDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gYm94RGlyZWN0aXZlLmxlZnQgLSBib3hQYXJlbnQubGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jcFBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCAqIHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICAgIHRoaXMubGVmdCAtPSB0aGlzLmNwV2lkdGggKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZSAtIDI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgdGhpcy5hcnJvd1RvcCA9IGRpYWxvZ0hlaWdodCAtIDE7XG5cbiAgICAgICAgdGhpcy50b3AgLT0gZGlhbG9nSGVpZ2h0ICsgdGhpcy5kaWFsb2dBcnJvd1NpemU7XG4gICAgICAgIHRoaXMubGVmdCArPSB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgKiBib3hEaXJlY3RpdmUud2lkdGggLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZTtcbiAgICAgICAgdGhpcy5sZWZ0ICs9IHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAqIGJveERpcmVjdGl2ZS53aWR0aCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICogdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgICAgdGhpcy5sZWZ0ICs9IGJveERpcmVjdGl2ZS53aWR0aCArIHRoaXMuZGlhbG9nQXJyb3dTaXplIC0gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHBvc2l0aW9uaW5nIGFuZCBvcGVuaW5nXG5cbiAgcHJpdmF0ZSBjcmVhdGVCb3goZWxlbWVudDogYW55LCBvZmZzZXQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IDApLFxuICAgICAgbGVmdDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IDApLFxuICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgaXNEZXNjZW5kYW50KHBhcmVudDogYW55LCBjaGlsZDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IG5vZGU6IGFueSA9IGNoaWxkLnBhcmVudE5vZGU7XG5cbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==