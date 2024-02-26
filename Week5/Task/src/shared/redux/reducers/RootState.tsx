import { FormValuesForLogin } from "../../../Pages/Login/Login";
import { FormValues } from "../../../Pages/SignUp/SignUp";

export  interface RootStateForCart {
  CartReducer: number[];
}

export  interface RootStateForSignup{
  SignupReducer: FormValues[]
}
export interface RootStateForAuth{
  AuthReducer: FormValuesForLogin
}