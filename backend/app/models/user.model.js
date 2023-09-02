const {pool} = require('../config/db.config')

//const pg = require('pg')
//const pool = new pg.Pool(pool_config)

const getAllUsers = async () => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.users')
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async (id) => {
    try {
        const client =  await pool.connect()
        const result = await client.query('SELECT * FROM pfk.users WHERE userid = $1', [id])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (user) => {
    try {
        const client = await pool.connect()
        const maxid = await client.query('SELECT MAX(userid) FROM pfk.users')
        const result = await client.query('INSERT INTO pfk.users (userid, username, email_address, password, phone_no) VALUES ($1, $2, $3, $4, $5) RETURNING *', [maxid.rows[0].max + 1, user.username, user.email_address, user.password, user.phone_no])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (id, user) => {
    try{
        const client = await pool.connect()
        const result = await client.query('UPDATE pfk.users SET  email_address = $1, password = $2, phone_no = $3 WHERE userid = $4 RETURNING *', [user.email_address, user.password, user.phone_no, id]) 
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getRegisteredContests = async (id) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT c.* from pfk.contest_participation_history as cph inner join pfk.contest as c on cph.contestid = c.contestid where cph.standing=0 and cph.userid=$1; ', [id])
        client.release()
        return {'registered-contests': result.rows}
    } catch (error) {
        console.log(error)
    }
}

const addRegisteredContest = async (id, contestid) => {
    try {
        const client = await pool.connect()
        const maxParticipationId = await client.query('SELECT MAX(participationid) FROM pfk.contest_participation_history')
        const result = await client.query('INSERT INTO pfk.contest_participation_history (participationid, userid, contestid, standing) VALUES ($1, $2, $3, $4) RETURNING *', [maxParticipationId.rows[0].max + 1, id, contestid, 0])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

const getAllPracticeSubmissionByUserId = async (id) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM pfk.practice_problem_submission_history WHERE userid = $1', [id])
        client.release()
        return {'submissions':result.rows}
    } catch (error) {
        console.log(error)
    }
}

const findUser = async (email_address, password) => {
    try {
        const client = await pool.connect()
        const result = await client.query('SELECT userid FROM pfk.users WHERE email_address = $1 and password = $2', [email_address, password])
        client.release()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}





module.exports = {getAllUsers, getUserById, createUser, updateUser, getRegisteredContests, getAllPracticeSubmissionByUserId,addRegisteredContest, findUser}