const pg = require('pg')
const dotenv = require('dotenv')
dotenv.config()

//var client = new pg.Client("postgres://tdkvooil:vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG@john.db.elephantsql.com/tdkvooil")
const pool_config = {
    host: 'john.db.elephantsql.com',
    user: 'tdkvooil',
    password : 'vky4cxJVqdHCnWnjKv0u_E05xvIo7UXG',
    max: 10,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 2000,
    maxwaitingclients: 10,
}

const render_pool_config = {
    host: 'dpg-cjf4o5gcfp5c73ff5su0-a.oregon-postgres.render.com',
    user: 'programmingforkidsdev_user',
    password : '800jpkRwzb8fzAB8KwhgpUtXqQs8R2RN',
    database: 'programmingforkidsdev',
    max: 10,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 2000,
    maxwaitingclients: 10,
    ssl:true,
}

const pool = new pg.Pool(render_pool_config)

module.exports = {pool_config, pool, render_pool_config};