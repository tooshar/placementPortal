import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AllDrivesComponent } from './all-drives/all-drives.component';
import { EligibleDrivesComponent } from './eligible-drives/eligible-drives.component';
import { AppliedFormsComponent } from './applied-forms/applied-forms.component';
import { PastApplicationsComponent } from './past-applications/past-applications.component';
import { OfferStatusComponent } from './offer-status/offer-status.component';

@NgModule({
  declarations: [
    StudentComponent,  
    HeaderComponent,
    SidebarComponent,
    UserProfileComponent,
    AllDrivesComponent,
    EligibleDrivesComponent,
    AppliedFormsComponent,
    PastApplicationsComponent,
    OfferStatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component:UserProfileComponent
      },
      {
        path:'user-profile',
        component:UserProfileComponent
      },
      {
        path:'all-drives',
        component:AllDrivesComponent
      },
      {
        path:'eligible-drives',
        component:EligibleDrivesComponent
      },
      {
        path:'applied-forms',
        component:AppliedFormsComponent
      },
      {
        path:'past-applications',
        component:PastApplicationsComponent
      },
      {
        path:'offer-status',
        component:OfferStatusComponent
      }
    ]),
  ],
  exports:[
    StudentComponent
  ],
  providers: [],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
