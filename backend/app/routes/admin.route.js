const router = require('express').Router();
const adminController = require('../controllers/admin.controller');

router.get('/:id', adminController.getAdminByid);

module.exports = router;