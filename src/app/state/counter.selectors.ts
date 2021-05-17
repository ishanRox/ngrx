import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

//get main state(parent state) from app.module.ts
const parentState=createFeatureSelector<CounterState>('ishanCounter');

//create child state selectors which we can subscribe
export const getCounter=createSelector(parentState,(state)=>state.counter);
export const getName=createSelector(parentState,(state)=>state.name);