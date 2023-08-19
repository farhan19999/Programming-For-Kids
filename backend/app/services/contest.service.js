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

exports.addContestProblemSubmission = async (id, problemid, userid, submission) => {
    try {
        const result = await contestModel.addContestProblemSubmission(id, problemid, userid, submission);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getContestStanding = async (id) => {
    try {
        const scores = await contestModel.getContestScores(id);
        //TODO: #2 create standings
        const standing = []
        const user_list = new Set();
        scores.forEach(s => {
            user_list.add(s.userid)
        });

        user_list.forEach(uid => {
            const user_scores = scores.filter((s) => s.userid === uid)
            const temp = { 'userid': uid }
            user_scores.forEach(s => {
                temp[s.category] = s.score
            })
            standing.push(temp)
        })

        standing.sort((a, b) => {
            let a_score = 0;
            for (const prop in a) {
                if (prop !== 'userid') {
                    a_score += a[prop]
                }
            }
            let b_score = 0;
            for (const prop in a) {
                if (prop !== 'userid') {
                    b_score += b[prop]
                }
            }

            if (a_score === b_score) return 0
            else if (a_score > b_score) return -1
            else return 1
        })

        return standing;
    } catch (error) {
        throw error;
    }
}


