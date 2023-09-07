const contestModel = require('../models/contest.model');
const testcaseModel = require('../models/testcase.model');

exports.getAllContests = async () => {
    try {
        const contests = await contestModel.getAllContests();
        return contests;
    } catch (error) {
        throw error;
    }
}

exports.getPastContests = async () => {
    try {
        const contests = await contestModel.getPastContests();
        return contests;
    } catch (error) {
        throw error;
    }
}

exports.getUpcomingContests = async () => {
    try {
        const contests = await contestModel.getUpcomingContests();
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

exports.deleteContest = async (id) => {
    try {
        const result = await contestModel.deleteContest(id);
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

exports.getContestProblemById = async (id, problemid) => {
    try{
        const problem = await contestModel.getContestProblemById(id, problemid);
        return problem;
    } catch (error) {
        throw error;
    }
}

exports.getContestProblemByCategory = async (id, category) => {
    try {
        const problem = await contestModel.getContestProblemByCategory(id, category);
        return problem;
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

exports.getContestSubmissionsByProblemId = async (id, problemid) => {
    try {
        const submission = await contestModel.getContestSubmissionsByProblemId(id, problemid);
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

exports.updateContestProblemSubmission = async (submissionid, verdict, details) => {
    try {
        const result = await contestModel.updateContestProblemSubmission(submissionid, verdict, details);
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
            const temp = { 'userid': uid, 'username' : user_scores[0].username }
            const categories = ['A', 'B', 'C', 'D', 'E']
            categories.forEach(c => {
                temp[c] = 0;
            })
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


exports.getContestProblemTestCases = async (problemid) => {
    try {
        const testcases = await testcaseModel.getAllProblemTestCases(problemid);
        return testcases;
    } catch (error) {
        throw error;
    }
}

exports.addContestProblemTestCase = async (problemid, testcase) => {
    try {
        const result = await testcaseModel.addProblemTestCase(problemid, testcase);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.getContestProblemTestCaseById = async (testcaseid) => {
    try {
        const testcase = await testcaseModel.getProblemTestCaseById(testcaseid);
        return testcase;
    } catch (error) {
        throw error;
    }
}

exports.updateContestProblemTestCase = async (testcaseid, testcase) => {
    try {
        const result = await testcaseModel.updateProblemTestCase(testcaseid, testcase);
        return result;
    } catch (error) {
        throw error;
    }
}

exports.deleteContestProblemTestCase = async (testcaseid) => {
    try {
        const result = await testcaseModel.deleteProblemTestCase(testcaseid);
        return result;
    } catch (error) {
        throw error;
    }
}
