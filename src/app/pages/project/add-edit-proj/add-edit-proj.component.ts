import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-proj',
  templateUrl: './add-edit-proj.component.html',
  styleUrls: ['./add-edit-proj.component.css']
})
export class AddEditProjComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() projectObject:any;
  projectId:string | undefined;
  projectName:string | undefined;

  ngOnInit(): void {
    this.projectId = this.projectObject.projectId;
    this.projectName = this.projectObject.projectName;
  }

  addProject(){ 
    var val = {projectId:this.projectId,
              projectName:this.projectName};
              this.service.addProject(val).subscribe(res =>{
                alert('sssssssssss'+res.toString());
              });
  }

  //fazer metodo update no backend
  updateProject(){
    var val = {projectId:this.projectId,
              projectName:this.projectName};
      this.service.updateProject(val).subscribe(res =>{
        alert(res.toString());
      });
  }

}
