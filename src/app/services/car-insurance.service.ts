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

  register(insurance: CarInsurance){
    this.httpClient.post(this.INSURANCE_API + '/api/insurances', insurance)
    .subscribe(
      ()=> alert('Insurance registered'),
      (e)=> alert('Error, Insurance not registered: ' + e)
    );
  }
  get():Observable<CarInsurance[]>{
    return this.httpClient.get<CarInsurance[]>(this.INSURANCE_API + '/api/insurances');
  }
}
