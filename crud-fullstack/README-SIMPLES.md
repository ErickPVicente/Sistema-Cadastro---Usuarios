# Sistema de Cadastro de Usuários - CRUD FullStack

**Projeto de Faculdade** - Sistema completo para gerenciamento de usuários com backend em Node.js e frontend em React.

## 🚀 Como Executar o Projeto (IMPORTANTE)

### ⚡ Método 1: Execução Automática (RECOMENDADO)

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ErickPVicente/Sistema-Cadastro---Usuarios.git
   cd Sistema-Cadastro---Usuarios/crud-fullstack
   ```

2. **Instale as dependências:**
   ```bash
   ./install.sh
   ```

3. **Execute o projeto:**
   ```bash
   ./run.sh
   ```

4. **Acesse:** `http://localhost:3000`

### ⚡ Método 2: Execução Manual

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
- Git para clonar o repositório

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

- ✅ Cadastrar novos usuários (Nome, Email, Senha)
- ✅ Listar todos os usuários cadastrados
- ✅ Excluir usuários
- ✅ Interface responsiva e moderna
- ✅ Validação de formulários
- ✅ Feedback visual de operações

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

### Problema: Scripts não executam (Linux/Mac)
```bash
# Torne os scripts executáveis
chmod +x install.sh run.sh
```

## 📡 API Endpoints (Para Testes Avançados)

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
├── backend/              # API em Node.js + TypeScript
│   ├── src/
│   │   ├── app.ts           # Servidor principal
│   │   ├── controllers/     # Lógica de negócio
│   │   ├── routes/          # Rotas da API
│   │   └── models/          # Modelos de dados
│   └── package.json
├── frontend/             # Interface em React + TypeScript
│   ├── src/
│   │   ├── App.tsx          # Componente principal
│   │   ├── components/      # Componentes React
│   │   └── pages/           # Páginas da aplicação
│   └── package.json
├── install.sh            # Script de instalação automática
├── run.sh                # Script de execução automática
└── README.md             # Este arquivo
```

## 📊 Como Usar o Sistema

1. **Acesse** `http://localhost:3000` no navegador
2. **Preencha** o formulário com:
   - Nome completo
   - Email válido
   - Senha (mínimo 6 caracteres)
3. **Clique** em "Criar Usuário"
4. **Visualize** a lista de usuários cadastrados
5. **Exclua** usuários clicando no botão "Excluir"

## 💾 Observações Importantes

- ⚠️ Os dados são armazenados **apenas na memória**
- ⚠️ Quando o servidor para, os dados são perdidos
- ✅ Isso é normal para um projeto de demonstração
- ✅ O projeto está pronto para integração com banco de dados real

## 📋 Lista de Verificação para Professor

- [ ] Clone o repositório
- [ ] Execute `./install.sh` ou instale manualmente
- [ ] Execute `./run.sh` ou execute manualmente
- [ ] Acesse `http://localhost:3000`
- [ ] Teste criar um usuário
- [ ] Verifique se aparece na lista
- [ ] Teste excluir um usuário
- [ ] Verifique a responsividade da interface

## 👤 Desenvolvido por

**Erick P. Vicente** - Projeto de Faculdade

---

## 🆘 Suporte

Se tiver problemas, verifique:
1. Node.js está instalado (`node --version`)
2. As portas 3000 e 3001 estão livres
3. Execute os comandos na ordem correta
4. Verifique se não há erros no terminal

**Para o Professor/Avaliador:** Execute `./install.sh` e depois `./run.sh` para testar rapidamente!
