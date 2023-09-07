const {pool} = require('../config/db.config');


const getAllProblemTestCases= async (problemid) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.testcases WHERE problemid = $1', [problemid])
        return result.rows
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const addProblemTestCase = async (problemid, testcase) => {
    try {
        const maxTestCaseId = await pool.query('SELECT MAX(testcaseid) FROM pfk.testcases')
        const result = await pool.query('INSERT INTO pfk.testcases (testcaseid, problemid, input_file, output_file)VALUES ($1, $2, $3, $4) RETURNING *', [maxTestCaseId.rows[0].max + 1, problemid, testcase.input_file, testcase.output_file])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const getProblemTestCaseById = async (testcaseid) => {
    try {
        const result = await pool.query('SELECT * FROM pfk.testcases WHERE testcaseid = $1', [testcaseid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const updateProblemTestCase = async (testcaseid, testcase) => {
    try {
        const result = await pool.query('UPDATE pfk.testcases SET input_file = $1, output_file = $2 WHERE testcaseid = $3 RETURNING *', [testcase.input_file, testcase.output_file, testcaseid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const updateProblemTestCaseInputFile = async (testcaseid, testcase) => {
    try {
        const result = await pool.query('UPDATE pfk.testcases SET input_file = $1 WHERE testcaseid = $2 RETURNING *', [testcase.input_file, testcaseid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const updateProblemTestCaseOutputFile = async (testcaseid, testcase) => {
    try {
        const result = await pool.query('UPDATE pfk.testcases SET output_file = $1 WHERE testcaseid = $2 RETURNING *', [testcase.output_file, testcaseid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const deleteProblemTestCase = async (testcaseid) => {
    try {
        const result = await pool.query('DELETE FROM pfk.testcases WHERE testcaseid = $1 RETURNING *', [testcaseid])
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error;
    }
}


module.exports = { getAllProblemTestCases, addProblemTestCase, getProblemTestCaseById, updateProblemTestCase, updateProblemTestCaseInputFile, updateProblemTestCaseOutputFile, deleteProblemTestCase}
