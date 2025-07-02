const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    status: { type: String, enum: ['pendente', 'em andamento', 'concluída'], default: 'pendente' },
    dueDate: { type: Date },
    done: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', TaskSchema);
