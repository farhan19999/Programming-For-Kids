const authservice = require('../services/auth.service');

exports.login = async (req, res) => {
    try {
        const user = await authservice.login(req.body.email_address, req.body.password);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}