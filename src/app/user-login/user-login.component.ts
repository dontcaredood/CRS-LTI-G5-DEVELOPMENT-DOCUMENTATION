import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 

  constructor(private router:Router,private _http:UserService) { }
  model: any = {};
  ngOnInit(): void {
  }
onClickLogin(){
  console.log(this.model.name,this.model.password);
    var user=this.model.name;
    var password=this.model.password;
    console.log(user);
    console.log(password)
   //let user=this.model.username;
   //let password=this.model.password;
   // Service Call ang Auth Data form  // U take form  Service
//    if(user == 'admin' && password =='admin'){
//     console.log(this.model.user);
//     console.log(this.model.password);
//      this.router.navigate(['studentDashboard']);

    
// }
this._http.userLogin(user, password)
.subscribe(
response => {
  console.log(response);
  this.router.navigate(['studentDashboard'])
},
error => {
  console.log(error);
});
}
}
