import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GlobalConstants } from '../componets/commons/globalConstants';
import { CarBrand } from '../models/carBrand';

interface CarResponse {
  Makes: Array<any>;
}
@Injectable({
  providedIn: 'root'
})
export class CarBrandService {

  constructor(private httpClient: HttpClient) { }    
  get(): Observable<CarBrand[]> {
    return this.httpClient.get<CarBrand[]>(GlobalConstants.INSURANCE_API_URL + '/api/carBrands');
  }

}
