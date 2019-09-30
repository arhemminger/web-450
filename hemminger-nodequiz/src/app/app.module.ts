/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatCardModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AuthGuard } from './shared/guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// components
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared';
import { CumulativeSummaryComponent } from './pages/cumulative-summary/cumulative-summary.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    CumulativeSummaryComponent,
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    AuthLayoutComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [CookieService, AuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
