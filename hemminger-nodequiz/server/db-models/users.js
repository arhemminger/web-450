/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
const mongoose = require('mongoose');

let usersSchema = mongoose.Schema({
  userId: Number,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Users', usersSchema);
