const service = require('../services/contest.service');
const codeCheckerService  = require('../services/code-checker.service');
const problemService = require('../services/problem.service');
const { validationResult } = require('express-validator');


exports.getContests = async (req, res) => {
    try {
        const contests = await service.getContests();
        res.status(200).json(contests);
    } catch (error) {
        res.status(500).json(error);
    }    
}

exports.getContestById = async (req, res) => {
    const result = validationResult(req);
    if(result.errors.length !== 0){
        return res.status(400).json({ errors: result.errors });
    }
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
        //first get the submission file path name from the request body
        //then download the file from the path and save it to a temp folder
        //then get all testcase files from the problem folder and save them to a temp folder
        //then run the code against the testcases and get the result
        //then delete the temp folder
        const submission = await service.addContestProblemSubmission(req.params.id, req.params.problemid, req.params.userid, req.body);
        const filename = req.body.submission_filename;
        const time_limit = await problemService.getTimeLimitByProblemId(req.params.problemid);
        codeCheckerService.cCodeRunner(`/contests/${req.params.id}/submissions/${req.params.userid}`,filename, req.params.problemid, time_limit*1000)
        .then((verdict) => {
            service.updateContestProblemSubmission(submission.submissionid, verdict);
        })
        .catch((err) => {
            console.log(err);
        });
        //now have to store the verdict in the database
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


