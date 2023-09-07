const problemModel = require('../models/problem.model');
const testcaseModel = require('../models/testcase.model');

exports.getAllProblems = async () => {
    try {
        const problems = await problemModel.getAllProblems();
        return problems;
    } catch (error) {
        throw error;
    }    
}

exports.getProblemById = async (id) => {
    try {
        const problem = await problemModel.getProblemById(id);
        return problem;
    } catch (error) {
        throw error;
    }
}

exports.createNewSubmission = async (id, submission) => {
    try {
        const result = await problemModel.createNewSubmission(id, submission);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getProblemSubmissionByUserId = async (id, userid) => {
    try {
        const submission = await problemModel.getProblemSubmissionByUserId(id, userid);
        return submission;
    } catch (error) {
        throw error;
    }
}

exports.updateProblemSubmission = async (id, verdict, details) => {
    try {
        const result = await problemModel.updateProblemSubmission(id, verdict, details);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getProblemDiscussion = async (id) => {
    try {
        const discussion = await problemModel.getProblemDiscussion(id);
        return discussion;
    } catch (error) {
        throw error;
    }
}

exports.createNewProblemDiscussion = async (id, discussion) => {
    try {
        const result = await problemModel.createNewProblemDiscussion(id, discussion);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.createReplyProblemDiscussion = async (id, commentid, discussion) => {
    try {
        const result = await problemModel.createReplyProblemDiscussion(id, commentid, discussion);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.deleteComment = async (id, commentid) => {
    try {
        const result = await problemModel.deleteComment(id, commentid);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getProblemSolution = async (id) => {
    try {
        const solution = await problemModel.getProblemSolution(id);
        return solution;
    } catch (error) {
        throw error;
    }
}

exports.createProblemSolution = async (id, solution) => {
    try {
        const result = await problemModel.createProblemSolution(id, solution);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.updateProblemSolution = async (id, solutionid, solution) => {    
    try {
        const result = await problemModel.updateProblemSolution(id, solutionid, solution);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getTimeLimitByProblemId = async (id) => {
    try {
        const result = await problemModel.getTimeLimitByProblemId(id);
        return result;
    } catch (error) {
        throw error;
    }
}


exports.getAllProblemTestCases = async (id) => {
    try {
        const result = await testcaseModel.getAllProblemTestCases(id);
        return result;
    } catch (error) {
        throw error;
    }
}


exports.addProblemTestCase = async (id, testcase) => {
    try {
        const result = await testcaseModel.addProblemTestCase(id, testcase);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getProblemTestCaseById = async (testcaseid) => {
    try {
        const result = await testcaseModel.getProblemTestCaseById(testcaseid);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.updateProblemTestCase = async (testcaseid, testcase) => {
    try {
        const result = await testcaseModel.updateProblemTestCase(testcaseid, testcase);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.deleteProblemTestCase = async (testcaseid) => {
    try {
        const result = await testcaseModel.deleteProblemTestCase(testcaseid);
        return result;
    } catch (error) {
        throw error;
    }
}

//TODO: add submission checking and status update