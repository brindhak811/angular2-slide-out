import { Component } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';


@Component({
  selector: 'tab1-component',
  templateUrl: 'tab1.component.html'
})

export class Tab1Component {}

export const Tab1Routes: Route[] = [{   path: 'tab1', component: Tab1Component },
{   path: '', component: Tab1Component }];
