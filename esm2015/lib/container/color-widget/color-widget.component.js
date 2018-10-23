/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
export class ColorWidgetComponent {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.updateColorPreset = new EventEmitter();
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
        // if (isPlatformBrowser(this.platformId)) {
        //   if (changes.data) {
        //     console.log('changes', changes)
        //     // this.toggleStatus = changes.colorDropEnabled.currentValue;
        //   }
        // }
    }
}
ColorWidgetComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'div[sembler-color-widget]',
                template: ` <!--// RGBA-->
  <span
    [colorToggle]="data.enabledList"
    [cpWidth]="overlayWidth"
    [cpAlphaChannel]="'always'"
    [cpPresetColors]="data.items"
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
ColorWidgetComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ColorWidgetComponent.propDecorators = {
    overlayWidth: [{ type: Input }],
    data: [{ type: Input }],
    updateColorPreset: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ColorWidgetComponent.prototype.overlayWidth;
    /** @type {?} */
    ColorWidgetComponent.prototype.colorPallete;
    /** @type {?} */
    ColorWidgetComponent.prototype.lastColor;
    /** @type {?} */
    ColorWidgetComponent.prototype.data;
    /** @type {?} */
    ColorWidgetComponent.prototype.updateColorPreset;
    /** @type {?} */
    ColorWidgetComponent.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ0QsV0FBVyxFQUFFLE1BQU0sRUFDL0IsTUFBTSxlQUFlLENBQUM7QUF5QnZCLE1BQU07Ozs7SUF5QkosWUFBbUQsVUFBZTtRQUFmLGVBQVUsR0FBVixVQUFVLENBQUs7UUFHbEUsc0JBQWlCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFITSxDQUFDOzs7OztJQUl0RSxrQkFBa0IsQ0FBQyxLQUFpQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQVk7UUFDdEIsNENBQTRDO1FBQzVDLHdCQUF3QjtRQUN4QixzQ0FBc0M7UUFDdEMsb0VBQW9FO1FBQ3BFLE1BQU07UUFDTixJQUFJO0lBQ04sQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCWDthQUNBOzs7NENBMEJlLE1BQU0sU0FBQyxXQUFXOzs7MkJBdkIvQixLQUFLO21CQW9CTCxLQUFLO2dDQUtMLE1BQU07Ozs7SUF6QlAsNENBQXNCOztJQUN0Qiw0Q0FBb0I7O0lBQ3BCLHlDQUFpQjs7SUFrQmpCLG9DQUFjOztJQUtkLGlEQUMrRDs7SUFIbEQsMENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcywgUExBVEZPUk1fSUQsIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtYmxlci1jb2xvci13aWRnZXRdJyxcbiAgdGVtcGxhdGU6IGAgPCEtLS8vIFJHQkEtLT5cbiAgPHNwYW5cbiAgICBbY29sb3JUb2dnbGVdPVwiZGF0YS5lbmFibGVkTGlzdFwiXG4gICAgW2NwV2lkdGhdPVwib3ZlcmxheVdpZHRoXCJcbiAgICBbY3BBbHBoYUNoYW5uZWxdPVwiJ2Fsd2F5cydcIlxuICAgIFtjcFByZXNldENvbG9yc109XCJkYXRhLml0ZW1zXCJcbiAgICBbY3BBZGRDb2xvckJ1dHRvbl09XCJ0cnVlXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJsYXN0Q29sb3JcIlxuICAgIFtjcFRvZ2dsZV09XCJ0cnVlXCJcbiAgICBbY3BEaWFsb2dEaXNwbGF5XT1cIidpbmxpbmUnXCJcbiAgICBbY3BDYW5jZWxCdXR0b25dPVwiZmFsc2VcIlxuICAgIFtjcENhbmNlbEJ1dHRvbkNsYXNzXT0gXCInYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cydcIlxuICAgIFsoY29sb3JQaWNrZXIpXT1cImxhc3RDb2xvclwiXG4gICAgKGNwUHJlc2V0Q29sb3JzQ2hhbmdlKT1cInVwZGF0ZWRDb2xvclByZXNldCgkZXZlbnQpXCJcbiAgPlxuICA8L3NwYW4+XG5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG5cbiAgQElucHV0KCkgb3ZlcmxheVdpZHRoO1xuICBwdWJsaWMgY29sb3JQYWxsZXRlO1xuICBwdWJsaWMgbGFzdENvbG9yO1xuXG4gIC8vIEBJbnB1dCgpIGNvbG9yRHJvcEVuYWJsZWQ6IGJvb2xlYW47XG4gIC8vIHB1YmxpYyB0b2dnbGVTdGF0dXM7XG4gIC8vIEBJbnB1dCgnZGF0YScpXG4gIC8vIHNldCB1c2VyQ29sb3JzUGFsbGV0ZShjb2xvcmxpc3Q6IGFueSkge1xuICAvLyAgIC8vIHRoaXMuY29sb3JQYWxsZXRlID0gY29sb3JsaXN0XG4gIC8vICAgY29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLmRhdGEpXG4gIC8vICAgdGhpcy5jb2xvclBhbGxldGUgPSBjb2xvcmxpc3QuaXRlbXM7XG4gIC8vICAgdGhpcy50b2dnbGVTdGF0dXMgPSAgY29sb3JsaXN0LmVuYWJsZWRMaXN0O1xuICAvLyAgIGlmKGNvbG9ybGlzdC5sZW5ndGggPT09IDApIHtcbiAgLy8gICAgIHRoaXMubGFzdENvbG9yID0gJyNmZmZmZmYnO1xuICAvLyAgIH1cbiAgLy8gICBpZihjb2xvcmxpc3QubGVuZ3RoICE9PSAwKXtcbiAgLy8gICAgIHRoaXMubGFzdENvbG9yID0gY29sb3JsaXN0WyBjb2xvcmxpc3QubGVuZ3RoIC0gMSBdO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIEBJbnB1dCgpIGRhdGE7XG5cblxuICBjb25zdHJ1Y3RvciggQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBhbnkpIHt9XG5cbiAgQE91dHB1dCgpXG4gIHVwZGF0ZUNvbG9yUHJlc2V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICB1cGRhdGVkQ29sb3JQcmVzZXQoZXZlbnQ6IEFycmF5PGFueT4pe1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KVxuICAgIHRoaXMudXBkYXRlQ29sb3JQcmVzZXQuZW1pdChldmVudCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgIC8vICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnY2hhbmdlcycsIGNoYW5nZXMpXG4gICAgLy8gICAgIC8vIHRoaXMudG9nZ2xlU3RhdHVzID0gY2hhbmdlcy5jb2xvckRyb3BFbmFibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==