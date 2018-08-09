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
    /** @nocollapse */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWFyY2gtY29sb3Jkcm9wL3NlYXJjaC1jb2xvcmRyb3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQW1DOUU7eUJBTHlDLElBQUksWUFBWSxFQUFPO21DQUNiLElBQUksWUFBWSxFQUFPO0tBSTFEO0lBVmhCLHNCQUNJLDhDQUFROzs7OztRQURaLFVBQ2EsS0FBVTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDMUI7OztPQUFBOzs7OztJQVFELDJDQUFROzs7O0lBQVIsVUFBUyxLQUFVOztRQUNqQixJQUFNLFFBQVEsR0FBUTtZQUNwQixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztTQUNuQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBQ0QsOENBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7O1FBQ3BCLElBQU0sS0FBSyxHQUFHLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0Qzs7OztJQUNELDJDQUFROzs7SUFBUixlQUFhOztnQkE5Q2QsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsdVdBZVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2pDOzs7OzsyQkFHRSxLQUFLLFNBQUMsVUFBVTs0QkFLaEIsTUFBTTtzQ0FDTixNQUFNOzttQ0EvQlQ7O1NBdUJhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtYmxlci1zZWFyY2gtY29sb3Jkcm9wJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImlucHV0LXN1Zml4XCI+XG4gICAgICAgPGlucHV0XG4gICAgICAgICBjbGFzcz1cInNlbS1pbnB1dFwiXG4gICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICBbbmdNb2RlbF09XCJjb2xvclwiXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VDb2xvcigkZXZlbnQpXCJcbiAgICAgICAgIFt2YWx1ZV09J2NvbG9yJ1xuICAgICAgICAgI2NvbG9yVmFsdWVcbiAgICAgICAvPlxuICAgICAgPHNwYW5cbiAgICAgIChjbGljayk9XCJhZGRDb2xvcihjb2xvclZhbHVlKVwiXG4gICAgICBjbGFzcz1cInNlbS1pY29uLXNlYXJjaCBzdWZpeFwiPlxuICAgICAgPC9zcGFuPlxuPC9zcGFuPlxuXG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja31gXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnc2VsZWN0ZWQnKVxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdjb2xvcicsIHZhbHVlKTtcbiAgICB0aGlzLmNvbG9yID0gdmFsdWUuY29sb3I7XG4gIH1cbiAgQE91dHB1dCgpIHNhdmVDb2xvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZVNlbGVjdGVkQ29sb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkQ29sb3IoY29sb3I6IGFueSkge1xuICAgIGNvbnN0IHNldENvbG9yOiBhbnkgPSB7XG4gICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgY29sb3I6IGNvbG9yLnZhbHVlXG4gICAgfTtcbiAgICB0aGlzLnNhdmVDb2xvci5lbWl0KHNldENvbG9yKTtcbiAgfVxuICBjaGFuZ2VDb2xvcihldmVudDogYW55KSB7XG4gICAgY29uc3QgY29sb3IgPSB7dHlwZTogJ2NvbG9yJywgY29sb3I6IGV2ZW50fTtcbiAgICB0aGlzLmNoYW5nZVNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIH1cbiAgbmdPbkluaXQoKSB7fVxuXG4gIC8vIChrZXlwcmVzcyk9XCJrZXlQcmVzc0NoYW5nZUNvbG9yKCRldmVudClcIlxuICAvLyBrZXlQcmVzc0NoYW5nZUNvbG9yKGV2ZW50OiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnZXZlbnQxMjMnLCBldmVudC50YXJnZXQudmFsdWUpXG4gIC8vICAgY29uc3QgY29sb3IgPSB7dHlwZTogJ2NvbG9yJywgY29sb3I6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgLy8gICB0aGlzLmNoYW5nZVNlbGVjdGVkQ29sb3IuZW1pdChjb2xvcik7XG4gIC8vIH1cblxuICAvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuU2V0Q29sb3JzKGV2ZW50KSk7XG4gIC8vIHRoaXMuX2NvbG9yU2VydmljZS5jb2xvckNoYWdlZChldmVudClcbiAgLy8gcHVibGljIHNlbGVjdGVkQ29sb3I6IGFueTtcbiAgLy8gQE91dHB1dCgpXG4gIC8vIHNhdmVDb2xvcnM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHRoaXMuc2VsZWN0ZWRDb2xvciA9ICcjMDAwMDAwJztcblxufVxuXG5cbiJdfQ==