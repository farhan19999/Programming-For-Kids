const contest = require('../models/contest.model');

exports.getContests = async () => {
    try {
        const contests = await contest.getAllContests();
        return contests;
    } catch (error) {
        throw error;
    }    
}

exports.getContestById = async (id) => {
    try {
        const contest = await contest.getContestById(id);
        return contest;
    } catch (error) {
        throw error;
    }
}


exports.createContest = async (contest) => {
    try {
        const result = await contest.createContest(contest);
        return result;
    } catch (error) {
        throw error;
    }    
}

exports.updateContest = async (id, contest) => {
    try {
        const result = await contest.updateContest(id, contest);
        return result;
    } catch (error) {
        throw error;
    }    
}

exports.getContestProblems = async (id) => {
    try {
        const problems = await contest.getContestProblems(id);
        return problems;
    } catch (error) {
        throw error;
    }
}

exports.addContestProblem = async (id, problem) => {
    try {
        const result = await contest.addContestProblem(id, problem);
        return result;
    } catch (error) {
        throw error;
    }
}


exports.updateContestProblem = async (id, problemid, problem) => {
    try {
        const result = await contest.updateContestProblem(id, problemid, problem);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.deleteContestProblem = async (id, problemid) => {
    try {
        const result = await contest.deleteContestProblem(id, problemid);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getAllContestSubmissions = async (id) => {
    try {
        const submissions = await contest.getAllContestSubmissions(id);
        return submissions;
    } catch (error) {
        throw error;
    }
}

exports.getContestSubmissionByProblemId = async (id, problemid) => {
    try {
        const submission = await contest.getContestSubmissionByProblemId(id, problemid);
        return submission;
    } catch (error) {
        throw error;
    }
}

exports.getContestSubmissionByUserId = async (id, userid) => {
    try {
        const submission = await contest.getContestSubmissionByUserId(id, userid);
        return submission;
    } catch (error) {
        throw error;
    }
}

exports.addContestProblemSubmission = async (id, problemid, submission) => {
    try {
        const result = await contest.addContestProblemSubmission(id, problemid, submission);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getContestStanding = async (id) => {
    try {
        const standing = await contest.getContestStanding(id);
        const submission_list = standing.standings;
        //TODO: create standings
        return standing;
    } catch (error) {
        throw error;
    }
}


