import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:any

  constructor(public afAuth: AngularFireAuth,
    private router:Router) { }

  signup(email:string,password:string){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .catch(
        error=>console.log(error)
      );
  }

  signin(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(
        response =>{
          this.router.navigate(['/'])
          this.afAuth.auth.currentUser.getIdToken()
              .then(
                (token:string)=>this.token=token 
              )
        }
      )
      .catch(
        error=>console.log(error)
      );
  }

  getToken(){
    this.afAuth.auth.currentUser.getIdToken()
      .then(
        (token:string) =>this.token=token
      );
      return this
  }

  isAuthenticated(){
    return this.token !=null;
  }

  logout(){
    this.afAuth.auth.signOut()
        .then(this.token=null)
  }
}
