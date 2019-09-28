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
const User = require('./db-models/users');

// Global variables
const serverPort = 3000;

// App configurations
let app = express();

// body-parser needs to be added to handle JSON post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/hemminger-nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/hemminger-nodequiz')));

/************************* Mongoose connection***************/
// MongoDB (Atlas) connection string
const connString = 'mongodb+srv://dev:bu12345@nodequiz-ubbkm.mongodb.net/test?retryWrites=true&w=majority'

// MongoDB connect
mongoose.connect(connString, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
        .then(() => console.debug('Connection to the MongoDB instance was successful'))
        .catch((err) => console.debug('MongoDB Error: ' + err.message));

/************************* API routes ********************/
// Get user by userId
app.get('/api/users/:id', function(req, res, next) {
  User.findOne({'userId': req.params.id}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      res.json(user);
    }
  })
});

// Get all users
app.get('/api/users', function(req, res, next) {
  User.find({}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      res.json(user);
    }
  })
});

// Create Node.js server that listens on port 3000
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
