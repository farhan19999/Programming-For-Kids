const {pool} = require('../config/db.config');


const getAllProblemTestCases= async (problemid) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.testcases WHERE problemid = $1', [problemid])
        client.release()
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const addProblemTestCase = async (problemid, testcase) => {
    try {
        const client = await pool.connect()
        const maxTestCaseId = await client.query('SELECT MAX(testcaseid) FROM pfk.testcases')
        const result = await client.query('INSERT INTO pfk.testcases (testcaseid, problemid, input_file, output_file)VALUES ($1, $2, $3, $4) RETURNING *', [maxTestCaseId.rows[0].max + 1, problemid, testcase.input_file, testcase.output_file])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getProblemTestCaseById = async (testcaseid) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.testcases WHERE testcaseid = $1', [testcaseid])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const updateProblemTestCase = async (testcaseid, testcase) => {
    try {
        const client = await pool.connect()
        const result = await client.query('UPDATE pfk.testcases SET input_file = $1, output_file = $2 WHERE testcaseid = $3 RETURNING *', [testcase.input_file, testcase.output_file, testcaseid])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const updateProblemTestCaseInputFile = async (testcaseid, testcase) => {
    try {
        const client = await pool.connect()
        const result = await client.query('UPDATE pfk.testcases SET input_file = $1 WHERE testcaseid = $2 RETURNING *', [testcase.input_file, testcaseid])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const updateProblemTestCaseOutputFile = async (testcaseid, testcase) => {
    try {
        const client = await pool.connect()
        const result = await client.query('UPDATE pfk.testcases SET output_file = $1 WHERE testcaseid = $2 RETURNING *', [testcase.output_file, testcaseid])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const deleteProblemTestCase = async (testcaseid) => {
    try {
        const client = await pool.connect()
        const result = await client.query('DELETE FROM pfk.testcases WHERE testcaseid = $1 RETURNING *', [testcaseid])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}


module.exports = { getAllProblemTestCases, addProblemTestCase, getProblemTestCaseById, updateProblemTestCase, updateProblemTestCaseInputFile, updateProblemTestCaseOutputFile, deleteProblemTestCase}
