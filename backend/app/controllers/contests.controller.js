const service = require('../services/contest.service');

exports.getContests = async (req, res) => {
    try {
        const contests = await service.getContests();
        res.status(200).json(contests);
    } catch (error) {
        res.status(500).json(error);
    }    
}

exports.getContestById = async (req, res) => {
    try {
        const contest = await service.getContestById(req.params.id);
        res.status(200).json(contest);
    } catch (error) {
        res.status(500).json(error);
    }    
}

exports.createContest = async (req, res) => {
    try {
        const contest = await service.createContest(req.body);
        res.status(200).json(contest);
    } catch (error) {
        res.status(500).json(error);
    }    
}

exports.updateContest = async (req, res) => {
    try {
        const contest = await service.updateContest(req.params.id, req.body);
        res.status(200).json(contest);
    } catch (error) {
        res.status(500).json(error);
    }    
}

exports.getContestProblems = async (req, res) => {
    try {
        const problems = await service.getContestProblems(req.params.id);
        res.status(200).json(problems);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.addContestProblem = async (req, res) => {
    try {
        const problem = await service.addContestProblem(req.params.id, req.body);
        res.status(200).json(problem);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getContestProblemById = async (req, res) => {
    try {
        const problem = await service.getContestProblemById(req.params.id, req.params.problemid);
        res.status(200).json(problem);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateContestProblem = async (req, res) => {
    try {
        const problem = await service.updateContestProblem(req.params.id, req.params.problemid, req.body);
        res.status(200).json(problem);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteContestProblem = async (req, res) => {
    try {
        const problem = await service.deleteContestProblem(req.params.id, req.params.problemid);
        res.status(200).json(problem);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getAllContestSubmissions = async (req, res) => {
    try {
        const submissions = await service.getAllContestSubmissions(req.params.id);
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getContestSubmissionsByProblemId = async (req, res) => {
    try {
        const submissions = await service.getContestSubmissionsByProblemId(req.params.id, req.params.problemid);
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getContestSubmissionByUserId = async (req, res) => {
    try {
        const submission = await service.getContestSubmissionByUserId(req.params.id, req.params.userid);
        res.status(200).json(submission);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.addContestProblemSubmission = async (req, res) => {
    try {
        const submission = await service.addContestProblemSubmission(req.params.id, req.params.problemid, req.params.userid, req.body);
        res.status(200).json(submission);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getContestStanding = async (req, res) => {
    try {
        const standing = await service.getContestStanding(req.params.id);
        res.status(200).json(standing);
    } catch (error) {
        res.status(500).json(error);
    }
}


