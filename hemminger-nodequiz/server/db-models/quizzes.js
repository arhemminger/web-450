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
  name: {type: String},
  description: {type: String},
  questions: [{
    id: {type: Number},
    text: {type: String},
    answers: [{
      id: {type: String},
      text: {type: String},
      isCorrect: {type: Boolean}
    }]
  }]
})

module.exports = mongoose.model('Quiz', quizzesSchema);
