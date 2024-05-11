import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  title: string;
  isCompleted: boolean;
  id: number;
}

const initialState: TodoState[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
