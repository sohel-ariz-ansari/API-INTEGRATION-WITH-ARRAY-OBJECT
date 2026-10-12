import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DashboardComponent } from './app/dashboard-component/dashboard-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-dashboard-component></app-dashboard-component>`,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
