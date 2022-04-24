import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .event-image: { height: 100px; }
    a {cursor:pointer}
  `]
})

export class EventDetailsComponent {

  //Declare variables
  mEvent:any
  addMode: boolean = false;

  constructor (private eventService: EventService, private route:ActivatedRoute){

  }

  //FUNCTIONS
  //ngOnInit
  ngOnInit(){
    //Set
    this.mEvent = this.eventService.getOneEvent(+this.route.snapshot.params['id'])//cast to number by adding +
  }

  //addSession
  addSession(){
    this.addMode = true
  }

}
