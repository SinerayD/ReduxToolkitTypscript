import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';

const TodoCreate = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length === 0) {
            alert("Write Todo")
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        dispatch(createTodo(payload));
        setNewTodo('');
    }

    return (
        <div className='todo-container'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                placeholder='Type here...'
                type="text"
            />
            <button onClick={handleCreateTodo}>Create Todo</button>
        </div>
    )
}

export default TodoCreate