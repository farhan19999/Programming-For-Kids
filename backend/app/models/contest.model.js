//const pool = require('../config/db.config')
const pg = require('pg')
const pool = new pg.Pool({
    host: 'john.db.elephantsql.com',
    user: 'tdkvooil',
    password : 'vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG',
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

const getAllContests = async () => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.contest')
        client.release()
        return {'contests':result.rows}
    } catch (error) {
        console.log(error)
    }
}

const getContestById = async (id) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.contest WHERE contestid = $1', [id])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}


const createContest = async (contest) => {
    try {
        const client = await pool.connect()
        const maxContestId = await client.query('SELECT MAX(contestid) FROM pfk.contest')
        const result = await client.query('INSERT INTO pfk.contest (contestid, title, div, start_time, duration)VALUES ($1, $2, $3, $4, $5) RETURNING *', [maxContestId.rows[0].max + 1, contest.title, contest.div, contest.start_time, contest.duration])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const updateContest = async (id, contest) => {
    try {
        const client = await pool.connect()
        const result = await client.query('UPDATE pfk.contest SET title = $1, div = $2, start_time = $3, duration = $4 WHERE contestid = $5 RETURNING *', [contest.title, contest.div, contest.start_time, contest.duration, id])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getContestProblems = async (id) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.problem WHERE contestid = $1', [id])
        client.release()
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const addContestProblem = async (id, problem) => {
    try {
        const client = await pool.connect()
        const maxProblemId = await client.query('SELECT MAX(problemid) FROM pfk.problem')
        const result = await client.query(
            'INSERT INTO pfk.problem (problemid, contestid, title, difficulty_level,  problem_statement, topic, sample_input, sample_output, time_limit)VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', 
                                    [maxProblemId.rows[0].max + 1, id, problem.title, problem.difficulty_level, problem.problem_statement, problem.topic, problem.sample_input, problem.sample_output, problem.time_limit])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const updateContestProblem = async (id, problemid, problem) => {
    try {
        const client = await pool.connect()
        const result = await client.query('UPDATE pfk.problem SET title = $1, difficulty_level = $2, problem_statement = $3, topic = $4, sample_input = $5, sample_output = $6, time_limit = $7 WHERE contestid = $8 AND problemid = $9 RETURNING *', 
                                    [problem.title, problem.difficulty_level, problem.problem_statement, problem.topic, problem.sample_input, problem.sample_output, problem.time_limit, id, problemid])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}


const deleteContestProblem = async (id, problemid) => {
    try {
        const client = await pool.connect()
        const result = await client.query('DELETE FROM pfk.problem WHERE contestid = $1 AND problemid = $2 RETURNING *', [id, problemid])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}


const getAllContestSubmissions = async (id) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.contest_submission WHERE contestid = $1', [id])
        client.release()
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const getContestSubmissionByProblemId = async (id, problemid) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.contest_submission WHERE contestid = $1 AND problemid = $2', [id, problemid])
        client.release()
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const getContestSubmissionByUserId = async (id, userid) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.contest_submission WHERE contestid = $1 AND userid = $2', [id, userid])
        client.release()
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const addContestProblemSubmission = async (id, problemid, submission) => {
    try {
        const client = await pool.connect()
        const maxSubmissionId = await client.query('SELECT MAX(submissionid) FROM pfk.contest_submission')
        const result = await client.query('INSERT INTO pfk.contest_submission (submissionid, contestid, problemid, userid, submitted_time, language, code)VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                                    [maxSubmissionId.rows[0].max + 1, id, problemid, submission.userid, submission.submission_time, submission.language, submission.code])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}


const getContestStanding = async (id) => {
    try {
        const client = await pool.connect()
        const result = await client.query("SELECT u.username, cs.problemid ,cs.score from pfk.users as u inner join pfk.contest_submission as cs on u.userid = cs.userid where cs.contestid = $1", [id])
        client.release()
        console.log(result.rows)
        return {'standings':result.rows}
    } catch (error) {
        console.log(error)
    }

}


module.exports = {getAllContests, getContestById, createContest, updateContest, getContestProblems, addContestProblem, updateContestProblem, deleteContestProblem, getAllContestSubmissions, getContestSubmissionByProblemId, getContestSubmissionByUserId, addContestProblemSubmission, getContestStanding}