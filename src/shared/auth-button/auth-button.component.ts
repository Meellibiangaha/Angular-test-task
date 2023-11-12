import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginDialogComponent } from 'app/auth/login-dialog/login-dialog.component';
import { AuthService } from 'core/services';


@Component({
  selector: 'auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.less']
})
export class AuthButtonComponent {
  
  constructor(private authService: AuthService, public dialog: MatDialog) {}
  
  public openDialog(){
      const dialogRef = this.dialog.open(LoginDialogComponent, {
          width: '420px'
      });
  }
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  
  public onClick() {
    if (this.isLoggedIn) {
      this.authService.logout();
    } else {
      this.openDialog()
    }
  }
  
}