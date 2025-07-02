import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TaskWidget from './TaskWidget';
import './TaskWidget.css';
import './TaskBoard.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get('/api/tasks', { params: status ? { status } : {} })
      .then(res => setTasks(res.data));
  }, [status]);

  // Agrupa tarefas por status
  const groupedTasks = {
    pendente: tasks.filter(t => t.status === 'pendente'),
    'em andamento': tasks.filter(t => t.status === 'em andamento'),
    concluída: tasks.filter(t => t.status === 'concluída'),
  };

  return (
    <div className="task-board">
      <h1>Lista de Tarefas</h1>
      <Link to="/nova">Nova Tarefa</Link>
      <div className="task-board-columns">
        <div className="task-board-column">
          <h2>🔵 Pendentes</h2>
          {groupedTasks.pendente.map(task => (
            <TaskWidget
              key={task._id}
              task={task}
              onDelete={async (id) => {
                await axios.delete(`/api/tasks/${id}`);
                setTasks(tasks.filter(t => t._id !== id));
              }}
              onEdit={(id) => window.location.href = `/editar/${id}`}
            />
          ))}
        </div>
        <div className="task-board-column">
          <h2>🟡 Em andamento</h2>
          {groupedTasks['em andamento'].map(task => (
            <TaskWidget
              key={task._id}
              task={task}
              onDelete={async (id) => {
                await axios.delete(`/api/tasks/${id}`);
                setTasks(tasks.filter(t => t._id !== id));
              }}
              onEdit={(id) => window.location.href = `/editar/${id}`}
            />
          ))}
        </div>
        <div className="task-board-column">
          <h2>✅ Concluídas</h2>
          {groupedTasks.concluída.map(task => (
            <TaskWidget
              key={task._id}
              task={task}
              onDelete={async (id) => {
                await axios.delete(`/api/tasks/${id}`);
                setTasks(tasks.filter(t => t._id !== id));
              }}
              onEdit={(id) => window.location.href = `/editar/${id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
