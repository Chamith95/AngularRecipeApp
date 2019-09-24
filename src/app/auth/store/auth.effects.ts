import { Effect, Actions, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs'

import * as AuthActions from './auth.actions'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthEffects{
    @Effect()
    authSignup=this.actions$.pipe(
        ofType(AuthActions.TRY_SIGNUP),

        map((action:AuthActions.TrySignup)=>{
            return action.payload
        }),

        switchMap((authData:{username:string,password:string})=>{
            return from(this.afAuth.auth.createUserWithEmailAndPassword(authData.username,authData.password))
        })
     )
       

    constructor(private actions$:Actions,public afAuth: AngularFireAuth){

    }
}