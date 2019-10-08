/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  6 October 2019
; Description: NodeQuiz application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import presentations from '../../../assets/data/presentations.json';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  title = 'Quiz presentation carousel'
  images: any;

  constructor() {
    this.images = [
      {name: 'Quiz 101 slide 1', image: 'q101s1.JPG'},
      {name: 'Quiz 101 slide 2', image: 'q101s2.JPG'},
      {name: 'Quiz 101 slide 3', image: 'q101s3.JPG'},
      {name: 'Quiz 101 slide 4', image: 'q101s4.JPG'},
      {name: 'Quiz 101 slide 5', image: 'q101s5.JPG'},
      {name: 'Quiz 101 slide 6', image: 'q101s6.JPG'},
      {name: 'Quiz 101 slide 7', image: 'q101s7.JPG'},
      {name: 'Quiz 101 slide 8', image: 'q101s8.JPG'},
      {name: 'Quiz 101 slide 9', image: 'q101s9.JPG'},
      {name: 'Quiz 101 slide 10', image: 'q101s10.JPG'},
      {name: 'Quiz 101 slide 11', image: 'q101s11.JPG'},
      {name: 'Quiz 101 slide 12', image: 'q101s12.JPG'}
    ];
  }

  ngOnInit() {
  }

}


