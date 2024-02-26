import RootState from "./RootState";

export type TodoType = {
  id: number;
  data: string;
};

const initialState: string[] = [];

enum ActionTypeT {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

type ActionType = {
  type: ActionTypeT; // not string, enum
  payload: string | number; // make it object, type will be only type
};

//

type TodoReducerType = (
  state: string[] | undefined,
  action: ActionType
) => number | string[] | undefined;

export const TodoReducer: TodoReducerType = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ActionTypeT.ADD_TODO:
      if (typeof action.payload === "string") {
        //extra
        state.push(action.payload);
        return state;
      }
      break;

    

    case ActionTypeT.REMOVE_TODO:
      if (typeof action.payload === "number") {
        // extra
        return state.filter((_, index) => index !== action.payload);
      }
      break;

    default:
      return state;
  }
};

export const todoSelector = (state: RootState) => state.TodoReducer;
