const dotenv = require('dotenv')
dotenv.config()

var pg = require('pg')
//var client = new pg.Client("postgres://tdkvooil:vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG@john.db.elephantsql.com/tdkvooil")
const pool = new pg.Pool({
    host: 'john.db.elephantsql.com',
    user: 'tdkvooil',
    password : 'vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG',
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

module.exports = {pool};