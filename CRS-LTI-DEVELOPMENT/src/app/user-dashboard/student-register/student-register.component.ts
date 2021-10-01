import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  getData:any[] = []

  studentId:any 
  constructor(private logger:NGXLogger,private _http:UserService) { }

  ngOnInit(): void {
  }
  getUserDetails(){
    this._http.getUserDetails().subscribe((res:any[])=>{this.logger.debug(res);
          this.getData = res})
    }

    checkPassword(pass1, pass2){
      if(pass1!=pass2){
        return true;
      }else{
        alert("passwords should match!")
      }


    }
    onClickSubmit(data){
      this.checkPassword(data.password, data.password2)
      let s = new User(data)
      let obj:any = JSON.stringify(s)
      this._http.registerStudent(obj)
      .subscribe(
      response => {
        console.log(response);
        this.studentId = response
      },
      error => {
        console.log(error);
      });
    }

    
    
}
