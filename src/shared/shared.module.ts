import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProfileService } from './services';
@NgModule({
    imports: [
        CommonModule,
        MatSnackBarModule
    ],
    providers: [
        ProfileService
    ],
    declarations: []
})
export class SharedModule { }
