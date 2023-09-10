const {pool} = require('../config/db.config');

exports.findAdmin = async (email_address, password) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.admin WHERE email_address = $1 AND password = $2', [email_address, password])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

exports.findAdminById = async (adminid) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.admin WHERE adminid = $1', [adminid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}