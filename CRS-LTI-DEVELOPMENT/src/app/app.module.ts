import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { RegisterCourseComponent } from './student-dashboard/register-course/register-course.component';
import { DropCourseComponent } from './student-dashboard/drop-course/drop-course.component';
import { AddCourseComponent } from './student-dashboard/add-course/add-course.component';
import { ViewCourseComponent } from './student-dashboard/view-course/view-course.component';
import { ViewRegisteredCoursesComponent } from './student-dashboard/view-registered-courses/view-registered-courses.component';
import { ViewGradeCardComponent } from './student-dashboard/view-grade-card/view-grade-card.component';
import { MakePaymentComponent } from './student-dashboard/make-payment/make-payment.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ViewEnrolledStudentsComponent } from './professor-dashboard/view-enrolled-students/view-enrolled-students.component';
import { GetCoursesComponent } from './professor-dashboard/get-courses/get-courses.component';
import { AddGradeComponent } from './professor-dashboard/add-grade/add-grade.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProfessorComponent } from './admin-dashboard/add-professor/add-professor.component';
import { AddCoursesComponent } from './admin-dashboard/add-courses/add-courses.component';
import { DeleteCoursesComponent } from './admin-dashboard/delete-courses/delete-courses.component';
import { ApproveStudentComponent } from './admin-dashboard/approve-student/approve-student.component';
import { ShowCoursesComponent } from './admin-dashboard/show-courses/show-courses.component';
import { ShowProfessorComponent } from './admin-dashboard/show-professor/show-professor.component';
import { ShowPendingStudentsComponent } from './admin-dashboard/show-pending-students/show-pending-students.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UpdatePasswordComponent } from './user-dashboard/update-password/update-password.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    RegisterCourseComponent,
    DropCourseComponent,
    AddCourseComponent,
    ViewCourseComponent,
    ViewRegisteredCoursesComponent,
    ViewGradeCardComponent,
    MakePaymentComponent,
    ProfessorDashboardComponent,
    ViewEnrolledStudentsComponent,
    GetCoursesComponent,
    AddGradeComponent,
    AdminDashboardComponent,
    AddProfessorComponent,
    AddCoursesComponent,
    DeleteCoursesComponent,
    ApproveStudentComponent,
    ShowCoursesComponent,
    ShowProfessorComponent,
    ShowPendingStudentsComponent,
    UserDashboardComponent,
    UpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoggerModule.forRoot({serverLoggingUrl:'/users/logs', level:NgxLoggerLevel.DEBUG,serverLogLevel:NgxLoggerLevel.ERROR})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
