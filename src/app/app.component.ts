import { Component } from '@angular/core';

import { AuthService } from 'core/services';
import { UserData } from 'shared/models/userData.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent { 
    authenticatedUser!: UserData | null;

    constructor(private authService: AuthService) {}
  
    ngOnInit(): void {
      this.authenticatedUser = this.authService.getAuthenticatedUser();
    }
}
