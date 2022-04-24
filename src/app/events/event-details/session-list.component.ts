import { Component, Input } from "@angular/core";
import { ISession } from "../shared";


@Component({
  selector: 'sessions-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent{
  //Pass data
  @Input() sessions: any = [];

}
