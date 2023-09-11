const {pool} = require('../config/db.config')
//const pg = require('pg')
//const pool = new pg.Pool(pool_config)

const getAllProblems = async () => {
    try {
        const result = await pool.query('SELECT * FROM pfk.problem')
        return result.rows
    } catch (error) {
        console.log(error)
        throw error;
    }
}
const getProblemsFromPastContests = async () => {
    try {
        const result = await pool.query('SELECT * FROM pfk.problem WHERE contestid in (SELECT contestid  FROM pfk.contest WHERE start_time +  interval \'1 hour\'*duration  < now())')
        return result.rows
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const getProblemById = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.problem WHERE problemid = $1', [id])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const createNewSubmission = async (id, submission) => {
    try {
        const maxid = await pool.query('SELECT MAX(ppsubmissionid) FROM pfk.practice_problem_submission_history')
        const result = await pool.query('INSERT INTO pfk.practice_problem_submission_history (ppsubmissionid, problemid, userid, submitted_time, submitted_code, submission_file) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [maxid.rows[0].max + 1, id, submission.userid, submission.submitted_time, submission.submitted_code, submission.submission_file])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const getProblemSubmissionByUserId = async (id, userid) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.practice_problem_submission_history WHERE problemid = $1 AND userid = $2', [id, userid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const updateProblemSubmission = async (id, verdict, details) => {
    try {
        const result = await pool.query('UPDATE pfk.practice_problem_submission_history SET status = $1, details = $2 WHERE ppsubmissionid = $3 RETURNING *', [verdict, details, id])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const getProblemDiscussion = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.comment c inner join  pfk.users u on(c.userid=u.userid) WHERE problemid = $1', [id])
        return {'comments':result.rows}
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const createNewProblemDiscussion = async (id, discussion) => {
    try {
        const maxid = await pool.query('SELECT MAX(commentid) FROM pfk.comment')
        const result = await pool.query('INSERT INTO pfk.comment (commentid, problemid, userid, comment_text, comment_time) VALUES ($1, $2, $3, $4, $5) RETURNING *', [maxid.rows[0].max + 1, id, discussion.userid, discussion.comment_text, discussion.comment_time])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const  createReplyProblemDiscussion = async (id, commentid, discussion) => {
    try {
        const maxid = await pool.query('SELECT MAX(commentid) FROM pfk.comment')
        const result = await pool.query('INSERT INTO pfk.comment (commentid, problemid, userid, comment_text, parent_commentid ,comment_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [maxid.rows[0].max + 1, id, discussion.userid, discussion.comment_text, commentid, discussion.comment_time])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const deleteComment = async (commentid) => {
    try {
        const result = await pool.query('DELETE FROM pfk.comment WHERE commentid = $1', [commentid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const getProblemSolution = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.solution WHERE problemid = $1', [id])
        return {'solutions':result.rows}
    } catch (error) {
        console.log(error)
        throw error;
    }
}


const createProblemSolution = async (id, solution) => {
    try {
        const maxid = await pool.query('SELECT MAX(solutionid) FROM pfk.solution')
        const result = await pool.query('INSERT INTO pfk.solution (solutionid, problemid, description, video_link) VALUES ($1, $2, $3, $4) RETURNING *', [maxid.rows[0].max + 1, id, solution.description, solution.video_link])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const updateProblemSolution = async (id, solutionid, solution) => {    
    try {
        const result = await pool.query('UPDATE pfk.solution SET description = $1, video_link = $2 WHERE problemid = $3 AND solutionid = $4 RETURNING *', [solution.description, solution.video_link, id, solutionid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    } 
}
const deleteProblemSolution = async (id, solutionid) => {
    try {
        const result = await pool.query('DELETE FROM pfk.solution WHERE problemid = $1 AND solutionid = $2', [id, solutionid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getTestCasesByProblemId = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.testcases WHERE problemid = $1', [id])
        return result.rows
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const getTimeLimitByProblemId = async (id) => {
    try {
        const result = await pool.query('SELECT time_limit FROM pfk.problem WHERE problemid = $1', [id])
        return result.rows[0].time_limit
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports = { getAllProblems,
                   getProblemsFromPastContests,  
                   getProblemById,
                   createNewSubmission, 
                   getProblemSubmissionByUserId, 
                   updateProblemSubmission,
                   getProblemDiscussion, 
                   createNewProblemDiscussion, 
                   createReplyProblemDiscussion, 
                   deleteComment, 
                   getProblemSolution, 
                   createProblemSolution, 
                   updateProblemSolution,
                   deleteProblemSolution,
                   getTestCasesByProblemId,
                   getTimeLimitByProblemId 
                }
