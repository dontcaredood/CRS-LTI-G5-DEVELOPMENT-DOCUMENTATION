import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { UserService } from '../service/user.service';
FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private logger:NGXLogger,private _http:UserService) { }

  ngOnInit(): void {
  }
  onClickLogin(data){
     

    this._http.userLogin(data)
    .subscribe(
    response => {
      console.log(response);
      //this.studentId = response
    },
    error => {
      console.log(error);
    });
  }
}
