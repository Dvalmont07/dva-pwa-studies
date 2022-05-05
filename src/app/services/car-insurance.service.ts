import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarInsurance } from '../models/carInsurance';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root'
})
export class CarInsuranceService {

  constructor(
    private httpClient: HttpClient,
    private onlineOfflineService: OnlineOfflineService,
  ) {
    this.listenConnectionStatus();
  }

  listenConnectionStatus() {
    this.onlineOfflineService.connectionStatus.subscribe(online => {
      if (online) {
        console.log("sending local data to DB");

      } else {
        console.log("I'm offline");

      }
    });
  }
  private INSURANCE_API = 'http://localhost:9000';

  save(insurance: CarInsurance) {
    if (this.onlineOfflineService.isOline) {
      this.saveApi(insurance);
    } else {
      console.log("Save insurance to local DB");
    }
  }
  get(): Observable<CarInsurance[]> {
    return this.httpClient.get<CarInsurance[]>(this.INSURANCE_API + '/api/insurances');
  }

  private saveApi(insurance: CarInsurance) {
    this.httpClient.post(this.INSURANCE_API + '/api/insurances', insurance)
      .subscribe({
        next: (r) => {
          alert('Insurance registered')
        },
        error: (e) => alert('Error, Insurance not registered: ' + JSON.stringify(e))
      });
  }
}
