import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  counter$: Observable<{ counter: number }>;

  constructor(private store: Store<{ ishanCounter: CounterState }>) {}

  ngOnInit() {
    this.store
      .select(getCounter)
      .subscribe(counter => console.log('value changed '+counter));

    this.counter$ = this.store.select('ishanCounter');
  }
}
