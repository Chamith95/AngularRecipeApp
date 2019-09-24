import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer'
import * as AuthActions from './store/auth.actions'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:any

  constructor(public afAuth: AngularFireAuth,private store:Store<fromApp.AppState>,
    private router:Router) { }

  signup(email:string,password:string){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(
        user=>{
          this.store.dispatch(new AuthActions.Signup())
          this.afAuth.auth.currentUser.getIdToken()
          .then(
            (token:string)=>{
              this.store.dispatch(new AuthActions.SetToken(token))
            }
          )
        }
      )
      .catch(
        error=>console.log(error)
      );
  }

  signin(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(
        response =>{
          this.store.dispatch(new AuthActions.Signin())
          this.router.navigate(['/'])
          this.afAuth.auth.currentUser.getIdToken()
              .then(
                (token:string)=>{
                  this.store.dispatch(new AuthActions.SetToken(token))
                }
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
    this.store.dispatch(new AuthActions.Logout()) 
  }
}
