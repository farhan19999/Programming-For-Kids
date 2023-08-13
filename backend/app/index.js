const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const swaggerjsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")


//routes
const users_route = require('./routes/users.route')
const contests_route = require('./routes/contests.route')
const mini_projects_route = require('./routes/mini-projects.route')
const problems_route = require('./routes/problems.route')
const puzzles_route = require('./routes/puzzles.route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/users', users_route)
app.use('/api/contests', contests_route)
app.use('/api/mini-projects', mini_projects_route)
app.use('/api/problems', problems_route)
app.use('/api/puzzles', puzzles_route)


app.get('/',(req,res)=>{
    res.send("Welcome")
})

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Programming for Kids API",
        version: "0.1.0",
        description:
          "This is a simple progrramming learning platform for kids",
        license: {
          name: "",
          url: "",
        },
        contact: {
          name: "Farhan",
          url: "",
          email: "farhanfahim79@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./app/routes/*.js"],
  };
  
  const specs = swaggerjsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs,
        {
            explorer: true,
        })
  );




module.exports = app
