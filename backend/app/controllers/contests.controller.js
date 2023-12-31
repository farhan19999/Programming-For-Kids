const service = require('../services/contest.service');
const codeCheckerService  = require('../services/code-checker.service');
const problemService = require('../services/problem.service');
const { validationResult } = require('express-validator');


exports.getContests = async (req, res) => {
    try {
        let contests;
        if(!req.query.time){
            contests = await service.getAllContests();
        }
        else if(req.query.time === 'past'){
            contests = await service.getPastContests();
        }
        else if(req.query.time === 'upcoming'){
            contests = await service.getUpcomingContests();
        }
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

exports.deleteContest = async (req, res) => {
    try {
        const contest = await service.deleteContest(req.params.id);
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

exports.getContestProblemByCategory = async (req, res) => {
    try {
        const problem = await service.getContestProblemByCategory(req.params.id, req.params.category);
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
        const filename = req.body.submission_filename;
        const time_limit = await problemService.getTimeLimitByProblemId(req.params.problemid);
        codeCheckerService.cCodeRunner(`/contests/${req.params.id}/submissions/${req.params.userid}`,filename, req.params.problemid, time_limit*1000)
        .then((result) => {
            service.updateContestProblemSubmission(submission.submissionid, result.verdict, result.details);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
        //now have to store the verdict in the database
        console.log(submission);
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


exports.getContestProblemTestCases = async (req, res) => {
    try {
        const testcases = await service.getContestProblemTestCases(req.params.problemid);
        res.status(200).json(testcases);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.addContestProblemTestCase = async (req, res) => {
    try {
        const testcase = await service.addContestProblemTestCase(req.params.problemid, req.body);
        res.status(200).json(testcase);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getContestProblemTestCaseById = async (req, res) => {
    try {
        const testcase = await service.getContestProblemTestCaseById(req.params.testcaseid);
        res.status(200).json(testcase);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateContestProblemTestCase = async (req, res) => {
    try {
        const testcase = await service.updateContestProblemTestCase(req.params.testcaseid, req.body);
        res.status(200).json(testcase);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteContestProblemTestCase = async (req, res) => {
    try {
        const testcase = await service.deleteContestProblemTestCase(req.params.testcaseid);
        res.status(200).json(testcase);
    } catch (error) {
        res.status(500).json(error);
    }
}


