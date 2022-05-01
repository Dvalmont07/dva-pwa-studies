import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarBrand } from 'src/app/models/carBrand';
import { CarBrandService } from 'src/app/services/car-brand.service';
import { CarInsurance } from './../../models/carInsurance'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private carBrandService: CarBrandService) { }

  public insurance: CarInsurance = {
    carBrand: {
      code: "",
      name: ""
    },
    carModel: "",
    carPlate: "",
    ownerName: ""
  };
  public marcasCarro$: Observable<CarBrand[]> | undefined;
  ngOnInit(): void {
    this.marcasCarro$ = this.carBrandService.getBrands();
  }

  public adicionar() { }
  public enviarNotificacao() { }

}
