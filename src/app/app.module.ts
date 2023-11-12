import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginDialogModule } from './auth/login-dialog/login-dialog.module';
import { HeaderComponent } from './home/header/header.component';
import { AuthButtonComponent } from '../shared/auth-button/auth-button.component';

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
    declarations: [
        AppComponent,
        HeaderComponent,
        AuthButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        BrowserAnimationsModule,

        ReactiveFormsModule,
        FormsModule,

        MAT_DIALOG_IMPORTS,

        LoginDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
