import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-show-proj',
  templateUrl: './show-proj.component.html',
  styleUrls: ['./show-proj.component.css']
})
export class ShowProjComponent implements OnInit {

  constructor(private service:SharedService ) { }

  ProjectList:any=[];

  ActivateAddEditProjComp:boolean = false;
  projectObject:any;

  ngOnInit(): void {
    this.refreshProjList();
  }

  addClick(){
    this.projectObject={
      projectId:0,
      projectName:""
    }
    this.ActivateAddEditProjComp=true;
  }

  editClick(item: any){
    this.projectObject=item;
    this.ActivateAddEditProjComp = true;
  }

  closeClick(){
    this.ActivateAddEditProjComp=false;
    this.refreshProjList();
  }

  buttonDeleteProject(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteProject(item.projectId).subscribe(data=>{
        alert(data.toString());
        this.refreshProjList();
      })
    }
  }

  refreshProjList(){
    this.service.getProjList().subscribe(data=>{
      this.ProjectList=data;
    });
  }
}
