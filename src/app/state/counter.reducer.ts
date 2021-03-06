import { createReducer, on } from '@ngrx/store';
import { changeName, customIncrement, reset } from './counter.actions';
import { decrement } from './counter.actions';
import { increment } from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, state => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, state => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, state => {
    return { ...state, counter: 0 };
  }),
  on(customIncrement,(state,action) => {
    return { ...state, counter: state.counter+action.value };
  }),
  on(changeName,(state) => {
    return { ...state, name: "ishan new" };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
