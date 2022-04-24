import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.components";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";
import { CreateSessionComponent } from "./events";

//Routes
export const appRoutes:Routes = [
  //Errors
  { path: '404', component: Error404Component },

  //Session
  { path: 'events/session/new', component:CreateSessionComponent},

  //Event
  { path: 'events', component:EventsListComponent, resolve:{mEvents: EventListResolver} },//Call resolver before data
  { path: 'events/create', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
  { path: 'events/:id', component:EventDetailsComponent, canActivate:[EventRouteActivator] },

  //Default
  { path: '', redirectTo: '/events', pathMatch: 'full' },


  //User prefix routes
  { path: 'user', loadChildren: () =>import('./user/user.modules') .then(m => m.UserModule) }


]
