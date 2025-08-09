import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopEventSales } from '../leap-event-tech-app/models/top-event-sales';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sales-summary',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './sales-summary.component.html',
  styleUrl: './sales-summary.component.css'
})
export class SalesSummaryComponent implements OnInit {
  constructor(private http: HttpClient) {}

  private base = 'https://localhost:44346';

  byCount = signal<TopEventSales[] | null>(null);
  byAmount = signal<TopEventSales[] | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<TopEventSales[]>(`${this.base}/api/tickets/top5`, { params: { by: 'count' } })
      .subscribe({
        next: x => this.byCount.set(x),
        error: err => this.error.set(err?.error?.detail ?? err?.message ?? 'Failed to load sales (count)'),
      });

    this.http.get<TopEventSales[]>(`${this.base}/api/tickets/top5`, { params: { by: 'amount' } })
      .subscribe({
        next: x => this.byAmount.set(x),
        error: err => this.error.set(err?.error?.detail ?? err?.message ?? 'Failed to load sales (amount)'),
        complete: () => this.loading.set(false),
      });
  }

  dollars(cents: number) { return (cents / 100).toFixed(2); }
}
