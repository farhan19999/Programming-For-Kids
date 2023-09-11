const adminModel = require('../models/admin.model');


exports.getAdminByid = async (id) => {
    try {
        const admin = await adminModel.findAdminById(id);
        return admin;
    } catch (err) {
        throw err;
    }
}