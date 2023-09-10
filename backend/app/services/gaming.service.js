const gamingModel = require('../models/gaming.model');

exports.getAllGame = async () => {
    try {
        const games = await gamingModel.getAllGame();
        return games;
    } catch (error) {
        throw error;
    }
}

exports.createGame = async (game) => {
    try {
        const newGame = await gamingModel.createGame(game);
        return newGame;
    } catch (error) {
        throw error;
    }
}

exports.getGameById = async (id) => {
    try {
        const game = await gamingModel.getGameById(id);
        return game;
    } catch (error) {
        throw error;
    }
}

exports.updateGame = async (id, game) => {
    try {
        const updatedGame = await gamingModel.updateGame(id, game);
        return updatedGame;
    } catch (error) {
        throw error;
    }
}

exports.deleteGame = async (id) => {
    try {
        const game = await gamingModel.deleteGame(id);
        return game;
    } catch (error) {
        throw error;
    }
}