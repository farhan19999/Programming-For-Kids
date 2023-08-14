const contestModel = require('../models/contest.model');

exports.getContests = async () => {
    try {
        const contests = await contestModel.getAllContests();
        return contests;
    } catch (error) {
        throw error;
    }    
}

exports.getContestById = async (id) => {
    try {
        //getContestById doesn't import from contest.model.js
        const contest = await contestModel.getContestById(id);
        return contest;
    } catch (error) {
        throw error;
    }
}


exports.createContest = async (contest) => {
    try {
        const result = await contestModel.createContest(contest);
        return result;
    } catch (error) {
        throw error;
    }    
}

exports.updateContest = async (id, contest) => {
    try {
        const result = await contestModel.updateContest(id, contest);
        return result;
    } catch (error) {
        throw error;
    }    
}

exports.getContestProblems = async (id) => {
    try {
        const problems = await contestModel.getContestProblems(id);
        return problems;
    } catch (error) {
        throw error;
    }
}

exports.addContestProblem = async (id, problem) => {
    try {
        const result = await contestModel.addContestProblem(id, problem);
        return result;
    } catch (error) {
        throw error;
    }
}


exports.updateContestProblem = async (id, problemid, problem) => {
    try {
        const result = await contestModel.updateContestProblem(id, problemid, problem);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.deleteContestProblem = async (id, problemid) => {
    try {
        const result = await contestModel.deleteContestProblem(id, problemid);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getAllContestSubmissions = async (id) => {
    try {
        const submissions = await contestModel.getAllContestSubmissions(id);
        return submissions;
    } catch (error) {
        throw error;
    }
}

exports.getContestSubmissionByProblemId = async (id, problemid) => {
    try {
        const submission = await contestModel.getContestSubmissionByProblemId(id, problemid);
        return submission;
    } catch (error) {
        throw error;
    }
}

exports.getContestSubmissionByUserId = async (id, userid) => {
    try {
        const submission = await contestModel.getContestSubmissionByUserId(id, userid);
        return submission;
    } catch (error) {
        throw error;
    }
}

exports.addContestProblemSubmission = async (id, problemid, submission) => {
    try {
        const result = await contestModel.addContestProblemSubmission(id, problemid, submission);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getContestStanding = async (id) => {
    try {
        const standing = await contestModel.getContestStanding(id);
        const submission_list = standing.standings;
        //TODO: #2 create standings
        return standing;
    } catch (error) {
        throw error;
    }
}


