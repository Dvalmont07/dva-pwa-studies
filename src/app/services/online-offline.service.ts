import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineOfflineService {

  constructor() {
    window.addEventListener('online', () => this.updateConnectionStatus());
    window.addEventListener('offline', () => this.updateConnectionStatus());
  }

  private connectionStatus$ = new Subject<boolean>();

  get isOline(): boolean {
    return !!window.navigator.onLine;
  }

  get connectionStatus(): Observable<boolean> {
    return this.connectionStatus$.asObservable();
  }

  updateConnectionStatus() {
    this.connectionStatus$.next(this.isOline);
  }
}
