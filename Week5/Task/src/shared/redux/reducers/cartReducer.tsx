import { localStorageProvider } from "../../utilityClasses/LocalStorageProvider";
import { RootStateForCart } from "./RootState";

enum ActionTypeT {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_TO_CART = "REMOVE_TO_CART",
}

const initialState: number[] = Array.isArray(
  localStorageProvider.getItem("cartItems")
)
  ? (localStorageProvider.getItem("cartItems") as number[])
  : [];

export type ActionType = {
  type: ActionTypeT;
  payload: number;
};

export const CartReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionTypeT.ADD_TO_CART:
      localStorageProvider.setItem("cartItems", [...state, action.payload]);
      return [...state, action.payload];
    case ActionTypeT.REMOVE_TO_CART:
      localStorageProvider.setItem(
        "cartItems",

        state.filter((item) => {
          return item !== action.payload;
        })
      );
      return state.filter((item) => {
        return item !== action.payload;
      });
    default:
      return state;
  }
};

export const cartSelector = (state: RootStateForCart) => state.CartReducer;
