import { combineReducers } from "redux";
import { CartReducer } from "./cartReducer";
import {AuthReducer} from "./authReducer"
import {SignupReducer} from "./signupReducer"

export const RootReducer = combineReducers({ CartReducer,SignupReducer,AuthReducer});

