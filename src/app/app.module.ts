import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SlideOutComponent } from './slide-out/slide-out.component';
import { routing } from './routes';
import { Tab1Component } from './tab1.component';
import { Tab2Component } from './tab2.component';
import { Tab3Component } from './tab3.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideOutComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
