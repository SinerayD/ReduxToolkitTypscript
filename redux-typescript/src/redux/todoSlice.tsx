import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoinitialState, TodoType } from '../types/Types'

const initialState: TodoinitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoinitialState, action: PayloadAction<TodoType>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state: TodoinitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
        },
        updateTodo: (state: TodoinitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    }
})

export const { createTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer