/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
export { ColorWidgetComponent };
if (false) {
    /** @type {?} */
    ColorWidgetComponent.prototype.colorDropEnabled;
    /** @type {?} */
    ColorWidgetComponent.prototype.overlayWidth;
    /** @type {?} */
    ColorWidgetComponent.prototype.colorPallete;
    /** @type {?} */
    ColorWidgetComponent.prototype.lastColor;
    /** @type {?} */
    ColorWidgetComponent.prototype.updateColorPreset;
    /** @type {?} */
    ColorWidgetComponent.prototype.platformId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ0QsV0FBVyxFQUFFLE1BQU0sRUFDL0IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBd0NsRCw4QkFBbUQsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7aUNBRzNCLElBQUksWUFBWSxFQUFPO0tBSFM7SUFWdkUsc0JBQ0ksbURBQWlCOzs7OztRQURyQixVQUNzQixTQUFjO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFBO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDNUI7WUFDRCxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUM7YUFDcEQ7U0FDRjs7O09BQUE7Ozs7O0lBS0QsaURBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQWlCO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQVk7UUFDdEIsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQzthQUMvRDtTQUNGO0tBQ0Y7O2dCQXJERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSwyZkFpQlg7aUJBQ0E7Ozs7Z0RBaUJlLE1BQU0sU0FBQyxXQUFXOzs7bUNBZi9CLEtBQUs7K0JBQ0wsS0FBSztvQ0FJTCxLQUFLLFNBQUMsbUJBQW1CO29DQVl6QixNQUFNOzsrQkFqRFQ7O1NBK0JhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsIFBMQVRGT1JNX0lELCBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbWJsZXItY29sb3Itd2lkZ2V0XScsXG4gIHRlbXBsYXRlOiBgIDwhLS0vLyBSR0JBLS0+XG4gIDxzcGFuXG4gICAgW2NvbG9yVG9nZ2xlXT1cImNvbG9yRHJvcEVuYWJsZWRcIlxuICAgIFtjcFdpZHRoXT1cIm92ZXJsYXlXaWR0aFwiXG4gICAgW2NwQWxwaGFDaGFubmVsXT1cIidhbHdheXMnXCJcbiAgICBbY3BQcmVzZXRDb2xvcnNdPVwiY29sb3JQYWxsZXRlXCJcbiAgICBbY3BBZGRDb2xvckJ1dHRvbl09XCJ0cnVlXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJsYXN0Q29sb3JcIlxuICAgIFtjcFRvZ2dsZV09XCJ0cnVlXCJcbiAgICBbY3BEaWFsb2dEaXNwbGF5XT1cIidpbmxpbmUnXCJcbiAgICBbY3BDYW5jZWxCdXR0b25dPVwiZmFsc2VcIlxuICAgIFtjcENhbmNlbEJ1dHRvbkNsYXNzXT0gXCInYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cydcIlxuICAgIFsoY29sb3JQaWNrZXIpXT1cImxhc3RDb2xvclwiXG4gICAgKGNwUHJlc2V0Q29sb3JzQ2hhbmdlKT1cInVwZGF0ZWRDb2xvclByZXNldCgkZXZlbnQpXCJcbiAgPlxuICA8L3NwYW4+XG5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG4gIEBJbnB1dCgpIGNvbG9yRHJvcEVuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG92ZXJsYXlXaWR0aDtcbiAgcHVibGljIGNvbG9yUGFsbGV0ZTtcbiAgcHVibGljIGxhc3RDb2xvcjtcblxuICBASW5wdXQoJ3VzZXJDb2xvcnNQYWxsZXRlJylcbiAgc2V0IHVzZXJDb2xvcnNQYWxsZXRlKGNvbG9ybGlzdDogYW55KSB7XG4gICAgdGhpcy5jb2xvclBhbGxldGUgPSBjb2xvcmxpc3RcbiAgICBpZihjb2xvcmxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxhc3RDb2xvciA9ICcjZmZmZmZmJztcbiAgICB9XG4gICAgaWYoY29sb3JsaXN0Lmxlbmd0aCAhPT0gMCl7XG4gICAgICB0aGlzLmxhc3RDb2xvciA9IGNvbG9ybGlzdFsgY29sb3JsaXN0Lmxlbmd0aCAtIDEgXTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55KSB7IH1cblxuICBAT3V0cHV0KClcbiAgdXBkYXRlQ29sb3JQcmVzZXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHVwZGF0ZWRDb2xvclByZXNldChldmVudDogQXJyYXk8YW55Pil7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpXG4gICAgdGhpcy51cGRhdGVDb2xvclByZXNldC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY29sb3JEcm9wRW5hYmxlZCA9IGNoYW5nZXMuY29sb3JEcm9wRW5hYmxlZC5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=