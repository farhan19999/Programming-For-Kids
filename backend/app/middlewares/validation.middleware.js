const {validationResult} = require('express-validator');

exports.validate = (req, res, next) => {
    const result = validationResult(req);
    if(result.errors.length !== 0){
        return res.status(400).json({ errors: result.errors });
    }
    next();
}