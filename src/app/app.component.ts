import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'test-app';

  public getSteps(): any {
    return [
      { label: 'Step 1', active: false, completed: true },
      { label: 'Step 2', active: false, completed: true },
      { label: 'Step 3', active: true, completed: false },
      { label: 'Step 4', active: false, completed: false },
      { label: 'Step 5', active: false, completed: false },
    ];
  }
}
