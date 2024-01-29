import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MotorInsuranceModel, TravelInsuranceModel } from './insurance';
import { environment } from './environments/environment';

@Injectable({providedIn: 'root'})
export class InsuranceService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getMotorInsurance(): Observable<MotorInsuranceModel[]> {
        return this.http.get<MotorInsuranceModel[]>(`${this.apiServerUrl}/insurance/findmotorinsurance/id`)
    }

    public getTravelInsurance(): Observable<TravelInsuranceModel[]> {
        return this.http.get<TravelInsuranceModel[]>(`${this.apiServerUrl}/insurance/findtravelinsurance/id`)
    }

    public addMotorInsurance(motorInsurance : MotorInsuranceModel): Observable<MotorInsuranceModel> {
        return this.http.post<MotorInsuranceModel>(`${this.apiServerUrl}/insurance/addinsurance/{insuranceType}`, motorInsurance)
    }

    public addTravelInsurance(travelInsurance : TravelInsuranceModel): Observable<TravelInsuranceModel> {
        return this.http.post<TravelInsuranceModel>(`${this.apiServerUrl}/insurance/addinsurance/{insuranceType}`, travelInsurance)
    }

    public addInsurance(motorInsurance : MotorInsuranceModel, travelInsurance : TravelInsuranceModel, insuranceType : String): Observable<void> {
         switch(insuranceType) {
            case "motor" :
            return this.http.post<void>(`${this.apiServerUrl}/insurance/addinsurance/motor`, motorInsurance)
            case "travel" :
            return this.http.post<void>(`${this.apiServerUrl}/insurance/addinsurance/travel`, travelInsurance)
            default :
            return throwError("ERROR IN ADDING INSURANCE TYPE: " + insuranceType);
        } 
    }
}