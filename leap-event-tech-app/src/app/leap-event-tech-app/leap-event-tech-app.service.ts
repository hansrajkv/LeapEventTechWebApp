import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from './models/events';
import { TopEventSales } from './models/top-event-sales';

@Injectable({ providedIn: 'root' })
export class LeapEventTechAppService {
  private http = inject(HttpClient);
  private base = 'https://localhost:44346';

  getEvents(days: 30|60|180 = 30): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.base}/api/events`, { params: { days } as any });
  }

  getTop5(by: 'count'|'amount'): Observable<TopEventSales[]> {
    return this.http.get<TopEventSales[]>(`${this.base}/api/tickets/top5`, { params: { by } });
  }
}
