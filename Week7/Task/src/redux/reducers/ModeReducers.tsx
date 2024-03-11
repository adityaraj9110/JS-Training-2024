import { createAction, createReducer } from "@reduxjs/toolkit";
import { localStorageProvider } from "../../shared/utilityClasses/LocalStorageProvider";
import { LocalStorageKeys } from "../../shared/DataTypes/LocalStorageType";

enum Action {
  TOGGLE_MODE = "TOGGLE_MODE"
}

type ModeType = {
  mode: "light" | "dark",
}

const initialState: ModeType = localStorageProvider.getItem(LocalStorageKeys.MODE);

export const toggleMode = createAction(Action.TOGGLE_MODE);

export const modeReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleMode, (state) => {
    localStorageProvider.setItem<ModeType>(LocalStorageKeys.MODE,{ mode: state.mode === "light" ? "dark" : "light" });
    return { mode: state.mode === "light" ? "dark" : "light" };
  });
});

export const modeSelector = (state:{modeReducer:ModeType})=>state.modeReducer;