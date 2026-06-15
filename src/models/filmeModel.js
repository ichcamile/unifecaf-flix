const db = require('../config/db');

const FilmeModel = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM filmes');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM filmes WHERE id = ?', [id]);
        return rows[0];
    },

    search: async (termo) => {
        const query = 'SELECT * FROM filmes WHERE nome LIKE ? OR sinopse LIKE ?';
        const searchPattern = `%${termo}%`;
        const [rows] = await db.query(query, [searchPattern, searchPattern]);
        return rows;
    }
};

module.exports = FilmeModel;