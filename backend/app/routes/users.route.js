const controller = require('../controllers/users.controller')
const router = require('express').Router()

router.get('/', controller.getAllUsers)



module.exports = router