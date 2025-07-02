require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

// Importe o modelo de Task (ajuste o caminho conforme sua estrutura)
const Task = require('./models/Task');

const app = express();

// Configurar EJS como engine de views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Adicionado para tratar formulários HTML

mongoose.connect(process.env.MONGODB_URI);

app.use('/api/tasks', tasksRouter);

app.get('/login', (req, res) => {
    // Permite exibir mensagem de erro se houver
    res.render('login', { error: req.query.error || null });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        return res.redirect('/tasks');
    }
    // Redireciona para login com mensagem de erro via query string
    res.redirect('/login?error=Usuário ou senha inválidos');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    // Aqui você pode adicionar a lógica para registrar o usuário no banco
    // Exemplo simples: apenas redireciona para login após o "registro"
    res.redirect('/login');
});

app.get('/', (req, res) => {
    res.redirect('/login');
});

// Rota para exibir a lista de tarefas na interface web (GET)
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find().lean();
        const message = req.query.message || null;
        res.render('tasks', { tasks, message });
    } catch (err) {
        console.error('Erro ao buscar tarefas:', err);
        res.render('tasks', { tasks: [], message: 'Erro ao buscar tarefas.' });
    }
});

// Rota para adicionar tarefa via formulário web
app.post('/tasks/add', async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    if (!title) {
        return res.redirect('/tasks');
    }
    let parsedDate = undefined;
    if (dueDate) {
        const dateObj = new Date(dueDate);
        if (!isNaN(dateObj.getTime())) {
            parsedDate = dateObj;
        }
    }
    try {
        await Task.create({
            title,
            description,
            status: status || 'pendente',
            dueDate: parsedDate,
            done: status === 'concluída'
        });
        res.redirect('/tasks?message=' + encodeURIComponent('Tarefa criada com sucesso!'));
    } catch (err) {
        console.error('Erro ao adicionar tarefa:', err);
        res.redirect('/tasks?message=' + encodeURIComponent('Erro ao criar tarefa.'));
    }
});

// Rota para marcar tarefa como concluída (UPDATE)
app.post('/tasks/done/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.redirect('/tasks');
    }
    try {
        await Task.findByIdAndUpdate(id, { status: 'concluída', done: true });
    } catch (err) {
        console.error('Erro ao atualizar tarefa:', err);
    }
    res.redirect('/tasks');
});

// Rota para editar tarefa (opcional, caso queira permitir edição completa)
app.post('/tasks/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;
    if (!id) {
        return res.redirect('/tasks');
    }
    let parsedDate = undefined;
    if (dueDate) {
        const dateObj = new Date(dueDate);
        if (!isNaN(dateObj.getTime())) {
            parsedDate = dateObj;
        }
    }
    try {
        await Task.findByIdAndUpdate(id, {
            title,
            description,
            status,
            dueDate: parsedDate,
            done: status === 'concluída'
        });
    } catch (err) {
        console.error('Erro ao editar tarefa:', err);
    }
    res.redirect('/tasks');
});

// Rota para excluir tarefa
app.post('/tasks/delete/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.redirect('/tasks');
    }
    try {
        await Task.findByIdAndDelete(id);
        res.redirect('/tasks?message=' + encodeURIComponent('Tarefa excluída!'));
    } catch (err) {
        console.error('Erro ao excluir tarefa:', err);
        res.redirect('/tasks?message=' + encodeURIComponent('Erro ao excluir tarefa.'));
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});