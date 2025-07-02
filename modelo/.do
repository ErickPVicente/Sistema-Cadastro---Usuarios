INSIRA AQUI O TÍTULO DE SEU PAPER

Acadêmico
Turma 
Tutor  


RESUMO 

Insira neste quadro o resumo da sua pesquisa. O resumo deve conter, no máximo, 250 palavras, ser composto de um único parágrafo, sem recuo na primeira linha. A fonte usada deve ser Times New Roman, espaçamento simples, justificado, tamanho 12. O resumo deve conter o tema a ser tratado, o objetivo geral, a metodologia adotada e as conclusões.

Palavras-chave: Insira nesse campo três palavras-chave que remetem ao seu trabalho.


INTRODUÇÃO 

A introdução é a apresentação inicial do trabalho e deve conter uma breve apresentação sobre o tema estudado, a pergunta que moveu a pesquisa, o objetivo geral e os objetivos específicos do trabalho.  


FUNDAMENTAÇÃO TEÓRICA 

A fundamentação teórica precisa conter no mínimo dez parágrafos. Aqui, é possível utilizar citações diretas curtas, citações diretas longas, citações indiretas. Neste caso, todas devem ser referenciadas. As citações utilizadas devem ser retiradas de livros e artigos científicos. Além da parte textual, você poderá inserir aqui gráficos, mapas, tabelas, fotografias ou imagens, desde que todas relacionadas ao conteúdo e contextualizados. Lembre-se de inserir o título e fonte da imagem. 


METODOLOGIA 

A metodologia de um trabalho acadêmico deve conter basicamente os seguintes itens: Método de pesquisa (a referência teórica que vai orientar seu caminho), abordagem de pesquisa (É quantitativa? qualitativa? ambas?). Qual é o tipo de pesquisa (bibliográfica? documental? de campo? participante?). Quais foram os instrumentais de pesquisa (questionário? formulário?). Também é importante responder qual a fonte dessas informações. A ideia aqui é apresentar como você chegou até os resultados. 

CONSIDERAÇÕES 

Utilize este campo para fazer a finalização do seu trabalho. Aproveite para expor suas conclusões sobre a pesquisa e listar o que você aprendeu com esta experiência. 


REFERÊNCIAS BIBLIOGRÁFICAS 

Listar as referências bibliográficas utilizadas de acordo com as normas da ABNT. 

________________________________________
TÍTULO DO PAPER
TaskManager: Uma Aplicação Web para Gerenciamento de Tarefas em Pequenas Empresas
________________________________________
Acadêmico
Erick Pacheco Vicente
Turma
FLD207825CET 
Tutor
[Preencher com o nome do tutor]
________________________________________
RESUMO
Este trabalho apresenta o desenvolvimento da aplicação TaskManager, um sistema web simples para gerenciamento de tarefas voltado a pequenas empresas. A aplicação permite o cadastro de usuários, criação e atribuição de tarefas, além de marcação de conclusão. A metodologia adotada foi baseada no modelo de desenvolvimento incremental, utilizando Node.js, Express, SQLite e EJS. O sistema foi projetado para ser leve, funcional e de fácil manutenção. Os resultados demonstram que a aplicação atende às necessidades básicas de organização e controle de tarefas, promovendo maior produtividade e clareza nas atividades da equipe.
Palavras-chave: gerenciamento de tarefas, Node.js, SQLite, aplicação web, produtividade.
________________________________________
INTRODUÇÃO
A organização de tarefas é um desafio comum em pequenas empresas que não possuem sistemas informatizados. Muitas vezes, o controle é feito por planilhas ou anotações manuais, o que gera perda de informações e retrabalho. Este projeto propõe o desenvolvimento de uma aplicação web simples, chamada TaskManager, que visa resolver esse problema com uma interface intuitiva e funcionalidades essenciais para o controle de tarefas.
________________________________________
FUNDAMENTAÇÃO TEÓRICA
Segundo Frainer (2020), a pesquisa científica deve estar alinhada à resolução de problemas reais, com base em métodos sistemáticos. A aplicação TaskManager se insere no contexto de pesquisa aplicada, com base em métodos dedutivos e abordagem qualitativa, conforme os princípios apresentados na obra "Metodologia Científica" da UNIASSELVI. A escolha por tecnologias como Node.js e SQLite se justifica pela leveza, simplicidade e ampla documentação, ideais para projetos de pequeno porte.
________________________________________
METODOLOGIA
A aplicação foi desenvolvida utilizando:
•	Backend: Node.js com Express
•	Banco de dados: SQLite
•	Frontend: EJS (Embedded JavaScript Templates)
•	Ferramentas: Visual Studio Code, SQLite Viewer
Funcionalidades:
•	Cadastro e login de usuários
•	CRUD de tarefas
•	Atribuição de tarefas a usuários
•	Marcação de tarefas como concluídas
Trecho de código (exemplo de rota):
app.post('/tasks', async (req, res) => {
  const { title, description, userId } = req.body;
  await db.run('INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)', [title, description, userId]);
  res.redirect('/tasks');
});
________________________________________
CONSIDERAÇÕES
A aplicação TaskManager demonstrou ser eficaz para o gerenciamento básico de tarefas pessoais. A experiência de desenvolvimento permitiu aplicar conhecimentos teóricos em um projeto prático, reforçando a importância da integração entre teoria e prática na formação profissional.
________________________________________
REFERÊNCIAS BIBLIOGRÁFICAS
•	FRANIER, J. Metodologia Científica. UNIASSELVI, 2020.
•	SAMPIERI, R. H.; COLLADO, C. F.; LUCIO, M. P. B. Metodologia da pesquisa. 5. ed. Porto Alegre: Penso, 2013.
•	GIL, A. C. Métodos e técnicas de pesquisa social. 6. ed. São Paulo: Atlas, 2019.
________________________________________
REPOSITÓRIO DO GITHUB
https://github.com/ErickPVicente/Projeto-Imersao---Task-Manager
________________________________________

