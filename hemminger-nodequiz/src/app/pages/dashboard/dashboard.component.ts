/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

// Presentation selection function
viewPresentation(presentationId) {
  this.router.navigate(['presentation']);
  console.log(presentationId);
}

// Presentation selection function
takeQuiz(quizId) {
  this.router.navigate(['quiz']);
  console.log(quizId);
}

}
