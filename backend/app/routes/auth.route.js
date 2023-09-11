const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.post('/admin/login', authController.adminLogin);

module.exports = router;