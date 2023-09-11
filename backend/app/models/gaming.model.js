const {pool} = require("../config/db.config");


exports.getAllGame = async () => {
    try {
        const games = await pool.query('SELECT * FROM pfk.codegaming');
        return games.rows;
    } catch (error) {
        throw error;
    }
}

exports.createGame = async (game) => {
    try {
        const maxId = await pool.query('SELECT MAX(codegameid) FROM pfk.codegaming');
        const newGame = await pool.query('INSERT INTO codegaming (codegameid, title, problem, sample_input, sample_output, game_script ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [maxId.rows[0].max + 1, game.title, game.problem, game.sample_input, game.sample_output, game.game_script]);
        return newGame.rows[0];
    } catch (error) {
        throw error;
    }
}


exports.getGameById = async (id) => {
    try {
        const game = await pool.query('SELECT * FROM pfk.codegaming WHERE codegameid = $1', [id]);
        return game.rows[0];
    } catch (error) {
        throw error;
    }
}

exports.updateGame = async (id, game) => {
    try {
        const updatedGame = await pool.query('UPDATE pfk.codegaming SET title = $1, problem = $2, sample_input = $3, sample_output = $4, game_script = $5 WHERE codegameid = $6 RETURNING *', [game.title, game.problem, game.sample_input, game.sample_output, game.game_script, id]);
        return updatedGame.rows[0];
    } catch (error) {
        throw error;
    }
}

exports.deleteGame = async (id) => {
    try {
        const game = await pool.query('DELETE FROM pfk.codegaming WHERE codegameid = $1 RETURNING *', [id]);
        return game.rows[0];
    } catch (error) {
        throw error;
    }
}



