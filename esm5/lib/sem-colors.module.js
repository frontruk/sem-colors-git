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
                        ColorListComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWNvbG9ycy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS1jb2xvcnMvIiwic291cmNlcyI6WyJsaWIvc2VtLWNvbG9ycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztnQkFFakQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxTQUFTLENBQUMsT0FBTyxFQUFFO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixXQUFXO3FCQUNaO29CQUNELGVBQWUsRUFBRSxDQUFFLG9CQUFvQixDQUFFO29CQUN6QyxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixvQkFBb0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBRSxDQUFFLGtCQUFrQixDQUFFO2lCQUNsQzs7MEJBekNEOztTQTBDYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEbmRNb2R1bGUgfSBmcm9tICduZzItZG5kJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbG9yUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbG9yUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xvcnBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlckRpcmVjdGl2ZSwgVGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vY29sb3JwaWNrZXIvaGVscGVycyc7XG5pbXBvcnQgeyBDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2NvbG9ycGlja2VyL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbG9yV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvY29sb3Itd2lkZ2V0L2NvbG9yLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3JMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbG9yLWxpc3QvY29sb3ItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29sb3Jkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1jb2xvcmRyb3Avc2VhcmNoLWNvbG9yZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25GYWJNb2R1bGUsIFNlbVVpQnV0dG9uTW9kdWxlLCBTZW1VaUJ1dHRvbkRuZE1vZHVsZSB9IGZyb20gJ0Bmcm9udHIvc2VtLXVpJztcbmltcG9ydCB7IFJldmVyc2VQaXBlIH0gZnJvbSAnLi9zZW0tYXJyYXktcmV2ZXJzZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2VtVWlCdXR0b25GYWJNb2R1bGUsXG4gICAgU2VtVWlCdXR0b25Nb2R1bGUsXG4gICAgU2VtVWlCdXR0b25EbmRNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEbmRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb2xvcldpZGdldENvbXBvbmVudCxcbiAgICBTZWFyY2hDb2xvcmRyb3BDb21wb25lbnQsXG4gICAgQ29sb3JMaXN0Q29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyRGlyZWN0aXZlLFxuICAgIFRleHREaXJlY3RpdmUsXG4gICAgU2xpZGVyRGlyZWN0aXZlLFxuICAgIFJldmVyc2VQaXBlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogWyBDb2xvclBpY2tlckNvbXBvbmVudCBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29sb3JXaWRnZXRDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJEaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbIENvbG9yUGlja2VyU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbUNvbG9yc01vZHVsZSB7XG59XG4iXX0=