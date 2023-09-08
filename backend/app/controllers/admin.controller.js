const adminService = require('../services/admin.service');

exports.getAdminByid = async (req, res) => {
    try {
        const admin = await adminService.getAdminByid(req.params.id);
        res.status(200).json(admin);
    } catch (err) {
        res.status(500).json(err);
    }
};