import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Events } from './models/events';

type SortKey = 'startsOn' | 'name';
type SortDir = 'asc' | 'desc';

@Component({
  selector: 'leap-event-tech-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './leap-event-tech-app.component.html',
  styleUrl:'./leap-event-tech-app.component.css'
})
export class LeapEventTechAppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  // adjust this to your backend URL
  private base = 'https://localhost:44346';

  events = signal<Events[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  sortKey = signal<SortKey>('startsOn');
  sortDir = signal<SortDir>('asc');

  sorted = computed(() => {
    const key = this.sortKey();
    const dir = this.sortDir();
    return [...this.events()].sort((a, b) => {
      const av = key === 'startsOn' ? a.startsOn : a.name;
      const bv = key === 'startsOn' ? b.startsOn : b.name;
      const cmp = av.localeCompare(bv);
      return dir === 'asc' ? cmp : -cmp;
    });
  });

  ngOnInit(): void {
    this.fetch();
  }

  fetch(days: 30 | 60 | 180 = 60) {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Events[]>(`${this.base}/api/events`, { params: { days } as any })
      .subscribe({
        next: data => this.events.set(data),
        error: err => this.error.set(err?.error?.detail ?? err?.message ?? 'Failed to load events'),
        complete: () => this.loading.set(false),
      });
  }

  setSort(k: SortKey) {
    if (this.sortKey() === k) {
      this.sortDir.set(this.sortDir() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortKey.set(k);
      this.sortDir.set('asc');
    }
  }
}
