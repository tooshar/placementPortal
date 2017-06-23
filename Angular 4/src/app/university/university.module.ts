import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewDriveComponent } from './create-new-drive/create-new-drive.component'
import {UniversityComponent} from './university.component';
import {RouterModule,Routes} from '@angular/router'; 
import {DashboardComponent} from './dashboard/dashboard.component';
import {InviteCompaniesComponent} from './invite-companies/invite-companies.component';
import {InviteStudentsComponent} from './invite-students/invite-students.component';
import {UniversityMComponent} from './university-m/university-m.component';
import {UpcomingDrivesComponent} from './upcoming-drives/upcoming-drives.component';
const universityRoutes:Routes=[
    {path:'',component:DashboardComponent},
    {path:'create-new-drive',component:CreateNewDriveComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'invite-companies',component:InviteCompaniesComponent},
    {path:'invite-students',component:InviteStudentsComponent},
    {path:'university-profile',component:UniversityMComponent},
    {path:'upcoming-drive',component:UpcomingDrivesComponent}
  ];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(universityRoutes)
  ],
  exports: [
    UniversityComponent
  ],
  declarations: [
    UniversityComponent,
    CreateNewDriveComponent,
    DashboardComponent,
    InviteCompaniesComponent,
    InviteStudentsComponent,
    UniversityMComponent,
    UpcomingDrivesComponent
  ]
  
})
export class UniversityModule { }
