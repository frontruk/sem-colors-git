import { EventEmitter, OnChanges } from '@angular/core';
export declare class ColorWidgetComponent implements OnChanges {
    private readonly platformId;
    overlayWidth: any;
    colorPallete: any;
    lastColor: any;
    data: any;
    constructor(platformId: any);
    updateColorPreset: EventEmitter<any>;
    updatedColorPreset(event: Array<any>): void;
    ngOnChanges(changes: any): void;
}
