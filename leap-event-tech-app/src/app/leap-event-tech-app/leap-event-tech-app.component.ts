import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Events } from './models/events';
import { RouterLink, RouterModule, Routes } from '@angular/router';

type SortKey = 'startsOn' | 'name';
type SortDir = 'asc' | 'desc';

@Component({
  selector: 'leap-event-tech-app',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './leap-event-tech-app.component.html',
  styleUrl:'./leap-event-tech-app.component.css'
})
export class LeapEventTechAppComponent implements OnInit {
  events: any[] = [];
  loading = false;
  error: string | null = null;
  sortDirection: boolean = true; 
  currentSort: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetch(30);
  }

  fetch(days: number) {
    this.loading = true;
    this.error = null;
    this.http.get<any[]>(`https://localhost:44346/api/events?days=${days}`)
      .subscribe({
        next: (data) => this.events = data,
        error: (err) => this.error = 'Failed to load events',
        complete: () => this.loading = false
      });
  }

  sortData(column: string) {
    this.currentSort = column;
    this.sortDirection = !this.sortDirection;
    this.events.sort((a, b) => {
      if (a[column] < b[column]) return this.sortDirection ? -1 : 1;
      if (a[column] > b[column]) return this.sortDirection ? 1 : -1;
      return 0;
    });
  }

}
