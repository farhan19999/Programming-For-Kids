const dotenv = require('dotenv')
dotenv.config()

//var client = new pg.Client("postgres://tdkvooil:vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG@john.db.elephantsql.com/tdkvooil")
const pool_config = {
    host: 'john.db.elephantsql.com',
    user: 'tdkvooil',
    password : 'vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG',
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    maxwaitingclients: 10,
}


module.exports = {pool_config};