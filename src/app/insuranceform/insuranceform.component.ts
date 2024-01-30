import { Component, OnInit } from '@angular/core';
import { MotorInsuranceModel, TravelInsuranceModel } from '../insurance';
import { InsuranceService } from '../insurance.service'
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './insuranceform.component.html',
  styleUrl: './insuranceform.component.css',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NgbModule]
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
        console.log(response);
        this.motorInsurances = response;
     },(error: HttpErrorResponse) => {
      console.log(error.message);
      alert(error.message);
    },
    )
    this.insuranceService.getTravelInsurance().subscribe(
      (response: TravelInsuranceModel[]) => {
        console.log(response);
        this.travelInsurances = response;
      },(error: HttpErrorResponse) => {
        console.log(error.message);
        alert(error.message);
      },
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
          console.log(error.message);
          alert(error.message);
        },
      );
      
  }
}
