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
  private carsApi = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes";

  private mapBrands(brands: any[]): CarBrand[] {
    return brands.map(brand => ({
      code: brand.make_id,
      name: brand.make_display
    }));
  }
  public getBrandsAsync(): Observable<CarBrand[]> {
    return this.httpClient.jsonp(this.carsApi, 'callback')
      .pipe(
        map((res: any) => this.mapBrands(res.Makes))
      );
  }

  public async getBrands(): Promise<CarBrand[]> {
    let carsBrands: CarBrand[] = [];

    setTimeout(() => {
      carsBrands.push({ code: "DVA7700", name: "Mustang" });
      carsBrands.push({ code: "CID123", name: "Ferrari" });
      carsBrands.push({ code: "HEL4567", name: "Subaru" });
      carsBrands.push({ code: "DRX", name: "Volvo" });
    }, 3000);
    return carsBrands; 
  }

}
