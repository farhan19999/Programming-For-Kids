const pg = require('pg')
const dotenv = require('dotenv')
dotenv.config()

//var client = new pg.Client("postgres://tdkvooil:vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG@john.db.elephantsql.com/tdkvooil")
// const pool_config = {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password : process.env.DB_PASSWORD,
//     max: 10,
//     idleTimeoutMillis: 10000,
//     connectionTimeoutMillis: 2000,
//     maxwaitingclients: 10,
// }

const render_pool_config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    max: 10,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 30000,
    maxwaitingclients: 10,
    ssl:true,
}

const pool = new pg.Pool(render_pool_config)

module.exports = {pool};