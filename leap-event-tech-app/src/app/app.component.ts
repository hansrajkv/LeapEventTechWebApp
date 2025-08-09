import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeapEventTechAppComponent } from './leap-event-tech-app/leap-event-tech-app.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,LeapEventTechAppComponent, SalesSummaryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leap-event-tech-app';
}
