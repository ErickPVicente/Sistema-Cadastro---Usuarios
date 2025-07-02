const express = require('express');
const router = express.Router();
const User = require('../backend/models/User');
const bcrypt = require('bcryptjs');

// Rota de login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await User.findOne({ email });

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    // Ajuste para senha criptografada
    const senhaCorreta = await bcrypt.compare(senha, usuario.password);
    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    res.json({ mensagem: 'Login realizado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao realizar login' });
  }
});

module.exports = router;
