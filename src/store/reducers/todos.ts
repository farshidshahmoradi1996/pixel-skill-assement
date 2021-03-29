import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ITodo, TodosState } from "types";

// Define the initial state
const initialState: TodosState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      const findIndex = state.todos.findIndex(
        (_i) => _i.id === action.payload?.id,
      );
      if (findIndex > -1) state.todos[findIndex] = action.payload;
    },
    softDeleteTodo: (state, action: PayloadAction<string>) => {
      const findIndex = state.todos.findIndex((_i) => _i.id === action.payload);
      if (findIndex > -1) state.todos[findIndex].isSoftDelete = true;
    },
    hardDeleteTodo: (state, action: PayloadAction<string>) => {
      //check is soft deleted
      if (!state.todos.find((_i) => _i.id === action.payload)?.isSoftDelete)
        return;
      state.todos = state.todos.filter(
        (_item) => _item?.id !== action?.payload,
      );
    },
    restoreTodo: (state, action: PayloadAction<string>) => {
      const findIndex = state.todos.findIndex((_i) => _i.id === action.payload);
      if (findIndex > -1) state.todos[findIndex].isSoftDelete = false;
    },
  },
});

export const {
  addTodo,
  editTodo,
  softDeleteTodo,
  hardDeleteTodo,
  restoreTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
