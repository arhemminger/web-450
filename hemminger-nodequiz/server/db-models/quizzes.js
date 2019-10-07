/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  6 October 2019
; Description: NodeQuiz application
;===========================================
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let quizzesSchema = new Schema({
  quizId: {type: String},
  quizName: {type: String}
})

module.exports = mongoose.model('Quiz', quizzesSchema);
