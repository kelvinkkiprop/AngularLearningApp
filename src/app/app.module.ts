import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//imports
import { MainAppComponent } from './main-app.component';
// import { EventsListComponent } from './events/events-list.component';
// import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './events/nav/navbar.components';
// import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
// import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.components';
// import { EventRouteActivator } from './events/event-details/event-route-activator.service';
// import { EventListResolver } from './events/events-list-resolver.service';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
  } from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { collapsableWellComponent } from './common/collapsable-well.component';

//Modules
@NgModule({
  //Add all modules to declarations to avoid errors
  declarations: [
    MainAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    collapsableWellComponent,
    CreateSessionComponent
  ],
  //Add
  // exports: [SessionListComponent, CreateSessionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //Routes
    RouterModule.forRoot(appRoutes)
  ],
  //Services
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  //Boostraping
  bootstrap: [MainAppComponent],
})
export class AppModule { }

//Custom functions
export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm("You have not saved this event, do you really want to cancel?")
  }else{
    return true;
  };
}
