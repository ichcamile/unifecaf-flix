const FilmeModel = require('../models/filmeModel');

const FilmeController = {
    listarFilmes: async (req, res) => {
        try {
            const filmes = await FilmeModel.getAll();
            return res.status(200).json({
                success: true,
                data: filmes
            });
        } catch (error) {
            console.error('Erro ao listar filmes:', error);
            return res.status(500).json({
                success: false,
                message: 'Erro interno no servidor ao buscar os filmes.'
            });
        }
    },

    buscarFilmePorId: async (req, res) => {
        try {
            const { id } = req.params;
            const filme = await FilmeModel.getById(id);

            if (!filme) {
                return res.status(404).json({
                    success: false,
                    message: 'Filme não encontrado.'
                });
            }

            return res.status(200).json({
                success: true,
                data: filme
            });
        } catch (error) {
            console.error('Erro ao buscar filme por ID:', error);
            return res.status(500).json({
                success: false,
                message: 'Erro interno no servidor ao buscar o filme.'
            });
        }
    },

    filtrarFilmes: async (req, res) => {
        try {
            const { nome } = req.query;

            if (!nome) {
                return res.status(400).json({
                    success: false,
                    message: 'O parâmetro de busca "nome" é obrigatório. Exemplo: ?nome=matrix'
                });
            }

            const filmes = await FilmeModel.search(nome);

            return res.status(200).json({
                success: true,
                data: filmes
            });
        } catch (error) {
            console.error('Erro ao filtrar filmes:', error);
            return res.status(500).json({
                success: false,
                message: 'Erro interno no servidor ao filtrar os filmes.'
            });
        }
    }
};

module.exports = FilmeController;