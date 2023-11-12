import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginDialogComponent } from './login-dialog.component';

const MAT_DIALOG_IMPORTS =
    [
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ];

@NgModule({
  declarations: [LoginDialogComponent],
  imports: [
    CommonModule,
    MAT_DIALOG_IMPORTS
  ]
})
export class LoginDialogModule { }
