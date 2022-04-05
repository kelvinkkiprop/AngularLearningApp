import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ToastrService } from '../common/toastr.service'
import { AuthService } from './auth.service'

@Component({
  templateUrl:'./profile.component.html',
  styles: [`
    em{float:right; color:#E05C65; padding-left:10px;}
    .error input { background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder { color:#999; }
    .error ::-moz-placeholder { color:#999; }
    .error :-moz-placeholder { color:#999; }
    .error :-moz-input-placeholder { color:#999; }
  `]
})
export class ProfileComponent implements OnInit {

  //Declare variables
  profileForm: any
  private firstName: any
  private lastName: any

  //Inject
  constructor(private authService: AuthService, private router: Router, private mToastr:ToastrService){

  }


  //FUNCTIONS
  ngOnInit(): void {

    //Reactive forms validation and pass data
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required,
    Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)

    //Set validators
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })


  }

  //cancel
  cancel(){
    this.router.navigate(['events'])
  }

  //saveProfile
  saveProfile(formValues: any){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.mToastr.info("info", "Profile updated")
      this.router.navigate(['events'])

    }

  }

  //validateFirstName
  validateFirstName(){
   return  this.firstName.valid || this.firstName.untouched
  }

  //validateLastName
  validateLastName(){
   return  this.lastName.valid || this.lastName.untouched
  }


}
