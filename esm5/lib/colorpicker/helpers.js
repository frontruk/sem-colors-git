/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
/**
 * @return {?}
 */
export function detectIE() {
    /** @type {?} */
    var ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    /** @type {?} */
    var msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
var TextDirective = /** @class */ (function () {
    function TextDirective() {
        this.newValue = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TextDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            /** @type {?} */
            var numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    };
    TextDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[text]'
                },] },
    ];
    TextDirective.propDecorators = {
        rg: [{ type: Input }],
        text: [{ type: Input }],
        newValue: [{ type: Output }],
        inputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return TextDirective;
}());
export { TextDirective };
if (false) {
    /** @type {?} */
    TextDirective.prototype.rg;
    /** @type {?} */
    TextDirective.prototype.text;
    /** @type {?} */
    TextDirective.prototype.newValue;
}
var SliderDirective = /** @class */ (function () {
    function SliderDirective(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.dragEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.newValue = new EventEmitter();
        this.listenerMove = function (event) { return _this.move(event); };
        this.listenerStop = function () { return _this.stop(); };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.mouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.touchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.move = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.start = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setCursor(event);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    };
    /**
     * @private
     * @return {?}
     */
    SliderDirective.prototype.stop = /**
     * @private
     * @return {?}
     */
    function () {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getX = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getY = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.setCursor = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */
        var height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */
        var x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */
        var y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    };
    SliderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[slider]'
                },] },
    ];
    SliderDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SliderDirective.propDecorators = {
        rgX: [{ type: Input }],
        rgY: [{ type: Input }],
        slider: [{ type: Input }],
        dragEnd: [{ type: Output }],
        dragStart: [{ type: Output }],
        newValue: [{ type: Output }],
        mouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        touchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }]
    };
    return SliderDirective;
}());
export { SliderDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SliderDirective.prototype.listenerMove;
    /**
     * @type {?}
     * @private
     */
    SliderDirective.prototype.listenerStop;
    /** @type {?} */
    SliderDirective.prototype.rgX;
    /** @type {?} */
    SliderDirective.prototype.rgY;
    /** @type {?} */
    SliderDirective.prototype.slider;
    /** @type {?} */
    SliderDirective.prototype.dragEnd;
    /** @type {?} */
    SliderDirective.prototype.dragStart;
    /** @type {?} */
    SliderDirective.prototype.newValue;
    /**
     * @type {?}
     * @private
     */
    SliderDirective.prototype.elRef;
}
var SliderPosition = /** @class */ (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());
export { SliderPosition };
if (false) {
    /** @type {?} */
    SliderPosition.prototype.h;
    /** @type {?} */
    SliderPosition.prototype.s;
    /** @type {?} */
    SliderPosition.prototype.v;
    /** @type {?} */
    SliderPosition.prototype.a;
}
var SliderDimension = /** @class */ (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());
export { SliderDimension };
if (false) {
    /** @type {?} */
    SliderDimension.prototype.h;
    /** @type {?} */
    SliderDimension.prototype.s;
    /** @type {?} */
    SliderDimension.prototype.v;
    /** @type {?} */
    SliderDimension.prototype.a;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvcnBpY2tlci9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFakcsTUFBTTs7UUFDQSxFQUFFLEdBQUcsRUFBRTtJQUVYLEVBQUUsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDckMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7UUFFSyxJQUFJLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFFaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYiwwQ0FBMEM7UUFDMUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7SUFBQTtRQU9ZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBZS9DLENBQUM7Ozs7O0lBYm9DLG1DQUFXOzs7O0lBQTlDLFVBQStDLEtBQVU7O1lBQ2pELEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFFaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENB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LENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1lBQ2xELENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFekQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUYsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7O2dCQXZGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7Z0JBOUM4RCxVQUFVOzs7c0JBbUR0RSxLQUFLO3NCQUNMLEtBQUs7eUJBRUwsS0FBSzswQkFFTCxNQUFNOzRCQUNOLE1BQU07MkJBRU4sTUFBTTs0QkFFTixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQUlwQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQW1FeEMsc0JBQUM7Q0FBQSxBQXhGRCxJQXdGQztTQXJGWSxlQUFlOzs7Ozs7SUFDMUIsdUNBQTBCOzs7OztJQUMxQix1Q0FBMEI7O0lBRTFCLDhCQUFxQjs7SUFDckIsOEJBQXFCOztJQUVyQixpQ0FBd0I7O0lBRXhCLGtDQUF1Qzs7SUFDdkMsb0NBQXlDOztJQUV6QyxtQ0FBNkM7Ozs7O0lBVWpDLGdDQUF5Qjs7QUFpRXZDO0lBQ0Usd0JBQW1CLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUyxFQUFTLENBQVM7UUFBL0QsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtJQUFHLENBQUM7SUFDeEYscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURhLDJCQUFnQjs7SUFBRSwyQkFBZ0I7O0lBQUUsMkJBQWdCOztJQUFFLDJCQUFnQjs7QUFHcEY7SUFDRSx5QkFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUztRQUEvRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBQUcsQ0FBQztJQUN4RixzQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGEsNEJBQWdCOztJQUFFLDRCQUFnQjs7SUFBRSw0QkFBZ0I7O0lBQUUsNEJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0SUUoKTogYm9vbGVhbiB8IG51bWJlciB7XG4gIGxldCB1YSA9ICcnO1xuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ21zaWUgJyk7XG5cbiAgaWYgKG1zaWUgPiAwKSB7XG4gICAgLy8gSUUgMTAgb3Igb2xkZXIgPT4gcmV0dXJuIHZlcnNpb24gbnVtYmVyXG4gICAgcmV0dXJuIHBhcnNlSW50KHVhLnN1YnN0cmluZyhtc2llICsgNSwgdWEuaW5kZXhPZignLicsIG1zaWUpKSwgMTApO1xuICB9XG5cbiAgLy8gT3RoZXIgYnJvd3NlclxuICByZXR1cm4gZmFsc2U7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZXh0XSdcbn0pXG5leHBvcnQgY2xhc3MgVGV4dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHJnOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcblxuICBAT3V0cHV0KCkgbmV3VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIGlucHV0Q2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh0aGlzLnJnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG51bWVyaWMgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgICAgaWYgKCFpc05hTihudW1lcmljKSAmJiBudW1lcmljID49IDAgJiYgbnVtZXJpYyA8PSB0aGlzLnJnKSB7XG4gICAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IG51bWVyaWMsIHJnOiB0aGlzLnJnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2xpZGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBsaXN0ZW5lck1vdmU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lclN0b3A6IGFueTtcblxuICBASW5wdXQoKSByZ1g6IG51bWJlcjtcbiAgQElucHV0KCkgcmdZOiBudW1iZXI7XG5cbiAgQElucHV0KCkgc2xpZGVyOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIG5ld1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSkgbW91c2VEb3duKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0KGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKSB0b3VjaFN0YXJ0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0KGV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmxpc3RlbmVyTW92ZSA9IChldmVudDogYW55KSA9PiB0aGlzLm1vdmUoZXZlbnQpO1xuXG4gICAgdGhpcy5saXN0ZW5lclN0b3AgPSAoKSA9PiB0aGlzLnN0b3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZShldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0Q3Vyc29yKGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q3Vyc29yKGV2ZW50KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmxpc3RlbmVyU3RvcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmxpc3RlbmVyU3RvcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcblxuICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcCgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG5cbiAgICB0aGlzLmRyYWdFbmQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRYKGV2ZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgcGFnZVggPSAoZXZlbnQucGFnZVggIT09IHVuZGVmaW5lZCkgPyBldmVudC5wYWdlWCA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG5cbiAgICByZXR1cm4gcGFnZVggLSBwb3NpdGlvbi5sZWZ0IC0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRZKGV2ZW50OiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgcGFnZVkgPSAoZXZlbnQucGFnZVkgIT09IHVuZGVmaW5lZCkgPyBldmVudC5wYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICByZXR1cm4gcGFnZVkgLSBwb3NpdGlvbi50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIH1cblxuICBwcml2YXRlIHNldEN1cnNvcihldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldFgoZXZlbnQpLCB3aWR0aCkpO1xuICAgIGNvbnN0IHkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldFkoZXZlbnQpLCBoZWlnaHQpKTtcblxuICAgIGlmICh0aGlzLnJnWCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmdZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHM6IHggLyB3aWR0aCwgdjogKDEgLSB5IC8gaGVpZ2h0KSwgcmdYOiB0aGlzLnJnWCwgcmdZOiB0aGlzLnJnWSB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmdYID09PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogeSAvIGhlaWdodCwgcmdZOiB0aGlzLnJnWSB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmdYICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogeCAvIHdpZHRoLCByZ1g6IHRoaXMucmdYIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgdjogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyRGltZW5zaW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIGg6IG51bWJlciwgcHVibGljIHM6IG51bWJlciwgcHVibGljIHY6IG51bWJlciwgcHVibGljIGE6IG51bWJlcikge31cbn1cbiJdfQ==