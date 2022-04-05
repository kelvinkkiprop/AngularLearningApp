import { Component } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
  styles:[`
  .navbar-light .navbar-nav .nav-link:active {color: #F97924;}
  .navbar-light .navbar-nav .nav-link:hover {color: #F97924;}
  `]
})

export class NavBarComponent{

  //Inject 
  constructor(public auth:AuthService){

  }

}

