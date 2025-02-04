import React from 'react'
import { CiCircleCheck, CiEdit, CiCircleRemove } from "react-icons/ci";
import { TodoType } from '../types/Types';

interface TodoProps {
    todoProps: TodoType;
}

const Todo: React.FC<TodoProps> = ({ todoProps }) => {
    const { id, content } = todoProps;

    return (
        <div className="todo-item">
            <div>{content}</div>
            <div className="todo-icons">
                <CiCircleRemove />
                <CiEdit />
                <CiCircleCheck />
            </div>
        </div>
    )
}

export default Todo