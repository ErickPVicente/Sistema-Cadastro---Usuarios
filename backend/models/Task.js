const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  status: {
    type: String,
    enum: ['pendente', 'em andamento', 'concluída'],
    default: 'pendente'
  },
  dueDate: Date, // Data de vencimento da tarefa
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Referência ao usuário que criou a tarefa
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', taskSchema);
