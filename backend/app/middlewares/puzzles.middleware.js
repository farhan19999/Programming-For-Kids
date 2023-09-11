function isDateValid(date){
    return !isNaN(Date.parse(date, 'YYYY-MM-DD'));
}

exports.validateDate = (req, res, next) => {
    if(isDateValid(req.params.today)){
        next();
    }else{
        res.status(400).send('Invalid date format. Please use YYYY-MM-DD format')
    }
}

