/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SearchColordropComponent {
    constructor() {
        this.saveColor = new EventEmitter();
        this.changeSelectedColor = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        console.log('color', value);
        this.color = value.color;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    addColor(color) {
        /** @type {?} */
        const setColor = {
            type: 'color',
            color: color.value
        };
        this.saveColor.emit(setColor);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeColor(event) {
        /** @type {?} */
        const color = { type: 'color', color: event };
        this.changeSelectedColor.emit(color);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SearchColordropComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'sembler-search-colordrop',
                template: `<span class="input-sufix">
       <input
         class="sem-input"
         type="text"
         [ngModel]="color"
         (ngModelChange)="changeColor($event)"
         [value]='color'
         #colorValue
       />
      <span
      (click)="addColor(colorValue)"
      class="sem-icon-search sufix">
      </span>
</span>

`,
                styles: [`:host{display:block}`]
            },] },
];
/** @nocollapse */
SearchColordropComponent.ctorParameters = () => [];
SearchColordropComponent.propDecorators = {
    selected: [{ type: Input, args: ['selected',] }],
    saveColor: [{ type: Output }],
    changeSelectedColor: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SearchColordropComponent.prototype.saveColor;
    /** @type {?} */
    SearchColordropComponent.prototype.changeSelectedColor;
    /** @type {?} */
    SearchColordropComponent.prototype.color;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWFyY2gtY29sb3Jkcm9wL3NlYXJjaC1jb2xvcmRyb3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBdUJoRixNQUFNO0lBWUo7eUJBTHlDLElBQUksWUFBWSxFQUFPO21DQUNiLElBQUksWUFBWSxFQUFPO0tBSTFEOzs7OztJQVZoQixJQUNJLFFBQVEsQ0FBQyxLQUFVO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztLQUMxQjs7Ozs7SUFRRCxRQUFRLENBQUMsS0FBVTs7UUFDakIsTUFBTSxRQUFRLEdBQVE7WUFDcEIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQy9COzs7OztJQUNELFdBQVcsQ0FBQyxLQUFVOztRQUNwQixNQUFNLEtBQUssR0FBRyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEM7Ozs7SUFDRCxRQUFRLE1BQUs7OztZQTlDZCxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0NBZVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDakM7Ozs7O3VCQUdFLEtBQUssU0FBQyxVQUFVO3dCQUtoQixNQUFNO2tDQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbWJsZXItc2VhcmNoLWNvbG9yZHJvcCcsXG4gIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJpbnB1dC1zdWZpeFwiPlxuICAgICAgIDxpbnB1dFxuICAgICAgICAgY2xhc3M9XCJzZW0taW5wdXRcIlxuICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgW25nTW9kZWxdPVwiY29sb3JcIlxuICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlQ29sb3IoJGV2ZW50KVwiXG4gICAgICAgICBbdmFsdWVdPSdjb2xvcidcbiAgICAgICAgICNjb2xvclZhbHVlXG4gICAgICAgLz5cbiAgICAgIDxzcGFuXG4gICAgICAoY2xpY2spPVwiYWRkQ29sb3IoY29sb3JWYWx1ZSlcIlxuICAgICAgY2xhc3M9XCJzZW0taWNvbi1zZWFyY2ggc3VmaXhcIj5cbiAgICAgIDwvc3Bhbj5cbjwvc3Bhbj5cblxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29sb3Jkcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ3NlbGVjdGVkJylcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnY29sb3InLCB2YWx1ZSk7XG4gICAgdGhpcy5jb2xvciA9IHZhbHVlLmNvbG9yO1xuICB9XG4gIEBPdXRwdXQoKSBzYXZlQ29sb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VTZWxlY3RlZENvbG9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZENvbG9yKGNvbG9yOiBhbnkpIHtcbiAgICBjb25zdCBzZXRDb2xvcjogYW55ID0ge1xuICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgIGNvbG9yOiBjb2xvci52YWx1ZVxuICAgIH07XG4gICAgdGhpcy5zYXZlQ29sb3IuZW1pdChzZXRDb2xvcik7XG4gIH1cbiAgY2hhbmdlQ29sb3IoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGNvbG9yID0ge3R5cGU6ICdjb2xvcicsIGNvbG9yOiBldmVudH07XG4gICAgdGhpcy5jaGFuZ2VTZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICB9XG4gIG5nT25Jbml0KCkge31cblxuICAvLyAoa2V5cHJlc3MpPVwia2V5UHJlc3NDaGFuZ2VDb2xvcigkZXZlbnQpXCJcbiAgLy8ga2V5UHJlc3NDaGFuZ2VDb2xvcihldmVudDogYW55KSB7XG4gIC8vICAgY29uc29sZS5sb2coJ2V2ZW50MTIzJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAvLyAgIGNvbnN0IGNvbG9yID0ge3R5cGU6ICdjb2xvcicsIGNvbG9yOiBldmVudC50YXJnZXQudmFsdWV9XG4gIC8vICAgdGhpcy5jaGFuZ2VTZWxlY3RlZENvbG9yLmVtaXQoY29sb3IpO1xuICAvLyB9XG5cbiAgLy8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlNldENvbG9ycyhldmVudCkpO1xuICAvLyB0aGlzLl9jb2xvclNlcnZpY2UuY29sb3JDaGFnZWQoZXZlbnQpXG4gIC8vIHB1YmxpYyBzZWxlY3RlZENvbG9yOiBhbnk7XG4gIC8vIEBPdXRwdXQoKVxuICAvLyBzYXZlQ29sb3JzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyB0aGlzLnNlbGVjdGVkQ29sb3IgPSAnIzAwMDAwMCc7XG5cbn1cblxuXG4iXX0=