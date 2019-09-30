/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const isAuthenticated = this.cookieService.get('isAuthenticated');

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/session/login']);
      return false;
    }
  }
}

