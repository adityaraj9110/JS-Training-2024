import { configureStore } from "@reduxjs/toolkit";
import { modeReducer } from "./reducers/ModeReducers";
import { AuthReducer } from "./reducers/AuthReducer";
import { RegisterReducer } from "./reducers/RegisterReducer";

export const store = configureStore({
    reducer:{
        modeReducer:modeReducer,
        authReducer:AuthReducer,
        registerReducer:RegisterReducer
    }
})