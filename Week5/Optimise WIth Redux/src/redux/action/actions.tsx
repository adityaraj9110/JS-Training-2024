import { ADD_TODO, REMOVE_TODO } from "../Constants";

type AddTodoType = (todo: string) => Record<string, string>;

type RemoveTodoType = ()=> {type:string};


export const addTodo: AddTodoType = (todo: string) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo : RemoveTodoType= () => {
  return {
    type: REMOVE_TODO,
  };
};
