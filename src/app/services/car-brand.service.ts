import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CarBrand } from '../models/carBrand';

interface CarResponse {
  Makes: Array<any>;
}
@Injectable({
  providedIn: 'root'
})
export class CarBrandService {

  constructor(private httpClient: HttpClient) { }
  private INSURANCE_API = 'http://localhost:9000';
    
  get(): Observable<CarBrand[]> {
    return this.httpClient.get<CarBrand[]>(this.INSURANCE_API + '/api/carBrands');
  }

}
