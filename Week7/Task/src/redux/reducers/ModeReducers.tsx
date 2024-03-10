import { createAction, createReducer } from "@reduxjs/toolkit";

enum Action {
  TOGGLE_MODE = "TOGGLE_MODE"
}

type ModeType = {
  mode: "light" | "dark",
}

const initialState: ModeType = { mode: "light" };

export const toggleMode = createAction(Action.TOGGLE_MODE);

export const modeReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleMode, (state) => {
    return { mode: state.mode === "light" ? "dark" : "light" };
  });
});

export const modeSelector = (state:{modeReducer:ModeType})=>state.modeReducer;