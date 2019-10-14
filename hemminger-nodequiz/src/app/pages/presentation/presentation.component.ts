/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  6 October 2019
; Description: NodeQuiz application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  title = 'Quiz presentation carousel'
  presentationId = 0; //setting an initial value
  images: any;

/* //use to pull presentation from json file -- http giving error need to fix
  getPresentations(id) {
    http.get('/assets/data/presentations.json').subscribe(res => {
      return this.getPresentations.filter(presentation => presentation.id === id)
    })
  }
*/

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
      // Subscribed
      this.route.paramMap.subscribe(params => {
        this.presentationId = parseInt(params.get('presentationId'), 10);
        console.log("subscribed url id: " + this.presentationId);

      if (this.presentationId === 101) {
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
        console.log('presentation slides = ' + this.images);
      } else if (this.presentationId === 102) {
      this.images = [
        {name: 'Quiz 102 slide 1', image: 'q102s1.JPG'},
        {name: 'Quiz 102 slide 2', image: 'q102s2.JPG'},
        {name: 'Quiz 102 slide 3', image: 'q102s3.JPG'},
        {name: 'Quiz 102 slide 4', image: 'q102s4.JPG'},
        {name: 'Quiz 102 slide 5', image: 'q102s5.JPG'},
        {name: 'Quiz 102 slide 6', image: 'q102s6.JPG'},
        {name: 'Quiz 102 slide 7', image: 'q102s7.JPG'},
        {name: 'Quiz 102 slide 8', image: 'q102s8.JPG'},
        {name: 'Quiz 102 slide 9', image: 'q102s9.JPG'},
        {name: 'Quiz 102 slide 10', image: 'q102s10.JPG'},
        {name: 'Quiz 102 slide 11', image: 'q102s11.JPG'},
        {name: 'Quiz 102 slide 12', image: 'q102s12.JPG'}
        ];
        console.log('presentation slides = ' + this.images);
      } else if (this.presentationId === 103) {
      this.images = [
        {name: 'Quiz 103 slide 1', image: 'q103s1.JPG'},
        {name: 'Quiz 103 slide 2', image: 'q103s2.JPG'},
        {name: 'Quiz 103 slide 3', image: 'q103s3.JPG'},
        {name: 'Quiz 103 slide 4', image: 'q103s4.JPG'},
        {name: 'Quiz 103 slide 5', image: 'q103s5.JPG'},
        {name: 'Quiz 103 slide 6', image: 'q103s6.JPG'},
        {name: 'Quiz 103 slide 7', image: 'q103s7.JPG'},
        {name: 'Quiz 103 slide 8', image: 'q103s8.JPG'},
        {name: 'Quiz 103 slide 9', image: 'q103s9.JPG'},
        {name: 'Quiz 103 slide 10', image: 'q103s10.JPG'},
        {name: 'Quiz 103 slide 11', image: 'q103s11.JPG'},
        {name: 'Quiz 103 slide 12', image: 'q103s12.JPG'}
        ];
        console.log('presentation slides = ' + this.images);
      } else {
        console.log('No valid presentation id for slides: ' + this.presentationId);
        }
      });
    }

  ngOnInit() {
    // No Subscription
    //this.presentationId = parseInt(this.route.snapshot.paramMap.get("presentationId"), 10);
  }
}
