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

  images = []
  presentationId: string;

 /*
  getPresentation('id') {
    return this.http.get('./assets/data/presentations.json');

  }
*/
  constructor(){

  }


  ngOnInit() {
  }

}


