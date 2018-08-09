/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
import { ColorListComponent } from './components/color-list/color-list.component';
import { SearchColordropComponent } from './components/search-colordrop/search-colordrop.component';
import { SemUiButtonFabModule, SemUiButtonModule } from '@frontr/sem-ui';
var SemColorsModule = /** @class */ (function () {
    function SemColorsModule() {
    }
    SemColorsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SemUiButtonFabModule,
                        SemUiButtonModule,
                        HttpClientModule,
                        FormsModule,
                        DndModule.forRoot(),
                    ],
                    declarations: [
                        ColorWidgetComponent,
                        SearchColordropComponent,
                        ColorListComponent,
                        ColorPickerComponent,
                        ColorPickerDirective,
                        TextDirective,
                        SliderDirective
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWNvbG9ycy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvIiwic291cmNlcyI6WyJsaWIvc2VtLWNvbG9ycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O2dCQUV4RSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxTQUFTLENBQUMsT0FBTyxFQUFFO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7b0JBQ0QsZUFBZSxFQUFFLENBQUUsb0JBQW9CLENBQUU7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLG9CQUFvQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFLENBQUUsa0JBQWtCLENBQUU7aUJBQ2xDOzswQkF0Q0Q7O1NBdUNhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERuZE1vZHVsZSB9IGZyb20gJ25nMi1kbmQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyRGlyZWN0aXZlLCBUZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xvcnBpY2tlci9oZWxwZXJzJztcbmltcG9ydCB7IENvbG9yUGlja2VyU2VydmljZSB9IGZyb20gJy4vY29sb3JwaWNrZXIvY29sb3ItcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sb3JXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9jb2xvci13aWRnZXQvY29sb3Itd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29sb3ItbGlzdC9jb2xvci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWNvbG9yZHJvcC9zZWFyY2gtY29sb3Jkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkZhYk1vZHVsZSwgU2VtVWlCdXR0b25Nb2R1bGUgfSBmcm9tICdAZnJvbnRyL3NlbS11aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2VtVWlCdXR0b25GYWJNb2R1bGUsXG4gICAgU2VtVWlCdXR0b25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEbmRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb2xvcldpZGdldENvbXBvbmVudCxcbiAgICBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQsXG4gICAgQ29sb3JMaXN0Q29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyRGlyZWN0aXZlLFxuICAgIFRleHREaXJlY3RpdmUsXG4gICAgU2xpZGVyRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogWyBDb2xvclBpY2tlckNvbXBvbmVudCBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29sb3JXaWRnZXRDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJEaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbIENvbG9yUGlja2VyU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbUNvbG9yc01vZHVsZSB7XG59XG4iXX0=