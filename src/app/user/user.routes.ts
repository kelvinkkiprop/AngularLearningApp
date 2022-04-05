import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";

//Routes
export const userRoutes:Routes = [

  //Event
  { path: 'profile', component:ProfileComponent },
  { path: 'login', component:LoginComponent },


]
