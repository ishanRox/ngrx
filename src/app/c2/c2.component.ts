import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../state/counter.actions';
import { decrement } from '../state/counter.actions';
import { increment } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private store: Store<{ ishanCounter: CounterState }>) {}

  ngOnInit() {}
  
  onI=()=>this.store.dispatch(increment());
  onD=()=>this.store.dispatch(decrement());
  onR=()=>this.store.dispatch(reset());

}
