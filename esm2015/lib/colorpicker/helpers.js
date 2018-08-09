/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
/**
 * @return {?}
 */
export function detectIE() {
    /** @type {?} */
    let ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    /** @type {?} */
    const msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
export class TextDirective {
    constructor() {
        this.newValue = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    inputChange(event) {
        /** @type {?} */
        const value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            /** @type {?} */
            const numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    }
}
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
if (false) {
    /** @type {?} */
    TextDirective.prototype.rg;
    /** @type {?} */
    TextDirective.prototype.text;
    /** @type {?} */
    TextDirective.prototype.newValue;
}
export class SliderDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.dragEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.newValue = new EventEmitter();
        this.listenerMove = (event) => this.move(event);
        this.listenerStop = () => this.stop();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    mouseDown(event) {
        this.start(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    touchStart(event) {
        this.start(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    move(event) {
        event.preventDefault();
        this.setCursor(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    start(event) {
        this.setCursor(event);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    }
    /**
     * @return {?}
     */
    stop() {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getX(event) {
        /** @type {?} */
        const position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getY(event) {
        /** @type {?} */
        const position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setCursor(event) {
        /** @type {?} */
        const width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */
        const height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */
        const x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */
        const y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    }
}
SliderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[slider]'
            },] },
];
/** @nocollapse */
SliderDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
if (false) {
    /** @type {?} */
    SliderDirective.prototype.listenerMove;
    /** @type {?} */
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
    /** @type {?} */
    SliderDirective.prototype.elRef;
}
export class SliderPosition {
    /**
     * @param {?} h
     * @param {?} s
     * @param {?} v
     * @param {?} a
     */
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
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
export class SliderDimension {
    /**
     * @param {?} h
     * @param {?} s
     * @param {?} v
     * @param {?} a
     */
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLWNvbG9ycy8iLCJzb3VyY2VzIjpbImxpYi9jb2xvcnBpY2tlci9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFakcsTUFBTTs7SUFDSixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFWixFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3hDOztJQUVELE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFakMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRWIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNwRTs7SUFHRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2Q7QUFLRCxNQUFNOzt3QkFJaUIsSUFBSSxZQUFZLEVBQU87Ozs7OztJQUVULFdBQVcsQ0FBQyxLQUFVOztRQUN2RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFBQyxJQUFJ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SUFDSixZQUFtQixDQUFTLEVBQVMsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTO1FBQS9ELE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7S0FBSTtDQUN2Rjs7Ozs7Ozs7Ozs7QUFFRCxNQUFNOzs7Ozs7O0lBQ0osWUFBbUIsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUztRQUEvRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0tBQUk7Q0FDdkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RJRSgpOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgbGV0IHVhID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignbXNpZSAnKTtcblxuICBpZiAobXNpZSA+IDApIHtcbiAgICAvLyBJRSAxMCBvciBvbGRlciA9PiByZXR1cm4gdmVyc2lvbiBudW1iZXJcbiAgICByZXR1cm4gcGFyc2VJbnQodWEuc3Vic3RyaW5nKG1zaWUgKyA1LCB1YS5pbmRleE9mKCcuJywgbXNpZSkpLCAxMCk7XG4gIH1cblxuICAvLyBPdGhlciBicm93c2VyXG4gIHJldHVybiBmYWxzZTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RleHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBUZXh0RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgcmc6IG51bWJlcjtcbiAgQElucHV0KCkgdGV4dDogYW55O1xuXG4gIEBPdXRwdXQoKSBuZXdWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgaW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHRoaXMucmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbnVtZXJpYyA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgICBpZiAoIWlzTmFOKG51bWVyaWMpICYmIG51bWVyaWMgPj0gMCAmJiBudW1lcmljIDw9IHRoaXMucmcpIHtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogbnVtZXJpYywgcmc6IHRoaXMucmcgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzbGlkZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJEaXJlY3RpdmUge1xuICBwcml2YXRlIGxpc3RlbmVyTW92ZTogYW55O1xuICBwcml2YXRlIGxpc3RlbmVyU3RvcDogYW55O1xuXG4gIEBJbnB1dCgpIHJnWDogbnVtYmVyO1xuICBASW5wdXQoKSByZ1k6IG51bWJlcjtcblxuICBASW5wdXQoKSBzbGlkZXI6IHN0cmluZztcblxuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgbmV3VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKSBtb3VzZURvd24oZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnQoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pIHRvdWNoU3RhcnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnQoZXZlbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMubGlzdGVuZXJNb3ZlID0gKGV2ZW50OiBhbnkpID0+IHRoaXMubW92ZShldmVudCk7XG5cbiAgICB0aGlzLmxpc3RlbmVyU3RvcCA9ICgpID0+IHRoaXMuc3RvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXRDdXJzb3IoZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXRDdXJzb3IoZXZlbnQpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xuXG4gICAgdGhpcy5kcmFnU3RhcnQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdG9wKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmxpc3RlbmVyU3RvcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmxpc3RlbmVyU3RvcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcblxuICAgIHRoaXMuZHJhZ0VuZC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIGdldFgoZXZlbnQ6IGFueSk6IG51bWJlciB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBwYWdlWCA9IChldmVudC5wYWdlWCAhPT0gdW5kZWZpbmVkKSA/IGV2ZW50LnBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcblxuICAgIHJldHVybiBwYWdlWCAtIHBvc2l0aW9uLmxlZnQgLSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gIH1cblxuICBwcml2YXRlIGdldFkoZXZlbnQ6IGFueSk6IG51bWJlciB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBwYWdlWSA9IChldmVudC5wYWdlWSAhPT0gdW5kZWZpbmVkKSA/IGV2ZW50LnBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcblxuICAgIHJldHVybiBwYWdlWSAtIHBvc2l0aW9uLnRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3Vyc29yKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuZ2V0WChldmVudCksIHdpZHRoKSk7XG4gICAgY29uc3QgeSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuZ2V0WShldmVudCksIGhlaWdodCkpO1xuXG4gICAgaWYgKHRoaXMucmdYICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgczogeCAvIHdpZHRoLCB2OiAoMSAtIHkgLyBoZWlnaHQpLCByZ1g6IHRoaXMucmdYLCByZ1k6IHRoaXMucmdZIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZ1ggPT09IHVuZGVmaW5lZCAmJiB0aGlzLnJnWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyB2OiB5IC8gaGVpZ2h0LCByZ1k6IHRoaXMucmdZIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZ1ggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJnWSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5ld1ZhbHVlLmVtaXQoeyB2OiB4IC8gd2lkdGgsIHJnWDogdGhpcy5yZ1ggfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBzOiBudW1iZXIsIHB1YmxpYyB2OiBudW1iZXIsIHB1YmxpYyBhOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJEaW1lbnNpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaDogbnVtYmVyLCBwdWJsaWMgczogbnVtYmVyLCBwdWJsaWMgdjogbnVtYmVyLCBwdWJsaWMgYTogbnVtYmVyKSB7fVxufVxuIl19