import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core"; 
import { InsuranceService } from "./insurance.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { InsuranceformComponent } from "./insuranceform/insuranceform.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        FormsModule
            ],
    providers: [InsuranceService,HttpClientModule],
    exports:[],
    bootstrap: []
})
export class AppModule {}