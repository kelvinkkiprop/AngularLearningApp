import { Component, Input } from "@angular/core";


@Component({
  selector: 'collapsable-well',
  template: `<div (click)="toggleContent()" class="card">
    <h1 class="card-title">{{title}}</h1>
    <ng-content *ngIf="visible"></ng-content>
  </div>`
})

export class collapsableWellComponent{
  @Input() title!: string;
  visible: boolean = false;


  toggleContent(){
    this.visible = !this.visible
  }

}
