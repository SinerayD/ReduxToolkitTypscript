import React, { useState } from 'react'
import { CiCircleCheck, CiEdit, CiCircleRemove } from "react-icons/ci";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';
import { updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

const Todo: React.FC<TodoProps> = ({ todoProps }: TodoProps) => {
    const { id, content } = todoProps;

    const dispatch = useDispatch();

    const [updated, setUpdated] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);


    const handleRemoveTodo = () => {
        dispatch(removeTodo(id));
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload));
        setUpdated(false);
    }

    return (
        <div className="todo-item">
            {updated ? <input type='text' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content}</div>}
            <div className="todo-icons">
                <CiCircleRemove onClick={handleRemoveTodo} />
                {updated ? <CiCircleCheck onClick={handleUpdateTodo} /> : <CiEdit onClick={() => setUpdated(true)} />}
            </div>
        </div>
    )
}

export default Todo