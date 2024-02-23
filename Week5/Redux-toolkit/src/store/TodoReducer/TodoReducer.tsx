import { createAction, createReducer } from "@reduxjs/toolkit";

export type InitialStateType = {
    todoList: string[],
}



const initialState: InitialStateType = {
  todoList: [],
};

export const addTodo = createAction<string>("addTodo");
export const removeTodo = createAction<number>("removeTodo");

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todoList.push(action.payload);
    })
    .addCase(removeTodo, (state, action) => {
      state.todoList.splice(action.payload, 1);
    });
});



// talk to ritesh about the redux

