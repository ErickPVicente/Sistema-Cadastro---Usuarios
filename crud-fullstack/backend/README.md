# Backend - Sistema de Cadastro de Usuários

Backend RESTful API desenvolvido com **Node.js**, **TypeScript** e **Express** para gerenciamento de usuários.

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Express.js** - Framework web para Node.js
- **CORS** - Middleware para permitir requisições cross-origin
- **ts-node-dev** - Desenvolvimento com hot reload

## 🏗️ Estrutura do Projeto

```
backend/
├── src/
│   ├── app.ts                    # Configuração principal do servidor
│   ├── controllers/
│   │   └── userController.ts     # Lógica de negócio dos usuários
│   ├── models/
│   │   └── userModel.ts          # Modelo de dados (preparado para MongoDB)
│   ├── routes/
│   │   └── userRoutes.ts         # Definição das rotas da API
│   └── types/
│       └── index.ts              # Interfaces TypeScript
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
└── README.md
```

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm

### Instalação
```bash
# Navegar até o diretório do backend
cd backend

# Instalar dependências
npm install
```

### Execução
```bash
# Desenvolvimento (com hot reload)
npm run dev

# Produção
npm start

# Build TypeScript
npm run build
```

O servidor estará disponível em `http://localhost:3001`

## 📡 Endpoints da API

### Health Check
- **GET** `/health` - Verifica status do servidor

### Usuários
- **GET** `/api/users` - Lista todos os usuários
- **GET** `/api/users/:id` - Busca usuário por ID
- **POST** `/api/users` - Cria novo usuário
- **PUT** `/api/users/:id` - Atualiza usuário
- **DELETE** `/api/users/:id` - Remove usuário

### Exemplo de Uso

**Criar Usuário:**
```bash
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@exemplo.com",
    "password": "123456"
  }'
```

**Listar Usuários:**
```bash
curl http://localhost:3001/api/users
```

## 💾 Armazenamento

Atualmente utiliza **armazenamento em memória** para demonstração. O código está preparado para integração com **MongoDB** usando **Mongoose**.

### Estrutura do Usuário
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}
```

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Executa em modo desenvolvimento com hot reload |
| `npm start` | Executa em modo produção |
| `npm run build` | Compila TypeScript para JavaScript |

## 🛡️ Segurança

- Validação de dados de entrada
- Senhas não são retornadas nas respostas da API
- CORS configurado para permitir requisições do frontend
- Tratamento de erros padronizado

## 📝 Licença

Este projeto está sob a licença MIT.