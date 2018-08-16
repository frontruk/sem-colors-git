/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export class ColorWidgetComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ0QsV0FBVyxFQUFFLE1BQU0sRUFDL0IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUF3QnBELE1BQU07Ozs7SUFnQkosWUFBbUQsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7aUNBRzNCLElBQUksWUFBWSxFQUFPO0tBSFM7Ozs7O0lBVnZFLElBQ0ksaUJBQWlCLENBQUMsU0FBYztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQTtRQUM3QixFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFDRCxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FBQztTQUNwRDtLQUNGOzs7OztJQUtELGtCQUFrQixDQUFDLEtBQWlCO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQVk7UUFDdEIsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQzthQUMvRDtTQUNGO0tBQ0Y7OztZQXJERixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQlg7YUFDQTs7Ozs0Q0FpQmUsTUFBTSxTQUFDLFdBQVc7OzsrQkFmL0IsS0FBSzsyQkFDTCxLQUFLO2dDQUlMLEtBQUssU0FBQyxtQkFBbUI7Z0NBWXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLCBQTEFURk9STV9JRCwgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbWJsZXItY29sb3Itd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGAgPCEtLS8vIFJHQkEtLT5cbiAgPHNwYW5cbiAgICBbY29sb3JUb2dnbGVdPVwiY29sb3JEcm9wRW5hYmxlZFwiXG4gICAgW2NwV2lkdGhdPVwib3ZlcmxheVdpZHRoXCJcbiAgICBbY3BBbHBoYUNoYW5uZWxdPVwiJ2Fsd2F5cydcIlxuICAgIFtjcFByZXNldENvbG9yc109XCJjb2xvclBhbGxldGVcIlxuICAgIFtjcEFkZENvbG9yQnV0dG9uXT1cInRydWVcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImxhc3RDb2xvclwiXG4gICAgW2NwVG9nZ2xlXT1cInRydWVcIlxuICAgIFtjcERpYWxvZ0Rpc3BsYXldPVwiJ2lubGluZSdcIlxuICAgIFtjcENhbmNlbEJ1dHRvbl09XCJmYWxzZVwiXG4gICAgW2NwQ2FuY2VsQnV0dG9uQ2xhc3NdPSBcIididG4gYnRuLXByaW1hcnkgYnRuLXhzJ1wiXG4gICAgWyhjb2xvclBpY2tlcildPVwibGFzdENvbG9yXCJcbiAgICAoY3BQcmVzZXRDb2xvcnNDaGFuZ2UpPVwidXBkYXRlZENvbG9yUHJlc2V0KCRldmVudClcIlxuICA+XG4gIDwvc3Bhbj5cblxuYFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvcldpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcbiAgQElucHV0KCkgY29sb3JEcm9wRW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgb3ZlcmxheVdpZHRoO1xuICBwdWJsaWMgY29sb3JQYWxsZXRlO1xuICBwdWJsaWMgbGFzdENvbG9yO1xuXG4gIEBJbnB1dCgndXNlckNvbG9yc1BhbGxldGUnKVxuICBzZXQgdXNlckNvbG9yc1BhbGxldGUoY29sb3JsaXN0OiBhbnkpIHtcbiAgICB0aGlzLmNvbG9yUGFsbGV0ZSA9IGNvbG9ybGlzdFxuICAgIGlmKGNvbG9ybGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubGFzdENvbG9yID0gJyNmZmZmZmYnO1xuICAgIH1cbiAgICBpZihjb2xvcmxpc3QubGVuZ3RoICE9PSAwKXtcbiAgICAgIHRoaXMubGFzdENvbG9yID0gY29sb3JsaXN0WyBjb2xvcmxpc3QubGVuZ3RoIC0gMSBdO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvciggQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnkpIHsgfVxuXG4gIEBPdXRwdXQoKVxuICB1cGRhdGVDb2xvclByZXNldDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgdXBkYXRlZENvbG9yUHJlc2V0KGV2ZW50OiBBcnJheTxhbnk+KXtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudClcbiAgICB0aGlzLnVwZGF0ZUNvbG9yUHJlc2V0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmNvbG9yRHJvcEVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jb2xvckRyb3BFbmFibGVkID0gY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==