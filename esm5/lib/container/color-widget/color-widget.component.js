/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
var ColorWidgetComponent = /** @class */ (function () {
    function ColorWidgetComponent(platformId) {
        this.platformId = platformId;
        this.updateColorPreset = new EventEmitter();
    }
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
        // if (isPlatformBrowser(this.platformId)) {
        //   if (changes.data) {
        //     console.log('changes', changes)
        //     // this.toggleStatus = changes.colorDropEnabled.currentValue;
        //   }
        // }
    };
    ColorWidgetComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'div[sembler-color-widget]',
                    template: " <!--// RGBA-->\n  <span\n    [colorToggle]=\"data.enabledList\"\n    [cpWidth]=\"overlayWidth\"\n    [cpAlphaChannel]=\"'always'\"\n    [cpPresetColors]=\"data.items\"\n    [cpAddColorButton]=\"true\"\n    [style.background]=\"lastColor\"\n    [cpToggle]=\"true\"\n    [cpDialogDisplay]=\"'inline'\"\n    [cpCancelButton]=\"false\"\n    [cpCancelButtonClass]= \"'btn btn-primary btn-xs'\"\n    [(colorPicker)]=\"lastColor\"\n    (cpPresetColorsChange)=\"updatedColorPreset($event)\"\n  >\n  </span>\n\n"
                },] },
    ];
    ColorWidgetComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ColorWidgetComponent.propDecorators = {
        overlayWidth: [{ type: Input }],
        data: [{ type: Input }],
        updateColorPreset: [{ type: Output }]
    };
    return ColorWidgetComponent;
}());
export { ColorWidgetComponent };
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
    /**
     * @type {?}
     * @private
     */
    ColorWidgetComponent.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ0QsV0FBVyxFQUFFLE1BQU0sRUFDL0IsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUErQ0UsOEJBQW1ELFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBR2xFLHNCQUFpQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSE0sQ0FBQzs7Ozs7SUFJdEUsaURBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQWlCO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCwwQ0FBVzs7OztJQUFYLFVBQVksT0FBWTtRQUN0Qiw0Q0FBNEM7UUFDNUMsd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0QyxvRUFBb0U7UUFDcEUsTUFBTTtRQUNOLElBQUk7SUFDTixDQUFDOztnQkEvREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUseWZBaUJYO2lCQUNBOzs7Z0RBMEJlLE1BQU0sU0FBQyxXQUFXOzs7K0JBdkIvQixLQUFLO3VCQW9CTCxLQUFLO29DQUtMLE1BQU07O0lBZVQsMkJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQTFDWSxvQkFBb0I7OztJQUUvQiw0Q0FBc0I7O0lBQ3RCLDRDQUFvQjs7SUFDcEIseUNBQWlCOztJQWtCakIsb0NBQWM7O0lBS2QsaURBQytEOzs7OztJQUhsRCwwQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLCBQTEFURk9STV9JRCwgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RpdltzZW1ibGVyLWNvbG9yLXdpZGdldF0nLFxuICB0ZW1wbGF0ZTogYCA8IS0tLy8gUkdCQS0tPlxuICA8c3BhblxuICAgIFtjb2xvclRvZ2dsZV09XCJkYXRhLmVuYWJsZWRMaXN0XCJcbiAgICBbY3BXaWR0aF09XCJvdmVybGF5V2lkdGhcIlxuICAgIFtjcEFscGhhQ2hhbm5lbF09XCInYWx3YXlzJ1wiXG4gICAgW2NwUHJlc2V0Q29sb3JzXT1cImRhdGEuaXRlbXNcIlxuICAgIFtjcEFkZENvbG9yQnV0dG9uXT1cInRydWVcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImxhc3RDb2xvclwiXG4gICAgW2NwVG9nZ2xlXT1cInRydWVcIlxuICAgIFtjcERpYWxvZ0Rpc3BsYXldPVwiJ2lubGluZSdcIlxuICAgIFtjcENhbmNlbEJ1dHRvbl09XCJmYWxzZVwiXG4gICAgW2NwQ2FuY2VsQnV0dG9uQ2xhc3NdPSBcIididG4gYnRuLXByaW1hcnkgYnRuLXhzJ1wiXG4gICAgWyhjb2xvclBpY2tlcildPVwibGFzdENvbG9yXCJcbiAgICAoY3BQcmVzZXRDb2xvcnNDaGFuZ2UpPVwidXBkYXRlZENvbG9yUHJlc2V0KCRldmVudClcIlxuICA+XG4gIDwvc3Bhbj5cblxuYFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvcldpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcblxuICBASW5wdXQoKSBvdmVybGF5V2lkdGg7XG4gIHB1YmxpYyBjb2xvclBhbGxldGU7XG4gIHB1YmxpYyBsYXN0Q29sb3I7XG5cbiAgLy8gQElucHV0KCkgY29sb3JEcm9wRW5hYmxlZDogYm9vbGVhbjtcbiAgLy8gcHVibGljIHRvZ2dsZVN0YXR1cztcbiAgLy8gQElucHV0KCdkYXRhJylcbiAgLy8gc2V0IHVzZXJDb2xvcnNQYWxsZXRlKGNvbG9ybGlzdDogYW55KSB7XG4gIC8vICAgLy8gdGhpcy5jb2xvclBhbGxldGUgPSBjb2xvcmxpc3RcbiAgLy8gICBjb25zb2xlLmxvZygnZGF0YScsIHRoaXMuZGF0YSlcbiAgLy8gICB0aGlzLmNvbG9yUGFsbGV0ZSA9IGNvbG9ybGlzdC5pdGVtcztcbiAgLy8gICB0aGlzLnRvZ2dsZVN0YXR1cyA9ICBjb2xvcmxpc3QuZW5hYmxlZExpc3Q7XG4gIC8vICAgaWYoY29sb3JsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAvLyAgICAgdGhpcy5sYXN0Q29sb3IgPSAnI2ZmZmZmZic7XG4gIC8vICAgfVxuICAvLyAgIGlmKGNvbG9ybGlzdC5sZW5ndGggIT09IDApe1xuICAvLyAgICAgdGhpcy5sYXN0Q29sb3IgPSBjb2xvcmxpc3RbIGNvbG9ybGlzdC5sZW5ndGggLSAxIF07XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgQElucHV0KCkgZGF0YTtcblxuXG4gIGNvbnN0cnVjdG9yKCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSkge31cblxuICBAT3V0cHV0KClcbiAgdXBkYXRlQ29sb3JQcmVzZXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHVwZGF0ZWRDb2xvclByZXNldChldmVudDogQXJyYXk8YW55Pil7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpXG4gICAgdGhpcy51cGRhdGVDb2xvclByZXNldC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIC8vIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgLy8gICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VzJywgY2hhbmdlcylcbiAgICAvLyAgICAgLy8gdGhpcy50b2dnbGVTdGF0dXMgPSBjaGFuZ2VzLmNvbG9yRHJvcEVuYWJsZWQuY3VycmVudFZhbHVlO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxufVxuIl19