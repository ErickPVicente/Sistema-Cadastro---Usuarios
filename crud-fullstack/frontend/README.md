# Frontend - Sistema de Cadastro de Usuários

Interface web moderna desenvolvida com **React** e **TypeScript** para gerenciamento de usuários com integração completa à API REST.

## 🛠️ Tecnologias

- **React 17** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **React Router DOM v6** - Roteamento da aplicação
- **Axios** - Cliente HTTP para requisições à API
- **CSS3** - Estilização responsiva

## 🏗️ Estrutura do Projeto

```
frontend/
├── public/
│   └── index.html              # Template HTML principal
├── src/
│   ├── components/
│   │   └── UserForm.tsx        # Formulário de cadastro/edição
│   ├── pages/
│   │   └── Home.tsx            # Página principal com lista de usuários
│   ├── types/
│   │   └── index.ts            # Interfaces TypeScript
│   ├── App.tsx                 # Componente raiz da aplicação
│   ├── index.tsx               # Ponto de entrada React
│   └── index.css               # Estilos globais
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configuração TypeScript
└── README.md
```

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm
- Backend rodando na porta 3001

### Instalação
```bash
# Navegar até o diretório do frontend
cd frontend

# Instalar dependências
npm install
```

### Execução
```bash
# Desenvolvimento
npm start

# Build para produção
npm run build

# Testes
npm test
```

A aplicação estará disponível em `http://localhost:3000`

## 🎨 Funcionalidades

### ✅ Implementadas
- **Listagem de Usuários** - Visualização em cards responsivos
- **Cadastro de Usuários** - Formulário com validação
- **Exclusão de Usuários** - Remoção com confirmação
- **Feedback Visual** - Estados de loading e erro
- **Interface Responsiva** - Design adaptável para diferentes telas

### 🔄 Comunicação com API
- **GET** `/api/users` - Carrega lista de usuários
- **POST** `/api/users` - Cria novo usuário
- **DELETE** `/api/users/:id` - Remove usuário

## 📱 Interface do Usuário

### Página Principal (Home)
- Header com título da aplicação
- Formulário de cadastro estilizado
- Lista de usuários em cards
- Botões de ação para cada usuário
- Estados de loading e erro

### Componentes

**UserForm.tsx**
- Campos: Nome, Email, Senha
- Validação em tempo real
- Feedback visual de criação
- Reset automático após sucesso

**Home.tsx**
- Gerenciamento de estado dos usuários
- Integração com API
- Tratamento de erros
- Interface responsiva

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia em modo desenvolvimento |
| `npm run build` | Gera build para produção |
| `npm test` | Executa testes unitários |
| `npm run eject` | Ejeta configurações (irreversível) |

## 🎯 Validações

- **Nome**: Obrigatório, mínimo 2 caracteres
- **Email**: Formato válido obrigatório
- **Senha**: Mínimo 5 caracteres obrigatório

## 🛡️ Tratamento de Erros

- Validação de campos obrigatórios
- Feedback visual para erros de API
- Estados de loading durante requisições
- Mensagens de erro amigáveis ao usuário

## 📦 Dependências Principais

```json
{
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-router-dom": "^6.30.1",
  "axios": "^0.21.1",
  "typescript": "^5.0.4"
}
```

## 🔗 Integração

Este frontend está configurado para se comunicar com o backend na porta `3001`. Para alterar a URL da API, modifique as chamadas nos componentes.

## 📝 Licença

Este projeto está sob a licença MIT.