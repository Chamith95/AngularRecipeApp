import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout();
  }


}
