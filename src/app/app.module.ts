import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Router} from '@angular/router';
import { AppComponent } from './app.component';
import {UniversityModule} from './university/university.module';
import { StudentComponent } from './student/student.component';
import {StudentModule} from './student/student.module';
 import {UniversityComponent} from './university/university.component';
// import {CreateNewDriveComponent} from './university/create-new-drive/create-new-drive.component';
@NgModule({
  declarations: [
    AppComponent
    //StudentComponent,
     //UniversityComponent,
    // CreateNewDriveComponent
  ],
  imports: [
    BrowserModule,
     UniversityModule,
    StudentModule,
    RouterModule.forRoot([
      {path:"student",component:StudentComponent},
      {path:"university",component:UniversityComponent}
  ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
