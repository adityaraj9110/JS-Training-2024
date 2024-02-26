import { FormValuesForLogin } from "../../../Pages/Login/Login";
import { localStorageProvider } from "../../utilityClasses/LocalStorageProvider";
import { RootStateForAuth } from "./RootState";

enum ActionTypesT {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

const inititalState: FormValuesForLogin | object = localStorageProvider.getItem("currentuser");


type ActionType = {
  type: ActionTypesT;
  payload: FormValuesForLogin;
};

export const AuthReducer = (state = inititalState, action: ActionType) => {
  switch (action.type) {
    case ActionTypesT.LOGIN:
      localStorageProvider.setItem("currentuser", action.payload);
      return action.payload;
    case ActionTypesT.LOGOUT:
      localStorageProvider.removeItem("currentuser");
      return inititalState;
    default:
      return state;
  }
};

export const authSelector = (state: RootStateForAuth) => state.AuthReducer;
