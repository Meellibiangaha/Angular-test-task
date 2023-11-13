import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'

import { ReactiveFormsModule } from '@angular/forms';

import { ProfilePageComponent } from './components/profile-page.component';
import { ProfileEditComponent } from './components/UI/profile-edit/profile-edit.component'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'



const routes: Routes = [
    { path: '', component: ProfilePageComponent },
];


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        
        MatCardModule,

        
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        ProfilePageComponent,
        ProfileEditComponent
    ]
})
export class ProfilePageModule { }