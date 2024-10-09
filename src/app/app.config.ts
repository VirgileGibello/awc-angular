import { ApplicationConfig } from "@angular/core";
import { Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';
import { postResolver } from './resolvers/post-resolver.service';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: {
      post: postResolver
    },
  },
  { path: 'test', component: TestComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};
