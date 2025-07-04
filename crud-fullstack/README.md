# CRUD FullStack

Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) completa, que consiste em um backend em TypeScript utilizando Express e um frontend em React. O objetivo do projeto é gerenciar usuários, permitindo a criação, leitura, atualização e exclusão de registros.

## Estrutura do Projeto

O projeto é dividido em duas partes principais: `backend` e `frontend`.

### Backend

- **`backend/src/app.ts`**: Ponto de entrada da aplicação backend. Configura o servidor Express e as rotas.
- **`backend/src/controllers/userController.ts`**: Controlador que gerencia as operações relacionadas a usuários.
- **`backend/src/models/userModel.ts`**: Define o modelo de dados do usuário, incluindo validações.
- **`backend/src/routes/userRoutes.ts`**: Define as rotas para as operações de usuário.
- **`backend/src/types/index.ts`**: Exporta interfaces para os tipos de dados utilizados no backend.
- **`backend/package.json`**: Configuração do npm para o backend.
- **`backend/tsconfig.json`**: Configuração do TypeScript para o backend.
- **`backend/README.md`**: Documentação específica do backend.

### Frontend

- **`frontend/src/App.tsx`**: Componente principal que gerencia as rotas e a estrutura da aplicação.
- **`frontend/src/components/UserForm.tsx`**: Componente para criar e editar usuários.
- **`frontend/src/pages/Home.tsx`**: Componente que exibe a lista de usuários e o formulário para adicionar novos usuários.
- **`frontend/src/types/index.ts`**: Exporta interfaces para os tipos de dados utilizados no frontend.
- **`frontend/package.json`**: Configuração do npm para o frontend.
- **`frontend/tsconfig.json`**: Configuração do TypeScript para o frontend.
- **`frontend/README.md`**: Documentação específica do frontend.

## Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/ErickPVicente/Sistema-Cadastro---Usuarios.git
   ```

2. Navegue até a pasta do backend e instale as dependências:
   ```
   cd crud-fullstack/backend
   npm install
   ```

3. Navegue até a pasta do frontend e instale as dependências:
   ```
   cd ../frontend
   npm install
   ```

4. Para iniciar o backend, execute:
   ```
   cd ../backend
   npm start
   ```

5. Para iniciar o frontend, execute:
   ```
   cd ../frontend
   npm start
   ```

## Uso

Após iniciar o backend e o frontend, você pode acessar a aplicação no navegador através do endereço `http://localhost:3000`. A partir daí, você poderá criar, visualizar, editar e excluir usuários.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.