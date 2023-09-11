const gamingService = require('../services/gaming.service');

exports.getAllGame = async (req, res) => {
    try {
        const games = await gamingService.getAllGame();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createGame = async (req, res) => {
    try {
        const game = await gamingService.createGame(req.body);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getGameById = async (req, res) => {
    try {
        const game = await gamingService.getGameById(req.params.id);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateGame = async (req, res) => {
    try {
        const game = await gamingService.updateGame(req.params.id, req.body);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteGame = async (req, res) => {
    try {
        const game = await gamingService.deleteGame(req.params.id);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json(error);
    }
}