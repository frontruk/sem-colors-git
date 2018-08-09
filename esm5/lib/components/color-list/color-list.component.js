/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
var ColorListComponent = /** @class */ (function () {
    function ColorListComponent(elRef) {
        this.elRef = elRef;
        this.colorList = [{}];
        this.componentData = null;
    }
    Object.defineProperty(ColorListComponent.prototype, "selected", {
        set: /**
         * @param {?} colors
         * @return {?}
         */
        function (colors) {
            this.colorList = colors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selectedColor
     * @return {?}
     */
    ColorListComponent.prototype.onDragStartColorDrop = /**
     * @param {?} selectedColor
     * @return {?}
     */
    function (selectedColor) {
        // this._colorService.publishData(selectedColor);
    };
    /**
     * @return {?}
     */
    ColorListComponent.prototype.loadColorWidget = /**
     * @return {?}
     */
    function () {
        // this.componentData = { component: ColorSelectorComponent, inputs: { showNum: 0 }}
    };
    /**
     * @param {?} colordrop
     * @return {?}
     */
    ColorListComponent.prototype.onDragStart = /**
     * @param {?} colordrop
     * @return {?}
     */
    function (colordrop) {
        console.log('started in color selector component', colordrop);
    };
    ColorListComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'sembler-color-list',
                    template: "<!--<ul>-->\n <!--<li *ngFor=\"let item of colorList \">-->\n    <!--<div-->\n      <!--class=\"color-drop\"-->\n\n\n      <!--[style.background]=\"item.color\"-->\n\n      <!--dnd-draggable-->\n      <!--[dragEnabled]=\"true\"-->\n      <!--[dragData]=\"item\"-->\n      <!--(onDragStart)=\"onDragStart(item)\"-->\n      <!--[dropZones]=\"['widget-dropZone']\"-->\n\n     <!--&gt;-->\n       <!--<span class=\"btn-title\">-->\n        <!--{{item.color}}-->\n       <!--</span>-->\n     <!--</div>-->\n  <!--</li>-->\n<!--</ul>-->\n\n<!--[style.color]=\"item.color\"-->\n<!--dnd-draggable-->\n<!--[ dragEnabled]=\"true\"-->\n<!--[dragData]=\"colordrop\"-->\n<!--[dropZones]=\"['widget-dropZone',-->\n<!--'canvas-dropZone',-->\n<!--'rowWrapper-dropZone',-->\n<!--'row-dropZone',-->\n<!--'column-dropZone',-->\n<!--'widget-dropZone' ]\"-->\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ColorListComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ColorListComponent.propDecorators = {
        selected: [{ type: Input, args: ['colors',] }]
    };
    return ColorListComponent;
}());
export { ColorListComponent };
if (false) {
    /** @type {?} */
    ColorListComponent.prototype.colorList;
    /** @type {?} */
    ColorListComponent.prototype.selectedColor;
    /** @type {?} */
    ColorListComponent.prototype.componentData;
    /** @type {?} */
    ColorListComponent.prototype.elRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb2xvci1saXN0L2NvbG9yLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFDaEIsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFtRHpDLDRCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO3lCQUxiLENBQUMsRUFBRSxDQUFDOzZCQUdDLElBQUk7S0FFUztJQVQxQyxzQkFDSSx3Q0FBUTs7Ozs7UUFEWixVQUNhLE1BQWtCO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1NBQ3pCOzs7T0FBQTs7Ozs7SUFRRCxpREFBb0I7Ozs7SUFBcEIsVUFBcUIsYUFBa0I7O0tBRXRDOzs7O0lBQ0QsNENBQWU7OztJQUFmOztLQUVDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxTQUFTO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLENBQUE7S0FDOUQ7O2dCQTdESCxTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztvQkFFckMsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLHkwQkFnQ1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQTFDQyxVQUFVOzs7MkJBNENULEtBQUssU0FBQyxRQUFROzs2QkE5Q2pCOztTQTZDYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbWJsZXItY29sb3ItbGlzdCcsXG4gIHRlbXBsYXRlOiBgPCEtLTx1bD4tLT5cbiA8IS0tPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbG9yTGlzdCBcIj4tLT5cbiAgICA8IS0tPGRpdi0tPlxuICAgICAgPCEtLWNsYXNzPVwiY29sb3ItZHJvcFwiLS0+XG5cblxuICAgICAgPCEtLVtzdHlsZS5iYWNrZ3JvdW5kXT1cIml0ZW0uY29sb3JcIi0tPlxuXG4gICAgICA8IS0tZG5kLWRyYWdnYWJsZS0tPlxuICAgICAgPCEtLVtkcmFnRW5hYmxlZF09XCJ0cnVlXCItLT5cbiAgICAgIDwhLS1bZHJhZ0RhdGFdPVwiaXRlbVwiLS0+XG4gICAgICA8IS0tKG9uRHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KGl0ZW0pXCItLT5cbiAgICAgIDwhLS1bZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJ11cIi0tPlxuXG4gICAgIDwhLS0mZ3Q7LS0+XG4gICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiYnRuLXRpdGxlXCI+LS0+XG4gICAgICAgIDwhLS17e2l0ZW0uY29sb3J9fS0tPlxuICAgICAgIDwhLS08L3NwYW4+LS0+XG4gICAgIDwhLS08L2Rpdj4tLT5cbiAgPCEtLTwvbGk+LS0+XG48IS0tPC91bD4tLT5cblxuPCEtLVtzdHlsZS5jb2xvcl09XCJpdGVtLmNvbG9yXCItLT5cbjwhLS1kbmQtZHJhZ2dhYmxlLS0+XG48IS0tWyBkcmFnRW5hYmxlZF09XCJ0cnVlXCItLT5cbjwhLS1bZHJhZ0RhdGFdPVwiY29sb3Jkcm9wXCItLT5cbjwhLS1bZHJvcFpvbmVzXT1cIlsnd2lkZ2V0LWRyb3Bab25lJywtLT5cbjwhLS0nY2FudmFzLWRyb3Bab25lJywtLT5cbjwhLS0ncm93V3JhcHBlci1kcm9wWm9uZScsLS0+XG48IS0tJ3Jvdy1kcm9wWm9uZScsLS0+XG48IS0tJ2NvbHVtbi1kcm9wWm9uZScsLS0+XG48IS0tJ3dpZGdldC1kcm9wWm9uZScgXVwiLS0+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCdjb2xvcnMnKVxuICBzZXQgc2VsZWN0ZWQoY29sb3JzOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5jb2xvckxpc3QgPSBjb2xvcnM7XG4gIH1cbiAgY29sb3JMaXN0OiBBcnJheTxhbnk+ID0gW3t9XTtcblxuICBwcml2YXRlIHNlbGVjdGVkQ29sb3I6IGFueTtcbiAgcHJpdmF0ZSBjb21wb25lbnREYXRhOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG9uRHJhZ1N0YXJ0Q29sb3JEcm9wKHNlbGVjdGVkQ29sb3I6IGFueSkge1xuICAgIC8vIHRoaXMuX2NvbG9yU2VydmljZS5wdWJsaXNoRGF0YShzZWxlY3RlZENvbG9yKTtcbiAgfVxuICBsb2FkQ29sb3JXaWRnZXQoKSB7XG4gICAgLy8gdGhpcy5jb21wb25lbnREYXRhID0geyBjb21wb25lbnQ6IENvbG9yU2VsZWN0b3JDb21wb25lbnQsIGlucHV0czogeyBzaG93TnVtOiAwIH19XG4gIH1cblxuICBvbkRyYWdTdGFydChjb2xvcmRyb3Ape1xuICAgICBjb25zb2xlLmxvZygnc3RhcnRlZCBpbiBjb2xvciBzZWxlY3RvciBjb21wb25lbnQnLCBjb2xvcmRyb3ApXG4gICB9XG5cbn1cbiJdfQ==