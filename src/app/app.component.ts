import { Component, VERSION } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Router, RouterOutlet} from '@angular/router';
import { routing } from './routes';
import { Tab1Component } from './tab1.component';
import { Tab2Component } from './tab2.component';
import { Tab3Component } from './tab3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
