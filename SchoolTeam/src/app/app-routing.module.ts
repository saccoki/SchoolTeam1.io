import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestingComponent } from './testing/testing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaceDetectionComponent } from './face-detection/face-detection.component';
//import { FaceLandmarkDetectionComponent } from './face-landmark-detection/face-landmark-detection.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'testing', component: TestingComponent},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'face-detection', component: FaceDetectionComponent}//,
  //{path: 'face-landmark-detection', component: FaceLandmarkDetectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
