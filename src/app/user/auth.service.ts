import { Injectable } from "@angular/core";
import { IUser } from "./user.model";


@Injectable()

export class AuthService {
  //TypeSafe User using Model
  currentUser!: IUser;

  //METHODS
  //loginUser
  loginUser(userName:string, password:string){
    //Upon successful login set
    this.currentUser = {
      id:1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }

  //isAuthenticated
  isAuthenticated(){
    return !!this.currentUser; //True or false
  }

  //updateCurrentUser
  updateCurrentUser(firstName:string, lastName:string){
    //Fake
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }


}
