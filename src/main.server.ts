import { bootstrapApplication } from '@angular/platform-browser';
import { InsuranceformComponent } from './app/insuranceform/insuranceform.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(InsuranceformComponent, config);

export default bootstrap;
