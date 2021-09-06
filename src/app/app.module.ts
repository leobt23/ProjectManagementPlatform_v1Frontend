import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './pages/project/project.component';
import { ShowProjComponent } from './pages/project/show-proj/show-proj.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ShowAssiComponent } from './pages/assignment/show-assi/show-assi.component';
import { SharedService } from './services/shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddEditProjComponent } from './pages/project/add-edit-proj/add-edit-proj.component';
import { AddEditAssiComponent } from './pages/assignment/add-edit-assi/add-edit-assi.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ShowProjComponent,
    AssignmentComponent,
    ShowAssiComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    AddEditProjComponent,
    AddEditAssiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
