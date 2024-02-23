import RootState from "./RootState";

export type TodoType = {
  id:number,
  userTodo:string
}

const initialState: TodoType[] = [];

enum ActionTypeT{
  ADD_TODO='ADD_TODO',
  REMOVE_TODO='REMOVE_TODO'
}

type ActionType = {
  type: ActionTypeT;  // not string, enum 
  payload: TodoType; // make it object, type will be only type
};

//

type TodoReducerType = (
  state: TodoType[] | undefined,
  action: ActionType
) => TodoType[] | undefined;

export const TodoReducer: TodoReducerType = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ActionTypeT.ADD_TODO:
       //extra
        state.push(action.payload);
        return state;
      
        break;

        // wrong implementation,
        // directly you have to pass single pertucalr element,
        // data = [{name: '',id:'},{name: '',id:'},{name: '',id:'}]
        // data[0] = {name: '',id:'}
        // payload.id

    case ActionTypeT.REMOVE_TODO:
       // extra
        return state.filter((item) => item.id !== action.payload.id);
      
      break;

    default:
      return state;
  }
};

export const todoSelector = (state: RootState) => state.TodoReducer;
