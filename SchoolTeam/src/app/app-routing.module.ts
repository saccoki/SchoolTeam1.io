import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestingComponent } from './testing/testing.component';
import { FaceDetectionComponent } from './face-detection/face-detection.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'testing', component:TestingComponent},
  {path: 'login',component:LoginComponent },
  {path: 'face-detection', component:FaceDetectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
