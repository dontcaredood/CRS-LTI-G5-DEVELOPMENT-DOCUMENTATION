import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseComponent } from './student-dashboard/register-course/register-course.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {ProfessorDashboardComponent} from './professor-dashboard/professor-dashboard.component';
import {ViewEnrolledStudentComponent} from './professor-dashboard/view-enrolled-student/view-enrolled-student.component';
import {ViewCoursesComponent} from         './professor-dashboard/view-courses/view-courses.component';
import { AddGradeComponent } from './professor-dashboard/add-grade/add-grade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [  
{path: '', redirectTo:"/professorDashboardComponent", pathMatch:"full"},

{path : 'professorDashboard',component: ProfessorDashboardComponent}, 
{path : 'professorDashboardComponent',component: ProfessorDashboardComponent,
  children:[
    { path: 'viewEnrolledStudents', component: ViewEnrolledStudentComponent },
    { path: 'viewCourses', component: ViewCoursesComponent },
    {path: 'addGrade' ,component:AddGradeComponent}
  ]
 } ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
