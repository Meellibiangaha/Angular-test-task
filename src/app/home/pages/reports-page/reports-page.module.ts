import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared'

import { ReportsPageComponent } from './components/reports-page.component'


const routes: Routes = [
    { path: '', component: ReportsPageComponent },
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [
        ReportsPageComponent
    ]
})
export class ReportsModule { }