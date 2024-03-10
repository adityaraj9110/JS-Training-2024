import { createAction, createReducer } from "@reduxjs/toolkit";
import { FormValuesForLogin } from "../../shared/DataTypes/FormType";
import { LocalStorageKeys } from "../../shared/DataTypes/LocalStorageType";

enum Action {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}


const InitialState: FormValuesForLogin | null = JSON.parse(
  localStorage.getItem(LocalStorageKeys.CURRENT_USER) || "null"
);

export const login = createAction<FormValuesForLogin>(Action.LOGIN);
export const logout = createAction<void>(Action.LOGOUT); 

export const AuthReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      localStorage.setItem(LocalStorageKeys.CURRENT_USER, JSON.stringify(action.payload));
      return action.payload;
    })
    .addCase(logout, () => {
      localStorage.removeItem(LocalStorageKeys.CURRENT_USER);
      return null; 
    });
});

export const authSelector = (state: { authReducer: FormValuesForLogin }) =>
  state.authReducer;


