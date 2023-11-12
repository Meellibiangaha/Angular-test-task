import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared'
import {MatTableModule} from '@angular/material/table';

import { HomePageComponent } from './components/home-page.component';


const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule,
        MatTableModule
    ],
    declarations: [
        HomePageComponent,
    ]
})
export class HomeModule { }
