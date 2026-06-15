require('dotenv').config();
const express = require('express');
const cors = require('cors');
const filmeRoutes = require('./routes/filmeRoutes');

const app = express();
const PORT = process.env.PORT || 3306;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/v1/controle-filmes', filmeRoutes);

// Tratamento de rota não encontrada
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Rota não encontrada.' });
});

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor UniFECAF Flix rodando na porta ${PORT}`);
    console.log(`\nEndpoints Disponíveis:`);
    console.log(`- GET http://localhost:${PORT}/v1/controle-filmes/filme`);
    console.log(`- GET http://localhost:${PORT}/v1/controle-filmes/filme/1`);
    console.log(`- GET http://localhost:${PORT}/v1/controle-filmes/filtro/filme?nome=matrix`);
});