import { ElementRef } from '@angular/core';
export declare class ColorListComponent {
    private elRef;
    selected: Array<any>;
    colorList: Array<any>;
    private selectedColor;
    private componentData;
    constructor(elRef: ElementRef);
    onDragStartColorDrop(selectedColor: any): void;
    loadColorWidget(): void;
    onDragStart(colordrop: any): void;
}
