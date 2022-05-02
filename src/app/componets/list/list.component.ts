import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarInsurance } from 'src/app/models/carInsurance';
import { CarInsuranceService } from 'src/app/services/car-insurance.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private carInsuranceSevice: CarInsuranceService
  ) { }

  public insurances$: Observable<CarInsurance[]> | undefined;

  ngOnInit(): void {
    this.insurances$ = this.carInsuranceSevice.get();
  }

}
