import { Component, OnInit } from '@angular/core';
import { Router,ROUTES } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { ProfessorService } from 'src/app/service/professor.service';
import { FormGroup, Validators,FormBuilder,FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {

  constructor(private router:Router,private _http:ProfessorService,private fb: FormBuilder)//,private alertify:AlertifyService) 
  {    this.createForm();   }
  public   model: any = [];
  public updateMessage=false;
   public errorMsg;
   myForm=new  FormGroup({
    studentId:new FormControl('',Validators.required),
    courseCode:new FormControl('',Validators.required),
    grade:new FormControl('',Validators.required)
  });

  ngOnInit() {
     
  }
  addGrade(){
  
    var studentId=this.model.studentId;
    var courseCode=this.model.courseCode;
    var grade=this.model.grade;
   
    console.log("Student ID: "+studentId);

    this._http.addGrade(studentId,courseCode,grade)
  .subscribe(
  response => {
    console.log(response);
    this.updateMessage=response;
    error=>this.errorMsg=error;
    this.router.navigate(['professorDashboardComponent/addGrade'])
    
  },error => {console.log("Error Log:  "+error);this.errorMsg=error;}
  );
  }

  createForm() {
    this.myForm = this.fb.group({
      studentId: ['', Validators.required ],
      courseCode: ['', Validators.required ],
      grade: ['', Validators.required ]
    });
  }
  

}
