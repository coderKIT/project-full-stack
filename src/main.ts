import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';
import { InsuranceformComponent } from './app/insuranceform/insuranceform.component';

bootstrapApplication(InsuranceformComponent, appConfig)
   .catch((err) => console.error(err));
