import React from 'react';
import './TaskWidget.css';

function getStatusColor(status) {
  if (status === 'pendente') return '#ffc107'; // amarelo
  if (status === 'em andamento') return '#ff5252'; // vermelho
  if (status === 'concluída') return '#4caf50'; // verde
  return '#bdbdbd';
}

function TaskWidget({ task, onDelete, onEdit }) {
  return (
    <div className="task-widget task-widget-visual" style={{borderLeft:`8px solid ${getStatusColor(task.status)}`}}>
      <div className="task-widget-header">
        <div className="task-widget-title-group">
          <h3>{task.title}</h3>
          <span className="task-widget-project">Meu Projeto 1</span>
        </div>
        <span className="task-widget-date" style={{background:getStatusColor(task.status)}}>
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="task-widget-desc">{task.description}</div>
      <div className="task-widget-footer">
        <div className="task-widget-icons">
          <span title="Play" className="tw-ico">▶️</span>
          <span title="Comentário" className="tw-ico">💬</span>
          <span title="Mais" className="tw-ico">⋯</span>
        </div>
        <span className="task-widget-status" style={{color:getStatusColor(task.status)}}>
          {task.status}
        </span>
        <div className="task-widget-users">
          <span className="task-widget-avatar" title="Usuário">👤</span>
        </div>
        <div className="task-widget-actions">
          <button onClick={() => onEdit(task._id)} title="Editar">✏️</button>
          <button onClick={() => onDelete(task._id)} title="Excluir">🗑️</button>
        </div>
      </div>
    </div>
  );
}

export default TaskWidget;
