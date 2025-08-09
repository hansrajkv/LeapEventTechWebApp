import { Routes } from '@angular/router';
import { LeapEventTechAppComponent } from './leap-event-tech-app/leap-event-tech-app.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: LeapEventTechAppComponent, title: 'Events' },
  { path: 'sales-summary', component: SalesSummaryComponent, title: 'Sales Summary' },
];
