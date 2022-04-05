import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: 'event-detail.component.html',
  styles: [`
    .event-image: { height: 100px; }
  `]
})

export class EventDetailsComponent {

  //Declare variables
  mEvent:any

  constructor (private eventService: EventService, private route:ActivatedRoute){

  }

  //Methods
  ngOnInit(){
    //Set
    this.mEvent = this.eventService.getOneEvent(+this.route.snapshot.params['id'])//cast to number by adding +
  }

}
