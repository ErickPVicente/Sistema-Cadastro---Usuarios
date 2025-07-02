const User = require('../models/User');

function validarEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}
function validarTelefone(telefone) {
  return /^[0-9]{10,11}$/.test(telefone);
}
