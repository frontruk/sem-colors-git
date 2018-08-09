/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ColorWidgetComponent {
    constructor() {
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
        if (changes.colorDropEnabled) {
            this.colorDropEnabled = changes.colorDropEnabled.currentValue;
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
ColorWidgetComponent.ctorParameters = () => [];
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUF3QnZCLE1BQU07SUFnQko7aUNBR3VDLElBQUksWUFBWSxFQUFPO0tBSDdDOzs7OztJQVZqQixJQUNJLGlCQUFpQixDQUFDLFNBQWM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUE7UUFDN0IsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzVCO1FBQ0QsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUM7U0FDcEQ7S0FDRjs7Ozs7SUFLRCxrQkFBa0IsQ0FBQyxLQUFpQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFZO1FBQ3RCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7U0FDL0Q7S0FDRjs7O1lBbkRGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCWDthQUNBOzs7OzsrQkFFRSxLQUFLOzJCQUNMLEtBQUs7Z0NBSUwsS0FBSyxTQUFDLG1CQUFtQjtnQ0FZekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtYmxlci1jb2xvci13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYCA8IS0tLy8gUkdCQS0tPlxuICA8c3BhblxuICAgIFtjb2xvclRvZ2dsZV09XCJjb2xvckRyb3BFbmFibGVkXCJcbiAgICBbY3BXaWR0aF09XCJvdmVybGF5V2lkdGhcIlxuICAgIFtjcEFscGhhQ2hhbm5lbF09XCInYWx3YXlzJ1wiXG4gICAgW2NwUHJlc2V0Q29sb3JzXT1cImNvbG9yUGFsbGV0ZVwiXG4gICAgW2NwQWRkQ29sb3JCdXR0b25dPVwidHJ1ZVwiXG4gICAgW3N0eWxlLmJhY2tncm91bmRdPVwibGFzdENvbG9yXCJcbiAgICBbY3BUb2dnbGVdPVwidHJ1ZVwiXG4gICAgW2NwRGlhbG9nRGlzcGxheV09XCInaW5saW5lJ1wiXG4gICAgW2NwQ2FuY2VsQnV0dG9uXT1cImZhbHNlXCJcbiAgICBbY3BDYW5jZWxCdXR0b25DbGFzc109IFwiJ2J0biBidG4tcHJpbWFyeSBidG4teHMnXCJcbiAgICBbKGNvbG9yUGlja2VyKV09XCJsYXN0Q29sb3JcIlxuICAgIChjcFByZXNldENvbG9yc0NoYW5nZSk9XCJ1cGRhdGVkQ29sb3JQcmVzZXQoJGV2ZW50KVwiXG4gID5cbiAgPC9zcGFuPlxuXG5gXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2Vze1xuICBASW5wdXQoKSBjb2xvckRyb3BFbmFibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBvdmVybGF5V2lkdGg7XG4gIHB1YmxpYyBjb2xvclBhbGxldGU7XG4gIHB1YmxpYyBsYXN0Q29sb3I7XG5cbiAgQElucHV0KCd1c2VyQ29sb3JzUGFsbGV0ZScpXG4gIHNldCB1c2VyQ29sb3JzUGFsbGV0ZShjb2xvcmxpc3Q6IGFueSkge1xuICAgIHRoaXMuY29sb3JQYWxsZXRlID0gY29sb3JsaXN0XG4gICAgaWYoY29sb3JsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5sYXN0Q29sb3IgPSAnI2ZmZmZmZic7XG4gICAgfVxuICAgIGlmKGNvbG9ybGlzdC5sZW5ndGggIT09IDApe1xuICAgICAgdGhpcy5sYXN0Q29sb3IgPSBjb2xvcmxpc3RbIGNvbG9ybGlzdC5sZW5ndGggLSAxIF07XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQE91dHB1dCgpXG4gIHVwZGF0ZUNvbG9yUHJlc2V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICB1cGRhdGVkQ29sb3JQcmVzZXQoZXZlbnQ6IEFycmF5PGFueT4pe1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KVxuICAgIHRoaXMudXBkYXRlQ29sb3JQcmVzZXQuZW1pdChldmVudCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZihjaGFuZ2VzLmNvbG9yRHJvcEVuYWJsZWQpe1xuICAgICAgdGhpcy5jb2xvckRyb3BFbmFibGVkID0gY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==