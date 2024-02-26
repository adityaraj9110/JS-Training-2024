import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

export type AddToCartType = (id: number) => { type: string; payload: number };
export type RemoveFromCart = (id: number) => { type: string; payload: number };

export const addToCart: AddToCartType = (id: number) => {
    return {
        type: ADD_TO_CART,
        payload: id
    };
};

export const removeFromCart: RemoveFromCart = (id: number) => {
    return {
        type: REMOVE_TO_CART,
        payload: id
    };
};


