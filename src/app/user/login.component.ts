import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em{float:right; color:#E05C65; padding-left:10px;}
  `]
})

export class LoginComponent {

  //Input fields
  userName: any
  password: any
  mouseoverLogin:any

  constructor(private mAuthService:AuthService, private router:Router){

  }

  //METHODS
  //login
  login(formValues: any){
    // console.log(formValues)
    //Call service
    this.mAuthService.loginUser(formValues.userName, formValues.password)
    //After login
    this.router.navigate(['events'])
  }

  //cancelBtn
  cancelBtn(){
    this.router.navigate(['events'])
  }

}
