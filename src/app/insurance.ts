export interface MotorInsuranceModel {
    id: number;
    vehicleNumber: string;
    identityNo: String;
    email: string
}

export interface TravelInsuranceModel {
    id: number;
    travellerName: string;
    email: string
    countryOfTravel: string;
    travelPeriod: number;
}