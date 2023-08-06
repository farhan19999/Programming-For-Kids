const dotenv = require('dotenv')
dotenv.config()

const db = {
    url: process.env.DB_CONNECTION_URL,
};

module.exports = db;