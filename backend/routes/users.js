const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Validação de dados
const validateUserData = (req, res, next) => {
  const { nome, email, senha } = req.body;
  
  if (!nome || !email || !senha) {
    return res.status(400).json({
      error: 'Dados obrigatórios',
      message: 'Nome, e-mail e senha são obrigatórios'
    });
  }
  
  if (nome.trim().length < 2) {
    return res.status(400).json({
      error: 'Nome inválido',
      message: 'Nome deve ter pelo menos 2 caracteres'
    });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'E-mail inválido',
      message: 'Por favor, insira um e-mail válido'
    });
  }
  
  if (senha.length < 6) {
    return res.status(400).json({
      error: 'Senha inválida',
      message: 'Senha deve ter pelo menos 6 caracteres'
    });
  }
  
  next();
};

// POST /api/users - Cadastrar novo usuário
router.post('/', validateUserData, async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    
    // Verificar se o e-mail já existe
    const usuarioExistente = await User.findOne({ email: email.toLowerCase() });
    if (usuarioExistente) {
      return res.status(409).json({
        error: 'E-mail já cadastrado',
        message: 'Este e-mail já está sendo usado por outro usuário'
      });
    }
    
    // Criar novo usuário
    const novoUsuario = new User({
      nome: nome.trim(),
      email: email.toLowerCase().trim(),
      senha
    });
    
    const usuarioSalvo = await novoUsuario.save();
    
    res.status(201).json({
      success: true,
      message: 'Usuário cadastrado com sucesso!',
      user: usuarioSalvo
    });
    
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        error: 'Dados inválidos',
        message: errors.join(', ')
      });
    }
    
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: 'Não foi possível cadastrar o usuário'
    });
  }
});

// GET /api/users - Listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    // Buscar usuários com paginação
    const usuarios = await User.find({})
      .select('-senha') // Excluir senha da resposta
      .sort({ createdAt: -1 }) // Ordenar por data de criação (mais recente primeiro)
      .skip(skip)
      .limit(limit);
    
    // Contar total de usuários
    const total = await User.countDocuments();
    
    res.json({
      success: true,
      users: usuarios,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalUsers: total,
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1
      }
    });
    
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: 'Não foi possível buscar os usuários'
    });
  }
});

// GET /api/users/:id - Buscar usuário por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validar formato do ID
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        error: 'ID inválido',
        message: 'O ID fornecido não é válido'
      });
    }
    
    const usuario = await User.findById(id).select('-senha');
    
    if (!usuario) {
      return res.status(404).json({
        error: 'Usuário não encontrado',
        message: 'Usuário com este ID não existe'
      });
    }
    
    res.json({
      success: true,
      user: usuario
    });
    
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: 'Não foi possível buscar o usuário'
    });
  }
});

// DELETE /api/users/:id - Deletar usuário
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validar formato do ID
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        error: 'ID inválido',
        message: 'O ID fornecido não é válido'
      });
    }
    
    const usuario = await User.findByIdAndDelete(id);
    
    if (!usuario) {
      return res.status(404).json({
        error: 'Usuário não encontrado',
        message: 'Usuário com este ID não existe'
      });
    }
    
    res.json({
      success: true,
      message: 'Usuário deletado com sucesso!'
    });
    
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      message: 'Não foi possível deletar o usuário'
    });
  }
});

module.exports = router;
