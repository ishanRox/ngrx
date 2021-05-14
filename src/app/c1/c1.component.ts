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
 
  //1 @Input() counter: number = 0;
  //2 counter: number = 0;
  
  counter$: Observable<{ counter: number }>;
  
  //to unsubscribe
  //2 counterSub: Subscription;

  //this name should be same as the app.module.ts
  // StoreModule.forRoot({counter:counterReducer}) ]
  constructor(private store: Store<{ ishanCounter: CounterState }>) {}

  ngOnInit() {
    //this counter in select is Store<{counter
    //2 this.counterSub = this.store.select('ishanCounter').subscribe(data => {
    //   this.counter = data.counter;
    // });
    this.counter$ = this.store.select('ishanCounter');
  }
  //you dont non of this if u have direct observable representing that
  //2 ngOnDestroy() {
  //   this.counterSub.unsubscribe();
  // }
}
