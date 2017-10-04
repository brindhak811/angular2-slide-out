import { Component, Input, Output, EventEmitter } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'slide-out',
  templateUrl: './slide-out.component.html',
  styleUrls: ['slide-out.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('out', style({
        opacity: 0,
        transform: 'translateX(+380px)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class SlideOutComponent {
    @Input() title: string ;
    @Input() action: string ;
    @Input() state: string = "out";
    @Output('closePanel') closePanel = new EventEmitter();
}
