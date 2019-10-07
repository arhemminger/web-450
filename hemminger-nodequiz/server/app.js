/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee = require('./db-models/employee');
const Presentation = require('./db-models/presentations');
const Quiz = require('./db-models/quizzes');

// Global variables
const serverPort = 3000;

// App configurations
let app = express();

// body-parser needs to be added to handle JSON post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

/************************* Mongoose connection***************/
// MongoDB (Atlas) connection string
const connString = 'mongodb+srv://dev:bu12345@nodequiz-ubbkm.mongodb.net/test?retryWrites=true&w=majority'

// MongoDB connect
mongoose.connect(connString, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
        .then(() => console.debug('Connection to the MongoDB instance was successful'))
        .catch((err) => console.debug('MongoDB Error: ' + err.message));

/************************* API routes employees ********************/
//Get all employees
app.get('/api/employees', function(req, res, next) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  })
});

//Get employee by employeeId
app.get('/api/employees/:id', function(req, res, next) {
  Employee.findOne({'employeeId': req.params.id}, function(err, employee) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employee);
      res.json(employee);
    }
  })
});

//Add new employee
app.post('/api/employees', function(req, res, next) {
  const employee = {
    employeeId: req.body.employeeId,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  };

  Employee.create(employee, function(err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  });
});

/************************* API routes presentations ********************/
//Get presentation by presentationId
app.get('/api/presentations/:id', function(req, res, next) {
  Presentation.findOne({'presentationId': req.params.id}, function(err, presentation) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(presentation);
      res.json(presentation);
    }
  })
});

/************************* API routes quizzes ********************/
//Get quiz by quizId
app.get('/api/quizzes/:id', function(req, res, next) {
  Quiz.findOne({'quizId': req.params.id}, function(err, quiz) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quiz);
      res.json(quiz);
    }
  })
});



// Create Node.js server that listens on port 3000
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
