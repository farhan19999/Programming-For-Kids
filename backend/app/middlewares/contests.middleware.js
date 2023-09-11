const contestController = require('../controllers/contests.controller')

exports.getContestSubmissionByProblemId = async (req, res, next) => {
    if(!req.query.problemid) return next();
    try {
        const submissions = await contestController.getContestSubmissionsByProblemId(req, res);
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getContestSubmissionByUserId = async (req, res, next) => {
    if(!req.query.userid) return next();
    try {
        console.log(req)
        const submissions = await contestController.getContestSubmissionByUserId(req, res);
        console.log(submissions)
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json(error);
    }
}