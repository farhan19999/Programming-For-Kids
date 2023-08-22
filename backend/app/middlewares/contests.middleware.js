const contestController = require('../controllers/contests.controller')

exports.getContestSubmissionByProblemId = async (req, res, next) => {
    if(!req.params.problemid) return next();
    try {
        const submissions = await contestController.getContestSubmissionsByProblemId(req.params.contestid, req.params.problemid);
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getContestSubmissionByUserId = async (req, res, next) => {
    if(!req.params.userid) return next();
    try {
        const submissions = await contestController.getContestSubmissionByUserId(req.params.contestid, req.params.userid);
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json(error);
    }
}