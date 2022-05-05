import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarBrand } from 'src/app/models/carBrand';
import { CarBrandService } from 'src/app/services/car-brand.service';
import { CarInsuranceService } from 'src/app/services/car-insurance.service';
import { CarInsurance } from './../../models/carInsurance'

@Component({ 
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private carBrandService: CarBrandService,
    private carInsuranceService: CarInsuranceService,
  ) { }

  public insurance: CarInsurance = new CarInsurance();
  public carsBrands$: Observable<CarBrand[]> | undefined;

  ngOnInit(): void {
    this.carsBrands$ = this.carBrandService.get();
  }

  public save() {
    this.carInsuranceService.save(this.insurance);
   }
  public enviarNotificacao() { }
}
