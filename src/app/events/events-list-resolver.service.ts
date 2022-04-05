import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";
import { map } from "rxjs/operators";


@Injectable()
export class EventListResolver implements Resolve<any>{

  constructor (private eventService: EventService){

  }

  //Resolver
  resolve() {
    return this.eventService.getAllEvents().pipe(map(mEvents=>mEvents))
  }

}

