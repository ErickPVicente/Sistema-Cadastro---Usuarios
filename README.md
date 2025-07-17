# Sistema de Cadastro de Usuários

Um sistema web completo para cadastro e gerenciamento de usuários, desenvolvido com React no frontend e Node.js/Express no backend, utilizando MongoDB como banco de dados.

## 🚀 Funcionalidades

- ✅ **Cadastro de usuários** - Nome, e-mail e senha
- ✅ **Listagem de usuários** - Visualização paginada com busca
- ✅ **Exclusão de usuários** - Remoção com confirmação
- ✅ **Interface moderna** - Design responsivo e intuitivo
- ✅ **Validações** - Frontend e backend
- ✅ **Segurança** - Hash de senhas, rate limiting, CORS
- ✅ **Busca em tempo real** - Por nome ou e-mail
- ✅ **Paginação** - Performance otimizada

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** 18.2.0
- **React Router DOM** - Navegação
- **Styled Components** - Estilização
- **Axios** - Requisições HTTP
- **React Toastify** - Notificações
- **React Icons** - Ícones

### Backend
- **Node.js**
- **Express** - Framework web
- **MongoDB** - Banco de dados
- **Mongoose** - ODM para MongoDB
- **bcryptjs** - Hash de senhas
- **CORS** - Cross-origin requests
- **Helmet** - Segurança
- **Express Rate Limit** - Rate limiting

## 📁 Estrutura do Projeto

```
Sistema-Cadastro--Usuarios/
├── frontend/                 # Aplicação React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── UserForm/
│   │   │   └── UserList/
│   │   ├── pages/
│   │   │   └── Home/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/                  # API Node.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── users.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MongoDB (local ou Atlas)
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/ErickPVicente/Sistema-Cadastro--Usuarios.git
cd Sistema-Cadastro--Usuarios
```

### 2. Configure o Backend

#### Instale as dependências:
```bash
cd backend
npm install
```

#### Configure as variáveis de ambiente:
```bash
# Edite o arquivo .env com suas configurações
cp .env.example .env
```

#### Inicie o servidor:
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

O backend estará rodando em `http://localhost:5000`

### 3. Configure o Frontend

#### Em um novo terminal, instale as dependências:
```bash
cd frontend
npm install
```

#### Inicie a aplicação:
```bash
npm start
```

O frontend estará rodando em `http://localhost:3000`

## 🐳 Rodando no GitHub Codespaces

### 1. Configurar MongoDB

No Codespace, instale e configure o MongoDB:

```bash
# Instalar MongoDB
sudo apt-get update
sudo apt-get install -y mongodb

# Iniciar o serviço
sudo service mongodb start

# Verificar se está rodando
sudo service mongodb status
```

### 2. Configurar variáveis de ambiente

No arquivo `backend/.env`, configure:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sistema-cadastro
FRONTEND_URL=https://3000-seu-usuario-repositorio-hash.github.dev
```

### 3. Instalar dependências e rodar

#### Backend:
```bash
cd backend
npm install
npm run dev
```

#### Frontend (em um novo terminal):
```bash
cd frontend
npm install
npm start
```

### 4. Configurar portas públicas

No Codespace:
1. Vá na aba "Ports"
2. Torne as portas 3000 e 5000 públicas
3. Acesse a aplicação pela URL da porta 3000

## 📋 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/health` | Status da API |
| POST | `/api/users` | Cadastrar usuário |
| GET | `/api/users` | Listar usuários |
| GET | `/api/users/:id` | Buscar usuário |
| DELETE | `/api/users/:id` | Deletar usuário |

### Exemplo de requisição para cadastrar usuário:

```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@email.com",
    "senha": "123456"
  }'
```

## 🧪 Testando a Aplicação

### 1. Teste de Cadastro
1. Acesse `http://localhost:3000/cadastrar`
2. Preencha o formulário com dados válidos
3. Clique em "Cadastrar Usuário"
4. Verifique se aparece a mensagem de sucesso

### 2. Teste de Listagem
1. Acesse `http://localhost:3000/usuarios`
2. Verifique se os usuários aparecem na lista
3. Teste a busca digitando nome ou e-mail
4. Teste a paginação se houver muitos usuários

### 3. Teste de Exclusão
1. Na lista de usuários, clique no ícone de lixeira
2. Confirme a exclusão
3. Verifique se o usuário foi removido

### 4. Teste de Validações
1. Tente cadastrar com dados inválidos
2. Tente cadastrar com e-mail já existente
3. Verifique se as mensagens de erro aparecem

## 🔧 Scripts Disponíveis

### Backend
- `npm start` - Inicia o servidor em produção
- `npm run dev` - Inicia o servidor em desenvolvimento com nodemon

### Frontend
- `npm start` - Inicia a aplicação em desenvolvimento
- `npm run build` - Gera build para produção
- `npm test` - Executa os testes

## 🛡️ Segurança

- Senhas são criptografadas com bcryptjs
- Rate limiting para prevenir ataques
- Validação de dados no frontend e backend
- CORS configurado adequadamente
- Helmet para headers de segurança

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design

- Interface moderna com gradientes
- Animações suaves
- Feedback visual para ações
- Tema consistente em toda aplicação
- Acessibilidade considerada

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Erick Vicente**

- GitHub: [@ErickPVicente](https://github.com/ErickPVicente)

---

⭐ Não se esqueça de dar uma estrela no projeto se ele foi útil!
