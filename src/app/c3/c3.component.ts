import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  customVal: number;
  name: string;

  constructor(private store: Store<{ ishanCounter: CounterState }>) {}
  ngOnInit(): void {
    this.store.select('ishanCounter').subscribe(data => {
      console.log('name value changed');
      this.name = data.name;
    });
  }

  onCusIncrement() {
    console.log(this.customVal);
    this.store.dispatch(customIncrement({ value: this.customVal }));
  }

  onChangeName(){
    this.store.dispatch(changeName());
  }
}
