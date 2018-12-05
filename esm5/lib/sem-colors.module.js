/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerDirective } from './colorpicker/color-picker.directive';
import { ColorPickerComponent } from './colorpicker/color-picker.component';
import { SliderDirective, TextDirective } from './colorpicker/helpers';
import { ColorPickerService } from './colorpicker/color-picker.service';
import { ColorWidgetComponent } from './container/color-widget/color-widget.component';
import { SearchColordropComponent } from './components/search-colordrop/search-colordrop.component';
import { SemUiButtonFabModule, SemUiButtonModule, SemUiButtonDndModule } from '@frontr/sem-ui';
import { ReversePipe } from './sem-array-reverse';
var SemColorsModule = /** @class */ (function () {
    function SemColorsModule() {
    }
    SemColorsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SemUiButtonFabModule,
                        SemUiButtonModule,
                        SemUiButtonDndModule,
                        HttpClientModule,
                        FormsModule,
                        DndModule.forRoot(),
                    ],
                    declarations: [
                        ColorWidgetComponent,
                        SearchColordropComponent,
                        ColorPickerComponent,
                        ColorPickerDirective,
                        TextDirective,
                        SliderDirective,
                        ReversePipe
                    ],
                    entryComponents: [ColorPickerComponent],
                    exports: [
                        ColorWidgetComponent,
                        ColorPickerDirective
                    ],
                    providers: [ColorPickerService]
                },] },
    ];
    return SemColorsModule;
}());
export { SemColorsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWNvbG9ycy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvIiwic291cmNlcyI6WyJsaWIvc2VtLWNvbG9ycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxEO0lBQUE7SUEyQkEsQ0FBQzs7Z0JBM0JBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsU0FBUyxDQUFDLE9BQU8sRUFBRTtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLFdBQVc7cUJBQ1o7b0JBQ0QsZUFBZSxFQUFFLENBQUUsb0JBQW9CLENBQUU7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLG9CQUFvQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFLENBQUUsa0JBQWtCLENBQUU7aUJBQ2xDOztJQUVELHNCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FEWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEbmRNb2R1bGUgfSBmcm9tICduZzItZG5kJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbG9yUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlckRpcmVjdGl2ZSwgVGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vY29sb3JwaWNrZXIvaGVscGVycyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbG9yV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29sb3Jkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1jb2xvcmRyb3Avc2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25GYWJNb2R1bGUsIFNlbVVpQnV0dG9uTW9kdWxlLCBTZW1VaUJ1dHRvbkRuZE1vZHVsZSB9IGZyb20gJ0Bmcm9udHIvc2VtLXVpJztcbmltcG9ydCB7IFJldmVyc2VQaXBlIH0gZnJvbSAnLi9zZW0tYXJyYXktcmV2ZXJzZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2VtVWlCdXR0b25GYWJNb2R1bGUsXG4gICAgU2VtVWlCdXR0b25Nb2R1bGUsXG4gICAgU2VtVWlCdXR0b25EbmRNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEbmRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb2xvcldpZGdldENvbXBvbmVudCxcbiAgICBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJEaXJlY3RpdmUsXG4gICAgVGV4dERpcmVjdGl2ZSxcbiAgICBTbGlkZXJEaXJlY3RpdmUsXG4gICAgUmV2ZXJzZVBpcGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbIENvbG9yUGlja2VyQ29tcG9uZW50IF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb2xvcldpZGdldENvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckRpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFsgQ29sb3JQaWNrZXJTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtQ29sb3JzTW9kdWxlIHtcbn1cbiJdfQ==