const authservice = require('../services/auth.service');
const { checkSchema} = require('express-validator');

exports.login = async (req, res) => {
    const result = await checkSchema({
        email: { isEmail: true },
        pasword: { isLength: { options: { min: 8 } } },
    }).run(req);

    if (!result.length === 0) {
        return res.status(400).json({ errors: result.array() });
    }
    try {
        const user = await authservice.login(req.body.email_address, req.body.password);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.adminLogin = async (req, res) => {
    const result = await checkSchema({
        email: { isEmail: true },
        pasword: { isLength: { options: { min: 8 } } },
    }).run(req);

    if (!result.length === 0) {
        return res.status(400).json({ errors: result.array() });
    }
    try {
        const user = await authservice.adminLogin(req.body.email_address, req.body.password);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}