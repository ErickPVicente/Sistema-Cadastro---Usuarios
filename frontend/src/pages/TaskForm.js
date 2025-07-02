import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendente');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`/api/tasks`, { params: { _id: id } }).then(res => {
        const task = res.data[0];
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
      });
    }
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (id) {
      await axios.put(`/api/tasks/${id}`, { title, description, status });
    } else {
      await axios.post('/api/tasks', { title, description });
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluída">Concluída</option>
      </select>
      <button type="submit">{id ? 'Salvar' : 'Cadastrar'}</button>
    </form>
  );
}

export default TaskForm;
