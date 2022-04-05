import { Component } from '@angular/core';

@Component({
  selector: 'main-app-root',
  template: `<nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class MainAppComponent {
  title = 'Angular-Learning-App';
}
