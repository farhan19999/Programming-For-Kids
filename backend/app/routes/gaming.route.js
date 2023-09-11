const router = require('express').Router();
const gamingController = require('../controllers/gaming.controller.js');
router.get('/', gamingController.getAllGame);
router.post('/', gamingController.createGame);
router.get('/:id', gamingController.getGameById);
router.put('/:id', gamingController.updateGame);
router.delete('/:id', gamingController.deleteGame);
module.exports = router;