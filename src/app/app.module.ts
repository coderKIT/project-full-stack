import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core"; 
import { InsuranceService } from "./insurance.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { InsuranceformComponent } from "./insuranceform/insuranceform.component";

@NgModule({
    declarations: [InsuranceformComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        FormsModule
            ],
    providers: [InsuranceService,HttpClientModule],
    bootstrap: [InsuranceformComponent]
})
export class AppModule {}