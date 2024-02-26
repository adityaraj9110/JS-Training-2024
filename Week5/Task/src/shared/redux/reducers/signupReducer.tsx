import { FormValues } from "../../../Pages/SignUp/SignUp";
import { localStorageProvider } from "../../utilityClasses/LocalStorageProvider";
import { RootStateForSignup } from "./RootState";

enum ActionTypeT {
  SIGNUP = "SIGNUP",
}

const initalState: FormValues[] = localStorageProvider.getItem("registeredUsers") as FormValues[] 

type ActionType = {
  type: ActionTypeT;
  payload: FormValues;
};

export const SignupReducer = (state = initalState, action: ActionType) => {
  switch (action.type) {
    case ActionTypeT.SIGNUP:
      localStorageProvider.setItem("registeredUsers",[...state, action.payload]);
      return [...state, action.payload];
    default:
      return state;
  }
};

export const signupSelector = (state: RootStateForSignup) =>
  state.SignupReducer;
