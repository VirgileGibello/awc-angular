import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestComponent {
  @Input() steps: any;
}
