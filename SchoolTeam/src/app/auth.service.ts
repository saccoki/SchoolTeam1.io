import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth : AngularFireAuth) {

  }

  login() {
    console.log("something");
    let temp={
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'http://localhost:4200/testing',
      // This must be true.
      handleCodeInApp: true
    };
    
    this.auth.sendSignInLinkToEmail("saccoki@protonmail.com", temp ).then(r => {
      window.localStorage.setItem('emailForSignIn', "saccoki@protonmail.com");

    })
    //this.auth.signInWithEmailLink("saccoki@protonmail.com",window.location.href).then(r => {
      //console.log(r);
    //})
  }
  logout() {
    this.auth.signOut();
  }

   
  
}
