import { Component, OnInit } from '@angular/core';
import { MotorInsuranceModel, TravelInsuranceModel } from '../insurance';
import { InsuranceService } from '../insurance.service'
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-insuranceform',
  standalone: false,
  templateUrl: './insuranceform.component.html',
  styleUrl: './insuranceform.component.css'
})
export class InsuranceformComponent implements OnInit{
  public motorInsurances: MotorInsuranceModel[] = [];
  public travelInsurances: TravelInsuranceModel[] = [];
  public displayInsuranceHeader = "INSURANCE";

  constructor(private insuranceService : InsuranceService) {}
  ngOnInit() {
    this.getInsurances();
  }

  public getInsurances() : void {
    this.insuranceService.getMotorInsurance().subscribe(
     (response: MotorInsuranceModel[]) => {
        this.motorInsurances = response;
     }
    )
    this.insuranceService.getTravelInsurance().subscribe(
      (response: TravelInsuranceModel[]) => {
        this.travelInsurances = response;
      }
    )
  }
  
  public showInsuranceType(insuranceType : string): void {
    if (insuranceType === 'motor') {
        this.displayInsuranceHeader = 'MOTOR INSURANCE';
    } else if (insuranceType === 'travel') {
      this.displayInsuranceHeader = 'TRAVEL INSURANCE';
  } 
  }

  public onAddMotorInsurance(addMotorInsuranceForm : NgForm): void {
      this.insuranceService.addMotorInsurance(addMotorInsuranceForm.value).subscribe(
        (response: MotorInsuranceModel) => {
          console.log(response);
          this.getInsurances();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        },
      );
  }
}
