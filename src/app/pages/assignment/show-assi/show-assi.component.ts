import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-assi',
  templateUrl: './show-assi.component.html',
  styleUrls: ['./show-assi.component.css']
})
export class ShowAssiComponent implements OnInit {

  constructor(private service:SharedService ) { }

  AssignmentList:any=[];

  ActivateAddEditAssiComp:boolean = false;
  assignmentObject:any;

  ngOnInit(): void {
    this.refreshAssiList();
  }

  addAssign(){
    this.assignmentObject={
      id:0,
      assignmentName:"",
      projectId:0
    }
    this.ActivateAddEditAssiComp=true;
  }

  editClick(item: any){
    this.assignmentObject=item;
    this.ActivateAddEditAssiComp = true;
  }

  closeClick(){
    this.ActivateAddEditAssiComp=false;
    this.refreshAssiList();
  }

  buttonDeleteAssignment(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteAssignment(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshAssiList();
      })
    }
  }

  refreshAssiList(){
    this.service.getAssiList().subscribe(data=>{
      this.AssignmentList=data;
    });
  }
}
