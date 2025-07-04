# Task Manager - Projeto Imersão

## Descrição

Task Manager é um sistema web para gerenciamento de tarefas, com interface moderna estilo(board), onde cada tarefa é exibida como um cartão visual em colunas separadas por status: Pendentes, Em andamento e Concluídas. O sistema é voltado para uso individual (apenas um usuário) e permite:

- Cadastro, edição e exclusão de tarefas
- Mudança de status das tarefas
- Visualização das tarefas em formato de board
- Login seguro (sem registro de novos usuários)

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB (Mongoose)
- EJS (para views do backend)
- React.js (frontend moderno)

## Estrutura do Projeto

```
Projeto-Imersao---Task-Manager/
├── app.js
├── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   └── server.js
├── frontend/
│   └── src/
│       ├── App.js
│       └── pages/
├── public/
│   └── stile.css
├── routes/
├── views/
│   ├── login.ejs
│   ├── tasks.ejs
│   └── ...
└── tasks.db
```

## Como Executar o Projeto

### Pré-requisitos
- Node.js (v16+)
- MongoDB rodando localmente (porta padrão 27017)

### 1. Instale as dependências

No diretório raiz:
```bash
npm install
```

No backend:
```bash
cd backend
npm install
```

No frontend:
```bash
cd ../frontend
npm install
```

### 2. Inicie o MongoDB
Se estiver usando Linux:
```bash
sudo systemctl start mongod
```
Ou via Docker:
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

### 3. Execute o Backend
No diretório raiz:
```bash
node app.js
```
O backend estará disponível em: http://localhost:3000

### 4. Execute o Frontend (React)
No diretório `frontend`:
```bash
npm start
```
O frontend estará disponível em: http://localhost:3001 (ou porta definida pelo React)

### 5. Acesse o sistema
- Acesse http://localhost:3001 para usar a interface moderna (React)
- Ou http://localhost:3000 para usar as views EJS (caso queira)

## Usuário e Login
- O sistema está configurado para uso de apenas um usuário.
- Use o usuário padrão cadastrado no banco de dados (ou crie manualmente via MongoDB caso necessário).
- Não há opção de registro de novos usuários na interface.

### Exemplo de usuário padrão (para inserir manualmente no MongoDB):

```
{
  "username": "admin",
  "password": "admin"
}
```

> Para inserir manualmente, acesse o MongoDB e use:
> 
> ```js
> db.users.insertOne({ username: "admin", password: "admin" })
> ```

## Funcionalidades
- Login seguro
- Cadastro, edição e exclusão de tarefas
- Mudança de status das tarefas
- Visualização em board (kanban) com colunas
- Interface responsiva e moderna

## Observações
- Para customizar o visual, edite os arquivos CSS em `frontend/src/pages/` e `public/stile.css`.
- Para alterar regras de negócio, edite os controllers em `backend/controllers/`.

---

Dúvidas ou sugestões? Abra uma issue ou entre em contato!
