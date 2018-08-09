/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ColorWidgetComponent = /** @class */ (function () {
    function ColorWidgetComponent() {
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
        if (changes.colorDropEnabled) {
            this.colorDropEnabled = changes.colorDropEnabled.currentValue;
        }
    };
    ColorWidgetComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'sembler-color-widget',
                    template: " <!--// RGBA-->\n  <span\n    [colorToggle]=\"colorDropEnabled\"\n    [cpWidth]=\"overlayWidth\"\n    [cpAlphaChannel]=\"'always'\"\n    [cpPresetColors]=\"colorPallete\"\n    [cpAddColorButton]=\"true\"\n    [style.background]=\"lastColor\"\n    [cpToggle]=\"true\"\n    [cpDialogDisplay]=\"'inline'\"\n    [cpCancelButton]=\"false\"\n    [cpCancelButtonClass]= \"'btn btn-primary btn-xs'\"\n    [(colorPicker)]=\"lastColor\"\n    (cpPresetColorsChange)=\"updatedColorPreset($event)\"\n  >\n  </span>\n\n"
                },] },
    ];
    /** @nocollapse */
    ColorWidgetComponent.ctorParameters = function () { return []; };
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7O0lBd0NyQjtpQ0FHdUMsSUFBSSxZQUFZLEVBQU87S0FIN0M7SUFWakIsc0JBQ0ksbURBQWlCOzs7OztRQURyQixVQUNzQixTQUFjO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFBO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDNUI7WUFDRCxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUM7YUFDcEQ7U0FDRjs7O09BQUE7Ozs7O0lBS0QsaURBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQWlCO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQVk7UUFDdEIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztTQUMvRDtLQUNGOztnQkFuREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMmZBaUJYO2lCQUNBOzs7OzttQ0FFRSxLQUFLOytCQUNMLEtBQUs7b0NBSUwsS0FBSyxTQUFDLG1CQUFtQjtvQ0FZekIsTUFBTTs7K0JBaERUOztTQThCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbWJsZXItY29sb3Itd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGAgPCEtLS8vIFJHQkEtLT5cbiAgPHNwYW5cbiAgICBbY29sb3JUb2dnbGVdPVwiY29sb3JEcm9wRW5hYmxlZFwiXG4gICAgW2NwV2lkdGhdPVwib3ZlcmxheVdpZHRoXCJcbiAgICBbY3BBbHBoYUNoYW5uZWxdPVwiJ2Fsd2F5cydcIlxuICAgIFtjcFByZXNldENvbG9yc109XCJjb2xvclBhbGxldGVcIlxuICAgIFtjcEFkZENvbG9yQnV0dG9uXT1cInRydWVcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImxhc3RDb2xvclwiXG4gICAgW2NwVG9nZ2xlXT1cInRydWVcIlxuICAgIFtjcERpYWxvZ0Rpc3BsYXldPVwiJ2lubGluZSdcIlxuICAgIFtjcENhbmNlbEJ1dHRvbl09XCJmYWxzZVwiXG4gICAgW2NwQ2FuY2VsQnV0dG9uQ2xhc3NdPSBcIididG4gYnRuLXByaW1hcnkgYnRuLXhzJ1wiXG4gICAgWyhjb2xvclBpY2tlcildPVwibGFzdENvbG9yXCJcbiAgICAoY3BQcmVzZXRDb2xvcnNDaGFuZ2UpPVwidXBkYXRlZENvbG9yUHJlc2V0KCRldmVudClcIlxuICA+XG4gIDwvc3Bhbj5cblxuYFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvcldpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcbiAgQElucHV0KCkgY29sb3JEcm9wRW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgb3ZlcmxheVdpZHRoO1xuICBwdWJsaWMgY29sb3JQYWxsZXRlO1xuICBwdWJsaWMgbGFzdENvbG9yO1xuXG4gIEBJbnB1dCgndXNlckNvbG9yc1BhbGxldGUnKVxuICBzZXQgdXNlckNvbG9yc1BhbGxldGUoY29sb3JsaXN0OiBhbnkpIHtcbiAgICB0aGlzLmNvbG9yUGFsbGV0ZSA9IGNvbG9ybGlzdFxuICAgIGlmKGNvbG9ybGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubGFzdENvbG9yID0gJyNmZmZmZmYnO1xuICAgIH1cbiAgICBpZihjb2xvcmxpc3QubGVuZ3RoICE9PSAwKXtcbiAgICAgIHRoaXMubGFzdENvbG9yID0gY29sb3JsaXN0WyBjb2xvcmxpc3QubGVuZ3RoIC0gMSBdO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBPdXRwdXQoKVxuICB1cGRhdGVDb2xvclByZXNldDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgdXBkYXRlZENvbG9yUHJlc2V0KGV2ZW50OiBBcnJheTxhbnk+KXtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudClcbiAgICB0aGlzLnVwZGF0ZUNvbG9yUHJlc2V0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYoY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkKXtcbiAgICAgIHRoaXMuY29sb3JEcm9wRW5hYmxlZCA9IGNoYW5nZXMuY29sb3JEcm9wRW5hYmxlZC5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=