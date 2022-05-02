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

  constructor() { }
  public getBrands(): CarBrand[] {
    let carsBrands : CarBrand[]= [];
    carsBrands.push({code:"DVA7700",name:"Mustang"});
    carsBrands.push({code:"CID123",name:"Ferrari"});
    carsBrands.push({code:"HEL4567",name:"Subaru"});
    carsBrands.push({code:"DRX",name:"Volvo"});
    return carsBrands;
  }

}
