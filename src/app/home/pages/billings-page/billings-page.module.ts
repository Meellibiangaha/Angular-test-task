import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared'

import { BillingsPageComponent } from './components/billings-page.component'


const routes: Routes = [
    { path: '', component: BillingsPageComponent },
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [
        BillingsPageComponent
    ]
})
export class BillingModule { }