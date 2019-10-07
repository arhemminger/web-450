/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
Answer: string;
answers: string[] = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'];

quizzes = [];
quizId: number;

getQuizzes(id) {
  this.http.get('/assets/data/quizzes.json').subscribe(res => {
    return this.quizzes.filter(quiz => quiz.id === id);
  })
}

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
   //this.quizId = this.router.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
