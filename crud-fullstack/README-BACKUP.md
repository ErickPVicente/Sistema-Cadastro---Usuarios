# Sistema de Cadastro de Usuários - CRUD FullStack

**Projeto de Faculdade** - Sistema completo para gerenciamento de usuários com backend em Node.js e frontend em React.

## � Como Executar o Projeto (IMPORTANTE)

### ⚡ Execução Rápida

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ErickPVicente/Sistema-Cadastro---Usuarios.git
   cd Sistema-Cadastro---Usuarios/crud-fullstack
   ```

2. **Execute o backend (Terminal 1):**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   ✅ Backend rodando em: `http://localhost:3001`

3. **Execute o frontend (Terminal 2):**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   ✅ Frontend rodando em: `http://localhost:3000`

4. **Acesse no navegador:** `http://localhost:3000`

### 📋 Pré-requisitos

- Node.js (versão 16 ou superior) - [Download aqui](https://nodejs.org/)
- npm (já vem com o Node.js)
- Dois terminais abertos

## 🛠️ Tecnologias Utilizadas

**Backend:**
- Node.js + TypeScript
- Express.js
- Armazenamento em memória

**Frontend:**
- React + TypeScript
- React Router
- CSS3

## 📱 Funcionalidades

- ✅ Cadastrar novos usuários
- ✅ Listar todos os usuários
- ✅ Excluir usuários
- ✅ Interface responsiva
- ✅ Validação de formulários

## 🔧 Se algo der errado...

### Problema: "Porta já está em uso"
```bash
# Pare todos os processos Node.js
pkill -f node
# Tente executar novamente
```

### Problema: "Module not found"
```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Problema: Backend não conecta
```bash
# Verifique se o backend está rodando
curl http://localhost:3001/health
# Deve retornar: {"status":"Server is running!"}
```

## 📡 API Endpoints (Para Testes)

```bash
# Listar usuários
curl http://localhost:3001/api/users

# Criar usuário
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"teste@email.com","password":"123456"}'

# Status do servidor
curl http://localhost:3001/health
```

## 📁 Estrutura do Projeto

```
crud-fullstack/
├── backend/          # API em Node.js + TypeScript
│   ├── src/
│   │   ├── app.ts           # Servidor principal
│   │   ├── controllers/     # Lógica de negócio
│   │   ├── routes/          # Rotas da API
│   │   └── models/          # Modelos de dados
│   └── package.json
├── frontend/         # Interface em React + TypeScript
│   ├── src/
│   │   ├── App.tsx          # Componente principal
│   │   ├── components/      # Componentes React
│   │   └── pages/           # Páginas da aplicação
│   └── package.json
└── README.md
```

## � Como Usar

1. **Acesse** `http://localhost:3000`
2. **Preencha** o formulário com nome, email e senha
3. **Clique** em "Criar Usuário"
4. **Visualize** a lista de usuários cadastrados
5. **Exclua** usuários clicando no botão "Excluir"

## 💾 Observações Importantes

- Os dados são armazenados **apenas na memória**
- Quando o servidor para, os dados são perdidos
- Isso é normal para um projeto de demonstração
- O projeto está pronto para integração com banco de dados real

## 👤 Desenvolvido por

**Erick Pacheco Vicente** - Projeto Curso Análise e Desenvolvimento de Sistemas

---

⚠️ **Para o Professor/Avaliador:** Execute os comandos na seção "Execução Rápida" e acesse `http://localhost:3000` para testar todas as funcionalidades.