const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const uri = "mongodb+srv://kelly:H8LsmpVzLFvZlmAI@clowncar.csks45j.mongodb.net/?retryWrites=true&w=majority";

// Connect mongoDB
mongoose
  .connect(uri)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
const personAPI = require('./routes/person.route')
const experienceAPI = require('./routes/experience.route')

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
// API
app.use('/api/person', personAPI)
app.use('/api/experience', experienceAPI)


// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})