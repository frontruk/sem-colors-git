/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    // Private helper functions for the color picker dialog status
    /**
     * @private
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
     * @private
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
     * @private
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
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
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
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
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
     * @private
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
                selector: '[color-picker]',
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
    class="
    color-switch-container
    color-input-container
    sem-color-light-inputs pb1">
    <div class="block py1">
      <div class="flex justify-end  sem-typo--figcaption"
        *ngIf="!cpDisableInput" (click)="onFormatToggle()">

        <button
          sem-button role="button"
          class="sem-button sem-button--link sem-button--link--primary">
          Change format
          <span class="sem-icon-drop_icon"></span>
        </button>



      </div>
    </div>
    <div class="sem-color-switch flex items-center">
      <ul class="list-reset sem-color-switch--colors flex-auto">
        <li *ngIf="!cpDisableInput" [style.display]="format !== 2 ? 'none' : 'block'">
          <div class="flex flex-wrap content-around">
            <div class="col-3 ">
              <input
                class="
                sem-input sem-input--small boxes mr1 "
                type="number"
                pattern="[0-9]*" min="0" max="360"
                [text] [rg]="360" [value]="hslaText?.h" (newValue)="onHueInput($event)"/>
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">
                H</span>
            </div>
            <div class="col-3 ">
              <input
                class="
                sem-input sem-input--small boxes mr1 table-cell"
                type="number"
                pattern="[0-9]*" min="0" max="100"
                [text] [rg]="100" [value]="hslaText?.s" (newValue)="onSaturationInput($event)"/>
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">
                S</span>
            </div>
            <div class="col-3 ">
              <input
                class="
                 sem-input sem-input--small boxes mr1 table-cell"
                type="number"
                pattern="[0-9]*" min="0" max="100"
                [text] [rg]="100" [value]="hslaText?.l" (newValue)="onLightnessInput($event)"/>
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">
                L</span>
            </div>
            <div class="col-3 ">
              <input
                class="
                 sem-input sem-input--small boxes table-cell"
                *ngIf="cpAlphaChannel!=='disabled'"
                type="number"
                pattern="[0-9]+([\.,][0-9]{1,2})?" min="0" max="1" step="0.1"
                [text] [rg]="1" [value]="hslaText?.a" (newValue)="onAlphaInput($event)"/>
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">
                A</span>
            </div>
          </div>
        </li>
        <li *ngIf="!cpDisableInput" [style.display]="format !== 1 ? 'none' : 'block'">
          <div class="flex flex-wrap content-around">
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes"
                type="number"  pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.r" (newValue)="onRedInput($event)"/>
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">
                R</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes"
                type="number" pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.g" (newValue)="onGreenInput($event)"/>
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">
                G</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes"
                type="number"  pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.b" (newValue)="onBlueInput($event)"/>
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">
                B</span>
            </div>
            <div class="col-3 ">
              <input
                *ngIf="cpAlphaChannel!=='disabled'"
                class="sem-input sem-input--small boxes"
                type="number"
                pattern="[0-9]+([\.,][0-9]{1,2})?"
                min="0" max="1" step="0.1"
                [text] [rg]="1"
                [value]="rgbaText?.a" (newValue)="onAlphaInput($event)"
              />
              <span
                *ngIf="cpAlphaChannel!=='disabled'"
                class="
                sem-secondary
                block center
                sem-typo--sub-caption">
                A
              </span>
            </div>
          </div>
        </li>
        <li *ngIf="!cpDisableInput" [style.display]="format !== 0 ? 'none' : 'block'">
          <div class="sem-default_bg ">
            <span class="input-grp">
              <input
                type="text"
                class="sem-input sem-input--small  sem-input--secondary"
                [text] [value]="hexText"
                (blur)="onHexInput(null)"
                (newValue)="onHexInput($event)"
              >
              <button
                class="
                sem-button
                sem-button--dnd_small
                sem-button--dnd--tertiary
                sem-button--dnd sem-button--dnd"
                *ngIf="cpAddColorButton"
                [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength"
                (click)="onAddPresetColor($event, selectedColor)"
              >
               <span class="sem-icon-send"></span>
              </button>
            </span>
            <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">Hex</span>
          </div>

        </li>
      </ul>
    </div>
  </div>

  <div class="px1">
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
  </div>

  <!--Color drops-->
  <div
    *ngIf="colorToggle"
    class="sem-color-drops">

    <ng-container *ngIf="cpPresetColors?.length || cpAddColorButton">
      <ul *ngIf="cpPresetColors?.length"
          class="
            sem-colorlist
            sem-list-reset
            temp-colorlist-container">


        <li
          *ngFor="let color of cpPresetColors | reverse"
          [style.backgroundColor]="color"
          class="block p2 relative sem-colorlist--list"
          (click)="setColorFromString(color)"
          dnd-draggable
          [dragEnabled]="true"
          [dragData]="color"
          (onDragStart)="onDragStart(color)"
          [dropZones]="['widget-dropZone']"
        >
          <div class="sem-colorlist--list--inner">
            <span
              *ngIf="cpAddColorButton"
              class="sem-icon-close absolute top-0  right-0 m1 sem-colorlist--closebutton"
              (click)="onRemovePresetColor($event, color)"
            >
            </span>
                  <span class="sem-icon-drag absolute top-1 left-1"></span>
                  <span class="ml3 right-align block">
               <strong>{{color}}</strong>
            </span>
          </div>
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
    class="sem-swatches-container">
    <!--<div class="sem-color-swatches_current"></div>-->
    <button
      sem-button role="button"
      class="
      sem-button
      sem-button_medium
      sem-button--dnd
      sem-button--dnd sem-button--dnd_medium"
      [style.background-color]="selectedColor"
      *ngIf="cpAddColorButton"
      [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength"
      (click)="onAddPresetColor($event, selectedColor)">
      Add
    </button>
    <div
      *ngIf="cpPresetColors?.length || cpAddColorButton"
      class="sem-swatches-container--list">

      <div
        *ngIf="!cpPresetColors?.length && cpAddColorButton"
        class="{{cpPresetEmptyMessageClass}}
          ">
        {{cpPresetEmptyMessage}}
      </div>


      <button
        *ngFor="let color of cpPresetColors | reverse"
        sem-button role="button"
        class="sem-button sem-button--fab
               sem-button--fab_medium sem-button--fab_top-middle
                relative"
        [style.backgroundColor]="color"
        (click)="setColorFromString(color)"
      >
        <button
          *ngIf="cpAddColorButton"
          sem-button role="button"
          class="sem-button sem-button--fab--danger
          sem-button--fab sem-button--fab_xsmall
          sem-button--fab_circle mr1 absolute "
          (click)="onRemovePresetColor($event, color)"
        >
          <span class="sem-icon-close"></span>
        </button>
      </button>

      <!--<span-->
        <!--*ngFor="let color of cpPresetColors | reverse"-->
        <!--class="sem-button-rain-drop"-->
        <!--[style.backgroundColor]="color"-->
        <!--(click)="setColorFromString(color)"-->
      <!--&gt;-->
          <!--<span-->
            <!--*ngIf="cpAddColorButton"-->
            <!--(click)="onRemovePresetColor($event, color)"-->
            <!--class="sem-button-circle sem-button-delete sem-icon-close">-->
          <!--</span>-->
       <!--</span>-->


    </div>
  </div>

  <div
    *ngIf="colorToggle"
    class="
    color-switch-container
    color-input-container
    sem-color-light-inputs">

    <div class="block py1">
      <div class="flex justify-end  sem-typo--figcaption"
           *ngIf="!cpDisableInput" (click)="onFormatToggle()">

        <button
          sem-button role="button"
          class="sem-button sem-button--link sem-button--link--primary">
          Change format
          <span class="sem-icon-drop_icon"></span>
        </button>

      </div>
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
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">H</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes mr1 table-cell"
                type="number"
                pattern="[0-9]*" min="0" max="100"
                [text] [rg]="100" [value]="hslaText?.s" (newValue)="onSaturationInput($event)"/>
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">S</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes mr1 table-cell"
                type="number"
                pattern="[0-9]*" min="0" max="100"
                [text] [rg]="100" [value]="hslaText?.l" (newValue)="onLightnessInput($event)"/>
              <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">L</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes"
                *ngIf="cpAlphaChannel!=='disabled'"
                type="number"
                pattern="[0-9]+([\.,][0-9]{1,2})?" min="0" max="1" step="0.1"
                [text] [rg]="1" [value]="hslaText?.a" (newValue)="onAlphaInput($event)"/>
              <span
                *ngIf="cpAlphaChannel!=='disabled'"
                class="
                sem-secondary
                block center
                sem-typo--sub-caption">A</span>
            </div>
          </div>
        </li>
        <li *ngIf="!cpDisableInput" [style.display]="format !== 1 ? 'none' : 'block'">
          <div class="flex flex-wrap content-around">
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes"
                type="number"  pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.r" (newValue)="onRedInput($event)"/>
              <span
                class="
                sem-secondary
                block center
                sem-typo--sub-caption">R</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes"
                type="number" pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.g" (newValue)="onGreenInput($event)"/>
              <span
                class="
                sem-secondary
                block center
                sem-typo--sub-caption">G</span>
            </div>
            <div class="col-3 ">
              <input
                class="sem-input sem-input--small boxes"
                type="number"  pattern="[0-9]*" min="0" max="255"
                [text] [rg]="255" [value]="rgbaText?.b" (newValue)="onBlueInput($event)"/>
              <span
                class="
                sem-secondary
                block center
                sem-typo--sub-caption">B</span>
            </div>
            <div class="col-3 ">
              <input
                *ngIf="cpAlphaChannel!=='disabled'"
                class="sem-input sem-input--small boxes"
                type="number"
                pattern="[0-9]+([\.,][0-9]{1,2})?"
                min="0" max="1" step="0.1"
                [text] [rg]="1"
                [value]="rgbaText?.a" (newValue)="onAlphaInput($event)"
              />
              <span
                *ngIf="cpAlphaChannel!=='disabled'"
                class="
                sem-secondary
                block center
                sem-typo--sub-caption">A</span>
            </div>
          </div>
        </li>
        <li
          *ngIf="!cpDisableInput"
          [style.display]="format !== 0 ? 'none' : 'block'">


          <div class="sem-default_bg ">
            <span class="input-grp">
              <input
                type="text"
                class="sem-input sem-input--small  sem-input--secondary"
                [text] [value]="hexText"
                (blur)="onHexInput(null)"
                (newValue)="onHexInput($event)"
              >
              <button
                class="
                sem-button
                sem-button--dnd_small
                sem-button--dnd--tertiary
                sem-button--dnd sem-button--dnd"
                *ngIf="cpAddColorButton"
                [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength"
                (click)="onAddPresetColor($event, selectedColor)"
              >
               <span class="sem-icon-send"></span>
              </button>
            </span>
            <span class="
                sem-secondary
                block center
                sem-typo--sub-caption">Hex</span>
          </div>

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
                styles: [`body{margin:0;font-size:100%;height:100%}html{height:100%;box-sizing:border-box}*,:after,:before{box-sizing:inherit}[class*=" sem-icon-"],[class^=sem-icon-]{vertical-align:middle;font-family:sembler-ico!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sem-icon-drop_icon:before{content:"\\e90b";color:#444d63}.sem-icon-drag:before{content:"\\e946";color:#ccc}.sem-icon-product:before{content:"\\e913";color:#444d63}.sem-icon-form:before{content:"\\e92a";color:#444d63}.sem-icon-location:before{content:"\\e914";color:#444d63}.sem-icon-chart:before{content:"\\e935";color:#444d63}.sem-icon-text:before{content:"\\e945";color:#444d63}.sem-icon-location2:before{content:"\\e947";color:#444d63}.sem-icon-I:before{content:"\\e906"}.sem-icon-S:before{content:"\\e907"}.sem-icon-U:before{content:"\\e908"}.sem-icon-B:before{content:"\\e909"}.sem-icon-justify:before{content:"\\e90c";color:#ccc}.sem-icon-left:before{content:"\\e910";color:#ccc}.sem-icon-middle:before{content:"\\e911";color:#ccc}.sem-icon-right:before{content:"\\e912";color:#ccc}.sem-icon-colour2:before{content:"\\e90a"}.sem-icon-brush:before{content:"\\e90b"}.sem-icon-folder2:before{content:"\\e90d"}.sem-icon-logout2:before{content:"\\e90e"}.sem-icon-ol2:before{content:"\\e90f";color:#ccc}.sem-icon-send:before{content:"\\e905";color:#05dcb6}.sem-icon-repeat:before{content:"\\e900"}.sem-icon-crop:before{content:"\\e901"}.sem-icon-case:before{content:"\\e902"}.sem-icon-resize:before{content:"\\e903"}.sem-icon-check:before{content:"\\e904"}.sem-icon-ol:before{content:"\\e915";color:#ccc}.sem-icon-ul:before{content:"\\e916";color:#ccc}.sem-icon-folder:before{content:"\\e917"}.sem-icon-close:before{content:"\\e918"}.sem-icon-inbox:before{content:"\\e919"}.sem-icon-home:before{content:"\\e91a"}.sem-icon-share:before{content:"\\e91b"}.sem-icon-hamburger:before{content:"\\e91c"}.sem-icon-lock:before{content:"\\e91d"}.sem-icon-unlock:before{content:"\\e91e"}.sem-icon-ellipse:before{content:"\\e91f"}.sem-icon-volume:before{content:"\\e920"}.sem-icon-play:before{content:"\\e921"}.sem-icon-video:before{content:"\\e922";color:#444d63}.sem-icon-design:before{content:"\\e923"}.sem-icon-address:before{content:"\\e924"}.sem-icon-center_align:before{content:"\\e925";color:#ccc}.sem-icon-justify2:before{content:"\\e926";color:#ccc}.sem-icon-right_align:before{content:"\\e927";color:#ccc}.sem-icon-left_align:before{content:"\\e928";color:#ccc}.sem-icon-carousel:before{content:"\\e929"}.sem-icon-image:before{content:"\\e92b";color:#444d63}.sem-icon-back:before{content:"\\e92c"}.sem-icon-delete:before{content:"\\e92d";color:#d0021b}.sem-icon-duplicate:before{content:"\\e92e"}.sem-icon-link:before{content:"\\e92f"}.sem-icon-style:before{content:"\\e930"}.sem-icon-colour:before{content:"\\e931"}.sem-icon-add_accent .path1:before{content:"\\e932";color:#fafafa}.sem-icon-add_accent .path2:before{content:"\\e933";margin-left:-1em;color:#05dcb6}.sem-icon-send2:before{content:"\\e934";color:#05dcb6}.sem-icon-search:before{content:"\\e936"}.sem-icon-colour_accent .path1:before{content:"\\e937";color:#05dcb6}.sem-icon-colour_accent .path2:before{content:"\\e938";margin-left:-1em;color:#fff}.sem-icon-profile-accent .path1:before{content:"\\e939";color:#05dcb6}.sem-icon-profile-accent .path2:before{content:"\\e93a";margin-left:-1em;color:#fff}.sem-icon-down_arrow:before{content:"\\e93b"}.sem-icon-chat_accent .path1:before{content:"\\e93c";color:#fafafa}.sem-icon-chat_accent .path2:before{content:"\\e93d";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path3:before{content:"\\e93e";margin-left:-1em;color:#fafafa}.sem-icon-chat_accent .path4:before{content:"\\e93f";margin-left:-1em;color:#05dcb6}.sem-icon-logout:before{content:"\\e940"}.sem-icon-payment:before{content:"\\e941"}.sem-icon-settings:before{content:"\\e942"}.sem-icon-sites:before{content:"\\e943"}.sem-icon-profile:before{content:"\\e944"}.sem-list-reset{list-style:none;padding-left:0;margin:0}.sem-border{border-style:solid;border-width:1px}.sem-border-top{border-top:1px solid #ccc}.sem-border-right{border-right:1px solid #ccc}.sem-border-bottom{border-bottom:1px solid #ccc}.sem-border-left{border-left:1px solid #ccc}.sem-border-none{border:0}.sem-rounded{border-radius:3px}.sem-circle{border-radius:50%}.sem-rounded-top{border-radius:3px 3px 0 0}.sem-rounded-right{border-radius:0 3px 3px 0}.sem-rounded-bottom{border-radius:0 0 3px 3px}.sem-rounded-left{border-radius:3px 0 0 3px}.sem-not-rounded{border-radius:0}.sem-button-circle{border-radius:50%;position:absolute;display:block;cursor:pointer;text-align:center;background:#fff;font-weight:700}.sem-button-circle:before{padding:0 0 0 1px}.sem-button-delete{color:#fff;font-size:6px;padding:.3rem;background-color:#d0021b;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.bullet-inlinelist li{vertical-align:top;margin:0 -2px}.bullet-inlinelist li .select{display:block;width:22px}.bullet-inlinelist li .select select{display:none}.bullet-inlinelist li.active .select select{display:inline}.bullet-inlinelist li.active::after{background-color:red}.bullet-inlinelist li::before{content:'';top:-5px;left:0;width:100%;border-top:1px solid #000}.bullet-inlinelist li::after{background-color:#002;display:block;top:-9px;left:38%;width:9px;height:9px;border-radius:50%;content:''}.bullet-inlinelist li:first-child::before{left:38%}.bullet-inlinelist li:last-child::before{left:-44%}.sem-button-rain-drop{position:relative;display:inline-block;width:23px;height:23px;margin:4px 6px 8px;cursor:pointer}.sem-button-rain-drop .sem-button-delete{font-size:6px;top:6px;right:-9px}.sem-demo-sidebar{position:fixed;overflow-y:scroll;height:100%;width:160px;background:#444d63}.sem-demo-sidebar figcaption{color:#9bc1bc}.sem-demo-sidebar a,.sem-demo-sidebar li{text-decoration:none}.sem-demo-sidebar a:hover,.sem-demo-sidebar li:hover{color:#002}.sem-demo-sidebar a.active,.sem-demo-sidebar li.active{background-color:#05dcb6}.sem-demo-sidebar::-webkit-scrollbar{-webkit-appearance:none;width:7px}.sem-demo-sidebar::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,.5);-webkit-box-shadow:0 0 1px rgba(255,255,255,.5)}.sem-demo-content{display:block;min-height:100%;padding-left:160px;background-color:#f1f1f1}.corner_top{border-radius:6px 6px 0 0;background-clip:padding-box}.corner_bottom{border-radius:0 0 6px 6px;background-clip:padding-box}.corner_none{border-radius:0;background-clip:padding-box}.corner_all{border-radius:6px;background-clip:padding-box}.corner_right{border-radius:6px 0 0 6px;background-clip:padding-box}.corner_left{border-radius:0 6px 6px 0;background-clip:padding-box}.corner_top-left{border-radius:0 6px 6px;background-clip:padding-box}.corner_top-right{border-radius:6px 0 6px 6px;background-clip:padding-box}.corner_bottom-left,.corner_bottom-right{border-radius:6px 6px 0;background-clip:padding-box}.sem-pagination-container{display:flex;align-items:center;justify-content:center}.sem-pagination-nav{max-width:300px}.sem-pagination-nav>div{flex:1;text-align:center;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.sem-pagination-next a{text-align:left}.sem-pagination-previous a{text-align:right}.sem-pagination a,.sem-pagination-next a,.sem-pagination-previous a{display:inline-block;vertical-align:middle}.sem-pagination.active div{border:none;display:inline-block;vertical-align:middle}.sem-pagination.active div:not([disabled]){cursor:pointer}.sem-avatar{width:40px;height:40px}.sem-avatar .sem-avatar__img{width:100%;height:100%}.dialog-container,.sem-colorlist--container,.sem-shadow,.sidebar-container{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dialog-container:hover,.sem-colorlist--container:hover,.sem-shadow:hover,.sidebar-container:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.sem-shadow_small{box-shadow:0 1px 2px rgba(0,0,0,.7),0 1px 2px rgba(0,0,0,.24)}.sem-shadow_small:hover{box-shadow:0 2px 3px rgba(0,0,0,.9),0 10px 10px rgba(0,0,0,.19)}.dialog-container{overflow:auto;border-radius:0 12px 12px;background-clip:padding-box;transition:.3s cubic-bezier(.25,.8,.25,1)}.dialog-container--colordrop{border-radius:0;background-clip:padding-box;box-shadow:none}.dialog-container--colordrop:hover{box-shadow:none}.dialog-container--colordrop .dialog-container--header{border-radius:12px 0 0 12px;background-clip:padding-box}.dialog-container--colordrop .dialog-container--body{padding-left:26px;border-radius:0 0 12px 12px;background-clip:padding-box}.dialog-container-full{height:100%;z-index:2}.dialog-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.dialog-container--body,.dialog-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.dialog-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist{overflow:auto}.sem-colorlist--container{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-colorlist--list{min-height:20px}.sem-colorlist--list--inner{display:none}.sem-colorlist--list:hover .sem-colorlist--list--inner{display:block}.sem-colorlist--closebutton{font-size:11px}.browser-container{height:calc(100% - 30px - 20px);display:block;position:relative;margin:0 20px;border-radius:10px}.browser-container .layout{height:100%;width:100%;overflow:scroll}.browser-container::before{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;content:'';position:absolute;top:-20px;left:15px;width:10px;height:10px;border-radius:50%}.semui-form-select select{display:inline-block;margin-left:10%;width:80%;margin-right:10%;border:1px solid #d8cfcf;border-radius:10px;font-size:1.8em;color:#d8cfcf;cursor:pointer}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input.sem-input{width:calc(100%);outline:0;border-radius:10px 10px 0;background-clip:padding-box}figure.semui-thumbnail input.figcaption-container,input.block,input.semui-tabs{display:inline-block;width:auto}.sem-ul-icon-list>div .sem-li{border-bottom:1px solid #ccc}.sem-ul-icon-list>div:last-child .sem-li{border-bottom:0 solid #ccc}.no-padding-list .sem-ul .sem-li,.no-padding-list .sem-ul-icon-list .sem-li{padding-top:0;padding-bottom:0}.sem-ul-icon-list .sem-li{white-space:nowrap;-webkit-font-smoothing:antialiased;padding-top:.45rem;padding-bottom:.45rem;cursor:pointer}.sem-ul-icon-list .sem-li:not([disabled]){cursor:pointer}.sem-ul-icon-list .sem-li.active img.icon-default{display:none}.sem-ul-icon-list .sem-li.active img.icon-hover{display:inline-block}.sem-ul-icon-list .sem-li img{display:inline-block;vertical-align:middle;margin-bottom:4px}.sem-ul-icon-list .sem-li img.icon-hover{display:none}.sem-ul{list-style:none;width:100%;margin:0 auto;padding:0}.sem-ul .sem-li{padding-top:.45rem;padding-bottom:.45rem;cursor:pointer}.sem-ul .sem-li:not([disabled]){cursor:pointer}.sem-ul .sem-li.active{border-radius:7px 0 0 7px;background-clip:padding-box}ul.corner_all li:first-child{border-radius:6px 6px 0 0;background-clip:padding-box}ul.corner_all li:last-child{border-radius:0 0 11px 11px;background-clip:padding-box}.sidebar-container{border-radius:0 12px 12px;background-clip:padding-box;transition:.3s cubic-bezier(.25,.8,.25,1)}.sidebar-container-full{height:100%}.sidebar-container--header{border-radius:0 12px 0 0;background-clip:padding-box}.sidebar-container--body,.sidebar-container--body_spaced{border-radius:0 12px 12px;background-clip:padding-box}.sidebar-container--footer{border-radius:0 0 12px 12px;background-clip:padding-box}.sem-color-swatches{flex-wrap:nowrap}.sem-color-swatches_current{flex-grow:1}.sem-color-swatches_current button{margin-top:10px}.sem-color-swatches_preselected{margin-top:13px;margin-left:-10px;margin-bottom:0;flex-grow:1;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden;height:67px}.section-list{overflow:scroll;height:84%}.section-container{border:1px solid grey;display:block;width:100%}.sections-search{height:16%;background-color:grey}.sidebar-dialog{width:142%;position:absolute;top:0;height:100%}.h1{font-size:2rem}.h2{font-size:1.5rem}.h3{font-size:1.25rem}.h4{font-size:1rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1}.line-height-2{line-height:1.125}.line-height-3{line-height:1.25}.line-height-4{line-height:1.5}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block,.semui-tabs,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{display:block}.bullet-inlinelist li,.inline-block,.semui-tabs .semui-tabs--navlist_horizontal li,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit,.sem-avatar .sem-avatar__img{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button,figure,h1,h2,h3,h4,h5{margin:0}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.mt0,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0{margin-left:0}.mx0,.sem-pagination-nav{margin-left:0;margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:.5rem}.mt1{margin-top:.5rem}.mr1{margin-right:.5rem}.mb1{margin-bottom:.5rem}.ml1{margin-left:.5rem}.mx1,figure.semui-thumbnail button{margin-left:.5rem;margin-right:.5rem}.my1,.semui-tabs .semui-tabs--navlist_horizontal{margin-top:.5rem;margin-bottom:.5rem}.m2{margin:1rem}.mt2{margin-top:1rem}.mr2{margin-right:1rem}.mb2{margin-bottom:1rem}.ml2{margin-left:1rem}.mx2{margin-left:1rem;margin-right:1rem}.my2{margin-top:1rem;margin-bottom:1rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.sem-colorlist--container{margin-left:2rem}.mx3{margin-left:2rem;margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:4rem}.mt4{margin-top:4rem}.mr4{margin-right:4rem}.mb4{margin-bottom:4rem}.ml4{margin-left:4rem}.mx4{margin-left:4rem;margin-right:4rem}.my4{margin-top:4rem;margin-bottom:4rem}.mxn1{margin-left:-.5rem;margin-right:-.5rem}.mxn2{margin-left:-1rem;margin-right:-1rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-4rem;margin-right:-4rem}.ml-auto{margin-left:auto}.mr-auto{margin-right:auto}.mx-auto{margin-left:auto;margin-right:auto}.browser-container,.p0,figure,h1,h2,h3,h4,h5{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0{padding-left:0}.px0{padding-left:0;padding-right:0}.py0,.sem-ul-icon-list .sem-li.no-padding{padding-top:0;padding-bottom:0}.corner,.p1,.sem-color-list li,.sem-section--corner{padding:.5rem}.pt1{padding-top:.5rem}.pr1,.semui-tabs .semui-tabs--navlist_horizontal{padding-right:.5rem}.pb1{padding-bottom:.5rem}.pl1,.semui-tabs .semui-tabs--navlist_horizontal{padding-left:.5rem}.dialog-container--body_spaced,.dialog-container--footer,.dialog-container--header,.py1,.sidebar-container--body_spaced,.sidebar-container--footer,.sidebar-container--header,figure.semui-thumbnail figcaption{padding-top:.5rem;padding-bottom:.5rem}.dialog-container--body_spaced,.dialog-container--header,.px1,.sidebar-container--body_spaced,.sidebar-container--header{padding-left:.5rem;padding-right:.5rem}.p2{padding:1rem}.pt2{padding-top:1rem}.pr2{padding-right:1rem}.pb2{padding-bottom:1rem}.pl2{padding-left:1rem}.py2{padding-top:1rem;padding-bottom:1rem}.bullet-inlinelist li,.dialog-container--footer,.px2,.sem-color-list li,.sem-ul .sem-li,.sem-ul-icon-list .sem-li,.sidebar-container--footer,figure.semui-thumbnail figcaption{padding-left:1rem;padding-right:1rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3{padding-left:2rem;padding-right:2rem}.p4{padding:4rem}.pt4{padding-top:4rem}.pr4{padding-right:4rem}.pb4{padding-bottom:4rem}.pl4{padding-left:4rem}.py4{padding-top:4rem;padding-bottom:4rem}.px4{padding-left:4rem;padding-right:4rem}.col,.sem-demo-content,.sem-demo-sidebar{float:left;box-sizing:border-box}.col-right{float:right;box-sizing:border-box}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12,.sem-demo-content{width:100%}.flex,.sem-color-swatches,.sem-pagination-nav{display:flex}@media (min-width:40em){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}.sm-flex{display:flex}}@media (min-width:52em){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}.md-flex{display:flex}}@media (min-width:64em){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}.lg-flex{display:flex}.lg-hide{display:none!important}}.flex-column{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.self-stretch{align-self:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-center{align-content:center}.content-between{align-content:space-between}.content-around{align-content:space-around}.content-stretch{align-content:stretch}.flex-auto{flex:1 1 auto;min-width:0;min-height:0}.flex-none{flex:none}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-last{order:99999}.bullet-inlinelist li,.color-picker .saturation-lightness,.relative,.sem-color-list li,figure.semui-thumbnail,figure.semui-thumbnail .figcaption-container{position:relative}.absolute,.bullet-inlinelist li::after,.bullet-inlinelist li::before,.color-picker,.sem-color-list li .color-delete,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after,figure.semui-thumbnail button,figure.semui-thumbnail figcaption{position:absolute}.fixed{position:fixed}.dialog-container-full,.sem-color-list li .color-delete,.top-0,figure.semui-thumbnail button{top:0}.right-0,.sem-color-list li .color-delete,figure.semui-thumbnail button{right:0}.bottom-0,figure.semui-thumbnail figcaption{bottom:0}.left-0,.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle,.sem-avatar .sem-avatar__img{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40em){.xs-hide{display:none!important}}@media (min-width:40em) and (max-width:52em){.sm-hide{display:none!important}}@media (min-width:52em) and (max-width:64em){.md-hide{display:none!important}}.display-none{display:none!important}.sem-label-button{text-align:center;font-weight:700;text-transform:uppercase;text-shadow:1px 1px 1px #585858;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:12px 12px 0;background-clip:padding-box;cursor:pointer;border:none}.sem-label-button:not([disabled]){cursor:pointer}.sem-label-button_square{height:40px;width:40px}.semui-tabs .semui-tabs--navlist_horizontal{border-bottom:1px solid grey;padding-bottom:2px}.semui-tabs .semui-tabs--navlist_horizontal li.active button:not([disabled])::after,.semui-tabs .semui-tabs--navlist_horizontal li:hover button:not([disabled])::after{-webkit-transform:scale(1);transform:scale(1)}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button{border:none;outline:0;box-shadow:none;padding:.35em .75em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;bottom:-1px}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button:not([disabled]):hover{border:none;opacity:1}.semui-tabs .semui-tabs--navlist_horizontal li .tabs--button::after{content:"";height:3px;width:100%;bottom:-1px;transition:250ms;-webkit-transform:scale(0);transform:scale(0)}ul.semui-tabs-list.tabs-vertical{margin:0}figure.semui-thumbnail{width:100%;min-height:45px}figure.semui-thumbnail img{display:block;width:100%}figure.semui-thumbnail figcaption{width:100%;display:block;min-height:44px}.semui-card-footer{color:#fff;width:100%;display:block;background-color:#2a2a2a}.semui-header-section{padding:2% 2% 0;display:block}.semui-header-section.large{padding:3% 2% 0}.semui-header-section.small{padding:1% .5% 0}.semui-footer-section{padding:0 2% 2%;display:block}.semui-footer-section.large{padding:0 2% 3%}.semui-footer-section.small{padding:0 .5% 1%}.color-switch-container{padding:0 .3em .5em}.color-switch-container .sem-input{font-size:10px}.color-switch-container .sem-typo--sub-caption{font-size:13px;font-weight:400;line-height:17px;font-family:Roboto,"Helvetica Neue",sans-serif}.color-switch-container .input-grp input.sem-input{width:calc(100% - 2.1rem)}.sem-swatches-container{flex-wrap:nowrap;display:flex;padding:0 .3em .5em}.sem-swatches-container>button{margin-top:11px;height:46px;width:46px;text-align:center;padding:0;font-size:14px;font-family:Roboto,"Helvetica Neue",sans-serif}.sem-swatches-container--list{padding-top:.3rem;margin-top:2px;margin-left:-11px;margin-bottom:0;flex-grow:1;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden;height:67px;width:130px}.sem-swatches-container--list>button{margin-right:.3rem;margin-bottom:5px}.button-send:before{color:#fff}.sem-color-switch--colors .sufix{top:-4px;right:4px}.color-picker{margin:0 auto;border-radius:0 12px 12px;background-clip:padding-box;z-index:100000;width:210px;height:auto;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker .cursor{position:relative;width:16px;height:16px;border:2px solid #222;border-radius:50%;cursor:default}.color-picker .hue-alpha{margin-bottom:3px}.color-picker .hue{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .alpha{width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .saturation-lightness{width:100%;height:130px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.sem-color-dark-inputs .color-type{color:#555;line-height:22px}.sem-color-light-inputs .color-type{color:#fff;line-height:22px}.sem-color-list li{min-height:50px}`]
            },] },
];
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
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.isIE10;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.hsva;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.width;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.height;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.outputColor;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.initialColor;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.fallbackColor;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.listenerResize;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.listenerMouseDown;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.directiveInstance;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.sliderH;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.sliderDimMax;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.directiveElementRef;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.dialogArrowSize;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.dialogArrowOffset;
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    ColorPickerComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFvQyxTQUFTLEVBQ3RELGlCQUFpQixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFDaEQsV0FBVyxFQUFFLE1BQU0sRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFxZ0JwRCxNQUFNOzs7Ozs7O0lBdUZKLFlBQ3dDLFVBQWUsRUFDN0MsS0FBaUIsRUFBVSxLQUF3QixFQUFVLE9BQTJCO1FBRDFELGVBQVUsR0FBVixVQUFVLENBQUs7UUFDN0MsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUF4RjFGLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFvQnhCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUUvQix5QkFBb0IsR0FBWSxLQUFLLENBQUM7SUFpRXVELENBQUM7Ozs7SUFFdEcsUUFBUTtRQUNOLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7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OztJQUNqQyxvREFBb0M7O0lBQ3BDLHFEQUFxQzs7SUFDckMsd0RBQXdDOztJQUV4QywyQ0FBNEI7O0lBRTVCLHlDQUE4Qzs7SUFDOUMsMkNBQWtEOztJQUNsRCw2Q0FBb0Q7Ozs7O0lBR2xELDBDQUFxRDs7Ozs7SUFDckQscUNBQXlCOzs7OztJQUFFLHFDQUFnQzs7Ozs7SUFBRSx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgUExBVEZPUk1fSUQsIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRldGVjdElFIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IFJnYmEsIEhzbGEsIEhzdmEgfSBmcm9tICcuL2Zvcm1hdHMnO1xuaW1wb3J0IHsgU2xpZGVyUG9zaXRpb24sIFNsaWRlckRpbWVuc2lvbiB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY29sb3ItcGlja2VyXScsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICAjZGlhbG9nUG9wdXBcbiAgY2xhc3M9XCJjb2xvci1waWNrZXJcIlxuICBbc3R5bGUudmlzaWJpbGl0eV09XCJoaWRkZW4gfHwgIXNob3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiIFtzdHlsZS50b3AucHhdPVwidG9wXCJcbiAgW3N0eWxlLmxlZnQucHhdPVwibGVmdFwiXG4gIFtzdHlsZS5wb3NpdGlvbl09XCJwb3NpdGlvblwiXG4gIFtzdHlsZS5oZWlnaHQucHhdPVwiY3BIZWlnaHRcIlxuICBbc3R5bGUud2lkdGhdPVwiY29sb3JUb2dnbGUgPyAnMTAwJScgOiBjcFdpZHRoICsgJ3B4J1wiXG4+XG4gIDxkaXZcbiAgICAqbmdJZj1cIiFjb2xvclRvZ2dsZVwiXG4gICAgY2xhc3M9XCJcbiAgICBjb2xvci1zd2l0Y2gtY29udGFpbmVyXG4gICAgY29sb3ItaW5wdXQtY29udGFpbmVyXG4gICAgc2VtLWNvbG9yLWxpZ2h0LWlucHV0cyBwYjFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgcHkxXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCAgc2VtLXR5cG8tLWZpZ2NhcHRpb25cIlxuICAgICAgICAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIChjbGljayk9XCJvbkZvcm1hdFRvZ2dsZSgpXCI+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHNlbS1idXR0b24gcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3M9XCJzZW0tYnV0dG9uIHNlbS1idXR0b24tLWxpbmsgc2VtLWJ1dHRvbi0tbGluay0tcHJpbWFyeVwiPlxuICAgICAgICAgIENoYW5nZSBmb3JtYXRcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlbS1pY29uLWRyb3BfaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cblxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VtLWNvbG9yLXN3aXRjaCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC1yZXNldCBzZW0tY29sb3Itc3dpdGNoLS1jb2xvcnMgZmxleC1hdXRvXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMiA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlcyBtcjEgXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjM2MFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIzNjBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmhcIiAobmV3VmFsdWUpPVwib25IdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICBIPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uc1wiIChuZXdWYWx1ZSk9XCJvblNhdHVyYXRpb25JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICBTPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgIHNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzIG1yMSB0YWJsZS1jZWxsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxMDBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmxcIiAobmV3VmFsdWUpPVwib25MaWdodG5lc3NJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICBMPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgIHNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCIgW3ZhbHVlXT1cImhzbGFUZXh0Py5hXCIgKG5ld1ZhbHVlKT1cIm9uQWxwaGFJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICBBPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMSA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LnJcIiAobmV3VmFsdWUpPVwib25SZWRJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICBSPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmdcIiAobmV3VmFsdWUpPVwib25HcmVlbklucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIGJsb2NrIGNlbnRlclxuICAgICAgICAgICAgICAgIHNlbS10eXBvLS1zdWItY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgIEc8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmJcIiAobmV3VmFsdWUpPVwib25CbHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgQjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNwQWxwaGFDaGFubmVsIT09J2Rpc2FibGVkJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldKyhbXFwuLF1bMC05XXsxLDJ9KT9cIlxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIxXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwicmdiYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICBBXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIiBbc3R5bGUuZGlzcGxheV09XCJmb3JtYXQgIT09IDAgPyAnbm9uZScgOiAnYmxvY2snXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlbS1kZWZhdWx0X2JnIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncnBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgIHNlbS1pbnB1dC0tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3ZhbHVlXT1cImhleFRleHRcIlxuICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSGV4SW5wdXQobnVsbClcIlxuICAgICAgICAgICAgICAgIChuZXdWYWx1ZSk9XCJvbkhleElucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1idXR0b25cbiAgICAgICAgICAgICAgICBzZW0tYnV0dG9uLS1kbmRfc21hbGxcbiAgICAgICAgICAgICAgICBzZW0tYnV0dG9uLS1kbmQtLXRlcnRpYXJ5XG4gICAgICAgICAgICAgICAgc2VtLWJ1dHRvbi0tZG5kIHNlbS1idXR0b24tLWRuZFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY3BQcmVzZXRDb2xvcnMgJiYgY3BQcmVzZXRDb2xvcnMubGVuZ3RoID49IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25BZGRQcmVzZXRDb2xvcigkZXZlbnQsIHNlbGVjdGVkQ29sb3IpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZW0taWNvbi1zZW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIGJsb2NrIGNlbnRlclxuICAgICAgICAgICAgICAgIHNlbS10eXBvLS1zdWItY2FwdGlvblwiPkhleDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInB4MVwiPlxuICAgIDxkaXZcbiAgICAgICNodWVTbGlkZXJcbiAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImNvbG9yVG9nZ2xlID8gJ25vbmUnIDogJ2Jsb2NrJ1wiXG4gICAgICBjbGFzcz1cImh1ZVwiXG4gICAgICBbc2xpZGVyXSBbcmdYXT1cIjFcIiAobmV3VmFsdWUpPVwib25IdWVDaGFuZ2UoJGV2ZW50KVwiIChkcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoJ2h1ZScpXCIgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdodWUnKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN1cnNvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlci5oXCI+PC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgICAgKm5nSWY9XCJjcERpYWxvZ0Rpc3BsYXk9PSdwb3B1cCdcIlxuICAgICAgY2xhc3M9XCJhcnJvdyBhcnJvdy17e2NwUG9zaXRpb259fVwiXG4gICAgICBbc3R5bGUudG9wLnB4XT1cImFycm93VG9wXCI+PC9kaXY+XG4gICAgPGRpdlxuICAgICAgW3N0eWxlLmRpc3BsYXldPVwiY29sb3JUb2dnbGUgPyAnbm9uZScgOiAnYmxvY2snXCJcbiAgICAgIGNsYXNzPVwic2F0dXJhdGlvbi1saWdodG5lc3NcIlxuICAgICAgW3NsaWRlcl0gW3JnWF09XCIxXCIgW3JnWV09XCIxXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImh1ZVNsaWRlckNvbG9yXCJcbiAgICAgIChuZXdWYWx1ZSk9XCJvbkNvbG9yQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGRyYWdTdGFydCk9XCJvbkRyYWdTdGFydCgnc2F0dXJhdGlvbi1saWdodG5lc3MnKVwiXG4gICAgICAoZHJhZ0VuZCk9XCJvbkRyYWdFbmQoJ3NhdHVyYXRpb24tbGlnaHRuZXNzJylcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBbc3R5bGUudG9wLnB4XT1cInNsaWRlci52XCIgW3N0eWxlLmxlZnQucHhdPVwic2xpZGVyLnNcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAjYWxwaGFTbGlkZXJcbiAgICAgIGNsYXNzPVwiYWxwaGFcIlxuICAgICAgW3NsaWRlcl1cbiAgICAgIFtyZ1hdPVwiMVwiXG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJjb2xvclRvZ2dsZSA/ICdub25lJyA6ICdibG9jaydcIlxuICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYWxwaGFTbGlkZXJDb2xvclwiXG4gICAgICAobmV3VmFsdWUpPVwib25BbHBoYUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChkcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoJ2FscGhhJylcIlxuICAgICAgKGRyYWdFbmQpPVwib25EcmFnRW5kKCdhbHBoYScpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgW3N0eWxlLmxlZnQucHhdPVwic2xpZGVyLmFcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLUNvbG9yIGRyb3BzLS0+XG4gIDxkaXZcbiAgICAqbmdJZj1cImNvbG9yVG9nZ2xlXCJcbiAgICBjbGFzcz1cInNlbS1jb2xvci1kcm9wc1wiPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNwUHJlc2V0Q29sb3JzPy5sZW5ndGggfHwgY3BBZGRDb2xvckJ1dHRvblwiPlxuICAgICAgPHVsICpuZ0lmPVwiY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aFwiXG4gICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgIHNlbS1jb2xvcmxpc3RcbiAgICAgICAgICAgIHNlbS1saXN0LXJlc2V0XG4gICAgICAgICAgICB0ZW1wLWNvbG9ybGlzdC1jb250YWluZXJcIj5cblxuXG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjcFByZXNldENvbG9ycyB8IHJldmVyc2VcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgIGNsYXNzPVwiYmxvY2sgcDIgcmVsYXRpdmUgc2VtLWNvbG9ybGlzdC0tbGlzdFwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldENvbG9yRnJvbVN0cmluZyhjb2xvcilcIlxuICAgICAgICAgIGRuZC1kcmFnZ2FibGVcbiAgICAgICAgICBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgW2RyYWdEYXRhXT1cImNvbG9yXCJcbiAgICAgICAgICAob25EcmFnU3RhcnQpPVwib25EcmFnU3RhcnQoY29sb3IpXCJcbiAgICAgICAgICBbZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJ11cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlbS1jb2xvcmxpc3QtLWxpc3QtLWlubmVyXCI+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pY29uLWNsb3NlIGFic29sdXRlIHRvcC0wICByaWdodC0wIG0xIHNlbS1jb2xvcmxpc3QtLWNsb3NlYnV0dG9uXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlUHJlc2V0Q29sb3IoJGV2ZW50LCBjb2xvcilcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZW0taWNvbi1kcmFnIGFic29sdXRlIHRvcC0xIGxlZnQtMVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWwzIHJpZ2h0LWFsaWduIGJsb2NrXCI+XG4gICAgICAgICAgICAgICA8c3Ryb25nPnt7Y29sb3J9fTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCIhY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aCAmJiBjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJ7e2NwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3N9fVxuICAgICAgICAgIFwiPnt7Y3BQcmVzZXRFbXB0eU1lc3NhZ2V9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2XG4gICAgKm5nSWY9XCIhY29sb3JUb2dnbGVcIlxuICAgIGNsYXNzPVwic2VtLXN3YXRjaGVzLWNvbnRhaW5lclwiPlxuICAgIDwhLS08ZGl2IGNsYXNzPVwic2VtLWNvbG9yLXN3YXRjaGVzX2N1cnJlbnRcIj48L2Rpdj4tLT5cbiAgICA8YnV0dG9uXG4gICAgICBzZW0tYnV0dG9uIHJvbGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJcbiAgICAgIHNlbS1idXR0b25cbiAgICAgIHNlbS1idXR0b25fbWVkaXVtXG4gICAgICBzZW0tYnV0dG9uLS1kbmRcbiAgICAgIHNlbS1idXR0b24tLWRuZCBzZW0tYnV0dG9uLS1kbmRfbWVkaXVtXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInNlbGVjdGVkQ29sb3JcIlxuICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgIFtkaXNhYmxlZF09XCJjcFByZXNldENvbG9ycyAmJiBjcFByZXNldENvbG9ycy5sZW5ndGggPj0gY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGhcIlxuICAgICAgKGNsaWNrKT1cIm9uQWRkUHJlc2V0Q29sb3IoJGV2ZW50LCBzZWxlY3RlZENvbG9yKVwiPlxuICAgICAgQWRkXG4gICAgPC9idXR0b24+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJjcFByZXNldENvbG9ycz8ubGVuZ3RoIHx8IGNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgY2xhc3M9XCJzZW0tc3dhdGNoZXMtY29udGFpbmVyLS1saXN0XCI+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCIhY3BQcmVzZXRDb2xvcnM/Lmxlbmd0aCAmJiBjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJ7e2NwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3N9fVxuICAgICAgICAgIFwiPlxuICAgICAgICB7e2NwUHJlc2V0RW1wdHlNZXNzYWdlfX1cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKm5nRm9yPVwibGV0IGNvbG9yIG9mIGNwUHJlc2V0Q29sb3JzIHwgcmV2ZXJzZVwiXG4gICAgICAgIHNlbS1idXR0b24gcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwic2VtLWJ1dHRvbiBzZW0tYnV0dG9uLS1mYWJcbiAgICAgICAgICAgICAgIHNlbS1idXR0b24tLWZhYl9tZWRpdW0gc2VtLWJ1dHRvbi0tZmFiX3RvcC1taWRkbGVcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIlxuICAgICAgICAoY2xpY2spPVwic2V0Q29sb3JGcm9tU3RyaW5nKGNvbG9yKVwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAqbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIlxuICAgICAgICAgIHNlbS1idXR0b24gcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3M9XCJzZW0tYnV0dG9uIHNlbS1idXR0b24tLWZhYi0tZGFuZ2VyXG4gICAgICAgICAgc2VtLWJ1dHRvbi0tZmFiIHNlbS1idXR0b24tLWZhYl94c21hbGxcbiAgICAgICAgICBzZW0tYnV0dG9uLS1mYWJfY2lyY2xlIG1yMSBhYnNvbHV0ZSBcIlxuICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZVByZXNldENvbG9yKCRldmVudCwgY29sb3IpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VtLWljb24tY2xvc2VcIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwhLS08c3Bhbi0tPlxuICAgICAgICA8IS0tKm5nRm9yPVwibGV0IGNvbG9yIG9mIGNwUHJlc2V0Q29sb3JzIHwgcmV2ZXJzZVwiLS0+XG4gICAgICAgIDwhLS1jbGFzcz1cInNlbS1idXR0b24tcmFpbi1kcm9wXCItLT5cbiAgICAgICAgPCEtLVtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIi0tPlxuICAgICAgICA8IS0tKGNsaWNrKT1cInNldENvbG9yRnJvbVN0cmluZyhjb2xvcilcIi0tPlxuICAgICAgPCEtLSZndDstLT5cbiAgICAgICAgICA8IS0tPHNwYW4tLT5cbiAgICAgICAgICAgIDwhLS0qbmdJZj1cImNwQWRkQ29sb3JCdXR0b25cIi0tPlxuICAgICAgICAgICAgPCEtLShjbGljayk9XCJvblJlbW92ZVByZXNldENvbG9yKCRldmVudCwgY29sb3IpXCItLT5cbiAgICAgICAgICAgIDwhLS1jbGFzcz1cInNlbS1idXR0b24tY2lyY2xlIHNlbS1idXR0b24tZGVsZXRlIHNlbS1pY29uLWNsb3NlXCI+LS0+XG4gICAgICAgICAgPCEtLTwvc3Bhbj4tLT5cbiAgICAgICA8IS0tPC9zcGFuPi0tPlxuXG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgICpuZ0lmPVwiY29sb3JUb2dnbGVcIlxuICAgIGNsYXNzPVwiXG4gICAgY29sb3Itc3dpdGNoLWNvbnRhaW5lclxuICAgIGNvbG9yLWlucHV0LWNvbnRhaW5lclxuICAgIHNlbS1jb2xvci1saWdodC1pbnB1dHNcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJibG9jayBweTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kICBzZW0tdHlwby0tZmlnY2FwdGlvblwiXG4gICAgICAgICAgICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgKGNsaWNrKT1cIm9uRm9ybWF0VG9nZ2xlKClcIj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgc2VtLWJ1dHRvbiByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cInNlbS1idXR0b24gc2VtLWJ1dHRvbi0tbGluayBzZW0tYnV0dG9uLS1saW5rLS1wcmltYXJ5XCI+XG4gICAgICAgICAgQ2hhbmdlIGZvcm1hdFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VtLWljb24tZHJvcF9pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2VtLWNvbG9yLXN3aXRjaCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC1yZXNldCBzZW0tY29sb3Itc3dpdGNoLS1jb2xvcnMgZmxleC1hdXRvXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFjcERpc2FibGVJbnB1dFwiIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMiA/ICdub25lJyA6ICdibG9jaydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlcyBtcjEgXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjM2MFwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIzNjBcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmhcIiAobmV3VmFsdWUpPVwib25IdWVJbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5IPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8uc1wiIChuZXdWYWx1ZSk9XCJvblNhdHVyYXRpb25JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5TPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgYm94ZXMgbXIxIHRhYmxlLWNlbGxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjEwMFwiIFt2YWx1ZV09XCJoc2xhVGV4dD8ubFwiIChuZXdWYWx1ZSk9XCJvbkxpZ2h0bmVzc0lucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIGJsb2NrIGNlbnRlclxuICAgICAgICAgICAgICAgIHNlbS10eXBvLS1zdWItY2FwdGlvblwiPkw8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlc1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcLixdWzAtOV17MSwyfSk/XCIgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIiBbdmFsdWVdPVwiaHNsYVRleHQ/LmFcIiAobmV3VmFsdWUpPVwib25BbHBoYUlucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIGJsb2NrIGNlbnRlclxuICAgICAgICAgICAgICAgIHNlbS10eXBvLS1zdWItY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIWNwRGlzYWJsZUlucHV0XCIgW3N0eWxlLmRpc3BsYXldPVwiZm9ybWF0ICE9PSAxID8gJ25vbmUnIDogJ2Jsb2NrJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBjb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgIHBhdHRlcm49XCJbMC05XSpcIiBtaW49XCIwXCIgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjI1NVwiIFt2YWx1ZV09XCJyZ2JhVGV4dD8uclwiIChuZXdWYWx1ZSk9XCJvblJlZElucHV0KCRldmVudClcIi8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZW0tc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgYmxvY2sgY2VudGVyXG4gICAgICAgICAgICAgICAgc2VtLXR5cG8tLXN1Yi1jYXB0aW9uXCI+Ujwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgcGF0dGVybj1cIlswLTldKlwiIG1pbj1cIjBcIiBtYXg9XCIyNTVcIlxuICAgICAgICAgICAgICAgIFt0ZXh0XSBbcmddPVwiMjU1XCIgW3ZhbHVlXT1cInJnYmFUZXh0Py5nXCIgKG5ld1ZhbHVlKT1cIm9uR3JlZW5JbnB1dCgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIGJsb2NrIGNlbnRlclxuICAgICAgICAgICAgICAgIHNlbS10eXBvLS1zdWItY2FwdGlvblwiPkc8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXQgc2VtLWlucHV0LS1zbWFsbCBib3hlc1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiICBwYXR0ZXJuPVwiWzAtOV0qXCIgbWluPVwiMFwiIG1heD1cIjI1NVwiXG4gICAgICAgICAgICAgICAgW3RleHRdIFtyZ109XCIyNTVcIiBbdmFsdWVdPVwicmdiYVRleHQ/LmJcIiAobmV3VmFsdWUpPVwib25CbHVlSW5wdXQoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1zZWNvbmRhcnlcbiAgICAgICAgICAgICAgICBibG9jayBjZW50ZXJcbiAgICAgICAgICAgICAgICBzZW0tdHlwby0tc3ViLWNhcHRpb25cIj5CPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3BBbHBoYUNoYW5uZWwhPT0nZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlbS1pbnB1dCBzZW0taW5wdXQtLXNtYWxsIGJveGVzXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXC4sXVswLTldezEsMn0pP1wiXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3JnXT1cIjFcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyZ2JhVGV4dD8uYVwiIChuZXdWYWx1ZSk9XCJvbkFscGhhSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFscGhhQ2hhbm5lbCE9PSdkaXNhYmxlZCdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIGJsb2NrIGNlbnRlclxuICAgICAgICAgICAgICAgIHNlbS10eXBvLS1zdWItY2FwdGlvblwiPkE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgKm5nSWY9XCIhY3BEaXNhYmxlSW5wdXRcIlxuICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImZvcm1hdCAhPT0gMCA/ICdub25lJyA6ICdibG9jaydcIj5cblxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlbS1kZWZhdWx0X2JnIFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncnBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0IHNlbS1pbnB1dC0tc21hbGwgIHNlbS1pbnB1dC0tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBbdGV4dF0gW3ZhbHVlXT1cImhleFRleHRcIlxuICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSGV4SW5wdXQobnVsbClcIlxuICAgICAgICAgICAgICAgIChuZXdWYWx1ZSk9XCJvbkhleElucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlbS1idXR0b25cbiAgICAgICAgICAgICAgICBzZW0tYnV0dG9uLS1kbmRfc21hbGxcbiAgICAgICAgICAgICAgICBzZW0tYnV0dG9uLS1kbmQtLXRlcnRpYXJ5XG4gICAgICAgICAgICAgICAgc2VtLWJ1dHRvbi0tZG5kIHNlbS1idXR0b24tLWRuZFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjcEFkZENvbG9yQnV0dG9uXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY3BQcmVzZXRDb2xvcnMgJiYgY3BQcmVzZXRDb2xvcnMubGVuZ3RoID49IGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25BZGRQcmVzZXRDb2xvcigkZXZlbnQsIHNlbGVjdGVkQ29sb3IpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZW0taWNvbi1zZW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VtLXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIGJsb2NrIGNlbnRlclxuICAgICAgICAgICAgICAgIHNlbS10eXBvLS1zdWItY2FwdGlvblwiPkhleDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8IS0tIFNUQVJUIC0tPlxuXG5cblxuXG4gPCEtLSBFTkQgLS0+XG5cbiAgPGRpdiAqbmdJZj1cImNwT0tCdXR0b24gfHwgY3BDYW5jZWxCdXR0b25cIiBjbGFzcz1cImJ1dHRvbi1hcmVhXCI+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImNwQ2FuY2VsQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tjcENhbmNlbEJ1dHRvbkNsYXNzfX1cIiAoY2xpY2spPVwib25DYW5jZWxDb2xvcigkZXZlbnQpXCI+e3tjcENhbmNlbEJ1dHRvblRleHR9fTwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJjcE9LQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tjcE9LQnV0dG9uQ2xhc3N9fVwiIChjbGljayk9XCJvbkFjY2VwdENvbG9yKCRldmVudClcIj57e2NwT0tCdXR0b25UZXh0fX08L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2Bib2R5e21hcmdpbjowO2ZvbnQtc2l6ZToxMDAlO2hlaWdodDoxMDAlfWh0bWx7aGVpZ2h0OjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94fSosOmFmdGVyLDpiZWZvcmV7Ym94LXNpemluZzppbmhlcml0fVtjbGFzcyo9XCIgc2VtLWljb24tXCJdLFtjbGFzc149c2VtLWljb24tXXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Zm9udC1mYW1pbHk6c2VtYmxlci1pY28haW1wb3J0YW50O3NwZWFrOm5vbmU7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtsaW5lLWhlaWdodDoxOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlfS5zZW0taWNvbi1kcm9wX2ljb246YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwYlwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWRyYWc6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXByb2R1Y3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxM1wiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWZvcm06YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyYVwiO2NvbG9yOiM0NDRkNjN9LnNlbS1pY29uLWxvY2F0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTRcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1jaGFydDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM1XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tdGV4dDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQ1XCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tbG9jYXRpb24yOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDdcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1JOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDZcIn0uc2VtLWljb24tUzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTA3XCJ9LnNlbS1pY29uLVU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwOFwifS5zZW0taWNvbi1COmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDlcIn0uc2VtLWljb24tanVzdGlmeTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBjXCI7Y29sb3I6I2NjY30uc2VtLWljb24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEwXCI7Y29sb3I6I2NjY30uc2VtLWljb24tbWlkZGxlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MTFcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTEyXCI7Y29sb3I6I2NjY30uc2VtLWljb24tY29sb3VyMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBhXCJ9LnNlbS1pY29uLWJydXNoOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MGJcIn0uc2VtLWljb24tZm9sZGVyMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTBkXCJ9LnNlbS1pY29uLWxvZ291dDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZVwifS5zZW0taWNvbi1vbDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwZlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXNlbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNVwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXJlcGVhdDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTAwXCJ9LnNlbS1pY29uLWNyb3A6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwMVwifS5zZW0taWNvbi1jYXNlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDJcIn0uc2VtLWljb24tcmVzaXplOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MDNcIn0uc2VtLWljb24tY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkwNFwifS5zZW0taWNvbi1vbDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE1XCI7Y29sb3I6I2NjY30uc2VtLWljb24tdWw6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxNlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTE3XCJ9LnNlbS1pY29uLWNsb3NlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MThcIn0uc2VtLWljb24taW5ib3g6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxOVwifS5zZW0taWNvbi1ob21lOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWFcIn0uc2VtLWljb24tc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxYlwifS5zZW0taWNvbi1oYW1idXJnZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkxY1wifS5zZW0taWNvbi1sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWRcIn0uc2VtLWljb24tdW5sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MWVcIn0uc2VtLWljb24tZWxsaXBzZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTFmXCJ9LnNlbS1pY29uLXZvbHVtZTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIwXCJ9LnNlbS1pY29uLXBsYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyMVwifS5zZW0taWNvbi12aWRlbzpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTIyXCI7Y29sb3I6IzQ0NGQ2M30uc2VtLWljb24tZGVzaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjNcIn0uc2VtLWljb24tYWRkcmVzczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI0XCJ9LnNlbS1pY29uLWNlbnRlcl9hbGlnbjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI1XCI7Y29sb3I6I2NjY30uc2VtLWljb24tanVzdGlmeTI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyNlwiO2NvbG9yOiNjY2N9LnNlbS1pY29uLXJpZ2h0X2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjdcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1sZWZ0X2FsaWduOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MjhcIjtjb2xvcjojY2NjfS5zZW0taWNvbi1jYXJvdXNlbDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTI5XCJ9LnNlbS1pY29uLWltYWdlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmJcIjtjb2xvcjojNDQ0ZDYzfS5zZW0taWNvbi1iYWNrOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmNcIn0uc2VtLWljb24tZGVsZXRlOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmRcIjtjb2xvcjojZDAwMjFifS5zZW0taWNvbi1kdXBsaWNhdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkyZVwifS5zZW0taWNvbi1saW5rOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MmZcIn0uc2VtLWljb24tc3R5bGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMFwifS5zZW0taWNvbi1jb2xvdXI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzMVwifS5zZW0taWNvbi1hZGRfYWNjZW50IC5wYXRoMTpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTMyXCI7Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tYWRkX2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzM1wiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6IzA1ZGNiNn0uc2VtLWljb24tc2VuZDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzNFwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM2XCJ9LnNlbS1pY29uLWNvbG91cl9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5MzdcIjtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1jb2xvdXJfYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTM4XCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmZmfS5zZW0taWNvbi1wcm9maWxlLWFjY2VudCAucGF0aDE6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzOVwiO2NvbG9yOiMwNWRjYjZ9LnNlbS1pY29uLXByb2ZpbGUtYWNjZW50IC5wYXRoMjpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNhXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojZmZmfS5zZW0taWNvbi1kb3duX2Fycm93OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2JcIn0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgxOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2NcIjtjb2xvcjojZmFmYWZhfS5zZW0taWNvbi1jaGF0X2FjY2VudCAucGF0aDI6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTkzZFwiO21hcmdpbi1sZWZ0Oi0xZW07Y29sb3I6I2ZhZmFmYX0uc2VtLWljb24tY2hhdF9hY2NlbnQgLnBhdGgzOmJlZm9yZXtjb250ZW50OlwiXFxcXGU5M2VcIjttYXJnaW4tbGVmdDotMWVtO2NvbG9yOiNmYWZhZmF9LnNlbS1pY29uLWNoYXRfYWNjZW50IC5wYXRoNDpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTNmXCI7bWFyZ2luLWxlZnQ6LTFlbTtjb2xvcjojMDVkY2I2fS5zZW0taWNvbi1sb2dvdXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MFwifS5zZW0taWNvbi1wYXltZW50OmJlZm9yZXtjb250ZW50OlwiXFxcXGU5NDFcIn0uc2VtLWljb24tc2V0dGluZ3M6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0MlwifS5zZW0taWNvbi1zaXRlczpiZWZvcmV7Y29udGVudDpcIlxcXFxlOTQzXCJ9LnNlbS1pY29uLXByb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZTk0NFwifS5zZW0tbGlzdC1yZXNldHtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZy1sZWZ0OjA7bWFyZ2luOjB9LnNlbS1ib3JkZXJ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHh9LnNlbS1ib3JkZXItdG9we2JvcmRlci10b3A6MXB4IHNvbGlkICNjY2N9LnNlbS1ib3JkZXItcmlnaHR7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjY2NjfS5zZW0tYm9yZGVyLWJvdHRvbXtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjfS5zZW0tYm9yZGVyLWxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNjY2N9LnNlbS1ib3JkZXItbm9uZXtib3JkZXI6MH0uc2VtLXJvdW5kZWR7Ym9yZGVyLXJhZGl1czozcHh9LnNlbS1jaXJjbGV7Ym9yZGVyLXJhZGl1czo1MCV9LnNlbS1yb3VuZGVkLXRvcHtib3JkZXItcmFkaXVzOjNweCAzcHggMCAwfS5zZW0tcm91bmRlZC1yaWdodHtib3JkZXItcmFkaXVzOjAgM3B4IDNweCAwfS5zZW0tcm91bmRlZC1ib3R0b217Ym9yZGVyLXJhZGl1czowIDAgM3B4IDNweH0uc2VtLXJvdW5kZWQtbGVmdHtib3JkZXItcmFkaXVzOjNweCAwIDAgM3B4fS5zZW0tbm90LXJvdW5kZWR7Ym9yZGVyLXJhZGl1czowfS5zZW0tYnV0dG9uLWNpcmNsZXtib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQ6I2ZmZjtmb250LXdlaWdodDo3MDB9LnNlbS1idXR0b24tY2lyY2xlOmJlZm9yZXtwYWRkaW5nOjAgMCAwIDFweH0uc2VtLWJ1dHRvbi1kZWxldGV7Y29sb3I6I2ZmZjtmb250LXNpemU6NnB4O3BhZGRpbmc6LjNyZW07YmFja2dyb3VuZC1jb2xvcjojZDAwMjFiOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LmJ1bGxldC1pbmxpbmVsaXN0IGxpe3ZlcnRpY2FsLWFsaWduOnRvcDttYXJnaW46MCAtMnB4fS5idWxsZXQtaW5saW5lbGlzdCBsaSAuc2VsZWN0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MjJweH0uYnVsbGV0LWlubGluZWxpc3QgbGkgLnNlbGVjdCBzZWxlY3R7ZGlzcGxheTpub25lfS5idWxsZXQtaW5saW5lbGlzdCBsaS5hY3RpdmUgLnNlbGVjdCBzZWxlY3R7ZGlzcGxheTppbmxpbmV9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLmFjdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZWR9LmJ1bGxldC1pbmxpbmVsaXN0IGxpOjpiZWZvcmV7Y29udGVudDonJzt0b3A6LTVweDtsZWZ0OjA7d2lkdGg6MTAwJTtib3JkZXItdG9wOjFweCBzb2xpZCAjMDAwfS5idWxsZXQtaW5saW5lbGlzdCBsaTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAyO2Rpc3BsYXk6YmxvY2s7dG9wOi05cHg7bGVmdDozOCU7d2lkdGg6OXB4O2hlaWdodDo5cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29udGVudDonJ30uYnVsbGV0LWlubGluZWxpc3QgbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZXtsZWZ0OjM4JX0uYnVsbGV0LWlubGluZWxpc3QgbGk6bGFzdC1jaGlsZDo6YmVmb3Jle2xlZnQ6LTQ0JX0uc2VtLWJ1dHRvbi1yYWluLWRyb3B7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjNweDtoZWlnaHQ6MjNweDttYXJnaW46NHB4IDZweCA4cHg7Y3Vyc29yOnBvaW50ZXJ9LnNlbS1idXR0b24tcmFpbi1kcm9wIC5zZW0tYnV0dG9uLWRlbGV0ZXtmb250LXNpemU6NnB4O3RvcDo2cHg7cmlnaHQ6LTlweH0uc2VtLWRlbW8tc2lkZWJhcntwb3NpdGlvbjpmaXhlZDtvdmVyZmxvdy15OnNjcm9sbDtoZWlnaHQ6MTAwJTt3aWR0aDoxNjBweDtiYWNrZ3JvdW5kOiM0NDRkNjN9LnNlbS1kZW1vLXNpZGViYXIgZmlnY2FwdGlvbntjb2xvcjojOWJjMWJjfS5zZW0tZGVtby1zaWRlYmFyIGEsLnNlbS1kZW1vLXNpZGViYXIgbGl7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LnNlbS1kZW1vLXNpZGViYXIgYTpob3Zlciwuc2VtLWRlbW8tc2lkZWJhciBsaTpob3Zlcntjb2xvcjojMDAyfS5zZW0tZGVtby1zaWRlYmFyIGEuYWN0aXZlLC5zZW0tZGVtby1zaWRlYmFyIGxpLmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMwNWRjYjZ9LnNlbS1kZW1vLXNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyey13ZWJraXQtYXBwZWFyYW5jZTpub25lO3dpZHRoOjdweH0uc2VtLWRlbW8tc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7Ym9yZGVyLXJhZGl1czo0cHg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41KTstd2Via2l0LWJveC1zaGFkb3c6MCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LC41KX0uc2VtLWRlbW8tY29udGVudHtkaXNwbGF5OmJsb2NrO21pbi1oZWlnaHQ6MTAwJTtwYWRkaW5nLWxlZnQ6MTYwcHg7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxfS5jb3JuZXJfdG9we2JvcmRlci1yYWRpdXM6NnB4IDZweCAwIDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfYm90dG9te2JvcmRlci1yYWRpdXM6MCAwIDZweCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfbm9uZXtib3JkZXItcmFkaXVzOjA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfYWxse2JvcmRlci1yYWRpdXM6NnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3JpZ2h0e2JvcmRlci1yYWRpdXM6NnB4IDAgMCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfbGVmdHtib3JkZXItcmFkaXVzOjAgNnB4IDZweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3RvcC1sZWZ0e2JvcmRlci1yYWRpdXM6MCA2cHggNnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uY29ybmVyX3RvcC1yaWdodHtib3JkZXItcmFkaXVzOjZweCAwIDZweCA2cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5jb3JuZXJfYm90dG9tLWxlZnQsLmNvcm5lcl9ib3R0b20tcmlnaHR7Ym9yZGVyLXJhZGl1czo2cHggNnB4IDA7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5zZW0tcGFnaW5hdGlvbi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zZW0tcGFnaW5hdGlvbi1uYXZ7bWF4LXdpZHRoOjMwMHB4fS5zZW0tcGFnaW5hdGlvbi1uYXY+ZGl2e2ZsZXg6MTt0ZXh0LWFsaWduOmNlbnRlcjstbW96LXVzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lfS5zZW0tcGFnaW5hdGlvbi1uZXh0IGF7dGV4dC1hbGlnbjpsZWZ0fS5zZW0tcGFnaW5hdGlvbi1wcmV2aW91cyBhe3RleHQtYWxpZ246cmlnaHR9LnNlbS1wYWdpbmF0aW9uIGEsLnNlbS1wYWdpbmF0aW9uLW5leHQgYSwuc2VtLXBhZ2luYXRpb24tcHJldmlvdXMgYXtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNlbS1wYWdpbmF0aW9uLmFjdGl2ZSBkaXZ7Ym9yZGVyOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zZW0tcGFnaW5hdGlvbi5hY3RpdmUgZGl2Om5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLWF2YXRhcnt3aWR0aDo0MHB4O2hlaWdodDo0MHB4fS5zZW0tYXZhdGFyIC5zZW0tYXZhdGFyX19pbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uZGlhbG9nLWNvbnRhaW5lciwuc2VtLWNvbG9ybGlzdC0tY29udGFpbmVyLC5zZW0tc2hhZG93LC5zaWRlYmFyLWNvbnRhaW5lcntib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsMCwwLC4xMiksMCAxcHggMnB4IHJnYmEoMCwwLDAsLjI0KX0uZGlhbG9nLWNvbnRhaW5lcjpob3Zlciwuc2VtLWNvbG9ybGlzdC0tY29udGFpbmVyOmhvdmVyLC5zZW0tc2hhZG93OmhvdmVyLC5zaWRlYmFyLWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93OjAgMTRweCAyOHB4IHJnYmEoMCwwLDAsLjI1KSwwIDEwcHggMTBweCByZ2JhKDAsMCwwLC4yMil9LnNlbS1zaGFkb3dfc21hbGx7Ym94LXNoYWRvdzowIDFweCAycHggcmdiYSgwLDAsMCwuNyksMCAxcHggMnB4IHJnYmEoMCwwLDAsLjI0KX0uc2VtLXNoYWRvd19zbWFsbDpob3Zlcntib3gtc2hhZG93OjAgMnB4IDNweCByZ2JhKDAsMCwwLC45KSwwIDEwcHggMTBweCByZ2JhKDAsMCwwLC4xOSl9LmRpYWxvZy1jb250YWluZXJ7b3ZlcmZsb3c6YXV0bztib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt0cmFuc2l0aW9uOi4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uZGlhbG9nLWNvbnRhaW5lci0tY29sb3Jkcm9we2JvcmRlci1yYWRpdXM6MDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym94LXNoYWRvdzpub25lfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3A6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3AgLmRpYWxvZy1jb250YWluZXItLWhlYWRlcntib3JkZXItcmFkaXVzOjEycHggMCAwIDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLS1jb2xvcmRyb3AgLmRpYWxvZy1jb250YWluZXItLWJvZHl7cGFkZGluZy1sZWZ0OjI2cHg7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uZGlhbG9nLWNvbnRhaW5lci1mdWxse2hlaWdodDoxMDAlO3otaW5kZXg6Mn0uZGlhbG9nLWNvbnRhaW5lci0taGVhZGVye2JvcmRlci1yYWRpdXM6MCAxMnB4IDAgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LmRpYWxvZy1jb250YWluZXItLWJvZHksLmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2Vke2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fS5kaWFsb2ctY29udGFpbmVyLS1mb290ZXJ7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWNvbG9ybGlzdHtvdmVyZmxvdzphdXRvfS5zZW0tY29sb3JsaXN0LS1jb250YWluZXJ7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWNvbG9ybGlzdC0tbGlzdHttaW4taGVpZ2h0OjIwcHh9LnNlbS1jb2xvcmxpc3QtLWxpc3QtLWlubmVye2Rpc3BsYXk6bm9uZX0uc2VtLWNvbG9ybGlzdC0tbGlzdDpob3ZlciAuc2VtLWNvbG9ybGlzdC0tbGlzdC0taW5uZXJ7ZGlzcGxheTpibG9ja30uc2VtLWNvbG9ybGlzdC0tY2xvc2VidXR0b257Zm9udC1zaXplOjExcHh9LmJyb3dzZXItY29udGFpbmVye2hlaWdodDpjYWxjKDEwMCUgLSAzMHB4IC0gMjBweCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MCAyMHB4O2JvcmRlci1yYWRpdXM6MTBweH0uYnJvd3Nlci1jb250YWluZXIgLmxheW91dHtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbH0uYnJvd3Nlci1jb250YWluZXI6OmJlZm9yZXstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwcHg7bGVmdDoxNXB4O3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czo1MCV9LnNlbXVpLWZvcm0tc2VsZWN0IHNlbGVjdHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tbGVmdDoxMCU7d2lkdGg6ODAlO21hcmdpbi1yaWdodDoxMCU7Ym9yZGVyOjFweCBzb2xpZCAjZDhjZmNmO2JvcmRlci1yYWRpdXM6MTBweDtmb250LXNpemU6MS44ZW07Y29sb3I6I2Q4Y2ZjZjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24saW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfWlucHV0LnNlbS1pbnB1dHt3aWR0aDpjYWxjKDEwMCUpO291dGxpbmU6MDtib3JkZXItcmFkaXVzOjEwcHggMTBweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH1maWd1cmUuc2VtdWktdGh1bWJuYWlsIGlucHV0LmZpZ2NhcHRpb24tY29udGFpbmVyLGlucHV0LmJsb2NrLGlucHV0LnNlbXVpLXRhYnN7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0b30uc2VtLXVsLWljb24tbGlzdD5kaXYgLnNlbS1saXtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjfS5zZW0tdWwtaWNvbi1saXN0PmRpdjpsYXN0LWNoaWxkIC5zZW0tbGl7Ym9yZGVyLWJvdHRvbTowIHNvbGlkICNjY2N9Lm5vLXBhZGRpbmctbGlzdCAuc2VtLXVsIC5zZW0tbGksLm5vLXBhZGRpbmctbGlzdCAuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpe3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpe3doaXRlLXNwYWNlOm5vd3JhcDstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO3BhZGRpbmctdG9wOi40NXJlbTtwYWRkaW5nLWJvdHRvbTouNDVyZW07Y3Vyc29yOnBvaW50ZXJ9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saTpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saS5hY3RpdmUgaW1nLmljb24tZGVmYXVsdHtkaXNwbGF5Om5vbmV9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saS5hY3RpdmUgaW1nLmljb24taG92ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnNlbS11bC1pY29uLWxpc3QgLnNlbS1saSBpbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO21hcmdpbi1ib3R0b206NHB4fS5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGkgaW1nLmljb24taG92ZXJ7ZGlzcGxheTpub25lfS5zZW0tdWx7bGlzdC1zdHlsZTpub25lO3dpZHRoOjEwMCU7bWFyZ2luOjAgYXV0bztwYWRkaW5nOjB9LnNlbS11bCAuc2VtLWxpe3BhZGRpbmctdG9wOi40NXJlbTtwYWRkaW5nLWJvdHRvbTouNDVyZW07Y3Vyc29yOnBvaW50ZXJ9LnNlbS11bCAuc2VtLWxpOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc2VtLXVsIC5zZW0tbGkuYWN0aXZle2JvcmRlci1yYWRpdXM6N3B4IDAgMCA3cHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fXVsLmNvcm5lcl9hbGwgbGk6Zmlyc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czo2cHggNnB4IDAgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9dWwuY29ybmVyX2FsbCBsaTpsYXN0LWNoaWxke2JvcmRlci1yYWRpdXM6MCAwIDExcHggMTFweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNpZGViYXItY29udGFpbmVye2JvcmRlci1yYWRpdXM6MCAxMnB4IDEycHg7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O3RyYW5zaXRpb246LjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5zaWRlYmFyLWNvbnRhaW5lci1mdWxse2hlaWdodDoxMDAlfS5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVye2JvcmRlci1yYWRpdXM6MCAxMnB4IDAgMDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNpZGViYXItY29udGFpbmVyLS1ib2R5LC5zaWRlYmFyLWNvbnRhaW5lci0tYm9keV9zcGFjZWR7Ym9yZGVyLXJhZGl1czowIDEycHggMTJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3h9LnNpZGViYXItY29udGFpbmVyLS1mb290ZXJ7Ym9yZGVyLXJhZGl1czowIDAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH0uc2VtLWNvbG9yLXN3YXRjaGVze2ZsZXgtd3JhcDpub3dyYXB9LnNlbS1jb2xvci1zd2F0Y2hlc19jdXJyZW50e2ZsZXgtZ3JvdzoxfS5zZW0tY29sb3Itc3dhdGNoZXNfY3VycmVudCBidXR0b257bWFyZ2luLXRvcDoxMHB4fS5zZW0tY29sb3Itc3dhdGNoZXNfcHJlc2VsZWN0ZWR7bWFyZ2luLXRvcDoxM3B4O21hcmdpbi1sZWZ0Oi0xMHB4O21hcmdpbi1ib3R0b206MDtmbGV4LWdyb3c6MTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LXdyYXA6d3JhcDtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OjY3cHh9LnNlY3Rpb24tbGlzdHtvdmVyZmxvdzpzY3JvbGw7aGVpZ2h0Ojg0JX0uc2VjdGlvbi1jb250YWluZXJ7Ym9yZGVyOjFweCBzb2xpZCBncmV5O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0uc2VjdGlvbnMtc2VhcmNoe2hlaWdodDoxNiU7YmFja2dyb3VuZC1jb2xvcjpncmV5fS5zaWRlYmFyLWRpYWxvZ3t3aWR0aDoxNDIlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2hlaWdodDoxMDAlfS5oMXtmb250LXNpemU6MnJlbX0uaDJ7Zm9udC1zaXplOjEuNXJlbX0uaDN7Zm9udC1zaXplOjEuMjVyZW19Lmg0e2ZvbnQtc2l6ZToxcmVtfS5oNXtmb250LXNpemU6Ljg3NXJlbX0uaDZ7Zm9udC1zaXplOi43NXJlbX0uZm9udC1mYW1pbHktaW5oZXJpdHtmb250LWZhbWlseTppbmhlcml0fS5mb250LXNpemUtaW5oZXJpdHtmb250LXNpemU6aW5oZXJpdH0udGV4dC1kZWNvcmF0aW9uLW5vbmV7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmJvbGR7Zm9udC13ZWlnaHQ6NzAwfS5yZWd1bGFye2ZvbnQtd2VpZ2h0OjQwMH0uaXRhbGlje2ZvbnQtc3R5bGU6aXRhbGljfS5jYXBze3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzouMmVtfS5sZWZ0LWFsaWdue3RleHQtYWxpZ246bGVmdH0uY2VudGVye3RleHQtYWxpZ246Y2VudGVyfS5yaWdodC1hbGlnbnt0ZXh0LWFsaWduOnJpZ2h0fS5qdXN0aWZ5e3RleHQtYWxpZ246anVzdGlmeX0ubm93cmFwe3doaXRlLXNwYWNlOm5vd3JhcH0uYnJlYWstd29yZHt3b3JkLXdyYXA6YnJlYWstd29yZH0ubGluZS1oZWlnaHQtMXtsaW5lLWhlaWdodDoxfS5saW5lLWhlaWdodC0ye2xpbmUtaGVpZ2h0OjEuMTI1fS5saW5lLWhlaWdodC0ze2xpbmUtaGVpZ2h0OjEuMjV9LmxpbmUtaGVpZ2h0LTR7bGluZS1oZWlnaHQ6MS41fS5saXN0LXN0eWxlLW5vbmV7bGlzdC1zdHlsZTpub25lfS51bmRlcmxpbmV7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0udHJ1bmNhdGV7bWF4LXdpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5saXN0LXJlc2V0e2xpc3Qtc3R5bGU6bm9uZTtwYWRkaW5nLWxlZnQ6MH0uaW5saW5le2Rpc3BsYXk6aW5saW5lfS5ibG9jaywuc2VtdWktdGFicyxmaWd1cmUuc2VtdWktdGh1bWJuYWlsLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgLmZpZ2NhcHRpb24tY29udGFpbmVye2Rpc3BsYXk6YmxvY2t9LmJ1bGxldC1pbmxpbmVsaXN0IGxpLC5pbmxpbmUtYmxvY2ssLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2t9LnRhYmxle2Rpc3BsYXk6dGFibGV9LnRhYmxlLWNlbGx7ZGlzcGxheTp0YWJsZS1jZWxsfS5vdmVyZmxvdy1oaWRkZW57b3ZlcmZsb3c6aGlkZGVufS5vdmVyZmxvdy1zY3JvbGx7b3ZlcmZsb3c6c2Nyb2xsfS5vdmVyZmxvdy1hdXRve292ZXJmbG93OmF1dG99LmNsZWFyZml4OmFmdGVyLC5jbGVhcmZpeDpiZWZvcmV7Y29udGVudDpcIiBcIjtkaXNwbGF5OnRhYmxlfS5jbGVhcmZpeDphZnRlcntjbGVhcjpib3RofS5sZWZ0e2Zsb2F0OmxlZnR9LnJpZ2h0e2Zsb2F0OnJpZ2h0fS5maXQsLnNlbS1hdmF0YXIgLnNlbS1hdmF0YXJfX2ltZ3ttYXgtd2lkdGg6MTAwJX0ubWF4LXdpZHRoLTF7bWF4LXdpZHRoOjI0cmVtfS5tYXgtd2lkdGgtMnttYXgtd2lkdGg6MzJyZW19Lm1heC13aWR0aC0ze21heC13aWR0aDo0OHJlbX0ubWF4LXdpZHRoLTR7bWF4LXdpZHRoOjY0cmVtfS5ib3JkZXItYm94e2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYWxpZ24tYmFzZWxpbmV7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9LmFsaWduLXRvcHt2ZXJ0aWNhbC1hbGlnbjp0b3B9LmFsaWduLW1pZGRsZXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmFsaWduLWJvdHRvbXt2ZXJ0aWNhbC1hbGlnbjpib3R0b219Lm0wLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbixmaWd1cmUsaDEsaDIsaDMsaDQsaDV7bWFyZ2luOjB9LmRpYWxvZy1jb250YWluZXItLWJvZHlfc3BhY2VkLC5kaWFsb2ctY29udGFpbmVyLS1mb290ZXIsLmRpYWxvZy1jb250YWluZXItLWhlYWRlciwubXQwLC5zaWRlYmFyLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLnNpZGViYXItY29udGFpbmVyLS1mb290ZXIsLnNpZGViYXItY29udGFpbmVyLS1oZWFkZXJ7bWFyZ2luLXRvcDowfS5tcjB7bWFyZ2luLXJpZ2h0OjB9Lm1iMHttYXJnaW4tYm90dG9tOjB9Lm1sMHttYXJnaW4tbGVmdDowfS5teDAsLnNlbS1wYWdpbmF0aW9uLW5hdnttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowfS5teTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0ubTF7bWFyZ2luOi41cmVtfS5tdDF7bWFyZ2luLXRvcDouNXJlbX0ubXIxe21hcmdpbi1yaWdodDouNXJlbX0ubWIxe21hcmdpbi1ib3R0b206LjVyZW19Lm1sMXttYXJnaW4tbGVmdDouNXJlbX0ubXgxLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9ue21hcmdpbi1sZWZ0Oi41cmVtO21hcmdpbi1yaWdodDouNXJlbX0ubXkxLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7bWFyZ2luLXRvcDouNXJlbTttYXJnaW4tYm90dG9tOi41cmVtfS5tMnttYXJnaW46MXJlbX0ubXQye21hcmdpbi10b3A6MXJlbX0ubXIye21hcmdpbi1yaWdodDoxcmVtfS5tYjJ7bWFyZ2luLWJvdHRvbToxcmVtfS5tbDJ7bWFyZ2luLWxlZnQ6MXJlbX0ubXgye21hcmdpbi1sZWZ0OjFyZW07bWFyZ2luLXJpZ2h0OjFyZW19Lm15MnttYXJnaW4tdG9wOjFyZW07bWFyZ2luLWJvdHRvbToxcmVtfS5tM3ttYXJnaW46MnJlbX0ubXQze21hcmdpbi10b3A6MnJlbX0ubXIze21hcmdpbi1yaWdodDoycmVtfS5tYjN7bWFyZ2luLWJvdHRvbToycmVtfS5tbDMsLnNlbS1jb2xvcmxpc3QtLWNvbnRhaW5lcnttYXJnaW4tbGVmdDoycmVtfS5teDN7bWFyZ2luLWxlZnQ6MnJlbTttYXJnaW4tcmlnaHQ6MnJlbX0ubXkze21hcmdpbi10b3A6MnJlbTttYXJnaW4tYm90dG9tOjJyZW19Lm00e21hcmdpbjo0cmVtfS5tdDR7bWFyZ2luLXRvcDo0cmVtfS5tcjR7bWFyZ2luLXJpZ2h0OjRyZW19Lm1iNHttYXJnaW4tYm90dG9tOjRyZW19Lm1sNHttYXJnaW4tbGVmdDo0cmVtfS5teDR7bWFyZ2luLWxlZnQ6NHJlbTttYXJnaW4tcmlnaHQ6NHJlbX0ubXk0e21hcmdpbi10b3A6NHJlbTttYXJnaW4tYm90dG9tOjRyZW19Lm14bjF7bWFyZ2luLWxlZnQ6LS41cmVtO21hcmdpbi1yaWdodDotLjVyZW19Lm14bjJ7bWFyZ2luLWxlZnQ6LTFyZW07bWFyZ2luLXJpZ2h0Oi0xcmVtfS5teG4ze21hcmdpbi1sZWZ0Oi0ycmVtO21hcmdpbi1yaWdodDotMnJlbX0ubXhuNHttYXJnaW4tbGVmdDotNHJlbTttYXJnaW4tcmlnaHQ6LTRyZW19Lm1sLWF1dG97bWFyZ2luLWxlZnQ6YXV0b30ubXItYXV0b3ttYXJnaW4tcmlnaHQ6YXV0b30ubXgtYXV0b3ttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvfS5icm93c2VyLWNvbnRhaW5lciwucDAsZmlndXJlLGgxLGgyLGgzLGg0LGg1e3BhZGRpbmc6MH0ucHQwe3BhZGRpbmctdG9wOjB9LnByMHtwYWRkaW5nLXJpZ2h0OjB9LnBiMHtwYWRkaW5nLWJvdHRvbTowfS5wbDB7cGFkZGluZy1sZWZ0OjB9LnB4MHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjB9LnB5MCwuc2VtLXVsLWljb24tbGlzdCAuc2VtLWxpLm5vLXBhZGRpbmd7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5jb3JuZXIsLnAxLC5zZW0tY29sb3ItbGlzdCBsaSwuc2VtLXNlY3Rpb24tLWNvcm5lcntwYWRkaW5nOi41cmVtfS5wdDF7cGFkZGluZy10b3A6LjVyZW19LnByMSwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFse3BhZGRpbmctcmlnaHQ6LjVyZW19LnBiMXtwYWRkaW5nLWJvdHRvbTouNXJlbX0ucGwxLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWx7cGFkZGluZy1sZWZ0Oi41cmVtfS5kaWFsb2ctY29udGFpbmVyLS1ib2R5X3NwYWNlZCwuZGlhbG9nLWNvbnRhaW5lci0tZm9vdGVyLC5kaWFsb2ctY29udGFpbmVyLS1oZWFkZXIsLnB5MSwuc2lkZWJhci1jb250YWluZXItLWJvZHlfc3BhY2VkLC5zaWRlYmFyLWNvbnRhaW5lci0tZm9vdGVyLC5zaWRlYmFyLWNvbnRhaW5lci0taGVhZGVyLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntwYWRkaW5nLXRvcDouNXJlbTtwYWRkaW5nLWJvdHRvbTouNXJlbX0uZGlhbG9nLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLmRpYWxvZy1jb250YWluZXItLWhlYWRlciwucHgxLC5zaWRlYmFyLWNvbnRhaW5lci0tYm9keV9zcGFjZWQsLnNpZGViYXItY29udGFpbmVyLS1oZWFkZXJ7cGFkZGluZy1sZWZ0Oi41cmVtO3BhZGRpbmctcmlnaHQ6LjVyZW19LnAye3BhZGRpbmc6MXJlbX0ucHQye3BhZGRpbmctdG9wOjFyZW19LnByMntwYWRkaW5nLXJpZ2h0OjFyZW19LnBiMntwYWRkaW5nLWJvdHRvbToxcmVtfS5wbDJ7cGFkZGluZy1sZWZ0OjFyZW19LnB5MntwYWRkaW5nLXRvcDoxcmVtO3BhZGRpbmctYm90dG9tOjFyZW19LmJ1bGxldC1pbmxpbmVsaXN0IGxpLC5kaWFsb2ctY29udGFpbmVyLS1mb290ZXIsLnB4Miwuc2VtLWNvbG9yLWxpc3QgbGksLnNlbS11bCAuc2VtLWxpLC5zZW0tdWwtaWNvbi1saXN0IC5zZW0tbGksLnNpZGViYXItY29udGFpbmVyLS1mb290ZXIsZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3BhZGRpbmctbGVmdDoxcmVtO3BhZGRpbmctcmlnaHQ6MXJlbX0ucDN7cGFkZGluZzoycmVtfS5wdDN7cGFkZGluZy10b3A6MnJlbX0ucHIze3BhZGRpbmctcmlnaHQ6MnJlbX0ucGIze3BhZGRpbmctYm90dG9tOjJyZW19LnBsM3twYWRkaW5nLWxlZnQ6MnJlbX0ucHkze3BhZGRpbmctdG9wOjJyZW07cGFkZGluZy1ib3R0b206MnJlbX0ucHgze3BhZGRpbmctbGVmdDoycmVtO3BhZGRpbmctcmlnaHQ6MnJlbX0ucDR7cGFkZGluZzo0cmVtfS5wdDR7cGFkZGluZy10b3A6NHJlbX0ucHI0e3BhZGRpbmctcmlnaHQ6NHJlbX0ucGI0e3BhZGRpbmctYm90dG9tOjRyZW19LnBsNHtwYWRkaW5nLWxlZnQ6NHJlbX0ucHk0e3BhZGRpbmctdG9wOjRyZW07cGFkZGluZy1ib3R0b206NHJlbX0ucHg0e3BhZGRpbmctbGVmdDo0cmVtO3BhZGRpbmctcmlnaHQ6NHJlbX0uY29sLC5zZW0tZGVtby1jb250ZW50LC5zZW0tZGVtby1zaWRlYmFye2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5jb2wtMXt3aWR0aDo4LjMzMzMzJX0uY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5jb2wtM3t3aWR0aDoyNSV9LmNvbC00e3dpZHRoOjMzLjMzMzMzJX0uY29sLTV7d2lkdGg6NDEuNjY2NjclfS5jb2wtNnt3aWR0aDo1MCV9LmNvbC03e3dpZHRoOjU4LjMzMzMzJX0uY29sLTh7d2lkdGg6NjYuNjY2NjclfS5jb2wtOXt3aWR0aDo3NSV9LmNvbC0xMHt3aWR0aDo4My4zMzMzMyV9LmNvbC0xMXt3aWR0aDo5MS42NjY2NyV9LmNvbC0xMiwuc2VtLWRlbW8tY29udGVudHt3aWR0aDoxMDAlfS5mbGV4LC5zZW0tY29sb3Itc3dhdGNoZXMsLnNlbS1wYWdpbmF0aW9uLW5hdntkaXNwbGF5OmZsZXh9QG1lZGlhIChtaW4td2lkdGg6NDBlbSl7LnNtLWNvbHtmbG9hdDpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc20tY29sLXJpZ2h0e2Zsb2F0OnJpZ2h0O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc20tY29sLTF7d2lkdGg6OC4zMzMzMyV9LnNtLWNvbC0ye3dpZHRoOjE2LjY2NjY3JX0uc20tY29sLTN7d2lkdGg6MjUlfS5zbS1jb2wtNHt3aWR0aDozMy4zMzMzMyV9LnNtLWNvbC01e3dpZHRoOjQxLjY2NjY3JX0uc20tY29sLTZ7d2lkdGg6NTAlfS5zbS1jb2wtN3t3aWR0aDo1OC4zMzMzMyV9LnNtLWNvbC04e3dpZHRoOjY2LjY2NjY3JX0uc20tY29sLTl7d2lkdGg6NzUlfS5zbS1jb2wtMTB7d2lkdGg6ODMuMzMzMzMlfS5zbS1jb2wtMTF7d2lkdGg6OTEuNjY2NjclfS5zbS1jb2wtMTJ7d2lkdGg6MTAwJX0uc20tZmxleHtkaXNwbGF5OmZsZXh9fUBtZWRpYSAobWluLXdpZHRoOjUyZW0pey5tZC1jb2x7ZmxvYXQ6bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1kLWNvbC1yaWdodHtmbG9hdDpyaWdodDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1kLWNvbC0xe3dpZHRoOjguMzMzMzMlfS5tZC1jb2wtMnt3aWR0aDoxNi42NjY2NyV9Lm1kLWNvbC0ze3dpZHRoOjI1JX0ubWQtY29sLTR7d2lkdGg6MzMuMzMzMzMlfS5tZC1jb2wtNXt3aWR0aDo0MS42NjY2NyV9Lm1kLWNvbC02e3dpZHRoOjUwJX0ubWQtY29sLTd7d2lkdGg6NTguMzMzMzMlfS5tZC1jb2wtOHt3aWR0aDo2Ni42NjY2NyV9Lm1kLWNvbC05e3dpZHRoOjc1JX0ubWQtY29sLTEwe3dpZHRoOjgzLjMzMzMzJX0ubWQtY29sLTExe3dpZHRoOjkxLjY2NjY3JX0ubWQtY29sLTEye3dpZHRoOjEwMCV9Lm1kLWZsZXh7ZGlzcGxheTpmbGV4fX1AbWVkaWEgKG1pbi13aWR0aDo2NGVtKXsubGctY29se2Zsb2F0OmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94fS5sZy1jb2wtcmlnaHR7ZmxvYXQ6cmlnaHQ7Ym94LXNpemluZzpib3JkZXItYm94fS5sZy1jb2wtMXt3aWR0aDo4LjMzMzMzJX0ubGctY29sLTJ7d2lkdGg6MTYuNjY2NjclfS5sZy1jb2wtM3t3aWR0aDoyNSV9LmxnLWNvbC00e3dpZHRoOjMzLjMzMzMzJX0ubGctY29sLTV7d2lkdGg6NDEuNjY2NjclfS5sZy1jb2wtNnt3aWR0aDo1MCV9LmxnLWNvbC03e3dpZHRoOjU4LjMzMzMzJX0ubGctY29sLTh7d2lkdGg6NjYuNjY2NjclfS5sZy1jb2wtOXt3aWR0aDo3NSV9LmxnLWNvbC0xMHt3aWR0aDo4My4zMzMzMyV9LmxnLWNvbC0xMXt3aWR0aDo5MS42NjY2NyV9LmxnLWNvbC0xMnt3aWR0aDoxMDAlfS5sZy1mbGV4e2Rpc3BsYXk6ZmxleH0ubGctaGlkZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX0uZmxleC1jb2x1bW57ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5mbGV4LXdyYXB7ZmxleC13cmFwOndyYXB9Lml0ZW1zLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9Lml0ZW1zLWVuZHthbGlnbi1pdGVtczpmbGV4LWVuZH0uaXRlbXMtY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlcn0uaXRlbXMtYmFzZWxpbmV7YWxpZ24taXRlbXM6YmFzZWxpbmV9Lml0ZW1zLXN0cmV0Y2h7YWxpZ24taXRlbXM6c3RyZXRjaH0uc2VsZi1zdGFydHthbGlnbi1zZWxmOmZsZXgtc3RhcnR9LnNlbGYtZW5ke2FsaWduLXNlbGY6ZmxleC1lbmR9LnNlbGYtY2VudGVye2FsaWduLXNlbGY6Y2VudGVyfS5zZWxmLWJhc2VsaW5le2FsaWduLXNlbGY6YmFzZWxpbmV9LnNlbGYtc3RyZXRjaHthbGlnbi1zZWxmOnN0cmV0Y2h9Lmp1c3RpZnktc3RhcnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lmp1c3RpZnktZW5ke2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uanVzdGlmeS1jZW50ZXJ7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uanVzdGlmeS1iZXR3ZWVue2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5qdXN0aWZ5LWFyb3VuZHtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0YXJ0e2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydH0uY29udGVudC1lbmR7YWxpZ24tY29udGVudDpmbGV4LWVuZH0uY29udGVudC1jZW50ZXJ7YWxpZ24tY29udGVudDpjZW50ZXJ9LmNvbnRlbnQtYmV0d2VlbnthbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW59LmNvbnRlbnQtYXJvdW5ke2FsaWduLWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0cmV0Y2h7YWxpZ24tY29udGVudDpzdHJldGNofS5mbGV4LWF1dG97ZmxleDoxIDEgYXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjB9LmZsZXgtbm9uZXtmbGV4Om5vbmV9Lm9yZGVyLTB7b3JkZXI6MH0ub3JkZXItMXtvcmRlcjoxfS5vcmRlci0ye29yZGVyOjJ9Lm9yZGVyLTN7b3JkZXI6M30ub3JkZXItbGFzdHtvcmRlcjo5OTk5OX0uYnVsbGV0LWlubGluZWxpc3QgbGksLmNvbG9yLXBpY2tlciAuc2F0dXJhdGlvbi1saWdodG5lc3MsLnJlbGF0aXZlLC5zZW0tY29sb3ItbGlzdCBsaSxmaWd1cmUuc2VtdWktdGh1bWJuYWlsLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgLmZpZ2NhcHRpb24tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfS5hYnNvbHV0ZSwuYnVsbGV0LWlubGluZWxpc3QgbGk6OmFmdGVyLC5idWxsZXQtaW5saW5lbGlzdCBsaTo6YmVmb3JlLC5jb2xvci1waWNrZXIsLnNlbS1jb2xvci1saXN0IGxpIC5jb2xvci1kZWxldGUsLnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbCBsaSAudGFicy0tYnV0dG9uOjphZnRlcixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGJ1dHRvbixmaWd1cmUuc2VtdWktdGh1bWJuYWlsIGZpZ2NhcHRpb257cG9zaXRpb246YWJzb2x1dGV9LmZpeGVke3Bvc2l0aW9uOmZpeGVkfS5kaWFsb2ctY29udGFpbmVyLWZ1bGwsLnNlbS1jb2xvci1saXN0IGxpIC5jb2xvci1kZWxldGUsLnRvcC0wLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9ue3RvcDowfS5yaWdodC0wLC5zZW0tY29sb3ItbGlzdCBsaSAuY29sb3ItZGVsZXRlLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgYnV0dG9ue3JpZ2h0OjB9LmJvdHRvbS0wLGZpZ3VyZS5zZW11aS10aHVtYm5haWwgZmlnY2FwdGlvbntib3R0b206MH0ubGVmdC0wLC5zZW11aS10YWJzIC5zZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWwgbGkgLnRhYnMtLWJ1dHRvbjo6YWZ0ZXJ7bGVmdDowfS56MXt6LWluZGV4OjF9Lnoye3otaW5kZXg6Mn0uejN7ei1pbmRleDozfS56NHt6LWluZGV4OjR9LmJvcmRlcntib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweH0uYm9yZGVyLXRvcHtib3JkZXItdG9wLXN0eWxlOnNvbGlkO2JvcmRlci10b3Atd2lkdGg6MXB4fS5ib3JkZXItcmlnaHR7Ym9yZGVyLXJpZ2h0LXN0eWxlOnNvbGlkO2JvcmRlci1yaWdodC13aWR0aDoxcHh9LmJvcmRlci1ib3R0b217Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLXdpZHRoOjFweH0uYm9yZGVyLWxlZnR7Ym9yZGVyLWxlZnQtc3R5bGU6c29saWQ7Ym9yZGVyLWxlZnQtd2lkdGg6MXB4fS5ib3JkZXItbm9uZXtib3JkZXI6MH0ucm91bmRlZHtib3JkZXItcmFkaXVzOjNweH0uY2lyY2xlLC5zZW0tYXZhdGFyIC5zZW0tYXZhdGFyX19pbWd7Ym9yZGVyLXJhZGl1czo1MCV9LnJvdW5kZWQtdG9we2JvcmRlci1yYWRpdXM6M3B4IDNweCAwIDB9LnJvdW5kZWQtcmlnaHR7Ym9yZGVyLXJhZGl1czowIDNweCAzcHggMH0ucm91bmRlZC1ib3R0b217Ym9yZGVyLXJhZGl1czowIDAgM3B4IDNweH0ucm91bmRlZC1sZWZ0e2JvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHh9Lm5vdC1yb3VuZGVke2JvcmRlci1yYWRpdXM6MH0uaGlkZXtwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7aGVpZ2h0OjFweDt3aWR0aDoxcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgxcHgsMXB4LDFweCwxcHgpfUBtZWRpYSAobWF4LXdpZHRoOjQwZW0pey54cy1oaWRle2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjQwZW0pIGFuZCAobWF4LXdpZHRoOjUyZW0pey5zbS1oaWRle2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjUyZW0pIGFuZCAobWF4LXdpZHRoOjY0ZW0pey5tZC1oaWRle2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fS5kaXNwbGF5LW5vbmV7ZGlzcGxheTpub25lIWltcG9ydGFudH0uc2VtLWxhYmVsLWJ1dHRvbnt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDo3MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtc2hhZG93OjFweCAxcHggMXB4ICM1ODU4NTg7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtib3JkZXItcmFkaXVzOjEycHggMTJweCAwO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtjdXJzb3I6cG9pbnRlcjtib3JkZXI6bm9uZX0uc2VtLWxhYmVsLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnNlbS1sYWJlbC1idXR0b25fc3F1YXJle2hlaWdodDo0MHB4O3dpZHRoOjQwcHh9LnNlbXVpLXRhYnMgLnNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbHtib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmV5O3BhZGRpbmctYm90dG9tOjJweH0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpLmFjdGl2ZSBidXR0b246bm90KFtkaXNhYmxlZF0pOjphZnRlciwuc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpOmhvdmVyIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6OmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b257Ym9yZGVyOm5vbmU7b3V0bGluZTowO2JveC1zaGFkb3c6bm9uZTtwYWRkaW5nOi4zNWVtIC43NWVtO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtib3R0b206LTFweH0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVye2JvcmRlcjpub25lO29wYWNpdHk6MX0uc2VtdWktdGFicyAuc2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsIGxpIC50YWJzLS1idXR0b246OmFmdGVye2NvbnRlbnQ6XCJcIjtoZWlnaHQ6M3B4O3dpZHRoOjEwMCU7Ym90dG9tOi0xcHg7dHJhbnNpdGlvbjoyNTBtczstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9dWwuc2VtdWktdGFicy1saXN0LnRhYnMtdmVydGljYWx7bWFyZ2luOjB9ZmlndXJlLnNlbXVpLXRodW1ibmFpbHt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6NDVweH1maWd1cmUuc2VtdWktdGh1bWJuYWlsIGltZ3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9ZmlndXJlLnNlbXVpLXRodW1ibmFpbCBmaWdjYXB0aW9ue3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OjQ0cHh9LnNlbXVpLWNhcmQtZm9vdGVye2NvbG9yOiNmZmY7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQtY29sb3I6IzJhMmEyYX0uc2VtdWktaGVhZGVyLXNlY3Rpb257cGFkZGluZzoyJSAyJSAwO2Rpc3BsYXk6YmxvY2t9LnNlbXVpLWhlYWRlci1zZWN0aW9uLmxhcmdle3BhZGRpbmc6MyUgMiUgMH0uc2VtdWktaGVhZGVyLXNlY3Rpb24uc21hbGx7cGFkZGluZzoxJSAuNSUgMH0uc2VtdWktZm9vdGVyLXNlY3Rpb257cGFkZGluZzowIDIlIDIlO2Rpc3BsYXk6YmxvY2t9LnNlbXVpLWZvb3Rlci1zZWN0aW9uLmxhcmdle3BhZGRpbmc6MCAyJSAzJX0uc2VtdWktZm9vdGVyLXNlY3Rpb24uc21hbGx7cGFkZGluZzowIC41JSAxJX0uY29sb3Itc3dpdGNoLWNvbnRhaW5lcntwYWRkaW5nOjAgLjNlbSAuNWVtfS5jb2xvci1zd2l0Y2gtY29udGFpbmVyIC5zZW0taW5wdXR7Zm9udC1zaXplOjEwcHh9LmNvbG9yLXN3aXRjaC1jb250YWluZXIgLnNlbS10eXBvLS1zdWItY2FwdGlvbntmb250LXNpemU6MTNweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MTdweDtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9LmNvbG9yLXN3aXRjaC1jb250YWluZXIgLmlucHV0LWdycCBpbnB1dC5zZW0taW5wdXR7d2lkdGg6Y2FsYygxMDAlIC0gMi4xcmVtKX0uc2VtLXN3YXRjaGVzLWNvbnRhaW5lcntmbGV4LXdyYXA6bm93cmFwO2Rpc3BsYXk6ZmxleDtwYWRkaW5nOjAgLjNlbSAuNWVtfS5zZW0tc3dhdGNoZXMtY29udGFpbmVyPmJ1dHRvbnttYXJnaW4tdG9wOjExcHg7aGVpZ2h0OjQ2cHg7d2lkdGg6NDZweDt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjA7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5zZW0tc3dhdGNoZXMtY29udGFpbmVyLS1saXN0e3BhZGRpbmctdG9wOi4zcmVtO21hcmdpbi10b3A6MnB4O21hcmdpbi1sZWZ0Oi0xMXB4O21hcmdpbi1ib3R0b206MDtmbGV4LWdyb3c6MTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LXdyYXA6d3JhcDtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OjY3cHg7d2lkdGg6MTMwcHh9LnNlbS1zd2F0Y2hlcy1jb250YWluZXItLWxpc3Q+YnV0dG9ue21hcmdpbi1yaWdodDouM3JlbTttYXJnaW4tYm90dG9tOjVweH0uYnV0dG9uLXNlbmQ6YmVmb3Jle2NvbG9yOiNmZmZ9LnNlbS1jb2xvci1zd2l0Y2gtLWNvbG9ycyAuc3VmaXh7dG9wOi00cHg7cmlnaHQ6NHB4fS5jb2xvci1waWNrZXJ7bWFyZ2luOjAgYXV0bztib3JkZXItcmFkaXVzOjAgMTJweCAxMnB4O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDt6LWluZGV4OjEwMDAwMDt3aWR0aDoyMTBweDtoZWlnaHQ6YXV0bztjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5jb2xvci1waWNrZXIgLmN1cnNvcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlcjoycHggc29saWQgIzIyMjtib3JkZXItcmFkaXVzOjUwJTtjdXJzb3I6ZGVmYXVsdH0uY29sb3ItcGlja2VyIC5odWUtYWxwaGF7bWFyZ2luLWJvdHRvbTozcHh9LmNvbG9yLXBpY2tlciAuaHVle3dpZHRoOjEwMCU7aGVpZ2h0OjE2cHg7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQVFDQVlBQUFEMDZJWW5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINEFJV0R3a1VGV2JDQ0FBQUFGeEpSRUZVYU43dDBrRUtnMEFRQU1FMng4My9uMnF1NXFDZ0QxaURoQ29ZZHBuYlFDOWJiWTFxVk8vanZjNmszYWQ5MXM3LzdGMS9jc2dQcnVqdVExN0JEWVNGc0JBV3dnSmhJU3lFQmNKQ1dBZ0xoSVd3RUJZSWkyZjdBci8xVENnRkgyWDlBQUFBQUVsRlRrU3VRbUNDKX0uY29sb3ItcGlja2VyIC5hbHBoYXt3aWR0aDoxMDAlO2hlaWdodDoxNnB4O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKWUFBQUFRQ0FZQUFBRDA2SVluQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRBSVdEd1lRbFpNYTNnQUFBV1ZKUkVGVWFON3RtRUdPNmpBUVJDc09BckhnQnB5QUpZR2pjR29jeEFtNEEySUhwbW9XRTBlQkgrZXptRmxOdlUwNnNoSjNXNlZFZWxXTVVRQUlJRjlmNnFacGltc0ExTFl0UzJ1RjUxL3UyN1lWQUZaVlJVa0VvR0hkUFYvc0ljYklFSUlrVWRJLzlYYTduZXl2NjErU1dGVVZBVkNTY3QwMFRXbjJmdjZ1MytFY2ZkM3RYenkvMCtuRVV1K1NQam8va3F6cm1pUXBTY042djk4WGV3ZkE4L2xNa2lMSjJXeEdTVW9wY1Q2Zk02VTBOWDkvZnJmYmpldjFXdGZybFpmTGhZZkRRUUhHL0FJT2xuR3dqSU5sSEN4akhDempZSm0vVEpXZEN3cXVKWHNlRkZ6R3dETk5laUtNT0pUTzh4UWREUWFlQjI5K0s5ZWZlTGFCbzlKN3ZkdnRKajFSakZGamZpdjdxdjk1dGp4LzdsZVNRZ2g5M2UxZmZNZUlwNk8rWVFqaG8vTjc5MXQxWFZPU1NJN04vL0srNC9Hb3hXTEJ4K1BCNS9PcDVYTEorLzNPbEpKV3F4VTNtODNvdnY1aUdmOEtqWU5sSEN4akhDempZQmtIeTVnZjVndXN2UVU3VTM3alRBQUFBQUJKUlU1RXJrSmdnZz09KX0uY29sb3ItcGlja2VyIC5zYXR1cmF0aW9uLWxpZ2h0bmVzc3t3aWR0aDoxMDAlO2hlaWdodDoxMzBweDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT1lBQUFDQ0NBWUFBQUJTRDdUM0FBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0QUlXRHdrc1BXUjZsZ0FBSUFCSlJFRlVlTnJ0blZ1VDQ3Z1JyQUhOK1AvL09yLzYxWTV3T05aN21aMXUzWEFlTE1qSlpHWlZnZEtzZmM1eFIzUzBSSUlVVytDSHpDcGMyTWNZbzdYR3YzZXg3VWlaZDU3cmp5enp2K3YrMzNYL1IvKzNyL2Y3dlIzODZZK1R2S05jZi93ZGhUTFBjdjlxVTJ3WmQ3NHV0aDB0MTgyMWprSVpMUGNzSS82bldhNFh2dXRxdVUwWjg1bW54ODBTL1p6Z3BuTG5PdEhOdDcvb2Z4MVRLWGNTTnpOLzdxYk1RM2p1N3JOUW1NWVlkLzRzMmo5YWErUCtnR2FNY1pyYjFNL3RkcnZmNy9kMnY5OVA5L3Q5M08vM2NidmR4dTEyRzlmcmRWd3VsM0UrbjhjLy8vblArMisvL1hiNjZhZWZ4bC8vK3RmeDV6Ly8yWUs1QWwycmd2ZjRVc2JwZEdyQjUyYkF2QXJYcHV6am1pcUFWU0d6NWVEbUdZWHpoYkFabUNybm16ZGRwVVUrOFkxZEFPWWVYQ3REVXdWd1Y3WUNHSDZ1QW15TWNaOWw1dmtVYUJQR01VWjcvSjV3Lzc5Mi9mdnY5WHE5MzI2M2RyL2ZUeFBFQ2VNRThuSzVqTS9Qei9IVFR6L2R2MzM3ZHZybGwxL0dQLzd4ai9HM3YvMXQvT1V2ZndrVnN3b25namRPcDlQekgzVTNEM3ptV0duWlZYbjRqQ3FzN3dDMkJLUDQvOHRBemtac29XeDZYcnFlSFp5bXZwNEFCQ0JKaFRRd0tmRFQ4Z3pyWkNJcWk1QWhpQUNqQmZFQjJyUDgvWDYzTU03ZjYvVjZ2OS92N1hhN2JZQzgzVzdqY3Jsc1ZISXE1ZmZ2MzArLy9mYmIrT1dYWDhaUFAvMDAvdjczdjQrZmYvNzVKU3ZiZXUrYkwyV01NYUZiQWxwQk5NODVRWCtjdDZxb1Nxa1BBd3VRbEJWS3FHTkZTVU9BQTNCbXU3Z0M1aE5PZDE1blN3dkFPVVc3QzRnaVVDVjhTZ241TDloTkZJcVRzcDBHeEkweXNpb3lqQWprWS90R0pWRXB6K2Z6K09XWFgrN2Z2MzgvL2Y3NzcrUGJ0Mi9qMTE5L0hULy8vUFA0OWRkZng4ZkhSd3JtVGpWNzc5RVh1MnB4Mnhoand0ZEpaUWNBV1FJUExQSVNzTUphU3dpRDhneklLcndTeUFURTVqNW5BYlI1YzFkQlV3QmxzRVdXMGg2THFpWXNxRlBBUXhDeVJaM3dPU0FSeG1sWE1YNWs2NHBRZnZ2MjdmNzUrZGsrUGo1T0h4OGY0L3YzNytQYnQyL2p0OTkrRzkrK2ZSc2ZIeC9qY3JtVUZMTzMxZ1lEV2JseFJJcy9UcWZUN291c3hKc0F4WEEyR2M3VEE5WGRnZmRvSGJGc2o3NlgyKzFXQXJnSTFhZ2VHd0EzcXVwcW9Ic21jYkk2RnU5M3F1Z2dGYTlkN0xlRHRnS2ZBRkhCSitORUJ5SWtjSjVLZXJ2ZFRtaGhHY2dKSlNaNXZuLy9maitmeisxOFBwOCtQei9INStmbm1HRCsvdnZ2NC92MzcrUGo0Mk44Zm42TzIrMVdzN0pqalA2d3JhTUk1RTRSWjh4MnZWNVRTd2txdW90VjcvZDdUejZIRldzRC9xTmNkdzBDUTNxLzMyMWM2ODZUd0RWSWRidXk3M3pObGRoU0hiOEkya2xaem5tK0luQlM0VTZuMDMwMmFCRnNMaEhEQUtKVkpWZ2xmSTlqaHZ1NTNXNTNzTEFOWU54QWlEQTZNQ2VVSHg4ZjkrdjEyaTZYUzd0Y0xxY1pXNTdQNXllWTgvZno4M09jeitmbnNTbVlVeWtuV0VHODVXQnN0OXN0elNMeU1kZnI5UWkwOGlZMTVVWjBMbERHTGhSM281eksyajdPUFVURDBFK25VM3RrN1hiLzE2TkZiaGxvQU11WTF6akxVT08zQktlSURlK1o4czMvSjRnRm80VE01alBtdVJnMjhmb1VLS1ZTd28xNlRnQTVucHl3Y1dMSGdZbC9QejgvNzMvNjA1L2FiNy85MW02M1c3dGNMaWUwc1pqNG1hbzVnVHlmejg4RTBmMStqOEVjWXp3VFBFRzJjcWp5ZkhORjBNOGZ1cUVpYU9WblJ6WlpRTmg1ZndReUhnL0hER2ZKbzg5UTF6Yi9xdXU1WEM2NzczSTJYS2ZUcWQvdjkrZDN3dXFXdmEvWVRkVWRFVjNmaEl2L1ZpeXBzNllFM3gzcjQzSzViSlFTNjZ6YXhWR0ZzdmQrLy9qNGFGKy9mbTNmdjM5dnQ5dXRmZjM2dGYzKysrL3RkcnVkdm4zN1p1TkxCYWFDTWdVekMrclpSaUZvd3hVdUpJOFlNcWNDcDlPcHE1dmFnYVlVNmxHSkExWFFxZWpjaHc2Q2owR3c1bllCckd3MDFBMk8yMDZuMDRCR291Tk55VGZwL0Z3RWxoVWV5Nm5YcklLdzdRUVdkZHh1TjJsZEw1Zkw4MzlnU1BGOGFodS9KdkJPNDhDUFN1cU1mOFZwOS9QNTNMNTgrZEx1OTNzN244L3RmcjgvMzkvdjkvYjUrVGtoUEozUDU2bVE0MzYvaisvZnYrL2lTZ2J6ZXIwK0FaeC81Kzg4YnY2T01kYTZTNXo2a2QyMWZZQzlkeHY3Y0lKSjJkOUFPUzMwZlBNenlIaVRNOEI0REY2WFVsWUhwNEtRVzNXKzF0NzdNTkIxdkdIeFdxN1hhN3ZmNzgreTUvTjVBK0gxZXQyOXh1UDVkYll0eWFSdTRBa3NiUHE2OTM2ZmpSelhSeEJiUHIvYitiMTgrZktsalRIYUJCQmZuOC9uMC8xK0gxKytmQm5uOHptMHNCOGZINXU0Y3I1R3VCaE1WazBFRW45UnNjdGdWaE0raXhsSnRNQTIzUjhCNnl5c0FzdEJPZ0ZYSUtLQ01JZ1RvTXFORXUyZllNSDd6dGM3MzJkUUtrQ2oxeXRBWnRZMEt4OHBJcjhHR0orQVQzVisySGlyaGwrK2ZCbVh5Mld6NzN3K2IxN1A4cCtmbjgvdFV3R1ZsZVZrVHlVYjY4RGtmYXlXWTR6eE5SaWhVNEVwTEpQWlZySyt1N0o0L21nZktxZUxXOVgyUkVXbEl0TDFkaXluYkREYjMralhnWWpRcW4wcnJ4V2MrTmtJTFA3Rjd4SWJNdng3dlY1M3g0MHhubGJXSkYxMlpTYWcvTjBwVzZ0K1p6bU9NekhqYWpLd0Rmb25kNzh6WVRkZnExOHVwOTd6cjJxOHYzSWlvQnByUnRCbDBFWjlvZzVXQlJHT2RPSGpJalhGN1VvdEZiZ09Xblh6SUp5ell2akc1SVlnc21NT3hIa3o4T3NNU3JWTldlcTVUOERhT2NiRXYxT2Q1cmJzOWFPN1l2TWV0NjNFa0YrK2ZNRXhxK01SbDQvTDViTFpOLytleitmblo2S2F6dU1xWFNRVk81c3BKWGZsSEFJemVzL3hKc2Vja1JKaURNb2c5ZDZWZlJycVhNcjZLcFZWMjdqUndKYWNHb3ZPQU0xek1kUU1ud0sxQXViSzYza2RDQ2h2STFDN2cwejluZi9EK1h6ZTJWajhIN0d4NFA5ZHVRbHNZQ3JxeU44WHFHM0htLzEwT2ozancvbitjcmxzdHVNK2pQbW14VDJkVHVQejgzUHp0MnBuMVhzRUhYL2JuUGFWcVZtaDB4d090MG82WExMQUhlUFVVMjAzd0hmY3JzcEN3bVYzVHJ5QjVzME1zZWVnOTd4L0J3ekNqQmxiQitwUkFQbGEwQlZRdVQ2VjZRSGRCbGozZDBLRzE0N2IrRHF4UWVVeW1ETzQzVzRkUWFyK1RJandtQWQwejgvaDY1dmYwL3lMdjNQYjVYTHBydS95ZERvOXM3RVQwSStQajZkS0s5VlVFSWVLV1FXUEFPcko4TEtkNHZFK3Q5MVkzZTdVRmxXYXRnMlZ3Sm5iK0hQbXR2bS9zZks1OS9PYVdGM3gvZVAxVVBIdkE1RERZRHBZWGZiMGRydjFWMkRrQmt4dHcvdEVXVlZsWFdkQzlwRllzNS9qZmg5ZFMvMTZ2VzdzNmxURytUZnFzeFNKSHhrWFhxL1hkcjFldTRMc2ZENlAzdnNUM043N0RrTCt6UG01alNkS0w0elIzQXhRZDZySGtMa1lsU293c3JxN3puenU2d1N3ZHNNSk9YbUE1ZkJjanh0Z01HQllIbHI1em9raHRzTUNUZ1hMUU9XNFhDNmRFeUVNcHJMOG1BUXpYUmdkdWl4Mnlaem9yeGtZc0RuM2hCMVZlTUxHc1hzVnRnbDJwVzhTM3N2azB2dzdSNGhOYUh2djRjQUNsNUhGendJSDBLYzZ6dTRYakRQUi9qcEFWeFd6TzFYazJERGIzdlRjeGVHVTFpV1pIa21JRFd6aVdLdmlyQ0o0RHJhdnM2SUovR0c2Y1RxV2RYRHkrZkFyUURWVmtMcWtWakFvWklJVGRtbUlxWHdxYTk1TjMrTUdZb1pRZFJWTk81M1kxeFJraE8xNnZZN2V1NTA3Q2E5bEpuYkdweE9lbVFoU3cvQVFzbW1wNXpVOUJpVThHNnd2WDc2TTYvVTZQajQrZG8wQno0Q3BnaWtuVFVlRHF3bEtCbWczdTRPVmpyWjFBK3JBY2dhZWpXcTZlSkN2Q1lGRE9OU3dPZ0hYNEVRUnc4bHhiekRPZEVLNmdaM0hrMWIrOGcybzFKRnRLWHl2L2ZFZFRYdVdqV1hkQVppQnA2QURlRHJDRmlpbTdCNlpGbmVlSTdHdm0vUE1rVURYNjdXN3hJOGIwRDcvdjhkQTlxZk41b2FDZjc0V1pqSDBtZjFjbWZZMVkwSlVGbVZyVFd1OHV6a05jTHRFajd1NUZYQlRrZkM2R09BNXE4WU14TzhLVnZGNnNBVkdkY3JVYnNLT0RjUUtrTE1PTWRtbHh1bTY0MllyUG0yNkFsaFpXMVlCMVIrcnJHc3dFOFRhWUFXZVVNeGRmK1dqd1N2WjJFZjN5dE95Zm41K1BwVlBBYXFPbjQzTXROQnF2bWpqeGJqTTRsWmpaWTRncU5NSTVrdGFXL3NZS053Uys5bEZRekdpaG1NQ0tQYTcrWjBWNkViMEdSbW9idHBYOEpsald1NUZNTE41amE2aEc5a3dRZ1pxZjUrMU5INVV4emtGUmVDZFdoSjhYZGxHVWt4TzdIUmxZUm00bVZPNDNXN3RlcjEyVFBKRXcvcm1FTjNMNVNLSElXWmc5bXorcFVvS09ZcTViSlRKZFgyZ21lMVVjeE1aUUZhRVFJbEhjdDMyTStZMUJ6R2tHdXpmaXlBTjl6K3VncGxaMXN5bUNyRENZWWtHeERUcEk5UnpCeTBySHllRFVDMW5XYWVVYUQ5bjR4a055WU1CRFp0elozQisrZkpsWTIxWEZET2NBUkpsYWJPeWlTM3VDcExJOWpyWmpDRGthVnZjQ0Nqd29nbktTaFdkelhaV2xaTXZWVGdEOExwcWxDTHJxZ2JjQitxWXdyZ0tZcFQwY2NDcWJLeUNWYWxrRWFibi9GeW5vZ0NyUEtmcWY1MXhKN3NHQjJaWGNabXhvU096dGp4MzAwRFppN2EwLzJBSVIwVWxCYWc5U3VEdzZLY0F6bGFCN3ZIWnZXcGpLOTBkeXJxNmJLeURVWlFiUjBCMDViaUxRa0hJY1NVbWdJSytTd3VxZ0hDbm9pbzJSUVUxeWorQm5CeTlwcGhWS0xHeUM3WnpGSzFweFdLK0U4SWhWQ1dMTi91THRuVVU0YXlvWUxvYUFOejhGZHRhU3ZZNHBWMEJFVzJsczYxY3pxbGxCS3BUeUtnTUFocloxY2RjMVJST3RQbXZXTmtkY0taN1pLeGFXamlQTEpNcHA3T1pLeEErcnFHL29KTGp4ZjBwbkpscUxvRFpvM2d5VTBtS0d5czJ0YUtlY2ovZDFDK3JKU3BsQnFsVHlBcWdSK0Q4S2pLbG1STDJndFVjQWRDdHNMK2lqQ05UMW9xcXFrSDJPSEViRzVzREZuVWc1QWEreUxvdTJWVTFwdGoxUzJaUXF2MU9SWk45SVd6UmZnYVJCeEtvQkU4VVd5cWxKRnRySWMwQXhOalNqZWQ5OUNUWS9YRGZTekN6NU0wSVpvVkVzV25QRk5Uc2w4b29WQzFUemJHZ3FGWk5EU2dWd0tLKzFzR0RNS3F4WkNXR1ZNRHlzaUVyMWpWU1FKVVl3ajVpSE9sVGhkSHQ0NFNRZzlDTitubDhEOTBOTUlnQWRncjQ2SnFSaVI5STh2UmRGdmJyMTdtL3l4VU1Lak5MTWlWVUFEd3UyQ1dHaGhpK0Y1NVRXTTlNOWNvZ3ptczFkbk00dU9GL0xBRVlXZGNxbk03eUZteXEzSWZ3bU9ST2Q3WTFpRld0T2pvWThUbzQxbVRWNUl5c2dGRnVSenNiV0ZHYk5JSUpDRHYxZE9vNGxaRzdqV0J3UkZ0VlRLdVd5ZUNCeUpLT2FuOG9aM2VwOVhkZE5sMHREdWF5d0x6OWNYUFllREFBMFNwa0JPOXNiVmNUT1ZXbGRQdjR1eXpFa3p4SHRqdm9uSG9Ta0ZFV05vbzFkOERoY1FwdXRkMnBwTm9uNEJ6b0FpSjFoQkZRZzBkVnRkYkdISERRV3VzaG1ORVF1a0xNMlFPMUcyWThiZ1RYcUZoY0JKajdFalBnY1B0czhVUzhxUHBQQi9kWHpuT2g1WjQzOHR6SDVlYzZRZ3JPS3JSUmZLbXlzQm1VREIrUGhZYWJNbFZQRVIrR0NTSVRUenI3YW0ydEFySDNiZ2NFelBKbStjcjVqSjRObkhORkRWckZYY0k1TGU5azVKbncrYmVkYlYrRmZSelpJSGFPT2FPc0xZMC83VUdzNThEanJHd0tNSU1GSUd6T0VXMS9qR3NkQXRDTjZoRUFJNGhCZTlZWGVSUk9CU1ZQQVZQQXF2SU01Yng1aFZLV0FNUDZ6QlJ5M2llc2NyaWRWZEZCaW5CeFhEbkcyR1JZMlhiQ3ZwMWxodkd0TzlCeHU1aDkwOFhRdTQybG5TQXJNRmRpek1pbTh1d1JDeFBHbm5PUzhsd3BuYk9pRHFUQWpzclJOL1Bjb0FTY0NiYUFDcVZNNDB5bG5qalRCcytid1dsQUcyMy9VS2Jka2l3S1dJUVBHeldhY3pwb1NseFBFajgyMmNOV2twUzdGeXpzRHJxcGZncEczamFodzJ2Z2JhU1FBeHVMV1pZdDdKenlOZThKb1pwTkFjdkRGT2R3MHdxWVQ5QUsxclp6L0RkYlNsTFBwMHJ5SXhnUUpsSzlBWmxFcTdJT1hwb2hnOVBJaHJDbmc4OEpzT3hpVjRaV0FZZmc0c2lreC84a3kyWjlsODYydXF3cmZzY0lIOCt1Z1RtVkd5aWRkZVZZVWdFTW40R1p6ZzE0RXdJc2g5c3gyY0tLaVdYUmV1T0U1Z3pHT1FnZGxSS1ZWZGxldnFiMjc5WHEwUW5zdHMyVkRhQk8wY29lenNydVd0SEFwdTZzS0c0SUJoTjBhR1Uya0xyTUtHUlROM0htYkNEd0tWMTR6dmtNRURHNFFmWlZzcFZsYU5VMm1oYzVURVozTjFoL3pxVGhldUxwVzA1WldUR1ZqYjNkYm5ObXhLWkJuTjhKcWlkYVZMS0FPeUFSTkxTK01CNTRaMitWYXFvTUxLcm9WQmxuZ2VmblRQQWNvSE5XQ1N2bGZBOENJMEhFbUJOQm5CbFh5TXJ6VTdBN1dWbTk0UFBxUTJnbXFLeCtXREdzbnZpbG1jU09CSnFPSzFuWXlBSXp1QXllc3EzVWRTSzNLZldjWUtEOTVIbWZZT1UzcXNlcjJDdFlFVUErRnBmcWROdmdQQlpVQmhEckdPTlJWbFFzaDhyTGNhVUN5a0hHME9PVXdUbExCcnNoNXNvRU1HZXppMUU0SFJWdDFpY3A1d1pFRlhkaWJDa0c4WTh2WDc1c2JPNEUwaW9tOXoraGpTaU9meTNEaHBYSXRwVmhFK1VHUWR2b1dqdENobXJHSGY0WUF6S2dCTm5HdHVKeEZDZUdkaFVBZlFMTEs4a0JZQVA2Z3ZGSlphak1HM1hreWN5OEt1QzBxNEV5eW13dHdkeGR2Mk0wbUlCdEswTEtuZjY0MGowMEF1cTRnVWtkV0dsaHMyMnFKYzZkWkNzTDE5b3hubFRKRzRTWVZSSUdwRDhUUEZCdU02T0VsYlMxcGxkaWQ0bUdBeU42Wkl1cGJDNWJYSk45ZmRwYlRoU3hMVWFJOElHMVhJWUJ4VzNUanM2S1Fvc0tjeGZ4Y1FtZG53UkdNMTBHbkZjQ3kyWFl1bkxNeUFrZGdrNG1lUGljenNMeWd0aGNCdXQ2Z29PcVM3WVZGWEFETGphb3NCNnM2b2ZjWldBWlNJUllxU1VraXpZd3R0WWFiM3ZVT1E5dzJIUnhJSWc4V3dSVmVFNjh4aTRVdEwzelJwaHhwbHp3dVpyY3FZQ3ExSTNqUEk1ZG5KSXlnRW9oTWJQcVZKU3pyd3p4QkpUczV6TitSZVVTZ3hpa1BRVkYzSlZCZU5ReGJIRU5yRU1OdkVkRlpWVjlsSDkrT1JHRXNOWlFweVROYzRDM0FHN1hGNG5nenErRHJPMnpidWFhT1hnZGFGY2RrRW90b1NGQlZYMnFKMEM4T1daZUc0S0dscGdoQTBYZlRPUENxVjJxcXdRMjZRV2ZGMlBNTGhJMncxbFZBYTJhUHNZZDB6YTI1TVFSd2djWk42dVFEQ2krWnhpRDRYRU0ya1p4T1Q0MUZuWm5hUmxjcFpvdXpsUnFxZGJRVldvcFFvU0I1OFJWNTBsQk5ySGkvQXdYUzVMcndEVmxwWTNGYzNCeWlZR2M1MlRyaXN0NmtPWGR3SW5BUXRKcHA1UWNoeWFxdVlPVjdTdStmeFZNYVYzZGMwUkUyUzZtVVkwZ0x0MnBNY1lxcktJUTl3MmwxZ3BRVU10UVljbW1idDVEVE54ZGhuVUNqUXF0Yks5U1VTenZyQzBtbWhoRTFlMkZTMitveHlweS9aQVN1dGttdGp4M3ZjQkMyNFBYNjVuYnFrQkNSaGZqUzlrSVlQbmVlOGNNYWdWT2hJLzNUMWZBbWR0QVdac0Nzd1RKQ2tRVk5hMHFXS1NLUE9wSEFVaEQ5RHJiVmN5b1lrd3FodmgxN3ZZQWF5WExReUtHWWR4bFVERnA0OTRyQlhSallnTzE3RERZZXROSVVqL2V6cDZTMGxubHBFd3NXbUpNa093c0tYZVpLRUFqSUhuMEVRSklTYVJCY082VU1JTno3cC9iRWpqbnc0ZnQreG1EdmtzeFg0RzJySXJpczdxYWVLd0FGTVAyT2k3bjRjcml1Wnd0cFNVd3BmTHhTbk9SU3JJcXVzYzVaRmFYeXNxUldqaVoyRHlBV0VJTDM1dFZTb1FFbEZBQ2pPZUdHU0U3QUhFUWdkby9MU3ZDT2dHQnZreHNtRGJ2bFMzRnA1dmhhQjJUQUdxUktyS0tNcmhMVnBhR3pFVmpaME9ReERoYUNUQStReVJSMWQxNWFRenJKbnRMM1JpYnNpcGpHNmpsZ0w0eXFiUzBzTllnMWU4NHZoYkJWckVsSzY0Q1VjV1lYRGZLeGhwSXV4aVZKWlV4c2JNeS91UkJLVE5SUTRrUTNMZFJZTFMwckpqUlBsVFBxWTZnZEpzRURjK2FRWEFuK0hnc05VQ2JSdUYwT2owenduQTdiV0RrYmhPNUVuczAwcWVRaFMxbGFCTWw1TS9jQWF4c0xGOHJLeXFsK1RmN0VMTEVHdS9peGlpbWRDdm8wVGpmcGpLd2FnZ2VuNGVoNXY3TG9rTEtiTHV5dkhoY1pHOGRoR3JFRHg3SGc5M1pwcEpGN3FCcU8zaVZ2ZVhFRFFOSW56ZW9lOFlxNmVQYVpCWjJKdmlNM1cyVUFHb3Rla1JDQUdxNEVrRjFYM0RPblIxMXlSc0JMMXRSYTBQVmNaaU5GWFoyYzM0RnNrdm9tSW5RUTZsenBKb1piSnhrNDNOd0tKRkJxdUpTc3JCeUh5ZHhLT25UeFFBU0JtUzNqK0pNbnNIU2xhM0VjNks5VldvSlZuOXpmandPTTdocVlBQXFKUXdFMmEzbkE0OEoyUUdlZ1JrcFpOaXZTWSt5czNFa0tkNG9KSXdzdklIbDNjV2dMdDVrNE5INk9tdExXZHB1ck9rd0VNdXBZYzdlTXREUmhPY0kydWk1SmhWSXpYekx5dG8vR0FQdVpveW84d2tvZHVWZ0pnbEN0N09oR2JnSUQ0TXE0c2krNjN6VVMxRnVGRlhGbHF5YWoyZW1IbExNY0JxWXUwRk11UjI4QmJCN2xPeFJNU2lDUVhGaENLdXdraForcFlEaUdTZ2JzS0tWOE1pU1JzdUhTSVdNOXJrbFJpSWxaWnVxWGpzUUs4b29ZSk1ncTNKS1dWa2hIYmhzVnhGVXp0aE9XUGtZaWpjYng1NElLc1NkVCt1THIzY3JHS3lvWWdGaUdSOWlCazRrZmxvVVgrSklsUVJRcWFibXBnbmhxdHBRcGI2UlZRMVdINURuclM0aEVvR1pxYWVyUTJkaEZiejhYZVB4U2htRGJvNzBlSVNqb29yTzJ2SzhTSlhJNFNVbUVVNHpXS0R6VUR0V1RZdzd4WGxiU1RFajRGUmc3ektuS29HUkFMdjBHczlUZ2MxQnBDeXdHWlJRQXRxVnoyeHJCY0FNekVwZlp3RlNhMkc1VzBRQkZqU01hcFdBRUZhM0hjR043Q3hEekVDeUlrSjk3cXdycVdOVFdWbzg3NlBQc2pQa2oyd3Zncm9NNWxMWktNRVRLVnFsL0N2bldWRmlGYS9TekpVUXdrb1pzcjY3WTZ2bFNSVjMvMnRtTlRPWTN2bmF4WXdNdW9QS3FkelIxdzdJcUh5bWxQeGFBVGhmVTdLbzJaWFlqNEFZSkhMK2tOZEt3UlFZRVNUUmE1ZnNVWi9yVkMxVE1UeVdWeVlvcU50dXphSHNNeXYydHZvYXJ4ZGZxd1lnVTFheEZvL2NucWwxRkdzcUsrdUFST1Y4Qlg0R1U4V2NaVEFUaTJxN1FjeWkwTzBWK0doV0JNTlJVa244SDFTc1dWRTVCeTNHaTBFQ3FVZUpvQmZBdERhNGFta2RYRzM3QUdQNUdnZWI4NHA3VWF6cG9LUnpkRnplUThIa29IR3hwckt5L0hwbTV0MTJwNDdKNnhUWURFejd1SU5FWFN1eFlYdkZza1lBYyt5U3hIOXNmNWZ0S3pVNklid1ZCY1VHZzVlNUZNQ0VYU0VyWlIwd0dheVYxOXdvTTlndVBqVHFKZFZUcVI0dUU0bkpuTGxkV1ZrRUNDWkxkMlZMRit4dGFtZXg3SXBpcmlTRFVwdnJwbjlscndHTUNIeXBwTUgrcHM2TElMc3VGR1VqMVhFT1hpcWJxU0hQVUtuQ2xwV1Y2OGtxdFVSVk5EWTRUTmFvY3lrb1llVFU1bmdHRVFhL1MxRG5uRTRBZVhNY0tqSFBBbUZWakNCRU5hZXlMVk5IZnIzcHg4eFVzdEo5NGhJcGZINEhLRS9lRGFBcks2bFN5VlZGYmR0MWd4VElWazNwcHBWbEZYaTRwRWhWQlRPYnF1b2hVODVNTFhuMWlhaHZVa0hKalNDTWMwMXRMRnZlVlZCeDBEb2RNNmpmdEN1N0RPdEl6WXhyYzBxcDFKR1AyYXlZRnoyR2I2SHZNck84Y25HdFY2R2ptM3VJbVNmRDJHcFdLNnVvd2JaR014RktRQ28xcE9NdGNNWEZwUnN0K2hYR29Bb21GM3NTVEJHZ1RnbGJCS1d3c1EzdFpxYVlTcDBaMUNpbVJEV0ZjQ0pVUFlKMDBCSTVGa0tZTm9pZnVReG1OODhTV1ZYV0xNYVVxcXFnQzBCbVFKUjZzazN1OU5DZjZqWUxYeEFmcXNZRWdWTEFoUlkyQXRndGZsWk5GbUZ5aHhkckxrQWRXbGs0RDg4TTJpeEh5ZXBJZGhNSHJHL2lSMVpHdHEwTUdwYkRiUlBZT1hlU1kxTTZOeTRac3R2R1NrdEsrWGJGUEFUajJEMzcxc2FQRXNBTVhoWHJzWjBrbS9YU3RraGhNeUJmc2E2dVhGWmUyVkNlK1lNcjErR0tnd3JReU5ZcTFWUnJCK0VpekFvdzZOc2ROS2N5VkVrWWVNNzN5czZxNGtBSHA2QmlGa2xUa0lyVkM1b1lWN3V6d09HQ3o0VUowU3RxMmxXTUp5NHd0YitSZXRMNnRaRmljbkptQnc1VWpDdlhYTVpWSlgyTVFrYmYrWE41RVdkNzhWejgvSkVzTVpUQmlLTnpzbTFpbkxSVVE3NEg0TmlkYXFJNjhqNXNBRmd4Y1J2ZUM3aWVMSlhmUVl4alpaMkNzaVdGZXdaWEptQklsWjF0ZHRyWDRoU3VhdGVLc28vUlpPdE9LVzJubXExb1R6ZUs2ZFJXQVd1Mk5SVmI0aHEwU1htMUd2dHVnSHJicjVJWHFtU2t0ZzVDdURFMk1TbFB3c1k1a05FMldwM0FxaVpiV1ZMQXhpQkYrMmlCWmJ1Tmo2TUI2cnNNTEM3Rnlhc2FZRHlvN0trb1B5RXR3M3BFTVhmUHZ4QUppMmpBUVFnanJ6MHJMSVpTV1psSW9OaHdkNXhLNEFSOW1ZTmpXQWFMcm51SW1KZUJWTjl6Qk9ST2JWdmJyK21UVGZGU0VKTFNSbkhvN2hFSm9JaThNRnFqeG12Z21GNVVSWno0ekxGZ1paOEN0dTJYN2dnVmNjS205Z1Z4SXNPSHF4WGdOTUtuRldaWW5mMWRCbk9oYXlYcTE3UXdGbFdXMDllTkt5VkpGbVhxYU9OR0E1YUNlZ01iSjNVVWtHWTFpYzNuS1dnanE4cWZWWUdRRzFnUnQ2cnM2MmE2SGlxcVVPcWRlc0s1Tm1YNG5Hb2ZKb2lFMWQwZEY5bFZWa3ZUMS9rRUVhYUNvWU93RnBjVmNvTE0rNzY2OVB4QzlyV3FrdEgwc1dVWWxkMFZDcHVCWi9zdFZSY0dneTlXWDIrVTFRdGhpOVN6QXFTeHpac3krT2lGekJZbnlTR1Y2R2t1NDRyRDhCQ09aQlYzQnZENStBS1JITndNRXNCNkV6SG5KcGtUQWVpVWxFR2tjRUNlQjZHRFpUcDVZRUpUbHZkcmtueFlqVGxsTWtmTnRYd0RqTTd1VmpLNUpYVVVuNDNycnFwSzJqeXRheEhXME01RzhEQzhydEhNWXM3S1NnZHVWUU1HVFlGcUZ2VlM2cmtEM3NESjQ2YWZkWUZ3b3ExMUFPS0NCTGh2d29VZ2M4SUdBTnljUjZrblpyZEpQZHN1eG55amZkM0ZvdlRsUk1kRWR0T2w1Q01WNUVIc1hRQmlzN1RPd3ZJRFphR2oyVm5wYmg3Y3BLNjNWd1lFTUx3cWJqenlsNjk5c2F3RkZrRjF5cWpVVTMxSGZDNnNXMVpGVkZ1WFZYVmd6OWtlRWF3MHlzMWxXZm0rYXpRQVFTV0EraEtZVmZzWmpQbmNBY1VCOW9JYXl5L1VaWFJOY2tER2ppNzdHc1didkJvNnRQcldQcU95VmtCVXErSU5lcXB6TmRZcy91MGlmaDVxbXBxSVcrMzNKVlNVY3dZNzBLTDRVOWxZZFU2bGp0U2xzN2xtZmk5ZzNZemVRZlZrYUdGYVYzT0RDbmFEMk44d3NFREZrbEUzUnpNM1pnaGRZa1dIc3N6cTcwRkllY25La1ZrdDhlek16UnE5YmtHdUtvalJMQlZTb2QzWTF5UHFLZ1lXN0pSUVRQVnl5NXhJWUxqT2d4Z1Q1MlJLSlVZMWRPcklpUmQ0ZnV0UXgvQTVBY1NtRWp6MHZGV3JrTHp2YldBdTlIT1diR2d4RmsxVk5UcG5CS2s2VGd3aXNJL0hjeFlYUDF1QVdPNzJVTEZsQlRxK2FTdTJWVFVzNmhyeE0yQ0YraEVvcjFWSUE5Wm1GVWFhYjFsU1NnWnNWczRzeHpIbFZMb0pIcjlINERoT05Ua0kxWEMwL3dpWTJOb1dBRzVSbG5IRm5xNm9MY2NwUWRkTXVKL08xN0pWQTVPSExpMEJxQ3p0cTdZMSsrdWNDZDk4cUxJOE1JSEJWL2NLanhRVG1lM2hGQlMzTXlDcW5Ec3V5bTJvODBIanZGRlR0clVSbU5hR0pzbVZhaEltalRzVVhLdFFaVEFWczdNdnY4LytmelVyWkFYY0xKNk00a29lNlhQMGI2U21XV05EenlVcFE4YmwrTHRXeDR0dXFaMzZjUllWM3l1VnhQTnd2SWlxaVFDU211N3NyZ1R6UjZua3locENhclh3RnkxdkdkNWlQMmNZMDZsRnI1TmpoaGcxWTYrTkIyOGZ0Yks4M3M4cmY3a0xKYkt3REZQYkxnMjVhMEFkWkpFaXFyNXBoaXhLTURsUlV0Y3NzcTFocmlMcUdvSCt6ZU5nVm05T2VtanNFVFY4SmRGME5IbmtJRnhXWTFPQjRZcnA3cnRXSjdOZ0FBQVBYa2xFUVZRM29OczVucGx5VmY4dTJGb0x1MUpySHZlYVpXUWpxQWtzaHRGYTJnenNTRzNacGtidmczSGFmRjlzbFBQbGxkakZsSzgwR3lzbThNcjRNUGhuZU5XRU5QR2pBSXBtaWxUUEFUZFRSVFhsQ0JZSFlBUXVQd0EzNnhJcFd0R040cTNZMk1oaUdzVXB1U1NubEVKUkQ4UG9yQzdDRllWdytGNTFxVGhnYWJ4c1R4V3pDR1kwWlNzYjNsZnFBeTBPUE5qTnk4eGlRUUtzSFlGUTJIQlpWdlZiQnVxM20xb1dLYWpxYW9uc002dVpVcjZDalhXTlowbDVFM2gzalVSbWE2a1AzTUpJaXkxTG0ra2FoUXE0MU4yaVpqYTVzanRsTFlOWkhackg2cVVHbTR2TWJEcDZSdzJDRm12dXlGa3JCY0N5TXRGcUJhRUNtc0hvSzlCWjJMQS9sSmNScVNhRHFuYVdiclpkR2F6M0RMZ0l2QmxuNHdvR3p0YnlKR3FzbHd4a2hoSHJUalRZRlhDdE9vS1M4dUxkb2ZWZEFiT3lsR1U2bmxZcFhXWnRzNG5YQnE2V3hKaXRNTm9rSFVKbmJuSnBsUW0rYUdwWTJhNUdNVjJRRDFoUnViQlBGS2R1bWY1T0hrTEh6MEY5bHVFNWtqQmpSYTBuRkU1Q1VHcUh3MzJNbWpaNnhrZ0lOVm5TbloxVlpTdEsycUtsUmFMbFFnSzd1VHE3SkZYSndNKzNTT0VLeWhaTkkrdEowSTVxTVl5OWsycUpEN2RWV2RxS1hhMENLTlIwQ2NqZytCMklZdTJmY0JaSlprTUZnTTExcjBYOTJ3aWxnaEZHZ3pWbmV4bHFCN3hMOW1TMjlTaVlVVlkyblhPWmpOQlJzeURzUVBSV1c1aHJaNFhjZEM0SFZXUmJqZ0pyNHNGb2ZLNVN6alE3cmhJMVVlYmRQZEViajZzcUl2VFpRWjV2YTA4ckFCc0FXMFV4ZVd5dEFrN0EyS0o5WnB4ekNpb0IyNFhGdFlBZVhZeHI2YW5TcWhMZ3BwRXFXYkd3THVuVGdyVitJaldsTDI5bGphQWw0RVFNR3NFcnA0YXBlWmlxdXdSWExYQXFPQ2VydTMybW15ZGM2b1dUU1dwRkFHZHplVEI4UlRIVk1FdGxNOTBDYmJRQ1loUGpxM2VnWXIxRkdkWUlRaml1REdaNXpaL0F6b2JLR095THh0aTZjNFJ3dHYyYW55V2xMSUNubExoeEpSWHQ2QTVlYkRCV0ZOT05ieFdaMmQwMm1udTRTOVlFQ3BlcHBWMXpTV1JCV3hIWXpWSXYxQ1hTb3V3cXFYM2pCQkJEWmRZUWJwVFFXNFpRbFM4cjVrSDRzdVNSbWcyKyszSk4xMHgxUGFBbUVrbXRZbEVkZUdwSkVNNmtPdUNxQ1IyMm9TdWpqNUlWMkhkVDB6ajVwckxLVGpYRkFQamRRbHlxN3hJQnhBUVA1eU1jekc0VnhBS3cwbjZpbFoyUUJjZTJwTHVsa3V4eHFub0l6RmZncXlxamlsOVMxVk53QnJGbWV5ZW9wczh5T2paVXliWmRmUzhDdWFUSUp1bXpzNXRPRGFOdExwRkRRL1BjSkd3ZUxobWVMMW5CMEtxaVVEU2NzaVVWRDg5RGkzSHRyS3RTVUx3M1JMaXlnWkQrN3NGOEpUT2JnWXNyR3ZETlVGUkdsMWl5MExsMVlrVWMyYUpZTW9nOTIwSThxVzZZRENnMU1xazBKSEpGS1hrYmdiUnJlSStxcFlOT1pIclZjRFViYTdwanNwaFNKTnRLNnVwZ1JOQVZvT1MwbXVnQmVONGJJWmdIaHVQWi9zMUVOYVg2S3NWcitZTnJoMU5iN2lwUjBQRTV6Yk5SZWdDYnJIUlV3NllmMDdkTEJKbDFmOEtCOWFzMlYxbk5xQXNsNjJMQkJoZWh3YWxlcmtIbUIxSkZJRVpLU0V1c2RsNUpRajFuSmxIWFNDRjM0MmdKOUNZR3JYZWxrbkpJWHFWUDhzRCtxdHBsQ1IzWEgycWZLcTB5Z01wK0tuVmtLeE5sWjhtMllrSWxWTWlDblhVd2w3cXpuQktTdlF6M20zUHQ2b1FiWE81YjVGaXhDaC9mSHhVUVcvQUVjSzZ6Q05xS1FuTDlzeXdxbUt1d3ZxU1l6VC9hUFZOTnBWeWh2UlcyMWFxY2lDc2pkV3ZCd0lMVXZoNVZ5Q3piV29DMXBKako2ODBDV3NsK3VkS0I2VDVSd0cxbWxvaG5scGJnNDdpejVVOWhhMEZHdG1STEZZQnRPOTl5OTdBcDB6K1pEVEFvZzZrU0xac01IZy9JRmtrZ3A2Q3B2VTJVMGNZVlNkbm1randCZE9tWGJ4VFdOV3p1SWJpcE1pb1Z4RWNrWkVvYWhTT2l5Mk0zSzBqY0MxTGhWRHdhcUcwWnZrY1dxQ25yRzRHSXh5a3JxbGJXZHc2TFF5QmFaUjhIbUxSSWhRV3NIc3dENDJaWFZMTmtmOWwrRmxXMEhWUTJsd0ZzQy9aMUZkemxRUjBLYVBmbytGZGZ1Ky9kd1ZSSUN1MUNHUjdBRUlpQWhjK0FaVUYwa09CYVB4bVVxZzRpNjR2UW5VNG5GRFlKOU56KzFmVlh2ZUg5cW1yK2tQSUx4OG9LY1JWL0JGYnhiRTBKTVQwa1NENHc2TC9sTlk4b2NzcWFnVmRVM0EzTWp4aHhjR3VxenNQSDRpcnBhb3cxcTZPeXJWanZwOU5wYzU5RTkxTGxkYm9ZVnpKV2RpbVdmQVcyU05FS2NEYVgyRm1CTExBL3VLeGxtaGg2MTNJczFVUlFBcGJLZnR0d3hMMDJxNk9ueDVwUXhTYlBvakFnK3Y1aEFuTjZMSFZSRFhJc3ZLdFJqaVMwcUpVeVpUQVhWYkFLODJFbEZKV2FRZFZvcVVDMVVudDdCVmFUUXVkTTZTdXFleGpRSk40KzBpY2F4di91dGJLdjgzRVRiVDhIOGdqY09LeE9KbWJVYTZPT1ZYaHQzZEZZNnJIdjlYb056RkxjZUVBMW84K3BLbTBMQUhQSFoycllLakZxMGhmWkZpeHNxSEpnRDNlRDVuK1Uwa2IxbUZqWGtuMmx2TVNTT3NORS9DZElBS0YwU3l0cTZ1ck9IVU41Z3dnNEdab3NnYm1nZ001dWNyYTJxclMySWcxY2JpQkJjeFl6Z3pVRE5MQ3ZMOEdiWlhOcDZPUnkzTG1TK0trODN6UklBSzZBMWlvS2EySTlOYXBJdWlVRmRmQzk3NjZQRlpVdHFVcjZLYldrK3paVTFhL1pySVhFenRyalRPZno3aHdLemlDZVhJYXJhSHRiWklNeisycEdnYXpDbXc0cVdBRnZFZGhvZFlwMFhxMHBWN0cxWVdZV2JPNHFoR3E0MitaOEJZdHJMV3ZsdU5QcFpBZWFGRlMxdnViUGdiZ3hzcWNwbkFhc3pCb3ZLYUZvRFE4Qkd0amZVT2w0TkFHMm5tUVYwNGZlSmd1bXZYMmZzclFFV1pnaEwwSm5WZFlrbjNET1pJZVJOODZScVBXQ21zdkdWcUVNUm53eFFBeHdTOEVNWW8zSXptWTIrQkNjTHA0TUtpdXl1aEltYW1sYlpGY05vTmw3dHArUkhkMThaalFJUkt5WGRGUmhOOTgvaHlLcXdYV05vN08xd2lhWG9ITjEwOFJFWlpXRXE2Z3JuSWZqemVnOGpkUmYxWEVMNGtrWGE1YkJqS3hvS2FsakJqZUhsVnhRNEdheWNwVzRsRE9BS3RuVHhIQXRPZnpPdFp3SEFNN3NxVlhrVjZ5dTZrYXAxbkhrWEtxV0YvNFhIcWplbk5LcUJqcFIzbDFjaDNFamcxK0VzZ2RRaHNkRzBCNEZNOXNXQVZXcHVBeWl3VFBsZVp4dDlWeVpWUzJxWGZSZVdxVEFpbHByOUFwb1dUanh5bWl0N053VjRKVHJpWnlPQTlCMGs3SEZmVUxvdXJtS1lIVm5SUXZxR0w1SE1IZHFGY1IycVdwbWNLNmVUd3gyZGlwV3J2aURpbHIrZktXcTNPV1JXZEhLd0E0ZXU4d2pjaGJlUnpGaWxxampaTjN1ZkNwZmtKMC9zY1ZwbllrNkwwUEk3N2x4ZFdDWjg3V2lXbTdCL0FHcXVRU251akdLc0I4Q0ptaUpxOHExcEtJVld5cU9pVEs2NnIxOEJOOHI3NC9BRTcxZmRDM3lQUzJNeGRPcG5FMXRsVnhEOUptVk9vZ2dOK3I0UGpBWFZGUGEzRWc1alZKR0ZWVUdOb2xIMjBHVnJVQjdCT3lTV3E2V3FZUWRXUjkycGNGTVlNd2NrYlNnQ0tDcUQ2N0RpaVd1MWc4TVFDOUJ5ZmNGcVcxTCtqTDcxNHFOQ3V6bm9TeHQwZGEyZ3RXTjFHOEYwQkswTk4wbnVpbWVsVUY5ZElkQWZqTzQ0VVQzQ2pRTG9VZUxISkZUTzNnbXBSdUlJT3Z3QlFDYnFOZW8zcXRaOWlGNnhWSzEzR1JsbzR6cWltcStDR2RUaVIxdVJZOG9xZ0UwMmhaQmE3OWtaWFBNcXV4UkhLbGEyc2FaV040bVJxWlVqMHZMQ0toa2pLbnFPUUhOdVNaVkpvS3ZBcVMxd3BFcXV2V0RDMUIyeXB3ckNQc1JNRVBWVE9ETUxKTUR2NnFlS1h3aTJKWVY1U3E0cUt5dmdHc0hDTGl1ajJqUjU5VjhnTXFTSjJGSlpSWEVIVlJIajNzRlByY3Q2T3BxbFcxR3BhdFFkdDBHdndmTTZuNjNJbnNHVkZoSkdhQnFncXFJVjZJc1hsbFpneVNQcTRSM2JudDN3aTVjditjTjJ5cVFMVzFUOTVLWVZzV1d0S2s0Y0I5VzUzV1FRZmxRWVI2V2w0SGFKWmp2VkUwRDV5dnErUktnWkNzNXFkQkVQNXNEOTRjQXZRTGxTZ05hU01BdEh4ODhCdU5RNDF6ZEZzWDMwektiY3MwTUxEL2loa3BRemwwd2lUcUtMVGZiS21DbXlZSUNuSzBJYmFpZUM0Q0c5aVN5TFE3Y0lNR1F3YXU2VEtvcTYwQXBsM1dONDBMWnBjYTFDS0tLOVZReXlJRW44dzBGOEY2Q0wyaDhvM2l4R3dDN3M3RVd6Q09xbWNBcFl4WUQ0anNBelZTMHNsMnQ5OHBBN3ZyS29waENWU29uYllwZ0g2bXZTbjI0cFRCVjRzZHRWM0J0TXE1azgyeStJQUR2VUowdUFsa0NWVHhJYVBtK1VOdS9xa1Y0RjFUekhYQ0dyWElBcUl0Qkt5cHFLOTlWdEFPVnM2NE80T2JYN3BITFZDcFlIY1Jtd3ZMUjdUdllBS0JCTjU4TEdWekR1RnoraFFiV2duY1F5Q1pBaytWYnNQU291ZjkzMjYxaVpnbWZDcHdSYkF2cW1TcXJpVTJQd2hqYW9PeVlxdEllZ1ZYVmlUc215dGE2Ykd5U3BZM2d5UnJwSXlBZWFXRER4dHBzWHdLeWFsTURLTlA3WUJYTXFFc2tVc2kydUM4Rk5BUHhBS1RWZlQxbzZWek0wRTBqRisxcldjVXVIdmR5Zzd2Z29GcGxYOEhwdkhwTUNPTVJVUEh6WmtJbnNxbEZLTlgvRUlPNTJFMFN4U3pPd29iMlZtUkxXNUQxWElVMHJiZ00xQXpXZ3lDN2ZlOEc3eFVBSy90YUVCYXQ3bHVxdHlQN0Vtc2FKUU9qNUYrbXJuWmZDdVlDZkJVQVd3U2h5ZDZwTVkvdkFIRzFVcU9ZcGJJL2d5NVQwQ01LbStVTzNnRnVDODVkZ2ZEVmVndVBEZklUcklCTHNMcmNnZGgzQ0ZnRlpqYUtKNEl2M0Y4QU5FcXZ1eFIxdFZLT2dMb0NhMWp4Ym9CQWtqNnY3ai9pY0ZiQTdmNHJmUm5RRExSVmlHMTNpMHZxQlFyWVZxQmJBRFpUMFpwaUhvU3p2UXBvcEtJRlMzc0UxSGZCV2xIWGQwSDdMbkFycXZvdWdNdGxqSEJnWm5oM0Vvei9CS2pMTUw0WjJBcTAraEVKcjlqYVZVQmJ2TnpDSVVpcm9DN0FXbW1GdzRvNUFLM010QjVWeXBaTVNGZ3MwNUp5R1Z3bHdCcXNFR0FBYTJaVTFDalVleFhHc0U0cktyaWlsQnZGek9LS28zQXVBcm9FNlFGUVUzdThZcE5Yd1M1aysxVFp0NVVyd291TjRLaVVFdytrM1pXRHAxUlhITlJxWGIyMVRzMzk5NDV5WlNnM1ZuWkZOUTlDRjNYZVp5cjVEZ0JYS2l3Q01hMk14ZVREWVhnUDFGc2Y5UU5LWmMwazgxUkprM3I2RVEzckNtQlZ5TEw3NUVqWjFwSVZESG9GdGlPQUhvQjBCZFRWeWxxQnNLS0tTK0FlQlhKVkxZK0NYQVN1R3ZPL0F1cTdHdUVqRGZHS2cxb0thMXovZG1taTlJOVNVR05obDBBdGZ1bEhBYXdvWXJuU2ttTlhBVnVHRWhyRVZYdlVGK0E1Q3QyUHFOT2pEZXR5bmE0Q21lVW9sbWVYTE40QXE3QzVTajEwUTd5amdsK3Q2Q054U1JIbUk1WCtDcHdyZVlCM1FmZHFuYTRxMjFLZEJ1YzRHb1pzbjQ5Wk9PaVZpbndIcUs5V3pqdmdld2VFaDJBVTUrdnR4WjlDZDlXcWtoNDlWMThFNW9qNnZWeW4wUlN0QXlHSU81ZWRYUktkNUIwVkdWWHEyeXIzeFlwKzVVdCtDNFFKNFAxTjMzOXBRTWpSZWpqNHZiL0RjcjZyUWMzTy8wcmptdFpwZVlDQmlDSGZDZW1SYk5oYksvcE5VUGMzd2ZLeTVmMkQ3T2xMMy91UGh2ZS9vVTRUMEY4ZitWTk0ydnlvaXYwaksrS0hRZmRIcSswYm5jejRvejczLytZNkxiS3cxby81QjdlT2YxUmwvMGR1OUI5dG4vOWJ2cmYvait2MGg2dHRuMnRwL3IvNDgxOXk0L3p2NTM5MXV2enpmd0RpZno2cGhUMU1QZ0FBQUFCSlJVNUVya0pnZ2c9PSl9LnNlbS1jb2xvci1kYXJrLWlucHV0cyAuY29sb3ItdHlwZXtjb2xvcjojNTU1O2xpbmUtaGVpZ2h0OjIycHh9LnNlbS1jb2xvci1saWdodC1pbnB1dHMgLmNvbG9yLXR5cGV7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyMnB4fS5zZW0tY29sb3ItbGlzdCBsaXttaW4taGVpZ2h0OjUwcHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgaXNJRTEwOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBoc3ZhOiBIc3ZhO1xuXG4gIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcblxuICBwcml2YXRlIG91dHB1dENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgaW5pdGlhbENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgZmFsbGJhY2tDb2xvcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgbGlzdGVuZXJSZXNpemU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lck1vdXNlRG93bjogYW55O1xuXG4gIHByaXZhdGUgZGlyZWN0aXZlSW5zdGFuY2U6IGFueTtcblxuICBwcml2YXRlIHNsaWRlckg6IG51bWJlcjtcbiAgcHJpdmF0ZSBzbGlkZXJEaW1NYXg6IFNsaWRlckRpbWVuc2lvbjtcbiAgcHJpdmF0ZSBkaXJlY3RpdmVFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgZGlhbG9nQXJyb3dTaXplOiBudW1iZXIgPSAxMDtcbiAgcHJpdmF0ZSBkaWFsb2dBcnJvd09mZnNldDogbnVtYmVyID0gMTU7XG5cbiAgcHJpdmF0ZSB1c2VSb290Vmlld0NvbnRhaW5lcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBzaG93OiBib29sZWFuO1xuICBwdWJsaWMgaGlkZGVuOiBib29sZWFuO1xuXG4gIHB1YmxpYyB0b3A6IG51bWJlcjtcbiAgcHVibGljIGxlZnQ6IG51bWJlcjtcbiAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmc7XG5cbiAgcHVibGljIGZvcm1hdDogbnVtYmVyO1xuICBwdWJsaWMgc2xpZGVyOiBTbGlkZXJQb3NpdGlvbjtcblxuICBwdWJsaWMgaGV4VGV4dDogc3RyaW5nO1xuICBwdWJsaWMgaHNsYVRleHQ6IEhzbGE7XG4gIHB1YmxpYyByZ2JhVGV4dDogUmdiYTtcblxuICBwdWJsaWMgYXJyb3dUb3A6IG51bWJlcjtcblxuICBwdWJsaWMgc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xuICBwdWJsaWMgaHVlU2xpZGVyQ29sb3I6IHN0cmluZztcbiAgcHVibGljIGFscGhhU2xpZGVyQ29sb3I6IHN0cmluZztcblxuICBwdWJsaWMgY3BXaWR0aDogbnVtYmVyO1xuICBwdWJsaWMgY3BIZWlnaHQ6IG51bWJlcjtcblxuICBwdWJsaWMgY3BBbHBoYUNoYW5uZWw6IHN0cmluZztcbiAgcHVibGljIGNwT3V0cHV0Rm9ybWF0OiBzdHJpbmc7XG5cbiAgcHVibGljIGNwRGlzYWJsZUlucHV0OiBib29sZWFuO1xuICBwdWJsaWMgY3BEaWFsb2dEaXNwbGF5OiBzdHJpbmc7XG5cbiAgcHVibGljIGNwSWdub3JlZEVsZW1lbnRzOiBhbnk7XG4gIHB1YmxpYyBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW47XG5cbiAgcHVibGljIGNwUG9zaXRpb246IHN0cmluZztcbiAgcHVibGljIGNwUG9zaXRpb25PZmZzZXQ6IG51bWJlcjtcblxuICBwdWJsaWMgY3BPS0J1dHRvbjogYm9vbGVhbjtcbiAgcHVibGljIGNwT0tCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBjcE9LQnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY3BDYW5jZWxCdXR0b246IGJvb2xlYW47XG4gIHB1YmxpYyBjcENhbmNlbEJ1dHRvblRleHQ6IHN0cmluZztcbiAgcHVibGljIGNwQ2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY3BQcmVzZXRMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgY3BQcmVzZXRDb2xvcnM6IHN0cmluZ1tdO1xuICBwdWJsaWMgY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGg6IG51bWJlcjtcblxuICBwdWJsaWMgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgY3BBZGRDb2xvckJ1dHRvbjogYm9vbGVhbjtcbiAgcHVibGljIGNwQWRkQ29sb3JCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBjcEFkZENvbG9yQnV0dG9uQ2xhc3M6IHN0cmluZztcbiAgcHVibGljIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb2xvclRvZ2dsZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdodWVTbGlkZXInKSBodWVTbGlkZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FscGhhU2xpZGVyJykgYWxwaGFTbGlkZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZ1BvcHVwJykgZGlhbG9nRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBDb2xvclBpY2tlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlclBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gICAgICBjb25zdCBodWVXaWR0aCA9IHRoaXMuaHVlU2xpZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBhbHBoYVdpZHRoID0gdGhpcy5hbHBoYVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICB0aGlzLnNsaWRlckRpbU1heCA9IG5ldyBTbGlkZXJEaW1lbnNpb24oaHVlV2lkdGgsIHRoaXMuY3BXaWR0aCwgMTMwLCBhbHBoYVdpZHRoKTtcblxuICAgICAgaWYgKHRoaXMuY3BPdXRwdXRGb3JtYXQgPT09ICdyZ2JhJykge1xuICAgICAgICB0aGlzLmZvcm1hdCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3BPdXRwdXRGb3JtYXQgPT09ICdoc2xhJykge1xuICAgICAgICB0aGlzLmZvcm1hdCA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1hdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdGVuZXJNb3VzZURvd24gPSAoZXZlbnQ6IGFueSkgPT4geyB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTsgfTtcbiAgICAgIHRoaXMubGlzdGVuZXJSZXNpemUgPSAoKSA9PiB7IHRoaXMub25SZXNpemUoKTsgfTtcblxuICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuaW5pdGlhbENvbG9yLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLmNwV2lkdGggIT09IDEwMCkge1xuICAgICAgY29uc3QgaHVlV2lkdGggPSB0aGlzLmh1ZVNsaWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgY29uc3QgYWxwaGFXaWR0aCA9IHRoaXMuYWxwaGFTbGlkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgdGhpcy5zbGlkZXJEaW1NYXggPSBuZXcgU2xpZGVyRGltZW5zaW9uKGh1ZVdpZHRoLCB0aGlzLmNwV2lkdGgsIDEzMCwgYWxwaGFXaWR0aCk7XG5cbiAgICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoZmFsc2UpO1xuXG4gICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgfVxuICBwdWJsaWMgYWRkQ29sb3IoKXt9XG4gIHB1YmxpYyBvcGVuRGlhbG9nKGNvbG9yOiBhbnksIGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2VydmljZS5zZXRBY3RpdmUodGhpcyk7XG5cbiAgICAgIGlmICghdGhpcy53aWR0aCkge1xuICAgICAgICB0aGlzLmNwV2lkdGggPSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlaWdodCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDMyMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRJbml0aWFsQ29sb3IoY29sb3IpO1xuXG4gICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyhjb2xvciwgZW1pdCk7XG5cbiAgICAgIHRoaXMub3BlbkNvbG9yUGlja2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0dXBEaWFsb2coXG4gICAgY29sb3JUb2dnbGU6IGJvb2xlYW4sXG4gICAgaW5zdGFuY2U6IGFueSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY29sb3I6IGFueSxcbiAgICBjcFdpZHRoOiBzdHJpbmcsIGNwSGVpZ2h0OiBzdHJpbmcsIGNwRGlhbG9nRGlzcGxheTogc3RyaW5nLCBjcEZhbGxiYWNrQ29sb3I6IHN0cmluZyxcbiAgICBjcEFscGhhQ2hhbm5lbDogc3RyaW5nLCBjcE91dHB1dEZvcm1hdDogc3RyaW5nLCBjcERpc2FibGVJbnB1dDogYm9vbGVhbixcbiAgICBjcElnbm9yZWRFbGVtZW50czogYW55LCBjcFNhdmVDbGlja091dHNpZGU6IGJvb2xlYW4sIGNwVXNlUm9vdFZpZXdDb250YWluZXI6IGJvb2xlYW4sXG4gICAgY3BQb3NpdGlvbjogc3RyaW5nLCBjcFBvc2l0aW9uT2Zmc2V0OiBzdHJpbmcsIGNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3c6IGJvb2xlYW4sXG4gICAgY3BQcmVzZXRMYWJlbDogc3RyaW5nLCBjcFByZXNldENvbG9yczogc3RyaW5nW10sIGNwTWF4UHJlc2V0Q29sb3JzTGVuZ3RoOiBudW1iZXIsXG4gICAgY3BQcmVzZXRFbXB0eU1lc3NhZ2U6IHN0cmluZywgY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzczogc3RyaW5nLFxuICAgIGNwT0tCdXR0b246IGJvb2xlYW4sIGNwT0tCdXR0b25DbGFzczogc3RyaW5nLCBjcE9LQnV0dG9uVGV4dDogc3RyaW5nLFxuICAgIGNwQ2FuY2VsQnV0dG9uOiBib29sZWFuLCBjcENhbmNlbEJ1dHRvbkNsYXNzOiBzdHJpbmcsIGNwQ2FuY2VsQnV0dG9uVGV4dDogc3RyaW5nLFxuICAgIGNwQWRkQ29sb3JCdXR0b246IGJvb2xlYW4sIGNwQWRkQ29sb3JCdXR0b25DbGFzczogc3RyaW5nLCBjcEFkZENvbG9yQnV0dG9uVGV4dDogc3RyaW5nLFxuICAgIGNwUmVtb3ZlQ29sb3JCdXR0b25DbGFzczogc3RyaW5nKTogdm9pZFxuICB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbENvbG9yKGNvbG9yKTtcblxuICAgICAgdGhpcy5pc0lFMTAgPSAoZGV0ZWN0SUUoKSA9PT0gMTApO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuXG4gICAgICB0aGlzLmNwRGlzYWJsZUlucHV0ID0gY3BEaXNhYmxlSW5wdXQ7XG5cbiAgICAgIHRoaXMuY3BBbHBoYUNoYW5uZWwgPSBjcEFscGhhQ2hhbm5lbDtcbiAgICAgIHRoaXMuY3BPdXRwdXRGb3JtYXQgPSBjcE91dHB1dEZvcm1hdDtcbiAgICAgIHRoaXMuY3BEaWFsb2dEaXNwbGF5ID0gY3BEaWFsb2dEaXNwbGF5O1xuXG4gICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzID0gY3BJZ25vcmVkRWxlbWVudHM7XG4gICAgICB0aGlzLmNwU2F2ZUNsaWNrT3V0c2lkZSA9IGNwU2F2ZUNsaWNrT3V0c2lkZTtcblxuICAgICAgdGhpcy51c2VSb290Vmlld0NvbnRhaW5lciA9IGNwVXNlUm9vdFZpZXdDb250YWluZXI7XG5cbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNwV2lkdGggPSBwYXJzZUludChjcFdpZHRoLCAxMCk7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY3BIZWlnaHQgPSBwYXJzZUludChjcEhlaWdodCwgMTApO1xuXG4gICAgICB0aGlzLmNwUG9zaXRpb24gPSBjcFBvc2l0aW9uO1xuICAgICAgdGhpcy5jcFBvc2l0aW9uT2Zmc2V0ID0gcGFyc2VJbnQoY3BQb3NpdGlvbk9mZnNldCwgMTApO1xuXG4gICAgICB0aGlzLmNwT0tCdXR0b24gPSBjcE9LQnV0dG9uO1xuICAgICAgdGhpcy5jcE9LQnV0dG9uVGV4dCA9IGNwT0tCdXR0b25UZXh0O1xuICAgICAgdGhpcy5jcE9LQnV0dG9uQ2xhc3MgPSBjcE9LQnV0dG9uQ2xhc3M7XG5cbiAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b24gPSBjcENhbmNlbEJ1dHRvbjtcbiAgICAgIHRoaXMuY3BDYW5jZWxCdXR0b25UZXh0ID0gY3BDYW5jZWxCdXR0b25UZXh0O1xuICAgICAgdGhpcy5jcENhbmNlbEJ1dHRvbkNsYXNzID0gY3BDYW5jZWxCdXR0b25DbGFzcztcblxuICAgICAgdGhpcy5mYWxsYmFja0NvbG9yID0gY3BGYWxsYmFja0NvbG9yIHx8ICcjZmZmJztcblxuICAgICAgdGhpcy5jb2xvclRvZ2dsZSA9IGNvbG9yVG9nZ2xlO1xuXG4gICAgICB0aGlzLnNldFByZXNldENvbmZpZyhjcFByZXNldExhYmVsLCBjcFByZXNldENvbG9ycyk7XG5cbiAgICAgIHRoaXMuY3BNYXhQcmVzZXRDb2xvcnNMZW5ndGggPSBjcE1heFByZXNldENvbG9yc0xlbmd0aDtcbiAgICAgIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2UgPSBjcFByZXNldEVtcHR5TWVzc2FnZTtcbiAgICAgIHRoaXMuY3BQcmVzZXRFbXB0eU1lc3NhZ2VDbGFzcyA9IGNwUHJlc2V0RW1wdHlNZXNzYWdlQ2xhc3M7XG5cbiAgICAgIHRoaXMuY3BBZGRDb2xvckJ1dHRvbiA9IGNwQWRkQ29sb3JCdXR0b247XG4gICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b25UZXh0ID0gY3BBZGRDb2xvckJ1dHRvblRleHQ7XG4gICAgICB0aGlzLmNwQWRkQ29sb3JCdXR0b25DbGFzcyA9IGNwQWRkQ29sb3JCdXR0b25DbGFzcztcbiAgICAgIHRoaXMuY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzID0gY3BSZW1vdmVDb2xvckJ1dHRvbkNsYXNzO1xuXG4gICAgICBpZiAoIWNwUG9zaXRpb25SZWxhdGl2ZVRvQXJyb3cpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dBcnJvd09mZnNldCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dBcnJvd1NpemUgPSAwO1xuICAgICAgICB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNwT3V0cHV0Rm9ybWF0ID09PSAnaGV4JyAmJiBjcEFscGhhQ2hhbm5lbCAhPT0gJ2Fsd2F5cycgJiYgY3BBbHBoYUNoYW5uZWwgIT09ICdoZXg4Jykge1xuICAgICAgICB0aGlzLmNwQWxwaGFDaGFubmVsID0gJ2Rpc2FibGVkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0SW5pdGlhbENvbG9yKGNvbG9yOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxDb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgcHVibGljIHNldFByZXNldENvbmZpZyhjcFByZXNldExhYmVsOiBzdHJpbmcsIGNwUHJlc2V0Q29sb3JzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuY3BQcmVzZXRMYWJlbCA9IGNwUHJlc2V0TGFiZWw7XG4gICAgdGhpcy5jcFByZXNldENvbG9ycyA9IGNwUHJlc2V0Q29sb3JzO1xuICB9XG5cbiAgcHVibGljIHNldENvbG9yVG9nZ2xlKGNvbG9yRHJvcEVuYWJsZWQ6IGJvb2xlYW4pOnZvaWR7XG4gICAgdGhpcy5jb2xvclRvZ2dsZSA9IGNvbG9yRHJvcEVuYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sb3JGcm9tU3RyaW5nKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgbGV0IGhzdmE6IEhzdmE7XG5cbiAgICBpZiAodGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2Fsd2F5cycgfHwgdGhpcy5jcEFscGhhQ2hhbm5lbCA9PT0gJ2hleDgnKSB7XG4gICAgICBoc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgIGlmICghaHN2YSAmJiAhdGhpcy5oc3ZhKSB7XG4gICAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHZhbHVlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKCFoc3ZhICYmICF0aGlzLmhzdmEpIHtcbiAgICAgIGhzdmEgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHRoaXMuZmFsbGJhY2tDb2xvciwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChoc3ZhKSB7XG4gICAgICB0aGlzLmhzdmEgPSBoc3ZhO1xuXG4gICAgICB0aGlzLnNsaWRlckggPSB0aGlzLmhzdmEuaDtcblxuICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcihlbWl0LCB1cGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgdGhpcy5zZXREaWFsb2dQb3NpdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jcERpYWxvZ0Rpc3BsYXkgIT09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25EcmFnRW5kKHNsaWRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJEcmFnRW5kKHsgc2xpZGVyOiBzbGlkZXIsIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRHJhZ1N0YXJ0KHNsaWRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJEcmFnU3RhcnQoeyBzbGlkZXI6IHNsaWRlciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3IgfSk7XG4gIH1cblxuICBwdWJsaWMgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNJRTEwICYmIHRoaXMuY3BEaWFsb2dEaXNwbGF5ID09PSAncG9wdXAnICYmXG4gICAgICAgIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgIXRoaXMuaXNEZXNjZW5kYW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICB0aGlzLmNwSWdub3JlZEVsZW1lbnRzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtID09PSBldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICBpZiAoIXRoaXMuY3BTYXZlQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHRoaXMuaW5pdGlhbENvbG9yLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5pbml0aWFsQ29sb3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25BY2NlcHRDb2xvcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ3BvcHVwJykge1xuICAgICAgdGhpcy5jbG9zZUNvbG9yUGlja2VyKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3V0cHV0Q29sb3IpIHtcbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JTZWxlY3RlZCh0aGlzLm91dHB1dENvbG9yKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DYW5jZWxDb2xvcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuc2V0Q29sb3JGcm9tU3RyaW5nKHRoaXMuaW5pdGlhbENvbG9yLCB0cnVlKTtcblxuICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ3BvcHVwJykge1xuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5jb2xvckNoYW5nZWQodGhpcy5pbml0aWFsQ29sb3IsIHRydWUpO1xuXG4gICAgICB0aGlzLmNsb3NlQ29sb3JQaWNrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmNvbG9yQ2FuY2VsZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZvcm1hdFRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1hdCA9ICh0aGlzLmZvcm1hdCArIDEpICUgMztcbiAgfVxuXG4gIHB1YmxpYyBvbkNvbG9yQ2hhbmdlKHZhbHVlOiB7czogbnVtYmVyLCB2OiBudW1iZXIsIHJnWDogbnVtYmVyLCByZ1k6IG51bWJlcn0pOiB2b2lkIHtcbiAgICB0aGlzLmhzdmEucyA9IHZhbHVlLnMgLyB2YWx1ZS5yZ1g7XG4gICAgdGhpcy5oc3ZhLnYgPSB2YWx1ZS52IC8gdmFsdWUucmdZO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ2xpZ2h0bmVzcycsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLnYsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ3NhdHVyYXRpb24nLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5zLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkh1ZUNoYW5nZSh2YWx1ZToge3Y6IG51bWJlciwgcmdYOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLmggPSB2YWx1ZS52IC8gdmFsdWUucmdYO1xuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5zbGlkZXJDaGFuZ2VkKHtcbiAgICAgIHNsaWRlcjogJ2h1ZScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmgsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWxwaGFDaGFuZ2UodmFsdWU6IHt2OiBudW1iZXIsIHJnWDogbnVtYmVyfSk6IHZvaWQge1xuICAgIHRoaXMuaHN2YS5hID0gdmFsdWUudiAvIHZhbHVlLnJnWDtcblxuICAgIHRoaXMudXBkYXRlQ29sb3JQaWNrZXIoKTtcblxuICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2Uuc2xpZGVyQ2hhbmdlZCh7XG4gICAgICBzbGlkZXI6ICdhbHBoYScsXG4gICAgICB2YWx1ZTogdGhpcy5oc3ZhLmEsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uSGV4SW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgJiYgdmFsdWVbMF0gIT09ICcjJykge1xuICAgICAgICB2YWx1ZSA9ICcjJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldENvbG9yRnJvbVN0cmluZyh2YWx1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICAgIGlucHV0OiAnaGV4JyxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVkSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSk7XG5cbiAgICByZ2JhLnIgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe2lucHV0OiAncmVkJywgdmFsdWU6IHJnYmEuciwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJsdWVJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCByZ2JhID0gdGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKTtcblxuICAgIHJnYmEuYiA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5yZ2JhVG9Ic3ZhKHJnYmEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7aW5wdXQ6ICdibHVlJywgdmFsdWU6IHJnYmEuYiwgY29sb3I6IHRoaXMub3V0cHV0Q29sb3J9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkdyZWVuSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHRoaXMuaHN2YSk7XG5cbiAgICByZ2JhLmcgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UucmdiYVRvSHN2YShyZ2JhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdncmVlbicsXG4gICAgICB2YWx1ZTogcmdiYS5nLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFscGhhSW5wdXQodmFsdWU6IHt2OiBudW1iZXIsIHJnOiBudW1iZXJ9KTogdm9pZCB7XG4gICAgdGhpcy5oc3ZhLmEgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2FscGhhJyxcbiAgICAgIHZhbHVlOiB0aGlzLmhzdmEuYSxcbiAgICAgIGNvbG9yOiB0aGlzLm91dHB1dENvbG9yXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25IdWVJbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pIHtcbiAgICB0aGlzLmhzdmEuaCA9IHZhbHVlLnYgLyB2YWx1ZS5yZztcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdodWUnLFxuICAgICAgdmFsdWU6IHRoaXMuaHN2YS5oLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxpZ2h0bmVzc0lucHV0KHZhbHVlOiB7djogbnVtYmVyLCByZzogbnVtYmVyfSk6IHZvaWQge1xuICAgIGNvbnN0IGhzbGEgPSB0aGlzLnNlcnZpY2UuaHN2YTJoc2xhKHRoaXMuaHN2YSk7XG5cbiAgICBoc2xhLmwgPSB2YWx1ZS52IC8gdmFsdWUucmc7XG5cbiAgICB0aGlzLmhzdmEgPSB0aGlzLnNlcnZpY2UuaHNsYTJoc3ZhKGhzbGEpO1xuXG4gICAgdGhpcy5zbGlkZXJIID0gdGhpcy5oc3ZhLmg7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG9yUGlja2VyKCk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLmlucHV0Q2hhbmdlZCh7XG4gICAgICBpbnB1dDogJ2xpZ2h0bmVzcycsXG4gICAgICB2YWx1ZTogaHNsYS5sLFxuICAgICAgY29sb3I6IHRoaXMub3V0cHV0Q29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNhdHVyYXRpb25JbnB1dCh2YWx1ZToge3Y6IG51bWJlciwgcmc6IG51bWJlcn0pOiB2b2lkIHtcbiAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpO1xuXG4gICAgaHNsYS5zID0gdmFsdWUudiAvIHZhbHVlLnJnO1xuXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLmhzbGEyaHN2YShoc2xhKTtcblxuICAgIHRoaXMuc2xpZGVySCA9IHRoaXMuaHN2YS5oO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvclBpY2tlcigpO1xuXG4gICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS5pbnB1dENoYW5nZWQoe1xuICAgICAgaW5wdXQ6ICdzYXR1cmF0aW9uJyxcbiAgICAgIHZhbHVlOiBoc2xhLnMsXG4gICAgICBjb2xvcjogdGhpcy5vdXRwdXRDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWRkUHJlc2V0Q29sb3IoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCF0aGlzLmNwUHJlc2V0Q29sb3JzLmZpbHRlcigoY29sb3IpID0+IChjb2xvciA9PT0gdmFsdWUpKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3BQcmVzZXRDb2xvcnMgPSB0aGlzLmNwUHJlc2V0Q29sb3JzLmNvbmNhdCh2YWx1ZSk7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UucHJlc2V0Q29sb3JzQ2hhbmdlZCh0aGlzLmNwUHJlc2V0Q29sb3JzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZW1vdmVQcmVzZXRDb2xvcihldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmNwUHJlc2V0Q29sb3JzID0gdGhpcy5jcFByZXNldENvbG9ycy5maWx0ZXIoKGNvbG9yKSA9PiAoY29sb3IgIT09IHZhbHVlKSk7XG5cbiAgICB0aGlzLmRpcmVjdGl2ZUluc3RhbmNlLnByZXNldENvbG9yc0NoYW5nZWQodGhpcy5jcFByZXNldENvbG9ycyk7XG4gIH1cblxuICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHN0YXR1c1xuXG4gIHByaXZhdGUgb3BlbkNvbG9yUGlja2VyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zaG93KSB7XG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNldERpYWxvZ1Bvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LCAwKTtcblxuICAgICAgdGhpcy5kaXJlY3RpdmVJbnN0YW5jZS50b2dnbGUodHJ1ZSk7XG5cbiAgICAgIGlmICghdGhpcy5pc0lFMTApIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5saXN0ZW5lck1vdXNlRG93bik7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyUmVzaXplKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlQ29sb3JQaWNrZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdykge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UudG9nZ2xlKGZhbHNlKTtcblxuICAgICAgaWYgKCF0aGlzLmlzSUUxMCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmxpc3RlbmVyTW91c2VEb3duKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMubGlzdGVuZXJSZXNpemUpO1xuXG4gICAgICBpZiAoIXRoaXMuY2RSZWZbJ2Rlc3Ryb3llZCddKSB7XG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29sb3JQaWNrZXIoZW1pdDogYm9vbGVhbiA9IHRydWUsIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZXJEaW1NYXgpIHtcbiAgICAgIGNvbnN0IGxhc3RPdXRwdXQgPSB0aGlzLm91dHB1dENvbG9yO1xuXG4gICAgICBjb25zdCBoc2xhID0gdGhpcy5zZXJ2aWNlLmhzdmEyaHNsYSh0aGlzLmhzdmEpO1xuICAgICAgY29uc3QgcmdiYSA9IHRoaXMuc2VydmljZS5kZW5vcm1hbGl6ZVJHQkEodGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEodGhpcy5oc3ZhKSk7XG5cbiAgICAgIGNvbnN0IGh1ZSA9IHRoaXMuc2VydmljZS5kZW5vcm1hbGl6ZVJHQkEodGhpcy5zZXJ2aWNlLmhzdmFUb1JnYmEobmV3IEhzdmEodGhpcy5zbGlkZXJIIHx8IHRoaXMuaHN2YS5oLCAxLCAxLCAxKSkpO1xuXG4gICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgIHRoaXMuaHNsYVRleHQgPSBuZXcgSHNsYShNYXRoLnJvdW5kKChoc2xhLmgpICogMzYwKSwgTWF0aC5yb3VuZChoc2xhLnMgKiAxMDApLCBNYXRoLnJvdW5kKGhzbGEubCAqIDEwMCksXG4gICAgICAgICAgTWF0aC5yb3VuZChoc2xhLmEgKiAxMDApIC8gMTAwKTtcblxuICAgICAgICB0aGlzLnJnYmFUZXh0ID0gbmV3IFJnYmEocmdiYS5yLCByZ2JhLmcsIHJnYmEuYiwgTWF0aC5yb3VuZChyZ2JhLmEgKiAxMDApIC8gMTAwKTtcblxuICAgICAgICBjb25zdCBhbGxvd0hleDggPSB0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnYWx3YXlzJyB8fCB0aGlzLmNwQWxwaGFDaGFubmVsID09PSAnaGV4OCc7XG5cbiAgICAgICAgdGhpcy5oZXhUZXh0ID0gdGhpcy5zZXJ2aWNlLnJnYmFUb0hleChyZ2JhLCBhbGxvd0hleDgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmh1ZVNsaWRlckNvbG9yID0gJ3JnYignICsgaHVlLnIgKyAnLCcgKyBodWUuZyArICcsJyArIGh1ZS5iICsgJyknO1xuICAgICAgdGhpcy5hbHBoYVNsaWRlckNvbG9yID0gJ3JnYignICsgcmdiYS5yICsgJywnICsgcmdiYS5nICsgJywnICsgcmdiYS5iICsgJyknO1xuXG4gICAgICB0aGlzLm91dHB1dENvbG9yID0gdGhpcy5zZXJ2aWNlLm91dHB1dEZvcm1hdCh0aGlzLmhzdmEsIHRoaXMuY3BPdXRwdXRGb3JtYXQsIHRoaXMuY3BBbHBoYUNoYW5uZWwpO1xuICAgICAgdGhpcy5zZWxlY3RlZENvbG9yID0gdGhpcy5zZXJ2aWNlLm91dHB1dEZvcm1hdCh0aGlzLmhzdmEsICdyZ2JhJywgbnVsbCk7XG5cbiAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlclBvc2l0aW9uKFxuICAgICAgICAodGhpcy5zbGlkZXJIIHx8IHRoaXMuaHN2YS5oKSAqIHRoaXMuc2xpZGVyRGltTWF4LmggLSA4LFxuICAgICAgICB0aGlzLmhzdmEucyAqIHRoaXMuc2xpZGVyRGltTWF4LnMgLSA4LFxuICAgICAgICAoMSAtIHRoaXMuaHN2YS52KSAqIHRoaXMuc2xpZGVyRGltTWF4LnYgLSA4LFxuICAgICAgICB0aGlzLmhzdmEuYSAqIHRoaXMuc2xpZGVyRGltTWF4LmEgLSA4XG4gICAgICApO1xuXG4gICAgICBpZiAoZW1pdCAmJiBsYXN0T3V0cHV0ICE9PSB0aGlzLm91dHB1dENvbG9yKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlSW5zdGFuY2UuY29sb3JDaGFuZ2VkKHRoaXMub3V0cHV0Q29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIGNvbG9yIHBpY2tlciBkaWFsb2cgcG9zaXRpb25pbmdcblxuICBwcml2YXRlIHNldERpYWxvZ1Bvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNwRGlhbG9nRGlzcGxheSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaWFsb2dIZWlnaHQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGxldCBwb3NpdGlvbiA9ICdzdGF0aWMnLCB0cmFuc2Zvcm0gPSAnJywgc3R5bGUgPSBudWxsO1xuXG4gICAgICBsZXQgcGFyZW50Tm9kZTogYW55ID0gbnVsbCwgdHJhbnNmb3JtTm9kZTogYW55ID0gbnVsbDtcblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmRpcmVjdGl2ZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCAmJiBub2RlLnRhZ05hbWUgIT09ICdIVE1MJykge1xuICAgICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBwb3NpdGlvbiA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJyk7XG4gICAgICAgIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJyAmJiB0cmFuc2Zvcm1Ob2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdHJhbnNmb3JtTm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gdHJhbnNmb3JtTm9kZTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYm94RGlyZWN0aXZlID0gdGhpcy5jcmVhdGVCb3godGhpcy5kaXJlY3RpdmVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIChwb3NpdGlvbiAhPT0gJ2ZpeGVkJykpO1xuXG4gICAgICBpZiAodGhpcy51c2VSb290Vmlld0NvbnRhaW5lciB8fCAocG9zaXRpb24gPT09ICdmaXhlZCcgJiYgIXBhcmVudE5vZGUpKSB7XG4gICAgICAgIHRoaXMudG9wID0gYm94RGlyZWN0aXZlLnRvcDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gYm94RGlyZWN0aXZlLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm94UGFyZW50ID0gdGhpcy5jcmVhdGVCb3gocGFyZW50Tm9kZSwgKHBvc2l0aW9uICE9PSAnZml4ZWQnKSk7XG5cbiAgICAgICAgdGhpcy50b3AgPSBib3hEaXJlY3RpdmUudG9wIC0gYm94UGFyZW50LnRvcDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gYm94RGlyZWN0aXZlLmxlZnQgLSBib3hQYXJlbnQubGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jcFBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgdGhpcy50b3AgKz0gYm94RGlyZWN0aXZlLmhlaWdodCAqIHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICAgIHRoaXMubGVmdCAtPSB0aGlzLmNwV2lkdGggKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZSAtIDI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3BQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgdGhpcy5hcnJvd1RvcCA9IGRpYWxvZ0hlaWdodCAtIDE7XG5cbiAgICAgICAgdGhpcy50b3AgLT0gZGlhbG9nSGVpZ2h0ICsgdGhpcy5kaWFsb2dBcnJvd1NpemU7XG4gICAgICAgIHRoaXMubGVmdCArPSB0aGlzLmNwUG9zaXRpb25PZmZzZXQgLyAxMDAgKiBib3hEaXJlY3RpdmUud2lkdGggLSB0aGlzLmRpYWxvZ0Fycm93T2Zmc2V0O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNwUG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIHRoaXMudG9wICs9IGJveERpcmVjdGl2ZS5oZWlnaHQgKyB0aGlzLmRpYWxvZ0Fycm93U2l6ZTtcbiAgICAgICAgdGhpcy5sZWZ0ICs9IHRoaXMuY3BQb3NpdGlvbk9mZnNldCAvIDEwMCAqIGJveERpcmVjdGl2ZS53aWR0aCAtIHRoaXMuZGlhbG9nQXJyb3dPZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvcCArPSBib3hEaXJlY3RpdmUuaGVpZ2h0ICogdGhpcy5jcFBvc2l0aW9uT2Zmc2V0IC8gMTAwIC0gdGhpcy5kaWFsb2dBcnJvd09mZnNldDtcbiAgICAgICAgdGhpcy5sZWZ0ICs9IGJveERpcmVjdGl2ZS53aWR0aCArIHRoaXMuZGlhbG9nQXJyb3dTaXplIC0gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBjb2xvciBwaWNrZXIgZGlhbG9nIHBvc2l0aW9uaW5nIGFuZCBvcGVuaW5nXG5cbiAgcHJpdmF0ZSBjcmVhdGVCb3goZWxlbWVudDogYW55LCBvZmZzZXQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IDApLFxuICAgICAgbGVmdDogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgKG9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IDApLFxuICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgaXNEZXNjZW5kYW50KHBhcmVudDogYW55LCBjaGlsZDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IG5vZGU6IGFueSA9IGNoaWxkLnBhcmVudE5vZGU7XG5cbiAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==