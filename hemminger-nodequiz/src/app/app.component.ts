/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService){

  }

  title = 'Hemminger Node Quiz';


  validateEmployee(employee) {
    this.http.get('/api/employees/' + employee).subscribe(res => {
      if (res) {
        this.router.navigate(['']);
      } else {
        console.log('Invalid employeeId')
      }
    }, err => {
      console.log('Invalid employeeId')
    })
  }
}
