import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:8888/api";
//falta a foto
  constructor(private http:HttpClient) { }

  // Projects
  getProjList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/projects');
  }

  addProject(val:any){
    return this.http.post(this.APIUrl+'/Projects', val);
  }

  updateProject(val:any){
    return this.http.put(this.APIUrl+'/Projects', val);
  }

  deleteProject(val:any){
    return this.http.delete(this.APIUrl+'/Projects/'+val);
  }

// Assignments 
  getAssiList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Assignments');
  }

  addAssignment(val:any){
    return this.http.post(this.APIUrl+'/Assignments', val);
  }

  updateAssignment(val:any){
    return this.http.put(this.APIUrl+'/Assignments', val);
  }

  deleteAssignment(val:any){
    return this.http.delete(this.APIUrl+'/Assignments/'+val);
  }


  getAllProjectNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Assignments');
  }

  //Login
  doLogin(val:any){
    return this.http.post(this.APIUrl+'/Account', val);
  }
}

