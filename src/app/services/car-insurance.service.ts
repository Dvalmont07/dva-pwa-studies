import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarInsurance } from '../models/carInsurance';

@Injectable({
  providedIn: 'root'
})
export class CarInsuranceService {

  constructor(private httpClient: HttpClient) { }
  private INSURANCE_API = 'http://localhost:9000';

  register(insurance: CarInsurance) {
    this.httpClient.post(this.INSURANCE_API + '/api/insurances', insurance)
      .subscribe({
        next: (r) => {
          alert('Insurance registered')
        },
        error: (e) => alert('Error, Insurance not registered: ' + JSON.stringify(e))
      });
  }
  get(): Observable<CarInsurance[]> {
    return this.httpClient.get<CarInsurance[]>(this.INSURANCE_API + '/api/insurances');
  }
}
