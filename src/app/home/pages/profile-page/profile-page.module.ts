import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared'
import {MatCardModule} from '@angular/material/card';

import { ProfilePageComponent } from './components/profile-page.component'


const routes: Routes = [
    { path: '', component: ProfilePageComponent },
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule,
        MatCardModule
    ],
    declarations: [
        ProfilePageComponent
    ]
})
export class ProfilePageModule { }