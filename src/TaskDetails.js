import React from 'react';
import { useParams, Link } from 'react-router-dom';

import './TaskDetails.css';

function TaskDetails({ tasks }) {
    const { id } = useParams();
    const task = tasks.find((task) => task.id === parseInt(id));

    if (!task) {
        return <div>Tarefa não encontrada!</div>;
    }

    return (
        <div className='container'>
            <h2 className='titulo'>Minhas Tarefas</h2>

            <div className='details'>
                <h3 className='title-details'>{task.title}</h3>
                <p className='description'>{task.description}</p>
            </div>
            
            <Link to="/" className='button'>Voltar</Link>
        </div>
    );
}

export default TaskDetails;
