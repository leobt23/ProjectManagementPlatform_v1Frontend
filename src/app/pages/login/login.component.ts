import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService) { }

  Username:string | undefined;
  Password:string | undefined;
  RememberMe:boolean | undefined;

  ngOnInit(): void {
  }

doLogin(){
  var val = {Username:this.Username,
    Password:this.Password,
    RememberMe:this.RememberMe};
    this.service.doLogin(val).subscribe(res =>{
      alert('sdsdsdsd'+res.toString());
    });
}
}
