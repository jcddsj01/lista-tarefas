import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import './TaskList.css';

function TaskList({ tasks, onDelete }) {
    return (
        <div className='container'>
            <h2 className='titulo'>Minhas Tarefas</h2>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link className='task' to={`/task/${task.id}`}>
                            <FiArrowRight className='icon-arrow-right' />
                            {task.title}
                        </Link>

                        <button onClick={() => onDelete(task.id)}>
                            <FaRegTrashAlt className='icon-fa-trash-alt' />
                        </button>

                    </li>
                ))}
            </ul>

        <Link className='button' to="/new-task">Nova Tarefa</Link>
        </div>
    );
}

export default TaskList;
