import { createReducer, createAction } from "@reduxjs/toolkit";

export type CounterStateType = {
  
  count: number;
};

export const increment = createAction<void>("increment");
export const decrement = createAction<void>("decrement");
export const incrementByPayload = createAction<number>("incrementByPayload");

const initalState: CounterStateType = {
  count: 0,
};

export const counterReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count += 1;
    })
    .addCase(decrement, (state) => {
      state.count -= 1;
    })
    .addCase(incrementByPayload, (state, action) => {
      state.count += action.payload;
    });
});
