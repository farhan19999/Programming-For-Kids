const problemService = require('../services/problem.service');

exports.getAllProblems = async (req, res) => {
    try {
        let problems = null;
        if(req.query.practice === 'true') {
            
            problems = await problemService.getProblemsFromPastContests();
        }
        else problems = await problemService.getAllProblems();
        res.status(200).json(problems);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getProblemById = async (req, res) => {
    try {
        const problem = await problemService.getProblemById(req.params.id);
        res.status(200).json(problem);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createNewSubmission = async (req, res) => {
    try {
        const submission = await problemService.createNewSubmission(req.params.id, req.body);
        const filename = req.body.submission_file;
        const time_limit = await problemService.getTimeLimitByProblemId(req.params.id);
        codeCheckerService.cCodeRunner(`/practice/${req.params.id}/submissions/${req.params.userid}`,filename, req.params.id, time_limit*1000)
        .then((result) => {
            problemService.updateProblemSubmission(submission.ppsubmissionid, result.verdict, result.details);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
        //now have to store the verdict in the database
        res.status(200).json(submission);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getProblemSubmissionByUserId = async (req, res) => {
    try {
        const submission = await problemService.getProblemSubmissionByUserId(req.params.id, req.params.userid);
        res.status(200).json(submission);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getProblemDiscussion = async (req, res) => {
    try {
        const discussion = await problemService.getProblemDiscussion(req.params.id);
        res.status(200).json(discussion);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createNewProblemDiscussion = async (req, res) => {
    try {
        const discussion = await problemService.createNewProblemDiscussion(req.params.id, req.body);
        res.status(200).json(discussion);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createReplyProblemDiscussion = async (req, res) => {
    try {
        const discussion = await problemService.createReplyProblemDiscussion(req.params.id, req.params.commentid, req.body);
        res.status(200).json(discussion);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteComment = async (req, res) => {
    try {
        const discussion = await problemService.deleteComment(req.params.id, req.params.commentid);
        res.status(200).json(discussion);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getProblemSolution = async (req, res) => {
    try {
        const solution = await problemService.getProblemSolution(req.params.id);
        res.status(200).json(solution);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createproblemSolution = async (req, res) => {
    try {
        const solution = await problemService.createProblemSolution(req.params.id, req.body);
        res.status(200).json(solution);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateproblemSolution = async (req, res) => {
    try {
        const solution = await problemService.updateProblemSolution(req.params.id, req.params.solutionid, req.body);
        res.status(200).json(solution);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getAllProblemTestCases = async (req, res) => {
    try {
        const testcases = await problemService.getAllProblemTestCases(req.params.id);
        res.status(200).json(testcases);
    } catch (error) {
        res.status(500).json(error);
    }
}


exports.addProblemTestCase = async (req, res) => {
    try {
        const testcase = await problemService.addProblemTestCase(req.params.id, req.body);
        res.status(200).json(testcase);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getProblemTestCaseById = async (req, res) => {
    try {
        const testcase = await problemService.getProblemTestCaseById(req.params.testcaseid);
        res.status(200).json(testcase);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteProblemTestCase = async (req, res) => {
    try {
        const testcase = await problemService.deleteProblemTestCase(req.params.testcaseid);
        res.status(200).json(testcase);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateProblemTestCase = async (req, res) => {
    try {
        const testcase = await problemService.updateProblemTestCase(req.params.testcaseid, req.body);
        res.status(200).json(testcase);
    } catch (error) {
        res.status(500).json(error);
    }
}

