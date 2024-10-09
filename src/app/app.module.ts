import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { setBasePath } from '@agence-adeliom/awc';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.config';
import { HttpClientModule } from '@angular/common/http';

setBasePath('/');

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TestComponent,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
