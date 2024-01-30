import { Directive, forwardRef } from '@angular/core';
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Directive({
  standalone: true,
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AWCDefaultValueAccessor),
    },
  ],
  selector: `
    awc-dropdown[formControlName], awc-dropdown[formControl], awc-dropdown[ngModel],
    awc-input[formControlName], awc-input[formControl], awc-input[ngModel],
    awc-textarea[formControlName], awc-textarea[formControl], awc-textarea[ngModel],
    awc-range[formControlName], awc-range[formControl], awc-range[ngModel],
    awc-select[formControlName], awc-select[formControl], awc-select[ngModel],
    awc-radio-button[formControlName], awc-radio-button[formControl], awc-radio-button[ngModel],
    awc-radio-group[formControlName], awc-radio-group[formControl], awc-radio-group[ngModel],
  `,
  host: {
    // Overwrite the input event, because we only emit awc-input event
    '(awc-input)': '$any(this)._handleInput($event.target.value)',
    '(blur)': 'onTouched()',
    '(compositionstart)': '$any(this)._compositionStart()',
    '(compositionend)': '$any(this)._compositionEnd($event.target.value)',
  },
})
export class AWCDefaultValueAccessor extends DefaultValueAccessor {}

@Directive({
  standalone: true,
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AWCCheckedValueAccessor),
    },
  ],
  selector: `
    awc-checkbox[formControlName], awc-checkbox[formControl], awc-checkbox[ngModel],
    awc-switch[formControlName], awc-switch[formControl], awc-switch[ngModel]
  `,
  // Overwrite the change event, because we only emit awc-change event
  host: {
    '(awc-change)': 'onChange($event.target.checked)',
    '(blur)': 'onTouched()',
  },
})
export class AWCCheckedValueAccessor extends CheckboxControlValueAccessor {}
