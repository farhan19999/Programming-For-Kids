const router = require('express').Router()
const problemsController = require('../controllers/problems.controller')

router.get('/', problemsController.getAllProblems);
router.get('/:id', problemsController.getProblemById);


module.exports = router;