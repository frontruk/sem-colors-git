/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SearchColordropComponent = /** @class */ (function () {
    function SearchColordropComponent() {
        this.saveColor = new EventEmitter();
        this.changeSelectedColor = new EventEmitter();
    }
    Object.defineProperty(SearchColordropComponent.prototype, "selected", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log('color', value);
            this.color = value.color;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} color
     * @return {?}
     */
    SearchColordropComponent.prototype.addColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var setColor = {
            type: 'color',
            color: color.value
        };
        this.saveColor.emit(setColor);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SearchColordropComponent.prototype.changeColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var color = { type: 'color', color: event };
        this.changeSelectedColor.emit(color);
    };
    /**
     * @return {?}
     */
    SearchColordropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SearchColordropComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'sembler-search-colordrop',
                    template: "<span class=\"input-sufix\">\n       <input\n         class=\"sem-input\"\n         type=\"text\"\n         [ngModel]=\"color\"\n         (ngModelChange)=\"changeColor($event)\"\n         [value]='color'\n         #colorValue\n       />\n      <span\n      (click)=\"addColor(colorValue)\"\n      class=\"sem-icon-search sufix\">\n      </span>\n</span>\n\n",
                    styles: [":host{display:block}"]
                },] },
    ];
    SearchColordropComponent.ctorParameters = function () { return []; };
    SearchColordropComponent.propDecorators = {
        selected: [{ type: Input, args: ['selected',] }],
        saveColor: [{ type: Output }],
        changeSelectedColor: [{ type: Output }]
    };
    return SearchColordropComponent;
}());
export { SearchColordropComponent };
if (false) {
    /** @type {?} */
    SearchColordropComponent.prototype.saveColor;
    /** @type {?} */
    SearchColordropComponent.prototype.changeSelectedColor;
    /** @type {?} */
    SearchColordropComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWFyY2gtY29sb3Jkcm9wL3NlYXJjaC1jb2xvcmRyb3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGO0lBaUNFO1FBTFUsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZELHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSTVELENBQUM7SUFWaEIsc0JBQ0ksOENBQVE7Ozs7O1FBRFosVUFDYSxLQUFVO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FBQTs7Ozs7SUFRRCwyQ0FBUTs7OztJQUFSLFVBQVMsS0FBVTs7WUFDWCxRQUFRLEdBQVE7WUFDcEIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDbkI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUNELDhDQUFXOzs7O0lBQVgsVUFBWSxLQUFVOztZQUNkLEtBQUssR0FBRyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztRQUMzQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDRCwyQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkE5Q2QsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsdVdBZVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2pDOzs7OzJCQUdFLEtBQUssU0FBQyxVQUFVOzRCQUtoQixNQUFNO3NDQUNOLE1BQU07O0lBaUNULCtCQUFDO0NBQUEsQUE5REQsSUE4REM7U0F6Q1ksd0JBQXdCOzs7SUFPbkMsNkNBQWlFOztJQUNqRSx1REFBMkU7O0lBRTNFLHlDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW1ibGVyLXNlYXJjaC1jb2xvcmRyb3AnLFxuICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwiaW5wdXQtc3VmaXhcIj5cbiAgICAgICA8aW5wdXRcbiAgICAgICAgIGNsYXNzPVwic2VtLWlucHV0XCJcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgIFtuZ01vZGVsXT1cImNvbG9yXCJcbiAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUNvbG9yKCRldmVudClcIlxuICAgICAgICAgW3ZhbHVlXT0nY29sb3InXG4gICAgICAgICAjY29sb3JWYWx1ZVxuICAgICAgIC8+XG4gICAgICA8c3BhblxuICAgICAgKGNsaWNrKT1cImFkZENvbG9yKGNvbG9yVmFsdWUpXCJcbiAgICAgIGNsYXNzPVwic2VtLWljb24tc2VhcmNoIHN1Zml4XCI+XG4gICAgICA8L3NwYW4+XG48L3NwYW4+XG5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfWBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbG9yZHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdzZWxlY3RlZCcpXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2NvbG9yJywgdmFsdWUpO1xuICAgIHRoaXMuY29sb3IgPSB2YWx1ZS5jb2xvcjtcbiAgfVxuICBAT3V0cHV0KCkgc2F2ZUNvbG9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlU2VsZWN0ZWRDb2xvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb2xvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhZGRDb2xvcihjb2xvcjogYW55KSB7XG4gICAgY29uc3Qgc2V0Q29sb3I6IGFueSA9IHtcbiAgICAgIHR5cGU6ICdjb2xvcicsXG4gICAgICBjb2xvcjogY29sb3IudmFsdWVcbiAgICB9O1xuICAgIHRoaXMuc2F2ZUNvbG9yLmVtaXQoc2V0Q29sb3IpO1xuICB9XG4gIGNoYW5nZUNvbG9yKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBjb2xvciA9IHt0eXBlOiAnY29sb3InLCBjb2xvcjogZXZlbnR9O1xuICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRDb2xvci5lbWl0KGNvbG9yKTtcbiAgfVxuICBuZ09uSW5pdCgpIHt9XG5cbiAgLy8gKGtleXByZXNzKT1cImtleVByZXNzQ2hhbmdlQ29sb3IoJGV2ZW50KVwiXG4gIC8vIGtleVByZXNzQ2hhbmdlQ29sb3IoZXZlbnQ6IGFueSkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdldmVudDEyMycsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgLy8gICBjb25zdCBjb2xvciA9IHt0eXBlOiAnY29sb3InLCBjb2xvcjogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAvLyAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRDb2xvci5lbWl0KGNvbG9yKTtcbiAgLy8gfVxuXG4gIC8vIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5TZXRDb2xvcnMoZXZlbnQpKTtcbiAgLy8gdGhpcy5fY29sb3JTZXJ2aWNlLmNvbG9yQ2hhZ2VkKGV2ZW50KVxuICAvLyBwdWJsaWMgc2VsZWN0ZWRDb2xvcjogYW55O1xuICAvLyBAT3V0cHV0KClcbiAgLy8gc2F2ZUNvbG9yczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gdGhpcy5zZWxlY3RlZENvbG9yID0gJyMwMDAwMDAnO1xuXG59XG5cblxuIl19