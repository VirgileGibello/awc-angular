import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector:
    "awc-input, awc-select, awc-option, awc-checkbox",
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

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }

  onChange: (value: string) => void;
  onTouched: () => void;

  writeValue(value: string) {
    this.renderer.setProperty(this.element.nativeElement, "value", value);
  }

  @HostListener("onChange", ["$event.detail"])
  _handleIllyChange(value: string) {
    this.onChange(value);
  }

  @HostListener("onBlur", ["$event.target"])
  _handleBlurEvent(el: any) {
    this.onTouched();
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = value => {
      fn(value);
    };
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = () => {
      fn();
    };
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(
      this.element.nativeElement,
      "disabled",
      isDisabled
    );
  }
}
