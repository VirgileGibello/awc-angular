import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector:
    "awc-input, awc-select, awc-checkbox",
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AWCValueAccessor,
      multi: true
    }
  ],
})
export class AWCValueAccessor implements ControlValueAccessor {

  val = "";
  onChange: any = () => {};
  onTouch: any = () => {};

  set value(value: string){
    if(!value) return;
    this.val = value;
    this.elRef.nativeElement.value = this.value;

    this.onChange(value);
    this.onTouch(value);
  }

  constructor(private elRef : ElementRef) {console.log(this.elRef.nativeElement.value);}

  registerOnChange(fn: any): void {

  }

  registerOnTouched(fn: any): void {

  }

  writeValue(value: string): void {
    this.val = value;
    this.elRef.nativeElement.value = value;
  }
}
