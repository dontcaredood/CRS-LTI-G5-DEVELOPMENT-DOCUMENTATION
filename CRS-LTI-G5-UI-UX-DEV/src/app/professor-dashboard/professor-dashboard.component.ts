import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-professor-dashboard',
  templateUrl: './professor-dashboard.component.html',
  styleUrls: ['./professor-dashboard.component.css']
})
export class ProfessorDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
ngOnInit(): void {


  }
  viewEnrolledStudents(){
    this.router.navigate(['viewEnrolledStudents'], {relativeTo:this.route});
  }
  viewCourses(){
    this.router.navigate(['viewCourses'], {relativeTo:this.route});
  }

  addGrade()
  {
    this.router.navigate(['addGrade'],{relativeTo:this.route});
  }

}
