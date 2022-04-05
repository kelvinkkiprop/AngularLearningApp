import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="card card-body p-3 mb-3">
    <h4>{{event?.name}}</h4>
    <div>Date: {{event?.date}}</div>
    <div
    [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location.address}}</span>
      <span class="pad-left">&nbsp;</span>
      <span>{{event?.location.city}}, {{event?.location.country}}</span>
    </div>
    <div [hidden]="!event?.onlineUrl">
      Online URL: {{event?.onlineUrl}}
    </div>
  </div>
  `,
  styles: [`
    .pad-left{ margin-left: 10px; }
    .card{ color: #bbb; }
    .green {color:#003300 !important}
    .bold { font-weight: bold !important}
    `
  ]
})

//Export
export class EventThumbnailComponent{

  //Communicating with child
  @Input() event:any
  someProperty:any = "Some value"

  //Communicating with parent using event emmiter
  @Output() eventClick = new EventEmitter()


  //Functions
  handleClickMe(){
    // console.log("clicked!")
    this.eventClick.emit(this.event.name)
  }
  logFoo(){//Using template variables
    console.log('foo')
  }
  getStartTimeClass(){
    if(this.event && this.event.time === '8:00 am'){
      return ['green', 'bold']
    }else{
      return ''
    }
  }
  getStartTimeStyle():any{
    if(this.event && this.event.time === '10:00 am'){
      return {color: 'red', 'font-weight':'bold'}
    }else{
      return {}
    }
  }
}
