import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-assi',
  templateUrl: './add-edit-assi.component.html',
  styleUrls: ['./add-edit-assi.component.css']
})
export class AddEditAssiComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() assignmentObject:any;
  id:string | undefined;
  assignmentName:string | undefined;
  projectId:string | undefined;

  ngOnInit(): void {
    this.id = this.assignmentObject.id;
    this.assignmentName = this.assignmentObject.assignmentName;
    this.projectId = this.assignmentObject.projectId;
  }

  addAssignment(){ 
    var val = {id:this.id,
              assignmentName:this.assignmentName,
              projectId:this.projectId};
              this.service.addAssignment(val).subscribe(res =>{
                alert(res.toString());
              });
  }

  //fazer metodo update no backend
  updateAssignment(){
   /* var val = {projectId:this.projectId,
              projectName:this.projectName};
      this.service.updateProject(val).subscribe(res =>{
        alert(res.toString());
      });*/
  }

}
