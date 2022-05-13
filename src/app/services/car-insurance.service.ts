import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../componets/commons/globalConstants';
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
    this.initIndexedDb();
  }

  private db: any;// Dexie = new Dexie('db-insurances');
  private table: any;// Dexie.Table<CarInsurance, any> = this.db.table('insurance');

  listenConnectionStatus() {
    this.onlineOfflineService.connectionStatus.subscribe(online => {
      if (online) {
        this.sendIndexedDbApi();
      } else {
        console.log("I'm offline");
      }
    });
  }

  initIndexedDb() {
    this.db = new Dexie('db-insurances');
    this.db.version(1).stores({
      insurance: 'id'
    });

    this.table = this.db.table('insurance');
  }

  save(insurance: CarInsurance) {
    if (this.onlineOfflineService.isOline) {
      this.saveApi(insurance);
    } else {
      this.saveIndexedDb(insurance);
    }
  }
  get(): Observable<CarInsurance[]> {
    return this.httpClient.get<CarInsurance[]>(GlobalConstants.INSURANCE_API_URL + '/api/insurances');
  }

  private saveApi(insurance: CarInsurance) {
    this.httpClient.post(GlobalConstants.INSURANCE_API_URL + '/api/insurances', insurance)
      .subscribe({
        next: (r) => {
          alert('Insurance registered')
        },
        error: (e) => alert('Error, Insurance not registered: ' + JSON.stringify(e))
      });
  }

  private async saveIndexedDb(insurance: CarInsurance) {
    try {
      await this.table.add(insurance);
      const allInsurances: CarInsurance[] = await this.table.toArray();
      console.log("Insurance saved to indexedDb", allInsurances);

    } catch (error) {
      console.log("Error inserting data to indexedDb");
    }
  }

  private async sendIndexedDbApi() {
    const allInsurances: CarInsurance[] = await this.table.toArray();

    for (const insurance of allInsurances) {
      this.saveApi(insurance);
      await this.table.delete(insurance.id);
      console.log("Data deleted successfully");

    }
  }
}
