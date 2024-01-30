import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceformComponent } from './insuranceform/insuranceform.component';

export const routes: Routes = [
    {
       path: '',
       component: InsuranceformComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
