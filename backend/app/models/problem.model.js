const pg = require('pg')
const pool = new pg.Pool({
    host: 'john.db.elephantsql.com',
    user: 'tdkvooil',
    password : 'vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG',
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

const getAllProblems = async () => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.problem')
        client.release()
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

const getProblemById = async (id) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.problem WHERE id = $1', [id])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllProblems, getProblemById }
