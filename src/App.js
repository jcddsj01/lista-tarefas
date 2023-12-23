import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import NewTask from './NewTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudos e Leituras da Semana', description: 'Livros: Finalizar "Meu sangue amarelo: o sucesso não aceita preguiça"'},
    { id: 2, title: 'Rotina de Exercícios Semanal', description: 'Atividades: Segunda - Corrida, Terça - Yoga, Quarta - Musculação.' },
    { id: 3, title: 'Organização do Home Office', description: 'Tarefas: Limpar a mesa, organizar cabos, comprar material de escritório.' },
    { id: 4, title: 'Limpeza Geral da Casa', description: 'Tarefas: Varrer todos os cômodos, passar aspirador, limpar banheiros, lavar roupa.' },
  ]);

  const handleTaskAddition = (title, description) => {
    const newTask = { id: tasks.length + 1, title, description };
    setTasks([...tasks, newTask]);
  };

  const handleTaskDeletion = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} onDelete={handleTaskDeletion} />} />
          <Route path="/task/:id" element={<TaskDetails tasks={tasks} />} />
          <Route path="/new-task" element={<NewTask onAdd={handleTaskAddition} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
