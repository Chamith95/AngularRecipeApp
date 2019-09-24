import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer'
import * as fromAuth from '../auth/store/auth.reducer'

import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState:Observable<fromAuth.State>;

  constructor(public authService:AuthService,private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState=this.store.select('auth')
  }

  onLogout(){
    this.authService.logout();
  }


}
