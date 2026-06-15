# Documentação da API UniFECAF Flix

## 1. Arquitetura Utilizada
O projeto foi desenvolvido seguindo o padrão arquitetural **MVC (Model-View-Controller)**, com o backend fornecendo uma API RESTful.
- **Model:** Representa a camada de acesso aos dados. Aqui centralizamos todas as requisições ao banco de dados MySQL utilizando queries SQL via `mysql2/promise`.
- **Controller:** Contém as regras de negócio e a orquestração do fluxo de dados. Recebe as requisições HTTP repassadas pelas rotas, chama os Models para processar as informações, e retorna uma resposta padronizada.
- **View:** No contexto de uma API REST, a View é representada pela própria estrutura de dados JSON devolvida ao cliente (como Frontend, App Mobile ou Postman).

## 2. Padrão de Comunicação (REST)
A API segue princípios REST, adotando os verbos HTTP corretamente (`GET`) e respondendo com status codes semânticos:
- **200 OK:** Quando a requisição foi bem-sucedida e os dados foram retornados.
- **400 Bad Request:** Quando a requisição do cliente é inválida ou falta algum parâmetro obrigatório (ex: buscar sem enviar o nome).
- **404 Not Found:** Quando o recurso não é encontrado no banco de dados (ex: ID de filme inexistente).
- **500 Internal Server Error:** Para capturar exceções não previstas ou falhas no banco de dados, utilizando blocos `try/catch`.

## 3. Escolhas Tecnológicas
- **Node.js + Express:** Framework robusto e leve, permitindo construir e rotear a API rapidamente com excelente performance para I/O assíncrono.
- **MySQL2 (mysql2/promise):** Escolhido pelo suporte nativo a Promises, facilitando o uso de `async/await` e evitando _callback hell_, garantindo um código muito mais legível.
- **Dotenv:** Essencial para gerenciamento de variáveis de ambiente, separando as configurações (como senhas do banco) do código fonte por segurança.

## 4. Endpoints Disponíveis

A base da URL (Base URL) é `http://localhost:3306/v1/controle-filmes`.

### 4.1. Listar Filmes
- **Endpoint:** `GET /filme`
- **Descrição:** Retorna a lista de todos os filmes cadastrados.
- **Parâmetros:** Nenhum.
- **Respostas Esperadas:** 
  - `200 OK`: `{ "success": true, "data": [...] }`
  - `500 Internal Server Error`: Se houver erro de conexão com banco.

### 4.2. Buscar Filme por ID
- **Endpoint:** `GET /filme/:id`
- **Descrição:** Retorna as informações detalhadas de um filme específico.
- **Parâmetros de Rota:** `id` (numérico).
- **Respostas Esperadas:** 
  - `200 OK`: Retorna o objeto do filme correspondente.
  - `404 Not Found`: Caso não exista nenhum filme com aquele ID.

### 4.3. Filtrar Filmes
- **Endpoint:** `GET /filtro/filme`
- **Descrição:** Realiza uma busca nos filmes cujos nomes ou sinopses correspondam ao termo pesquisado.
- **Parâmetros de Query:** `nome` (obrigatório). Ex: `?nome=matrix`
- **Respostas Esperadas:** 
  - `200 OK`: Retorna uma lista de filmes que contenham o termo.
  - `400 Bad Request`: Se a requisição for feita sem o parâmetro `?nome=`.

## 5. Estrutura de Pastas

```text
unifecaf-flix/
│
├── src/
│   ├── config/           # Configurações globais (Conexão do Banco de Dados)
│   ├── controllers/      # Controladores da aplicação (Regras de negócio e Respostas HTTP)
│   ├── models/           # Camada de abstração e persistência do Banco de Dados
│   ├── routes/           # Definição e mapeamento dos Endpoints (Express Router)
│   └── server.js         # Ponto de entrada da aplicação (Entrypoint do Servidor)
│
├── .env                  # Variáveis de ambiente (Credenciais de banco e porta)
├── database.sql          # Script de criação de tabelas e inserção de dados iniciais
└── package.json          # Metadados do projeto e dependências do Node.js
```