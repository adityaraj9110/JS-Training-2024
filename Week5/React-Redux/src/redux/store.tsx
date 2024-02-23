import { createStore } from "redux";
import {RootReducer} from "./reducers/RootReducer"


export const store = createStore(RootReducer);
