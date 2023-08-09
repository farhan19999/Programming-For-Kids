const problemService = require('../services/problem.service');

exports.getAllProblems = async (req, res) => {
    try {
        const problems = await problemService.getAllProblems();
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



