const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Listar todas as tarefas
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Criar nova tarefa
router.post('/', async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    const task = new Task({
        title,
        description,
        status: status || 'pendente',
        dueDate: dueDate ? new Date(dueDate) : undefined,
        done: status === 'concluída'
    });
    await task.save();
    res.json(task);
});

// Atualizar tarefa
router.put('/:id', async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        {
            title,
            description,
            status,
            dueDate: dueDate ? new Date(dueDate) : undefined,
            done: status === 'concluída'
        },
        { new: true }
    );
    res.json(task);
});

// Excluir tarefa
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

module.exports = router;
