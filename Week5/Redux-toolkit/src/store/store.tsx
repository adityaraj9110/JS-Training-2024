import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter-store/CounterReducers";
import { todoReducer } from "./TodoReducer/TodoReducer";

export const store = configureStore({reducer:{
    counterReducer: counterReducer,
    todoReducer:todoReducer
}});
