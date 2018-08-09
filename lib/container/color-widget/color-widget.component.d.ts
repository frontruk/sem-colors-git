import { EventEmitter, OnChanges } from '@angular/core';
export declare class ColorWidgetComponent implements OnChanges {
    colorDropEnabled: boolean;
    overlayWidth: any;
    colorPallete: any;
    lastColor: any;
    userColorsPallete: any;
    constructor();
    updateColorPreset: EventEmitter<any>;
    updatedColorPreset(event: Array<any>): void;
    ngOnChanges(changes: any): void;
}
