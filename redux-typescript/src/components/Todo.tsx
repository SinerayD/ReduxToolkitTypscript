import React from 'react'
import { CiCircleCheck, CiEdit, CiCircleRemove } from "react-icons/ci";

const Todo = () => {
    return (
        <div className="todo-item">
            <div className="todo-text">First Todo</div>
            <div className="todo-icons">
                <CiCircleRemove />
                <CiEdit />
                <CiCircleCheck />
            </div>
        </div>
    )
}

export default Todo