import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  customVal: number;

  constructor(private store:Store<{ishanCounter:CounterState}>) {}

  ngOnInit() {}

  onCusIncrement() {
    console.log(this.customVal);
    this.store.dispatch(customIncrement({value:this.customVal}))
  }
}
