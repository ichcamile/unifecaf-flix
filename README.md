# 🎬 UniFECAF Flix API

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

Bem-vindo à API do **UniFECAF Flix**! 🍿  
Esta é uma API RESTful desenvolvida em Node.js com Express e MySQL, projetada para gerenciar um catálogo de filmes. O projeto adota a arquitetura **MVC (Model-View-Controller)** para manter o código limpo e organizado.

---

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript.
- **[Express](https://expressjs.com/):** Framework para construir a API e gerenciar as rotas.
- **[MySQL2](https://www.npmjs.com/package/mysql2):** Driver de conexão ao banco de dados com suporte a Promises.
- **[Dotenv](https://www.npmjs.com/package/dotenv):** Gerenciamento seguro de variáveis de ambiente.
- **[Nodemon](https://nodemon.io/):** Utilizado em ambiente de desenvolvimento para auto-restart do servidor.

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 14+ recomendada)
- **MySQL** (para rodar o banco de dados)
- **Git** (para clonar o repositório)

---

## 🛠️ Como Instalar e Rodar o Projeto

Siga o passo a passo abaixo para rodar a aplicação localmente:

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/unifecaf-flix.git
cd unifecaf-flix
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configuração do Banco de Dados
Acesse o seu servidor MySQL e execute o script `database.sql` incluído no projeto para criar o banco de dados e popular com as informações iniciais:
```bash
# Você pode importar o arquivo SQL via terminal ou usar clientes como MySQL Workbench / DBeaver
mysql -u root -p < database.sql
```

### 4. Configuração das Variáveis de Ambiente
Crie um arquivo chamado `.env` na raiz do projeto ou edite o existente com as suas credenciais de acesso ao banco de dados:
```env
PORT=3306
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=unifecaf_flix
```
*(Lembre-se de alterar a senha para a que você utiliza localmente no MySQL!)*

### 5. Iniciando o Servidor
Para rodar a API em modo de desenvolvimento (com Nodemon):
```bash
npm run dev
```
Para rodar a API em modo de produção:
```bash
npm start
```
Se tudo der certo, você verá uma mensagem no console:  
`🚀 Servidor UniFECAF Flix rodando na porta 3306`

---

## 📡 Endpoints da API

A URL base da API é: `http://localhost:3306/v1/controle-filmes`

### 🎥 Listar todos os filmes
Retorna a lista completa de filmes cadastrados.
- **Método:** `GET`
- **Rota:** `/filme`
- **Exemplo de Resposta (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nome": "Hackers: Piratas de Computadores",
      "sinopse": "Um grupo de jovens hackers descobre...",
      "ano_lancamento": 1995,
      "diretor": "Iain Softley"
    }
  ]
}
```

### 🔍 Buscar filme por ID
Retorna as informações de um filme específico buscando pelo seu identificador único.
- **Método:** `GET`
- **Rota:** `/filme/:id`
- **Exemplo de Resposta (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "nome": "Matrix",
    "sinopse": "Um programador descobre a verdadeira natureza da realidade.",
    "ano_lancamento": 1999,
    "diretor": "Lana Wachowski e Lilly Wachowski"
  }
}
```

### 🔎 Filtrar filmes (Nome ou Sinopse)
Realiza uma busca nos filmes cujos nomes ou sinopses correspondam ao termo pesquisado.
- **Método:** `GET`
- **Rota:** `/filtro/filme`
- **Parâmetro (Query):** `?nome=termo`
- **Exemplo de Requisição:** `GET /v1/controle-filmes/filtro/filme?nome=matrix`
- **Exemplo de Resposta (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": 3,
      "nome": "Matrix",
      "sinopse": "Um programador descobre a verdadeira natureza da realidade.",
      ...
    }
  ]
}
```

---

## 📂 Estrutura do Projeto

```text
unifecaf-flix/
│
├── src/
│   ├── config/           # 🔌 Configurações de banco de dados
│   ├── controllers/      # 🧠 Regras de negócio e envio das respostas (Controller)
│   ├── models/           # 🗄️ Acesso aos dados e queries SQL (Model)
│   ├── routes/           # 🛣️ Mapeamento de rotas e endpoints
│   └── server.js         # 🚀 Entrypoint: inicialização do Express
│
├── .env                  # 🔐 Variáveis de ambiente (não deve ser commitado)
├── database.sql          # 💾 Script de criação das tabelas e carga inicial
├── package.json          # 📦 Dependências e scripts do Node
└── DOCUMENTACAO.md       # 📄 Documentação técnica adicional
```

---

Feito com 🩵 e JavaScript. Divirta-se! 🍿🎬
