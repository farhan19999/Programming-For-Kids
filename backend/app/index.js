const express = require('express')
const app = express()
const users_route = require('./routes/users.route')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/users', users_route)

app.get('/',(req,res)=>{
    res.send("Welcome")
})

module.exports = app
