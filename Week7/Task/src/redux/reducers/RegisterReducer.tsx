import { createAction, createReducer } from "@reduxjs/toolkit";
import { LocalStorageKeys } from "../../shared/DataTypes/LocalStorageType";
import { FormValues } from "../../shared/DataTypes/FormType";
import { localStorageProvider } from "../../shared/utilityClasses/LocalStorageProvider";

enum RegisterAction {
  REGISTER = "REGISTER"
}


const initialState: FormValues[] = JSON.parse(localStorage.getItem(LocalStorageKeys.REGISTER_USERS) || "[]");

export const register = createAction<FormValues>(RegisterAction.REGISTER);

export const RegisterReducer = createReducer(initialState, (builder) => {
  builder.addCase(register, (state, action) => {
    state.push(action.payload);
    localStorageProvider.setItem<FormValues[]>(LocalStorageKeys.REGISTER_USERS, state);
  })
});

export const registerSelector = (state: { registerReducer: FormValues[] }) => state.registerReducer;
