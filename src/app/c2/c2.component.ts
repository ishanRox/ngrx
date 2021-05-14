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
  // @Output() i = new EventEmitter<void>();
  // @Output() d = new EventEmitter<void>();
  // @Output() r = new EventEmitter<void>();

  constructor(private store: Store<{ ishanCounter: CounterState }>) {}

  ngOnInit() {}
  onI() {
    // this.i.emit();
    this.store.dispatch(increment());
  }
  onD() {
    // this.d.emit();
    this.store.dispatch(decrement());
  }
  onR() {
    // this.r.emit();
    this.store.dispatch(reset());
  }
}
