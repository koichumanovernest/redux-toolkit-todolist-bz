import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, { payload })=>{
         state.todos.push(payload)
      },
		deleteTodos: (state,{payload}) => {
			//! state.todos = state.todos.filter(todo => todo.id !== payload.id);
               state.todos  = state.todos.filter(todo => todo.id !== payload.id)
		}
	},
});

export const { addTodo ,deleteTodos} = todoSlice.actions
