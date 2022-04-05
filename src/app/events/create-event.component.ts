import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create Event Form will go here]</h3><br/><br/>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="submit" class="mx-2 btn btn-secondary" (click)="goBackCancel()">Cancel</button>
    </div>
  `

})
export class CreateEventComponent{

  //Variables
  isDirty:boolean = false

  //Injections
  constructor(private router: Router){

  }

  //Functions
  goBackCancel(){
    //Go back
    this.router.navigate(['/events'])

  }

}
