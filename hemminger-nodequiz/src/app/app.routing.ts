/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
import {Routes} from '@angular/router';
// pages imports
import {CumulativeSummaryComponent} from './pages/cumulative-summary/cumulative-summary.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
// shared imports
import {AuthLayoutComponent} from './shared/auth-layout/auth-layout.component';
import {BaseLayoutComponent} from './shared';
import {AuthGuard} from './shared/guards/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '', //:username
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cumulative-summary',
        component: CumulativeSummaryComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];
