import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { increement,decreement, reset } from "./counter.action";
import { initialState } from './counter.state';

const _counterReducer = createReducer(
    initialState, 
    on (increement, (state) => {
         return {
             ...state, 
             counter: state.counter + 1,
         };
     }),
     on (decreement, (state) => {
         return {
             ...state,
             counter: state.counter - 1,
         };
     }),
     on (reset, (state) => {
         return {
             ...state,
             counter: 0,
         };
     })
     );

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}