/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
export class ColorListComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.colorList = [{}];
        this.componentData = null;
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    set selected(colors) {
        this.colorList = colors;
    }
    /**
     * @param {?} selectedColor
     * @return {?}
     */
    onDragStartColorDrop(selectedColor) {
        // this._colorService.publishData(selectedColor);
    }
    /**
     * @return {?}
     */
    loadColorWidget() {
        // this.componentData = { component: ColorSelectorComponent, inputs: { showNum: 0 }}
    }
    /**
     * @param {?} colordrop
     * @return {?}
     */
    onDragStart(colordrop) {
        console.log('started in color selector component', colordrop);
    }
}
ColorListComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'sembler-color-list',
                template: `<!--<ul>-->
 <!--<li *ngFor="let item of colorList ">-->
    <!--<div-->
      <!--class="color-drop"-->


      <!--[style.background]="item.color"-->

      <!--dnd-draggable-->
      <!--[dragEnabled]="true"-->
      <!--[dragData]="item"-->
      <!--(onDragStart)="onDragStart(item)"-->
      <!--[dropZones]="['widget-dropZone']"-->

     <!--&gt;-->
       <!--<span class="btn-title">-->
        <!--{{item.color}}-->
       <!--</span>-->
     <!--</div>-->
  <!--</li>-->
<!--</ul>-->

<!--[style.color]="item.color"-->
<!--dnd-draggable-->
<!--[ dragEnabled]="true"-->
<!--[dragData]="colordrop"-->
<!--[dropZones]="['widget-dropZone',-->
<!--'canvas-dropZone',-->
<!--'rowWrapper-dropZone',-->
<!--'row-dropZone',-->
<!--'column-dropZone',-->
<!--'widget-dropZone' ]"-->
`,
                styles: [``]
            },] },
];
/** @nocollapse */
ColorListComponent.ctorParameters = () => [
    { type: ElementRef }
];
ColorListComponent.propDecorators = {
    selected: [{ type: Input, args: ['colors',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb2xvci1saXN0L2NvbG9yLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFDaEIsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlDM0MsTUFBTTs7OztJQVVKLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7eUJBTGIsQ0FBQyxFQUFFLENBQUM7NkJBR0MsSUFBSTtLQUVTOzs7OztJQVQxQyxJQUNJLFFBQVEsQ0FBQyxNQUFrQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztLQUN6Qjs7Ozs7SUFRRCxvQkFBb0IsQ0FBQyxhQUFrQjs7S0FFdEM7Ozs7SUFDRCxlQUFlOztLQUVkOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFTO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLENBQUE7S0FDOUQ7OztZQTdESCxTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztnQkFFckMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQTFDQyxVQUFVOzs7dUJBNENULEtBQUssU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW1ibGVyLWNvbG9yLWxpc3QnLFxuICB0ZW1wbGF0ZTogYDwhLS08dWw+LS0+XG4gPCEtLTxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb2xvckxpc3QgXCI+LS0+XG4gICAgPCEtLTxkaXYtLT5cbiAgICAgIDwhLS1jbGFzcz1cImNvbG9yLWRyb3BcIi0tPlxuXG5cbiAgICAgIDwhLS1bc3R5bGUuYmFja2dyb3VuZF09XCJpdGVtLmNvbG9yXCItLT5cblxuICAgICAgPCEtLWRuZC1kcmFnZ2FibGUtLT5cbiAgICAgIDwhLS1bZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiLS0+XG4gICAgICA8IS0tW2RyYWdEYXRhXT1cIml0ZW1cIi0tPlxuICAgICAgPCEtLShvbkRyYWdTdGFydCk9XCJvbkRyYWdTdGFydChpdGVtKVwiLS0+XG4gICAgICA8IS0tW2Ryb3Bab25lc109XCJbJ3dpZGdldC1kcm9wWm9uZSddXCItLT5cblxuICAgICA8IS0tJmd0Oy0tPlxuICAgICAgIDwhLS08c3BhbiBjbGFzcz1cImJ0bi10aXRsZVwiPi0tPlxuICAgICAgICA8IS0te3tpdGVtLmNvbG9yfX0tLT5cbiAgICAgICA8IS0tPC9zcGFuPi0tPlxuICAgICA8IS0tPC9kaXY+LS0+XG4gIDwhLS08L2xpPi0tPlxuPCEtLTwvdWw+LS0+XG5cbjwhLS1bc3R5bGUuY29sb3JdPVwiaXRlbS5jb2xvclwiLS0+XG48IS0tZG5kLWRyYWdnYWJsZS0tPlxuPCEtLVsgZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiLS0+XG48IS0tW2RyYWdEYXRhXT1cImNvbG9yZHJvcFwiLS0+XG48IS0tW2Ryb3Bab25lc109XCJbJ3dpZGdldC1kcm9wWm9uZScsLS0+XG48IS0tJ2NhbnZhcy1kcm9wWm9uZScsLS0+XG48IS0tJ3Jvd1dyYXBwZXItZHJvcFpvbmUnLC0tPlxuPCEtLSdyb3ctZHJvcFpvbmUnLC0tPlxuPCEtLSdjb2x1bW4tZHJvcFpvbmUnLC0tPlxuPCEtLSd3aWRnZXQtZHJvcFpvbmUnIF1cIi0tPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgnY29sb3JzJylcbiAgc2V0IHNlbGVjdGVkKGNvbG9yczogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuY29sb3JMaXN0ID0gY29sb3JzO1xuICB9XG4gIGNvbG9yTGlzdDogQXJyYXk8YW55PiA9IFt7fV07XG5cbiAgcHJpdmF0ZSBzZWxlY3RlZENvbG9yOiBhbnk7XG4gIHByaXZhdGUgY29tcG9uZW50RGF0YTogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBvbkRyYWdTdGFydENvbG9yRHJvcChzZWxlY3RlZENvbG9yOiBhbnkpIHtcbiAgICAvLyB0aGlzLl9jb2xvclNlcnZpY2UucHVibGlzaERhdGEoc2VsZWN0ZWRDb2xvcik7XG4gIH1cbiAgbG9hZENvbG9yV2lkZ2V0KCkge1xuICAgIC8vIHRoaXMuY29tcG9uZW50RGF0YSA9IHsgY29tcG9uZW50OiBDb2xvclNlbGVjdG9yQ29tcG9uZW50LCBpbnB1dHM6IHsgc2hvd051bTogMCB9fVxuICB9XG5cbiAgb25EcmFnU3RhcnQoY29sb3Jkcm9wKXtcbiAgICAgY29uc29sZS5sb2coJ3N0YXJ0ZWQgaW4gY29sb3Igc2VsZWN0b3IgY29tcG9uZW50JywgY29sb3Jkcm9wKVxuICAgfVxuXG59XG4iXX0=