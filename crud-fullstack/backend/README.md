# Backend CRUD FullStack Application

Este é o backend de um sistema CRUD (Create, Read, Update, Delete) desenvolvido com Node.js e TypeScript. O projeto utiliza o framework Express para gerenciar as rotas e a lógica de aplicação.

## Estrutura do Projeto

- **src/**: Contém o código-fonte da aplicação.
  - **controllers/**: Contém os controladores que gerenciam a lógica de negócios.
    - `userController.ts`: Controlador para gerenciar usuários.
  - **models/**: Contém os modelos de dados.
    - `userModel.ts`: Modelo de dados do usuário.
  - **routes/**: Contém as definições das rotas da aplicação.
    - `userRoutes.ts`: Rotas relacionadas a usuários.
  - `app.ts`: Ponto de entrada da aplicação, onde o servidor Express é configurado.
  - **types/**: Contém definições de tipos TypeScript.
    - `index.ts`: Interfaces e tipos utilizados na aplicação.

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/WilliamDosSantos/CRUD-FullStack.git
   ```
2. Navegue até o diretório do backend:
   ```
   cd crud-fullstack/backend
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Execução

Para iniciar o servidor, execute o seguinte comando:
```
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.