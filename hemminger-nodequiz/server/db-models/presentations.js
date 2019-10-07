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

let presentationsSchema = new Schema({
  presentationId: {type: String},
  name: {type: String},
  description: {type: String},
  slides: [String]
})

module.exports = mongoose.model('Presentation', presentationsSchema);
