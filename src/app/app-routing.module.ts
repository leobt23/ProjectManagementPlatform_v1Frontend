import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './pages/project/project.component'; 
import { AssignmentComponent } from './pages/assignment/assignment.component'; 
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'project', component: ProjectComponent},
  {path:'assignment', component: AssignmentComponent},
  {path:'Account/login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
