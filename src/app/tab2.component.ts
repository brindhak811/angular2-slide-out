import { Component } from '@angular/core';
import { RouterModule, Route, Router, RouterOutlet }  from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'tab2-component',
  templateUrl: 'tab2.component.html',
  styleUrls: [ 'tab2.component.css' ]
})

export class Tab2Component {
  toggleState = "out";
  public form: FormGroup = new FormGroup({
       name: new FormControl(),
       surname: new FormControl(),
       message: new FormControl()
    });

  toggleMenu() {
    this.toggleState = "in";
    console.log(this.toggleState);
  }
  close() {
    this.toggleState = "out";
  }

  onSubmit() {
    this.toggleState = "out";
    console.log(this.form.value);
  }
}

export const Tab2Routes: Route[] = [{ path: 'tab2', component: Tab2Component }];
