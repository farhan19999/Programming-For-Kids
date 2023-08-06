const db_config = require('../config/db.config')

var pg = require('pg')
var client = new pg.Client("postgres://tdkvooil:vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG@john.db.elephantsql.com/tdkvooil")


const getAllUsers = async () => {
    try {
        await client.connect()
        const result = await client.query('SELECT * FROM pfk.users')
        await client.end()
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllUsers}