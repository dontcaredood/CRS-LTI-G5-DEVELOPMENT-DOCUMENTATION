import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { ProfessorService } from 'src/app/service/professor.service';

@Component({
  selector: 'app-view-enrolled-student',
  templateUrl: './view-enrolled-student.component.html',
  styleUrls: ['./view-enrolled-student.component.css']
})
export class ViewEnrolledStudentComponent implements OnInit {

  constructor(private router:Router,private _http:ProfessorService) {   }
  public   model: any = [];
   // public models=[];
  ngOnInit(): void {
  }

  viewEnrolledStudents(){
  
    var professorId=this.model.professorId;
     
  this._http.viewEnrolledStudents(professorId)
  .subscribe(
  response => {
    this.model=[];
    console.log(response);
    this.router.navigate(['professorDashboardComponent/viewEnrolledStudents'])
    
    for( let i in response) {   //Pay attention to the 'in'
    console.log("Reponse in Json: "+response);
    this.model.push(response[i]);
    }
    
  },
  error => {
    console.log(error);
  });
  }

}
