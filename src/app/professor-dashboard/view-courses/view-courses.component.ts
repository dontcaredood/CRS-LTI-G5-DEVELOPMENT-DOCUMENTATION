import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { ProfessorService } from 'src/app/service/professor.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
  constructor(private router:Router,private _http:ProfessorService) {   }
  public   listOfCourses: any = [];
  public warningMessage:string='';

  ngOnInit(): void {
  }

  viewCourses(){
  
    var professorId=this.listOfCourses.professorId;
     
  this._http.viewCourses(professorId)
  .subscribe(
  response => {
    this.listOfCourses=[];
    console.log(response);
    this.router.navigate(['professorDashboardComponent/viewCourses'])
    
    for( let i in response) {  
    console.log("Reponse in Json: "+response);
    this.listOfCourses.push(response[i]);
  
    }
    
  },
  error => {
    console.log(error);
  });
  }


}
