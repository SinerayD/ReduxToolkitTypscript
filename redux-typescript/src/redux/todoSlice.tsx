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
        createTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos.push(action.payload);
        }
    }
})

export const { createTodo } = todoSlice.actions
export default todoSlice.reducer