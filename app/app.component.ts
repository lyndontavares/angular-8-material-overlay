import {Component} from '@angular/core';
import {VERSION} from '@angular/material';

import 'rxjs/add/observable/fromEvent';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styles: [`
     :host {
       display: flex;
       height: 100vh;
       justify-content: center;
       align-items: center;
       flex-wrap: wrap;
       width: 90%; 
       flex-direction: column;
     }
     p {
       width: 80%;
     }
     .active {
       color: chocolate;
     }
     .origin {
        cursor: pointer;
        text-decoration: underline;
     }
   `]
})
export class AppComponent { 

  isOpened = false;

  constructor() {
  }
}