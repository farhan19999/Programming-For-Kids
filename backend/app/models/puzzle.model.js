const {pool} = require('../config/db.config')
// const pg = require('pg')
// const pool = new pg.Pool(pool_config)

const getAllPuzzles = async () => {
    try {
        const result = await pool.query('SELECT * FROM pfk.puzzle')
        return {'puzzles':result.rows}
    } catch (error) {
        console.log(error)
    }
}

const createPuzzle = async (puzzle) => {
    try {
        const maxPuzzleId = await pool.query('SELECT MAX(puzzleid) FROM pfk.puzzle')
        const result = await pool.query('INSERT INTO pfk.puzzle (puzzleid, date, problem, puzzle_code, solution) VALUES ($1, $2, $3, $4, $5) RETURNING *', [maxPuzzleId.rows[0].max + 1, puzzle.date, puzzle.problem, puzzle.puzzle_code, puzzle.solution])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getPuzzleById = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.puzzle WHERE puzzleid = $1', [id])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const updatePuzzle = async (id, puzzle) => {
    try {
        const result = await pool.query('UPDATE pfk.puzzle SET date = $1, problem = $2, puzzle_code = $3, solution = $4 WHERE puzzleid = $5 RETURNING *', [puzzle.date, puzzle.problem, puzzle.puzzle_code, puzzle.solution, id])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const deletePuzzle = async (id) => {
    try{
        const result = await pool.query('DELETE FROM pfk.puzzle WHERE puzzleid = $1 RETURNING *', [id])
        return result.rows[0]
    }catch(error){
        console.log(error)
    }
}

const getTodaysPuzzle = async (today) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.puzzle WHERE date = $1', [today])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const updatePuzzleSolution = async (id, solution) => {
    try {
        const result = await pool.query('UPDATE pfk.puzzle SET solution = $1 WHERE puzzleid = $2 RETURNING *', [solution, id])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getTodaysPuzzleSolution = async (today) => {
    try {
        const result = await pool.query('SELECT solution FROM pfk.puzzle WHERE date = $1', [today])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const createPuzzleSubmission = async (today, submission) => {
    try {
        const maxSubmissionId = await pool.query('SELECT MAX(pzsubmissionid) FROM pfk.puzzle_submission_history')   
        const result = await pool.query('INSERT INTO pfk.puzzle_submission_history (pzsubmissionid, userid, puzzleid, submitted_time, submitted_code) VALUES ($1, $2, $3, $4, $5) RETURNING *', [maxSubmissionId.rows[0].max + 1, submission.userid, submission.puzzleid, submission.submitted_time, submission.submitted_code])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getPuzzleSubmissionByUserId = async (userid) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.puzzle_submission_history WHERE userid = $1', [userid])
        return result.rows
    } catch (error) {
        console.log(error)
    }

}

module.exports = { getAllPuzzles, createPuzzle, getPuzzleById, updatePuzzle, getTodaysPuzzle, updatePuzzleSolution, getTodaysPuzzleSolution, createPuzzleSubmission, getPuzzleSubmissionByUserId, deletePuzzle }