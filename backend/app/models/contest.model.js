//const {pool_config} = require('../config/db.config')
//const pg = require('pg')
//const pool = new pg.Pool(pool_config)

const {pool} = require('../config/db.config')

const getAllContests = async () => {
    try {
        const result = await pool.query('SELECT * FROM pfk.contest')
        return {'contests':result.rows}
    } catch (error) {
        console.log(error)
    }
};

const getPastContests = async () => {
    try {
        const result = await pool.query('SELECT * FROM pfk.contest WHERE start_time < now()')
        return {'contests':result.rows}
    } catch (error) {
        console.log(error)
    }
}

const getUpcomingContests = async () => {
    try {
        const result = await pool.query('SELECT * FROM pfk.contest WHERE start_time > now()')
        return {'contests':result.rows}
    } catch (error) {
        console.log(error)
    }
}

const getContestById = async (id) =>{
    try {
        const result = await pool.query('SELECT * FROM pfk.contest WHERE contestid = $1', [id]);
        return result.rows[0];
    } catch (error) {
        console.log(error)
    }
};




const createContest = async (contest) => {
    try {
        const maxContestId = await pool.query('SELECT MAX(contestid) FROM pfk.contest')
        const result = await pool.query('INSERT INTO pfk.contest (contestid, title, div, start_time, duration)VALUES ($1, $2, $3, $4, $5) RETURNING *', [maxContestId.rows[0].max + 1, contest.title, contest.div, contest.start_time, contest.duration])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const updateContest = async (id, contest) => {
    try {
        const result = await pool.query('UPDATE pfk.contest SET title = $1, div = $2, start_time = $3, duration = $4 WHERE contestid = $5 RETURNING *', [contest.title, contest.div, contest.start_time, contest.duration, id])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const deleteContest = async (id) => {
    try {
        const result = await pool.query('DELETE FROM pfk.contest WHERE contestid = $1 RETURNING *', [id])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getContestProblems = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.problem WHERE contestid = $1', [id])
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const addContestProblem = async (id, problem) => {
    try {
        const maxProblemId = await pool.query('SELECT MAX(problemid) FROM pfk.problem')
        const result = await pool.query(
            'INSERT INTO pfk.problem (problemid, contestid, title, difficulty_level,  problem_statement, topic, sample_input, sample_output, time_limit, category ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',  
                                        [maxProblemId.rows[0].max + 1, id, problem.title, problem.difficulty_level, problem.problem_statement, problem.topic, problem.sample_input, problem.sample_output, problem.time_limit, problem.category])   
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}


const updateContestProblem = async (id, problemid, problem) => {
    try {
        const result = await pool.query('UPDATE pfk.problem SET title = $1, difficulty_level = $2, problem_statement = $3, topic = $4, sample_input = $5, sample_output = $6, time_limit = $7 WHERE contestid = $8 AND problemid = $9 RETURNING *', 
                                    [problem.title, problem.difficulty_level, problem.problem_statement, problem.topic, problem.sample_input, problem.sample_output, problem.time_limit, id, problemid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getContestProblemById = async (id, problemid) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.problem WHERE contestid = $1 AND problemid = $2', [id, problemid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getContestProblemByCategory = async (id, category) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.problem WHERE contestid = $1 AND category = $2', [id, category])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const deleteContestProblem = async (id, problemid) => {
    try {
        const result = await pool.query('DELETE FROM pfk.problem WHERE contestid = $1 AND problemid = $2 RETURNING *', [id, problemid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}


const getAllContestSubmissions = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.contest_submission WHERE contestid = $1', [id])
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const getContestSubmissionsByProblemId = async (id, problemid) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.contest_submission WHERE contestid = $1 AND problemid = $2', [id, problemid])
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const getContestSubmissionByUserId = async (id, userid) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.contest_submission as cs inner join pfk.problem as p on (cs.problemid = p.problemid)  WHERE cs.contestid = $1 AND cs.userid = $2', [id, userid])
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const addContestProblemSubmission = async (id, problemid, userid, submission) => {
    try {
        const maxSubmissionId = await pool.query('SELECT MAX(submissionid) FROM pfk.contest_submission')
        const result = await pool.query('INSERT INTO pfk.contest_submission (submissionid, contestid, problemid, userid, submitted_time, language, submitted_code, submission_filename )VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', 
                                    [maxSubmissionId.rows[0].max + 1, id, problemid, userid, submission.submitted_time, submission.language, submission.submitted_code, submission.submission_filename])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}


const getContestScores = async (id) => {
    try {
        const result = await pool.query("select u.userid, u.username, prob.category ,max(cs.score) as score \
                                           from pfk.users as u inner join pfk.contest_submission as cs on u.userid = cs.userid inner join pfk.problem as prob on cs.problemid = prob.problemid \
                                           where cs.contestid = $1 \
                                           Group by u.userid, u.username, prob.category", [id])
        //console.log(result.rows)
        return result.rows
    } catch (error) {
        console.log(error)
    }

}

const updateContestProblemSubmission = async (submissionid, status) => {
    let score = 0;
    if(status === 'Accepted'){
        score = 100;
    }
    try {
        const result = await pool.query('UPDATE pfk.contest_submission SET status = $1, score = $2 WHERE submissionid = $3 RETURNING *', 
                                    [status, score, submissionid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getAllContests, getPastContests, getUpcomingContests ,getContestById, createContest, updateContest, deleteContest, getContestProblems, addContestProblem, updateContestProblem, deleteContestProblem, getAllContestSubmissions, getContestSubmissionsByProblemId, getContestSubmissionByUserId, addContestProblemSubmission, getContestScores, getContestProblemById, getContestProblemByCategory, updateContestProblemSubmission};