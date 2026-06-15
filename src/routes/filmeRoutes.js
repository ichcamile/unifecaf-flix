const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

// Rota para listar todos os filmes
router.get('/filme', filmeController.listarFilmes);

// Rota para filtrar filmes por nome ou sinopse
// NOTA: Declarada antes de /filme/:id para evitar conflito de rotas
router.get('/filtro/filme', filmeController.filtrarFilmes);

// Rota para buscar um filme pelo ID
router.get('/filme/:id', filmeController.buscarFilmePorId);

module.exports = router;