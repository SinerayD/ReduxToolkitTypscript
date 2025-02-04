import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store.tsx'
import Todo from '../components/Todo.tsx'
import { TodoType } from '../types/Types.tsx'

const TodoList = () => {
    const { todos } = useSelector((state: RootState) => state.todo)

    return (
        <div className="todo-list">
            {
                todos && todos.map((todo: TodoType) =>
                    <Todo key={todo.id} todoProps={todo} />
                )
            }
        </div>
    )
}

export default TodoList