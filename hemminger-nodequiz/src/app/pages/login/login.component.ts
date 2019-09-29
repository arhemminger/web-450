/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;
  //validEmployeeIds = [1007, 1008, 1009, 1010, 1011];

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient ) { }

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
  }

  login() {
    const employeeId = this.form.controls['employeeId'].value;
    console.log(employeeId);

    //If the employeeId is in the validEmployeeId's array, the user is authenticated and we will grant them access

    this.http.get('/api/employees/' + employeeId).subscribe( res => {
      if (res !== null) {
        this.cookieService.set('isAuthenticated', 'true', 1); //add a cookie to the users browser with a value of true and exp. 1 day.
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'The employee ID you entered is invalid.';
      }
    })

/*    if (this.validEmployeeIds.includes(parseInt(employeeId, 10))) {
      this.cookieService.set('isAuthenticated', 'true', 1); //add a cookie to the users browser with a value of true and exp. 1 day.
      this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'The employee ID you entered is invalid.';
      }
*/
    }
  }
