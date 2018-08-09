import { OnInit, EventEmitter } from '@angular/core';
export declare class SearchColordropComponent implements OnInit {
    selected: any;
    saveColor: EventEmitter<any>;
    changeSelectedColor: EventEmitter<any>;
    color: string;
    constructor();
    addColor(color: any): void;
    changeColor(event: any): void;
    ngOnInit(): void;
}
