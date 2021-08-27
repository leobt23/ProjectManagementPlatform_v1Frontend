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
    return this.http.get<any>(this.APIUrl+'/Project');
  }

  addProject(val:any){
    return this.http.post(this.APIUrl+'/Project', val);
  }

  updateProject(val:any){
    return this.http.put(this.APIUrl+'/Project', val);
  }

  deleteProject(val:any){
    return this.http.delete(this.APIUrl+'/Project'+val);
  }

// Assignments 
  getAssiList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Assignment');
  }

  addAssignment(val:any){
    return this.http.post(this.APIUrl+'/Assignment', val);
  }

  updateAssignment(val:any){
    return this.http.put(this.APIUrl+'/Assignment', val);
  }

  deleteAssignment(val:any){
    return this.http.delete(this.APIUrl+'/Assignment'+val);
  }


  getAllProjectNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Assignment/');
  }
}
