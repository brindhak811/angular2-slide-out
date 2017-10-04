import { Component } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';


@Component({
  selector: 'tab3-component',
  templateUrl: 'tab3.component.html',
  styleUrls: [ 'tab3.component.css' ]
})

export class Tab3Component {}

export const Tab3Routes: Route[] = [{   path: 'tab3', component: Tab3Component }];
