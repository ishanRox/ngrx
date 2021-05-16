import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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
      .select('ishanCounter')
      .subscribe(data => console.log('name changed'));

    this.counter$ = this.store.select('ishanCounter');
  }
}
