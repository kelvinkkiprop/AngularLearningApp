import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

//Component
@Component({
  template:`
<div>
  <h3>Upcoming Events</h3>
    <hr>
    <div class="row">
      <div *ngFor="let item of mEvents" class="col-md-6">
        <event-thumbnail (click)="handleThumbnailClick(item.name)" [event]="item"></event-thumbnail>
      </div>
    </div>
</div>
  `
})

//Export
export class EventsListComponent implements OnInit {

  //Variables
  mEvents: any
  mToastr: any;

  //Call service
  constructor(private eventService: EventService, private toastrService: ToastrService,
    private route:ActivatedRoute){
    //Initialize
    this.mEvents = []
    this.mToastr = toastrService
  }

  ngOnInit(): void {
    //Set
    // this.mEvents = this.eventService.getAllEvents()
  //  this.eventService.getAllEvents().subscribe( mEvents=>{this.mEvents = mEvents})

    //Data is tied to our route using resolver
    this.mEvents = this.route.snapshot.data['mEvents']

  }


  //Functions
  handleEventClicked(data: any){//Receive data from child
    console.log("Received:", data)
  }

  handleThumbnailClick(eventName: any){
    //Show toast
    this.mToastr.success(eventName, "Success")
  }

}
