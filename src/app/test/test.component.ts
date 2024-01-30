import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AWCValueAccessor } from '../awc-value-accessor.directive';

@Component({
  selector: 'test',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TestComponent implements OnInit {
  @Input() steps: {label: string, active: boolean, completed: boolean}[] = [];

  public readonly types  = [
    {label: "Type 1", value: '1'},
    {label: "Type 2", value: '2'},
    {label: "Type 3", value: '3'},
  ];

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl(null, Validators.required),
      important: new FormControl(false, Validators.requiredTrue)
    });
  }

  public ngOnInit(): void {}

  public submitForm(): void {
    console.log(this.form.controls);
  }
}
