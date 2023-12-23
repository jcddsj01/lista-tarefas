import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './NewTask.css';

function NewTask({ onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        if (title && description) {
            onAdd(title, description);
            setTitle('');
            setDescription('');
        }
    };

    return (
        <div className='container'>
            <h2 className='titulo'>Nova Tarefa</h2>

            <div className='new-task'>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <div className='buttons'>
                    <Link to="/" className='button'>Voltar</Link>
                    <button className='button' onClick={handleAddTask}>Adicionar</button>
                </div>
            </div>            
        </div>
    );
}

export default NewTask;
