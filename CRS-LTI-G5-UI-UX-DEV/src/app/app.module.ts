import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterCourseComponent } from './student-dashboard/register-course/register-course.component';
import { AddCourseComponent } from './student-dashboard/add-course/add-course.component';
import { DropCourseComponent } from './student-dashboard/drop-course/drop-course.component';
import { ViewCourseComponent } from './student-dashboard/view-course/view-course.component';
import { ViewRegisteredCoursesComponent } from './student-dashboard/view-registered-courses/view-registered-courses.component';
import { ViewGradeCardComponent } from './student-dashboard/view-grade-card/view-grade-card.component';
import { MakePaymentComponent } from './student-dashboard/make-payment/make-payment.component';
import { AddGradeComponent } from './professor-dashboard/add-grade/add-grade.component';
import { ViewCoursesComponent } from './professor-dashboard/view-courses/view-courses.component';
import { ViewEnrolledStudentComponent } from './professor-dashboard/view-enrolled-student/view-enrolled-student.component';
import { UpdatePasswordComponent } from './user-dashboard/update-password/update-password.component';
import { StudentRegisterComponent } from './user-dashboard/student-register/student-register.component';
import { AddProfessorComponent } from './admin-dashboard/add-professor/add-professor.component';
import { DeleteCourseComponent } from './admin-dashboard/delete-course/delete-course.component';
import { ApproveStudentComponent } from './admin-dashboard/approve-student/approve-student.component';
import { ShowCoursesComponent } from './admin-dashboard/show-courses/show-courses.component';
import { ShowProfessorComponent } from './admin-dashboard/show-professor/show-professor.component';
import { ShowPendingStudentsComponent } from './admin-dashboard/show-pending-students/show-pending-students.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    StudentDashboardComponent,
    AdminDashboardComponent,
    ProfessorDashboardComponent,
    UserDashboardComponent,
    RegisterCourseComponent,
    AddCourseComponent,
    DropCourseComponent,
    ViewCourseComponent,
    ViewRegisteredCoursesComponent,
    ViewGradeCardComponent,
    MakePaymentComponent,
    AddGradeComponent,
    ViewCoursesComponent,
    ViewEnrolledStudentComponent,
    UpdatePasswordComponent,
    StudentRegisterComponent,
    AddProfessorComponent,
    DeleteCourseComponent,
    ApproveStudentComponent,
    ShowCoursesComponent,
    ShowProfessorComponent,
    ShowPendingStudentsComponent
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
