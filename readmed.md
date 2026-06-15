# Roteiro de Vídeo Pitch - UniFECAF Flix

**Tempo estimado:** 3 a 4 minutos

---

### [00:00 - 00:45] 1. Apresentação e Lógica do Projeto
*(Aparecendo na câmera, sorrindo e com tom confiante)*

"Olá, meu nome é [Seu Nome], e eu sou o Desenvolvedor Back-End responsável por criar a API da nova plataforma de streaming, a UniFECAF Flix!

O desafio consistia em expor o acervo de filmes do nosso banco de dados relacional por meio de uma API moderna e eficiente. Para construir isso, eu adotei a arquitetura MVC (Model-View-Controller) com Node.js e Express, garantindo que o código ficasse modular e fácil de dar manutenção.

Nós escolhemos o MySQL como banco de dados e usamos a biblioteca `mysql2` com Promises para manter nossa comunicação assíncrona limpa, sem travamentos. E toda a nossa API segue o padrão REST."

---

### [00:45 - 02:45] 2. Demonstração Prática (Postman)
*(Transição de tela gravando ou compartilhando o Postman. O servidor deve estar rodando no fundo)*

"Agora, vamos ver a API em ação pelo Postman.

**(Mostra a primeira requisição - GET /filme)**
Aqui temos nosso primeiro endpoint obrigatório, que é a listagem de todo o catálogo. Quando enviamos a requisição `GET` para a rota `/v1/controle-filmes/filme`, ele se conecta ao Model, busca os registros no MySQL, e nos devolve um status `200 OK` com o JSON completo. Como podem ver, a resposta é bem estruturada.

**(Mostra a segunda requisição - GET /filme/1)**
Caso o usuário clique em um filme específico na plataforma, precisamos carregar os detalhes dele. Para isso, criei este segundo endpoint passando o ID pela rota. Ao chamar `/v1/controle-filmes/filme/1`, ele vai direto no banco de dados de forma cirúrgica e traz exatamente o filme correspondente. Se o filme não existir, nossa API já trata o erro retornando um `404 Not Found`.

**(Mostra a terceira requisição - GET /filtro/filme?nome=matrix)**
Por último, nós temos o sistema de busca da plataforma. Eu criei o endpoint de filtro que recebe o termo de pesquisa via Query Params. Se eu pesquisar pela palavra 'Matrix' passando `?nome=matrix`, a lógica do SQL realiza uma busca utilizando o operador `LIKE` tanto no nome do filme quanto na sinopse. Veja como ele retorna apenas o resultado esperado, trazendo a experiência completa para o cliente da UniFECAF Flix."

---

### [02:45 - 03:45] 3. Desafios e Aprendizados
*(Voltando a focar na câmera)*

"Construir esse projeto foi uma experiência fantástica. Um dos principais aprendizados foi estruturar corretamente o banco de dados e separar a responsabilidade de executar queries SQL direto nos Models. Dessa forma, nossos Controllers ficam apenas lidando com a inteligência HTTP, recebendo a requisição, validando e devolvendo a resposta.

Um desafio interessante foi a declaração das rotas no Express. Percebi que o endpoint de filtro `/filtro/filme` precisa ser declarado antes do endpoint genérico `/filme/:id` no arquivo de rotas. Caso contrário, o Express interpretaria a palavra 'filtro' como sendo um ID numérico, quebrando a chamada. Solucionar isso exigiu uma compreensão sólida de como o roteador Node.js funciona de cima para baixo.

Por fim, garanti que todos os endpoints tivessem blocos `try/catch` para capturar exceções, de modo que nossa aplicação seja resiliente."

### [03:45 - 04:00] Encerramento
"E esse é o backend do UniFECAF Flix. Agradeço pela oportunidade de mostrar o meu trabalho, os códigos estão disponíveis para análise. Muito obrigado!"