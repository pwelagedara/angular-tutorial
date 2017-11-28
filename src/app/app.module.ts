import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

import { routes } from './app.routes';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test/test2/test2.component';
import { Test3Component } from './common/test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    TestComponent,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [
  	DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
