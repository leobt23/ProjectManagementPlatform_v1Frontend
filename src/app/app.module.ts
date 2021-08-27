import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ShowProjComponent } from './project/show-proj/show-proj.component';
import { AddEditProjComponent } from './project/add-edit-proj/add-edit-proj.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ShowAssiComponent } from './assignment/show-assi/show-assi.component';
import { AddEditAssiComponent } from './assignment/add-edit-assi/add-edit-assi.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ShowProjComponent,
    AddEditProjComponent,
    AssignmentComponent,
    ShowAssiComponent,
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
