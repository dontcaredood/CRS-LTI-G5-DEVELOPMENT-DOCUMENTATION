import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseComponent } from './student-dashboard/register-course/register-course.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';



const routes: Routes = [  
  { path : '', component:  UserLoginComponent},
  { path : 'studentDashboard',component: StudentDashboardComponent,
  children:[
    { path: '', redirectTo: 'customer', pathMatch: 'full'},
    { path: 'customer', component: RegisterCourseComponent },
    // { path: 'order', component: OrdercomponentComponent,
    // children: [
    //   { path: '', redirectTo: 'normalOrder', pathMatch: 'full' },
    //   { path: 'normalOrder', component:  NormalordercomponentComponent},
    //   { path: 'premiumOrder', component:  PremiumordercomponentComponent},
    //   ]},
    ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
